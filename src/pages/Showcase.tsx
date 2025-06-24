import { ArrowRight, ExternalLink, Users, BookOpen, Search, Code, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function Showcase() {
  // Set custom SEO for Showcase page
  useSEO({
    title: 'Platform Showcase - Apps Built with Soapbox Tools | Decentralized Communities',
    description: 'Explore real platforms and communities built with Soapbox tools. From Ditto social networks to MKStack applications, see decentralized social media in action.',
    type: 'website',
    image: '/assets/images/riga-team.png',
    keywords: 'soapbox showcase, ditto apps, mkstack applications, nostr platforms, decentralized communities, soapbox examples, nostr showcase',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Soapbox Platform Showcase",
      "description": "Collection of platforms and applications built using Soapbox tools and frameworks",
      "author": {
        "@type": "Organization",
        "name": "Soapbox"
      },
      "hasPart": [
        {
          "@type": "SoftwareApplication",
          "name": "Ditto.pub",
          "description": "Flagship Ditto community platform"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Chorus",
          "description": "Facebook-style groups on Nostr"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Blobbi",
          "description": "Virtual pet platform on Nostr"
        }
      ]
    }
  });

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
              Built with Soapbox
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover live communities and applications built with Soapbox tools. 
            Each platform showcases the power of decentralized social media in action.
          </p>
        </div>
      </section>

      {/* Featured Apps - First Row: Ditto.pub and Chorus */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Featured Platforms</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flagship applications showcasing the full power of Soapbox tools in production.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Ditto.pub */}
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-azure-200">
              <div className="h-64 bg-gradient-to-r from-azure to-blue-600 relative overflow-hidden">
                <img 
                  src="/assets/mkstack-apps/ditto-screenshot.png" 
                  alt="Ditto platform on mobile devices"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-azure/40 to-blue-600/40"></div>
                <div className="absolute top-6 left-6">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    <Users className="w-3 h-3 mr-1" />
                    Flagship Platform
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Ditto.pub</h3>
                  <p className="text-white/90 text-lg">The flagship Ditto community</p>
                </div>
              </div>
              
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  The flagship Ditto platform showcasing all features with custom themes, 
                  Lightning Zaps, built-in eCash wallet, and cross-platform connectivity.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
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
                
                <div className="flex gap-2 flex-wrap mb-6">
                  <Badge variant="outline" className="text-xs bg-azure-50 text-azure-700 border-azure-200">Built with Ditto</Badge>
                  <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">Nostrify</Badge>
                  <Badge variant="outline" className="text-xs bg-gray-50 text-gray-700 border-gray-200">Rust</Badge>
                </div>
                
                <Button className="w-full bg-azure hover:bg-azure-600 text-white group" asChild>
                  <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
                    Visit Platform
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Chorus */}
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-red-200">
              <div className="h-64 bg-gradient-to-r from-red-500 to-red-600 relative overflow-hidden">
                <img 
                  src="/assets/mkstack-apps/chorus-screenshot.png" 
                  alt="Chorus - Facebook-style groups on Nostr"
                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/40 to-red-600/40"></div>
                <div className="absolute top-6 left-6">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    <Users className="w-3 h-3 mr-1" />
                    Community Platform
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Chorus</h3>
                  <p className="text-white/90 text-lg">Facebook-style groups on Nostr</p>
                </div>
              </div>
              
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  Facebook-style groups on Nostr with built-in eCash wallet for cross-border fundraising. 
                  Designed for activists and community organizers.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      Nostr Groups (NIP-72)
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      eCash wallet integration
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      Cross-border fundraising
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      Community organizing
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      Activist tools
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      Social features
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 flex-wrap mb-6">
                  <Badge variant="outline" className="text-xs bg-violet-50 text-violet-700 border-violet-200">Built with MKStack</Badge>
                  <Badge variant="outline" className="text-xs bg-emerald-50 text-emerald-700 border-emerald-200">Nostrify</Badge>
                  <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">React</Badge>
                </div>
                
                <Button variant="outline" className="w-full group border-red-500 text-red-600 hover:bg-red-500 hover:text-white" asChild>
                  <a href="https://chorus.community/" target="_blank" rel="noopener noreferrer">
                    Join Community
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Second Row: Treasures, Blobbi, and Plektos */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Treasures */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-500 to-emerald-600 relative overflow-hidden">
                <img 
                  src="/assets/mkstack-apps/treasures-screenshot.png" 
                  alt="Treasures platform screenshot"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/40 to-emerald-600/40"></div>
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

            {/* Blobbi */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-pink-500 to-rose-600 relative overflow-hidden">
                <img 
                  src="/assets/mkstack-apps/blobbi-screenshot.png" 
                  alt="Blobbi - Virtual pet platform"
                  className="absolute inset-0 w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/40 to-rose-600/40"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2">Built with MKStack</Badge>
                  <h3 className="text-xl font-bold">Blobbi</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Adopt and care for your own unique digital companion that lives forever on the decentralized web. 
                  Each Nostr account can have one special Blobbi pet!
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Virtual Pet</span>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://www.blobbi.pet/" target="_blank" rel="noopener noreferrer">
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
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/40 to-purple-600/40"></div>
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
          </div>

          {/* Third Row: This Soapbox website */}
          <div className="max-w-4xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-azure-200 bg-gradient-to-br from-azure-50 to-blue-50">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-azure-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Code className="h-8 w-8 text-azure-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      This Soapbox website was built with MKStack!
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      The very website you're browsing right now was built using MKStack. 
                      It showcases Nostr integration, blog functionality, and modern web development practices.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-3 mb-6">
                    <Badge variant="outline" className="bg-violet-50 text-violet-700 border-violet-200">Built with MKStack</Badge>
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">Nostrify</Badge>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">React</Badge>
                    <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">TypeScript</Badge>
                    <Badge variant="outline" className="bg-cyan-50 text-cyan-700 border-cyan-200">TailwindCSS</Badge>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-azure-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Users className="h-6 w-6 text-azure-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Nostr Integration</h4>
                      <p className="text-sm text-gray-600">Full Nostr protocol support with posts, profiles, and social features</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-azure-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <BookOpen className="h-6 w-6 text-azure-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Blog System</h4>
                      <p className="text-sm text-gray-600">Dynamic blog with markdown support and social sharing</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-azure-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Code className="h-6 w-6 text-azure-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Modern Stack</h4>
                      <p className="text-sm text-gray-600">Built with React, TypeScript, and modern web technologies</p>
                    </div>
                  </div>

                  <Button size="lg" className="bg-azure hover:bg-azure-600 text-white px-8 py-3" asChild>
                    <a href="https://gitlab.com/soapbox-pub/soapbox.pub_new" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      View Source Code
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Browse More Apps Button */}
          <div className="text-center mt-16">
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-azure-200 text-azure-700 hover:bg-azure-50" asChild>
              <a href="https://nostrhub.io/apps/t/mkstack/" target="_blank" rel="noopener noreferrer">
                Browse More Apps Made with MKStack
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
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
                <Code className="h-8 w-8 text-azure-600" />
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
                <Users className="h-8 w-8 text-emerald-600" />
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
                <Search className="h-8 w-8 text-violet-600" />
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
            <Code className="h-10 w-10 text-white" />
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
                <Code className="mr-2 h-5 w-5" />
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