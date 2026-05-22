/**
 * Live campaign card rendered on the /agora landing page.
 *
 * Pulls the campaign's title, banner, mode (public/private), and
 * donation totals from a {@link AgoraFeaturedCampaign}. Looks up the
 * organizer's display name via `useAuthor` (kind 0) so the card has
 * a real human name on it instead of a hex pubkey.
 *
 * Clicking the card opens the campaign on agora.spot at its naddr1
 * URL. Each card is also tagged with a small pill in the top-right
 * of the banner indicating Public vs. Private mode, so visitors can
 * see at a glance that Agora supports both.
 */

import { Globe, Lock, ExternalLink } from 'lucide-react';
import { useAuthor } from '@/hooks/useAuthor';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  type AgoraFeaturedCampaign,
  countryCodeToFlag,
  formatSatsShort,
} from '@/hooks/useAgoraFeaturedCampaigns';
import { genUserName } from '@/lib/genUserName';

interface Props {
  campaign: AgoraFeaturedCampaign;
}

export function AgoraCampaignCard({ campaign }: Props) {
  const { data: author } = useAuthor(campaign.pubkey);
  const organizerName =
    author?.metadata?.name ||
    author?.metadata?.display_name ||
    genUserName(campaign.pubkey);
  const organizerPicture = author?.metadata?.picture;

  const flag = countryCodeToFlag(campaign.countryCode);
  const isPrivate = campaign.mode === 'private';
  const href = `https://agora.spot/${campaign.naddr}`;

  // For the progress bar on public campaigns, estimate a ratio against the
  // USD goal using a conservative average BTC price. This is just for visual
  // feedback — the displayed numbers always come straight from the receipts.
  // Private campaigns don't render a progress bar at all.
  const ASSUMED_BTC_USD = 70_000;
  const raisedUsd = (campaign.raisedSats / 100_000_000) * ASSUMED_BTC_USD;
  const progressPct =
    !isPrivate && campaign.goalUsd && campaign.goalUsd > 0
      ? Math.min(100, Math.max(0, (raisedUsd / campaign.goalUsd) * 100))
      : 0;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agora-500 focus-visible:ring-offset-2 rounded-2xl"
    >
      <Card className="overflow-hidden border-gray-200 bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 h-full flex flex-col">
        {/* Banner */}
        <div className="relative aspect-[16/9] bg-gradient-to-br from-agora-100 to-agora-200 overflow-hidden">
          {campaign.banner ? (
            <img
              src={campaign.banner}
              alt={campaign.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-agora-500/50 text-4xl">
              ⚡
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/0" />

          {/* Country pill (top-left) */}
          {flag && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-white text-xs font-medium flex items-center gap-1.5">
              <span className="text-sm leading-none">{flag}</span>
              <span>{campaign.countryCode}</span>
            </div>
          )}

          {/* Mode pill (top-right) */}
          <div
            className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-white text-[11px] font-semibold flex items-center gap-1.5 ${
              isPrivate ? 'bg-indigo-600/90' : 'bg-agora-600/90'
            } backdrop-blur`}
            title={
              isPrivate
                ? 'Private campaign — donations are routed through silent payments and unlinkable on-chain'
                : 'Public campaign — donations are visible on the Bitcoin blockchain'
            }
          >
            {isPrivate ? <Lock className="size-3" /> : <Globe className="size-3" />}
            <span>{isPrivate ? 'Private' : 'Public'}</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col flex-1">
          {/* Organizer */}
          <div className="flex items-center gap-2 mb-2">
            {organizerPicture ? (
              <img
                src={organizerPicture}
                alt={organizerName}
                className="size-6 rounded-full object-cover bg-gray-100"
                loading="lazy"
              />
            ) : (
              <div className="size-6 rounded-full bg-gradient-to-br from-agora-400 to-agora-600 flex items-center justify-center text-white text-[10px] font-bold">
                {organizerName.charAt(0).toUpperCase()}
              </div>
            )}
            <span className="text-xs text-gray-500 truncate">{organizerName}</span>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-gray-900 leading-tight text-base mb-3 line-clamp-2">
            {campaign.title}
          </h3>

          {/* Summary (small, optional) */}
          {campaign.summary && (
            <p className="text-xs text-gray-600 leading-snug mb-4 line-clamp-2">
              {campaign.summary}
            </p>
          )}

          {/* Spacer pushes stats to the bottom */}
          <div className="flex-1" />

          {/* Stats */}
          {isPrivate ? (
            <div className="space-y-2">
              <Badge
                variant="outline"
                className="border-indigo-200 bg-indigo-50 text-indigo-700 text-[10px] font-medium"
              >
                Totals hidden by design
              </Badge>
              <p className="text-[11px] text-gray-500 leading-snug">
                Private campaigns don't publish donation receipts — the
                trail can't be reconstructed on-chain.
              </p>
            </div>
          ) : (
            <>
              {campaign.goalUsd && campaign.goalUsd > 0 && (
                <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-to-r from-agora-500 to-agora-600 rounded-full"
                    style={{ width: `${progressPct}%` }}
                  />
                </div>
              )}
              <div className="flex items-baseline justify-between text-xs">
                <div>
                  <span className="font-bold text-gray-900 text-sm">
                    {formatSatsShort(campaign.raisedSats)}
                  </span>
                  <span className="text-gray-500"> raised</span>
                </div>
                {campaign.goalUsd && campaign.goalUsd > 0 && (
                  <span className="text-gray-400">
                    of ${campaign.goalUsd.toLocaleString()}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-gray-500 mt-1">
                {campaign.donorCount} {campaign.donorCount === 1 ? 'donor' : 'donors'}
              </p>
            </>
          )}

          {/* View link */}
          <div className="flex items-center gap-1 text-xs font-medium text-agora-600 group-hover:text-agora-700 mt-4 pt-3 border-t border-gray-100">
            <span>View campaign</span>
            <ExternalLink className="size-3" />
          </div>
        </div>
      </Card>
    </a>
  );
}

/**
 * Skeleton placeholder used while featured campaigns are loading from
 * the Agora relay group.
 */
export function AgoraCampaignCardSkeleton() {
  return (
    <Card className="overflow-hidden border-gray-200 bg-white h-full flex flex-col">
      <div className="aspect-[16/9] bg-gray-100 animate-pulse" />
      <div className="p-4 flex flex-col flex-1 gap-3">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-full bg-gray-100 animate-pulse" />
          <div className="h-3 w-20 bg-gray-100 animate-pulse rounded" />
        </div>
        <div className="h-4 w-full bg-gray-100 animate-pulse rounded" />
        <div className="h-4 w-3/4 bg-gray-100 animate-pulse rounded" />
        <div className="flex-1" />
        <div className="h-1.5 w-full bg-gray-100 animate-pulse rounded-full" />
        <div className="h-3 w-1/2 bg-gray-100 animate-pulse rounded" />
      </div>
    </Card>
  );
}
