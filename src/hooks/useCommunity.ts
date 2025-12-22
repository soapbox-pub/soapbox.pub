import { type NostrEvent, NRelay1 } from '@nostrify/nostrify';
import { useNostr } from '@nostrify/react';
import { useQuery } from '@tanstack/react-query';
import { nip19 } from 'nostr-tools';

// Shakespeare team follow pack naddr - contains team member pubkeys
const SHAKESPEARE_FOLLOW_PACK = 'naddr1qqxxkdrsx4mnqm3jxfeh2espz3mhxue69uhhyetvv9ujuerpd46hxtnfduq3vamnwvaz7tmjv4kxz7fwdehhxarj9e3xzmnyqyt8wumn8ghj7un9d3shjtnswf5k6ctv9ehx2aqzyzfjv9zhrt7t44x30gv3ac5puw0whw6phyl6er7c0q5ky2htzyh56qcyqqqf3vgar6gyq';

/**
 * Decoded follow pack data - either from naddr or nevent
 */
type FollowPackData = {
  /** For naddr: query by author, kind, and d-tag */
  type: 'naddr';
  pubkey: string;
  kind: number;
  identifier: string;
  relays?: string[];
} | {
  /** For nevent: query by event id */
  type: 'nevent';
  id: string;
  relays?: string[];
};

/**
 * Decode a follow pack identifier (naddr or nevent) to get its components
 */
function decodeFollowPackIdentifier(identifier: string): FollowPackData | null {
  try {
    const decoded = nip19.decode(identifier);
    if (decoded.type === 'naddr') {
      return {
        type: 'naddr',
        pubkey: decoded.data.pubkey,
        kind: decoded.data.kind,
        identifier: decoded.data.identifier,
        relays: decoded.data.relays,
      };
    }
    if (decoded.type === 'nevent') {
      return {
        type: 'nevent',
        id: decoded.data.id,
        relays: decoded.data.relays,
      };
    }
  } catch {
    // Invalid identifier
  }
  return null;
}

/**
 * Query multiple relays for an event, returning the first result found
 */
async function queryRelaysForEvent(
  relayUrls: string[],
  filter: { kinds?: number[]; authors?: string[]; '#d'?: string[]; ids?: string[] },
  signal: AbortSignal
): Promise<NostrEvent | null> {
  // Try each relay in parallel
  const promises = relayUrls.map(async (url) => {
    try {
      const relay = new NRelay1(url);
      const events = await relay.query([{ ...filter, limit: 1 }], { signal });
      return events[0] || null;
    } catch {
      return null;
    }
  });

  const results = await Promise.all(promises);
  return results.find((e) => e !== null) || null;
}

/**
 * Hook to fetch #ShakespeareDIY feed (kind 1 notes with the hashtag)
 */
export function useShakespeareFeed(limit = 20) {
  const { nostr } = useNostr();

  return useQuery<NostrEvent[]>({
    queryKey: ['shakespeare-feed', limit],
    queryFn: async (c) => {
      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(5000)]);
      const events = await nostr.query(
        [{ kinds: [1], '#t': ['shakespearediy', 'ShakespeareDIY'], limit }],
        { signal }
      );
      return events;
    },
    staleTime: 60000, // 1 minute
  });
}

/**
 * Helper to check if an event title contains "shakespeare" (case-insensitive)
 */
function hasShakespeareInTitle(event: NostrEvent): boolean {
  const title = event.tags.find(([name]) => name === 'title')?.[1]
    || event.tags.find(([name]) => name === 'name')?.[1]
    || '';
  return title.toLowerCase().includes('shakespeare');
}

/**
 * Hook to fetch the Shakespeare community follow pack to get team member pubkeys
 * Uses relay hints from the naddr to query for the event
 */
