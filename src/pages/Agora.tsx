/**
 * /agora — Agora marketing landing page on Soapbox.pub.
 *
 * Replaces the previous redirect to the announcement blog post. The
 * page is a standalone marketing site for Agora that:
 *
 *  - Frames Agora as "GoFundMe without borders" — censorship-resistant
 *    on-chain Bitcoin donations to activists.
 *  - Explains the public/private campaign model (activist chooses;
 *    donor experience is identical either way).
 *  - Pulls live featured campaigns from Nostr using the same
 *    moderation labels Agora itself uses to surface them.
 *  - Mirrors Agora's actual /help disclaimer about above-ground
 *    activism rather than over-promising privacy.
 *
 * Visual identity: warm Agora orange (#ff6600 / hsl(14 79% 58%)) on
 * deep near-black hero (#0a0c14), with editorial typography.
 */

import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bitcoin,
  ShieldCheck,
  Eye,
  Percent,
  Megaphone,
  HandHeart,
  CheckCircle2,
  ExternalLink,
  Globe,
  Lock,
  Sparkles,
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useSEO } from '@/hooks/useSEO';
import {
  useAgoraFeaturedCampaigns,
  MAX_FEATURED_CAMPAIGNS,
} from '@/hooks/useAgoraFeaturedCampaigns';
import {
  AgoraCampaignCard,
  AgoraCampaignCardSkeleton,
} from '@/components/agora/AgoraCampaignCard';

/** Hero background image — orange-glow connected world-map artwork. */
const HERO_BG = '/assets/agora/world-map-bg.png';

/** Cover from the existing Agora blog post — reused as a fallback graphic. */
const AGORA_COVER = '/assets/blog/about-agora/agora-cover.png';

