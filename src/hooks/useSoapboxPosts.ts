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
        
        const events = await nostr.query([
          {
            kinds: [1, 6], // Text notes and reposts
            authors: [pubkeyHex],
            limit: limit,
          }
        ], { signal });
        
        // Sort by created_at descending (newest first)
        return events.sort((a, b) => b.created_at - a.created_at);
      } catch (error) {
        console.error('Failed to fetch Soapbox posts:', error);
        return [];
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 10, // 10 minutes
  });
}