export function useShakespeareFollowPack() {
  const followPackData = decodeFollowPackIdentifier(SHAKESPEARE_FOLLOW_PACK);

  return useQuery<string[]>({
    queryKey: ['shakespeare-follow-pack', SHAKESPEARE_FOLLOW_PACK],
    queryFn: async (c) => {
      if (!followPackData || !followPackData.relays?.length) {
        return [];
      }

      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(5000)]);

      let event: NostrEvent | null = null;

      if (followPackData.type === 'naddr') {
        // Query by author, kind, and d-tag for addressable events
        event = await queryRelaysForEvent(
          followPackData.relays,
          {
            kinds: [followPackData.kind],
            authors: [followPackData.pubkey],
            '#d': [followPackData.identifier],
          },
          signal
        );
      } else {
        // Query by event id for nevent
        event = await queryRelaysForEvent(
          followPackData.relays,
          { ids: [followPackData.id] },
          signal
        );
      }

      if (!event) {
        return [];
      }

      // Extract all pubkeys from p tags
      const pubkeys = event.tags
        .filter(([name]) => name === 'p')
        .map(([, pubkey]) => pubkey);

      return pubkeys;
    },
    staleTime: 300000, // 5 minutes
    enabled: !!followPackData && !!followPackData.relays?.length,
  });
}

// NIP-52 Calendar Event kinds
const NIP52_KINDS = [31922, 31923]; // date-based and time-based calendar events

// NIP-53 Live Activity kinds
const NIP53_KINDS = [30311, 30313]; // live streaming and meeting room events

// All event kinds we want to fetch
const ALL_EVENT_KINDS = [...NIP52_KINDS, ...NIP53_KINDS];

/**
 * Get the start time from an event, handling both NIP-52 (start) and NIP-53 (starts) tags
 */
function getEventStartTag(event: NostrEvent): string | undefined {
  // NIP-53 uses 'starts', NIP-52 uses 'start'
  return event.tags.find(([name]) => name === 'starts')?.[1]
    || event.tags.find(([name]) => name === 'start')?.[1];
}

/**
 * Check if an event is in the future
 */
function isEventInFuture(event: NostrEvent): boolean {
  const startTag = getEventStartTag(event);
  if (!startTag) return false;

  const now = Math.floor(Date.now() / 1000);

  // For NIP-53 live events, also check status (show "live" and "planned" events)
  if (NIP53_KINDS.includes(event.kind)) {
    const status = event.tags.find(([name]) => name === 'status')?.[1];
    // Show live events regardless of start time
    if (status === 'live') return true;
    // Hide ended events
    if (status === 'ended') return false;
  }

  // For time-based events (NIP-52 31923 and NIP-53), start is a unix timestamp
  if (event.kind === 31923 || NIP53_KINDS.includes(event.kind)) {
    const startTime = parseInt(startTag, 10);
    return !isNaN(startTime) && startTime > now;
  }

  // For date-based events (NIP-52 31922), start is YYYY-MM-DD
  if (event.kind === 31922) {
    const today = new Date().toISOString().split('T')[0];
    return startTag >= today;
  }

  return true;
}

/**
 * Hook to fetch calendar events from Shakespeare team members (NIP-52 & NIP-53)
 * Filtered to only show events with "shakespeare" in the title
 * Fetches:
 * - NIP-52: date-based (31922) and time-based (31923) calendar events
 * - NIP-53: live streaming (30311) and meeting room (30313) events
 */
export function useCommunityEvents(limit = 10) {
  const { nostr } = useNostr();
  const { data: teamPubkeys } = useShakespeareFollowPack();

  return useQuery<NostrEvent[]>({
    queryKey: ['community-events', limit, teamPubkeys],
    queryFn: async (c) => {
      if (!teamPubkeys || teamPubkeys.length === 0) {
        return [];
      }

      const signal = AbortSignal.any([c.signal, AbortSignal.timeout(5000)]);

      // Query for calendar/live events created by or mentioning team members
      const [createdEvents, attendingEvents] = await Promise.all([
        // Events created by team members
        nostr.query(
          [{
            kinds: ALL_EVENT_KINDS,
            authors: teamPubkeys,
            limit: limit * 2,
          }],
          { signal }
        ),
        // Events where team members are tagged as participants
        nostr.query(
          [{
            kinds: ALL_EVENT_KINDS,
            '#p': teamPubkeys,
            limit: limit * 2,
          }],
          { signal }
        ),
      ]);

      // Combine all events and filter to only include those with "shakespeare" in the title
      const allEvents = [
        ...createdEvents,
        ...attendingEvents,
      ].filter(hasShakespeareInTitle);

      // Deduplicate events by id
      const uniqueEvents = allEvents.filter((event, index, self) =>
        index === self.findIndex(e => e.id === event.id)
      );

      // Filter for future/live events only and sort by start time
      return uniqueEvents
        .filter(isEventInFuture)
        .sort((a, b) => {
          // Sort by start date/time
          const aStart = getEventStartTag(a) || '';
          const bStart = getEventStartTag(b) || '';
          return aStart.localeCompare(bStart);
        });
    },
    staleTime: 300000, // 5 minutes
    enabled: !!teamPubkeys && teamPubkeys.length > 0,
  });
}

