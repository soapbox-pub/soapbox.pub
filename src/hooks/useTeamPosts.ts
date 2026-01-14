import { useQuery } from '@tanstack/react-query';
import { nip19 } from 'nostr-tools';
import type { NostrEvent } from '@nostrify/nostrify';
import { useNostr } from '@/hooks/useNostr';

// Team member npubs
const TEAM_NPUBS = [
  'npub1q3sle0kvfsehgsuexttt3ugjd8xdklxfwwkh559wxckmzddywnws6cd26p', // Alex Gleason
  'npub1jvnpg4c6ljadf5t6ry0w9q0rnm4mksde87kglkrc993z46c39axsgq89sc', // M. K. Fain
  'npub1nl8r463jkdtr0qu0k3dht03jt9t59cttk0j8gtxg9wea2russlnq2zf9d0', // Heather Larson
  'npub1gujeqakgt7fyp6zjggxhyy7ft623qtcaay5lkc8n8gkry4cvnrzqd3f67z', // Patrick dos Reis
  'npub18ams6ewn5aj2n3wt2qawzglx9mr4nzksxhvrdc4gzrecw7n5tvjqctp424', // Derek Ross
  'npub1q469xmf77nt9ltu4ks3excgts36ayt6v99ryn4rv2r2axmm4ye7q3vnkqp', // shantaram
  'npub1e6tnvlr46lv3lwdu80r07kanhk6jcxy5r07w9umgv9kuhu9dl5hsk9gqft', // Danidfra
  'npub1scvyzz02ayma34hesz62pdrd5nhsmxp74hjq8msmfs9khh3r3drsnw68d8', // Chad Curtis
  'npub1erhg86xl307d46pla66aycr6sjpy9esnrffysr98l5pjvt2fdgeq8wru26', // Ana Domingos
  'npub18c556t7n8xa3df2q82rwxejfglw5przds7sqvefylzjh8tjne28qld0we7', // Sep
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

      // Fetch all team member posts in a single query
      const allEvents = await nostr.query([
        {
          kinds: [1], // Include only text notes (excluding reposts)
          authors: pubkeys, // Query all team members at once
          limit: 200, // Fetch enough to get ~3 per member after filtering
        }
      ], { signal });

      // Filter out replies for kind 1 events
      const topLevelPosts = allEvents.filter(event => {
        // For text notes (kind 1), exclude replies (events with 'e' tags)
        return !event.tags.some(tag => tag[0] === 'e');
      });

      // Group posts by author and take top 3 per author
      const postsByAuthor = new Map<string, NostrEvent[]>();
      for (const post of topLevelPosts) {
        if (!postsByAuthor.has(post.pubkey)) {
          postsByAuthor.set(post.pubkey, []);
        }
        postsByAuthor.get(post.pubkey)!.push(post);
      }

      // Sort each author's posts and take top 3
      const allPosts: NostrEvent[] = [];
      for (const [, posts] of postsByAuthor) {
        const topPosts = posts
          .sort((a, b) => b.created_at - a.created_at)
          .slice(0, 3);
        allPosts.push(...topPosts);
      }

      // Sort all posts by creation time (newest first)
      return allPosts.sort((a, b) => b.created_at - a.created_at);
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 10, // 10 minutes
  });
}