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
import { getTeamMemberByPubkey, type TeamMember } from '@/lib/teamData';
import { useState } from 'react';
import { useToast } from '@/hooks/useToast';
import { Link } from 'react-router-dom';

interface TeamFollowPackProps {
  naddr: string;
  className?: string;
}

interface EnhancedProfileCardProps {
  pubkey: string;
  petname?: string;
}

function EnhancedProfileCard({ pubkey, petname }: EnhancedProfileCardProps) {
  const author = useAuthor(pubkey);
  const metadata = author.data?.metadata;
  const teamMember = getTeamMemberByPubkey(pubkey);
  
  // Use team data if available, otherwise fall back to Nostr metadata
  const displayName = teamMember?.name || metadata?.display_name || metadata?.name || petname || genUserName(pubkey);
  const role = teamMember?.role;
  const bio = teamMember?.bio || metadata?.about;
  const picture = teamMember?.avatar || metadata?.picture;
  const followUrl = teamMember?.follow;

  if (author.isLoading) {
    return (
      <Card className="p-6 text-center">
        <CardContent className="p-0">
          <Skeleton className="w-24 h-24 rounded-full mx-auto mb-4" />
          <Skeleton className="h-6 w-32 mx-auto mb-1" />
          <Skeleton className="h-4 w-24 mx-auto mb-3" />
          <Skeleton className="h-16 w-full mb-4" />
          <Skeleton className="h-8 w-20 mx-auto" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-gray-100">
          <AvatarImage src={picture} alt={displayName} />
          <AvatarFallback className="text-lg">
            {displayName.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {displayName}
        </h3>
        
        {role && (
          <p className="text-azure font-medium mb-3">
            {role}
          </p>
        )}
        
        {bio && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {bio}
          </p>
        )}
        
        <Button variant="outline" size="sm" asChild>
          <a 
            href={followUrl || `https://njump.me/${pubkey}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center"
          >
            Follow <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export function TeamFollowPack({ naddr, className }: TeamFollowPackProps) {
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
        description: `Following ${followPack.profiles.length} team members from the pack.`,
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
      <div className={className}>
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-48" />
          </div>
          <Skeleton className="h-6 w-96 mx-auto mb-6" />
          <div className="flex gap-2 justify-center">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
        
        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <Card key={i} className="p-6 text-center">
              <CardContent className="p-0">
                <Skeleton className="w-24 h-24 rounded-full mx-auto mb-4" />
                <Skeleton className="h-6 w-32 mx-auto mb-1" />
                <Skeleton className="h-4 w-24 mx-auto mb-3" />
                <Skeleton className="h-16 w-full mb-4" />
                <Skeleton className="h-8 w-20 mx-auto" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <Card className={className}>
        <CardContent className="py-8 text-center">
          <p className="text-muted-foreground">
            Failed to load team follow pack. Please try again later.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!followPack) {
    return null;
  }

  return (
    <div className={className}>
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Users className="h-8 w-8 text-blue-500" />
          <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900">
            {followPack.title || 'Meet the Team'}
          </h2>
        </div>
        
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          {followPack.description || 'The passionate individuals building the future of decentralized social media.'}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          {user && (
            <Button 
              onClick={handleFollowAll}
              disabled={isFollowing || isPublishing}
              className="bg-azure hover:bg-azure/90 text-white flex items-center gap-2"
              size="lg"
            >
              <UserPlus className="h-4 w-4" />
              {isFollowing || isPublishing ? 'Following...' : 'Follow All on Nostr'}
            </Button>
          )}
          
          <Button size="lg" className="bg-azure hover:bg-azure/90 text-white" asChild>
            <Link to="/get-involved" className="inline-flex items-center">
              We're hiring! View open positions
            </Link>
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              {followPack.profiles.length} team members
            </Badge>
            <Badge variant="outline">
              Nostr Follow Pack
            </Badge>
          </div>
          
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
              View pack on following.space
            </a>
          </Button>
        </div>
      </div>
      
      {/* Team Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {followPack.profiles.map((profile) => (
          <EnhancedProfileCard 
            key={profile.pubkey} 
            pubkey={profile.pubkey}
            petname={profile.petname}
          />
        ))}
      </div>
    </div>
  );
}