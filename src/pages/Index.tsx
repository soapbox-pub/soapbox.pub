import { ArrowRight, Code, Users, Globe, Rocket, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RotatingText } from "@/components/RotatingText";
import { SoapboxLogo } from "@/components/SoapboxLogo";
import { SoapboxPostsSection } from "@/components/SoapboxPostsSection";
import { AppShowcaseCard } from "@/components/AppShowcaseCard";
import { getFeaturedPost, formatDate } from "@/lib/blog/utils";
import { shuffleArray } from "@/lib/utils";
import { useSEO } from "@/hooks/useSEO";
import { useAppSubmissions } from "@/hooks/useAppSubmissions";
import { useMemo } from "react";

function FeaturedShowcaseApps() {
  const { data: submissions = [], isLoading } = useAppSubmissions();

  // Get only homepage apps, then randomly shuffle and select up to 6 for showcase
  const showcaseApps = useMemo(() => {
    const homepageApps = submissions.filter(app => app.isHomepage && !app.isHidden);

    // Shuffle homepage apps and take up to 6
    const shuffledApps = shuffleArray(homepageApps);

    return shuffledApps.slice(0, 6);
  }, [submissions]);

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-azure mx-auto mb-4"></div>
        <p className="text-gray-600">Loading showcase apps...</p>
      </div>
    );
  }

  if (showcaseApps.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 mb-6">
          Be the first to build something amazing with Soapbox tools and get featured on our homepage!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-azure hover:bg-azure-600 text-white" asChild>
            <Link to="/tools">
              Start Building
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/showcase">
              Submit Your App
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {showcaseApps.map((app) => (
        <AppShowcaseCard
          key={app.id}
          app={app}
          showModerationControls={false}
        />
      ))}
    </div>
  );
}

