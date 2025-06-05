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
  "slug": "soapbox-awarded-grant",
  "title": "Soapbox Awarded Grant by OpenSats",
  "excerpt": "Today I'm pleased to announce that Soapbox has been awarded a grant by OpenSats to build out Ditto, our new project to port Soapbox to Nostr.",
  "coverImage": "/assets/blog/ditto-banner.png",
  "date": "2023-07-17",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/ditto-banner.png"
  }
};

export default function SoapboxAwardedGrant() {
  return (
    <article className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ 
        __html: `<p> Today I'm pleased to announce that Soapbox has been awarded a grant by OpenSats to build out Ditto, our new project to port Soapbox to Nostr.</p>

<p>Soapbox started out as a fork of Mastodon in 2019 with additional features and an improved UI. For the past 4 years it has been a source of innovation on the Fediverse, implementing features such as emoji reactions, quote posts, and events.</p>

<p>However, there are problems with the ActivityPub protocol championed by Mastodon. The main issue is that user accounts are tied to a single server. When a Mastodon server is taken offline, all of its users permanently lose their accounts, leaving a hole in the network. For large servers, this can have devastating, lasting effects on the growth of the network. In addition, users on Mastodon can get banned for unfair, arbitrary reasons. Too many bad experiences add up, and leave a sour taste for users.</p>

<p>Nostr is a reimagined protocol that fixes things with cryptography. Users get a private key to sign events (similar to a Bitcoin wallet), allowing people to avoid outages and migrate off unfriendly servers. Nostr is a fresh approach to social media, fixing deep problems that hinder Mastodon's growth, while freeing people from corporate social media.</p>

<p>Our new project, "Ditto", is a competitor to Mastodon. It is an open-source, self-hosted social media server for online communities. While it borrows many ideas from Mastodon (including its API), it is built on the Nostr protocol. Ditto brings the best parts of Mastodon to Nostr, including dozens of native apps, and several new features not normally available on Nostr.</p>

<p>In February, Soapbox deployed "Mostr," a bridge between Mastodon and Nostr. The bridge is a free service that allows users to communicate seamlessly between the two networks. It proved to be a great success, impacting the discussions (and culture) on both networks. With Mastodon, individual servers can interoperate. With the Mostr bridge, two entire decentralized networks of different protocols can interoperate. Ditto continues the ideas set forth by the bridge, seeking to bridge the gap between protocols further.</p>

<p>OpenSats has agreed to fund Soapbox for 1 year out of its Nostr fund, which Jack Dorsey donated $5M to earlier this year. In addition, I have stepped down from my role as Head of Engineering at Truth Social to pursue this mission full time.</p>

<p>We believe that the future of social media is decentralized, and that building bridges is the path to take us there.</p>

<p>Ditto is open-source software licensed under the GNU AGPL. It is being developed <a href="https://gitlab.com/soapbox-pub/ditto" target="_blank" rel="noopener noreferrer">in the open</a> and has a <a href="https://ditto.pub/" target="_blank" rel="noopener noreferrer">proof-of-concept</a> demo.</p>

<h3>Want updates?</h3>

<p>Sign up for our newsletter to get updates on Ditto's development.</p>

<EmailSignupForm tags={['Ditto']} />}`
      }} />
    </article>
  );
}
