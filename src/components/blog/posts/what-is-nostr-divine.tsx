import React from 'react';
import type { BlogPostMeta } from '@/lib/blog/types';
import { FAQSection } from '@/components/blog/FAQSection';

export const meta: BlogPostMeta = {
  "slug": "what-is-nostr-divine",
  "title": "What is Nostr? The Decentralized Protocol Powering Divine",
  "excerpt": "Divine is built on Nostr, a decentralized social protocol. Learn what Nostr is, how it works, and why one account works across Divine, Ditto, Damus, and more.",
  "coverImage": "/assets/blog/nostr101/nostr-101-divine-protocol.png",
  "date": "2026-04-29",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/nostr101/nostr-101-divine-protocol.png"
  },
  "featured": false,
  "tags": [
    "nostr",
    "what is nostr",
    "nostr protocol",
    "divine",
    "divine app",
    "divine nostr",
    "decentralized social",
    "decentralization",
    "nostr keys",
    "npub",
    "nsec",
    "nostr relays",
    "nostr basics",
    "tutorial",
    "vine successor"
  ],
  "keywords": "what is nostr, nostr protocol, nostr explained, how does nostr work, divine nostr, divine app, nostr vs twitter, nostr decentralized, nostr keys explained, npub nsec, is divine on nostr, divine vine successor, nostr for beginners, nostr relays, decentralized social media, one account every app, nostr identity, nostr login, nostr apps, divine video app",
  "faq": [
    { "question": "What is Nostr in simple terms?", "answer": "Nostr (Notes and Other Stuff Transmitted by Relays) is an open, decentralized social protocol. Instead of a single company owning your account, you own a cryptographic key pair that works across every Nostr app — no phone number, no email, no central server." },
    { "question": "Is Divine built on Nostr?", "answer": "Yes. Divine, the short-form video app often called the spiritual successor to Vine, is built entirely on the Nostr protocol. Your videos, profile, followers, and engagement live on Nostr relays, not Divine's private servers." },
    { "question": "How is Nostr different from Twitter or TikTok?", "answer": "Twitter and TikTok are centralized — one company controls the servers, your data, and your account, and can ban you at any time. Nostr is decentralized: you own your identity via cryptographic keys, your content lives on a network of independent relays, and no company can lock you out." },
    { "question": "What is an npub?", "answer": "An npub is your Nostr public key — the identifier people use to find and follow you. It always starts with npub1. Share it freely; it's the equivalent of a username." },
    { "question": "What is an nsec?", "answer": "An nsec is your Nostr private key — the credential that proves you own your account. It always starts with nsec1. Never share it; anyone who has your nsec can post as you, read your DMs, and impersonate you." },
    { "question": "Can I use my Divine account on other Nostr apps?", "answer": "Yes — that's the whole point. The same key works on Ditto, Damus, Primal, Amethyst, and dozens of other Nostr clients. Your profile, followers, and posts follow you everywhere." },
    { "question": "What are Nostr relays?", "answer": "Relays are servers that store and distribute Nostr events (posts, videos, likes). Anyone can run a relay, and users can connect to as many as they like. Divine uses relay.divine.video as its primary video-optimized relay, but your content can live on any relay you choose." },
    { "question": "Is Nostr free to use?", "answer": "Yes. Creating a Nostr account is free, and most relays are free to read and write. Some paid relays offer premium features (spam filtering, higher storage limits), but you never need them to use Nostr." }
  ]
};

