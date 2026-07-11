/**
 * Live donation rollup for the four Venezuela earthquake relief
 * campaigns featured in the `venezuela-earthquake-relief-bitcoin`
 * blog post.
 *
 * Sums the self-reported sats across every public donation receipt
 * (kind 8333) that points at one of the four campaign coordinates,
 * then converts to USD using a live Bitcoin price so the blog post
 * can render a funding bar against the collective fund's $25,000 goal.
 *
 * Notes / tradeoffs:
 *  - Private (silent-payment) campaigns don't publish receipts by
 *    design, so their totals can't be included. The number shown is
 *    therefore the public, self-reported total — the same first-pass
 *    figure Agora's own UI shows before on-chain verification.
 *  - Receipts are deduped by Bitcoin txid so a donation counted under
 *    an individual campaign AND the collective fund isn't summed twice.
 *  - On any relay timeout or price-fetch failure the hook degrades
 *    gracefully (zero total, undefined price) so the CTA still renders.
 */

import { useQuery } from '@tanstack/react-query';
import type { NostrEvent } from '@nostrify/nostrify';
import { useNostr } from '@/hooks/useNostr';

/** Donation receipt kind. */
const DONATION_RECEIPT_KIND = 8333;

/** Collective fund goal, in whole USD. */
export const RELIEF_GOAL_USD = 25_000;

/** Relays Agora reads from and writes to. */
const AGORA_RELAYS = [
  'wss://relay.ditto.pub/',
  'wss://relay.dreamith.to/',
  'wss://relay.primal.net/',
];

/** The four campaign coordinates (`33863:<pubkey>:<d>`) that make up the relief effort. */
const CAMPAIGN_COORDS = [
  '33863:98cef03350c616af5e3b3d9190c5931589aa1ac0f83957096a387df1f406ccca:medical-brigades-fund',
  '33863:3f26a89aa3f00662eef23f0590dc09d354e135db29435f65e0e737f57168e288:proyecto-sonrisa',
  '33863:7a303d62d6c9d2f0cabe2ca713a392f3ec4b1fab815ea60b79fe15aca274c71c:connecting-hope-starlink-antennas-to-save-lives-in-the-venezuela',
  '33863:2fb42317a9835e0fabb405aebbea6c61b6b2d384be7febe8125840b3516685fc:agora-venezuela-earthquake-relief-fund',
];

export interface VenezuelaReliefTotal {
  /** Total self-reported sats across all public donation receipts. */
  raisedSats: number;
  /** Unique donor count across all campaigns. */
  donorCount: number;
  /** Live BTC/USD price used for conversion, if it could be fetched. */
  btcUsd?: number;
  /** Raised amount converted to USD, if a price was available. */
  raisedUsd?: number;
  /** Progress toward the collective fund goal, 0–100. */
  progressPct: number;
}

/** Fetch the current BTC/USD spot price. Returns `undefined` on failure. */
async function fetchBtcUsd(signal: AbortSignal): Promise<number | undefined> {
  try {
    const res = await fetch(
      'https://api.coinbase.com/v2/prices/BTC-USD/spot',
      { signal },
    );
    if (!res.ok) return undefined;
    const json = (await res.json()) as { data?: { amount?: string } };
    const amount = json?.data?.amount ? parseFloat(json.data.amount) : NaN;
    return Number.isFinite(amount) && amount > 0 ? amount : undefined;
  } catch {
    return undefined;
  }
}

/**
 * Live total raised across the four Venezuela earthquake relief
 * campaigns, converted to USD against the {@link RELIEF_GOAL_USD} goal.
 */
export function useVenezuelaReliefTotal() {
  const { nostr } = useNostr();

  return useQuery<VenezuelaReliefTotal>({
    queryKey: ['venezuela-relief-total'],
    queryFn: async (c) => {
      const pool =
        typeof (nostr as { group?: unknown }).group === 'function'
          ? (nostr as unknown as {
              group: (urls: string[]) => typeof nostr;
            }).group(AGORA_RELAYS)
          : nostr;

      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(6000)]);

      // Fetch donation receipts pointing at any of the four campaigns
      // and the live BTC price in parallel.
      const [receiptEvents, btcUsd] = await Promise.all([
        pool.query(
          [
            {
              kinds: [DONATION_RECEIPT_KIND],
              '#a': CAMPAIGN_COORDS,
              limit: 2000,
            },
          ],
          { signal },
        ),
        fetchBtcUsd(signal),
      ]);

      // Dedupe receipts by Bitcoin txid so the same on-chain donation
      // isn't summed twice (e.g. counted under both an individual
      // campaign and the collective fund). Earliest receipt per txid wins.
      const byTxid = new Map<string, NostrEvent>();
      let raisedSats = 0;
      const donorPubkeys = new Set<string>();

      for (const r of receiptEvents) {
        const aTag = r.tags.find(([n]) => n === 'a')?.[1];
        if (!aTag || !CAMPAIGN_COORDS.includes(aTag)) continue;

        const iTag = r.tags.find(
          ([n, v]) =>
            n === 'i' && typeof v === 'string' && v.startsWith('bitcoin:tx:'),
        )?.[1];
        const txid = iTag?.slice('bitcoin:tx:'.length);
        if (!txid) continue;
        if (byTxid.has(txid)) continue;
        byTxid.set(txid, r);
      }

      for (const r of byTxid.values()) {
        const amountStr = r.tags.find(([n]) => n === 'amount')?.[1];
        const amount = amountStr ? parseInt(amountStr, 10) : NaN;
        if (Number.isFinite(amount) && amount > 0) raisedSats += amount;
        donorPubkeys.add(r.pubkey);
      }

      const raisedUsd =
        btcUsd !== undefined ? (raisedSats / 100_000_000) * btcUsd : undefined;

      const progressPct =
        raisedUsd !== undefined
          ? Math.min(100, Math.max(0, (raisedUsd / RELIEF_GOAL_USD) * 100))
          : 0;

      return {
        raisedSats,
        donorCount: donorPubkeys.size,
        btcUsd,
        raisedUsd,
        progressPct,
      };
    },
    staleTime: 1000 * 60 * 2, // 2 minutes
    refetchInterval: 1000 * 60 * 5, // 5 minutes
    retry: 1,
  });
}

/**
 * Format a USD amount as a short, human-readable string for the
 * funding bar (e.g. `$1,240`, `$12.5K`).
 */
export function formatUsdShort(usd: number): string {
  if (!Number.isFinite(usd) || usd <= 0) return '$0';
  if (usd >= 10_000) return `$${(usd / 1_000).toFixed(1)}K`;
  if (usd >= 1_000) return `$${Math.round(usd).toLocaleString()}`;
  return `$${Math.round(usd).toLocaleString()}`;
}
