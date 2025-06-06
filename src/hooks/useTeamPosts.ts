import { useQuery } from '@tanstack/react-query';
import { nip19 } from 'nostr-tools';
import type { NostrEvent } from '@nostrify/nostrify';
import { useNostr } from '@/hooks/useNostr';

// Team member npubs
const TEAM_NPUBS = [
  'npub1q3sle0kvfsehgsuexttt3ugjd8xdklxfwwkh559wxckmzddywnws6cd26p', // Alex Gleason
  'npub1jvnpg4c6ljadf5t6ry0w9q0rnm4mksde87kglkrc993z46c39axsgq89sc', // M. K. Fain
  'npub1gujeqakgt7fyp6zjggxhyy7ft623qtcaay5lkc8n8gkry4cvnrzqd3f67z', // Patrick dos Reis
  'npub1q469xmf77nt9ltu4ks3excgts36ayt6v99ryn4rv2r2axmm4ye7q3vnkqp', // shantaram
  'npub1e6tnvlr46lv3lwdu80r07kanhk6jcxy5r07w9umgv9kuhu9dl5hsk9gqft', // Danidfra
  'npub1t5u3wp5kj78jwnuphpf5mhx00nwwtfwq56d6j8atnu89gd454wcs6aj4c2', // And Other Stuff
];

export function useTeamPosts() {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['team-posts'],
    queryFn: async (c) => {
      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(5000)]);
      
      // Convert npubs to hex pubkeys
      const pubkeys = TEAM_NPUBS.map(npub => {
        try {
          const decoded = nip19.decode(npub);
          return decoded.type === 'npub' ? decoded.data : null;
        } catch {
          return null;
        }
      }).filter(Boolean) as string[];

      // Fetch top 3 posts from each team member individually
      const allPosts: NostrEvent[] = [];
      
      for (const pubkey of pubkeys) {
        try {
          // Query for text notes (kind 1) only from this specific team member
          const memberEvents = await nostr.query([
            {
              kinds: [1], // Include only text notes (excluding reposts)
              authors: [pubkey],
              limit: 20, // Fetch more to account for filtering out replies
            }
          ], { signal });

          // Filter out replies for kind 1 events
          const topLevelPosts = memberEvents.filter(event => {
            // For text notes (kind 1), exclude replies (events with 'e' tags)
            return !event.tags.some(tag => tag[0] === 'e');
          });

          // Sort by creation time (newest first) and take top 3
          const memberTopPosts = topLevelPosts
            .sort((a, b) => b.created_at - a.created_at)
            .slice(0, 3);

          allPosts.push(...memberTopPosts);
        } catch (error) {
          // Continue if one member's posts fail to load
          console.warn(`Failed to load posts for team member ${pubkey}:`, error);
        }
      }

      // Sort all posts by creation time (newest first)
      return allPosts.sort((a, b) => b.created_at - a.created_at);
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 10, // 10 minutes
  });
}