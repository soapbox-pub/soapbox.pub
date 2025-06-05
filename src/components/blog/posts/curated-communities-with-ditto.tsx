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
  "slug": "curated-communities-with-ditto",
  "title": "Creating Curated Communities on Nostr with Ditto",
  "excerpt": "Ditto empowers users build the community they want to see on Nostr",
  "coverImage": "/assets/blog/curated-communties/curated-communities-on-nostr.png",
  "date": "2024-04-28",
  "author": {
    "name": "Mary Kate Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/curated-communties/curated-communities-on-nostr.png"
  }
};

export default function CuratedCommunitiesWithDitto() {
  return (
    <article className="prose prose-lg max-w-none">
      <p><strong>For five years I have been building communities for women on the free and decentralized web.</strong> In 2019 I created <a href="https://spinster.xyz/" target="_blank" rel="noopener noreferrer">Spinster.xyz</a>, the largest (and, to my knowledge, the only) women-centered Fediverse server, home to  over 20,000 users. We've faced our fair share of harassment and learned a lot about creating curated and intentional sub-communities on a protocol that is inherently censorship resistent. </p>
      <p>Now, as Soapbox moves it's focus to Nostr, history repeats itself.  Nostr, perhaps even moreso than the Fediverse, is built from the ground up to protect users' free speech. This is a good thing, and it's why we're excited to build on Nostr. But the protocol is young, and without robust tools to curate communities people actually enjoy, Nostr runs the risk of alienating the very users that have the opportunity to bring Nostr (and Bitcoin with it) mainstream.</p>
      <p>Ditto provides a solution by allowing users to opt in to curated communities while still remaining connected to the larger Nostr network and enjoying all the benefits of an open protocol. </p>
      <h2>What is Ditto?</h2>
      <strong><a href="/ditto" target="_blank" rel="noopener noreferrer">Ditto</a> is a self-hosted server featuring a community-centered Nostr relay with a built-in UI.</strong>
      <p>Each Ditto server hosts it's own community of users, tied together by common identity but free to take their keys and leave at any time. </p>
      <p>Ditto offers robust moderation tools at both the server and user level so that both communities and the individuals within them can craft their ideal experience on Nostr. </p>
      <strong>Update June 15:</strong> <a href="/blog/announcing-ditto" target="_blank" rel="noopener noreferrer">Ditto 1.0</a> is officially live! Try it out today at: <a href="https://ditto.pub/" target="_blank" rel="noopener noreferrer">Ditto.pub</a> or browse other Ditto servers <a href="/servers" target="_blank" rel="noopener noreferrer">here</a>.
      <figure>
        <img alt="Example Ditto Home Page" src="/assets/blog/curated-communties/ditto-server.png"   />
        <figcaption>Ditto servers can be customized to each community</figcaption>
      </figure>
      <h2>Building Community on Nostr with Ditto</h2>
      <strong>Choose Your Home Server:</strong> Ditto is meant to be self-hosted by multiple independent communties who want to connect together. For example, you may create a Ditto community for a specific geographic region, a special interest like homesteading, or an identity group like women. Ditto servers can be customized with colors, branding, and more to help your community feel unique. Users can take their existing npub to any Ditto server and opt in to making it their home server, and change home servers at any time! Users always retain control over their keys.
      <strong>NIP-05 Identities:</strong> Ditto utilitizes NIP-05 identities (usernames granted by a specific domain) to mark users as part of the community. Ditto features a built-in self-service name provider for users, which admins can approve or revoke. This is how Ditto admins will determine who is part of their community, and how users will indicate their choice of home server.
      <figure>
        <img alt="Set your identity on Ditto" src="/assets/blog/curated-communties/set-identity.png"   />
        <figcaption>Choose how to be identified on your home Ditto server</figcaption>
      </figure>
      <strong>Local Feed:</strong> The local feed is a homebase of each Ditto server, where users who are identified on the server can see and engage with each-other's posts.
      <figure>
        <img alt="Example Ditto Local Feed" src="/assets/blog/curated-communties/local-feed.png"   />
        <figcaption>Anyone with a NIP-05 on the server's domain shows in the Local Feed</figcaption>
      </figure>
      <strong>Fully Customizable Themes:</strong> Emphasize your server's unique flair by adding custom themes and logos. Ditto puts you in charge, encouraging the creation of a name and logo that truly resonate with your community. Define your entire color scheme through a single hex code, applicable seamlessly across both light and dark themes.
      <figure>
        <img alt="Custom theme editing on Ditto" src="/assets/images/ditto/theme-editor.png"   />
        <figcaption>Custom theme editing on Ditto</figcaption>
      </figure>
      <h2>Server-level Moderation Options on Ditto</h2>
      <p>Each Ditto server can control the experience on Nostr for its community through server-level moderation. There are multiple ways to do this, providing a variety of options for the needs of each community. </p>
      <strong>Post removal:</strong> Remove specific posts from your server. They will still be available to the rest of the Nostr Network.
      <strong>Muted Word Policies:</strong> Mute any notes with specific words for the whole server.
      <strong>Server-level User Muting:</strong> Mute individual npub's for your whole server so individual users don't have to bother with obvious bad actors.
      <figure>
        <img alt="Ditto trends" src="/assets/blog/announcing-ditto/reports.png"   />
        <figcaption>Sample admin report queue on Ditto</figcaption>
      </figure>
      <strong>Domain Muting:</strong> An entire other Ditto serving acting badly? Mute the whole server.
      <strong>AI Content Policies:</strong> Connect your server to an OpenAI scoring tool with specific rules to approve individual posts.
      <em>Don't like how your Home Server is moderating content? Too much censorship? Not enough? You can take your keys to any other Nostr client, including Ditto servers, to get the experience you want! Or, better yet, host your own Ditto server and take control of moderation yourself!</em>
      <h2>User-level Moderation Options on Ditto</h2>
      <p>Users can further curate their own feeds by muting specific other users, including users on their own home server. Future releases of Ditto will also alow users to mute specific words, entire conversations, and other domains.</p>
      <hr />
      <h2>Join the First Woman-Only Ditto server</h2>
      <p>Ditto is still in development, but you can sign up now for early access to the first community Ditto server: henhouse.social, a Nostr relay just for women! Learn more and apply to join:</p>
      <a href="https://henhouse.social" className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80">Sign Up For Early Access to Hen House</a></article>
  );
}