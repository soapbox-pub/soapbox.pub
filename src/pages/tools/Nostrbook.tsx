import { ArrowRight, BookOpen, Database, FileText, Users, Shield, Globe, Bot, Code2, Terminal, Cpu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function Nostrbook() {
  // Set custom SEO for Nostrbook page
  useSEO({
    title: 'Nostrbook MCP - AI-Optimized Nostr Documentation | Model Context Protocol',
    description: 'Access comprehensive Nostr protocol documentation optimized for AI systems. Includes Model Context Protocol integration, custom NIPs from NostrHub, and structured knowledge for developers.',
    type: 'website',
    image: '/assets/images/nostrbook.png',
    keywords: 'nostrbook, nostr documentation, model context protocol, mcp, ai documentation, nostr protocol, nips, structured knowledge, ai integration',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Nostrbook MCP",
      "description": "AI-optimized Nostr protocol documentation with Model Context Protocol integration",
      "applicationCategory": "Documentation Platform",
      "operatingSystem": "Cross-platform",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Organization",
        "name": "Soapbox"
      },
      "featureList": [
        "Model Context Protocol (MCP) integration",
        "Custom NIPs from NostrHub",
        "Searchable knowledge base",
        "AI-optimized documentation format"
      ]
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
                  ⚡ AI-Optimized Documentation
                </Badge>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Nostrbook
                  </span>
                </h1>
                <p className="text-2xl font-medium text-gray-700">
                  Structured Nostr Knowledge for Humans & AI
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The central registry of well-structured, detailed documentation about all aspects of the Nostr protocol. 
                  Enhanced with clearer explanations, examples, and built specifically for AI integration.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg" asChild>
                  <a href="https://nostrbook.dev" target="_blank" rel="noopener noreferrer">
                    Browse Documentation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-orange-600 text-orange-600 hover:bg-orange-50">
                  <Bot className="mr-2 h-5 w-5" />
                  Nostrbook MCP
                </Button>
              </div>

              {/* MCP Integration Highlight */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Perfect for AI Projects</h3>
                    <p className="text-sm text-gray-600">Now with Model Context Protocol (MCP) integration</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  AI agents can directly access all Nostr documentation through function calls - no scraping or outdated training data. 
                  Includes custom NIPs from <span className="font-semibold text-blue-700">NostrHub</span> for the latest protocol extensions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    <Terminal className="w-3 h-3 mr-1" />
                    MCP Integration
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <Database className="w-3 h-3 mr-1" />
                    Custom NIPs
                  </Badge>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                    <Cpu className="w-3 h-3 mr-1" />
                    Real-time Updates
                  </Badge>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Always Up-to-date
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  AI-Friendly Format
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Community Curated
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Documentation Browser */}
              <div className="bg-white rounded-2xl shadow-2xl border">
                {/* Browser Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500 font-mono">nostrbook.dev/nip-01</div>
                  <div className="w-6 h-6"></div>
                </div>
                
                {/* Documentation Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">NIP-01: Basic protocol flow</h3>
                      <p className="text-sm text-gray-600">Status: Final • Updated: 2024</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <h4 className="font-medium mb-2">Event Structure</h4>
                      <div className="font-mono text-xs bg-white p-2 rounded border">
                        {'{'}<br/>
                        &nbsp;&nbsp;"id": "event_id",<br/>
                        &nbsp;&nbsp;"pubkey": "author_pubkey",<br/>
                        &nbsp;&nbsp;"created_at": timestamp,<br/>
                        &nbsp;&nbsp;"kind": number,<br/>
                        &nbsp;&nbsp;"tags": [...],<br/>
                        &nbsp;&nbsp;"content": "...",<br/>
                        &nbsp;&nbsp;"sig": "signature"<br/>
                        {'}'}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <Badge variant="outline" className="text-xs">Protocol</Badge>
                      <Badge variant="outline" className="text-xs">Events</Badge>
                      <Badge variant="outline" className="text-xs">Core</Badge>
                    </div>
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="border-t p-4 flex items-center justify-between">
                  <Button variant="ghost" size="sm">
                    ← Previous: Introduction
                  </Button>
                  <Button variant="ghost" size="sm">
                    Next: NIP-02 →
                  </Button>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-4 right-4">
                <div className="bg-white rounded-xl shadow-lg p-4 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">100+</div>
                    <div className="text-xs text-gray-600">NIPs Documented</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">500+</div>
                    <div className="text-xs text-gray-600">Code Examples</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">MCP</div>
                    <div className="text-xs text-gray-600">AI Integration</div>
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
              Beyond the Official NIPs Repository
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While the official NIPs repository defines the specifications, Nostrbook expands upon them with structured navigation, 
              detailed examples, and consistent formatting optimized for both human understanding and AI consumption.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Model Context Protocol (MCP)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Direct integration with AI tools through MCP, allowing agents to access up-to-date Nostr documentation without relying on training data.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Works with Goose AI
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    VSCode Copilot support
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Function-based access
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Custom NIPs from NostrHub</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Access to custom NIPs and protocol extensions from NostrHub, ensuring you have the latest developments beyond the core protocol.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Community extensions
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Experimental NIPs
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Real-time updates
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Searchable Knowledge Base</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Full-text search across all documentation with structured navigation and cross-references between related concepts.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                    Full-text search
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                    Cross-references
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                    Structured navigation
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Enhanced Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Clearer explanations, detailed examples, and consistent formatting that makes the protocol easier to understand.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Real-world examples
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Implementation guides
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Consistent formatting
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Programmatic Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Markdown endpoints and llms.txt conformance for easy integration with AI tools and programmatic access.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    Markdown endpoints
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    llms.txt specification
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    API access
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Always Up-to-Date</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Regularly maintained to reflect the latest developments in the Nostr ecosystem and protocol changes.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Automated updates
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Latest protocol changes
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Community maintained
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Explore the Documentation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Organized by category for easy navigation and learning.
            </p>
          </div>

          <Tabs defaultValue="core" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="core">Core Protocol</TabsTrigger>
              <TabsTrigger value="events">Event Types</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
            </TabsList>

            <TabsContent value="core" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">01</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Basic Protocol Flow</h3>
                        <p className="text-sm text-gray-600">Foundation of Nostr</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Core event structure, relay communication, and basic client behavior.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Documentation
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">02</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Contact List</h3>
                        <p className="text-sm text-gray-600">Following & Metadata</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      How users follow others and manage their social graph on Nostr.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Documentation
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">04</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Encrypted Messages</h3>
                        <p className="text-sm text-gray-600">Private Communication</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      End-to-end encrypted direct messages between Nostr users.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Documentation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="events" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Long-form Content</h3>
                        <p className="text-sm text-gray-600">Articles & Blogs</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Publishing long-form content like articles and blog posts on Nostr.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Documentation
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Lightning Zaps</h3>
                        <p className="text-sm text-gray-600">Bitcoin Payments</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Bitcoin Lightning payment integration for tipping and monetization.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Documentation
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Communities</h3>
                        <p className="text-sm text-gray-600">Groups & Moderation</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Creating and managing communities with moderation capabilities.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Documentation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="applications" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <Globe className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Web Clients</h3>
                        <p className="text-sm text-gray-600">Browser Applications</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Building web-based Nostr clients and applications.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Documentation
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center">
                        <Shield className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Signers & Keys</h3>
                        <p className="text-sm text-gray-600">Key Management</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Secure key management and signing solutions for Nostr.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Documentation
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                        <Database className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Bots & Automation</h3>
                        <p className="text-sm text-gray-600">Automated Systems</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Building bots and automated systems that interact with Nostr.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Documentation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="infrastructure" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                        <Database className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Relay Implementation</h3>
                        <p className="text-sm text-gray-600">Server Software</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Building and deploying Nostr relay servers and infrastructure.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Documentation
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-yellow-600 rounded-lg flex items-center justify-center">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Scaling & Performance</h3>
                        <p className="text-sm text-gray-600">Optimization</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Performance optimization and scaling strategies for Nostr infrastructure.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Documentation
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                        <Shield className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Security & Privacy</h3>
                        <p className="text-sm text-gray-600">Protection Measures</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">
                      Security best practices and privacy considerations for Nostr.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Read Documentation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* MCP Integration Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl font-display font-bold text-gray-900">
                    Nostrbook MCP Integration
                  </h2>
                  <p className="text-gray-600">Model Context Protocol for AI Tools</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-600">
                The Nostr Model Context Protocol (MCP) integration allows AI tools and agents to directly access 
                structured Nostr documentation programmatically, eliminating the need to scrape documentation 
                or rely solely on training data.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Available MCP Functions</h3>
                <div className="grid gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-600 rounded-md flex items-center justify-center">
                      <span className="text-white text-xs font-bold">01</span>
                    </div>
                    <div>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">read_nip(nip)</code>
                      <span className="text-gray-600 ml-2">- Fetch NIPs from official repository</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-600 rounded-md flex items-center justify-center">
                      <span className="text-white text-xs font-bold">02</span>
                    </div>
                    <div>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">read_kind(kind)</code>
                      <span className="text-gray-600 ml-2">- Get event kind documentation</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-amber-600 rounded-md flex items-center justify-center">
                      <span className="text-white text-xs font-bold">03</span>
                    </div>
                    <div>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">read_tag(tag)</code>
                      <span className="text-gray-600 ml-2">- Access tag specifications</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
                      <span className="text-white text-xs font-bold">04</span>
                    </div>
                    <div>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">read_protocol(doc)</code>
                      <span className="text-gray-600 ml-2">- Get protocol documentation</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-md flex items-center justify-center">
                      <span className="text-white text-xs font-bold">05</span>
                    </div>
                    <div>
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">read_nips_index()</code>
                      <span className="text-gray-600 ml-2">- List all NIPs, kinds, and tags</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Benefits</h3>
                <div className="grid gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-gray-700">Up-to-date information (not limited by training data cutoffs)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-gray-700">Structured data in well-formatted markdown</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-gray-700">Direct access to official documentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span className="text-gray-700">Includes custom NIPs from NostrHub</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg border overflow-hidden">
                <div className="bg-gray-900 px-6 py-4">
                  <h3 className="text-white font-semibold flex items-center">
                    <Terminal className="mr-2 h-5 w-5" />
                    Installation Guide
                  </h3>
                </div>
                
                <div className="p-6 space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Bot className="mr-2 h-4 w-4 text-blue-600" />
                      For Goose AI
                    </h4>
                    <ol className="text-sm space-y-2 text-gray-600 list-decimal list-inside">
                      <li>Run <code className="bg-gray-100 px-1 rounded">goose configure</code></li>
                      <li>Choose "Add Extension"</li>
                      <li>Choose "Command-line Extension"</li>
                      <li>Enter "nostr" as the name</li>
                      <li>Enter command: <code className="bg-gray-100 px-1 rounded">npx -y xjsr @nostrbook/mcp</code></li>
                      <li>Enter "10" seconds timeout</li>
                    </ol>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Code2 className="mr-2 h-4 w-4 text-green-600" />
                      For VSCode Copilot
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">Create <code className="bg-gray-100 px-1 rounded">.vscode/mcp.json</code>:</p>
                    <div className="bg-gray-900 rounded-lg p-3 text-white font-mono text-xs overflow-x-auto">
                      <div>{'{'}</div>
                      <div className="ml-2">"servers": {'{'}</div>
                      <div className="ml-4">"nostr": {'{'}</div>
                      <div className="ml-6">"type": "stdio",</div>
                      <div className="ml-6">"command": "npx",</div>
                      <div className="ml-6">"args": ["-y", "xjsr", "@nostrbook/mcp"]</div>
                      <div className="ml-4">{'}'}</div>
                      <div className="ml-2">{'}'}</div>
                      <div>{'}'}</div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Database className="mr-2 h-4 w-4 text-purple-600" />
                      Other MCP Clients
                    </h4>
                    <p className="text-sm text-gray-600">
                      Use command: <code className="bg-gray-100 px-1 rounded">npx -y xjsr @nostrbook/mcp</code>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Ready to Use</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Once installed, your AI assistant can answer questions like "What is the structure of a Nostr Kind 1 event?" 
                  using live documentation from Nostrbook and NostrHub.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Access Structured Nostr Knowledge Today
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Whether you're a developer, researcher, or AI system, Nostrbook provides the comprehensive 
            Nostr documentation you need with cutting-edge AI integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-orange-600 hover:bg-gray-100" asChild>
              <a href="https://nostrbook.dev" target="_blank" rel="noopener noreferrer">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Documentation
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-orange-600" asChild>
              <a href="https://nostrbook.dev/mcp" target="_blank" rel="noopener noreferrer">
                <Bot className="mr-2 h-5 w-5" />
                Setup MCP Integration
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Free to Access
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              AI-Optimized
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Custom NIPs Included
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}