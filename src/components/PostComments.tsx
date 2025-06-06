import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { NostrEvent } from '@nostrify/nostrify';
import { useAuthor } from '@/hooks/useAuthor';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { NoteContent } from '@/components/NoteContent';
import { genUserName } from '@/lib/genUserName';
import { cn } from '@/lib/utils';

interface PostCommentsProps {
  comments: NostrEvent[];
  className?: string;
}

interface CommentItemProps {
  comment: NostrEvent;
}

function CommentItem({ comment }: CommentItemProps) {
  const author = useAuthor(comment.pubkey);
  const metadata = author.data?.metadata;
  const displayName = metadata?.name ?? genUserName(comment.pubkey);
  const profileImage = metadata?.picture;

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="flex space-x-3 py-3">
      <Avatar className="w-8 h-8 flex-shrink-0">
        <AvatarImage src={profileImage} alt={displayName} />
        <AvatarFallback className="text-xs">
          {displayName.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2 mb-1">
          <span className="font-medium text-sm text-gray-900 truncate">
            {displayName}
          </span>
          <span className="text-xs text-gray-500">
            {formatDate(comment.created_at)}
          </span>
        </div>
        
        <div className="text-sm text-gray-700 leading-relaxed">
          <NoteContent event={comment} />
        </div>
      </div>
    </div>
  );
}

export function PostComments({ comments, className }: PostCommentsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  if (comments.length === 0) {
    return null;
  }

  // Sort comments by creation time (newest first)
  const sortedComments = [...comments].sort((a, b) => b.created_at - a.created_at);
  
  // Show first 3 comments when collapsed, all when expanded
  const displayedComments = isExpanded ? sortedComments : sortedComments.slice(0, 3);
  const hasMoreComments = sortedComments.length > 3;

  return (
    <div className={cn("border-t border-gray-100", className)}>
      {/* Toggle Button */}
      {hasMoreComments && (
        <div className="px-4 py-2 border-b border-gray-50">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 text-sm"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4" />
                <span>Hide comments</span>
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4" />
                <span>Show all {comments.length} comments</span>
              </>
            )}
          </Button>
        </div>
      )}
      
      {/* Comments List */}
      <div className="px-4">
        {displayedComments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}