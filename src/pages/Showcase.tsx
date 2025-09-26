import { Users, Search, Code, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MKStackAppsFeed } from "@/components/MKStackAppsFeed";
import { useSEO } from "@/hooks/useSEO";

export default function Showcase() {
  // Set custom SEO for Showcase page
  useSEO({
    title: 'App Showcase - Shakespeare & MKStack Apps on Nostr | Soapbox',
    description: 'Discover applications built with Soapbox tools including Shakespeare AI-powered websites and MKStack apps on Nostr. Browse creative projects, games, social platforms, and business sites built by our community.',
    type: 'website',
    image: '/assets/images/riga-team.png',
    keywords: 'shakespeare apps, mkstack apps, nostr applications, ai website builder, decentralized apps, nostr showcase, shakespeare showcase, mkstack showcase, nostr software, decentralized development, nostr ecosystem',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Soapbox App Showcase",
      "description": "Collection of applications built with Soapbox tools including Shakespeare and MKStack",
      "author": {
        "@type": "Organization",
        "name": "Soapbox"
      },
      "about": [
        {
          "@type": "SoftwareApplication",
          "name": "Shakespeare",
          "description": "AI-powered website builder for creating web applications through natural language"
        },
        {
          "@type": "SoftwareApplication",
          "name": "MKStack",
          "description": "Framework for building decentralized applications on Nostr"
        }
      ]
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-azure-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="bg-azure-100 text-azure-700 border-azure-200 mb-6">
            🚀 Powered by Soapbox Technology
          </Badge>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
            Apps & Platforms{" "}
            <span className="bg-gradient-to-r from-azure to-blue-600 bg-clip-text text-transparent">
              Built with Soapbox
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover applications built with Soapbox tools including Shakespeare AI-powered websites and MKStack apps on Nostr.
            Each app showcases the power of decentralized development and AI-assisted creation.
          </p>
        </div>
      </section>

      {/* Shakespeare Apps Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🎭</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Shakespeare Apps</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creative projects built by our community using Shakespeare AI-powered website builder.
              From games to social platforms, see what's possible with natural language programming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reviewstr */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-purple-200 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center">
                <img
                  src="/assets/images/shakespeare-screenshots/build-portfolio-example.png"
                  alt="Reviewstr Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">Reviewstr</h3>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">Social</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Share your experiences and discover amazing places on Nostr. A community-driven review platform.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By @TravelTelly</span>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://nostr-react-boilerplate-mbpz.shakespeare.to/" target="_blank" rel="noopener noreferrer">
                      Visit App
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Hashman Game */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-purple-200 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-yellow-50 to-orange-50 flex items-center justify-center">
                <img
                  src="/assets/images/shakespeare-screenshots/moonfile-game-example.png"
                  alt="Hashman Game Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">Hashman</h3>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">Game</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Pacman-style game built with Shakespeare. Classic arcade gaming meets modern web technology.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By @QW</span>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://npub173vexauak3y5zctuapqh2p90pjnscyqr6zfh4vqa8r0pfsmkp5lqtjfk7c.shakespeare.to/" target="_blank" rel="noopener noreferrer">
                      Play Game
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Betstr */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-purple-200 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                <img
                  src="/assets/images/shakespeare-screenshots/kanban-example.png"
                  alt="Betstr Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">Betstr</h3>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">Finance</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Peer-to-peer betting with Lightning on Nostr. Decentralized wagering platform.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By @Keith Molina</span>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://project-betstr-description-i-want-to-w8ll.shakespeare.to/" target="_blank" rel="noopener noreferrer">
                      Visit App
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Portfolio Example */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-purple-200 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-violet-50 to-pink-50 flex items-center justify-center">
                <img
                  src="/assets/images/shakespeare-screenshots/build-portfolio-example.png"
                  alt="Portfolio Example Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">Portfolio Sites</h3>
                  <Badge variant="secondary" className="bg-violet-100 text-violet-700">Portfolio</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Professional portfolio websites built in minutes. Showcase your work with style.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Community Examples</span>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                      Build Yours
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Band Website */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-purple-200 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-pink-50 to-red-50 flex items-center justify-center">
                <img
                  src="/assets/images/shakespeare-screenshots/band-website.png"
                  alt="Band Website Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">Band Websites</h3>
                  <Badge variant="secondary" className="bg-pink-100 text-pink-700">Creative</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Music and creative websites with integrated media players and event listings.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Community Examples</span>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                      Build Yours
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Coffee Shop */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-purple-200 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center justify-center">
                <img
                  src="/assets/images/shakespeare-screenshots/coffeeshop-exmaple.png"
                  alt="Coffee Shop Website Screenshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">Business Sites</h3>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-700">Business</Badge>
                </div>
                <p className="text-gray-600 mb-4">
                  Local business websites with menus, contact forms, and location information.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Community Examples</span>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                      Build Yours
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Shakespeare CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-sm border border-purple-200 p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🎭 Build Your Own with Shakespeare
              </h3>
              <p className="text-gray-600 mb-6">
                Join hundreds of creators building amazing projects with AI. Turn your ideas into reality through natural conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                  <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                    Try Shakespeare Free
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/tools/shakespeare" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MKStack Apps Feed */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Package className="h-8 w-8 text-violet-600" />
            </div>
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">MKStack Apps</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover applications built with MKStack and published on the Nostr network.
              Each app demonstrates the power of decentralized development and distribution.
            </p>
          </div>

          <MKStackAppsFeed />
        </div>
      </section>

      {/* Statistics and Success Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-azure-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">Building the Future of Social</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our tools power a growing ecosystem of decentralized social platforms and communities.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-azure-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-azure-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Always Open Source</h3>
              <p className="text-gray-600 mb-4">
                Complete transparency and control. Every tool is open source, giving you the freedom to modify,
                deploy, and maintain your own infrastructure.
              </p>
              <Badge variant="secondary" className="bg-azure-50 text-azure-700">MIT Licensed</Badge>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Decentralized by Design</h3>
              <p className="text-gray-600 mb-4">
                Built on Nostr protocol for true decentralization. No single point of failure,
                no platform lock-in, just pure peer-to-peer communication.
              </p>
              <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">Nostr Protocol</Badge>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Production Ready</h3>
              <p className="text-gray-600 mb-4">
                Battle-tested tools powering real communities. From small groups to large networks,
                our tools scale with your needs.
              </p>
              <Badge variant="secondary" className="bg-violet-50 text-violet-700">Enterprise Scale</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-azure to-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Code className="h-10 w-10 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Ready to Join Our Ecosystem?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore these amazing platforms built with Soapbox tools, or create your own community
            using our open-source frameworks. The future of decentralized social media is here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg font-semibold" asChild>
              <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
                <Users className="mr-2 h-5 w-5" />
                Try Ditto Platform
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg font-semibold border-white text-white hover:bg-white hover:text-azure" asChild>
              <Link to="/tools">
                <Code className="mr-2 h-5 w-5" />
                Build Your Own
              </Link>
            </Button>
          </div>

          <div className="pt-8 opacity-75">
            <p className="text-sm">
              All tools are open source and production ready.
              <a href="https://nostrbook.dev" className="underline hover:opacity-100 transition-opacity ml-1" target="_blank" rel="noopener noreferrer">
                Learn about Nostr →
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}