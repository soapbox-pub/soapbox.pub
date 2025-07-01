import { useFollowPack } from '@/hooks/useFollowPack';
import { useAuthor } from '@/hooks/useAuthor';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useNostrPublish } from '@/hooks/useNostrPublish';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Users, UserPlus, ExternalLink } from 'lucide-react';
import { genUserName } from '@/lib/genUserName';
import { useState } from 'react';
import { useToast } from '@/hooks/useToast';

interface FollowPackProps {
  naddr: string;
  className?: string;
}

interface ProfileCardProps {
  pubkey: string;
  petname?: string;
}

function ProfileCard({ pubkey, petname }: ProfileCardProps) {
  const author = useAuthor(pubkey);
  const metadata = author.data?.metadata;
  
  const displayName = metadata?.display_name || metadata?.name || petname || genUserName(pubkey);
  const about = metadata?.about;
  const picture = metadata?.picture;

  if (author.isLoading) {
    return (
      <Card className="p-4">
        <div className="flex items-center space-x-3">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={picture} alt={displayName} />
          <AvatarFallback>{displayName.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm truncate">{displayName}</h4>
          {petname && petname !== displayName && (
            <p className="text-xs text-muted-foreground">({petname})</p>
          )}
          {about && (
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
              {about}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}

export function FollowPack({ naddr, className }: FollowPackProps) {
  const { data: followPack, isLoading, error } = useFollowPack(naddr);
  const { user } = useCurrentUser();
  const { mutate: publishEvent, isPending: isPublishing } = useNostrPublish();
  const [isFollowing, setIsFollowing] = useState(false);
  const { toast } = useToast();

  const handleFollowAll = async () => {
    if (!user || !followPack) return;

    try {
      setIsFollowing(true);

      // Create a follow list event (kind 3) with all the profiles
      const tags = followPack.profiles.map(profile => {
        const tag = ['p', profile.pubkey];
        if (profile.relay) tag.push(profile.relay);
        if (profile.petname) tag.push(profile.petname);
        return tag;
      });

      publishEvent({
        kind: 3,
        content: '',
        tags,
      });

      toast({
        title: 'Success!',
        description: `Following ${followPack.profiles.length} profiles from the pack.`,
      });
    } catch (error) {
      console.error('Error following pack:', error);
      toast({
        title: 'Error',
        description: 'Failed to follow the pack. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsFollowing(false);
    }
  };

  if (isLoading) {
    return (
      <Card className={className}>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Skeleton className="h-6 w-6" />
            <Skeleton className="h-6 w-32" />
          </div>
          <Skeleton className="h-4 w-full" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center space-x-3 p-4 border rounded-lg">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-32" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className={className}>
        <CardContent className="py-8 text-center">
          <p className="text-muted-foreground">
            Failed to load follow pack. Please try again later.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!followPack) {
    return null;
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Users className="h-5 w-5 text-blue-500" />
              {followPack.title || 'Follow Pack'}
            </CardTitle>
            {followPack.description && (
              <p className="text-muted-foreground mt-2">
                {followPack.description}
              </p>
            )}
            <div className="flex items-center gap-2 mt-3">
              <Badge variant="secondary">
                {followPack.profiles.length} profiles
              </Badge>
              <Badge variant="outline">
                Starter Pack
              </Badge>
            </div>
          </div>
          {followPack.image && (
            <img 
              src={followPack.image} 
              alt={followPack.title || 'Follow pack'} 
              className="w-16 h-16 rounded-lg object-cover ml-4"
            />
          )}
        </div>
        
        {user && (
          <div className="flex gap-2 pt-4">
            <Button 
              onClick={handleFollowAll}
              disabled={isFollowing || isPublishing}
              className="flex items-center gap-2"
            >
              <UserPlus className="h-4 w-4" />
              {isFollowing || isPublishing ? 'Following...' : 'Follow All'}
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              asChild
            >
              <a 
                href={`https://following.space/d/${followPack.event.tags.find(([name]) => name === 'd')?.[1]}?p=${followPack.event.pubkey}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-3 w-3" />
                View on following.space
              </a>
            </Button>
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {followPack.profiles.map((profile) => (
            <ProfileCard 
              key={profile.pubkey} 
              pubkey={profile.pubkey}
              petname={profile.petname}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}