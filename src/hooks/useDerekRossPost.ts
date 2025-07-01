import { useQuery } from '@tanstack/react-query';
import { nip19 } from 'nostr-tools';
import { useTeamPosts } from '@/hooks/useTeamPosts';

const DEREK_ROSS_NPUB = 'npub18ams6ewn5aj2n3wt2qawzglx9mr4nzksxhvrdc4gzrecw7n5tvjqctp424';

// Get Derek's hex pubkey for filtering
const getDerekRossPubkey = () => {
  try {
    const decoded = nip19.decode(DEREK_ROSS_NPUB);
    return decoded.type === 'npub' ? decoded.data : null;
  } catch {
    return null;
  }
};

export function useDerekRossPost() {
  const { data: teamPosts, isLoading } = useTeamPosts();
  const derekPubkey = getDerekRossPubkey();

  return useQuery({
    queryKey: ['derek-ross-latest-post', teamPosts?.length],
    queryFn: () => {
      if (!teamPosts || !derekPubkey) {
        return null;
      }

      // Filter team posts to only Derek's posts
      const derekPosts = teamPosts.filter(post => post.pubkey === derekPubkey);
      
      // Return the latest post (team posts are already sorted by creation time)
      return derekPosts[0] || null;
    },
    enabled: !!teamPosts && !!derekPubkey && !isLoading,
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchInterval: 1000 * 60 * 10, // 10 minutes
  });
}