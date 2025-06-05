import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, Calendar, User, Hash } from 'lucide-react';
import { useAuthor } from '@/hooks/useAuthor';
import { genUserName } from '@/lib/genUserName';
import { MarkdownContent } from '@/components/blog/MarkdownContent';
import { nip19 } from 'nostr-tools';
import type { NostrEvent } from '@nostrify/nostrify';

interface CustomNipViewProps {
  nip: {
    id: string;
    pubkey: string;
    title: string;
    summary?: string;
    identifier: string;
    publishedAt?: number;
    createdAt: number;
    tags: string[];
    content: string;
    event: NostrEvent;
    kinds: string[];
  };
}

export function CustomNipView({ nip }: CustomNipViewProps) {
  const author = useAuthor(nip.pubkey);
  const authorName = author.data?.metadata?.name ?? genUserName(nip.pubkey);
  const authorImage = author.data?.metadata?.picture;

  // Create naddr for the NIP
  const naddr = nip19.naddrEncode({
    identifier: nip.identifier,
    pubkey: nip.pubkey,
    kind: 30817,
  });

  // Generate NostrHub URL
  const nostrHubUrl = `https://nostrhub.io/${naddr}`;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-4 flex-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-blue-600 border-blue-600">
                  Custom NIP
                </Badge>
                <Badge variant="secondary">
                  {nip.identifier}
                </Badge>
              </div>
              
              <div>
                <CardTitle className="text-2xl mb-2">{nip.title}</CardTitle>
                {nip.summary && (
                  <CardDescription className="text-base">{nip.summary}</CardDescription>
                )}
              </div>

              {/* Event Kinds */}
              {nip.kinds.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Defines Event Kinds:</h4>
                  <div className="flex flex-wrap gap-2">
                    {nip.kinds.map((kind) => (
                      <Badge key={kind} variant="secondary" className="flex items-center gap-1">
                        <Hash className="h-3 w-3" />
                        Kind {kind}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {nip.tags.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {nip.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Button variant="outline" size="sm" asChild>
              <a href={nostrHubUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View on NostrHub
              </a>
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Author Info */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={authorImage} alt={authorName} />
                <AvatarFallback>
                  <User className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{authorName}</h3>
                <p className="text-sm text-muted-foreground">
                  {nip19.npubEncode(nip.pubkey).slice(0, 16)}...
                </p>
              </div>
            </div>
            
            <div className="text-right text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Published {new Date(nip.createdAt * 1000).toLocaleDateString()}
              </div>
              {nip.publishedAt && nip.publishedAt !== nip.createdAt && (
                <div className="mt-1">
                  Updated {new Date(nip.publishedAt * 1000).toLocaleDateString()}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content */}
      <Card>
        <CardHeader>
          <CardTitle>Specification</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <div className="prose prose-gray max-w-none">
            <MarkdownContent content={nip.content} />
          </div>
        </CardContent>
      </Card>

      {/* Metadata */}
      <Card>
        <CardHeader>
          <CardTitle>Metadata</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Event ID:</span>
              <p className="text-muted-foreground font-mono break-all">{nip.id}</p>
            </div>
            <div>
              <span className="font-medium">Author Pubkey:</span>
              <p className="text-muted-foreground font-mono break-all">{nip.pubkey}</p>
            </div>
            <div>
              <span className="font-medium">Identifier:</span>
              <p className="text-muted-foreground">{nip.identifier}</p>
            </div>
            <div>
              <span className="font-medium">Event Kind:</span>
              <p className="text-muted-foreground">30817 (Custom NIP)</p>
            </div>
            <div className="md:col-span-2">
              <span className="font-medium">Nostr Address (naddr):</span>
              <p className="text-muted-foreground font-mono break-all">{naddr}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}