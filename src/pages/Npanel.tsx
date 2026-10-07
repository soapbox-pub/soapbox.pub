/**
 * /npanel — npanel marketing landing page on Soapbox.pub.
 *
 * npanel is a self-hostable gateway for nsites (static websites published on
 * Nostr, NIP-5A) with a team dashboard. The page follows a strict "show,
 * don't tell" rule: every claim is a working, animated or interactive mockup.
 *
 *  - Hero: a live deploy loop. A terminal runs `nsyte deploy`, the signed
 *    manifest crosses the relays, and the site in the browser changes.
 *  - Dashboard: a site being added the way you add a DNS record.
 *  - Pull the plug: switch off every relay and Blossom server; the access
 *    log keeps streaming 200s from local disk.
 *  - Versions: click a version to pin it, click a failed one to read its
 *    deploy log. The previous version keeps serving.
 *  - Switches: Tor, analytics, error tracking and link previews, each
 *    flipped on and off with its effect drawn beside it.
 *  - Benchmarks, the whole config file, FAQ, and the call to action.
 *
 * Visual identity: matched to the npanel dashboard (npanel repo,
 * dashboard/src/index.css) in its dark appearance: the logo's orange
 * gradient (#ff9a2e → #f9541a), Apple system colors, brushed-metal sidebar
 * and the perforated rack-vent texture behind the top of the page.
 */

import { type CSSProperties, type ReactNode, type RefObject, useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Bug,
  Check,
  Globe,
  History,
  Lock,
  type LucideIcon,
  Plus,
  Settings,
  Share2,
  Users,
  Waypoints,
  X,
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

/** npanel source, releases and docs (canonical ngit repo on gitworkshop). */
const SOURCE_URL = 'https://gitworkshop.dev/alex@gleasonator.com/git.shakespeare.diy/npanel';

/** Shakespeare, Soapbox's AI app builder, which deploys to npanel. */
const SHAKESPEARE_URL = 'https://shakespeare.diy';

/** NIP-5A, the nsite spec. */
const NIP5A_URL = 'https://github.com/nostr-protocol/nips/blob/master/5A.md';

/** The npanel mark, copied from the dashboard's favicon.svg. */
const NPANEL_ICON = '/assets/npanel/icon.svg';

/** 1200x630 share image, copied from the dashboard's og.png. */
const NPANEL_OG_IMAGE = '/assets/npanel/og.png';

/** Page background: the dashboard's dark background, a shade deeper. */
const INK = '#0b0b0d';

/** Cards and windows (dashboard dark --card). */
const PANEL = '#18181b';

/** Raised rows inside a panel. */
const RAISED = '#232326';

/** The logo gradient, start and end. */
const ORANGE = '#ff9a2e';
const FLAME = '#f9541a';

/** Apple system colors, as the dashboard uses them. */
const GREEN = '#30d158';
const RED = '#ff453a';
const BLUE = '#0a84ff';
const PURPLE = '#bf5af2';
const INDIGO = '#5e5ce6';
const PINK = '#ff375f';
const YELLOW = '#ff9f0a';

const BRAND_GRADIENT = `linear-gradient(135deg, ${ORANGE}, ${FLAME})`;

/** Rack-vent holes, each with a lit lower lip (the dashboard's `perforated`). */
const PERFORATED: CSSProperties = {
  backgroundImage:
    'radial-gradient(circle at 50% 60%, rgba(255,255,255,0.075) 1.3px, transparent 1.6px), radial-gradient(circle, rgba(0,0,0,0.9) 1.3px, transparent 1.6px)',
  backgroundSize: '9px 9px',
};

/** Brushed aluminium, dark (the dashboard's `brushed` sidebar). */
const BRUSHED: CSSProperties = {
  backgroundColor: '#242427',
  backgroundImage: [
    `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.003 0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    'linear-gradient(to right, transparent, rgba(255,255,255,0.04) 35%, transparent 65%, rgba(255,255,255,0.04) 90%, transparent)',
    'linear-gradient(to bottom, #2b2b2f, #1d1d20)',
  ].join(', '),
};

/**
 * FAQ copy, rendered in FaqSection and mirrored into the FAQPage JSON-LD so
 * the visible text and the schema never drift.
 */
const NPANEL_FAQ: Array<{ question: string; answer: string }> = [
  {
    question: 'What is an nsite?',
    answer:
      'An nsite is a static website published on Nostr (NIP-5A). The files are stored on Blossom servers by their SHA-256 hash, and a signed Nostr event maps each path to a hash. Whoever holds the key controls the site, and any gateway can serve it.',
  },
  {
    question: 'What is npanel?',
    answer:
      'npanel is a self-hostable nsite gateway with a team dashboard. You point your domains at one server, map each domain to an nsite, and npanel downloads the files, stores them locally, and serves them over HTTPS.',
  },
  {
    question: 'How do I deploy a site to npanel?',
    answer:
      'Build it in Shakespeare and hit Deploy: Shakespeare publishes the app as an nsite and points a hostname on your npanel at it. Any other nsite tool works too, such as nsyte (nsyte deploy ./dist). npanel sees the new signed manifest on the relays, downloads every file, and switches the domain over once all of them are on disk.',
  },
  {
    question: 'Can I deploy Shakespeare apps to my own npanel?',
    answer:
      'Yes. Shakespeare deploys to npanel out of the box, and every app on shakespeare.wtf is served by one. Add your own server as an nsite gateway in Shakespeare\'s deploy settings and your apps get names on your domain instead.',
  },
  {
    question: 'What happens if the relays or Blossom servers go down?',
    answer:
      'Nothing your visitors can see. npanel serves every byte from its own disk and never proxies a request, so a site stays up when the relays and Blossom servers it came from are offline.',
  },
  {
    question: 'What happens if a deploy fails?',
    answer:
      'The previous version keeps serving. A version only goes live once every file is downloaded, failed deploys are retried, and each version has a deploy log that says which file failed, which servers were tried, and why.',
  },
  {
    question: 'Do I need a reverse proxy?',
    answer:
      'No. npanel can get certificates from Let\'s Encrypt and serve HTTPS itself. A Caddyfile and a Docker Compose setup with Caddy are included if you prefer a proxy.',
  },
  {
    question: 'Is npanel free?',
    answer:
      'Yes. npanel is free and open source under the AGPL-3.0 license. Releases are static Linux binaries for x86_64 and aarch64 with the dashboard built in, and there is a Docker image.',
  },
];

/* ------------------------------------------------------------------------ */
/* Hooks and small helpers                                                  */
/* ------------------------------------------------------------------------ */

/** A counter that increments every `intervalMs` while `active`. */
function useTicker(intervalMs: number, active = true): number {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setTick((value) => value + 1), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, active]);
  return tick;
}

/** Whether an element has scrolled into view. Latches on, so demos don't restart. */
function useInView<T extends Element>(): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element || seen) return;
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setSeen(true);
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [seen]);
  return [ref, seen];
}

/** Deterministic noise in [0, 1), so mock logs look random without being random. */
function noise(n: number): number {
  const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/** Sets Tailwind's ring color from a runtime value. */
function ringColor(color: string): CSSProperties {
  return { '--tw-ring-color': color } as CSSProperties;
}

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

/** Points for a sparkline / area chart in a 0..100 x 0..h box. */
function chartPath(values: number[], height: number, close = false): string {
  if (values.length < 2) return '';
  const max = Math.max(...values, 1);
  const step = 100 / (values.length - 1);
  const points = values.map((value, i) => `${(i * step).toFixed(2)},${(height - (value / max) * (height - 2) - 1).toFixed(2)}`);
  const line = `M${points.join(' L')}`;
  return close ? `${line} L100,${height} L0,${height} Z` : line;
}

/* ------------------------------------------------------------------------ */
/* Shared chrome                                                            */
/* ------------------------------------------------------------------------ */

function TrafficLights() {
  return (
    <div className="flex gap-1.5" aria-hidden>
      <span className="size-3 rounded-full bg-[#ff5f57]" />
      <span className="size-3 rounded-full bg-[#febc2e]" />
      <span className="size-3 rounded-full bg-[#28c840]" />
    </div>
  );
}

/** A dark macOS window. */
function Window({
  title,
  children,
  className = '',
  bodyClassName = '',
}: {
  title?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.06)] ${className}`}
      style={{ backgroundColor: PANEL }}
    >
      <div className="relative flex h-9 items-center border-b border-white/[0.06] px-3.5" style={{ backgroundColor: '#1d1d20' }}>
        <TrafficLights />
        {title && (
          <div className="absolute inset-x-16 truncate text-center text-xs font-medium text-white/45">{title}</div>
        )}
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}

/** A browser window with an address bar. */
function Browser({
  url,
  children,
  className = '',
  onion = false,
}: {
  url: string;
  children: ReactNode;
  className?: string;
  onion?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ${className}`}
      style={{ backgroundColor: PANEL }}
    >
      <div className="flex h-10 items-center gap-3 border-b border-white/[0.06] px-3.5" style={{ backgroundColor: '#1d1d20' }}>
        <TrafficLights />
        <div className="flex h-6 min-w-0 flex-1 items-center gap-1.5 rounded-md bg-black/40 px-2.5 font-mono text-[11px] text-white/70">
          {onion ? (
            <OnionGlyph className="size-3 shrink-0" />
          ) : (
            <Lock className="size-3 shrink-0" style={{ color: GREEN }} aria-hidden />
          )}
          <span className="truncate">{url}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

function OnionGlyph({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden>
      <circle cx="8" cy="9" r="6" fill="none" stroke={PURPLE} strokeWidth="1.3" />
      <circle cx="8" cy="9" r="3.6" fill="none" stroke={PURPLE} strokeWidth="1.3" />
      <circle cx="8" cy="9" r="1.4" fill={PURPLE} />
      <path d="M8 3 C8 1.5 9.5 1 10.5 1" fill="none" stroke={PURPLE} strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/** A dashboard settings icon tile. */
function Tile({ icon: Icon, color, className = 'size-7' }: { icon: LucideIcon; color: string; className?: string }) {
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-[7px] ${className}`} style={{ backgroundColor: color }}>
      <Icon className="size-[60%] text-white" aria-hidden />
    </span>
  );
}

function Eyebrow({ children, color = ORANGE }: { children: ReactNode; color?: string }) {
  return (
    <p className="mb-4 font-mono text-xs font-medium tracking-[0.22em] uppercase" style={{ color }}>
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  children,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'mx-auto max-w-3xl text-center' : 'max-w-4xl'}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl lg:text-6xl">{title}</h2>
      {children && <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/55">{children}</p>}
    </div>
  );
}

