import { ArrowRight, Users, Code, Zap, BookOpen, FileText, Wrench, Shield, Globe, Rocket, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function Tools() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-azure-50 via-white to-blue-50">
      <SEO 
        title="Soapbox Tools - Build Decentralized Platforms" 
        description="Discover our comprehensive toolkit for building decentralized platforms: MKstack for rapid app development, Ditto for communities, Nostrify framework, and more open source tools."
        type="website"
        image="/assets/images/tools-showcase.png"
        keywords="soapbox tools, mkstack, ditto, nostrify, decentralized development, nostr tools, open source platform builder"
      />
      
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="bg-azure-100 text-azure-700 border-azure-200 mb-6">
            🛠️ Complete Toolkit
          </Badge>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            Tools to Build Your{" "}
            <span className="bg-gradient-to-r from-azure to-blue-600 bg-clip-text text-transparent">
              Platform
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Soapbox provides a complete ecosystem of tools that empower you to create your own platforms, 
            communities, and applications. Each tool is designed to work independently or together as part 
            of a larger vision.
          </p>
        </div>
      </section>

      {/* Main Tools Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* MKstack - Featured */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-violet-200 lg:col-span-2">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Code className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold">MKstack</h2>
                      <p className="text-lg text-gray-600">Build Nostr Apps with AI</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6">
                    Create custom social platforms and applications with our flexible framework. 
                    Build in minutes, edit with Dork AI, and deploy instantly. 
                    Baked in Nostr support for decentralized, censorship-resistant applications.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                        Launch in less than 10 minutes
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                        AI-First Development
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                        Full Nostr Protocol Support
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                        Supports multiple routers
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                        Built-in AI Agent, Dork
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-violet-500 rounded-full mr-3"></div>
                        Media uploads with Blossom
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-violet-500 hover:bg-violet-600 text-white" asChild>
                      <Link to="/tools/mkstack">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://gitlab.com/soapbox-pub/mkstack" target="_blank" rel="noopener noreferrer">
                        Source code
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-violet-100 to-purple-100 p-4 lg:p-6 flex flex-col justify-center">
                  <div className="w-full">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg bg-white mb-4">
                      <iframe
                        src="https://www.youtube.com/embed/kJRwAGmAmGI"
                        title="MKstack Demo Video"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <div className="text-center space-y-2">
                      <p className="text-sm text-gray-600">See MKstack in action</p>
                      <div className="flex justify-center gap-2 flex-wrap">
                        <a href="https://chorus.community/" target="_blank" rel="noopener noreferrer">
                          <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200 transition-colors">
                            Chorus
                          </Badge>
                        </a>
                        <a href="https://plektos.app" target="_blank" rel="noopener noreferrer">
                          <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200 transition-colors">
                            Plektos
                          </Badge>
                        </a>
                        <a href="https://treasures.surge.sh/" target="_blank" rel="noopener noreferrer">
                          <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200 transition-colors">
                            Treasures
                          </Badge>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Ditto */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-azure-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-azure to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-display">Ditto</CardTitle>
                <CardDescription className="text-lg">Community Platform Builder</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600">
                  Build decentralized, censorship-resistant communities on Nostr with built-in monetization, 
                  custom themes, and cross-platform compatibility. Perfect for creating your own social space.
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
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                    ActivityPub bridge
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button variant="outline" className="w-full group-hover:bg-azure group-hover:text-white transition-colors" asChild>
                    <Link to="/tools/ditto">
                      Build Community
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stacks */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl font-display">Stacks</CardTitle>
                <CardDescription className="text-lg">AI Project Templates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600">
                  Share and discover AI project templates on our decentralized platform. 
                  Find the perfect starter for your next AI project or share your own templates.
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Decentralized template sharing
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    AI-focused projects
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Community-driven
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    Version control
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button variant="outline" className="w-full group-hover:bg-emerald-500 group-hover:text-white transition-colors" asChild>
                    <Link to="/tools/stacks">
                      Explore Templates
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Tools */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Nostrbook */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-display">Nostrbook MCP</CardTitle>
                <CardDescription>AI tool for the Nostr protocol</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Comprehensive registry of Nostr documentation. Structured, detailed knowledge 
                  about Nostr for both humans and AI.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    Comprehensive docs
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    AI-friendly format
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    Always up-to-date
                  </div>
                </div>
                <Button variant="outline" className="w-full text-sm" asChild>
                  <Link to="/tools/nostrbook">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3" />
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
                <CardTitle className="text-xl font-display">NostrHub</CardTitle>
                <CardDescription>Nostr Protocol Explorer</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Explore and understand Nostr Implementation Possibilities (NIPs) with our comprehensive 
                  database and tools for developers.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                    Complete NIP database
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                    Publish Custom Nips
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                    Implementation guides
                  </div>
                </div>
                <Button variant="outline" className="w-full text-sm" asChild>
                  <Link to="/tools/nostrhub">
                    Explore NIPs
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Nostrify */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-display">Nostrify</CardTitle>
                <CardDescription>Development Framework</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">
                  Bring your projects to life on Nostr with simple tools for relays, storage, 
                  signers, and moderation. Pure TypeScript framework.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    TypeScript framework
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Relay management
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Cross-platform
                  </div>
                </div>
                <Button variant="outline" className="w-full text-sm" asChild>
                  <Link to="/tools/nostrify">
                    Start Coding
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Soapbox Tools */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Why Choose Soapbox Tools?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with the philosophy of empowerment and freedom
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-azure rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-semibold">Always Open Source</h3>
              <p className="text-gray-600">
                All our tools are free and open source, giving you complete control and transparency.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-violet-500 rounded-2xl flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-semibold">Decentralized by Design</h3>
              <p className="text-gray-600">
                Built on decentralized protocols to ensure your independence and data sovereignty.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-semibold">Production Ready</h3>
              <p className="text-gray-600">
                Battle-tested tools powering real platforms and communities around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-azure to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            See Our Tools in Action
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Explore real platforms and applications built using Soapbox tools by developers and creators worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg" asChild>
              <Link to="/showcase">
                View Client Showcase
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}