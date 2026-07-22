import type { BlogPostMeta } from '@/lib/blog/types';
import { GitBranch } from 'lucide-react';

export const meta: BlogPostMeta = {
  slug: 'nostr101',
  title: 'Nostr 101: A Beginner Guide to the Decentralized Social Network',
  excerpt:
    'Learn what Nostr is, how it works, and how to create your account in under a minute. A beginner guide to apps, keys, and relays on the open network.',
  coverImage: '/assets/images/nostr101-cover.png',
  date: '2026-03-11',
  author: {
    name: 'M. K. Fain',
    picture: '/assets/avatars/mk.jpg',
  },
  ogImage: {
    url: '/assets/images/nostr101-cover.png',
  },
  featured: true,
  tags: [
    'nostr',
    'tutorial',
    'beginner',
    'nostr apps',
    'decentralized social media',
    'npub',
    'nsec',
    'relays',
    'ditto',
    'how to',
  ],
  keywords:
    'what is nostr, nostr for beginners, how to join nostr, how to create a nostr account, best nostr apps, nostr apps, nostr vs bluesky, nostr vs mastodon, npub, nsec, nostr relays, decentralized social media, censorship resistant social network, nostr guide',
  faq: [
    {
      question: 'What is Nostr?',
      answer:
        'Nostr (Notes and Other Stuff Transmitted by Relays) is an open protocol for decentralized social networking. Instead of a company running servers, your posts travel through independent relays, and your identity is a cryptographic key pair that you control.',
    },
    {
      question: 'Is Nostr free to use?',
      answer:
        'Yes. Creating an account is free, most apps are free and open source, and the default relays cost nothing. Some optional extras, like paid relays or sending Bitcoin tips (zaps), cost money, but you never need them to participate.',
    },
    {
      question: 'Do I need Bitcoin to use Nostr?',
      answer:
        'No. Nostr works fine without any Bitcoin. Many apps support zaps, which let you send small Bitcoin tips to creators, but they are entirely optional.',
    },
    {
      question: 'What are npub and nsec?',
      answer:
        'Your npub is your public key, which works like a username that people use to find and follow you. Your nsec is your secret key, which works like a password. Keep your nsec safe: there is no password reset on Nostr because no company controls your account.',
    },
    {
      question: 'Can I be banned from Nostr?',
      answer:
        'No one can ban you from the Nostr network itself. An individual relay can decline to host your posts, but you can always publish to other relays, and your identity and followers stay with you.',
    },
  ],
  howTo: {
    name: 'How to create a Nostr account',
    description:
      'Create a Nostr account in under a minute with no email or phone number, using a free app like Ditto.',
    totalTime: 'PT2M',
    steps: [
      {
        name: 'Open a Nostr app',
        text: 'Go to ditto.pub in your browser (or install Ditto from Google Play or Zap Store) and tap Sign up.',
      },
      {
        name: 'Generate your keys',
        text: 'The app creates your key pair automatically: an npub (your public identity) and an nsec (your secret key).',
      },
      {
        name: 'Save your secret key',
        text: 'Download or copy your nsec and store it somewhere safe, like a password manager. It cannot be recovered if lost.',
      },
      {
        name: 'Set up your profile',
        text: 'Add a name and picture, follow a few people, and start posting. The same keys log you in to every other Nostr app.',
      },
    ],
  },
};

