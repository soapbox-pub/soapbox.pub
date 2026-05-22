/**
 * Live featured-campaigns feed for the /agora landing page.
 *
 * Mirrors how Agora itself surfaces featured campaigns
 * (see /projects/agora/src/lib/agoraModeration.ts and
 * /projects/agora/src/pages/CampaignsPage.tsx):
 *
 *  1. Resolve the Team Soapbox follow pack (kind 39089) to a list of
 *     moderator pubkeys. These are the only signers whose `featured`
 *     labels we honor.
 *  2. Query NIP-32 label events (kind 1985) in the `agora.moderation`
 *     namespace, authored by those moderators, with an `a` tag pointing
 *     at a campaign coordinate (`33863:<pubkey>:<d>`).
 *  3. Fold the labels per-coordinate: newest label per axis wins. Keep
 *     coords whose latest `featured` label is `featured` (not
 *     `unfeatured`) and that are not also `hidden`.
 *  4. Fetch the actual kind 33863 campaign events for those coords.
 *  5. For each campaign, count donation receipts (kind 8333 events
 *     pointing at the campaign via `#a`) and sum the self-reported
 *     `amount` tag values. This is the same first-pass total Agora's
 *     own UI shows before on-chain verification finishes.
 *
 * Marketing-side tradeoff: we do NOT verify each donation against the
 * Bitcoin blockchain via Esplora. The displayed total is therefore the
 * self-reported amount, which Agora caps to the verified amount during
 * its own render. On this landing page the number is approximate and
 * labeled "raised" with no verification claim.
 */

import { useQuery } from '@tanstack/react-query';
import type { NostrEvent, NostrFilter } from '@nostrify/nostrify';
import { useNostr } from '@/hooks/useNostr';

// ───────────────────────────────────────────────────────────────────────────
// Constants
// ───────────────────────────────────────────────────────────────────────────

/** NIP-32 label event kind. */
const LABEL_KIND = 1985;

/** Agora's moderation label namespace. */
const AGORA_MODERATION_NAMESPACE = 'agora.moderation';

/** Addressable kind for fundraising campaigns. */
const CAMPAIGN_KIND = 33863;

/** NIP-51 follow pack kind. */
const FOLLOW_PACK_KIND = 39089;

/** Donation receipt kind. */
const DONATION_RECEIPT_KIND = 8333;

/** Team Soapbox follow pack coordinates (the authoritative moderator pubkey list). */
const TEAM_SOAPBOX_PACK = {
  kind: FOLLOW_PACK_KIND,
  pubkey: '932614571afcbad4d17a191ee281e39eebbb41b93fac8fd87829622aeb112f4d',
  identifier: 'k4p5w0n22suf',
} as const;

/**
 * Relays Agora itself reads from and writes to. We use a relay group
 * to maximize the chance of seeing the labels, campaign events, and
 * donation receipts even if Soapbox's default-configured relay doesn't
 * carry them.
 */
const AGORA_RELAYS = [
  'wss://relay.ditto.pub/',
  'wss://relay.dreamith.to/',
  'wss://relay.primal.net/',
];

/** Cap on how many featured campaigns we render in the row. */
export const MAX_FEATURED_CAMPAIGNS = 4;

// ───────────────────────────────────────────────────────────────────────────
// Public types
// ───────────────────────────────────────────────────────────────────────────

/**
 * A parsed campaign with the live donation rollup attached. Fields
 * mirror Agora's own `ParsedCampaign` plus the aggregated totals.
 */
export interface AgoraFeaturedCampaign {
  /** Addressable coordinate `33863:<pubkey>:<d>`. */
  aTag: string;
  /** Author / beneficiary pubkey (hex). */
  pubkey: string;
  /** Campaign `d` tag (slug). */
  identifier: string;
  /** Campaign title. */
  title: string;
  /** Short tagline. */
  summary: string;
  /** Sanitized HTTPS banner URL, or `undefined` if missing/invalid. */
  banner?: string;
  /** Whether this is a public (on-chain `bc1…`) or private (silent payments `sp1…`) campaign. */
  mode: 'public' | 'private';
  /** Fundraising goal in whole USD, if set. */
  goalUsd?: number;
  /** ISO 3166-1 alpha-2 country code, if tagged. */
  countryCode?: string;
  /** When the moderator labeled this campaign as featured (Unix seconds). */
  featuredAt: number;
  /** Total self-reported sats raised across donation receipts. Zero for private campaigns. */
  raisedSats: number;
  /** Unique donor count. */
  donorCount: number;
  /** Naddr1-encoded coordinate for linking out to agora.spot. */
  naddr: string;
}

