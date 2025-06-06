import { Heart, MessageCircle, Repeat2, Zap } from 'lucide-react';
import type { NostrEvent } from '@nostrify/nostrify';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PostReactionsProps {
  reactions: NostrEvent[];
  comments: NostrEvent[];
  reposts: NostrEvent[];
  zaps: NostrEvent[];
  onLike: () => void;
  onComment: () => void;
  onRepost: () => void;
  onZap: () => void;
  isLiked?: boolean;
  className?: string;
}

export function PostReactions({
  reactions,
  comments,
  reposts,
  zaps,
  onLike,
  onComment,
  onRepost,
  onZap,
  isLiked = false,
  className,
}: PostReactionsProps) {
  // Count different types of reactions
  const likeCount = reactions.filter(r => r.content === '+' || r.content === '').length;
  const commentCount = comments.length;
  const repostCount = reposts.length;
  const zapCount = zaps.length;

  // Calculate total zap amount (from bolt11 tags)
  const totalZapAmount = zaps.reduce((total, zap) => {
    const bolt11Tag = zap.tags.find(tag => tag[0] === 'bolt11');
    if (bolt11Tag && bolt11Tag[1]) {
      try {
        // Extract amount from bolt11 invoice (simplified)
        const invoice = bolt11Tag[1].toLowerCase();
        const match = invoice.match(/lnbc(\d+)([munp]?)/);
        if (match) {
          const amount = parseInt(match[1]);
          const unit = match[2] || '';
          // Convert to sats (simplified conversion)
          let sats = amount;
          if (unit === 'm') sats = amount / 1000; // millisats to sats
          else if (unit === 'u') sats = amount / 1000000; // microsats to sats
          else if (unit === 'n') sats = amount / 1000000000; // nanosats to sats
          else if (unit === 'p') sats = amount / 1000000000000; // picosats to sats
          // If no unit, assume it's in the base unit (bitcoin), convert to sats
          else if (!unit) sats = amount * 100000000;
          return total + Math.max(0, sats); // Ensure non-negative
        }
      } catch {
        console.warn('Failed to parse bolt11 invoice:', bolt11Tag[1]);
      }
    }
    return total;
  }, 0);

  return (
    <div className={cn("flex items-center justify-between pt-3 border-t border-gray-100", className)}>
      <div className="flex items-center space-x-6">
        {/* Like Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onLike}
          className={cn(
            "flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors",
            isLiked && "text-red-500"
          )}
        >
          <Heart className={cn("h-4 w-4", isLiked && "fill-current")} />
          <span className="text-sm">{likeCount}</span>
        </Button>
        
        {/* Comment Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onComment}
          className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="text-sm">{commentCount}</span>
        </Button>
        
        {/* Repost Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onRepost}
          className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors"
        >
          <Repeat2 className="h-4 w-4" />
          <span className="text-sm">{repostCount}</span>
        </Button>
        
        {/* Zap Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onZap}
          className="flex items-center space-x-2 text-gray-500 hover:text-orange-500 transition-colors"
        >
          <Zap className="h-4 w-4" />
          <span className="text-sm">
            {zapCount > 0 && totalZapAmount > 0 
              ? Math.round(totalZapAmount)
              : zapCount
            }
          </span>
        </Button>
      </div>
    </div>
  );
}