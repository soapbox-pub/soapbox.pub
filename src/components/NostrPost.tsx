import { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Zap, MoreHorizontal } from 'lucide-react';
import type { NostrEvent } from '@nostrify/nostrify';
import { useAuthor } from '@/hooks/useAuthor';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useNostrPublish } from '@/hooks/useNostrPublish';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { NoteContent } from '@/components/NoteContent';
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
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [repostCount, setRepostCount] = useState(0);
  const [commentCount] = useState(0);
  const [showLoginDialog, setShowLoginDialog] = useState(false);

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
    
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleRepost = () => {
    if (!user) {
      setShowLoginDialog(true);
      return;
    }
    
    publishEvent({
      kind: 6,
      content: '',
      tags: [
        ['e', event.id],
        ['p', event.pubkey]
      ]
    });
    
    setRepostCount(prev => prev + 1);
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
    // Comment functionality would be implemented here
    console.log('Comment functionality not yet implemented');
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
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-6">
              {/* Like Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
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
                onClick={handleComment}
                className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">{commentCount}</span>
              </Button>
              
              {/* Repost Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleRepost}
                className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors"
              >
                <Repeat2 className="h-4 w-4" />
                <span className="text-sm">{repostCount}</span>
              </Button>
              
              {/* Zap Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleZap}
                className="flex items-center space-x-2 text-gray-500 hover:text-orange-500 transition-colors"
              >
                <Zap className="h-4 w-4" />
              </Button>
            </div>
            

          </div>
        </div>
      </CardContent>

      <LoginDialog
        isOpen={showLoginDialog}
        onClose={() => setShowLoginDialog(false)}
        onLogin={() => setShowLoginDialog(false)}
      />
    </Card>
  );
}