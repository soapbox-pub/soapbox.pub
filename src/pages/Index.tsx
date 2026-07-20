import { Component, Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { getFeaturedPosts, formatDate } from "@/lib/blog/utils";

const showcase = [
  {
    name: "Ditto",
    domain: "ditto.pub",
    appUrl: "https://ditto.pub",
    icon: "/ditto-logo-transparent.png",
    desktop: "/assets/media-kit/screenshots/ditto/desktop-2.webp",
    mobile: "/assets/media-kit/screenshots/ditto/phone.jpeg",
    alt: "Ditto — social media with a custom galaxy theme",
  },
  {
    name: "Agora",
    domain: "agora.spot",
    appUrl: "https://agora.spot",
    icon: "/assets/media-kit/logos/agora-logo.svg",
    desktop: "/assets/media-kit/screenshots/agora/desktop-1.webp",
    mobile: "/assets/media-kit/screenshots/agora/phone.jpeg",
    alt: "Agora — fundraise without borders",
  },
  {
    name: "Armada",
    domain: "armada.buzz",
    appUrl: "https://armada.buzz",
    icon: "/assets/media-kit/logos/armada-logo.svg",
    desktop: "/assets/media-kit/screenshots/armada/desktop-1.webp",
    mobile: "/assets/media-kit/screenshots/armada/phone.jpeg",
    alt: "Armada — encrypted community chat",
  },
  {
    name: "Shakespeare",
    domain: "shakespeare.diy",
    appUrl: "https://shakespeare.diy",
    icon: "/assets/logos/shakespeare-logo.png",
    desktop: "/assets/toolbox/shakespeare-screenshot.png",
    mobile: "/assets/images/shakespeare-mobile.png",
    alt: "Shakespeare — AI app builder",
  },
];

/**
 * Easter egg tabs in the desktop browser: developer tools that never appear
 * in the automatic rotation — you have to find and click them yourself.
 * Screenshots are shared with the Toolbox page.
 */
const extras = [
  {
    name: "NostrHub",
    domain: "nostrhub.io",
    appUrl: "https://nostrhub.io",
    icon: "/assets/toolbox/nostrhub-icon.png",
    desktop: "/assets/blog/nostrhub-2/cover.jpg",
    alt: "NostrHub — your one-stop shop for Nostr development",
  },
  {
    name: "Nostrify",
    domain: "nostrify.dev",
    appUrl: "https://nostrify.dev",
    icon: "/assets/toolbox/nostrify-icon.png",
    desktop: "/assets/toolbox/nostrify-screenshot.png",
    alt: "Nostrify — TypeScript framework for Nostr development",
  },
  {
    name: "Mostr",
    domain: "mostr.pub",
    appUrl: "https://mostr.pub",
    icon: "/assets/toolbox/mostr-icon.svg",
    desktop: "https://blossom.ditto.pub/a69b4b1a90d940d0958babaf4464fb62edfa4051b355d5189c4e282107cccfd7.png",
    alt: "Mostr — Nostr bridged to the Fediverse",
  },
];

/** All browser tabs: the rotating products first, then the easter egg tools. */
const tabs = [...showcase, ...extras];

/** Desktop hero: a browser with one tab per product. Pages link to the live apps. */
function BrowserShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-rotate through the products only; an open easter egg tab stays put.
  useEffect(() => {
    if (paused || active >= showcase.length) return;
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % showcase.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused, active]);

  const current = tabs[active];

  return (
    <div
      className="rounded-xl border border-gray-200 shadow-2xl overflow-hidden bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Tab strip */}
      <div className="flex items-end gap-1 px-3 pt-2 bg-gray-100 border-b border-gray-200">
        <div className="flex items-center gap-1.5 pr-3 pb-2.5 pl-1">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        </div>
        {tabs.map((product, i) => (
          <Fragment key={product.name}>
            {/* Faint divider between tabs; hidden next to the active tab so it
                reads as connected to the page, like a real browser. */}
            {i > 0 && (
              <span
                aria-hidden="true"
                className={`h-5 w-px self-center transition-colors ${
                  i === active || i - 1 === active ? "bg-transparent" : "bg-gray-300/70"
                }`}
              />
            )}
            <button
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-t-lg text-sm transition-colors min-w-0 ${
                i === active
                  ? "bg-white text-gray-900 font-medium"
                  : "text-gray-500 hover:bg-gray-200/60"
              }`}
            >
              <img src={product.icon} alt="" className="w-4 h-4 object-contain flex-shrink-0" />
              <span className="truncate">{product.name}</span>
            </button>
          </Fragment>
        ))}
      </div>

      {/* Address bar */}
      <div className="flex items-center px-4 py-2 bg-white border-b border-gray-100">
        <div className="px-3 py-0.5 rounded-md bg-gray-50 border border-gray-200 text-xs text-gray-400 font-mono">
          {current.domain}
        </div>
      </div>

      {/* Page — links to the live app */}
      <a
        href={current.appUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-[10/7] bg-gray-100 cursor-pointer"
      >
        {tabs.map((product, i) => (
          <img
            key={product.name}
            src={product.desktop}
            alt={product.alt}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </a>
    </div>
  );
}

/** Easter egg: extra apps on the mock phone's home screen. Tapping one opens the live app. */
const homeScreenExtras = [
  { name: "Treasures", icon: "/assets/toybox/treasures-icon.svg", url: "https://treasures.to/" },
  { name: "Birdstar", icon: "/assets/toybox/birdstar-icon.png", url: "https://birdstar.app/" },
  { name: "Nests", icon: "/assets/toybox/nests-icon.png", url: "https://nostrnests.com" },
  { name: "Plektos", icon: "/assets/toybox/plektos-icon.png", url: "https://plektos.app" },
  { name: "ZapTrax", icon: "/assets/toybox/zaptrax-icon.png", url: "https://zaptrax.app" },
  { name: "Podstr", icon: "/assets/toybox/podstr-icon.svg", url: "https://podstr.org" },
  { name: "Espy", icon: "/assets/toybox/espy-icon.png", url: "https://espy.you/" },
  { name: "Polaroids", icon: "/assets/toybox/polaroids-icon.jpg", url: "https://polaroids.shakespeare.wtf/" },
  { name: "Blobbi", icon: "/assets/toybox/blobbi-island-icon.png", url: "https://blobbi-island.vercel.app/" },
  { name: "Mi", icon: "/assets/toolbox/mi-icon.png", url: "https://mi.shakespeare.wtf/" },
  { name: "Mostr", icon: "/assets/toolbox/mostr-icon.svg", url: "https://mostr.pub/" },
];

/**
 * Mobile hero: a phone that opens and closes the four apps, mimicking real
 * mobile OS interactions: icon press → app zooms up from its icon → dwell →
 * swipe-home (app zooms back down into its icon) → next app.
 */
type PhonePhase = "home" | "pressing" | "opening" | "open" | "closing";

/** Where each app's icon sits on the home screen grid (transform origin for the zoom). */
const iconOrigins = ["20% 13%", "50% 13%", "80% 13%", "20% 28%"];

/** iOS-style spring-ish easing. */
const phoneEase = "ease-[cubic-bezier(0.32,0.72,0,1)]";

function PhoneShowcase() {
  const [appIndex, setAppIndex] = useState(0);
  const [phase, setPhase] = useState<PhonePhase>("home");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    switch (phase) {
      case "home":
        if (paused) return;
        timer = setTimeout(() => setPhase("pressing"), 1600);
        break;
      case "pressing": // finger holds the icon for a beat
        timer = setTimeout(() => setPhase("opening"), 240);
        break;
      case "opening": // app expands out of the icon
        timer = setTimeout(() => setPhase("open"), 500);
        break;
      case "open":
        if (paused) return;
        timer = setTimeout(() => setPhase("closing"), 3200);
        break;
      case "closing": // swipe home: app shrinks back into its icon
        timer = setTimeout(() => {
          setAppIndex((i) => (i + 1) % showcase.length);
          setPhase("home");
        }, 500);
        break;
    }
    return () => clearTimeout(timer);
  }, [phase, paused]);

  const appShowing = phase === "opening" || phase === "open";

  return (
    <div
      className="mx-auto w-[270px]"
      onTouchStart={() => setPaused(true)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative rounded-[2.2rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden aspect-[9/19]">
        {/* Home screen: recedes and blurs while an app is open, like iOS */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-indigo-950 via-gray-900 to-violet-950 px-5 pt-3 pb-6 flex flex-col transition-all duration-500 ${phoneEase} ${
            appShowing ? "scale-125 opacity-0 blur-sm" : "scale-100 opacity-100 blur-0"
          }`}
        >
          {/* Status bar */}
          <div className="flex items-center justify-between px-1 text-white/80" aria-hidden="true">
            <span className="text-[10px] font-medium tracking-wide">9:41</span>
            <span className="flex items-center gap-1">
              <span className="flex items-end gap-[1.5px]">
                <span className="w-[2.5px] h-[4px] rounded-[1px] bg-white/80" />
                <span className="w-[2.5px] h-[6px] rounded-[1px] bg-white/80" />
                <span className="w-[2.5px] h-[8px] rounded-[1px] bg-white/80" />
                <span className="w-[2.5px] h-[10px] rounded-[1px] bg-white/40" />
              </span>
              <span className="ml-0.5 w-5 h-[10px] rounded-[3px] border border-white/50 relative">
                <span className="absolute inset-[1.5px] right-[35%] rounded-[1px] bg-white/80" />
              </span>
            </span>
          </div>

          {/* One home-screen grid: the four real apps, then extra apps as an easter egg */}
          <div className="grid grid-cols-3 gap-x-3 gap-y-4 mt-8">
            {showcase.map((product, i) => {
              const pressed = phase === "pressing" && appIndex === i;
              return (
                <a
                  key={product.name}
                  href={product.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => { setPaused(true); setAppIndex(i); setPhase("pressing"); }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <span
                    className={`w-12 h-12 rounded-2xl bg-white/95 flex items-center justify-center p-2 shadow-lg transition-all duration-200 ${
                      pressed ? "scale-[0.82] brightness-[0.65]" : "scale-100"
                    }`}
                  >
                    <img src={product.icon} alt="" className="w-full h-full object-contain" />
                  </span>
                  <span className="text-[10px] text-white/90">{product.name}</span>
                </a>
              );
            })}
            {homeScreenExtras.map((app) => (
              <a
                key={app.name}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5"
              >
                <span className="w-12 h-12 rounded-2xl bg-white/90 flex items-center justify-center p-2 shadow-lg overflow-hidden">
                  <img src={app.icon} alt="" loading="lazy" className="w-full h-full object-contain" />
                </span>
                <span className="text-[10px] text-white/80">{app.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* App layers — each zooms out of (and back into) its home screen icon */}
        {showcase.map((product, i) => {
          const isActive = i === appIndex;
          let pose: string;
          if (isActive && appShowing) {
            // Full screen
            pose = "opacity-100 scale-100 translate-y-0 rounded-none";
          } else if (isActive && phase === "pressing") {
            // Waiting at its icon, ready to expand
            pose = "opacity-0 scale-[0.18] translate-y-0 rounded-[4rem] pointer-events-none";
          } else if (isActive && phase === "closing") {
            // Swipe home: flick up slightly while shrinking back into the icon
            pose = "opacity-0 scale-[0.18] -translate-y-10 rounded-[4rem] pointer-events-none";
          } else {
            pose = "opacity-0 scale-[0.18] translate-y-0 rounded-[4rem] pointer-events-none";
          }
          return (
            <a
              key={product.name}
              href={product.appUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transformOrigin: iconOrigins[i] }}
              className={`absolute inset-0 overflow-hidden shadow-2xl transition-all duration-500 ${phoneEase} ${pose}`}
            >
              <img
                src={product.mobile}
                alt={product.alt}
                loading={i === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover object-top"
              />
            </a>
          );
        })}

        {/* Home indicator: swipes the open app away */}
        <button
          aria-label="Home"
          onClick={() => {
            if (appShowing) setPhase("closing");
          }}
          className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-4 flex items-center justify-center z-10"
        >
          <span className="w-20 h-1 rounded-full bg-white/70" />
        </button>
      </div>
    </div>
  );
}

/** Press coverage logos for the marquee. Heights tuned so wordmarks match visually. */
const pressLogos = [
  {
    name: "Forbes",
    src: "/assets/logos/press/forbes.svg",
    href: "https://www.forbes.com/sites/digital-assets/2026/07/16/when-the-financial-system-cant-reach-people-in-crisis-bitcoin-can/",
    height: "h-6",
  },
  {
    name: "TechCrunch",
    src: "/assets/logos/press/techcrunch.svg",
    href: "https://techcrunch.com/2025/07/16/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media/",
    height: "h-5",
  },
  {
    name: "Associated Press",
    src: "/assets/logos/press/ap.svg",
    href: "https://apnews.com/press-release/pr-newswire/world-liberty-congress-launches-agora-at-oslo-freedom-forum-to-power-global-support-for-human-rights-movements-8ac37ef4848992ef07a67acb9c1ff370",
    height: "h-7",
  },
  {
    name: "USA Today",
    src: "/assets/logos/press/usatoday.svg",
    href: "https://www.usatoday.com/story/special/contributor-content/2026/02/01/shakespeare-ai-alex-gleasons-open-source-alternative-for-ai-web-building/88464569007/",
    height: "h-6",
  },
  {
    name: "Bitcoin Magazine",
    src: "/assets/logos/press/bitcoinmagazine.png",
    href: "https://bitcoinmagazine.com/conference/a-bitcoiner-must-be-on-nostr",
    height: "h-8",
  },
  {
    name: "NERDS.xyz",
    src: "/assets/logos/press/nerds.png",
    href: "https://nerds.xyz/2026/05/ditto-decentralized-social-platform/",
    height: "h-10",
  },
  {
    name: "Yahoo Finance",
    src: "/assets/logos/press/yahoofinance.svg",
    href: "https://finance.yahoo.com/sectors/technology/articles/soapbox-launches-ditto-customizable-social-180400117.html",
    height: "h-6",
  },
];

interface MosaicTile {
  image: string;
  imageAlt: string;
  place?: string;
  title: string;
  href: string;
  external?: boolean;
  /** tailwind grid span classes */
  span: string;
  imageClass?: string;
}

const mosaic: MosaicTile[] = [
  {
    image: "/assets/media-kit/leo-using-agora-oslo-freedom-forum-may-2026.jpg",
    imageAlt: "Leopoldo López creating an Agora campaign at Oslo Freedom Forum",
    place: "Oslo, Norway",
    title: "Powering human rights movements in 40+ countries",
    href: "/blog/agora-is-live",
    span: "col-span-2 row-span-2",
    imageClass: "object-[center_25%]",
  },
  {
    image: "/assets/media-kit/caracas-earthquake-relief-agora.webp",
    imageAlt: "Earthquake relief in Venezuela funded with Bitcoin over Agora",
    place: "Caracas, Venezuela",
    title: "Earthquake relief with no middlemen",
    href: "/blog/venezuela-earthquake-relief-bitcoin",
    span: "row-span-2",
  },
  {
    image: "/assets/media-kit/gaza-forbes-photo.webp",
    imageAlt: "Food distribution in Gaza City — Forbes coverage of Bitcoin crisis fundraising",
    place: "Gaza, Palestine",
    title: "Reaching people banks can't",
    href: "/blog/gaza-families-bitcoin-crowdfunding-agora",
    span: "",
  },
  {
    image: "/assets/media-kit/alex-awards-hackathon-prize-nairobi-btc++-june-2026.jpg",
    imageAlt: "Alex Gleason awards a hackathon prize at BTC++ Nairobi",
    title: "Supporting global innovators",
    href: "/blog/shakespeare-november-2025-update",
    span: "",
  },
  {
    image: "/assets/blog/building-zuka/team.jpg",
    imageAlt: "The team building Zuka with activists at the AI Hack for Freedom",
    place: "Austin, Texas",
    title: "Building alongside activists",
    href: "/blog/building-zuka",
    span: "col-span-2",
  },
  {
    image: "/assets/media-kit/open-source-ai-training-taipei.webp",
    imageAlt: "Open source AI training workshop in Taipei",
    place: "Taipei, Taiwan",
    title: "Training in open source AI",
    href: "/shakespeare-community",
    span: "row-span-2",
  },
  {
    image: "/assets/media-kit/alex-judge-sam-and-shantaram-hackathon-nairobi-btc++-june-2026.jpg",
    imageAlt: "Alex Gleason, Sam, and Shantaram judging the hackathon at BTC++ Nairobi",
    title: "Tools for builders everywhere",
    href: "/toolbox",
    span: "",
  },
  {
    image: "/assets/media-kit/mk-with-bitcoin-babies-merchants-kenya-june-2026-agora.jpg",
    imageAlt: "MK Fain with Bitcoin Babies merchants in Kenya",
    place: "Nairobi, Kenya",
    title: "Providing financial sovereignty to women in Africa",
    href: "/blog/bitcoin-babies-circular-economy-kenya",
    span: "col-span-2",
    imageClass: "object-[center_25%]",
  },
  {
    image: "/assets/media-kit/shantaram-presents-nairobi-btc++-june-2026.jpg",
    imageAlt: "Shantaram presents at BTC++ Nairobi",
    title: "Building for fun",
    href: "/toybox",
    span: "",
  },
  {
    image: "/assets/media-kit/working-on-agora-at-oslo-freedom-forum-may-2026.jpg",
    imageAlt: "Working on Agora at Oslo Freedom Forum",
    title: "Freedom tech, built in the field",
    href: "/blog/wlc-launches-agora-oslo-freedom-forum",
    span: "md:col-span-2",
    imageClass: "scale-125 object-[center_25%]",
  },
  {
    image: "/assets/media-kit/mentoring-women-open-source-sao-paulo.webp",
    imageAlt: "Mentoring women in open source in Sao Paulo",
    place: "Sao Paulo, Brazil",
    title: "Mentoring women in open source",
    href: "https://x.com/SoapboxTech/status/2078669236822528433",
    external: true,
    span: "md:col-span-2",
  },
];

/* ============ Infrastructure section: live relay pulse + scale anchors ============ */

/** Observe when an element scrolls into view (once). */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

/** Animated count-up, starts when `started` becomes true. */
function CountUp({ value, started, duration = 2000 }: { value: number; started: boolean; duration?: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!started) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value, duration]);

  return <>{display.toLocaleString()}</>;
}

/** Human-readable labels + dot colors for the kinds flowing through the relay. */
const kindMeta: Record<number, { label: string; dot: string }> = {
  0: { label: "a profile update", dot: "bg-purple-400" },
  1: { label: "a post", dot: "bg-sky-400" },
  3: { label: "a follow list", dot: "bg-indigo-400" },
  6: { label: "a repost", dot: "bg-emerald-400" },
  7: { label: "a reaction", dot: "bg-pink-400" },
  9735: { label: "a zap", dot: "bg-yellow-400" },
  10002: { label: "a relay list", dot: "bg-cyan-400" },
  30023: { label: "a long-form post", dot: "bg-teal-400" },
  30078: { label: "app data", dot: "bg-gray-400" },
  30311: { label: "a livestream", dot: "bg-red-400" },
  30382: { label: "a user stats update", dot: "bg-violet-400" },
  30383: { label: "a post stats update", dot: "bg-fuchsia-400" },
  33863: { label: "a campaign", dot: "bg-orange-400" },
  36803: { label: "a voice ping", dot: "bg-amber-400" },
};

/** Describe any event kind for the feed, including ones we don't know. */
function describeKind(kind: number): { label: string; dot: string } {
  const meta = kindMeta[kind];
  if (meta) return meta;
  if (kind >= 20000 && kind < 30000) return { label: "an ephemeral event", dot: "bg-gray-500" };
  return { label: `a kind ${kind} event`, dot: "bg-gray-500" };
}

/** The relays we operate; the pulse subscribes to everything on both. */
const PULSE_RELAYS = ["wss://relay.mostr.pub", "wss://relay.ditto.pub"];

interface PulseEvent {
  id: string;
  kind: number;
  at: number;
  client?: string;
}

function relativeTime(at: number): string {
  const seconds = Math.max(0, Math.floor(Date.now() / 1000 - at));
  if (seconds < 2) return "just now";
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ago`;
}

/**
 * Terminal-style card streaming live events from the relays we operate.
 * Subscribes to everything on both relays; metadata only, no post contents
 * are ever displayed.
 *
 * Resilience rules:
 * - Reports total connection failure via `onFailed` so the parent can hide
 *   the section silently. Never shows an error state of its own.
 * - State updates are batched to one flush per second and all buffers are
 *   capped, so a flooded relay can't churn the rest of the page.
 */
function LiveRelayPulse({ active, onFailed }: { active: boolean; onFailed: () => void }) {
  const [status, setStatus] = useState<"idle" | "connecting" | "live">("idle");
  const [count, setCount] = useState(0);
  const [events, setEvents] = useState<PulseEvent[]>([]);
  const onFailedRef = useRef(onFailed);

  useEffect(() => {
    onFailedRef.current = onFailed;
  }, [onFailed]);

  useEffect(() => {
    if (!active) return;
    setStatus("connecting");

    let stopped = false;
    let opened = false;
    let dead = 0;
    let failed = false;
    const sockets: WebSocket[] = [];
    const seen = new Set<string>();
    const buffer: PulseEvent[] = [];
    let pending = 0; // events counted since the last flush

    const fail = () => {
      if (stopped || failed) return;
      failed = true;
      onFailedRef.current();
    };

    // If neither relay opens in time, give up silently.
    const timeout = window.setTimeout(() => {
      if (!opened) {
        for (const ws of sockets) ws.close();
        fail();
      }
    }, 8000);

    const handleMessage = (raw: string) => {
      if (stopped) return;
      if (!raw.includes("EVENT")) return; // skip NOTICE/OK/EOSE without parsing
      try {
        const data = JSON.parse(raw);
        if (data[0] === "EVENT" && data[2]) {
          const ev = data[2] as { id: string; kind: number; created_at: number; tags: string[][] };
          if (seen.has(ev.id)) return; // same event can arrive on both relays
          if (seen.size > 10000) seen.clear(); // bound memory on long sessions
          seen.add(ev.id);
          const client = ev.tags.find(([name]) => name === "client")?.[1];
          pending++;
          if (buffer.length < 100) {
            buffer.push({ id: ev.id, kind: ev.kind, at: ev.created_at, client });
          }
        }
      } catch {
        // ignore malformed messages
      }
    };

    for (const url of PULSE_RELAYS) {
      let ws: WebSocket;
      try {
        ws = new WebSocket(url);
      } catch {
        dead++;
        continue;
      }
      sockets.push(ws);
      ws.onopen = () => {
        if (stopped) return;
        opened = true;
        setStatus("live");
        // limit: 0 → only events that arrive after this moment
        ws.send(JSON.stringify(["REQ", "soapbox-pulse", { limit: 0 }]));
      };
      ws.onmessage = (msg) => handleMessage(msg.data as string);
      const onDead = () => {
        dead++;
        if (!opened && dead === PULSE_RELAYS.length) fail();
      };
      ws.onerror = onDead;
      ws.onclose = onDead;
    }

    if (sockets.length === 0) {
      fail();
      return;
    }

    // Flush counted + buffered events into state once a second, no matter
    // how fast the relays are sending. This caps render churn sitewide.
    const flush = window.setInterval(() => {
      if (pending === 0 && buffer.length === 0) return;
      // Capture synchronously: React invokes state updaters at render time,
      // after this callback finishes, so they must not read mutable vars.
      const gained = pending;
      pending = 0;
      const batch = buffer.splice(0, buffer.length).reverse();
      setCount((c) => c + gained);
      if (batch.length > 0) setEvents((prev) => [...batch, ...prev].slice(0, 6));
    }, 1000);

    return () => {
      stopped = true;
      window.clearTimeout(timeout);
      window.clearInterval(flush);
      for (const ws of sockets) ws.close();
    };
  }, [active]);

  return (
    <div className="rounded-xl bg-gray-950 border border-white/10 shadow-2xl overflow-hidden">
      {/* Window chrome + relay identity */}
      <div className="flex items-center gap-3 px-4 sm:px-5 py-3 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-700" />
        </div>
        <p className="font-mono text-xs sm:text-sm text-gray-400 truncate">relay.mostr.pub + relay.ditto.pub</p>
        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest">
          {status === "live" && (
            <span className="text-emerald-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 motion-safe:animate-pulse" /> live
            </span>
          )}
          {(status === "connecting" || status === "idle") && (
            <span className="text-amber-400">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 motion-safe:animate-pulse" /> connecting
            </span>
          )}
        </span>
      </div>

      <div className="p-5 sm:p-6">
      {/* Session counter */}
        <p className="font-display font-bold text-5xl sm:text-6xl tracking-tight text-white tabular-nums">
          {count.toLocaleString()}
        </p>
        <p className="mt-2 text-xs sm:text-sm text-gray-500">
          events relayed while you've been on this page
        </p>

        {/* Live event stream (metadata only) */}
        <div className="mt-5 min-h-[196px]">
          <ul className="space-y-2 font-mono text-xs sm:text-sm" aria-live="off">
            {events.length === 0 && (
              <li className="text-gray-600">
                {status === "live" ? "listening for the next event…" : "opening a socket…"}
              </li>
            )}
            {events.map((ev) => {
              const meta = describeKind(ev.kind);
              return (
                <li key={ev.id} className="flex items-center gap-2.5 text-gray-400 motion-safe:animate-feed-in">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${meta.dot}`} />
                  <span className="text-gray-300 truncate">
                    {meta.label}
                    {ev.client && <span className="text-gray-500"> on {ev.client}</span>}
                  </span>
                  <span className="ml-auto text-gray-600 shrink-0">{relativeTime(ev.at)}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mt-4 border-t border-white/5 pt-3 font-mono text-[10px] uppercase tracking-widest text-gray-600">
          real events, streaming live from relays we operate
        </p>
      </div>
    </div>
  );
}

/**
 * Scale anchors. Sources: AOS relay stats (July 2026), mostr.pub, and
 * Ditto's client stats. Numbers are snapshots; update them when fresh
 * figures are published.
 */
const infraStats = [
  {
    value: 570215,
    label: "users on relay.mostr.pub",
    source: { name: "AOS relay stats", href: "https://stats.andotherstuff.org/" },
  },
  {
    value: 158187,
    label: "users on relay.ditto.pub",
    source: { name: "AOS relay stats", href: "https://stats.andotherstuff.org/" },
  },
  {
    value: 59938,
    label: "users bridged",
    source: { name: "mostr.pub", href: "https://mostr.pub/" },
  },
  {
    value: 1422,
    label: "Monthly Ditto users",
    source: { name: "Ditto trends", href: "https://ditto.pub/trends" },
  },
];

/** The four scale anchors. Rendered even when the live pulse is unavailable. */
function InfraStatsGrid({ started, className }: { started: boolean; className?: string }) {
  return (
    <div className={className ?? "mt-16 pt-10 border-t border-gray-800/80 grid grid-cols-2 lg:grid-cols-4 gap-8"}>
      {infraStats.map((stat) => (
        <div key={stat.label}>
          <p className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white tabular-nums">
            <CountUp value={stat.value} started={started} />
          </p>
          <p className="mt-2 text-sm text-gray-400 leading-snug">{stat.label}</p>
          <a
            href={stat.source.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1.5 inline-block text-[10px] uppercase tracking-widest text-gray-600 hover:text-gray-400 transition-colors"
          >
            Source: {stat.source.name}
          </a>
        </div>
      ))}
    </div>
  );
}

/** Infrastructure section: narrative + live pulse, degrading to stats-only on failure. */
function InfrastructureSection() {
  const pulseView = useInView<HTMLDivElement>();
  const statsView = useInView<HTMLDivElement>();
  const [pulseFailed, setPulseFailed] = useState(false);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-[#0b101d] text-white overflow-hidden border-t border-white/5">
      {/* Soft glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-azure/10 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {!pulseFailed && (
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left: the story */}
            <div className="lg:col-span-2 min-w-0">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Infrastructure</p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-6xl tracking-tight">
                <span className="inline-block -rotate-1 mt-1.5 sm:mt-2 bg-azure text-white px-2 pb-0.5">Bridging</span>
                <br className="hidden md:block" /> the open&nbsp;web
              </h2>
              <p className="mt-5 text-gray-400 leading-relaxed">
                Soapbox operates some of the largest infrastructure on the
                decentralized web: relays carrying conversations for hundreds of
                thousands of people, media servers hosting the network's files, and
                the bridge joining Nostr and the Fediverse into one network. Open
                and free for everyone.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <Link to="/blog/mostr-updates-july-2026" className="inline-flex items-center font-medium text-azure-300 hover:text-azure-200">
                  Latest from the bridge <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right: the live pulse */}
            <div ref={pulseView.ref} className="lg:col-span-3 min-w-0">
              <LiveRelayPulse active={pulseView.inView} onFailed={() => setPulseFailed(true)} />
            </div>
          </div>
        )}

        {/* Scale anchors: always rendered, even when the pulse is unavailable */}
        <div ref={statsView.ref}>
          <InfraStatsGrid
            started={statsView.inView}
            className={pulseFailed ? "grid grid-cols-2 lg:grid-cols-4 gap-8" : undefined}
          />
        </div>
      </div>
    </section>
  );
}

