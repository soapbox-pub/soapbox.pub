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
  "slug": "how-to-join-nostr-brazil-cobrafuma",
  "title": "X Banned in Brazil: How to Join Nostr",
  "excerpt": "Cobrafuma.com provides an easy onboarding experience for Brazilians to join Nostr, the only truly censorship-resistant social media platform",
  "coverImage": "/assets/blog/how-to-join-nostr-brazil/Cobarfuma-nostr-brazil-x-banned-twitter-alternative.png",
  "date": "2024-09-2",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/how-to-join-nostr-brazil/Cobarfuma-nostr-brazil-x-banned-twitter-alternative.png"
  }
};

export default function HowToJoinNostrBrazilCobrafuma() {
  return (
    <article className="prose prose-lg max-w-none">
      <p><strong><a href="/blog/como-entrar-no-nostr-brasil-cobrafuma" target="_blank" rel="noopener noreferrer">Leia esta página em português</a></strong></p>
      <h2>Nostr, The Freedom Solution to X/Twitter Censorship</h2>
      <p>Nostr is a censorship-resistant protocol for sharing content - similar to X (Twitter). Nostr is not just one single website, like X, so it cannot be banned or censored by any government or CEO. Nostr provides users with total portability of their account and content, and there are hundreds of different apps you can use to interact with other’s content across the network. </p>
      <figure>
      <div className="grid grid-cols-3 gap-2">
      <img src="/assets/blog/how-to-join-nostr-brazil/join-nostr-brazil-twitter-banned-x-1.png"  />
      <img src="/assets/blog/how-to-join-nostr-brazil/join-nostr-brazil-twitter-banned-x-2.png"  />
      <img src="/assets/blog/how-to-join-nostr-brazil/join-nostr-brazil-twitter-banned-x-3.png"  />
      </div>
      <figcaption>Nostr apps (left to right): Amethyst, Primal, and Ditto</figcaption>
      </figure>
      <h2>How to join Nostr in Brazil?</h2>
      <p>There are many ways to join Nostr across hundreds of apps. To simplify the onboarding process, we have created a landing space for Brazilians coming from X. </p>
      <p><strong>Join Nostr for Brazil at: <a href="https://cobrafuma.com" target="_blank" rel="noopener noreferrer">cobrafuma.com</a></strong></p>
      <figure>
        <img alt="Cobrafuma homepage" src="/assets/blog/how-to-join-nostr-brazil/cobrafuma-brazil-nostr-alternative-to-x-twitter-banned.png"   />
        <figcaption><a href="https://cobrafuma.com" target="_blank">Cobrafuma</a> - a Nostr Community for Brazil</figcaption>
      </figure>
      <p>Once you join Cobrafuma you can use your keys to use ANY Nostr app! Explore all Nostr apps <a href="http://nostrapps.com/" target="_blank" rel="noopener noreferrer">here</a>.</p>
      <h2>Cobrafuma, A Brazilian Community on Nostr</h2>
      <p>Cobrafuma is a community for Brazilians on Nostr. With Cobrafuma you can be a part of the Nostr protocol without fear of censorship.</p>
      <strong>How to join Cobrafuma:</strong>
      <p>1. Create your account (get your keys) 2. Claim your identity (your handle@cobrafuma.com)  3. Explore the freedom of Nostr! </p>
      <figure>
        <img alt="Request a username by adding an identity in the Settings tab" src="/assets/blog/how-to-join-nostr-brazil/cobrafuma-join-nostr-set-username-twitter-alternative.png"   />
        <figcaption>Claim your Cobrafuma.com username by going to Settings &gt; Identity</figcaption>
      </figure>
      <p>Cobrafuma is made with <a href="/ditto" target="_blank" rel="noopener noreferrer">Ditto</a>, a tool for building communities on Nostr.</p>
      <h2>Check out other communities on Nostr:</h2>
      <p>Ditto offers many ways to join Nostr! Check out these other servers to see if they are a better fit for you:</p>
      <ul>
      <li><a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">Ditto.pub</a> - The flagship server for Ditto</li>
      <li><a href="https://henhouse.social" target="_blank" rel="noopener noreferrer">Henhouse.social</a> - A community for women on Ditto</li>
      </ul></article>
  );
}