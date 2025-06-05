import { ArrowRight, Code, Users, Globe, Rocket, Calendar, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RotatingText } from "@/components/RotatingText";
import { getRecentPosts, formatDate } from "@/lib/blog/utils";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-azure-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-azure-100 text-azure-700 border-azure-200">
                🚀 Build the Decentralized Future
              </Badge>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900 leading-tight">
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
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Soapbox creates tools that put the power back in your hands. Build your own platforms, 
                communities, and applications with our open-source toolkit.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Tools: Your Foundation
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
                    Build Community
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* MKstack */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-azure-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-display">MKstack</CardTitle>
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
                  <Link to="/tools/mkstack">
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
              <div className="h-48 bg-gradient-to-r from-azure to-blue-600 relative">
                <div className="absolute inset-0 bg-black/20"></div>
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
                  <Button variant="ghost" size="sm">
                    Visit Platform
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Bookstr */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-violet-500 to-purple-600 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2">Built with MKstack</Badge>
                  <h3 className="text-xl font-bold">Bookstr</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  A decentralized platform for book lovers to discover, review, and discuss literature 
                  with social reading features.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Social Reading</span>
                  <Button variant="ghost" size="sm">
                    Visit Platform
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Henhouse */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-pink-500 to-rose-600 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2">Built with Ditto</Badge>
                  <h3 className="text-xl font-bold">Henhouse.social</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  The first Nostr community specifically designed for women. A safe, welcoming space 
                  with custom moderation.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">1,200+ members</span>
                  <Button variant="ghost" size="sm">
                    Visit Platform
                    <ArrowRight className="ml-2 h-4 w-4" />
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

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-display font-bold text-gray-900">
                Introducing Mostr: The Universal Bridge
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mostr is our revolutionary bridge that connects different decentralized social networks together. 
                No longer are you limited to just one protocol - communicate seamlessly across Nostr, the Fediverse 
                (Mastodon, Pleroma, Misskey), and even Bluesky.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're on Nostr wanting to follow someone on Mastodon, or a Fediverse user curious about 
                Bluesky accounts, Mostr makes it possible. We're breaking down the walls between decentralized 
                platforms and creating a truly interconnected social web.
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-100">
                <div className="text-center space-y-6">
                  <div className="flex justify-center items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm">N</span>
                    </div>
                    <div className="text-2xl text-gray-400">⟷</div>
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm">F</span>
                    </div>
                    <div className="text-2xl text-gray-400">⟷</div>
                    <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm">B</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <div className="font-semibold mb-2">Connected Networks</div>
                    <div className="space-y-1">
                      <div>Nostr • Fediverse • Bluesky</div>
                      <div className="text-xs text-gray-500">All connected through Mostr</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold">Cross-Protocol Communication</h3>
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

      {/* Latest Blog Posts */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Latest from Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights, tutorials, and news from the Soapbox team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getRecentPosts(3).map((post) => (
              <Card key={post.slug} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
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
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                    </div>
                    <CardTitle className="text-xl group-hover:text-azure transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
              <Link to="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-azure to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Ready to Build Your{" "}
            <RotatingText
              words={[
                { text: "Platform?", color: "text-white" },
                { text: "Community?", color: "text-white" },
                { text: "Protocol?", color: "text-white" },
                { text: "Project?", color: "text-white" }
              ]}
              interval={2000}
              className="font-display font-bold"
            />
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