// ───────────────────────────────────────────────────────────────────────────
// Helpers
// ───────────────────────────────────────────────────────────────────────────

function getTagValue(event: NostrEvent, name: string): string | undefined {
  return event.tags.find(([n]) => n === name)?.[1];
}

/**
 * Parse a kind 33863 campaign event into the subset of fields needed
 * for a landing-page card. Returns `null` if the event is malformed or
 * uses an unsupported wallet mode.
 */
function parseCampaignEvent(event: NostrEvent): Pick<
  AgoraFeaturedCampaign,
  'aTag' | 'pubkey' | 'identifier' | 'title' | 'summary' | 'banner' | 'mode' | 'goalUsd' | 'countryCode'
> | null {
  if (event.kind !== CAMPAIGN_KIND) return null;

  const identifier = getTagValue(event, 'd');
  const title = getTagValue(event, 'title');
  if (!identifier || !title) return null;

  const wallet = getTagValue(event, 'w');
  if (!wallet) return null;

  // Determine campaign mode from the wallet bech32 prefix.
  // - bc1q… / bc1p… → public on-chain
  // - sp1… → private (BIP-352 silent payments)
  let mode: 'public' | 'private';
  if (/^bc1[qp]/i.test(wallet)) {
    mode = 'public';
  } else if (/^sp1/i.test(wallet)) {
    mode = 'private';
  } else {
    return null;
  }

  const rawBanner = getTagValue(event, 'banner');
  const banner =
    rawBanner && /^https:\/\//i.test(rawBanner) ? rawBanner : undefined;

  const goalRaw = getTagValue(event, 'goal');
  const goalUsd = goalRaw && /^\d+$/.test(goalRaw) ? parseInt(goalRaw, 10) : undefined;

  // Extract ISO-3166-1 alpha-2 country code from a NIP-73 `i` tag.
  let countryCode: string | undefined;
  for (const [name, value] of event.tags) {
    if (name !== 'i' || typeof value !== 'string') continue;
    // Match `iso3166-1:XX` (canonical NIP-73 prefix).
    const m = /^iso3166-1:([A-Z]{2})$/i.exec(value);
    if (m) {
      countryCode = m[1].toUpperCase();
      break;
    }
  }

  return {
    aTag: `${CAMPAIGN_KIND}:${event.pubkey}:${identifier}`,
    pubkey: event.pubkey,
    identifier,
    title: title.trim(),
    summary: (getTagValue(event, 'summary') ?? '').trim(),
    banner,
    mode,
    goalUsd,
    countryCode,
  };
}

/**
 * NIP-19 `naddr1…` encoder. We avoid a hard dep on nostr-tools here by
 * deferring to the same encoder Soapbox already uses elsewhere.
 */
async function encodeNaddr(
  kind: number,
  pubkey: string,
  identifier: string,
): Promise<string> {
  // nostr-tools is already a transitive dep via @nostrify/nostrify.
  // Dynamic import keeps the hook's static surface small.
  const { nip19 } = await import('nostr-tools');
  return nip19.naddrEncode({
    kind,
    pubkey,
    identifier,
    relays: AGORA_RELAYS,
  });
}

// ───────────────────────────────────────────────────────────────────────────
// Hook
// ───────────────────────────────────────────────────────────────────────────

/**
 * Live feed of moderator-featured Agora campaigns, ready to render
 * on the /agora landing page. Returns the top {@link MAX_FEATURED_CAMPAIGNS}
 * most-recently-labeled campaigns, with donation totals attached.
 *
 * Stale-while-revalidate is 5 minutes. The hook silently returns an
 * empty array on relay timeout or any other error so the landing page
 * can fall back to a generic CTA without surfacing a scary error UI.
 */