function GradientText({ children }: { children: ReactNode }) {
  return (
    <span className="bg-clip-text text-transparent" style={{ backgroundImage: BRAND_GRADIENT }}>
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------------ */
/* Page                                                                     */
/* ------------------------------------------------------------------------ */

export default function Npanel() {
  useSEO({
    title: 'npanel: Self-Hosted nsite Gateway for Nostr Websites | Soapbox',
    description:
      'Ship apps from Shakespeare to your own domains. npanel hosts websites published on Nostr from local disk, with rollbacks, Tor, analytics and error tracking.',
    image: NPANEL_OG_IMAGE,
    type: 'website',
    keywords:
      'npanel, nsite, nsite gateway, nostr website hosting, host website on nostr, nip-5a, blossom, nsyte, self-hosted static site hosting, decentralized web hosting, nostr static site, censorship resistant website, netlify alternative, vercel alternative, shakespeare deploy, deploy ai apps, host ai generated apps, self-hosted vercel, onion site hosting, soapbox',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'npanel',
      description:
        'A self-hostable gateway for static websites published on Nostr (nsites), with a team dashboard, versioned deploys, built-in HTTPS, Tor onion services, privacy-friendly analytics, error tracking and link previews.',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Linux',
      softwareVersion: '0.4.0',
      license: 'https://www.gnu.org/licenses/agpl-3.0.html',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      url: 'https://soapbox.pub/npanel',
      sameAs: [SOURCE_URL],
      publisher: { '@type': 'Organization', name: 'Soapbox', url: 'https://soapbox.pub' },
    },
    additionalStructuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: NPANEL_FAQ.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  });

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: INK }}>
      <Navigation />

      <HeroSection />
      <DashboardSection />
      <AnalyticsSection />
      <ErrorsSection />
      <PreviewsSection />
      <SpeedSection />
      <TorSection />
      <ShakespeareSection />
      <InstallSection />
      <FaqSection />
      <FinalCtaSection />

      <Footer />

      <style>{`
        @keyframes npFlash { from { opacity: .85 } to { opacity: 0 } }
        @keyframes npPop { from { opacity: 0; transform: scale(.9) } to { opacity: 1; transform: scale(1) } }
        @keyframes npFade { from { opacity: 0; transform: translateY(4px) } to { opacity: 1; transform: none } }
        @keyframes npSlide { from { opacity: 0; transform: translateY(-8px) } to { opacity: 1; transform: none } }
        @keyframes npRise { from { transform: translateY(0) } to { transform: translateY(-50%) } }
        @keyframes npReveal { from { clip-path: inset(0 100% 0 0) } to { clip-path: inset(0 0 0 0) } }
      `}</style>

    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Hero: a flood of apps                                                    */
/* ------------------------------------------------------------------------ */

/**
 * The flood: real nsites, every one of them. Soapbox's own (served by
 * npanel.soapbox.pub) mixed in with apps people built in Shakespeare and
 * published to Nostr, Chad's and Derek's among them. Icons are copied from the
 * sites' own deploys.
 */
const FLOOD_APPS: Array<{ name: string; domain: string; icon: string }> = [
  { name: 'Ditto', domain: 'ditto.pub', icon: '/assets/npanel/apps/ditto-pub.webp' },
  { name: 'The Button', domain: 'the-button.shakespeare.wtf', icon: '/assets/npanel/apps/the-button.webp' },
  { name: 'Sol', domain: 'sol.shakespeare.wtf', icon: '/assets/npanel/apps/sol.webp' },
  { name: 'Nostrdamus', domain: 'nostrdamus.shakespeare.wtf', icon: '/assets/npanel/apps/nostrdamus.webp' },
  { name: 'Armada', domain: 'armada.buzz', icon: '/assets/npanel/apps/armada-buzz.webp' },
  { name: 'Floral Cipher', domain: 'floral-cipher.shakespeare.wtf', icon: '/assets/npanel/apps/floral-cipher.webp' },
  { name: 'ClawChat', domain: 'clawchat.shakespeare.wtf', icon: '/assets/npanel/apps/clawchat.webp' },
  { name: 'PopArt Treasures', domain: 'popart-treasures.shakespeare.wtf', icon: '/assets/npanel/apps/popart-treasures.webp' },
  { name: 'Shakespeare', domain: 'shakespeare.diy', icon: '/assets/npanel/apps/shakespeare-diy.webp' },
  { name: 'Inkwell', domain: 'inkwell.shakespeare.wtf', icon: '/assets/npanel/apps/inkwell.webp' },
  { name: 'EmojiVerse', domain: 'emojiverse.shakespeare.wtf', icon: '/assets/npanel/apps/emojiverse.webp' },
  { name: 'Guest List Hub', domain: 'guest-list-hub.shakespeare.wtf', icon: '/assets/npanel/apps/guest-list-hub.webp' },
  { name: 'Agora', domain: 'agora.spot', icon: '/assets/npanel/apps/agora-spot.webp' },
  { name: 'xnostr', domain: 'xnostr.shakespeare.wtf', icon: '/assets/npanel/apps/xnostr.webp' },
  { name: 'Satoride', domain: 'satoride.shakespeare.wtf', icon: '/assets/npanel/apps/satoride.webp' },
  { name: 'Stashstr', domain: 'stashstr.shakespeare.wtf', icon: '/assets/npanel/apps/stashstr.webp' },
  { name: 'NostrHub', domain: 'nostrhub.io', icon: '/assets/npanel/apps/nostrhub-io.webp' },
  { name: 'Bon Voyage Globe', domain: 'bon-voyage-globe.shakespeare.wtf', icon: '/assets/npanel/apps/bon-voyage-globe.webp' },
  { name: 'Ikaros', domain: 'ikaros.shakespeare.wtf', icon: '/assets/npanel/apps/ikaros.webp' },
  { name: 'Seedmon', domain: 'seedmon.shakespeare.wtf', icon: '/assets/npanel/apps/seedmon.webp' },
  { name: 'Soapbox', domain: 'soapbox.pub', icon: '/assets/npanel/apps/soapbox-pub.webp' },
  { name: 'Calmcycle', domain: 'calmcycle.shakespeare.wtf', icon: '/assets/npanel/apps/calmcycle.webp' },
  { name: 'Keks Generator', domain: 'keks-generator.shakespeare.wtf', icon: '/assets/npanel/apps/keks-generator.webp' },
  { name: 'Mundes World', domain: 'mundes-world.shakespeare.wtf', icon: '/assets/npanel/apps/mundes-world.webp' },
  { name: 'Treasures', domain: 'treasures.to', icon: '/assets/npanel/apps/treasures.webp' },
  { name: 'Sats Sister', domain: 'sats-sister.shakespeare.wtf', icon: '/assets/npanel/apps/sats-sister.webp' },
  { name: 'Chama Chat', domain: 'chama-chat.shakespeare.wtf', icon: '/assets/npanel/apps/chama-chat.webp' },
  { name: 'Sprachcode', domain: 'sprachcode.shakespeare.wtf', icon: '/assets/npanel/apps/sprachcode.webp' },
  { name: 'Espy', domain: 'espy.you', icon: '/assets/npanel/apps/espy.webp' },
  { name: 'Allzeit-Uhr', domain: 'allzeit-uhr.shakespeare.wtf', icon: '/assets/npanel/apps/allzeit-uhr.webp' },
  { name: 'Nationverse', domain: 'nationverse.shakespeare.wtf', icon: '/assets/npanel/apps/nationverse.webp' },
  { name: 'Calendrier Républicain', domain: 'calendrier-republicain.shakespeare.wtf', icon: '/assets/npanel/apps/calendrier-republicain.webp' },
  { name: 'Clawstr', domain: 'clawstr.com', icon: '/assets/npanel/apps/clawstr.webp' },
  { name: 'Vidstr', domain: 'vidstr.shakespeare.wtf', icon: '/assets/npanel/apps/vidstr-old.webp' },
  { name: 'RelayScope', domain: 'relayscope.shakespeare.wtf', icon: '/assets/npanel/apps/relayscope.webp' },
  { name: 'UnixCal', domain: 'unixcal.shakespeare.wtf', icon: '/assets/npanel/apps/unixcal.webp' },
  { name: 'Birdstar', domain: 'birdstar.app', icon: '/assets/npanel/apps/birdstar-app.webp' },
  { name: 'Surreal Credits', domain: 'surreal-credits.shakespeare.wtf', icon: '/assets/npanel/apps/surreal-credits.webp' },
  { name: 'Nostr Report Viewer', domain: 'report-viewer.shakespeare.wtf', icon: '/assets/npanel/apps/report-viewer.webp' },
  { name: 'Onchain Zap Forensics', domain: 'onchain-zap-forensics.shakespeare.wtf', icon: '/assets/npanel/apps/onchain-zap-forensics.webp' },
  { name: 'Concord', domain: 'concordprotocol.org', icon: '/assets/npanel/apps/concordprotocol-org.webp' },
  { name: 'Nostr Podcast Hub', domain: 'nostr-podcast-hub.shakespeare.wtf', icon: '/assets/npanel/apps/nostr-podcast-hub.webp' },
  { name: 'Nostr Music', domain: 'nostr-music.shakespeare.wtf', icon: '/assets/npanel/apps/nostr-music.webp' },
  { name: 'NostrDocs', domain: 'nostr-docs.shakespeare.wtf', icon: '/assets/npanel/apps/nostr-docs.webp' },
  { name: 'Dittoroma', domain: 'dittoroma.com', icon: '/assets/npanel/apps/dittoroma-com.webp' },
  { name: 'Neopolygraphia', domain: 'neopolygraphia.shakespeare.wtf', icon: '/assets/npanel/apps/neopolygraphia.webp' },
  { name: 'Calendarium', domain: 'calendarium.shakespeare.wtf', icon: '/assets/npanel/apps/calendarium.webp' },
  { name: 'ByteURL', domain: 'bytebeat-url.shakespeare.wtf', icon: '/assets/npanel/apps/bytebeat-url.webp' },
  { name: 'Dreamith', domain: 'dreamith.to', icon: '/assets/npanel/apps/dreamith-to.webp' },
  { name: 'Block Time Calendar', domain: 'blocktime-calendar.shakespeare.wtf', icon: '/assets/npanel/apps/blocktime-calendar.webp' },
  { name: 'Nature ID', domain: 'nature-id.shakespeare.wtf', icon: '/assets/npanel/apps/nature-id.webp' },
  { name: 'Charlink AI', domain: 'charlink-ai.shakespeare.wtf', icon: '/assets/npanel/apps/charlink-ai.webp' },
  { name: 'Soapbox FE', domain: 'fe.soapbox.pub', icon: '/assets/npanel/apps/fe-soapbox-pub.webp' },
  { name: 'CartridgeQR', domain: 'cartridgeqr.shakespeare.wtf', icon: '/assets/npanel/apps/cartridgeqr.webp' },
  { name: 'Grimoire', domain: 'grimoire.shakespeare.wtf', icon: '/assets/npanel/apps/grimoire.webp' },
  { name: 'Gitano', domain: 'gitano.shakespeare.wtf', icon: '/assets/npanel/apps/gitano.webp' },
  { name: 'Geiger', domain: 'geiger.dreamith.to', icon: '/assets/npanel/apps/geiger-dreamith-to.webp' },
  { name: 'HomeHub', domain: 'homehub.shakespeare.wtf', icon: '/assets/npanel/apps/homehub.webp' },
  { name: 'UTXOracle', domain: 'utxoracle-btc-calculator.shakespeare.wtf', icon: '/assets/npanel/apps/utxoracle-btc-calculator.webp' },
  { name: 'Isometrix', domain: 'isometrix-5x3.shakespeare.wtf', icon: '/assets/npanel/apps/isometrix-5x3.webp' },
  { name: 'Open Web Initiative', domain: 'openwebinitiative.org', icon: '/assets/npanel/apps/openwebinitiative-org.webp' },
  { name: 'Wordstr', domain: 'wordstr.shakespeare.wtf', icon: '/assets/npanel/apps/wordstr.webp' },
  { name: 'Sahmstr', domain: 'sahmstr.shakespeare.wtf', icon: '/assets/npanel/apps/sahmstr.webp' },
  { name: 'Bitkopo', domain: 'bitkopo-simulator.shakespeare.wtf', icon: '/assets/npanel/apps/bitkopo-simulator.webp' },
  { name: 'YourSpace', domain: 'yourspace.live', icon: '/assets/npanel/apps/yourspace-live.webp' },
  { name: 'Nostr BBS', domain: 'nostr-bbs.shakespeare.wtf', icon: '/assets/npanel/apps/nostr-bbs.webp' },
  { name: 'Substr', domain: 'substr.shakespeare.wtf', icon: '/assets/npanel/apps/substr.webp' },
  { name: 'Beacon', domain: 'beacon.shakespeare.wtf', icon: '/assets/npanel/apps/beacon.webp' },
  { name: 'Budgetstr', domain: 'budgetstr.shakespeare.wtf', icon: '/assets/npanel/apps/budgetstr.webp' },
  { name: 'Nostrion', domain: 'nostrion.shakespeare.wtf', icon: '/assets/npanel/apps/nostrion.webp' },
  { name: 'Torchlite', domain: 'torchlite.shakespeare.wtf', icon: '/assets/npanel/apps/torchlite.webp' },
  { name: 'Regenerate Community', domain: 'regeneratecom.shakespeare.wtf', icon: '/assets/npanel/apps/regeneratecom.webp' },
  { name: 'Bytebeat Player', domain: 'bytebeat-play.shakespeare.wtf', icon: '/assets/npanel/apps/bytebeat-play.webp' },
];

