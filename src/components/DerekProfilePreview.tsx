import { useAuthor } from "@/hooks/useAuthor";
import { useNostr } from "@nostrify/react";
import { useQuery } from "@tanstack/react-query";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Users } from "lucide-react";
import { teamMembers } from "@/lib/teamData";

export function DerekProfilePreview() {
  // Get Derek's data from team data
  const derek = teamMembers.find(member => member.name === "Derek Ross");
  const { nostr } = useNostr();
  
  // Get Derek's profile metadata
  const author = useAuthor(derek?.pubkey || "");
  
  // Query for Derek's follower count
  const { data: followerCount, isLoading: loadingFollowers } = useQuery({
    queryKey: ['derek-followers', derek?.pubkey],
    queryFn: async () => {
      if (!derek?.pubkey) return 0;
      
      const signal = AbortSignal.timeout(3000);
      const followers = await nostr.query([{
        kinds: [3], // Contact lists
        '#p': [derek.pubkey],
        limit: 1000 // Get a sample to estimate
      }], { signal });
      
      return followers.length;
    },
    enabled: !!derek?.pubkey,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  if (!derek) {
    return (
      <div className="bg-white rounded-lg p-4 sm:p-6 border border-violet-200 shadow-sm">
        <div className="text-center text-gray-500">
          Team member not found
        </div>
      </div>
    );
  }

  const metadata = author.data?.metadata;
  const isLoadingProfile = author.isLoading;

  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 border border-violet-200 shadow-sm">
      <div className="flex items-center space-x-4 mb-4">
        {isLoadingProfile ? (
          <Skeleton className="h-12 w-12 rounded-full" />
        ) : (
          <Avatar className="h-12 w-12">
            <AvatarImage 
              src={metadata?.picture || derek.avatar} 
              alt={derek.name}
            />
            <AvatarFallback>
              {derek.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        )}
        
        <div className="flex-1 min-w-0">
          {isLoadingProfile ? (
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-32" />
            </div>
          ) : (
            <div>
              <h4 className="font-semibold text-gray-900 truncate">
                {metadata?.display_name || metadata?.name || derek.name}
              </h4>
              <p className="text-sm text-gray-600 truncate">
                @{metadata?.name || derek.name.toLowerCase().replace(' ', '')}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-violet-600">
          <Users className="h-4 w-4" />
          <span className="text-sm font-medium">Followers</span>
        </div>
        
        <div className="text-right">
          {loadingFollowers ? (
            <Skeleton className="h-6 w-12" />
          ) : (
            <div className="text-lg font-bold text-violet-600">
              {followerCount?.toLocaleString() || '0'}
            </div>
          )}
          <div className="text-xs text-gray-500">on Nostr</div>
        </div>
      </div>

      {metadata?.about && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-600 line-clamp-2">
            {metadata.about}
          </p>
        </div>
      )}
    </div>
  );
}