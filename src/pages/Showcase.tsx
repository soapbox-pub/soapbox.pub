import { ArrowRight, ExternalLink, Users, BookOpen, Search, Code2, Globe, Server, Settings, Terminal, Wrench, Layers, FileText, Heart, Sparkles, Activity } from "lucide-react";
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
            Tools & Apps{" "}
            <span className="bg-gradient-to-r from-azure to-blue-600 bg-clip-text text-transparent">
              We've Built
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From developer frameworks to live community platforms, explore the ecosystem of tools 
            and applications that bring decentralized social media to life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-azure-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-azure-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Developer Tools</h3>
              <p className="text-gray-600">Frameworks and libraries for building on Nostr</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Platforms</h3>
              <p className="text-gray-600">Active communities and applications in production</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-gray-600">Comprehensive guides and references</p>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Tools Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Developer Tools & Frameworks</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Production-ready tools to build, deploy, and scale decentralized applications on Nostr.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Ditto */}
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-azure-200">
              <div className="h-64 bg-gradient-to-r from-azure to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-6 left-6">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    <Server className="w-3 h-3 mr-1" />
                    Community Platform
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Ditto</h3>
                  <p className="text-white/90 text-lg">Self-hosted Nostr community server</p>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Server className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  A self-hosted Nostr relay server that creates community-focused instances with custom branding, 
                  moderation tools, and ActivityPub integration for cross-platform reach.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                      Self-hosted deployment
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                      Custom branding & themes
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                      Advanced moderation
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                      ActivityPub bridge
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                      Lightning integration
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                      API compatibility
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">Rust</Badge>
                    <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                    <Badge variant="secondary" className="text-xs">Docker</Badge>
                  </div>
                </div>
                
                <Button className="w-full bg-azure hover:bg-azure-600 text-white group" asChild>
                  <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
                    Explore Ditto
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Nostrify */}
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-emerald-200">
              <div className="h-64 bg-gradient-to-r from-emerald-500 to-teal-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-6 left-6">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    <Code2 className="w-3 h-3 mr-1" />
                    Development Framework
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-3xl font-bold mb-2">Nostrify</h3>
                  <p className="text-white/90 text-lg">TypeScript framework for Nostr</p>
                </div>
                <div className="absolute bottom-6 right-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Code2 className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  A comprehensive TypeScript framework for building Nostr applications with modular components for 
                  relays, storage, signing, schemas, and more.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      Relay management
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      Storage abstractions
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      Event signing
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      Schema validation
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      Policy framework
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                      File uploading
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">TypeScript</Badge>
                    <Badge variant="secondary" className="text-xs">Deno</Badge>
                    <Badge variant="secondary" className="text-xs">Web</Badge>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white" asChild>
                  <a href="https://nostrify.dev" target="_blank" rel="noopener noreferrer">
                    View Framework
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Additional Tools Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* MKStack */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-violet-500 to-purple-600 relative">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30 text-xs">
                    <Layers className="w-3 h-3 mr-1" />
                    Platform Framework
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">MKStack</h3>
                  <p className="text-white/90 text-sm">Rapid platform builder</p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Layers className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 text-sm">
                  Framework for building custom social platforms and applications with pre-built components.
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-2"></div>
                    Component library
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-2"></div>
                    Template system
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-2"></div>
                    Rapid deployment
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://mkstack.xyz" target="_blank" rel="noopener noreferrer">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Stacks */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-orange-500 to-red-600 relative">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30 text-xs">
                    <Sparkles className="w-3 h-3 mr-1" />
                    AI Templates
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Stacks</h3>
                  <p className="text-white/90 text-sm">AI project templates</p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 text-sm">
                  Share and discover AI project templates and configurations for rapid prototyping.
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    Template sharing
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    AI configurations
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    Quick deployment
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://getstacks.dev" target="_blank" rel="noopener noreferrer">
                    Explore
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* NostrHub */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-blue-500 to-cyan-600 relative">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30 text-xs">
                    <Activity className="w-3 h-3 mr-1" />
                    Network Hub
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">NostrHub</h3>
                  <p className="text-white/90 text-sm">Network explorer</p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Activity className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 text-sm">
                  Explore and discover relays, users, and content across the Nostr network ecosystem.
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Relay discovery
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Network analytics
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    Content exploration
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">
                    Explore Hub
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Nostrbook */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-green-500 to-emerald-600 relative">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30 text-xs">
                    <FileText className="w-3 h-3 mr-1" />
                    Documentation
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Nostrbook</h3>
                  <p className="text-white/90 text-sm">Protocol documentation</p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 text-sm">
                  Comprehensive, searchable documentation and examples for the Nostr protocol ecosystem.
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                    Full-text search
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                    Code examples
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                    AI-accessible
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://nostrbook.dev" target="_blank" rel="noopener noreferrer">
                    Read Docs
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Community Platforms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Live Community Platforms</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real communities and platforms built with Soapbox tools, each serving unique audiences 
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
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">Live Platform</Badge>
                    <Badge variant="secondary" className="text-xs">Open Source</Badge>
                    <Badge variant="secondary" className="text-xs">Production Ready</Badge>
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
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="text-xs">Community Driven</Badge>
                    <Badge variant="secondary" className="text-xs">Book Focused</Badge>
                    <Badge variant="secondary" className="text-xs">Social Reading</Badge>
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-azure-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Code2 className="h-10 w-10 text-azure-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">6+</div>
              <div className="text-gray-600">Developer Tools</div>
              <div className="text-sm text-gray-500 mt-1">Production ready frameworks</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-10 w-10 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600">Live Platforms</div>
              <div className="text-sm text-gray-500 mt-1">Active communities running</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-violet-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">25,000+</div>
              <div className="text-gray-600">Users Served</div>
              <div className="text-sm text-gray-500 mt-1">Across all platforms</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-10 w-10 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
              <div className="text-sm text-gray-500 mt-1">Reliable infrastructure</div>
            </div>
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
            Ready to Build Your Platform?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Join the growing ecosystem of developers and communities building the future of decentralized social media. 
            Start with our tools or explore existing platforms to see what's possible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg font-semibold" asChild>
              <Link to="/tools">
                <Code2 className="mr-2 h-5 w-5" />
                Explore Tools
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg font-semibold border-white text-white hover:bg-white hover:text-azure" asChild>
              <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
                <Server className="mr-2 h-5 w-5" />
                Try Ditto Platform
              </a>
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