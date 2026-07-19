import { ExternalLink, Wrench } from "lucide-react";
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
  stable: {
    label: "Production ready",
    className: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  wip: {
    label: "Work in progress",
    className: "bg-amber-100 text-amber-700 border-amber-200",
  },
};

const tools: ShowcaseApp[] = [
  // ---- Production ready ----
  {
    name: "Shakespeare",
    tagline: "Build Nostr apps by chatting with AI. Describe what you want, preview it live, and deploy in minutes.",
    icon: "/assets/toolbox/shakespeare-icon.png",
    screenshot: "/assets/toolbox/shakespeare-screenshot.png",
    url: "https://shakespeare.diy",
    ctaLabel: "Open tool",
    repo: "https://gitlab.com/soapbox-pub/shakespeare",
    repoHost: "gitlab",
    status: "stable",
    accent: "from-yellow-400 to-blue-500",
  },
  {
    name: "Ditto Relay",
    tagline: "A high-performance Nostr relay backed by OpenSearch — the relay infrastructure powering Ditto. Self-host your own or connect to the public instance.",
    icon: "/assets/toolbox/ditto-relay-icon.png",
    screenshot: "/assets/toolbox/ditto-relay-screenshot.png",
    url: "https://relay.ditto.pub/",
    ctaLabel: "Open relay",
    repo: "https://gitlab.com/soapbox-pub/ditto-relay",
    repoHost: "gitlab",
    builder: "Alex",
    status: "stable",
    accent: "from-violet-500 to-purple-700",
  },
  {
    name: "MKStack",
    tagline: "The full-stack toolkit for shipping Nostr apps fast — scaffolding, hooks, and deploy in one workflow.",
    icon: "/assets/toolbox/mkstack-icon.png",
    screenshot: "/assets/toolbox/mkstack-screenshot.png",
    url: "https://soapbox.pub/mkstack",
    ctaLabel: "Open tool",
    status: "stable",
    accent: "from-violet-500 to-purple-600",
  },
  {
    name: "Nostrify",
    tagline: "A batteries-included Nostr framework for Deno and the web. The engine behind many Soapbox apps.",
    icon: "/assets/toolbox/nostrify-icon.png",
    screenshot: "/assets/toolbox/nostrify-screenshot.png",
    url: "https://nostrify.dev/",
    ctaLabel: "Open docs",
    repo: "https://gitlab.com/soapbox-pub/nostrify",
    repoHost: "gitlab",
    status: "stable",
    accent: "from-sky-400 to-indigo-500",
  },
  {
    name: "NostrHub",
    tagline: "Explore every NIP, browse event kinds, and publish your own custom NIPs to the protocol universe.",
    icon: "/assets/toolbox/nostrhub-icon.png",
    screenshot: "/assets/blog/nostrhub-2/cover.jpg",
    url: "https://nostrhub.io",
    ctaLabel: "Open tool",
    status: "stable",
    accent: "from-fuchsia-500 to-cyan-500",
  },
  {
    name: "Nostrbook",
    tagline: "Documentation and an MCP server for Nostr kinds and tags — give your AI agent the full protocol.",
    icon: "/assets/toolbox/nostrbook-icon.png",
    screenshot: "/assets/toolbox/nostrbook-screenshot.png",
    url: "https://nostrbook.dev",
    ctaLabel: "Open docs",
    status: "stable",
    accent: "from-amber-400 to-orange-600",
  },
  {
    name: "Ditto Extension",
    tagline: "A browser extension that turns any page into a Nostr surface — sign in to sites, highlight text, and post to Nostr as you browse.",
    icon: "/assets/toolbox/ditto-extension-icon.png",
    screenshot: "/assets/toolbox/ditto-extension-screenshot.png",
    url: "https://chromewebstore.google.com/detail/ditto-extension/fbiegkepanmjielbemkhieckmlckiagi",
    ctaLabel: "Get extension",
    repo: "https://gitlab.com/soapbox-pub/ditto-extension",
    repoHost: "gitlab",
    status: "stable",
    accent: "from-pink-400 to-purple-600",
  },
  {
    name: "Mostr",
    tagline: "The bridge between Nostr and the Fediverse — find Fediverse accounts on Nostr and follow across networks.",
    icon: "/assets/toolbox/mostr-icon.svg",
    screenshot: "https://blossom.ditto.pub/a69b4b1a90d940d0958babaf4464fb62edfa4051b355d5189c4e282107cccfd7.png",
    url: "https://mostr.pub/",
    ctaLabel: "Open bridge",
    repo: "https://gitlab.com/soapbox-pub/mostr",
    repoHost: "gitlab",
    status: "stable",
    accent: "from-purple-500 to-fuchsia-500",
  },
  {
    name: "Stacks",
    tagline: "One-command Docker infrastructure for Nostr. Spin up relays, services, and full stacks with ease.",
    icon: "/assets/toolbox/stacks-icon.png",
    screenshot: "/assets/toolbox/stacks-screenshot.png",
    url: "https://getstacks.dev",
    ctaLabel: "Open tool",
    status: "stable",
    accent: "from-slate-500 to-blue-700",
  },
  {
    name: "Nostr WS Inspector",
    tagline: "A Chrome DevTools extension that decodes live Nostr WebSocket traffic — inspect events, kinds, and relays as they fly.",
    icon: "/assets/toolbox/nostr-ws-inspector-icon.png",
    screenshot: "/assets/toolbox/nostr-ws-inspector-screenshot.jpg",
    url: "https://chromewebstore.google.com/detail/nostr-ws-inspector/pchfingijipdcdimblhpahbolijmblmn",
    ctaLabel: "Get extension",
    repo: "https://gitlab.com/soapbox-pub/nostr-extension",
    repoHost: "gitlab",
    status: "stable",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    name: "Mi",
    tagline: "Your personal Nostr archive — a browser-based local relay that stores your events right in your browser, giving you complete control over your data.",
    icon: "/assets/toolbox/mi-icon.png",
    screenshot: "/assets/toolbox/mi-screenshot.png",
    url: "https://mi.shakespeare.wtf/",
    ctaLabel: "Open app",
    builder: "Chad",
    status: "stable",
    accent: "from-red-500 to-rose-600",
  },

  // ---- Work in progress ----
  {
    name: "Relay Kit",
    tagline: "One install script to deploy and manage Nostr relays, Blossom servers, and nsite gateways — and link your domains. (Works, but not ready for primetime.)",
    icon: "/assets/toolbox/relaykit-icon.png",
    screenshot: "/assets/toolbox/relaykit-screenshot.png",
    url: "https://relayk.it",
    ctaLabel: "Open tool",
    repo: "https://github.com/samthomson/relaykit",
    repoHost: "github",
    builder: "Sam",
    status: "wip",
    accent: "from-green-400 to-emerald-600",
  },
];

