import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  HeroIconGrid,
  ShowcaseCard,
  ShowcaseHeroStyles,
  type ShowcaseApp,
  type StatusMeta,
} from "@/components/AppShowcase";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const STATUS_META: Record<string, StatusMeta> = {
  complete: {
    label: "Feature complete",
    className: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  wip: {
    label: "Work in progress",
    className: "bg-amber-100 text-amber-700 border-amber-200",
  },
  prototype: {
    label: "Prototype",
    className: "bg-violet-100 text-violet-700 border-violet-200",
  },
};

const apps: ShowcaseApp[] = [
  // ---- Feature complete ----
  {
    name: "Treasures",
    tagline: "Decentralized geocaching. Hide caches, find treasures, and connect with explorers worldwide.",
    icon: "/assets/toybox/treasures-icon.svg",
    screenshot: "/assets/toybox/treasures-screenshot.png",
    url: "https://treasures.to/",
    repo: "https://gitlab.com/chad.curtis/treasures",
    repoHost: "gitlab",
    builder: "Chad",
    status: "complete",
    pill: "Ditto support",
    accent: "from-emerald-400 to-green-600",
  },
  {
    name: "Birdstar",
    tagline: "Go outside. Find the birds. Draw the stars. A field guide that turns nature into a constellation.",
    icon: "/assets/toybox/birdstar-icon.png",
    screenshot: "/assets/toybox/birdstar-screenshot.png",
    url: "https://birdstar.app/",
    repo: "https://gitlab.com/soapbox-pub/birdstar",
    repoHost: "gitlab",
    builder: "Alex",
    status: "complete",
    pill: "Ditto support",
    accent: "from-sky-400 to-emerald-500",
  },
  {
    name: "Surveil",
    tagline: "Build trading-card decks and share them across decentralized relays.",
    icon: "/assets/toybox/surveil-icon.png",
    screenshot: "/assets/toybox/surveil-screenshot.png",
    url: "https://surveil.cards/",
    repo: "https://gitlab.com/chad.curtis/surveil",
    repoHost: "gitlab",
    builder: "Chad",
    status: "complete",
    pill: "Ditto support",
    accent: "from-indigo-500 to-blue-700",
  },
  {
    name: "Espy",
    tagline: "See something beautiful? Capture its colors and share the palette with the world.",
    icon: "/assets/toybox/espy-icon.png",
    screenshot: "/assets/toybox/espy-screenshot.png",
    url: "https://espy.you/",
    repo: "https://gitlab.com/chad.curtis/espy",
    repoHost: "gitlab",
    builder: "Chad",
    status: "complete",
    pill: "Ditto support",
    accent: "from-amber-400 to-rose-400",
  },
  {
    name: "Nostrdamus",
    tagline: "Your daily tarot reading — past, present, and future, drawn on Nostr.",
    icon: "/assets/toybox/nostrdamus-icon.png",
    screenshot: "/assets/toybox/nostrdamus-screenshot.png",
    url: "https://nostrdamus.me/",
    repo: "https://gitlab.com/chad.curtis/nostrdamus",
    repoHost: "gitlab",
    builder: "Chad",
    status: "complete",
    pill: "Ditto support",
    accent: "from-violet-500 to-purple-800",
  },
  {
    name: "Lief",
    tagline: "Write letters to the people you love — custom stationery, fonts, and frames, sealed just for them.",
    icon: "/assets/toybox/lief-icon.png",
    screenshot: "/assets/toybox/lief-screenshot.png",
    url: "https://lief.to/",
    repo: "https://gitlab.com/chad.curtis/lief",
    repoHost: "gitlab",
    builder: "Chad",
    status: "complete",
    pill: "Ditto support",
    accent: "from-green-400 to-emerald-600",
  },
  {
    name: "Nests",
    tagline: "Your space for live audio. Host conversations, podcasts, and discussions in real-time rooms — powered by Nostr, no gatekeepers.",
    icon: "/assets/toybox/nests-icon.png",
    screenshot: "/assets/toybox/nests-screenshot.png",
    url: "https://nostrnests.com",
    repo: "https://github.com/nostrnests/nests",
    repoHost: "github",
    status: "complete",
    accent: "from-violet-500 to-pink-500",
  },
  {
    name: "Plektos",
    tagline: "Discover events and connect with your community. Find your next adventure on a decentralized calendar.",
    icon: "/assets/toybox/plektos-icon.png",
    screenshot: "/assets/toybox/plektos-screenshot.png",
    url: "https://plektos.app",
    repo: "https://github.com/derekross/plektos",
    repoHost: "github",
    builder: "Derek",
    status: "complete",
    accent: "from-purple-500 to-fuchsia-600",
  },
  {
    name: "ZapTrax",
    tagline: "Discover and stream Nostr-native music. Browse by genre, surface trending tracks, and zap the artists you love.",
    icon: "/assets/toybox/zaptrax-icon.png",
    screenshot: "/assets/toybox/zaptrax-screenshot.png",
    url: "https://zaptrax.app",
    repo: "https://github.com/derekross/zaptrax",
    repoHost: "github",
    builder: "Derek",
    status: "complete",
    accent: "from-purple-600 to-indigo-700",
  },
  {
    name: "Podstr",
    tagline: "Own your podcast community. Build on Nostr and receive direct support through Bitcoin Lightning — zero platform fees.",
    icon: "/assets/toybox/podstr-icon.svg",
    screenshot: "/assets/toybox/podstr-screenshot.png",
    url: "https://podstr.org",
    repo: "https://github.com/derekross/podstr",
    repoHost: "github",
    builder: "Derek",
    status: "complete",
    accent: "from-violet-500 to-blue-600",
  },
  {
    name: "Color Slide",
    tagline: "Rot your brain and stimulate it at the same time. A colorful sliding puzzle — a few test levels in, mechanics mostly there.",
    icon: "/assets/toybox/colorslide-icon.svg",
    screenshot: "/assets/toybox/colorslide-screenshot.png",
    url: "https://colorsli.de",
    repo: "https://github.com/samthomson/colorsli.de",
    repoHost: "github",
    builder: "Sam",
    status: "wip",
    accent: "from-cyan-400 to-indigo-500",
  },

  // ---- Work in progress ----
  {
    name: "Blobbi Island",
    tagline: "A virtual-pet adventure. Hatch, raise, and play with your Blobbi on a living island.",
    icon: "/assets/toybox/blobbi-island-icon.png",
    screenshot: "/assets/toybox/blobbi-island-screenshot.png",
    url: "https://blobbi-island.vercel.app/",
    builder: "Daniel",
    status: "wip",
    pill: "Ditto support",
    accent: "from-fuchsia-400 to-purple-500",
  },
  {
    name: "Polaroids",
    tagline: "A scrapbook for your photos — taped, captioned, and dated, the analog way.",
    icon: "/assets/toybox/polaroids-icon.jpg",
    screenshot: "/assets/toybox/polaroids-screenshot.png",
    url: "https://polaroids.shakespeare.wtf/",
    builder: "MK",
    status: "wip",
    pill: "Ditto support",
    accent: "from-pink-400 to-amber-300",
  },
  {
    name: "Relaying Earth",
    tagline: "Nostr-powered weather stations broadcasting in real time. Spin the globe and watch the planet relay. (Not many stations online... yet.)",
    icon: "/assets/toybox/relaying-earth-icon.svg",
    screenshot: "/assets/toybox/relaying-earth-screenshot.png",
    url: "https://relaying.earth",
    repos: [
      { url: "https://github.com/samthomson/relaying.earth", host: "github", label: "Web" },
      { url: "https://github.com/samthomson/weather-station", host: "github", label: "Station" },
    ],
    builder: "Sam",
    status: "wip",
    accent: "from-rose-500 to-red-700",
  },
  {
    name: "Clawstr",
    tagline: "A social network where AI agents discuss, debate, and build communities on Nostr.",
    icon: "/assets/toybox/clawstr-icon.png",
    screenshot: "/assets/toybox/clawstr-screenshot.png",
    url: "https://clawstr.com/",
    repo: "https://gitlab.com/soapbox-pub/clawstr",
    repoHost: "gitlab",
    builder: "Alex",
    status: "wip",
    accent: "from-orange-400 to-red-500",
  },
  {
    name: "Zappix",
    tagline: "A photo and short-video feed on Nostr. Browse trending hashtags and locations. Early days — slow and rough around the edges, but the bones are there.",
    icon: "/assets/toybox/zappix-icon.png",
    screenshot: "/assets/toybox/zappix-screenshot.png",
    url: "https://zappix.app/discover",
    repo: "https://github.com/derekross/zappix",
    repoHost: "github",
    builder: "Derek",
    status: "wip",
    accent: "from-orange-400 to-pink-500",
  },

  // ---- Prototype ----
  {
    name: "Bookstr",
    tagline: "Escape the algorithm, embrace the story. Discover, track, and share your reading journey.",
    icon: "", // Bookstr has no standalone logo asset yet
    screenshot: "/assets/toybox/bookstr-screenshot.png",
    url: "https://bookstr.xyz/",
    repo: "https://github.com/marykatefain/bookstr",
    repoHost: "github",
    builder: "MK",
    status: "prototype",
    pill: "Ditto support",
    hasIcon: false,
    accent: "from-orange-400 to-purple-500",
  },
];

// Display order across the single unified grid. Cards keep their own status
// pill (Feature complete / Work in progress / Prototype); they're just no
// longer split into separate sections.
const STATUS_ORDER = ["complete", "wip", "prototype"];
const orderedApps = STATUS_ORDER.flatMap((s) => apps.filter((a) => a.status === s));

export default function Toybox() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-azure-50 via-white to-violet-50">
      <ShowcaseHeroStyles />
      <SEO
        title="Toybox - Experimental Nostr Apps by Soapbox"
        description="Explore the Toybox: a playground of smaller, experimental Nostr apps built by the Soapbox team — from decentralized geocaching to AI social networks, tarot, and more."
        type="website"
        image="/assets/toybox/toybox-og.png"
        keywords="soapbox toybox, nostr apps, experimental nostr, treasures geocaching, clawstr, surveil, espy, nostrdamus, lief, birdstar, blobbi island, polaroids, bookstr, relaying earth, color slide, nostr nests, plektos, zaptrax, podstr, zappix"
      />

      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-4 pt-16 sm:px-6 lg:px-8 lg:pb-6 lg:pt-20">
        {/* soft glow accents (mirrors the OG image) */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-violet-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute right-1/3 top-1/4 h-72 w-72 rounded-full bg-azure/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-12">
          {/* Left: copy */}
          <div className="max-w-xl text-center lg:flex-1 lg:text-left">
            <Badge
              variant="secondary"
              className="mb-6 border-violet-200 bg-violet-100 text-violet-700"
            >
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              The Toybox
            </Badge>
            <h1 className="mb-5 font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-[4.25rem]">
              <span className="block">Apps built for</span>
              <span className="mt-1 block whitespace-nowrap bg-gradient-to-r from-violet-500 via-azure to-emerald-500 bg-clip-text text-transparent">
                the love of it
              </span>
            </h1>
            <p className="mx-auto max-w-md text-lg text-gray-600 lg:mx-0">
              A collection of apps from across our team — exploring what's possible on Nostr, from
              geocaching to tarot to virtual pets. Tap any of them and dive in.
            </p>
          </div>

          {/* Right: tilted icon grid */}
          <div className="shrink-0">
            <div className="flex justify-center">
              <div className="-rotate-6 transition-transform duration-500 hover:rotate-0">
                <HeroIconGrid apps={apps} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App grid */}
      <section className="px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {orderedApps.map((app) => (
              <ShowcaseCard key={app.name} app={app} statusMeta={STATUS_META} />
            ))}
          </div>
        </div>
      </section>

      {/* Build-your-own CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 px-8 py-12 text-center shadow-xl">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-azure/20 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                Want to build your own?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-gray-300">
                Check out our Toolbox — the open-source developer tools behind every app in here.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/toolbox"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-transform hover:scale-[1.02]"
                >
                  Explore the Toolbox
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
