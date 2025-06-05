import { ArrowRight, Brain, Zap, Share2, Download, Search, Star, GitBranch, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Stacks() {
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
                  🤖 AI Project Templates
                </Badge>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Stacks
                  </span>
                </h1>
                <p className="text-2xl font-medium text-gray-700">
                  Decentralized AI Project Template Marketplace
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Share and discover AI project templates on our decentralized platform. Find the perfect 
                  starter for your next AI project or share your own templates with the community.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg">
                  Browse Templates
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                  <Share2 className="mr-2 h-5 w-5" />
                  Share Your Stack
                </Button>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-md">
                <div className="flex">
                  <Input 
                    placeholder="Search AI templates..." 
                    className="pr-12 text-lg py-3"
                  />
                  <Button className="absolute right-1 top-1 bottom-1 bg-emerald-600 hover:bg-emerald-700">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Decentralized Storage
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Community Driven
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Version Control
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Featured Template Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/api/placeholder/48/48" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">ChatBot Starter Kit</h3>
                    <p className="text-sm text-gray-600">Complete RAG chatbot template with OpenAI integration</p>
                  </div>
                  <Badge variant="secondary">Featured</Badge>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Python</Badge>
                    <Badge variant="outline" className="text-xs">OpenAI</Badge>
                    <Badge variant="outline" className="text-xs">RAG</Badge>
                    <Badge variant="outline" className="text-xs">FastAPI</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span>127</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        <span>2.3k</span>
                      </div>
                    </div>
                    <span>Updated 2 days ago</span>
                  </div>
                </div>
                
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Use This Template
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-4 right-4">
                <div className="bg-white rounded-xl shadow-lg p-4 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">500+</div>
                    <div className="text-xs text-gray-600">Templates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600">50K+</div>
                    <div className="text-xs text-gray-600">Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">1,000+</div>
                    <div className="text-xs text-gray-600">Contributors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Why Developers Choose Stacks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most comprehensive marketplace for AI project templates, built on decentralized infrastructure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI-First Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Curated collection of production-ready AI templates covering machine learning, NLP, computer vision, and more.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                    LLM integrations
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                    ML model templates
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
                    Best practices included
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <Share2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Decentralized Sharing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Built on Nostr protocol ensuring templates are always available and can't be censored or removed.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3"></div>
                    Permanent storage
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3"></div>
                    No platform lock-in
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mr-3"></div>
                    Global accessibility
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <GitBranch className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Version Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Track template evolution with built-in versioning. See what changed and easily rollback if needed.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    Semantic versioning
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    Change tracking
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    Release notes
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Rating, reviews, and community contributions ensure high-quality templates that solve real problems.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Peer reviews
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Quality ratings
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Active maintenance
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Smart Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Advanced search and filtering help you find exactly what you need based on technology, use case, and complexity.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Tag-based search
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Popularity sorting
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Personalized recommendations
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-emerald-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>One-Click Deploy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Get started instantly with templates that include deployment configs for popular platforms and cloud providers.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Docker ready
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Cloud configs
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Environment setup
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
              Popular Templates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most loved AI project templates from our community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-emerald-100 text-emerald-700">LL</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">LLM Chat Interface</h3>
                      <p className="text-sm text-gray-600">by @aixpert</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Popular</Badge>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Beautiful chat interface with streaming responses, conversation history, and multiple LLM provider support.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">React</Badge>
                  <Badge variant="outline" className="text-xs">OpenAI</Badge>
                  <Badge variant="outline" className="text-xs">Streaming</Badge>
                  <Badge variant="outline" className="text-xs">TypeScript</Badge>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span>234</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      <span>5.2k</span>
                    </div>
                  </div>
                  <span>v2.1.0</span>
                </div>
                
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Download className="mr-2 h-4 w-4" />
                  Use Template
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-blue-100 text-blue-700">CV</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">Computer Vision API</h3>
                      <p className="text-sm text-gray-600">by @visiondev</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Trending</Badge>
                </div>
                
                <p className="text-gray-600 mb-4">
                  FastAPI backend for image classification, object detection, and face recognition with GPU acceleration.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">Python</Badge>
                  <Badge variant="outline" className="text-xs">FastAPI</Badge>
                  <Badge variant="outline" className="text-xs">PyTorch</Badge>
                  <Badge variant="outline" className="text-xs">CUDA</Badge>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span>189</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      <span>3.1k</span>
                    </div>
                  </div>
                  <span>v1.4.2</span>
                </div>
                
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Download className="mr-2 h-4 w-4" />
                  Use Template
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-purple-100 text-purple-700">RA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">RAG Knowledge Base</h3>
                      <p className="text-sm text-gray-600">by @ragmaster</p>
                    </div>
                  </div>
                  <Badge variant="secondary">New</Badge>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Complete RAG system with vector database, document processing, and conversational AI capabilities.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">Python</Badge>
                  <Badge variant="outline" className="text-xs">LangChain</Badge>
                  <Badge variant="outline" className="text-xs">ChromaDB</Badge>
                  <Badge variant="outline" className="text-xs">Streamlit</Badge>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span>156</span>
                    </div>
                    <div className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      <span>2.8k</span>
                    </div>
                  </div>
                  <span>v3.0.0</span>
                </div>
                
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Download className="mr-2 h-4 w-4" />
                  Use Template
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 py-3">
              Browse All Templates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              How Stacks Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From discovery to deployment in three simple steps.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-emerald-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Search className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Discover</h3>
              <p className="text-gray-600">
                Search our decentralized marketplace for AI templates. Filter by technology, 
                use case, and popularity to find exactly what you need.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-teal-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Download className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Download</h3>
              <p className="text-gray-600">
                Get the complete template with all dependencies, configuration files, 
                and documentation. Everything you need to start building.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Deploy</h3>
              <p className="text-gray-600">
                Follow the included deployment guide or use one-click deploy configs 
                for popular platforms. Go from template to production in minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Trusted by AI Developers Worldwide
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join the growing community of developers building the future of AI.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="opacity-90">Active Templates</div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="opacity-90">Downloads</div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="opacity-90">Contributors</div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="opacity-90">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            Start Building Your AI Project Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse templates, find inspiration, and accelerate your AI development with our community-driven marketplace.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-8 py-3 text-lg">
              Browse Templates
              <Search className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
              <Share2 className="mr-2 h-5 w-5" />
              Share Your Template
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Free to Use
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Community Driven
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Always Available
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}