const NOSTR_APPS: Array<{
  type: string;
  app: string;
  href: string;
  img: string;
  alt: string;
}> = [
  {
    type: 'Posts',
    app: 'Ditto',
    href: 'https://ditto.pub',
    img: '/assets/images/ditto/content/posts.png',
    alt: 'Short posts and social feeds on Nostr in the Ditto app',
  },
  {
    type: 'Articles',
    app: 'Inkwell',
    href: 'https://inkwell.shakespeare.wtf',
    img: '/assets/images/ditto/content/articles.png',
    alt: 'Long-form articles and blogging on Nostr in Inkwell',
  },
  {
    type: 'Photos',
    app: 'nostr.build',
    href: 'https://nostr.build',
    img: '/assets/images/ditto/content/photos.png',
    alt: 'Photo sharing on Nostr with nostr.build',
  },
  {
    type: 'Music',
    app: 'Nodecast',
    href: 'https://nodecast.xyz',
    img: '/assets/images/ditto/content/music.png',
    alt: 'Music streaming on Nostr in Nodecast',
  },
  {
    type: 'Podcasts',
    app: 'Fountain',
    href: 'https://fountain.fm',
    img: '/assets/images/ditto/content/podcasts.png',
    alt: 'Podcasts on Nostr in the Fountain app',
  },
  {
    type: 'Livestreams',
    app: 'zap.stream',
    href: 'https://zap.stream',
    img: '/assets/images/ditto/content/livestreams.png',
    alt: 'Live video streaming on Nostr with zap.stream',
  },
  {
    type: 'Short Videos',
    app: 'Divine',
    href: 'https://divine.video',
    img: '/assets/images/ditto/content/vines.png',
    alt: 'Short looping videos on Nostr in the Divine app, the Vine successor',
  },
  {
    type: 'Events',
    app: 'Plektos',
    href: 'https://plektos.app',
    img: '/assets/images/ditto/content/events.png',
    alt: 'Event planning and RSVPs on Nostr in Plektos',
  },
  {
    type: 'Books',
    app: 'Bookstr',
    href: 'https://bookstr.xyz',
    img: '/assets/images/ditto/content/books.png',
    alt: 'Book tracking and reading community on Nostr in Bookstr',
  },
  {
    type: 'Polls',
    app: 'Ditto',
    href: 'https://ditto.pub',
    img: '/assets/images/ditto/content/polls.png',
    alt: 'Polls and community voting on Nostr in Ditto',
  },
];

const FEATURED_APPS: Array<{
  name: string;
  category: string;
  description: string;
  href: string;
  icon: string | null;
  screenshot: string;
  alt: string;
  accent: string;
  readMore: { href: string; label: string };
}> = [
  {
    name: 'Armada',
    category: 'Communities & Chat',
    description:
      'A Discord-style chat app with end-to-end encrypted communities, voice rooms, and private DMs. It even connects to Buzz, the team workspace app from Block.',
    href: 'https://armada.buzz',
    icon: '/assets/armada/icon.png',
    screenshot: '/assets/media-kit/screenshots/armada/desktop-2.webp',
    alt: 'Armada community chat on Nostr with channels, emoji reactions, and a member list',
    accent: 'from-pink-500 to-purple-600',
    readMore: {
      href: '/blog/armada-buzz-communities',
      label: 'How Armada works with Buzz',
    },
  },
  {
    name: 'gitworkshop.dev',
    category: 'Code & Git',
    description:
      'Git repositories, issues, and pull requests published straight to Nostr with ngit. Code collaboration like GitHub, but nobody can take your repo down.',
    href: 'https://gitworkshop.dev',
    icon: null,
    screenshot: '/assets/blog/nostr101/gitworkshop-wide.png',
    alt: 'A git repository hosted on Nostr in gitworkshop.dev showing code, files, and pull request tabs',
    accent: 'from-emerald-500 to-cyan-600',
    readMore: { href: '/blog/what-is-ngit', label: 'What is Ngit?' },
  },
];

