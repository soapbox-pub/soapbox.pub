import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Plus, Upload, ExternalLink, Skull, Ghost, Candy, Zap } from 'lucide-react';
import { useNostrPublish } from '@/hooks/useNostrPublish';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { toast } from '@/hooks/useToast';
import { nip19 } from 'nostr-tools';

const halloweenSubmissionSchema = z.object({
  appName: z.string().min(1, 'App name is required'),
  websiteUrl: z.string().url('Please enter a valid URL'),
  repositoryUrl: z.string()
    .min(1, 'Repository URL is required')
    .refine(url => {
      // Check if it's a Nostr git URL
      if (url.startsWith('nostr://')) {
        // Validate Nostr git URL format: nostr://npub.../path/repo
        // npub is always 63 characters (npub1 + 59 chars)
        const nostrGitRegex = /^nostr:\/\/npub1[a-z0-9]{58}\/[a-zA-Z0-9._-]+\/[a-zA-Z0-9._-]+$/;
        return nostrGitRegex.test(url);
      }

      // Check if it's a traditional HTTPS URL
      try {
        const parsedUrl = new URL(url);
        return parsedUrl.protocol === 'https:' && url.endsWith('.git');
      } catch {
        return false;
      }
    }, {
      message: 'Repository URL must be either a Nostr git URL (nostr://npub.../path/repo) or an HTTPS clone URL ending with .git'
    }),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  appIconUrl: z.string().url('Please enter a valid icon URL'),
  screenshotUrl: z.string().url('Please enter a valid screenshot URL'),
  authorNpub: z.string().min(1, 'Author npub is required'),
  lightningAddress: z.string().optional(),
  email: z.string().email('Please enter a valid email').optional(),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
}).refine(data => data.lightningAddress || data.email, {
  message: "Please provide either a Lightning address or email for prize distribution",
  path: ["lightningAddress"]
});

type HalloweenSubmissionFormData = z.infer<typeof halloweenSubmissionSchema>;

interface HalloweenSubmissionFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

const HALLOWEEN_SUGGESTED_TAGS = [
  'Halloween Hackathon 2025', // Default tag
  'Social',
  'Community',
  'Fun',
  'Bitcoin',
  'Productivity',
  'IRL',
  'Chat',
  'Dev Tools',
  'Website',
  'Nostr',
  'Events',
  'AI'
];

