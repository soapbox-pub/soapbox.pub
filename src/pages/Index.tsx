import { ArrowRight, Code, Users, Globe, Rocket, Calendar, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RotatingText } from "@/components/RotatingText";
import { SoapboxLogo } from "@/components/SoapboxLogo";
import { SoapboxPostsSection } from "@/components/SoapboxPostsSection";
import { getLatestPost, formatDate } from "@/lib/blog/utils";
import { useSEO } from "@/hooks/useSEO";

export default function Index() {
  const latestPost = getLatestPost();
  
  // Set custom SEO for home page
  useSEO({
    title: 'Soapbox - Build Your Decentralized Platform',
    description: 'Create your own social platforms, communities, and applications with Soapbox\'s open-source toolkit. Tools for Nostr, ActivityPub, and the decentralized web.',
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

            {/* Right Column - Latest Blog Post */}
            {latestPost && (
              <div className="lg:pl-8">
                <div className="mb-4">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
                    Latest from Our Blog
                  </Badge>
                </div>
                <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-azure-200 bg-white/80 backdrop-blur">
                  <Link to={`/blog/${latestPost.slug}`}>
                    {latestPost.coverImage && (
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={latestPost.coverImage}
                          alt={latestPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={latestPost.date}>{formatDate(latestPost.date)}</time>
                      </div>
                      <CardTitle className="text-xl group-hover:text-azure transition-colors line-clamp-2">
                        {latestPost.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 line-clamp-3 mb-4">{latestPost.excerpt}</p>
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

            {/* MKStack */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-azure-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-display">MKStack</CardTitle>
                <CardDescription className="text-lg">Platform Framework</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Create custom social platforms and applications with our flexible framework. 
                  Powers Bookstr, Blobbi, and more.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                    Flexible architecture
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                    Rapid development
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                    Production-ready
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-violet-500 group-hover:text-white transition-colors" asChild>
                  <Link to="/mkstack">
                    Explore MKStack
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
              See Our Tools in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real platforms built by real people using Soapbox tools. These are examples of what you can build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ditto.pub */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-azure to-blue-600 relative overflow-hidden">
                <img 
                  src="/assets/images/ditto/ditto-phones.png" 
                  alt="Ditto platform on mobile devices"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-azure/70 to-blue-600/70"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2">Built with Ditto</Badge>
                  <h3 className="text-xl font-bold">Ditto.pub</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  The flagship Ditto community platform showcasing all features with custom themes, 
                  Lightning Zaps, and cross-platform connectivity.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">5,000+ users</span>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
                      Visit Platform
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Plektos */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-violet-500 to-purple-600 relative overflow-hidden">
                <img 
                  src="/assets/mkstack-apps/plektos-screenshot.png" 
                  alt="Plektos decentralized events platform"
                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/70 to-purple-600/70"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2">Built with MKStack</Badge>
                  <h3 className="text-xl font-bold">Plektos</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  A decentralized events app built with MKStack. Discover, create, and manage events 
                  on the Nostr network with seamless social integration.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Decentralized Events</span>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://plektos.app" target="_blank" rel="noopener noreferrer">
                      Visit Platform
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Treasures */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-500 to-emerald-600 relative overflow-hidden">
                <img 
                  src="/assets/mkstack-apps/treasures-screenshot.png" 
                  alt="Treasures platform screenshot"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/80 to-emerald-600/80"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2">Built with Stacks</Badge>
                  <h3 className="text-xl font-bold">Treasures</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Join the decentralized geocaching adventure powered by Nostr. Hide caches, find treasures, 
                  and connect with explorers worldwide. Join the quest!
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Nostr IRL</span>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://treasures.to" target="_blank" rel="noopener noreferrer">
                      Visit Platform
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

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