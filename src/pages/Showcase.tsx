import { ArrowRight, ExternalLink, Users, BookOpen, Palette, MapPin, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Showcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-azure-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="bg-azure-100 text-azure-700 border-azure-200 mb-6">
            🌟 Built with Soapbox Tools
          </Badge>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            See Our Tools in{" "}
            <span className="bg-gradient-to-r from-azure to-blue-600 bg-clip-text text-transparent">
              Action
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real platforms and applications built by developers and organizations using Soapbox tools. 
            These showcase the power and flexibility of our toolkit in action.
          </p>
        </div>
      </section>

      {/* Featured Platforms */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Featured Platforms</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Ditto.pub */}
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-azure-200">
              <div className="h-64 bg-gradient-to-r from-azure to-blue-600 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30">Built with Ditto</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">Ditto.pub</h3>
                  <p className="text-white/90">The flagship community platform</p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 text-lg">
                  The flagship Ditto community platform showcasing all the features of our community-building tool. 
                  A thriving social space with custom themes, Lightning Zaps, and cross-platform connectivity.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                      Custom branding
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                      Lightning monetization
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                      ActivityPub bridge
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-azure rounded-full mr-3"></div>
                      Advanced moderation
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>5,000+ users</span>
                    <span>50,000+ posts</span>
                    <span>24/7 uptime</span>
                  </div>
                </div>
                
                <Button className="w-full bg-azure hover:bg-azure-600 text-white">
                  Visit Platform
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Henhouse.social */}
            <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-pink-200">
              <div className="h-64 bg-gradient-to-r from-pink-500 to-rose-600 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30">Built with Ditto</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">Henhouse.social</h3>
                  <p className="text-white/90">Women-focused community</p>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <p className="text-gray-700 mb-6 text-lg">
                  The first Nostr community specifically designed for women. A safe, welcoming space that 
                  demonstrates how Ditto can be customized for specific communities and audiences.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      Community-focused design
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      Safe space policies
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      Custom moderation
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      Women-centric features
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span>1,200+ members</span>
                    <span>Growing daily</span>
                    <span>High engagement</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  Visit Community
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* MKstack Platforms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">MKstack Platforms</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Innovative platforms built with our flexible MKstack framework, showing the versatility 
              of our platform-building tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Bookstr */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-violet-500 to-purple-600 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30">MKstack</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Bookstr</h3>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge variant="secondary" className="text-xs">Social Reading</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  A decentralized platform for book lovers to discover, review, and discuss literature. 
                  Features social reading, book clubs, and author interactions.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-2"></div>
                    Book discovery engine
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-2"></div>
                    Reading progress tracking
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mr-2"></div>
                    Social book clubs
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  Visit Platform
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Blobbi */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-emerald-500 to-teal-600 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30">MKstack</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Blobbi</h3>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge variant="secondary" className="text-xs">Creative Platform</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Creative platform for artists and designers to showcase their work, connect with clients, 
                  and monetize their creativity through direct sales and commissions.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                    Portfolio showcase
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                    Commission system
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                    Payment integration
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  Visit Platform
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* GeoCache Network */}
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-orange-500 to-red-600 relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 text-white border-white/30">MKstack</Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">GeoCache Network</h3>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge variant="secondary" className="text-xs">Location-Based</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Modern geocaching platform with social features, real-time tracking, and community challenges. 
                  Bringing the treasure hunting hobby into the digital age.
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    GPS integration
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    Social challenges
                  </div>
                  <div className="flex items-center text-xs text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                    Community leaderboards
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  Visit Platform
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Platforms */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-azure-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Community Platforms</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Diverse communities built with Ditto, each with their own unique culture and focus.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cobrafuma.com */}
            <Card className="relative min-h-[280px] overflow-hidden bg-gradient-to-r from-green-600 to-green-800 text-white">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Cobrafuma.com</h3>
                  <p className="text-sm opacity-90 mb-4">
                    A thriving Brazilian community on Nostr, fostering Portuguese-language discussions 
                    and cultural exchange.
                  </p>
                </div>
                
                <div>
                  <div className="mb-4 space-y-1">
                    <Badge className="bg-white/20 text-white border-white/30 text-xs mr-2">2,000+ members</Badge>
                    <Badge className="bg-white/20 text-white border-white/30 text-xs mr-2">Portuguese language</Badge>
                    <Badge className="bg-white/20 text-white border-white/30 text-xs">Cultural focus</Badge>
                  </div>
                  
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                    Visit Community
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* TechNostr */}
            <Card className="relative min-h-[280px] overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">TechNostr</h3>
                  <p className="text-sm opacity-90 mb-4">
                    A community for developers and tech enthusiasts building on Nostr and other 
                    decentralized technologies.
                  </p>
                </div>
                
                <div>
                  <div className="mb-4 space-y-1">
                    <Badge className="bg-white/20 text-white border-white/30 text-xs mr-2">800+ developers</Badge>
                    <Badge className="bg-white/20 text-white border-white/30 text-xs mr-2">Technical discussions</Badge>
                    <Badge className="bg-white/20 text-white border-white/30 text-xs">Open source focus</Badge>
                  </div>
                  
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                    Visit Community
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* ArtistsNostr */}
            <Card className="relative min-h-[280px] overflow-hidden bg-gradient-to-r from-pink-600 to-orange-600 text-white">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">ArtistsNostr</h3>
                  <p className="text-sm opacity-90 mb-4">
                    A creative community where artists share their work, collaborate, and support 
                    each other through Zaps and engagement.
                  </p>
                </div>
                
                <div>
                  <div className="mb-4 space-y-1">
                    <Badge className="bg-white/20 text-white border-white/30 text-xs mr-2">1,500+ artists</Badge>
                    <Badge className="bg-white/20 text-white border-white/30 text-xs mr-2">Creative showcase</Badge>
                    <Badge className="bg-white/20 text-white border-white/30 text-xs">Monetization focus</Badge>
                  </div>
                  
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
                    Visit Community
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-azure to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Ready to Build Your Platform?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join the growing ecosystem of platforms built with Soapbox tools. Start building your vision today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg" asChild>
              <Link to="/tools">Explore Tools</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-azure">
             <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">Try Nostr with Ditto</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}