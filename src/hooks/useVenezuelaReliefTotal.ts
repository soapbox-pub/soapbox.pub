/**
 * Live donation rollup for the four Venezuela earthquake relief
 * campaigns featured in the `venezuela-earthquake-relief-bitcoin`
 * blog post.
 *
 * Mirrors how Agora itself computes a campaign's raised total (see
 * /projects/agora/src/hooks/useCampaignDonations.ts): the headline
 * number comes from a direct Esplora balance lookup on each campaign's
 * on-chain `w` address — specifically `chain_stats.funded_txo_sum`, the
 * cumulative sats ever received. This counts every donation whether or
 * not the donor published a Nostr receipt, and doesn't regress when the
 * beneficiary spends. We sum that across all four campaigns, then add
 * the collective fund's off-Nostr fiat total (its `pay` endpoint's
 * `{ received }`, in USD cents), and convert to USD against the goal
 * using a live BTC price.
 *
 * Tradeoffs / notes:
 *  - Silent-payment donations are unlinkable by design and never appear
 *    in an address balance, so they can't be counted. The number shown
 *    is the public on-chain + fiat total, exactly like Agora's own UI.
 *  - Esplora endpoints are tried with simple failover (mempool.space →
 *    blockstream.info). On total failure the hook degrades gracefully.
 */

import { useQuery } from '@tanstack/react-query';

/** Collective fund goal, in whole USD. */
export const RELIEF_GOAL_USD = 25_000;

/** Esplora REST roots, tried in order with failover. */
const ESPLORA_APIS = [
  'https://mempool.space/api',
  'https://blockstream.info/api',
];

/** On-chain (`bc1p…`) addresses for each of the four campaigns. */
const CAMPAIGN_ADDRESSES = [
  'bc1plpld9zjeh7n8y23k23unjp49ayfs5yntg77dwalugptf5pssatgszu43cs', // Medical Brigades Fund
  'bc1p0hvp7k9jcswku0fvv7spptf5lgf358w239lay6lnxs79n2wp74ksrthp8d', // Proyecto Sonrisa
  'bc1pqxev2v8hkjtp34g43ec3zktu5aghsjvmhm3dkrj3t0khxd0hze5qwnqzu0', // Connecting Hope: Starlink
  'bc1pd4pktggnd3majsh832varczsxvn4j4dtc6kk3xeld42043avd4sqlueplz', // Agora Venezuela Earthquake Relief Fund (collective)
];

/** Collective fund's `pay` endpoint — reports off-Nostr fiat raised as USD cents. */
const COLLECTIVE_FUND_PAY_URL =
  'https://pay.agora.spot/naddr1qvzqqqyygupzqta5yvt6nq67p74mgpdwh04xccdkktfcf0nla05pykzqkdgkdp0uqqnxzem0wfsj6an9dejh5at9d3sj6etpwf6xsut4v94k2ttjv4kxjetx94n82mny44zetu';

export interface VenezuelaReliefTotal {
  /** Total on-chain sats ever received across all four campaign addresses. */
  raisedSats: number;
  /** Off-Nostr fiat raised via the collective fund's `pay` endpoint, in USD. */
  fiatUsd: number;
  /** Live BTC/USD price used for conversion, if it could be fetched. */
  btcUsd?: number;
  /** Total raised in USD (on-chain sats converted + fiat), if a price was available. */
  raisedUsd?: number;
  /** Progress toward the collective fund goal, 0–100. */
  progressPct: number;
}

/** Fetch with failover across a list of base URLs. Returns the first OK JSON body. */
async function fetchJsonWithFailover<T>(
  baseUrls: string[],
  path: string,
  signal: AbortSignal,
): Promise<T | undefined> {
  for (const base of baseUrls) {
    try {
      const res = await fetch(`${base}${path}`, { signal });
      if (!res.ok) continue;
      return (await res.json()) as T;
    } catch {
      // try next endpoint
    }
  }
  return undefined;
}

/** Sats ever received by an address (`chain_stats.funded_txo_sum`). */
async function fetchAddressReceived(
  address: string,
  signal: AbortSignal,
): Promise<number> {
  const data = await fetchJsonWithFailover<{
    chain_stats?: { funded_txo_sum?: number };
  }>(ESPLORA_APIS, `/address/${address}`, signal);
  const received = data?.chain_stats?.funded_txo_sum;
  return Number.isFinite(received) ? (received as number) : 0;
}

/** Current BTC/USD spot price via mempool.space's `/v1/prices` extension. */
async function fetchBtcUsd(signal: AbortSignal): Promise<number | undefined> {
  const data = await fetchJsonWithFailover<{ USD?: number }>(
    ['https://mempool.space/api'],
    '/v1/prices',
    signal,
  );
  const usd = data?.USD;
  return Number.isFinite(usd) && (usd as number) > 0 ? (usd as number) : undefined;
}

/** Off-Nostr fiat raised (USD cents) from the collective fund's `pay` endpoint. */
async function fetchFiatCents(signal: AbortSignal): Promise<number> {
  try {
    const res = await fetch(COLLECTIVE_FUND_PAY_URL, {
      headers: { accept: 'application/json' },
      signal,
    });
    if (!res.ok) return 0;
    const contentType = res.headers.get('content-type') ?? '';
    if (!/\bapplication\/(?:\w[\w.-]*\+)?json\b/i.test(contentType)) return 0;
    const body = (await res.json()) as { received?: unknown };
    const received = typeof body?.received === 'number' ? body.received : 0;
    return Number.isFinite(received) && received > 0 ? received : 0;
  } catch {
    return 0;
  }
}

/**
 * Live total raised across the four Venezuela earthquake relief
 * campaigns, converted to USD against the {@link RELIEF_GOAL_USD} goal.
 */
export function useVenezuelaReliefTotal() {
  return useQuery<VenezuelaReliefTotal>({
    queryKey: ['venezuela-relief-total'],
    queryFn: async (c) => {
      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(10_000)]);

      const [receivedPerCampaign, fiatCents, btcUsd] = await Promise.all([
        Promise.all(
          CAMPAIGN_ADDRESSES.map((addr) => fetchAddressReceived(addr, signal)),
        ),
        fetchFiatCents(signal),
        fetchBtcUsd(signal),
      ]);

      const raisedSats = receivedPerCampaign.reduce((sum, s) => sum + s, 0);
      const fiatUsd = fiatCents / 100;

      const onchainUsd =
        btcUsd !== undefined ? (raisedSats / 100_000_000) * btcUsd : undefined;
      const raisedUsd =
        onchainUsd !== undefined ? onchainUsd + fiatUsd : undefined;

      const progressPct =
        raisedUsd !== undefined
          ? Math.min(100, Math.max(0, (raisedUsd / RELIEF_GOAL_USD) * 100))
          : 0;

      return {
        raisedSats,
        fiatUsd,
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
 * funding bar (e.g. `$740`, `$12.5K`).
 */
export function formatUsdShort(usd: number): string {
  if (!Number.isFinite(usd) || usd <= 0) return '$0';
  if (usd >= 10_000) return `$${(usd / 1_000).toFixed(1)}K`;
  return `$${Math.round(usd).toLocaleString()}`;
}
