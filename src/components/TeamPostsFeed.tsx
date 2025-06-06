import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import type { NostrEvent } from '@nostrify/nostrify';
import { useTeamPosts } from '@/hooks/useTeamPosts';
import { useAuthor } from '@/hooks/useAuthor';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useNostrPublish } from '@/hooks/useNostrPublish';
import { usePostInteractions } from '@/hooks/usePostInteractions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { NoteContent } from '@/components/NoteContent';
import { PostReactions } from '@/components/PostReactions';
import { PostComments } from '@/components/PostComments';
import { PostInteractionsSkeleton } from '@/components/PostInteractionsSkeleton';
import { PostModal } from '@/components/PostModal';
import LoginDialog from '@/components/auth/LoginDialog';
import { genUserName } from '@/lib/genUserName';
import { RelaySelector } from '@/components/RelaySelector';
import { cn } from '@/lib/utils';

interface TeamPostItemProps {
  post: NostrEvent;
}

function TeamPostItem({ post }: TeamPostItemProps) {
  const { user } = useCurrentUser();
  const author = useAuthor(post.pubkey);
  const { mutate: publishEvent } = useNostrPublish();
  const { data: interactions, isLoading: interactionsLoading } = usePostInteractions(post.id);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);

  // Check if current user has liked this post
  const isLiked = user && interactions?.reactions.some(
    reaction => reaction.pubkey === user.pubkey && (reaction.content === '+' || reaction.content === '')
  ) || false;

  const metadata = author.data?.metadata;
  const displayName = metadata?.name ?? genUserName(post.pubkey);
  const profileImage = metadata?.picture;
  const about = metadata?.about;

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleLike = () => {
    if (!user) {
      setShowLoginDialog(true);
      return;
    }
    
    publishEvent({
      kind: 7,
      content: '+',
      tags: [
        ['e', post.id],
        ['p', post.pubkey]
      ]
    });
  };

  const handleRepost = () => {
    if (!user) {
      setShowLoginDialog(true);
      return;
    }
    
    publishEvent({
      kind: 6,
      content: JSON.stringify(post),
      tags: [
        ['e', post.id],
        ['p', post.pubkey]
      ]
    });
  };

  const handleZap = () => {
    if (!user) {
      setShowLoginDialog(true);
      return;
    }
    // Zap functionality would be implemented here
    console.log('Zap functionality not yet implemented');
  };

  const handleComment = () => {
    if (!user) {
      setShowLoginDialog(true);
      return;
    }
    setShowPostModal(true);
  };

  return (
    <>
      <Card className={cn("group hover:shadow-lg transition-all duration-300")}>
        <CardHeader className="pb-3">
          <div className="flex items-start space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={profileImage} alt={displayName} />
              <AvatarFallback>{displayName.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900 truncate">{displayName}</h3>
                <Badge variant="secondary" className="bg-azure-100 text-azure-700 text-xs">
                  Team
                </Badge>
              </div>
              <p className="text-sm text-gray-500">{formatDate(post.created_at)}</p>
              {about && (
                <p className="text-sm text-gray-600 mt-1 line-clamp-1">{about}</p>
              )}
            </div>
            
            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="space-y-4">
            {/* Post Content */}
            <div className="text-gray-900 leading-relaxed">
              <NoteContent event={post} />
            </div>
            
            {/* Interaction Buttons */}
            {interactionsLoading ? (
              <PostInteractionsSkeleton />
            ) : interactions ? (
              <PostReactions
                reactions={interactions.reactions}
                comments={interactions.comments}
                reposts={interactions.reposts}
                zaps={interactions.zaps}
                onLike={handleLike}
                onComment={handleComment}
                onRepost={handleRepost}
                onZap={handleZap}
                isLiked={isLiked}
              />
            ) : null}
          </div>
        </CardContent>

        {/* Comments Section */}
        {!interactionsLoading && interactions && interactions.comments.length > 0 && (
          <PostComments 
            comments={interactions.comments} 
            onShowComments={() => setShowPostModal(true)}
          />
        )}
      </Card>

      <LoginDialog
        isOpen={showLoginDialog}
        onClose={() => setShowLoginDialog(false)}
        onLogin={() => setShowLoginDialog(false)}
      />

      <PostModal
        event={post}
        isOpen={showPostModal}
        onClose={() => setShowPostModal(false)}
      />
    </>
  );
}

function TeamPostsSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i}>
          <CardHeader className="pb-3">
            <div className="flex items-start space-x-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-1 flex-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-16" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-3/5" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function TeamPostsFeed() {
  const { data: posts, isLoading, error } = useTeamPosts();

  if (isLoading) {
    return <TeamPostsSkeleton />;
  }

  if (error) {
    return (
      <Card className="border-dashed">
        <CardContent className="py-12 px-8 text-center">
          <div className="max-w-sm mx-auto space-y-6">
            <p className="text-muted-foreground">
              Unable to load team posts. Try another relay?
            </p>
            <RelaySelector className="w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <Card className="border-dashed">
        <CardContent className="py-12 px-8 text-center">
          <div className="max-w-sm mx-auto space-y-6">
            <p className="text-muted-foreground">
              No team posts found. Try another relay?
            </p>
            <RelaySelector className="w-full" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <TeamPostItem key={post.id} post={post} />
      ))}
    </div>
  );
}