export function HalloweenSubmissionForm({ onSuccess, onCancel }: HalloweenSubmissionFormProps) {
  const { user } = useCurrentUser();
  const { mutate: publishEvent, isPending } = useNostrPublish();
  const [tagInput, setTagInput] = useState('');

  // Check if submissions are closed (November 2, 2025 or later)
  const isSubmissionsClosed = new Date() >= new Date('2025-11-02T00:00:00Z');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<HalloweenSubmissionFormData>({
    resolver: zodResolver(halloweenSubmissionSchema),
    defaultValues: {
      authorNpub: user?.pubkey ? nip19.npubEncode(user.pubkey) : '',
      tags: ['Halloween Hackathon 2025'], // Default tag
    }
  });

  const watchedTags = watch('tags') || [];

  const addTag = () => {
    if (tagInput.trim() && !watchedTags.includes(tagInput.trim())) {
      setValue('tags', [...watchedTags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const addSuggestedTag = (tag: string) => {
    if (!watchedTags.includes(tag)) {
      setValue('tags', [...watchedTags, tag]);
    }
  };

  const removeTag = (tagToRemove: string) => {
    // Don't allow removal of the default Halloween Hackathon tag
    if (tagToRemove === 'Halloween Hackathon 2025') return;
    setValue('tags', watchedTags.filter(tag => tag !== tagToRemove));
  };

  const onSubmit = async (data: HalloweenSubmissionFormData) => {
    if (!user) {
      toast({
        title: 'Authentication Required',
        description: 'Please log in to submit an app',
        variant: 'destructive'
      });
      return;
    }

    try {
      // Generate a unique identifier for the app
      const identifier = data.appName.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-halloween-' + Date.now();

      const tags = [
        ['d', identifier],
        ['title', data.appName],
        ['website', data.websiteUrl],
        ['repository', data.repositoryUrl],
        ['icon', data.appIconUrl],
        ['screenshot', data.screenshotUrl],
        ['author', data.authorNpub],
        ['t', 'soapbox-halloween-hackathon'],
        ['t', 'halloween-hackathon-2025'],
        ...data.tags.map(tag => ['app-tag', tag] as [string, string])
      ];

      // Add contact info for prize distribution
      if (data.lightningAddress) {
        tags.push(['lightning', data.lightningAddress]);
      }
      if (data.email) {
        tags.push(['email', data.email]);
      }

      await publishEvent({
        kind: 31734, // Custom addressable event kind for Halloween hackathon submissions
        content: data.description,
        tags,
        created_at: Math.floor(Date.now() / 1000)
      });

      toast({
        title: '🎃 Spooky Success!',
        description: 'Your Halloween app has been submitted to the hackathon! Good luck! 👻'
      });
      reset();
      onSuccess?.();
    } catch (error) {
      console.error('Failed to submit Halloween app:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit your spooky creation. Please try again.',
        variant: 'destructive'
      });
    }
  };

  // Show closed state if submissions are closed
  if (isSubmissionsClosed) {
    return (
      <Card id="submission-form" className="border-red-500 bg-gray-800/90 backdrop-blur-sm text-white">
        <CardHeader className="bg-gradient-to-r from-red-600 to-purple-700 text-white rounded-t-lg border-b border-red-500">
          <CardTitle className="flex items-center gap-3 text-2xl">
            <div className="flex space-x-2">
              <Skull className="w-7 h-7" />
              <Ghost className="w-7 h-7" />
            </div>
            Submissions Closed
            <Candy className="w-7 h-7" />
          </CardTitle>
          <p className="text-red-100">
            The Halloween Hackathon submission period has ended. Winners will be announced November 8th! 🎃
          </p>
        </CardHeader>
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="text-6xl">⏰</div>
            <h3 className="font-gothic text-2xl font-bold text-white">Submissions Have Closed</h3>
            <p className="text-gray-300 max-w-md mx-auto">
              Thank you to everyone who participated! Winners will be announced on November 8th, 2025.
            </p>
            <div className="pt-4">
              <Button variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black" asChild>
                <Link to="/tools/shakespeare">
                  Start Building for Next Month's Challenge
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!user) {
    return (
      <Card id="submission-form" className="border-orange-500 bg-gray-800/90 backdrop-blur-sm text-white">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="flex justify-center space-x-2 text-4xl">
              <span>👻</span>
              <span>🎃</span>
              <span>💀</span>
            </div>
            <h3 className="font-gothic text-2xl font-bold text-white">Join the Halloween Hackathon!</h3>
            <p className="text-gray-300 mb-6">Please log in to submit your spooky Shakespeare app to the hackathon.</p>
            <Button variant="outline" className="border-orange-500 text-orange-400 hover:bg-orange-50 hover:text-black">
              Log In to Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card id="submission-form" className="border-orange-500 bg-gray-800/90 backdrop-blur-sm text-white">
      <CardHeader className="bg-gradient-to-r from-orange-600 to-purple-700 text-white rounded-t-lg border-b border-orange-500">
        <CardTitle className="flex items-center gap-3 text-2xl">
          <div className="flex space-x-2">
            <Skull className="w-7 h-7" />
            <Ghost className="w-7 h-7" />
          </div>
          Submit Your Halloween Creation
          <Candy className="w-7 h-7" />
        </CardTitle>
        <p className="text-orange-100">
          Share your spooky Shakespeare app and compete for 87k sats in prizes! 🎃
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* App Details */}
          <div className="space-y-6">
            <h3 className="font-gothic text-xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-600" />
              App Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="appName" className="text-gray-200 font-medium">App Name *</Label>
                <Input
                  id="appName"
                  {...register('appName')}
                  placeholder="Spooky Portfolio, Ghost Chat, etc."
                  className="border-orange-500 bg-gray-700 text-white placeholder:text-gray-400 focus:border-orange-400"
                />
                {errors.appName && (
                  <p className="text-sm text-red-600">{errors.appName.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="websiteUrl" className="text-gray-200 font-medium">Live Demo URL *</Label>
                <Input
                  id="websiteUrl"
                  {...register('websiteUrl')}
                  placeholder="https://my-spooky-app.com"
                  className="border-orange-500 bg-gray-700 text-white placeholder:text-gray-400 focus:border-orange-400"
                />
                {errors.websiteUrl && (
                  <p className="text-sm text-red-600">{errors.websiteUrl.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="repositoryUrl" className="text-gray-200 font-medium">Repository URL *</Label>
              <Input
                id="repositoryUrl"
                {...register('repositoryUrl')}
                placeholder="https://github.com/username/spooky-app.git"
                className="border-orange-500 bg-gray-700 text-white placeholder:text-gray-400 focus:border-orange-400"
              />
              <p className="text-sm text-gray-400">
                🔓 Your code must be open source and publicly accessible
              </p>
              {errors.repositoryUrl && (
                <p className="text-sm text-red-600">{errors.repositoryUrl.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-200 font-medium">App Description *</Label>
              <Textarea
                id="description"
                {...register('description')}
                placeholder="Describe your app, its features, and what makes it special..."
                rows={4}
                className="border-orange-500 bg-gray-700 text-white placeholder:text-gray-400 focus:border-orange-400"
              />
              {errors.description && (
                <p className="text-sm text-red-600">{errors.description.message}</p>
              )}
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="appIconUrl" className="text-gray-200 font-medium">App Icon URL *</Label>
                <Input
                  id="appIconUrl"
                  {...register('appIconUrl')}
                  placeholder="https://example.com/spooky-icon.png"
                  className="border-orange-500 bg-gray-700 text-white placeholder:text-gray-400 focus:border-orange-400"
                />
                {errors.appIconUrl && (
                  <p className="text-sm text-red-600">{errors.appIconUrl.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="screenshotUrl" className="text-gray-200 font-medium">Screenshot URL *</Label>
                <Input
                  id="screenshotUrl"
                  {...register('screenshotUrl')}
                  placeholder="https://example.com/spooky-screenshot.png"
                  className="border-orange-500 bg-gray-700 text-white placeholder:text-gray-400 focus:border-orange-400"
                />
                {errors.screenshotUrl && (
                  <p className="text-sm text-red-600">{errors.screenshotUrl.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="font-gothic text-xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-600" />
              Contact & Prize Information
            </h3>

            <div className="space-y-2">
              <Label htmlFor="authorNpub" className="text-gray-200 font-medium">Author Npub *</Label>
              <Input
                id="authorNpub"
                {...register('authorNpub')}
                placeholder="npub1..."
                className="border-orange-500 bg-gray-700 text-white placeholder:text-gray-400 focus:border-orange-400"
              />
              {errors.authorNpub && (
                <p className="text-sm text-red-600">{errors.authorNpub.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="lightningAddress" className="text-gray-200 font-medium">Lightning Address</Label>
                <Input
                  id="lightningAddress"
                  {...register('lightningAddress')}
                  placeholder="username@domain.com"
                  className="border-orange-500 bg-gray-700 text-white placeholder:text-gray-400 focus:border-orange-400"
                />
                <p className="text-sm text-gray-400">⚡ For instant Bitcoin prize distribution</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200 font-medium">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="your@email.com"
                  className="border-orange-500 bg-gray-700 text-white placeholder:text-gray-400 focus:border-orange-400"
                />
                <p className="text-sm text-gray-400">📧 Alternative contact for prizes</p>
              </div>
            </div>

            {(errors.lightningAddress || errors.email) && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">
                  Please provide either a Lightning address or email for prize distribution.
                </p>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="space-y-4">
            <h3 className="font-gothic text-xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-red-600" />
              Tags & Categories
            </h3>

            <div className="flex gap-2">
              <Input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder="Add custom tags..."
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                className="border-orange-500 bg-gray-700 text-white placeholder:text-gray-400 focus:border-orange-400"
              />
              <Button type="button" onClick={addTag} variant="outline" size="sm" className="border-orange-500 text-orange-600">
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            {/* Suggested Tags */}
            <div className="space-y-3">
              <p className="text-sm text-gray-400 font-medium">🎯 Suggested Halloween tags (click to add):</p>
              <div className="flex flex-wrap gap-2">
                {HALLOWEEN_SUGGESTED_TAGS.map((suggestedTag) => (
                  <Button
                    key={suggestedTag}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => addSuggestedTag(suggestedTag)}
                    disabled={watchedTags.includes(suggestedTag)}
                    className={`text-xs transition-all ${
                      watchedTags.includes(suggestedTag)
                        ? 'opacity-50 cursor-not-allowed bg-orange-100 border-orange-300 text-black'
                        : 'hover:bg-orange-50 hover:border-orange-500 border-orange-200 text-orange-700'
                    }`}
                  >
                    {suggestedTag === 'Halloween Hackathon 2025' && '🎃 '}
                    {suggestedTag}
                  </Button>
                ))}
              </div>
            </div>

            {/* Selected Tags */}
            {watchedTags.length > 0 && (
              <div className="space-y-3">
                <p className="text-sm text-gray-400 font-medium">🏷️ Selected tags:</p>
                <div className="flex flex-wrap gap-2">
                  {watchedTags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className={`flex items-center gap-1 ${
                        tag === 'Halloween Hackathon 2025'
                          ? 'bg-orange-100 text-black border-orange-300'
                          : 'bg-purple-100 text-purple-800 border-purple-300'
                      }`}
                    >
                      {tag === 'Halloween Hackathon 2025' && '🎃 '}
                      {tag}
                      {tag !== 'Halloween Hackathon 2025' && (
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
                          className="ml-1 hover:text-red-600"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {errors.tags && (
              <p className="text-sm text-red-600">{errors.tags.message}</p>
            )}
          </div>

          <div className="flex gap-4 pt-6">
            <Button
              type="submit"
              disabled={isPending}
              className="flex-1 bg-gradient-to-r from-orange-600 to-purple-700 hover:from-orange-700 hover:to-purple-800 text-white text-lg py-3"
            >
              {isPending ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting Your Spooky Creation...
                </>
              ) : (
                <>
                  <Candy className="w-5 h-5 mr-2" />
                  Submit to Halloween Hackathon
                </>
              )}
            </Button>
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel} className="border-gray-300">
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}