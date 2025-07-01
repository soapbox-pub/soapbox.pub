import { useFollowPack } from '@/hooks/useFollowPack';
import { useAuthor } from '@/hooks/useAuthor';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Users, ExternalLink } from 'lucide-react';
import { genUserName } from '@/lib/genUserName';
import { getTeamMemberByPubkey } from '@/lib/teamData';
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
        
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
          {followPack.description || 'The passionate individuals building the future of decentralized social media.'}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button size="lg" className="bg-azure hover:bg-azure/90 text-white" asChild>
            <Link to="/get-involved" className="inline-flex items-center">
              We're hiring! View open positions
            </Link>
          </Button>
          
            <Button 
            size="lg" 
            variant="outline" 
            asChild
            className="flex items-center gap-2"
            >
            <a 
              href={`https://following.space/d/${followPack.event.tags.find(([name]) => name === 'd')?.[1]}?p=${followPack.event.pubkey}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
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