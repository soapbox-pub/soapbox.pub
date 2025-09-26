import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';
import { nip19 } from 'nostr-tools';
import type { NostrEvent } from '@nostrify/nostrify';

// Kind 30023 for app submissions (addressable events)
const APP_SUBMISSION_KIND = 30023;

// The moderator npub and hex
const MODERATOR_NPUB = 'npub1jvnpg4c6ljadf5t6ry0w9q0rnm4mksde87kglkrc993z46c39axsgq89sc';
const MODERATOR_HEX = (() => {
  try {
    const decoded = nip19.decode(MODERATOR_NPUB);
    return decoded.type === 'npub' ? decoded.data : '';
  } catch {
    return '';
  }
})();

export interface AppSubmission extends NostrEvent {
  appName: string;
  websiteUrl: string;
  repositoryUrl: string;
  description: string;
  appIconUrl: string;
  screenshotUrl: string;
  appTags: string[];
  authorNpub: string;
  isFeatured: boolean;
  isHidden: boolean;
}

export function useAppSubmissions() {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['app-submissions'],
    queryFn: async (): Promise<AppSubmission[]> => {
      // Get all app submissions
      const submissionEvents = await nostr.query([{
        kinds: [APP_SUBMISSION_KIND],
        '#t': ['soapbox-app-submission'],
        limit: 1000
      }]);

      // Get moderation events (feature/unfeature, hide/unhide)
      const moderationEvents = await nostr.query([{
        kinds: [1],
        authors: [MODERATOR_HEX],
        '#t': ['soapbox-moderation'],
        limit: 1000
      }]);

      // Process submissions and apply moderation
      const submissions: AppSubmission[] = [];
      const submissionMap = new Map<string, NostrEvent>();

      // Group submissions by d-tag (identifier) to get latest version
      for (const event of submissionEvents) {
        const dTag = event.tags.find(tag => tag[0] === 'd')?.[1];
        if (!dTag) continue;

        const existing = submissionMap.get(dTag);
        if (!existing || event.created_at > existing.created_at) {
          submissionMap.set(dTag, event);
        }
      }

      // Convert to AppSubmission objects
      for (const [dTag, event] of submissionMap) {
        try {
          const appName = event.tags.find(tag => tag[0] === 'title')?.[1] || '';
          const websiteUrl = event.tags.find(tag => tag[0] === 'website')?.[1] || '';
          const repositoryUrl = event.tags.find(tag => tag[0] === 'repository')?.[1] || '';
          const appIconUrl = event.tags.find(tag => tag[0] === 'icon')?.[1] || '';
          const screenshotUrl = event.tags.find(tag => tag[0] === 'screenshot')?.[1] || '';
          const authorNpub = event.tags.find(tag => tag[0] === 'author')?.[1] || event.pubkey;
          const appTags = event.tags.filter(tag => tag[0] === 'app-tag').map(tag => tag[1]);

          // Check moderation status
          let isFeatured = false;
          let isHidden = false;

          for (const modEvent of moderationEvents) {
            const targetApp = modEvent.tags.find(tag => tag[0] === 'a')?.[1];
            if (targetApp === `${APP_SUBMISSION_KIND}:${event.pubkey}:${dTag}`) {
              const action = modEvent.tags.find(tag => tag[0] === 'action')?.[1];
              if (action === 'feature') isFeatured = true;
              if (action === 'unfeature') isFeatured = false;
              if (action === 'hide') isHidden = true;
              if (action === 'unhide') isHidden = false;
            }
          }

          submissions.push({
            ...event,
            appName,
            websiteUrl,
            repositoryUrl,
            description: event.content,
            appIconUrl,
            screenshotUrl,
            appTags: appTags,
            authorNpub,
            isFeatured,
            isHidden
          });
        } catch (error) {
          console.warn('Failed to parse app submission:', error);
        }
      }

      return submissions;
    },
    staleTime: 30000, // 30 seconds
    refetchInterval: 60000, // 1 minute
  });
}

export function useUserAppSubmissions(userPubkey?: string) {
  const { data: allSubmissions, ...rest } = useAppSubmissions();

  const userSubmissions = allSubmissions?.filter(app => app.pubkey === userPubkey) || [];

  return {
    data: userSubmissions,
    ...rest
  };
}