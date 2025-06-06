import { Repeat2 } from 'lucide-react';
import type { NostrEvent } from '@nostrify/nostrify';
import { useAuthor } from '@/hooks/useAuthor';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { NoteContent } from '@/components/NoteContent';
import { genUserName } from '@/lib/genUserName';
import { cn } from '@/lib/utils';

interface RepostCardProps {
  repostEvent: NostrEvent;
  originalEvent: NostrEvent;
  className?: string;
}

export function RepostCard({ repostEvent, originalEvent, className }: RepostCardProps) {
  const reposter = useAuthor(repostEvent.pubkey);
  const originalAuthor = useAuthor(originalEvent.pubkey);

  const reposterMetadata = reposter.data?.metadata;
  const reposterName = reposterMetadata?.name ?? genUserName(repostEvent.pubkey);

  const originalMetadata = originalAuthor.data?.metadata;
  const originalDisplayName = originalMetadata?.name ?? genUserName(originalEvent.pubkey);
  const originalProfileImage = originalMetadata?.picture;
  const originalAbout = originalMetadata?.about;

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Card className={cn("group hover:shadow-lg transition-all duration-300", className)}>
      {/* Repost indicator */}
      <div className="px-4 pt-3 pb-1">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Repeat2 className="h-4 w-4" />
          <span>{reposterName} reposted</span>
        </div>
      </div>

      {/* Original post content */}
      <CardHeader className="pb-3 pt-2">
        <div className="flex items-start space-x-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={originalProfileImage} alt={originalDisplayName} />
            <AvatarFallback>{originalDisplayName.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-gray-900 truncate">{originalDisplayName}</h3>
              <Badge variant="secondary" className="bg-azure-100 text-azure-700 text-xs">
                Soapbox
              </Badge>
            </div>
            <p className="text-sm text-gray-500">{formatDate(originalEvent.created_at)}</p>
            {originalAbout && (
              <p className="text-sm text-gray-600 mt-1 line-clamp-1">{originalAbout}</p>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="text-gray-900 leading-relaxed">
          <NoteContent event={originalEvent} />
        </div>
      </CardContent>
    </Card>
  );
}