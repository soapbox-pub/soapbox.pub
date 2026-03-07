import React from 'react';
import { EmailSignupForm } from '../../EmailSignupForm';

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
  "slug": "ditto-1.3",
  "title": "Ditto 1.3: Explore Nostr",
  "excerpt": "Ditto 1.3 is all about discovery. From improved search and event fetching to a brand-new Explore tab, this release makes it easier than ever to find people, posts, and conversations across the Nostr network.",
  "coverImage": "/assets/blog/ditto-1.3/ditto-1.3.png",
  "date": "2025-03-23",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/ditto-1.3/ditto-1.3.png"
  },
  "tags": ["ditto", "release", "update"]
};

export default function Ditto13() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8 rounded-lg border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50 p-4">
        <p className="text-sm font-semibold text-violet-900 mb-1">A new version of Ditto is here!</p>
        <p className="text-sm text-violet-700">Ditto has been completely redesigned with themes, infinite content types, and more. <a href="/ditto" className="font-medium text-violet-600 underline hover:text-violet-800">Learn more about Ditto</a> or check out the latest updates on <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer" className="font-medium text-violet-600 underline hover:text-violet-800">ditto.pub</a>.</p>
      </div>

      <p><strong>Ditto 1.3 is all about discovery.</strong> From improved search and event fetching to a brand-new Explore tab, this release makes it easier than ever to find people, posts, and conversations across the Nostr network. We've also rolled out user streaks, video improvements, translation upgrades, and key admin tools—all wrapped in a sleeker, smarter experience.</p>
      <h2>New & Improved Features</h2>
      <h3>Explore Tab & Search Filter UI</h3>
      <p>Say hello to the new <strong>Explore</strong> tab—a streamlined way to browse trending content and find new accounts. We’ve also improved the account search UI to help you connect with the right people more easily, even across remote relays.</p>
      <ul>
      <li><a href="https://gitlab.com/soapbox-pub/soapbox/-/merge_requests/3337" target="_blank" rel="noopener noreferrer">New Explore Tab</a> - <a href="https://gitlab.com/soapbox-pub/ditto/-/merge_requests/653" target="_blank" rel="noopener noreferrer">Improve account search</a></li>
      </ul><figure>
        <img src="/assets/blog/ditto-1.3/explore-tab.png" alt="Explore tab UI"   />
        <figcaption>Explore trending content with ease</figcaption>
      </figure>
      <h3>Profile & Event Fetching Improvements</h3>
      <p>Discoverability starts with better data. Ditto 1.3 enhances how we fetch profiles and related events, enabling smarter searches and richer context. With the new outbox-style REQ router and support for looking up remote identifiers, you’ll see more relevant results—faster and from more relays.</p>
      <ul>
      <li><a href="https://gitlab.com/soapbox-pub/ditto/-/merge_requests/714" target="_blank" rel="noopener noreferrer">Look up identifiers in search on remote relays</a> - <a href="https://gitlab.com/soapbox-pub/ditto/-/merge_requests/713" target="_blank" rel="noopener noreferrer">Add an outbox-style REQ router</a> - <a href="https://gitlab.com/soapbox-pub/ditto/-/merge_requests/709" target="_blank" rel="noopener noreferrer">Fetch related events</a></li>
      </ul><figure>
        <img src="/assets/blog/ditto-1.3/fetching.png" alt="Profile and event fetching"   />
        <figcaption>More accurate and complete search results</figcaption>
      </figure>
      <h3>Media Improvements</h3>
      <p>Sharing just got smoother. Videos now transcode properly, media displays more reliably, and link previews are clearer and cleaner. We also hide raw URLs in posts, creating a more polished and readable feed.</p>
      <ul>
      <li><a href="https://gitlab.com/soapbox-pub/ditto/-/merge_requests/706" target="_blank" rel="noopener noreferrer">Transcoding videos</a> - <a href="https://gitlab.com/soapbox-pub/ditto/-/merge_requests/652" target="_blank" rel="noopener noreferrer">Fixed media display</a> - <a href="https://gitlab.com/soapbox-pub/ditto/-/merge_requests/715" target="_blank" rel="noopener noreferrer">Improve link previews</a> - <a href="https://gitlab.com/soapbox-pub/ditto/-/merge_requests/717" target="_blank" rel="noopener noreferrer">Hide link URLs in posts</a></li>
      </ul><figure>
        <img src="/assets/blog/ditto-1.3/media-improvements.png" alt="Media improvements"   />
        <figcaption>Cleaner, crisper media display across the board</figcaption>
      </figure>
      <h3>Streaks</h3>
      <p>Keep the momentum going. Ditto now tracks user streaks, encouraging users to stay engaged and contribute daily. You'll also get a friendly alert when you start a new streak, making it easier to track progress and stay active.</p>
      <ul>
      <li><a href="https://gitlab.com/soapbox-pub/ditto/-/merge_requests/639" target="_blank" rel="noopener noreferrer">Add support for user streaks</a> - <a href="https://gitlab.com/soapbox-pub/soapbox/-/merge_requests/3332" target="_blank" rel="noopener noreferrer">Alert user when they start a new streak</a></li>
      </ul><figure>
        <img src="/assets/blog/ditto-1.3/streaks.png" alt="User streaks"   />
        <figcaption>Track and celebrate user activity streaks</figcaption>
      </figure>
      <h3>Improved Admin Site Management</h3>
      <p>Admins now have more control with features like username revocation, admin promotion, and logo updates. (Stay tuned for more admin-focused improvements next quarter!)</p>
      <ul>
      <li><a href="https://gitlab.com/soapbox-pub/ditto/-/issues/297" target="_blank" rel="noopener noreferrer">Revoke usernames</a> - <a href="https://gitlab.com/soapbox-pub/ditto/-/merge_requests/707" target="_blank" rel="noopener noreferrer">Promoting admins</a> - <a href="https://gitlab.com/soapbox-pub/soapbox/-/issues/1816" target="_blank" rel="noopener noreferrer">Update site logo</a></li>
      </ul><figure>
        <img src="/assets/blog/ditto-1.3/admin-tools.png" alt="Admin controls"   />
        <figcaption>More power in admin hands</figcaption>
      </figure>
      <h3>Improved Translations</h3>
      <p>Communication shouldn’t hit language barriers. We improved DeepL parsing, boosted language detection, and refreshed the translation UI.</p>
      <ul>
      <li><a href="https://gitlab.com/soapbox-pub/ditto/-/merge_requests/680" target="_blank" rel="noopener noreferrer">Improve DeepL parsing & language detection #1</a> - <a href="https://gitlab.com/soapbox-pub/ditto/-/merge_requests/635" target="_blank" rel="noopener noreferrer">Improve DeepL parsing & language detection #2</a> - <a href="https://gitlab.com/soapbox-pub/soapbox/-/merge_requests/3356" target="_blank" rel="noopener noreferrer">Improve translation UI</a></li>
      </ul><figure>
        <img src="/assets/blog/ditto-1.3/translations.png" alt="Improved translations"   />
        <figcaption>Better multilingual support</figcaption>
      </figure>
      <h3>Custom Emoji Support</h3>
      <p>Ditto 1.3 introduces basic custom emoji support, letting communities bring a bit more personality to their interactions.</p>
      <ul>
      <li><a href="https://gitlab.com/soapbox-pub/ditto/-/merge_requests/724" target="_blank" rel="noopener noreferrer">Basic custom emoji support</a></li>
      </ul><figure>
        <img src="/assets/blog/ditto-1.3/custom-emoji.png" alt="Custom emoji support"   />
        <figcaption>Bring more personality into your posts</figcaption>
      </figure>
      <h2>General Updates</h2>
      <h3>Ditto Monorepo Refactor</h3>
      <p>Under the hood, we’ve refactored Ditto into a monorepo and upgraded to Deno v2.1.10, laying the foundation for faster development and better performance across the board.</p>
      <ul>
      <li><a href="https://gitlab.com/soapbox-pub/ditto/-/merge_requests/661" target="_blank" rel="noopener noreferrer">Make Ditto a monorepo</a> - <a href="https://gitlab.com/soapbox-pub/ditto/-/merge_requests/657" target="_blank" rel="noopener noreferrer">Upgrade to Deno v2.1.10</a></li>
      </ul><h3>Bug Fixes</h3>
      <p>We squashed a bunch of bugs: fixed the login button, cleaned up reactions, made NIP-05 case-insensitive, and patched the hover card action button—ensuring smoother interaction all around.</p>
      <ul>
      <li><a href="https://gitlab.com/soapbox-pub/soapbox/-/merge_requests/3338" target="_blank" rel="noopener noreferrer">Fixed login button</a> - <a href="https://gitlab.com/soapbox-pub/soapbox/-/issues/1819" target="_blank" rel="noopener noreferrer">Remove thumbs up reaction</a> - <a href="https://gitlab.com/soapbox-pub/ditto/-/merge_requests/684" target="_blank" rel="noopener noreferrer">Make NIP-05 case insensitive</a> - <a href="https://gitlab.com/soapbox-pub/soapbox/-/merge_requests/3334" target="_blank" rel="noopener noreferrer">Fix Action button on Hover cards</a></li>
      </ul><h2>Coming Soon</h2>
      <p>We’re already working on big upgrades for the next release. Soon, Ditto will support <strong>Cashu Nutzaps</strong>, adding user wallet configuration, and letting you split zap revenue across posts with an intuitive new UI.</p>
      <p>Admins will get a <strong>brand-new dashboard</strong>, complete with NIP-05 management tools, improved stats, and more options for customizing Soapbox instances. Expect features like global language filter defaults, better admin notifications, onboarding for new instances, and UI for managing suggested accounts. You’ll even be able to offer paid NIP-05s using Cashu.</p>
      <p>We're also revamping the <strong>onboarding flow</strong> to help new users get connected faster. Community-specific prompts, default relay suggestions, wallet setup, and a local timeline for users without follows will make getting started smoother. Plus, a new “Follow All” option makes it easy to connect with your community from day one.</p>
      <h3>Get notified of new releases!</h3>
      <EmailSignupForm tags={['Ditto']}   />
      <h2>Special Thanks</h2>
      <p>Thank you to our awesome team, and to OpenSats for their continued support! </p></article>
  );
}