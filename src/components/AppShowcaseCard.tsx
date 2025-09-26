import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ExternalLink,
  GitBranch,
  Edit,
  Star,
  StarOff,
  Eye,
  EyeOff,
  MoreVertical
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { AppSubmission } from '@/hooks/useAppSubmissions';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useNostrPublish } from '@/hooks/useNostrPublish';
import { nip19 } from 'nostr-tools';
import { toast } from '@/hooks/useToast';

interface AppShowcaseCardProps {
  app: AppSubmission;
  onEdit?: (app: AppSubmission) => void;
  showModerationControls?: boolean;
}

export function AppShowcaseCard({ app, onEdit, showModerationControls }: AppShowcaseCardProps) {
  const { user } = useCurrentUser();
  const { mutate: publishEvent, isPending } = useNostrPublish();
  const [imageError, setImageError] = useState(false);

  const isOwner = user?.pubkey === app.pubkey;
  const MODERATOR_NPUB = 'npub1jvnpg4c6ljadf5t6ry0w9q0rnm4mksde87kglkrc993z46c39axsgq89sc';
  const MODERATOR_HEX = (() => {
    try {
      const decoded = nip19.decode(MODERATOR_NPUB);
      return decoded.type === 'npub' ? decoded.data : '';
    } catch {
      return '';
    }
  })();
  const isModerator = user?.pubkey === MODERATOR_HEX;

  const handleModerationAction = async (action: 'feature' | 'unfeature' | 'hide' | 'unhide') => {
    if (!isModerator) return;

    try {
      const dTag = app.tags.find(tag => tag[0] === 'd')?.[1];
      if (!dTag) {
        toast({
          title: 'Error',
          description: 'Cannot perform moderation action: missing app identifier',
          variant: 'destructive'
        });
        return;
      }

      await publishEvent({
        kind: 1,
        content: `Moderation action: ${action} on app "${app.appName}"`,
        tags: [
          ['a', `30023:${app.pubkey}:${dTag}`],
          ['action', action],
          ['t', 'soapbox-moderation']
        ],
        created_at: Math.floor(Date.now() / 1000)
      });

      toast({
        title: 'Success!',
        description: `App ${action}d successfully`
      });
    } catch (error) {
      console.error('Moderation action failed:', error);
      toast({
        title: 'Error',
        description: `Failed to ${action} app`,
        variant: 'destructive'
      });
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:border-azure-200">
      <div className="relative">
        {/* App Screenshot */}
        <a
          href={app.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-lg overflow-hidden cursor-pointer"
        >
          {!imageError ? (
            <img
              src={app.screenshotUrl}
              alt={`${app.appName} screenshot`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-gray-200 rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-8 h-8" />
                </div>
                <p className="text-sm">Screenshot unavailable</p>
              </div>
            </div>
          )}
        </a>

        {/* Featured Badge */}
        {app.isFeatured && (
          <Badge className="absolute top-3 left-3 bg-yellow-500 text-yellow-50">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </Badge>
        )}

        {/* Actions Menu */}
        {(isOwner || showModerationControls) && (
          <div className="absolute top-3 right-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="sm" className="h-8 w-8 p-0">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {isOwner && (
                  <DropdownMenuItem onClick={() => onEdit?.(app)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit App
                  </DropdownMenuItem>
                )}
                {showModerationControls && isModerator && (
                  <>
                    <DropdownMenuItem
                      onClick={() => handleModerationAction(app.isFeatured ? 'unfeature' : 'feature')}
                      disabled={isPending}
                    >
                      {app.isFeatured ? (
                        <>
                          <StarOff className="w-4 h-4 mr-2" />
                          Un-feature
                        </>
                      ) : (
                        <>
                          <Star className="w-4 h-4 mr-2" />
                          Feature
                        </>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleModerationAction(app.isHidden ? 'unhide' : 'hide')}
                      disabled={isPending}
                    >
                      {app.isHidden ? (
                        <>
                          <Eye className="w-4 h-4 mr-2" />
                          Unhide
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-4 h-4 mr-2" />
                          Hide
                        </>
                      )}
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            {/* App Icon */}
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <img
                src={app.appIconUrl}
                alt={`${app.appName} icon`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{app.appName}</h3>
              <div className="flex items-center gap-2">
                <a
                  href={app.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-azure hover:text-azure-dark transition-colors"
                  title="Visit app"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={app.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  title="View repository"
                >
                  <GitBranch className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-3">{app.description}</p>

        {/* Tags */}
        {app.appTags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {app.appTags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {app.appTags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{app.appTags.length - 3} more
              </Badge>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <a
            href={`https://act2.shakespeare.to/clone?url=${encodeURIComponent(app.repositoryUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <img
              src="https://user-content.gitlab-static.net/dc700236142edffa7bc9a36aae2802eb0d10433f/68747470733a2f2f616374322e7368616b657370656172652e746f2f62616467652e737667"
              alt="Edit with Shakespeare"
              className="h-8 hover:opacity-80 transition-opacity"
            />
          </a>
          <Button variant="outline" size="sm" asChild>
            <a
              href={app.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View repository"
            >
              <GitBranch className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}