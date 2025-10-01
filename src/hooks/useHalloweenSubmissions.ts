import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';
import { nip19 } from 'nostr-tools';
import type { NostrEvent } from '@nostrify/nostrify';

// Kind 31734 for Halloween hackathon submissions (addressable events)
const HALLOWEEN_SUBMISSION_KIND = 31734;

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

export interface HalloweenSubmission extends NostrEvent {
  appName: string;
  websiteUrl: string;
  repositoryUrl: string;
  description: string;
  appIconUrl: string;
  screenshotUrl: string;
  appTags: string[];
  authorNpub: string;
  lightningAddress?: string;
  email?: string;
  isApproved: boolean;
  isHidden: boolean;
  isWinner: boolean;
  winnerCategory?: 'design' | 'function' | 'judges-choice';
}

export function useHalloweenSubmissions() {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['halloween-submissions'],
    queryFn: async (): Promise<HalloweenSubmission[]> => {
      // Get all Halloween hackathon submissions (kind 31734)
      const submissionEvents = await nostr.query([{
        kinds: [HALLOWEEN_SUBMISSION_KIND],
        '#t': ['soapbox-halloween-hackathon'],
        limit: 1000
      }]);

      // Get approved Halloween apps from moderators (NIP-51 kind 30267)
      const approvedLists = await nostr.query([{
        kinds: [30267],
        authors: [MODERATOR_HEX],
        '#d': ['halloween-approved-apps'],
        limit: 10
      }]);

      // Get Halloween winners from moderators (NIP-51 kind 30267)
      const winnerLists = await nostr.query([{
        kinds: [30267],
        authors: [MODERATOR_HEX],
        '#d': ['halloween-winners'],
        limit: 10
      }]);

      // Get reporting events for hidden apps (NIP-56 kind 1984)
      const reportEvents = await nostr.query([{
        kinds: [1984],
        authors: [MODERATOR_HEX],
        limit: 1000
      }]);

      // Process submissions and apply moderation
      const submissions: HalloweenSubmission[] = [];
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

      // Get the latest approved list
      const latestApprovedList = approvedLists.reduce((latest, current) =>
        !latest || current.created_at > latest.created_at ? current : latest,
        null as NostrEvent | null
      );

      // Get the latest winners list
      const latestWinnersList = winnerLists.reduce((latest, current) =>
        !latest || current.created_at > latest.created_at ? current : latest,
        null as NostrEvent | null
      );

      // Extract approved app coordinates from the list
      const approvedAppCoords = new Set<string>();
      if (latestApprovedList) {
        latestApprovedList.tags
          .filter(tag => tag[0] === 'a')
          .forEach(tag => approvedAppCoords.add(tag[1]));
      }

      // Extract winner app coordinates and categories from the list
      const winnerAppCoords = new Map<string, string>(); // appCoord -> category
      if (latestWinnersList) {
        latestWinnersList.tags
          .filter(tag => tag[0] === 'a')
          .forEach(tag => {
            const appCoord = tag[1];
            const category = tag[2]; // design, function, or judges-choice
            if (appCoord && category) {
              winnerAppCoords.set(appCoord, category);
            }
          });
      }

      // Get hidden app coordinates from reports
      const hiddenAppCoords = new Set<string>();
      const appReports = new Map<string, { hidden: number; unhidden: number }>();

      for (const report of reportEvents) {
        // Look for app coordinate in 'a' tags
        const aTag = report.tags.find(tag => tag[0] === 'a');
        if (!aTag || !aTag[1]) continue;

        const appCoord = aTag[1];
        const reportType = aTag[2];

        // Check if this is a moderation label
        const moderationLabel = report.tags.find(tag =>
          tag[0] === 'l' && tag[2] === 'soapbox.moderation'
        )?.[1];

        if (moderationLabel === 'hidden' && (reportType === 'spam' || reportType === 'other')) {
          if (!appReports.has(appCoord)) {
            appReports.set(appCoord, { hidden: 0, unhidden: 0 });
          }
          appReports.get(appCoord)!.hidden = Math.max(
            appReports.get(appCoord)!.hidden,
            report.created_at
          );
        } else if (moderationLabel === 'unhidden' && reportType === 'other') {
          if (!appReports.has(appCoord)) {
            appReports.set(appCoord, { hidden: 0, unhidden: 0 });
          }
          appReports.get(appCoord)!.unhidden = Math.max(
            appReports.get(appCoord)!.unhidden,
            report.created_at
          );
        }
      }

      // Determine which apps are currently hidden (latest action wins)
      for (const [appCoord, reports] of appReports) {
        if (reports.hidden > reports.unhidden) {
          hiddenAppCoords.add(appCoord);
        }
      }

      // Convert to HalloweenSubmission objects
      for (const [dTag, event] of submissionMap) {
        try {
          const appName = event.tags.find(tag => tag[0] === 'title')?.[1] || '';
          const websiteUrl = event.tags.find(tag => tag[0] === 'website')?.[1] || '';
          const repositoryUrl = event.tags.find(tag => tag[0] === 'repository')?.[1] || '';
          const appIconUrl = event.tags.find(tag => tag[0] === 'icon')?.[1] || '';
          const screenshotUrl = event.tags.find(tag => tag[0] === 'screenshot')?.[1] || '';
          const authorNpub = event.tags.find(tag => tag[0] === 'author')?.[1] || event.pubkey;
          const lightningAddress = event.tags.find(tag => tag[0] === 'lightning')?.[1];
          const email = event.tags.find(tag => tag[0] === 'email')?.[1];
          const appTags = event.tags.filter(tag => tag[0] === 'app-tag').map(tag => tag[1]);

          // Check if app is approved, hidden, or a winner
          const appCoordinate = `${HALLOWEEN_SUBMISSION_KIND}:${event.pubkey}:${dTag}`;
          const isSubmittedByModerator = event.pubkey === MODERATOR_HEX;
          const isApproved = approvedAppCoords.has(appCoordinate) || isSubmittedByModerator;
          const isHidden = hiddenAppCoords.has(appCoordinate);
          const isWinner = winnerAppCoords.has(appCoordinate);
          const winnerCategory = winnerAppCoords.get(appCoordinate) as 'design' | 'function' | 'judges-choice' | undefined;

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
            lightningAddress,
            email,
            isApproved,
            isHidden,
            isWinner,
            winnerCategory
          });
        } catch (error) {
          console.warn('Failed to parse Halloween submission:', error);
        }
      }

      return submissions;
    },
    staleTime: 30000, // 30 seconds
    refetchInterval: 60000, // 1 minute
  });
}

export function useUserHalloweenSubmissions(userPubkey?: string) {
  const { data: allSubmissions, ...rest } = useHalloweenSubmissions();

  const userSubmissions = allSubmissions?.filter(app => app.pubkey === userPubkey) || [];

  return {
    data: userSubmissions,
    ...rest
  };
}

// Hook for moderators to view contact information
export function useHalloweenSubmissionsWithContacts() {
  const { data: submissions, ...rest } = useHalloweenSubmissions();
  const { user } = useCurrentUser();

  // Only show contact info if user is a moderator
  const isModerator = user?.pubkey === MODERATOR_HEX;

  const submissionsWithContacts = submissions?.map(submission => ({
    ...submission,
    // Only expose contact info to moderators
    lightningAddress: isModerator ? submission.lightningAddress : undefined,
    email: isModerator ? submission.email : undefined,
  })) || [];

  return {
    data: submissionsWithContacts,
    isModerator,
    ...rest
  };
}

// Import useCurrentUser
import { useCurrentUser } from './useCurrentUser';