import { useQuery } from '@tanstack/react-query';
import type { NostrEvent } from '@nostrify/nostrify';
import { useNostr } from '@/hooks/useNostr';

/**
 * Validates a Kind 31990 (Nostr Software Application) event
 */
function validateMKStackApp(event: NostrEvent): boolean {
  // Check if it's a Kind 31990 event
  if (event.kind !== 31990) return false;

  // Check for required 'd' tag
  const d = event.tags.find(([name]) => name === 'd')?.[1];
  if (!d) return false;

  // Check for at least one 'k' tag (supported event kind)
  const k = event.tags.find(([name]) => name === 'k')?.[1];
  if (!k) return false;

  // Check for 'mkstack' tag in 't' tags
  const hasMKStackTag = event.tags.some(([name, value]) => name === 't' && value === 'mkstack');
  if (!hasMKStackTag) return false;

  return true;
}

/**
 * Hook to fetch MKStack apps (Kind 31990 events with 'mkstack' tag)
 */
export function useMKStackApps() {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['mkstack-apps'],
    queryFn: async (c) => {
      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(5000)]);
      
      // Query for Kind 31990 events with 'mkstack' tag
      const events = await nostr.query([
        { 
          kinds: [31990], 
          '#t': ['mkstack'],
          limit: 50 
        }
      ], { signal });
      
      // Filter events through validator to ensure they meet requirements
      const validApps = events.filter(validateMKStackApp);
      
      // Sort by created_at (newest first)
      return validApps.sort((a, b) => b.created_at - a.created_at);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}