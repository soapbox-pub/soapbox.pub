/**
 * /armada — Armada marketing landing page on Soapbox.pub.
 *
 * A standalone marketing site for Armada (armada.buzz), built on a
 * "90% show / 10% tell" rule: every claim is demonstrated with a
 * working, animated mockup instead of described in copy.
 *
 *  - Hero: an animated channel window — typing indicators, messages
 *    popping in, reactions landing, people joining voice.
 *  - App showcase: a full three-pane app window (server rail, channel
 *    sidebar, chat, member list) standing in for a screenshot.
 *  - Privacy demo: the same conversation as members see it vs. the
 *    sealed noise everyone else sees.
 *  - Unstoppable demo: a side-by-side loop where a centralized chat
 *    app gets suspended while the Armada community shrugs off a dead
 *    relay.
 *  - Mini demos: Bluetooth mesh, Google-free notifications, key-based
 *    login — each drawn, not described.
 *  - A compact early-software honesty strip (v0.x, what's live where).
 *
 * Visual identity: Armada's terminal aesthetic — deep aubergine-black
 * (#100b15, the app's dark theme color), hot pink (≈ Tailwind
 * `pink-500`), cyan accents (`cyan-400`), monospace type with a
 * shell-prompt motif ("$ … _"). Mockup users are real Team Soapbox
 * avatars (round profile pictures) so every chat feels inhabited.
 */

import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Ban,
  BellRing,
  Bluetooth,
  CheckCircle2,
  ChevronDown,
  Crown,
  Hammer,
  Hash,
  Headphones,
  KeyRound,
  LockKeyhole,
  MessagesSquare,
  Mic,
  Plus,
  Search,
  Server,
  Smile,
  Users,
  Volume2,
} from 'lucide-react';
import { FaGitlab } from 'react-icons/fa6';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useSEO } from '@/hooks/useSEO';

/** Armada app icon (pink sail over cyan water). */
const ARMADA_ICON = '/assets/armada/icon.png';

/** Dedicated 1200x630 OG/Twitter share image for the /armada landing page. */
const ARMADA_OG_IMAGE = '/assets/armada/og.png';

/** The Armada web app. */
const ARMADA_URL = 'https://armada.buzz';

/** Armada on Zapstore, the decentralized Android app store built on Nostr. */
const ZAPSTORE_URL = 'https://zapstore.dev/apps/buzz.armada.app';

/** Zapstore icon used on download buttons. */
const ZAPSTORE_ICON = '/assets/icons/zapstore.png';

/**
 * Invite link into the official Soapbox community on Armada. The URL
 * fragment carries the unlock token (per CORD-05, invite keys live in an
 * encrypted bundle on relays; the link itself is just a locator + token),
 * so it never reaches any server.
 */
const COMMUNITY_INVITE_URL =
  'https://armada.buzz/invite/naddr1qvzqqqyzz5pzq8qv4z5xpmcpssv6v28dzf00ruep4x63uk787sp6set7jzpnzudfqqqqn4hakc#BAACAwSramExdyfria50iKwvzRpK';

/** Concord protocol spec repository. */
const CONCORD_URL = 'https://github.com/concord-protocol/concord';

/** Armada source code. */
const GITLAB_URL = 'https://gitlab.com/soapbox-pub/armada';

/** Armada's dark theme background color. */
const INK = '#100b15';

/**
 * FAQ copy, rendered in FaqSection and mirrored verbatim into the FAQPage
 * JSON-LD block so the visible text and the schema never drift. Written
 * around real search queries.
 */
const ARMADA_FAQ: Array<{
  question: string;
  answer: string;
  link?: { href: string; label: string };
}> = [
  {
    question: 'Is Armada a good Discord alternative?',
    answer:
      'If you have used Discord, you already know the layout: communities, channels, threads, voice, and moderation. The difference is underneath. Every community is end-to-end encrypted, your account is a key instead of an email, and communities live on many relays at once, so no company can ban you or delete your server.',
    link: {
      href: '/blog/armada-open-source-encrypted-discord-alternative',
      label: 'Read the full comparison',
    },
  },
  {
    question: 'Is Armada free?',
    answer:
      'Yes. Armada is free and open source under the AGPL-3.0 license, with no ads and no paid tier.',
  },
  {
    question: 'Can I be banned from Armada?',
    answer:
      'There is no company account to ban. Community owners moderate their own spaces, but no one can delete your identity or take your community down across all of its relays.',
  },
  {
    question: 'Do I need a phone number or email to sign up?',
    answer:
      'No. Signing up generates a cryptographic key, and that key is your whole account, on Armada and across every other Nostr app.',
    link: {
      href: '/blog/managing-nostr-keys',
      label: 'How to store your key',
    },
  },
  {
    question: 'Does Armada work on iPhone?',
    answer:
      'There is no iOS app yet. The web app at armada.buzz works on iPhone, and native apps exist for Android, Linux, and Windows.',
  },
  {
    question: 'Is Armada ready to use?',
    answer:
      'Armada is in open beta ahead of its v1.0 release. Communities, encrypted DMs, and voice and video calls all work today, with new releases landing almost daily. Expect occasional rough edges while it matures.',
  },
];

/** Slightly lifted surface color used for app-window mockups. */
const SURFACE = '#181021';

// ───────────────────────────────────────────────────────────────────────────
// Mockup cast — real Team Soapbox profile pictures so every demo user
// has a face. Referenced across all the mockups on this page.
// ───────────────────────────────────────────────────────────────────────────

interface Person {
  name: string;
  avatar: string;
}

const PEOPLE = {
  alex: { name: 'Alex', avatar: '/assets/avatars/alex.png' },
  mk: { name: 'M. K.', avatar: '/assets/avatars/mk.jpg' },
  chad: { name: 'Chad', avatar: '/assets/avatars/chad-current.png' },
  derek: { name: 'Derek', avatar: '/assets/avatars/derek.jpg' },
  morgan: { name: 'Morgan', avatar: '/assets/avatars/morgan.jpg' },
  lemon: { name: 'Lemon', avatar: '/assets/avatars/lemon.png' },
} satisfies Record<string, Person>;

