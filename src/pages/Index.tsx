import {
  ArrowRight,
  Search,
  ExternalLink,
  Calendar,
  TerminalSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaGitlab } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import { useSEO } from "@/hooks/useSEO";
import { getFeaturedPosts, formatDate } from "@/lib/blog/utils";

/**
 * Developer tools shown in the "For Builders" console section.
 * `accent` is a Tailwind gradient used for each card's glow/ring on hover.
 */
const devTools = [
  { name: "Shakespeare", desc: "Build Nostr apps by chatting with AI", url: "https://shakespeare.diy", logo: "/assets/toolbox/shakespeare-icon.png", accent: "from-yellow-400 to-blue-500" },
  { name: "MKStack", desc: "Full-stack Nostr deploy toolkit", url: "https://soapbox.pub/mkstack", logo: "/assets/toolbox/mkstack-icon.png", accent: "from-violet-500 to-purple-600" },
  { name: "Nostrify", desc: "Nostr framework for Deno & web", url: "https://nostrify.dev/", logo: "/assets/toolbox/nostrify-icon.png", accent: "from-sky-400 to-indigo-500" },
  { name: "NostrHub", desc: "NIP explorer & protocol tools", url: "https://nostrhub.io", logo: "/assets/toolbox/nostrhub-icon.png", accent: "from-fuchsia-500 to-cyan-500" },
  { name: "Stacks", desc: "Docker-based Nostr infrastructure", url: "https://getstacks.dev", logo: "/assets/toolbox/stacks-icon.png", accent: "from-slate-400 to-blue-600" },
  { name: "Ditto Relay", desc: "High-performance Nostr relay", url: "https://relay.ditto.pub/", logo: "/assets/toolbox/ditto-relay-icon.png", accent: "from-violet-500 to-purple-700" },
];

/** Names shown in the scrolling "arsenal" ribbon (duplicated for seamless loop). */
const devToolMarquee = [
  "Shakespeare", "MKStack", "Nostrify", "NostrHub", "Stacks", "Ditto Relay",
  "Nostrbook", "Ditto Extension", "Nostr WS Inspector", "Relay Kit",
];

