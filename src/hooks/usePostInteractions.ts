import { useQuery } from '@tanstack/react-query';
import { useNostr } from '@nostrify/react';
import type { NostrEvent } from '@nostrify/nostrify';

export interface PostInteractions {
  reactions: NostrEvent[];
  comments: NostrEvent[];
  reposts: NostrEvent[];
  zaps: NostrEvent[];
}

export function usePostInteractions(eventId: string) {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['post-interactions', eventId],
    queryFn: async (c) => {
      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(3000)]);
      
      // Fetch all interaction types in parallel
      const [reactions, comments, reposts, zaps] = await Promise.all([
        // Reactions (kind 7)
        nostr.query([{ kinds: [7], '#e': [eventId], limit: 100 }], { signal }),
        
        // Comments (kind 1 with e tags referencing this event)
        nostr.query([{ kinds: [1], '#e': [eventId], limit: 50 }], { signal }),
        
        // Reposts (kind 6)
        nostr.query([{ kinds: [6], '#e': [eventId], limit: 50 }], { signal }),
        
        // Zaps (kind 9735)
        nostr.query([{ kinds: [9735], '#e': [eventId], limit: 100 }], { signal }),
      ]);

      return {
        reactions,
        comments,
        reposts,
        zaps,
      } as PostInteractions;
    },
    staleTime: 30000, // 30 seconds
    refetchInterval: 60000, // Refetch every minute
  });
}