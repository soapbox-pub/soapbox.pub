import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';
import { nip19 } from 'nostr-tools';
import type { NostrEvent } from '@nostrify/nostrify';

// Kind 31733 for app submissions (addressable events)
const APP_SUBMISSION_KIND = 31733;

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

// Soapbox team follow pack naddr (same as used on About page)
const SOAPBOX_TEAM_NADDR = 'naddr1qvzqqqyckypzpyexz3t34l966ngh5xg7u2q788hthdqmj0av3lv8s2tz9t43zt6dqqxxkdrsx4mnqm3jxfeh2ess5pyrw';

/**
 * Local image overrides for apps whose original screenshot/icon URLs are dead
 * (media.ditto.pub 404s, moved GitLab files). Keyed by `<pubkey>:<d-tag>`
 * event coordinate. Images recovered via the Wayback Machine and hosted
 * locally in /public/assets/showcase/.
 */
const APP_IMAGE_OVERRIDES: Record<string, { screenshotUrl?: string; appIconUrl?: string }> = {
  '932614571afcbad4d17a191ee281e39eebbb41b93fac8fd87829622aeb112f4d:agora-1771728450914': {
    screenshotUrl: '/assets/media-kit/screenshots/agora/desktop-1.webp',
    appIconUrl: '/assets/media-kit/logos/agora-logo.png',
  },
  '932614571afcbad4d17a191ee281e39eebbb41b93fac8fd87829622aeb112f4d:universes-1759077045725': {
    screenshotUrl: '/assets/showcase/universes-screenshot.jpg',
    appIconUrl: '/assets/showcase/universes-icon.png',
  },
  '781a1527055f74c1f70230f10384609b34548f8ab6a0a6caa74025827f9fdae5:template--petition-site-1759109982133': {
    screenshotUrl: '/assets/showcase/template-petition-site-screenshot.jpg',
    appIconUrl: '/assets/showcase/template-petition-site-icon.png',
  },
  '932614571afcbad4d17a191ee281e39eebbb41b93fac8fd87829622aeb112f4d:template--restaurant-1759113236001': {
    screenshotUrl: '/assets/showcase/template-restaurant-screenshot.jpg',
    appIconUrl: '/assets/showcase/template-restaurant-icon.png',
  },
  '932614571afcbad4d17a191ee281e39eebbb41b93fac8fd87829622aeb112f4d:template--local-club-1759112897625': {
    screenshotUrl: '/assets/showcase/template-local-club-screenshot.jpg',
    appIconUrl: '/assets/showcase/template-local-club-icon.png',
  },
  '932614571afcbad4d17a191ee281e39eebbb41b93fac8fd87829622aeb112f4d:template--personal-portfolio-1759112287386': {
    screenshotUrl: '/assets/showcase/template-personal-portfolio-screenshot.jpg',
    appIconUrl: '/assets/showcase/template-personal-portfolio-icon.png',
  },
  '932614571afcbad4d17a191ee281e39eebbb41b93fac8fd87829622aeb112f4d:template--blog-1759112017867': {
    screenshotUrl: '/assets/showcase/template-blog-screenshot.jpg',
    appIconUrl: '/assets/showcase/template-blog-icon.png',
  },
  '932614571afcbad4d17a191ee281e39eebbb41b93fac8fd87829622aeb112f4d:template--small-business-1759111202473': {
    screenshotUrl: '/assets/showcase/template-small-business-screenshot.jpg',
    appIconUrl: '/assets/showcase/template-small-business-icon.png',
  },
  '932614571afcbad4d17a191ee281e39eebbb41b93fac8fd87829622aeb112f4d:template--conference-website-1759110788134': {
    screenshotUrl: '/assets/showcase/template-conference-website-screenshot.jpg',
    appIconUrl: '/assets/showcase/template-conference-website-icon.png',
  },
  '932614571afcbad4d17a191ee281e39eebbb41b93fac8fd87829622aeb112f4d:template--nonprofit-organization-1759110597371': {
    screenshotUrl: '/assets/showcase/template-nonprofit-organization-screenshot.jpg',
    appIconUrl: '/assets/showcase/template-nonprofit-organization-icon.png',
  },
  '932614571afcbad4d17a191ee281e39eebbb41b93fac8fd87829622aeb112f4d:template--wedding-site-1759110321566': {
    screenshotUrl: '/assets/showcase/template-wedding-site-screenshot.jpg',
    appIconUrl: '/assets/showcase/template-wedding-site-icon.png',
  },
};

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
  isApproved: boolean;
  isHidden: boolean;
  isHomepage: boolean;
}

