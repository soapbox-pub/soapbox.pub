import { useQuery } from '@tanstack/react-query';
import { nip19 } from 'nostr-tools';
import { useNostr } from '@/hooks/useNostr';

// Hardcoded MKStack event nevents
const MKSTACK_NEVENTS = [
  'nevent1qvzqqqqqqypzpwgv8jm36e358cq3qn2unt0hmvzaxejnk9mqrlum9m464qd7v7prqy2hwumn8ghj7erfw36x7tnsw43z7un9d3shjqpq6vf7r6t8pm9v7qyrqek2pda3nq983raf8v226wepmsxahl8z5xdszunacf',
  'nevent1qvzqqqqqqypzqdyjm4paf94zxl6yg87cq86s0zmr2skru9v0l65s8jczpgd0fl7aqy2hwumn8ghj7erfw36x7tnsw43z7un9d3shjqpqyv72sumudzz2z3pjf6jx7k36y2n537thhunqyvne9mf62r5rf0esycr7ft',
  'nevent1qvzqqqqqqypzq03ff5haxwdmz6j5qw5xudnyj37agzxympaqqejjf799wwh98j5wqy2hwumn8ghj7erfw36x7tnsw43z7un9d3shjqpq2ch36eps7kqccwctcmhfw65xzphdukh74w30zr8frrhqg6342xhsrvdgch',
  'nevent1qvzqqqqqqypzq0mhp4ja8fmy48zuk5p6uy37vtk8tx9dqdwcxm32sy8nsaa8gkeyqy2hwumn8ghj7erfw36x7tnsw43z7un9d3shjqpqymgmmja6vah6zrhmv7t3xc7waeyz0tcj68rly8svczzm3r5fcw2s0y7vys',
  'nevent1qvzqqqqqqypzpq35r7yzkm4te5460u00jz4djcw0qa90zku7739qn7wj4ralhe4zqy2hwumn8ghj7erfw36x7tnsw43z7un9d3shjqpqc3ku58lehqzam92xtr9r9dna4pxdtda9eptp8gcrmzz5a9ufj2qqya4u5r',
  'nevent1qvzqqqqqqypzpyexz3t34l966ngh5xg7u2q788hthdqmj0av3lv8s2tz9t43zt6dqy2hwumn8ghj7erfw36x7tnsw43z7un9d3shjqpqt97prve7m7zesg00d3h6627u7lzz97cxzc4l5hc8kmlq9hwxcv0qpdmtll'
];

export function useMKStackPosts() {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['mkstack-posts'],
    queryFn: async (c) => {
      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(5000)]);
      
      // Decode nevents to get event IDs
      const eventIds = MKSTACK_NEVENTS.map(nevent => {
        try {
          const decoded = nip19.decode(nevent);
          return decoded.type === 'nevent' ? decoded.data.id : null;
        } catch {
          return null;
        }
      }).filter(Boolean) as string[];

      // Fetch events by their IDs
      const events = await nostr.query([
        {
          ids: eventIds,
        }
      ], { signal });

      // Sort by creation time (newest first) to maintain consistent ordering
      return events.sort((a, b) => b.created_at - a.created_at);
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 10, // 10 minutes
  });
}