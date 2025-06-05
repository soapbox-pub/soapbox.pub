import { ArrowRight, FileText, Code, Users, Search, BookOpen, Rocket, Globe, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function NostrHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                  🔧 Protocol Development
                </Badge>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    NostrHub
                  </span>
                </h1>
                <p className="text-2xl font-medium text-gray-700">
                  Discover and Publish Nostr Implementation Possibilities
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Browse official NIPs, publish your own custom implementations, and contribute to the 
                  Nostr protocol ecosystem. The comprehensive hub for Nostr protocol development.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg" asChild>
                  <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">
                    Browse NIPs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
                  <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-5 w-5" />
                    Publish Custom NIP
                  </a>
                </Button>
              </div>

              {/* Search & Filter */}
              <div className="bg-white rounded-lg border p-4 space-y-4 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input 
                      placeholder="Search NIPs by number, title, or keyword..." 
                      className="text-base"
                    />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex gap-4">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="final">Final</SelectItem>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="proposed">Proposed</SelectItem>
                      <SelectItem value="optional">Optional</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="core">Core Protocol</SelectItem>
                      <SelectItem value="events">Event Kinds</SelectItem>
                      <SelectItem value="tags">Tag Specifications</SelectItem>
                      <SelectItem value="misc">Miscellaneous</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  100+ Official NIPs
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Custom NIPs Published
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  On-Nostr Publishing
                </div>
              </div>
            </div>

            <div className="relative">
              {/* NIP Showcase */}
              <div className="bg-white rounded-2xl shadow-2xl border">
                {/* Header */}
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Recent NIPs</h3>
                    <Badge variant="secondary">Live Updates</Badge>
                  </div>
                </div>
                
                {/* NIP List */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">01</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Basic Protocol Flow</h4>
                      <p className="text-sm text-gray-600">Core protocol specification</p>
                    </div>
                    <div className="text-right text-sm">
                      <Badge variant="outline" className="text-green-600 border-green-600">Final</Badge>
                      <div className="text-gray-500 mt-1">Core</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">72</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Moderated Communities</h4>
                      <p className="text-sm text-gray-600">Community group events</p>
                    </div>
                    <div className="text-right text-sm">
                      <Badge variant="outline" className="text-blue-600 border-blue-600">Draft</Badge>
                      <div className="text-gray-500 mt-1">Events</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">94</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">File Metadata</h4>
                      <p className="text-sm text-gray-600">File attachment metadata</p>
                    </div>
                    <div className="text-right text-sm">
                      <Badge variant="outline" className="text-green-600 border-green-600">Final</Badge>
                      <div className="text-gray-500 mt-1">Tags</div>
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="p-4 border-t bg-gray-50 rounded-b-2xl">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">
                      Browse All NIPs
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-4 right-4">
                <div className="bg-white rounded-xl shadow-lg p-4 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">100+</div>
                    <div className="text-xs text-gray-600">Official NIPs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">25+</div>
                    <div className="text-xs text-gray-600">Categories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">Custom</div>
                    <div className="text-xs text-gray-600">Publishing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NostrHub Exists */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Why NostrHub Exists
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building the future of decentralized protocol development on Nostr itself
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Breaking Free from Centralized Development</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  For too long, the decentralized Nostr protocol has been ironically dependent on centralized, 
                  proprietary platforms like GitHub for its development and documentation. This creates a 
                  fundamental contradiction - why should a protocol designed for freedom and decentralization 
                  rely on corporate-controlled infrastructure?
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  NostrHub changes this by building protocol development directly on Nostr itself. When you 
                  publish a custom NIP on NostrHub, you're not just sharing an idea - you're demonstrating 
                  the power of truly decentralized, censorship-resistant protocol development.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">What are NIPs?</h4>
                <p className="text-gray-700 mb-4">
                  <strong>NIPs</strong> (Nostr Implementation Possibilities) are specifications that define how 
                  different parts of the Nostr protocol work. They describe event kinds, tag formats, relay 
                  behaviors, and client features that make up the Nostr ecosystem.
                </p>
                <p className="text-gray-700">
                  Unlike traditional protocols with rigid specifications, Nostr is designed to be extensible. 
                  Anyone can create new event kinds, define new use cases, and build their own corner of the 
                  decentralized web without asking permission from any central authority.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-6">The Power of Decentralized Protocol Development</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h5 className="font-semibold mb-2">No Gatekeepers</h5>
                      <p className="text-blue-100 text-sm">Publish your ideas directly to the network without corporate approval</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h5 className="font-semibold mb-2">Censorship Resistant</h5>
                      <p className="text-blue-100 text-sm">Your NIPs can't be taken down or hidden by platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h5 className="font-semibold mb-2">Global Accessibility</h5>
                      <p className="text-blue-100 text-sm">Anyone, anywhere can contribute to protocol evolution</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h5 className="font-semibold mb-2">Permissionless Innovation</h5>
                      <p className="text-blue-100 text-sm">Create new event kinds and start building immediately</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">The Power of Custom NIPs</h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
                With NostrHub, anyone can create new event kinds and start building their own applications 
                on Nostr without waiting for committee approval or central authority permission.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Instant Protocol Extension</h4>
                <p className="text-gray-600">
                  Define a new event kind, publish it as a NIP, and start building. No waiting periods, 
                  no approval processes - just pure innovation.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-purple-200">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Your Own Corner of the Web</h4>
                <p className="text-gray-600">
                  Create specialized applications, unique social features, or entirely new use cases 
                  by defining custom event kinds and behaviors.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-orange-200">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Community-Driven Evolution</h4>
                <p className="text-gray-600">
                  Share your ideas with developers worldwide. Get feedback, iterate, and see your 
                  innovations adopted across the Nostr ecosystem.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* NostrHub Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Built for Protocol Developers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NostrHub provides everything you need to participate in the evolution of the Nostr protocol
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Author Profiles</h3>
                  <p className="text-gray-600">
                    Every developer gets a profile showcasing all their published NIPs. Build your 
                    reputation as a protocol contributor and let others discover your innovations.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Track your impact:</strong> See adoption metrics, community feedback, 
                  and how your NIPs are being implemented across the ecosystem.
                </p>
              </div>
            </Card>

            <Card className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interactive Comments</h3>
                  <p className="text-gray-600">
                    Engage in discussions on both official and custom NIPs. Ask questions, provide 
                    feedback, suggest improvements, and collaborate with the global developer community.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Real-time collaboration:</strong> Comments are published as Nostr events, 
                  ensuring they're decentralized and censorship-resistant too.
                </p>
              </div>
            </Card>

            <Card className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Bell className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Notifications</h3>
                  <p className="text-gray-600">
                    Stay updated on all activity related to your NIPs. Get notified when someone 
                    comments, implements your specification, or references your work.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Never miss important feedback:</strong> Receive notifications through 
                  Nostr itself, keeping everything decentralized and in your control.
                </p>
              </div>
            </Card>

            <Card className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Browse Official NIPs</h3>
                  <p className="text-gray-600">
                    Access the complete collection of official Nostr Implementation Possibilities 
                    with enhanced search, filtering, and categorization features.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Enhanced discoverability:</strong> Find exactly what you need with 
                  powerful search and filtering capabilities built for developers.
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">How Nostr Works</h3>
              <div className="max-w-4xl mx-auto space-y-6 text-left">
                <p className="text-lg text-blue-100">
                  Nostr is a simple, decentralized protocol for creating and sharing events. Unlike traditional 
                  platforms with fixed schemas, Nostr allows anyone to publish events of any kind to relays 
                  distributed around the world.
                </p>
                <p className="text-lg text-blue-100">
                  This flexibility is what makes custom NIPs so powerful. You can define a new event kind 
                  (like "kind: 40000" for a hypothetical chess game state), specify how clients should 
                  interpret it, and immediately start building applications that use it.
                </p>
                <p className="text-lg text-blue-100">
                  There's no central authority to approve your idea, no corporation that can shut down your 
                  innovation. If you can imagine it and define it as a NIP, you can build it on Nostr.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Development Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Protocol Development Hub
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NostrHub enables the Nostr community to collaboratively build and improve the protocol ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Browse Official NIPs</h3>
              <p className="text-gray-600">
                Access the complete collection of official Nostr Implementation Possibilities with detailed 
                documentation and implementation guides.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Publish Custom NIPs</h3>
              <p className="text-gray-600">
                Share your own Nostr implementations with the community by publishing custom NIPs 
                directly on the Nostr network.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Community-Driven</h3>
              <p className="text-gray-600">
                Built on Nostr itself, NostrHub is decentralized and community-driven, ensuring 
                the protocol development remains open and collaborative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publish NIP CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-bold text-gray-900">
              Contribute to the Nostr Protocol
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have a new idea for extending the Nostr protocol? Share it with the community by 
              publishing your custom NIP on NostrHub.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Write Your NIP</h3>
                <p className="text-sm text-gray-600">Create your implementation specification</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Publish on Nostr</h3>
                <p className="text-sm text-gray-600">Share your NIP directly on the Nostr network</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Get Feedback</h3>
                <p className="text-sm text-gray-600">Engage with developers and refine your proposal</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg" asChild>
              <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">
                Publish Your NIP
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Protocol Stats */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Nostr Protocol at a Glance
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Tracking the growth and development of the Nostr protocol specification.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="opacity-90">Official NIPs</div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="opacity-90">Event Kinds</div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="opacity-90">Tag Specifications</div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <div className="text-4xl font-bold mb-2">Active</div>
              <div className="opacity-90">Development</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            Start Exploring Nostr Implementation Possibilities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the specifications that power the Nostr protocol, learn from the community, 
            and contribute to the future of decentralized communication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg" asChild>
              <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">
                Browse All NIPs
                <Search className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
              <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-5 w-5" />
                Publish Custom NIP
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Open Source
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Decentralized
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Community-Driven
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}