export function useAppSubmissions() {
  const { nostr } = useNostr();

  return useQuery({
    queryKey: ['app-submissions'],
    queryFn: async (): Promise<AppSubmission[]> => {
      // Get Soapbox team follow pack for auto-approval
      const teamPubkeys = new Set<string>();
      try {
        const decoded = nip19.decode(SOAPBOX_TEAM_NADDR);
        if (decoded.type === 'naddr') {
          const addrData = decoded.data;
          const teamEvents = await nostr.query([{
            kinds: [addrData.kind],
            authors: [addrData.pubkey],
            '#d': [addrData.identifier],
            limit: 1
          }], { signal: AbortSignal.timeout(1000) });

          if (teamEvents.length > 0) {
            const teamEvent = teamEvents[0];
            // Extract pubkeys from 'p' tags
            teamEvent.tags
              .filter(([name]) => name === 'p')
              .forEach(([, pubkey]) => {
                if (pubkey) teamPubkeys.add(pubkey);
              });
          }
        }
      } catch (error) {
        console.warn('Failed to fetch Soapbox team follow pack:', error);
      }

      // Get all app submissions (kind 31733)
      const submissionEvents = await nostr.query([{
        kinds: [APP_SUBMISSION_KIND],
        '#t': ['soapbox-app-submission'],
        limit: 1000
      }], { signal: AbortSignal.timeout(5000) });

      // Note: Halloween submissions now use the same kind (31733) but are filtered by tags
      // They will be included in the main query but can be filtered out if needed

      // Get all moderation lists in a single combined query (more efficient)
      const moderatorListEvents = await nostr.query([{
        kinds: [30267],
        authors: [MODERATOR_HEX],
        '#d': [
          'soapbox-featured-apps',
          'soapbox-approved-apps',
          'soapbox-homepage-apps',
          'soapbox-hidden-apps',
        ],
        limit: 4,
      }], { signal: AbortSignal.timeout(3000) });

      // Extract individual lists from the combined result
      const featuredLists = moderatorListEvents.filter(e => e.tags.some(tag => tag[0] === 'd' && tag[1] === 'soapbox-featured-apps'));
      const approvedLists = moderatorListEvents.filter(e => e.tags.some(tag => tag[0] === 'd' && tag[1] === 'soapbox-approved-apps'));
      const homepageLists = moderatorListEvents.filter(e => e.tags.some(tag => tag[0] === 'd' && tag[1] === 'soapbox-homepage-apps'));
      const hiddenLists = moderatorListEvents.filter(e => e.tags.some(tag => tag[0] === 'd' && tag[1] === 'soapbox-hidden-apps'));

      // Process submissions and apply moderation
      const submissions: AppSubmission[] = [];
      const submissionMap = new Map<string, NostrEvent>();

      // Group regular submissions by d-tag (identifier) to get latest version
      for (const event of submissionEvents) {
        const dTag = event.tags.find(tag => tag[0] === 'd')?.[1];
        if (!dTag) continue;

        const existing = submissionMap.get(dTag);
        if (!existing || event.created_at > existing.created_at) {
          submissionMap.set(dTag, event);
        }
      }

      // Halloween submissions are now included in the main query above
      // since they use the same event kind (31733)

      // Get the latest featured list
      const latestFeaturedList = featuredLists.reduce((latest, current) =>
        !latest || current.created_at > latest.created_at ? current : latest,
        null as NostrEvent | null
      );

      // Get the latest approved list
      const latestApprovedList = approvedLists.reduce((latest, current) =>
        !latest || current.created_at > latest.created_at ? current : latest,
        null as NostrEvent | null
      );

      // Get the latest homepage list
      const latestHomepageList = homepageLists.reduce((latest, current) =>
        !latest || current.created_at > latest.created_at ? current : latest,
        null as NostrEvent | null
      );

      // Extract featured app coordinates from the list
      const featuredAppCoords = new Set<string>();
      if (latestFeaturedList) {
        latestFeaturedList.tags
          .filter(tag => tag[0] === 'a')
          .forEach(tag => featuredAppCoords.add(tag[1]));
      }

      // Extract approved app coordinates from the list
      const approvedAppCoords = new Set<string>();
      if (latestApprovedList) {
        latestApprovedList.tags
          .filter(tag => tag[0] === 'a')
          .forEach(tag => approvedAppCoords.add(tag[1]));
      }

      // Extract homepage app coordinates from the list
      const homepageAppCoords = new Set<string>();
      if (latestHomepageList) {
        latestHomepageList.tags
          .filter(tag => tag[0] === 'a')
          .forEach(tag => homepageAppCoords.add(tag[1]));
      }

      // Get the latest hidden list
      const latestHiddenList = hiddenLists.reduce((latest, current) =>
        !latest || current.created_at > latest.created_at ? current : latest,
        null as NostrEvent | null
      );

      // Extract hidden app coordinates from the list
      const hiddenAppCoords = new Set<string>();
      if (latestHiddenList) {
        latestHiddenList.tags
          .filter(tag => tag[0] === 'a')
          .forEach(tag => hiddenAppCoords.add(tag[1]));
      }

      // Convert to AppSubmission objects
      for (const [dTag, event] of submissionMap) {
        try {
          const appName = event.tags.find(tag => tag[0] === 'title')?.[1] || '';
          const websiteUrl = event.tags.find(tag => tag[0] === 'website')?.[1] || '';
          const repositoryUrl = event.tags.find(tag => tag[0] === 'repository')?.[1] || '';
          const authorNpub = event.tags.find(tag => tag[0] === 'author')?.[1] || event.pubkey;
          const appTags = event.tags.filter(tag => tag[0] === 'app-tag').map(tag => tag[1]);

          // Apply local image overrides for dead screenshot/icon hosts
          const imageOverride = APP_IMAGE_OVERRIDES[`${event.pubkey}:${dTag}`];
          const appIconUrl = imageOverride?.appIconUrl ?? event.tags.find(tag => tag[0] === 'icon')?.[1] ?? '';
          const screenshotUrl = imageOverride?.screenshotUrl ?? event.tags.find(tag => tag[0] === 'screenshot')?.[1] ?? '';

          // Check if app is featured, approved, homepage, or hidden
          // All apps now use kind 31733
          const appCoordinate = `${APP_SUBMISSION_KIND}:${event.pubkey}:${dTag}`;
          const isFeatured = featuredAppCoords.has(appCoordinate);
          const isHomepage = homepageAppCoords.has(appCoordinate);
          const isSubmittedByModerator = event.pubkey === MODERATOR_HEX;
          const isSubmittedByTeamMember = teamPubkeys.has(event.pubkey);
          const isApproved = approvedAppCoords.has(appCoordinate) || isFeatured || isSubmittedByModerator || isSubmittedByTeamMember; // Featured apps, moderator submissions, and team member submissions are automatically approved
          const isHidden = hiddenAppCoords.has(appCoordinate);

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
            isApproved,
            isHidden,
            isHomepage
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