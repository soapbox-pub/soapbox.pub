import { useQuery } from '@tanstack/react-query';
import { useNostr } from '@nostrify/react';
import { nip19 } from 'nostr-tools';
import type { NostrEvent } from '@nostrify/nostrify';

interface CustomNip {
  id: string;
  pubkey: string;
  title: string;
  summary?: string;
  identifier: string;
  publishedAt?: number;
  createdAt: number;
  tags: string[];
  content: string;
  event: NostrEvent;
  kinds: string[];
}

function validateCustomNip(event: NostrEvent): boolean {
  // Must be kind 30817 (custom NIP event)
  if (event.kind !== 30817) return false;

  // Must have required tags
  const dTag = event.tags.find(([name]) => name === 'd')?.[1];
  const titleTag = event.tags.find(([name]) => name === 'title')?.[1];

  // Both d and title tags are required
  if (!dTag || !titleTag) return false;

  // Content should contain markdown
  if (!event.content || event.content.trim().length === 0) return false;

  return true;
}

function parseCustomNip(event: NostrEvent): CustomNip | null {
  // Validate the event structure
  if (!validateCustomNip(event)) return null;

  // Extract required tags
  const dTag = event.tags.find(([name]) => name === 'd')![1]; // Safe because validated above
  const titleTag = event.tags.find(([name]) => name === 'title')![1]; // Safe because validated above
  
  // Extract optional metadata
  const summaryTag = event.tags.find(([name]) => name === 'summary')?.[1];
  const publishedAtTag = event.tags.find(([name]) => name === 'published_at')?.[1];
  const topicTags = event.tags.filter(([name]) => name === 't').map(([, value]) => value);
  
  // Extract kind numbers this NIP defines
  const kindTags = event.tags.filter(([name]) => name === 'k').map(([, value]) => value);

  return {
    id: event.id,
    pubkey: event.pubkey,
    title: titleTag,
    summary: summaryTag,
    identifier: dTag,
    publishedAt: publishedAtTag ? parseInt(publishedAtTag) : undefined,
    createdAt: event.created_at,
    tags: topicTags,
    content: event.content,
    event,
    kinds: kindTags,
  };
}

export function useCustomNip(naddr: string) {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['custom-nip', naddr],
    queryFn: async (c) => {
      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(5000)]);
      
      try {
        // Handle empty naddr
        if (!naddr) {
          throw new Error('No naddr provided');
        }

        // Decode the naddr
        const decoded = nip19.decode(naddr);
        if (decoded.type !== 'naddr') {
          throw new Error('Invalid naddr format');
        }

        const { identifier, pubkey, kind } = decoded.data;
        
        // Verify this is a custom NIP kind
        if (kind !== 30817) {
          throw new Error('Not a custom NIP event');
        }

        // Query for the specific custom NIP
        const events = await nostr.query([
          {
            kinds: [30817],
            authors: [pubkey],
            '#d': [identifier],
            limit: 1,
          }
        ], { signal });

        if (events.length === 0) {
          throw new Error('Custom NIP not found');
        }

        // Parse the event
        const customNip = parseCustomNip(events[0]);
        if (!customNip) {
          throw new Error('Invalid custom NIP format');
        }

        return customNip;
      } catch (error) {
        console.error('Failed to fetch custom NIP:', error);
        throw error;
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes
    retry: 2,
    enabled: !!naddr, // Only run query if naddr is provided
  });
}