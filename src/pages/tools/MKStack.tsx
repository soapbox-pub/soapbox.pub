import { ArrowRight, Layers, Zap, Rocket, Code, Globe, Users, ExternalLink, PlayCircle, GitBranch, Package, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";


export default function MKStack() {
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
                  🏗️ Platform Framework
                </Badge>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    MK Stack
                  </span>
                </h1>
                <p className="text-2xl font-medium text-gray-700">
                  The Complete Framework for Building Nostr Clients
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Build powerful Nostr applications with AI-first development. From social feeds to private messaging, 
                  MKStack provides everything you need to create decentralized apps on the Nostr protocol.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 text-lg" asChild>
                  <a href="https://getstacks.dev/stack/naddr1qvzqqqrhl5pzqprpljlvcnpnw3pejvkkhrc3y6wvmd7vjuad0fg2ud3dky66gaxaqqrk66mnw3skx6c4g6ltw" target="_blank" rel="noopener noreferrer">
                    Start Building
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  View Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Nostr Protocol
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  AI-First Development
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Open Source
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Architecture Diagram */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Nostr Client Architecture</h3>
                  <p className="text-sm text-gray-600">Built for the decentralized web</p>
                </div>
                
                <div className="space-y-4">
                  {/* Frontend Layer */}
                  <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-violet-700">Frontend</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">React • TypeScript • Tailwind</div>
                  </div>
                  
                  {/* Nostr Layer */}
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-purple-700">Nostr Protocol</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Nostrify • NIP Support • Relays</div>
                  </div>
                  
                  {/* Features Layer */}
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-700">Features</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Auth • Messaging • Media • Zaps</div>
                  </div>
                  
                  {/* AI Tools */}
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-700">AI Development</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Dork Agent • Nostrbook MCP • Context</div>
                  </div>
                </div>
              </div>
              
              {/* Success Metrics */}
              <div className="absolute -bottom-6 left-4 right-4">
                <div className="bg-white rounded-xl shadow-lg p-4 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-600">50+</div>
                    <div className="text-xs text-gray-600">NIPs Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">8 Minutes</div>
                    <div className="text-xs text-gray-600">Build Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">AI-First</div>
                    <div className="text-xs text-gray-600">Development</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demos Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Built in Minutes, Not Months
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the power of AI-driven development with MKStack. Each of these applications was built with just one prompt. After you get an MVP from the first prompt, you can then refine and build new features with the built-in Stacks agent.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Group Chat Demo */}
            <Card className="bg-white/80 backdrop-blur-sm border-2 hover:border-violet-200 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-video bg-gray-100 border-b overflow-hidden">
                <img 
                  src="/assets/demos/group-chat-app-demo.png" 
                  alt="Group Chat Application Demo"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Group Chat Application</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-700">The Prompt:</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-green-400">
                    <div className="text-gray-500">$ dork</div>
                    <div>"Build me a group chat application"</div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="http://mkstack-groupchat.surge.sh/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Goodreads Alternative Demo */}
            <Card className="bg-white/80 backdrop-blur-sm border-2 hover:border-violet-200 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-video bg-gray-100 border-b overflow-hidden">
                  <img 
                    src="/assets/demos/mkstack-bookstr-demo.png" 
                    alt="Decentralized Book Review Site Demo"
                    className="w-full h-full object-cover"
                  />
                </div>
              <CardHeader>
                <CardTitle className="text-xl">Decentralized Goodreads</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-700">The Prompt:</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-green-400">
                    <div className="text-gray-500">$ dork</div>
                    <div>"Build a decentralized goodreads alternative. Use OpenLibrary API for book data."</div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="w-full">
                    <a href="http://mkstack-bookstr.surge.sh/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Chess Game Demo */}
            <Card className="bg-white/80 backdrop-blur-sm border-2 hover:border-violet-200 transition-all duration-300 hover:shadow-xl">
                <div className="aspect-video bg-gray-100 border-b overflow-hidden">
                  <img 
                    src="/assets/demos/mkstack-chess-game.png" 
                    alt="Chess Game Demo"
                    className="w-full h-full object-cover"
                  />
                </div>
              <CardHeader>
                <CardTitle className="text-xl">Chess Game</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-700">The Prompt:</h4>
                  <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono text-green-400">
                    <div className="text-gray-500">$ dork</div>
                    <div>"Build a chess game with NIP 64"</div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button variant="outline" className="w-full">
                    <a href="http://mkstack-chess.surge.sh/" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Everything You Need for Nostr Client Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MK Stack provides comprehensive Nostr protocol support with AI-powered development tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Complete Nostr Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Full Nostr protocol support with 50+ NIPs implemented. Connect to relays, manage keys, and build decentralized apps.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-violet-600 rounded-full mr-3"></div>
                    Nostrify framework
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-violet-600 rounded-full mr-3"></div>
                    Multi-relay support
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-violet-600 rounded-full mr-3"></div>
                    Event validation
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI-Powered Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Build Nostr apps in days, not weeks. Dork AI agent and Nostrbook MCP provide intelligent assistance.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Dork AI agent
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Nostrbook MCP
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Context-aware prompts
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Rich Social Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Complete social platform features: profiles, feeds, messaging, reactions, zaps, and communities.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Social feeds (NIP-01)
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Private messaging (NIP-17)
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Communities (NIP-72)
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Cryptographic Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Built-in cryptographic features: key management, encryption, signatures, and secure authentication.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    NIP-07 browser signing
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    NIP-44 encryption
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    Event verification
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Media & Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  File uploads via Blossom servers, Lightning zaps, and eCash integration for monetization.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Blossom file storage
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Lightning zaps (NIP-57)
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    eCash wallets (NIP-60)
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Advanced Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Long-form content, live events, marketplaces, calendars, and specialized applications.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Articles (NIP-23)
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Live events (NIP-53)
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Marketplaces (NIP-15)
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nostr Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Comprehensive Nostr Protocol Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MKStack implements 50+ NIPs (Nostr Implementation Possibilities) covering everything from basic messaging to advanced features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Social Features</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• User profiles (NIP-01)</div>
                  <div>• Follow lists (NIP-02)</div>
                  <div>• Reactions (NIP-25)</div>
                  <div>• Reposts (NIP-18)</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Messaging</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Private DMs (NIP-17)</div>
                  <div>• Public chat (NIP-28)</div>
                  <div>• Group chat (NIP-29)</div>
                  <div>• Encryption (NIP-44)</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Payments</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Lightning zaps (NIP-57)</div>
                  <div>• Cashu wallets (NIP-60)</div>
                  <div>• Nutzaps (NIP-61)</div>
                  <div>• Wallet connect (NIP-47)</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Content</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>• Long-form (NIP-23)</div>
                  <div>• File metadata (NIP-94)</div>
                  <div>• Live events (NIP-53)</div>
                  <div>• Calendars (NIP-52)</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Built-in Components & Hooks</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-purple-600 mb-4">Authentication</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• LoginArea component</li>
                  <li>• useCurrentUser hook</li>
                  <li>• Account switching</li>
                  <li>• NIP-07 browser signing</li>
                  <li>• Key management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-4">Data & Publishing</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• useNostr hook</li>
                  <li>• useNostrPublish hook</li>
                  <li>• useAuthor hook</li>
                  <li>• Event validation</li>
                  <li>• Relay management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-4">Media & UI</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• useUploadFile hook</li>
                  <li>• NoteContent component</li>
                  <li>• EditProfileForm</li>
                  <li>• RelaySelector</li>
                  <li>• Rich text rendering</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Nostr-First Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for Nostr development with modern web technologies and AI-powered tools.
            </p>
          </div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="nostr">Nostr</TabsTrigger>
              <TabsTrigger value="ai">AI Tools</TabsTrigger>
              <TabsTrigger value="deployment">Deployment</TabsTrigger>
            </TabsList>

            <TabsContent value="frontend" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">React 18</h3>
                    <p className="text-sm text-gray-600">Modern React with hooks and concurrent features</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">TypeScript</h3>
                    <p className="text-sm text-gray-600">Type safety and enhanced developer experience</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Layers className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Tailwind CSS</h3>
                    <p className="text-sm text-gray-600">Utility-first CSS framework for rapid styling</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Vite</h3>
                    <p className="text-sm text-gray-600">Lightning-fast build tool and dev server</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="nostr" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Nostrify</h3>
                    <p className="text-sm text-gray-600">Comprehensive Nostr framework</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">nostr-tools</h3>
                    <p className="text-sm text-gray-600">Core Nostr utilities and helpers</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Layers className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Blossom</h3>
                    <p className="text-sm text-gray-600">Decentralized file storage</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-orange-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">WebSockets</h3>
                    <p className="text-sm text-gray-600">Real-time relay connections</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="ai" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Dork Agent</h3>
                    <p className="text-sm text-gray-600">Built-in AI development assistant</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Layers className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Nostrbook MCP</h3>
                    <p className="text-sm text-gray-600">Queryable Nostr documentation</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Context Files</h3>
                    <p className="text-sm text-gray-600">AI-optimized project context</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-orange-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Claude/GPT</h3>
                    <p className="text-sm text-gray-600">Multiple LLM model support</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="deployment" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Surge</h3>
                    <p className="text-sm text-gray-600">One-command static site deployment</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Layers className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Vite</h3>
                    <p className="text-sm text-gray-600">Lightning-fast build and dev server</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <GitBranch className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">GitHub Actions</h3>
                    <p className="text-sm text-gray-600">Automated CI/CD workflows</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-orange-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Static Hosting</h3>
                    <p className="text-sm text-gray-600">Deploy anywhere, no servers needed</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Nostr Apps Built with MK Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real Nostr applications built using MKStack and AI-first development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-medium text-gray-700">Chorus</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Chorus</h3>
                    <Badge variant="secondary">Communities</Badge>
                  </div>
                  <p className="text-gray-600">
                    Facebook-style groups with built-in eCash wallet for fundraising.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Community Platform</span>
                    <Button variant="outline" size="sm">
                      Visit Platform
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Package className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-medium text-gray-700">Bookstr</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Bookstr</h3>
                    <Badge variant="secondary">Social Reading</Badge>
                  </div>
                  <p className="text-gray-600">
                    Decentralized social reading platform where book lovers discover, review, and discuss literature on Nostr.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>5,000+ active readers</span>
                    <Button variant="outline" size="sm">
                      Visit Platform
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-blue-200 to-cyan-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-medium text-gray-700">NIP-28 Chat</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">NIP-28 Chat</h3>
                    <Badge variant="secondary">Public Chat</Badge>
                  </div>
                  <p className="text-gray-600">
                    Example Nostr chat application built with MKStack demonstrating NIP-28 public chat implementation.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Demo application</span>
                    <Button variant="outline" size="sm">
                      Visit Demo
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Build Your Nostr App with AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From idea to deployed Nostr application in minutes using AI-powered development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-violet-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Code className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Install & Create</h3>
              <p className="text-gray-600">
                Install Stacks CLI and create a new Nostr app using MKStack template. 
                Everything is set up automatically.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-left font-mono text-sm text-white">
                <div>$ npm install -g @getstacks/stacks</div>
                <div>$ stacks mkstack</div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Layers className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Prompt Dork</h3>
              <p className="text-gray-600">
                Tell Dork AI agent what you want to build. It uses Nostrbook MCP to 
                understand Nostr protocols and build your app.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-left font-mono text-sm text-white">
                <div>Dork: What do you need?</div>
                <div>You: Build a NIP-28 group chat app</div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Deploy</h3>
              <p className="text-gray-600">
                Deploy your Nostr app instantly with built-in Surge integration. 
                Your app goes live in seconds.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-left font-mono text-sm text-white">
                <div>$ npm run deploy</div>
                <div>✅ App deployed to Surge!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Build Your Nostr App with MK Stack
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join the growing community of developers building decentralized applications on Nostr with AI-powered tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-violet-600 hover:bg-gray-100" asChild>
              <a href="https://getstacks.dev/stack/naddr1qvzqqqrhl5pzqprpljlvcnpnw3pejvkkhrc3y6wvmd7vjuad0fg2ud3dky66gaxaqqrk66mnw3skx6c4g6ltw" target="_blank" rel="noopener noreferrer">
                Start Building
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-violet-600">
              <Code className="mr-2 h-5 w-5" />
              View Documentation
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              50+ NIPs Supported
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              AI-First Development
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Open Source
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}