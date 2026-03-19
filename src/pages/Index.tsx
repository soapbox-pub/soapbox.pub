import {
  ArrowRight,
  Search,
  ExternalLink,
  BookOpen,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

import { useSEO } from "@/hooks/useSEO";
import { getFeaturedPosts, formatDate } from "@/lib/blog/utils";

/** Developer tools shown further down the page. */
const devTools = [
  { name: "NostrHub", desc: "NIP Explorer & developer tools", logo: "/assets/images/nostrhub-logo.png", to: "/tools/nostrhub" },
  { name: "MKStack", desc: "Full-stack Nostr deploy toolkit", logo: "/assets/images/mkstack-og.png", to: "/mkstack" },
  { name: "Nostrify", desc: "Nostr framework for Deno & web", logo: "/assets/images/nostrify.png", to: "/tools/nostrify" },
  { name: "Soapbox Signer", desc: "Nostr key management", logo: "/assets/logo.svg", to: "/blog/announcing-soapbox-signer" },
  { name: "Stacks", desc: "Docker-based Nostr infrastructure", logo: "/assets/logo.svg", to: "/tools/stacks" },
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

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto">
              Open source tools for social media, AI development, and
              activism. Decentralized, community-owned, and built to last.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Open Source
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Decentralized
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Community Owned
              </div>
            </div>
          </div>

          {/* Three screenshots -- full width, fanned (hidden on mobile) */}
          <div className="hidden md:flex items-end justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
            {/* Left -- "Your Content" */}
            <div
              className="w-1/3 rounded-[20px] overflow-hidden mb-6"
              style={{ transform: "rotate(-4deg)", boxShadow: "0 20px 60px -10px rgba(0,0,0,0.3), 0 8px 20px -6px rgba(0,0,0,0.2)" }}
            >
              <img
                src="/assets/images/ditto/appstore/1.png"
                alt="Ditto -- Your Content"
                className="w-full h-auto"
              />
            </div>
            {/* Center -- "Your Vibe" (elevated) */}
            <div
              className="w-1/3 rounded-[20px] overflow-hidden mb-10"
              style={{ transform: "rotate(0deg)", boxShadow: "0 25px 70px -10px rgba(0,0,0,0.35), 0 10px 25px -6px rgba(0,0,0,0.25)" }}
            >
              <img
                src="/assets/images/ditto/appstore/2.png"
                alt="Ditto -- Your Vibe"
                className="w-full h-auto"
              />
            </div>
            {/* Right -- "Your Rules" */}
            <div
              className="w-1/3 rounded-[20px] overflow-hidden mb-6"
              style={{ transform: "rotate(4deg)", boxShadow: "0 20px 60px -10px rgba(0,0,0,0.3), 0 8px 20px -6px rgba(0,0,0,0.2)" }}
            >
              <img
                src="/assets/images/ditto/appstore/3.png"
                alt="Ditto -- Your Rules"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 2. THE BIG THREE -- Product Showcase                             */}
      {/* ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* -- Ditto (image left, text right) -- */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[420px] md:h-[520px]">
              {/* Back-left -- Kawaii */}
              <div
                className="absolute top-0 left-0 w-[55%] rounded-xl shadow-xl overflow-hidden ring-1 ring-black/5"
                style={{ transform: "rotate(-2deg)" }}
              >
                <img
                  src="/assets/images/ditto/profiles/kawaii.png"
                  alt="Kawaii theme"
                  className="w-full aspect-[867/918] object-cover"
                />
              </div>
              {/* Back-right -- Alien */}
              <div
                className="absolute top-6 right-0 w-[55%] rounded-xl shadow-xl overflow-hidden ring-1 ring-black/5 z-[5]"
                style={{ transform: "rotate(2deg)" }}
              >
                <img
                  src="/assets/images/ditto/profiles/alien.png"
                  alt="Alien theme"
                  className="w-full aspect-[867/918] object-cover"
                />
              </div>
              {/* Front-center -- Gamer */}
              <div
                className="absolute bottom-0 left-[15%] w-[55%] rounded-xl shadow-2xl overflow-hidden ring-1 ring-black/5 z-10"
                style={{ transform: "rotate(-1deg)" }}
              >
                <img
                  src="/assets/images/ditto/profiles/gamer.png"
                  alt="Gamer theme"
                  className="w-full aspect-[867/918] object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <Badge className="bg-violet-100 text-violet-700 border-violet-200">
                Fun Social Media
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Ditto
                </span>
              </h2>
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

          {/* -- Shakespeare (text left, image right) -- */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                AI Website Builder
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Shakespeare
                </span>
              </h2>
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

            <div className="rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5 order-1 lg:order-2">
              <img
                src="/assets/images/ditto/edit-ditto-in-shakespeare.png"
                alt="Shakespeare AI IDE editing a Ditto project"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* -- Agora (image left, text right) -- */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl shadow-2xl overflow-hidden">
              <img
                src="/assets/blog/about-agora/agora-cover.png"
                alt="Agora -- Power to the People"
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-6">
              <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                Power to the People
              </Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Agora
                </span>
              </h2>
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
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white"
                asChild
              >
                <Link to="/blog/agora-connecting-freedom-fighters">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
            {/* Left -- Mostr screenshot */}
            <div className="rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5">
              <img
                src="/assets/images/mostr-search.png"
                alt="Mostr Bridge -- 46,957 Nostr users and 9,596 Fediverse users connected"
                className="w-full h-auto"
              />
            </div>

            {/* Right -- copy + protocol pills */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                  Bridging the{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Open Web
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our Mostr Bridge connects three decentralized protocols so
                  your followers can find you no matter what network they're on.
                  Over 56,000 users already connected across networks.
                </p>
              </div>

              {/* Protocol pills */}
              <div className="flex flex-wrap gap-3">
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

              <div className="flex flex-col sm:flex-row gap-4">
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

          <div className="text-center mt-12">
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
      {/* 5. FEATURED BLOG POSTS                                           */}
      {/* ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
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
      {/* 6. DEVELOPER TOOLS                                               */}
      {/* ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-azure-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              For Developers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Open source tools and libraries for building on the decentralized
              web.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {devTools.map((tool) => (
              <Link
                key={tool.name}
                to={tool.to}
                className="group p-5 rounded-xl bg-white border border-gray-200 hover:border-azure-300 hover:shadow-lg transition-all text-center space-y-3"
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden mx-auto">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-azure transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-gray-500">{tool.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/tools">
                View All Tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* 7. FINAL CTA                                                     */}
      {/* ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-azure to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Try Ditto Today
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            No email. No phone number. Just you and the open web.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-azure"
              asChild
            >
              <Link to="/ethics">
                <BookOpen className="mr-2 h-5 w-5" />
                Read Our Ethics Pledge
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
