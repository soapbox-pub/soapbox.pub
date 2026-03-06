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
  Shield,
  Heart,
  Zap,
  Lock,
  Server,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

/** Profile theme data for the showcase collage. */
const themes = [
  { name: "Kawaii", src: "/assets/images/ditto/profiles/kawaii.png", rotate: "-3deg", color: "from-pink-400 to-pink-200" },
  { name: "Grunge", src: "/assets/images/ditto/profiles/grunge.png", rotate: "2deg", color: "from-purple-900 to-gray-800" },
  { name: "Gamer", src: "/assets/images/ditto/profiles/gamer.png", rotate: "-1deg", color: "from-green-500 to-emerald-900" },
  { name: "MS Paint", src: "/assets/images/ditto/profiles/mspaint.png", rotate: "3deg", color: "from-blue-400 to-sky-200" },
  { name: "Retro Pop", src: "/assets/images/ditto/profiles/retropop.png", rotate: "-2deg", color: "from-purple-400 to-violet-300" },
  { name: "Solarpunk", src: "/assets/images/ditto/profiles/solarpunk.png", rotate: "1deg", color: "from-green-700 to-lime-500" },
  { name: "Bubblegum", src: "/assets/images/ditto/profiles/bubblegum.png", rotate: "-1.5deg", color: "from-pink-500 to-fuchsia-300" },
  { name: "Hiker", src: "/assets/images/ditto/profiles/hiker.png", rotate: "2.5deg", color: "from-amber-700 to-yellow-500" },
];

/** Content types Ditto supports. */
const contentTypes = [
  { name: "Posts", icon: MessageSquare, description: "5000 char posts with emoji reactions, zaps, and quote posts" },
  { name: "Articles", icon: Newspaper, description: "Long-form writing powered by Inkwell" },
  { name: "Vines", icon: Video, description: "Short videos via diVine" },
  { name: "Livestreams", icon: Radio, description: "Live streaming via zap.stream" },
  { name: "Polls", icon: BarChart3, description: "Community polls via Pollerama" },
  { name: "Follow Packs", icon: Users, description: "Curated follow lists to share" },
  { name: "Webxdc", icon: Gamepad2, description: "Sandboxed mini-apps and games inside posts" },
  { name: "Treasures", icon: Map, description: "Real-world geocaching on Nostr" },
  { name: "Magic Decks", icon: Puzzle, description: "MTG deck lists via Surveil" },
  { name: "Events", icon: CalendarDays, description: "Community events and meetups" },
  { name: "Photos", icon: ImageIcon, description: "Instagram-style image sharing" },
  { name: "Music", icon: Music, description: "Share and discover tracks" },
  { name: "Podcasts", icon: Podcast, description: "Podcast episodes in your feed" },
  { name: "Books", icon: BookOpen, description: "Book reviews and discussions" },
  { name: "Emoji Packs", icon: Smile, description: "Custom emoji collections" },
  { name: "World", icon: Globe, description: "Comment on countries with Agora" },
];