const FLOOD_GRADIENTS: Array<[string, string]> = [
  ['#7c3aed', '#db2777'], ['#ea580c', '#dc2626'], ['#16a34a', '#0d9488'], ['#2563eb', '#7c3aed'],
  ['#f59e0b', '#ea580c'], ['#0891b2', '#2563eb'], ['#db2777', '#9333ea'], ['#65a30d', '#15803d'],
];

function floodApp(i: number) {
  return FLOOD_APPS[((i % FLOOD_APPS.length) + FLOOD_APPS.length) % FLOOD_APPS.length];
}

function AppIcon({ emoji, from, to, className = 'size-10 text-xl' }: { emoji: string; from: string; to: string; className?: string }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-[10px] shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] ${className}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {emoji}
    </span>
  );
}

function FloodTile({ i }: { i: number }) {
  const app = floodApp(i);
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[#141416] p-2.5 pr-3.5 ring-1 ring-white/[0.07]">
      <img src={app.icon} alt="" className="size-10 shrink-0 rounded-[10px] object-cover" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[13px] font-semibold text-white">{app.name}</p>
        <p className="truncate font-mono text-[10.5px] text-white/40">{app.domain}</p>
      </div>
      <span className="size-1.5 shrink-0 rounded-full" style={{ backgroundColor: GREEN, boxShadow: `0 0 6px ${GREEN}` }} />
    </div>
  );
}

