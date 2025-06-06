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
                  🌱 Nostr Development
                </Badge>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Nostrify
                  </span>
                </h1>
                <p className="text-2xl font-medium text-gray-700">
                  Bring your projects to life on Nostr. 🌱
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A flexible TypeScript library for building Nostr apps with relays, signers, 
                  storages, and more. Works in browsers, Node.js, Deno, and mobile apps.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg" asChild>
                  <a href="https://nostrify.dev/start/" target="_blank" rel="noopener noreferrer">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
                  <a href="https://nostrify.dev/" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Documentation
                  </a>
                </Button>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 text-white font-mono text-sm">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-1">
                  <div><span className="text-gray-400">$</span> npx jsr add @nostrify/nostrify</div>
                  <div className="text-gray-400">// Available on JSR, a modern alternative to npm</div>
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
                  <div><span className="text-blue-600">import</span> <span className="text-gray-700">{'{ NostrEvent, NRelay1 }'}</span> <span className="text-blue-600">from</span> <span className="text-green-600">'@nostrify/nostrify'</span>;</div>
                  <div className="text-gray-400">// Simple, powerful, cross-platform</div>
                  <div></div>
                  <div><span className="text-blue-600">const</span> <span className="text-gray-700">relay</span> = <span className="text-blue-600">new</span> <span className="text-yellow-600">NRelay1</span>(<span className="text-green-600">'wss://relay.damus.io'</span>);</div>
                  <div></div>
                  <div><span className="text-blue-600">for await</span> (<span className="text-blue-600">const</span> <span className="text-gray-700">msg</span> <span className="text-blue-600">of</span> <span className="text-gray-700">relay</span>.<span className="text-yellow-600">req</span>([{'{'}])) {'{'}</div>
                  <div className="ml-4"><span className="text-blue-600">if</span> (<span className="text-gray-700">msg</span>[<span className="text-orange-600">0</span>] === <span className="text-green-600">'EVENT'</span>) <span className="text-blue-600">break</span>;</div>
                  <div>{'}'}</div>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-4 right-4">
                <div className="bg-white rounded-xl shadow-lg p-4 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">JSR</div>
                    <div className="text-xs text-gray-600">Modern Registry</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">Async</div>
                    <div className="text-xs text-gray-600">Generators</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-600">NIP-07</div>
                    <div className="text-xs text-gray-600">Compatible</div>
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
              Simple Modules That Do One Thing Well
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nostrify provides flexible building blocks that work together. Each module implements 
              standard interfaces so you can easily switch implementations or build your own.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Terminal className="h-6 w-6 text-white" />
                </div>
                <CardTitle>🛰️ Relays</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Automatically reconnect and gather events efficiently from pools. Uses AsyncGenerators for powerful streaming.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <CardTitle>📦 Storages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Store events in memory, SQL databases, and relays all using the same interface. Interchangeable with relays.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>✒️ Signers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sign events with private keys, hardware wallets, remote signers, and more. Full NIP-07 compatibility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle>📜 Schemas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Parse Nostr events, relay messages, and other untrusted sources with built-in validation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-sky-600 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <CardTitle>👩‍⚖️ Policies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Reject events in clients and relays based on custom rules. Composable moderation pipelines.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle>🖼️ Uploaders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Upload files to Blossom, nostr.build, and more with NIP-94 compatible metadata.
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
              AsyncGenerators, standard interfaces, and powerful abstractions make Nostr development elegant.
            </p>
          </div>

          <Tabs defaultValue="relay" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="relay">Relays</TabsTrigger>
              <TabsTrigger value="storage">Storage</TabsTrigger>
              <TabsTrigger value="signer">Signers</TabsTrigger>
              <TabsTrigger value="policy">Policies</TabsTrigger>
            </TabsList>

            <TabsContent value="relay" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>AsyncGenerator-Based Relay Streaming</CardTitle>
                  <CardDescription>
                    Stream events from relays using for-await loops with automatic cleanup
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
                    <div className="space-y-2">
                      <div><span className="text-blue-400">import</span> <span className="text-gray-300">{'{ NRelay1 }'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@nostrify/nostrify'</span>;</div>
                      <div></div>
                      <div><span className="text-blue-400">const</span> <span className="text-gray-300">relay</span> = <span className="text-blue-400">new</span> <span className="text-yellow-400">NRelay1</span>(<span className="text-green-400">'wss://relay.damus.io'</span>);</div>
                      <div></div>
                      <div><span className="text-blue-400">for await</span> (<span className="text-blue-400">const</span> <span className="text-gray-300">msg</span> <span className="text-blue-400">of</span> <span className="text-gray-300">relay</span>.<span className="text-yellow-400">req</span>([{`{ kinds: [1, 6] }`}])) {`{`}</div>
                      <div className="ml-4"><span className="text-blue-400">if</span> (<span className="text-gray-300">msg</span>[<span className="text-orange-400">0</span>] === <span className="text-green-400">'EVENT'</span>) <span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-gray-300">msg</span>[<span className="text-orange-400">2</span>]);</div>
                      <div className="ml-4"><span className="text-blue-400">if</span> (<span className="text-gray-300">msg</span>[<span className="text-orange-400">0</span>] === <span className="text-green-400">'EOSE'</span>) <span className="text-blue-400">break</span>;</div>
                      <div>{`}`}</div>
                      <div><span className="text-gray-500">// Breaking out of loop automatically sends CLOSE 🚀</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="storage" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Interchangeable Storage Interfaces</CardTitle>
                  <CardDescription>
                    Relays and storages implement the same NStore interface
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
                    <div className="space-y-2">
                      <div><span className="text-blue-400">import</span> <span className="text-gray-300">{'{ NCache, NRelay1 }'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@nostrify/nostrify'</span>;</div>
                      <div></div>
                      <div><span className="text-gray-500">// Both implement NStore interface</span></div>
                      <div><span className="text-blue-400">const</span> <span className="text-gray-300">cache</span> = <span className="text-blue-400">new</span> <span className="text-yellow-400">NCache</span>();</div>
                      <div><span className="text-blue-400">const</span> <span className="text-gray-300">relay</span> = <span className="text-blue-400">new</span> <span className="text-yellow-400">NRelay1</span>(<span className="text-green-400">'wss://relay.damus.io'</span>);</div>
                      <div></div>
                      <div><span className="text-gray-500">// Same interface works on both!</span></div>
                      <div><span className="text-blue-400">await</span> <span className="text-gray-300">cache</span>.<span className="text-yellow-400">event</span>(<span className="text-gray-300">event</span>);</div>
                      <div><span className="text-blue-400">await</span> <span className="text-gray-300">relay</span>.<span className="text-yellow-400">event</span>(<span className="text-gray-300">event</span>);</div>
                      <div></div>
                      <div><span className="text-blue-400">const</span> <span className="text-gray-300">events</span> = <span className="text-blue-400">await</span> <span className="text-gray-300">cache</span>.<span className="text-yellow-400">query</span>([{`{ kinds: [0] }`}]);</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="signer" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>NIP-07 Compatible Signers</CardTitle>
                  <CardDescription>
                    Drop-in replacements for window.nostr with multiple implementations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
                    <div className="space-y-2">
                      <div><span className="text-blue-400">import</span> <span className="text-gray-300">{'{ NSeedSigner }'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@nostrify/nostrify'</span>;</div>
                      <div></div>
                      <div><span className="text-blue-400">const</span> <span className="text-gray-300">signer</span> = <span className="text-blue-400">new</span> <span className="text-yellow-400">NSeedSigner</span>(<span className="text-green-400">'your-seed-phrase...'</span>);</div>
                      <div></div>
                      <div><span className="text-gray-500">// Full NIP-07 interface</span></div>
                      <div><span className="text-blue-400">const</span> <span className="text-gray-300">pubkey</span> = <span className="text-blue-400">await</span> <span className="text-gray-300">signer</span>.<span className="text-yellow-400">getPublicKey</span>();</div>
                      <div><span className="text-blue-400">const</span> <span className="text-gray-300">signed</span> = <span className="text-blue-400">await</span> <span className="text-gray-300">signer</span>.<span className="text-yellow-400">signEvent</span>(<span className="text-gray-300">event</span>);</div>
                      <div></div>
                      <div><span className="text-gray-500">// NIP-44 encryption</span></div>
                      <div><span className="text-blue-400">const</span> <span className="text-gray-300">encrypted</span> = <span className="text-blue-400">await</span> <span className="text-gray-300">signer</span>.<span className="text-gray-300">nip44</span>.<span className="text-yellow-400">encrypt</span>(<span className="text-gray-300">pubkey</span>, <span className="text-green-400">'secret'</span>);</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="policy" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Composable Moderation Policies</CardTitle>
                  <CardDescription>
                    Build smart content filtering with pipelines and custom rules
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm overflow-x-auto">
                    <div className="space-y-2">
                      <div><span className="text-blue-400">import</span> <span className="text-gray-300">{'{ PipePolicy, PowPolicy, KeywordPolicy }'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'@nostrify/policies'</span>;</div>
                      <div></div>
                      <div><span className="text-blue-400">const</span> <span className="text-gray-300">policy</span> = <span className="text-blue-400">new</span> <span className="text-yellow-400">PipePolicy</span>([</div>
                      <div className="ml-4"><span className="text-blue-400">new</span> <span className="text-yellow-400">PowPolicy</span>({`{ difficulty: 20 }`}),</div>
                      <div className="ml-4"><span className="text-blue-400">new</span> <span className="text-yellow-400">KeywordPolicy</span>([<span className="text-green-400">'spam'</span>, <span className="text-green-400">'bitcoin giveaway'</span>]),</div>
                      <div>]);</div>
                      <div></div>
                      <div><span className="text-blue-400">const</span> [<span className="text-gray-300">_</span>, <span className="text-gray-300">eventId</span>, <span className="text-gray-300">ok</span>, <span className="text-gray-300">reason</span>] = <span className="text-blue-400">await</span> <span className="text-gray-300">policy</span>.<span className="text-yellow-400">call</span>(<span className="text-gray-300">event</span>);</div>
                      <div><span className="text-gray-500">// Powerful moderation without complexity</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
                <p className="text-gray-600">Build your first Nostr application with Nostrify - relays, storage, and signers in minutes.</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>5 min read</span>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://nostrify.dev/start/" target="_blank" rel="noopener noreferrer">
                      Read Guide
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <Badge>Documentation</Badge>
                <h3 className="text-xl font-semibold">Complete Documentation</h3>
                <p className="text-gray-600">Explore all modules - relays, storages, signers, policies, uploaders, and integrations.</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Comprehensive</span>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://nostrify.dev/" target="_blank" rel="noopener noreferrer">
                      Browse Docs
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <Badge>Source Code</Badge>
                <h3 className="text-xl font-semibold">GitLab Repository</h3>
                <p className="text-gray-600">Open source TypeScript library. Contribute, report issues, or explore the code.</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>MIT License</span>
                  <Button variant="ghost" size="sm" asChild>
                    <a href="https://gitlab.com/soapbox-pub/nostrify" target="_blank" rel="noopener noreferrer">
                      View Source
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 py-3" asChild>
              <a href="https://nostrify.dev/" target="_blank" rel="noopener noreferrer">
                Visit Nostrify Docs
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
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
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-blue-600 hover:bg-gray-100" asChild>
              <a href="https://nostrify.dev/start/" target="_blank" rel="noopener noreferrer">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <a href="https://gitlab.com/soapbox-pub/nostrify" target="_blank" rel="noopener noreferrer">
                <Code className="mr-2 h-5 w-5" />
                View on GitLab
              </a>
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-lg p-4 font-mono text-sm max-w-md mx-auto">
            <div className="text-left">
              <div><span className="text-blue-300">$</span> npx jsr add @nostrify/nostrify</div>
              <div className="text-blue-200 text-xs mt-1">Available on JSR ⚡</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}