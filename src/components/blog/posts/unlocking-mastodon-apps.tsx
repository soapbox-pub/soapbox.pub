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
  "slug": "unlocking-mastodon-apps",
  "title": "Unlocking 50+ Mastodon Apps for Nostr with Ditto",
  "excerpt": "Thanks to Ditto, Nostr users can explore a decade's worth of applications built for decentralized software on the Fediverse.",
  "coverImage": "/assets/blog/unlocking-mastodon-apps/unlocking-mastodon-apps.png",
  "date": "2024-06-19",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/unlocking-mastodon-apps/unlocking-mastodon-apps.png"
  },
  "tags": ["ditto", "mastodon", "apps"]
};

export default function UnlockingMastodonApps() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8 rounded-lg border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50 p-4">
        <p className="text-sm font-semibold text-violet-900 mb-1">A new version of Ditto is here!</p>
        <p className="text-sm text-violet-700">Ditto has been completely redesigned with themes, infinite content types, and more. <a href="/ditto" className="font-medium text-violet-600 underline hover:text-violet-800">Learn more about Ditto</a> or check out the latest updates on <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer" className="font-medium text-violet-600 underline hover:text-violet-800">ditto.pub</a>.</p>
      </div>

      <h2>How Ditto is unlocking a decade's worth of decentralized projects for use on Nostr</h2>

      <p><strong>Before Nostr, there was the Fediverse...</strong></p>
      <p>The Fediverse is a network of decentralized social media sites built on the shared ActivityPub protocol. The Fediverse has been around in some form since 2009, and there are over 20,000 different sites ("servers") on the Fediverse, home to over 4.4 million users. </p>
      <p>Like Nostr, the Fediverse is decentralized and built on free software, however, there are major issues with the premise of ActivityPub for user freedom (primarily, the account portability). This is why Soapbox moved focus to Nostr in 2023. </p>
      <p>Mastodon is one of the most popular projects on the Fediverse, including both web and mobile apps. Hundreds of apps have been developed for Mastodon and the Fediverse in the past decade (some better than others). </p>
      <h3>Now, thanks to <a href="/ditto" target="_blank" rel="noopener noreferrer">Ditto</a>, Nostr users can post from Mastodon-compatible apps on Nostr!</h3>
      <p>The beauty of this is that Nostr can benefit from ten years of open source app developement for the decentralized web, rather than having to build everything from scratch. This opens up a world of possibility we're only just beginning to explore. For example, the web app Buffer allows users to post from multiple accounts on various platforms, analyze growth, and even use AI to generate highly engaging content. Now, Nostr users can log in and schedule posts on Buffer. This is just one example of potential utility for Mastodon/Nostr compatability provided by Ditto.</p>
      <figure>
        <img alt="Schedule posts in advance with Buffer" src="/assets/blog/unlocking-mastodon-apps/buffer2.png" />
        <figcaption>Schedule Notes in advance with Buffer</figcaption>
      </figure>
      <h2>How does Ditto unlock Mastodon Apps for Ditto? </h2>
      <p>Mastodon apps allow users to log in to any server. Since Ditto implements the Mastodon API, it can work with most <a href="https://joinmastodon.org/apps" target="_blank" rel="noopener noreferrer">Mastodon app</a>. Simply type in the URL of any Ditto server, and then log in with any NIP-46 bunker (we recommend <a href="https://github.com/fiatjaf/nak" target="_blank" rel="noopener noreferrer">nak</a>). </p>
      <p> <pre><code>~ go install github.com/fiatjaf/nak@latest </code></pre> <br /></p>
      <pre><code>~ nak bunker --prompt-sec wss://ditto.pub/relay
      </code></pre>
      <h2>Okay, but does this <em>really</em> work? </h2>
      <p>That answer is more complicated. All of this works <em>in theory</em> when apps on both sides fully follow their various specs. For example, signing in with nak bunker (developed by Fiatjaf) to Mastodon's official apps works very well. However, many Mastodon apps are not correctly impelementing the Mastodon API or OAuth, and many Nostr bunkers do not work reliably for signing. Media uploads also do not currently work, although we hope to fix this soon. </p>
      <strong>We're still in the very early days of exploring the full power of this crossover. There is major opportunity for improvement in the Nostr ecosystem, and we hope to see it taken more seriously in the future. In the next release of Ditto, we plan to do more to fix what we can on our end, too.</strong>
      <p>Below you can find some popular Mastodon apps, and their current known compatability status with Nostr via Ditto. <a href="https://joinmastodon.org/apps" target="_blank" rel="noopener noreferrer">Browse all Mastodon Apps</a></p>
      <h2>Mastodon Apps for Android </h2>
      <figure>
      <div className="grid grid-cols-3 gap-2">
      <img src="/assets/blog/unlocking-mastodon-apps/mastodon-android.png" />
      <img src="/assets/blog/unlocking-mastodon-apps/mastodon-app1.jpg" />
      <img src="/assets/blog/unlocking-mastodon-apps/mastodon-app2.jpg" />
      </div>
      <figcaption>Viewing Nostr through the official Mastodon Android app.</figcaption>
      </figure>
      <ul>
        <li><a href="https://play.google.com/store/apps/details?id=org.joinmastodon.android" target="_blank" rel="noopener noreferrer">Mastodon (official)</a> (<em>compatability: confirmed</em>)</li>
        <li><a href="https://play.google.com/store/apps/details?id=com.keylesspalace.tusky" target="_blank" rel="noopener noreferrer">Tusky</a> (<em>compatability: broken</em>)</li>
        <li><a href="https://play.google.com/store/apps/details?id=jp.juggler.subwaytooter" target="_blank" rel="noopener noreferrer">Subway Tooter</a> (<em>compatability: confirmed</em>)</li>
        <li><a href="https://play.google.com/store/apps/details?id=social.rodent" target="_blank" rel="noopener noreferrer">Fedilab</a> (<em>compatability: confirmed</em>)</li>
        <li><a href="https://play.google.com/store/apps/details?id=org.joinmastodon.android.sk" target="_blank" rel="noopener noreferrer">Megalodon</a> (<em>compatability: unconfirmed</em>)</li>
        <li><a href="https://play.google.com/store/apps/details?id=social.rodent" target="_blank" rel="noopener noreferrer">Rodent</a> (<em>compatability: broken</em>)</li>
      </ul>
      <h2>Mastodon Apps for iOS</h2>
      <figure>
      <div className="grid grid-cols-3 gap-2">
      <img src="/assets/blog/unlocking-mastodon-apps/mastodon-ios1.jpeg" />
      <img src="/assets/blog/unlocking-mastodon-apps/mastodon-ios2.jpeg" />
      <img src="/assets/blog/unlocking-mastodon-apps/mastodon-ios3.jpeg" />
      </div>
      <figcaption>Viewing Nostr through the official Mastodon iOS app.</figcaption>
      </figure>
      <ul>
        <li><a href="https://apps.apple.com/us/app/mastodon-for-iphone/id1571998974" target="_blank" rel="noopener noreferrer">Mastodon (official)</a> (<em>compatability: confirmed</em>)</li>
        <li><a href="https://apps.apple.com/us/app/mast-for-mastodon/id1437429129" target="_blank" rel="noopener noreferrer">Mast</a> (<em>compatability: unconfirmed</em>)</li>
        <li><a href="https://apps.apple.com/us/app/mammoth-for-mastodon/id1667573899" target="_blank" rel="noopener noreferrer">Mammoth</a> (<em>compatability: broken</em>)</li>
        <li><a href="https://apps.apple.com/id/app/ice-cubes-for-mastodon/id6444915884" target="_blank" rel="noopener noreferrer">Ice Cubes</a> (<em>compatability: broken</em>)</li>
        <li><a href="https://apps.apple.com/us/app/feather-for-mastodon/id6446263061" target="_blank" rel="noopener noreferrer">Feather</a> (<em>compatability: broken</em>)</li>
      </ul>
      <h2>Mastodon Apps for web</h2>
      <figure>
        <img alt="Post to Nostr from Elk for Mastodon" src="/assets/blog/unlocking-mastodon-apps/elk.png" />
        <figcaption>Post to Nostr from Elk for Mastodon</figcaption>
      </figure>
      <ul>
        <li><a href="https://elk.zone/" target="_blank" rel="noopener noreferrer">Buffer</a> (<em>compatability: confirmed</em>)</li>
        <li><a href="https://fedica.com/" target="_blank" rel="noopener noreferrer">Fedica</a> (<em>compatability: confirmed</em>)</li>
        <li><a href="https://elk.zone/" target="_blank" rel="noopener noreferrer">Elk</a> (<em>compatability: confirmed</em>)</li>
        <li><a href="https://mastodeck.com/" target="_blank" rel="noopener noreferrer">Mastodeck</a> (<em>compatability: broken</em>)</li>
      </ul>
      <hr />
      <p><strong>Note on censorship on Mastodon Apps</strong></p>
      <p><em>There is a history of censorship on some Mastodon apps (like Tusky), which have chosen to block users of particular servers or software from using their app. Since Nostr users can log in with any Ditto server URL, this will circumvent server-level blocks. However, some apps may still block Soapbox software, including Ditto.</em></p>
    </article>
  );
}