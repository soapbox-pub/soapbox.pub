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
  AtSign,
  BadgeCheck,
  BarChart3,
  Braces,
  Bug,
  Check,
  ChevronDown,
  Cpu,
  FileCode2,
  Globe,
  History,
  KeyRound,
  Lock,
  type LucideIcon,
  MemoryStick,
  Plus,
  Power,
  RotateCcw,
  ScrollText,
  Settings,
  Share2,
  ShieldCheck,
  Timer,
  Users,
  Waypoints,
  X,
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

/** npanel source, releases and docs (canonical ngit repo on gitworkshop). */
const SOURCE_URL = 'https://gitworkshop.dev/alex@gleasonator.com/git.shakespeare.diy/npanel';

/** nsyte, the CLI that publishes a folder as an nsite. */
const NSYTE_URL = 'https://nsyte.run';

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
const GRAY = '#8e8e93';
const TEAL = '#30b0c7';
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
      'Publish the site with an nsite tool such as nsyte (nsyte deploy ./dist). npanel follows the relays, sees the new signed manifest, downloads every file, and switches the domain over once all of them are on disk. There is no deploy hook or API key.',
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

/** The iOS switch the dashboard uses. */
function Switch({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      className="relative h-[26px] w-[44px] shrink-0 rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      style={{ backgroundColor: on ? GREEN : 'rgba(120,120,128,0.36)' }}
    >
      <span
        className="absolute top-[2px] left-[2px] size-[22px] rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.35)] transition-transform duration-200"
        style={{ transform: on ? 'translateX(18px)' : 'translateX(0)' }}
      />
    </button>
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
      'Host websites published on Nostr on your own domains. npanel serves nsites from local disk, with versions, rollbacks, Tor, analytics and error tracking built in.',
    image: NPANEL_OG_IMAGE,
    type: 'website',
    keywords:
      'npanel, nsite, nsite gateway, nostr website hosting, host website on nostr, nip-5a, blossom, nsyte, self-hosted static site hosting, decentralized web hosting, nostr static site, censorship resistant website, netlify alternative, vercel alternative, self-hosted vercel, onion site hosting, soapbox',
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
      <UnplugSection />
      <VersionsSection />
      <SwitchesSection />
      <ReceiptsSection />
      <SpeedSection />
      <InstallSection />
      <FaqSection />
      <FinalCtaSection />

      <Footer />

      <style>{`
        @keyframes npFlash { from { opacity: .85 } to { opacity: 0 } }
        @keyframes npPop { from { opacity: 0; transform: scale(.9) } to { opacity: 1; transform: scale(1) } }
        @keyframes npFade { from { opacity: 0; transform: translateY(4px) } to { opacity: 1; transform: none } }
        @keyframes npSlide { from { opacity: 0; transform: translateY(-8px) } to { opacity: 1; transform: none } }
        @keyframes npReveal { from { clip-path: inset(0 100% 0 0) } to { clip-path: inset(0 0 0 0) } }
      `}</style>

    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Hero: the deploy loop                                                    */
/* ------------------------------------------------------------------------ */

function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: INK }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[640px] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        style={PERFORATED}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 50% 38% at 50% 0%, ${FLAME}38, transparent 70%), radial-gradient(ellipse 40% 30% at 50% 78%, ${ORANGE}14, transparent 70%)`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-20 sm:px-6 md:pt-20 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full bg-white/[0.04] py-1.5 pr-4 pl-1.5 ring-1 ring-white/10 backdrop-blur">
            <img src={NPANEL_ICON} alt="npanel logo" className="size-7" />
            <span className="font-mono text-xs text-white/60">
              npanel <span className="text-white/30">·</span> the nsite gateway
            </span>
          </div>

          <h1 className="text-6xl leading-[0.92] font-bold tracking-tighter sm:text-7xl lg:text-[6.75rem]">
            Sign it.
            <br />
            <span className="relative">
              <GradientText>It&rsquo;s live.</GradientText>
              <span
                aria-hidden
                className="absolute inset-0 -z-10 blur-3xl opacity-50"
                style={{ backgroundImage: BRAND_GRADIENT }}
              />
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
            npanel hosts websites published on Nostr, on your own domains. Every deploy is a signed event. Your server
            picks it up, downloads it, and serves it from its own disk.
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
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-white/[0.06] px-6 font-mono text-sm text-white/80 ring-1 ring-white/10 transition-colors hover:bg-white/10"
            >
              <span style={{ color: ORANGE }}>$</span> docker compose up -d
            </a>
          </div>
        </div>

        <DeployLoop />
      </div>
    </section>
  );
}

/** One version of the demo site the hero keeps redeploying. */
interface SiteVersion {
  title: string;
  kicker: string;
  from: string;
  to: string;
  etag: string;
}

const SITE_VERSIONS: SiteVersion[] = [
  { title: 'Notes from the trail', kicker: 'Field Notes', from: '#0f766e', to: '#164e63', etag: '4b1e9a07' },
  { title: 'Notes from the ridge', kicker: 'Field Notes', from: '#ea580c', to: '#9f1239', etag: '9f2ce41a' },
  { title: 'Notes from the summit', kicker: 'Field Notes', from: '#4f46e5', to: '#0369a1', etag: 'd04f19e2' },
  { title: 'Notes from the valley', kicker: 'Field Notes', from: '#65a30d', to: '#115e59', etag: '7c1ea90b' },
];

/** Ticks in one pass of the hero deploy loop. */
const LOOP = 22;

function DeployLoop() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const tick = useTicker(620, inView);
  const t = tick % LOOP;
  const loop = Math.floor(tick / LOOP);
  const live = t >= 14;
  const shown = SITE_VERSIONS[(loop + (live ? 1 : 0)) % SITE_VERSIONS.length];

  return (
    <div ref={ref} className="relative mt-14 md:mt-16">
      <div className="grid items-stretch gap-4 lg:grid-cols-[minmax(0,1fr)_150px_minmax(0,1fr)] lg:gap-0">
        <DeployTerminal t={t} etag={SITE_VERSIONS[(loop + 1) % SITE_VERSIONS.length].etag} />
        <DeployWire t={t} />
        <DeployBrowser t={t} site={shown} live={live} />
      </div>

      <div className="mt-8 grid gap-6 text-center sm:grid-cols-3">
        {[
          { n: '01', title: 'You sign', body: 'nsyte uploads the files to Blossom and signs a manifest.', on: t >= 1 && t < 9 },
          { n: '02', title: 'Nostr carries it', body: 'The manifest goes out to relays, like any other event.', on: t >= 9 && t < 11 },
          { n: '03', title: 'npanel serves it', body: 'Your server downloads every file, then switches over.', on: t >= 11 },
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
    </div>
  );
}

const BLOSSOMS = ['blossom.primal.net', 'blossom.ditto.pub', 'cdn.satellite.earth'];
const RELAYS = ['relay.ditto.pub', 'relay.primal.net', 'nos.lol'];

function DeployTerminal({ t, etag }: { t: number; etag: string }) {
  const typed = 'nsyte deploy ./dist';
  const chars = t === 0 ? 0 : t === 1 ? 9 : typed.length;

  return (
    <Window title="~/fieldnotes — zsh" bodyClassName="p-5 font-mono text-[12.5px] leading-6 min-h-[300px]">
      <p className="text-white/85">
        <span style={{ color: ORANGE }}>❯</span> {typed.slice(0, chars)}
        {t < 3 && <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-white/70" />}
      </p>

      {t >= 3 && (
        <p className="text-white/45">
          scanning ./dist <span className="text-white/75">42 files</span>, 1.8 MB
        </p>
      )}

      {t >= 4 &&
        BLOSSOMS.map((server, i) => {
          const progress = clamp01((t - 4 - i * 0.4) / 3);
          return (
            <div key={server} className="flex items-center gap-3">
              <span className="w-[150px] shrink-0 truncate text-white/45">{server}</span>
              <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                <span
                  className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-500 ease-out"
                  style={{ width: `${progress * 100}%`, backgroundImage: BRAND_GRADIENT }}
                />
              </span>
              <span className="w-12 shrink-0 text-right tabular-nums text-white/55">{Math.round(progress * 42)}/42</span>
            </div>
          );
        })}

      {t >= 8 && (
        <p>
          <span style={{ color: GREEN }}>✔</span> <span className="text-white/75">signed manifest</span>{' '}
          <span className="text-white/40">kind 35128 · d=fieldnotes</span>
        </p>
      )}
      {t >= 9 && (
        <p>
          <span style={{ color: GREEN }}>✔</span> <span className="text-white/75">published to 3 relays</span>
        </p>
      )}
      {t >= 10 && (
        <p className="text-white/85">
          <span style={{ color: ORANGE }}>❯</span> {t >= 15 ? 'curl -sI https://fieldnotes.blog | grep etag' : ''}
          {t < 15 && <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-white/70" />}
        </p>
      )}
      {t >= 16 && (
        <>
          <p style={{ color: GREEN }}>etag: "{etag}…"</p>
          <p className="text-white/85">
            <span style={{ color: ORANGE }}>❯</span>{' '}
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-white/70" />
          </p>
        </>
      )}
    </Window>
  );
}

/** The gap between the terminal and the browser: relays, and a signed event crossing them. */
function DeployWire({ t }: { t: number }) {
  // The event leaves at 9, reaches the relays at 10, and npanel at 11.
  const position = t < 9 ? 0 : t === 9 ? 6 : t === 10 ? 50 : 96;
  const visible = t >= 9 && t <= 11;
  const relaysLit = t >= 10 && t <= 12;

  return (
    <div className="relative hidden items-center justify-center lg:flex" aria-hidden>
      {/* the cable */}
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-white/5 via-white/20 to-white/5" />
      <div
        className="absolute top-1/2 h-px -translate-y-1/2 transition-[width] duration-[600ms] ease-linear"
        style={{ left: 0, width: visible || t === 12 ? `${position}%` : 0, backgroundImage: BRAND_GRADIENT }}
      />

      {/* the relays */}
      <div className="relative z-10 flex flex-col gap-2">
        {RELAYS.map((relay, i) => (
          <div
            key={relay}
            className="rounded-md px-2 py-1 text-center font-mono text-[10px] ring-1 transition-all duration-300"
            style={{
              backgroundColor: relaysLit ? '#2a1a10' : RAISED,
              color: relaysLit ? ORANGE : 'rgba(255,255,255,0.45)',
              boxShadow: relaysLit ? `0 0 24px -4px ${FLAME}` : 'none',
              transitionDelay: `${i * 80}ms`,
              borderColor: 'transparent',
              ...ringColor(relaysLit ? `${ORANGE}80` : 'rgba(255,255,255,0.08)'),
            }}
          >
            {relay}
          </div>
        ))}
      </div>

      {/* the event */}
      <div
        className="absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transition-[left,opacity] duration-[600ms] ease-linear"
        style={{ left: `${position}%`, opacity: visible ? 1 : 0 }}
      >
        <div
          className="size-3.5 rounded-full"
          style={{ backgroundImage: BRAND_GRADIENT, boxShadow: `0 0 12px 3px ${FLAME}, 0 0 40px 8px ${ORANGE}66` }}
        />
      </div>
    </div>
  );
}

const DEPLOY_LOG_STAGES: Array<{ at: number; level: 'info' | 'ok'; text: string }> = [
  { at: 11, level: 'info', text: 'manifest_received' },
  { at: 12, level: 'info', text: 'downloading_blobs 18/42' },
  { at: 13, level: 'info', text: 'downloading_blobs 42/42' },
  { at: 14, level: 'ok', text: 'build_ready · live' },
];

function DeployBrowser({ t, site, live }: { t: number; site: SiteVersion; live: boolean }) {
  const stage = [...DEPLOY_LOG_STAGES].reverse().find((s) => t >= s.at);
  const toastVisible = t >= 11 && t <= 19;

  return (
    <div className="relative">
      <Browser url="https://fieldnotes.blog" className="h-full">
        <div className="relative min-h-[260px] overflow-hidden">
          <FieldNotesSite site={site} flash={live && t === 14} />

          {/* npanel deploy toast */}
          <div
            className="absolute right-3 bottom-3 left-3 flex items-center gap-3 rounded-xl p-3 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl transition-all duration-500 sm:left-auto sm:w-[270px]"
            style={{
              backgroundColor: 'rgba(28,28,31,0.88)',
              opacity: toastVisible ? 1 : 0,
              transform: toastVisible ? 'translateY(0)' : 'translateY(12px)',
            }}
          >
            <img src={NPANEL_ICON} alt="" className="size-8 shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-white">fieldnotes.blog</p>
              <p className="truncate font-mono text-[11px]" style={{ color: stage?.level === 'ok' ? GREEN : 'rgba(255,255,255,0.55)' }}>
                {stage?.text ?? 'manifest_received'}
              </p>
            </div>
            {stage?.level === 'ok' ? (
              <span className="flex size-5 items-center justify-center rounded-full" style={{ backgroundColor: GREEN }}>
                <Check className="size-3 text-black" strokeWidth={3} />
              </span>
            ) : (
              <span className="size-4 animate-spin rounded-full border-2 border-white/20 border-t-white/80" />
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-white/[0.06] px-3.5 py-2 font-mono text-[10.5px] text-white/40">
          <span>
            HTTP/2 <span style={{ color: GREEN }}>200</span>
          </span>
          <span>
            etag <span className="text-white/65">"{site.etag}…"</span>
          </span>
          <span className="truncate">
            x-nsite-addr <span className="text-white/65">naddr1qq9xvetd…</span>
          </span>
        </div>
      </Browser>
    </div>
  );
}

/** The demo site, a small blog whose look changes with each deploy. */
function FieldNotesSite({ site, flash = false, compact = false }: { site: SiteVersion; flash?: boolean; compact?: boolean }) {
  return (
    <div className="bg-[#f6f4ef] text-[#1c1917]">
      <div className="flex items-center justify-between px-5 py-3 text-[11px]">
        <span className="font-serif text-sm font-bold italic">{site.kicker}</span>
        <span className="flex gap-3 text-[#78716c]">
          <span>Posts</span>
          <span>Maps</span>
          <span>About</span>
        </span>
      </div>
      <div
        className={`relative mx-3 overflow-hidden rounded-lg px-5 text-white transition-[background] duration-700 ${compact ? 'py-6' : 'py-9'}`}
        style={{ backgroundImage: `linear-gradient(135deg, ${site.from}, ${site.to})` }}
      >
        <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-1/2 w-full opacity-30" aria-hidden>
          <path d="M0 60 L0 38 L30 18 L55 34 L85 8 L120 36 L145 22 L175 40 L200 26 L200 60 Z" fill="black" />
        </svg>
        <p className="relative text-[10px] font-semibold tracking-widest uppercase opacity-80">Latest</p>
        <p className={`relative mt-1 font-serif font-bold ${compact ? 'text-xl' : 'text-2xl sm:text-3xl'}`}>{site.title}</p>
        {flash && <div className="absolute inset-0 animate-[npFlash_0.9s_ease-out_forwards] bg-white" />}
      </div>
      <div className={`grid grid-cols-3 gap-2 px-3 ${compact ? 'py-3' : 'pt-3 pb-20'}`}>
        {[0, 1, 2].map((i) => (
          <div key={i} className="space-y-1.5 rounded-md bg-white p-2 shadow-sm">
            <div className="h-8 rounded" style={{ backgroundColor: i === 0 ? `${site.from}33` : '#e7e5e4' }} />
            <div className="h-1.5 w-4/5 rounded bg-[#d6d3d1]" />
            <div className="h-1.5 w-3/5 rounded bg-[#e7e5e4]" />
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
  color: string;
  letter: string;
  visitors: string;
  change: number;
  seed: number;
}

const MOCK_SITES: MockSite[] = [
  { title: 'Field Notes', host: 'fieldnotes.blog', color: '#0f766e', letter: 'F', visitors: '2.4k', change: 12, seed: 1 },
  { title: 'Harbor Coffee', host: 'harbor.coffee', color: '#9a3412', letter: 'H', visitors: '871', change: 4, seed: 7 },
  { title: 'Open Transit Map', host: 'transit.city', color: '#1d4ed8', letter: 'O', visitors: '15.2k', change: 31, seed: 13 },
  { title: 'Zine Press', host: 'zine.press', color: '#7e22ce', letter: 'Z', visitors: '406', change: -6, seed: 21 },
  { title: 'Night Market', host: 'nightmarket.app', color: '#be185d', letter: 'N', visitors: '5.9k', change: 18, seed: 33 },
];

const NEW_SITE: MockSite = {
  title: 'Launch Party',
  host: 'launch.party',
  color: FLAME,
  letter: 'L',
  visitors: '0',
  change: 0,
  seed: 51,
};

const NEW_SITE_ADDRESS = 'npub1q3sle0kvfsehgsuexttt3ugjd8xdklxfwwkh559wxckmzddywnws6cd26p';

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
        <span
          className="flex size-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
          style={{ backgroundColor: site.color }}
        >
          {site.letter}
        </span>
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
  const addrChars = Math.max(0, Math.min(NEW_SITE_ADDRESS.length, (t - 36) * 3));
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
    { type: 'CNAME', name: 'www', value: 'launch.party.' },
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
/* Pull the plug                                                            */
/* ------------------------------------------------------------------------ */

const UPSTREAMS = [
  { url: 'wss://relay.ditto.pub', kind: 'relay' },
  { url: 'wss://relay.primal.net', kind: 'relay' },
  { url: 'wss://nos.lol', kind: 'relay' },
  { url: 'https://blossom.primal.net', kind: 'blossom' },
  { url: 'https://blossom.ditto.pub', kind: 'blossom' },
  { url: 'https://cdn.satellite.earth', kind: 'blossom' },
];

const LOG_PATHS = [
  { path: '/', size: '2.1 KB' },
  { path: '/assets/index-B4f2a.js', size: '149 KB' },
  { path: '/posts/high-camp', size: '2.1 KB' },
  { path: '/assets/index-Cq81.css', size: '11 KB' },
  { path: '/img/ridge.avif', size: '284 KB' },
  { path: '/maps', size: '2.1 KB' },
  { path: '/sitemap.xml', size: '1.4 KB' },
  { path: '/posts/river-crossing', size: '2.1 KB' },
  { path: '/favicon.svg', size: '0.8 KB' },
];

function UnplugSection() {
  const [unplugged, setUnplugged] = useState(false);
  const [down, setDown] = useState(0);
  const [ref, inView] = useInView<HTMLDivElement>();
  const tick = useTicker(380, inView);
  const [unpluggedAt, setUnpluggedAt] = useState(0);

  // Upstreams go dark one after another, and come back the same way.
  useEffect(() => {
    const target = unplugged ? UPSTREAMS.length : 0;
    if (down === target) return;
    const id = setTimeout(() => setDown((d) => d + (unplugged ? 1 : -1)), 160);
    return () => clearTimeout(id);
  }, [unplugged, down]);

  const lines = Array.from({ length: 10 }, (_, i) => {
    const n = tick - i;
    const entry = LOG_PATHS[Math.floor(noise(n * 7.31 + 0.5) * LOG_PATHS.length)];
    const ms = (0.5 + noise(n + 999) * 3.1).toFixed(1);
    const seconds = 41 + Math.floor(n * 0.38);
    const time = `14:${String(Math.floor(seconds / 60) % 60).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
    return { n, time, ms, ...entry, revalidated: noise(n + 3) > 0.78 };
  });

  const served = Math.max(0, tick - (unplugged ? unpluggedAt : 0)) * 37 + (tick % 7);

  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: '#08080a' }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(ellipse 50% 40% at 30% 50%, ${RED}1f, transparent 70%)`,
          opacity: unplugged ? 1 : 0,
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Uptime"
          title={
            <>
              Pull the plug. <span className="text-white/35">Go on.</span>
            </>
          }
        >
          npanel keeps every file of every site on its own disk and never proxies a request. The relays and Blossom
          servers a site came from can all go dark.
        </SectionHeading>

        <div ref={ref} className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1.25fr]">
          {/* upstreams */}
          <div className="rounded-2xl p-5 ring-1 ring-white/10" style={{ backgroundColor: PANEL }}>
            <p className="mb-4 flex items-center justify-between text-xs font-medium text-white/45">
              <span>Upstream</span>
              <span className="font-mono tabular-nums" style={{ color: down === UPSTREAMS.length ? RED : GREEN }}>
                {UPSTREAMS.length - down}/{UPSTREAMS.length} online
              </span>
            </p>
            <ul className="space-y-1.5">
              {UPSTREAMS.map((upstream, i) => {
                const off = i < down;
                return (
                  <li
                    key={upstream.url}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-300"
                    style={{ backgroundColor: off ? 'rgba(255,69,58,0.06)' : RAISED, opacity: off ? 0.6 : 1 }}
                  >
                    <span
                      className="size-2 shrink-0 rounded-full transition-all duration-300"
                      style={{ backgroundColor: off ? RED : GREEN, boxShadow: off ? 'none' : `0 0 8px ${GREEN}` }}
                    />
                    <span className={`flex-1 truncate font-mono text-[12px] ${off ? 'text-white/40 line-through' : 'text-white/80'}`}>
                      {upstream.url}
                    </span>
                    <span className="font-mono text-[10px] text-white/35">{off ? 'unreachable' : upstream.kind}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* the plug */}
          <div className="flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={() => {
                if (!unplugged) setUnpluggedAt(tick);
                setUnplugged((value) => !value);
              }}
              className="group relative flex size-28 flex-col items-center justify-center gap-1 rounded-full text-white transition-transform hover:scale-105 active:scale-95"
              style={{
                backgroundImage: unplugged ? 'linear-gradient(135deg,#3a3a3e,#26262a)' : `linear-gradient(135deg, ${RED}, #c81e1e)`,
                boxShadow: unplugged
                  ? 'inset 0 1px 0 rgba(255,255,255,0.15), 0 10px 30px -10px rgba(0,0,0,0.8)'
                  : `inset 0 1px 0 rgba(255,255,255,0.3), 0 0 60px -10px ${RED}`,
              }}
            >
              {!unplugged && <span className="absolute inset-0 animate-ping rounded-full opacity-20" style={{ backgroundColor: RED }} />}
              {unplugged ? <RotateCcw className="size-7" /> : <Power className="size-8" />}
              <span className="text-[11px] font-semibold">{unplugged ? 'Plug back in' : 'Pull the plug'}</span>
            </button>
            <p className="max-w-[140px] text-center text-xs text-white/40">
              {unplugged ? 'Every upstream is gone.' : 'Click it.'}
            </p>
          </div>

          {/* access log */}
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10" style={{ backgroundColor: PANEL }}>
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
              <p className="flex items-center gap-2 text-xs font-medium text-white/70">
                <span className="size-2 animate-pulse rounded-full" style={{ backgroundColor: GREEN, boxShadow: `0 0 8px ${GREEN}` }} />
                fieldnotes.blog
              </p>
              <p className="font-mono text-[11px] text-white/40">serving from local disk</p>
            </div>
            <div className="h-[268px] overflow-hidden px-5 py-3 font-mono text-[11.5px] leading-[24px] [mask-image:linear-gradient(to_bottom,black_70%,transparent)]">
              {lines.map((line, i) => (
                <div
                  key={line.n}
                  className={`flex gap-3 whitespace-nowrap ${i === 0 ? 'animate-[npSlide_0.3s_ease-out]' : ''}`}
                >
                  <span className="text-white/30">{line.time}</span>
                  <span className="text-white/45">GET</span>
                  <span className="flex-1 truncate text-white/80">{line.path}</span>
                  <span style={{ color: line.revalidated ? BLUE : GREEN }}>{line.revalidated ? 304 : 200}</span>
                  <span className="hidden w-14 text-right text-white/35 sm:block">{line.revalidated ? '0 B' : line.size}</span>
                  <span className="w-12 text-right text-white/45">{line.ms}ms</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 border-t border-white/[0.06] text-center">
              <div className="border-r border-white/[0.06] py-3">
                <p className="font-mono text-lg font-bold tabular-nums text-white">{served.toLocaleString('en-US')}</p>
                <p className="text-[10px] text-white/40">{unplugged ? 'served with every upstream down' : 'requests served'}</p>
              </div>
              <div className="py-3">
                <p className="font-mono text-lg font-bold tabular-nums" style={{ color: GREEN }}>
                  0
                </p>
                <p className="text-[10px] text-white/40">errors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* Versions                                                                 */
/* ------------------------------------------------------------------------ */

interface MockVersion {
  id: string;
  when: string;
  files: number;
  size: string;
  status: 'ready' | 'failed';
  site?: SiteVersion;
}

const VERSIONS: MockVersion[] = [
  { id: '7c1ea90b', when: '2 minutes ago', files: 42, size: '1.8 MB', status: 'ready', site: SITE_VERSIONS[3] },
  { id: '3e88c5d1', when: '3 hours ago', files: 44, size: '2.1 MB', status: 'failed' },
  { id: 'd04f19e2', when: 'Yesterday', files: 41, size: '1.8 MB', status: 'ready', site: SITE_VERSIONS[2] },
  { id: '9f2ce41a', when: 'Oct 2', files: 39, size: '1.7 MB', status: 'ready', site: SITE_VERSIONS[1] },
  { id: '4b1e9a07', when: 'Sep 28', files: 36, size: '1.5 MB', status: 'ready', site: SITE_VERSIONS[0] },
];

const FAILED_LOG: Array<{ level: 'info' | 'warn' | 'error'; msg: string; fields: string }> = [
  { level: 'info', msg: 'manifest_received', fields: 'created_at=1759838412' },
  { level: 'info', msg: 'deploy_started', fields: 'files=44 missing=3' },
  { level: 'info', msg: 'downloading_blobs', fields: 'count=3' },
  { level: 'warn', msg: 'blob_unavailable', fields: 'path=/img/summit.avif server=blossom.primal.net status=404' },
  { level: 'warn', msg: 'blob_unavailable', fields: 'path=/img/summit.avif server=blossom.ditto.pub status=404' },
  { level: 'warn', msg: 'deploy_retrying', fields: 'attempt=2 in=5s' },
  { level: 'error', msg: 'blob_download_failed', fields: 'sha256=e3b9…41fa servers_tried=3' },
];

function VersionsSection() {
  const [pinned, setPinned] = useState<string | null>(null);
  const [openLog, setOpenLog] = useState(false);
  const served = VERSIONS.find((v) => v.id === pinned) ?? VERSIONS[0];

  return (
    <section className="relative py-24 md:py-32" style={{ backgroundColor: INK }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Versions"
          title={
            <>
              Every deploy is kept.
              <br />
              <GradientText>Undo is a click.</GradientText>
            </>
          }
        >
          A version only goes live once every file is on disk. A failed deploy never touches the live site, and its log
          says exactly what went wrong. Try it.
        </SectionHeading>

        <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="overflow-hidden rounded-2xl ring-1 ring-white/10" style={{ backgroundColor: PANEL }}>
            <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-3.5">
              <Tile icon={History} color={YELLOW} />
              <p className="flex-1 text-sm font-semibold text-white">Versions</p>
              {pinned ? (
                <button
                  type="button"
                  onClick={() => setPinned(null)}
                  className="rounded-full px-3 py-1 text-xs font-medium text-white transition-opacity hover:opacity-80"
                  style={{ backgroundColor: BLUE }}
                >
                  Follow latest
                </button>
              ) : (
                <span className="text-xs text-white/40">Following latest</span>
              )}
            </div>
            <ul>
              {VERSIONS.map((version) => {
                const isServed = version.id === served.id;
                const failed = version.status === 'failed';
                return (
                  <li key={version.id} className="border-b border-white/[0.05] last:border-0">
                    <button
                      type="button"
                      onClick={() => {
                        if (failed) {
                          setOpenLog((value) => !value);
                        } else {
                          setPinned(version.id === VERSIONS[0].id ? null : version.id);
                        }
                      }}
                      className="flex w-full items-center gap-3 px-5 py-3.5 text-left transition-colors hover:bg-white/[0.03]"
                      style={{ backgroundColor: isServed ? 'rgba(48,209,88,0.06)' : undefined }}
                    >
                      <span
                        className="size-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: failed ? RED : isServed ? GREEN : 'rgba(255,255,255,0.25)' }}
                      />
                      <span className="w-20 font-mono text-[13px] text-white/85">{version.id}</span>
                      <span className="flex-1 truncate text-[13px] text-white/45">{version.when}</span>
                      <span className="hidden font-mono text-[11px] text-white/35 sm:block">
                        {version.files} files · {version.size}
                      </span>
                      {failed ? (
                        <span className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ color: RED, backgroundColor: 'rgba(255,69,58,0.12)' }}>
                          Failed
                          <ChevronDown className={`size-3 transition-transform ${openLog ? 'rotate-180' : ''}`} />
                        </span>
                      ) : isServed ? (
                        <span className="rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ color: GREEN, backgroundColor: 'rgba(48,209,88,0.12)' }}>
                          {pinned ? 'Pinned' : 'Live'}
                        </span>
                      ) : (
                        <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[11px] font-medium text-white/60">Serve this</span>
                      )}
                    </button>
                    {failed && openLog && (
                      <div className="mx-5 mb-4 overflow-x-auto rounded-lg bg-black/50 p-3 font-mono text-[11px] leading-5 ring-1 ring-white/[0.06]">
                        {FAILED_LOG.map((line, i) => (
                          <div key={i} className="flex gap-2 whitespace-nowrap">
                            <span
                              className="w-10 shrink-0"
                              style={{ color: line.level === 'error' ? RED : line.level === 'warn' ? YELLOW : 'rgba(255,255,255,0.35)' }}
                            >
                              {line.level}
                            </span>
                            <span className="text-white/80">{line.msg}</span>
                            <span className="text-white/40">{line.fields}</span>
                          </div>
                        ))}
                        <div className="mt-2 border-t border-white/[0.06] pt-2 text-white/55">
                          <span style={{ color: GREEN }}>●</span> The live site never changed: d04f19e2 kept serving.
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:sticky lg:top-24">
            <Browser url="https://fieldnotes.blog">
              <div key={served.id} className="animate-[npFade_0.4s_ease-out]">
                {served.site && <FieldNotesSite site={served.site} compact />}
              </div>
            </Browser>
            <p className="mt-4 text-center font-mono text-xs text-white/40">
              serving <span className="text-white/75">{served.id}</span>
              {pinned && <span style={{ color: YELLOW }}> · pinned, newer deploys wait</span>}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* Switches: Tor, analytics, errors, link previews                          */
/* ------------------------------------------------------------------------ */

type FeatureId = 'tor' | 'analytics' | 'errors' | 'previews';

const FEATURES: Array<{ id: FeatureId; label: string; detail: string; icon: LucideIcon; color: string }> = [
  { id: 'tor', label: 'Tor', detail: 'An .onion address for every site', icon: Waypoints, color: INDIGO },
  { id: 'analytics', label: 'Analytics', detail: 'Plausible-style, no cookies', icon: BarChart3, color: YELLOW },
  { id: 'errors', label: 'Error reporting', detail: 'Sentry-compatible, source-mapped', icon: Bug, color: GRAY },
  { id: 'previews', label: 'Link previews', detail: 'Unfurl /npub1… and /nevent1… pages', icon: Share2, color: PINK },
];

function SwitchesSection() {
  const [enabled, setEnabled] = useState<Record<FeatureId, boolean>>({
    tor: true,
    analytics: true,
    errors: true,
    previews: true,
  });
  const [selected, setSelected] = useState<FeatureId>('tor');
  const [touched, setTouched] = useState(false);
  const [ref, inView] = useInView<HTMLDivElement>();
  const tick = useTicker(5200, inView && !touched);

  // Walk through the features until the reader takes over.
  useEffect(() => {
    if (touched || tick === 0) return;
    setSelected(FEATURES[tick % FEATURES.length].id);
  }, [tick, touched]);

  const on = enabled[selected];

  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: '#08080a' }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-80 [mask-image:linear-gradient(to_bottom,black,transparent)]"
        style={PERFORATED}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Built in"
          title={
            <>
              Flip a switch. <span className="text-white/35">That's the setup.</span>
            </>
          }
        >
          No daemons, no third-party scripts, no accounts somewhere else. Each of these runs inside npanel, on a thread of
          its own, so it can never slow down serving.
        </SectionHeading>

        <div ref={ref} className="grid items-stretch gap-6 lg:grid-cols-[380px_1fr]">
          <div className="self-start overflow-hidden rounded-2xl ring-1 ring-white/10" style={{ backgroundColor: PANEL }}>
            {FEATURES.map((feature) => {
              const isSelected = feature.id === selected;
              return (
                <div
                  key={feature.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setTouched(true);
                    setSelected(feature.id);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      setTouched(true);
                      setSelected(feature.id);
                    }
                  }}
                  className="relative flex cursor-pointer items-center gap-3 border-b border-white/[0.05] px-4 py-3.5 transition-colors last:border-0 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:bg-white/[0.05]"
                  style={{ backgroundColor: isSelected ? 'rgba(255,255,255,0.06)' : undefined }}
                >
                  {isSelected && <span className="absolute inset-y-2 left-0 w-[3px] rounded-r" style={{ backgroundImage: BRAND_GRADIENT }} />}
                  <Tile icon={feature.icon} color={feature.color} />
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-medium text-white">{feature.label}</p>
                    <p className="truncate text-[12px] text-white/45">{feature.detail}</p>
                  </div>
                  <Switch
                    on={enabled[feature.id]}
                    label={feature.label}
                    onClick={() => {
                      setTouched(true);
                      setSelected(feature.id);
                      setEnabled((state) => ({ ...state, [feature.id]: !state[feature.id] }));
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="relative min-h-[420px]">
            {selected === 'tor' && <TorDemo on={on} />}
            {selected === 'analytics' && <AnalyticsDemo on={on} />}
            {selected === 'errors' && <ErrorsDemo on={on} />}
            {selected === 'previews' && <PreviewsDemo on={on} />}
          </div>
        </div>
      </div>
    </section>
  );
}

const ONION = 'fieldn7xq4mwvj3h2kzb5ycupl6aodtgr7nse2wfhq5vilkx3am4jbyd.onion';

function TorDemo({ on }: { on: boolean }) {
  const tick = useTicker(45, on);
  const chars = on ? Math.min(ONION.length, tick) : 0;

  return (
    <div key={String(on)} className="grid h-full animate-[npFade_0.35s_ease-out] gap-4">
      <Browser url={on ? ONION.slice(0, Math.max(chars, 1)) : 'fieldnotes.blog'} onion={on}>
        <div className="relative">
          {on && chars >= ONION.length && (
            <div className="flex items-center gap-2 px-4 py-2 text-[12px] text-white" style={{ backgroundColor: '#3b1f5c' }}>
              <OnionGlyph className="size-4" />
              <span className="flex-1">fieldnotes.blog is available as an onion site.</span>
              <span className="rounded bg-white/15 px-2 py-0.5 text-[11px]">Always prioritize</span>
            </div>
          )}
          <FieldNotesSite site={SITE_VERSIONS[3]} compact />
        </div>
      </Browser>
      <div className="grid gap-4 sm:grid-cols-2">
        <MiniTerminal
          lines={[
            { cmd: true, text: 'pgrep -c tor' },
            { text: '0', color: 'rgba(255,255,255,0.7)' },
            { cmd: true, text: 'curl -sI https://fieldnotes.blog | grep -i onion' },
            on
              ? { text: `onion-location: http://${ONION.slice(0, 18)}…`, color: PURPLE }
              : { text: '(nothing)', color: 'rgba(255,255,255,0.35)' },
          ]}
        />
        <div className="rounded-xl p-4 text-sm leading-relaxed text-white/55 ring-1 ring-white/10" style={{ backgroundColor: PANEL }}>
          <p className="mb-2 font-mono text-xs" style={{ color: PURPLE }}>
            no tor daemon
          </p>
          npanel runs Arti, the Tor Project's Rust implementation, inside its own process. Every site gets an address,
          kept across restarts.
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

function AnalyticsDemo({ on }: { on: boolean }) {
  const tick = useTicker(1400, on);
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
    <div key={String(on)} className="h-full animate-[npFade_0.35s_ease-out] rounded-2xl p-5 ring-1 ring-white/10 md:p-6" style={{ backgroundColor: PANEL }}>
      {on ? (
        <>
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm font-semibold text-white">fieldnotes.blog</p>
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
      ) : (
        <OffState icon={BarChart3} text="No tracker on the page. Nothing counted." />
      )}
    </div>
  );
}

function ErrorsDemo({ on }: { on: boolean }) {
  const tick = useTicker(2200, on);
  const mapped = on && tick % 2 === 1;

  return (
    <div key={String(on)} className="h-full animate-[npFade_0.35s_ease-out] rounded-2xl p-5 ring-1 ring-white/10 md:p-6" style={{ backgroundColor: PANEL }}>
      {on ? (
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
                { text: 'https://key@fieldnotes.blog/_npanel/0', color: ORANGE },
              ]}
            />
          </div>
        </>
      ) : (
        <OffState icon={Bug} text="No reporter on the page. Errors stay in your visitors' consoles." />
      )}
    </div>
  );
}

function PreviewsDemo({ on }: { on: boolean }) {
  return (
    <div key={String(on)} className="h-full animate-[npFade_0.35s_ease-out] rounded-2xl p-5 ring-1 ring-white/10 md:p-6" style={{ backgroundColor: PANEL }}>
      <p className="mb-4 text-xs text-white/40">#general</p>
      <div className="flex gap-3">
        <img src="/assets/avatars/derek-headshot.jpg" alt="" className="size-9 shrink-0 rounded-full object-cover" />
        <div className="min-w-0 flex-1">
          <p className="text-[13px]">
            <span className="font-semibold text-white">Derek</span> <span className="text-white/35">10:14</span>
          </p>
          <p className="mt-0.5 truncate font-mono text-[12.5px]" style={{ color: BLUE }}>
            https://fieldnotes.blog/nevent1qqsrhuxx8l9ex335q7he0f09aej04zpazpl0ne2cgukyawd24mayt8g
          </p>

          {on ? (
            <div className="mt-3 max-w-[460px] overflow-hidden rounded-xl ring-1 ring-white/10 animate-[npPop_0.5s_cubic-bezier(.2,1.4,.4,1)_both]" style={{ backgroundColor: RAISED }}>
              <div className="relative aspect-[1.91/1] overflow-hidden" style={{ backgroundImage: 'linear-gradient(135deg,#4f46e5,#0369a1)' }}>
                <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-1/2 w-full opacity-30" aria-hidden>
                  <path d="M0 60 L0 38 L30 18 L55 34 L85 8 L120 36 L145 22 L175 40 L200 26 L200 60 Z" fill="black" />
                </svg>
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <div className="flex items-center gap-2.5">
                    <img src="/assets/avatars/alex.png" alt="" className="size-10 rounded-full ring-2 ring-white/80" />
                    <div>
                      <p className="text-sm font-bold text-white">Alex Gleason</p>
                      <p className="text-[11px] text-white/70">alex@gleasonator.com</p>
                    </div>
                  </div>
                  <p className="font-serif text-lg leading-snug font-bold text-white sm:text-xl">
                    "Made it to the summit before the weather turned. Photos from the ridge inside."
                  </p>
                </div>
              </div>
              <div className="p-3">
                <p className="text-[11px] text-white/40">fieldnotes.blog</p>
                <p className="text-[13px] font-semibold text-white">Alex Gleason on Field Notes</p>
                <p className="line-clamp-2 text-[12px] text-white/55">
                  Made it to the summit before the weather turned. Photos from the ridge inside.
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-3 max-w-[460px] overflow-hidden rounded-xl ring-1 ring-white/10" style={{ backgroundColor: RAISED }}>
              <div className="flex">
                <div className="w-1 shrink-0 bg-white/20" />
                <div className="p-3">
                  <p className="text-[11px] text-white/40">fieldnotes.blog</p>
                  <p className="text-[13px] font-semibold text-white">Field Notes</p>
                  <p className="text-[12px] text-white/45">Every link to every post looks exactly like this.</p>
                </div>
              </div>
            </div>
          )}
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

function OffState({ icon: Icon, text }: { icon: LucideIcon; text: string }) {
  return (
    <div className="flex h-full min-h-[380px] flex-col items-center justify-center gap-4 text-center">
      <Icon className="size-10 text-white/15" />
      <p className="max-w-xs text-sm text-white/40">{text}</p>
      <p className="font-mono text-xs text-white/25">flip the switch</p>
    </div>
  );
}

/* ------------------------------------------------------------------------ */
/* Receipts: everything else, as the bytes it produces                      */
/* ------------------------------------------------------------------------ */

const RECEIPTS: Array<{ icon: LucideIcon; color: string; label: string; code: ReactNode }> = [
  {
    icon: KeyRound,
    color: PURPLE,
    label: 'Login with Nostr',
    code: (
      <>
        Authorization: Nostr <span className="text-white/40">eyJraW5kIjoyNzIzNS…</span>
      </>
    ),
  },
  {
    icon: AtSign,
    color: TEAL,
    label: 'NIP-05 names',
    code: (
      <>
        /.well-known/nostr.json <span className="text-white/40">→</span> {'{"names":{"alex":…}}'}
      </>
    ),
  },
  {
    icon: Braces,
    color: PINK,
    label: 'Runtime config',
    code: (
      <>
        window.ENV.API_URL <span className="text-white/40">→</span> <span style={{ color: GREEN }}>"https://api.fieldnotes.blog"</span>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    color: BLUE,
    label: 'Content-Security-Policy',
    code: (
      <>
        content-security-policy: <span className="text-white/40">script-src 'self' …</span>
      </>
    ),
  },
  {
    icon: ScrollText,
    color: GRAY,
    label: 'Audit log',
    code: (
      <>
        <span className="text-white/40">14:02</span> alex <span style={{ color: YELLOW }}>pinned</span> fieldnotes.blog → d04f19e2
      </>
    ),
  },
  {
    icon: FileCode2,
    color: GREEN,
    label: 'Single-page apps',
    code: (
      <>
        GET /alex@gleasonator.com <span className="text-white/40">→</span> <span style={{ color: GREEN }}>200</span> /index.html
      </>
    ),
  },
  {
    icon: Globe,
    color: INDIGO,
    label: 'SEO, handled',
    code: (
      <>
        link: &lt;https://fieldnotes.blog/maps&gt;; rel="canonical"
      </>
    ),
  },
  {
    icon: BadgeCheck,
    color: YELLOW,
    label: 'Smallest copy wins',
    code: (
      <>
        content-encoding: br <span className="text-white/40">· 555 KB → 149 KB</span>
      </>
    ),
  },
];

function ReceiptsSection() {
  return (
    <section className="relative py-24 md:py-32" style={{ backgroundColor: INK }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="And the rest" title="Receipts, not bullet points." />
        <div className="grid gap-3 sm:grid-cols-2">
          {RECEIPTS.map((receipt) => (
            <div
              key={receipt.label}
              className="group flex items-center gap-4 rounded-xl px-4 py-3.5 ring-1 ring-white/[0.08] transition-colors hover:ring-white/20"
              style={{ backgroundColor: PANEL }}
            >
              <Tile icon={receipt.icon} color={receipt.color} className="size-8" />
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-medium text-white">{receipt.label}</p>
                <p className="truncate font-mono text-[11.5px] text-white/70">{receipt.code}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------------ */
/* Speed                                                                    */
/* ------------------------------------------------------------------------ */

/** From the npanel README: one machine, 64 concurrent connections, 10 s per row. */
const BENCHMARKS: Array<{ label: string; rps: number }> = [
  { label: '304 revalidation', rps: 93974 },
  { label: '404', rps: 75010 },
  { label: 'Range request (1 KB)', rps: 71157 },
  { label: 'index.html (2 KB, brotli)', rps: 70219 },
  { label: 'SPA fallback', rps: 69224 },
  { label: 'JS bundle (555 KB → 149 KB br)', rps: 28856 },
  { label: 'Image (284 KB)', rps: 15756 },
];

function useCountUp(target: number, active: boolean, durationMs = 1400): number {
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
  const max = BENCHMARKS[0].rps;

  return (
    <section className="relative overflow-hidden py-24 md:py-32" style={{ backgroundColor: '#08080a' }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse 40% 50% at 80% 50%, ${FLAME}1a, transparent 70%)` }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Rust, SQLite, mmap"
          title={
            <>
              Requests per <GradientText>second.</GradientText>
            </>
          }
        >
          One machine, 64 concurrent connections, ten seconds a row. Every byte is served from a memory-mapped file
          that was compressed once, when the site was deployed.
        </SectionHeading>

        <div ref={ref} className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-3">
            {BENCHMARKS.map((row, i) => (
              <BenchRow key={row.label} label={row.label} rps={row.rps} max={max} active={inView} delay={i * 90} />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 self-start">
            <Stat icon={Timer} value="0.6–3.7" unit="ms" label="median latency" />
            <Stat icon={MemoryStick} value="35" unit="MB" label="memory, serving" />
            <Stat icon={Cpu} value="1" unit="binary" label="dashboard inside" />
            <Stat icon={Settings} value="7" unit="env vars" label="the whole config" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BenchRow({ label, rps, max, active, delay }: { label: string; rps: number; max: number; active: boolean; delay: number }) {
  const value = useCountUp(rps, active);
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-4 font-mono text-[12.5px]">
        <span className="truncate text-white/60">{label}</span>
        <span className="font-semibold tabular-nums text-white">{value.toLocaleString('en-US')}/s</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.06]">
        <div
          className="h-full rounded-full transition-[width] duration-[1400ms] ease-out"
          style={{
            width: active ? `${(rps / max) * 100}%` : '0%',
            transitionDelay: `${delay}ms`,
            backgroundImage: BRAND_GRADIENT,
            boxShadow: `0 0 16px -2px ${FLAME}aa`,
          }}
        />
      </div>
    </div>
  );
}

function Stat({ icon: Icon, value, unit, label }: { icon: LucideIcon; value: string; unit: string; label: string }) {
  return (
    <div className="rounded-2xl p-5 ring-1 ring-white/10" style={{ backgroundColor: PANEL }}>
      <Icon className="mb-4 size-5" style={{ color: ORANGE }} />
      <p className="text-3xl font-bold tracking-tight tabular-nums text-white">
        {value} <span className="text-sm font-medium text-white/45">{unit}</span>
      </p>
      <p className="mt-1 text-xs text-white/45">{label}</p>
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
            href={NSYTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-white/[0.06] px-6 font-medium text-white/85 ring-1 ring-white/10 transition-colors hover:bg-white/10"
          >
            Publish a site with nsyte
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
