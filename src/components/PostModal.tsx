import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import type { NostrEvent } from '@nostrify/nostrify';
import { useAuthor } from '@/hooks/useAuthor';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useNostrPublish } from '@/hooks/useNostrPublish';
import { usePostInteractions } from '@/hooks/usePostInteractions';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { NoteContent } from '@/components/NoteContent';
import { QuotedPost } from '@/components/QuotedPost';
import { PostReactions } from '@/components/PostReactions';
import { LoginArea } from '@/components/auth/LoginArea';
import { genUserName } from '@/lib/genUserName';

interface PostModalProps {
  event: NostrEvent;
  isOpen: boolean;
  onClose: () => void;
}

interface CommentItemProps {
  comment: NostrEvent;
}

function CommentItem({ comment }: CommentItemProps) {
  const author = useAuthor(comment.pubkey);
  const metadata = author.data?.metadata;
  const displayName = metadata?.name ?? genUserName(comment.pubkey);
  const profileImage = metadata?.picture;

  // Handle quote posts in comments
  const isQuotePost = comment.kind === 1 && comment.tags.some(tag => tag[0] === 'q');
  const qTag = isQuotePost ? comment.tags.find(tag => tag[0] === 'q') : null;

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="flex space-x-3 py-4 border-b border-gray-100 last:border-b-0">
      <Avatar className="w-10 h-10 flex-shrink-0">
        <AvatarImage src={profileImage} alt={displayName} />
        <AvatarFallback className="text-sm">
          {displayName.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2 mb-2">
          <span className="font-medium text-sm text-gray-900 truncate">
            {displayName}
          </span>
          <span className="text-xs text-gray-500">
            {formatDate(comment.created_at)}
          </span>
        </div>
        
        <div className="text-sm text-gray-700 leading-relaxed">
          <NoteContent event={comment} hideQuoteReferences={isQuotePost} />
        </div>

        {/* Quoted Post in Comment */}
        {isQuotePost && qTag && (
          <div className="mt-3">
            <QuotedPost qTag={qTag} className="text-xs" />
          </div>
        )}
      </div>
    </div>
  );
}

export function PostModal({ event, isOpen, onClose }: PostModalProps) {
  const { user } = useCurrentUser();
  const author = useAuthor(event.pubkey);
  const { mutate: publishEvent } = useNostrPublish();
  const { data: interactions, isLoading: interactionsLoading } = usePostInteractions(event.id);
  const [replyContent, setReplyContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle quote posts (kind 1 with q tag)
  const isQuotePost = event.kind === 1 && event.tags.some(tag => tag[0] === 'q');
  const qTag = isQuotePost ? event.tags.find(tag => tag[0] === 'q') : null;

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
    if (!user) return;
    
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
    if (!user) return;
    
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
    if (!user) return;
    console.log('Zap functionality not yet implemented');
  };

  const handleComment = () => {
    // This is handled by the reply form below
  };

  const handleReplySubmit = async () => {
    if (!user || !replyContent.trim()) return;

    setIsSubmitting(true);
    try {
      publishEvent({
        kind: 1,
        content: replyContent.trim(),
        tags: [
          ['e', event.id, '', 'reply'],
          ['p', event.pubkey]
        ]
      });
      setReplyContent('');
    } catch (error) {
      console.error('Failed to publish reply:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Sort comments by creation time (oldest first for better conversation flow)
  const sortedComments = interactions?.comments 
    ? [...interactions.comments].sort((a, b) => a.created_at - b.created_at)
    : [];

  // Generate ditto.pub URL for the post
  const getDittoUrl = () => {
    // Try to get the user's NIP-05 identifier or use a fallback
    const nip05 = metadata?.nip05;
    if (nip05) {
      // Use NIP-05 format: https://ditto.pub/@username@domain.com/posts/eventid
      return `https://ditto.pub/@${nip05}/posts/${event.id}`;
    } else {
      // Fallback to pubkey format if no NIP-05
      return `https://ditto.pub/users/${event.pubkey}/posts/${event.id}`;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-4 pb-0 pr-12">
          <div className="flex flex-col space-y-3">
            <h2 className="text-lg font-semibold">Post</h2>
            <Button variant="outline" size="sm" className="self-start" asChild>
              <a 
                href={getDittoUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                View on Ditto
              </a>
            </Button>
          </div>
        </DialogHeader>

        {/* Single scrollable content area */}
        <div className="overflow-y-auto max-h-[calc(90vh-4rem)]">
          {/* Main Post */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-start space-x-3 mb-4">
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
            </div>
            
            <div className="text-gray-900 leading-relaxed mb-4">
              <NoteContent event={event} hideQuoteReferences={isQuotePost} />
            </div>

            {/* Quoted Post */}
            {isQuotePost && qTag && (
              <div className="mb-4">
                <QuotedPost qTag={qTag} />
              </div>
            )}

            {/* Interaction Buttons */}
            {!interactionsLoading && interactions && (
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
            )}
          </div>

          {/* Reply Form */}
          <div className="p-4 border-b border-gray-200">
            {user ? (
              <div className="space-y-3">
                <Textarea
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="Write a reply..."
                  className="min-h-[80px] resize-none"
                />
                <div className="flex justify-end">
                  <Button
                    onClick={handleReplySubmit}
                    disabled={!replyContent.trim() || isSubmitting}
                    size="sm"
                  >
                    {isSubmitting ? 'Posting...' : 'Reply'}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-600 mb-3">Log in to reply to this post</p>
                <LoginArea className="justify-center" />
              </div>
            )}
          </div>

          {/* Comments Section */}
          <div>
            {interactionsLoading ? (
              <div className="p-4 text-center text-gray-500">
                Loading comments...
              </div>
            ) : sortedComments.length > 0 ? (
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-4">
                  {sortedComments.length} {sortedComments.length === 1 ? 'Comment' : 'Comments'}
                </h3>
                <div className="space-y-0">
                  {sortedComments.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-4 text-center text-gray-500">
                No comments yet. Be the first to reply!
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}