import {
  ArrowRight,
  ExternalLink,
  Code,
  Palette,
  MessageSquare,
  Newspaper,
  Video,
  Radio,
  BarChart3,
  Users,
  Gamepad2,
  Map,
  BookOpen,
  Music,
  Podcast,
  Smile,
  Globe,
  ImageIcon,
  CalendarDays,
  Puzzle,
  Paintbrush,
  Shield,
  Heart,
  Zap,
  Link2,
  Search,
  Server,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

/** Profile theme data for the showcase grid (none should overlap with hero collage images). */
const themes = [
  { name: "Gamer", src: "/assets/images/ditto/profiles/gamer.png", rotate: "-1deg" },
  { name: "MS Paint", src: "/assets/images/ditto/profiles/mspaint.png", rotate: "2deg" },
  { name: "Retro Pop", src: "/assets/images/ditto/profiles/retropop.png", rotate: "-2deg" },
  { name: "Bubblegum", src: "/assets/images/ditto/profiles/bubblegum.png", rotate: "1.5deg" },
  { name: "Midnight", src: "/assets/images/ditto/profiles/midnight.png", rotate: "-1.5deg" },
  { name: "Hiker", src: "/assets/images/ditto/profiles/hiker.png", rotate: "2deg" },
  { name: "Hacker", src: "/assets/images/ditto/profiles/hacker.png", rotate: "-2.5deg" },
  { name: "Clackophile", src: "/assets/images/ditto/profiles/clackophile.png", rotate: "1deg" },
  { name: "DJ", src: "/assets/images/ditto/profiles/dj.png", rotate: "-1deg" },
  { name: "Podcast", src: "/assets/images/ditto/profiles/podcast.png", rotate: "3deg" },
  { name: "Rubik's", src: "/assets/images/ditto/profiles/rubiks.png", rotate: "-3deg" },
  { name: "Cottage", src: "/assets/images/ditto/profiles/mk-cottage.png", rotate: "2.5deg" },
  { name: "Synthwave", src: "/assets/images/ditto/profiles/derek.png", rotate: "-1.5deg" },
  { name: "Cathedral", src: "/assets/images/ditto/profiles/chad.png", rotate: "1deg" },
  { name: "Halloween", src: "/assets/images/ditto/profiles/alex.png", rotate: "-2deg" },
];

/** Content types Ditto supports. Each has a screenshot image and a link to the corresponding tab on ditto.pub. */
const contentTypes = [
  { name: "World", icon: Globe, image: "/assets/images/ditto/content/world.png", href: "https://ditto.pub/world" },
  { name: "Color Moments", icon: Paintbrush, image: "/assets/images/ditto/content/color-moments.png", href: "https://ditto.pub/colors" },
  { name: "Emoji Packs", icon: Smile, image: "/assets/images/ditto/content/emoji-packs.png", href: "https://ditto.pub/emojis" },
  { name: "Books", icon: BookOpen, image: "/assets/images/ditto/content/books.png", href: "https://ditto.pub/books" },
  { name: "Podcasts", icon: Podcast, image: "/assets/images/ditto/content/podcasts.png", href: "https://ditto.pub/podcasts" },
  { name: "Music", icon: Music, image: "/assets/images/ditto/content/music.png", href: "https://ditto.pub/music" },
  { name: "Photos", icon: ImageIcon, image: "/assets/images/ditto/content/photos.png", href: "https://ditto.pub/photos" },
  { name: "Events", icon: CalendarDays, image: "/assets/images/ditto/content/events.png", href: "https://ditto.pub/events" },
  { name: "Magic Decks", icon: Puzzle, image: "/assets/images/ditto/content/magic-decks.png", href: "https://ditto.pub/decks" },
  { name: "Treasures", icon: Map, image: "/assets/images/ditto/content/treasures.png", href: "https://ditto.pub/treasures" },
  { name: "Webxdc", icon: Gamepad2, image: "/assets/images/ditto/content/webxdc.png", href: "https://ditto.pub/webxdc" },
  { name: "Follow Packs", icon: Users, image: "/assets/images/ditto/content/follow-packs.png", href: "https://ditto.pub/packs" },
  { name: "Polls", icon: BarChart3, image: "/assets/images/ditto/content/polls.png", href: "https://ditto.pub/polls" },
  { name: "Livestreams", icon: Radio, image: "/assets/images/ditto/content/livestreams.png", href: "https://ditto.pub/videos" },
  { name: "Vines", icon: Video, image: "/assets/images/ditto/content/vines.png", href: "https://ditto.pub/vines" },
  { name: "Articles", icon: Newspaper, image: "/assets/images/ditto/content/articles.png", href: "https://ditto.pub/articles" },
  { name: "Posts", icon: MessageSquare, image: "/assets/images/ditto/content/posts.png", href: "https://ditto.pub/" },
];



export default function Ditto() {
  useSEO({
    title: "Ditto - Fun Social Media | Open Source Nostr Client",
    description:
      "A social platform for people who want to have fun, not feed the Big Tech machine. Open source, decentralized, and entirely yours to customize and build upon.",
    type: "website",
    image: "/assets/images/ditto/ditto2-og.gif",
    keywords:
      "ditto, nostr, social media, custom themes, decentralized, open source, fun, self-expression, nostr client, bluesky bridge, mastodon bridge",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Ditto",
      description:
        "A social platform for people who want to have fun, not feed the Big Tech machine. Open source, decentralized, and entirely yours to customize and build upon.",
      applicationCategory: "Social Networking",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Organization",
        name: "Soapbox",
      },
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      <Navigation />

      {/* ================================================================== */}
      {/* 1. HERO                                                            */}
      {/* ================================================================== */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Centered title block */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-8xl md:text-9xl font-display font-bold text-gray-900">
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Ditto
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-display font-semibold text-gray-800">
              Your content. Your vibe. Your rules.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
              A social platform for people who want to have fun, not feed
              the Big Tech machine. Open source, decentralized, and entirely
              yours to customize and build upon.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 text-lg"
                asChild
              >
                <a
                  href="https://ditto.pub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Launch Ditto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 text-lg"
                asChild
              >
                <a
                  href="https://about.ditto.pub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Read the Docs
                </a>
              </Button>
            </div>
          </div>

          {/* First row of app store screenshots (1-4) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }, (_, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5"
              >
                <img
                  src={`/assets/images/ditto/appstore/${i + 1}.png`}
                  alt={`Ditto screenshot ${i + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 2. THEME SHOWCASE -- "Express Yourself"                            */}
      {/* ================================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              The old internet{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                IS&nbsp;BACK.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create custom themes with colors, background images, and fonts.
              Share your theme on your profile, browse others' creations, and
              make your timeline look and feel like <em>you</em>.
            </p>
          </div>

          {/* Dynamic collage grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-5">
            {themes.map((theme, i) => (
              <div
                key={theme.name}
                className={`group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl ring-2 ring-violet-200/60 transition-all duration-300 hover:z-10 hover:scale-[1.03]${i >= 4 ? " hidden sm:block" : ""}`}
                style={{ transform: `rotate(${theme.rotate})` }}
              >
                <img
                  src={theme.src}
                  alt={`${theme.name} theme`}
                  className="w-full aspect-[867/918] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. INFINITE CONTENT TYPES                                          */}
      {/* ================================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 to-purple-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Infinite Content Types.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ditto is a playground. Way more than text posts -- discover
              articles, short videos, livestreams, polls, games, geocaching,
              music, and so much more.
            </p>
          </div>
        </div>

        {/* Infinite marquee carousel */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-violet-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-purple-50 to-transparent z-10" />

          <div
            className="flex gap-5 pb-6 w-max animate-marquee hover:[animation-play-state:paused]"
            style={{ animationDuration: "80s" }}
          >
            {/* Render items twice for seamless loop */}
            {[...contentTypes, ...contentTypes].map(({ name, image, href }, i) => (
              <a key={`${name}-${i}`} href={href} target="_blank" rel="noopener noreferrer" className="shrink-0 w-[340px] group">
                <div className="rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-white ring-1 ring-black/5 group-hover:ring-violet-300">
                  <div className="relative aspect-[3/4] bg-gradient-to-br from-violet-100 to-purple-100 overflow-hidden">
                    <img
                      src={image}
                      alt={`${name} in Ditto`}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />

                  </div>
                </div>
                <p className="mt-3 text-base font-semibold text-gray-900 text-center">{name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. APP STORE SCREENSHOTS (5-8)                                     */}
      {/* ================================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }, (_, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden shadow-lg ring-1 ring-black/5"
              >
                <img
                  src={`/assets/images/ditto/appstore/${i + 5}.png`}
                  alt={`Ditto screenshot ${i + 5}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 5. BRIDGE TO THE OPEN WEB                                          */}
      {/* ================================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              A Bridge to the{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Open&nbsp;Web
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ditto connects three decentralized protocols so your followers
              can find you no matter what network they're on. One account,
              three networks, zero lock-in.
            </p>
          </div>

          {/* Three protocol cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Nostr */}
            <Card className="border-0 shadow-md bg-white overflow-hidden">
              <div className="h-1.5 bg-violet-600" />
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Nostr</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your home protocol. Cryptographic keys give you an identity
                  no one can take away -- no server lock-in, no corporate
                  gatekeeper. Your posts live across a decentralized network
                  of relays.
                </p>
                <a
                  href="/blog/comparing-protocols"
                  className="inline-flex items-center text-sm font-medium text-violet-600 hover:text-violet-800"
                >
                  How Nostr compares
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </a>
              </CardContent>
            </Card>

            {/* Mastodon / Fediverse via Mostr */}
            <Card className="border-0 shadow-md bg-white overflow-hidden">
              <div className="h-1.5 bg-[#6364ff]" />
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-[#6364ff]/10 rounded-xl flex items-center justify-center">
                  <Link2 className="h-6 w-6 text-[#6364ff]" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">
                  Mastodon{" "}
                  <span className="text-sm font-normal text-gray-500">
                    via Mostr
                  </span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The{" "}
                  <a href="https://mostr.pub" target="_blank" rel="noopener noreferrer" className="text-[#6364ff] hover:underline font-medium">Mostr Bridge</a>{" "}
                  translates between Nostr and ActivityPub in real time.
                  Follow and interact with users on Mastodon, Pleroma,
                  Misskey, and the entire Fediverse -- right from Ditto.
                </p>
                <a
                  href="/blog/mostr-fediverse-nostr-bridge"
                  className="inline-flex items-center text-sm font-medium text-[#6364ff] hover:text-[#4f50cc]"
                >
                  Learn about Mostr
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </a>
              </CardContent>
            </Card>

            {/* Bluesky via Bridgy Fed */}
            <Card className="border-0 shadow-md bg-white overflow-hidden">
              <div className="h-1.5 bg-[#0085ff]" />
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-[#0085ff]/10 rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-[#0085ff]" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">
                  Bluesky{" "}
                  <span className="text-sm font-normal text-gray-500">
                    via Bridgy Fed
                  </span>
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bluesky users opt in through{" "}
                  <a href="https://fed.brid.gy/docs" target="_blank" rel="noopener noreferrer" className="text-[#0085ff] hover:underline font-medium">Bridgy Fed</a>,
                  and their posts flow into Ditto through the Mostr Bridge.
                  Follow Bluesky accounts right from your feed -- no extra
                  apps needed.
                </p>
                <a
                  href="/blog/follow-bluesky"
                  className="inline-flex items-center text-sm font-medium text-[#0085ff] hover:text-[#006acc]"
                >
                  Follow Bluesky users
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </a>
              </CardContent>
            </Card>
          </div>

          {/* CTA box */}
          <div className="bg-gradient-to-r from-violet-100/80 to-purple-100/80 rounded-2xl p-8 border border-violet-200 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
              Search Across the Decentralized Web
            </h3>
            <p className="text-gray-600 mb-6">
              Use Mostr.pub to find and connect with anyone on Nostr,
              Mastodon, or Bluesky.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-white"
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
                <a href="/blog/comparing-protocols">
                  Compare Protocols
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 6. FUN REQUIRES FREEDOM                                            */}
      {/* ================================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              What makes Ditto different?
            </h2>
            <p className="text-xl text-gray-600">
              Because we think{" "}
              <strong className="text-violet-600">Fun</strong> requires{" "}
              <strong className="text-violet-600">Freedom</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-violet-100 hover:border-violet-300 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  You own your data
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't control your Ditto account.{" "}
                  <a href="https://about.ditto.pub/learn/what-is-nostr" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">Your identity</a>,
                  your content, your connections -- they belong to you. No
                  platform lock-in, no hostage data. Leave anytime and take
                  everything with you.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-violet-100 hover:border-violet-300 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center">
                  <Heart className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  The community owns the project
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ditto is{" "}
                  <a href="https://gitlab.com/soapbox-pub/ditto" target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:underline">open source</a>,
                  free software -- anyone can copy, improve, and build on our
                  work. Built on the free and open Nostr protocol, the project
                  belongs to everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-violet-100 hover:border-violet-300 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 bg-pink-600 rounded-2xl flex items-center justify-center">
                  <Zap className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  No Big Tech
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  No central corporation controlling the data. No ads, no data
                  mining, no tracking, no algorithms you're forced into.
                  Community servers keep things decentralized. Read our{" "}
                  <a href="https://soapbox.pub/ethics/" className="text-violet-600 hover:underline">ethics pledge</a>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 7. MADE FOR HACKING                                                */}
      {/* ================================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-violet-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Shakespeare screenshot */}
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5">
                <img
                  src="/assets/images/ditto/edit-ditto-in-shakespeare.png"
                  alt="Editing Ditto themes in Shakespeare AI"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-violet-100 text-violet-700 border-violet-200"
                >
                  Self-Hosting
                </Badge>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                  Made for{" "}
                  <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    hacking on.
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ditto is open source and designed to work with tools like
                  Shakespeare so you can fully control and customize your
                  platform beyond themes. Add new features, change your feed,
                  or completely redesign the UI.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ditto builds to static files. Deploy it on a $5 VPS, GitHub
                  Pages, Netlify, or a Raspberry Pi in your closet. One config
                  file. Your domain. Your community.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto">
                    <Server className="h-5 w-5 text-violet-600" />
                  </div>
                  <p className="text-xs font-medium text-gray-700">
                    Static Files
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto">
                    <Wrench className="h-5 w-5 text-violet-600" />
                  </div>
                  <p className="text-xs font-medium text-gray-700">
                    One Config
                  </p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto">
                    <Palette className="h-5 w-5 text-violet-600" />
                  </div>
                  <p className="text-xs font-medium text-gray-700">
                    Full Control
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-violet-600 hover:bg-violet-700 text-white"
                  asChild
                >
                  <a
                    href="https://shakespeare.diy/clone?url=https%3A%2F%2Fgitlab.com%2Fsoapbox-pub%2Fditto.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Palette className="mr-2 h-4 w-4" />
                    Edit with Shakespeare
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-violet-600 border-violet-300 hover:bg-violet-50"
                  asChild
                >
                  <a
                    href="https://about.ditto.pub/guides/self-hosting"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Self-Hosting Guide
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://gitlab.com/soapbox-pub/ditto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code className="mr-2 h-4 w-4" />
                    View Source
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 8. FINAL CTA                                                       */}
      {/* ================================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Ready?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            No email. No phone number. Just you and a Nostr key.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="px-8 py-3 text-lg bg-white text-violet-600 hover:bg-gray-100"
              asChild
            >
              <a
                href="https://ditto.pub"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Ditto
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-violet-600"
              asChild
            >
              <a
                href="https://about.ditto.pub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Read the Docs
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm opacity-80">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
              AGPL-3.0 Licensed
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
              Active Development
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
              Community Driven
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
