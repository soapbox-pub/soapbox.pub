import type { BlogPostMeta } from '@/lib/blog/types';
import { FAQSection } from '@/components/blog/FAQSection';
import { GitBranch } from 'lucide-react';

export const meta: BlogPostMeta = {
  slug: 'best-nostr-apps',
  title: 'Best Nostr Apps in 2026: iOS, Android, and Web Clients',
  excerpt:
    'A guide to the best Nostr apps in 2026, from social clients like Damus and Primal to video, photos, music, and chat. One account works across all of them.',
  coverImage: '/assets/images/nostr101-cover.png',
  date: '2026-07-23',
  author: {
    name: 'M. K. Fain',
    picture: '/assets/avatars/mk.jpg',
  },
  ogImage: {
    url: '/assets/images/nostr101-cover.png',
  },
  featured: true,
  tags: [
    'best nostr apps',
    'nostr apps',
    'nostr clients',
    'best nostr client',
    'nostr',
    'damus',
    'primal',
    'amethyst',
    'ditto',
    'decentralized social media',
    'nostr ios',
    'nostr android',
    'nostr guide',
  ],
  keywords:
    'best nostr apps, nostr apps, nostr clients, best nostr client, nostr apps ios, nostr apps android, nostr web client, damus, primal, amethyst, ditto, nostr social media apps, decentralized social media apps, nostr client comparison, how to use nostr, what is nostr',
  faq: [
    {
      question: 'What is the best Nostr app for beginners?',
      answer:
        'Ditto and Primal are the easiest places to start. Both create your account for you, work in a normal web browser, and cover the main social features (posts, photos, replies, and following people) without any setup. You can switch to another app later without losing your account.',
    },
    {
      question: 'What are the best Nostr apps for iOS?',
      answer:
        'Damus and Primal are the two most popular Nostr apps on iPhone. Damus is a clean, fast social client, and Primal adds discovery features and a built-in Bitcoin wallet. Nos and Nostur are also solid iOS options.',
    },
    {
      question: 'What are the best Nostr apps for Android?',
      answer:
        'Amethyst is the most feature-rich Nostr client on Android. Primal and Ditto also have strong Android apps. Most people also install Amber, a separate signer app that logs you in to other Nostr apps without pasting your secret key.',
    },
    {
      question: 'Are Nostr apps free?',
      answer:
        'Yes. Nearly every Nostr app is free to download and use, and most are open source. There are no ads and no subscription required to post, follow people, or read your feed.',
    },
    {
      question: 'Can I use the same account across different Nostr apps?',
      answer:
        'Yes, and this is the main advantage of Nostr. Your account is a key pair that you control, not a login tied to one company. The same keys work in Damus, Primal, Amethyst, Ditto, and every other Nostr app, and your profile and followers come with you.',
    },
    {
      question: 'What is a Nostr client?',
      answer:
        'A Nostr client is any app that reads and writes to the Nostr network. Clients are interchangeable: they all talk to the same open protocol, so you can use several at once or move between them freely while keeping one identity.',
    },
    {
      question: 'Do I need Bitcoin to use Nostr apps?',
      answer:
        'No. Nostr apps work without any Bitcoin. Many support zaps, small Bitcoin tips you can send with a tap, but zaps are optional and you never need them to use an app.',
    },
  ],
};