export default function Toolbox() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-azure-50 via-white to-slate-50">
      <ShowcaseHeroStyles />
      <SEO
        title="Toolbox - Developer Tools for Building on Nostr"
        description="The Soapbox developer Toolbox: Shakespeare, MKStack, Mi, Nostrify, NostrHub, Nostrbook, Stacks, the Ditto Extension, the Nostr WS Inspector, and Relay Kit — everything you need to build on Nostr."
        type="website"
        image="/assets/toolbox/toolbox-og.png"
        keywords="nostr developer tools, mkstack, shakespeare, mi, mi nostr archive, ditto relay, nostr relay, nostrify, nostrhub, nostrbook, stacks, ditto extension, nostr ws inspector, relay kit, build on nostr"
      />

      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-4 pt-16 sm:px-6 lg:px-8 lg:pb-6 lg:pt-20">
        {/* soft glow accents */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-azure/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="pointer-events-none absolute right-1/3 top-1/4 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-12">
          {/* Left: copy */}
          <div className="max-w-xl text-center lg:flex-1 lg:text-left">
            <Badge
              variant="secondary"
              className="mb-6 border-azure-200 bg-azure-100 text-azure-700"
            >
              <Wrench className="mr-1.5 h-3.5 w-3.5" />
              The Toolbox
            </Badge>
            <h1 className="mb-5 font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-[4.25rem]">
              <span className="block">Tools to build</span>
              <span className="mt-1 block whitespace-nowrap bg-gradient-to-r from-azure via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                on Nostr
              </span>
            </h1>
            <p className="mx-auto max-w-md text-lg text-gray-600 lg:mx-0">
              The open-source developer tools behind everything we ship — from AI app builders to
              relay infrastructure and protocol explorers. All free, all yours.
            </p>
          </div>

          {/* Right: tilted icon grid */}
          <div className="shrink-0">
            <div className="flex justify-center">
              <div className="-rotate-6 transition-transform duration-500 hover:rotate-0">
                <HeroIconGrid apps={tools} exclude={["Stacks"]} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All tools */}
      <section className="px-4 pb-16 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-1 border-b border-gray-200 pb-4">
            <h2 className="font-display text-3xl font-bold text-gray-900">The tools</h2>
            <p className="text-gray-500">
              Free and open-source. Each tag tells you how battle-tested it is.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ShowcaseCard key={tool.name} app={tool} statusMeta={STATUS_META} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 px-8 py-12 text-center shadow-xl">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-azure/25 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                See what we built with them
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-gray-300">
                These are the tools. The Toybox is the playground — a collection of fun, experimental
                apps we made with them.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="/toybox"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-transform hover:scale-[1.02]"
                >
                  Explore the Toybox
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