/**
 * If anything in the infrastructure section throws, render just the static
 * stats (plain numbers, no hooks) so the rest of the page is never affected.
 */
class InfraErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    // Swallow: the infra section must never break the rest of the page.
  }

  render() {
    if (this.state.failed) {
      return (
        <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-[#0b101d] text-white overflow-hidden border-t border-white/5">
          <div className="relative max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            {infraStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white tabular-nums">
                  {stat.value.toLocaleString()}
                </p>
                <p className="mt-2 text-sm text-gray-400 leading-snug">{stat.label}</p>
                <a
                  href={stat.source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-block text-[10px] uppercase tracking-widest text-gray-600 hover:text-gray-400 transition-colors"
                >
                  Source: {stat.source.name}
                </a>
              </div>
            ))}
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}

export default function Index() {
  const featuredPosts = getFeaturedPosts().slice(0, 3);

  useSEO({
    title: "Soapbox — Taking back the internet",
    description:
      "Soapbox builds open source tools for freedom online: decentralized social media, censorship-resistant fundraising, encrypted communities, and creative tools anyone can own.",
    type: "website",
    image: "/og-image-v2.png",
    keywords:
      "soapbox, nostr, decentralized, social media, open source, ditto, shakespeare, agora, fediverse, activitypub",
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        {/* ============ HERO ============ */}
        <section className="px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-display font-bold text-gray-900 text-6xl sm:text-7xl lg:text-8xl leading-[1.02] tracking-tight">
                Taking back
                <br />
                <span className="inline-block mt-2 sm:mt-3 bg-azure text-white px-4 sm:px-6 pb-1 sm:pb-2 -rotate-1">
                  the&nbsp;internet.
                </span>
              </h1>
              <p className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto">
                Open source tools for freedom online: decentralized social media,
                unstoppable money, sovereign&nbsp;communities.
              </p>
            </div>

            {/* Product showcase: browser on desktop, phone on mobile */}
            <div className="mt-14 sm:mt-20">
              <div className="hidden md:block max-w-5xl mx-auto">
                <BrowserShowcase />
              </div>
              <div className="md:hidden">
                <PhoneShowcase />
              </div>
            </div>
          </div>
        </section>

        {/* ============ MANIFESTO ============ */}
        <section className="px-4 sm:px-6 lg:px-8 pt-4 pb-24 sm:pb-32">
          <div className="max-w-4xl mx-auto">
            <p className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl leading-snug tracking-tight text-gray-900">
              The internet used to belong to{" "}
              <span className="inline-block -rotate-1 bg-azure text-white px-1.5">the&nbsp;people</span>.
              Then a handful of{" "}
              <span className="inline-block -rotate-1 bg-gray-900 text-white px-1.5">companies</span>{" "}
              fenced it in. Your feed became their{" "}
              <span className="inline-block -rotate-1 bg-gray-900 text-white px-1.5">algorithm</span>.
              Your community became their{" "}
              <span className="inline-block -rotate-1 bg-gray-900 text-white px-1.5">user&nbsp;base</span>.
              Your work became their{" "}
              <span className="inline-block -rotate-1 bg-gray-900 text-white px-1.5">product</span>.{" "}
              We're a team of hacktivists{" "}
              <span className="inline-block -rotate-1 bg-azure text-white px-1.5">taking&nbsp;it&nbsp;back</span>,
              piece by piece, with{" "}
              <span className="inline-block -rotate-1 bg-azure text-white px-1.5">free&nbsp;software</span> on{" "}
              <span className="inline-block -rotate-1 bg-azure text-white px-1.5">open&nbsp;protocols</span>,
              owned by no company. Not even ours.
            </p>
          </div>
        </section>

        {/* ============ GLOBAL IMPACT ============ */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-10 sm:pb-14 bg-[#0b101d] text-white overflow-hidden">
          <div className="relative max-w-6xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">Global impact</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-6xl tracking-tight max-w-3xl">
              Building with the people
              <br className="hidden md:block" />{" "}
              on <span className="inline-block -rotate-1 mt-1.5 sm:mt-2 bg-azure text-white px-2 pb-0.5">the front lines</span>.
            </h2>
            <p className="mt-4 text-gray-400 max-w-xl leading-relaxed">
              From Oslo to Caracas to Gaza to Nairobi, our tools work where the stakes are
              highest: for activists, journalists, silenced and censored communities, and
              people the financial system left behind.
            </p>

            {/* Mosaic */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[200px]">
              {mosaic.map((tile) => {
                const content = (
                  <>
                    <img
                      src={tile.image}
                      alt={tile.imageAlt}
                      loading="lazy"
                      className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05] ${tile.imageClass ?? ""}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                      {tile.place && (
                        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-azure-100/90">{tile.place}</p>
                      )}
                      <p className="mt-1 font-display font-semibold text-sm sm:text-base leading-snug">
                        {tile.title}
                        <ArrowRight className="inline ml-1.5 h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </p>
                    </div>
                  </>
                );
                const tileClass = `group relative overflow-hidden rounded-xl border border-white/10 hover:border-white/30 transition-colors ${tile.span}`;

                return tile.external ? (
                  <a key={tile.title} href={tile.href} target="_blank" rel="noopener noreferrer" className={tileClass}>
                    {content}
                  </a>
                ) : (
                  <Link key={tile.title} to={tile.href} className={tileClass}>
                    {content}
                  </Link>
                );
              })}
            </div>

            {/* Press coverage: infinite marquee */}
            <div className="mt-16 pt-10 border-t border-gray-800/80">
              <div className="relative overflow-hidden">
                {/* Fade edges into the section background */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0b101d] to-transparent z-10" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0b101d] to-transparent z-10" />

                <div
                  className="flex items-center w-max animate-marquee hover:[animation-play-state:paused]"
                  style={{ animationDuration: "30s" }}
                >
                  {/* Render logos twice for a seamless loop */}
                  {[...pressLogos, ...pressLogos].map((press, i) => (
                    <a
                      key={`${press.name}-${i}`}
                      href={press.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-7 sm:px-10 opacity-50 hover:opacity-90 transition-opacity"
                      aria-hidden={i >= pressLogos.length}
                      tabIndex={i >= pressLogos.length ? -1 : undefined}
                    >
                      <img src={press.src} alt={press.name} className={`${press.height} w-auto brightness-0 invert`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ INFRASTRUCTURE ============ */}
        <InfraErrorBoundary>
          <InfrastructureSection />
        </InfraErrorBoundary>

        {/* ============ $0 STATEMENT ============ */}
        <section className="px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24 sm:pb-28">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-14 lg:gap-16 items-center">
            {/* Left: the words */}
            <div className="lg:col-span-2 min-w-0 text-center lg:text-left">
              <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-6xl tracking-tight">
                Funded by <span className="inline-block -rotate-1 bg-azure text-white px-2">the community</span>, not ads or data.
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                We run on grants and donations, and we publish our funders and{" "}
                <Link to="/transparency" className="text-azure hover:text-azure-600 underline underline-offset-2">
                  regular transparency reports
                </Link>.
              </p>
              <div className="mt-6">
                <Link to="/ethics" className="inline-flex items-center -rotate-1 bg-azure text-white font-medium px-5 py-2.5 hover:bg-azure-600 transition-colors">
                  Read our Ethics Pledge <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right: the numbers + the proof */}
            <div className="lg:col-span-3 min-w-0">
              <div className="grid grid-cols-3 divide-x divide-gray-200 text-center">
                <div className="px-2 sm:px-6">
                  <p className="font-display font-bold text-5xl sm:text-7xl tracking-tight text-gray-900">$0</p>
                  <p className="mt-2 text-[10px] sm:text-sm uppercase tracking-wider sm:tracking-widest text-gray-400">from ads</p>
                </div>
                <div className="px-2 sm:px-6">
                  <p className="font-display font-bold text-5xl sm:text-7xl tracking-tight text-gray-900">$0</p>
                  <p className="mt-2 text-[10px] sm:text-sm uppercase tracking-wider sm:tracking-widest text-gray-400">from investors</p>
                </div>
                <div className="px-2 sm:px-6">
                  <p className="font-display font-bold text-5xl sm:text-7xl tracking-tight text-gray-900">$0</p>
                  <p className="mt-2 text-[10px] sm:text-sm uppercase tracking-wider sm:tracking-widest text-gray-400">from your data</p>
                </div>
              </div>

              <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col items-center gap-6">
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400">Backed by</p>
                <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
                  <img src="/assets/logos/opensats-logo-soapbox.png" alt="OpenSats" className="h-12 sm:h-16 w-auto" />
                  <img src="/assets/logos/aos-andotherstuff-logo-soapbox.png" alt="And Other Stuff" className="h-12 sm:h-16 w-auto" />
                  <img src="/assets/logos/hrf-humanrightsfoudnation-logo.png" alt="Human Rights Foundation" className="h-12 sm:h-16 w-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ DON'T TRUST. VERIFY. ============ */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-gradient-to-br from-azure-50 via-white to-blue-50 border-y border-azure-100">
          <div className="max-w-6xl mx-auto">
            {/* Centered claim */}
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-6xl tracking-tight">
                Don't trust. <span className="inline-block -rotate-1 bg-azure text-white px-2">Verify.</span>
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed">
                Every claim we make is checkable. The code is public, and your identity is
                a key that only you hold. It works in everything we build, and in apps we
                didn't build. If we ever let you down, take everything and go.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2">
                <a href="https://gitlab.com/soapbox-pub" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-medium text-azure hover:text-azure-600">
                  Browse the code <ExternalLink className="ml-1.5 h-4 w-4" />
                </a>
                <Link to="/blog/comparing-protocols" className="inline-flex items-center font-medium text-azure hover:text-azure-600">
                  How Nostr works <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* The artifacts, side by side */}
            <div className="mt-12 sm:mt-14 grid md:grid-cols-2 gap-5">
              <div className="min-w-0 rounded-xl bg-gray-950 p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed shadow-xl">
                <div className="flex items-center gap-1.5 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                </div>
                <p className="text-gray-500 break-all">$ <span className="text-gray-200">git clone https://gitlab.com/soapbox-pub/ditto.git</span></p>
                <p className="text-gray-500 mt-1">Cloning into 'ditto'...</p>
                <p className="text-gray-500">remote: Enumerating objects: 48213, done.</p>
                <p className="text-emerald-400 mt-1">✓ Every product. Source and all. Yours.</p>
              </div>

              <div className="min-w-0 rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6 shadow-sm flex flex-col justify-center">
                <p className="text-[11px] uppercase tracking-widest text-gray-400">Your identity on the open web</p>
                <p className="mt-2 min-w-0 font-mono text-xs sm:text-sm text-gray-700 break-all">npub1jvnpg4c6ljadf5t6ry0w9q0rnm4mksde87kglkrc993z46c39axsgq89sc</p>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-700 text-xs font-medium">Nostr</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 text-xs font-medium">Bitcoin</span>
                  <span className="text-xs text-gray-400">A key only you hold. No account for anyone to take.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ LATEST UPDATES ============ */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                  Latest <span className="inline-block -rotate-1 bg-azure text-white px-2">Updates</span>
                </h2>
              </div>
              <Link to="/blog" className="hidden sm:inline-flex items-center text-sm font-medium text-azure hover:text-azure-600">
                All updates <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group rounded-xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-gray-400">{formatDate(post.date)}</p>
                    <h3 className="mt-2 font-display font-semibold text-gray-900 leading-snug group-hover:text-azure transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            <Link to="/blog" className="sm:hidden mt-8 inline-flex items-center text-sm font-medium text-azure">
              All updates <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-28 sm:py-36 overflow-hidden">
          {/* Ditto galaxy backdrop */}
          <img
            src="/assets/ditto-background-galaxy.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-950/60" />

          <div className="relative max-w-3xl mx-auto text-center text-white">
            <h2 className="font-display font-bold text-4xl sm:text-6xl tracking-tight leading-tight">
              Your corner of the internet is&nbsp;waiting.
            </h2>
            <p className="mt-5 text-lg text-white/85">
              No email. No phone number. No algorithm. Pick a vibe and go.
            </p>
            <div className="mt-9">
              <a
                href="https://ditto.pub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center -rotate-1 bg-azure text-white font-display font-semibold text-lg px-7 py-3 hover:bg-azure-600 transition-colors shadow-xl"
              >
                Join Ditto <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
