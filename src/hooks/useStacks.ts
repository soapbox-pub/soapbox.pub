import { useQuery } from '@tanstack/react-query';
import { useNostr } from '@nostrify/react';
import type { NostrEvent } from '@nostrify/nostrify';

export interface StackEvent extends NostrEvent {
  kind: 30717;
}

function validateStackEvent(event: NostrEvent): event is StackEvent {
  // Check if it's a stack event kind
  if (event.kind !== 30717) return false;

  // Check for required tags according to Stack protocol
  const d = event.tags.find(([name]) => name === 'd')?.[1];
  const title = event.tags.find(([name]) => name === 'title')?.[1];

  // All stack events require 'd' and 'title' tags
  if (!d || !title) return false;

  return true;
}

export function useStacks() {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['stacks'],
    queryFn: async (c) => {
      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(5000)]);
      const events = await nostr.query([{ kinds: [30717], limit: 50 }], { signal });
      
      // Filter events through validator to ensure they meet Stack requirements
      return events.filter(validateStackEvent);
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}