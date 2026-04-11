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
  "slug": "how-to-install-ditto-mobile",
  "title": "How to Install Ditto on Android and iOS",
  "excerpt": "Ditto is now available as a native Android app on Google Play and Zapstore, with iOS coming soon. Here's how to get it on your device.",
  "coverImage": "/assets/blog/ditto-mobile.png",
  "date": "2025-02-06",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/ditto-mobile.png"
  },
  "tags": ["ditto", "tutorial", "mobile"]
};

export default function HowToInstallDittoMobile() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8 rounded-lg border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50 p-4">
        <p className="text-sm font-semibold text-violet-900 mb-1">Ditto is now on Android!</p>
        <p className="text-sm text-violet-700">Download Ditto from <a href="https://play.google.com/store/apps/details?id=pub.ditto.app" target="_blank" rel="noopener noreferrer" className="font-medium text-violet-600 underline hover:text-violet-800"><img src="/assets/icons/google-play.svg" alt="" className="inline h-4 w-4 mr-0.5 -mt-0.5" />Google Play</a> or <a href="https://zapstore.dev/apps/pub.ditto.app" target="_blank" rel="noopener noreferrer" className="font-medium text-violet-600 underline hover:text-violet-800"><img src="/assets/icons/zapstore.png" alt="" className="inline h-4 w-4 mr-0.5 -mt-0.5 rounded" />Zapstore</a>, or visit <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer" className="font-medium text-violet-600 underline hover:text-violet-800">ditto.pub</a> on any device.</p>
      </div>

      <h2>Android: Download the App</h2>
      <p>Ditto has a dedicated Android app with full push notifications, secure credential storage, native file downloads, and smooth swipe navigation. Install it from either:</p>
      <ul>
        <li><strong><a href="https://play.google.com/store/apps/details?id=pub.ditto.app" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/google-play.svg" alt="" className="inline h-4 w-4 mr-0.5 -mt-0.5" />Google Play</a></strong>. The standard way to install on any Android device.</li>
        <li><strong><a href="https://zapstore.dev/apps/pub.ditto.app" target="_blank" rel="noopener noreferrer"><img src="/assets/icons/zapstore.png" alt="" className="inline h-4 w-4 mr-0.5 -mt-0.5 rounded" />Zapstore</a></strong>. A decentralized app store built on Nostr. Great if you prefer to stay outside the Google ecosystem.</li>
      </ul>

      <h2>iOS: Coming Soon (Use the Web App for Now)</h2>
      <p>A native iOS app is in development. In the meantime, you can access Ditto on your iPhone or iPad by pinning the web app to your home screen:</p>
      <ol>
        <li>Open <strong>Safari</strong> and go to <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">ditto.pub</a> (or your preferred Ditto server).</li>
        <li>Tap the <strong>Share</strong> icon (the square with an arrow pointing up) at the bottom of the screen.</li>
        <li>Scroll down and select <strong>Add to Home Screen</strong>.</li>
        <li>Name the shortcut and tap <strong>Add</strong>.</li>
      </ol>
      <p>The Ditto icon will appear on your home screen and open in a full-screen app-like experience with push notification support.</p>

      <h2>Web: No Download Required</h2>
      <p>Ditto is always available at <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">ditto.pub</a> in any modern browser -- desktop or mobile. No account, email, or phone number required to browse. Sign up with just a Nostr key.</p>

      <h2>Use Your Account Everywhere</h2>
      <p>Because Ditto is built on Nostr, your account isn't locked to any single app. You can log in with the same Nostr key on any Nostr-compatible app, including <a href="https://primal.net" target="_blank" rel="noopener noreferrer">Primal</a>, <a href="https://damus.io" target="_blank" rel="noopener noreferrer">Damus</a>, <a href="https://amethyst.social" target="_blank" rel="noopener noreferrer">Amethyst</a>, and dozens more. All your posts, follows, and data stay consistent across every app.</p>
    </article>
  );
}