export function useAgoraFeaturedCampaigns() {
  const { nostr } = useNostr();

  return useQuery<AgoraFeaturedCampaign[]>({
    queryKey: ['agora-featured-campaigns'],
    queryFn: async (c) => {
      // Query a group of Agora-frequented relays rather than just the
      // currently-configured default. Falls back to the default group
      // if `.group()` isn't supported by this nostr implementation.
      const pool =
        typeof (nostr as { group?: unknown }).group === 'function'
          ? (nostr as unknown as {
              group: (urls: string[]) => typeof nostr;
            }).group(AGORA_RELAYS)
          : nostr;

      // Hard cap on the whole pipeline so a slow relay can't block the
      // landing page from rendering.
      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(6000)]);

      // ── Step 1: resolve the Team Soapbox follow pack ─────────────────
      const packEvents = await pool.query(
        [
          {
            kinds: [TEAM_SOAPBOX_PACK.kind],
            authors: [TEAM_SOAPBOX_PACK.pubkey],
            '#d': [TEAM_SOAPBOX_PACK.identifier],
            limit: 1,
          },
        ],
        { signal },
      );

      const packEvent = packEvents[0];
      if (!packEvent) return [];

      const moderators = packEvent.tags
        .filter(([n, v]) => n === 'p' && typeof v === 'string' && /^[0-9a-f]{64}$/i.test(v))
        .map(([, v]) => v);

      if (moderators.length === 0) return [];

      // ── Step 2: fetch label events from those moderators ─────────────
      const labelEvents = await pool.query(
        [
          {
            kinds: [LABEL_KIND],
            authors: moderators,
            '#L': [AGORA_MODERATION_NAMESPACE],
            limit: 500,
          },
        ],
        { signal },
      );

      // ── Step 3: fold per-coordinate. Newest label per axis wins. ─────
      interface AxisDecision {
        label: string;
        createdAt: number;
      }
      interface State {
        featured?: AxisDecision;
        hide?: AxisDecision;
      }
      const byCoord = new Map<string, State>();

      for (const ev of labelEvents) {
        // The `l` tag carries `[ "l", "<value>", "<namespace>" ]`.
        const l = ev.tags.find(
          ([n, , ns]) =>
            n === 'l' && ns === AGORA_MODERATION_NAMESPACE && typeof ns === 'string',
        );
        if (!l) continue;
        const value = l[1];
        if (typeof value !== 'string') continue;

        // Only honor labels that target a campaign coordinate.
        const aTag = ev.tags.find(
          ([n, v]) => n === 'a' && typeof v === 'string' && v.startsWith(`${CAMPAIGN_KIND}:`),
        )?.[1];
        if (!aTag) continue;

        const state = byCoord.get(aTag) ?? {};
        if (value === 'featured' || value === 'unfeatured') {
          if (!state.featured || ev.created_at > state.featured.createdAt) {
            state.featured = { label: value, createdAt: ev.created_at };
          }
        } else if (value === 'hidden' || value === 'unhidden') {
          if (!state.hide || ev.created_at > state.hide.createdAt) {
            state.hide = { label: value, createdAt: ev.created_at };
          }
        }
        byCoord.set(aTag, state);
      }

      // Keep coords whose latest featured label is `featured` AND that
      // aren't currently `hidden`. Sort by featured-at desc and cap.
      const featuredCoords: { coord: string; featuredAt: number }[] = [];
      for (const [coord, state] of byCoord) {
        if (state.featured?.label !== 'featured') continue;
        if (state.hide?.label === 'hidden') continue;
        featuredCoords.push({ coord, featuredAt: state.featured.createdAt });
      }
      featuredCoords.sort((a, b) => b.featuredAt - a.featuredAt);
      const top = featuredCoords.slice(0, MAX_FEATURED_CAMPAIGNS);

      if (top.length === 0) return [];

      // ── Step 4: fetch the actual kind 33863 events for those coords ──
      // Group by author so we can use cheap indexed `#d` filters server-side.
      const byAuthor = new Map<string, string[]>();
      for (const { coord } of top) {
        const parts = coord.split(':');
        if (parts.length < 3) continue;
        const authorPk = parts[1];
        const dTag = parts.slice(2).join(':');
        if (!authorPk || !dTag) continue;
        const list = byAuthor.get(authorPk) ?? [];
        list.push(dTag);
        byAuthor.set(authorPk, list);
      }

      const campaignFilters: NostrFilter[] = Array.from(byAuthor, ([author, dTags]) => ({
        kinds: [CAMPAIGN_KIND],
        authors: [author],
        '#d': dTags,
      }));

      const campaignEvents = await pool.query(campaignFilters, { signal });

      // Dedupe to the latest event per `(pubkey, d)` (relays may return
      // older revisions of an addressable event alongside the current).
      const latestByCoord = new Map<string, NostrEvent>();
      for (const ev of campaignEvents) {
        const d = getTagValue(ev, 'd');
        if (!d) continue;
        const key = `${ev.pubkey}:${d}`;
        const prev = latestByCoord.get(key);
        if (!prev || ev.created_at > prev.created_at) {
          latestByCoord.set(key, ev);
        }
      }

      const parsed: Array<
        ReturnType<typeof parseCampaignEvent> extends infer R
          ? R extends null
            ? never
            : R
          : never
      > = [];
      const parsedByCoord = new Map<
        string,
        NonNullable<ReturnType<typeof parseCampaignEvent>>
      >();
      for (const ev of latestByCoord.values()) {
        const p = parseCampaignEvent(ev);
        if (!p) continue;
        parsed.push(p);
        parsedByCoord.set(p.aTag, p);
      }

      // ── Step 5: fetch donation receipts for each campaign ────────────
      // Private campaigns don't publish receipts by design, so we skip
      // them in the receipts query.
      const publicCoords = parsed.filter((p) => p.mode === 'public').map((p) => p.aTag);

      let receiptsByCoord = new Map<string, NostrEvent[]>();
      if (publicCoords.length > 0) {
        const receiptEvents = await pool.query(
          [
            {
              kinds: [DONATION_RECEIPT_KIND],
              '#a': publicCoords,
              limit: 1000,
            },
          ],
          { signal },
        );
        receiptsByCoord = new Map();
        for (const ev of receiptEvents) {
          const aTag = ev.tags.find(([n]) => n === 'a')?.[1];
          if (!aTag || !publicCoords.includes(aTag)) continue;
          const list = receiptsByCoord.get(aTag) ?? [];
          list.push(ev);
          receiptsByCoord.set(aTag, list);
        }
      }

      // ── Assemble final result in featured-order, with naddr1 ─────────
      const result: AgoraFeaturedCampaign[] = [];
      for (const { coord, featuredAt } of top) {
        const p = parsedByCoord.get(coord);
        if (!p) continue;

        const receipts = receiptsByCoord.get(coord) ?? [];

        // Dedupe receipts by Bitcoin txid (`i bitcoin:tx:<txid>`).
        // Earliest receipt per txid wins. Sum self-reported amounts;
        // count unique donor pubkeys.
        const byTxid = new Map<string, NostrEvent>();
        for (const r of receipts) {
          const iTag = r.tags.find(
            ([n, v]) => n === 'i' && typeof v === 'string' && v.startsWith('bitcoin:tx:'),
          )?.[1];
          const txid = iTag?.slice('bitcoin:tx:'.length);
          if (!txid) continue;
          const existing = byTxid.get(txid);
          if (!existing || r.created_at < existing.created_at) {
            byTxid.set(txid, r);
          }
        }

        let raisedSats = 0;
        const donorPubkeys = new Set<string>();
        for (const r of byTxid.values()) {
          const amountStr = r.tags.find(([n]) => n === 'amount')?.[1];
          const amount = amountStr ? parseInt(amountStr, 10) : NaN;
          if (Number.isFinite(amount) && amount > 0) raisedSats += amount;
          donorPubkeys.add(r.pubkey);
        }

        const naddr = await encodeNaddr(CAMPAIGN_KIND, p.pubkey, p.identifier);

        result.push({
          ...p,
          featuredAt,
          raisedSats,
          donorCount: donorPubkeys.size,
          naddr,
        });
      }

      return result;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 10, // 10 minutes
    retry: 1,
  });
}

// ───────────────────────────────────────────────────────────────────────────
// Display helpers
// ───────────────────────────────────────────────────────────────────────────

/**
 * Format sats as a short, human-readable string. Mirrors Agora's
 * `formatSatsShort` so totals on the landing page read the same way
 * they do inside the app.
 */
export function formatSatsShort(sats: number): string {
  if (!Number.isFinite(sats) || sats <= 0) return '0 sats';
  if (sats >= 100_000_000) return `${(sats / 100_000_000).toFixed(2)} BTC`;
  if (sats >= 1_000_000) return `${(sats / 1_000_000).toFixed(2)}M sats`;
  if (sats >= 10_000) return `${(sats / 1_000).toFixed(0)}K sats`;
  return `${sats.toLocaleString()} sats`;
}

/** ISO 3166-1 alpha-2 code → flag emoji. */
export function countryCodeToFlag(code: string | undefined): string {
  if (!code || !/^[A-Z]{2}$/i.test(code)) return '';
  const base = 0x1f1e6;
  const A = 'A'.charCodeAt(0);
  return String.fromCodePoint(
    base + (code.charCodeAt(0) - A),
    base + (code.charCodeAt(1) - A),
  );
}
