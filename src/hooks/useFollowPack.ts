import { useQuery } from '@tanstack/react-query';
import { useNostr } from '@nostrify/react';
import { nip19 } from 'nostr-tools';
import type { NostrEvent } from '@nostrify/nostrify';

interface FollowPackProfile {
  pubkey: string;
  petname?: string;
  relay?: string;
}

interface FollowPack {
  event: NostrEvent;
  title?: string;
  description?: string;
  image?: string;
  profiles: FollowPackProfile[];
}

function validateFollowPackEvent(event: NostrEvent): boolean {
  // Check if it's a starter pack kind
  if (event.kind !== 39089) return false;

  // Check for required 'd' tag
  const d = event.tags.find(([name]) => name === 'd')?.[1];
  if (!d) return false;

  // Check that it has at least one 'p' tag
  const pTags = event.tags.filter(([name]) => name === 'p');
  if (pTags.length === 0) return false;

  return true;
}

export function useFollowPack(naddr: string) {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['follow-pack', naddr],
    queryFn: async (c) => {
      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(5000)]);
      
      try {
        // Decode the naddr
        const decoded = nip19.decode(naddr);
        
        if (decoded.type !== 'naddr') {
          throw new Error('Invalid naddr identifier');
        }

        const addrData = decoded.data;
        
        // Query for the follow pack event
        const events = await nostr.query([{
          kinds: [addrData.kind],
          authors: [addrData.pubkey],
          '#d': [addrData.identifier],
        }], { signal });

        // Filter and validate events
        const validEvents = events.filter(validateFollowPackEvent);
        
        if (validEvents.length === 0) {
          throw new Error('Follow pack not found');
        }

        // Get the most recent event
        const event = validEvents.sort((a, b) => b.created_at - a.created_at)[0];

        // Extract metadata
        const title = event.tags.find(([name]) => name === 'title')?.[1];
        const description = event.tags.find(([name]) => name === 'description')?.[1];
        const image = event.tags.find(([name]) => name === 'image')?.[1];

        // Extract profiles from 'p' tags
        const profiles: FollowPackProfile[] = event.tags
          .filter(([name]) => name === 'p')
          .map(([, pubkey, relay, petname]) => ({
            pubkey,
            relay: relay || undefined,
            petname: petname || undefined,
          }));

        const followPack: FollowPack = {
          event,
          title,
          description,
          image,
          profiles,
        };

        return followPack;
      } catch (error) {
        console.error('Error fetching follow pack:', error);
        throw error;
      }
    },
    enabled: !!naddr,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
}