/** Round profile picture, the only avatar shape used in mockups. */
function ProfilePic({
  person,
  className = 'size-8',
}: {
  person: Person;
  className?: string;
}) {
  return (
    <img
      src={person.avatar}
      alt={`${person.name}'s profile picture`}
      className={`${className} shrink-0 rounded-full object-cover`}
      loading="lazy"
    />
  );
}

/** Ticks a counter on an interval — the engine behind every looping demo. */
function useTicker(intervalMs: number, modulo: number): number {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % modulo), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, modulo]);
  return tick;
}

export default function Armada() {
  useSEO({
    title: 'Armada: The Open Source, Encrypted Discord Alternative | Soapbox',
    description:
      'A free, open source, end-to-end encrypted Discord alternative: servers, channels, voice, and moderation, with no company in the middle. Now in open beta.',
    image: ARMADA_OG_IMAGE,
    type: 'website',
    keywords:
      'armada, armada.buzz, discord alternative, open source discord alternative, encrypted discord alternative, free discord alternative, banned from discord, buzz communities, block buzz app, buzz client, concord protocol, encrypted group chat, end-to-end encryption, nostr, nostr communities, nip-29, private communities, decentralized chat, voice chat, bluetooth mesh, bitchat, soapbox, self-hosted discord, e2ee communities',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Armada',
      description:
        'A Discord-style chat app built on Nostr with end-to-end encrypted communities powered by the Concord protocol. Servers, channels, voice, and moderation, with no company and no central server. Built by Team Soapbox.',
      applicationCategory: 'CommunicationApplication',
      operatingSystem: 'Web, Android, Linux, Windows',
      softwareVersion: '0.37',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      url: ARMADA_URL,
      sameAs: [GITLAB_URL, CONCORD_URL],
      publisher: {
        '@type': 'Organization',
        name: 'Soapbox',
        url: 'https://soapbox.pub',
      },
    },
    additionalStructuredData: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: ARMADA_FAQ.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <HeroSection />
      <AppShowcaseSection />
      <PrivacySection />
      <UnstoppableSection />
      <MiniFeaturesSection />
      <BuzzCompatSection />
      <SelfHostSection />
      <CommunityCtaSection />
      <FaqSection />
      <FinalCtaSection />

      <Footer />
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Hero
// ───────────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ backgroundColor: INK }}
    >
      {/* Pink + cyan glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 20% 0%, rgba(236, 72, 153, 0.14), transparent 70%), radial-gradient(ellipse 50% 40% at 85% 100%, rgba(34, 211, 238, 0.10), transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <p className="font-mono text-sm sm:text-base text-pink-400 mb-6">
              <span className="text-cyan-400">$</span> private group chat on
              open infrastructure<span className="animate-pulse">_</span>
            </p>

            <h1 className="font-mono font-bold tracking-tight leading-[1.05] text-white text-4xl sm:text-5xl lg:text-6xl mb-8">
              Armada: encrypted,
              <br />
              open-source,
              <br />
              <span className="text-pink-500">Discord alternative.</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
              Servers, channels, threads, voice, and moderation: everything
              you expect from a chat app, fully end-to-end encrypted. Nobody
              can read your messages, and nobody can shut your community
              down.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold h-12 px-6 text-base shadow-lg shadow-pink-500/25"
              >
                <a href={ARMADA_URL} target="_blank" rel="noopener noreferrer">
                  Open Armada
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white font-medium h-12 px-6 text-base"
              >
                <a href={ZAPSTORE_URL} target="_blank" rel="noopener noreferrer">
                  <img
                    src={ZAPSTORE_ICON}
                    alt=""
                    className="mr-2 size-5 rounded"
                  />
                  Download on Zapstore
                </a>
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-cyan-400" />
                <span>End-to-end encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-cyan-400" />
                <span>No central server</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-cyan-400" />
                <span>Free &amp; open source</span>
              </div>
            </div>
          </div>

          {/* Right: animated chat mockup */}
          <div className="lg:col-span-5">
            <HeroChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/** One scripted line of the hero chat demo. */
interface DemoMessage {
  person: Person;
  time: string;
  text: string;
  reaction?: string;
}

const HERO_MESSAGES: DemoMessage[] = [
  {
    person: PEOPLE.alex,
    time: '09:42',
    text: 'new build is out — custom themes are live 🎨',
    reaction: '🎉 4',
  },
  {
    person: PEOPLE.chad,
    time: '09:43',
    text: 'installing right now',
  },
  {
    person: PEOPLE.mk,
    time: '09:45',
    text: 'voice in 5? I want to demo something',
  },
];

/**
 * Frame-by-frame script for the hero chat: which messages are visible,
 * who is "typing", and how many people are in the voice channel. The
 * component steps through frames on a timer and loops forever.
 */
const HERO_FRAMES: Array<{
  visible: number;
  typing?: Person;
  voice: Person[];
}> = [
  { visible: 1, voice: [PEOPLE.derek, PEOPLE.lemon] },
  { visible: 1, typing: PEOPLE.chad, voice: [PEOPLE.derek, PEOPLE.lemon] },
  { visible: 2, voice: [PEOPLE.derek, PEOPLE.lemon] },
  { visible: 2, typing: PEOPLE.mk, voice: [PEOPLE.derek, PEOPLE.lemon] },
  { visible: 3, voice: [PEOPLE.derek, PEOPLE.lemon] },
  { visible: 3, voice: [PEOPLE.derek, PEOPLE.lemon, PEOPLE.mk] },
  { visible: 3, voice: [PEOPLE.derek, PEOPLE.lemon, PEOPLE.mk] },
];

/**
 * A live-feeling Armada channel window: typing indicators appear,
 * messages pop in, a reaction lands, and someone joins voice — on a
 * loop. Discord-familiar chrome so a visitor instantly recognizes the
 * product category before reading a word of copy.
 */
function HeroChatMockup() {
  const frame = useTicker(1400, HERO_FRAMES.length);
  const { visible, typing, voice } = HERO_FRAMES[frame];
  const messages = HERO_MESSAGES.slice(0, visible);

  return (
    <div className="relative max-w-md mx-auto">
      {/* Pink glow behind the card */}
      <div
        className="absolute inset-0 -m-8 rounded-3xl opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(236, 72, 153, 0.35), transparent 65%)',
        }}
      />

      <Card
        className="relative border-white/10 overflow-hidden shadow-2xl rotate-[1.5deg] hover:rotate-0 transition-transform duration-500"
        style={{ backgroundColor: SURFACE }}
      >
        {/* Channel header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src={ARMADA_ICON}
              alt="Armada app icon"
              className="size-6 rounded-md shrink-0"
            />
            <span className="font-mono text-sm text-white font-semibold truncate">
              #general
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-[10px] font-semibold uppercase tracking-wider">
            <LockKeyhole className="size-3" />
            <span>Encrypted</span>
          </div>
        </div>

        <CardContent className="p-4 text-white">
          {/* Message timeline — fixed height so the loop doesn't reflow the page */}
          <div className="h-56 flex flex-col justify-end gap-4 overflow-hidden">
            {messages.map((m) => (
              <div
                key={m.person.name}
                className="flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300"
              >
                <ProfilePic person={m.person} />
                <div className="min-w-0">
                  <p className="text-xs mb-0.5">
                    <span className="font-semibold text-pink-300">
                      {m.person.name}
                    </span>{' '}
                    <span className="text-gray-500">{m.time}</span>
                  </p>
                  <p className="text-sm text-gray-200 leading-snug">{m.text}</p>
                  {m.reaction && visible >= 2 && (
                    <span className="inline-flex items-center mt-1.5 px-2 py-0.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-200 text-xs animate-in fade-in zoom-in-75 duration-300">
                      {m.reaction}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex items-center gap-2 text-xs text-gray-400 animate-in fade-in duration-200">
                <ProfilePic person={typing} className="size-4" />
                <span className="flex gap-0.5">
                  <span className="size-1.5 rounded-full bg-pink-400 animate-bounce" />
                  <span className="size-1.5 rounded-full bg-pink-400 animate-bounce [animation-delay:120ms]" />
                  <span className="size-1.5 rounded-full bg-pink-400 animate-bounce [animation-delay:240ms]" />
                </span>
                <span>
                  <span className="text-gray-300 font-medium">
                    {typing.name}
                  </span>{' '}
                  is typing…
                </span>
              </div>
            )}
          </div>

          {/* Voice bar */}
          <div className="mt-4 flex items-center justify-between rounded-lg bg-cyan-400/10 border border-cyan-400/25 px-3 py-2.5">
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-medium">
              <Headphones className="size-4" />
              <span>Voice · {voice.length} in call</span>
            </div>
            <div className="flex -space-x-2">
              {voice.map((p, i) => (
                <img
                  key={p.name}
                  src={p.avatar}
                  alt={`${p.name}'s profile picture`}
                  className={`size-6 rounded-full object-cover border-2 animate-in zoom-in-50 duration-300 ${
                    i === 0 ? 'ring-2 ring-cyan-400/60' : ''
                  }`}
                  style={{ borderColor: SURFACE }}
                />
              ))}
            </div>
          </div>

          {/* Composer */}
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-white/[0.05] border border-white/10 px-3 py-2.5">
            <span className="font-mono text-sm text-gray-500">
              Message #general
            </span>
            <span className="font-mono text-pink-400 animate-pulse">_</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: App showcase — a full three-pane app window standing in for
// a screenshot: server rail, channel sidebar with a live voice channel,
// chat with threads and reactions, and a member list with roles.
// ───────────────────────────────────────────────────────────────────────────

/** Messages shown in the big app-window mockup. */
const SHOWCASE_MESSAGES: Array<DemoMessage & { thread?: string }> = [
  {
    person: PEOPLE.chad,
    time: 'Today at 2:14 PM',
    text: 'movie night friday? I have the projector 🍿',
    reaction: '🔥 3',
    thread: '4 replies',
  },
  {
    person: PEOPLE.alex,
    time: 'Today at 2:15 PM',
    text: "I'm in. Someone bring snacks",
  },
  {
    person: PEOPLE.morgan,
    time: 'Today at 2:17 PM',
    text: 'snacks handled 🫡',
    reaction: '🫡 2',
  },
  {
    person: PEOPLE.derek,
    time: 'Today at 2:18 PM',
    text: 'screen share works on my end, we can vote on the movie live',
  },
];

const SHOWCASE_FRAMES: Array<{ visible: number; typing?: Person }> = [
  { visible: 3 },
  { visible: 3, typing: PEOPLE.derek },
  { visible: 4 },
  { visible: 4 },
  { visible: 4 },
];

function AppShowcaseSection() {
  return (
    <section className="text-white py-20 md:py-28" style={{ backgroundColor: INK }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Everything you'd expect.
          </h2>
          <p className="text-lg text-gray-400">
            If you've used Discord, you already know how to use Armada.
          </p>
        </div>

        <AppWindowMockup />

        {/* Feature chips — labels for what the mockup just showed */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
          {[
            'Voice & screen share',
            'Threads',
            'Reactions & custom emoji',
            'Roles & moderation',
            'Direct messages',
            'Events & RSVPs',
            'Ctrl+K quick switcher',
            'Markdown & code blocks',
          ].map((chip) => (
            <span
              key={chip}
              className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-gray-300 text-sm"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppWindowMockup() {
  const frame = useTicker(1500, SHOWCASE_FRAMES.length);
  const { visible, typing } = SHOWCASE_FRAMES[frame];
  const messages = SHOWCASE_MESSAGES.slice(0, visible);

  const channels = ['general', 'design', 'memes', 'dev'];
  const members: Array<{ person: Person; role?: 'owner' | 'admin' }> = [
    { person: PEOPLE.alex, role: 'owner' },
    { person: PEOPLE.mk, role: 'admin' },
    { person: PEOPLE.chad },
    { person: PEOPLE.derek },
    { person: PEOPLE.morgan },
    { person: PEOPLE.lemon },
  ];

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Glow */}
      <div
        className="absolute inset-0 -m-6 rounded-3xl opacity-40 blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.25), rgba(34, 211, 238, 0.12) 60%, transparent 75%)',
        }}
      />

      <div
        className="relative rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex h-[430px]"
        style={{ backgroundColor: SURFACE }}
      >
        {/* Community rail */}
        <div
          className="hidden sm:flex w-[4.25rem] shrink-0 flex-col items-center gap-3 py-4 border-r border-white/10"
          style={{ backgroundColor: INK }}
        >
          <div className="relative">
            <span className="absolute -left-3 top-1/2 -translate-y-1/2 h-8 w-1 rounded-r-full bg-pink-500" />
            <img
              src={ARMADA_ICON}
              alt="Team Soapbox community icon"
              className="size-11 rounded-2xl"
            />
          </div>
          {['🎮', '🎸', '📚'].map((emoji, i) => (
            <div
              key={emoji}
              className={`size-11 rounded-full flex items-center justify-center text-lg bg-gradient-to-br ${
                ['from-violet-600 to-indigo-700', 'from-rose-500 to-red-700', 'from-emerald-500 to-teal-700'][i]
              } opacity-80 hover:opacity-100 hover:rounded-2xl transition-all`}
            >
              {emoji}
            </div>
          ))}
          <div className="size-11 rounded-full border border-dashed border-white/25 flex items-center justify-center text-gray-500">
            <Plus className="size-5" />
          </div>
        </div>

        {/* Channel sidebar */}
        <div className="hidden md:flex w-52 shrink-0 flex-col border-r border-white/10 bg-white/[0.02]">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <span className="font-semibold text-sm text-white">
              Team Soapbox
            </span>
            <ChevronDown className="size-4 text-gray-500" />
          </div>

          <div className="flex-1 px-2 py-3 space-y-0.5 text-sm">
            <p className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-500">
              Text
            </p>
            {channels.map((ch) => (
              <div
                key={ch}
                className={`flex items-center gap-1.5 px-2 py-1 rounded ${
                  ch === 'general'
                    ? 'bg-pink-500/15 text-white font-medium'
                    : 'text-gray-400'
                }`}
              >
                <Hash className="size-3.5 shrink-0" />
                <span>{ch}</span>
                {ch === 'memes' && (
                  <span className="ml-auto size-1.5 rounded-full bg-pink-400" />
                )}
              </div>
            ))}

            <p className="px-2 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-500">
              Voice
            </p>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded text-gray-300">
              <Volume2 className="size-3.5 shrink-0 text-cyan-400" />
              <span>hangout</span>
            </div>
            {/* Live voice roster nested under the channel */}
            {[PEOPLE.derek, PEOPLE.lemon].map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 pl-7 pr-2 py-0.5 text-xs text-gray-400"
              >
                <img
                  src={p.avatar}
                  alt={`${p.name}'s profile picture`}
                  className="w-[18px] h-[18px] shrink-0 rounded-full object-cover ring-1 ring-cyan-400/70"
                />
                <span>{p.name}</span>
              </div>
            ))}
          </div>

          {/* Self bar */}
          <div className="flex items-center gap-2 px-3 py-2.5 border-t border-white/10 bg-black/20">
            <ProfilePic person={PEOPLE.mk} className="size-7" />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-white truncate">
                {PEOPLE.mk.name}
              </p>
              <p className="text-[10px] text-emerald-400">online</p>
            </div>
            <Mic className="size-3.5 text-gray-500" />
            <Headphones className="size-3.5 text-gray-500" />
          </div>
        </div>

        {/* Chat pane */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            <Hash className="size-4 text-gray-500" />
            <span className="font-semibold text-sm text-white">general</span>
            <span className="hidden sm:block text-xs text-gray-500 truncate">
              — plans, chaos, and everything else
            </span>
            <div className="ml-auto flex items-center gap-3 text-gray-500">
              <Search className="size-4" />
              <Users className="size-4" />
            </div>
          </div>

          <div className="flex-1 px-4 py-3 flex flex-col justify-end gap-3.5 overflow-hidden">
            {messages.map((m) => (
              <div
                key={m.person.name + m.time}
                className="flex items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300"
              >
                <ProfilePic person={m.person} className="size-9" />
                <div className="min-w-0">
                  <p className="text-xs mb-0.5">
                    <span className="font-semibold text-pink-300">
                      {m.person.name}
                    </span>{' '}
                    <span className="text-gray-500">{m.time}</span>
                  </p>
                  <p className="text-sm text-gray-200 leading-snug">{m.text}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    {m.reaction && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-200 text-xs">
                        {m.reaction}
                      </span>
                    )}
                    {m.thread && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-cyan-300">
                        <MessagesSquare className="size-3.5" />
                        {m.thread}
                        <span className="flex -space-x-1.5">
                          {[PEOPLE.mk, PEOPLE.lemon].map((p) => (
                            <img
                              key={p.name}
                              src={p.avatar}
                              alt={`${p.name}'s profile picture`}
                              className="size-4 rounded-full object-cover border"
                              style={{ borderColor: SURFACE }}
                            />
                          ))}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {typing && (
              <div className="flex items-center gap-2 text-xs text-gray-400 animate-in fade-in duration-200">
                <ProfilePic person={typing} className="size-4" />
                <span className="flex gap-0.5">
                  <span className="size-1.5 rounded-full bg-pink-400 animate-bounce" />
                  <span className="size-1.5 rounded-full bg-pink-400 animate-bounce [animation-delay:120ms]" />
                  <span className="size-1.5 rounded-full bg-pink-400 animate-bounce [animation-delay:240ms]" />
                </span>
                <span>
                  <span className="text-gray-300 font-medium">
                    {typing.name}
                  </span>{' '}
                  is typing…
                </span>
              </div>
            )}
          </div>

          <div className="px-4 pb-4">
            <div className="flex items-center gap-2.5 rounded-lg bg-white/[0.05] border border-white/10 px-3 py-2.5 text-gray-500">
              <Plus className="size-4 shrink-0" />
              <span className="font-mono text-sm truncate">
                Message #general
              </span>
              <span className="font-mono text-pink-400 animate-pulse">_</span>
              <Smile className="size-4 shrink-0 ml-auto" />
            </div>
          </div>
        </div>

        {/* Member list */}
        <div className="hidden lg:block w-44 shrink-0 border-l border-white/10 bg-white/[0.02] px-3 py-3">
          <p className="px-1 pb-2 text-[10px] font-semibold uppercase tracking-widest text-gray-500">
            Online — {members.length}
          </p>
          <div className="space-y-1.5">
            {members.map(({ person, role }) => (
              <div key={person.name} className="flex items-center gap-2 px-1 py-1">
                <div className="relative">
                  <ProfilePic person={person} className="size-7" />
                  <span
                    className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-400 border-2"
                    style={{ borderColor: SURFACE }}
                  />
                </div>
                <span className="text-xs text-gray-300 truncate">
                  {person.name}
                </span>
                {role === 'owner' && (
                  <Crown className="size-3 text-amber-400 shrink-0" />
                )}
                {role === 'admin' && (
                  <CheckCircle2 className="size-3 text-cyan-400 shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Privacy — the same conversation, seen with and without the key.
// ───────────────────────────────────────────────────────────────────────────

/** Alphabet used to render fake ciphertext. */
const NOISE_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

function noiseString(length: number): string {
  let out = '';
  for (let i = 0; i < length; i++) {
    out += NOISE_CHARS[Math.floor(Math.random() * NOISE_CHARS.length)];
  }
  return out;
}

const PRIVACY_CHAT: DemoMessage[] = [
  {
    person: PEOPLE.chad,
    time: '',
    text: 'surprise party for Alex is a go 🎂',
  },
  { person: PEOPLE.derek, time: '', text: 'his place, saturday, 7pm' },
  { person: PEOPLE.lemon, time: '', text: "I'll handle the cake 🤫" },
];

function PrivacySection() {
  // Re-render on a timer so the ciphertext side visibly churns.
  useTicker(350, 1000);

  return (
    <section className="bg-[#faf8fb] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Nobody can read your chats,
            <br className="hidden sm:block" /> not even us.
          </h2>
          <p className="text-lg text-gray-600">
            Messages are locked on your device before they're sent. Here's the
            same conversation with the key, and without it.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {/* Lock between the panes (desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 size-14 rounded-full bg-pink-500 text-white items-center justify-center shadow-xl shadow-pink-500/30 border-4 border-[#faf8fb]">
            <LockKeyhole className="size-6" />
          </div>

          {/* Members' view */}
          <div className="rounded-2xl border border-pink-200 bg-white overflow-hidden shadow-sm">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 bg-pink-50/50">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-pink-600">
                You and your friends see
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-pink-500">
                <KeyRound className="size-3" />
                key holders
              </span>
            </div>
            <div className="p-4 space-y-3">
              {PRIVACY_CHAT.map((m) => (
                <div key={m.person.name} className="flex items-start gap-2.5">
                  <ProfilePic person={m.person} className="size-8" />
                  <div className="px-3 py-2 rounded-2xl rounded-tl-sm bg-gray-100 text-sm text-gray-800 leading-snug">
                    <span className="block text-[11px] font-semibold text-pink-600 mb-0.5">
                      {m.person.name}
                    </span>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Everyone else's view */}
          <div
            className="rounded-2xl border border-gray-800 overflow-hidden shadow-sm"
            style={{ backgroundColor: INK }}
          >
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.03]">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                Everyone else sees
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                <Server className="size-3" />
                relays · ISPs · anyone
              </span>
            </div>
            <div className="p-4 space-y-3">
              {PRIVACY_CHAT.map((m, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  {/* No profile picture out here either: sender identity is sealed too */}
                  <div className="size-8 shrink-0 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-gray-500 text-xs font-bold">
                    ?
                  </div>
                  <div className="px-3 py-2 rounded-2xl rounded-tl-sm bg-white/[0.06] font-mono text-xs text-gray-500 leading-snug break-all select-none">
                    <span className="block text-[11px] font-semibold text-gray-600 mb-0.5">
                      {noiseString(10)}
                    </span>
                    {noiseString(m.text.length + 14)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center mt-10 max-w-2xl mx-auto text-gray-500 text-sm leading-relaxed">
          Who sent it, which community it belongs to, even the community's
          name: all sealed. Encryption follows the open{' '}
          <a
            href={CONCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-pink-600 hover:text-pink-700 underline decoration-pink-300 hover:decoration-pink-500 underline-offset-2"
          >
            Concord protocol
          </a>
          , so anyone can verify it or build their own client.
        </p>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Unstoppable — a looping side-by-side where a centralized app
// suspends the community while the Armada one shrugs off a dead relay.
// ───────────────────────────────────────────────────────────────────────────

const UNSTOPPABLE_CYCLE = 8;

function UnstoppableSection() {
  const tick = useTicker(1100, UNSTOPPABLE_CYCLE);
  const failed = tick >= 3; // the moment things go wrong on both sides
  const armadaExtra = Math.max(0, Math.min(tick - 3, 2)); // messages after the failure

  const armadaMessages: DemoMessage[] = [
    { person: PEOPLE.alex, time: '', text: 'anyone else seeing relay-2 down?' },
    ...(armadaExtra >= 1
      ? [{ person: PEOPLE.lemon, time: '', text: 'nope, everything still works 👋' }]
      : []),
    ...(armadaExtra >= 2
      ? [{ person: PEOPLE.chad, time: '', text: "didn't even notice lol" }]
      : []),
  ];

  return (
    <section className="text-white py-20 md:py-28" style={{ backgroundColor: INK }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            A community no one can take away.
          </h2>
          <p className="text-lg text-gray-400">
            Years of memories and friendships shouldn't live or die on one
            company's servers. Watch what happens when things go wrong:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto items-stretch">
          {/* A typical chat app */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                A typical chat app
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                <Server className="size-3" />1 company server
              </span>
            </div>

            <div className="relative flex-1 p-4 space-y-3 min-h-[230px]">
              <div
                className={`space-y-3 transition-all duration-500 ${
                  failed ? 'opacity-25 grayscale blur-[1px]' : ''
                }`}
              >
                {[
                  { person: PEOPLE.chad, text: '3 years of chat history in here 💜' },
                  { person: PEOPLE.morgan, text: 'best community on the internet' },
                ].map((m) => (
                  <div key={m.person.name} className="flex items-start gap-2.5">
                    <ProfilePic person={m.person} className="size-8" />
                    <div className="px-3 py-2 rounded-2xl rounded-tl-sm bg-white/[0.06] text-sm text-gray-300 leading-snug">
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Suspension overlay */}
              {failed && (
                <div className="absolute inset-0 flex items-center justify-center p-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-full max-w-[260px] rounded-xl border border-red-500/40 bg-[#1c0f14] p-5 text-center shadow-2xl">
                    <div className="mx-auto size-10 rounded-full bg-red-500/15 border border-red-500/40 flex items-center justify-center mb-3">
                      <Ban className="size-5 text-red-400" />
                    </div>
                    <p className="font-semibold text-white text-sm mb-1">
                      Server suspended
                    </p>
                    <p className="text-xs text-gray-400 leading-snug">
                      This community was removed for violating our Terms of
                      Service. All content has been deleted.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Armada */}
          <div className="rounded-2xl border border-pink-500/25 overflow-hidden flex flex-col" style={{ backgroundColor: SURFACE }}>
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.03]">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-pink-300">
                Armada
              </span>
              {/* Relay health row */}
              <span className="flex items-center gap-2">
                {[1, 2, 3].map((n) => {
                  const dead = failed && n === 2;
                  return (
                    <span
                      key={n}
                      className={`flex items-center gap-1 text-[10px] font-mono ${
                        dead ? 'text-red-400 line-through' : 'text-emerald-400'
                      }`}
                    >
                      <span
                        className={`size-1.5 rounded-full ${
                          dead ? 'bg-red-500' : 'bg-emerald-400 animate-pulse'
                        }`}
                      />
                      relay-{n}
                    </span>
                  );
                })}
              </span>
            </div>

            <div className="flex-1 p-4 min-h-[230px] flex flex-col justify-start gap-3">
              {armadaMessages.map((m) => (
                <div
                  key={m.person.name}
                  className="flex items-start gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300"
                >
                  <ProfilePic person={m.person} className="size-8" />
                  <div className="px-3 py-2 rounded-2xl rounded-tl-sm bg-white/[0.06] text-sm text-gray-200 leading-snug">
                    {m.text}
                  </div>
                </div>
              ))}
              {failed && (
                <p className="mt-auto text-center text-[11px] font-mono text-cyan-300 animate-in fade-in duration-500">
                  rerouted around the dead relay — nothing lost
                </p>
              )}
            </div>
          </div>
        </div>

        <p className="text-center mt-10 max-w-2xl mx-auto text-gray-500 text-sm leading-relaxed">
          There's no company account to ban and no headquarters to pressure.
          Your community lives on many independent relays at once. Lose one,
          lose ten, and the conversation keeps going.
        </p>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Mini demos — mesh chat, Google-free notifications, key login —
// plus a compact honesty strip about how early the software is.
// ───────────────────────────────────────────────────────────────────────────

function MiniFeaturesSection() {
  return (
    <section className="bg-[#faf8fb] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Things no other chat app can do.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          <MeshDemoCard />
          <NotificationDemoCard />
          <KeyLoginDemoCard />
        </div>

        {/* Early-software honesty strip */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-white px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="size-10 shrink-0 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center">
            <Hammer className="size-5 text-amber-600" />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-900">
              Armada is early software
            </span>
            : version 0.x, with new releases landing almost daily. Live today
            on <span className="font-medium text-gray-800">web, Android, Linux, and Windows</span>;
            no iOS app yet (the web app works there in the meantime).{' '}
            <a
              href={`${GITLAB_URL}/-/blob/main/CHANGELOG.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-pink-600 hover:text-pink-700 underline decoration-pink-300 hover:decoration-pink-500 underline-offset-2"
            >
              Follow the changelog
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

/** Shared card shell for the three mini demos. */
function MiniDemoCard({
  visual,
  badge,
  title,
  body,
}: {
  visual: ReactNode;
  badge?: string;
  title: string;
  body: string;
}) {
  return (
    <Card className="overflow-hidden border-gray-200 bg-white shadow-sm flex flex-col">
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: INK }}
      >
        {visual}
        {badge && (
          <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-[10px] font-semibold uppercase tracking-wider">
            {badge}
          </span>
        )}
      </div>
      <CardContent className="p-6 flex-1">
        <h3 className="font-display font-bold text-gray-900 text-lg mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{body}</p>
      </CardContent>
    </Card>
  );
}

/** Two phones passing a message over Bluetooth, no internet in sight. */
function MeshDemoCard() {
  const tick = useTicker(1200, 4);
  const rightHasMessage = tick >= 2;

  const phone = (person: Person, showBubble: boolean, bubble: string) => (
    <div
      className="w-[4.5rem] h-32 rounded-xl border-2 border-white/20 flex flex-col items-center pt-3 gap-2"
      style={{ backgroundColor: SURFACE }}
    >
      <ProfilePic person={person} className="size-7" />
      <div className="h-9 flex items-start">
        {showBubble && (
          <span className="px-2 py-1 rounded-lg bg-pink-500/20 border border-pink-500/40 text-pink-200 text-[9px] leading-tight animate-in fade-in zoom-in-75 duration-300">
            {bubble}
          </span>
        )}
      </div>
      {/* "No internet" status */}
      <span className="mt-auto mb-2 text-[8px] font-mono text-gray-500">
        no signal ✕
      </span>
    </div>
  );

  return (
    <MiniDemoCard
      visual={
        <div className="flex items-center gap-3">
          {phone(PEOPLE.derek, true, 'you there?')}
          {/* Bluetooth link */}
          <div className="relative flex items-center justify-center size-10">
            <span className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping" />
            <span className="absolute inset-1.5 rounded-full bg-cyan-400/20 animate-ping [animation-delay:300ms]" />
            <Bluetooth className="relative size-5 text-cyan-300" />
          </div>
          {phone(PEOPLE.lemon, rightHasMessage, 'yep 👋')}
        </div>
      }
      badge="Android · offline"
      title="Chat with zero internet"
      body="Phones nearby relay messages to each other over Bluetooth: at a festival, on a plane, in a blackout, or anywhere else the internet can't reach. Compatible with bitchat."
    />
  );
}

/** An Android notification popping in — no Google in the delivery path. */
function NotificationDemoCard() {
  const cycle = useTicker(2600, 2);

  return (
    <MiniDemoCard
      visual={
        <div className="w-full max-w-[250px] px-4">
          {/* Status bar hint */}
          <div className="flex justify-between font-mono text-[9px] text-gray-600 mb-3 px-1">
            <span>21:36</span>
            <span>▮▮▮ 82%</span>
          </div>
          <div
            key={cycle}
            className="rounded-xl border border-white/15 bg-white/[0.07] backdrop-blur p-3 flex items-start gap-2.5 shadow-xl animate-in slide-in-from-top-3 fade-in duration-500"
          >
            <ProfilePic person={PEOPLE.chad} className="size-8" />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-xs font-semibold text-white truncate">
                  Chad · #general
                </p>
                <span className="text-[9px] text-gray-500 shrink-0">now</span>
              </div>
              <p className="text-xs text-gray-300 truncate">
                movie night is ON 🍿
              </p>
            </div>
            <img
              src={ARMADA_ICON}
              alt="Armada app icon"
              className="size-4 rounded shrink-0 mt-0.5"
            />
          </div>
          <p className="text-center font-mono text-[9px] text-gray-600 mt-3">
            delivered without Google <BellRing className="inline size-2.5" />
          </p>
        </div>
      }
      badge="Android"
      title="Notifications, no Google"
      body="Pings arrive straight from your community, even with the app closed. Google and third-party push services never learn who messages you."
    />
  );
}

/** Login card: your account is a key, not an email and password. */
function KeyLoginDemoCard() {
  return (
    <MiniDemoCard
      visual={
        <div className="w-full max-w-[230px] px-4">
          <div
            className="rounded-xl border border-white/15 p-4 shadow-xl"
            style={{ backgroundColor: SURFACE }}
          >
            <p className="text-xs font-semibold text-white mb-3">Log in</p>
            <div className="flex items-center gap-2 rounded-lg bg-black/40 border border-pink-500/30 px-3 py-2 mb-3">
              <KeyRound className="size-3.5 text-pink-400 shrink-0" />
              <span className="font-mono text-[10px] text-gray-400 truncate">
                nsec1•••••••••••••••
              </span>
            </div>
            <div className="rounded-lg bg-pink-500 text-white text-center text-xs font-semibold py-2">
              Unlock
            </div>
            <div className="flex justify-center gap-3 mt-3 font-mono text-[9px] text-gray-500">
              <span className="line-through">email</span>
              <span className="line-through">phone</span>
              <span className="line-through">signup form</span>
            </div>
          </div>
        </div>
      }
      title="Your key is your account."
      body="Your identity is a key that only you hold, with no email or phone number to hand over. The same key works across every Nostr app."
    />
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Self-hosting (optional) — for teams that want the whole stack
// on their own hardware.
// ───────────────────────────────────────────────────────────────────────────

/** The command typed in the self-hosting terminal demo. */
const TERMINAL_CMD = './start.sh';

/** Output lines revealed after the command finishes "typing". */
const TERMINAL_LINES = [
  { text: '✔ relay      ws://localhost:5577', color: 'text-emerald-400' },
  { text: '✔ voice      ws://localhost:7880', color: 'text-emerald-400' },
  { text: '✔ client     http://localhost:8080', color: 'text-emerald-400' },
  { text: '✔ all services up — invite your team', color: 'text-cyan-300' },
];

// ───────────────────────────────────────────────────────────────────────────
// Section: Buzz compatibility
// ───────────────────────────────────────────────────────────────────────────

function BuzzCompatSection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: '#d9e00b' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p
              className="font-mono text-xs font-semibold tracking-widest uppercase mb-3"
              style={{ color: 'rgba(16, 11, 21, 0.6)' }}
            >
              New · Armada v0.37
            </p>
            <h2
              className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-4"
              style={{ color: INK }}
            >
              Works with Buzz communities.
            </h2>
            <p
              className="leading-relaxed mb-6"
              style={{ color: 'rgba(16, 11, 21, 0.8)' }}
            >
              <a
                href="https://github.com/block/buzz"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2"
                style={{ color: INK }}
              >
                Buzz
              </a>
              , Block&apos;s open-source team communication app, only ships on
              desktop. Armada connects to the same workspaces from the web and
              Android: chat channels, threaded forums, the Projects workspace,
              and a mentions Inbox, right alongside your other communities and
              DMs.
            </p>
            <a
              href="/blog/armada-buzz-communities"
              className="inline-flex items-center rounded-full px-6 py-3 font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: INK, color: '#d9e00b' }}
            >
              Read the announcement
            </a>
          </div>
          <img
            src="/assets/blog/armada-buzz-communities/buzz-agents.png"
            alt="A Buzz community open in Armada with chat, a thread panel, and member roles"
            className="w-full rounded-xl shadow-lg"
            style={{ border: '1px solid rgba(16, 11, 21, 0.2)' }}
          />
        </div>
      </div>
    </section>
  );
}

function SelfHostSection() {
  return (
    <section className="text-white py-20 md:py-28" style={{ backgroundColor: INK }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="font-mono text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3">
              Optional · for teams
            </p>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl tracking-tight mb-4">
              Or run the whole thing yourself.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Communities are serverless by default, but if you want chat as
              internal infrastructure, Armada ships a complete open-source
              server stack. One command brings up the relay, voice server, and
              client on your own hardware.
            </p>
            <ul className="space-y-2.5">
              {[
                'Channels, roles, moderation, and voice out of the box',
                'Runs air-gapped on an internal network with no outside dependency',
                'Standard Nostr (NIP-29) underneath: works with other clients too',
              ].map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5">
                  <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-snug">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <TerminalDemo />
        </div>
      </div>
    </section>
  );
}

/**
 * A looping terminal mockup that types `./start.sh` and brings the full
 * self-hosted stack up, line by line.
 */
function TerminalDemo() {
  const tick = useTicker(120, 60);

  const typed = TERMINAL_CMD.slice(0, Math.min(tick, TERMINAL_CMD.length));
  const afterCmd = tick - TERMINAL_CMD.length - 3;
  const linesShown =
    afterCmd > 0 ? Math.min(Math.ceil(afterCmd / 5), TERMINAL_LINES.length) : 0;

  return (
    <div className="rounded-xl overflow-hidden border border-white/15 shadow-2xl bg-black/50">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-white/[0.04] border-b border-white/10">
        <span className="size-2.5 rounded-full bg-rose-500/80" />
        <span className="size-2.5 rounded-full bg-amber-400/80" />
        <span className="size-2.5 rounded-full bg-emerald-500/80" />
        <span className="ml-2 font-mono text-[10px] text-gray-500">
          armada/infra
        </span>
      </div>

      <div className="p-5 font-mono text-sm leading-relaxed min-h-[10rem]">
        <p className="text-gray-300">
          <span className="text-cyan-400">$</span> {typed}
          {typed.length < TERMINAL_CMD.length && (
            <span className="text-pink-400 animate-pulse">_</span>
          )}
        </p>
        {TERMINAL_LINES.slice(0, linesShown).map((line) => (
          <p
            key={line.text}
            className={`${line.color} animate-in fade-in slide-in-from-bottom-1 duration-200`}
          >
            {line.text}
          </p>
        ))}
        {linesShown === TERMINAL_LINES.length && (
          <p className="text-gray-300">
            <span className="text-cyan-400">$</span>{' '}
            <span className="text-pink-400 animate-pulse">_</span>
          </p>
        )}
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Join the Soapbox community on Armada
// ───────────────────────────────────────────────────────────────────────────

function CommunityCtaSection() {
  return (
    <section className="bg-[#f5f1f6] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-gray-200 bg-white shadow-lg">
          <div className="grid md:grid-cols-5">
            {/* Left: dark brand panel */}
            <div
              className="md:col-span-2 p-8 sm:p-10 flex flex-col items-center justify-center text-center gap-4"
              style={{ backgroundColor: INK }}
            >
              <img
                src={ARMADA_ICON}
                alt="Armada logo"
                className="size-20 rounded-2xl shadow-lg shadow-pink-500/20"
              />
              {/* The team, in miniature */}
              <div className="flex -space-x-2">
                {[PEOPLE.alex, PEOPLE.mk, PEOPLE.chad, PEOPLE.derek, PEOPLE.morgan].map(
                  (p) => (
                    <img
                      key={p.name}
                      src={p.avatar}
                      alt={`${p.name}'s profile picture`}
                      className="size-8 rounded-full object-cover border-2"
                      style={{ borderColor: INK }}
                    />
                  ),
                )}
              </div>
              <p className="font-mono text-sm text-pink-400">
                <span className="text-cyan-400">$</span> come say hi
                <span className="animate-pulse">_</span>
              </p>
            </div>

            {/* Right: invite copy */}
            <CardContent className="md:col-span-3 p-8 sm:p-10">
              <p className="font-mono text-xs font-semibold tracking-widest uppercase text-pink-600 mb-3">
                We're in there daily
              </p>
              <h2 className="font-display font-bold text-gray-900 text-2xl sm:text-3xl mb-3">
                Join the Soapbox community on Armada.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Team Soapbox hangs out in an end-to-end encrypted Armada
                community: product chat, dev talk, voice hangs, and early
                word on everything we ship. The invite link carries its unlock
                key in the URL fragment, so it never touches a server.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-pink-500 hover:bg-pink-600 text-white font-semibold"
                >
                  <a
                    href={COMMUNITY_INVITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessagesSquare className="mr-2 size-4" />
                    Accept the invite
                  </a>
                </Button>
                <span className="text-sm text-gray-500">
                  Free · works in any browser
                </span>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: FAQ — the one deliberately text-first section on a page of
// mockups. Real prose for readers arriving from search, mirrored into the
// FAQPage JSON-LD block emitted by useSEO.
// ───────────────────────────────────────────────────────────────────────────

function FaqSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl tracking-tight mb-12 text-center">
          Frequently asked questions
        </h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {ARMADA_FAQ.map((item) => (
            <div key={item.question}>
              <h3 className="font-semibold text-gray-900 mb-2">
                {item.question}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.answer}
                {item.link && (
                  <>
                    {' '}
                    <Link
                      to={item.link.href}
                      className="font-medium text-pink-600 hover:text-pink-700 underline decoration-pink-300 hover:decoration-pink-500 underline-offset-2"
                    >
                      {item.link.label}
                    </Link>
                    .
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Final CTA
// ───────────────────────────────────────────────────────────────────────────

function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#4c0d33] via-[#9d174d] to-[#ec4899] text-white py-20 md:py-28">
      {/* Cyan accent glow */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none opacity-30"
        style={{
          background:
            'linear-gradient(to top, rgba(34, 211, 238, 0.35), transparent)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-mono text-xs font-semibold tracking-widest uppercase text-white/80 mb-4 flex items-center justify-center gap-2">
          <LockKeyhole className="size-4" />
          Free forever
        </p>
        <h2 className="font-display font-bold text-white text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6 leading-[0.95]">
          Chat like nobody's watching.
        </h2>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Armada is open source, built by Team Soapbox, and free for everyone,
          everywhere. There is no company behind your account and no server
          anyone can seize.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button
            asChild
            size="lg"
            className="bg-white text-pink-700 hover:bg-pink-50 font-bold h-14 px-8 text-lg shadow-2xl"
          >
            <a href={ARMADA_URL} target="_blank" rel="noopener noreferrer">
              Open Armada
              <ArrowRight className="ml-2 size-5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white font-medium h-14 px-7 text-base"
          >
            <a
              href={COMMUNITY_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our community
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white font-medium h-14 px-7 text-base"
          >
            <a href={GITLAB_URL} target="_blank" rel="noopener noreferrer">
              <FaGitlab className="mr-2 size-4" />
              Source code
            </a>
          </Button>
        </div>
        <p className="text-sm text-white/70">
          Built by{' '}
          <Link to="/about" className="underline hover:text-white">
            Team Soapbox
          </Link>{' '}
          ·{' '}
          <a
            href={GITLAB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Open source on GitLab
          </a>{' '}
          ·{' '}
          <a
            href={CONCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Concord protocol specs
          </a>{' '}
          ·{' '}
          <Link
            to="/blog/armada-open-source-encrypted-discord-alternative"
            className="underline hover:text-white"
          >
            Why switch from Discord
          </Link>
        </p>
      </div>
    </section>
  );
}
