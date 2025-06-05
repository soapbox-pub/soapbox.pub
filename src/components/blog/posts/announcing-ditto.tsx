import React from 'react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name?: string;
    picture?: string;
  };
  ogImage: {
    url?: string;
  };
}

export const meta: BlogPostMeta = {
  "slug": "announcing-ditto",
  "title": "Announcing Ditto",
  "excerpt": "It has moderation. It has spam filters. It has NIP-05 self-service. It has quote posts, emoji reactions, and zaps. ⚡ The scope of this project is absolutely huge. It aims to take everything that's good about Mastodon and implement it on Nostr, with none of the downsides.",
  "coverImage": "/assets/blog/announcing-ditto.jpeg",
  "date": "2024-06-14",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-ditto.jpeg"
  }
};

export default function AnnouncingDitto() {
  return (
    <div className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ 
        __html: `<p>It's finally here. After a year of work, I'm pleased to announce the first release of Ditto! 🎉</p>

<strong>Ditto is a Nostr community server.</strong> It has a built-in Nostr relay, a web UI, and it implements Mastodon's REST API.

<p>It has moderation. It has spam filters. It has NIP-05 self-service. It has quote posts, emoji reactions, and zaps. ⚡ The scope of this project is absolutely huge. It aims to take everything that's good about Mastodon and implement it on Nostr, with none of the downsides.</p>

<p>A huge thank you to <a href="/blog/soapbox-awarded-grant/" target="_blank" rel="noopener noreferrer">OpenSats</a> for sponsoring this project!</p>

<iframe width='100%' height='400' src='https://www.youtube.com/embed/iZyqVGHjDGo?si=yJxMBV7ss2Ei7hQg' title='Nostr 101 Video' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>

<p> <h2>Soapbox on Nostr</h2></p>

<p>One of the first things I wanted to do is make Soapbox work on Nostr. Soapbox is a polished UI for Mastodon that I started developing in 2019. It went on to become the web frontend for Truth Social in 2022. With Ditto, users of Nostr can use Donald Trump's preferred web interface to chat on Nostr &mdash; or, customize the design of the client to match your own vibe!</p>

<figure>
  <img alt='Example Ditto Home Page' src='/assets/blog/curated-communties/ditto-server.png' />
  <figcaption>Try it out at <a href='https://ditto.pub/' target='_blank'>ditto.pub</a>!</figcaption>
</figure>

<h2>50+ Mastodon Apps</h2>

<p>Since Ditto implements the Mastodon API, it can work with <a href="https://joinmastodon.org/apps" target="_blank" rel="noopener noreferrer">any Mastodon app</a>!</p>

<figure>
  <div className='grid grid-cols-2 gap-2'>
    <img src='/assets/blog/mastodon-android-ditto-1.png' />
    <img src='/assets/blog/mastodon-android-ditto-2.png' />
  </div>
  <figcaption>Viewing Nostr through the official Mastodon Android app.</figcaption>
</figure>

<h2>Starting a Server</h2>

<p>Ditto is designed to be easy for people to self-host. The goal is for people to build curated communities on many different domains.</p>

<p>Read <a href="https://docs.soapbox.pub/ditto/install/" target="_blank" rel="noopener noreferrer">the docs</a> to set up your own server!</p>

<h2>Usernames</h2>

<p>Ditto offers self-service of NIP-05 names on the domain.</p>

<p>Users can request a name, and then admins will have the opportunity to approve or deny the request. If approved, the user will be granted the name, and their posts will be promoted throughout the UI.</p>

<figure>
  <img alt='Set your identity on Ditto' src='/assets/blog/curated-communties/set-identity.png' />
  <figcaption>Choose how to be identified on your home Ditto server</figcaption>
</figure>

<h2>Domain Feeds</h2>

<p>Ditto can display a feed of posts from any domain name. Check out <a href="https://ditto.pub/timeline/nostrplebs.com" target="_blank" rel="noopener noreferrer">nostrplebs.com</a> or <a href="https://ditto.pub/timeline/fiatjaf.com" target="_blank" rel="noopener noreferrer">fiatjaf.com</a> for examples.</p>

<figure>
  <img alt='Example Ditto Local Feed' src='/assets/blog/curated-communties/local-feed.png' />
  <figcaption>Anyone with a NIP-05 on the server's domain shows in the Local Feed</figcaption>
</figure>

<h2>Moderation</h2>

<p>Each Ditto server can have a group of moderators and admins who manage the server. They can view reports, delete posts, and approve or reject users. Ditto offers the most robust moderation tools of any Nostr relay I'm aware of.</p>

<figure>
  <img alt='Ditto trends' src='/assets/blog/announcing-ditto/reports.png' />
  <figcaption>Sample admin report queue on Ditto</figcaption>
</figure>

<h2>Spam Filters</h2>

<p>Ditto has a policy plugin system that allows people to write custom scripts in TypeScript to reject any event. Check out <a href="https://docs.soapbox.pub/ditto/policies/" target="_blank" rel="noopener noreferrer">Ditto Moderation Policies</a> for more information!</p>

<h2>Trends</h2>

<p>Ditto analyzes the events in your database and generates trends. It tracks trending hashtags, users, and posts to improve discoverability.</p>

<p>Since the data is public, any client can utilize it. For example, Coracle custom feeds have already <a href="https://njump.me/nevent1qqsxfxsslvxv8cn8rl4v56hff52fxkptnhwf4y2m6tfjppep9lff0agprpmhxue69uhhyetvv9ujumn0wdmksetjv5hxxmmdqgsf03c2gsmx5ef4c9zmxvlew04gdh7u94afnknp33qvv3c94kvwxgsklndqw" target="_blank" rel="noopener noreferrer">been implemented</a> using Ditto trends!</p>

<figure>
  <img alt='Ditto trends' src='/assets/blog/announcing-ditto/trends.png' />
  <figcaption>Trending posts and people on ditto.pub</figcaption>
</figure>

<h2>Search</h2>

<p>Ditto ships with full-text search enabled in Postgres, helping users quickly find people and posts. Users of Mastodon and Pleroma will be happy to see search functionality that actually works. 😂</p>

<figure>
  <img alt='Searching "ditto" on Ditto' src='/assets/blog/ditto-search.png' />
  <figcaption>Searching "ditto" on Ditto</figcaption>
</figure>

<h2>Zaps</h2>

<p>Zaps, small Bitcoin transactions sent over the lightning network, have become central to the Nostr ecosystem. Ditto implements zaps on user profiles and posts. In future releases, we plan to add optional zaps to the selfservice NIP-05 username system, allowing Ditto admins to monetize their platforms. </p>

<figure>
  <img alt='Zap on Ditto' src='/assets/blog/announcing-ditto/zap2.png' />
  <figcaption>Zap on Ditto</figcaption>
</figure>

<h2>Nostr Relay</h2>

<p>Each Ditto server exposes a Nostr relay at <code>/relay</code>.</p>

<p>This is a fully-featured relay, with careful support for NIP-01 and much more, including NIP-50 search filters, deletions, COUNT's, and custom tag indexes.</p>

<h2>Media Attachments</h2>

<p>Ditto supports various options for uploading media, including:</p>

<p>- nostr.build - IPFS - Blossom - S3 (or any other S3-compatible service)</p>

<p>Check <a href="https://docs.soapbox.pub/ditto/media/" target="_blank" rel="noopener noreferrer">the docs</a> for more information.</p>

<h2>Fully Customizable Themes</h2>

<p>Ditto allows admins to feature help define their server's unique identity adding custom themes and logos. Define your entire color scheme through a single hex code, applicable seamlessly across both light and dark themes. Or, manually select each color for maximum personalization! </p>

<figure>
  <img alt='Custom theme editing on Ditto' src='/assets/images/ditto/theme-editor.png' />
  <figcaption>Custom theme editing on Ditto</figcaption>
</figure>

<h2>Technical Overview</h2>

<p>Ditto is built in Deno with TypeScript. It's basically a REST API with a built-in Nostr relay. This is the same design as Mastodon and Pleroma, replacing ActivityPub with Nostr.</p>

<p>Under the hood it uses Postgres. And it was built for and with <a href="https://nostrify.dev/" target="_blank" rel="noopener noreferrer">Nostrify</a>.</p>

<figure>
  <img alt='Soapbox + Ditto' src='https://docs.soapbox.pub/assets/soapbox-overview.DsbCuGgP.svg' />
  <figcaption><a href='https://docs.soapbox.pub/ditto/' target='_blank'>Learn more</a></figcaption>
</figure>

<h2>Signing Events</h2>

<p>Users on Nostr control their own private keys, allowing them to sign into any client. Authorization in Ditto is done through NIP-46 remote signing, so users keys never directly touch Ditto.</p>

<p>Even Soapbox implements NIP-46 so it can act as the remote signer. Keys may be stored in the browser, or in a browser extension like Alby for the best security.</p>

<figure>
  <img alt='NIP-46 signing' src='https://docs.soapbox.pub/assets/ditto-sign.dGTkeUGs.svg' />
  <figcaption>Ditto signs events with NIP-46. <a href='https://docs.soapbox.pub/ditto/signing' target='_blank'>Learn more.</a></figcaption>
</figure>

<h2>Flagship Ditto Communities</h2>

<p>The most important thing about Ditto is the ability for people to freely build, manage, and monetize their communities on Nostr. This is why the Fediverse has continued to thrive for over a decade despite the limitations of the protocol. We're lauching Ditto with three flagship servers to kickstart community development:</p>

<h3>ditto.pub</h3>

<a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">Ditto.pub</a> is the official flagship server of Ditto, running the stable latest version. It is open to anyone, with light moderation. We welcome curious Nostr and Fediverse users to reserve their free username on Ditto now!

<h3>henhouse.social</h3>

<a href="https://henhouse.social" target="_blank" rel="noopener noreferrer">Henhouse.social</a> is a women-only Ditto community opperated by M. K. Fain, owner of the largest feminist server on the Fediverse. This server will prioritize building community among women, while remaining connected to the larger Nostr community. 

<h3>gleasonator.dev</h3>

<a href="https://gleasonator.dev" target="_blank" rel="noopener noreferrer">Gleasonator.dev</a> is the primary development server for Soapbox and Ditto. Join it to test out all the latest features before they are launched to the public!

<h2>Creator Program</h2>

<p>The Ditto Creator Incubator empowers emerging creators by providing them with resources, support, and exposure to build and monetize their social community on Nostr. The program offers creators a unique opportunity to focus on their content without the constraints of traditional social media algorithms and censorship. Participants receive personalized onboarding, support for setting up Bitcoin micropayments with lighting, and promotion across multiple channels. </p>

<a href="/creators/" target="_blank" rel="noopener noreferrer"><strong>Apply to the Ditto Creator Incubator →</strong></a>

<h2>What Next?</h2>

<p>This early release includes everything that we think is important to make Ditto what it is. However, we know we still have a lot to improve and exciting ideas for the future! Here's our to do for the forseeable future:</p>

<h3>Improvements</h3>

<p>- Bug and UX improvements - Performance and stability - Improve compatability with Mastodon apps - Fix server downtime when relays restart  - Improve Alby support for multiple accounts - <a href="https://docs.soapbox.pub/ditto/known-issues" target="_blank" rel="noopener noreferrer">View all known issues →</a></p>

<p> <h3>New Features</h3></p>

<p>- Buy NIP-05 usernames with zaps - Improve support for Mastodon apps - Digital item shop for profile customization - Direct Messages - <a href="https://gitlab.com/soapbox-pub/ditto/-/issues" target="_blank" rel="noopener noreferrer">Submit a feature request on Gitlab →</a></p>

<h3>Get notified of new releases!</h3>
<EmailSignupForm tags={['Ditto']} />

<h2>Mentorship</h2>

<p>Supporting the growth of the open source development community is at the heart of our work at Soapbox. I am very proud that this past year has enabled me to provide mentorship to two young software developers, <a href="https://njump.me/npub1gujeqakgt7fyp6zjggxhyy7ft623qtcaay5lkc8n8gkry4cvnrzqd3f67z" target="_blank" rel="noopener noreferrer">Patrick dos Reis</a> of Brazil and <a href="https://njump.me/npub1q469xmf77nt9ltu4ks3excgts36ayt6v99ryn4rv2r2axmm4ye7q3vnkqp" target="_blank" rel="noopener noreferrer">shantaram</a> of India. Their contributions in the past few months have been immeasurable, and I could not be more grateful to have them on the Soapbox team.    <em>Want to get involved? <a href="/mentorships" target="_blank" rel="noopener noreferrer">Learn more</a> about mentorships at Soapbox.</em></p>

<p> <h2>Special Thanks</h2></p>

<p>I would like to give a special thanks to everyone who has made this past year possible: fiatjaf, for all your advice and support; the Soapbox community for being my early testers; and the generous people of the Nostr and Bitcoin community for allowing me to do this work. And, finally, a very special thanks to my wonderful, beautiful, kind, smart, and funny wife for all of her love, patience, and work to help my dreams come true. 😘</p>}`
      }} />
    </div>
  );
}
