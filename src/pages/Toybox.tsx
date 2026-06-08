import { ArrowRight, ExternalLink, Github, Gitlab, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

type Status = "complete" | "wip" | "prototype";

type RepoHost = "gitlab" | "github";

interface ToyApp {
  name: string;
  tagline: string;
  /** Square logo / app icon. */
  icon: string;
  /** Wide product screenshot. */
  screenshot: string;
  /** Optional object-position tweak for the screenshot crop. */
  screenshotPosition?: string;
  url?: string;
  repo?: string;
  repoHost?: RepoHost;
  builder: string;
  status: Status;
  ditto?: boolean;
  /** Tailwind gradient (from/to) used for the card accent + icon halo. */
  accent: string;
}

const STATUS_META: Record<Status, { label: string; className: string }> = {
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

const apps: ToyApp[] = [
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
    ditto: true,
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
    ditto: true,
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
    ditto: true,
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
    ditto: true,
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
    ditto: true,
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
    ditto: true,
    accent: "from-green-400 to-emerald-600",
  },

  // ---- Work in progress ----
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
    name: "Blobbi Island",
    tagline: "A virtual-pet adventure. Hatch, raise, and play with your Blobbi on a living island.",
    icon: "/assets/toybox/blobbi-island-icon.png",
    screenshot: "/assets/toybox/blobbi-island-screenshot.png",
    url: "https://blobbi-island.vercel.app/",
    builder: "Daniel",
    status: "wip",
    ditto: true,
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
    ditto: true,
    accent: "from-pink-400 to-amber-300",
  },

  // ---- Prototype ----
  {
    name: "Bookstr",
    tagline: "Escape the algorithm, embrace the story. Discover, track, and share your reading journey.",
    icon: "/assets/toybox/treasures-icon.svg", // placeholder icon — Bookstr has no standalone logo asset yet
    screenshot: "/assets/toybox/bookstr-screenshot.png",
    url: "https://bookstr.xyz/",
    repo: "https://github.com/marykatefain/bookstr",
    repoHost: "github",
    builder: "MK",
    status: "prototype",
    ditto: true,
    accent: "from-orange-400 to-purple-500",
  },
];

const sections: { status: Status; heading: string; blurb: string }[] = [
  {
    status: "complete",
    heading: "Ready to play",
    blurb: "Polished and feature-complete. Open one up and start tinkering.",
  },
  {
    status: "wip",
    heading: "In the workshop",
    blurb: "Actively being built. Rough edges expected — that's half the fun.",
  },
  {
    status: "prototype",
    heading: "On the workbench",
    blurb: "Early experiments and proofs of concept.",
  },
];

function RepoIcon({ host }: { host: RepoHost }) {
  return host === "github" ? (
    <Github className="h-4 w-4" />
  ) : (
    <Gitlab className="h-4 w-4" />
  );
}

function AppCard({ app }: { app: ToyApp }) {
  const status = STATUS_META[app.status];
  // Bookstr has no dedicated square logo asset yet.
  const showIcon = app.name !== "Bookstr";

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Screenshot — the star of the show */}
      <a
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden bg-gray-100"
      >
        <img
          src={app.screenshot}
          alt={`${app.name} screenshot`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          style={app.screenshotPosition ? { objectPosition: app.screenshotPosition } : undefined}
        />
        {/* gradient veil on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute right-3 top-3">
          <Badge variant="secondary" className={`border ${status.className} backdrop-blur`}>
            {status.label}
          </Badge>
        </div>
      </a>

      {/* Floating logo straddling screenshot + body */}
      {showIcon && (
        <div className="relative px-6">
          <div
            className={`absolute -top-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${app.accent} p-[3px] shadow-lg ring-4 ring-white`}
          >
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[14px] bg-white">
              <img
                src={app.icon}
                alt={`${app.name} logo`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      )}

      {/* Body */}
      <div className={`flex flex-1 flex-col px-6 pb-6 ${showIcon ? "pt-12" : "pt-6"}`}>
        <div className="flex items-center gap-3">
          <h3 className="font-display text-2xl font-bold text-gray-900">{app.name}</h3>
          {app.ditto && (
            <span className="inline-flex items-center rounded-full bg-azure-50 px-2.5 py-0.5 text-xs font-medium text-azure-700">
              Ditto support
            </span>
          )}
        </div>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{app.tagline}</p>

        <div className="mt-4 flex items-center text-xs text-gray-500">
          <span>
            Built by <span className="font-medium text-gray-700">{app.builder}</span>
          </span>
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center gap-2">
          {app.url && (
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r ${app.accent} px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]`}
            >
              Open app
              <ArrowRight className="h-4 w-4" />
            </a>
          )}
          {app.repo && app.repoHost && (
            <a
              href={app.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${app.name} source code`}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              <RepoIcon host={app.repoHost} />
              <span className="hidden sm:inline">Source</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Toybox() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-azure-50 via-white to-violet-50">
      <SEO
        title="Toybox - Experimental Nostr Apps by Soapbox"
        description="Explore the Toybox: a playground of smaller, experimental Nostr apps built by the Soapbox team — from decentralized geocaching to AI social networks, tarot, and more."
        type="website"
        image="/assets/toybox/toybox-og.png"
        keywords="soapbox toybox, nostr apps, experimental nostr, treasures geocaching, clawstr, surveil, espy, nostrdamus, lief, birdstar, blobbi island, polaroids, bookstr"
      />

      <Navigation />

      {/* Hero */}
      <section className="px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Badge
            variant="secondary"
            className="mb-6 border-violet-200 bg-violet-100 text-violet-700"
          >
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            The Toybox
          </Badge>
          <h1 className="mb-6 font-display text-5xl font-bold text-gray-900 md:text-6xl">
            Apps built for{" "}
            <span className="bg-gradient-to-r from-violet-500 via-azure to-emerald-500 bg-clip-text text-transparent">
              the love of it
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            A collection of apps from across our team — exploring what's possible on Nostr, from
            geocaching to tarot to virtual pets. Tap any of them and dive in.
          </p>
        </div>
      </section>

      {/* App sections */}
      {sections.map((section) => {
        const sectionApps = apps.filter((a) => a.status === section.status);
        if (sectionApps.length === 0) return null;

        return (
          <section key={section.status} className="px-4 pb-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 flex flex-col gap-1 border-b border-gray-200 pb-4">
                <h2 className="font-display text-3xl font-bold text-gray-900">{section.heading}</h2>
                <p className="text-gray-500">{section.blurb}</p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {sectionApps.map((app) => (
                  <AppCard key={app.name} app={app} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

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
                Every app in the Toybox was built fast with MKStack — our AI-powered toolkit for
                shipping Nostr apps in an afternoon.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="https://soapbox.pub/mkstack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-transform hover:scale-[1.02]"
                >
                  Vibed with MKStack
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