export default function Agora() {
  useSEO({
    title: 'Agora — GoFundMe Without Borders | Soapbox',
    description:
      'Agora is a censorship-resistant donation platform built on Nostr and on-chain Bitcoin. Send real Bitcoin directly to activists — no middleman, no platform fees, no account that can be frozen.',
    image: AGORA_COVER,
    type: 'website',
    keywords:
      'agora, agora.spot, bitcoin donations, censorship resistant, on-chain bitcoin, nostr, soapbox, activist funding, freedom tech, silent payments, political prisoners, venezuela, iran, zimbabwe, cambodia, uganda, nicaragua',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Agora',
      description:
        'A censorship-resistant Bitcoin donation platform for the global freedom movement. Built by Team Soapbox on Nostr and on-chain Bitcoin.',
      applicationCategory: 'Finance',
      operatingSystem: 'Web, iOS, Android',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      url: 'https://agora.spot',
      sameAs: ['https://gitlab.com/soapbox-pub/agora'],
      publisher: {
        '@type': 'Organization',
        name: 'Soapbox',
        url: 'https://soapbox.pub',
      },
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <HeroSection />
      <FeaturedCampaignsSection />
      <HowItWorksSection />
      <PublicVsPrivateSection />
      <WhyBitcoinSection />
      <GuidesSection />
      <PullQuoteSection />
      <FinalCtaSection />

      <Footer />
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Hero
// ───────────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0a0c14] text-white"
      style={{
        backgroundImage: `url('${HERO_BG}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay to keep the text legible over the bright map dots */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c14]/85 via-[#0a0c14]/70 to-[#0a0c14]/95" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-300 text-xs font-medium tracking-wider uppercase mb-6">
              <Sparkles className="size-3.5" />
              <span>GoFundMe Without Borders</span>
            </div>

            <h1 className="font-display font-bold tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6">
              Send real Bitcoin
              <br />
              directly to activists.
              <br />
              <span className="text-orange-400">No platform can stop it.</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
              Agora is a censorship-resistant donation platform built on Nostr
              and on-chain Bitcoin. No middleman. No platform fees. No account
              that can be frozen.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold h-12 px-6 text-base shadow-lg shadow-orange-500/25"
              >
                <a
                  href="https://agora.spot"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Agora
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white font-medium h-12 px-6 text-base"
              >
                <a
                  href="https://agora.spot/help/activists"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  For Activists
                  <ArrowRight className="ml-1.5 size-4" />
                </a>
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-orange-400" />
                <span>0% platform fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-orange-400" />
                <span>Open source</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-orange-400" />
                <span>Censorship resistant</span>
              </div>
            </div>
          </div>

          {/* Right: floating campaign card mockup */}
          <div className="lg:col-span-5">
            <HeroCampaignMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCampaignMockup() {
  return (
    <div className="relative max-w-md mx-auto">
      {/* Warm glow behind the card */}
      <div
        className="absolute inset-0 -m-8 rounded-3xl opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(255, 102, 0, 0.4), transparent 65%)',
        }}
      />

      <Card className="relative bg-[#1a1d24] border-white/10 overflow-hidden shadow-2xl rotate-[1.5deg] hover:rotate-0 transition-transform duration-500">
        {/* Banner */}
        <div className="aspect-[16/9] bg-gradient-to-br from-orange-900 via-red-900 to-orange-800 relative">
          <img
            src="/assets/agora/venezuela-libertad-presos-politicos.png"
            alt="Venezuelan protesters holding a 'Libertad Presos Políticos' sign in front of a large Leopoldo López portrait banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Country pill */}
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-white text-xs font-medium flex items-center gap-1.5">
            <span className="text-sm leading-none">🇻🇪</span>
            <span>Venezuela</span>
          </div>

          {/* Mode pill */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-orange-600/90 backdrop-blur text-white text-[11px] font-semibold flex items-center gap-1.5">
            <Globe className="size-3" />
            <span>Public</span>
          </div>
        </div>

        <CardContent className="p-5 text-white">
          <div className="flex items-center gap-2 mb-3">
            <div className="size-7 rounded-full bg-gradient-to-br from-yellow-400 via-red-500 to-red-700 flex items-center justify-center text-white text-xs font-bold">
              V
            </div>
            <span className="text-xs text-gray-400">Venezolanos Libres</span>
            <span className="text-orange-400">✓</span>
          </div>

          <h3 className="font-display font-bold text-white text-lg leading-tight mb-3">
            Free Venezuela's Political Prisoners
          </h3>

          <p className="text-xs text-gray-400 leading-snug mb-4 line-clamp-2">
            Legal defense and family support for 800+ political prisoners
            detained by the Maduro regime.
          </p>

          {/* Progress bar */}
          <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden mb-2">
            <div
              className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
              style={{ width: '78%' }}
            />
          </div>
          <div className="flex items-baseline justify-between mb-1">
            <div>
              <span className="font-bold text-white text-base">$8,420</span>
              <span className="text-gray-400 text-xs"> raised</span>
            </div>
            <span className="text-gray-500 text-xs">of $10,000</span>
          </div>
          <p className="text-[11px] text-gray-500 mb-4">
            247 donors · 12 countries
          </p>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm h-10 rounded-md flex items-center justify-center gap-2 transition-colors">
            <Bitcoin className="size-4" />
            Donate Bitcoin
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: How It Works
// ───────────────────────────────────────────────────────────────────────────

function HowItWorksSection() {
  const steps = [
    {
      n: '01',
      image: '/assets/agora/step-1-account.jpg',
      imageAlt:
        'A glowing orange cryptographic key floating in dark space, symbolizing self-sovereign identity',
      heading: 'Activists sign up in seconds.',
      body:
        'No bank. No paperwork. No approval. The moment an activist creates an account on Agora, they have a Bitcoin address ready to receive support — anywhere in the world.',
    },
    {
      n: '02',
      image: '/assets/agora/step-2-send.jpg',
      imageAlt:
        'A glowing Bitcoin coin flying through the air across a dark world map, symbolizing instant cross-border payment',
      heading: 'Donors send Bitcoin directly.',
      body:
        'Donors send Bitcoin from any wallet they already use — Cash App, Coinbase, Strike, a hardware wallet — straight to the activist. Agora never touches the money. There is no platform fee.',
    },
    {
      n: '03',
      image: '/assets/agora/step-3-spend.jpg',
      imageAlt:
        'An open hand with warm orange light radiating from the palm, symbolizing receiving and agency',
      heading: 'Support lands where it matters.',
      body:
        'Funds arrive at the activist directly. They keep custody, they keep control. Move it, swap it, or spend it — the guides on Agora explain how to do it privately and safely.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative bg-[#0a0c14] text-white py-20 md:py-28 overflow-hidden"
    >
      {/* Subtle texture from the world map background */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-orange-400 mb-3">
            How it works
          </p>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Three steps. No middleman.
          </h2>
          <p className="text-lg text-gray-400">
            From an activist's first signup to support landing in their hands —
            no banks, no borders, no permission.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.n}
              className="relative bg-white rounded-2xl overflow-hidden border border-white/5 shadow-2xl hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Step image */}
              <div className="aspect-[4/3] bg-[#0a0c14] relative overflow-hidden">
                <img
                  src={step.image}
                  alt={step.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 font-display font-bold text-white text-5xl leading-none drop-shadow-lg">
                  {step.n}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <h3 className="font-display font-bold text-gray-900 text-xl mb-3 leading-snug">
                  {step.heading}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Public vs. Private campaigns
// ───────────────────────────────────────────────────────────────────────────

function PublicVsPrivateSection() {
  return (
    <section className="bg-[#faf8f4] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3">
            Your campaign, your choice
          </p>
          <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Public or private. Donors don't have to choose.
          </h2>
          <p className="text-lg text-gray-600">
            Every campaign on Agora picks where it lands on the privacy ↔
            resilience trade-off. From the donor's side, it's always the same —
            just a Bitcoin address to send to.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Public */}
          <Card className="overflow-hidden border-gray-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-5 text-white">
              <div className="flex items-center gap-2 mb-1">
                <Globe className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Public Campaign
                </span>
              </div>
              <p className="text-orange-50 text-sm">
                Fast · Unstoppable · Transparent
              </p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-display font-bold text-gray-900 text-xl mb-2">
                  Truly censorship-resistant
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Donations land at a regular Bitcoin address the activist
                  controls. No middleman ever sits between donor and recipient —
                  even Agora is removed from the path.
                </p>
              </div>

              <ul className="space-y-2.5">
                {[
                  'Truly unstoppable — works even if Agora\'s servers go dark',
                  'Fastest settlement — Bitcoin confirmations only',
                  'Verifiable — anyone can see what an activist has received',
                ].map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-snug">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="size-2 rounded-full bg-amber-500" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                    Trade-off
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-snug">
                  Donations are public on the blockchain. Best for above-ground
                  activism where transparency is fine — or even an asset.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Private */}
          <Card className="overflow-hidden border-gray-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-5 text-white">
              <div className="flex items-center gap-2 mb-1">
                <Lock className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Private Campaign
                </span>
              </div>
              <p className="text-indigo-100 text-sm">
                Unlinkable · Discreet · Protected
              </p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-display font-bold text-gray-900 text-xl mb-2">
                  Built on silent payments
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Donations are routed through BIP-352 silent payments. Each one
                  lands at a fresh, unlinkable Bitcoin output that an observer
                  staring at the blockchain can't tie back to the campaign.
                </p>
              </div>

              <ul className="space-y-2.5">
                {[
                  "Donation trail can't be reconstructed on-chain",
                  'Protects activists facing serious adversaries',
                  'Donor experience is identical — just paste a Bitcoin address',
                ].map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-snug">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="size-2 rounded-full bg-amber-500" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                    Trade-off
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-snug">
                  Slightly slower. The Soapbox bridge briefly stands between
                  donor and activist to convert regular sends into silent
                  payments, so we re-introduce one trust point for the secrecy
                  gain.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-center mt-10 max-w-2xl mx-auto text-gray-600 italic text-sm leading-relaxed">
          From the donor's side: always just a normal Bitcoin address. No new
          wallet. No new software. No idea which mode the campaign is using —
          unless the activist tells them.
        </p>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Featured Campaigns
//
// Fetches moderator-featured campaigns live from the network on every
// render; the data wiring lives in `useAgoraFeaturedCampaigns`. The UI
// here intentionally does not surface the Nostr plumbing — to a visitor
// these are just real campaigns from real people.
// ───────────────────────────────────────────────────────────────────────────

function FeaturedCampaignsSection() {
  const { data: campaigns, isLoading, isError } = useAgoraFeaturedCampaigns();

  const hasResults = !!campaigns && campaigns.length > 0;
  const showSkeletons = isLoading && !hasResults;
  const showEmpty = !isLoading && (!campaigns || campaigns.length === 0);

  return (
    <section className="bg-[#f5f1eb] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-3">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3">
              Featured
            </p>
            <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Campaigns on Agora today
            </h2>
          </div>
          <a
            href="https://agora.spot/campaigns"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 hover:text-orange-700 font-medium text-sm inline-flex items-center gap-1 group"
          >
            Browse all on agora.spot
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Real campaigns from real people fighting for freedom around the
          world. Pick one that speaks to you and send Bitcoin straight to the
          organizer — no signup, no waiting, no middleman.
        </p>

        {showSkeletons && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.from({ length: MAX_FEATURED_CAMPAIGNS }).map((_, i) => (
              <AgoraCampaignCardSkeleton key={i} />
            ))}
          </div>
        )}

        {hasResults && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {campaigns.map((c) => (
              <AgoraCampaignCard key={c.aTag} campaign={c} />
            ))}
          </div>
        )}

        {(showEmpty || isError) && (
          <Card className="border-dashed border-2 border-orange-200 bg-white/60">
            <CardContent className="py-12 px-8 text-center">
              <div className="max-w-md mx-auto space-y-4">
                <div className="size-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto">
                  <Sparkles className="size-6 text-orange-500" />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-xl">
                  Featured campaigns are loading
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Head over to agora.spot to see every active campaign and find
                  one to support.
                </p>
                <Button
                  asChild
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <a
                    href="https://agora.spot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Agora
                    <ArrowRight className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Why on-chain Bitcoin (design rationale)
// ───────────────────────────────────────────────────────────────────────────

function WhyBitcoinSection() {
  const tiles = [
    {
      icon: Bitcoin,
      heading: 'Works with every Bitcoin wallet',
      body:
        'Cash App, Coinbase, Strike, Kraken, a hardware wallet — they all send Bitcoin natively. No new app for donors to install.',
    },
    {
      icon: ShieldCheck,
      heading: 'No custodian to shut down',
      body:
        "Unlike Lightning, on-chain Bitcoin doesn't depend on a custodial service staying online. If Agora itself disappeared tomorrow, public-mode donations would still flow.",
    },
    {
      icon: Eye,
      heading: 'Public is a feature, not a bug',
      body:
        'For public campaigns, donors and the world can verify exactly what activists have received. For activists who need privacy, switch to a private campaign and it\'s unlinkable on-chain.',
    },
    {
      icon: Percent,
      heading: 'Zero platform fees',
      body:
        'You pay only the Bitcoin network fee that goes to miners. Agora takes nothing. There is no platform business model sitting between donor and activist.',
    },
  ];

  return (
    <section className="bg-[#0a0c14] text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-orange-400 mb-3">
            By design
          </p>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Built to be unstoppable.
          </h2>
          <p className="text-lg text-gray-400">
            Every choice in Agora was made to keep support flowing — even when
            governments, banks, or platforms try to cut it off.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiles.map(({ icon: Icon, heading, body }) => (
            <div
              key={heading}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] transition-colors"
            >
              <div className="size-10 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center mb-5">
                <Icon className="size-5 text-orange-400" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2.5 leading-snug">
                {heading}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Donor / Activist guides
// ───────────────────────────────────────────────────────────────────────────

function GuidesSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-orange-600 mb-3">
            Guides
          </p>
          <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Pick the side you're on.
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're sending or receiving, learn how to do it safely and
            privately.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Donors */}
          <Card className="overflow-hidden border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            {/* Cover image — matches the Donor Guide hero on agora.spot */}
            <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
              <img
                src="/assets/agora/donor-guide-wlc.webp"
                alt="World Liberty Congress event — a community of supporters standing together"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/10 to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-3">
                <div className="size-10 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow">
                  <HandHeart className="size-5 text-blue-600" />
                </div>
                <span className="text-white text-xs font-semibold uppercase tracking-widest drop-shadow">
                  For Donors
                </span>
              </div>
            </div>
            <CardContent className="p-7 sm:p-8 flex flex-col flex-1">
              <h3 className="font-display font-bold text-gray-900 text-2xl mb-2">
                Support causes the banks won't.
              </h3>
              <p className="text-gray-600 mb-5">
                Send Bitcoin directly to activists and movements anywhere in
                the world — without asking a payment processor for permission.
              </p>
              <ul className="space-y-2.5 mb-7">
                {[
                  'Use any Bitcoin wallet you already have.',
                  'Zero platform fees — every sat reaches the activist.',
                  'Step-by-step privacy techniques in the Donor Guide.',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-snug">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                >
                  <a
                    href="https://agora.spot/help/donors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the Donor Guide
                    <ExternalLink className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Activists */}
          <Card className="overflow-hidden border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            {/* Cover image — uses the Raised Fists cover from Agora's
                official action-cover set, served from the same Blossom
                URL Agora itself loads. */}
            <div className="aspect-[16/9] bg-gray-100 relative overflow-hidden">
              <img
                src="https://blossom.dreamith.to/a5d3927951b9daae21f9709490f290497fb9fa4221649c72ba9762f28503a7ef.png"
                alt="Raised fists in the air — symbolic of activism and resistance"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 via-orange-900/10 to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-3">
                <div className="size-10 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow">
                  <Megaphone className="size-5 text-orange-600" />
                </div>
                <span className="text-white text-xs font-semibold uppercase tracking-widest drop-shadow">
                  For Activists
                </span>
              </div>
            </div>
            <CardContent className="p-7 sm:p-8 flex flex-col flex-1">
              <h3 className="font-display font-bold text-gray-900 text-2xl mb-2">
                Get funded without permission.
              </h3>
              <p className="text-gray-600 mb-5">
                Receive support directly from people who believe in your cause
                — no bank account, no application form, no company in the
                middle.
              </p>
              <ul className="space-y-2.5 mb-7">
                {[
                  'Start receiving donations as soon as you sign up.',
                  'Choose a public or private campaign to fit your situation.',
                  'Step-by-step cash-out and privacy guidance.',
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-orange-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-snug">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button
                  asChild
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto"
                >
                  <a
                    href="https://agora.spot/help/activists"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the Activist Guide
                    <ExternalLink className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Leopoldo López pull quote
// ───────────────────────────────────────────────────────────────────────────

function PullQuoteSection() {
  return (
    <section className="bg-[#f5f1eb] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 overflow-hidden border-l-4 border-orange-500 shadow-lg">
              <img
                src="/assets/blog/about-agora/agora-cover.png"
                alt="Leopoldo López"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <blockquote className="font-display text-gray-900 text-2xl sm:text-3xl lg:text-4xl leading-tight italic">
              "We are witnessing a coordinated assault on democratic principles.
              Agora is the infrastructure for an equally coordinated network of
              support going in the other direction."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-orange-500" />
              <div>
                <p className="font-semibold text-gray-900 tracking-wider uppercase text-sm">
                  Leopoldo López
                </p>
                <p className="text-gray-600 text-sm">
                  Venezuelan political leader · Co-founder of the World Liberty
                  Congress
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Final CTA
// ───────────────────────────────────────────────────────────────────────────

function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#7a1414] via-[#c13a14] to-[#ff6600] text-white py-20 md:py-28">
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold tracking-widest uppercase text-white/80 mb-4">
          Join the network
        </p>
        <h2 className="font-display font-bold text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight mb-6 leading-[0.95]">
          Power to the people.
        </h2>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Agora is open source, built by Team Soapbox, and free for everyone,
          everywhere — no platform, no permission, no middleman.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button
            asChild
            size="lg"
            className="bg-white text-orange-700 hover:bg-orange-50 font-bold h-14 px-8 text-lg shadow-2xl"
          >
            <a
              href="https://agora.spot"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Agora
              <ArrowRight className="ml-2 size-5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white font-medium h-14 px-7 text-base"
          >
            <Link to="/blog/agora-connecting-freedom-fighters">
              Read on the blog
            </Link>
          </Button>
        </div>
        <p className="text-sm text-white/70">
          Built by{' '}
          <Link to="/about" className="underline hover:text-white">
            Team Soapbox
          </Link>{' '}
          ·{' '}
          <a
            href="https://gitlab.com/soapbox-pub/agora"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Open source on GitLab
          </a>{' '}
          · No tracking, no analytics, no platform fee
        </p>
      </div>
    </section>
  );
}
