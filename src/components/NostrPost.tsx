import { useState } from 'react';
import { MoreHorizontal } from 'lucide-react';
import type { NostrEvent } from '@nostrify/nostrify';
import { useAuthor } from '@/hooks/useAuthor';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useNostrPublish } from '@/hooks/useNostrPublish';
import { usePostInteractions } from '@/hooks/usePostInteractions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { NoteContent } from '@/components/NoteContent';
import { PostReactions } from '@/components/PostReactions';
import { PostComments } from '@/components/PostComments';
import { PostInteractionsSkeleton } from '@/components/PostInteractionsSkeleton';
import { PostModal } from '@/components/PostModal';
import LoginDialog from '@/components/auth/LoginDialog';
import { genUserName } from '@/lib/genUserName';
import { cn } from '@/lib/utils';

interface NostrPostProps {
  event: NostrEvent;
  className?: string;
}

export function NostrPost({ event, className }: NostrPostProps) {
  const { user } = useCurrentUser();
  const author = useAuthor(event.pubkey);
  const { mutate: publishEvent } = useNostrPublish();
  const { data: interactions, isLoading: interactionsLoading } = usePostInteractions(event.id);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);

  // Check if current user has liked this post
  const isLiked = user && interactions?.reactions.some(
    reaction => reaction.pubkey === user.pubkey && (reaction.content === '+' || reaction.content === '')
  ) || false;

  const metadata = author.data?.metadata;
  const displayName = metadata?.name ?? genUserName(event.pubkey);
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
        ['e', event.id],
        ['p', event.pubkey]
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
      content: JSON.stringify(event),
      tags: [
        ['e', event.id],
        ['p', event.pubkey]
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
    <Card className={cn("group hover:shadow-lg transition-all duration-300", className)}>
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
                Soapbox
              </Badge>
            </div>
            <p className="text-sm text-gray-500">{formatDate(event.created_at)}</p>
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
            <NoteContent event={event} />
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

      <LoginDialog
        isOpen={showLoginDialog}
        onClose={() => setShowLoginDialog(false)}
        onLogin={() => setShowLoginDialog(false)}
      />

      <PostModal
        event={event}
        isOpen={showPostModal}
        onClose={() => setShowPostModal(false)}
      />
    </Card>
  );
}