export default function Index() {
  const featuredPost = getFeaturedPost();

  // Set custom SEO for home page
  useSEO({
    title: 'Soapbox - Build Your Decentralized Platform',
    description: "Create your own social platforms, communities, and applications with Soapbox's open-source toolkit. Tools for Nostr, ActivityPub, and the decentralized web.",
    type: 'website',
    image: '/og-image.png',
    keywords: 'soapbox, nostr, decentralized, social media, open source, ditto, fediverse, activitypub, platform builder'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-azure-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Large Soapbox Logo */}
                <div className="flex justify-center lg:justify-start">
                  <div className="flex items-center space-x-4 drop-shadow-sm">
                    <SoapboxLogo size={80} className="drop-shadow-md" />
                    <span className="font-display font-bold text-5xl md:text-6xl bg-gradient-to-r from-azure to-blue-600 bg-clip-text text-transparent">Soapbox</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-azure-100 text-azure-700 border-azure-200">
                    🚀 Build the Decentralized Future
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 leading-tight">
                    Build Your{" "}
                    <RotatingText
                      words={[
                        { text: "Platform", color: "text-blue-600" },
                        { text: "Community", color: "text-purple-600" },
                        { text: "Protocol", color: "text-pink-600" },
                        { text: "Project", color: "text-orange-500" }
                      ]}
                      interval={2000}
                      className="font-display font-bold"
                    />
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    Soapbox creates tools that put the power back in your hands. Build your own platforms,
                    communities, and applications with our open-source toolkit.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-azure hover:bg-azure-600 text-white px-8 py-3 text-lg" asChild>
                  <Link to="/tools">
                    Explore Tools
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg" asChild>
                  <Link to="/showcase">View Showcase</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Featured Blog Post */}
            {featuredPost && (
              <div className="lg:pl-8">
                <div className="mb-4">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
                    ✨ Featured from Our Blog
                  </Badge>
                </div>
                <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-azure-200 bg-white/80 backdrop-blur">
                  <Link to={`/blog/${featuredPost.slug}`}>
                    {featuredPost.coverImage && (
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={featuredPost.coverImage}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={featuredPost.date}>{formatDate(featuredPost.date)}</time>
                        {featuredPost.author?.name && (
                          <>
                            <span>•</span>
                            <span>by {featuredPost.author.name}</span>
                          </>
                        )}
                      </div>
                      <CardTitle className="text-xl group-hover:text-azure transition-colors line-clamp-2">
                        {featuredPost.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 line-clamp-3 mb-4">{featuredPost.excerpt}</p>
                      <div className="flex items-center text-azure group-hover:text-azure-600 transition-colors">
                        <span className="text-sm font-medium">Read More</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Halloween Hackathon Announcement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 via-red-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="space-y-6">
            <div className="flex justify-center space-x-4 text-4xl animate-bounce">
              <span>🎃</span>
              <span>👻</span>
              <span>💀</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Halloween Hackathon 2025
            </h2>
            <p className="text-xl md:text-2xl text-orange-100">
              Build spooky apps with Shakespeare and win <span className="font-bold text-yellow-300">87,000 sats each</span> in three categories!
            </p>
            <p className="text-lg text-orange-200 max-w-2xl mx-auto">
              Our first monthly theme challenge is here! Create Halloween-themed applications
              and compete in three categories: Design, Function, and Judge's Choice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-3 font-semibold"
                asChild
              >
                <Link to="/halloween-hackathon">
                  🎃 Join the Hackathon
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-3"
                asChild
              >
                <Link to="/tools/shakespeare">
                  🎭 Start Building with Shakespeare
                </Link>
              </Button>
            </div>
            <div className="text-sm text-orange-200">
              Submissions close October 31st, 2025 • Winners announced November 8th
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="clients" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Empowering You to Build Freely
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              We're making powerful development tools accessible to everyone, advancing the future of user sovereignty and digital freedom.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-azure rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">100% Open Source</h3>
                <p className="text-sm text-gray-600">Complete transparency and freedom to run and modify</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Decentralized First</h3>
                <p className="text-sm text-gray-600">Built on Nostr and ActivityPub for true user ownership and censorship resistance</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Community Powered</h3>
                <p className="text-sm text-gray-600">Real platforms built by real people, proving decentralization works at scale</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See real people are using Soapbox tools to build their communities.
            </p>
          </div>

          <FeaturedShowcaseApps />

          <div className="text-center mt-16">
            <Button size="lg" className="bg-azure hover:bg-azure-600 text-white px-8 py-3 text-lg" asChild>
              <Link to="/showcase">
                View Full Showcase
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-azure-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Tools, Your Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From social platforms to AI development, our comprehensive suite of tools gives you
              everything you need to build and scale your vision.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Ditto */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-azure-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src="/assets/images/ditto/ditto-logo.png"
                    alt="Ditto logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-2xl font-display">Ditto</CardTitle>
                <CardDescription className="text-lg">Community Platform Builder</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Build decentralized, censorship-resistant communities on Nostr with built-in
                  monetization and customization.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                    Built-in Nostr relay
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                    Custom themes & branding
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                    Bitcoin Lightning integration
                  </div>
                </div>
                <Button className="w-full group-hover:bg-azure group-hover:text-white transition-colors" asChild>
                  <Link to="/tools/ditto">
                    Build Your Community
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Shakespeare */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-azure-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src="/assets/blog/announcing-shakespeare/shakespeare-logo.png"
                    alt="Shakespeare logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-2xl font-display">Shakespeare</CardTitle>
                <CardDescription className="text-lg">AI Website Builder</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Build websites and applications with AI in your browser. No downloads,
                  any AI provider, complete freedom and control.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    Local file storage
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    Any AI provider
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                    Git integration
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-yellow-500 group-hover:text-white transition-colors" asChild>
                  <Link to="/tools/shakespeare">
                    Start Building
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* NostrHub */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src="/assets/images/nostrhub-logo.png"
                    alt="NostrHub logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="text-2xl font-display">NostrHub</CardTitle>
                <CardDescription className="text-lg">NIP Explorer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Explore and understand Nostr Improvement Proposals (NIPs) with our comprehensive
                  database and tools for developers.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Complete NIP database
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Developer tools
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    Implementation guides
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-purple-500 group-hover:text-white transition-colors" asChild>
                  <Link to="/tools/nostrhub">
                    Explore NIPs
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
              <Link to="/tools">
                View All Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Building Bridges Across the Decentralized Web */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Building Bridges Across the Decentralized Web
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting communities across Nostr, ActivityPub, and Bluesky with Mostr
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold">ActivityPub Bridge</h3>
              <p className="text-gray-600">
                Follow and interact with users across Nostr, Mastodon, Pleroma, Misskey, and other
                ActivityPub platforms seamlessly.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-sky-500 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold">Bluesky Integration</h3>
              <p className="text-gray-600">
                Connect with Bluesky users through our bridge integration with Bridgy Fed,
                expanding your social network across protocols.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold">Lightning Payments</h3>
              <p className="text-gray-600">
                Send Bitcoin Lightning "zaps" across networks, enabling monetization and
                micropayments between different platforms.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Search Across the Decentralized Web
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Use Mostr.pub to find and connect with users across all supported networks
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg" asChild>
                <a href="https://mostr.pub" target="_blank" rel="noopener noreferrer">
                  Search on Mostr.pub
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts from Soapbox */}
      <SoapboxPostsSection />

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-azure to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Ready to Start Building?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Choose your tool, start your project, and join the community of builders creating the decentralized future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg" asChild>
              <Link to="/tools">Explore Tools</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-azure" asChild>
              <Link to="/showcase">View Examples</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}