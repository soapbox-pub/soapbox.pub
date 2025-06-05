import { ArrowRight, Shield, Zap, Heart, Globe, MessageCircle, Coins, Palette, Code, ExternalLink, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Ditto() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-azure-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-azure-100 text-azure-700 border-azure-200">
                  🚀 Most Popular Tool
                </Badge>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-azure to-blue-600 bg-clip-text text-transparent">
                    Ditto
                  </span>
                </h1>
                <p className="text-2xl font-medium text-gray-700">
                  Build Your Own Decentralized Community Platform
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Create censorship-resistant communities on Nostr with built-in monetization, custom themes, 
                  and cross-platform compatibility. Start your revolution today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-azure hover:bg-azure-600 text-white px-8 py-3 text-lg">
                  Start Building Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Free & Open Source
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  No Setup Required
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Production Ready
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Video/Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-azure-100 to-blue-100 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <PlayCircle className="h-16 w-16 text-azure mx-auto" />
                  <p className="text-lg font-medium text-gray-700">Ditto Platform Demo</p>
                  <p className="text-sm text-gray-600">See how easy it is to build your community</p>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-4 right-4">
                <div className="bg-white rounded-xl shadow-lg p-4 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-azure">50+</div>
                    <div className="text-xs text-gray-600">Active Communities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">15K+</div>
                    <div className="text-xs text-gray-600">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-600">99.9%</div>
                    <div className="text-xs text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Everything You Need to Build Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ditto comes packed with powerful features designed to help you create thriving, 
              decentralized communities without the complexity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-azure-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-azure rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Censorship Resistant</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Built on Nostr protocol ensuring your community can never be deplatformed or censored by any authority.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-azure rounded-full mr-3"></div>
                    Decentralized infrastructure
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-azure rounded-full mr-3"></div>
                    Built-in relay server
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-azure rounded-full mr-3"></div>
                    Cross-relay compatibility
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-azure-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Complete Customization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Make it yours with unlimited themes, custom branding, and personalized user experiences.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-violet-600 rounded-full mr-3"></div>
                    Custom themes & CSS
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-violet-600 rounded-full mr-3"></div>
                    Logo & branding
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-violet-600 rounded-full mr-3"></div>
                    Domain mapping
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-azure-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Coins className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Built-in Monetization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Lightning Network integration for tips, subscriptions, and premium features out of the box.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                    Lightning tips
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                    Premium memberships
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                    Payment processing
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-azure-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Advanced Moderation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Powerful moderation tools to keep your community healthy while maintaining decentralization.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Content filtering
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    User management
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Automated rules
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-azure-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Cross-Platform Bridge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Connect with the broader fediverse through ActivityPub bridge integration.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Mastodon compatibility
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Cross-platform posting
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Wider reach
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-azure-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Lightning Fast Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Get your community up and running in minutes with our streamlined deployment process.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    One-click deployment
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Docker support
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Hosting included
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-azure-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Communities Built with Ditto
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real communities thriving on Ditto platform, proving the power of decentralized social networking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-azure-200 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-azure rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-medium text-gray-700">Ditto.pub</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Ditto.pub</h3>
                    <Badge variant="secondary">Official</Badge>
                  </div>
                  <p className="text-gray-600">
                    The flagship Ditto instance showcasing all platform capabilities with a thriving community.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>5,000+ members</span>
                    <Button variant="outline" size="sm">
                      Visit
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-violet-200 to-purple-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-medium text-gray-700">Henhouse.social</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Henhouse.social</h3>
                    <Badge variant="secondary">Community</Badge>
                  </div>
                  <p className="text-gray-600">
                    A welcoming community focused on thoughtful discussion and mutual support.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>2,500+ members</span>
                    <Button variant="outline" size="sm">
                      Visit
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-emerald-200 to-teal-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-medium text-gray-700">TechNostr</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">TechNostr</h3>
                    <Badge variant="secondary">Tech</Badge>
                  </div>
                  <p className="text-gray-600">
                    Developer-focused community discussing Nostr development, tools, and best practices.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>1,800+ members</span>
                    <Button variant="outline" size="sm">
                      Visit
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 py-3">
              View All Communities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch your decentralized community platform in minutes, not months.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-azure rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold">Choose Your Setup</h3>
              <p className="text-gray-600">
                Download Ditto, use our hosted solution, or deploy with Docker. 
                Pick the option that works best for your needs.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-violet-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold">Customize & Brand</h3>
              <p className="text-gray-600">
                Upload your logo, choose your colors, and configure your community settings. 
                Make it uniquely yours in minutes.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold">Launch & Grow</h3>
              <p className="text-gray-600">
                Invite your community, start conversations, and watch your platform grow. 
                Everything just works.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Learn More About Ditto
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deeper into Ditto's capabilities with our comprehensive guides and tutorials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <Badge>Getting Started</Badge>
                <h3 className="text-xl font-semibold">Setting Up Your First Ditto Community</h3>
                <p className="text-gray-600">A complete guide to deploying and configuring Ditto for your community.</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>5 min read</span>
                  <Button variant="ghost" size="sm">Read More</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <Badge>Advanced</Badge>
                <h3 className="text-xl font-semibold">Custom Themes and Branding Guide</h3>
                <p className="text-gray-600">Learn how to create stunning custom themes and perfect your community's look.</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>8 min read</span>
                  <Button variant="ghost" size="sm">Read More</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <Badge>Monetization</Badge>
                <h3 className="text-xl font-semibold">Enabling Lightning Payments</h3>
                <p className="text-gray-600">Set up Lightning Network integration to monetize your community.</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>10 min read</span>
                  <Button variant="ghost" size="sm">Read More</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">
                View All Blog Posts
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
            Ready to Build Your Community?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of community builders who chose freedom, decentralization, and true ownership.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-azure hover:bg-gray-100">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-azure">
              <Code className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              MIT Licensed
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Active Development
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Community Support
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}