const SOAPBOX_APPS: Array<{
  name: string;
  category: string;
  description: string;
  href: string;
  icon: string | null;
  screenshot: string;
  alt: string;
  accent: string;
  readMore?: { href: string; label: string };
}> = [
  {
    name: 'Ditto',
    category: 'Social Feed',
    description:
      'A full social network on Nostr: posts, photos, articles, polls, and communities, with custom themes. The easiest all-in-one place to start.',
    href: 'https://ditto.pub',
    icon: '/assets/toolbox/ditto-icon.png',
    screenshot: '/assets/media-kit/screenshots/ditto/desktop-2.webp',
    alt: 'Ditto Nostr social client showing a profile with a custom theme, media grid, and feed',
    accent: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Divine',
    category: 'Short Video',
    description:
      'Short looping videos in the spirit of Vine. Watch, film, and share clips that no algorithm buries and no company can delete.',
    href: 'https://divine.video',
    icon: '/assets/communities/divine-icon.png',
    screenshot: '/assets/communities/divine-screenshot.png',
    alt: 'Divine short video Nostr app, the Vine successor, showing a vertical video feed',
    accent: 'from-amber-400 to-orange-500',
    readMore: {
      href: '/blog/what-is-nostr-divine',
      label: 'The protocol behind Divine',
    },
  },
  {
    name: 'Armada',
    category: 'Communities & Chat',
    description:
      'A Discord-style chat app with end-to-end encrypted communities, voice rooms, and private DMs, connected to the Buzz workspace app from Block.',
    href: 'https://armada.buzz',
    icon: '/assets/armada/icon.png',
    screenshot: '/assets/media-kit/screenshots/armada/desktop-2.webp',
    alt: 'Armada encrypted community chat on Nostr with channels, reactions, and a member list',
    accent: 'from-pink-500 to-purple-600',
    readMore: {
      href: '/blog/armada-buzz-communities',
      label: 'How Armada works with Buzz',
    },
  },
  {
    name: 'Shakespeare',
    category: 'Build Your Own',
    description:
      'Build your own Nostr app by chatting with AI. Describe what you want, preview it live, and deploy in minutes. No coding required.',
    href: 'https://shakespeare.diy',
    icon: '/assets/toolbox/shakespeare-icon.png',
    screenshot: '/assets/toolbox/shakespeare-screenshot.png',
    alt: 'Shakespeare AI app builder generating a Nostr app from a chat prompt',
    accent: 'from-yellow-400 to-blue-500',
  },
];

const COMPARISON: Array<{
  name: string;
  href: string;
  platforms: string;
  bestFor: string;
}> = [
  { name: 'Ditto', href: 'https://ditto.pub', platforms: 'Web, Android', bestFor: 'All-in-one starting point' },
  { name: 'Primal', href: 'https://primal.net', platforms: 'iOS, Android, Web', bestFor: 'Discovery and a built-in wallet' },
  { name: 'Damus', href: 'https://damus.io', platforms: 'iOS', bestFor: 'Clean, fast iPhone social' },
  { name: 'Amethyst', href: 'https://amethyst.social', platforms: 'Android', bestFor: 'Power users on Android' },
  { name: 'Nos', href: 'https://nos.social', platforms: 'iOS', bestFor: 'A calmer, human feed' },
  { name: 'Coracle', href: 'https://coracle.social', platforms: 'Web', bestFor: 'Control over relays and groups' },
  { name: 'Divine', href: 'https://divine.video', platforms: 'iOS, Android', bestFor: 'Short looping video' },
  { name: 'Olas', href: 'https://olas.app', platforms: 'iOS, Android, Web', bestFor: 'Photos and visual posts' },
  { name: 'zap.stream', href: 'https://zap.stream', platforms: 'Web, iOS, Android', bestFor: 'Live streaming' },
  { name: 'Fountain', href: 'https://fountain.fm', platforms: 'iOS, Android', bestFor: 'Podcasts' },
  { name: 'Wavlake', href: 'https://wavlake.com', platforms: 'Web, iOS, Android', bestFor: 'Music' },
  { name: 'Habla', href: 'https://habla.news', platforms: 'Web', bestFor: 'Long-form writing' },
  { name: 'Armada', href: 'https://armada.buzz', platforms: 'Web, iOS, Android', bestFor: 'Encrypted communities and chat' },
  { name: 'Shakespeare', href: 'https://shakespeare.diy', platforms: 'Web', bestFor: 'Building your own app' },
];

