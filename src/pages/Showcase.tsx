import { ArrowRight, ExternalLink, Users, BookOpen, Search, Code2, Globe, Server, Settings, Terminal, Wrench, Heart, Sparkles, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Showcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-azure-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="bg-azure-100 text-azure-700 border-azure-200 mb-6">
            🚀 Powered by Soapbox Technology
          </Badge>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            Apps & Platforms{" "}
            <span className="bg-gradient-to-r from-azure to-blue-600 bg-clip-text text-transparent">
              We've Built
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover live communities and applications built with Soapbox tools. 
            Each platform showcases the power of decentralized social media in action.
          </p>
        </div>
      </section>

      {/* Community Platforms & Apps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Featured Apps & Platforms</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real communities and applications built with Soapbox tools, each serving unique audiences 
              and use cases in production.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Ditto.pub */}
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-azure-200">
              <div className="h-64 bg-gradient-to-r from-azure to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-6 left-6">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    <Server className="w-3 h-3 mr-1" />
                    Flagship Platform
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Ditto.pub</h3>
                  <p className="text-white/90 text-lg">The flagship Ditto community</p>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-2xl"></div>
              </div>
              
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  The flagship Ditto platform showcasing the full power of our community-building tools. 
                  A vibrant social space with custom themes, Lightning Zaps, and seamless cross-platform connectivity.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                      Custom branding
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                      Lightning monetization
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                      Real-time updates
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                      ActivityPub bridge
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                      Advanced moderation
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                      Mobile responsive
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs bg-azure-50 text-azure-700 border-azure-200">Built with Ditto</Badge>
                    <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">Nostrify</Badge>
                    <Badge variant="outline" className="text-xs bg-gray-50 text-gray-700 border-gray-200">Rust</Badge>
                  </div>
                </div>
                
                <Button className="w-full bg-azure hover:bg-azure-600 text-white group" asChild>
                  <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
                    Visit Platform
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Bookstr */}
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-violet-200">
              <div className="h-64 bg-gradient-to-r from-violet-500 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-6 left-6">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    <BookOpen className="w-3 h-3 mr-1" />
                    Reading Community
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Bookstr</h3>
                  <p className="text-white/90 text-lg">Social reading on Nostr</p>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
              </div>
              
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  A decentralized platform for book lovers built with Soapbox tools. Share recommendations, 
                  join reading groups, and discover new literature in a social environment.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                      Book discovery
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                      Reading groups
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                      Reviews & ratings
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                      Social features
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                      Author connections
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                      Progress tracking
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs bg-violet-50 text-violet-700 border-violet-200">Built with MKStack</Badge>
                    <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">Nostrify</Badge>
                    <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">React</Badge>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white" asChild>
                  <a href="https://bookstr.xyz" target="_blank" rel="noopener noreferrer">
                    Join Community
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Community Platforms */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blobbi */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-pink-200">
              <div className="h-48 bg-gradient-to-r from-pink-500 to-rose-600 relative">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30 text-xs">
                    <Heart className="w-3 h-3 mr-1" />
                    Creative Platform
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Blobbi</h3>
                  <p className="text-white/90 text-sm">Creative community</p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 text-sm">
                  A creative platform for artists, designers, and makers to showcase work and connect with their audience.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></div>
                    Portfolio showcase
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></div>
                    Creator monetization
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-2"></div>
                    Community engagement
                  </div>
                </div>

                <div className="flex gap-1 flex-wrap mb-4">
                  <Badge variant="outline" className="text-xs bg-violet-50 text-violet-700 border-violet-200">MKStack</Badge>
                  <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">Nostrify</Badge>
                </div>
                
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://blobbi.pet" target="_blank" rel="noopener noreferrer">
                    Explore Artists
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Treasures */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-amber-200">
              <div className="h-48 bg-gradient-to-r from-amber-500 to-orange-600 relative">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30 text-xs">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Treasure Hunt
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Treasures</h3>
                  <p className="text-white/90 text-sm">Discovery platform</p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 text-sm">
                  Discover hidden gems, interesting content, and valuable resources shared by the community.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                    Content curation
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                    Discovery algorithms
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                    Community voting
                  </div>
                </div>

                <div className="flex gap-1 flex-wrap mb-4">
                  <Badge variant="outline" className="text-xs bg-orange-50 text-orange-700 border-orange-200">Stacks</Badge>
                  <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">Nostrify</Badge>
                  <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">React</Badge>
                </div>
                
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://treasures.surge.sh" target="_blank" rel="noopener noreferrer">
                    Find Treasures
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Community Features Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-azure-200 bg-gradient-to-br from-azure-50 to-blue-50">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-azure-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-azure-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Join the Ecosystem</h3>
                <p className="text-gray-600 text-sm">
                  Build your own community platform with Soapbox tools, or join existing communities.
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                    Growing ecosystem
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                    Open source tools
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                    Active development
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button className="w-full bg-azure hover:bg-azure-600 text-white" size="sm" asChild>
                    <Link to="/tools">
                      Build Your Platform
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics and Success Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-azure-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Building the Future of Social</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our tools power a growing ecosystem of decentralized social platforms and communities.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-azure-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Terminal className="h-8 w-8 text-azure-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Always Open Source</h3>
              <p className="text-gray-600 mb-4">
                Complete transparency and control. Every tool is open source, giving you the freedom to modify, 
                deploy, and maintain your own infrastructure.
              </p>
              <Badge variant="secondary" className="bg-azure-50 text-azure-700">MIT Licensed</Badge>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Decentralized by Design</h3>
              <p className="text-gray-600 mb-4">
                Built on Nostr protocol for true decentralization. No single point of failure, 
                no platform lock-in, just pure peer-to-peer communication.
              </p>
              <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">Nostr Protocol</Badge>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Settings className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Production Ready</h3>
              <p className="text-gray-600 mb-4">
                Battle-tested tools powering real communities. From small groups to large networks, 
                our tools scale with your needs.
              </p>
              <Badge variant="secondary" className="bg-violet-50 text-violet-700">Enterprise Scale</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-azure to-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Wrench className="h-10 w-10 text-white" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Ready to Join Our Ecosystem?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore these amazing platforms built with Soapbox tools, or create your own community 
            using our open-source frameworks. The future of decentralized social media is here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg font-semibold" asChild>
              <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
                <Users className="mr-2 h-5 w-5" />
                Try Ditto Platform
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg font-semibold border-white text-white hover:bg-white hover:text-azure" asChild>
              <Link to="/tools">
                <Code2 className="mr-2 h-5 w-5" />
                Build Your Own
              </Link>
            </Button>
          </div>
          
          <div className="pt-8 opacity-75">
            <p className="text-sm">
              All tools are open source and production ready. 
              <a href="https://nostrbook.dev" className="underline hover:opacity-100 transition-opacity ml-1" target="_blank" rel="noopener noreferrer">
                Learn about Nostr →
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}