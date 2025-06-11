import { ExternalLink, Code, FileText, GitBranch } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuthor } from "@/hooks/useAuthor";
import { useDeveloperStats } from "@/hooks/useDeveloperStats";
import { genUserName } from "@/lib/genUserName";
import { nip19 } from "nostr-tools";

interface DeveloperProfileProps {
  npub: string;
}

function DeveloperProfile({ npub }: DeveloperProfileProps) {
  // Convert npub to hex pubkey for queries
  const pubkey = (() => {
    try {
      const decoded = nip19.decode(npub);
      if (decoded.type === 'npub') {
        return decoded.data;
      }
      return npub;
    } catch {
      return npub;
    }
  })();

  const { data: author, isLoading: authorLoading } = useAuthor(pubkey);
  const { data: stats, isLoading: statsLoading } = useDeveloperStats(pubkey);

  const metadata = author?.metadata;
  const displayName = metadata?.display_name || metadata?.name || genUserName(pubkey);
  const profileImage = metadata?.picture;
  const about = metadata?.about;

  const profileUrl = `https://nostrhub.io/${npub}`;

  if (authorLoading || statsLoading) {
    return (
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-3">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <Skeleton className="h-6 w-8 mx-auto mb-1" />
              <Skeleton className="h-3 w-12 mx-auto" />
            </div>
            <div className="text-center">
              <Skeleton className="h-6 w-8 mx-auto mb-1" />
              <Skeleton className="h-3 w-8 mx-auto" />
            </div>
            <div className="text-center">
              <Skeleton className="h-6 w-8 mx-auto mb-1" />
              <Skeleton className="h-3 w-10 mx-auto" />
            </div>
          </div>
          <Skeleton className="h-9 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-lg transition-shadow border-2 hover:border-purple-200">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={profileImage} alt={displayName} />
            <AvatarFallback className="bg-purple-100 text-purple-700">
              {displayName.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg text-gray-900">{displayName}</h3>
            <p className="text-sm text-gray-500">Protocol Developer</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {about && (
          <p className="text-sm text-gray-600 line-clamp-2">
            {about}
          </p>
        )}
        
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-100">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <FileText className="h-4 w-4 text-purple-600 mr-1" />
              <span className="text-lg font-bold text-purple-600">
                {stats?.customNips || 0}
              </span>
            </div>
            <p className="text-xs text-gray-500">Custom NIPs</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Code className="h-4 w-4 text-pink-600 mr-1" />
              <span className="text-lg font-bold text-pink-600">
                {stats?.apps || 0}
              </span>
            </div>
            <p className="text-xs text-gray-500">Apps</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <GitBranch className="h-4 w-4 text-violet-600 mr-1" />
              <span className="text-lg font-bold text-violet-600">
                {stats?.repos || 0}
              </span>
            </div>
            <p className="text-xs text-gray-500">Repos</p>
          </div>
        </div>

        <Button 
          variant="outline" 
          size="sm" 
          className="w-full hover:bg-purple-50 hover:border-purple-300" 
          asChild
        >
          <a href={profileUrl} target="_blank" rel="noopener noreferrer">
            View Profile
            <ExternalLink className="ml-2 h-3 w-3" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export function FeaturedDevelopers() {
  const featuredNpubs = [
    "npub1q3sle0kvfsehgsuexttt3ugjd8xdklxfwwkh559wxckmzddywnws6cd26p",
    "npub18ams6ewn5aj2n3wt2qawzglx9mr4nzksxhvrdc4gzrecw7n5tvjqctp424",
    "npub1gcxzte5zlkncx26j68ez60fzkvtkm9e0vrwdcvsjakxf9mu9qewqlfnj5z",
    "npub1ye5ptcxfyyxl5vjvdjar2ua3f0hynkjzpx552mu5snj3qmx5pzjscpknpr"
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Featured Protocol Developers
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Meet some of the innovative developers building the future of Nostr. 
          Explore their custom NIPs, applications, and repositories.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredNpubs.map((npub) => (
          <DeveloperProfile key={npub} npub={npub} />
        ))}
      </div>
    </div>
  );
}