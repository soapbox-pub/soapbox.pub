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
  "slug": "comparing-protocols",
  "title": "Nostr vs. Fediverse vs. Bluesky: A Comparison of Decentralized Social Protocols",
  "excerpt": "While all three protocols aim to decentralize social media, they differ in their approach to decentralization, user identity control, and censorship resistance.",
  "coverImage": "/assets/blog/protocols.png",
  "date": "2025-02-18",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/protocols.png"
  },
  "tags": ["nostr", "protocol", "comparison"]
};

export default function ComparingProtocols() {
  return (
    <article className="prose prose-lg max-w-none">
      <h3>Comparing Decentralized Social Protocols: Fediverse (ActivityPub) vs. Bluesky (AtProto) vs. Nostr</h3>
      <p>The social web is rapidly evolving, and decentralized protocols are at the forefront of this shift. Instead of relying on single, centralized platforms like Twitter or Facebook, decentralized protocols allow users to connect across different apps, maintain control of their identities, and reduce reliance on corporate gatekeepers.</p>
      <p>Three major protocols stand out in this space: <strong>Fediverse (ActivityPub), Bluesky (AtProto), and Nostr</strong>. While some of these decentrlaized platforms have become more popular than others, their different approaches to decentralization provide various strengths and weaknesses.</p>
      <hr />
      <h2>About the Fediverse (ActivityPub)</h2>
      <h3><strong>Background & History</strong></h3>
The <strong>Fediverse</strong> is a collection of decentralized social networks powered by the <strong>ActivityPub</strong> protocol. The protocol was developed by the <strong>W3C (World Wide Web Consortium)</strong> and officially became a recommended standard in <strong>2018</strong>. It was designed to allow different social platforms to interoperate, meaning users on one platform can follow and interact with users on another.
      <p>ActivityPub grew in popularity due to concerns over centralized control of platforms like Twitter and Facebook. <strong>Mastodon</strong>, one of its most well-known applications, gained a massive influx of users in <strong>2022</strong> after Elon Musk acquired Twitter.</p>
      <h3><strong>Popular Apps & Servers</strong></h3>
      <ul>
      <ul>
      <li><strong>Mastodon</strong> – The most popular microblogging platform in the Fediverse, often compared to Twitter.</li>
      <li><strong>PeerTube</strong> – A decentralized alternative to YouTube.</li>
      <li><strong>Pixelfed</strong> – A photo-sharing network similar to Instagram.</li>
      <li><strong>Pleroma</strong> – A lightweight alternative to Mastodon.</li>
      <li><strong>Misskey</strong> – A more feature-rich microblogging option.</li>
      <li><strong>Soapbox</strong> – A frontend for ActivityPub servers.</li>
      </ul></ul><h3><strong>How ActivityPub Works</strong></h3>
      <ul>
      <ul>
      <li>The protocol allows <strong>federation</strong>, meaning different servers (instances) can communicate with each other.</li>
      <li>Users create an account on one server, but they can follow and interact with users on different servers.</li>
      <li>Each server is independently operated, so <strong>admins have control over moderation and rules</strong>.</li>
      <li>If an instance is shut down or a user is banned, the user will lose their entire account and data and must create a new account on another server manually.</li>
      </ul></ul><hr />
      <h2>About Bluesky (AtProto)</h2>
      <h3><strong>Background & History</strong></h3>
Bluesky started as a Twitter-funded project in <strong>2019</strong>, with the goal of building a decentralized social networking protocol. The team, led by <strong>Jay Graber</strong>, launched <strong>Authenticated Transfer Protocol (AtProto)</strong> as the foundation of the network. In early <strong>2023</strong>, Bluesky opened up access to the public and positioned itself as an alternative to centralized social media.
      <h3><strong>Popular Apps & Servers</strong></h3>
      <ul>
      <ul>
      <li><strong>Bluesky</strong> – The official and only major client.</li>
      <li>While self-hosting is technically possible, the entire ecosystem revolves around <strong>bsky.social</strong>, making decentralization extremely limited.</li>
      </ul></ul><h3><strong>How AtProto Works</strong></h3>
      <ul>
      <ul>
      <li>Bluesky uses <strong>DIDs (Decentralized Identifiers)</strong> for accounts, but accounts are still managed centrally.</li>
      <li>AtProto allows users to <strong>theoretically</strong> move between different services. However, user keys are controlled by the server admin, and users' ability to move servers is dependent on the server's willingness to cooperate.</li>
      <li>Although AtProto is a decentralized protocol, in practice, <strong>Bluesky is highly centralized</strong> because the vast majority of users rely on <strong>bsky.social</strong>, which can block entire self-hosted servers.</li>
      <li>Self-hosting is highly restricted: servers are <strong>limited to 100 users</strong>, and <strong>Bluesky can refuse to federate with them</strong>.</li>
      </ul></ul><p>(For a more technical deepdive on Bluesky vs. Nostr, check out <a href="https://habla.news/u/alex@gleasonator.dev/bluesky-vs-nostr" target="_blank" rel="noopener noreferrer">this post</a>.) </p>
      <hr />
      <h2>About Nostr</h2>
      <h3><strong>Background & History</strong></h3>
      <strong>Nostr (Notes and Other Stuff Transmitted by Relays)</strong> was created by <strong>fiatjaf</strong> in <strong>2020</strong> as a censorship-resistant social protocol. Unlike ActivityPub and AtProto, Nostr is <strong>not server-based</strong> but instead operates through a <strong>relay-based</strong> model.
      <p>Nostr gained significant attention in <strong>2023</strong> after receiving endorsements from Bitcoin advocates and figures like Edward Snowden and Jack Dorsey. Learn more about Nostr in our <a href="/blog/nostr101/" target="_blank" rel="noopener noreferrer">Nostr 101 guide</a>.</p>
      <h3><strong>Popular Apps & Clients</strong></h3>
      <ul>
      <ul>
      <li><strong>Damus</strong> – iOS client.</li>
      <li><strong>Amethyst</strong> – Android client.</li>
      <li><strong>Ditto</strong> – A web-based client.</li>
      <li><strong>Primal, Nos, Snort</strong> – Other popular and growing clients.</li>
      </ul></ul><h3><strong>How Nostr Works</strong></h3>
      <ul>
      <ul>
      <li><strong>Relay-based rather than server-based</strong>: Users publish messages to multiple relays, which are simple data broadcasters.</li>
      <li><strong>Decentralized identity</strong>: Users have cryptographic key pairs (private/public keys) instead of usernames tied to servers.</li>
      <li><strong>Completely censorship-resistant</strong>: Since identities are key-based, no central authority can delete or ban an account.</li>
      <li><strong>Moderation happens at the client and relay level</strong>: If a relay blocks a user, they can still use another relay.</li>
      </ul></ul><hr />
      <h2>Which Decentralized Protocol is the Best?</h2>
      <p>Each protocol has strengths and weaknesses, but when it comes to <strong>true decentralization and censorship resistance</strong>, <strong>Nostr</strong> is the best option.</p>
      <h3><strong>Comparison Factors</strong></h3>
      <figure style={{ width: '100%', height: 'auto' }}>
      <img alt="Comparison of Nostr, Fediverse, and Bluesky" src="/assets/blog/protocol-comparison-details.png" style={{ width: '100%', height: 'auto', objectFit: 'contain' }}  />
      </figure>
      <h3><strong>Nostr: The Only Truly Decentralized Protocol</strong></h3>
      <ul>
      <ul>
      <li><strong>True decentralized identity</strong> – Your Nostr account is tied to a cryptographic key, not a server.</li>
      <li><strong>Censorship resistance</strong> – If a relay bans you, you can use another.</li>
      <li><strong>No gatekeepers</strong> – Unlike Bluesky, where Bsky.social can block your server.</li>
      <li><strong>More flexible moderation</strong> – Clients and relays, rather than entire accounts, can be moderated.</li>
      </ul></ul><p>The downside? <strong>Nostr is still young</strong>, meaning there are fewer polished apps compared to the long history of ActivityPub. However, given its rapid growth, this is expected to improve over time.</p>
      <hr />
      <h2>Follow Users Across Protocols with the Mostr Bridge</h2>
      <iframe width="100%" height="400" src="https://www.youtube.com/embed/075wrIJ1vHg?si=xOhhKCyUgKuy_gdX" title="Nostr 101 Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      <p>The good news is that no matter which platform you chose, you don't need to be isolated from the others. The <strong><a href="https://mostr.pub/" target="_blank" rel="noopener noreferrer">Mostr Bridge</a></strong> allows users to follow accounts across platforms.</p>
      <p>The Mostr Bridge acts as a relay that translates posts between protocols, letting users follow eachother across multiple decentralized platforms. The bridge is <strong>best experienced from the Nostr side</strong>, by creating an account on Nostr and following your friends on the Fediverse and Bluesky from there. </p></article>
  );
}