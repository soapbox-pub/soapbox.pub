import { ArrowRight, FileText, Code, Users, Search, Globe, GitBranch, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { RecentNips } from "@/components/RecentNips";
import { FeaturedDevelopers } from "@/components/FeaturedDevelopers";
import { useSEO } from "@/hooks/useSEO";

export default function NostrHub() {
  // Set custom SEO for NostrHub page
  useSEO({
    title: 'NostrHub - Your One-Stop Shop for Nostr Development | NIPs, Apps, Community',
    description: 'Comprehensive platform for Nostr developers. Discover NIPs, find compatible apps, share repositories, and connect with the developer community. Everything you need to build on Nostr.',
    type: 'website',
    image: '/assets/nostrhub-screenshot.png',
    keywords: 'nostrhub, nostr development, nostr nips, nostr apps, developer community, app discovery, repository sharing, nostr platform, decentralized development',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "NostrHub",
      "description": "Your one-stop shop for Nostr development - NIPs, apps, repositories, and community",
      "applicationCategory": "Development Platform",
      "operatingSystem": "Web-based",
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
        "NIPs repository with official and custom implementations",
        "App discovery organized by event kinds",
        "Repository sharing and collaboration",
        "Built-in developer community (NIP-72)",
        "Interactive comments and discussions",
        "Author profiles and project tracking"
      ]
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
                  🔧 Protocol Development
                </Badge>
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    NostrHub
                  </span>
                </h1>
                <p className="text-2xl font-medium text-gray-700">
                  Your One-Stop Shop for Nostr Development
                </p>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover NIPs, find compatible apps, share repositories, and connect with the Nostr 
                  developer community. Everything you need to build on Nostr, all in one place.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg" asChild>
                  <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">
                    Explore NostrHub
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
                  <a href="https://nostrhub.io/apps" target="_blank" rel="noopener noreferrer">
                    <Code className="mr-2 h-5 w-5" />
                    Browse Apps
                  </a>
                </Button>
              </div>
          
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  NIPs Repository
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  App Discovery
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Developer Community
                </div>
              </div>
            </div>

            <div className="relative">
              {/* NIP Showcase */}
              <RecentNips />
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-4 right-4">
                <div className="bg-white rounded-xl shadow-lg p-4 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">NIPs</div>
                    <div className="text-xs text-gray-600">Repository</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">Apps</div>
                    <div className="text-xs text-gray-600">Discovery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-violet-600">Dev</div>
                    <div className="text-xs text-gray-600">Community</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Everything You Need to Build on Nostr
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NostrHub brings together all the essential resources for Nostr development in one comprehensive platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-purple-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  NIPs Repository
                </CardTitle>
                <CardDescription>
                  Access official and custom Nostr Implementation Possibilities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Browse the complete collection of NIPs, from official protocol specifications to innovative custom implementations. Submit your own NIPs and help shape the future of Nostr.
                </p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href="https://nostrhub.io/" target="_blank" rel="noopener noreferrer">
                    Browse NIPs <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-pink-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  App Discovery
                </CardTitle>
                <CardDescription>
                  Find apps by supported event types and publish your own
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Discover Nostr applications organized by the event kinds they support. Perfect for finding compatible apps or showcasing your new creation to the community.
                </p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href="https://nostrhub.io/apps" target="_blank" rel="noopener noreferrer">
                    Browse Apps <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-violet-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center">
                    <GitBranch className="h-6 w-6 text-white" />
                  </div>
                  Repository Sharing
                </CardTitle>
                <CardDescription>
                  Share your Nostr projects and attract contributors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Showcase your open-source Nostr projects, find collaborators, and discover interesting repositories from other developers in the ecosystem.
                </p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href="https://nostrhub.io/repositories" target="_blank" rel="noopener noreferrer">
                    Share Repository <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-indigo-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  Developer Community
                </CardTitle>
                <CardDescription>
                  Built-in NIP-72 community for Nostr developers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Connect with fellow Nostr developers in our dedicated community space. Share ideas, get help, and collaborate on the future of decentralized social media.
                </p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <a href="https://nostrhub.io/communities" target="_blank" rel="noopener noreferrer">
                    Join Community <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
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
              Solving the fragmented developer experience in the Nostr ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">The Scattered Developer Experience</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The Nostr ecosystem is growing rapidly, but developers have been scattered across different 
                  resources, documentation sites, and communities. Finding the right NIPs, discovering compatible 
                  apps, sharing projects, and connecting with other developers has been a fragmented experience.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  NostrHub solves this by providing a comprehensive platform that brings together everything you 
                  need as a Nostr developer in one place, while maintaining the decentralized principles that 
                  make Nostr special.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Common Developer Challenges</h4>
                <p className="text-gray-700 mb-4">
                  Developers often struggle to find relevant NIPs for their use cases, discover compatible 
                  applications that support specific event kinds, share their projects with the right audience, 
                  and connect with other developers working on similar problems.
                </p>
                <p className="text-gray-700">
                  NostrHub addresses these challenges by providing a centralized hub that doesn't compromise 
                  the decentralized nature of Nostr itself - everything is built on Nostr protocols and 
                  published as Nostr events.
                </p>
              </div>
            </div>

            <div className="relative space-y-8">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-6">What NostrHub Provides</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h5 className="font-semibold mb-2">Unified Resource Hub</h5>
                      <p className="text-purple-100 text-sm">All essential Nostr development resources in one place</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h5 className="font-semibold mb-2">App Discovery</h5>
                      <p className="text-purple-100 text-sm">Find applications organized by supported event kinds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h5 className="font-semibold mb-2">Developer Community</h5>
                      <p className="text-purple-100 text-sm">Connect with peers and collaborate on projects</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h5 className="font-semibold mb-2">Repository Sharing</h5>
                      <p className="text-purple-100 text-sm">Showcase projects and attract contributors</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* NostrHub Screenshot */}
              <div className="bg-white rounded-2xl shadow-lg border overflow-hidden">
                <img 
                  src="/assets/nostrhub-screenshot.png" 
                  alt="NostrHub Interface Screenshot" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-16">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Streamlined Developer Experience</h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
                NostrHub eliminates the friction in Nostr development by bringing together all the resources 
                you need in one comprehensive platform designed for developers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-purple-200">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Find What You Need</h4>
                <p className="text-gray-600">
                  Quickly discover NIPs, compatible apps, and repositories relevant to your project. 
                  Enhanced search and filtering make finding resources effortless.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-pink-200">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Showcase Your Work</h4>
                <p className="text-gray-600">
                  Share your applications, repositories, and custom NIPs with the community. 
                  Get visibility and attract contributors to your projects.
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 hover:border-violet-200">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Connect & Collaborate</h4>
                <p className="text-gray-600">
                  Join the developer community, share ideas, get help with implementation challenges, 
                  and collaborate on the future of decentralized social media.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* NostrHub Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
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
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Author Profiles</h3>
                  <p className="text-gray-600">
                    Every developer gets a profile showcasing all their published NIPs, Apps, and Repos. Build your 
                    reputation as a protocol contributor and let others discover your innovations.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Track your impact:</strong> See adoption metrics, community feedback, 
                  and how your NIPs are being implemented across the ecosystem.
                </p>
              </div>
            </Card>

            <Card className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interactive Comments</h3>
                  <p className="text-gray-600">
                    Engage in discussions on official and custom NIPs, Apps, and repositories. Ask questions, provide 
                    feedback, suggest improvements, and collaborate with the global developer community.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-pink-50 to-violet-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Real-time collaboration:</strong> Comments are published as Nostr events, 
                  ensuring they're decentralized and censorship-resistant too.
                </p>
              </div>
            </Card>
          </div>

          {/* Featured Developers Section */}
          <FeaturedDevelopers />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            Start Building with NostrHub Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the comprehensive platform for Nostr development. Discover resources, connect with 
            developers, and contribute to the future of decentralized communication.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-6 py-3" asChild>
              <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">
                Explore Platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-6 py-3" asChild>
              <a href="https://nostrhub.io/apps" target="_blank" rel="noopener noreferrer">
                Browse Apps
                <Code className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-6 py-3" asChild>
              <a href="https://nostrhub.io/repositories" target="_blank" rel="noopener noreferrer">
                Share Repository
                <GitBranch className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-6 py-3" asChild>
              <a href="https://nostrhub.io/communities" target="_blank" rel="noopener noreferrer">
                Join Community
                <Users className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              NIPs Repository
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              App Discovery
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Developer Community
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}