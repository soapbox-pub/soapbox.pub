import { useQuery } from '@tanstack/react-query';
import { useNostr } from '@/hooks/useNostr';
import { useAuthor } from '@/hooks/useAuthor';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { NoteContent } from '@/components/NoteContent';
import { genUserName } from '@/lib/genUserName';
import { cn } from '@/lib/utils';

interface QuotedPostProps {
  qTag: string[];
  className?: string;
}

export function QuotedPost({ qTag, className }: QuotedPostProps) {
  const { nostr } = useNostr();
  
  // Extract event ID and relay URL from q tag
  const [, eventId, , authorPubkey] = qTag;
  
  // Fetch the quoted event
  const { data: quotedEvent, isLoading, error } = useQuery({
    queryKey: ['quoted-event', eventId],
    queryFn: async (c) => {
      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(1500)]);
      const events = await nostr.query([{ ids: [eventId] }], { signal });
      return events[0] || null;
    },
    enabled: !!eventId,
  });

  // Get author info for the quoted post
  const author = useAuthor(quotedEvent?.pubkey || authorPubkey || '');
  
  const metadata = author.data?.metadata;
  const displayName = metadata?.name ?? genUserName(quotedEvent?.pubkey || authorPubkey || '');
  const profileImage = metadata?.picture;

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <Card className={cn("border-l-4 border-l-blue-200 bg-gray-50/50", className)}>
        <CardHeader className="pb-2">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-4/5" />
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !quotedEvent) {
    return (
      <Card className={cn("border-l-4 border-l-red-200 bg-gray-50/50", className)}>
        <CardContent className="py-4">
          <p className="text-sm text-muted-foreground">
            {error ? 'Failed to load quoted post' : 'Quoted post not found'}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={cn("border-l-4 border-l-blue-200 bg-gray-50/50 hover:bg-gray-100/50 transition-colors", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src={profileImage} alt={displayName} />
            <AvatarFallback className="text-xs">
              {displayName.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center space-x-2 min-w-0">
            <span className="font-medium text-sm truncate">{displayName}</span>
            <span className="text-xs text-muted-foreground">
              {formatDate(quotedEvent.created_at)}
            </span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="text-sm">
          <NoteContent event={quotedEvent} />
        </div>
      </CardContent>
    </Card>
  );
}