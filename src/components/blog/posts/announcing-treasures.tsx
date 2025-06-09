import React from 'react';

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
  slug: 'announcing-treasures',
  title: 'Announcing Treasures: Decentralized Geocaching on Nostr',
  excerpt: 'The world\'s first decentralized geocaching platform built on Nostr, bringing treasure hunting to the open web.',
  coverImage: '/assets/blog/announcing-treasures/treasures-cover.jpg',
  date: '2024-01-30',
  author: {
    name: 'Soapbox Team',
    picture: '/assets/team/soapbox.jpg'
  },
  ogImage: {
    url: '/assets/blog/announcing-treasures/treasures-og.jpg'
  }
};

export default function AnnouncingTreasures() {
  return (
    <article className="prose prose-lg max-w-none">
      <p>Today we're thrilled to announce <strong><a href="https://treasures.to/" target="_blank" rel="noopener noreferrer">Treasures</a></strong>, the world's first decentralized geocaching platform built on the Nostr protocol. Treasures brings the beloved treasure hunting hobby to the open web, free from the constraints and frustrations of centralized platforms.</p>

      <h2>What is Geocaching?</h2>
      <p>Geocaching is a real-world treasure hunting game where participants use GPS coordinates to find hidden containers (called "geocaches" or "caches") placed by other players. It's a global community activity that encourages exploration, adventure, and discovery in the physical world. With millions of geocaches hidden worldwide, it's one of the most popular outdoor recreational activities.</p>

      <h2>Why Decentralized Geocaching?</h2>
      <p>Centralized geocaching platforms have transformed a once-free hobby into a pay-to-play service with paywalls, premium-only caches, and data lock-in. These platforms trap your geocaching data, impose arbitrary restrictions, and prevent community innovation. Decentralized infrastructure solves these problems by creating an open system that can't be captured by corporate interests.</p>

      <h2>Introducing Treasures</h2>
      <p>Treasures solves these problems by building geocaching on Nostr, a decentralized protocol that puts users in control. Unlike corporate-controlled platforms with paywalls and restrictions, Treasures returns geocaching to its roots as a free, open community activity. Here's what makes Treasures special:</p>

      <h3>Core Geocaching Features</h3>
      <ul>
        <li><strong>Hide Geocaches</strong>: Create and publish geocaches with GPS coordinates, descriptions, and difficulty ratings</li>
        <li><strong>Find Treasures</strong>: Discover geocaches hidden by other users around the world</li>
        <li><strong>Interactive Map</strong>: Explore locations with custom markers and search functionality</li>
        <li><strong>Log Adventures</strong>: Record your finds, DNFs, and maintenance notes for each cache</li>
        <li><strong>QR Code Verification</strong>: Cryptographic proof of cache finds for authenticity</li>
      </ul>
      <p>For a complete list of features, see the <a href="https://gitlab.com/chad.curtis/treasures#features" target="_blank" rel="noopener noreferrer">Treasures source code</a>.</p>

      <h3>Decentralized & Open Architecture</h3>
      <ul>
        <li><strong>Nostr Protocol</strong>: Built on decentralized network with no central authority or censorship</li>
        <li><strong>True Data Ownership</strong>: Your geocaching data belongs to you, never locked in</li>
        <li><strong>Open Source</strong>: Fully open-source under AGPL v3 license for community development</li>
        <li><strong>No Registration Barriers</strong>: Login with Nostr keypair, no personal data required</li>
        <li><strong>Free Forever</strong>: All features available without subscription fees or premium tiers</li>
      </ul>

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
      <p>Treasures taps into an existing, passionate IRL (In Real Life) community of millions of geocachers worldwide. By bringing this community to Nostr, we're creating a bridge between the digital and physical worlds.</p>

      <h2>The Technical Foundation</h2>
      <p>Treasures implements a comprehensive Nostr-based geocaching protocol with two main event types:</p>
      <p><strong>Geocache Listing Events (Kind 37515)</strong>: Addressable events that contain all cache information including location, difficulty, terrain, size, and type. These events are owned and maintained by the cache creator.</p>
      <p><strong>Log Events (Kind 7516)</strong>: Regular events that record visits to geocaches, including found logs, DNF reports, maintenance notes, and archive notifications.</p>
      <p>This protocol ensures interoperability - any Nostr client can implement geocaching features and interact with Treasures data.</p>

      <h2>Start Your Adventure</h2>
      <p>Ready to experience the future of geocaching? <strong><a href="https://treasures.to/" target="_blank" rel="noopener noreferrer">Visit Treasures</a></strong> and begin your decentralized treasure hunting journey today. Login with your Nostr keypair, explore the map to find geocaches near you, and start discovering hidden treasures around the world. Whether you're finding caches or hiding your own, you're joining a community that's building the future of open, accessible geocaching.</p>

      <h2>Join the Revolution</h2>
      <p>Treasures represents more than just a new geocaching platform - it's a demonstration of how decentralized technologies can solve real problems and empower communities. By choosing open protocols over closed platforms, we're building a more resilient, user-controlled future for geocaching that can never be captured by corporate interests or locked behind paywalls.</p>
      <p>The treasure hunting community has always been about exploration, discovery, and sharing adventures. Geocaching was born as a free, open activity that brought people together through shared adventure. Corporate platforms have tried to monetize and restrict this natural human impulse, but with Treasures on Nostr, we can return to those original values while maintaining true ownership of our data and freedom from platform restrictions.</p>
      <p>Every geocacher who joins Treasures is voting for a future where outdoor adventure remains accessible to everyone, regardless of their ability to pay subscription fees. Together, we can build a geocaching ecosystem that serves the community instead of extracting profit from it.</p>
      <p><strong>The world is full of hidden treasures, and they should be free for everyone to discover.</strong></p>

      <hr />
      <p><em>Treasures is open source and available now. Join the community, hide some caches, and help build the future of decentralized geocaching.</em></p>
    </article>
  );
}