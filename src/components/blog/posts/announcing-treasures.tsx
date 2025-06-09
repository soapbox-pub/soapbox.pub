import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, MapPin, Users, Zap, Shield, Globe, Smartphone } from 'lucide-react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: { name?: string; picture?: string; };
  ogImage: { url?: string; };
}

export const meta: BlogPostMeta = {
  "slug": "announcing-treasures",
  "title": "Announcing Treasures: Geocaching on Nostr",
  "excerpt": "The world's first decentralized geocaching platform built on Nostr, bringing treasure hunting to the open web..",
  "coverImage": "/assets/blog/announcing-treasures/treasures-blog.png",
  "date": "2025-06-09",
  "author": {
    "name": "M.K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-treasures/treasures-blog.png"
  }
};

export default function AnnouncingTreasures() {
  return (
    <article className="prose prose-lg max-w-none">
      <p><strong>Today we're thrilled to announce <a href="https://treasures.to/" target="_blank" rel="noopener noreferrer">Treasures</a>, the world's first decentralized geocaching platform</strong> built on the Nostr protocol. Treasures brings the beloved treasure hunting hobby to the open web, free from the constraints and frustrations of centralized platforms.</p>

      <h2>What is Geocaching?</h2>
      <p>Geocaching is a real-world treasure hunting game where participants use GPS coordinates to find hidden containers (called "geocaches" or "caches") placed by other players. It's a global community activity that encourages exploration, adventure, and discovery in the physical world. With millions of geocaches hidden worldwide, it's one of the most popular outdoor recreational activities.</p>

      {/* Problem/Solution section with visual cards */}
      <div className="not-prose my-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Geocaching is Overdue for an Update</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="border-red-200 bg-red-50/50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                The Problem with Centralized Platforms
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="space-y-2">
                <li>• Pay-to-play paywalls restrict access</li>
                <li>• Premium-only caches create inequality</li>
                <li>• Data lock-in traps your logs</li>
                <li>• Arbitrary restrictions limit innovation</li>
                <li>• Corporate control over community</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-emerald-200 bg-emerald-50/50">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                The Decentralized Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="space-y-2">
                <li>• Open protocol enables innovation</li>
                <li>• Community-driven development</li>
                <li>• No single point of failure</li>
                <li>• True data ownership via Nostr</li>
                <li>• Fully free, or fork it!</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <hr className="my-12 border-t border-gray-300" />

      <div className="not-prose mb-12 text-center">
        <div className="mb-6">
          <Badge variant="secondary" className="mb-4 bg-emerald-50 text-emerald-700 border-emerald-200">
            <Zap className="w-3 h-3 mr-1" />
            Now Live
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Future of Geocaching is 
            <span className="text-emerald-600"> Decentralized</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join the world's first decentralized geocaching platform built on Nostr. Hide treasures, explore the world, and connect with adventurers worldwide—all without paywalls or platform lock-in.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg"
            asChild
          >
            <a href="https://treasures.to/" target="_blank" rel="noopener noreferrer">
              <MapPin className="w-5 h-5 mr-2" />
              Start Your Adventure
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-3 text-lg"
            asChild
          >
            <a href="https://gitlab.com/chad.curtis/treasures" target="_blank" rel="noopener noreferrer">
              View Source Code
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>

      <h2>Treasures: Nostr Geocaching</h2>
      <p>Treasures solves these problems by building geocaching on Nostr, a decentralized protocol that puts users in control. Unlike corporate-controlled platforms with paywalls and restrictions, Treasures returns geocaching to its roots as a free, open community activity. Here's what makes Treasures special:</p>

      {/* Features showcase with screenshots */}
      <div className="not-prose my-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Geocaching Features</h3>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Explore treasures feature */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-emerald-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Discover & Explore Treasures
              </h4>
              <p className="text-gray-700 mb-6">
                Find geocaches hidden by other users around the world with our intuitive list and map views. Search by location, difficulty, or browse nearby treasures to start your adventure.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Interactive map with custom markers</li>
                <li>• Search by location or geocache name</li>
                <li>• Filter by difficulty and terrain</li>
                <li>• Detailed cache information and logs</li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-xs">
              <img 
                src="/assets/blog/announcing-treasures/treasures-explore.png" 
                alt="Treasures Explore Screen" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Interactive map feature */}
          <div className="flex justify-center">
            <div className="relative max-w-xs">
              <img 
                src="/assets/blog/announcing-treasures/treasures-map.png" 
                alt="Treasures Interactive Map" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Interactive Map Experience
              </h4>
              <p className="text-gray-700 mb-6">
                Navigate the world of geocaching with our beautiful interactive map. View cache details, get directions, and explore new areas to find your next adventure.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Real-time treasure map visualization</li>
                <li>• Detailed cache previews and info</li>
                <li>• Location-based search functionality</li>
                <li>• Seamless mobile map experience</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-8">
          {/* Profile and logging feature */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-purple-900 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Profile & Adventure Logging
              </h4>
              <p className="text-gray-700 mb-6">
                Track your geocaching journey with detailed profiles and adventure logs. Record your finds, create caches, and connect with the global treasure hunting community.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Personal geocaching profile</li>
                <li>• Find and DNF logging system</li>
                <li>• QR code verification for authenticity</li>
                <li>• Cache creation and management</li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative max-w-xs">
              <img 
                src="/assets/blog/announcing-treasures/treasures-profile.png" 
                alt="Treasures User Profile" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <h2>Built on MKStack</h2>
      <p>Treasures was built by <strong><a href="https://ditto.pub/@chad@chadwick.site" target="_blank" rel="noopener noreferrer">Chad Curtis</a></strong> using <strong><a href="/tools/mkstack" target="_blank" rel="noopener noreferrer">MKStack</a></strong>, a revolutionary new vibe-coding tool for Nostr applications. MKStack enables rapid development of decentralized applications with a focus on user experience and protocol integration. It provides:</p>
      <ul>
        <li>Pre-built Nostr integration patterns</li>
        <li>Responsive UI components optimized for mobile and desktop</li>
        <li>Built-in support for Nostr event types and relay management</li>
        <li>Streamlined development workflow for decentralized apps</li>
      </ul>
      <p>MKStack represents the future of Nostr development - making it easier than ever to build powerful, user-friendly applications on the decentralized web.</p>

      <h2>Getting People Into the Real World</h2>
      <p>One of the most exciting aspects of Treasures is how it encourages people to disconnect from screens and explore the physical world. In an age of increasing digital isolation, geocaching provides:</p>
      
      <ul>
        <li><strong>Physical Adventure</strong>: Real-world exploration and discovery</li>
        <li><strong>Community Connection</strong>: Meeting fellow geocachers and sharing experiences</li>
        <li><strong>Exercise & Health</strong>: Walking, hiking, and outdoor activity</li>
        <li><strong>Local Discovery</strong>: Finding hidden gems and interesting locations in your area</li>
        <li><strong>Family Activity</strong>: Fun for all ages and skill levels</li>
      </ul>
      
      <p>Treasures taps into an existing, passionate IRL community of millions of geocachers worldwide. By bringing this community to Nostr, we're creating a bridge between the digital and physical worlds.</p>

      <h2>The Technical Foundation</h2>
      <p>Treasures implements a comprehensive Nostr-based geocaching protocol these event types:</p>
      <ul>
        <li><strong>Geocache Listing Events (Kind 37515)</strong>: Addressable events that contain all cache information including location, difficulty, terrain, size, and type. These events are owned and maintained by the cache creator.</li>
        <li><strong>Found Logs (Kind 7516)</strong>: Regular events that record when the cache is found.</li>
        <li><strong>Log Comments (Kind 1111)</strong>: Regular events that record other log comments including DNF reports, maintenance notes, and archive notifications.</li>
      </ul>   
      <p>This protocol ensures interoperability - any Nostr client can implement geocaching features and interact with Treasures data.</p>

      {/* Decentralized benefits section */}
      <div className="not-prose my-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Decentralized & Open Architecture</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-emerald-100/50">
            <CardHeader>
              <CardTitle className="text-emerald-800 text-lg flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Nostr Protocol
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              Built on decentralized network with no central authority or censorship
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50">
            <CardHeader>
              <CardTitle className="text-blue-800 text-lg flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                True Data Ownership
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              Your geocaching data belongs to you, never locked in to any platform
            </CardContent>
          </Card>
          
          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50">
            <CardHeader>
              <CardTitle className="text-purple-800 text-lg flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Open Source
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              Fully open-source under AGPL v3 license for community development
            </CardContent>
          </Card>
          
          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50">
            <CardHeader>
              <CardTitle className="text-orange-800 text-lg flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                No Registration Barriers
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              Login with Nostr keypair, no personal data required
            </CardContent>
          </Card>
          
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100/50">
            <CardHeader>
              <CardTitle className="text-green-800 text-lg flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Fully Free
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              All features available without subscription fees or premium tiers
            </CardContent>
          </Card>
          
          <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-indigo-100/50">
            <CardHeader>
              <CardTitle className="text-indigo-800 text-lg flex items-center">
                <Smartphone className="w-5 h-5 mr-2" />
                Cross-Platform
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              Works on any device with modern web browser support
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>Join the Revolution</h2>
      <p>Treasures represents more than just a new geocaching platform - it's a demonstration of how decentralized technologies can solve real problems and empower communities. By choosing open protocols over closed platforms, we're building a more resilient, user-controlled future for geocaching that can never be captured by corporate interests or locked behind paywalls.</p>
      <p>The treasure hunting community has always been about exploration, discovery, and sharing adventures. Geocaching was born as a free, open activity that brought people together through shared adventure. Corporate platforms have tried to monetize and restrict this natural human impulse, but with Treasures on Nostr, we can return to those original values while maintaining true ownership of our data and freedom from platform restrictions.</p>
      <p>Every geocacher who joins Treasures is voting for a future where outdoor adventure remains accessible to everyone, regardless of their ability to pay subscription fees. Together, we can build a geocaching ecosystem that serves the community instead of extracting profit from it.</p>
      <p><strong>The world is full of hidden treasures, and they should be free for everyone to discover.</strong></p>
      
      {/* Treasures CTA */}
      <div className="not-prose my-16">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Your Adventure Today</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Ready to experience the future of geocaching? Join the decentralized treasure hunting revolution and discover hidden treasures around the world—completely free, forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="https://treasures.to/" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5 mr-2" />
                Launch Treasures App
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-700 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="https://gitlab.com/chad.curtis/treasures" target="_blank" rel="noopener noreferrer">
                <Users className="w-5 h-5 mr-2" />
                Join Development
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}