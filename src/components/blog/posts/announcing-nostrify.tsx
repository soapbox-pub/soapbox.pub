import React from 'react';
import { EmailSignupForm } from '../../EmailSignupForm';

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
  "slug": "announcing-nostrify",
  "title": "Announcing Nostrify",
  "excerpt": "Nostrify is a flexible library for building Nostr apps in TypeScript. It provides Relays, Signers, Storages, and more to help you build your app.",
  "coverImage": "/assets/blog/announcing-nostrify/announcing-nostrify.png",
  "date": "2024-04-17",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-nostrify/announcing-nostrify.png"
  }
};

export default function AnnouncingNostrify() {
  return (
    <article className="prose prose-lg max-w-none">
      <p><strong>As I have been building <a href="/ditto" target="_blank" rel="noopener noreferrer">Ditto</a>,</strong> it has become clear that there are foundational Nostr development tools missing from the ecosystem — tools Ditto needs to succeed.</p>
      <p>I have <a href="https://github.com/nbd-wtf/nostr-tools/pulls?q=is%3Apr+author%3Aalexgleason" target="_blank" rel="noopener noreferrer">contributed heavily</a> to <strong>nostr-tools</strong> (as the second-highest contributor), and sent <a href="https://github.com/nostr-dev-kit/ndk/pulls?q=is%3Apr+author%3Aalexgleason" target="_blank" rel="noopener noreferrer">a few patches</a> to <strong>NDK</strong>. But I found difficulties with both that are not easy to solve.</p>
      <p>I wanted a modular library built around thoughtful interfaces, using modern web APIs like <a href="https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal" target="_blank" rel="noopener noreferrer">AbortSignal</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator" target="_blank" rel="noopener noreferrer">AsyncGenerator</a>. I wanted components that could be easily swapped in and out, instead of a monolithic framework.</p>
      <p>Additionally, the problems I was facing on Ditto were also problems with the <a href="https://mostr.pub" target="_blank" rel="noopener noreferrer">Mostr Bridge</a>. And I know I'm not the only one! So instead of just baking these solutions into Ditto, I decided to create a new Nostr library where we could all share code together.</p>
      <p>Thus, <a href="https://nostrify.dev/" target="_blank" rel="noopener noreferrer">Nostrify</a> was born!</p>
      <h2>What is Nostrify?</h2>
      <strong>Nostrify</strong> is a flexible library for building Nostr apps in TypeScript. It provides Relays, Signers, Storages, and more to help you build your app.
      <p>It is centered around interfaces such as <a href="https://jsr.io/@nostrify/nostrify/doc/~/NStore" target="_blank" rel="noopener noreferrer"><code>NStore</code></a>, <a href="https://jsr.io/@nostrify/nostrify/doc/~/NRelay" target="_blank" rel="noopener noreferrer"><code>NRelay</code></a>, and <a href="https://jsr.io/@nostrify/nostrify/doc/~/NostrSigner" target="_blank" rel="noopener noreferrer"><code>NostrSigner</code></a>. So even if you don't like the built-in components, you can easily swap them out for your own!</p>
      <p>Nostrify uses nostr-tools under the hood for low-level operations, but it implements a brand-new <a href="https://nostrify.dev/relay/single" target="_blank" rel="noopener noreferrer">Relay</a> and <a href="https://nostrify.dev/relay/pool" target="_blank" rel="noopener noreferrer">Pool</a> from scratch. If you want, we even offer a <a href="https://nostrify.dev/integrations/ndk" target="_blank" rel="noopener noreferrer">wrapper around NDK</a> so you can use it as a relay backend!</p>
      <h2>Building Together</h2>
      <p>A core tenet of Nostrify is "interfaces over implementations". You can think of Nostrify as a <strong>protocol</strong> for building on Nostr with TypeScript... kind of like Nostr itself!</p>
      <p>We want you to <strong>build your own components</strong> and share them with the community. To get started, see:</p>
      <ul>
      <li><a href="https://nostrify.dev/relay/#custom-relays" target="_blank" rel="noopener noreferrer">Custom Relays</a> - <a href="https://nostrify.dev/store/#custom-storages" target="_blank" rel="noopener noreferrer">Custom Storages</a> - <a href="https://nostrify.dev/sign/#custom-signers" target="_blank" rel="noopener noreferrer">Custom Signers</a></li>
      </ul><h2>Ditto: Soon</h2>
      <a href="/ditto" target="_blank" rel="noopener noreferrer">Ditto</a> is a decentralized, self-hosted social media server that emphasizes user control and community building across platforms. Key features include a built-in Nostr relay, compatibility with any Mastodon app, and full customizability. Always open-source, no ads, no tracking, and no censorship.
      <p>Please stay tuned. Ditto is almost ready!</p>
      <h3>Get notified of new releases!</h3>
      <EmailSignupForm tags={['Nostrify']}   />
      <h2>Bring your projects to life on Nostr 🌱</h2>
      <a href="https://nostrify.dev" className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80">Try Nostrify Now!</a>
    </article>
  );
}