export default function BestNostrApps() {
  return (
    <article className="prose prose-lg max-w-none">
      <p>
        <strong>
          The best Nostr app depends on what you want to do, but they all share
          one thing: a single account that works across every app on the
          network.
        </strong>{' '}
        On Nostr there is no separate sign-up for your social feed, your photos,
        your music player, and your group chat. You create one identity once,
        and it logs you in everywhere. This guide covers the best Nostr apps in
        2026 by category and platform, from the flagship social clients to
        video, photos, music, and communities.
      </p>

      <p>
        New to the network? Start with our{' '}
        <a href="/blog/nostr101">Nostr 101 beginner guide</a>, which explains
        what Nostr is and walks you through creating an account in under a
        minute. If you already know the basics, keep reading for the apps.
      </p>

      <h2>What is a Nostr client?</h2>
      <p>
        A <strong>Nostr client</strong> is any app that reads from and writes to
        the Nostr network. Because Nostr is an open protocol rather than a
        company, clients are interchangeable. They all speak the same language,
        so you can run several at once or move between them whenever you like.
        Your posts, profile, and followers live on the network itself, so
        switching apps never means starting over.
      </p>
      <p>
        That is the practical reason there are so many Nostr apps: developers
        can build a specialized experience (short video, podcasts, group chat)
        without asking you to make a new account. Below are the apps worth
        knowing, grouped by what they are best at.
      </p>

      <h2>Best Nostr apps for getting started</h2>
      <p>
        If you just want to sign up and start posting, these two do everything
        and handle your keys for you:
      </p>
      <ul>
        <li>
          <strong>
            <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
              Ditto
            </a>
          </strong>{' '}
          (web, Android): A full social platform with posts, photos, articles,
          polls, communities, and custom themes. It runs in any browser, so
          there is nothing to install to try it.
        </li>
        <li>
          <strong>
            <a href="https://primal.net" target="_blank" rel="noopener noreferrer">
              Primal
            </a>
          </strong>{' '}
          (iOS, Android, web): A polished general client with strong content
          discovery and a built-in Bitcoin wallet, so sending and receiving zaps
          works out of the box.
        </li>
      </ul>

      <h2>Best Nostr apps for iOS</h2>
      <p>
        On iPhone and iPad, these are the most popular and actively maintained
        Nostr clients:
      </p>
      <ul>
        <li>
          <strong>
            <a href="https://damus.io" target="_blank" rel="noopener noreferrer">
              Damus
            </a>
          </strong>
          : The most well-known iOS Nostr app. Clean, fast, and focused on the
          core social experience.
        </li>
        <li>
          <strong>
            <a href="https://primal.net" target="_blank" rel="noopener noreferrer">
              Primal
            </a>
          </strong>
          : Discovery-focused, with a wallet built in for zaps.
        </li>
        <li>
          <strong>
            <a href="https://nos.social" target="_blank" rel="noopener noreferrer">
              Nos
            </a>
          </strong>
          : A social client built for humans, not algorithms, with a calmer
          feed.
        </li>
        <li>
          <strong>
            <a href="https://nostur.com" target="_blank" rel="noopener noreferrer">
              Nostur
            </a>
          </strong>
          : A native iOS and macOS client with a wide range of features.
        </li>
      </ul>

      <h2>Best Nostr apps for Android</h2>
      <p>Android has some of the deepest Nostr apps available:</p>
      <ul>
        <li>
          <strong>
            <a href="https://amethyst.social" target="_blank" rel="noopener noreferrer">
              Amethyst
            </a>
          </strong>
          : The most feature-rich Nostr client on any platform. It supports
          nearly every content type on the network.
        </li>
        <li>
          <strong>
            <a href="https://primal.net" target="_blank" rel="noopener noreferrer">
              Primal
            </a>
          </strong>{' '}
          and{' '}
          <strong>
            <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
              Ditto
            </a>
          </strong>
          : Both offer strong Android apps if you want something simpler than
          Amethyst.
        </li>
        <li>
          <strong>
            <a href="https://github.com/greenart7c3/Amber" target="_blank" rel="noopener noreferrer">
              Amber
            </a>
          </strong>
          : A signer app, not a client. It holds your secret key and logs you in
          to other Nostr apps so you never paste your key into them directly. If
          you use several Android apps, install this too. Learn more about{' '}
          <a href="/blog/managing-nostr-keys">managing your Nostr keys</a>.
        </li>
      </ul>

      <h2>Best Nostr web clients</h2>
      <p>
        Prefer to stay in the browser? These need no install and work on any
        device:
      </p>
      <ul>
        <li>
          <strong>
            <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
              Ditto
            </a>
          </strong>{' '}
          and{' '}
          <strong>
            <a href="https://primal.net" target="_blank" rel="noopener noreferrer">
              Primal
            </a>
          </strong>
          : Both have complete web apps, not just mobile.
        </li>
        <li>
          <strong>
            <a href="https://coracle.social" target="_blank" rel="noopener noreferrer">
              Coracle
            </a>
          </strong>
          : Built for people who want fine control over relays and private
          groups.
        </li>
        <li>
          <strong>
            <a href="https://nostrudel.ninja" target="_blank" rel="noopener noreferrer">
              noStrudel
            </a>
          </strong>
          : A power-user client that exposes almost everything Nostr can do.
        </li>
        <li>
          <strong>
            <a href="https://jumble.social" target="_blank" rel="noopener noreferrer">
              Jumble
            </a>
          </strong>
          : Focused on browsing individual relay feeds, a nice way to find niche
          communities.
        </li>
      </ul>

      <h2>Best Nostr apps for video, photos, and media</h2>
      <p>
        Nostr is not only a Twitter alternative. The same account publishes
        every kind of media:
      </p>
      <ul>
        <li>
          <strong>Short video:</strong>{' '}
          <a href="https://divine.video" target="_blank" rel="noopener noreferrer">
            Divine
          </a>
          , looping clips in the spirit of Vine.{' '}
          <a href="/blog/what-is-nostr-divine">Read how Divine uses Nostr.</a>
        </li>
        <li>
          <strong>Photos:</strong>{' '}
          <a href="https://olas.app" target="_blank" rel="noopener noreferrer">
            Olas
          </a>
          , an Instagram-style app for visual posts.
        </li>
        <li>
          <strong>Live streaming:</strong>{' '}
          <a href="https://zap.stream" target="_blank" rel="noopener noreferrer">
            zap.stream
          </a>
          , where viewers can zap you Bitcoin as you stream.
        </li>
        <li>
          <strong>Podcasts:</strong>{' '}
          <a href="https://fountain.fm" target="_blank" rel="noopener noreferrer">
            Fountain
          </a>
          , a podcast app with value-for-value payments.
        </li>
        <li>
          <strong>Music:</strong>{' '}
          <a href="https://wavlake.com" target="_blank" rel="noopener noreferrer">
            Wavlake
          </a>
          , where artists publish tracks and get paid directly.
        </li>
      </ul>

      <h2>Best Nostr apps for writing and long-form content</h2>
      <ul>
        <li>
          <strong>
            <a href="https://habla.news" target="_blank" rel="noopener noreferrer">
              Habla
            </a>
          </strong>
          : A clean blogging client for long-form articles on Nostr.
        </li>
        <li>
          <strong>
            <a href="https://yakihonne.com" target="_blank" rel="noopener noreferrer">
              YakiHonne
            </a>
          </strong>
          : A cross-platform app that combines long-form writing with social
          posting.
        </li>
      </ul>

      <h2>Best Nostr apps for communities and chat</h2>
      <ul>
        <li>
          <strong>
            <a href="https://armada.buzz" target="_blank" rel="noopener noreferrer">
              Armada
            </a>
          </strong>
          : A Discord-style app with end-to-end encrypted communities, voice
          rooms, and private DMs.{' '}
          <a href="/blog/armada-open-source-encrypted-discord-alternative">
            See why it is an open source Discord alternative.
          </a>
        </li>
        <li>
          <strong>
            <a href="https://flotilla.social" target="_blank" rel="noopener noreferrer">
              Flotilla
            </a>
          </strong>{' '}
          and{' '}
          <strong>
            <a href="https://chachi.chat" target="_blank" rel="noopener noreferrer">
              Chachi
            </a>
          </strong>
          : Group chat clients built around relay-based communities.
        </li>
        <li>
          <strong>
            <a href="https://0xchat.com" target="_blank" rel="noopener noreferrer">
              0xchat
            </a>
          </strong>
          : Private, encrypted one-to-one messaging.
        </li>
      </ul>

      <h2>Build your own Nostr app</h2>
      <p>
        Because Nostr is open, you are not limited to the apps other people
        build. With{' '}
        <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
          Shakespeare
        </a>{' '}
        you can describe the app you want in plain language, watch it build
        live, and deploy it, all without writing code. It runs on{' '}
        <a href="/mkstack">MKStack</a>, the same open source framework used to
        build the apps above.
      </p>

      <h2>Nostr apps compared</h2>
      <p>A quick reference for the apps in this guide:</p>
      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-3 text-left">App</th>
              <th className="border border-gray-300 px-4 py-3 text-left">
                Platforms
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left">
                Best for
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON.map((row) => (
              <tr key={row.name}>
                <td className="border border-gray-300 px-4 py-3 font-semibold">
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-600 no-underline hover:underline dark:text-violet-400"
                  >
                    {row.name}
                  </a>
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  {row.platforms}
                </td>
                <td className="border border-gray-300 px-4 py-3">
                  {row.bestFor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Nostr apps built by Soapbox</h2>
      <p>
        We build several of the apps in this guide. Each one is open source and
        shares the same Nostr account as every other app on the network:
      </p>
      <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">
        {SOAPBOX_APPS.map(
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
                <h3 className="mt-1 text-xl font-bold text-foreground">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline hover:underline"
                  >
                    {name}
                  </a>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
                {readMore && (
                  <a
                    href={readMore.href}
                    className="mt-3 text-sm font-semibold text-violet-600 no-underline hover:underline dark:text-violet-400"
                  >
                    {readMore.label} &rarr;
                  </a>
                )}
              </div>
            </div>
          )
        )}
      </div>
      <p>
        Browse the rest of our production apps in the{' '}
        <a href="/toolbox">Soapbox Toolbox</a>, see what we are experimenting
        with in the <a href="/toybox">Toybox</a>, or discover the wider
        community at{' '}
        <a href="https://nostrapps.com" target="_blank" rel="noopener noreferrer">
          Nostrapps.com
        </a>
        .
      </p>

      <h2>How to start using a Nostr app</h2>
      <p>
        Picking an app is the hard part. Signing up takes under a minute and
        needs no email or phone number:
      </p>
      <ol>
        <li>Open any app above. Ditto in your browser is the quickest.</li>
        <li>
          Tap sign up. The app generates your key pair: an npub (your public
          identity) and an nsec (your secret key).
        </li>
        <li>
          Save your nsec somewhere safe, like a password manager. It cannot be
          reset.
        </li>
        <li>
          Add a name and picture, follow a few people, and post. The same keys
          log you in to every other app on this list.
        </li>
      </ol>
      <p>
        For a full walkthrough with screenshots, see our{' '}
        <a href="/blog/nostr101">Nostr 101 guide</a>.
      </p>

      <hr className="my-12 border-gray-200" />

      <FAQSection
        items={[
          {
            question: 'What is the best Nostr app for beginners?',
            defaultOpen: true,
            answer: (
              <p>
                <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
                  Ditto
                </a>{' '}
                and{' '}
                <a href="https://primal.net" target="_blank" rel="noopener noreferrer">
                  Primal
                </a>{' '}
                are the easiest places to start. Both create your account for
                you, work in a normal web browser, and cover the main social
                features without any setup. You can switch to another app later
                without losing your account.
              </p>
            ),
          },
          {
            question: 'What are the best Nostr apps for iOS?',
            answer: (
              <p>
                <a href="https://damus.io" target="_blank" rel="noopener noreferrer">
                  Damus
                </a>{' '}
                and{' '}
                <a href="https://primal.net" target="_blank" rel="noopener noreferrer">
                  Primal
                </a>{' '}
                are the two most popular Nostr apps on iPhone. Damus is a clean,
                fast social client, and Primal adds discovery features and a
                built-in Bitcoin wallet. Nos and Nostur are also solid iOS
                options.
              </p>
            ),
          },
          {
            question: 'What are the best Nostr apps for Android?',
            answer: (
              <p>
                <a href="https://amethyst.social" target="_blank" rel="noopener noreferrer">
                  Amethyst
                </a>{' '}
                is the most feature-rich Nostr client on Android. Primal and
                Ditto also have strong Android apps. Most people also install
                Amber, a separate signer app that logs you in to other Nostr
                apps without pasting your secret key.
              </p>
            ),
          },
          {
            question: 'Are Nostr apps free?',
            answer: (
              <p>
                Yes. Nearly every Nostr app is free to download and use, and most
                are open source. There are no ads and no subscription required to
                post, follow people, or read your feed.
              </p>
            ),
          },
          {
            question: 'Can I use the same account across different Nostr apps?',
            answer: (
              <p>
                Yes, and this is the main advantage of Nostr. Your account is a
                key pair that you control, not a login tied to one company. The
                same keys work in Damus, Primal, Amethyst, Ditto, and every other
                Nostr app, and your profile and followers come with you.
              </p>
            ),
          },
          {
            question: 'What is a Nostr client?',
            answer: (
              <p>
                A Nostr client is any app that reads and writes to the Nostr
                network. Clients are interchangeable: they all talk to the same
                open protocol, so you can use several at once or move between them
                freely while keeping one identity.
              </p>
            ),
          },
          {
            question: 'Do I need Bitcoin to use Nostr apps?',
            answer: (
              <p>
                No. Nostr apps work without any Bitcoin. Many support zaps, small
                Bitcoin tips you can send with a tap, but zaps are optional and
                you never need them to use an app. See our{' '}
                <a href="/blog/zapping-101">Zapping 101 guide</a> for how they
                work.
              </p>
            ),
          },
        ]}
      />

      <h2>Related reading</h2>
      <ul>
        <li>
          <a href="/blog/nostr101">
            Nostr 101: A Beginner Guide to the Decentralized Social Network
          </a>
        </li>
        <li>
          <a href="/blog/comparing-protocols">
            Nostr vs. Fediverse vs. Bluesky: Comparing Decentralized Protocols
          </a>
        </li>
        <li>
          <a href="/blog/managing-nostr-keys">
            How to Protect Your Nostr Keys
          </a>
        </li>
        <li>
          <a href="/blog/zapping-101">
            Zapping 101: How to Send and Receive Bitcoin Tips on Nostr
          </a>
        </li>
      </ul>

      <div className="not-prose my-8 rounded-2xl bg-gradient-to-br from-violet-50 to-purple-100 p-6 sm:p-8 dark:from-violet-950/40 dark:to-purple-950/30">
        <h3 className="mb-3 text-2xl font-bold text-foreground">
          New to Nostr? Start with Ditto
        </h3>
        <p className="mb-6 leading-relaxed text-foreground/80">
          <strong>Ditto</strong> is the easiest way to try Nostr. It runs in your
          browser, creates your account for you, and gives you posts, photos,
          articles, and communities in one place, all with a single login that
          works across every app in this guide.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://ditto.pub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg bg-violet-600 px-6 py-3 text-base font-semibold text-white no-underline transition-colors duration-150 hover:bg-violet-700 active:bg-violet-800"
          >
            Try Ditto <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href="/blog/nostr101"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-violet-600 bg-white px-6 py-3 text-base font-semibold text-violet-600 no-underline transition-colors duration-150 hover:bg-violet-600 hover:text-white active:bg-violet-700"
          >
            Read Nostr 101
          </a>
        </div>
      </div>
    </article>
  );
}
