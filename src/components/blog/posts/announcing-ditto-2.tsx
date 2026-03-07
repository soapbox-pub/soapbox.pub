import type { BlogPostMeta } from '@/lib/blog/types';

export const meta: BlogPostMeta = {
  slug: 'announcing-ditto-2',
  title: 'Introducing Ditto 2: Fun Social Media Is Back',
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
  tags: ['Ditto', 'Nostr', 'Open Source', 'Social Media'],
};

export default function AnnouncingDitto2() {
  const themes = [
    { name: 'Kawaii', src: '/assets/images/ditto/profiles/kawaii.png' },
    { name: 'Grunge', src: '/assets/images/ditto/profiles/grunge.png' },
    { name: 'Gamer', src: '/assets/images/ditto/profiles/gamer.png' },
    { name: 'Solarpunk', src: '/assets/images/ditto/profiles/solarpunk.png' },
    { name: 'Alien', src: '/assets/images/ditto/profiles/alien.png' },
    { name: 'Hacker', src: '/assets/images/ditto/profiles/hacker.png' },
    { name: 'MS Paint', src: '/assets/images/ditto/profiles/mspaint.png' },
    { name: 'Midnight', src: '/assets/images/ditto/profiles/midnight.png' },
    { name: 'Hiker', src: '/assets/images/ditto/profiles/hiker.png' },
    { name: 'DJ', src: '/assets/images/ditto/profiles/dj.png' },
    { name: 'Cottage', src: '/assets/images/ditto/profiles/mk-cottage.png' },
    { name: 'Synthwave', src: '/assets/images/ditto/profiles/derek.png' },
  ];

  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        <strong>Your content. Your vibe. Your rules.</strong> Ditto is the world's
        first fully customizable, open source social platform -- and it just got a
        massive upgrade.
      </p>

      <p>
        Today we're launching a major update to{' '}
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
          Ditto
        </a>
        , our open source social media platform built on the free and open{' '}
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
          "We built Ditto because we think fun requires freedom. Social media
          used to be creative, expressive, and personal -- remember MySpace? Then
          Big Tech turned it all into sad beige feeds designed to extract data and
          sell ads. This update brings that era of self-expression roaring back.
          Custom themes, wall posts, infinite content types, your top friends --
          it's all here, and it's 100% free, open source, and yours to own."
        </p>
        <p>-- M.K. Fain, CPO at Soapbox</p>
      </blockquote>

      <h2>What's New in Ditto</h2>

      <h3>Your Content. Your Vibe. Your Rules.</h3>

      <p>
        Customize your profile and theme with color palettes, background images,
        fonts, and more. Think MySpace-level personalization, powered by modern
        tech. Browse and share themes, or build your own with{' '}
        <a href="/tools/shakespeare">Shakespeare</a>, Soapbox's AI-powered code
        editor.
      </p>

      <h3>Infinite Content Types</h3>

      <p>
        Ditto isn't just a microblog. It's a playground. Photos, videos,
        short-form Vines, livestreams, articles, polls, podcasts, music, events,
        Magic Decks, geocache Treasures, webxdc apps, and more -- all in one feed
        you design yourself.
      </p>

      <h3>Comment on Anything</h3>

      <p>
        Posts. Countries. URLs. Books. Profiles. Geocache treasures. If it exists
        on Ditto, you can discuss it. Write on your friend's wall. Start petty
        internet drama. It's the open web -- have fun with it.
      </p>

      <h3>A Bridge to the Open Web</h3>

      <p>
        Use Ditto to connect to{' '}
        <a href="/blog/follow-bluesky">Bluesky</a>,{' '}
        <a href="/blog/mostr-fediverse-nostr-bridge">Mastodon</a>, and a growing
        universe of Nostr apps. No more managing separate accounts for every
        platform. Learn more about{' '}
        <a href="/blog/comparing-protocols">
          how decentralized protocols compare
        </a>
        .
      </p>

      <h3>You Own Your Data</h3>

      <p>
        Your identity, content, and connections belong to you -- not some
        corporation. No platform lock-in, no hostage data. Leave anytime and take
        everything with you.
      </p>

      <h3>Community-Owned and Made for Hacking On</h3>

      <p>
        Ditto is open source -- anyone can copy, improve, and build on it. Edit
        and remix the entire platform with{' '}
        <a
          href="https://shakespeare.diy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shakespeare
        </a>
        . Deploy it on a $5 VPS, GitHub Pages, or a Raspberry Pi in your closet.
      </p>

      <h3>No Big Tech</h3>

      <p>
        No central corporation controlling the data. No ads, no data mining, no
        tracking, no algorithms you're forced into. Community servers keep things
        decentralized. Read our{' '}
        <a href="/ethics">ethics pledge</a>.
      </p>

      <p>
        <strong>Because we think Fun requires Freedom.</strong>
      </p>

      <h2>Get Started</h2>

      <p>
        Ditto is available now at{' '}
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
          ditto.pub
        </a>{' '}
        and it's completely free. No email required. No phone number. Just you and
        a Nostr key.
      </p>

      <p>
        Learn more at{' '}
        <a
          href="https://about.ditto.pub"
          target="_blank"
          rel="noopener noreferrer"
        >
          about.ditto.pub
        </a>
        , or explore{' '}
        <a href="/tools/ditto">Ditto on our tools page</a>.
      </p>

      <h2>Theme Gallery</h2>

      <p>
        Here's a taste of the custom themes users have already created on Ditto.
        Every profile is a canvas.
      </p>

      <div className="not-prose grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 my-8">
        {themes.map((theme) => (
          <div key={theme.name} className="space-y-2">
            <div className="rounded-xl overflow-hidden shadow-lg ring-2 ring-violet-200/60">
              <img
                src={theme.src}
                alt={`${theme.name} theme on Ditto`}
                className="w-full aspect-[867/918] object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-center text-sm font-medium text-gray-700">
              {theme.name}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center">
        <a href="/tools/ditto">
          See more on the Ditto page &rarr;
        </a>
      </p>
    </article>
  );
}
