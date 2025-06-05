import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useCustomNips } from "@/hooks/useCustomNips";
import { useAuthor } from "@/hooks/useAuthor";
import { genUserName } from "@/lib/genUserName";
import { nip19 } from "nostr-tools";
import { Link } from "react-router-dom";
import type { NostrEvent } from "@nostrify/nostrify";

interface NipItemProps {
  nip: {
    id: string;
    pubkey: string;
    title: string;
    summary?: string;
    identifier: string;
    publishedAt?: number;
    createdAt: number;
    tags: string[];
    event: NostrEvent;
    kinds: string[];
  };
}

function NipItem({ nip }: NipItemProps) {
  const author = useAuthor(nip.pubkey);
  const authorName = author.data?.metadata?.name ?? genUserName(nip.pubkey);

  // Create naddr for the NIP
  const naddr = nip19.naddrEncode({
    identifier: nip.identifier,
    pubkey: nip.pubkey,
    kind: 30817,
  });

  return (
    <Link to={`/nip/${naddr}`} className="block">
      <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 group transition-colors">
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold truncate group-hover:text-blue-600 transition-colors">{nip.title}</h4>
          <p className="text-sm text-gray-600 truncate">
            {nip.summary || `By ${authorName}`}
          </p>
          {nip.kinds.length > 0 && (
            <div className="flex gap-1 mt-1">
              {nip.kinds.slice(0, 3).map((kind) => (
                <Badge key={kind} variant="secondary" className="text-xs">
                  Kind {kind}
                </Badge>
              ))}
              {nip.kinds.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{nip.kinds.length - 3}
                </Badge>
              )}
            </div>
          )}
        </div>
        <div className="text-right text-sm flex-shrink-0">
          <Badge variant="outline" className="text-blue-600 border-blue-600 mb-1">
            Custom
          </Badge>
          <div className="text-gray-500">
            {new Date(nip.createdAt * 1000).toLocaleDateString()}
          </div>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </Link>
  );
}

function NipSkeleton() {
  return (
    <div className="flex items-center space-x-4 p-3 rounded-lg">
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
      <div className="text-right space-y-1">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
  );
}

export function RecentNips() {
  const { data: nips, isLoading, error } = useCustomNips(3);

  if (error) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl border">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Recent Custom NIPs</h3>
            <Badge variant="secondary">Live Updates</Badge>
          </div>
        </div>
        <div className="p-6">
          <div className="text-center text-gray-500">
            <p>Unable to load custom NIPs</p>
            <p className="text-sm mt-1">Try switching to a different relay</p>
          </div>
        </div>
        <div className="p-4 border-t bg-gray-50 rounded-b-2xl">
          <Button variant="outline" size="sm" className="w-full" asChild>
            <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">
              Browse All NIPs
              <ArrowRight className="ml-2 h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl border">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Recent Custom NIPs</h3>
          <Badge variant="secondary">Live Updates</Badge>
        </div>
      </div>
      
      {/* NIP List */}
      <div className="p-6 space-y-4">
        {isLoading ? (
          <>
            <NipSkeleton />
            <NipSkeleton />
            <NipSkeleton />
          </>
        ) : nips && nips.length > 0 ? (
          nips.map((nip) => (
            <NipItem key={nip.id} nip={nip} />
          ))
        ) : (
          <div className="text-center text-gray-500 py-8">
            <p>No custom NIPs found</p>
            <p className="text-sm mt-1">Be the first to publish a custom NIP!</p>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <div className="p-4 border-t bg-gray-50 rounded-b-2xl">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">
            Browse All NIPs
            <ArrowRight className="ml-2 h-3 w-3" />
          </a>
        </Button>
      </div>
    </div>
  );
}