/** Columns of apps pouring up the screen, each at its own speed. */
function AppWall() {
  const columns = [
    { offset: 0, duration: 11, className: '' },
    { offset: 9, duration: 8, className: '' },
    { offset: 19, duration: 13, className: '' },
    { offset: 28, duration: 9, className: 'hidden md:block' },
    { offset: 37, duration: 12, className: 'hidden lg:block' },
    { offset: 46, duration: 7.5, className: 'hidden lg:block' },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-x-[-8%] top-[-10%] bottom-[-10%] origin-top [transform:perspective(1400px)_rotateX(24deg)]">
        <div className="mx-auto grid h-full max-w-[1500px] grid-cols-3 gap-3 px-3 md:grid-cols-4 lg:grid-cols-6">
          {columns.map((column) => (
            <div key={column.offset} className={`h-full overflow-hidden ${column.className}`}>
              <div className="space-y-3" style={{ animation: `npRise ${column.duration}s linear infinite` }}>
                {[0, 1].map((copy) => (
                  <div key={copy} className="space-y-3">
                    {Array.from({ length: 14 }, (_, k) => (
                      <FloodTile key={k} i={column.offset + k} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden" style={{ backgroundColor: INK }}>
      <AppWall />

      {/* scrims, so the copy reads over the flood */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 42% 46% at 50% 46%, ${INK} 35%, ${INK}d9 60%, transparent 100%), linear-gradient(to bottom, ${INK} 0%, transparent 18%, transparent 75%, ${INK} 100%)`,
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-black/60 md:hidden" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 40% 30% at 50% 38%, ${FLAME}30, transparent 70%)` }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-black/60 py-1.5 pr-4 pl-1.5 ring-1 ring-white/10 backdrop-blur">
          <img src={NPANEL_ICON} alt="npanel logo" className="size-7" />
          <span className="font-mono text-xs text-white/65">
            npanel <span className="text-white/30">·</span> the nsite gateway
          </span>
        </div>

        <h1 className="text-5xl leading-[0.95] font-bold tracking-tighter sm:text-7xl lg:text-[5.75rem]">
          Your next thousand apps
          <br />
          <span className="relative">
            <GradientText>need a home.</GradientText>
            <span aria-hidden className="absolute inset-0 -z-10 opacity-50 blur-3xl" style={{ backgroundImage: BRAND_GRADIENT }} />
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
          Build a PWA, deploy it on Nostr, and it's live on your own domain. Then do it again. npanel serves every app
          your team ships, from one box you own.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-xl px-6 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(249,84,26,0.8),inset_0_1px_0_rgba(255,255,255,0.3)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            style={{ backgroundImage: BRAND_GRADIENT }}
          >
            Get npanel <ArrowRight className="size-4" />
          </a>
          <a
            href="#install"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-black/60 px-6 font-mono text-sm text-white/80 ring-1 ring-white/10 backdrop-blur transition-colors hover:bg-black/80"
          >
            <span style={{ color: ORANGE }}>$</span> docker compose up -d
          </a>
        </div>

        <DeployStream />
      </div>
    </section>
  );
}

/** The gateway's deploy log, going faster than anyone can read it. */
function DeployStream() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const tick = useTicker(140, inView);
  const lines = Array.from({ length: 5 }, (_, i) => ({ n: tick - i, app: floodApp(tick - i + 7) }));

  return (
    <div
      ref={ref}
      className="mt-14 w-full max-w-xl overflow-hidden rounded-xl bg-black/70 text-left ring-1 ring-white/10 backdrop-blur-md"
    >
      <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-2.5">
        <p className="flex items-center gap-2 font-mono text-[11px] whitespace-nowrap text-white/55">
          <span className="size-2 animate-pulse rounded-full" style={{ backgroundColor: GREEN, boxShadow: `0 0 8px ${GREEN}` }} />
          npanel <span className="text-white/30">·</span> deploy log
        </p>
        <p className="font-mono text-[11px] whitespace-nowrap text-white/55">
          <span className="font-semibold tabular-nums" style={{ color: GREEN }}>+{tick.toLocaleString('en-US')}</span> sites
          <span className="hidden sm:inline"> since you got here</span>
        </p>
      </div>
      <div className="px-4 py-2 font-mono text-[11.5px] leading-6">
        {lines.map((line, i) => (
          <div
            key={line.n}
            className="flex items-center gap-3 whitespace-nowrap"
            style={{ opacity: 1 - i * 0.17 }}
          >
            <span style={{ color: GREEN }}>build_ready</span>
            <span className="flex-1 truncate text-white/85">
              {line.app.domain}
            </span>
            <span className="text-white/35">{12 + Math.floor(noise(line.n) * 60)} files</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Shakespeare → npanel                                                     */
/* ------------------------------------------------------------------------ */

/** Your own npanel, as a Shakespeare deploy target. */
const TEAM_DOMAIN = 'yourteam.dev';

type AppKind = 'timer' | 'vote' | 'list' | 'bars' | 'grid';

interface LoopApp {
  emoji: string;
  name: string;
  sub: string;
  prompt: string;
  kind: AppKind;
  from: string;
  to: string;
  files: string[];
}

const LOOP_APPS: LoopApp[] = [
  { emoji: '⏱️', name: 'Pomodoro Lofi', sub: 'pomodoro', prompt: 'a pomodoro timer with lo-fi vibes', kind: 'timer', from: '#7c3aed', to: '#db2777', files: ['src/pages/Index.tsx', 'src/components/Timer.tsx'] },
  { emoji: '🍕', name: 'Pizza Vote', sub: 'pizza', prompt: 'let the office vote on friday pizza', kind: 'vote', from: '#ea580c', to: '#dc2626', files: ['src/pages/Index.tsx', 'src/hooks/useVotes.ts'] },
  { emoji: '🪴', name: 'Plant Water', sub: 'plants', prompt: 'remind me which plants need water', kind: 'list', from: '#16a34a', to: '#0d9488', files: ['src/pages/Index.tsx', 'src/components/PlantRow.tsx'] },
  { emoji: '🏋️', name: 'Lift Log', sub: 'lifts', prompt: 'track my lifts and chart my progress', kind: 'bars', from: '#2563eb', to: '#7c3aed', files: ['src/pages/Index.tsx', 'src/components/LiftChart.tsx'] },
  { emoji: '📸', name: 'Polaroids', sub: 'polaroids', prompt: 'a photo wall for our team offsite', kind: 'grid', from: '#f59e0b', to: '#ea580c', files: ['src/pages/Index.tsx', 'src/components/PhotoWall.tsx'] },
];

/** Ticks per app in the Shakespeare loop (280 ms each). */
const APP_LOOP = 22;

function ShakespeareSection() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const tick = useTicker(280, inView);
  const t = tick % APP_LOOP;
  const index = Math.floor(tick / APP_LOOP);
  const app = LOOP_APPS[index % LOOP_APPS.length];
  const live = t >= 16;
  const shown = live ? app : index === 0 ? null : LOOP_APPS[(index - 1) % LOOP_APPS.length];

  return (
    <section className="relative py-24 md:py-32" style={{ backgroundColor: '#08080a' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Shakespeare + npanel"
          title={
            <>
              Prompt. Deploy. <GradientText>Next.</GradientText>
            </>
          }
        >
          Shakespeare, Soapbox's AI app builder, deploys straight to npanel: every app on shakespeare.wtf is served by
          one. Add your own npanel as a deploy target and the apps land on your domain instead.
        </SectionHeading>

        <div ref={ref} className="grid items-stretch gap-4 lg:grid-cols-[minmax(0,1fr)_150px_minmax(0,1fr)] lg:gap-0">
          <ShakespeareMock t={t} app={app} />
          <DeployWire t={t} />
          <Browser url={shown ? `https://${shown.sub}.${TEAM_DOMAIN}` : `https://${TEAM_DOMAIN}`}>
            <div className="relative h-[340px] overflow-hidden">
              {shown ? (
                <div key={shown.sub} className="h-full animate-[npPop_0.45s_cubic-bezier(.2,1.3,.4,1)_both]">
                  <AppPreview app={shown} />
                </div>
              ) : (
                <div className="flex h-full items-center justify-center font-mono text-xs text-white/30">waiting for a deploy…</div>
              )}
              {live && t === 16 && <div className="absolute inset-0 animate-[npFlash_0.9s_ease-out_forwards] bg-white" />}
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-white/[0.06] px-3.5 py-2 font-mono text-[10.5px] text-white/40">
              <span>
                HTTP/2 <span style={{ color: GREEN }}>200</span>
              </span>
              <span className="truncate">
                x-nsite-addr <span className="text-white/65">35128:{'<you>'}:{shown?.sub ?? '…'}</span>
              </span>
            </div>
          </Browser>
        </div>

        <div className="mt-8 grid gap-6 text-center sm:grid-cols-3">
          {[
            { n: '01', title: 'Describe it', body: 'Shakespeare writes the app and builds it.', on: t < 12 },
            { n: '02', title: 'Hit Deploy', body: 'It publishes an nsite signed with your key.', on: t >= 12 && t < 16 },
            { n: '03', title: 'Live on your npanel', body: 'Your server downloads it and takes the name.', on: t >= 16 },
          ].map((step) => (
            <div key={step.n} className="transition-opacity duration-500" style={{ opacity: step.on ? 1 : 0.35 }}>
              <p className="font-mono text-xs" style={{ color: step.on ? ORANGE : 'rgba(255,255,255,0.4)' }}>
                {step.n}
              </p>
              <p className="mt-1 font-semibold text-white">{step.title}</p>
              <p className="mt-1 text-sm text-white/50">{step.body}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 flex max-w-2xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <p className="text-sm text-white/45">Anything that publishes an nsite works, too:</p>
          <code className="rounded-lg bg-white/[0.05] px-3 py-1.5 font-mono text-[12.5px] text-white/80 ring-1 ring-white/10">
            <span style={{ color: ORANGE }}>❯</span> nsyte deploy ./dist
          </code>
        </div>
      </div>
    </section>
  );
}

function ShakespeareMock({ t, app }: { t: number; app: LoopApp }) {
  const typed = app.prompt.slice(0, Math.max(0, Math.round((app.prompt.length * t) / 6)));
  const sent = t >= 7;
  const deploying = t >= 12;
  const steps = [
    { at: 8, text: `Wrote ${app.files[0]}` },
    { at: 9, text: `Wrote ${app.files[1]}` },
    { at: 10, text: 'Build passed' },
  ];
  const deploySteps = [
    { at: 13, text: 'Publishing to Nostr' },
    { at: 14, text: `Pointing ${app.sub}.${TEAM_DOMAIN}` },
    { at: 16, text: 'Live' },
  ];

  return (
    <Window
      title={
        <span className="inline-flex items-center gap-1.5">
          <img src="/assets/logos/shakespeare-logo.png" alt="" className="size-3.5" />
          Shakespeare
        </span>
      }
      bodyClassName="flex h-[372px] flex-col"
    >
      <div className="flex items-center gap-2.5 border-b border-white/[0.06] px-4 py-2.5">
        <AppIcon emoji={app.emoji} from={app.from} to={app.to} className="size-6 text-[13px] rounded-md" />
        <p className="flex-1 truncate text-[13px] font-medium text-white">{app.name}</p>
        <span
          className="inline-flex h-7 items-center gap-1.5 rounded-md px-3 text-[12px] font-semibold text-white transition-transform"
          style={{ backgroundColor: '#7c3aed', transform: t === 12 ? 'scale(0.9)' : 'scale(1)', boxShadow: t === 12 ? '0 0 0 4px rgba(124,58,237,0.35)' : 'none' }}
        >
          Deploy
        </span>
      </div>

      <div className="relative flex-1 space-y-3 overflow-hidden px-4 py-4 text-[13px]">
        {sent && (
          <div className="ml-auto max-w-[85%] animate-[npFade_0.3s_ease-out] rounded-2xl rounded-br-md bg-white/10 px-3.5 py-2 text-white">
            Make {app.prompt}
          </div>
        )}
        {t >= 8 && (
          <div className="space-y-1 font-mono text-[11.5px]">
            {steps
              .filter((step) => t >= step.at)
              .map((step) => (
                <p key={step.text} className="animate-[npFade_0.25s_ease-out] text-white/60">
                  <span style={{ color: GREEN }}>✓</span> {step.text}
                </p>
              ))}
          </div>
        )}

        {/* deploy sheet */}
        <div
          className="absolute inset-x-4 bottom-4 rounded-xl p-3.5 ring-1 ring-white/10 transition-all duration-300"
          style={{
            backgroundColor: '#242427',
            opacity: deploying ? 1 : 0,
            transform: deploying ? 'translateY(0)' : 'translateY(10px)',
          }}
        >
          <div className="mb-2 flex items-center justify-between text-[11px]">
            <span className="text-white/45">Deploy to</span>
            <span className="inline-flex items-center gap-1.5 font-medium text-white">
              <img src={NPANEL_ICON} alt="" className="size-3.5" /> Team npanel
            </span>
          </div>
          {deploySteps.map((step) => {
            const done = t >= step.at;
            const active = !done && deploySteps.find((s) => t < s.at) === step;
            return (
              <p key={step.text} className="flex items-center gap-2 font-mono text-[11.5px]" style={{ color: done ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)' }}>
                {done ? (
                  <span style={{ color: GREEN }}>✓</span>
                ) : active ? (
                  <span className="size-2.5 animate-spin rounded-full border-[1.5px] border-white/30 border-t-white" />
                ) : (
                  <span className="w-2.5" />
                )}
                {step.text}
              </p>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/[0.06] p-3">
        <div className="flex h-9 items-center rounded-lg bg-black/40 px-3 text-[13px] ring-1 ring-white/10">
          {!sent ? (
            <span className="text-white/85">
              {typed ? `Make ${typed}` : <span className="text-white/30">What do you want to build?</span>}
              <span className="ml-px inline-block h-4 w-px translate-y-0.5 animate-pulse bg-white" />
            </span>
          ) : (
            <span className="text-white/30">What do you want to build?</span>
          )}
        </div>
      </div>
    </Window>
  );
}

/** The gap between the builder and the browser: relays, and a signed event crossing them. */
function DeployWire({ t }: { t: number }) {
  // The event leaves at 13, reaches the relays at 14, and npanel at 15.
  const position = t < 13 ? 0 : t === 13 ? 6 : t === 14 ? 50 : 96;
  const visible = t >= 13 && t <= 15;
  const relaysLit = t >= 14 && t <= 16;

  return (
    <div className="relative hidden items-center justify-center lg:flex" aria-hidden>
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-white/5 via-white/20 to-white/5" />
      <div
        className="absolute top-1/2 h-px -translate-y-1/2 transition-[width] duration-[280ms] ease-linear"
        style={{ left: 0, width: visible || t === 16 ? `${position}%` : 0, backgroundImage: BRAND_GRADIENT }}
      />
      <div className="relative z-10 flex flex-col gap-2">
        {RELAYS.map((relay, i) => (
          <div
            key={relay}
            className="rounded-md px-2 py-1 text-center font-mono text-[10px] ring-1 transition-all duration-300"
            style={{
              backgroundColor: relaysLit ? '#2a1a10' : RAISED,
              color: relaysLit ? ORANGE : 'rgba(255,255,255,0.45)',
              boxShadow: relaysLit ? `0 0 24px -4px ${FLAME}` : 'none',
              transitionDelay: `${i * 60}ms`,
              ...ringColor(relaysLit ? `${ORANGE}80` : 'rgba(255,255,255,0.08)'),
            }}
          >
            {relay}
          </div>
        ))}
      </div>
      <div
        className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transition-[left,opacity] duration-[280ms] ease-linear"
        style={{ left: `${position}%`, opacity: visible ? 1 : 0 }}
      >
        <div className="size-3.5 rounded-full" style={{ backgroundImage: BRAND_GRADIENT, boxShadow: `0 0 12px 3px ${FLAME}, 0 0 40px 8px ${ORANGE}66` }} />
      </div>
    </div>
  );
}

const RELAYS = ['relay.ditto.pub', 'relay.primal.net', 'nos.lol'];

/** A freshly generated app, drawn from its kind. */
function AppPreview({ app }: { app: LoopApp }) {
  const gradient = `linear-gradient(135deg, ${app.from}, ${app.to})`;
  return (
    <div className="flex h-full flex-col bg-[#fafaf9] text-[#1c1917]">
      <div className="flex items-center gap-2 px-4 py-3">
        <AppIcon emoji={app.emoji} from={app.from} to={app.to} className="size-7 rounded-lg text-sm" />
        <span className="text-sm font-bold">{app.name}</span>
        <span className="ml-auto rounded-full bg-black/5 px-2 py-0.5 text-[10px] text-black/50">Log in</span>
      </div>
      <div className="flex flex-1 items-center justify-center px-4 pb-4">
        {app.kind === 'timer' && (
          <div className="flex flex-col items-center gap-4">
            <div className="flex size-40 items-center justify-center rounded-full p-1.5" style={{ backgroundImage: gradient }}>
              <div className="flex size-full flex-col items-center justify-center rounded-full bg-[#fafaf9]">
                <span className="text-4xl font-bold tabular-nums">24:59</span>
                <span className="text-[10px] tracking-widest text-black/40 uppercase">focus</span>
              </div>
            </div>
            <div className="flex gap-2">
              <span className="rounded-full px-4 py-1.5 text-xs font-semibold text-white" style={{ backgroundImage: gradient }}>Start</span>
              <span className="rounded-full bg-black/5 px-4 py-1.5 text-xs">Reset</span>
            </div>
          </div>
        )}
        {app.kind === 'vote' && (
          <div className="w-full max-w-xs space-y-2">
            <p className="mb-3 text-center text-sm font-semibold">Friday pizza?</p>
            {[['Margherita', 46], ['Pepperoni', 31], ['Hawaiian', 15], ['Veggie', 8]].map(([label, pct]) => (
              <div key={label} className="relative overflow-hidden rounded-lg bg-black/5 px-3 py-2 text-xs">
                <span className="absolute inset-y-0 left-0 opacity-30" style={{ width: `${pct}%`, backgroundImage: gradient }} />
                <span className="relative flex justify-between">
                  <span>{label}</span>
                  <span className="font-semibold">{pct}%</span>
                </span>
              </div>
            ))}
          </div>
        )}
        {app.kind === 'list' && (
          <div className="w-full max-w-xs space-y-2">
            {[['Monstera', 'today', true], ['Fiddle leaf fig', 'today', true], ['Pothos', 'Thursday', false], ['Snake plant', 'next week', false]].map(([plant, when, due]) => (
              <div key={String(plant)} className="flex items-center gap-3 rounded-lg bg-white px-3 py-2 text-xs shadow-sm">
                <span className="size-4 rounded-full border-2" style={{ borderColor: app.from, backgroundColor: due ? app.from : 'transparent' }} />
                <span className="flex-1 font-medium">{plant}</span>
                <span className={due ? 'font-semibold' : 'text-black/40'} style={{ color: due ? app.to : undefined }}>{when}</span>
              </div>
            ))}
          </div>
        )}
        {app.kind === 'bars' && (
          <div className="w-full max-w-xs">
            <p className="mb-1 text-xs text-black/50">Squat, kg</p>
            <p className="mb-3 text-2xl font-bold">
              140 <span className="text-xs font-semibold" style={{ color: app.to }}>+12.5</span>
            </p>
            <div className="flex h-28 items-end gap-1.5">
              {[48, 55, 52, 63, 66, 71, 70, 78, 84, 90].map((h, i) => (
                <span key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundImage: gradient, opacity: 0.45 + i * 0.055 }} />
              ))}
            </div>
          </div>
        )}
        {app.kind === 'grid' && (
          <div className="grid w-full grid-cols-3 gap-2">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="aspect-square rounded bg-white p-1 pb-4 shadow"
                style={{ transform: `rotate(${(noise(i + 2) - 0.5) * 8}deg)` }}
              >
                <div
                  className="size-full rounded-sm"
                  style={{ backgroundImage: `linear-gradient(${120 + i * 30}deg, ${FLOOD_GRADIENTS[i][0]}, ${FLOOD_GRADIENTS[i][1]})` }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Ditto, the demo site the rest of the page serves                         */
/* ------------------------------------------------------------------------ */

/** One deploy of Ditto, as the versions and Tor demos show it. */
interface SiteVersion {
  feature: string;
  accent: string;
  etag: string;
}

const SITE_VERSIONS: SiteVersion[] = [
  { feature: 'Communities are here', accent: '#8b5cf6', etag: '4b1e9a07' },
  { feature: 'Custom profile themes', accent: '#ec4899', etag: '9f2ce41a' },
  { feature: 'Zap splits', accent: '#f59e0b', etag: 'd04f19e2' },
  { feature: 'Live streams', accent: '#06b6d4', etag: '7c1ea90b' },
];

const DITTO_POSTS = [
  { name: 'Alex Gleason', handle: 'alex@gleasonator.com', avatar: '/assets/avatars/alex.png', text: 'Shipped three apps from Shakespeare before lunch.' },
  { name: 'Derek Ross', handle: '· 2m', avatar: '/assets/avatars/derek-headshot.jpg', text: 'gm nostr ☀️ new Ditto build just landed' },
];

function DittoSite({ site }: { site: SiteVersion }) {
  return (
    <div className="bg-white text-[#18181b]">
      <div className="flex items-center gap-2 border-b border-black/5 px-4 py-2.5">
        <img src="/ditto-logo-transparent.png" alt="" className="size-6 object-contain" />
        <span className="text-sm font-bold">Ditto</span>
        <span className="ml-auto h-6 w-28 rounded-full bg-black/5" />
      </div>
      <div
        className="mx-3 mt-3 rounded-xl px-4 py-4 text-white transition-[background] duration-700"
        style={{ backgroundImage: `linear-gradient(135deg, ${site.accent}, ${site.accent}99)` }}
      >
        <p className="text-[10px] font-semibold tracking-widest uppercase opacity-80">New in Ditto</p>
        <p className="mt-0.5 text-lg font-bold">{site.feature}</p>
      </div>
      <div className="divide-y divide-black/5 px-3 py-1">
        {DITTO_POSTS.map((post) => (
          <div key={post.name} className="flex gap-2.5 py-3">
            <img src={post.avatar} alt="" className="size-8 shrink-0 rounded-full object-cover" />
            <div className="min-w-0 text-[12px]">
              <p className="truncate">
                <span className="font-semibold">{post.name}</span> <span className="text-black/40">{post.handle}</span>
              </p>
              <p className="text-black/75">{post.text}</p>
              <div className="mt-1.5 flex gap-5 text-[11px] text-black/35">
                <span>💬 4</span>
                <span>🔁 12</span>
                <span style={{ color: site.accent }}>⚡ 2.1k</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Dashboard: adding a site                                                 */
/* ------------------------------------------------------------------------ */

interface MockSite {
  title: string;
  host: string;
  icon: string;
  visitors: string;
  change: number;
  seed: number;
}

/** Soapbox's own projects, as they'd sit in one npanel. Traffic numbers are illustrative. */
const MOCK_SITES: MockSite[] = [
  { title: 'Ditto', host: 'ditto.pub', icon: '/ditto-logo-transparent.png', visitors: '18.6k', change: 12, seed: 1 },
  { title: 'Armada', host: 'armada.buzz', icon: '/assets/media-kit/logos/armada-logo.svg', visitors: '7.2k', change: 31, seed: 7 },
  { title: 'Shakespeare', host: 'shakespeare.diy', icon: '/assets/logos/shakespeare-logo.png', visitors: '11.4k', change: 9, seed: 13 },
  { title: 'Agora', host: 'agora.spot', icon: '/assets/media-kit/logos/agora-logo.svg', visitors: '3.9k', change: 18, seed: 21 },
  { title: 'NostrHub', host: 'nostrhub.io', icon: '/assets/toolbox/nostrhub-icon.png', visitors: '2.1k', change: -4, seed: 33 },
];

const NEW_SITE: MockSite = {
  title: 'Soapbox',
  host: 'soapbox.pub',
  icon: '/assets/logo.svg',
  visitors: '0',
  change: 0,
  seed: 51,
};

/** soapbox.pub's named nsite (kind 35128, d=soapbox), signed by the Soapbox key. */
const NEW_SITE_ADDRESS = 'naddr1qqrhxmmpwp3x77qzypup59f8q40hfs0hqgc0zquyvzdng4y032m2pfk25aqztqnlnldw2qcyqqqgjwqs2e02h';

function sparkValues(seed: number, length = 24, grow = 1): number[] {
  return Array.from({ length }, (_, i) => {
    const base = 30 + 25 * Math.sin((i + seed) / 3.2) + 30 * noise(seed * 100 + i);
    return Math.max(2, base * (0.4 + (0.6 * i) / length) * grow);
  });
}

function Sparkline({ values, color, className = '' }: { values: number[]; color: string; className?: string }) {
  const id = `spark-${color.replace('#', '')}`;
  return (
    <svg viewBox="0 0 100 30" preserveAspectRatio="none" className={className} aria-hidden>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.35" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={chartPath(values, 30, true)} fill={`url(#${id})`} />
      <path d={chartPath(values, 30)} fill="none" stroke={color} strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function SiteCard({ site, status }: { site: MockSite; status?: 'deploying' | 'live' }) {
  const deploying = status === 'deploying';
  return (
    <div
      className="flex h-full flex-col gap-3 rounded-2xl p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.09),inset_0_1px_0_rgba(255,255,255,0.06),0_2px_10px_rgba(0,0,0,0.55)]"
      style={{ backgroundColor: RAISED }}
    >
      <div className="flex items-center gap-2.5">
        <img src={site.icon} alt="" className="size-8 shrink-0 rounded-lg bg-white/[0.06] object-contain p-1" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold text-white">{site.title}</p>
          <p className="truncate text-[11px] text-white/45">{site.host}</p>
        </div>
      </div>
      {deploying ? (
        <div className="mt-auto space-y-2">
          <div className="h-10 rounded-md bg-white/[0.04]" />
          <p className="flex items-center gap-1.5 text-[11px]" style={{ color: YELLOW }}>
            <span className="size-3 animate-spin rounded-full border-[1.5px] border-current border-t-transparent" />
            Deploying
          </p>
        </div>
      ) : (
        <div className="mt-auto space-y-2">
          <Sparkline values={sparkValues(site.seed)} color={BLUE} className="h-10 w-full" />
          <div className="flex items-end justify-between">
            <div>
              <p className="text-lg leading-none font-bold tabular-nums text-white">{site.visitors}</p>
              <p className="mt-1 text-[10px] text-white/45">visitors, 24h</p>
            </div>
            {site.change !== 0 && (
              <span className="text-[11px] font-medium tabular-nums" style={{ color: site.change > 0 ? GREEN : RED }}>
                {site.change > 0 ? '↑' : '↓'} {Math.abs(site.change)}%
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function DashboardSection() {
  return (
    <section className="relative py-24 md:py-32" style={{ backgroundColor: INK }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The dashboard"
          title={
            <>
              Every domain. <GradientText>One box.</GradientText>
            </>
          }
        >
          Add a site the way you'd add a DNS record: a hostname, and the nsite it points at. Your whole team logs in with
          Nostr keys, and each person sees only the sites they've been given.
        </SectionHeading>

        <DashboardMock />

        <DnsStrip />
      </div>
    </section>
  );
}

/** Ticks in one pass of the add-a-site animation (120 ms each). */
const ADD_LOOP = 130;

function DashboardMock() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const tick = useTicker(120, inView);
  const t = tick % ADD_LOOP;

  const dialogOpen = t >= 14 && t < 64;
  const hostChars = Math.max(0, Math.min(NEW_SITE.host.length, Math.floor((t - 20) / 1.2)));
  const addrChars = Math.max(0, Math.min(NEW_SITE_ADDRESS.length, (t - 36) * 4));
  const pressing = t >= 60 && t < 64;
  const added = t >= 64;
  const status: 'deploying' | 'live' = t >= 88 ? 'live' : 'deploying';

  return (
    <div ref={ref}>
      <Window title="panel.example.com" className="mx-auto max-w-6xl">
        <div className="relative flex min-h-[520px]" style={{ backgroundColor: '#111113' }}>
          {/* brushed-metal sidebar */}
          <aside
            className="m-2 hidden w-52 shrink-0 flex-col rounded-xl p-2 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_0_0_0.5px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.08)] md:flex"
            style={BRUSHED}
          >
            <div className="mb-4 flex items-center gap-2 px-2 pt-1.5">
              <img src={NPANEL_ICON} alt="" className="size-5" />
              <span className="text-[14px] font-semibold tracking-tight text-white">npanel</span>
            </div>
            <SidebarItem icon={Globe} label="Sites" active />
            <p className="px-2.5 pt-4 pb-1 text-[10px] font-semibold text-white/40">Admin</p>
            <SidebarItem icon={Users} label="Users" />
            <SidebarItem icon={Settings} label="Settings" />
            <SidebarItem icon={History} label="Activity" />
            <div className="mt-auto flex items-center gap-2 rounded-lg p-1.5">
              <img src="/assets/avatars/alex.png" alt="" className="size-7 rounded-full" />
              <div className="min-w-0">
                <p className="truncate text-[12px] font-medium text-white">Alex Gleason</p>
                <p className="truncate text-[10px] text-white/40">Admin</p>
              </div>
            </div>
          </aside>

          {/* content */}
          <div className="relative flex-1 overflow-hidden p-4 md:p-7">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-56 [mask-image:linear-gradient(to_bottom,black,transparent)]"
              style={PERFORATED}
            />
            <div className="relative mb-5 flex items-center justify-between">
              <h3 className="text-2xl font-bold tracking-tight text-white">Sites</h3>
              <span
                className="inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-[13px] font-medium text-white transition-transform"
                style={{ backgroundColor: BLUE, transform: t >= 10 && t < 14 ? 'scale(0.94)' : 'scale(1)' }}
              >
                <Plus className="size-3.5" /> Add site
              </span>
            </div>

            <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {added && (
                <div className="animate-[npPop_0.5s_cubic-bezier(.2,1.4,.4,1)_both]">
                  <SiteCard site={NEW_SITE} status={status} />
                </div>
              )}
              {MOCK_SITES.map((site, i) => (
                <div key={site.host} className={i >= 2 ? 'hidden sm:block' : undefined}>
                  <SiteCard site={site} />
                </div>
              ))}
            </div>

            {/* Add site sheet */}
            <div
              className="absolute inset-0 z-10 flex items-start justify-center bg-black/50 px-4 pt-16 backdrop-blur-[2px] transition-opacity duration-300"
              style={{ opacity: dialogOpen ? 1 : 0, pointerEvents: 'none' }}
            >
              <div
                className="w-full max-w-md rounded-2xl p-5 shadow-2xl ring-1 ring-white/10 transition-transform duration-300"
                style={{ backgroundColor: '#242427', transform: dialogOpen ? 'translateY(0) scale(1)' : 'translateY(-12px) scale(0.97)' }}
              >
                <p className="text-[15px] font-semibold text-white">Add site</p>
                <p className="mt-1 text-[12px] text-white/50">Serve an nsite on a domain you point at this server.</p>

                <label className="mt-5 block text-[11px] font-medium text-white/55">Domain</label>
                <div className="mt-1.5 flex h-9 items-center rounded-lg bg-black/35 px-3 font-mono text-[13px] text-white ring-1 ring-white/10">
                  {NEW_SITE.host.slice(0, hostChars)}
                  {t < 36 && t >= 18 && <span className="ml-px h-4 w-px animate-pulse bg-white" />}
                </div>

                <label className="mt-4 block text-[11px] font-medium text-white/55">nsite</label>
                <div
                  className="mt-1.5 flex h-9 items-center overflow-hidden rounded-lg bg-black/35 px-3 font-mono text-[13px] whitespace-nowrap text-white ring-1"
                  style={ringColor(t >= 36 && t < 60 ? `${BLUE}aa` : 'rgba(255,255,255,0.1)')}
                >
                  <span className="truncate">{NEW_SITE_ADDRESS.slice(0, addrChars)}</span>
                </div>
                <p className="mt-1.5 text-[11px] text-white/35">npub, naddr, nprofile, or an nsite URL</p>

                <div className="mt-5 flex justify-end gap-2">
                  <span className="inline-flex h-8 items-center rounded-lg bg-white/10 px-3 text-[13px] text-white/80">Cancel</span>
                  <span
                    className="inline-flex h-8 items-center rounded-lg px-4 text-[13px] font-medium text-white transition-transform"
                    style={{ backgroundColor: BLUE, transform: pressing ? 'scale(0.93)' : 'scale(1)', opacity: addrChars > 10 ? 1 : 0.5 }}
                  >
                    Add
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active = false }: { icon: LucideIcon; label: string; active?: boolean }) {
  return (
    <div
      className={`flex h-7 items-center gap-2 rounded-md px-2.5 text-[12.5px] text-white ${active ? 'bg-white/[0.1] font-medium' : 'text-white/85'}`}
    >
      <Icon className="size-4" style={{ color: BLUE }} aria-hidden />
      {label}
    </div>
  );
}

function DnsStrip() {
  const records = [
    { type: 'A', name: '@', value: '203.0.113.7' },
    { type: 'AAAA', name: '@', value: '2001:db8::7' },
    { type: 'CNAME', name: 'www', value: 'soapbox.pub.' },
  ];
  return (
    <div className="mx-auto mt-10 grid max-w-6xl items-center gap-6 md:grid-cols-[1fr_auto]">
      <div className="overflow-hidden rounded-xl font-mono text-[13px] ring-1 ring-white/10" style={{ backgroundColor: PANEL }}>
        <div className="grid grid-cols-[70px_70px_1fr] border-b border-white/[0.06] px-4 py-2 text-[11px] text-white/35 sm:grid-cols-[90px_90px_1fr]">
          <span>Type</span>
          <span>Name</span>
          <span>Value</span>
        </div>
        {records.map((record) => (
          <div key={record.type} className="grid grid-cols-[70px_70px_1fr] px-4 py-2 sm:grid-cols-[90px_90px_1fr]">
            <span style={{ color: ORANGE }}>{record.type}</span>
            <span className="text-white/60">{record.name}</span>
            <span className="truncate text-white/85">{record.value}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 md:max-w-[300px] md:flex-col">
        {['Certificate issued on first visit', 'www redirects to the bare domain', 'Sitemap and robots.txt generated'].map((line) => (
          <p key={line} className="flex items-center gap-2 text-sm text-white/60">
            <Check className="size-4 shrink-0" style={{ color: GREEN }} />
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Features: Tor, analytics, errors, link previews, a section each          */
/* ------------------------------------------------------------------------ */

/** One built-in feature: the pitch on one side, the thing working on the other. */
function FeatureSection({
  icon,
  color,
  title,
  body,
  points,
  flip = false,
  dark = false,
  demo,
}: {
  icon: LucideIcon;
  color: string;
  title: ReactNode;
  body: ReactNode;
  points: string[];
  flip?: boolean;
  dark?: boolean;
  demo: ReactNode;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: dark ? '#08080a' : INK }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 45% 55% at ${flip ? '25%' : '75%'} 50%, ${color}26, transparent 70%)` }}
      />
      <div
        ref={ref}
        className={`relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:gap-16 lg:px-8 ${flip ? 'lg:grid-cols-[1.35fr_1fr]' : 'lg:grid-cols-[1fr_1.35fr]'}`}
      >
        <div className={flip ? 'lg:order-2' : undefined}>
          <div className="mb-6 flex items-center gap-3">
            <Tile icon={icon} color={color} className="size-10" />
            <p className="font-mono text-xs font-medium tracking-[0.22em] uppercase" style={{ color }}>
              Built in
            </p>
          </div>
          <h2 className="text-4xl leading-[1.02] font-bold tracking-tighter text-white sm:text-5xl lg:text-[3.5rem]">{title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/55">{body}</p>
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[15px] text-white/75">
                <Check className="mt-0.5 size-4 shrink-0" style={{ color }} />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className={`relative min-h-[420px] ${flip ? 'lg:order-1' : ''}`}>{inView && demo}</div>
      </div>
    </section>
  );
}

function TorSection() {
  return (
    <FeatureSection
      icon={Waypoints}
      color={INDIGO}
      title={
        <>
          Every site gets an onion. <span className="text-white/35">No Tor to install.</span>
        </>
      }
      body="npanel runs Arti, the Tor Project's own Rust implementation, inside its process. Turn it on and every site you serve is also an onion service, and Tor Browser offers it to visitors on its own."
      points={[
        'An .onion address for every site, kept across restarts',
        'No daemon, no control port, no second process',
        'Onion-Location on every page, so Tor Browser finds it',
      ]}
      demo={<TorDemo />}
    />
  );
}

function AnalyticsSection() {
  return (
    <FeatureSection
      icon={BarChart3}
      color={YELLOW}
      flip
      dark
      title={
        <>
          Know your visitors. <span className="text-white/35">Not who they are.</span>
        </>
      }
      body="Plausible-style analytics for every site, collected by npanel itself from the site's own origin. No cookie banner, no third-party script, no account somewhere else."
      points={[
        'No cookies, and nothing identifying stored',
        'Visitors counted under a daily salt, deleted the day after',
        'Sources, pages, countries and devices',
      ]}
      demo={<AnalyticsDemo />}
    />
  );
}

function ErrorsSection() {
  return (
    <FeatureSection
      icon={Bug}
      color={RED}
      title={
        <>
          Every crash, <span className="text-white/35">mapped to the line.</span>
        </>
      }
      body="A few kilobytes of reporter on every page, and stack traces mapped through the source maps you already deployed. It speaks Sentry's format, so an existing Sentry SDK can report to it too."
      points={[
        'No upload step: npanel already has every source map',
        'One bug stays one issue across deploys',
        'Nostr secret keys and secret URL parameters scrubbed',
      ]}
      demo={<ErrorsDemo />}
    />
  );
}

function PreviewsSection() {
  return (
    <FeatureSection
      icon={Share2}
      color={PINK}
      flip
      dark
      title={
        <>
          Links that unfurl. <span className="text-white/35">Even on a static app.</span>
        </>
      }
      body="A Nostr client renders posts in the browser, so every shared link looks like the app's homepage. Publish one preview.js and npanel hands crawlers a real title, description and image for each post, drawn by your own script."
      points={[
        'Open Graph, Twitter and schema.org tags per page',
        'Images drawn on a canvas, without making the page wait',
        'Runs sandboxed: Landlock, seccomp and a hard deadline',
      ]}
      demo={<PreviewsDemo />}
    />
  );
}

/** The other sites on the same npanel, each with an onion of its own. */
const ONION_SITES = ['armada.buzz', 'shakespeare.diy', 'agora.spot', 'soapbox.pub'];

function fakeOnion(seed: string): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz234567';
  let out = seed.replace(/[^a-z]/g, '').slice(0, 5);
  for (let i = 0; out.length < 56; i++) out += alphabet[Math.floor(noise(seed.length * 31 + i * 7.7) * 32)];
  return out;
}

const ONION = 'dittopubx7q4mwvj3h2kzb5ycupl6aodtgr7nse2wfhq5vilkx3am4j.onion';

function TorDemo() {
  const tick = useTicker(45);
  const chars = Math.min(ONION.length, tick);

  return (
    <div className="grid h-full animate-[npFade_0.35s_ease-out] gap-4">
      <Browser url={ONION.slice(0, Math.max(chars, 1))} onion>
        <div className="relative">
          {chars >= ONION.length && (
            <div className="flex items-center gap-2 px-4 py-2 text-[12px] text-white" style={{ backgroundColor: '#3b1f5c' }}>
              <OnionGlyph className="size-4" />
              <span className="flex-1">ditto.pub is available as an onion site.</span>
              <span className="rounded bg-white/15 px-2 py-0.5 text-[11px]">Always prioritize</span>
            </div>
          )}
          <DittoSite site={SITE_VERSIONS[3]} />
        </div>
      </Browser>
      <div className="grid gap-4 sm:grid-cols-2">
        <MiniTerminal
          lines={[
            { cmd: true, text: 'pgrep -c tor' },
            { text: '0', color: 'rgba(255,255,255,0.7)' },
            { cmd: true, text: 'curl -sI https://ditto.pub | grep -i onion' },
            { text: `onion-location: http://${ONION.slice(0, 18)}…`, color: PURPLE },
          ]}
        />
        <div className="space-y-1.5 rounded-xl p-4 font-mono text-[11px] ring-1 ring-white/10" style={{ backgroundColor: PANEL }}>
          {ONION_SITES.map((site, i) => (
            <p
              key={site}
              className="flex items-center gap-2 truncate transition-opacity duration-500"
              style={{ opacity: chars >= ONION.length ? 1 : 0.25, transitionDelay: `${i * 180}ms` }}
            >
              <OnionGlyph className="size-3 shrink-0" />
              <span className="w-24 shrink-0 text-white/70">{site}</span>
              <span className="truncate" style={{ color: PURPLE }}>
                {fakeOnion(site).slice(0, 22)}….onion
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function MiniTerminal({ lines }: { lines: Array<{ cmd?: boolean; text: string; color?: string }> }) {
  return (
    <div className="overflow-hidden rounded-xl p-4 font-mono text-[11.5px] leading-6 ring-1 ring-white/10" style={{ backgroundColor: '#0f0f11' }}>
      {lines.map((line, i) => (
        <p key={i} className="truncate" style={{ color: line.color ?? 'rgba(255,255,255,0.85)' }}>
          {line.cmd && <span style={{ color: ORANGE }}>$ </span>}
          {line.text}
        </p>
      ))}
    </div>
  );
}

function AnalyticsDemo() {
  const tick = useTicker(1400);
  const values = Array.from({ length: 30 }, (_, i) => 40 + 30 * Math.sin(i / 3) + 40 * noise(i + 4) + i * 2);
  const live = 38 + Math.floor(noise(tick) * 14);
  const sources = [
    { name: 'Direct / None', value: 4210, pct: 100 },
    { name: 'primal.net', value: 2655, pct: 63 },
    { name: 'ditto.pub', value: 1712, pct: 41 },
    { name: 'Google', value: 1340, pct: 32 },
    { name: 'DuckDuckGo', value: 610, pct: 15 },
  ];

  return (
    <div className="h-full animate-[npFade_0.35s_ease-out] rounded-2xl p-5 ring-1 ring-white/10 md:p-6" style={{ backgroundColor: PANEL }}>
        <>
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">ditto.pub</p>
            <p className="flex items-center gap-2 text-xs text-white/55">
              <span className="size-2 animate-pulse rounded-full" style={{ backgroundColor: GREEN }} />
              <span className="tabular-nums">{live}</span> current visitors
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ['Unique visitors', '12.4k', '+18%'],
              ['Total visits', '15.9k', '+21%'],
              ['Pageviews', '31.7k', '+9%'],
              ['Bounce rate', '41%', '−3%'],
            ].map(([label, value, change]) => (
              <div key={label}>
                <p className="text-[10px] font-semibold tracking-wide text-white/40 uppercase">{label}</p>
                <p className="mt-1 text-2xl font-bold tabular-nums text-white">{value}</p>
                <p className="text-[11px]" style={{ color: GREEN }}>
                  {change}
                </p>
              </div>
            ))}
          </div>
          <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="mt-5 h-36 w-full animate-[npReveal_1.4s_ease-out_both]" aria-hidden>
            <defs>
              <linearGradient id="np-analytics" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor={BLUE} stopOpacity="0.35" />
                <stop offset="1" stopColor={BLUE} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={chartPath(values, 40, true)} fill="url(#np-analytics)" />
            <path
              d={chartPath(values, 40)}
              fill="none"
              stroke={BLUE}
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_auto]">
            <div className="space-y-1.5">
              {sources.map((source) => (
                <div key={source.name} className="relative flex items-center justify-between overflow-hidden rounded px-2 py-1 text-[12px]">
                  <span className="absolute inset-y-0 left-0 rounded" style={{ width: `${source.pct}%`, backgroundColor: `${BLUE}22` }} />
                  <span className="relative text-white/80">{source.name}</span>
                  <span className="relative tabular-nums text-white/55">{source.value.toLocaleString('en-US')}</span>
                </div>
              ))}
            </div>
            <MiniTerminal
              lines={[
                { cmd: true, text: 'document.cookie' },
                { text: "''", color: GREEN },
              ]}
            />
          </div>
        </>
    </div>
  );
}

function ErrorsDemo() {
  const tick = useTicker(2200);
  const mapped = tick % 2 === 1;

  return (
    <div className="h-full animate-[npFade_0.35s_ease-out] rounded-2xl p-5 ring-1 ring-white/10 md:p-6" style={{ backgroundColor: PANEL }}>
        <>
          <div className="flex items-start gap-3">
            <span className="mt-1 size-2.5 shrink-0 rounded-full" style={{ backgroundColor: RED }} />
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[14px] font-semibold text-white">TypeError</p>
              <p className="font-mono text-[12.5px] text-white/60">Cannot read properties of undefined (reading 'content')</p>
            </div>
            <div className="hidden shrink-0 gap-5 text-right sm:flex">
              <div>
                <p className="text-lg font-bold tabular-nums text-white">214</p>
                <p className="text-[10px] text-white/40">events</p>
              </div>
              <div>
                <p className="text-lg font-bold tabular-nums text-white">61</p>
                <p className="text-[10px] text-white/40">visitors</p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2 text-[11px]">
            <span className="rounded-full px-2 py-0.5" style={{ backgroundColor: mapped ? 'rgba(48,209,88,0.12)' : 'rgba(255,255,255,0.06)', color: mapped ? GREEN : 'rgba(255,255,255,0.5)' }}>
              {mapped ? 'mapped through index-B4f2a.js.map' : 'as the browser saw it'}
            </span>
            <span className="text-white/30">no upload step</span>
          </div>

          <div key={String(mapped)} className="mt-3 animate-[npFade_0.4s_ease-out] overflow-hidden rounded-xl bg-black/50 font-mono text-[12px] ring-1 ring-white/[0.06]">
            {mapped ? (
              <>
                <div className="border-b border-white/[0.06] px-4 py-2 text-white/80">
                  <span style={{ color: ORANGE }}>NoteCard</span> <span className="text-white/40">in</span> src/components/NoteCard.tsx
                  <span className="text-white/40">:88:17</span>
                </div>
                <div className="py-2 leading-6">
                  {[
                    [86, '  const { data: author } = useAuthor(event.pubkey);'],
                    [87, '  const quoted = useQuotedEvent(event);'],
                    [88, '  const preview = quoted.content.slice(0, 280);'],
                    [89, ''],
                    [90, '  return ('],
                  ].map(([n, code]) => (
                    <div
                      key={n}
                      className="flex gap-4 px-4"
                      style={{ backgroundColor: n === 88 ? 'rgba(255,69,58,0.14)' : undefined }}
                    >
                      <span className="w-6 text-right text-white/30">{n}</span>
                      <span className={`whitespace-pre ${n === 88 ? 'text-white' : 'text-white/55'}`}>{code}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="space-y-1 px-4 py-3 leading-6 text-white/55">
                <p>
                  at <span className="text-white/80">r</span> (assets/index-B4f2a.js:1:48213)
                </p>
                <p>
                  at <span className="text-white/80">Xo</span> (assets/index-B4f2a.js:1:9921)
                </p>
                <p>
                  at <span className="text-white/80">Lc</span> (assets/index-B4f2a.js:9:21877)
                </p>
                <p className="truncate">at assets/index-B4f2a.js:9:30204</p>
              </div>
            )}
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="space-y-1 rounded-xl bg-black/30 p-3 font-mono text-[11px] leading-5 ring-1 ring-white/[0.06]">
              <p className="mb-1 text-[10px] text-white/35 uppercase">breadcrumbs</p>
              <p className="text-white/55">
                <span className="text-white/30">click</span> button "Show quote"
              </p>
              <p className="text-white/55">
                <span className="text-white/30">fetch</span> wss://relay.ditto.pub <span style={{ color: YELLOW }}>timeout</span>
              </p>
              <p className="text-white/55">
                <span className="text-white/30">console</span> bunker secret=<span style={{ color: GREEN }}>[Filtered]</span>
              </p>
            </div>
            <MiniTerminal
              lines={[
                { cmd: true, text: 'SENTRY_DSN=' },
                { text: 'https://key@ditto.pub/_npanel/0', color: ORANGE },
              ]}
            />
          </div>
        </>
    </div>
  );
}

function PreviewsDemo() {
  return (
    <div className="h-full animate-[npFade_0.35s_ease-out] rounded-2xl p-5 ring-1 ring-white/10 md:p-6" style={{ backgroundColor: PANEL }}>
      <p className="mb-4 text-xs text-white/40">#general</p>
      <div className="flex gap-3">
        <img src="/assets/avatars/derek-headshot.jpg" alt="" className="size-9 shrink-0 rounded-full object-cover" />
        <div className="min-w-0 flex-1">
          <p className="text-[13px]">
            <span className="font-semibold text-white">Derek</span> <span className="text-white/35">10:14</span>
          </p>
          <p className="mt-0.5 truncate font-mono text-[12.5px]" style={{ color: BLUE }}>
            https://ditto.pub/nevent1qqsrhuxx8l9ex335q7he0f09aej04zpazpl0ne2cgukyawd24mayt8g
          </p>

            <div className="mt-3 max-w-[460px] overflow-hidden rounded-xl ring-1 ring-white/10 animate-[npPop_0.5s_cubic-bezier(.2,1.4,.4,1)_both]" style={{ backgroundColor: RAISED }}>
              <div className="relative aspect-[1.91/1] overflow-hidden" style={{ backgroundImage: 'linear-gradient(135deg,#7c3aed,#c026d3)' }}>
                <img src="/ditto-logo-transparent.png" alt="" className="absolute -right-6 -bottom-8 size-40 object-contain opacity-20" />
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <div className="flex items-center gap-2.5">
                    <img src="/assets/avatars/alex.png" alt="" className="size-10 rounded-full ring-2 ring-white/80" />
                    <div>
                      <p className="text-sm font-bold text-white">Alex Gleason</p>
                      <p className="text-[11px] text-white/70">alex@gleasonator.com</p>
                    </div>
                  </div>
                  <p className="font-serif text-lg leading-snug font-bold text-white sm:text-xl">
                    "Shipped three apps from Shakespeare before lunch. All of them live on our own npanel."
                  </p>
                </div>
              </div>
              <div className="p-3">
                <p className="text-[11px] text-white/40">ditto.pub</p>
                <p className="text-[13px] font-semibold text-white">Alex Gleason on Ditto</p>
                <p className="line-clamp-2 text-[12px] text-white/55">
                  Shipped three apps from Shakespeare before lunch. All of them live on our own npanel.
                </p>
              </div>
            </div>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl bg-black/50 font-mono text-[11.5px] leading-[1.7] ring-1 ring-white/[0.06]">
        <p className="border-b border-white/[0.06] px-4 py-2 text-white/40">/.well-known/npanel/preview.js</p>
        <pre className="overflow-x-auto px-4 py-3 text-white/70">
          <span style={{ color: PINK }}>export default</span> {'{'}
          {'\n  '}routes: [<span style={{ color: GREEN }}>"/:id(nevent1[a-z0-9]+)"</span>],
          {'\n  '}
          <span style={{ color: PINK }}>async</span> <span style={{ color: BLUE }}>preview</span>(request, {'{'} nostr {'}'}) {'{'}
          {'\n    '}
          <span style={{ color: PINK }}>const</span> [note] = <span style={{ color: PINK }}>await</span> nostr.query([{'{'} ids: [id] {'}'}]);
          {'\n    '}
          <span style={{ color: PINK }}>return</span> {'{'} title, description: note.content, image: draw(note) {'}'};
          {'\n  '}
          {'},'}
          {'\n}'};
        </pre>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Speed: npanel against nginx and Caddy                                    */
/* ------------------------------------------------------------------------ */

/**
 * One nsite's index.html (concordprotocol.org's build, gzip, 8.5 KB), served by
 * all three from the same bytes. Median requests per second of three rounds.
 */
const BENCHMARK: Array<{ name: string; rps: number; color?: string }> = [
  { name: 'npanel', rps: 41549 },
  { name: 'nginx', rps: 36852, color: '#4ade80' },
  { name: 'Caddy', rps: 8891, color: '#60a5fa' },
];

function useCountUp(target: number, active: boolean, durationMs = 1600): number {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();
    const step = (now: number) => {
      const p = clamp01((now - start) / durationMs);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target, active, durationMs]);
  return value;
}

function SpeedSection() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const max = BENCHMARK[0].rps;

  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: '#08080a' }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 45% 50% at 30% 60%, ${FLAME}24, transparent 70%)` }}
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Rust + Hyper"
          title={
            <>
              Faster than nginx.
              <br />
              <GradientText>4.7× faster than Caddy.</GradientText>
            </>
          }
        >
          npanel looks up every path in SQLite, negotiates the encoding, and adds security and canonical headers to
          every response. It still serves more requests per second than nginx.
        </SectionHeading>

        <div ref={ref} className="space-y-6">
          {BENCHMARK.map((server, i) => (
            <BenchBar key={server.name} {...server} max={max} active={inView} delay={i * 150} ours={i === 0} />
          ))}
        </div>

        <p className="mt-10 max-w-3xl font-mono text-[11px] leading-relaxed text-white/35">
          Requests per second serving the same nsite's index.html (gzip, 8.5 KB), byte for byte. oha, 64 connections,
          HTTP/1.1 keep-alive, median of three 10 s rounds. Each server pinned to the same 2 cores of a Ryzen 7 5850U.
          nginx with 4 workers, sendfile and gzip_static. Caddy 2.11.7 with precompressed.
        </p>
      </div>
    </section>
  );
}

function BenchBar({
  name,
  rps,
  color,
  max,
  active,
  delay,
  ours,
}: {
  name: string;
  rps: number;
  color?: string;
  max: number;
  active: boolean;
  delay: number;
  ours: boolean;
}) {
  const value = useCountUp(rps, active);
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <span className={`flex items-center gap-2 text-lg font-semibold ${ours ? 'text-white' : 'text-white/50'}`}>
          {ours && <img src={NPANEL_ICON} alt="" className="size-6" />}
          {name}
        </span>
        <span className={`font-mono tabular-nums ${ours ? 'text-3xl font-bold text-white md:text-4xl' : 'text-xl text-white/50'}`}>
          {value.toLocaleString('en-US')}
          <span className="ml-1 text-sm font-normal text-white/40">req/s</span>
        </span>
      </div>
      <div className={`overflow-hidden rounded-full bg-white/[0.05] ${ours ? 'h-5' : 'h-3'}`}>
        <div
          className="h-full rounded-full transition-[width] duration-[1600ms] ease-out"
          style={{
            width: active ? `${(rps / max) * 100}%` : '0%',
            transitionDelay: `${delay}ms`,
            backgroundImage: ours ? BRAND_GRADIENT : undefined,
            backgroundColor: ours ? undefined : `${color}80`,
            boxShadow: ours ? `0 0 28px -2px ${FLAME}` : undefined,
          }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Install                                                                  */
/* ------------------------------------------------------------------------ */

const ENV_LINES: Array<[string, string, string]> = [
  ['DASHBOARD_HOST', 'panel.example.com', 'serves the dashboard'],
  ['HTTPS_PORT', '443', "or leave unset, behind Caddy"],
  ['PORT', '80', ''],
  ['BIND_ADDRESS', '0.0.0.0', ''],
  ['TLS_CHECK_PORT', '3001', ''],
  ['DATA_DIR', './data', 'SQLite + blobs'],
  ['LOG_LEVEL', 'info', ''],
];

function InstallSection() {
  const [mode, setMode] = useState<'docker' | 'binary'>('docker');

  const docker = [
    { cmd: true, text: 'cp .env.example .env && $EDITOR .env' },
    { cmd: true, text: 'docker compose up -d' },
    { text: ' ✔ Container npanel-npanel-1  Started', color: GREEN },
    { text: ' ✔ Container npanel-caddy-1   Started', color: GREEN },
    { cmd: true, text: 'docker compose exec npanel npanel make-admin npub1…' },
  ];
  const binary = [
    { cmd: true, text: 'chmod +x npanel-0.4.0-linux-x86_64' },
    { cmd: true, text: './npanel-0.4.0-linux-x86_64 make-admin npub1…' },
    { cmd: true, text: './npanel-0.4.0-linux-x86_64' },
    { text: 'acme: certificate issued for panel.example.com', color: GREEN },
  ];
  const lines = mode === 'docker' ? docker : binary;

  return (
    <section id="install" className="relative scroll-mt-20 py-24 md:py-32" style={{ backgroundColor: INK }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Install"
          title={
            <>
              This is the whole <GradientText>config file.</GradientText>
            </>
          }
        >
          Relays, Blossom servers and everything else are set in the dashboard, take effect without a restart, and land
          in the audit log.
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-2">
          <Window title=".env" bodyClassName="p-5 font-mono text-[12.5px] leading-7">
            {ENV_LINES.map(([key, value, comment]) => (
              <p key={key} className="truncate">
                <span style={{ color: ORANGE }}>{key}</span>
                <span className="text-white/40">=</span>
                <span style={{ color: GREEN }}>"{value}"</span>
                {comment && <span className="text-white/30">  # {comment}</span>}
              </p>
            ))}
          </Window>

          <div>
            <div className="mb-3 inline-flex rounded-lg bg-white/[0.06] p-1 ring-1 ring-white/10">
              {(['docker', 'binary'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setMode(option)}
                  className="rounded-md px-4 py-1.5 text-xs font-medium transition-colors"
                  style={{
                    backgroundColor: mode === option ? 'rgba(255,255,255,0.12)' : 'transparent',
                    color: mode === option ? 'white' : 'rgba(255,255,255,0.5)',
                  }}
                >
                  {option === 'docker' ? 'Docker' : 'Static binary'}
                </button>
              ))}
            </div>
            <Window title="ssh you@your-box" bodyClassName="p-5 font-mono text-[12.5px] leading-7 min-h-[180px]">
              <div key={mode} className="animate-[npFade_0.3s_ease-out]">
                {lines.map((line, i) => (
                  <p key={i} className="truncate" style={{ color: line.color ?? 'rgba(255,255,255,0.85)' }}>
                    {line.cmd && <span style={{ color: ORANGE }}>❯ </span>}
                    {line.text}
                  </p>
                ))}
              </div>
            </Window>
            <p className="mt-4 text-sm text-white/45">
              Static x86_64 and aarch64 Linux binaries, published and signed over Nostr with ngit. Point DNS at the box,
              open your dashboard host, and log in with your Nostr key.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* FAQ and CTA                                                              */
/* ------------------------------------------------------------------------ */

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#08080a' }}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." center />
        <div className="divide-y divide-white/[0.08] rounded-2xl ring-1 ring-white/10" style={{ backgroundColor: PANEL }}>
          {NPANEL_FAQ.map((item, i) => (
            <div key={item.question}>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <h3 className="font-semibold text-white">{item.question}</h3>
                {open === i ? (
                  <X className="size-4 shrink-0 text-white/40" />
                ) : (
                  <Plus className="size-4 shrink-0 text-white/40" />
                )}
              </button>
              {open === i && <p className="-mt-1 px-6 pb-5 leading-relaxed text-white/60">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40" style={{ backgroundColor: INK }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[500px] [mask-image:linear-gradient(to_top,black,transparent)]"
        style={PERFORATED}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 50% 50% at 50% 100%, ${FLAME}40, transparent 70%)` }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <img
          src={NPANEL_ICON}
          alt="npanel"
          className="mx-auto mb-10 size-20 drop-shadow-[0_0_50px_rgba(249,84,26,0.7)] md:size-24"
        />
        <h2 className="text-5xl leading-[0.95] font-bold tracking-tighter text-white sm:text-6xl lg:text-7xl">
          The web, <GradientText>signed.</GradientText>
          <br />
          <span className="text-white/40">Served from your box.</span>
        </h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <a
            href={SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-xl px-6 font-semibold text-white shadow-[0_10px_40px_-10px_rgba(249,84,26,0.8),inset_0_1px_0_rgba(255,255,255,0.3)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            style={{ backgroundImage: BRAND_GRADIENT }}
          >
            Get npanel <ArrowRight className="size-4" />
          </a>
          <a
            href={SHAKESPEARE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-white/[0.06] px-6 font-medium text-white/85 ring-1 ring-white/10 transition-colors hover:bg-white/10"
          >
            Build an app with Shakespeare
          </a>
        </div>
        <p className="mt-8 font-mono text-xs text-white/35">
          AGPL-3.0 ·{' '}
          <a href={NIP5A_URL} target="_blank" rel="noopener noreferrer" className="underline decoration-dotted underline-offset-4 hover:text-white/70">
            NIP-5A
          </a>{' '}
          · built by Soapbox
        </p>
      </div>

    </section>
  );
}
