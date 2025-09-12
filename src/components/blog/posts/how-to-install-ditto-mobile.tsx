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
  "excerpt": "While there isn't a dedicated mobile app for Ditto, this guide explains how to easily access it on your mobile devices.",
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
      <p> Although Ditto does not have a dedicated mobile application, you can still access it seamlessly on your Android and iOS devices by pinning the web app to your home screen. Here’s how:</p>
      <h2>Accessing Ditto on Mobile</h2>
      <p>1. <strong>Open Your Browser</strong>: Launch your favorite mobile browser (such as Chrome on Android or Safari on iOS). 2. <strong>Navigate to Ditto</strong>: Go to <a href="https://Ditto.pub" target="_blank" rel="noopener noreferrer">Ditto.pub</a> (or your preferred Ditto server).</p>
      <h2>Pinning Ditto to Your Home Screen</h2>
      <h3>For Android:</h3>
      <ul>
      <ul>
      <li>Tap on the three vertical dots in the upper-right corner of your browser.</li>
      <li>Select <strong>Add to Home screen</strong> from the dropdown menu.</li>
      <li>You will be prompted to name the shortcut. Enter a name for Ditto and tap <strong>Add</strong>. The Ditto icon will now appear on your home screen, allowing for easy access.</li>
      </ul></ul><h3>For iOS:</h3>
      <ul>
      <ul>
      <li>Tap the Share icon (the square with an arrow pointing up) at the bottom of the screen.</li>
      <li>Scroll down and select <strong>Add to Home Screen</strong>.</li>
      <li>You’ll be asked to name the shortcut. Enter a name for Ditto and tap <strong>Add</strong>. The Ditto icon will now be available on your home screen for quick access.</li>
      </ul></ul><h2>Explore Other Nostr Mobile Apps</h2>
      <p>Since Nostr is decentralized, you're not limited to accessing your Ditto account only through Ditto. You can log into your Ditto Nostr account from any other Nostr-compatible app. This includes applications like <a href="https://apps.apple.com/us/app/damus/id1628663131" target="_blank" rel="noopener noreferrer">Damus on iOS</a>, <a href="https://play.google.com/store/apps/details?id=net.primal.android&hl=en" target="_blank" rel="noopener noreferrer">Primal</a> on Android, or <a href="https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst&hl=en" target="_blank" rel="noopener noreferrer">Amethyst</a> on Android. This flexibility allows you to enjoy the Nostr network from any application that suits your preference while keeping all your data consistent across platforms.</p>
      <h2>Enjoy Using Ditto on Mobile</h2>
      <p>Now with the Ditto web app conveniently located on your home screen, you can enjoy all its features just as you would on your desktop. Stay connected with your Ditto communities anywhere you go! </p></article>
  );
}