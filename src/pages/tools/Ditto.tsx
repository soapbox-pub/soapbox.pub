import { ArrowRight, Shield, Zap, Heart, Globe, MessageCircle, Coins, Palette, Code, ExternalLink, PlayCircle, Users, Search, Smartphone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Ditto() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-violet-100 text-violet-700 border-violet-200">
                  🪐 Decentralized Social Server
                </Badge>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    Ditto
                  </span>
                </h1>
                <p className="text-2xl font-medium text-gray-700">
                  Build Your Community on Nostr
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A Nostr server for building resilient communities online. Create your own decentralized, 
                  customizable social network that's free from ads, tracking, and censorship.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 text-lg" asChild>
                  <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
                    Try Ditto.pub
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
                  <a href="https://gitlab.com/soapbox-pub/ditto" target="_blank" rel="noopener noreferrer">
                    <Code className="mr-2 h-5 w-5" />
                    View on GitLab
                  </a>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  AGPL-3.0 Licensed
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Works with 50+ Mastodon Apps
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Production Ready
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-violet-100 to-purple-100">
                <img 
                  src="/assets/images/ditto/ditto-phones.png" 
                  alt="Ditto on various devices" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-4 right-4">
                <div className="bg-white rounded-xl shadow-lg p-4 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-600">15K+</div>
                    <div className="text-xs text-gray-600">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">6+</div>
                    <div className="text-xs text-gray-600">Live Communities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">99.9%</div>
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
              Everything You Need for Decentralized Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ditto combines the power of Nostr protocol with modern social features, 
              creating resilient communities that you actually own.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Built-in Nostr Relay</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Self-hostable Nostr relay built right into Ditto, ensuring your community data stays yours.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-violet-600 rounded-full mr-3"></div>
                    Decentralized by design
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-violet-600 rounded-full mr-3"></div>
                    No external dependencies
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-violet-600 rounded-full mr-3"></div>
                    Full data ownership
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Mastodon API Compatible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Works seamlessly with 50+ existing Mastodon apps including official apps, Tusky, and more.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    iOS & Android apps
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Desktop clients
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Browser extensions
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Lightning Zaps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Built-in Bitcoin Lightning support for instant tips and payments directly on profiles and posts.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                    Instant payments
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                    Creator monetization
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                    Optional zap splits
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Advanced Search & Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Powerful search filters, language detection, trending content, and an enhanced Explore tab.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Filter by media type
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Language-based filtering
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Trending discovery
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Complete Customization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Custom themes, branding, logos, and color schemes that work seamlessly across light and dark modes.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Custom CSS themes
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Logo & branding
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Dark mode support
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Advanced Moderation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Robust moderation tools with TypeScript policy plugins, spam filters, and admin controls.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-3"></div>
                    Custom policy scripts
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-3"></div>
                    Spam protection
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-3"></div>
                    User management
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real Communities */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Thriving Communities Built with Ditto
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real communities proving the power of decentralized social networking on Nostr.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="/assets/images/ditto/ditto-logo-transparent.png" 
                  alt="Ditto.pub logo" 
                  className="w-full h-full object-contain p-8 bg-gradient-to-br from-violet-500 to-purple-600"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Ditto.pub</h3>
                    <Badge variant="secondary" className="bg-violet-100 text-violet-700">Official</Badge>
                  </div>
                  <p className="text-gray-600">
                    The flagship Ditto community showcasing all platform capabilities with a thriving global community.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Open to all • Lightly moderated</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
                        Visit
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="/assets/images/henhouse-logo-white.png" 
                  alt="Henhouse.social logo" 
                  className="w-full h-full object-contain p-8 bg-gradient-to-br from-orange-500 to-pink-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Henhouse.social</h3>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-700">Women-Only</Badge>
                  </div>
                  <p className="text-gray-600">
                    The first Nostr community for women, building a safe space for thoughtful discussion and connection.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Apply to join</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://henhouse.social" target="_blank" rel="noopener noreferrer">
                        Visit
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="/assets/images/ditto/cobrafuma-padded.png" 
                  alt="Cobrafuma.com logo" 
                  className="w-full h-full object-contain bg-gradient-to-br from-green-600 to-emerald-600"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Cobrafuma.com</h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">Brazilian</Badge>
                  </div>
                  <p className="text-gray-600">
                    Uma comunidade brasileira florescente no Nostr. Conecte-se sem medo de censura.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Comunidade brasileira</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://cobrafuma.com" target="_blank" rel="noopener noreferrer">
                        Juntar
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="/assets/images/ditto/gleasonator-logo.png" 
                  alt="Gleasonator.dev logo" 
                  className="w-full h-full object-contain p-8 bg-gradient-to-br from-blue-500 to-cyan-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Gleasonator.dev</h3>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">Beta Testing</Badge>
                  </div>
                  <p className="text-gray-600">
                    Test the latest Ditto features before they launch to the public. For developers and early adopters.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Latest features</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://gleasonator.dev" target="_blank" rel="noopener noreferrer">
                        Join
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="/assets/images/ditto/seewaan-logo.png" 
                  alt="Seewaan.com logo" 
                  className="w-full h-full object-contain p-8 bg-gradient-to-br from-amber-500 to-orange-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Seewaan.com</h3>
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700">Arabic</Badge>
                  </div>
                  <p className="text-gray-600">
                    مشروع تواصل اجتماعي تطوعي بدون ازعاج الاعلانات والشركات
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>شبكة عربية</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://seewaan.com" target="_blank" rel="noopener noreferrer">
                        ينضم
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="/assets/images/ditto/cvrkut-logo.png" 
                  alt="Cvrkut.com logo" 
                  className="w-full h-full object-contain p-8 bg-gradient-to-br from-red-500 to-pink-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Cvrkut.com</h3>
                    <Badge variant="secondary" className="bg-red-100 text-red-700">Serbian</Badge>
                  </div>
                  <p className="text-gray-600">
                    Microblogging društvena mreža koja tvojim mislima daje glas. Cvrkući, poveži se i inspiriraj druge!
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Srpska zajednica</span>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://cvrkut.com" target="_blank" rel="noopener noreferrer">
                        Pridruži se
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 py-3" asChild>
              <a href="https://soapbox.pub/servers" target="_blank" rel="noopener noreferrer">
                View All Ditto Communities
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Release */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Latest Release: Ditto 1.3
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhanced discovery features, improved search, and better community tools.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-violet-100 text-violet-700 border-violet-200">
                  ✨ New in v1.3
                </Badge>
                <h3 className="text-3xl font-bold">All About Discovery</h3>
                <p className="text-lg text-gray-600">
                  From improved search and event fetching to a brand-new Explore tab, 
                  this release makes it easier than ever to find people, posts, and conversations 
                  across the Nostr network.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center">
                    <Sparkles className="h-5 w-5 text-violet-600 mr-2" />
                    New Explore Tab
                  </h4>
                  <p className="text-sm text-gray-600">
                    Streamlined way to browse trending content and discover new accounts
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center">
                    <Search className="h-5 w-5 text-violet-600 mr-2" />
                    Enhanced Search
                  </h4>
                  <p className="text-sm text-gray-600">
                    Better profile fetching and remote identifier lookup across relays
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center">
                    <Users className="h-5 w-5 text-violet-600 mr-2" />
                    User Streaks
                  </h4>
                  <p className="text-sm text-gray-600">
                    Track user engagement with streak counters and activity tracking
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center">
                    <Globe className="h-5 w-5 text-violet-600 mr-2" />
                    Better Translation
                  </h4>
                  <p className="text-sm text-gray-600">
                    Improved DeepL parsing and enhanced multilingual support
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white" asChild>
                  <a href="https://gitlab.com/soapbox-pub/ditto/-/releases" target="_blank" rel="noopener noreferrer">
                    View Release Notes
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="/assets/blog/ditto-1.3/ditto-1.3.png" 
                  alt="Ditto 1.3 features" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
              <div className="w-20 h-20 bg-violet-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold">Install Ditto</h3>
              <p className="text-gray-600">
                Download from GitLab, try Ditto.pub, or deploy with Docker. 
                Pick the option that works best for your needs.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center justify-center">
                  <Code className="h-4 w-4 mr-2" />
                  Requires Deno runtime
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold">Configure & Launch</h3>
              <p className="text-gray-600">
                Set your DITTO_NSEC environment variable, configure your community settings, 
                and start your server.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center justify-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Built-in relay included
                </div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold">Customize & Grow</h3>
              <p className="text-gray-600">
                Brand your community, set up moderation policies, and invite your users. 
                Everything works with existing Mastodon apps.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center justify-center">
                  <Smartphone className="h-4 w-4 mr-2" />
                  50+ compatible apps
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="px-8 py-3" asChild>
              <a href="https://docs.soapbox.pub/ditto/" target="_blank" rel="noopener noreferrer">
                Read Documentation
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Ready to Build Your Community?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join the growing network of independent communities powered by Ditto. 
            Own your data, control your community, connect with the decentralized web.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-violet-600 hover:bg-gray-100" asChild>
              <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
                Try Ditto.pub
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-violet-600" asChild>
              <a href="https://gitlab.com/soapbox-pub/ditto" target="_blank" rel="noopener noreferrer">
                <Code className="mr-2 h-5 w-5" />
                View Source Code
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              AGPL-3.0 Licensed
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Active Development
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Community Driven
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}