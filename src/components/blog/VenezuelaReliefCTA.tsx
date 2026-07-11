import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { ArrowRight, Check, Copy } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/useToast';
import {
  RELIEF_GOAL_USD,
  formatUsdShort,
  useVenezuelaReliefTotal,
} from '@/hooks/useVenezuelaReliefTotal';

/**
 * Live donation CTA for the Venezuela earthquake relief blog post.
 *
 * Shows a funding bar (summed across all four campaigns vs. the
 * $25,000 collective-fund goal), the collective fund's Bitcoin
 * address as a scannable QR + copyable string, and a donate button
 * that opens the collective fund on agora.spot.
 */

/** Collective fund's public (on-chain) Bitcoin address. */
const COLLECTIVE_FUND_ADDRESS =
  'bc1pd4pktggnd3majsh832varczsxvn4j4dtc6kk3xeld42043avd4sqlueplz';

/** Collective fund campaign page on agora.spot. */
const COLLECTIVE_FUND_URL =
  'https://agora.spot/naddr1qvzqqqyygupzqta5yvt6nq67p74mgpdwh04xccdkktfcf0nla05pykzqkdgkdp0uqqnxzem0wfsj6an9dejh5at9d3sj6etpwf6xsut4v94k2ttjv4kxjetx94n82mny44zetu';

/** BIP-21 URI so wallets scanning the QR jump straight to a send screen. */
const BITCOIN_URI = `bitcoin:${COLLECTIVE_FUND_ADDRESS}`;

export function VenezuelaReliefCTA() {
  const { data, isLoading } = useVenezuelaReliefTotal();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const raisedUsd = data?.raisedUsd;
  const progressPct = data?.progressPct ?? 0;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(COLLECTIVE_FUND_ADDRESS);
      setCopied(true);
      toast({ title: 'Address copied', description: 'Bitcoin address copied to clipboard.' });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: 'Could not copy',
        description: 'Copy the address manually instead.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="not-prose my-10 overflow-hidden rounded-2xl border-2 border-orange-500 bg-gradient-to-br from-orange-500 to-orange-600 shadow-xl">
      <div className="p-6 sm:p-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          {/* Left: headline, funding bar, donate button */}
          <div className="text-white">
            <h3 className="text-2xl font-bold leading-tight sm:text-3xl">
              Fund Venezuela earthquake relief
            </h3>
            <p className="mt-2 text-orange-50">
              100% of every sat goes to organizers on the ground.
            </p>

            {/* Funding bar */}
            <div className="mt-6">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-xl font-bold sm:text-2xl">
                  {isLoading
                    ? 'Loading…'
                    : raisedUsd !== undefined
                      ? `${formatUsdShort(raisedUsd)} raised`
                      : 'Every sat counts'}
                </span>
                <span className="text-sm font-medium text-orange-50">
                  of ${RELIEF_GOAL_USD.toLocaleString()} goal
                </span>
              </div>

              <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-orange-900/30">
                <div
                  className="h-full rounded-full bg-white transition-all duration-700"
                  style={{ width: `${Math.max(progressPct, raisedUsd ? 1.5 : 0)}%` }}
                />
              </div>

              <div className="mt-2 flex items-center justify-between text-xs text-orange-50">
                <span>
                  {raisedUsd !== undefined
                    ? `${Math.round(progressPct)}% funded`
                    : 'Live on-chain total'}
                </span>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="mt-6 w-full bg-white text-orange-600 hover:bg-orange-50 sm:w-auto"
            >
              <a
                href={COLLECTIVE_FUND_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate now
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Right: QR code + copyable address */}
          <div className="flex flex-col items-center rounded-xl bg-white p-4 shadow-inner">
            <p className="mb-3 text-sm font-bold text-gray-900">
              Donate Bitcoin
            </p>
            <QRCodeSVG
              value={BITCOIN_URI}
              size={160}
              level="M"
              marginSize={0}
              className="h-40 w-40"
            />
            <button
              type="button"
              onClick={handleCopy}
              className="mt-3 flex max-w-[180px] items-center gap-1.5 rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs font-mono text-gray-700 transition-colors hover:bg-gray-200"
              title="Copy Bitcoin address"
            >
              <span className="truncate">{COLLECTIVE_FUND_ADDRESS}</span>
              {copied ? (
                <Check className="h-3.5 w-3.5 shrink-0 text-green-600" />
              ) : (
                <Copy className="h-3.5 w-3.5 shrink-0" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
