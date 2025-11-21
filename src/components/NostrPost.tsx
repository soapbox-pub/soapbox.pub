import { useState, useRef, useEffect } from 'react';
import { MoreHorizontal, ChevronDown } from 'lucide-react';
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
import { QuotedPost } from '@/components/QuotedPost';
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
  showBadge?: boolean;
  maxHeight?: number;
}

export function NostrPost({ event, className, showBadge = true, maxHeight }: NostrPostProps) {
  const { user } = useCurrentUser();
  const author = useAuthor(event.pubkey);
  const { mutate: publishEvent } = useNostrPublish();
  const { data: interactions, isLoading: interactionsLoading } = usePostInteractions(event.id);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Check if content is truncated
  useEffect(() => {
    if (maxHeight && contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setIsTruncated(contentHeight > maxHeight);
    }
  }, [maxHeight, event.content]);

  // Handle repost events (kind 6)
  const isRepost = event.kind === 6;
  const originalEvent = isRepost ? (() => {
    try {
      return JSON.parse(event.content) as NostrEvent;
    } catch {
      // If content parsing fails, try to get event from tags
      const eTag = event.tags.find(tag => tag[0] === 'e');
      if (eTag) {
        // Event needs to be fetched by ID - returning null for now
        return null;
      }
      return null;
    }
  })() : null;

  // Handle quote posts (kind 1 with q tag)
  const isQuotePost = event.kind === 1 && event.tags.some(tag => tag[0] === 'q');
  const qTag = isQuotePost ? event.tags.find(tag => tag[0] === 'q') : null;

  // Use original event for interactions if this is a repost
  const targetEvent = originalEvent || event;
  const targetEventId = targetEvent.id;

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
        ['e', targetEventId],
        ['p', targetEvent.pubkey]
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
      content: JSON.stringify(targetEvent),
      tags: [
        ['e', targetEventId],
        ['p', targetEvent.pubkey]
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

  // If this is a repost, show a simplified repost view
  if (isRepost) {
    const displayEvent = originalEvent || event;

    return (
      <Card className={cn("group hover:shadow-lg transition-all duration-300", className)}>
        <div className="px-4 pt-3 pb-1">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Repost</span>
          </div>
        </div>

        <CardHeader className="pb-3 pt-2">
          <div className="flex items-start space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={profileImage} alt={displayName} />
              <AvatarFallback>{displayName.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900 truncate">{displayName}</h3>
                {showBadge && (
                  <Badge variant="secondary" className="bg-azure-100 text-azure-700 text-xs">
                    Soapbox
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-500">{formatDate(displayEvent.created_at)}</p>
              {about && (
                <p className="text-sm text-gray-600 mt-1 line-clamp-1">{about}</p>
              )}
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="relative">
            <div
              ref={contentRef}
              className={cn(
                "text-gray-900 leading-relaxed overflow-hidden transition-all duration-300",
                !isExpanded && maxHeight && "relative"
              )}
              style={!isExpanded && maxHeight ? { maxHeight: `${maxHeight}px` } : undefined}
            >
              <NoteContent event={displayEvent} />
              {!isExpanded && isTruncated && (
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
              )}
            </div>
            {isTruncated && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full mt-2 text-azure hover:text-azure-600"
              >
                {isExpanded ? 'Show less' : 'Read more'}
                <ChevronDown className={cn("ml-2 h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
              </Button>
            )}
          </div>
        </CardContent>

        <LoginDialog
          isOpen={showLoginDialog}
          onClose={() => setShowLoginDialog(false)}
          onLogin={() => setShowLoginDialog(false)}
        />

        <PostModal
          event={displayEvent}
          isOpen={showPostModal}
          onClose={() => setShowPostModal(false)}
        />
      </Card>
    );
  }

  // Regular post rendering
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
              {showBadge && (
                <Badge variant="secondary" className="bg-azure-100 text-azure-700 text-xs">
                  Soapbox
                </Badge>
              )}
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
          <div className="relative">
            <div
              ref={contentRef}
              className={cn(
                "text-gray-900 leading-relaxed overflow-hidden transition-all duration-300",
                !isExpanded && maxHeight && "relative"
              )}
              style={!isExpanded && maxHeight ? { maxHeight: `${maxHeight}px` } : undefined}
            >
              <NoteContent event={event} hideQuoteReferences={isQuotePost} />
              {!isExpanded && isTruncated && (
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
              )}
            </div>
            {isTruncated && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full mt-2 text-azure hover:text-azure-600"
              >
                {isExpanded ? 'Show less' : 'Read more'}
                <ChevronDown className={cn("ml-2 h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
              </Button>
            )}
          </div>

          {/* Quoted Post */}
          {isQuotePost && qTag && (
            <QuotedPost qTag={qTag} />
          )}

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