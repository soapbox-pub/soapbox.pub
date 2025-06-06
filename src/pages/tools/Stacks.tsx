import { ArrowRight, Brain, Zap, Share2, Download, Search, GitBranch, Users, Terminal, PlayCircle, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FeaturedStacks } from "@/components/FeaturedStacks";
import { useSEO } from "@/hooks/useSEO";

export default function Stacks() {
  // Set custom SEO for Stacks page
  useSEO({
    title: 'Stacks - AI-First Development Templates on Nostr | Decentralized Code Sharing',
    description: 'Discover and share AI-powered development templates on Nostr. Build applications faster with decentralized project templates, built-in AI assistance, and censorship-resistant sharing.',
    type: 'website',
    image: '/assets/images/stacks.png',
    keywords: 'stacks, ai templates, nostr development, decentralized templates, ai-first development, code sharing, project templates, dork ai, rapid development',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Stacks",
      "description": "AI-First Development Templates on Nostr",
      "applicationCategory": "Development Platform",
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
        "Decentralized template sharing on Nostr",
        "AI-powered development with Dork",
        "Censorship-resistant code templates",
        "Rapid application bootstrapping"
      ]
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-emerald-200">
                  🤖 AI-First Development
                </Badge>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Stacks
                  </span>
                </h1>
                <p className="text-2xl font-medium text-gray-700">
                  AI-First Development Templates on Nostr
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  A decentralized template-sharing platform built on Nostr, designed specifically to jumpstart AI development. 
                  Publish AI-first project templates, quickly bootstrap working apps, and deploy functional applications in minutes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg" asChild>
                  <a href="https://getstacks.dev/" target="_blank" rel="noopener noreferrer">
                    Explore Stacks
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Quick Start */}
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                <div className="text-gray-400 mb-2">Quick Start:</div>
                <div className="text-green-400">$ npm install -g @getstacks/stacks</div>
                <div className="text-green-400">$ stacks mkstack</div>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Nostr Protocol
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Censorship Resistant
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  AI-Powered
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Video Embed */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border">
                <div className="aspect-video bg-gray-100">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/QyBtU0cmIb0?start=2" 
                    title="Stacks: AI-First Development on Nostr"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="rounded-t-2xl"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Stacks: AI-First Development</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    See how Stacks enables rapid AI development with decentralized templates and built-in AI assistance.
                  </p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <a href="https://www.youtube.com/watch?v=QyBtU0cmIb0&t=2s" target="_blank" rel="noopener noreferrer">
                      <PlayCircle className="mr-2 h-4 w-4" />
                      Watch on YouTube
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MkStack Prominent Feature */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-violet-100 text-violet-700 border-violet-200 mb-4">
              ⭐ Featured Stack
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Try Building a Nostr App with <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">MKStack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Want to see Stacks in action? Check out MKstack, a Nostr template that demonstrates the power of AI-first development on Nostr.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">What's Inside MKStack?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Package className="h-4 w-4 text-violet-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Nostrbook MCP Integration</h4>
                      <p className="text-gray-600">Queryable documentation that supercharges AI workflows with Nostr protocol knowledge.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Built-in Nostr Login</h4>
                      <p className="text-gray-600">Complete authentication system with NIP-07 browser signing and account management.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Brain className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Context Files</h4>
                      <p className="text-gray-600">Structured project context that helps AI agents understand your codebase and requirements.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Start Commands */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Quick Start</h3>
                <div className="bg-gray-900 rounded-lg p-6 space-y-3 overflow-hidden">
                  <div className="text-gray-400 text-sm">Add MKStack to your collection:</div>
                  <div className="font-mono text-green-400 text-sm break-all">
                    $ stacks add naddr1qvzqqqrhl5pzqprpljlvcnpnw3pejvkkhrc3y6wvmd7vjuad0fg2ud3dky66gaxaqqrk66mnw3skx6c4g6ltw
                  </div>
                  <div className="text-gray-400 text-sm">Create a new project:</div>
                  <div className="font-mono text-green-400 text-sm">$ stacks mkstack</div>
                  <div className="text-gray-400 text-sm">Tell Dork what to build:</div>
                  <div className="font-mono text-white text-sm break-words">"Please build a NIP-28 group chat app with Nostr login"</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white shadow-xl border-2 border-violet-200">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto">
                      <Zap className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">MKStack Template</h3>
                      <p className="text-gray-600">The complete framework for building Nostr applications with AI assistance</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-violet-600">50+</div>
                        <div className="text-xs text-gray-600">NIPs Supported</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">8 Min</div>
                        <div className="text-xs text-gray-600">Avg Build Time</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">AI-First</div>
                        <div className="text-xs text-gray-600">Development</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Button className="w-full bg-violet-600 hover:bg-violet-700" asChild>
                        <a href="https://getstacks.dev/stack/naddr1qvzqqqrhl5pzqprpljlvcnpnw3pejvkkhrc3y6wvmd7vjuad0fg2ud3dky66gaxaqqrk66mnw3skx6c4g6ltw" target="_blank" rel="noopener noreferrer">
                          <Download className="mr-2 h-4 w-4" />
                          Get MKStack
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="/tools/mkstack">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How Stacks Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              How Stacks Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From template discovery to deployment, powered by Nostr's decentralized infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Share2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Decentralized on Nostr</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Stacks are shared via Nostr events, meaning they're portable, censorship-resistant, and social. Templates can't be removed or censored.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                    Kind 30717 events
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                    Permanent availability
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                    Global distribution
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI-Powered Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Built-in AI agent "Dork" helps generate boilerplate code, answer questions about dependencies, and guide deployments.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3"></div>
                    Context-aware AI
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3"></div>
                    Code generation
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3"></div>
                    Deployment guidance
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Terminal className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Simple CLI Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Install the Stacks CLI once and access any template with a simple command. No complex setup or configuration needed.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    npm install -g @getstacks/stacks
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    stacks add [naddr]
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    stacks [alias]
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Templates */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Featured Stacks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple websites to complex applications and even game ROMs - explore the variety of templates available on Stacks.
            </p>
          </div>

          <FeaturedStacks />
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Get Started in 3 Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From installation to deployment - build and share AI-powered applications in minutes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Download className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Install & Add</h3>
              <p className="text-gray-600">
                Install Stacks CLI globally and add any template using its naddr identifier. 
                View your collection with <code className="bg-gray-100 px-2 py-1 rounded">stacks list</code>.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-left font-mono text-sm text-white overflow-hidden">
                <div className="text-green-400 break-words">$ npm install -g @getstacks/stacks</div>
                <div className="text-green-400 mt-1 break-words">$ stacks add [naddr]</div>
                <div className="text-gray-400 mt-1">$ stacks list</div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-teal-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Terminal className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Run & Build</h3>
              <p className="text-gray-600">
                Run any stack to create a project in your current directory. Use Dork AI agent 
                to help build your app with natural language prompts.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-left font-mono text-sm text-white overflow-hidden">
                <div className="text-green-400">$ stacks [alias]</div>
                <div className="text-gray-400 mt-1 break-words">Enter project name: my-app</div>
                <div className="text-blue-400 mt-1 break-words">&lt;o_o&gt; Dork: What do you need?</div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Deploy</h3>
              <p className="text-gray-600">
                Deploy your application instantly with built-in Surge integration. 
                Your app goes live with just one command.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-left font-mono text-sm text-white overflow-hidden">
                <div className="text-green-400">$ npm run dev</div>
                <div className="text-green-400 mt-1">$ npm run deploy</div>
                <div className="text-blue-400 mt-1 break-words">🚀 Deployed to surge.sh!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Provider Configuration */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Configure Your AI Provider</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stacks supports multiple AI providers to power Dork's code generation and assistance. 
              Configure your preferred provider to get started with AI-powered development.
            </p>
            
            <div className="bg-gray-900 rounded-lg p-6 max-w-2xl mx-auto overflow-hidden">
              <div className="text-gray-400 text-sm mb-2">Configure your AI provider:</div>
              <div className="font-mono text-green-400 text-sm break-words">$ stacks configure</div>
              <div className="text-gray-400 text-sm mt-2">Choose "AI Provider" and follow the prompts</div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 shadow-md border">
                <h4 className="font-semibold text-gray-900 mb-2">OpenRouter</h4>
                <p className="text-sm text-gray-600 mb-3">Access to multiple AI models through a single API</p>
                <div className="text-xs text-gray-500">
                  Get your API key from openrouter.ai/settings/keys
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border">
                <h4 className="font-semibold text-gray-900 mb-2">PayPerQ</h4>
                <p className="text-sm text-gray-600 mb-3">Pay-per-query AI service with competitive pricing</p>
                <div className="text-xs text-gray-500">
                  OpenAI-compatible API at ppq.ai
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md border">
                <h4 className="font-semibold text-gray-900 mb-2">Routstr</h4>
                <p className="text-sm text-gray-600 mb-3">Bitcoin Lightning payments with Cashu tokens</p>
                <div className="text-xs text-gray-500">
                  Use Cashu tokens for anonymous payments
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="outline" asChild>
                <a href="https://getstacks.dev/docs/providers" target="_blank" rel="noopener noreferrer">
                  View All Supported Providers
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stacks Protocol */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Built on the Stacks Protocol
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Stacks Protocol defines how project templates and AI agents are structured, shared, and consumed on the Nostr network.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Protocol Components</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <GitBranch className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">stack.json</h4>
                      <p className="text-gray-600">Metadata for project templates including dependencies, configuration, and structure.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Brain className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">agent.json</h4>
                      <p className="text-gray-600">Configuration for AI agents that understand your project structure and requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Package className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">CONTEXT.md</h4>
                      <p className="text-gray-600">Project context that provides AI agents with domain knowledge and best practices.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Share2 className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Nostr Integration</h4>
                      <p className="text-gray-600">Published as kind 30717 events with unique naddr identifiers for decentralized discovery.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white shadow-xl border">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Publish Your Own Stack</h3>
                      <p className="text-gray-600">Share your templates with the world</p>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm overflow-hidden">
                        <div className="text-gray-400 mb-2">Create your stack.json:</div>
                        <div className="text-green-400">$ stacks init</div>
                        <div className="text-gray-400 mt-2 mb-2">Publish to Nostr:</div>
                        <div className="text-green-400">$ stacks publish</div>
                      </div>
                      <div className="text-center">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                          <a href="https://getstacks.dev/publish" target="_blank" rel="noopener noreferrer">
                            <Share2 className="mr-2 h-4 w-4" />
                            Publish Your Stack
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Part of the Nostr Development Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stacks works alongside other powerful tools to provide the complete Nostr development experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-violet-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-violet-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nostrify</h3>
                <p className="text-gray-600 mb-6">
                  Bring your projects to life on Nostr with simple tools for relays, storage, signers, moderation policies, and more.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/tools/nostrify" target="_blank" rel="noopener noreferrer">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nostrbook MCP</h3>
                <p className="text-gray-600 mb-6">
                  A comprehensive registry of Nostr documentation. Structured, detailed knowledge about Nostr for both humans and AI.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="/tools/nostrbook" target="_blank" rel="noopener noreferrer">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dork AI Agent</h3>
                <p className="text-gray-600 mb-6">
                  Built-in AI assistant that helps generate code, answer questions about dependencies, and guide deployments.
                </p>
                <Button variant="outline" className="w-full" disabled>
                  <Terminal className="mr-2 h-4 w-4" />
                  Built into Stacks
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Start Building with AI-First Development
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join developers worldwide using Stacks to build the next generation of applications with AI assistance and decentralized infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold" asChild>
              <a href="https://getstacks.dev/" target="_blank" rel="noopener noreferrer">
                <Search className="mr-2 h-5 w-5" />
                Explore Stacks
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 text-lg font-semibold" asChild>
              <a href="https://getstacks.dev/stack/naddr1qvzqqqrhl5pzqprpljlvcnpnw3pejvkkhrc3y6wvmd7vjuad0fg2ud3dky66gaxaqqrk66mnw3skx6c4g6ltw" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Try MKStack
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-sm opacity-90">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Open Source
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Decentralized
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              AI-Powered
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}