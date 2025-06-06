import { useMemo } from 'react';
import { type NostrEvent } from '@nostrify/nostrify';
import { Link } from 'react-router-dom';
import { nip19 } from 'nostr-tools';
import { useAuthor } from '@/hooks/useAuthor';
import { MediaAttachment } from '@/components/MediaAttachment';
import { genUserName } from '@/lib/genUserName';
import { cn } from '@/lib/utils';

interface NoteContentProps {
  event: NostrEvent;
  className?: string;
  hideQuoteReferences?: boolean; // Hide nostr: references for quote posts
}

/** Parses content of text note events so that URLs and hashtags are linkified. */
export function NoteContent({
  event, 
  className,
  hideQuoteReferences = false,
}: NoteContentProps) {  
  // Extract media metadata from imeta tags
  const mediaMetadata = useMemo(() => {
    const imetaTags = event.tags.filter(tag => tag[0] === 'imeta');
    const metadata: Record<string, Record<string, string>> = {};
    
    imetaTags.forEach(tag => {
      const pairs = tag.slice(1); // Remove 'imeta' from the beginning
      const urlPair = pairs.find(pair => pair.startsWith('url '));
      if (urlPair) {
        const url = urlPair.substring(4); // Remove 'url ' prefix
        metadata[url] = {};
        
        pairs.forEach(pair => {
          const [key, ...valueParts] = pair.split(' ');
          const value = valueParts.join(' ');
          if (key !== 'url') {
            metadata[url][key] = value;
          }
        });
      }
    });
    
    return metadata;
  }, [event.tags]);

  // Process the content to render mentions, links, media, etc.
  const { textContent, mediaUrls } = useMemo(() => {
    let text = event.content;
    
    // If this is a quote post and we should hide quote references, remove them
    if (hideQuoteReferences) {
      // Remove nostr: references that are likely quote references
      text = text.replace(/nostr:(nevent1|note1|naddr1)([023456789acdefghjklmnpqrstuvwxyz]+)/g, '').trim();
    }
    
    // Regex to find URLs, Nostr references, and hashtags
    const regex = /(https?:\/\/[^\s]+)|nostr:(npub1|note1|nprofile1|nevent1)([023456789acdefghjklmnpqrstuvwxyz]+)|(#\w+)/g;
    
    const parts: React.ReactNode[] = [];
    const foundMediaUrls: string[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let keyCounter = 0;
    
    while ((match = regex.exec(text)) !== null) {
      const [fullMatch, url, nostrPrefix, nostrData, hashtag] = match;
      const index = match.index;
      
      // Add text before this match
      if (index > lastIndex) {
        parts.push(text.substring(lastIndex, index));
      }
      
      if (url) {
        // Check if this URL has media metadata or looks like media
        const hasMetadata = mediaMetadata[url];
        const isMediaUrl = /\.(jpg|jpeg|png|gif|webp|svg|mp4|webm|mov|avi|mkv|mp3|wav|ogg|m4a|flac)$/i.test(url);
        
        if (hasMetadata || isMediaUrl) {
          // This is a media URL, collect it for rendering separately
          foundMediaUrls.push(url);
          // Don't render the URL in text, it will be shown as media
        } else {
          // Regular URL
          parts.push(
            <a 
              key={`url-${keyCounter++}`}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {url}
            </a>
          );
        }
      } else if (nostrPrefix && nostrData) {
        // Handle Nostr references
        try {
          const nostrId = `${nostrPrefix}${nostrData}`;
          const decoded = nip19.decode(nostrId);
          
          if (decoded.type === 'npub') {
            const pubkey = decoded.data;
            parts.push(
              <NostrMention key={`mention-${keyCounter++}`} pubkey={pubkey} />
            );
          } else if (decoded.type === 'nprofile') {
            const pubkey = decoded.data.pubkey;
            parts.push(
              <NostrMention key={`mention-${keyCounter++}`} pubkey={pubkey} />
            );
          } else {
            // For other types, just show as a link
            parts.push(
              <Link 
                key={`nostr-${keyCounter++}`}
                to={`/${nostrId}`}
                className="text-blue-500 hover:underline"
              >
                {fullMatch}
              </Link>
            );
          }
        } catch {
          // If decoding fails, just render as text
          parts.push(fullMatch);
        }
      } else if (hashtag) {
        // Handle hashtags
        const tag = hashtag.slice(1); // Remove the #
        parts.push(
          <Link 
            key={`hashtag-${keyCounter++}`}
            to={`/t/${tag}`}
            className="text-blue-500 hover:underline"
          >
            {hashtag}
          </Link>
        );
      }
      
      lastIndex = index + fullMatch.length;
    }
    
    // Add any remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }
    
    // If no special content was found, just use the plain text
    if (parts.length === 0) {
      parts.push(text);
    }
    
    return { textContent: parts, mediaUrls: foundMediaUrls };
  }, [event.content, mediaMetadata, hideQuoteReferences]);

  return (
    <div className={cn("space-y-3", className)}>
      {/* Text content */}
      {textContent.length > 0 && (
        <div className="whitespace-pre-wrap break-words">
          {textContent}
        </div>
      )}
      
      {/* Media attachments */}
      {mediaUrls.length > 0 && (
        <div className="space-y-3">
          {mediaUrls.map((url, index) => {
            const metadata = mediaMetadata[url] || {};
            return (
              <MediaAttachment
                key={`media-${index}`}
                url={url}
                mimeType={metadata.m}
                dimensions={metadata.dim}
                alt={metadata.alt}
                blurhash={metadata.blurhash}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

// Helper component to display user mentions
function NostrMention({ pubkey }: { pubkey: string }) {
  const author = useAuthor(pubkey);
  const npub = nip19.npubEncode(pubkey);
  const hasRealName = !!author.data?.metadata?.name;
  const displayName = author.data?.metadata?.name ?? genUserName(pubkey);

  return (
    <a 
      href={`https://ditto.pub/${npub}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "font-medium hover:underline",
        hasRealName 
          ? "text-blue-500" 
          : "text-gray-500 hover:text-gray-700"
      )}
    >
      @{displayName}
    </a>
  );
}