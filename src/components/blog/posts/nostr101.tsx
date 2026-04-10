import React from 'react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: { name?: string; picture?: string; };
  ogImage: { url?: string; };
  featured?: boolean;
  tags?: string[];
}

export const meta: BlogPostMeta = {
  "slug": "nostr101",
  "title": "Nostr 101: A Beginner Guide to the Decentralized Social Network",
  "excerpt": "How to join Nostr, how to create your account on Nostr, and what Nostr apps to use for beginners",
  "coverImage": "/assets/images/nostr101-cover.png",
  "date": "2026-03-11",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/images/nostr101-cover.png"
  },
  "featured": true,
  "tags": ["nostr", "tutorial", "beginner"]
};

export default function Nostr101() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>What is Nostr?</h2>
      <p><strong>Nostr (Notes and Other Stuff Transmitted by Relays) is a decentralized, censorship-resistant social protocol designed to give users control over their online identities and interactions.</strong> Unlike traditional social media platforms that rely on centralized servers and moderation, Nostr allows users to communicate directly through a network of independent relays. This makes it permissionless—meaning anyone can use it without needing approval from a corporation or government.</p>
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/NVm_jGdwTjQ?si=5qcrxgjr4keqblo4"
        title="Nostr 101 Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <h3>Key Features of Nostr:</h3>
      <ul>
        <ul>
      <li><strong>Decentralized:</strong> No single company controls Nostr; it operates on a distributed network of relays.</li>
        <li><strong>Censorship-Resistant:</strong> Users cannot be banned from the network; they can always find a relay that will host their content.</li>
        <li><strong>Permissionless:</strong> No accounts, phone numbers, or email verification required—just a cryptographic key pair.</li>
      </ul></ul>
      <h2>Nostr Fixes the Problems of Big Tech</h2>
      <p>The internet today is controlled by a handful of companies. They decide who gets a platform, what content is allowed, and how your data is used. Nostr is built to fix that.</p>
      <p><strong>You don't own your account.</strong> On platforms like Twitter, Instagram, or TikTok, your account belongs to the company. They can suspend you, change the rules, or shut down entirely — and everything you've built disappears with them. On Nostr, your identity is yours. No company can take it away, because no company controls it.</p>
      <p><strong>You can be silenced at any time.</strong> Governments pressure platforms to remove content. Companies deplatform users based on shifting policies. Entire communities get wiped overnight. On Nostr, there's no central authority that can censor you. Your posts are distributed across independent servers, so no single entity can silence your voice.</p>
      <p><strong>Your data is the product.</strong> Big tech makes money by tracking everything you do and selling your attention to advertisers. Nostr doesn't have a company behind it — there's no one collecting your data, no ads, and no surveillance business model.</p>
      <p><strong>You're locked into one platform.</strong> Your Instagram followers can't see your tweets. Your Spotify playlists don't carry over to YouTube. Every app is a walled garden. On Nostr, one login works across every app — your followers, your posts, and your identity travel with you.</p>
      <p>Nostr doesn't fix these problems by promising to do better — plenty of companies have made that promise. It fixes them by being a protocol where it's technically impossible for anyone to take power away from users.</p>
      <h2>How Nostr Differs from the Fediverse and Bluesky</h2>
      <p>Nostr is the only fully decentralized social network, but it shares similarities with the Fediverse and Bluesky. For a deeper dive, read our full <a href="/blog/comparing-protocols">Comparing Protocols</a> guide.</p>
      <figure style={{ width: '100%', height: 'auto' }}>
        <img alt="Comparison of Nostr, Fediverse, and Bluesky" src="/assets/blog/protocol-comparison.png" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
      </figure>
      <p><strong>Mostr Bridge: Connecting Nostr to the Fediverse</strong></p>
      <p>The Mostr Bridge is a powerful tool that connects the Nostr network with the Fediverse (e.g., Mastodon, Pleroma). This allows users to follow and interact with accounts across both ecosystems without needing to switch platforms. Explore the bridge <a href="https://mostr.pub" target="_blank" rel="noopener noreferrer">here</a>.</p>
      <h2>Nostr Apps</h2>
      <p>Nostr isn't just a Twitter alternative — it's an entire ecosystem of apps spanning every type of content you can imagine. And because your identity lives in your keys (not in any app's database), <strong>one account works everywhere</strong>. No more creating separate logins for your social feed, your music player, your blog, and your calendar. On Nostr, a single key pair is your universal login.</p>
      <p>Here are just some of the types of content you can create, discover, and interact with across the Nostr ecosystem — all with the same account:</p>
      <div className="not-prose" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', margin: '24px 0' }}>
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
            <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
              <img alt="Posts on Nostr" src="/assets/images/ditto/content/posts.png" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
            <div style={{ padding: '10px 12px', textAlign: 'center' }}>
              <strong style={{ fontSize: '14px' }}>Posts</strong>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Ditto</div>
            </div>
          </div>
        </a>
        <a href="https://inkwell.shakespeare.wtf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
            <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
              <img alt="Articles on Nostr" src="/assets/images/ditto/content/articles.png" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
            <div style={{ padding: '10px 12px', textAlign: 'center' }}>
              <strong style={{ fontSize: '14px' }}>Articles</strong>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Inkwell</div>
            </div>
          </div>
        </a>
        <a href="https://nostr.build" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
            <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
              <img alt="Photos on Nostr" src="/assets/images/ditto/content/photos.png" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
            <div style={{ padding: '10px 12px', textAlign: 'center' }}>
              <strong style={{ fontSize: '14px' }}>Photos</strong>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>nostr.build</div>
            </div>
          </div>
        </a>
        <a href="https://nodecast.xyz" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
            <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
              <img alt="Music on Nostr" src="/assets/images/ditto/content/music.png" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
            <div style={{ padding: '10px 12px', textAlign: 'center' }}>
              <strong style={{ fontSize: '14px' }}>Music</strong>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Nodecast</div>
            </div>
          </div>
        </a>
        <a href="https://nodecast.xyz" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
            <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
              <img alt="Podcasts on Nostr" src="/assets/images/ditto/content/podcasts.png" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
            <div style={{ padding: '10px 12px', textAlign: 'center' }}>
              <strong style={{ fontSize: '14px' }}>Podcasts</strong>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Nodecast</div>
            </div>
          </div>
        </a>
        <a href="https://zap.stream" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
            <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
              <img alt="Livestreams on Nostr" src="/assets/images/ditto/content/livestreams.png" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
            <div style={{ padding: '10px 12px', textAlign: 'center' }}>
              <strong style={{ fontSize: '14px' }}>Livestreams</strong>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>zap.stream</div>
            </div>
          </div>
        </a>
        <a href="https://divine.video" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
            <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
              <img alt="Short Videos on Nostr" src="/assets/images/ditto/content/vines.png" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
            <div style={{ padding: '10px 12px', textAlign: 'center' }}>
              <strong style={{ fontSize: '14px' }}>Short Videos</strong>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Divine</div>
            </div>
          </div>
        </a>
        <a href="https://plektos.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
            <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
              <img alt="Events on Nostr" src="/assets/images/ditto/content/events.png" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
            <div style={{ padding: '10px 12px', textAlign: 'center' }}>
              <strong style={{ fontSize: '14px' }}>Events</strong>
              <div style={{ fontSize: '12px', color: '#6b7280' }}>Plektos</div>
            </div>
          </div>
        </a>
      </div>
      <p>And this is just the beginning — discover more Nostr apps at <a href="https://nostrapps.com" target="_blank" rel="noopener noreferrer">Nostrapps.com</a>.</p>
      <div className="not-prose" style={{ background: 'linear-gradient(135deg, #f5f3ff, #ede9fe)', borderRadius: '16px', padding: '32px 24px', margin: '32px 0' }}>
        <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 16px', color: '#1f2937' }}>Ditto: Best Place to Start</h3>
        <div className="flex gap-2 mb-5">
          <img alt="Ditto Kawaii theme" src="/assets/blog/announcing-ditto-2/kawaii-mobile.png" className="flex-1 min-w-0 rounded-lg" />
          <img alt="Ditto Solarpunk theme" src="/assets/blog/announcing-ditto-2/solarpunk-mobile.png" className="flex-1 min-w-0 rounded-lg" />
          <img alt="Ditto Hacker theme" src="/assets/blog/announcing-ditto-2/hacker-mobile.png" className="flex-1 min-w-0 rounded-lg" />
          <img alt="Ditto Clackophile theme" src="/assets/blog/announcing-ditto-2/clackophile-mobile.png" className="hidden sm:block flex-1 min-w-0 rounded-lg" />
          <img alt="Ditto DJ theme" src="/assets/blog/announcing-ditto-2/dj-mobile.png" className="hidden sm:block flex-1 min-w-0 rounded-lg" />
          <img alt="Ditto Hiker theme" src="/assets/blog/announcing-ditto-2/hiker-mobile.png" className="hidden sm:block flex-1 min-w-0 rounded-lg" />
        </div>
        <p style={{ fontSize: '16px', lineHeight: 1.7, color: '#374151', margin: '0 0 24px' }}>
          <strong>Ditto</strong> is a full-featured Nostr community platform where you can explore all of these different content types — posts, articles, photos, music, livestreams, events, and more — all in one place. It's fully customizable with themes, and it's the easiest way to experience everything Nostr has to offer.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-6 py-3 bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white rounded-lg font-semibold text-base no-underline transition-colors duration-150">
            <span className="sm:hidden">Try Ditto</span>
            <span className="hidden sm:inline">Try Ditto Now</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
          <a href="https://play.google.com/store/apps/details?id=pub.ditto.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white active:bg-violet-700 bg-white rounded-lg font-semibold text-base no-underline transition-colors duration-150">
            Google Play
          </a>
          <a href="https://zapstore.dev/apps/pub.ditto.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white active:bg-violet-700 bg-white rounded-lg font-semibold text-base no-underline transition-colors duration-150">
            Zapstore
          </a>
        </div>
      </div>
      <h3>Other Popular Nostr Apps</h3>
      <ul>
        <ul>
      <li><strong><a href="https://primal.net" target="_blank" rel="noopener noreferrer">Primal</a></strong> (Web, iOS, Android) — Great for discovery and ease of use.</li>
        <li><strong><a href="https://damus.io" target="_blank" rel="noopener noreferrer">Damus</a></strong> (iOS) — A clean, Apple-friendly experience.</li>
        <li><strong><a href="https://amethyst.social" target="_blank" rel="noopener noreferrer">Amethyst</a></strong> (Android) — A popular choice for Android users.</li>
      </ul></ul>
      <h2>Nostr Relays</h2>
      <p>Relays are the servers that store and deliver your posts. Think of them like different mail carriers — your messages get sent through them to reach other people.</p>
      <p>You don't need to think about relays to use Nostr; the defaults work great. But if you're curious, you can add or remove relays in Settings &gt; Network.</p>
      <p>Using multiple relays means your content is backed up in more places, making it harder for anyone to silence you. To dive deeper, read <a href="https://nostr.how/en/relays" target="_blank" rel="noopener noreferrer">Understanding Nostr Relays</a>.</p>
      <h2>How to Create an Account on Nostr</h2>
      <p>Getting started on Nostr takes less than a minute. Unlike traditional social media, there's no email address or phone number required — your identity is based on a pair of cryptographic keys. But don't worry, an app like Ditto handles all of that for you. Here's what it looks like:</p>
      <div className="not-prose flex flex-col sm:flex-row gap-4 my-6 justify-center items-center">
        <img alt="Ditto create account screen" src="/assets/blog/nostr101/ditto-keygen.png" className="w-full sm:w-[45%] max-w-[300px] rounded-xl border border-gray-200" />
        <img alt="Ditto save secret key screen" src="/assets/blog/nostr101/ditto-download.png" className="w-full sm:w-[45%] max-w-[300px] rounded-xl border border-gray-200" />
      </div>
      <p>When you sign up, the app generates two keys for you:</p>
      <ul>
        <ul>
      <li><strong>Your public key (npub):</strong> This is your identity on Nostr — like a username. It's how people find and follow you, and you can share it freely.</li>
        <li><strong>Your secret key (nsec):</strong> This is your password. It proves you are who you say you are. Keep it safe — there's no "forgot password" on Nostr, because no company controls your account.</li>
      </ul></ul>
      <p>That's what makes Nostr different: <strong>you own your identity</strong>. No company can lock you out, delete your account, or change the rules on you. Your keys are yours forever.</p>
      <p>Creating your Nostr account is easy on Ditto. <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">Get started &rarr;</a></p>
      <h2>The Easiest Way to Get Started on Nostr</h2>
      <p>Nostr is a powerful and innovative platform that gives users full control over their online presence. The easiest way to get started is to choose an app that fits your needs and start exploring the Nostr ecosystem today!</p>
    </article>
  );
}