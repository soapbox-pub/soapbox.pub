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
  "slug": "nostr101",
  "title": "Nostr 101: A Beginner Guide to the Decentralized Social Network",
  "excerpt": "How to join Nostr, how to create your account on Nostr, and what Nostr apps to use for beginners",
  "coverImage": "/assets/blog/nostr-101.png",
  "date": "2025-02-16",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/nostr-101.png"
  }
};

export default function Nostr101() {
  return (
    <article className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ 
        __html: `<p> <h2>What is Nostr?</h2></p>

<strong>Nostr (Notes and Other Stuff Transmitted by Relays) is a decentralized, censorship-resistant social protocol designed to give users control over their online identities and interactions.</strong> Unlike traditional social media platforms that rely on centralized servers and moderation, Nostr allows users to communicate directly through a network of independent relays. This makes it permissionless—meaning anyone can use it without needing approval from a corporation or government.

<iframe width='100%' height='400' src='https://www.youtube.com/embed/NVm_jGdwTjQ?si=5qcrxgjr4keqblo4' title='Nostr 101 Video' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>

<h3>Key Features of Nostr:</h3>

<p>- <strong>Decentralized:</strong> No single company controls Nostr; it operates on a distributed network of relays. - <strong>Censorship-Resistant:</strong> Users cannot be banned from the network; they can always find a relay that will host their content. - <strong>Permissionless:</strong> No accounts, phone numbers, or email verification required—just a cryptographic key pair.</p>

<h2>How to Create an Account on Nostr</h2>

<p>Unlike traditional social media, Nostr does not require a username-password combo. Instead, it uses <strong>cryptographic keys</strong>:</p>

<p>- <strong>Public Key (npub_...):</strong> This is your identity, like a username. Anyone can see it and follow you. - <strong>Private Key (nsec_...):</strong> This is your password. <strong>Never share it!</strong> It signs your posts and proves your identity. - <strong>Username (NIP05 domain):</strong> NIP05 usernames allow users to have an easy-to-read, email-like handle (e.g., user@domain.com). You can pay for usernames from many services, or get one for free on <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">Ditto.pub</a>.</p>

<p> <h2>Nostr Clients (Apps) vs. Relays</h2></p>

<figure style={{ width: '100%', height: 'auto' }}>
  <img alt='Best Nostr Apps' src='/assets/blog/best-nostr-apps.png' style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
</figure>

<h3>Clients: How You Access Nostr</h3>
Clients are applications that allow users to read, write, and interact with content on Nostr. They function similarly to social media apps but with full decentralization.

<p>There are multiple clients (apps) for accessing Nostr, each with different features. Because Nostr is decentralized, your account is not tied to any single app—you can take your private and public keys to any Nostr client, and your identity, followers, and posts will remain the same. This means you have one account, infinite apps to choose from. </p>

<strong>Best Nostr Clients:</strong>
- <strong>Primal</strong> (Web, iOS, Android) – Great for discovery and ease of use.
- <strong>Damus</strong> (iOS) – A clean, Apple-friendly experience.
- <strong>Amethyst</strong> (Android) – A popular choice for Android users.
- <strong>Ditto</strong> (Web, mobile web) – A simple and intuitive way to explore Nostr.
- Explore more clients on <a href="https://nostrapps.com" target="_blank" rel="noopener noreferrer">Nostrapps.com</a>.

<p>Each client can connect to any relay, and users can switch between clients while keeping the same identity (public/private key pair).</p>

<h3>Relays: The Backbone of Nostr</h3>
Relays are servers that store and distribute messages between users. Unlike centralized platforms where a single entity owns the database, Nostr relays operate independently. Users can publish their messages to multiple relays to increase visibility and redundancy.

<p>- Relays do not control user accounts; they only store and transmit messages. - Anyone can run a relay, making the network decentralized. - Some relays may charge a fee for posting messages to prevent spam. - Users should connect to multiple relays to ensure their posts reach a wider audience.</p>

<h3>How Relays and Clients Work Together</h3>
1. A user posts a message via a client (e.g., Ditto or Primal).
2. The client signs the message with the user’s private key.
3. The message is sent to multiple relays.
4. Other users’ clients receive messages from relays they are connected to.
5. Users see updates in real-time, depending on which relays they follow.

<p>This separation of data storage (relays) and user interfaces (clients) ensures that Nostr remains resilient, censorship-resistant, and user-controlled.</p>

<p>By understanding relays and clients, you can better navigate the Nostr ecosystem and make the most of its decentralized nature!</p>

<p> <h2>Zaps: Tipping with Bitcoin</h2></p>

<p>Zaps are a way to send small Bitcoin payments over the Lightning Network. Users can tip others for valuable content.</p>

<p>- <strong>Get a Lightning Address:</strong> Sign up with a service like Alby or Zebedee. You can also explore other Lightning address providers at <a href="https://lightningaddress.com" target="_blank" rel="noopener noreferrer">lightningaddress.com</a>. - <strong>Link Your Address to Your Nostr Profile:</strong> Add it in your profile settings on your chosen client. - <strong>Start Receiving Zaps!</strong> Users can now tip you directly from Nostr.</p>

<h2>How Nostr Differs from the Fediverse and Bluesky</h2>
Nostr is the only fully decentralized social network, but it shares similarities with the Fediverse and Bluesky. 

<figure style={{ width: '100%', height: 'auto' }}>
  <img alt='Comparison of Nostr, Fediverse, and Bluesky' src='/assets/blog/protocol-comparison.png' style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
</figure>

<strong>Mostr Bridge: Connecting Nostr to the Fediverse</strong>

<p>The Mostr Bridge is a powerful tool that connects the Nostr network with the Fediverse (e.g., Mastodon, Pleroma). This allows users to follow and interact with accounts across both ecosystems without needing to switch platforms. Explore the bridge <a href="https://mostr.pub" target="_blank" rel="noopener noreferrer">here</a>.</p>

<h2>The Easiest Way to Get Started on Nostr</h2>

<p>Nostr is a powerful and innovative platform that gives users full control over their online presence. If you want the easiest way to get started, <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">try Ditto.pub</a> and start exploring the Nostr ecosystem today!</p>}`
      }} />
    </article>
  );
}
