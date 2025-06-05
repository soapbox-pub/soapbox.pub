import { ArrowRight, Code, Shield, Package, Globe, Terminal, Layers, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Nostrify() {
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
                  ⚡ Developer Framework
                </Badge>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Nostrify
                  </span>
                </h1>
                <p className="text-2xl font-medium text-gray-700">
                  The TypeScript Framework for Building on Nostr
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Bring your projects to life on Nostr with simple tools for relays, storage, 
                  signers, and moderation. Pure TypeScript, works everywhere.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Documentation
                </Button>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white font-mono text-sm">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-1">
                  <div><span className="text-gray-400">$</span> npm install @nostrify/nostrify</div>
                  <div className="text-gray-400">// Start building in minutes</div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Code Example */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-500 font-mono">main.ts</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div><span className="text-blue-600">import</span> <span className="text-gray-700">{'{ NostrEvent }'}</span> <span className="text-blue-600">from</span> <span className="text-green-600">'@nostrify/nostrify'</span>;</div>
                  <div className="text-gray-400">// Simple, powerful, TypeScript-first</div>
                  <div></div>
                  <div><span className="text-blue-600">const</span> <span className="text-gray-700">event</span>: <span className="text-blue-600">NostrEvent</span> = {'{'};</div>
                  <div className="ml-4"><span className="text-gray-600">kind</span>: <span className="text-orange-600">1</span>,</div>
                  <div className="ml-4"><span className="text-gray-600">content</span>: <span className="text-green-600">'Hello Nostr!'</span>,</div>
                  <div className="ml-4"><span className="text-gray-600">tags</span>: [],</div>
                  <div>{'}'}</div>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-4 right-4">
                <div className="bg-white rounded-xl shadow-lg p-4 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-xs text-gray-600">TypeScript</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">Cross</div>
                    <div className="text-xs text-gray-600">Platform</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-600">MIT</div>
                    <div className="text-xs text-gray-600">License</div>
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
              Everything You Need for Nostr Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nostrify provides a comprehensive toolkit that handles the complexity of Nostr protocol, 
              so you can focus on building amazing applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Terminal className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Relay Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Built-in relay server, client connections, and subscription management with automatic reconnection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Event Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Flexible storage backends including SQL, KV stores, and in-memory options with query optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Signing & Crypto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  NIP-07 signer integration, key management, and cryptographic operations for secure applications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Cross Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Works in browsers, Node.js, Deno, and mobile apps. Write once, run everywhere.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              See Nostrify in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, intuitive APIs that make Nostr development a joy.
            </p>
          </div>

          <Tabs defaultValue="relay" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="relay">Relay</TabsTrigger>
              <TabsTrigger value="storage">Storage</TabsTrigger>
              <TabsTrigger value="signer">Signer</TabsTrigger>
              <TabsTrigger value="policy">Policy</TabsTrigger>
            </TabsList>

            <TabsContent value="relay" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Simple Relay Setup</CardTitle>
                  <CardDescription>
                    Create a relay server in just a few lines of code
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
                    <div className="space-y-2">
                      <div><span className="text-blue-400">import</span> <span className="text-gray-300">{'{ NostrRelay }'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@nostrify/nostrify'</span>;</div>
                      <div></div>
                      <div><span className="text-blue-400">const</span> <span className="text-gray-300">relay</span> = <span className="text-blue-400">new</span> <span className="text-yellow-400">NostrRelay</span>({`{`}</div>
                      <div className="ml-4"><span className="text-gray-400">port</span>: <span className="text-orange-400">8080</span>,</div>
                      <div className="ml-4"><span className="text-gray-400">storage</span>: <span className="text-blue-400">new</span> <span className="text-yellow-400">MemoryStore</span>(),</div>
                      <div>{`}`});</div>
                      <div></div>
                      <div><span className="text-blue-400">await</span> <span className="text-gray-300">relay</span>.<span className="text-yellow-400">listen</span>();</div>
                      <div><span className="text-gray-500">// Your relay is now running! 🚀</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="storage" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Flexible Storage Options</CardTitle>
                  <CardDescription>
                    Choose from multiple storage backends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
                    <div className="space-y-2">
                      <div><span className="text-blue-400">import</span> <span className="text-gray-300">{'{ PostgresStore, MemoryStore }'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@nostrify/nostrify'</span>;</div>
                      <div></div>
                      <div><span className="text-gray-500">// Use PostgreSQL for production</span></div>
                      <div><span className="text-blue-400">const</span> <span className="text-gray-300">store</span> = <span className="text-blue-400">new</span> <span className="text-yellow-400">PostgresStore</span>(<span className="text-green-400">'postgresql://...'</span>);</div>
                      <div></div>
                      <div><span className="text-gray-500">// Or memory for development</span></div>
                      <div><span className="text-blue-400">const</span> <span className="text-gray-300">memStore</span> = <span className="text-blue-400">new</span> <span className="text-yellow-400">MemoryStore</span>();</div>
                      <div></div>
                      <div><span className="text-blue-400">await</span> <span className="text-gray-300">store</span>.<span className="text-yellow-400">event</span>(<span className="text-gray-300">event</span>);</div>
                      <div><span className="text-gray-500">// Events are automatically indexed and queryable</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="signer" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Secure Signing</CardTitle>
                  <CardDescription>
                    Integrate with NIP-07 signers seamlessly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
                    <div className="space-y-2">
                      <div><span className="text-blue-400">import</span> <span className="text-gray-300">{'{ NIP07Signer }'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@nostrify/nostrify'</span>;</div>
                      <div></div>
                      <div><span className="text-blue-400">const</span> <span className="text-gray-300">signer</span> = <span className="text-blue-400">new</span> <span className="text-yellow-400">NIP07Signer</span>();</div>
                      <div></div>
                      <div><span className="text-blue-400">const</span> <span className="text-gray-300">event</span> = <span className="text-blue-400">await</span> <span className="text-gray-300">signer</span>.<span className="text-yellow-400">signEvent</span>({`{`}</div>
                      <div className="ml-4"><span className="text-gray-400">kind</span>: <span className="text-orange-400">1</span>,</div>
                      <div className="ml-4"><span className="text-gray-400">content</span>: <span className="text-green-400">'Hello from Nostrify!'</span>,</div>
                      <div className="ml-4"><span className="text-gray-400">tags</span>: [],</div>
                      <div>{`}`});</div>
                      <div></div>
                      <div><span className="text-gray-500">// Event is cryptographically signed ✨</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="policy" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Moderation Policies</CardTitle>
                  <CardDescription>
                    Build smart content filtering with composable policies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
                    <div className="space-y-2">
                      <div><span className="text-blue-400">import</span> <span className="text-gray-300">{'{ AntiSpamPolicy, RateLimitPolicy }'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@nostrify/nostrify'</span>;</div>
                      <div></div>
                      <div><span className="text-blue-400">const</span> <span className="text-gray-300">policies</span> = [</div>
                      <div className="ml-4"><span className="text-blue-400">new</span> <span className="text-yellow-400">AntiSpamPolicy</span>(),</div>
                      <div className="ml-4"><span className="text-blue-400">new</span> <span className="text-yellow-400">RateLimitPolicy</span>(<span className="text-orange-400">10</span>), <span className="text-gray-500">// 10 events/min</span></div>
                      <div>];</div>
                      <div></div>
                      <div><span className="text-blue-400">const</span> <span className="text-gray-300">result</span> = <span className="text-blue-400">await</span> <span className="text-yellow-400">applyPolicies</span>(<span className="text-gray-300">event</span>, <span className="text-gray-300">policies</span>);</div>
                      <div><span className="text-gray-500">// Smart moderation without the complexity</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects Built with Nostrify */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Built with Nostrify
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Amazing projects leveraging Nostrify's powerful framework.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-azure-200 to-blue-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-azure rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-medium text-gray-700">Ditto</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Ditto</h3>
                    <Badge variant="secondary">Platform</Badge>
                  </div>
                  <p className="text-gray-600">
                    Complete community platform builder powered by Nostrify's relay and storage systems.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Community Platform</span>
                    <Button variant="outline" size="sm">
                      View Project
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
                    <Terminal className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-medium text-gray-700">NostrDev</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">NostrDev Tools</h3>
                    <Badge variant="secondary">Developer</Badge>
                  </div>
                  <p className="text-gray-600">
                    Developer toolkit built on Nostrify for testing, debugging, and monitoring Nostr applications.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Development Tools</span>
                    <Button variant="outline" size="sm">
                      View Project
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
                    <Layers className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-medium text-gray-700">NostrBridge</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">NostrBridge</h3>
                    <Badge variant="secondary">Infrastructure</Badge>
                  </div>
                  <p className="text-gray-600">
                    Cross-protocol bridge connecting Nostr with other decentralized networks using Nostrify.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Protocol Bridge</span>
                    <Button variant="outline" size="sm">
                      View Project
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation & Resources */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">
              Learn Nostrify
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guides, tutorials, and documentation to get you building fast.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <Badge>Getting Started</Badge>
                <h3 className="text-xl font-semibold">Quick Start Guide</h3>
                <p className="text-gray-600">Build your first Nostr application with Nostrify in under 10 minutes.</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>10 min read</span>
                  <Button variant="ghost" size="sm">Read Guide</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <Badge>API Reference</Badge>
                <h3 className="text-xl font-semibold">Complete API Documentation</h3>
                <p className="text-gray-600">Detailed documentation for every class, method, and interface in Nostrify.</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Reference</span>
                  <Button variant="ghost" size="sm">Browse API</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <Badge>Advanced</Badge>
                <h3 className="text-xl font-semibold">Building Production Relays</h3>
                <p className="text-gray-600">Learn how to build scalable, production-ready Nostr relays with Nostrify.</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>20 min read</span>
                  <Button variant="ghost" size="sm">Read Tutorial</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 py-3">
              View Full Documentation
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Start Building with Nostrify
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join the growing community of developers building the decentralized future with TypeScript and Nostr.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-blue-600 hover:bg-gray-100">
              Install Nostrify
              <Package className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600">
              <Code className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-lg p-4 font-mono text-sm max-w-md mx-auto">
            <div className="text-left">
              <div><span className="text-blue-300">$</span> npm install @nostrify/nostrify</div>
              <div className="text-blue-200 text-xs mt-1">Ready to use in seconds ⚡</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}