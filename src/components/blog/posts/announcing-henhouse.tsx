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
  "slug": "announcing-henhouse",
  "title": "Announcing Henhouse: A Nostr Community for Women",
  "excerpt": "Join a moderated Nostr community for women, and remain connected to the rest of the network",
  "coverImage": "/assets/blog/announcing-henhouse/announcing-henhouse.png",
  "date": "2024-06-17",
  "author": {
    "name": "Mary Kate Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-henhouse/announcing-henhouse.png"
  }
};

export default function AnnouncingHenhouse() {
  return (
    <article className="prose prose-lg max-w-none">
      <h1>Welcome to Henhouse</h1>
      <p><strong>For half a decade now I've been running communities for women on the decentralized web.</strong> Women should have access to all the freedom decentralization offers, but it was clear that we could not trust male admins of these sites to uphold the protection of women. In 2019, we launched <a href="https://spinster.xyz">Spinster</a> - the largest women-centered server on the Fediverse. Today, tha server is still home to many active users who join seeking an escape from male dominated platforms.</p>
      <p>However, in five years of running this server, it's become clear that there are major issues with the Fediverse that undermine the network's goals of freedom and decentralization. Highest among this list is the non-portability of user accounts. This means that when a server admin moderates one of thier users, that content is not just gone from the community - it's gone from the user who should own it. Or, as we say on Nostr, "not your keys, not your content."</p>
      <p>Nostr provides a better protocol to protect user freedom while also creating currated communities, thanks to Ditto. I believe that Nostr is the future. So, while Spinster isn't going anywhere, it's time to launch something new for the next generation of women who value digital freedom.</p>
      <h2>What is Henhouse?</h2>
      <p>Henhouse is a Nostr community for women build on <a className="text-azure underline" href="/ditto">Ditto</a>. Users get a henhouse.social NIP05 identity and enjoy local feed with a moderated community.</p>
      <p><a className="text-azure" href="https://henhouse.social"><strong>Visit Henhouse →</strong></a></p>
      <img className="h-100 mt-16 !max-h-full" alt="Henhouse mobile" src="/assets/blog/announcing-henhouse/henhouse-mobile.png" />
      <h2>What is Ditto?</h2>
      <p>Ditto is a self-hosted server featuring a community-centered Nostr relay with a built-in UI. Each Ditto server hosts it's own community of users, tied together by common identity but free to take their keys and leave at any time.</p>
      <p>Ditto offers robust moderation tools at both the server and user level so that both communities and the individuals within them can craft their ideal experience on Nostr. <a className="text-azure underline" href="/ditto">Learn more about Ditto.</a></p>
      <h2>Is it women-only?</h2>
      <p>Henhouse is only open to women. This is primarily based on the honor system, user content history, and judgement of the mods. We can't guarentee it will be 100% women-only, but we will do our best to try. Users who are found to be violating our rules, including men, will have their henhouse.social identity revoked and will not be able to participate in the local timeline or post to the Henhouse relay.</p>
      <h2>What content will be moderated on Henhouse?</h2>
      <p>Henhouse will promote open dialogue and civilized debate. Misogyny, racism, harassment, spam, and porn will not be permitted. <a className="text-azure underline" href="/blog/curated-communities-with-ditto/">Learn more</a> about moderation and building currated communities on Ditto.</p>
      <h2>Is this censorship?</h2>
      <p>No! Nostr is an open protocol, and we have no ability to prevent anyone from saying whatever they want - nor would we want to. We do have the ability, though, to create a better environment for ourselves where we don't have to deal with harassment. If you don't like it, you don't have to use Henhouse! And you can always take your keys to another client, anyway.</p>
      <h2>Will it connect to Spinster?</h2>
      <p>Henhouse and Spinster should be able to communicate through Soapbox's <a href="/blog/mostr-fediverse-nostr-bridge/">Mostr Bridge</a>.</p>
      <h2>How can I join?</h2>
      <p>Apply today at <a className="text-azure" href="https://henhouse.social">Henhouse.social</a>! Users will be reviewed based on thier existing content. If you are new to Nostr, please write in the application field how you heard abuot Henhouse and why you'd like to join.</p>
      <p><a className="text-azure" href="https://henhouse.social"><strong>Apply to Henhouse →</strong></a></p>
    </article>
  );
}