export default function Index() {
  const featuredPosts = getFeaturedPosts().slice(0, 3);

  useSEO({
    title: "Soapbox - Software for a Free Internet",
    description:
      "Open source tools for social media, AI development, and activism. Decentralized, community-owned, and built to last.",
    type: "website",
    image: "/og-image.png",
    keywords:
      "soapbox, nostr, decentralized, social media, open source, ditto, shakespeare, agora, fediverse, activitypub",
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-azure-50 via-white to-blue-50">
      <Navigation />

      {/* ================================================================ */}
      {/* 1. HERO                                                          */}
      {/* ================================================================ */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Centered copy */}
          <div className="text-center space-y-6">
            <h1 className="font-display font-bold text-gray-900 leading-[1.1]">
              <span className="block text-5xl md:text-6xl lg:text-7xl">Building tools for</span>
              <span className="block text-5xl md:text-8xl lg:text-9xl bg-gradient-to-r from-azure to-blue-600 bg-clip-text text-transparent">
                Freedom&nbsp;Online
              </span>
            </h1>

            <p className="hidden md:block text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto">
              Open source tools for social media, AI development, and
              activism. Decentralized, community-owned, and built to last.
            </p>


          </div>

          {/* Three screenshots -- full width, fanned (hidden on mobile) */}
          <div className="hidden md:flex items-end justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
            {/* Left -- "Your Content" */}
            <div
              className="w-1/3 rounded-[20px] overflow-hidden mb-6"
              style={{ transform: "rotate(-4deg)", boxShadow: "0 20px 60px -10px rgba(0,0,0,0.3), 0 8px 20px -6px rgba(0,0,0,0.2)" }}
            >
              <img
                src="/assets/images/ditto/appstore/1.webp"
                alt="Ditto -- Your Content"
                className="w-full h-auto"
                width={1080}
                height={1920}
                loading="eager"
              />
            </div>
            {/* Center -- "Your Vibe" (elevated) */}
            <div
              className="w-1/3 rounded-[20px] overflow-hidden mb-10"
              style={{ transform: "rotate(0deg)", boxShadow: "0 25px 70px -10px rgba(0,0,0,0.35), 0 10px 25px -6px rgba(0,0,0,0.25)" }}
            >
              <img
                src="/assets/images/ditto/appstore/2.webp"
                alt="Ditto -- Your Vibe"
                className="w-full h-auto"
                width={1080}
                height={1920}
                loading="eager"
                fetchPriority="high"
              />
            </div>
            {/* Right -- "Your Rules" */}
            <div
              className="w-1/3 rounded-[20px] overflow-hidden mb-6"
              style={{ transform: "rotate(4deg)", boxShadow: "0 20px 60px -10px rgba(0,0,0,0.3), 0 8px 20px -6px rgba(0,0,0,0.2)" }}
            >
              <img
                src="/assets/images/ditto/appstore/3.webp"
                alt="Ditto -- Your Rules"
                className="w-full h-auto"
                width={1080}
                height={1920}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. THE BIG THREE -- Product Showcase                             */}
      {/* ================================================================ */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
           {/* -- Ditto (image left, text right) -- */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Mobile-only title */}
            <div className="lg:hidden col-span-full text-center w-[90%] mx-auto space-y-2">
              <h2 className="text-6xl font-display font-bold text-gray-900">
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Ditto
                </span>
              </h2>
              <p className="text-lg text-gray-500 font-medium">Your Content. Your Vibe. Your Rules.</p>
            </div>

            <div>
              {/* Desktop: two screenshots side by side */}
              <div className="hidden md:grid grid-cols-2 gap-4">
                {[4, 5].map((n) => (
                  <div
                    key={n}
                    className="rounded-[20px] overflow-hidden"
                    style={{ boxShadow: "0 25px 70px -10px rgba(0,0,0,0.35), 0 10px 25px -6px rgba(0,0,0,0.25)" }}
                  >
                    <img
                      src={`/assets/images/ditto/appstore/${n}.webp`}
                      alt={`Ditto screenshot ${n}`}
                      className="w-full h-auto"
                      width={1080}
                      height={1920}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Mobile: horizontally scrollable row of 5 screenshots */}
              <div className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
                {[4, 5, 6, 7, 8].map((n) => (
                  <div
                    key={n}
                    className="shrink-0 w-[70%] rounded-[20px] overflow-hidden shadow-lg ring-1 ring-black/5 snap-center"
                  >
                    <img
                      src={`/assets/images/ditto/appstore/${n}.webp`}
                      alt={`Ditto screenshot ${n}`}
                      className="w-full h-auto"
                      width={1080}
                      height={1920}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="hidden lg:block text-5xl font-display font-bold text-gray-900">
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Ditto
                </span>
              </h2>
              <p className="hidden lg:block text-xl text-gray-500 font-medium -mt-2">Your Content. Your Vibe. Your Rules.</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                A social platform for people who want to have fun, not feed the
                Big Tech machine. Custom themes, infinite content types, and
                total freedom.
              </p>
              <div className="space-y-3">
                {["Custom themes & self-expression", "27+ content types", "Bluesky & Mastodon bridges"].map((item) => (
                  <div key={item} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mr-3 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-violet-600 hover:bg-violet-700 text-white"
                  asChild
                >
                  <Link to="/ditto">
                    Explore Ditto
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/60 to-purple-50/60">
        <div className="max-w-7xl mx-auto">
          {/* -- Shakespeare (text left, image right) -- */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Mobile-only title */}
            <div className="lg:hidden col-span-full text-center w-[90%] mx-auto space-y-2">
              <h2 className="text-6xl font-display font-bold text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Shakespeare
                </span>
              </h2>
              <p className="text-lg text-gray-500 font-medium">All the web's your stage.</p>
            </div>

            <div className="rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5 order-1 lg:order-2">
              <img
                src="/assets/images/ditto/edit-ditto-in-shakespeare.webp"
                alt="Shakespeare AI IDE editing a Ditto project"
                className="w-full h-auto"
                width={1920}
                height={1048}
                loading="lazy"
              />
            </div>

            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="hidden lg:block text-5xl font-display font-bold text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Shakespeare
                </span>
              </h2>
              <p className="hidden lg:block text-xl text-gray-500 font-medium -mt-2">All the web's your stage.</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Build websites and applications with AI in your browser. No
                downloads, any AI provider, complete freedom and control.
              </p>
              <div className="space-y-3">
                {["Build in your browser", "Any AI provider", "Open source & self-hostable"].map((item) => (
                  <div key={item} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <Link to="/shakespeare">
                    Start Building
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* -- Agora (image left, text right) -- */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Mobile-only title */}
            <div className="lg:hidden col-span-full text-center w-[90%] mx-auto space-y-2">
              <h2 className="text-6xl font-display font-bold text-gray-900">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Agora
                </span>
              </h2>
              <p className="text-lg text-gray-500 font-medium">Power to the People.</p>
            </div>

            <div className="rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="/assets/blog/about-agora/agora-cover.webp"
                alt="Agora -- Power to the People"
                className="w-full h-auto"
                width={1920}
                height={1080}
                loading="lazy"
              />
            </div>

            <div className="space-y-6">
              <h2 className="hidden lg:block text-5xl font-display font-bold text-gray-900">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Agora
                </span>
              </h2>
              <p className="hidden lg:block text-xl text-gray-500 font-medium -mt-2">Power to the People.</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                A censorship-resistant platform for activists. Organize,
                document, and receive direct Bitcoin support from a global
                community.
              </p>
              <div className="space-y-3">
                {[
                  { text: "Censorship-resistant communication" },
                  { text: "Direct Bitcoin support via Lightning", link: "/blog/zapping-101" },
                  { text: "Built on Nostr -- no server to shut down" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 shrink-0" />
                    {item.link ? (
                      <Link to={item.link} className="hover:text-orange-600 hover:underline">
                        {item.text}
                      </Link>
                    ) : (
                      item.text
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                  asChild
                >
                  <Link to="/agora">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 3. BRIDGING THE WEB -- Visual                                    */}
      {/* ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Mobile-only title */}
            <div className="lg:hidden col-span-full text-center w-[90%] mx-auto space-y-2">
              <h2 className="text-6xl font-display font-bold text-gray-900">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Mostr
                </span>
              </h2>
              <p className="text-lg text-gray-500 font-medium">Bridging the open web.</p>
            </div>

            {/* Left -- Mostr screenshot */}
            <div className="rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5">
              <img
                src="/assets/images/mostr-search.webp"
                alt="Mostr Bridge -- 46,957 Nostr users and 9,596 Fediverse users connected"
                className="w-full h-auto"
                width={1280}
                height={800}
                loading="lazy"
              />
            </div>

            {/* Right -- copy + protocol pills */}
            <div className="space-y-6">
              <h2 className="hidden lg:block text-5xl font-display font-bold text-gray-900">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Mostr
                </span>
              </h2>
              <p className="hidden lg:block text-xl text-gray-500 font-medium -mt-2">Bridging the open web.</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our Mostr Bridge connects three decentralized protocols so
                your followers can find you no matter what network they're on.
                Over 56,000 users already connected across networks.
              </p>

              {/* Protocol pills */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-violet-600 text-white text-sm font-semibold shadow-md">
                  Nostr
                </span>
                <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#6364ff] text-white text-sm font-semibold shadow-md">
                  Mastodon
                </span>
                <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#0085ff] text-white text-sm font-semibold shadow-md">
                  Bluesky
                </span>
              </div>

              <div className="flex justify-center lg:justify-start flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  asChild
                >
                  <a
                    href="https://mostr.pub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Search on Mostr.pub
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/blog/comparing-protocols">
                    Compare Protocols
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 4. NOT BIG TECH -- Redacted Dossier                              */}
      {/* ================================================================ */}
      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 30% 20%, #1a1a2e 0%, #0d0d14 50%, #080810 100%)",
        }}
      >
        {/* Scan lines */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.07) 2px, rgba(255,255,255,0.07) 3px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-mono font-black tracking-tight mb-4">
              Not Big Tech.
            </h2>
            <p className="text-lg font-mono text-gray-400 max-w-2xl mx-auto tracking-wide">
              We build software that serves people, not shareholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Document 1 -- Source Code Access */}
            <div className="relative bg-amber-50/95 rounded-lg p-6 pb-8 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500/[0.07] font-mono font-black text-5xl md:text-6xl tracking-[0.15em] uppercase whitespace-nowrap select-none pointer-events-none" style={{ transform: "translate(-50%, -50%) rotate(-12deg)" }}>
                DECLASSIFIED
              </div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400">Subject: Big Tech</span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400">Classification: <span className="bg-gray-900 text-gray-900 rounded-sm px-6">SECRET</span></span>
                </div>
                <h3 className="font-mono text-sm font-bold text-gray-800 uppercase tracking-wide mb-4">Source Code Access</h3>
                <div className="space-y-2 mb-5 font-mono text-sm text-gray-600 leading-relaxed">
                  <p>All platform source code is <span className="bg-gray-900 text-gray-900 rounded-sm px-8">proprietary</span> and subject to <span className="bg-gray-900 text-gray-900 rounded-sm px-10">restrictive licensing</span>.</p>
                  <p>External audit of codebase is <span className="bg-gray-900 text-gray-900 rounded-sm px-12">strictly prohibited</span> under corporate policy <span className="bg-gray-900 text-gray-900 rounded-sm px-6">§12.4</span>.</p>
                </div>
                <div className="border-l-2 border-emerald-500 bg-emerald-50 rounded-r-md px-4 py-3">
                  <p className="font-mono text-sm font-semibold text-emerald-800">SOAPBOX: 100% Open Source -- all our code is public. No black boxes, no lock-in.</p>
                </div>
              </div>
            </div>

            {/* Document 2 -- User Data Policy */}
            <div className="relative bg-amber-50/95 rounded-lg p-6 pb-8 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500/[0.07] font-mono font-black text-5xl md:text-6xl tracking-[0.15em] uppercase whitespace-nowrap select-none pointer-events-none" style={{ transform: "translate(-50%, -50%) rotate(-12deg)" }}>
                DECLASSIFIED
              </div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400">Subject: Big Tech</span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400">Classification: <span className="bg-gray-900 text-gray-900 rounded-sm px-6">SECRET</span></span>
                </div>
                <h3 className="font-mono text-sm font-bold text-gray-800 uppercase tracking-wide mb-4">User Data Policy</h3>
                <div className="space-y-2 mb-5 font-mono text-sm text-gray-600 leading-relaxed">
                  <p>All user data <span className="bg-gray-900 text-gray-900 rounded-sm px-6">will be sold</span> to third-party <span className="bg-gray-900 text-gray-900 rounded-sm px-10">advertising networks</span> for <span className="bg-gray-900 text-gray-900 rounded-sm px-8">targeted profiling</span>.</p>
                  <p>Behavioral <span className="bg-gray-900 text-gray-900 rounded-sm px-10">tracking algorithms</span> are deployed to <span className="bg-gray-900 text-gray-900 rounded-sm px-12">maximize engagement</span>.</p>
                </div>
                <div className="border-l-2 border-emerald-500 bg-emerald-50 rounded-r-md px-4 py-3">
                  <p className="font-mono text-sm font-semibold text-emerald-800">SOAPBOX: No data mining. No ads. No tracking. No algorithms designed to keep you scrolling.</p>
                </div>
              </div>
            </div>

            {/* Document 3 -- Network Architecture */}
            <div className="relative bg-amber-50/95 rounded-lg p-6 pb-8 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500/[0.07] font-mono font-black text-5xl md:text-6xl tracking-[0.15em] uppercase whitespace-nowrap select-none pointer-events-none" style={{ transform: "translate(-50%, -50%) rotate(-12deg)" }}>
                DECLASSIFIED
              </div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400">Subject: Big Tech</span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400">Classification: <span className="bg-gray-900 text-gray-900 rounded-sm px-6">SECRET</span></span>
                </div>
                <h3 className="font-mono text-sm font-bold text-gray-800 uppercase tracking-wide mb-4">Network Architecture</h3>
                <div className="space-y-2 mb-5 font-mono text-sm text-gray-600 leading-relaxed">
                  <p>All traffic routes through <span className="bg-gray-900 text-gray-900 rounded-sm px-10">centralized servers</span> under <span className="bg-gray-900 text-gray-900 rounded-sm px-8">sole corporate control</span>.</p>
                  <p>User accounts subject to <span className="bg-gray-900 text-gray-900 rounded-sm px-10">unilateral termination</span> at <span className="bg-gray-900 text-gray-900 rounded-sm px-8">platform discretion</span>.</p>
                </div>
                <div className="border-l-2 border-emerald-500 bg-emerald-50 rounded-r-md px-4 py-3">
                  <p className="font-mono text-sm font-semibold text-emerald-800">SOAPBOX: Decentralized. No central server. No gatekeeper. Your data lives on a network no one controls.</p>
                </div>
              </div>
            </div>

            {/* Document 4 -- Content Moderation */}
            <div className="relative bg-amber-50/95 rounded-lg p-6 pb-8 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500/[0.07] font-mono font-black text-5xl md:text-6xl tracking-[0.15em] uppercase whitespace-nowrap select-none pointer-events-none" style={{ transform: "translate(-50%, -50%) rotate(-12deg)" }}>
                DECLASSIFIED
              </div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400">Subject: Big Tech</span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-gray-400">Classification: <span className="bg-gray-900 text-gray-900 rounded-sm px-6">SECRET</span></span>
                </div>
                <h3 className="font-mono text-sm font-bold text-gray-800 uppercase tracking-wide mb-4">Content Moderation Protocol</h3>
                <div className="space-y-2 mb-5 font-mono text-sm text-gray-600 leading-relaxed">
                  <p>Platform reserves right to <span className="bg-gray-900 text-gray-900 rounded-sm px-10">suppress or remove</span> any content deemed <span className="bg-gray-900 text-gray-900 rounded-sm px-8">non-compliant</span>.</p>
                  <p>Appeals process is <span className="bg-gray-900 text-gray-900 rounded-sm px-12">intentionally opaque</span> and outcomes are <span className="bg-gray-900 text-gray-900 rounded-sm px-6">final</span>.</p>
                </div>
                <div className="border-l-2 border-emerald-500 bg-emerald-50 rounded-r-md px-4 py-3">
                  <p className="font-mono text-sm font-semibold text-emerald-800">SOAPBOX: Censorship resistant. If a relay bans you, use another. Your voice can't be silenced.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-gray-900"
              asChild
            >
              <Link to="/transparency">
                Funding Transparency
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-gray-900"
              asChild
            >
              <Link to="/ethics">
                Read Our Ethics Pledge
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 5. FOR BUILDERS -- dark "console" showcase                      */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden bg-[#0a0e1a] py-24 px-4 sm:px-6 lg:px-8">
        {/* Ambient glow accents */}
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-azure/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-[120px]" />
        {/* Subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-6xl">
          {/* Heading row */}
          <div className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-azure-100 backdrop-blur">
                <TerminalSquare className="h-3.5 w-3.5" />
                <span className="font-mono">~/soapbox</span>
                <span className="text-white/40">·</span>
                <span>open source &amp; free forever</span>
              </div>
              <h2 className="font-display text-4xl font-bold leading-[1.1] text-white md:text-5xl">
                For{" "}
                <span className="bg-gradient-to-r from-azure via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  Builders
                </span>
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                A full arsenal of tools for building on the decentralized web —
                from AI app builders to relay infrastructure and protocol explorers.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="bg-white text-[#0a0e1a] hover:bg-gray-100"
              >
                <Link to="/toolbox">
                  <TerminalSquare className="mr-2 h-4 w-4" />
                  Explore the Toolbox
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <a
                  href="https://gitlab.com/soapbox-pub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGitlab className="mr-2 h-4 w-4" />
                  View on GitLab
                </a>
              </Button>
            </div>
          </div>

          {/* Tool cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {devTools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                {/* Per-tool gradient glow on hover */}
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${tool.accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
                />

                <div className="relative flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${tool.accent} p-[1.5px]`}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#0d1220]">
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="h-6 w-6 object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-base font-semibold text-white">
                      {tool.name}
                    </h3>
                    <p className="truncate text-sm text-gray-400">{tool.desc}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-gray-600 transition-all group-hover:translate-x-0.5 group-hover:text-white" />
                </div>
              </a>
            ))}
          </div>

          {/* Scrolling arsenal ribbon */}
          <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
            <div className="flex w-max animate-marquee gap-3 [animation-duration:28s] hover:[animation-play-state:paused]">
              {[...devToolMarquee, ...devToolMarquee].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-sm text-gray-400"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-azure" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 6. FEATURED BLOG POSTS                                           */}
      {/* ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Latest Updates
            </h2>
            <p className="text-lg text-gray-600">
              News, launches, and ideas from the Soapbox team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.slug}
                className="group hover:shadow-xl transition-all duration-300 border hover:border-azure-200 overflow-hidden"
              >
                <Link to={`/blog/${post.slug}`}>
                  {post.coverImage && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>
                    <CardTitle className="text-lg group-hover:text-azure transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <span className="text-azure text-sm font-medium inline-flex items-center group-hover:text-azure-600 transition-colors">
                      Read More
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/blog">
                View All Updates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 7. FINAL CTA                                                     */}
      {/* ================================================================ */}
      <section
        className="relative py-24 px-4 sm:px-6 lg:px-8 text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/ditto-background-galaxy.png')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Try Ditto Today
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            No email. No phone number. Just you and the open web.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-3 text-lg bg-white text-azure hover:bg-gray-100"
              asChild
            >
              <a
                href="https://ditto.pub"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Ditto
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg bg-black/40 border-white text-white hover:bg-white hover:text-azure backdrop-blur-sm"
              asChild
            >
              <a
                href="https://apps.apple.com/us/app/ditto-fun-social-media/id6761851821"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/icons/app-store.svg" alt="" className="mr-2 h-5 w-5" />
                App Store
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg bg-black/40 border-white text-white hover:bg-white hover:text-azure backdrop-blur-sm"
              asChild
            >
              <a
                href="https://play.google.com/store/apps/details?id=pub.ditto.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/icons/google-play.svg" alt="" className="mr-2 h-5 w-5" />
                Google Play
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg bg-black/40 border-white text-white hover:bg-white hover:text-azure backdrop-blur-sm"
              asChild
            >
              <a
                href="https://zapstore.dev/apps/pub.ditto.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/assets/icons/zapstore.png" alt="" className="mr-2 h-5 w-5 rounded" />
                Get on Zapstore
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
