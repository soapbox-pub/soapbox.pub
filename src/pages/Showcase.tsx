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
    title: 'MKStack Apps Showcase - Decentralized Applications on Nostr | Soapbox',
    description: 'Discover applications built with MKStack and published on the Nostr network. Browse a curated collection of decentralized apps showcasing the power of open-source development.',
    type: 'website',
    image: '/assets/images/riga-team.png',
    keywords: 'mkstack apps, nostr applications, decentralized apps, nostr showcase, mkstack showcase, nostr software, decentralized development, nostr ecosystem',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "MKStack Apps Showcase",
      "description": "Collection of applications built with MKStack and published on the Nostr network",
      "author": {
        "@type": "Organization",
        "name": "Soapbox"
      },
      "about": {
        "@type": "SoftwareApplication",
        "name": "MKStack",
        "description": "Framework for building decentralized applications on Nostr"
      }
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
            Discover applications built with MKStack and published on Nostr. 
            Each app showcases the power of decentralized development and distribution.
          </p>
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