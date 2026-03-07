import {
  ArrowRight,
  Code,
  Globe,
  Eye,
  ShieldOff,
  Megaphone,
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
import { SoapboxLogo } from "@/components/SoapboxLogo";
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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left -- copy */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <SoapboxLogo size={40} />
                  <span className="font-display font-bold text-2xl text-gray-900">
                    Soapbox
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-[1.1]">
                  Software for a{" "}
                  <span className="bg-gradient-to-r from-azure to-blue-600 bg-clip-text text-transparent">
                    Free Internet
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Open source tools for social media, AI development, and
                  activism. Decentralized, community-owned, and built to last.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-azure hover:bg-azure-600 text-white px-8 py-3 text-lg"
                  asChild
                >
                  <Link to="/tools/ditto">
                    Explore Ditto
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 text-lg"
                  asChild
                >
                  <Link to="/about">About Us</Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
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

            {/* Right -- product collage */}
            <div className="relative h-[420px] md:h-[520px] lg:h-[560px]">
              {/* Back -- Agora cover (dark, wide) */}
              <div
                className="absolute top-0 right-0 w-[65%] rounded-2xl shadow-xl overflow-hidden ring-2 ring-orange-300/40"
                style={{ transform: "rotate(2deg)" }}
              >
                <img
                  src="/assets/blog/about-agora/agora-cover.png"
                  alt="Agora -- Power to the People"
                  className="w-full h-auto"
                />
              </div>

              {/* Middle -- Shakespeare IDE */}
              <div
                className="absolute top-24 left-0 w-[65%] rounded-2xl shadow-xl overflow-hidden ring-2 ring-purple-200/60"
                style={{ transform: "rotate(-2deg)" }}
              >
                <img
                  src="/assets/images/ditto/edit-ditto-in-shakespeare.png"
                  alt="Shakespeare AI IDE"
                  className="w-full h-auto"
                />
              </div>

              {/* Front -- Ditto DJ theme (desktop) */}
              <div
                className="absolute bottom-0 left-[2%] w-[75%] rounded-2xl shadow-2xl overflow-hidden ring-2 ring-violet-200/60 z-10"
                style={{ transform: "rotate(-1.5deg)" }}
              >
                <img
                  src="/assets/images/ditto/dj-desktop.png"
                  alt="Ditto DJ theme"
                  className="w-full h-auto"
                />
              </div>
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
            <div className="relative h-[380px] md:h-[460px]">
              {/* Back row */}
              <div
                className="absolute top-0 right-0 w-[48%] rounded-xl shadow-xl overflow-hidden ring-2 ring-violet-200/60"
                style={{ transform: "rotate(2deg)" }}
              >
                <img
                  src="/assets/images/ditto/profiles/gamer.png"
                  alt="Gamer theme"
                  className="w-full aspect-[867/918] object-cover"
                />
              </div>
              <div
                className="absolute top-8 left-0 w-[48%] rounded-xl shadow-xl overflow-hidden ring-2 ring-violet-200/60"
                style={{ transform: "rotate(-2deg)" }}
              >
                <img
                  src="/assets/images/ditto/profiles/alien.png"
                  alt="Alien theme"
                  className="w-full aspect-[867/918] object-cover"
                />
              </div>
              {/* Front row */}
              <div
                className="absolute bottom-4 left-[8%] w-[44%] rounded-xl shadow-2xl overflow-hidden ring-2 ring-violet-200/60 z-10"
                style={{ transform: "rotate(-3deg)" }}
              >
                <img
                  src="/assets/images/ditto/profiles/kawaii.png"
                  alt="Kawaii theme"
                  className="w-full aspect-[867/918] object-cover"
                />
              </div>
              <div
                className="absolute bottom-0 right-[5%] w-[44%] rounded-xl shadow-2xl overflow-hidden ring-2 ring-violet-200/60 z-10"
                style={{ transform: "rotate(2.5deg)" }}
              >
                <img
                  src="/assets/images/ditto/profiles/hacker.png"
                  alt="Hacker theme"
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
                <Link to="/tools/ditto">
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
                <Link to="/tools/shakespeare">
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
                {["Censorship-resistant communication", "Direct Bitcoin support via Lightning", "Built on Nostr -- no server to shut down"].map((item) => (
                  <div key={item} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 shrink-0" />
                    {item}
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
      {/* 3. NOT BIG TECH -- Dark Manifesto                                */}
      {/* ================================================================ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Not Big Tech.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We build software that serves people, not shareholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-azure/20 rounded-xl flex items-center justify-center mb-5">
                <Code className="h-6 w-6 text-azure" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Open Source</h3>
              <p className="text-gray-400 leading-relaxed">
                All our code is public. No black boxes, no proprietary lock-in.
                Anyone can read, copy, and improve our work.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-5">
                <Eye className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">No Data Mining</h3>
              <p className="text-gray-400 leading-relaxed">
                We never sell user data. No ads, no tracking, no algorithms
                designed to keep you scrolling. Period.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-5">
                <Globe className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Decentralized</h3>
              <p className="text-gray-400 leading-relaxed">
                No central server. No corporate gatekeeper. Your identity and
                data live on a network no one controls.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-5">
                <ShieldOff className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Censorship Resistant</h3>
              <p className="text-gray-400 leading-relaxed">
                Built to withstand government censorship. If a relay bans you,
                use another. Your voice can't be silenced.
              </p>
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
      {/* 4. BRIDGING THE WEB -- Visual                                    */}
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
