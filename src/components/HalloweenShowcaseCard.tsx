import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Trophy } from 'lucide-react';
import type { HalloweenSubmission } from '@/hooks/useHalloweenSubmissions';

interface HalloweenShowcaseCardProps {
  submission: HalloweenSubmission;
  showModerationInfo?: boolean;
}

const _categoryColors = {
  'design': 'bg-orange-500',
  'function': 'bg-purple-500',
  'judges-choice': 'bg-red-500'
};

const categoryLabels = {
  'design': 'Design Excellence',
  'function': 'Functional Innovation',
  'judges-choice': "Judge's Choice"
};

export function HalloweenShowcaseCard({ submission, showModerationInfo = false }: HalloweenShowcaseCardProps) {
  const {
    appName,
    websiteUrl,
    repositoryUrl,
    description,
    appIconUrl,
    screenshotUrl,
    appTags,
    authorNpub,
    isWinner,
    winnerCategory,
    created_at
  } = submission;

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
      isWinner ? 'border-2 border-orange-400 bg-gradient-to-br from-orange-50 to-purple-50' : 'border-gray-200'
    }`}>
      {/* Winner Badge */}
      {isWinner && winnerCategory && (
        <div className="bg-gradient-to-r from-orange-600 to-purple-700 text-white p-3">
          <div className="flex items-center justify-center gap-2">
            <Trophy className="w-5 h-5" />
            <span className="font-bold">🏆 WINNER - {categoryLabels[winnerCategory]}</span>
            <Trophy className="w-5 h-5" />
          </div>
        </div>
      )}

      {/* App Screenshot */}
      {screenshotUrl && (
        <div className="aspect-video overflow-hidden">
          <img
            src={screenshotUrl}
            alt={`${appName} screenshot`}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      )}

      <CardHeader className="space-y-3">
        <div className="flex items-start gap-3">
          {/* App Icon */}
          {appIconUrl && (
            <img
              src={appIconUrl}
              alt={`${appName} icon`}
              className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/assets/logo.svg';
              }}
            />
          )}

          <div className="flex-1 min-w-0">
            <CardTitle className="flex items-center gap-2 text-xl">
              <span className="truncate">{appName}</span>
              {isWinner && (
                <div className="flex space-x-1">
                  <span>🎃</span>
                  <Trophy className="w-5 h-5 text-orange-600" />
                </div>
              )}
            </CardTitle>

            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
              <span>👻</span>
              <span>Submitted {new Date(created_at * 1000).toLocaleDateString()}</span>
            </div>
          </div>
        </div>


      </CardHeader>

      <CardContent className="space-y-4">
        {/* App Description */}
        <p className="text-gray-600 leading-relaxed line-clamp-3">{description}</p>

        {/* Tags */}
        {appTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {appTags.slice(0, 6).map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`text-xs ${
                  tag === 'Halloween Hackathon 2025'
                    ? 'bg-orange-100 text-orange-800 border-orange-300'
                    : tag.toLowerCase().includes('halloween') || tag.toLowerCase().includes('spooky')
                    ? 'bg-purple-100 text-purple-800 border-purple-300'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {tag === 'Halloween Hackathon 2025' && '🎃 '}
                {tag}
              </Badge>
            ))}
            {appTags.length > 6 && (
              <Badge variant="outline" className="text-xs">
                +{appTags.length - 6} more
              </Badge>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button asChild size="sm" className="flex-1 bg-orange-600 hover:bg-orange-700">
            <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit App
            </a>
          </Button>
          <Button asChild variant="outline" size="sm" className="flex-1">
            <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </a>
          </Button>
        </div>

        {/* Moderator Information */}
        {showModerationInfo && (
          <div className="border-t pt-4 mt-4 space-y-2">
            <h4 className="font-medium text-gray-900">Moderator Info</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <div>
                <strong>Author:</strong> {authorNpub}
              </div>
              <div>
                <strong>Submitted:</strong> {new Date(created_at * 1000).toLocaleDateString()}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}