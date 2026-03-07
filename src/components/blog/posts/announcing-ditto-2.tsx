import { useState } from 'react';

import type { BlogPostMeta } from '@/lib/blog/types';

export const meta: BlogPostMeta = {
  slug: 'announcing-ditto-2',
  title: 'Soapbox Launches Major Update to Ditto',
  excerpt:
    'Soapbox launches a major update to Ditto, the open source social platform for people who want to have fun online again. Custom themes, infinite content types, and bridges to Bluesky and Mastodon.',
  coverImage: '/assets/images/ditto/ditto2-og.gif',
  date: '2026-03-11',
  author: {
    name: 'M. K. Fain',
    picture: '/assets/avatars/mk.jpg',
  },
  ogImage: {
    url: '/assets/images/ditto/ditto2-og.gif',
  },
  featured: true,
  tags: ['Ditto', 'Nostr', 'Open Source', 'Press Release'],
};

/** Gallery screenshot data. */
const screenshots = [
  { src: '/assets/blog/announcing-ditto-2/kawaii-desktop.png', caption: 'Kawaii theme (desktop)' },
  { src: '/assets/blog/announcing-ditto-2/solarpunk-desktop.png', caption: 'Solarpunk theme (desktop)' },
  { src: '/assets/blog/announcing-ditto-2/hacker-desktop.png', caption: 'Hacker theme (desktop)' },
  { src: '/assets/blog/announcing-ditto-2/clackophile-desktop.png', caption: 'Clackophile theme (desktop)' },
  { src: '/assets/blog/announcing-ditto-2/dj-desktop.png', caption: 'DJ theme (desktop)' },
  { src: '/assets/blog/announcing-ditto-2/podcaster-desktop.png', caption: 'Podcaster theme (desktop)' },
  { src: '/assets/blog/announcing-ditto-2/hiker-desktop.png', caption: 'Hiker theme (desktop)' },
  { src: '/assets/blog/announcing-ditto-2/kawaii-mobile.png', caption: 'Kawaii theme (mobile)' },
  { src: '/assets/blog/announcing-ditto-2/solarpunk-mobile.png', caption: 'Solarpunk theme (mobile)' },
  { src: '/assets/blog/announcing-ditto-2/hacker-mobile.png', caption: 'Hacker theme (mobile)' },
  { src: '/assets/blog/announcing-ditto-2/mobile-feed.png', caption: 'Feed view' },
  { src: '/assets/blog/announcing-ditto-2/mobile-themes.png', caption: 'Theme browser' },
  { src: '/assets/blog/announcing-ditto-2/mobile-world.png', caption: 'World (Agora)' },
  { src: '/assets/blog/announcing-ditto-2/mobile-vines.png', caption: 'Vines' },
  { src: '/assets/blog/announcing-ditto-2/mobile-articles.png', caption: 'Articles' },
  { src: '/assets/blog/announcing-ditto-2/mobile-treasures.png', caption: 'Treasures' },
];