export default function Nostr101() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>What is Nostr?</h2>
      <p>
        <strong>
          Nostr (Notes and Other Stuff Transmitted by Relays) is a
          decentralized, censorship-resistant social protocol designed to give
          users control over their online identities and interactions.
        </strong>{' '}
        Unlike traditional social media platforms that rely on centralized
        servers and moderation, Nostr allows users to communicate directly
        through a network of independent relays. This makes it permissionless,
        meaning anyone can use it without needing approval from a corporation
        or government.
      </p>
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/NVm_jGdwTjQ?si=5qcrxgjr4keqblo4"
        title="Nostr 101 Video"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <h3>Key Features of Nostr:</h3>
      <ul>
        <li>
          <strong>Decentralized:</strong> No single company controls Nostr; it
          operates on a distributed network of relays.
        </li>
        <li>
          <strong>Censorship-Resistant:</strong> Users cannot be banned from
          the network; they can always find a relay that will host their
          content.
        </li>
        <li>
          <strong>Permissionless:</strong> No accounts, phone numbers, or email
          verification required, just a cryptographic key pair.
        </li>
      </ul>
      <h2>Nostr Fixes the Problems of Big Tech</h2>
      <p>
        The internet today is controlled by a handful of companies. They decide
        who gets a platform, what content is allowed, and how your data is
        used. Nostr is built to fix that.
      </p>
      <p>
        <strong>You don't own your account.</strong> On platforms like Twitter,
        Instagram, or TikTok, your account belongs to the company. They can
        suspend you, change the rules, or shut down entirely, and everything
        you've built disappears with them. On Nostr, your identity is yours. No
        company can take it away, because no company controls it.
      </p>
      <p>
        <strong>You can be silenced at any time.</strong> Governments pressure
        platforms to remove content. Companies deplatform users based on
        shifting policies. Entire communities get wiped overnight. On Nostr,
        there's no central authority that can censor you. Your posts are
        distributed across independent servers, so no single entity can silence
        your voice.
      </p>
      <p>
        <strong>Your data is the product.</strong> Big tech makes money by
        tracking everything you do and selling your attention to advertisers.
        Nostr doesn't have a company behind it. There's no one collecting your
        data, no ads, and no surveillance business model.
      </p>
      <p>
        <strong>You're locked into one platform.</strong> Your Instagram
        followers can't see your tweets. Your Spotify playlists don't carry
        over to YouTube. Every app is a walled garden. On Nostr, one login
        works across every app. Your followers, your posts, and your identity
        travel with you.
      </p>
      <p>
        Nostr doesn't fix these problems by promising to do better; plenty of
        companies have made that promise. It fixes them by being a protocol
        where it's technically impossible for anyone to take power away from
        users.
      </p>
      <h2>How Nostr Differs from the Fediverse and Bluesky</h2>
      <p>
        Nostr is the only fully decentralized social network, but it shares
        similarities with the Fediverse and Bluesky. For a deeper dive, read
        our full <a href="/blog/comparing-protocols">Comparing Protocols</a>{' '}
        guide.
      </p>
      <figure style={{ width: '100%', height: 'auto' }}>
        <img
          alt="Comparison of Nostr, Fediverse, and Bluesky"
          src="/assets/blog/protocol-comparison.png"
          style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
        />
      </figure>
      <p>
        <strong>Mostr Bridge: Connecting Nostr to the Fediverse</strong>
      </p>
      <p>
        The Mostr Bridge is a powerful tool that connects the Nostr network
        with the Fediverse (e.g., Mastodon, Pleroma). This allows users to
        follow and interact with accounts across both ecosystems without
        needing to switch platforms. Explore the bridge{' '}
        <a href="https://mostr.pub" target="_blank" rel="noopener noreferrer">
          here
        </a>
        .
      </p>
      <h2>Nostr Apps: One Account, Every App</h2>
      <p>
        Nostr isn't just a Twitter alternative. It's an entire ecosystem of
        apps spanning every type of content you can imagine. And because your
        identity lives in your keys (not in any app's database),{' '}
        <strong>one account works everywhere</strong>. No more creating
        separate logins for your social feed, your music player, your blog,
        and your calendar. On Nostr, a single key pair is your universal
        login.
      </p>
      <p>
        Here are just some of the types of content you can create, discover,
        and interact with across the Nostr ecosystem, all with the same
        account:
      </p>
      <div className="not-prose my-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {NOSTR_APPS.map(({ type, app, href, img, alt }) => (
          <a
            key={type}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block no-underline"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  alt={alt}
                  src={img}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="px-3 py-2.5 text-center">
                <div className="text-sm font-bold text-foreground">{type}</div>
                <div className="text-xs text-muted-foreground">{app}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
      <h3>Beyond Social: Communities and Code</h3>
      <p>
        Nostr goes further than content feeds. Whole categories of apps that
        used to require a company in the middle, like group chat and code
        hosting, now run on the same open network, with the same login:
      </p>
      <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
        {FEATURED_APPS.map(
          ({
            name,
            category,
            description,
            href,
            icon,
            screenshot,
            alt,
            accent,
            readMore,
          }) => (
            <div
              key={name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/10] overflow-hidden bg-muted"
              >
                <img
                  src={screenshot}
                  alt={alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
              <div className="relative px-6">
                <div
                  className={`absolute -top-7 flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${accent} p-[3px] shadow-lg ring-4 ring-card`}
                >
                  {icon ? (
                    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[13px] bg-white">
                      <img
                        src={icon}
                        alt={`${name} logo`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <GitBranch className="h-7 w-7 text-white" aria-hidden="true" />
                  )}
                </div>
              </div>
              <div className="flex flex-1 flex-col px-6 pb-6 pt-10">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {category}
                </div>
                <h4 className="mt-1 text-xl font-bold text-foreground">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline hover:underline"
                  >
                    {name}
                  </a>
                </h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <a
                  href={readMore.href}
                  className="mt-3 text-sm font-semibold text-violet-600 no-underline hover:underline dark:text-violet-400"
                >
                  {readMore.label} &rarr;
                </a>
              </div>
            </div>
          )
        )}
      </div>
      <p>
        And this is just the beginning. Browse the rest of our production apps
        in the <a href="/toolbox">Soapbox Toolbox</a>, see what we're
        experimenting with in the <a href="/toybox">Toybox</a>, or discover
        community-built apps at{' '}
        <a
          href="https://nostrapps.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nostrapps.com
        </a>
        .
      </p>
      <div className="not-prose my-8 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-100 p-6 sm:p-8 dark:from-violet-950/40 dark:to-purple-950/30">
        <h3 className="mb-4 text-2xl font-bold text-foreground">
          Ditto: Best Place to Start
        </h3>
        <div className="mb-5 flex gap-2">
          <img
            alt="Ditto Kawaii theme"
            src="/assets/blog/announcing-ditto-2/kawaii-mobile.png"
            className="min-w-0 flex-1 rounded-lg"
          />
          <img
            alt="Ditto Solarpunk theme"
            src="/assets/blog/announcing-ditto-2/solarpunk-mobile.png"
            className="min-w-0 flex-1 rounded-lg"
          />
          <img
            alt="Ditto Hacker theme"
            src="/assets/blog/announcing-ditto-2/hacker-mobile.png"
            className="min-w-0 flex-1 rounded-lg"
          />
          <img
            alt="Ditto Clackophile theme"
            src="/assets/blog/announcing-ditto-2/clackophile-mobile.png"
            className="hidden min-w-0 flex-1 rounded-lg sm:block"
          />
          <img
            alt="Ditto DJ theme"
            src="/assets/blog/announcing-ditto-2/dj-mobile.png"
            className="hidden min-w-0 flex-1 rounded-lg sm:block"
          />
          <img
            alt="Ditto Hiker theme"
            src="/assets/blog/announcing-ditto-2/hiker-mobile.png"
            className="hidden min-w-0 flex-1 rounded-lg sm:block"
          />
        </div>
        <p className="mb-6 leading-relaxed text-foreground/80">
          <strong>Ditto</strong> is a full-featured Nostr community platform
          where you can explore all of these different content types (posts,
          articles, photos, music, livestreams, events, and more) all in one
          place. It's fully customizable with themes, and it's the easiest way
          to experience everything Nostr has to offer.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://ditto.pub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg bg-violet-600 px-6 py-3 text-base font-semibold text-white no-underline transition-colors duration-150 hover:bg-violet-700 active:bg-violet-800"
          >
            <span className="sm:hidden">Try Ditto</span>
            <span className="hidden sm:inline">Try Ditto Now</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=pub.ditto.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-violet-600 bg-white px-6 py-3 text-base font-semibold text-violet-600 no-underline transition-colors duration-150 hover:bg-violet-600 hover:text-white active:bg-violet-700"
          >
            <img src="/assets/icons/google-play.svg" alt="" className="h-5 w-5" />
            Google Play
          </a>
          <a
            href="https://zapstore.dev/apps/pub.ditto.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-violet-600 bg-white px-6 py-3 text-base font-semibold text-violet-600 no-underline transition-colors duration-150 hover:bg-violet-600 hover:text-white active:bg-violet-700"
          >
            <img
              src="/assets/icons/zapstore.png"
              alt=""
              className="h-5 w-5 rounded"
            />
            Zapstore
          </a>
        </div>
      </div>
      <h3>Other Popular Nostr Apps</h3>
      <ul>
        <li>
          <strong>
            <a
              href="https://primal.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Primal
            </a>
          </strong>{' '}
          (Web, iOS, Android): Great for discovery and ease of use, with a
          built-in Bitcoin wallet for zaps.
        </li>
        <li>
          <strong>
            <a
              href="https://damus.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Damus
            </a>
          </strong>{' '}
          (iOS): A clean, Apple-friendly experience from one of the earliest
          Nostr teams.
        </li>
        <li>
          <strong>
            <a
              href="https://amethyst.social"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amethyst
            </a>
          </strong>{' '}
          (Android): A power-user favorite that supports nearly every Nostr
          feature.
        </li>
      </ul>
      <h2>Nostr Relays</h2>
      <p>
        Relays are the servers that store and deliver your posts. Think of them
        like different mail carriers: your messages get sent through them to
        reach other people.
      </p>
      <p>
        You don't need to think about relays to use Nostr; the defaults work
        great. But if you're curious, you can add or remove relays in Settings
        &gt; Network.
      </p>
      <p>
        Using multiple relays means your content is backed up in more places,
        making it harder for anyone to silence you. To dive deeper, read{' '}
        <a
          href="https://nostr.how/en/relays"
          target="_blank"
          rel="noopener noreferrer"
        >
          Understanding Nostr Relays
        </a>
        .
      </p>
      <h2>How to Create an Account on Nostr</h2>
      <p>
        Getting started on Nostr takes less than a minute. Unlike traditional
        social media, there's no email address or phone number required. Your
        identity is based on a pair of cryptographic keys, but don't worry, an
        app like Ditto handles all of that for you. Here's what it looks like:
      </p>
      <div className="not-prose my-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <img
          alt="Ditto create account screen generating a Nostr key pair"
          src="/assets/blog/nostr101/ditto-keygen.png"
          className="w-full max-w-[300px] rounded-xl border border-border sm:w-[45%]"
        />
        <img
          alt="Ditto save secret key screen for backing up your nsec"
          src="/assets/blog/nostr101/ditto-download.png"
          className="w-full max-w-[300px] rounded-xl border border-border sm:w-[45%]"
        />
      </div>
      <p>When you sign up, the app generates two keys for you:</p>
      <ul>
        <li>
          <strong>Your public key (npub):</strong> This is your identity on
          Nostr, like a username. It's how people find and follow you, and you
          can share it freely.
        </li>
        <li>
          <strong>Your secret key (nsec):</strong> This is your password. It
          proves you are who you say you are. Keep it safe: there's no "forgot
          password" on Nostr, because no company controls your account.
        </li>
      </ul>
      <p>
        That's what makes Nostr different: <strong>you own your identity</strong>.
        No company can lock you out, delete your account, or change the rules
        on you. Your keys are yours forever.
      </p>
      <p>
        Creating your Nostr account is easy on Ditto.{' '}
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
          Get started &rarr;
        </a>
      </p>
      <h2>Zaps: Tipping Built Into the Network</h2>
      <p>
        One thing no other social network has: money built in. Nostr apps
        support <strong>zaps</strong>, small Bitcoin tips you can send to any
        post or profile with a tap. Creators get paid directly by their
        audience, with no ad middleman taking a cut. Zaps are completely
        optional, and you can read exactly how they work in our{' '}
        <a href="/blog/zapping-101">Zapping 101</a> guide.
      </p>
      <h2>Frequently Asked Questions</h2>
      <h3>Is Nostr free to use?</h3>
      <p>
        Yes. Creating an account is free, most apps are free and open source,
        and the default relays cost nothing. Optional extras like paid relays
        or zaps cost money, but you never need them to participate.
      </p>
      <h3>Do I need Bitcoin to use Nostr?</h3>
      <p>
        No. Nostr works fine without any Bitcoin. Zaps are entirely optional.
      </p>
      <h3>What happens if I lose my secret key?</h3>
      <p>
        Your nsec cannot be recovered, so store it in a password manager or
        another safe place when you sign up. If you lose it, you'll need to
        create a new identity.
      </p>
      <h3>Can I be banned from Nostr?</h3>
      <p>
        No one can ban you from the network itself. An individual relay can
        decline to host your posts, but you can always publish to other
        relays, and your identity and followers stay with you.
      </p>
      <h2>Related Reading</h2>
      <ul>
        <li>
          <a href="/blog/zapping-101">
            Zapping 101: How to Send (and Receive) Bitcoin Tips on Nostr
          </a>
        </li>
        <li>
          <a href="/blog/what-is-nostr-divine">
            What is Nostr? The Decentralized Protocol Powering Divine
          </a>
        </li>
        <li>
          <a href="/blog/armada-buzz-communities">
            Use Buzz on Your Phone: Armada Adds Buzz Communities
          </a>
        </li>
        <li>
          <a href="/blog/what-is-ngit">
            What is Ngit? The BUZZy New Git Protocol Taking On GitHub
          </a>
        </li>
      </ul>
      <p>
        Ready to try it? Pick any app above, generate your keys, and you're on
        Nostr. The easiest place to start is{' '}
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
          Ditto
        </a>
        .
      </p>
    </article>
  );
}
