import { useState } from 'react';
import { Search, Filter, Calendar, User, Hash, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useCustomNips } from '@/hooks/useCustomNips';
import { useAuthor } from '@/hooks/useAuthor';
import { genUserName } from '@/lib/genUserName';
import { nip19 } from 'nostr-tools';

import { RelaySelector } from '@/components/RelaySelector';
import type { NostrEvent } from '@nostrify/nostrify';

interface CustomNip {
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
}

interface NipCardProps {
  nip: CustomNip;
}

function NipCard({ nip }: NipCardProps) {
  const author = useAuthor(nip.pubkey);
  const authorName = author.data?.metadata?.name ?? genUserName(nip.pubkey);
  const authorImage = author.data?.metadata?.picture;

  // Create naddr for the NIP
  const naddr = nip19.naddrEncode({
    identifier: nip.identifier,
    pubkey: nip.pubkey,
    kind: 30817,
  });

  // Get a color for the NIP identifier
  const getColor = (identifier: string) => {
    const colors = ['blue', 'purple', 'green', 'orange', 'red', 'indigo'];
    const hash = identifier.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  const color = getColor(nip.identifier);
  const colorClasses = {
    blue: 'bg-blue-600',
    purple: 'bg-purple-600', 
    green: 'bg-green-600',
    orange: 'bg-orange-600',
    red: 'bg-red-600',
    indigo: 'bg-indigo-600',
  };

  return (
    <a href={`https://nostrhub.io/${naddr}`} target="_blank" rel="noopener noreferrer">
      <Card className="h-full hover:shadow-lg transition-all duration-200 hover:border-blue-200 group">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 ${colorClasses[color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <span className="text-white font-bold text-xs">
                  {nip.identifier.toUpperCase()}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <CardTitle className="text-lg group-hover:text-blue-600 transition-colors truncate">
                  {nip.title}
                </CardTitle>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="outline" className="text-blue-600 border-blue-600 text-xs">
                    Custom
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {nip.identifier}
                  </span>
                </div>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {nip.summary && (
            <CardDescription className="line-clamp-2">
              {nip.summary}
            </CardDescription>
          )}

          {/* Event Kinds */}
          {nip.kinds.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Hash className="h-3 w-3" />
                Event Kinds:
              </div>
              <div className="flex flex-wrap gap-1">
                {nip.kinds.slice(0, 4).map((kind) => (
                  <Badge key={kind} variant="secondary" className="text-xs">
                    {kind}
                  </Badge>
                ))}
                {nip.kinds.length > 4 && (
                  <Badge variant="secondary" className="text-xs">
                    +{nip.kinds.length - 4}
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* Tags */}
          {nip.tags.length > 0 && (
            <div className="space-y-2">
              <div className="text-xs text-muted-foreground">Tags:</div>
              <div className="flex flex-wrap gap-1">
                {nip.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {nip.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{nip.tags.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* Author and Date */}
          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center space-x-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={authorImage} alt={authorName} />
                <AvatarFallback className="text-xs">
                  <User className="h-3 w-3" />
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-muted-foreground truncate">
                {authorName}
              </span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{new Date(nip.createdAt * 1000).toLocaleDateString()}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

function NipCardSkeleton() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start space-x-3">
          <Skeleton className="w-10 h-10 rounded-lg" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-3/4" />
            <div className="flex space-x-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-3 w-20" />
          <div className="flex space-x-1">
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-5 w-12" />
          </div>
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-2">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-3 w-16" />
        </div>
      </CardContent>
    </Card>
  );
}

export function CustomNipsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filterBy, setFilterBy] = useState('all');

  const { data: nips, isLoading, error } = useCustomNips(50); // Get more NIPs for filtering

  // Filter and sort NIPs
  const filteredNips = nips?.filter(nip => {
    const matchesSearch = searchTerm === '' || 
      nip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nip.summary?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nip.identifier.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nip.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      nip.kinds.some(kind => kind.includes(searchTerm));

    const matchesFilter = filterBy === 'all' || 
      (filterBy === 'with-kinds' && nip.kinds.length > 0) ||
      (filterBy === 'no-kinds' && nip.kinds.length === 0);

    return matchesSearch && matchesFilter;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.createdAt - a.createdAt;
      case 'oldest':
        return a.createdAt - b.createdAt;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return b.createdAt - a.createdAt;
    }
  });

  if (error) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Custom NIPs</h2>
          <p className="text-muted-foreground mb-6">
            Browse community-authored Nostr Implementation Possibilities
          </p>
        </div>

        <Card className="border-dashed">
          <CardContent className="py-12 px-8 text-center">
            <div className="max-w-sm mx-auto space-y-6">
              <p className="text-muted-foreground">
                Unable to load custom NIPs. Try switching to a different relay?
              </p>
              <RelaySelector className="w-full" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Custom NIPs</h2>
        <p className="text-muted-foreground mb-6">
          Browse community-authored Nostr Implementation Possibilities
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search NIPs by title, identifier, tags, or event kinds..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[140px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="oldest">Oldest</SelectItem>
            <SelectItem value="title">Title A-Z</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filterBy} onValueChange={setFilterBy}>
          <SelectTrigger className="w-[140px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All NIPs</SelectItem>
            <SelectItem value="with-kinds">With Event Kinds</SelectItem>
            <SelectItem value="no-kinds">Documentation Only</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <NipCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredNips && filteredNips.length > 0 ? (
        <>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {filteredNips.length} custom NIP{filteredNips.length !== 1 ? 's' : ''} found
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNips.map((nip) => (
              <NipCard key={nip.id} nip={nip} />
            ))}
          </div>
        </>
      ) : (
        <Card className="border-dashed">
          <CardContent className="py-12 px-8 text-center">
            <div className="max-w-sm mx-auto space-y-6">
              <p className="text-muted-foreground">
                {searchTerm || filterBy !== 'all' 
                  ? 'No custom NIPs match your search criteria.' 
                  : 'No custom NIPs found. Be the first to publish one!'
                }
              </p>
              {(!searchTerm && filterBy === 'all') && (
                <RelaySelector className="w-full" />
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}