export default function AnnouncingDitto2() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <article className="prose prose-lg max-w-none">
      {/* ── Press release header ── */}
      <div className="not-prose text-center space-y-2 mb-10 pb-8 border-b border-gray-200">
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">
          For Immediate Release
        </p>
        <p className="text-sm text-gray-500">
          March 11, 2026 &middot; Houston, TX
        </p>
        <p className="text-sm text-gray-500">
          Contact: M.K. Fain, CPO &middot;{' '}
          <a href="mailto:contact@soapbox.pub" className="text-violet-600 hover:underline">
            contact@soapbox.pub
          </a>
        </p>
      </div>

      {/* ── Headline ── */}
      <h2 className="text-center">
        Soapbox Launches Major Update to Ditto, the Social Platform for People
        Who Want to Have Fun Online Again -- Not Feed the Big Tech Machine
      </h2>

      <p className="lead text-center italic">
        Your content. Your vibe. Your rules. Ditto is the world's first fully
        customizable, open source social platform -- and it just got a massive
        upgrade.
      </p>

      {/* ── Body ── */}
      <p>
        <strong>HOUSTON, TX</strong> -- Soapbox today announced the launch of a
        major update to{' '}
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
          Ditto
        </a>
        , its open source social media platform built on the free and open{' '}
        <a href="/blog/comparing-protocols">Nostr protocol</a>. This release
        transforms Ditto into the most customizable social experience on the
        internet -- a platform where you control your content, your vibe, and
        your rules. With deep personalization, infinite content types, and bridges
        to{' '}
        <a href="/blog/follow-bluesky">Bluesky</a> and{' '}
        <a href="/blog/mostr-fediverse-nostr-bridge">Mastodon</a>, Ditto is your
        homebase on the decentralized web.
      </p>

      <blockquote>
        <p>
          We built Ditto because we think fun requires freedom. Social media
          used to be creative, expressive, and personal -- remember MySpace? Then
          Big Tech turned it all into sad beige feeds designed to extract data and
          sell ads. This update brings that era of self-expression roaring back.
          Custom themes, wall posts, infinite content types, your top friends --
          it's all here, and it's 100% free, open source, and yours to own.
        </p>
        <p>-- M.K. Fain, CPO at Soapbox</p>
      </blockquote>

      <h2>What's New in Ditto</h2>

      <p>
        This update delivers a next-level social experience designed for people
        who want the internet to be fun again:
      </p>

      <ul>
        <li>
          <strong>Your content. Your vibe. Your rules.</strong> Customize your
          profile and theme with color palettes, background images, fonts, and
          more. Think MySpace-level personalization, powered by modern tech.
          Browse and share themes, or build your own with{' '}
          <a href="/tools/shakespeare">Shakespeare</a>, Soapbox's AI-powered
          code editor.
        </li>
        <li>
          <strong>Infinite content types.</strong> Ditto isn't just a microblog.
          It's a playground. Photos, videos, short-form Vines, livestreams,
          articles, polls, podcasts, music, events, Magic Decks, geocache
          Treasures, webxdc apps, and more -- all in one feed you design yourself.
        </li>
        <li>
          <strong>Comment on anything.</strong> Posts. Countries. URLs. Books.
          Profiles. Geocache treasures. If it exists on Ditto, you can discuss it.
          Write on your friend's wall. Start petty internet drama. It's the open
          web -- have fun with it.
        </li>
        <li>
          <strong>A bridge to the open web.</strong> Use Ditto to connect to{' '}
          <a href="/blog/follow-bluesky">Bluesky</a>,{' '}
          <a href="/blog/mostr-fediverse-nostr-bridge">Mastodon</a>, and a
          growing universe of Nostr apps. No more managing separate accounts for
          every platform.
        </li>
        <li>
          <strong>You own your data.</strong> Your identity, content, and
          connections belong to you -- not some corporation. No platform lock-in,
          no hostage data. Leave anytime and take everything with you.
        </li>
        <li>
          <strong>Community-owned and made for hacking on.</strong> Ditto is open
          source -- anyone can copy, improve, and build on it. Edit and remix the
          entire platform with{' '}
          <a
            href="https://shakespeare.diy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shakespeare
          </a>
          . Deploy it on a $5 VPS, GitHub Pages, or a Raspberry Pi in your closet.
        </li>
        <li>
          <strong>No Big Tech.</strong> No central corporation controlling the
          data. No ads, no data mining, no tracking, no algorithms you're forced
          into. Community servers keep things decentralized. Read our{' '}
          <a href="/ethics">ethics pledge</a>.
        </li>
      </ul>

      <p>
        <strong>Because we think Fun requires Freedom.</strong>
      </p>

      <h2>Availability &amp; Pricing</h2>

      <p>
        Ditto is available now at{' '}
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
          ditto.pub
        </a>{' '}
        and it's completely free. No email required. No phone number. Learn more
        at{' '}
        <a
          href="https://about.ditto.pub"
          target="_blank"
          rel="noopener noreferrer"
        >
          about.ditto.pub
        </a>
        .
      </p>

      {/* ── Media Gallery ── */}
      <h2>Screenshots</h2>

      <p>
        High-resolution screenshots of Ditto's custom themes and features.
        Click any image to view full size.
      </p>

      <div className="not-prose grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 my-8">
        {screenshots.map((shot, i) => (
          <button
            key={shot.src}
            onClick={() => setLightbox(i)}
            className="group rounded-lg overflow-hidden shadow-sm hover:shadow-lg ring-1 ring-gray-200 hover:ring-violet-300 transition-all cursor-zoom-in"
          >
            <img
              src={shot.src}
              alt={shot.caption}
              className="w-full h-auto"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Lightbox overlay */}
      {lightbox !== null && (
        <div
          className="not-prose fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center">
            <img
              src={screenshots[lightbox].src}
              alt={screenshots[lightbox].caption}
              className="max-h-[85vh] w-auto rounded-lg shadow-2xl"
            />
            <p className="text-white/80 text-sm mt-3">
              {screenshots[lightbox].caption}
            </p>
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(lightbox > 0 ? lightbox - 1 : screenshots.length - 1);
                }}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white text-xl transition-colors"
                aria-label="Previous"
              >
                &lsaquo;
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(lightbox < screenshots.length - 1 ? lightbox + 1 : 0);
                }}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white text-xl transition-colors"
                aria-label="Next"
              >
                &rsaquo;
              </button>
            </div>
          </div>
        </div>
      )}

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

        <p className="text-center text-gray-400 text-2xl mt-8">###</p>
      </div>
    </article>
  );
}
