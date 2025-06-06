import { Download, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuthor } from "@/hooks/useAuthor";
import { genUserName } from "@/lib/genUserName";
import type { StackEvent } from "@/hooks/useStacks";
import { nip19 } from 'nostr-tools';

interface StackCardProps {
  stack: StackEvent;
  featured?: boolean;
}

export function StackCard({ stack, featured = false }: StackCardProps) {
  const author = useAuthor(stack.pubkey);
  const metadata = author.data?.metadata;

  // Extract stack metadata from tags
  const d = stack.tags.find(([name]) => name === 'd')?.[1] || '';
  const title = stack.tags.find(([name]) => name === 'title')?.[1] || 'Untitled Stack';
  const description = stack.tags.find(([name]) => name === 'description')?.[1] || 
                     stack.content || 'No description available';
  const version = stack.tags.find(([name]) => name === 'version')?.[1] || 'v1.0.0';
  const tags = stack.tags.filter(([name]) => name === 't').map(([, tag]) => tag);
  
  // Generate naddr for the stack
  const naddr = nip19.naddrEncode({
    identifier: d,
    pubkey: stack.pubkey,
    kind: 30717,
  });

  const displayName = metadata?.name ?? genUserName(stack.pubkey);
  const authorInitials = displayName.slice(0, 2).toUpperCase();

  // Generate getstacks.dev URL
  const getstacksUrl = `https://getstacks.dev/stack/${naddr}`;

  return (
    <Card className={`bg-white shadow-lg hover:shadow-xl transition-shadow ${
      featured ? 'border-2 border-violet-200' : ''
    }`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className={featured ? "bg-violet-100 text-violet-700" : "bg-gray-100 text-gray-700"}>
                {authorInitials}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-600">by @{displayName}</p>
            </div>
          </div>
          {featured && (
            <Badge variant="secondary" className="bg-violet-100 text-violet-700">
              ⭐ Featured
            </Badge>
          )}
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 4).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 4} more
              </Badge>
            )}
          </div>
        )}
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <span>Stack</span>
            </div>
            <div className="flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span>Template</span>
            </div>
          </div>
          <span>{version}</span>
        </div>
        
        <Button 
          className={`w-full ${
            featured 
              ? 'bg-violet-600 hover:bg-violet-700' 
              : 'bg-emerald-600 hover:bg-emerald-700'
          }`} 
          asChild
        >
          <a href={getstacksUrl} target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-4 w-4" />
            Use Stack
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}