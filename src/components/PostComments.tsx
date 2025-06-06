import { MessageCircle } from 'lucide-react';
import type { NostrEvent } from '@nostrify/nostrify';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PostCommentsProps {
  comments: NostrEvent[];
  onShowComments: () => void;
  className?: string;
}

export function PostComments({ comments, onShowComments, className }: PostCommentsProps) {
  if (comments.length === 0) {
    return null;
  }

  return (
    <div className={cn("border-t border-gray-100", className)}>
      <div className="px-4 py-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={onShowComments}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 text-sm w-full justify-start"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Show {comments.length} {comments.length === 1 ? 'comment' : 'comments'}</span>
        </Button>
      </div>
    </div>
  );
}