/**
 * Helper to extract calendar event metadata from a NostrEvent
 * Handles both NIP-52 (calendar) and NIP-53 (live activity) events
 */
export function extractCalendarEventData(event: NostrEvent) {
  const tags = event.tags;
  const isNIP53 = NIP53_KINDS.includes(event.kind);

  return {
    id: tags.find(([name]) => name === 'd')?.[1] || event.id,
    title: tags.find(([name]) => name === 'title')?.[1] || tags.find(([name]) => name === 'name')?.[1] || 'Untitled Event',
    summary: tags.find(([name]) => name === 'summary')?.[1] || '',
    description: event.content || '',
    image: tags.find(([name]) => name === 'image')?.[1],
    location: tags.find(([name]) => name === 'location')?.[1],
    // NIP-53 uses 'starts'/'ends', NIP-52 uses 'start'/'end'
    start: tags.find(([name]) => name === 'starts')?.[1] || tags.find(([name]) => name === 'start')?.[1] || '',
    end: tags.find(([name]) => name === 'ends')?.[1] || tags.find(([name]) => name === 'end')?.[1],
    startTzid: tags.find(([name]) => name === 'start_tzid')?.[1],
    endTzid: tags.find(([name]) => name === 'end_tzid')?.[1],
    geohash: tags.find(([name]) => name === 'g')?.[1],
    hashtags: tags.filter(([name]) => name === 't').map(([, value]) => value),
    references: tags.filter(([name]) => name === 'r').map(([, value]) => value),
    kind: event.kind,
    pubkey: event.pubkey,
    created_at: event.created_at,
    // NIP-53 specific fields
    status: isNIP53 ? tags.find(([name]) => name === 'status')?.[1] : undefined,
    streaming: isNIP53 ? tags.find(([name]) => name === 'streaming')?.[1] : undefined,
    recording: isNIP53 ? tags.find(([name]) => name === 'recording')?.[1] : undefined,
    service: isNIP53 ? tags.find(([name]) => name === 'service')?.[1] : undefined,
    isLive: isNIP53,
  };
}

/**
 * Format a calendar event date for display
 * Handles both NIP-52 (calendar) and NIP-53 (live activity) events
 */
export function formatEventDate(start: string, kind: number, startTzid?: string): string {
  // NIP-52 time-based events and NIP-53 live events use unix timestamps
  if (kind === 31923 || NIP53_KINDS.includes(kind)) {
    const timestamp = parseInt(start, 10);
    if (isNaN(timestamp)) return 'Invalid date';

    const date = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short',
    };
    if (startTzid) {
      options.timeZone = startTzid;
    }
    return date.toLocaleString(undefined, options);
  }

  // NIP-52 date-based events use YYYY-MM-DD format
  if (kind === 31922) {
    const date = new Date(start + 'T00:00:00');
    return date.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  }

  return start;
}

/**
 * Get relative time ago string
 */
export function getTimeAgo(timestamp: number): string {
  const now = Math.floor(Date.now() / 1000);
  const diff = now - timestamp;

  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d`;
  return new Date(timestamp * 1000).toLocaleDateString();
}

/**
 * Generate a username from a pubkey
 */
export function genUserName(pubkey: string): string {
  return `npub...${pubkey.slice(-6)}`;
}
