import { useState, useCallback } from 'react';
import { Download } from 'lucide-react';

import type { BlogPostMeta } from '@/lib/blog/types';
import { Button } from '@/components/ui/button';

export const meta: BlogPostMeta = {
  slug: 'ditto-bitcoin-vegas-2026',
  title: 'Soapbox Launches Ditto: A Customizable Social Hub for the Open Web, Powered by Bitcoin',
  excerpt:
    'Soapbox launches Ditto, a fully customizable social platform that connects Nostr, Bluesky, and Mastodon in one place. Built on open protocols with Bitcoin Lightning payments. Available now on iOS, Android, and web.',
  coverImage: '/assets/blog/announcing-ditto-2/cover.jpg',
  date: '2026-04-20',
  author: {
    name: 'M. K. Fain',
    picture: '/assets/avatars/mk.jpg',
  },
  ogImage: {
    url: '/assets/blog/announcing-ditto-2/cover.jpg',
  },
  featured: true,
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

  const handlePrintPDF = useCallback(() => {
    document.body.classList.add('print-press-release');
    window.print();
    document.body.classList.remove('print-press-release');
  }, []);

  return (
    <article className="prose prose-lg max-w-none">
      {/* ── Press release header ── */}
      <div className="not-prose text-center space-y-2 mb-10 pb-8 border-b border-gray-200">
        <p className="text-sm font-semibold tracking-widest uppercase text-gray-500">
          For Immediate Release
        </p>
        <p className="text-sm text-gray-500">
          April 20, 2026 &middot; Bitcoin Vegas Conference
        </p>
        <p className="text-sm text-gray-500">
          Media contact: M.K. Fain, CPO &middot;{' '}
          <a href="mailto:contact@soapbox.pub" className="text-violet-600 hover:underline">
            contact@soapbox.pub
          </a>
        </p>
        <p className="text-sm text-gray-500">
          Spokesperson: Derek Ross, Developer Relations &middot; Available for interviews at Bitcoin 2026
        </p>
        <div className="mt-4" data-print-hide>
          <Button variant="outline" size="sm" onClick={handlePrintPDF}>
            <Download className="mr-2 h-4 w-4" />
            Download as PDF
          </Button>
        </div>
      </div>

      {/* ── Body ── */}
      <p>
        <strong>LAS VEGAS, NV</strong> &mdash;{' '}
        People are tired of social media that treats them like a product. They're
        tired of algorithmic feeds they can't control, profiles that all look the
        same, and platforms that can revoke their account at any time. A growing
        wave of internet nostalgia reflects a deeper hunger: people want the
        creative, personal web back.
      </p>

      <p>
        Today at Bitcoin 2026,{' '}
        <a href="/">Soapbox</a> announced the public launch of{' '}
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
          Ditto
        </a>
        : a fully customizable, open source social platform that brings that era
        roaring back. Ditto isn't just another alternative to X or Bluesky. It's a
        hub for the open web, connecting users across Nostr,{' '}
        <a href="/blog/follow-bluesky">Bluesky</a>, and{' '}
        <a href="/blog/mostr-fediverse-nostr-bridge">Mastodon</a> in one
        place, with Bitcoin Lightning payments built in.
        Available now on the{' '}
        <a href="https://apps.apple.com/us/app/ditto-fun-social-media/id6761851821" target="_blank" rel="noopener noreferrer">
          App Store
        </a>,{' '}
        <a href="https://play.google.com/store/apps/details?id=pub.ditto.app" target="_blank" rel="noopener noreferrer">
          Google Play
        </a>,{' '}
        <a href="https://zapstore.dev/apps/pub.ditto.app" target="_blank" rel="noopener noreferrer">
          Zapstore
        </a>, and the web at{' '}
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
          ditto.pub
        </a>.
      </p>

      <div className="not-prose flex flex-wrap justify-center gap-3 my-6" data-print-hide>
        <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
          <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
            Try on Web
          </a>
        </Button>
        <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
          <a
            href="https://apps.apple.com/us/app/ditto-fun-social-media/id6761851821"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/icons/app-store.svg" alt="" className="mr-2 h-5 w-5" />
            App Store
          </a>
        </Button>
        <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
          <a
            href="https://play.google.com/store/apps/details?id=pub.ditto.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/icons/google-play.svg" alt="" className="mr-2 h-5 w-5" />
            Google Play
          </a>
        </Button>
        <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
          <a
            href="https://zapstore.dev/apps/pub.ditto.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/icons/zapstore.png" alt="" className="mr-2 h-5 w-5 rounded" />
            Zapstore
          </a>
        </Button>
      </div>

      <blockquote>
        <p>
          Ditto is a place of creation. An endless garden where thousands of
          flowers can bloom. People can use Shakespeare.diy to create their own
          apps, then share them on a social network with Ditto. I want to prove
          that making software is a form of art. Especially with AI.
        </p>
      </blockquote>
      <p className="text-right text-gray-500 -mt-4">
        &mdash; Alex Gleason, Founder of Soapbox
      </p>

      <h2>What Makes Ditto Different</h2>

      <ul>
        <li>
          <strong>Full personalization.</strong> Custom themes with colors,
          backgrounds, fonts, and layouts. Browse community-created themes or
          build your own. The era of personal, expressive profiles is back.
        </li>
        <li>
          <strong>A hub, not a silo.</strong> Follow and interact with users
          on Bluesky and Mastodon without leaving Ditto. Your feed, your rules,
          across multiple networks.
        </li>
        <li>
          <strong>Bitcoin-native payments.</strong> Creators receive Lightning
          tips ("zaps") directly on posts and profiles. Peer to peer, instant,
          borderless. No payment processor takes a cut.
        </li>
        <li>
          <strong>Virtual pets.</strong> Blobbis are Tamagotchi-style companions
          that live in your feed. Hatch an egg, raise it through 16 forms, and
          watch it follow you around the app.
        </li>
        <li>
          <strong>Encrypted letters.</strong> Decorated, personal messages with
          custom stationery, stickers, and 3D animated envelopes.
        </li>
        <li>
          <strong>You own your account.</strong> Built on{' '}
          <a href="/blog/comparing-protocols">Nostr</a>, users hold their own
          cryptographic keys. No company can suspend your identity, and you can
          take your social graph to any compatible app at any time.
        </li>
        <li>
          <strong>Build and launch your own microapps.</strong> With{' '}
          <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
            Shakespeare
          </a>
          , anyone can create lightweight apps and publish them directly to the
          Ditto network. Software as a creative act, powered by AI.
        </li>
      </ul>

      <h2>Open Source and Decentralized</h2>

      <p>
        Ditto applies the same principles that made Bitcoin unstoppable to social
        communication. Just as Bitcoin removed trusted intermediaries from money,
        Nostr removes them from speech. Your key is yours. No platform can revoke it.
      </p>

      <p>
        Ditto is licensed under AGPL-3.0 and the full source code is available
        on{' '}
        <a
          href="https://gitlab.com/soapbox-pub/ditto"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitLab
        </a>
        . Anyone can read, copy, improve, or self-host their own instance.
        Documentation is at{' '}
        <a
          href="https://about.ditto.pub"
          target="_blank"
          rel="noopener noreferrer"
        >
          about.ditto.pub
        </a>
        .
      </p>

      {/* ── NosVegas launch party ── */}
      <h2>See Ditto Live at NosVegas</h2>

      <p>
        Want to see Ditto in action and hear directly from the team? Join us at{' '}
        <strong>NosVegas</strong>, the official Nostr community event during
        Bitcoin 2026 week. Soapbox will be presenting Ditto live, walking through
        the features, and answering questions. Whether you're a developer, a
        creator, or just curious about the future of social media, come by and say
        hello.
      </p>

      <div className="not-prose bg-gray-50 rounded-lg p-6 my-6 border border-gray-200">
        <p className="font-semibold text-lg mb-3">NosVegas Event Details</p>
        <ul className="space-y-1 text-gray-700 text-base">
          <li><strong>Date:</strong> Tuesday, April 28, 2026</li>
          <li><strong>Time:</strong> 7:00 PM &ndash; 1:00 AM</li>
          <li>
            <strong>Venue:</strong>{' '}
            <a
              href="https://maps.google.com/?q=517+Fremont+St+Las+Vegas+NV+89101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 hover:underline"
            >
              WE ALL SCREAM Nightclub, 517 Fremont St., Las Vegas, NV 89101
            </a>
          </li>
        </ul>
      </div>

      {/* ── Boilerplate ── */}
      <div className="not-prose mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-3">About Soapbox</h3>
        <p className="text-gray-600 leading-relaxed mb-3">
          Soapbox was founded by Alex Gleason, former Head of Engineering at
          Truth Social. The company builds open source tools for the
          decentralized web, funded by grants and donations from organizations
          including OpenSats and the Human Rights Foundation. No ads, no
          investors, no data sales. Learn more at{' '}
          <a href="/" className="text-violet-600 hover:underline">
            soapbox.pub
          </a>{' '}
          or view our{' '}
          <a href="/media-kit" className="text-violet-600 hover:underline">
            media kit
          </a>
          .
        </p>
        <p className="text-gray-500 text-sm">
          <strong>Interview requests:</strong> Derek Ross (Developer Relations) is
          available for interviews at Bitcoin 2026. Contact{' '}
          <a href="mailto:derekross@soapbox.pub" className="text-violet-600 hover:underline">
            derekross@soapbox.pub
          </a>{' '}
          to schedule.
        </p>
      </div>

      {/* ── Screenshots (web: interactive grid) ── */}
      <div data-print-hide>
        <h2>Screenshots</h2>

        <p>
          High-resolution screenshots of Ditto. Click any image to view full size.
        </p>

        <div className="not-prose grid grid-cols-4 gap-2 my-6 max-w-lg">
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
      </div>

      {/* ── Screenshots (print: formatted grid + download link) ── */}
      <div data-print-only className="hidden">
        <h2>Screenshots</h2>
        <div className="not-prose" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', pageBreakInside: 'avoid' }}>
          {screenshots.map((shot, i) => (
            <img
              key={i}
              src={shot.src}
              alt={shot.alt}
              style={{ width: '100%', height: 'auto', borderRadius: '6px', border: '1px solid #ddd' }}
            />
          ))}
        </div>
        <p style={{ marginTop: '12px', fontSize: '10pt' }}>
          Download high-resolution screenshots and media assets at:{' '}
          <a href="https://soapbox.pub/blog/ditto-bitcoin-vegas-2026">
            soapbox.pub/blog/ditto-bitcoin-vegas-2026
          </a>
        </p>
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
