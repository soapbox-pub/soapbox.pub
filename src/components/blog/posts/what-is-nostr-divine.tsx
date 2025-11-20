import React from 'react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: { name?: string; picture?: string; };
  ogImage: { url?: string; };
  tags?: string[];
}

export const meta: BlogPostMeta = {
  "slug": "what-is-nostr-divine",
  "title": "What is Nostr? The Decentralized Protocol Powering diVine",
  "excerpt": "Understanding the Nostr protocol and how it enables diVine's decentralized approach to short-form video sharing",
  "coverImage": "/assets/blog/nostr-101.png",
  "date": "2025-11-20",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/nostr-101.png"
  },
  "tags": ["nostr", "divine", "decentralization", "tutorial"]
};

export default function WhatIsNostrDivine() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>What is Nostr?</h2>
      
      <p>
        <strong>Nostr (Notes and Other Stuff Transmitted by Relays) is a decentralized, censorship-resistant protocol designed to give users control over their online identities and content.</strong> Unlike traditional social media platforms that rely on centralized servers and corporate moderation, Nostr allows users to communicate directly through a network of independent relays. This makes it permissionless—meaning anyone can use it without needing approval from a corporation or government.
      </p>

      <h3>Key Features of Nostr</h3>
      
      <ul>
        <li><strong>Decentralized:</strong> No single company controls Nostr; it operates on a distributed network of relays.</li>
        <li><strong>Censorship-Resistant:</strong> Users cannot be banned from the network; they can always find a relay that will host their content.</li>
        <li><strong>Permissionless:</strong> No accounts, phone numbers, or email verification required—just a cryptographic key pair.</li>
        <li><strong>Portable Identity:</strong> Your identity follows you across all Nostr apps, not locked to any single platform.</li>
      </ul>

      <h2>How diVine Uses Nostr</h2>

      <p>
        <strong>diVine is built entirely on the Nostr protocol, bringing the creative spirit of 6-second looping videos to a decentralized platform.</strong> This means your videos, profile, followers, and engagement are all stored on Nostr relays instead of corporate servers. You own your content and your identity.
      </p>

      <h3>What This Means for You</h3>

      <ul>
        <li><strong>Own Your Content:</strong> Your videos live on decentralized relays, not controlled by any single company.</li>
        <li><strong>One Identity, Multiple Apps:</strong> Your diVine account works across all Nostr apps—use the same identity for social networking, messaging, and more.</li>
        <li><strong>No Platform Lock-In:</strong> If you don't like diVine, you can take your content and followers to any other Nostr video app.</li>
        <li><strong>Censorship Resistance:</strong> No corporation can delete your account or remove your videos from the entire network.</li>
      </ul>

      <h2>Nostr Basics: Keys and Identity</h2>

      <p>Unlike traditional social media, Nostr does not require a username-password combination. Instead, it uses <strong>cryptographic keys</strong>:</p>

      <ul>
        <li><strong>Public Key (npub_...):</strong> This is your identity, like a username. Anyone can see it and follow you.</li>
        <li><strong>Private Key (nsec_...):</strong> This is your password. <strong>Never share it!</strong> It signs your posts and proves your identity.</li>
        <li><strong>Username (NIP05 domain):</strong> Optional email-like handles (e.g., user@divine.video) that make your identity easier to share and verify.</li>
      </ul>

      <h2>Relays: The Backbone of Nostr</h2>

      <p>
        Relays are servers that store and distribute messages between users. Unlike centralized platforms where a single entity owns the database, Nostr relays operate independently. diVine connects to specialized video relays optimized for storing and streaming short-form video content.
      </p>

      <h3>How Relays Work</h3>

      <ul>
        <li>Relays do not control user accounts; they only store and transmit events (posts, videos, likes, etc.).</li>
        <li>Anyone can run a relay, making the network decentralized.</li>
        <li>Users can connect to multiple relays to ensure their content reaches a wider audience.</li>
        <li>Some relays may charge a fee or require authentication to prevent spam.</li>
      </ul>

      <h3>diVine's Primary Relay</h3>

      <p>
        diVine uses <strong>relay.divine.video</strong> as its primary relay—a high-performance, OpenSearch-backed relay with specialized features for video content. This relay implements NIP-50 (full-text search) for discovering videos by keywords, hashtags, and trending content. However, because diVine is built on Nostr, your videos are also available on any other Nostr relay you choose to publish to.
      </p>

      <h2>Nostr Clients vs. Relays</h2>

      <h3>Clients: How You Access Nostr</h3>

      <p>
        Clients are applications that allow users to read, write, and interact with content on Nostr. They function similarly to social media apps but with full decentralization. <strong>diVine is a Nostr client</strong>—specifically designed for 6-second looping video content.
      </p>

      <p>
        Because Nostr is decentralized, your account is not tied to any single app. You can use your diVine account (your Nostr keys) with any other Nostr client, and your identity, followers, and content will remain the same. This means you have <strong>one account, infinite apps to choose from</strong>.
      </p>

      <h3>Other Nostr Clients</h3>

      <p>While diVine focuses on short-form video, you can use your same Nostr identity across other clients:</p>

      <ul>
        <li><strong>Ditto</strong> - Community platform builder for decentralized communities</li>
        <li><strong>Primal</strong> - General social networking with discovery features</li>
        <li><strong>Damus</strong> - Clean iOS client for text and media</li>
        <li><strong>Amethyst</strong> - Feature-rich Android client</li>
        <li><strong>Coracle</strong> - Web-based client with advanced features</li>
      </ul>

      <p>
        Your diVine videos will be visible in these other clients (if they support video event types), and you can interact with users from any Nostr app.
      </p>

      <h2>How diVine and Nostr Work Together</h2>

      <ol>
        <li>You create or upload a 6-second video using diVine.</li>
        <li>diVine signs the video event with your private key (proving it's yours).</li>
        <li>The video event is published to Nostr relays (including relay.divine.video).</li>
        <li>Other users' diVine clients query relays for video events.</li>
        <li>Users see your video in their feeds, can like, comment, or repost—all through Nostr events.</li>
      </ol>

      <p>
        This separation of data storage (relays) and user interfaces (clients like diVine) ensures that the platform remains resilient, censorship-resistant, and user-controlled.
      </p>

      <h2>Zaps: Tipping with Bitcoin</h2>

      <p>
        One unique feature of Nostr is <strong>Zaps</strong>—a way to send small Bitcoin payments over the Lightning Network. Users can tip creators directly for valuable content without any intermediary taking a cut.
      </p>

      <ul>
        <li><strong>Get a Lightning Address:</strong> Sign up with a service like Alby, Zebedee, or explore other providers at <a href="https://lightningaddress.com" target="_blank" rel="noopener noreferrer">lightningaddress.com</a>.</li>
        <li><strong>Link Your Address to Your Profile:</strong> Add it in your diVine profile settings.</li>
        <li><strong>Start Receiving Zaps!</strong> Users can now tip you directly for your creative videos.</li>
      </ul>

      <h2>How Nostr Differs from Traditional Social Media</h2>

      <p>
        Traditional social media platforms like TikTok, Instagram, and Twitter are centralized—meaning a single company controls the servers, your data, and your account. If you violate their terms of service (or if they change their policies), they can delete your account, remove your content, or ban you entirely.
      </p>

      <p>
        <strong>Nostr flips this model:</strong>
      </p>

      <ul>
        <li><strong>You Own Your Identity:</strong> Your cryptographic keys prove ownership—no company can take that away.</li>
        <li><strong>You Control Your Data:</strong> Content is stored on relays you choose, not locked in corporate databases.</li>
        <li><strong>You Choose Your Experience:</strong> Don't like how diVine works? Use a different Nostr client with your same account.</li>
        <li><strong>No Algorithmic Control:</strong> You decide what content you see, not an algorithm optimized for engagement.</li>
      </ul>

      <h2>The Mostr Bridge: Connecting to the Fediverse</h2>

      <p>
        The <a href="https://mostr.pub" target="_blank" rel="noopener noreferrer">Mostr Bridge</a> is a tool that connects the Nostr network with the Fediverse (platforms like Mastodon and Pleroma). This allows users to follow and interact with accounts across both ecosystems without needing to switch platforms. While diVine focuses on Nostr-native video content, this bridge demonstrates the interoperability possible with open protocols.
      </p>

      <h2>Why This Matters for diVine</h2>

      <p>
        By building on Nostr, diVine offers something unique in the short-form video space: <strong>true ownership and freedom</strong>. You're not renting space on someone else's platform—you're participating in an open network where you control your creative work.
      </p>

      <p>
        This also means diVine can focus on building the best creative tools and user experience, while the Nostr protocol handles identity, data storage, and network effects. If diVine ever shuts down, your videos, followers, and identity persist on Nostr—ready to use with any other compatible client.
      </p>

      <h2>Getting Started with diVine and Nostr</h2>

      <p>
        The easiest way to experience Nostr is to start creating on diVine. Download the app, and it will automatically generate your Nostr keys. You can then:
      </p>

      <ol>
        <li><strong>Create your first 6-second video</strong> and publish it to the Nostr network</li>
        <li><strong>Follow other creators</strong> on diVine or any other Nostr app</li>
        <li><strong>Explore your Nostr identity</strong> across different clients to see the full power of portable social networking</li>
        <li><strong>Set up Lightning payments</strong> to receive zaps for your creative content</li>
      </ol>

      <p>
        <strong>
          diVine makes Nostr accessible to everyone—no technical knowledge required. Just download the app and start creating.
        </strong>
      </p>

      <h2>Learn More About Nostr</h2>

      <p>
        Want to dive deeper into the Nostr protocol? Check out these resources:
      </p>

      <ul>
        <li><a href="https://nostr.how" target="_blank" rel="noopener noreferrer">Nostr.how</a> - Comprehensive beginner guide to Nostr</li>
        <li><a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">NostrHub</a> - Explore Nostr Improvement Proposals (NIPs) and development</li>
        <li><a href="https://nostrapps.com" target="_blank" rel="noopener noreferrer">Nostrapps.com</a> - Discover other Nostr applications</li>
        <li><a href="/blog/nostr101">Nostr 101</a> - Our comprehensive beginner's guide to the protocol</li>
      </ul>

      <p>
        By choosing Nostr as its foundation, diVine is part of a growing movement toward open, decentralized social networking—where creativity, ownership, and freedom come first.
      </p>
    </article>
  );
}
