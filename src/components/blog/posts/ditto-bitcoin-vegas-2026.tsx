import { useState } from 'react';

import type { BlogPostMeta } from '@/lib/blog/types';

export const meta: BlogPostMeta = {
  slug: 'ditto-bitcoin-vegas-2026',
  title: 'Ditto Launches to the Public: The Open Source Social Platform Built on Bitcoin and Nostr',
  excerpt:
    'Soapbox announces the public launch of Ditto, a fully customizable, open source social media platform built on Nostr. Now available on Android via Google Play and Zapstore, with iOS coming soon. No ads, no data mining, no platform lock-in. Just a social experience you actually own.',
  coverImage: '/assets/blog/announcing-ditto-2/cover.jpg',
  date: '2026-04-26',
  author: {
    name: 'M. K. Fain',
    picture: '/assets/avatars/mk.jpg',
  },
  ogImage: {
    url: '/assets/blog/announcing-ditto-2/cover.jpg',
  },
  tags: ['Ditto', 'Nostr', 'Bitcoin', 'Press Release'],
};

/** 8 mobile app store screenshots. */
const screenshots = Array.from({ length: 8 }, (_, i) => ({
  src: `/assets/blog/announcing-ditto-2/screenshot-${i + 1}.png`,
  alt: `Ditto screenshot ${i + 1}`,
}));

