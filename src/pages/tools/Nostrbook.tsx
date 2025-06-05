import { ArrowRight, BookOpen, Search, Brain, Database, FileText, ExternalLink, Users, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Nostrbook() {
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
                  📚 Documentation Registry
                </Badge>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    Nostrbook
                  </span>
                </h1>
                <p className="text-2xl font-medium text-gray-700">
                  The Comprehensive Nostr Documentation Registry
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Structured, detailed knowledge about Nostr for both humans and AI. The definitive 
                  resource for understanding the Nostr protocol and ecosystem.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
                  Browse Documentation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                  <Brain className="mr-2 h-5 w-5" />
                  AI Integration
                </Button>
              </div>

              {/* Quick Search */}
              <div className="relative max-w-md">
                <div className="flex">
                  <Input 
                    placeholder="Search Nostr docs..." 
                    className="pr-12 text-lg py-3"
                  />
                  <Button className="absolute right-1 top-1 bottom-1 bg-orange-600 hover:bg-orange-700">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-sm text-gray-600 mt-2">
                  Try: "NIP-01", "event structure", "relay implementation"
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
                    <div className="text-2xl font-bold text-orange-500">10K+</div>
                    <div className="text-xs text-gray-600">Monthly Views</div>
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
              The Complete Nostr Knowledge Base
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to understand, implement, and build on the Nostr protocol.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Complete NIP Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Detailed documentation for every Nostr Improvement Proposal with examples, implementation notes, and best practices.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    All NIPs documented
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Code examples included
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Implementation guides
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI-Optimized Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Structured documentation specifically designed for AI systems to understand and utilize Nostr protocol information.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Machine-readable format
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Semantic markup
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    API access available
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Searchable Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced search capabilities that help you find exactly what you need across all Nostr documentation.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                    Full-text search
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                    Semantic search
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                    Category filtering
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Always Current</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Automatically synchronized with the latest NIPs and protocol changes to ensure you have the most current information.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Real-time updates
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Version tracking
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Change notifications
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enhanced by community contributions including explanations, examples, and real-world implementation insights.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    Community examples
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    Developer insights
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    Best practices
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Developer Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Interactive tools, validators, and utilities to help developers implement Nostr features correctly.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Event validators
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Key generators
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Testing utilities
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

      {/* Usage Stats */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Trusted by the Nostr Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Developers and researchers rely on Nostrbook for accurate, comprehensive Nostr documentation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
              <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-gray-600">NIPs Documented</div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8">
              <div className="text-4xl font-bold text-red-600 mb-2">10,000+</div>
              <div className="text-gray-600">Monthly Visitors</div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <div className="text-4xl font-bold text-amber-600 mb-2">500+</div>
              <div className="text-gray-600">Code Examples</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8">
              <div className="text-4xl font-bold text-yellow-600 mb-2">99.9%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* API Integration */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-display font-bold text-gray-900">
                Built for AI Integration
              </h2>
              <p className="text-xl text-gray-600">
                Structured data formats and API access make Nostrbook perfect for AI systems, 
                chatbots, and automated tools that need accurate Nostr protocol information.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Machine-Readable Format</h3>
                    <p className="text-sm text-gray-600">JSON and structured data optimized for AI consumption</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                    <Database className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">REST API Access</h3>
                    <p className="text-sm text-gray-600">Programmatic access to all documentation and examples</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                    <Search className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Semantic Search</h3>
                    <p className="text-sm text-gray-600">Advanced search capabilities for finding relevant information</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-orange-600 hover:bg-orange-700">
                View API Documentation
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-3 text-gray-400">API Example</span>
              </div>
              <div className="space-y-2">
                <div><span className="text-gray-400">GET</span> <span className="text-green-400">https://api.nostrbook.dev/nips</span></div>
                <div className="text-gray-400">// Get all NIPs with metadata</div>
                <div></div>
                <div>{'{'}</div>
                <div className="ml-4"><span className="text-blue-400">"nips"</span>: [</div>
                <div className="ml-8">{'{'}</div>
                <div className="ml-12"><span className="text-blue-400">"number"</span>: <span className="text-yellow-400">"01"</span>,</div>
                <div className="ml-12"><span className="text-blue-400">"title"</span>: <span className="text-green-400">"Basic protocol flow"</span>,</div>
                <div className="ml-12"><span className="text-blue-400">"status"</span>: <span className="text-green-400">"final"</span>,</div>
                <div className="ml-12"><span className="text-blue-400">"tags"</span>: [<span className="text-green-400">"core"</span>, <span className="text-green-400">"protocol"</span>]</div>
                <div className="ml-8">{'}'}</div>
                <div className="ml-4">]</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Explore the Complete Nostr Documentation
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Whether you're a developer, researcher, or AI system, Nostrbook has the comprehensive 
            Nostr knowledge you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-orange-600 hover:bg-gray-100">
              Browse Documentation
              <BookOpen className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-orange-600">
              <Brain className="mr-2 h-5 w-5" />
              API Access
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Free to Access
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Always Updated
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Community Verified
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}