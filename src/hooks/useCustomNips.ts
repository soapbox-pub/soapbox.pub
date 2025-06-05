import { useQuery } from '@tanstack/react-query';
import { useNostr } from '@nostrify/react';
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
  kinds: string[]; // Event kinds this NIP defines
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

export function useCustomNips(limit = 10) {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['custom-nips', limit],
    queryFn: async (c) => {
      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(5000)]);
      
      try {
        // Query for custom NIP events (kind 30817)
        const events = await nostr.query([
          { 
            kinds: [30817], 
            limit: limit * 2, // Get more than needed to account for invalid events
          }
        ], { signal });

        // Parse and filter for valid custom NIPs
        const customNips = events
          .map(parseCustomNip)
          .filter((nip): nip is CustomNip => nip !== null)
          .sort((a, b) => b.createdAt - a.createdAt) // Sort by most recent
          .slice(0, limit); // Limit results

        return customNips;
      } catch (error) {
        console.error('Failed to fetch custom NIPs:', error);
        return [];
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes
  });
}