import { ArrowRight, Globe, Compass, Users, Star, Search, ExternalLink, Zap, Shield, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
                  🌐 Project Discovery
                </Badge>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    NostrHub
                  </span>
                </h1>
                <p className="text-2xl font-medium text-gray-700">
                  Discover the Nostr Ecosystem
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Your gateway to exploring the entire Nostr ecosystem. Discover projects, tools, 
                  clients, and services built on the Nostr protocol, all in one place.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Explore Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                  <Globe className="mr-2 h-5 w-5" />
                  Submit Project
                </Button>
              </div>

              {/* Search & Filter */}
              <div className="bg-white rounded-lg border p-4 space-y-4 shadow-sm">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input 
                      placeholder="Search projects, tools, clients..." 
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
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clients">Clients</SelectItem>
                      <SelectItem value="relays">Relays</SelectItem>
                      <SelectItem value="tools">Developer Tools</SelectItem>
                      <SelectItem value="libraries">Libraries</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web">Web</SelectItem>
                      <SelectItem value="mobile">Mobile</SelectItem>
                      <SelectItem value="desktop">Desktop</SelectItem>
                      <SelectItem value="cli">Command Line</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  500+ Projects Listed
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Community Curated
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Always Updated
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Project Showcase */}
              <div className="bg-white rounded-2xl shadow-2xl border">
                {/* Header */}
                <div className="p-6 border-b">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Trending Projects</h3>
                    <Badge variant="secondary">Live Updates</Badge>
                  </div>
                </div>
                
                {/* Project List */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-blue-600 text-white">D</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold">Ditto</h4>
                      <p className="text-sm text-gray-600">Community platform builder</p>
                    </div>
                    <div className="text-right text-sm">
                      <div className="flex items-center text-yellow-600">
                        <Star className="h-3 w-3 mr-1" />
                        <span>500+</span>
                      </div>
                      <div className="text-gray-500">Community Platform</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-purple-600 text-white">I</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold">Iris</h4>
                      <p className="text-sm text-gray-600">Social network client</p>
                    </div>
                    <div className="text-right text-sm">
                      <div className="flex items-center text-yellow-600">
                        <Star className="h-3 w-3 mr-1" />
                        <span>350+</span>
                      </div>
                      <div className="text-gray-500">Web Client</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-green-600 text-white">A</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold">Amethyst</h4>
                      <p className="text-sm text-gray-600">Android Nostr client</p>
                    </div>
                    <div className="text-right text-sm">
                      <div className="flex items-center text-yellow-600">
                        <Star className="h-3 w-3 mr-1" />
                        <span>280+</span>
                      </div>
                      <div className="text-gray-500">Mobile App</div>
                    </div>
                  </div>
                </div>
                
                {/* Footer */}
                <div className="p-4 border-t bg-gray-50 rounded-b-2xl">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Projects
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-4 right-4">
                <div className="bg-white rounded-xl shadow-lg p-4 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-xs text-gray-600">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">50+</div>
                    <div className="text-xs text-gray-600">Categories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">Daily</div>
                    <div className="text-xs text-gray-600">Updates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Explore by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From clients and relays to developer tools and infrastructure, find exactly what you're looking for.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Web Clients</CardTitle>
                <CardDescription>Browser-based Nostr applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-blue-600">45+</div>
                  <p className="text-sm text-gray-600">Active projects</p>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Browse Category
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-green-200 transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Relays</CardTitle>
                <CardDescription>Nostr relay implementations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-green-600">25+</div>
                  <p className="text-sm text-gray-600">Relay software</p>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Browse Category
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-purple-200 transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Compass className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Mobile Apps</CardTitle>
                <CardDescription>iOS and Android applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-purple-600">30+</div>
                  <p className="text-sm text-gray-600">Mobile clients</p>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Browse Category
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-orange-200 transition-colors cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Developer Tools</CardTitle>
                <CardDescription>Libraries, SDKs, and utilities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-orange-600">80+</div>
                  <p className="text-sm text-gray-600">Tools & libraries</p>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Browse Category
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighted projects that are pushing the boundaries of what's possible on Nostr.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured Project 1 */}
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow border-0">
              <div className="aspect-video bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center relative overflow-hidden rounded-t-lg">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600">Featured</Badge>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-lg font-medium text-gray-700">Satellite Earth</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Satellite Earth</h3>
                    <div className="flex items-center text-yellow-600">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="text-sm">4.8</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Advanced web client with focus on user experience, customization, and powerful features for content creators.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Web Client</Badge>
                    <Badge variant="outline" className="text-xs">React</Badge>
                    <Badge variant="outline" className="text-xs">Modern UI</Badge>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>5K+ users</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Try Now
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Project 2 */}
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow border-0">
              <div className="aspect-video bg-gradient-to-br from-green-200 to-emerald-200 flex items-center justify-center relative overflow-hidden rounded-t-lg">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-600">New</Badge>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-lg font-medium text-gray-700">NostrGuard</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">NostrGuard</h3>
                    <div className="flex items-center text-yellow-600">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="text-sm">4.6</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Privacy-focused relay with advanced spam filtering, user verification, and content moderation tools.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Relay</Badge>
                    <Badge variant="outline" className="text-xs">Privacy</Badge>
                    <Badge variant="outline" className="text-xs">Moderation</Badge>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Zap className="h-4 w-4 mr-1" />
                        <span>99.9% uptime</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Learn More
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Project 3 */}
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow border-0">
              <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center relative overflow-hidden rounded-t-lg">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-600">Popular</Badge>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <Compass className="h-10 w-10 text-white" />
                  </div>
                  <p className="text-lg font-medium text-gray-700">NostrDev Kit</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">NostrDev Kit</h3>
                    <div className="flex items-center text-yellow-600">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="text-sm">4.9</span>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Comprehensive development toolkit with SDKs, testing tools, and documentation for building Nostr apps.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Dev Tools</Badge>
                    <Badge variant="outline" className="text-xs">TypeScript</Badge>
                    <Badge variant="outline" className="text-xs">Testing</Badge>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Rocket className="h-4 w-4 mr-1" />
                        <span>1K+ developers</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Get Started
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="px-8 py-3">
              View All Featured Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Community-Driven Discovery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NostrHub is powered by the Nostr community, ensuring accurate and up-to-date project information.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Community Curated</h3>
              <p className="text-gray-600">
                Projects are submitted and reviewed by the Nostr community, ensuring quality and relevance.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Star className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Rating System</h3>
              <p className="text-gray-600">
                Community ratings and reviews help you find the best projects for your specific needs.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-lg">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Real-time Updates</h3>
              <p className="text-gray-600">
                Project information is continuously updated to reflect the latest developments and releases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Project CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-bold text-gray-900">
              Share Your Nostr Project
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help grow the Nostr ecosystem by adding your project to NostrHub. 
              Get discovered by developers and users worldwide.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Submit Project</h3>
                <p className="text-sm text-gray-600">Share your project details and screenshots</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Community Review</h3>
                <p className="text-sm text-gray-600">The community verifies and categorizes your project</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Get Discovered</h3>
                <p className="text-sm text-gray-600">Reach thousands of Nostr users and developers</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
              Submit Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Ecosystem Stats */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">
              Nostr Ecosystem at a Glance
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Tracking the growth and diversity of the Nostr ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="opacity-90">Total Projects</div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="opacity-90">Categories</div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <div className="text-4xl font-bold mb-2">1,000+</div>
              <div className="opacity-90">Developers</div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">
              <div className="text-4xl font-bold mb-2">25</div>
              <div className="opacity-90">Languages Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            Start Exploring the Nostr Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing projects, find the perfect tools for your needs, 
            and connect with the growing Nostr community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
              Browse All Projects
              <Search className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
              <Globe className="mr-2 h-5 w-5" />
              Submit Project
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Free to Browse
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Community Driven
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Always Updated
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}