/** Connected apps and protocols. */
const connectedApps = [
  { name: "Bluesky", type: "bridge" },
  { name: "Mastodon", type: "bridge" },
  { name: "diVine", type: "nostr" },
  { name: "zap.stream", type: "nostr" },
  { name: "Inkwell", type: "nostr" },
  { name: "Pollerama", type: "nostr" },
  { name: "Treasures", type: "nostr" },
  { name: "Surveil", type: "nostr" },
  { name: "following.space", type: "nostr" },
  { name: "Espy", type: "nostr" },
  { name: "EmojiVerse", type: "nostr" },
  { name: "Nodecast", type: "nostr" },
  { name: "Cashu", type: "nostr" },
  { name: "Lightning", type: "nostr" },
  { name: "Shakespeare", type: "nostr" },
  { name: "Agora", type: "nostr" },
  { name: "Chorus", type: "nostr" },
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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column -- copy */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-violet-100 text-violet-700 border-violet-200"
                >
                  Fun Social Media
                </Badge>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    Ditto
                  </span>
                </h1>

                <p className="text-2xl md:text-3xl font-display font-semibold text-gray-800">
                  Your content. Your vibe. Your rules.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  A social platform for people who want to have fun, not feed
                  the Big Tech machine. Open source, decentralized, and entirely
                  yours to customize and build upon.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
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
                    href="https://docs.ditto.pub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Read the Docs
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  Open Source
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  Static Deploy
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  No Sign-up Required
                </div>
              </div>
            </div>

            {/* Right column -- dynamic theme collage */}
            <div className="relative h-[420px] md:h-[520px] lg:h-[560px]">
              {/* Back row */}
              <div
                className="absolute top-0 right-0 w-[55%] aspect-[3/4] rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/5"
                style={{ transform: "rotate(3deg)" }}
              >
                <img
                  src="/assets/images/ditto/profiles/gamer.png"
                  alt="Gamer theme profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div
                className="absolute top-12 left-0 w-[55%] aspect-[3/4] rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/5"
                style={{ transform: "rotate(-2deg)" }}
              >
                <img
                  src="/assets/images/ditto/profiles/solarpunk.png"
                  alt="Solarpunk theme profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Front row */}
              <div
                className="absolute bottom-8 left-[10%] w-[50%] aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5 z-10"
                style={{ transform: "rotate(-3deg)" }}
              >
                <img
                  src="/assets/images/ditto/profiles/kawaii.png"
                  alt="Kawaii theme profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div
                className="absolute bottom-0 right-[5%] w-[50%] aspect-[3/4] rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5 z-10"
                style={{ transform: "rotate(2deg)" }}
              >
                <img
                  src="/assets/images/ditto/profiles/grunge.png"
                  alt="Grunge theme profile"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
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
              Express yourself.{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Not your algorithm.
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create custom themes with colors, background images, and fonts.
              Share your theme on your profile, browse others' creations, and
              make your timeline look and feel like <em>you</em>.
            </p>
          </div>

          {/* Dynamic collage grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {themes.map((theme) => (
              <div
                key={theme.name}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:z-10 hover:scale-[1.03]"
                style={{ transform: `rotate(${theme.rotate})` }}
              >
                <img
                  src={theme.src}
                  alt={`${theme.name} theme`}
                  className="w-full aspect-[3/4] object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 pt-10">
                  <span className="text-white font-semibold text-sm drop-shadow-lg">
                    {theme.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm">
            Kawaii, Grunge, Gamer, MS Paint, Retro Pop, Solarpunk, Bubblegum,
            Hiker -- and thousands more created by the community.
          </p>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 3. INFINITE CONTENT TYPES                                          */}
      {/* ================================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Infinite Content Types.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ditto is a playground. Way more than text posts -- discover
              articles, short videos, livestreams, polls, games, geocaching,
              music, and so much more.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {contentTypes.map(({ name, icon: Icon, description }) => (
              <Card
                key={name}
                className="border hover:border-violet-300 transition-colors group"
              >
                <CardContent className="p-4 flex flex-col items-start gap-2">
                  <div className="w-10 h-10 bg-violet-100 group-hover:bg-violet-200 rounded-lg flex items-center justify-center transition-colors">
                    <Icon className="h-5 w-5 text-violet-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm">
            Each content type can be toggled on or off. You decide what you see.
          </p>
        </div>
      </section>

      {/* ================================================================== */}
      {/* 4. COMMENT ON ANYTHING                                             */}
      {/* ================================================================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-violet-100 text-violet-700 border-violet-200"
                >
                  Nostalgia-maxxing
                </Badge>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
                  Comment on{" "}
                  <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    anything.
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Posts. Countries. Links. Profiles. Books. Treasures. If it
                  exists, you can discuss it. Write on your friends' walls.
                  Start Top 8 drama. The internet is fun again.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Wall Posts", desc: "Write on your friends' walls like it's 2006" },
                  { label: "URLs", desc: "Comment on any link on the web" },
                  { label: "Countries", desc: "Discuss places with Agora" },
                  { label: "Profiles", desc: "Leave notes on anyone's page" },
                  { label: "Books", desc: "Review and discuss any book" },
                  { label: "Reactions", desc: "Reply to emoji reactions" },
                ].map((item) => (
                  <div key={item.label} className="space-y-1">
                    <h4 className="font-semibold text-gray-900 text-sm">
                      {item.label}
                    </h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5">
                <img
                  src="/assets/images/ditto/wall-posts.png"
                  alt="Wall posts in Ditto -- write on your friends' profiles"
                  className="w-full h-auto"
                />
              </div>
            </div>
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
                Open Web
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No more managing separate accounts for every new platform. Ditto
              connects to <strong>Bluesky</strong>, <strong>Mastodon</strong>,
              and a growing universe of <strong>Nostr</strong> apps. Ditto is
              your homebase on the indie web.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {connectedApps.map((app) => (
              <span
                key={app.name}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  app.type === "bridge"
                    ? "bg-violet-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-violet-300 hover:text-violet-700 shadow-sm"
                }`}
              >
                {app.name}
              </span>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-md bg-white">
              <CardContent className="p-8 space-y-3">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto">
                  <Globe className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="font-semibold text-lg">Cross-Protocol</h3>
                <p className="text-gray-600 text-sm">
                  See content from Bluesky and Mastodon users right in your
                  feed, and they can see yours.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md bg-white">
              <CardContent className="p-8 space-y-3">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto">
                  <Zap className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="font-semibold text-lg">Lightning Native</h3>
                <p className="text-gray-600 text-sm">
                  Zap with Bitcoin Lightning and Cashu. Real money, real
                  appreciation, no intermediary.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-md bg-white">
              <CardContent className="p-8 space-y-3">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto">
                  <Lock className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="font-semibold text-lg">Private Messages</h3>
                <p className="text-gray-600 text-sm">
                  End-to-end encrypted DMs built in. Your conversations stay
                  between you and the people you trust.
                </p>
              </CardContent>
            </Card>
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
                  We don't control your Ditto account. Your identity, your
                  content, your connections -- they belong to you. No platform
                  lock-in, no hostage data. Leave anytime and take everything
                  with you.
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
                  Ditto is open source, free software -- anyone can copy,
                  improve, and build on our work. Built on the free and open
                  Nostr protocol, the project belongs to everyone.
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
                  Community servers keep things decentralized.
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
            {/* iPad showcase */}
            <div className="relative h-[400px] md:h-[480px] order-2 lg:order-1">
              <div
                className="absolute top-0 left-[5%] w-[65%] rounded-2xl shadow-xl overflow-hidden ring-1 ring-black/5"
                style={{ transform: "rotate(-2deg)" }}
              >
                <img
                  src="/assets/images/ditto/ipads/paint-ipad.png"
                  alt="MS Paint theme on tablet"
                  className="w-full h-auto"
                />
              </div>
              <div
                className="absolute bottom-0 right-[5%] w-[60%] rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5 z-10"
                style={{ transform: "rotate(2deg)" }}
              >
                <img
                  src="/assets/images/ditto/ipads/solarpunk-ipad.png"
                  alt="Solarpunk theme on tablet"
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

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-violet-600 border-violet-300 hover:bg-violet-50"
                  asChild
                >
                  <a
                    href="https://docs.ditto.pub/guides/self-hosting"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Self-Hosting Guide
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://github.com/ectosquad/ditto"
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
                href="https://docs.ditto.pub"
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
