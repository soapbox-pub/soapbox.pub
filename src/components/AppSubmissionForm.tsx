import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Plus, Upload, ExternalLink } from 'lucide-react';
import { useNostrPublish } from '@/hooks/useNostrPublish';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { toast } from '@/hooks/useToast';
import { nip19 } from 'nostr-tools';
import type { AppSubmission } from '@/hooks/useAppSubmissions';

const appSubmissionSchema = z.object({
  appName: z.string().min(1, 'App name is required'),
  websiteUrl: z.string().url('Please enter a valid URL'),
  repositoryUrl: z.string()
    .url('Please enter a valid repository URL')
    .refine(url => url.startsWith('https://'), {
      message: 'Repository URL must be an HTTPS URL'
    })
    .refine(url => url.endsWith('.git'), {
      message: 'Repository URL must be the HTTPS clone URL ending with .git'
    }),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  appIconUrl: z.string().url('Please enter a valid icon URL'),
  screenshotUrl: z.string().url('Please enter a valid screenshot URL'),
  authorNpub: z.string().min(1, 'Author npub is required'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
});

type AppSubmissionFormData = z.infer<typeof appSubmissionSchema>;

interface AppSubmissionFormProps {
  editingApp?: AppSubmission;
  onSuccess?: () => void;
  onCancel?: () => void;
}

const SUGGESTED_TAGS = [
  'Shakespeare',
  'Bitcoin',
  'Productivity',
  'Community',
  'Fun',
  'Games',
  'Shop',
  'Website',
  'Social'
];

export function AppSubmissionForm({ editingApp, onSuccess, onCancel }: AppSubmissionFormProps) {
  const { user } = useCurrentUser();
  const { mutate: publishEvent, isPending } = useNostrPublish();
  const [tagInput, setTagInput] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<AppSubmissionFormData>({
    resolver: zodResolver(appSubmissionSchema),
    defaultValues: editingApp ? {
      appName: editingApp.appName,
      websiteUrl: editingApp.websiteUrl,
      repositoryUrl: editingApp.repositoryUrl,
      description: editingApp.description,
      appIconUrl: editingApp.appIconUrl,
      screenshotUrl: editingApp.screenshotUrl,
      authorNpub: editingApp.authorNpub,
      tags: editingApp.appTags,
    } : {
      authorNpub: user?.pubkey ? nip19.npubEncode(user.pubkey) : '',
      tags: [],
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
    setValue('tags', watchedTags.filter(tag => tag !== tagToRemove));
  };

  const onSubmit = async (data: AppSubmissionFormData) => {
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
      const identifier = editingApp ?
        editingApp.tags.find(tag => tag[0] === 'd')?.[1] || data.appName.toLowerCase().replace(/[^a-z0-9]/g, '-') :
        data.appName.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Date.now();

      const tags = [
        ['d', identifier],
        ['title', data.appName],
        ['website', data.websiteUrl],
        ['repository', data.repositoryUrl],
        ['icon', data.appIconUrl],
        ['screenshot', data.screenshotUrl],
        ['author', data.authorNpub],
        ['t', 'soapbox-app-submission'],
        ...data.tags.map(tag => ['app-tag', tag] as [string, string])
      ];

      await publishEvent({
        kind: 31733, // Custom addressable event kind for app submissions
        content: data.description,
        tags,
        created_at: Math.floor(Date.now() / 1000)
      });

      toast({
        title: 'Success!',
        description: editingApp ? 'App updated successfully!' : 'App submitted successfully!'
      });
      reset();
      onSuccess?.();
    } catch (error) {
      console.error('Failed to submit app:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit app. Please try again.',
        variant: 'destructive'
      });
    }
  };

  if (!user) {
    return (
      <Card>
        <CardContent className="p-6 text-center">
          <p className="text-gray-600 mb-4">Please log in to submit an app to the showcase.</p>
          <Button variant="outline">Log In</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Upload className="w-5 h-5" />
          {editingApp ? 'Edit App Submission' : 'Submit Your App'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="appName">App Name *</Label>
              <Input
                id="appName"
                {...register('appName')}
                placeholder="My Awesome App"
              />
              {errors.appName && (
                <p className="text-sm text-red-600">{errors.appName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="websiteUrl">Website URL *</Label>
              <Input
                id="websiteUrl"
                {...register('websiteUrl')}
                placeholder="https://myapp.com"
              />
              {errors.websiteUrl && (
                <p className="text-sm text-red-600">{errors.websiteUrl.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="repositoryUrl">Repository URL (HTTPS Clone URL) *</Label>
            <Input
              id="repositoryUrl"
              {...register('repositoryUrl')}
              placeholder="https://github.com/username/repo.git"
            />
            <p className="text-sm text-gray-600">
              Please provide the HTTPS clone URL ending with .git (e.g., https://github.com/username/repo.git or https://gitlab.com/username/repo.git)
            </p>
            {errors.repositoryUrl && (
              <p className="text-sm text-red-600">{errors.repositoryUrl.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              {...register('description')}
              placeholder="Describe your app, its features, and what makes it special..."
              rows={4}
            />
            {errors.description && (
              <p className="text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="appIconUrl">App Icon URL *</Label>
              <Input
                id="appIconUrl"
                {...register('appIconUrl')}
                placeholder="https://example.com/icon.png"
              />
              {errors.appIconUrl && (
                <p className="text-sm text-red-600">{errors.appIconUrl.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="screenshotUrl">Screenshot URL *</Label>
              <Input
                id="screenshotUrl"
                {...register('screenshotUrl')}
                placeholder="https://example.com/screenshot.png"
              />
              {errors.screenshotUrl && (
                <p className="text-sm text-red-600">{errors.screenshotUrl.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="authorNpub">Author Npub *</Label>
            <Input
              id="authorNpub"
              {...register('authorNpub')}
              placeholder="npub1..."
            />
            {errors.authorNpub && (
              <p className="text-sm text-red-600">{errors.authorNpub.message}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label>Tags *</Label>
            <div className="flex gap-2">
              <Input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder="Add a tag (e.g., social, gaming, productivity)"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              />
              <Button type="button" onClick={addTag} variant="outline" size="sm">
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            {/* Suggested Tags */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Suggested tags (click to add):</p>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_TAGS.map((suggestedTag) => (
                  <Button
                    key={suggestedTag}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => addSuggestedTag(suggestedTag)}
                    disabled={watchedTags.includes(suggestedTag)}
                    className={`text-xs ${
                      watchedTags.includes(suggestedTag)
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-azure-50 hover:border-azure-500'
                    }`}
                  >
                    {suggestedTag}
                  </Button>
                ))}
              </div>
            </div>

            {/* Selected Tags */}
            {watchedTags.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Selected tags:</p>
                <div className="flex flex-wrap gap-2">
                  {watchedTags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-1 hover:text-red-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {errors.tags && (
              <p className="text-sm text-red-600">{errors.tags.message}</p>
            )}
          </div>

          <div className="flex gap-3">
            <Button type="submit" disabled={isPending} className="flex-1">
              {isPending ? 'Submitting...' : editingApp ? 'Update App' : 'Submit App'}
            </Button>
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>
                Cancel
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}