export default function DittoBitcoinVegas2026() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  const openLightbox = (src: string, caption: string) => setLightbox({ src, caption });

  return (
    <article className="prose prose-lg max-w-none">
      {/* ── Press release header ── */}
      <div className="not-prose text-center space-y-2 mb-10 pb-8 border-b border-gray-200">
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">
          For Immediate Release
        </p>
        <p className="text-sm text-gray-500">
          April 26, 2026 &middot; Bitcoin Vegas Conference
        </p>
        <p className="text-sm text-gray-500">
          Contact: M.K. Fain, CPO &middot;{' '}
          <a href="mailto:contact@soapbox.pub" className="text-violet-600 hover:underline">
            contact@soapbox.pub
          </a>
        </p>
      </div>

      {/* ── Body ── */}
      <p>
        <strong>LAS VEGAS, NV</strong> &mdash; Soapbox today announced the public launch of{' '}
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
          Ditto
        </a>
        , a free, open source social media platform built on the{' '}
        <a href="/blog/comparing-protocols">Nostr protocol</a> and powered by
        the Bitcoin Lightning Network. After months of development and testing
        within the Nostr community, Ditto is now available to everyone: on the
        web at{' '}
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
          ditto.pub
        </a>
        , on Android via{' '}
        <a
          href="https://play.google.com/store/apps/details?id=pub.ditto.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Play
        </a>{' '}
        and{' '}
        <a
          href="https://zapstore.dev/apps/pub.ditto.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zapstore
        </a>
        , with iOS coming soon.
      </p>

      <p>
        Ditto is the most customizable social platform on the internet: a
        return to the MySpace era of personal expression and internet whimsy,
        rebuilt on modern technology that Big Tech can't control. Custom themes,
        wall posts, virtual pets, decorated letters, top friends. The playful,
        creative web that got paved over by algorithmic feeds and engagement
        farming is back, and this time it's built to last.
      </p>

      <p>
        Users own their identity, their content, and their connections. No
        corporate middlemen, no algorithmic manipulation, no ads, and no data
        mining. Because Ditto is built on Nostr, users can take their entire
        social graph to any other Nostr-compatible app at any time, with zero
        friction and zero permission required.
      </p>

      <blockquote>
        <p>
          Social media used to be creative, personal, and fun. Then Big Tech
          turned it into a data extraction machine. We built Ditto to bring that
          era roaring back. Custom themes, virtual pets, hand-drawn letters. All
          the whimsy of the old internet, but on infrastructure nobody can take
          away from you. Your keys, your data, your rules.
        </p>
      </blockquote>
      <p className="text-right text-gray-500 -mt-4">
        &mdash; M.K. Fain, CPO at Soapbox
      </p>

      <h2>What Makes Ditto Different</h2>

      <p>
        Unlike conventional social platforms, Ditto gives every user full control
        over their experience:
      </p>

      <ul>
        <li>
          <strong>Deep personalization.</strong> Custom themes with color palettes,
          background images, fonts, and more. Browse themes shared by the
          community, or build your own with{' '}
          <a href="/shakespeare">Shakespeare</a>, Soapbox's AI-powered code
          editor. Think MySpace-level self-expression, powered by modern
          technology.
        </li>
        <li>
          <strong>Every content type in one feed.</strong> Photos, videos,
          short-form Divines, livestreams, long-form articles, polls, podcasts,
          music, events, webxdc apps, and more, all in a single timeline you
          control.
        </li>
        <li>
          <strong>Virtual pets.</strong> Blobbis are Tamagotchi-style companions
          that live in your feed. Hatch an egg, raise it through 16 evolutionary
          forms, and watch it follow you around the app reacting to what you do.
        </li>
        <li>
          <strong>Encrypted letters.</strong> A Wii Mail-inspired inbox with
          custom stationery, hand-drawn stickers, decorative fonts, and 3D
          animated envelopes sealed with wax.
        </li>
        <li>
          <strong>Built-in article editor.</strong> Write and publish long-form
          content with rich text formatting, inline images, and auto-saving
          drafts, all without leaving the app.
        </li>
        <li>
          <strong>Badges and custom emoji.</strong> Create and award badges to
          community members. Design emoji packs with drag-and-drop tools and use
          them everywhere in the app.
        </li>
        <li>
          <strong>Run web apps inside the feed.</strong> Nsites and webxdc apps
          launch directly inside Ditto. Build a site with Shakespeare, deploy it
          to Nostr, and anyone on Ditto can discover and run it from their
          timeline.
        </li>
        <li>
          <strong>Follow packs and QR codes.</strong> Share a link or scannable
          code that lets anyone follow you with one tap, or curate a list of
          accounts with a "Follow All" button.
        </li>
        <li>
          <strong>Bridges to Bluesky and Mastodon.</strong> Follow and interact
          with users on{' '}
          <a href="/blog/follow-bluesky">Bluesky</a> and{' '}
          <a href="/blog/mostr-fediverse-nostr-bridge">Mastodon</a> without
          leaving Ditto.
        </li>
        <li>
          <strong>Bitcoin-native payments.</strong> Send and receive Lightning
          zaps directly on posts and profiles. No payment processor takes a cut.
          Read our <a href="/blog/zapping-101">Zapping 101</a> guide to get
          started.
        </li>
      </ul>

      <h2>Available Now on Android</h2>

      <p>
        Ditto is available as a free download on{' '}
        <a
          href="https://play.google.com/store/apps/details?id=pub.ditto.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Play
        </a>{' '}
        and{' '}
        <a
          href="https://zapstore.dev/apps/pub.ditto.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zapstore
        </a>
        . The Android app includes full push notifications, secure keychain
        credential storage, native file downloads, and iOS-style swipe
        navigation. An iOS app is in development and coming soon.
      </p>

      <p>
        Ditto is also available on the web at{' '}
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
          ditto.pub
        </a>{' '}
        with no download required. No email address, no phone number. Just a
        Nostr key.
      </p>

      <h2>Open Source and Decentralized</h2>

      <p>
        Ditto is built on{' '}
        <a href="/blog/comparing-protocols">Nostr</a>, an open protocol that
        applies the same principles that made Bitcoin unstoppable to social
        communication. Just as Bitcoin replaced trusted financial intermediaries
        with cryptographic keys, Nostr replaces corporate platform accounts with
        keypair-based identity. Your Nostr key is yours forever. No company
        can suspend it, no server can revoke it, and no terms of service can
        take it away. Where Bitcoin gave people sovereignty over their money,
        Nostr gives people sovereignty over their voice.
      </p>

      <p>
        Payments on Ditto flow through Bitcoin's Lightning Network, meaning
        creators receive tips (called "zaps") directly: peer to peer, instant,
        and borderless. No payment processor takes a percentage. No minimum
        payout threshold. No bank account required.
      </p>

      <p>
        Ditto itself is licensed under AGPL-3.0 and the full source code is
        available on{' '}
        <a
          href="https://gitlab.com/soapbox-pub/ditto"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitLab
        </a>
        . Anyone can read it, copy it, improve it, or deploy their own instance.
        Documentation is available at{' '}
        <a
          href="https://about.ditto.pub"
          target="_blank"
          rel="noopener noreferrer"
        >
          about.ditto.pub
        </a>
        .
      </p>

      {/* ── Boilerplate ── */}
      <div className="not-prose mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-3">About Soapbox</h3>
        <p className="text-gray-600 leading-relaxed">
          Soapbox creates open source software to empower communities, inspire
          creativity, and promote freedom. We believe copying is not theft, and
          that the best technology belongs to everyone. Learn more at{' '}
          <a href="/" className="text-violet-600 hover:underline">
            soapbox.pub
          </a>{' '}
          or view our{' '}
          <a href="/media-kit" className="text-violet-600 hover:underline">
            media kit
          </a>
          .
        </p>
      </div>

      {/* ── Screenshots ── */}
      <h2>Screenshots</h2>

      <p>
        High-resolution screenshots of Ditto. Click any image to view full size.
      </p>

      <div className="not-prose grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
        {screenshots.map((shot, i) => (
          <button
            key={i}
            onClick={() => openLightbox(shot.src, shot.alt)}
            className="group rounded-lg overflow-hidden shadow-sm hover:shadow-lg ring-1 ring-gray-200 hover:ring-violet-300 transition-all cursor-zoom-in"
          >
            <img
              src={shot.src}
              alt={shot.alt}
              className="w-full h-auto"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* ── Lightbox overlay ── */}
      {lightbox && (
        <div
          className="not-prose fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center">
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="max-h-[85vh] w-auto rounded-lg shadow-2xl"
            />
            <p className="text-white/80 text-sm mt-3">
              {lightbox.caption}
            </p>
          </div>
        </div>
      )}

      <p className="not-prose text-center text-gray-400 text-2xl mt-8">###</p>
    </article>
  );
}
