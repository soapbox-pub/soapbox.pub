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
                  The Complete Framework for Building Social Platforms
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Create custom social platforms and applications with our battle-tested framework. 
                  Powers multiple successful platforms including Bookstr, Blobbi, and geocaching sites.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 text-lg">
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  View Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Production Ready
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Scalable Architecture
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">MK Stack Architecture</h3>
                  <p className="text-sm text-gray-600">Flexible, modular, and production-ready</p>
                </div>
                
                <div className="space-y-4">
                  {/* Frontend Layer */}
                  <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-violet-700">Frontend</span>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">React • TypeScript • Tailwind</div>
                  </div>
                  
                  {/* API Layer */}
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-blue-700">API Layer</span>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">GraphQL • REST • WebSockets</div>
                  </div>
                  
                  {/* Backend Layer */}
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-700">Backend</span>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Node.js • PostgreSQL • Redis</div>
                  </div>
                  
                  {/* Infrastructure */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Infrastructure</span>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Docker • Kubernetes • CDN</div>
                  </div>
                </div>
              </div>
              
              {/* Success Metrics */}
              <div className="absolute -bottom-6 left-4 right-4">
                <div className="bg-white rounded-xl shadow-lg p-4 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-600">15+</div>
                    <div className="text-xs text-gray-600">Platforms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">25K+</div>
                    <div className="text-xs text-gray-600">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">99%</div>
                    <div className="text-xs text-gray-600">Uptime</div>
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
              Everything You Need for Social Platform Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MK Stack provides a comprehensive foundation that scales from prototype to production.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Modular Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Flexible component system that adapts to your needs. Build exactly what you want without unnecessary complexity.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-violet-600 rounded-full mr-3"></div>
                    Plugin architecture
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-violet-600 rounded-full mr-3"></div>
                    Microservice ready
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-violet-600 rounded-full mr-3"></div>
                    Component isolation
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Rapid Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Get from idea to launch faster with pre-built components, generators, and development tools.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Code generators
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Hot reloading
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Pre-built components
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Multi-Protocol Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Built-in support for multiple protocols including Nostr, ActivityPub, and traditional APIs.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Nostr integration
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    ActivityPub bridge
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    REST/GraphQL APIs
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Production-grade security with authentication, authorization, rate limiting, and audit trails.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    JWT authentication
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    Role-based access
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                    Audit logging
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Deployment Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Docker containers, Kubernetes configs, and CI/CD pipelines included for seamless deployment.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    Docker support
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    K8s manifests
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3"></div>
                    CI/CD templates
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-violet-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Community Features</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Rich social features including profiles, feeds, messaging, groups, and content moderation tools.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    User management
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Content moderation
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3"></div>
                    Real-time features
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with the latest technologies and best practices for performance, scalability, and developer experience.
            </p>
          </div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
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

            <TabsContent value="backend" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Node.js</h3>
                    <p className="text-sm text-gray-600">High-performance JavaScript runtime</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gray-800 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Express.js</h3>
                    <p className="text-sm text-gray-600">Fast and minimalist web framework</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Layers className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">GraphQL</h3>
                    <p className="text-sm text-gray-600">Flexible API query language</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Socket.io</h3>
                    <p className="text-sm text-gray-600">Real-time bidirectional communication</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="database" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">PostgreSQL</h3>
                    <p className="text-sm text-gray-600">Advanced relational database</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Layers className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Redis</h3>
                    <p className="text-sm text-gray-600">In-memory caching and sessions</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Prisma</h3>
                    <p className="text-sm text-gray-600">Type-safe database toolkit</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-purple-700 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Elasticsearch</h3>
                    <p className="text-sm text-gray-600">Full-text search and analytics</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="deployment" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Package className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Docker</h3>
                    <p className="text-sm text-gray-600">Containerization for consistent deployments</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Layers className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Kubernetes</h3>
                    <p className="text-sm text-gray-600">Container orchestration at scale</p>
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
                    <h3 className="font-semibold mb-2">CDN</h3>
                    <p className="text-sm text-gray-600">Global content delivery network</p>
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
              Built with MK Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real platforms serving thousands of users, built on MK Stack foundation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    Decentralized social reading platform where book lovers discover, review, and discuss literature.
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
              <div className="aspect-video bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-medium text-gray-700">Blobbi</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Blobbi</h3>
                    <Badge variant="secondary">File Storage</Badge>
                  </div>
                  <p className="text-gray-600">
                    Decentralized file storage and sharing platform with advanced privacy and encryption features.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>10,000+ files stored</span>
                    <Button variant="outline" size="sm">
                      Visit Platform
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-green-200 to-teal-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-medium text-gray-700">GeoNostr</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">GeoNostr</h3>
                    <Badge variant="secondary">Geocaching</Badge>
                  </div>
                  <p className="text-gray-600">
                    Location-based social platform for geocaching enthusiasts with real-time GPS integration.
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>2,500+ geocachers</span>
                    <Button variant="outline" size="sm">
                      Visit Platform
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
              Get Started with MK Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From development to production in three simple steps.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-violet-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Code className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Clone & Setup</h3>
              <p className="text-gray-600">
                Clone the MK Stack repository and run the setup script. All dependencies 
                and configurations are handled automatically.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-left font-mono text-sm text-white">
                <div>$ git clone mkstack</div>
                <div>$ npm run setup</div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Layers className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Customize</h3>
              <p className="text-gray-600">
                Configure your platform features, branding, and integrations using our 
                intuitive configuration system and generators.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-left font-mono text-sm text-white">
                <div>$ mk generate:feature</div>
                <div>$ mk config:branding</div>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Deploy</h3>
              <p className="text-gray-600">
                Deploy to your preferred platform using our pre-configured Docker containers 
                and deployment scripts. Scale as you grow.
              </p>
              <div className="bg-gray-900 rounded-lg p-4 text-left font-mono text-sm text-white">
                <div>$ mk deploy:production</div>
                <div>✅ Platform deployed!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Build Your Platform with MK Stack
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join the growing community of developers building the next generation of social platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-violet-600 hover:bg-gray-100">
              Start Building
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-violet-600">
              <Code className="mr-2 h-5 w-5" />
              View Documentation
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Production Ready
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Open Source
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Community Support
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}