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
  "slug": "choosing-a-backend",
  "title": "Choosing a Backend for Soapbox",
  "excerpt": "Soapbox is a versatile frontend for the Fediverse which supports multiple backends. The most obvious choice for most use cases is Soapbox BE, our in-house backend fork of Pleroma which enjoys out-of-the-box support and the most available features.",
  "coverImage": "/assets/blog/choosing-a-backend/Choosing-Backend-1.png",
  "date": "2021-10-10",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/choosing-a-backend/Choosing-Backend-1.png"
  },
  "tags": ["soapbox", "backend", "tutorial"]
};

export default function ChoosingABackend() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>Soapbox Backend Options</h2>
      <p>Soapbox is a versatile frontend for the Fediverse which supports multiple backends. The most obvious choice for most use cases is Soapbox BE, our in-house backend fork of Pleroma which enjoys out-of-the-box support and the most available features. However, depending on your situation and priorities, different backends like Mastodon or Mitra are also available options. Below we outline the pros and cons of each supported backend.</p>
      <p>(If you are ready to install, <a href="/install/" target="_blank" rel="noopener noreferrer">follow our instructions</a> to get started with Soapbox BE).</p>
      <h2>Feature Comparison Overview</h2>
      <p>The backend that you choose to use with Soapbox will determine the features that are available to your users. Soapbox prioritizes high-impact features that lead to increased discoverability and user retention — we believe this is the best focus for the overall growth of the Fediverse. Other software is more suited for niche communities with specific interests (like crypto). Overall, Soapbox BE includes the most features currently supported by Soapbox.</p>
      <img alt="" src="/assets/blog/choosing-a-backend/Choosing-a-Backend-with-Soapbox-980x551.png"  />
      <em>Summary of Soapbox frontend support for popular Fediverse backend features</em>
      <h3>Out-of-the-box Support</h3>
      <p>Only Soapbox BE and Pleroma are supported natively by Soapbox frontend. Using Mastodon, Fedibird, or Mitra with Soapbox will require a custom installation, and is therefore not recommended for new or hobbist servers.</p>
      <h3>Quote Posts</h3>
      <p>Quote posts (similar to Twitter’s “Quote Retweet” functionality) are only fully supported in SoapboxBE. This is a key feature for discoverability and growth, and we believe is a must-have for servers that wish to attract a large audience.</p>
      <h3>Emoji Reacts</h3>
      <p>Emoji Reacts to posts were originally implemented in Pleroma, and are also available in Soapbox BE. Admins are able to customize which emojis are available in the reaction drawer. On Mastodon, only “likes” are supported.</p>
      <img alt="" src="/assets/blog/choosing-a-backend/Screenshot-from-2022-01-26-20.36.25.png"  />
      <h3>Chat Messages</h3>
      <p>Chat messaging is another feature originally implemented in Pleroma, and now also available in Soapbox BE. Mastodon allows users to send “private messages” as regular posts with a locked scope to only mentioned users.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/chat-panes.png"  />
      <h3>Trending Hashtags</h3>
      <p>Trending Hashtags are currently only supported by Mastodon. Soapbox may implement this feature again in the future, however, we previously removed it due to poor performance in regards to federation and curating tags relevant to users of the current server.</p>
      <h3>Etherium Login</h3>
      <p>Mitra is a backend built around the concept of deep crypto integration. Currently, Soapbox supports Mitra’s login with Etherium feature.</p>
      <h3>Other Features</h3>
      <ul>
      <li><strong>Markdown posts</strong>: Available in Pleroma and Soapbox BE</li>
      </ul><h2>Performance Comparison Overview: Mastodon vs. Pleroma</h2>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/spinster-mastodon-to-pleroma-comparison.png"  />
      <em>spinster.xyz server running in 2020 with Mastodon backend vs Pleroma</em>
      <p>For most servers, Pleroma is by far the more efficient and afforable option, requiring far few resources. In August of 2020, Spinster.xyz, one of the largest Soapbox servers, made history when it <a href="https://4w.pub/spinster-2-0-moving-from-mastodon-backend-to-pleroma/" target="_blank" rel="noopener noreferrer">migrated over 10,000 users from Mastodon to Pleroma</a>. The above graphic demonstrates the server resources required to keep this userbase online in Mastodon vs Pleroma. Pleroma required significantly fewer resources, and Spinster was able to cut their server costs by over half by moving to Pleroma.</p>
      <p>However, Mastodon succeeds in becoming more efficient for active userbases over about 20,000. If you expect your server to host more than 20k users (especially if those users are highly engaged), Mastodon may be a better option.</p>
      <a href="/blog/what-is-the-fediverse/" target="_blank" rel="noopener noreferrer">Get Started With Soapbox</a></article>
  );
}