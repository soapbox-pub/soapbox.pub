import { ArrowRight, MessageSquare, Zap, Rocket, Code, Users, PlayCircle, Palette, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ShakespeareMailchimpForm } from "@/components/ShakespeareMailchimpForm";
import { useSEO } from "@/hooks/useSEO";

export default function Shakespeare() {
  // Set custom SEO for Shakespeare page
  useSEO({
    title: 'Shakespeare - AI-Powered Website Builder on Nostr | Build with AI',
    description: 'Build professional websites through natural conversation with AI assistants. Shakespeare runs entirely on the Nostr protocol, giving you true freedom and control over your data and identity.',
    type: 'website',
    image: '/assets/blog/announcing-shakespeare/shakespeare-cover.svg',
    keywords: 'shakespeare, ai website builder, nostr, decentralized, ai development, website builder, conversational ai, nsp, nostr service providers',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Shakespeare",
      "description": "AI-powered website builder that runs entirely on the Nostr protocol",
      "applicationCategory": "Development Tools",
      "operatingSystem": "Web Browser",
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
        "Conversational AI building",
        "Live preview system",
        "Instant deployment",
        "True freedom from Big Tech",
        "Transparent pay-per-use pricing"
      ]
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
                  🎭 AI Website Builder
                </Badge>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Shakespeare
                  </span>
                </h1>
                <p className="text-2xl font-medium text-gray-700">
                  Build Websites Through Conversation with AI
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Shakespeare brings the power of AI to everyone with a revolutionary website builder that runs entirely on the Nostr protocol. 
                  Create professional websites through natural conversation with AI assistants, all while maintaining complete control over your data and identity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg" asChild>
                  <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                    Start Building
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
                  <a href="/blog/announcing-shakespeare" rel="noopener noreferrer">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Read Announcement
                  </a>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Nostr Protocol
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  AI-Powered
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Truly Free
                </div>
              </div>
            </div>

            <div className="relative">
              {/* How It Works Overview */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Websites in 3 Steps</h3>
                  <p className="text-sm text-gray-600">From conversation to deployment</p>
                </div>
                
                <div className="space-y-4">
                  {/* Step 1 */}
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <MessageSquare className="h-4 w-4 text-purple-600 mr-2" />
                          <span className="text-sm font-semibold text-purple-700">Describe Your Vision</span>
                        </div>
                        <div className="text-xs text-gray-700">Tell the AI what website you want to build</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <Zap className="h-4 w-4 text-blue-600 mr-2" />
                          <span className="text-sm font-semibold text-blue-700">Watch It Build</span>
                        </div>
                        <div className="text-xs text-gray-700">See your website come to life in real-time</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <Rocket className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm font-semibold text-green-700">Deploy Instantly</span>
                        </div>
                        <div className="text-xs text-gray-700">Your website goes live automatically</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Call to Action */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-xs text-gray-500 mb-3">Ready to start building?</div>
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-3 text-center">
                        <div className="text-sm font-semibold">Visit shakespeare.diy</div>
                        <div className="text-xs opacity-90">Connect with Nostr & start building</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Revolutionary Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shakespeare combines the power of AI with the freedom of the Nostr protocol, creating a completely unique website building experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Conversational AI Building</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Natural language interface that understands context and remembers your project history. Just describe what you want and watch it come to life.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Context-aware AI
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Project memory
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Multiple NSPs
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Live Preview System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Side-by-side view with chat interface and live preview. Every change appears instantly with no refreshing or waiting for builds.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Real-time updates
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Desktop & mobile
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Instant feedback
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Instant Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Websites are automatically deployed with public URLs the moment they're created. Download source code as ZIP with one click.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    Auto deployment
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    Public URLs
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    Source download
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>True Freedom</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Break free from Big Tech constraints. No platform lock-in, censorship resistance, and self-sovereign identity through Nostr.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    No lock-in
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Censorship resistant
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Open source
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Shakespeare Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              How Shakespeare Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of web development through natural conversation with AI assistants powered by Nostr Service Providers.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-l-4 border-purple-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 text-purple-600 dark:text-purple-400 font-bold text-sm min-w-[2rem] text-center">1</div>
                  <div>
                    <h3 className="font-semibold mb-2">🗽 Connect with Freedom</h3>
                    <p className="text-sm text-muted-foreground">
                      Use any Nostr browser extension (Alby, nos2x, Flamingo) as your login. No corporate accounts or email required — your decentralized identity gives you true ownership and freedom.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-blue-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 text-blue-600 dark:text-blue-400 font-bold text-sm min-w-[2rem] text-center">2</div>
                  <div>
                    <h3 className="font-semibold mb-2">🤖 Choose Your AI Assistant</h3>
                    <p className="text-sm text-muted-foreground">
                      Browse available <a href="/blog/understanding-nostr-service-providers" className="text-blue-600 hover:underline">Nostr Service Providers (NSPs)</a>, each offering different AI capabilities, specializations, and pricing. Choose freely from a competitive marketplace instead of being locked into one vendor.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-green-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 text-green-600 dark:text-green-400 font-bold text-sm min-w-[2rem] text-center">3</div>
                  <div>
                    <h3 className="font-semibold mb-2">💬 Start Building</h3>
                    <p className="text-sm text-muted-foreground">
                      Describe your website in natural language. The AI begins working immediately, showing progress in real-time through the live preview window.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-orange-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-2 text-orange-600 dark:text-orange-400 font-bold text-sm min-w-[2rem] text-center">4</div>
                  <div>
                    <h3 className="font-semibold mb-2">🔄 Iterate & Refine</h3>
                    <p className="text-sm text-muted-foreground">
                      Chat with the AI to make changes: "Add a contact form," "Make the header blue," or "Create a pricing section." See changes instantly in the preview.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-red-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 dark:bg-red-900 rounded-full p-2 text-red-600 dark:text-red-400 font-bold text-sm min-w-[2rem] text-center">5</div>
                  <div>
                    <h3 className="font-semibold mb-2">🚀 Deploy & Share</h3>
                    <p className="text-sm text-muted-foreground">
                      Your website is automatically deployed with a public URL. Download the complete source code as a ZIP file or share your live website immediately.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Can Build */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              What You Can Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shakespeare's AI can create virtually any type of website or web application. From simple landing pages to complex web apps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
                <CardContent className="p-4">
                  <p className="text-sm italic">
                    "Build a modern portfolio website for a web developer with project showcases, an about section, and a contact form. Use a dark theme with blue accents."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
                <CardContent className="p-4">
                  <p className="text-sm italic">
                    "Create a Twitter-like social media app for Nostr with user profiles, real-time feeds, and the ability to post notes and images."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
                <CardContent className="p-4">
                  <p className="text-sm italic">
                    "Build an e-commerce store for handmade jewelry with product galleries, shopping cart, and a clean, elegant design."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
                <CardContent className="p-4">
                  <p className="text-sm italic">
                    "Make a cryptocurrency dashboard that tracks Bitcoin and Ethereum prices with charts and price alerts."
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-purple-200 dark:border-purple-800">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">
                    🎨 View Live Examples
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Explore our showcase of real websites and applications built with our technology stack.
                  </p>
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <a href="/showcase" rel="noopener noreferrer">
                      Visit Showcase →
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-blue-200 dark:border-blue-800">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                    🛠️ Powered by MKStack
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Shakespeare uses the MKStack framework for comprehensive Nostr development capabilities.
                  </p>
                  <Button 
                    asChild 
                    variant="outline"
                    className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300"
                  >
                    <a href="/tools/mkstack" rel="noopener noreferrer">
                      Learn About MKStack →
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Powered by NSPs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Powered by Nostr Service Providers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shakespeare is powered by NSPs — a revolutionary new way to access AI tools and services through the decentralized Nostr protocol.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Choose Your AI Provider</h3>
                <p className="text-gray-600">
                  Unlike traditional AI services that lock you into a single provider, Shakespeare lets you choose from multiple NSPs, 
                  each offering different AI models, capabilities, and pricing. This means you get the freedom to select the AI provider 
                  that best fits your specific needs and budget.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Multiple Providers</h4>
                    <p className="text-gray-600">Choose from a competitive marketplace of AI providers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Sparkles className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Specialized Capabilities</h4>
                    <p className="text-gray-600">Each NSP offers unique AI models and specialized tools</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">True Freedom</h4>
                    <p className="text-gray-600">No vendor lock-in, switch providers anytime</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 border-purple-200 dark:border-purple-800">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">🚀 MKStack NSP</h4>
                  <p className="text-muted-foreground mb-4">
                    The flagship NSP that brings the full power of the MKStack framework to Shakespeare. Offers comprehensive Nostr development capabilities with 50+ NIPs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Claude Sonnet 3.5</Badge>
                    <Badge variant="outline" className="text-xs">Nostr Specialized</Badge>
                    <Badge variant="outline" className="text-xs">Pay-per-use</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">🆓 Free Gemini Flash NSP</h4>
                  <p className="text-muted-foreground mb-4">
                    Currently offered for free during Shakespeare's beta period. Powered by Google's Gemini Flash model, perfect for trying out Shakespeare.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Gemini Flash</Badge>
                    <Badge variant="outline" className="text-xs">Free Tier</Badge>
                    <Badge variant="outline" className="text-xs">Beta Access</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center">
            <Card className="border-dashed border-2 border-blue-200 dark:border-blue-800 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-300">
                  🔍 Learn More About NSPs
                </h3>
                <p className="text-muted-foreground mb-4">
                  Discover how to choose the right NSP for your projects and learn how developers can create their own NSPs.
                </p>
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <a href="/blog/understanding-nostr-service-providers">
                    📚 Complete Guide to NSPs →
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparent Pricing */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Transparent Pay-Per-Use Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No subscriptions, no hidden fees. Pay only for actual AI generation time with real-time cost tracking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-green-200 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Simple Landing Page</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$2-5</div>
                <p className="text-sm text-gray-600">Portfolio, business card sites</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Complex Web App</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">$10-25</div>
                <p className="text-sm text-gray-600">E-commerce, dashboards</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Small Changes</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">$0.50-2</div>
                <p className="text-sm text-gray-600">Tweaks, color changes</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-green-900 dark:text-green-100">
              💸 How Pricing Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Payment Methods:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• USD via Stripe</li>
                  <li>• Bitcoin Lightning</li>
                  <li>• Pay NSPs directly</li>
                  <li>• Real-time cost tracking</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What You Pay For:</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Actual AI generation time</li>
                  <li>• No monthly subscriptions</li>
                  <li>• No hidden fees</li>
                  <li>• Transparent pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              🎭 Get Started with Shakespeare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shakespeare is currently in private beta with invite-only access. We're carefully onboarding users to ensure the best possible experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Ready to Build the Future?</h3>
                <p className="text-gray-600">
                  Join thousands of creators, developers, and visionaries who are already building with Shakespeare. 
                  Experience the future of web development through natural conversation with AI.
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  asChild 
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3"
                >
                  <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                    🚀 Start Building at shakespeare.diy
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Or join the waitlist below for email updates and priority access
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="border-purple-200 dark:border-purple-800">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">
                    🚀 Try Shakespeare Now
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Visit our website to explore Shakespeare and request beta access directly.
                  </p>
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                      Visit shakespeare.diy →
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-blue-200 dark:border-blue-800">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                    📚 Learn More
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Read our announcement blog post to learn more about Shakespeare's revolutionary features.
                  </p>
                  <Button 
                    asChild 
                    variant="outline"
                    className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300"
                  >
                    <a href="/blog/announcing-shakespeare">
                      Read Announcement →
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Waitlist Form */}
          <div className="max-w-2xl mx-auto">
            <ShakespeareMailchimpForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}