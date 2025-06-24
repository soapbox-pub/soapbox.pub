import { ExternalLink, Globe, Smartphone, Monitor } from 'lucide-react';
import type { NostrEvent } from '@nostrify/nostrify';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuthor } from '@/hooks/useAuthor';

interface AppMetadata {
  name?: string;
  display_name?: string;
  picture?: string;
  banner?: string;
  about?: string;
  web?: string;
  nip05?: string;
  lud16?: string;
}

interface AppCardProps {
  event: NostrEvent;
}

export function AppCard({ event }: AppCardProps) {
  const author = useAuthor(event.pubkey);
  
  // Parse app metadata from content
  let appMetadata: AppMetadata = {};
  try {
    if (event.content) {
      appMetadata = JSON.parse(event.content);
    }
  } catch (error) {
    console.warn('Failed to parse app metadata:', error);
  }

  // Extract tags
  const dTag = event.tags.find(([name]) => name === 'd')?.[1] || '';
  const supportedKinds = event.tags
    .filter(([name]) => name === 'k')
    .map(([, kind]) => kind);
  
  const webUrl = event.tags.find(([name]) => name === 'web')?.[1];
  const iosUrl = event.tags.find(([name]) => name === 'ios')?.[1];
  const androidUrl = event.tags.find(([name]) => name === 'android')?.[1];

  // Determine app name and description
  const appName = appMetadata.display_name || appMetadata.name || dTag;
  const appDescription = appMetadata.about || 'A Nostr application built with MKStack';
  const appIcon = appMetadata.picture;
  const appWebsite = appMetadata.web || webUrl?.replace('/<bech32>', '');

  // Generate fallback initials for avatar
  const initials = appName
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const handleOpenApp = () => {
    if (appWebsite) {
      window.open(appWebsite, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border hover:border-violet-200">
      {/* Banner/Header */}
      {appMetadata.banner && (
        <div className="h-32 overflow-hidden">
          <img 
            src={appMetadata.banner} 
            alt={`${appName} banner`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
            <AvatarImage src={appIcon} alt={appName} />
            <AvatarFallback className="bg-violet-100 text-violet-700 font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-gray-900 truncate">
              {appName}
            </h3>
            {author.data?.metadata?.name && (
              <p className="text-sm text-gray-500 truncate">
                by {author.data.metadata.name}
              </p>
            )}
          </div>
          
          <Badge variant="outline" className="bg-violet-50 text-violet-700 border-violet-200 shrink-0">
            MKStack
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {appDescription}
        </p>

        {/* Supported Event Kinds */}
        {supportedKinds.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-2">Supports event kinds:</p>
            <div className="flex flex-wrap gap-1">
              {supportedKinds.slice(0, 5).map((kind) => (
                <Badge key={kind} variant="secondary" className="text-xs">
                  {kind}
                </Badge>
              ))}
              {supportedKinds.length > 5 && (
                <Badge variant="secondary" className="text-xs">
                  +{supportedKinds.length - 5} more
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Platform Links */}
        <div className="flex flex-wrap gap-2 mb-4">
          {webUrl && (
            <Badge variant="outline" className="text-xs flex items-center gap-1">
              <Globe className="h-3 w-3" />
              Web
            </Badge>
          )}
          {iosUrl && (
            <Badge variant="outline" className="text-xs flex items-center gap-1">
              <Smartphone className="h-3 w-3" />
              iOS
            </Badge>
          )}
          {androidUrl && (
            <Badge variant="outline" className="text-xs flex items-center gap-1">
              <Monitor className="h-3 w-3" />
              Android
            </Badge>
          )}
        </div>

        {/* Action Button */}
        <Button 
          onClick={handleOpenApp}
          disabled={!appWebsite}
          className="w-full bg-violet-600 hover:bg-violet-700 text-white"
          size="sm"
        >
          {appWebsite ? (
            <>
              Open App
              <ExternalLink className="ml-2 h-4 w-4" />
            </>
          ) : (
            'No URL Available'
          )}
        </Button>
      </CardContent>
    </Card>
  );
}