export default function WhatIsNostrDivine() {
  return (
    <article className="prose prose-lg max-w-none">
      <p>
        <strong><a href="https://divine.video" target="_blank" rel="noopener noreferrer">Divine</a>, the short-form video app widely described as a spiritual successor to Vine, launches today on iOS and Android.</strong> It's built on <strong>Nostr</strong> — and understanding Nostr is the key to understanding why Divine works the way it does. No invite code, no corporate lock-in, one account across dozens of apps. Here's the full story.
      </p>

      <h2>What is Nostr?</h2>

      <p>
        <strong>Nostr (Notes and Other Stuff Transmitted by Relays) is a decentralized, censorship-resistant protocol designed to give users control over their online identities and content.</strong> Unlike traditional social media platforms that rely on centralized servers and corporate moderation, Nostr allows users to communicate directly through a network of independent relays. This makes it permissionless—meaning anyone can use it without needing approval from a corporation or government.
      </p>

      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/NVm_jGdwTjQ?si=5qcrxgjr4keqblo4"
        title="Nostr 101 Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

      <h3>Key Features of Nostr</h3>

      <ul>
        <li><strong>Decentralized:</strong> No single company controls Nostr; it operates on a distributed network of relays.</li>
        <li><strong>Censorship-Resistant:</strong> Users cannot be banned from the network; they can always find a relay that will host their content.</li>
        <li><strong>Permissionless:</strong> No accounts, phone numbers, or email verification required—just a cryptographic key pair.</li>
        <li><strong>Portable Identity:</strong> Your identity follows you across all Nostr apps, not locked to any single platform.</li>
      </ul>

      <h2>Why Nostr is Different from Big Tech</h2>

      <p>
        Traditional social media platforms like TikTok, Instagram, and Twitter are centralized—meaning a single company controls the servers, your data, and your account. If you violate their terms of service (or if they change their policies), they can delete your account, remove your content, or ban you entirely.
      </p>

      <p>
        <strong>Nostr flips this model completely:</strong>
      </p>

      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-3 text-left">Feature</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Big Tech Platforms</th>
              <th className="border border-gray-300 px-4 py-3 text-left">Nostr</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">Identity Ownership</td>
              <td className="border border-gray-300 px-4 py-3">Company owns your account</td>
              <td className="border border-gray-300 px-4 py-3 bg-green-50">You own your cryptographic keys</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">Data Control</td>
              <td className="border border-gray-300 px-4 py-3">Locked in corporate databases</td>
              <td className="border border-gray-300 px-4 py-3 bg-green-50">Stored on relays you choose</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">Censorship</td>
              <td className="border border-gray-300 px-4 py-3">Can ban you entirely</td>
              <td className="border border-gray-300 px-4 py-3 bg-green-50">Cannot be banned from network</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">Platform Switching</td>
              <td className="border border-gray-300 px-4 py-3">Start over on each platform</td>
              <td className="border border-gray-300 px-4 py-3 bg-green-50">One identity across all apps</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">Algorithm Control</td>
              <td className="border border-gray-300 px-4 py-3">Corporate-controlled feed</td>
              <td className="border border-gray-300 px-4 py-3 bg-green-50">You decide what you see</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 font-semibold">Monetization</td>
              <td className="border border-gray-300 px-4 py-3">Platform takes a cut</td>
              <td className="border border-gray-300 px-4 py-3 bg-green-50">Direct tips via Bitcoin</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>How Divine Uses Nostr</h2>

      <p>
        <strong>Divine is built entirely on the Nostr protocol, bringing the creative spirit of 6-second looping videos to a decentralized platform.</strong> This means your videos, profile, followers, and engagement are all stored on Nostr relays instead of corporate servers. You own your content and your identity.
      </p>

      <h2>Nostr Basics: Keys and Identity</h2>

      <p>Unlike traditional social media, Nostr does not require a username-password combination. Instead, it uses <strong>cryptographic keys</strong>:</p>

      <ul>
        <li><strong>Public Key (npub_...):</strong> This is your identity, like a username. Anyone can see it and follow you.</li>
        <li><strong>Private Key (nsec_...):</strong> This is your password. <strong>Never share it!</strong> It signs your posts and proves your identity. <a href="/blog/managing-nostr-keys">Learn more about protecting your Nostr keys.</a></li>
        <li><strong>Username (NIP05 domain):</strong> Optional email-like handles (e.g., user@divine.video) that make your identity easier to share and verify.</li>
      </ul>

      <h3>Nostr Event Kinds Used by Divine</h3>

      <p>
        Divine implements several standard Nostr event kinds (NIPs) to provide a complete video sharing experience:
      </p>

      <ul>
        <li><strong><a href="https://nostrbook.dev/kinds/34236" target="_blank" rel="noopener noreferrer">Kind 34236</a> (<a href="https://nostrhub.io/71" target="_blank" rel="noopener noreferrer">NIP-71</a>):</strong> Addressable short videos - The core video content format. These events contain video URLs, metadata (title, duration, dimensions), thumbnails, and descriptions.</li>
        <li><strong><a href="https://nostrbook.dev/kinds/6" target="_blank" rel="noopener noreferrer">Kind 6</a> (<a href="https://nostrhub.io/18" target="_blank" rel="noopener noreferrer">NIP-18</a>):</strong> Reposts - Share someone else's video to your followers.</li>
        <li><strong><a href="https://nostrbook.dev/kinds/7" target="_blank" rel="noopener noreferrer">Kind 7</a> (<a href="https://nostrhub.io/25" target="_blank" rel="noopener noreferrer">NIP-25</a>):</strong> Reactions - Like and react to videos with emoji reactions.</li>
        <li><strong><a href="https://nostrbook.dev/kinds/1" target="_blank" rel="noopener noreferrer">Kind 1</a> (<a href="https://nostrhub.io/01" target="_blank" rel="noopener noreferrer">NIP-01</a>):</strong> Text notes - Comments on videos and general text posts.</li>
        <li><strong><a href="https://nostrbook.dev/kinds/3" target="_blank" rel="noopener noreferrer">Kind 3</a> (<a href="https://nostrhub.io/02" target="_blank" rel="noopener noreferrer">NIP-02</a>):</strong> Follow lists - Manage who you follow to build your personalized feed.</li>
        <li><strong><a href="https://nostrbook.dev/kinds/0" target="_blank" rel="noopener noreferrer">Kind 0</a> (<a href="https://nostrhub.io/01" target="_blank" rel="noopener noreferrer">NIP-01</a>):</strong> User metadata - Your profile information including name, bio, profile picture, and other details.</li>
      </ul>

      <p>
        By using these standardized event kinds, Divine ensures compatibility with the broader Nostr ecosystem while providing a specialized video-focused experience.
      </p>

      <h2>Relays: The Backbone of Nostr</h2>

      <p>
        Relays are servers that store and distribute messages between users. Unlike centralized platforms where a single entity owns the database, Nostr relays operate independently. Divine connects to specialized video relays optimized for storing and streaming short-form video content.
      </p>

      <h3>How Relays Work</h3>

      <ul>
        <li>Relays do not control user accounts; they only store and transmit events (posts, videos, likes, etc.).</li>
        <li>Anyone can run a relay, making the network decentralized.</li>
        <li>Users can connect to multiple relays to ensure their content reaches a wider audience.</li>
        <li>Some relays may charge a fee or require authentication to prevent spam.</li>
      </ul>

      <h3>Divine's Primary Relay</h3>

      <p>
        Divine uses <strong>relay.divine.video</strong> as its primary relay—a high-performance, OpenSearch-backed relay with specialized features for video content. This relay implements NIP-50 (full-text search) for discovering videos by keywords, hashtags, and trending content. However, because Divine is built on Nostr, your videos are also available on any other Nostr relay you choose to publish to.
      </p>

      <h2>Nostr Clients vs. Relays</h2>

      <h3>Clients: How You Access Nostr</h3>

      <p>
        Clients are applications that allow users to read, write, and interact with content on Nostr. They function similarly to social media apps but with full decentralization. <strong>Divine is a Nostr client</strong>—specifically designed for 6-second looping video content.
      </p>

      <p>
        Because Nostr is decentralized, your account is not tied to any single app. You can use your Divine account (your Nostr keys) with any other Nostr client, and your identity, followers, and content will remain the same. This means you have <strong>one account, infinite apps to choose from</strong>.
      </p>

      <h3>Other Nostr Clients</h3>

      <p>While Divine focuses on short-form video, you can use your same Nostr identity across other clients. Browse our <a href="/showcase">Showcase page</a> to discover more Nostr applications:</p>

      <ul>
        <li><strong><a href="https://divine.video" target="_blank" rel="noopener noreferrer">Divine</a></strong> - Short-form looping video, often called the spiritual successor to Vine</li>
        <li><strong><a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">Ditto</a></strong> - Community platform builder for decentralized communities</li>
        <li><strong><a href="https://primal.net" target="_blank" rel="noopener noreferrer">Primal</a></strong> - General social networking with discovery features</li>
        <li><strong><a href="https://damus.io" target="_blank" rel="noopener noreferrer">Damus</a></strong> - Clean iOS client for text and media</li>
        <li><strong><a href="https://amethyst.social" target="_blank" rel="noopener noreferrer">Amethyst</a></strong> - Feature-rich Android client</li>
        <li><strong><a href="https://treasures.to" target="_blank" rel="noopener noreferrer">Treasures</a></strong> - Decentralized geocaching on Nostr</li>
        <li><strong><a href="https://flotilla.social" target="_blank" rel="noopener noreferrer">Flotilla</a></strong> - Nostr private communities</li>
      </ul>

      <p>
        This demonstrates the power of Nostr's decentralized identity—one account works across an entire ecosystem of apps, each specialized for different purposes.
      </p>



      <h2>Why This Matters for Divine</h2>

      <p>
        By building on Nostr, Divine offers something unique in the short-form video space: <strong>true ownership and freedom</strong>. You're not renting space on someone else's platform — you're participating in an open network where you control your creative work.
      </p>

      <p>
        The practical benefit is visible right at launch: <strong>you don't even need a Divine invite code to get in</strong>. Because Divine accepts any Nostr account, you can create one on Ditto or any other Nostr app and log in to Divine with your key. See our <a href="/blog/how-to-login-divine-without-invite-code">step-by-step guide on how to log in to Divine without an invite code</a>.
      </p>

      <p>
        This also means Divine can focus on building the best creative tools and user experience, while the Nostr protocol handles identity, data storage, and network effects. If Divine ever shuts down, your videos, followers, and identity persist on Nostr — ready to use with any other compatible client.
      </p>

      <h2>Fork and Customize Divine</h2>

      <p>
        <strong>Because Divine is open source and built on the permissionless Nostr protocol, anyone can fork and edit Divine to do whatever you want!</strong> Want to connect to different relays to see different content? Want to add new features or change the design? You have complete freedom to customize the app.
      </p>

      <p>
        Divine is built on <strong>MKStack</strong>—Soapbox's open source framework for rapidly building Nostr applications. This means you get a production-ready foundation with modern web technologies, Nostr protocol integration, and all the tools you need to create your own version of Divine.
      </p>

      <h3>What You Can Do with a Divine Fork</h3>

      <ul>
        <li><strong>Connect to Different Relays:</strong> See content that may be removed or hidden from the primary Divine relay by connecting to alternative Nostr relays</li>
        <li><strong>Create Niche Communities:</strong> Build specialized video platforms for specific interests (gaming clips, cooking tutorials, etc.)</li>
        <li><strong>Customize the Experience:</strong> Change video length limits, add new features, or redesign the interface</li>
        <li><strong>Experiment Freely:</strong> Test new ideas without needing permission from anyone</li>
      </ul>

      <p>
        <a href="/blog/divine-open-source-tech">Learn more about the open source technology behind Divine</a> and how MKStack enables rapid development of production-ready Nostr applications.
      </p>

      <hr className="my-12 border-gray-200" />

      <FAQSection
        items={[
          {
            question: "What is Nostr in simple terms?",
            defaultOpen: true,
            answer: (
              <p>
                Nostr (Notes and Other Stuff Transmitted by Relays) is an open, decentralized social protocol. Instead of a single company owning your account, you own a cryptographic key pair that works across every Nostr app — no phone number, no email, no central server.
              </p>
            ),
          },
          {
            question: "Is Divine built on Nostr?",
            defaultOpen: true,
            answer: (
              <p>
                Yes. <a href="https://divine.video" target="_blank" rel="noopener noreferrer">Divine</a>, the short-form video app often called the spiritual successor to Vine, is built entirely on the Nostr protocol. Your videos, profile, followers, and engagement live on Nostr relays, not Divine's private servers.
              </p>
            ),
          },
          {
            question: "How is Nostr different from Twitter or TikTok?",
            answer: (
              <p>
                Twitter and TikTok are centralized — one company controls the servers, your data, and your account, and can ban you at any time. Nostr is decentralized: you own your identity via cryptographic keys, your content lives on a network of independent relays, and no company can lock you out.
              </p>
            ),
          },
          {
            question: "What is an npub?",
            answer: (
              <p>
                An npub is your Nostr public key — the identifier people use to find and follow you. It always starts with <code>npub1</code>. Share it freely; it's the equivalent of a username.
              </p>
            ),
          },
          {
            question: "What is an nsec?",
            answer: (
              <p>
                An nsec is your Nostr private key — the credential that proves you own your account. It always starts with <code>nsec1</code>. Never share it; anyone who has your nsec can post as you, read your DMs, and impersonate you.
              </p>
            ),
          },
          {
            question: "Can I use my Divine account on other Nostr apps?",
            answer: (
              <p>
                Yes — that's the whole point. The same key works on <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">Ditto</a>, <a href="https://damus.io" target="_blank" rel="noopener noreferrer">Damus</a>, <a href="https://primal.net" target="_blank" rel="noopener noreferrer">Primal</a>, <a href="https://amethyst.social" target="_blank" rel="noopener noreferrer">Amethyst</a>, and dozens of other Nostr clients. Your profile, followers, and posts follow you everywhere.
              </p>
            ),
          },
          {
            question: "What are Nostr relays?",
            answer: (
              <p>
                Relays are servers that store and distribute Nostr events (posts, videos, likes). Anyone can run a relay, and users can connect to as many as they like. Divine uses <code>relay.divine.video</code> as its primary video-optimized relay, but your content can live on any relay you choose.
              </p>
            ),
          },
          {
            question: "Is Nostr free to use?",
            answer: (
              <p>
                Yes. Creating a Nostr account is free, and most relays are free to read and write. Some paid relays offer premium features (spam filtering, higher storage limits), but you never need them to use Nostr.
              </p>
            ),
          },
        ]}
      />

      <h2>Learn More About Nostr</h2>

      <p>
        Want to dive deeper into the Nostr protocol? Check out these resources:
      </p>

      <ul>
        <li><a href="https://nostrbook.dev" target="_blank" rel="noopener noreferrer">Nostrbook.dev</a> - Comprehensive documentation of Nostr event kinds and protocol</li>
        <li><a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">NostrHub</a> - Explore Nostr Improvement Proposals (NIPs) and development</li>
        <li><a href="https://nostrapps.com" target="_blank" rel="noopener noreferrer">Nostrapps.com</a> - Discover other Nostr applications</li>
        <li><a href="/blog/nostr101">Nostr 101</a> - Our comprehensive beginner's guide to the protocol</li>
      </ul>

      <p>
        By choosing Nostr as its foundation, Divine is part of a growing movement toward open, decentralized social networking—where creativity, ownership, and freedom come first.
      </p>
    </article>
  );
}
