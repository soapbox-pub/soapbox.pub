import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';

export interface DeveloperStats {
  customNips: number;
  apps: number;
  repos: number;
}

export function useDeveloperStats(pubkey: string | undefined) {
  const { nostr } = useNostr();

  return useQuery<DeveloperStats>({
    queryKey: ['developer-stats', pubkey ?? ''],
    queryFn: async ({ signal }) => {
      if (!pubkey) {
        return { customNips: 0, apps: 0, repos: 0 };
      }

      const timeoutSignal = AbortSignal.timeout(3000);
      const combinedSignal = AbortSignal.any([signal, timeoutSignal]);

      try {
        // Fetch different types of events for this developer
        const [customNipEvents, appEvents, repoEvents] = await Promise.all([
          // Custom NIPs (kind 30040 - NIP-72 community posts about NIPs)
          nostr.query(
            [{ kinds: [30040], authors: [pubkey], limit: 100 }],
            { signal: combinedSignal }
          ),
          // Apps (kind 30063 - Application Handler events)
          nostr.query(
            [{ kinds: [30063], authors: [pubkey], limit: 100 }],
            { signal: combinedSignal }
          ),
          // Repos (kind 30617 - Repository events)
          nostr.query(
            [{ kinds: [30617], authors: [pubkey], limit: 100 }],
            { signal: combinedSignal }
          ),
        ]);

        return {
          customNips: customNipEvents.length,
          apps: appEvents.length,
          repos: repoEvents.length,
        };
      } catch {
        // Return zeros if there's an error fetching
        return { customNips: 0, apps: 0, repos: 0 };
      }
    },
    retry: 2,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}