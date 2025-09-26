import { ArrowRight, Code, Users, Globe, Rocket, Calendar, FileText, ExternalLink, GitBranch, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RotatingText } from "@/components/RotatingText";
import { SoapboxLogo } from "@/components/SoapboxLogo";
import { SoapboxPostsSection } from "@/components/SoapboxPostsSection";
import { getFeaturedPost, formatDate } from "@/lib/blog/utils";
import { useSEO } from "@/hooks/useSEO";
import { useAppSubmissions } from "@/hooks/useAppSubmissions";

function FeaturedShowcaseApps() {
  const { data: submissions = [], isLoading } = useAppSubmissions();

  // Get featured apps and top 6 for showcase
  const featuredApps = submissions.filter(app => app.isFeatured && !app.isHidden);
  const approvedApps = submissions.filter(app => app.isApproved && !app.isFeatured && !app.isHidden);
  const showcaseApps = [...featuredApps, ...approvedApps].slice(0, 6);

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
          Be the first to build something amazing with Soapbox tools and submit it to our showcase!
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {showcaseApps.map((app) => {
        // Get a color scheme based on the app's first tag
        const getTagColor = (tags: string[]) => {
          if (tags.length === 0) return { bg: "bg-gray-600", border: "border-gray-200", gradient: "from-gray-500 to-gray-600" };

          const firstTag = tags[0].toLowerCase();
          if (firstTag.includes('social') || firstTag.includes('community')) return { bg: "bg-blue-600", border: "border-blue-200", gradient: "from-azure to-blue-600" };
          if (firstTag.includes('game') || firstTag.includes('gaming')) return { bg: "bg-purple-600", border: "border-purple-200", gradient: "from-violet-500 to-purple-600" };
          if (firstTag.includes('business') || firstTag.includes('commerce')) return { bg: "bg-green-600", border: "border-green-200", gradient: "from-green-500 to-emerald-600" };
          if (firstTag.includes('creative') || firstTag.includes('art')) return { bg: "bg-pink-600", border: "border-pink-200", gradient: "from-pink-500 to-rose-600" };
          if (firstTag.includes('crypto') || firstTag.includes('bitcoin')) return { bg: "bg-orange-600", border: "border-orange-200", gradient: "from-orange-500 to-amber-600" };
          if (firstTag.includes('tool') || firstTag.includes('utility')) return { bg: "bg-indigo-600", border: "border-indigo-200", gradient: "from-indigo-500 to-blue-600" };
          return { bg: "bg-azure", border: "border-azure-200", gradient: "from-azure to-blue-600" };
        };

        const colors = getTagColor(app.appTags);

        return (
          <Card key={app.pubkey + app.created_at} className={`group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:${colors.border}`}>
            <div className={`h-48 bg-gradient-to-r ${colors.gradient} relative overflow-hidden`}>
              <img
                src={app.screenshotUrl}
                alt={`${app.appName} screenshot`}
                className="absolute inset-0 w-full h-full object-cover opacity-90"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient}/70`}></div>
              <div className="absolute bottom-4 left-4 text-white">
                {app.isFeatured && (
                  <Badge className="bg-white/20 text-white border-white/30 mb-2">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
                <h3 className="text-xl font-bold">
                  {app.appName.length > 20 ? `${app.appName.slice(0, 20)}...` : app.appName}
                </h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-600 mb-4">
                {app.description.length > 120 ? `${app.description.slice(0, 120)}...` : app.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {app.appTags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {app.appTags.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{app.appTags.length - 2}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={app.websiteUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={`https://shakespeare.diy/clone?url=${encodeURIComponent(app.repositoryUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Clone with Shakespeare"
                    >
                      <GitBranch className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
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

      {/* Tools Section */}
      <section id="tools" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
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
                <div className="w-12 h-12 bg-gradient-to-r from-azure to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
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
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
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
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-white" />
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

      {/* Showcase Section */}
      <section id="clients" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-azure-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Empowering You to Build Freely
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Everything we build is open source and designed for the decentralized web. We're making powerful
              development tools accessible to everyone, advancing the future of user sovereignty and digital freedom.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-azure rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">100% Open Source</h3>
                <p className="text-sm text-gray-600">Complete transparency, community-driven development, and freedom to modify</p>
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
              See how our community is using Soapbox tools to build the next generation of platforms and applications.
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