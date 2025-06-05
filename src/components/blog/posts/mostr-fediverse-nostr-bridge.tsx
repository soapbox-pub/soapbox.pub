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
  "slug": "mostr-fediverse-nostr-bridge",
  "title": "Introducing Mostr: a Fediverse Nostr bridge",
  "excerpt": "We hope you enjoy getting to know each other, and that this opens new doors for collaboration.",
  "coverImage": "/assets/blog/mostr-banner.png",
  "date": "2023-02-26",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/mostr-banner.png"
  }
};

export default function MostrFediverseNostrBridge() {
  return (
    <article className="prose prose-lg max-w-none">
      <h1>Introducing Mostr: a Fediverse Nostr bridge</h1>
      <iframe width="100%" height="400" src="https://www.youtube.com/embed/075wrIJ1vHg?si=xOhhKCyUgKuy_gdX" title="Nostr 101 Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      <p>When I first saw Nostr, I didn't think people would actually do it. The last few months have told a different story. Nostr has been exploding with developer activity! I looked closer.</p>
      <p>Nostr solves my most basic frustration with ActivityPub, which is that some of my followers on different servers can't see me because their admin said so. I'm tired of it.</p>
      <p>We've been investing in the ActivityPub ecosystem for years. Nostr is a better protocol, but it lacks the years of work that went into making the Fediverse usable. However, things are moving fast. This is partly _because_ of the protocol, which is easy to implement and gives clients a lot of control. It seems like only a matter of time until it overtakes the Fediverse, and I'd rather be a part of it than get left behind.</p>
      <p>So the first thing I've decided to do is build a bridge. This bridge connects ActivityPub and Nostr together, so we can communicate across the pond. Everyone wins.</p>
      <p>We hope you enjoy getting to know each other, and that this opens new doors for collaboration.</p>
      <p><strong>Source code:</strong> <a href="https://gitlab.com/soapbox-pub/mostr" target="_blank" rel="noopener noreferrer">https://gitlab.com/soapbox-pub/mostr</a></p>
      <h2>Usage</h2>
      <p>To interact with ActivityPub users on Nostr, please subscribe to our relay:</p>
      <pre><code>wss://relay.mostr.pub
      </code></pre>
      <p>You can then find a user by their NIP-05 identifier, eg: <code>alex_at_gleasonator.com@mostr.pub</code></p>
      <p>To see Nostr users on the Fediverse, search for them by their hexadecimal public key:</p>
      <pre><code>https://mostr.pub/users/&lt;pubkey&gt;</code></pre>
      <p>As your network interacts with Nostr users, you'll start seeing more of them over time.</p>
      <h2>Implementation</h2>
      <p>The bridge acts as an ActivityPub _server_ and a Nostr _client_. </p>
      <p>It has an ActivityPub inbox which converts data into Nostr events which it pushes to a relay. It listens on the relay and federates ActivityPub data for relevant Nostr events.</p>
      <h3>Tech stack</h3>
      <ul>
        <li>TypeScript + Deno</li>
        <li>Web Cache API</li>
        <li>SQLite</li>
      </ul><h2>What's next?</h2>
      <p>Mostr is a work in progress. We plan to fix bugs, add support for emoji reactions, and more.</p>
      <p>Next, we are going to make Mastodon clients work on Nostr. Not just Soapbox, all of them. This will require a middleware service that acts like a Mastodon "instance" and talks to Nostr relays behind the scenes.</p>
      <p><strong>Update: 5/10/24:</strong> Nostr users can now follow accounts on Bluesky via the Mostr Bridge! <a href="/blog/follow-bluesky/" target="_blank" rel="noopener noreferrer">Learn more here</a>.</p>
      <h2>Support us</h2>
      <p>If you like what we do, please support us!</p>
      <p><strong>BTC:</strong> <code>bc1q9cx35adpm73aq2fw40ye6ts8hfxqzjr5unwg0n</code></p>
      <p>Source code: <a href="https://gitlab.com/soapbox-pub/mostr" target="_blank" rel="noopener noreferrer">https://gitlab.com/soapbox-pub/mostr</a></p></article>
  );
}