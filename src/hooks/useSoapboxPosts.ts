import { useQuery } from '@tanstack/react-query';
import { useNostr } from '@nostrify/react';
import { nip19 } from 'nostr-tools';

const SOAPBOX_NPUB = 'npub10qdp2fc9ta6vraczxrcs8prqnv69fru2k6s2dj48gqjcylulmtjsg9arpj';

// Convert npub to hex pubkey
function npubToHex(npub: string): string {
  try {
    const decoded = nip19.decode(npub);
    if (decoded.type === 'npub') {
      return decoded.data;
    }
    throw new Error('Invalid npub format');
  } catch (error) {
    console.error('Failed to decode npub:', error);
    throw error;
  }
}

export function useSoapboxPosts(limit: number = 10) {
  const { nostr } = useNostr();
  
  return useQuery({
    queryKey: ['soapbox-posts', limit],
    queryFn: async (c) => {
      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(5000)]);
      
      try {
        const pubkeyHex = npubToHex(SOAPBOX_NPUB);
        
        // Fetch more events than needed since we'll filter out replies
        const events = await nostr.query([
          {
            kinds: [1], // Text notes only (excluding reposts)
            authors: [pubkeyHex],
            limit: limit * 3, // Fetch 3x more to account for filtering out replies
          }
        ], { signal });
        
        // Filter out replies (events with 'e' tags) and only keep top-level posts
        // According to NIP-10, replies are kind 1 events that reference other events via 'e' tags
        const topLevelPosts = events.filter(event => {
          // Check if the event has any 'e' tags (which would make it a reply)
          const hasETags = event.tags.some(tag => tag[0] === 'e');
          return !hasETags; // Only include events without 'e' tags (top-level posts)
        });
        
        // Sort by created_at descending (newest first) and limit to requested amount
        return topLevelPosts
          .sort((a, b) => b.created_at - a.created_at)
          .slice(0, limit);
      } catch (error) {
        console.error('Failed to fetch Soapbox posts:', error);
        return [];
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 10, // 10 minutes
  });
}