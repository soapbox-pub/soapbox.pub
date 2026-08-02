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
 * Visual identity: matched to the Armada app's own default theme
 * (src/themes.ts in the armada repo) — deep aubergine-black #15121c,
 * rose-magenta #f5479e, phosphor-cyan #25f4f4, gilt-cream #efe9dc,
 * monospace type with a shell-prompt motif ("$ … _"), and the ASCII
 * ocean from the app's welcome screen closing the page. Mockup users
 * are real Team Soapbox avatars so every chat feels inhabited.
 */

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeftRight,
  ArrowRight,
  Ban,
  BellRing,
  Bluetooth,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Code,
  Crown,
  Hash,
  Headphones,
  KeyRound,
  LockKeyhole,
  MessagesSquare,
  Mic,
  MonitorUp,
  Plus,
  Search,
  Server,
  ShieldCheck,
  Smile,
  Users,
  Volume2,
} from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { EmailSignupForm } from '@/components/EmailSignupForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useSEO } from '@/hooks/useSEO';
import { getAllPosts, formatDate } from '@/lib/blog/utils';

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

/** Concord protocol spec repository. */
const CONCORD_URL = 'https://github.com/concord-protocol/concord';

/**
 * Hosted setup portal for the Discord <-> Armada bridge. A Discord admin
 * connects their server to an Armada community here, and messages flow
 * both ways with each member's name and avatar intact.
 */
const BRIDGE_URL = 'https://bridge.armada.buzz/';

/** Discord's brand color, used only to make the Discord side recognizable. */
const DISCORD_BLURPLE = '#5865f2';

/** Armada source code (canonical ngit repo, browsable on gitworkshop). */
const SOURCE_URL = 'https://gitworkshop.dev/soapbox.pub/armada';

/** ditto-relay source, the relay Armada communities run on. */
const RELAY_REPO_URL = 'https://gitlab.com/soapbox-pub/ditto-relay';

/** Other Nostr apps Armada interoperates with, one identity across all. */
const NOSTR_APPS: Array<{
  name: string;
  url: string;
  desc: string;
  accent: string;
  shot: string;
  logo: string;
}> = [
  {
    name: 'Buzz',
    url: 'https://github.com/block/buzz',
    desc: "Block's open-source team chat with AI agents. Armada joins Buzz communities directly.",
    accent: '#d9e00b',
    shot: '/assets/armada/interop/buzz-shot-new.webp',
    logo: '/assets/armada/interop/buzz-logo.jpg',
  },
  {
    name: 'Flotilla',
    url: 'https://flotilla.social',
    desc: "Coracle's Nostr communities client, with rooms, events, and moderation.",
    accent: '#8b7cf6',
    shot: '/assets/armada/interop/flotilla-shot-new.jpg',
    logo: '/assets/armada/interop/flotilla-logo.png',
  },
  {
    name: 'Vector',
    url: 'https://vectorapp.io',
    desc: 'A private, end-to-end encrypted Nostr direct-messaging app.',
    accent: '#4ade80',
    shot: '/assets/armada/interop/vector-shot.png',
    logo: '/assets/armada/interop/vector-logo.png',
  },
  {
    name: 'Obelisk',
    url: 'https://obelisk.ar',
    desc: 'A Discord-style group chat that runs entirely on Nostr, no backend.',
    accent: '#a3e635',
    shot: '/assets/armada/interop/obelisk-shot.png',
    logo: '/assets/armada/interop/obelisk-logo.png',
  },
];

/** Armada's dark theme background color (hsl 260 22% 9%, the app default). */
const INK = '#15121c';

/** Armada's rose-magenta primary (hsl 330 90% 62%). */
const ROSE = '#f5479e';

/** Armada's phosphor-cyan accent (hsl 180 90% 55%). */
const CYAN = '#25f4f4';

/** Armada's gilt-cream foreground text (hsl 42 38% 90%). */
const CREAM = '#efe9dc';

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

/** Slightly lifted surface color used for app-window mockups (app card color). */
const SURFACE = '#1a1622';

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
      sameAs: [SOURCE_URL, CONCORD_URL],
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
      <IosAlertSection />
      <BridgeSection />
      <InteropSection />
      <SelfHostSection />
      <LatestPostsSection />
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
      {/* Rose + cyan glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 20% 0%, ${ROSE}24, transparent 70%), radial-gradient(ellipse 50% 40% at 85% 100%, ${CYAN}1a, transparent 70%)`,
        }}
      />

      {/* The app's own ASCII ocean, lapping at the bottom of the hero */}
      <AsciiSea />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: copy, on a glass panel so it stays readable over the sea */}
          <div className="lg:col-span-7 rounded-2xl bg-[#15121c]/80 backdrop-blur-sm ring-1 ring-white/10 p-6 sm:p-8 lg:p-10">
            <p className="font-mono text-sm sm:text-base mb-6" style={{ color: ROSE }}>
              <span className="text-cyan-400">$</span> now in open beta ·
              v1.0 incoming<span className="animate-pulse">_</span>
            </p>

            <h1
              className="font-mono font-bold lowercase tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl mb-8"
              style={{ color: CREAM, textShadow: `0 0 18px ${ROSE}55` }}
            >
              armada: encrypted,
              <br />
              open-source,
              <br />
              <span style={{ color: ROSE }}>discord alternative.</span>
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
                className="border border-white/15 text-white hover:text-white font-medium h-12 px-6 text-base"
                style={{ backgroundColor: SURFACE }}
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
    text: 'new build is out, custom themes are live 🎨',
    reaction: '🎉 4',
  },
  {
    person: PEOPLE.chad,
    time: '09:43',
    text: 'installing now, looks incredible',
  },
  {
    person: PEOPLE.morgan,
    time: '09:44',
    text: 'the ocean theme is 🔥',
    reaction: '⚓ 3',
  },
  {
    person: PEOPLE.mk,
    time: '09:45',
    text: 'voice in 5? want to demo something',
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
  { visible: 2, voice: [PEOPLE.derek, PEOPLE.lemon] },
  { visible: 2, typing: PEOPLE.chad, voice: [PEOPLE.derek, PEOPLE.lemon] },
  { visible: 3, voice: [PEOPLE.derek, PEOPLE.lemon] },
  { visible: 3, typing: PEOPLE.mk, voice: [PEOPLE.derek, PEOPLE.lemon] },
  { visible: 4, voice: [PEOPLE.derek, PEOPLE.lemon] },
  { visible: 4, voice: [PEOPLE.derek, PEOPLE.lemon, PEOPLE.mk] },
  { visible: 4, voice: [PEOPLE.derek, PEOPLE.lemon, PEOPLE.mk] },
];

/**
 * A live-feeling Armada channel rendered inside a phone. Typing indicators
 * appear, messages pop in with reactions and a thread, and people join
 * voice, on a loop. The mobile frame signals "chat app" instantly.
 */
function HeroChatMockup() {
  const frame = useTicker(1400, HERO_FRAMES.length);
  const { visible, typing, voice } = HERO_FRAMES[frame];
  const messages = HERO_MESSAGES.slice(0, visible);

  return (
    <div className="relative mx-auto w-[290px] sm:w-[320px]">
      {/* Rose + cyan glow behind the phone */}
      <div
        className="absolute inset-0 -m-10 rounded-full opacity-50 blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${ROSE}55, ${CYAN}22 55%, transparent 75%)`,
        }}
      />

      {/* Phone body */}
      <div className="relative rounded-[2.75rem] border-[11px] border-[#0c0a11] bg-[#0c0a11] shadow-2xl ring-1 ring-white/10 rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 h-6 w-32 rounded-b-2xl bg-[#0c0a11]" />

        {/* Screen */}
        <div
          className="relative rounded-[2rem] overflow-hidden flex flex-col h-[600px]"
          style={{ backgroundColor: SURFACE }}
        >
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-white text-[11px] font-medium">
            <span>9:45</span>
            <div className="flex items-center gap-1 text-gray-300">
              <span className="font-mono text-[10px]">5G</span>
              <span className="inline-block h-2.5 w-4 rounded-[3px] border border-white/50 relative">
                <span className="absolute inset-0.5 right-1 rounded-[1px] bg-white/80" />
              </span>
            </div>
          </div>

          {/* Channel header */}
          <div className="flex items-center gap-2.5 px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
            <ChevronDown className="size-4 rotate-90 text-gray-400 shrink-0" />
            <img src={ARMADA_ICON} alt="Armada" className="size-7 rounded-lg shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="font-mono text-sm text-white font-semibold leading-none">#general</p>
              <p className="text-[10px] text-gray-500 mt-0.5">Team Soapbox · 128 online</p>
            </div>
            <span className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-[9px] font-semibold uppercase tracking-wider">
              <LockKeyhole className="size-2.5" />
              e2ee
            </span>
          </div>

          {/* Messages */}
          <div className="flex-1 min-h-0 flex flex-col justify-end gap-3.5 px-3.5 py-3 overflow-hidden">
            {messages.map((m, i) => (
              <div
                key={m.person.name}
                className="flex items-start gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300"
              >
                <ProfilePic person={m.person} className="size-8" />
                <div className="min-w-0">
                  <p className="text-[11px] mb-0.5">
                    <span className="font-semibold text-pink-300">{m.person.name}</span>{' '}
                    <span className="text-gray-500">{m.time}</span>
                  </p>
                  <p className="text-[13px] text-gray-100 leading-snug">{m.text}</p>
                  {m.reaction && (
                    <span className="inline-flex items-center mt-1.5 px-2 py-0.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-200 text-[11px] animate-in fade-in zoom-in-75 duration-300">
                      {m.reaction}
                    </span>
                  )}
                  {/* Thread affordance under the first message */}
                  {i === 0 && (
                    <span className="mt-1.5 flex items-center gap-1.5 text-[11px] text-cyan-300">
                      <span className="flex -space-x-1.5">
                        {[PEOPLE.chad, PEOPLE.derek].map((p) => (
                          <img
                            key={p.name}
                            src={p.avatar}
                            alt=""
                            className="size-4 rounded-full object-cover border-2"
                            style={{ borderColor: SURFACE }}
                          />
                        ))}
                      </span>
                      2 replies
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex items-center gap-2 text-[11px] text-gray-400 animate-in fade-in duration-200">
                <ProfilePic person={typing} className="size-4" />
                <span className="flex gap-0.5">
                  <span className="size-1.5 rounded-full bg-pink-400 animate-bounce" />
                  <span className="size-1.5 rounded-full bg-pink-400 animate-bounce [animation-delay:120ms]" />
                  <span className="size-1.5 rounded-full bg-pink-400 animate-bounce [animation-delay:240ms]" />
                </span>
                <span>
                  <span className="text-gray-300 font-medium">{typing.name}</span> is typing…
                </span>
              </div>
            )}
          </div>

          {/* Voice bar */}
          <div className="mx-3.5 mb-2 flex items-center justify-between rounded-xl bg-cyan-400/10 border border-cyan-400/25 px-3 py-2">
            <div className="flex items-center gap-2 text-cyan-300 text-[11px] font-medium">
              <Headphones className="size-4" />
              <span>hangout · {voice.length} in call</span>
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
          <div className="mx-3.5 mb-2 flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/10 px-3.5 py-2.5">
            <Plus className="size-4 text-gray-500 shrink-0" />
            <span className="font-mono text-[13px] text-gray-500 flex-1">Message #general</span>
            <span className="font-mono text-pink-400 animate-pulse">_</span>
            <Smile className="size-4 text-gray-500 shrink-0" />
          </div>

          {/* Bottom tab bar */}
          <div className="flex items-center justify-around px-6 py-2.5 border-t border-white/10 bg-black/30">
            <MessagesSquare className="size-5 text-pink-400" />
            <BellRing className="size-5 text-gray-500" />
            <Users className="size-5 text-gray-500" />
            <ProfilePic person={PEOPLE.mk} className="size-5" />
          </div>
          {/* Home indicator */}
          <div className="flex justify-center pb-2 pt-0.5">
            <span className="h-1 w-28 rounded-full bg-white/25" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: App showcase — a full three-pane app window standing in for
// a screenshot: server rail, channel sidebar with a live voice channel,
// chat with threads and reactions, and a member list with roles.
// ───────────────────────────────────────────────────────────────────────────


function AppShowcaseSection() {
  return (
    <section className="text-white py-20 md:py-28" style={{ backgroundColor: SURFACE }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Voice and video calls, custom emojis, GIFs, and more.
          </h2>
        </div>

        {/* Animated mock window — temporarily disabled in favor of a real
            desktop screenshot so we can compare. To restore, render
            <AppWindowMockup /> here in place of the image below. */}

        <div className="relative max-w-5xl mx-auto">
          <div
            className="absolute inset-0 -m-6 rounded-3xl opacity-40 blur-3xl pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at center, ${ROSE}40, ${CYAN}1f 60%, transparent 75%)`,
            }}
          />
          <img
            src="/assets/media-kit/screenshots/armada/desktop-1.webp"
            alt="Armada desktop app: an encrypted community with channels, chat, threads, a voice message, bots, and a member list with roles"
            loading="lazy"
            className="relative w-full rounded-2xl border border-white/10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

/** The eight features the demo tours, in the order the spotlight visits them. */
const SHOWCASE_FEATURES = [
  'Markdown & code blocks',
  'Reactions & custom emoji',
  'Threads',
  'Events & RSVPs',
  'Custom themes',
  'Roles & moderation',
  'Ctrl+K quick switcher',
  'Voice & screen share',
  'Direct messages',
] as const;

type ShowcaseFeature = (typeof SHOWCASE_FEATURES)[number];

/**
 * Theme presets echoing the app's built-in themes (src/themes.ts in the
 * armada repo): a background and two accents each. The themes scene cycles
 * through them to demonstrate live theme switching.
 */
const THEME_PRESETS: Array<{
  name: string;
  bg: string;
  accent: string;
  accent2: string;
  /** Degrees to hue-rotate the mockup so it recolors like this theme. */
  hue: number;
}> = [
  { name: 'armada', bg: '#15121c', accent: '#f5479e', accent2: '#25f4f4', hue: 0 },
  { name: 'ember', bg: '#1c1310', accent: '#f97316', accent2: '#fbbf24', hue: 57 },
  { name: 'ocean', bg: '#0f1a24', accent: '#38bdf8', accent2: '#22d3ee', hue: -129 },
  { name: 'forest', bg: '#101a14', accent: '#22c55e', accent2: '#a3e635', hue: 174 },
  { name: 'grape', bg: '#171021', accent: '#a855f7', accent2: '#e879f9', hue: -57 },
  { name: 'gold', bg: '#1a170f', accent: '#eab308', accent2: '#fde047', hue: 77 },
];

/**
 * A guided tour of the app window. The timeline itself always shows the
 * in-chat features (markdown, reactions, events, threads); a spotlight
 * ring visits each one in turn, and the off-chat features (roles menu,
 * Ctrl+K, voice room, DMs) appear as overlays during their scene. The
 * legend of feature names under the window highlights in sync.
 */
function AppWindowMockup() {
  const scene = useTicker(2600, SHOWCASE_FEATURES.length);
  const themeIndex = useTicker(650, THEME_PRESETS.length);
  const feature: ShowcaseFeature = SHOWCASE_FEATURES[scene];
  const isDM = feature === 'Direct messages';
  const isThemes = feature === 'Custom themes';
  const isThreads = feature === 'Threads';
  const theme = THEME_PRESETS[themeIndex];

  /** Spotlight ring for the element demonstrating the active feature. */
  const spot = (name: ShowcaseFeature) =>
    feature === name
      ? 'ring-2 ring-pink-500/70 shadow-[0_0_18px_rgba(245,71,158,0.35)]'
      : '';

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
    <div className="relative max-w-4xl mx-auto">
      {/* Glow */}
      <div
        className="absolute inset-0 -m-6 rounded-3xl opacity-40 blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${ROSE}40, ${CYAN}1f 60%, transparent 75%)`,
        }}
      />

      <div
        className="relative rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex h-[520px] md:h-[560px] transition-[filter] duration-500"
        style={{
          backgroundColor: SURFACE,
          filter: isThemes && theme.hue ? `hue-rotate(${theme.hue}deg)` : undefined,
        }}
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
              } opacity-80`}
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
                  ch === 'general' && !isDM
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

            <p className="px-2 pt-3 pb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-500">
              Direct messages
            </p>
            <div
              className={`flex items-center gap-2 px-2 py-1 rounded ${
                isDM ? 'bg-pink-500/15 text-white font-medium' : 'text-gray-400'
              }`}
            >
              <img
                src={PEOPLE.lemon.avatar}
                alt=""
                className="size-4 rounded-full object-cover"
              />
              <span>Lemon</span>
              {!isDM && <span className="ml-auto size-1.5 rounded-full bg-pink-400" />}
            </div>
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
        <div className="flex-1 min-w-0 flex flex-col relative">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
            {isDM ? (
              <>
                <img
                  src={PEOPLE.lemon.avatar}
                  alt=""
                  className="size-5 rounded-full object-cover"
                />
                <span className="font-semibold text-sm text-white">Lemon</span>
                <span className="hidden sm:flex items-center gap-1 text-[10px] text-pink-300 uppercase tracking-wider font-semibold">
                  <LockKeyhole className="size-3" />
                  end-to-end encrypted
                </span>
              </>
            ) : (
              <>
                <Hash className="size-4 text-gray-500" />
                <span className="font-semibold text-sm text-white">general</span>
                <span className="hidden sm:block text-xs text-gray-500 truncate">
                  — plans, chaos, and everything else
                </span>
              </>
            )}
            <div className="ml-auto flex items-center gap-3 text-gray-500">
              <Search className="size-4" />
              <Users className="size-4" />
            </div>
          </div>

          {isDM ? (
            /* DM view */
            <div className="flex-1 px-4 py-3 flex flex-col justify-end gap-2 overflow-hidden animate-in fade-in duration-300">
              <div className="flex justify-end">
                <span
                  className="max-w-[75%] px-3 py-2 rounded-2xl rounded-br-sm text-sm text-white"
                  style={{ backgroundColor: ROSE }}
                >
                  you around for a call?
                </span>
              </div>
              <div className="flex justify-start items-end gap-2">
                <img
                  src={PEOPLE.lemon.avatar}
                  alt=""
                  className="size-6 rounded-full object-cover"
                />
                <span className="max-w-[75%] px-3 py-2 rounded-2xl rounded-bl-sm bg-white/[0.07] text-sm text-gray-200">
                  yep, gimme 5 🍋
                </span>
              </div>
            </div>
          ) : (
            /* Channel timeline — markdown, reactions, events, threads all live here */
            <div className="flex-1 px-4 py-3 flex flex-col justify-end gap-3 overflow-hidden">
              {/* Threads anchor */}
              <div className={`flex items-start gap-3 rounded-lg transition-all duration-300 ${spot('Threads')}`}>
                <ProfilePic person={PEOPLE.chad} className="size-8" />
                <div className="min-w-0 py-0.5">
                  <p className="text-xs mb-0.5">
                    <span className="font-semibold text-pink-300">Chad</span>{' '}
                    <span className="text-gray-500">2:14 PM</span>
                  </p>
                  <p className="text-sm text-gray-200 leading-snug">
                    movie night friday? I have the projector 🍿
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-1 text-xs text-cyan-300">
                    <MessagesSquare className="size-3.5" />
                    4 replies
                    <span className="flex -space-x-1.5">
                      {[PEOPLE.mk, PEOPLE.lemon].map((p) => (
                        <img
                          key={p.name}
                          src={p.avatar}
                          alt=""
                          className="size-4 rounded-full object-cover border"
                          style={{ borderColor: SURFACE }}
                        />
                      ))}
                    </span>
                  </span>
                </div>
              </div>

              {/* Markdown anchor */}
              <div className={`flex items-start gap-3 rounded-lg transition-all duration-300 ${spot('Markdown & code blocks')}`}>
                <ProfilePic person={PEOPLE.derek} className="size-8" />
                <div className="min-w-0 py-0.5">
                  <p className="text-xs mb-0.5">
                    <span className="font-semibold text-pink-300">Derek</span>{' '}
                    <span className="text-gray-500">2:15 PM</span>
                  </p>
                  <p className="text-sm text-gray-200 leading-snug">
                    <strong className="text-white">projector fix is live</strong>{' '}
                    — update first:
                  </p>
                  <pre className="mt-1 rounded-md bg-black/50 border border-white/10 px-2.5 py-1.5 font-mono text-[11px] leading-relaxed overflow-hidden">
                    <code>
                      <span className="text-cyan-300">$</span>{' '}
                      <span className="text-gray-300">apt upgrade</span>{' '}
                      <span style={{ color: ROSE }}>projector-drivers</span>
                    </code>
                  </pre>
                </div>
              </div>

              {/* Events anchor */}
              <div className={`ml-11 max-w-[280px] rounded-lg transition-all duration-300 ${spot('Events & RSVPs')}`}>
                <div className="flex items-center gap-3 rounded-lg bg-white/[0.04] border border-white/10 p-2.5">
                  <div className="shrink-0 text-center px-2 py-1 rounded-md bg-pink-500/15 border border-pink-500/30">
                    <p className="text-[8px] font-bold uppercase tracking-wider" style={{ color: ROSE }}>fri</p>
                    <p className="text-sm font-bold text-white leading-none">20</p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-200 text-xs font-medium truncate">movie night 🍿</p>
                    <p className="flex items-center gap-1 text-[10px] text-gray-500">
                      <CalendarDays className="size-2.5" />
                      7pm · hangout
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-[10px] shrink-0">
                    <CheckCircle2 className="size-2.5" /> 12
                  </span>
                </div>
              </div>

              {/* Reactions anchor */}
              <div className={`flex items-start gap-3 rounded-lg transition-all duration-300 ${spot('Reactions & custom emoji')}`}>
                <ProfilePic person={PEOPLE.morgan} className="size-8" />
                <div className="min-w-0 py-0.5">
                  <p className="text-xs mb-0.5">
                    <span className="font-semibold text-pink-300">Morgan</span>{' '}
                    <span className="text-gray-500">2:17 PM</span>
                  </p>
                  <p className="text-sm text-gray-200 leading-snug">snacks handled 🫡</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-200 text-xs">
                      🔥 3
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-gray-300 text-xs">
                      🫡 2
                    </span>
                    {feature === 'Reactions & custom emoji' && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs animate-in zoom-in-75 duration-300">
                        ⚓ 5
                      </span>
                    )}
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-gray-500">
                      <Smile className="size-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Composer */}
          <div className="px-4 pb-4">
            <div className="flex items-center gap-2.5 rounded-lg bg-white/[0.05] border border-white/10 px-3 py-2.5 text-gray-500">
              <Plus className="size-4 shrink-0" />
              <span className="font-mono text-sm truncate">
                Message {isDM ? '@Lemon' : '#general'}
              </span>
              <span className="font-mono text-pink-400 animate-pulse">_</span>
              <Smile className="size-4 shrink-0 ml-auto" />
            </div>
          </div>

          {/* Ctrl+K overlay */}
          {feature === 'Ctrl+K quick switcher' && (
            <div className="absolute inset-0 bg-black/50 flex items-start justify-center pt-14 px-6 animate-in fade-in duration-200">
              <div className="w-full max-w-xs rounded-xl border border-white/15 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200" style={{ backgroundColor: INK }}>
                <div className="flex items-center gap-2 px-3 py-2.5 border-b border-white/10">
                  <Search className="size-4 text-gray-500" />
                  <span className="text-gray-300 text-sm">des</span>
                  <span className="w-px h-4 bg-pink-400 animate-pulse" />
                  <span className="ml-auto flex gap-0.5">
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-400 text-[9px] font-mono">Ctrl</kbd>
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-400 text-[9px] font-mono">K</kbd>
                  </span>
                </div>
                <div className="px-3 py-1.5 flex items-center gap-2 bg-pink-500/15 text-sm text-gray-200">
                  <Hash className="size-3.5 text-gray-500" /> design
                </div>
                <div className="px-3 py-1.5 flex items-center gap-2 text-sm text-gray-500">
                  <Volume2 className="size-3.5" /> design-crit
                </div>
                <div className="px-3 py-1.5 flex items-center gap-2 text-sm text-gray-500 pb-2.5">
                  <img src={PEOPLE.derek.avatar} alt="" className="size-4 rounded-full object-cover" />
                  Derek
                </div>
              </div>
            </div>
          )}

          {/* Voice & screen share overlay — a real call with a shared screen */}
          {feature === 'Voice & screen share' && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4 animate-in fade-in duration-200">
              <div className="w-full max-w-sm rounded-xl border border-cyan-400/30 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200" style={{ backgroundColor: INK }}>
                <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 text-cyan-300 text-xs font-medium">
                  <Volume2 className="size-3.5" />
                  hangout · 3 in call
                  <span className="ml-auto inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-pink-500/15 border border-pink-500/30 text-[9px] font-semibold uppercase tracking-wider" style={{ color: ROSE }}>
                    <MonitorUp className="size-2.5" />
                    sharing
                  </span>
                </div>
                <div className="p-2.5">
                  {/* Shared screen: a mock deck with a bar chart */}
                  <div className="relative rounded-lg bg-[#0d0b11] border border-white/10 overflow-hidden mb-2">
                    <div className="flex items-center gap-1 px-2 py-1 border-b border-white/5">
                      <span className="size-1.5 rounded-full bg-rose-500/70" />
                      <span className="size-1.5 rounded-full bg-amber-400/70" />
                      <span className="size-1.5 rounded-full bg-emerald-500/70" />
                      <span className="ml-1.5 font-mono text-[8px] text-gray-500">Q3-roadmap.key — Keynote</span>
                    </div>
                    <div className="p-3">
                      <div className="h-1.5 w-24 rounded-full bg-white/15 mb-1" />
                      <div className="h-1.5 w-16 rounded-full bg-white/10 mb-3" />
                      <div className="flex items-end gap-2 h-16">
                        {[45, 70, 55, 90, 65].map((h, i) => (
                          <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: i === 3 ? ROSE : `${CYAN}80` }} />
                        ))}
                      </div>
                    </div>
                    {/* Presenter camera bubble, picture-in-picture */}
                    <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-md bg-black/70 border border-cyan-400/40 pl-1 pr-2 py-1">
                      <img src={PEOPLE.derek.avatar} alt="" className="size-6 rounded object-cover" />
                      <div className="leading-tight">
                        <p className="text-[9px] text-white font-medium">Derek</p>
                        <p className="text-[8px] text-cyan-300">presenting</p>
                      </div>
                    </div>
                  </div>
                  {/* Participant video tiles */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { p: PEOPLE.lemon, cam: true, muted: false },
                      { p: PEOPLE.mk, cam: true, muted: true },
                      { p: PEOPLE.morgan, cam: false, muted: false },
                    ].map(({ p, cam, muted }) => (
                      <div key={p.name} className="relative aspect-video rounded-md overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center">
                        {cam ? (
                          <img src={p.avatar} alt="" className="size-full object-cover" />
                        ) : (
                          <img src={p.avatar} alt="" className="size-7 rounded-full object-cover opacity-70" />
                        )}
                        <span className="absolute bottom-0.5 left-1 text-[8px] text-white/90 drop-shadow">{p.name}</span>
                        <span className="absolute bottom-0.5 right-1">
                          <Mic className={`size-2.5 ${muted ? 'text-rose-400' : 'text-emerald-400'}`} />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Right column: thread panel during the Threads scene, otherwise the
            member list (which carries the roles-menu overlay). */}
        {isThreads ? (
          <ThreadPanelMock />
        ) : (
          <div className={`hidden lg:block w-44 shrink-0 border-l border-white/10 bg-white/[0.02] px-3 py-3 relative transition-all duration-300 ${spot('Roles & moderation')}`}>
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
                    <ShieldCheck className="size-3 text-cyan-400 shrink-0" />
                  )}
                </div>
              ))}
            </div>

            {/* Role context menu during the roles scene */}
            {feature === 'Roles & moderation' && (
              <div className="absolute left-2 right-2 top-28 rounded-lg border border-white/15 shadow-2xl py-1 text-xs animate-in fade-in zoom-in-95 duration-200" style={{ backgroundColor: INK }}>
                <p className="px-3 py-1 text-gray-500 text-[10px] uppercase tracking-wider">Chad</p>
                <p className="px-3 py-1 text-gray-300 flex items-center gap-1.5 bg-pink-500/15">
                  <ShieldCheck className="size-3 text-cyan-400" /> Make moderator
                </p>
                <p className="px-3 py-1 text-gray-400 flex items-center gap-1.5">
                  <Ban className="size-3" /> Kick from community
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Custom themes overlay — an appearance picker recoloring live.
          Rendered outside the hue-rotated window so its swatches stay true. */}
      {isThemes && (
        <div className="absolute inset-0 bottom-auto h-[520px] md:h-[560px] bg-black/60 flex items-center justify-center px-4 animate-in fade-in duration-200 rounded-2xl">
          <div className="w-full max-w-sm rounded-xl border border-white/15 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200" style={{ backgroundColor: INK }}>
            <div className="flex items-center gap-2 px-3 py-2 border-b border-white/10 text-gray-300 text-xs font-medium">
              <Smile className="size-3.5" style={{ color: theme.accent }} />
              Appearance · Theme
            </div>
            <div className="p-3">
              <div className="grid grid-cols-6 gap-2 mb-3">
                {THEME_PRESETS.map((t, i) => (
                  <div
                    key={t.name}
                    className="aspect-square rounded-md border flex items-end p-1 transition-all"
                    style={{
                      backgroundColor: t.bg,
                      borderColor: i === themeIndex ? t.accent : 'rgba(255,255,255,0.1)',
                      boxShadow: i === themeIndex ? `0 0 0 2px ${t.accent}` : 'none',
                    }}
                  >
                    <span className="size-1.5 rounded-full" style={{ backgroundColor: t.accent }} />
                    <span className="size-1.5 rounded-full -ml-0.5" style={{ backgroundColor: t.accent2 }} />
                  </div>
                ))}
              </div>
              <p className="text-center font-mono text-[11px]" style={{ color: theme.accent }}>
                {theme.name} theme applied
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Legend — feature names, highlighted in sync with the tour */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {SHOWCASE_FEATURES.map((name) => (
          <span
            key={name}
            className={`px-3 py-1.5 rounded-full border font-mono text-xs transition-all duration-300 ${
              name === feature
                ? 'border-pink-500/70 bg-pink-500/15 text-white shadow-[0_0_14px_rgba(245,71,158,0.35)]'
                : 'border-white/10 bg-white/[0.04] text-gray-500'
            }`}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}


// Kept referenced while the showcase renders a static screenshot instead of
// the animated window, so AppWindowMockup stays available to switch back to.
const _AppWindowMockupRef = AppWindowMockup;

/**
 * The thread side panel, imitating Armada's real behavior: a thread opens
 * in a column to the right of the channel (ThreadPanel.tsx in the app) with
 * a "Thread · N" header, the root message, a reply-count divider, the
 * replies, and a "Reply in thread…" composer.
 */
function ThreadPanelMock() {
  const replies: Array<{ person: Person; text: string }> = [
    { person: PEOPLE.alex, text: "I'm in. Someone bring snacks" },
    { person: PEOPLE.morgan, text: 'snacks handled 🫡' },
    { person: PEOPLE.derek, text: 'screen share works on my end, we can vote live' },
  ];

  return (
    <div
      className="hidden md:flex w-[19rem] shrink-0 flex-col border-l border-white/10 animate-in slide-in-from-right-4 fade-in duration-300"
      style={{ backgroundColor: INK }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-white/10 shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <MessagesSquare className="size-4 text-gray-500 shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            Thread · {replies.length}
          </span>
        </div>
        <span className="text-gray-500 text-lg leading-none">×</span>
      </div>

      <div className="flex-1 overflow-hidden px-3 py-3 flex flex-col">
        {/* Root message */}
        <div className="flex items-start gap-2.5">
          <ProfilePic person={PEOPLE.chad} className="size-8" />
          <div className="min-w-0">
            <p className="text-xs mb-0.5">
              <span className="font-semibold text-pink-300">Chad</span>{' '}
              <span className="text-gray-500">2:14 PM</span>
            </p>
            <p className="text-sm text-gray-200 leading-snug">
              movie night friday? I have the projector 🍿
            </p>
          </div>
        </div>

        {/* Reply-count divider */}
        <div className="flex items-center gap-2 px-1 py-2 mt-1">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-[11px] text-gray-500 shrink-0">
            {replies.length} replies
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Replies */}
        <div className="space-y-3">
          {replies.map(({ person, text }) => (
            <div key={person.name} className="flex items-start gap-2.5">
              <ProfilePic person={person} className="size-8" />
              <div className="min-w-0">
                <p className="text-xs mb-0.5">
                  <span className="font-semibold text-pink-300">{person.name}</span>
                </p>
                <p className="text-sm text-gray-200 leading-snug">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Composer */}
      <div className="px-3 pb-3 shrink-0">
        <div className="flex items-center gap-2 rounded-lg bg-white/[0.05] border border-white/10 px-3 py-2 text-gray-500">
          <span className="font-mono text-xs truncate">Reply in thread…</span>
          <span className="font-mono text-pink-400 animate-pulse">_</span>
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
            Locked on your device before sending, even the sender and
            community name. It uses the open{' '}
            <a
              href={CONCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-pink-600 hover:text-pink-700 underline decoration-pink-300 hover:decoration-pink-500 underline-offset-2"
            >
              Concord protocol
            </a>
            , so anyone can verify it.
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
            Your community lives on many independent relays at once: no
            company account to ban, no headquarters to pressure. Lose one
            relay, lose ten, and the conversation keeps going.
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
            Privacy features no other Discord alternative supports.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          <MeshDemoCard />
          <NotificationDemoCard />
          <KeyLoginDemoCard />
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

/**
 * The self-hosting terminal demo, revealed line by line. Commands are the
 * real ones from the self-hosting guide (/blog/how-to-self-host-armada):
 * clone the client over ngit, the relay from GitLab, and the voice stack.
 */
const TERMINAL_SCRIPT: Array<{ text: string; kind: 'cmd' | 'ok' | 'done' }> = [
  { text: 'git clone nostr://soapbox.pub/relay.ngit.dev/armada', kind: 'cmd' },
  { text: '✔ client   docker build → nginx on :80', kind: 'ok' },
  { text: 'git clone https://gitlab.com/soapbox-pub/ditto-relay', kind: 'cmd' },
  { text: '✔ relay    bun start → your own Nostr relay', kind: 'ok' },
  { text: 'git clone nostr://chad@chadwick.site/relay.ngit.dev/armada-av', kind: 'cmd' },
  { text: '✔ voice    docker compose up -d → LiveKit + broker', kind: 'ok' },
  { text: '✔ your stack, your hardware. nothing left on ours', kind: 'done' },
];

// ───────────────────────────────────────────────────────────────────────────
// Section: Interoperability — one Nostr identity across other chat apps
// ───────────────────────────────────────────────────────────────────────────

function InteropSection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: SURFACE }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-mono text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3">
            Open protocol · no lock-in
          </p>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Interoperable with other Nostr apps.
          </h2>
          <p className="text-lg text-gray-400">
            Armada is built on Nostr, so your account isn't trapped in one app.
            One key logs you in across the ecosystem, and where clients share
            protocols, your communities and DMs come with you. Armada already
            connects to{' '}
            <a
              href="/blog/armada-buzz-communities"
              className="font-medium text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/40 hover:decoration-cyan-300 underline-offset-2"
            >
              Buzz communities
            </a>{' '}
            directly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {NOSTR_APPS.map((app) => (
            <a
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-white/10 overflow-hidden transition-colors hover:border-white/25"
              style={{ backgroundColor: INK }}
            >
              {/* Brand preview / screenshot */}
              <div className="aspect-[1200/630] overflow-hidden border-b border-white/10">
                <img
                  src={app.shot}
                  alt={`${app.name} preview`}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>

              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-2.5 mb-2">
                  <img
                    src={app.logo}
                    alt={`${app.name} logo`}
                    loading="lazy"
                    className="size-7 shrink-0 rounded-md object-cover ring-1 ring-white/10"
                  />
                  <span className="font-semibold text-white">{app.name}</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed flex-1">
                  {app.desc}
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs"
                  style={{ color: app.accent }}
                >
                  Visit {app.name}
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Discord bridge — an on-ramp. The same channel rendered twice,
// once as Discord and once as Armada, with messages appearing on both
// sides in sync to show the two-way bridge carrying names and avatars.
// ───────────────────────────────────────────────────────────────────────────

interface BridgeMsg {
  name: string;
  origin: 'discord' | 'armada';
  text: string;
  /** Every member has a real profile picture, on both sides of the bridge. */
  avatar: string;
  /** A reaction that lands after the message and mirrors to the other side. */
  reaction?: { emoji: string; count: number };
}

const BRIDGE_MESSAGES: BridgeMsg[] = [
  {
    name: 'Derek',
    origin: 'discord',
    text: 'is the Armada community actually live yet?',
    avatar: PEOPLE.derek.avatar,
  },
  {
    name: 'M. K.',
    origin: 'armada',
    text: 'yep — and this whole channel is mirrored both ways',
    avatar: PEOPLE.mk.avatar,
    reaction: { emoji: '🔥', count: 5 },
  },
  {
    name: 'Morgan',
    origin: 'discord',
    text: 'so I can stay on Discord while you all move over?',
    avatar: PEOPLE.morgan.avatar,
  },
  {
    name: 'Alex',
    origin: 'armada',
    text: 'exactly — every message, names and avatars intact',
    avatar: PEOPLE.alex.avatar,
  },
];

/** One message avatar — a real profile picture on both sides of the bridge. */
function BridgeAvatar({ m, className = 'size-8' }: { m: BridgeMsg; className?: string }) {
  return (
    <img
      src={m.avatar}
      alt={`${m.name}'s profile picture`}
      className={`${className} shrink-0 rounded-full object-cover`}
      loading="lazy"
    />
  );
}

/**
 * One side of the bridge. `platform` decides the chrome; both panels show
 * the same messages, and each panel tags the messages that arrived over the
 * bridge from the other side — the visible proof of two-way attribution.
 */
function BridgePanel({
  platform,
  messages,
  reacted,
}: {
  platform: 'discord' | 'armada';
  messages: BridgeMsg[];
  /** Whether the reaction has landed (mirrored onto both panels at once). */
  reacted: boolean;
}) {
  const isDiscord = platform === 'discord';
  const surface = isDiscord ? '#313338' : SURFACE;
  const header = isDiscord ? '#2b2d31' : 'rgba(255,255,255,0.03)';

  return (
    <div
      className="rounded-2xl border border-white/10 overflow-hidden shadow-sm flex flex-col"
      style={{ backgroundColor: surface }}
    >
      {/* Channel header */}
      <div
        className="flex items-center justify-between px-4 py-2.5 border-b border-white/10"
        style={{ backgroundColor: header }}
      >
        <div className="flex items-center gap-2 min-w-0">
          {isDiscord ? (
            <Hash className="size-4 shrink-0" style={{ color: '#949ba4' }} />
          ) : (
            <img src={ARMADA_ICON} alt="Armada app icon" className="size-5 rounded shrink-0" />
          )}
          <span className="font-semibold text-sm text-white truncate">general</span>
        </div>
        <span
          className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full"
          style={
            isDiscord
              ? { color: '#c9cdfb', backgroundColor: 'rgba(88,101,242,0.2)' }
              : { color: '#f9a8d4', backgroundColor: 'rgba(236,72,153,0.15)' }
          }
        >
          {isDiscord ? 'Discord' : 'Armada'}
        </span>
      </div>

      <div className="p-4 space-y-3 h-[240px] flex flex-col justify-end overflow-hidden">
        {messages.map((m) => {
          // A message is "bridged" on the panel that isn't its origin.
          const bridged = m.origin !== platform;
          const showReaction = !!m.reaction && reacted;
          return (
            <div
              key={m.name + m.text}
              className="flex items-start gap-2.5 animate-in fade-in slide-in-from-bottom-2 duration-300"
            >
              <BridgeAvatar m={m} />
              <div className="min-w-0">
                <p className="text-xs mb-0.5 flex items-center gap-1.5">
                  <span
                    className="font-semibold"
                    style={{ color: isDiscord ? '#f2f3f5' : '#f9a8d4' }}
                  >
                    {m.name}
                  </span>
                  {bridged && (
                    <span
                      className="px-1.5 py-px rounded text-[9px] font-semibold uppercase tracking-wide"
                      style={
                        isDiscord
                          ? { color: '#c9cdfb', backgroundColor: 'rgba(88,101,242,0.25)' }
                          : { color: '#93c5fd', backgroundColor: 'rgba(34,211,238,0.15)' }
                      }
                    >
                      {isDiscord ? 'via Armada' : 'via Discord'}
                    </span>
                  )}
                </p>
                <p
                  className="text-sm leading-snug"
                  style={{ color: isDiscord ? '#dbdee1' : '#e5e7eb' }}
                >
                  {m.text}
                </p>
                {showReaction && (
                  <span
                    className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 rounded-full text-xs animate-in fade-in zoom-in-75 duration-300"
                    style={
                      isDiscord
                        ? {
                            color: '#c9cdfb',
                            backgroundColor: 'rgba(88,101,242,0.16)',
                            border: '1px solid rgba(88,101,242,0.4)',
                          }
                        : {
                            color: '#f9a8d4',
                            backgroundColor: 'rgba(236,72,153,0.15)',
                            border: '1px solid rgba(236,72,153,0.3)',
                          }
                    }
                  >
                    <span>{m.reaction!.emoji}</span>
                    <span className="font-semibold">{m.reaction!.count}</span>
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BridgeSection() {
  // Timeline: reveal the messages one at a time on both panels in sync, then
  // land the single reaction (mirrored to both sides), then hold, then loop.
  const count = BRIDGE_MESSAGES.length;
  const tick = useTicker(1300, count + 3);
  const visible = Math.min(tick + 1, count);
  const reacted = tick >= count;
  const messages = BRIDGE_MESSAGES.slice(0, visible);

  return (
    <section className="bg-[#f5f3f9] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-mono text-xs font-semibold tracking-widest uppercase text-pink-600 mb-3">
            New · Discord bridge
          </p>
          <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Bridge your Discord server.
          </h2>
          <p className="text-lg text-gray-600">
            Connect a Discord server to an Armada community and every message
            and reaction flows both ways, names and avatars intact. Nobody has
            to move all at once.
          </p>
        </div>

        {/* The same channel, live on both platforms at once */}
        <div className="relative grid md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {/* Bridge connector (desktop) */}
          <div
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 size-14 rounded-full items-center justify-center shadow-xl border-4 border-[#faf8fb] text-white"
            style={{
              background: `linear-gradient(135deg, ${DISCORD_BLURPLE}, #ec4899)`,
            }}
          >
            <ArrowLeftRight className="size-6" />
          </div>

          <BridgePanel platform="discord" messages={messages} reacted={reacted} />
          <BridgePanel platform="armada" messages={messages} reacted={reacted} />
        </div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold h-12 px-6 text-base shadow-lg shadow-pink-500/25"
          >
            <a href={BRIDGE_URL} target="_blank" rel="noopener noreferrer">
              <ArrowLeftRight className="mr-2 size-4" />
              Connect your server
            </a>
          </Button>
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
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl tracking-tight mb-4">
              Self-hostable at every level.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Communities are serverless by default. When you want more
              independence, every piece is AGPL-3.0 and runs on your own
              hardware. Take one piece or all three; the{' '}
              <a
                href="/blog/how-to-self-host-armada"
                className="font-medium text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/40 hover:decoration-cyan-300 underline-offset-2"
              >
                self-hosting guide
              </a>{' '}
              walks through each one.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: Code,
                  title: 'Self-host the client',
                  body: 'Serve the web app from your own domain.',
                  link: { href: SOURCE_URL, label: 'armada', external: true },
                },
                {
                  icon: Server,
                  title: 'Self-host a relay',
                  body: 'Keep encrypted messages on a relay you run.',
                  link: { href: RELAY_REPO_URL, label: 'ditto-relay', external: true },
                },
                {
                  icon: Headphones,
                  title: 'Self-host voice',
                  body: 'Route calls through your own LiveKit box.',
                  link: {
                    href: '/blog/how-to-self-host-armada',
                    label: 'armada-av',
                    external: false,
                  },
                },
              ].map(({ icon: Icon, title, body, link }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="size-10 shrink-0 rounded-lg bg-cyan-400/10 border border-cyan-400/25 flex items-center justify-center">
                    <Icon className="size-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-0.5">
                      {title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {body}{' '}
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className="font-mono text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/40 hover:decoration-cyan-300 underline-offset-2"
                      >
                        {link.label} →
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <TerminalDemo />
        </div>
      </div>
    </section>
  );
}

/**
 * A looping terminal mockup that reveals the three real self-hosting
 * commands (client, relay, voice) line by line, then holds and loops.
 */
function TerminalDemo() {
  const steps = TERMINAL_SCRIPT.length;
  const tick = useTicker(950, steps + 3);
  const shown = Math.min(tick + 1, steps);
  const done = shown === steps;

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

      <div className="p-5 font-mono text-[13px] leading-relaxed min-h-[15rem]">
        {TERMINAL_SCRIPT.slice(0, shown).map((line) => (
          <p
            key={line.text}
            className={`animate-in fade-in slide-in-from-bottom-1 duration-200 break-all ${
              line.kind === 'ok'
                ? 'text-emerald-400'
                : line.kind === 'done'
                  ? 'text-cyan-300 mt-1'
                  : 'text-gray-300'
            }`}
          >
            {line.kind === 'cmd' && <span className="text-cyan-400">$ </span>}
            {line.text}
          </p>
        ))}
        {done && (
          <p className="text-gray-300 mt-1">
            <span className="text-cyan-400">$</span>{' '}
            <span className="animate-pulse" style={{ color: ROSE }}>_</span>
          </p>
        )}
      </div>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: iOS release email alert
// ───────────────────────────────────────────────────────────────────────────

function IosAlertSection() {
  return (
    <section
      className="relative overflow-hidden text-white py-20 md:py-28"
      style={{ backgroundColor: INK }}
    >
      {/* Rose + cyan glows, echoing the app's neon welcome screen */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 55% 60% at 80% 20%, ${ROSE}24, transparent 70%), radial-gradient(ellipse 45% 50% at 10% 90%, ${CYAN}14, transparent 70%)`,
        }}
      />

      {/* The app's ASCII ocean, same as the hero and final CTA */}
      <AsciiSea />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy + form, on a glass panel so it stays readable over the sea */}
          <div className="rounded-2xl bg-[#15121c]/80 backdrop-blur-sm ring-1 ring-white/10 p-6 sm:p-8">
            <p className="font-mono text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3 flex items-center gap-2">
              <BellRing className="size-4" />
              On the way · iOS
            </p>
            <h2
              className="font-mono font-bold lowercase text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight mb-4"
              style={{ color: CREAM, textShadow: `0 0 16px ${ROSE}55` }}
            >
              get notified when armada lands on iOS.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Armada runs on the web, Android, Linux, and Windows today, and the
              iPhone app is coming. Drop your email and we will tell you the day
              it ships. No spam, just the release.
            </p>
            <EmailSignupForm tagId="8983956" className="max-w-md" />
          </div>

          {/* The app on a phone (already rendered in a device frame) */}
          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[320px]">
            <div
              className="absolute inset-0 -m-8 rounded-full opacity-50 blur-3xl pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center, ${ROSE}40, ${CYAN}1f 60%, transparent 75%)`,
              }}
            />
            <img
              src="/assets/armada/ios-hero.png"
              alt="Armada on iPhone: the 'gather your crew' screen for starting an encrypted community"
              loading="lazy"
              className="relative w-full drop-shadow-2xl rotate-[4deg] hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Latest Armada blog posts (newest three, by date)
// ───────────────────────────────────────────────────────────────────────────

function LatestPostsSection() {
  const posts = getAllPosts()
    .filter((post) => post.tags?.includes('armada'))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="bg-[#f5f3f9] py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-mono text-xs font-semibold tracking-widest uppercase text-pink-600 mb-3">
            From the blog
          </p>
          <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Latest on Armada.
          </h2>
          <p className="text-lg text-gray-600">
            Release notes, deep dives, and guides from the team building Armada.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block"
            >
              <Card className="h-full overflow-hidden border-gray-200 bg-white transition-shadow hover:shadow-lg">
                {post.coverImage && (
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <CardContent className="p-6">
                  <p className="text-xs text-gray-500 mb-2">
                    {formatDate(post.date)}
                    {post.author.name ? ` · ${post.author.name}` : ''}
                  </p>
                  <h3 className="font-display font-bold text-gray-900 text-lg leading-snug mb-2 transition-colors group-hover:text-pink-600">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 font-mono text-sm text-pink-600 hover:text-pink-700 transition-colors"
          >
            Read the blog
            <span aria-hidden="true">→</span>
          </Link>
        </div>
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

/**
 * The animated ASCII ocean from Armada's own welcome screen
 * (src/components/landing/AsciiSea.tsx in the armada repo), ported with
 * fixed brand colors and a static waterline instead of the scroll-driven
 * mask. Two stacked monospace text layers repainted at 14 fps: cyan
 * swells and rose crests.
 */
function AsciiSea() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const SWELL_RAMP = '  ..,,--~~';
    const CREST_GLYPH = '≈';
    const CREST_THRESHOLD = 0.88;
    const FPS = 14;

    let raf = 0;
    let swellRows: HTMLDivElement[] = [];
    let crestRows: HTMLDivElement[] = [];
    let cols = 0;
    let rowCount = 0;

    const build = () => {
      host.textContent = '';

      // Measure one monospace cell with a probe character.
      const probe = document.createElement('span');
      probe.textContent = '0';
      probe.style.cssText = 'visibility:hidden;position:absolute';
      host.appendChild(probe);
      const rect = probe.getBoundingClientRect();
      const charW = rect.width || 8;
      const charH = rect.height || 13;
      host.removeChild(probe);

      cols = Math.ceil(host.clientWidth / charW) + 2;
      rowCount = Math.ceil(host.clientHeight / charH) + 1;

      const makeLayer = () => {
        const layer = document.createElement('div');
        layer.style.cssText = 'position:absolute;inset:0';
        const rows: HTMLDivElement[] = [];
        for (let y = 0; y < rowCount; y++) {
          const row = document.createElement('div');
          rows.push(row);
          layer.appendChild(row);
        }
        host.appendChild(layer);
        return rows;
      };
      swellRows = makeLayer();
      crestRows = makeLayer();

      // Rows brighten toward the viewer (bottom).
      for (let y = 0; y < rowCount; y++) {
        const near = y / Math.max(rowCount - 1, 1);
        swellRows[y].style.color = `rgba(37, 244, 244, ${(0.07 + 0.3 * near).toFixed(3)})`;
        crestRows[y].style.color = `rgba(245, 71, 158, ${(0.05 + 0.4 * near).toFixed(3)})`;
      }
    };

    // Three incommensurate sines; wavelength grows toward the viewer.
    const paint = (phase: number) => {
      for (let y = 0; y < rowCount; y++) {
        const near = y / Math.max(rowCount - 1, 1);
        const amp = 0.32 + 0.68 * near;
        const freq = 0.3 - 0.2 * near;
        let swell = '';
        let crest = '';
        for (let x = 0; x < cols; x++) {
          const h =
            Math.sin(x * freq + phase * 0.9 + y * 0.55) +
            0.6 * Math.sin(x * freq * 2.3 - phase * 1.35 + y * 0.29) +
            0.4 * Math.sin(x * freq * 0.45 + phase * 0.5 - y * 0.17);
          const n = 0.5 + (h / 2) * amp * 0.5;
          if (n > CREST_THRESHOLD) {
            crest += CREST_GLYPH;
            swell += ' ';
          } else {
            crest += ' ';
            swell += SWELL_RAMP[Math.round(n * (SWELL_RAMP.length - 1))];
          }
        }
        swellRows[y].textContent = swell;
        crestRows[y].textContent = crest;
      }
    };

    build();
    paint(0);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) {
      const frameMs = 1000 / FPS;
      const start = performance.now();
      let last = 0;
      const tick = (now: number) => {
        raf = requestAnimationFrame(tick);
        if (now - last < frameMs) return;
        last = now;
        paint((now - start) / 1000);
      };
      raf = requestAnimationFrame(tick);
    }

    // Rebuild whenever the host actually changes size. A plain window
    // "resize" listener misses the section growing after mount (e.g. the
    // phone image loading in), which left the grid covering only the initial
    // height until a manual resize. ResizeObserver catches every case.
    let rebuildRaf = 0;
    const scheduleRebuild = () => {
      cancelAnimationFrame(rebuildRaf);
      rebuildRaf = requestAnimationFrame(() => {
        build();
        paint(0);
      });
    };
    const ro = new ResizeObserver(scheduleRebuild);
    ro.observe(host);

    // Re-measure once the mono font is ready, in case metrics shift.
    if (document.fonts?.ready) {
      document.fonts.ready.then(scheduleRebuild).catch(() => {});
    }

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(rebuildRaf);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none overflow-hidden font-mono text-[0.8125rem] leading-none [white-space:pre]"
      style={{
        contain: 'layout paint',
        maskImage: 'linear-gradient(to bottom, transparent 22%, black 58%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 22%, black 58%)',
      }}
    />
  );
}

function FinalCtaSection() {
  return (
    <section
      className="relative overflow-hidden text-white py-24 md:py-36"
      style={{ backgroundColor: INK }}
    >
      <AsciiSea />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="rounded-3xl bg-[#15121c]/70 backdrop-blur-md ring-1 ring-white/10 px-6 sm:px-12 py-12 md:py-16 text-center">
        <h2
          className="font-mono font-bold lowercase text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-4 leading-[1.05]"
          style={{ color: CREAM, textShadow: `0 0 18px ${ROSE}66` }}
        >
          chat like nobody's&nbsp;watching.
        </h2>
        <p className="font-mono text-sm sm:text-base mb-10" style={{ color: ROSE }}>
          <span className="text-cyan-400">$</span> your keys. your fleet.
          <span className="animate-pulse">_</span>
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <Button
            asChild
            size="lg"
            className="font-bold h-14 px-8 text-lg shadow-2xl text-white hover:opacity-90"
            style={{ backgroundColor: ROSE, boxShadow: `0 10px 40px ${ROSE}40` }}
          >
            <a href={ARMADA_URL} target="_blank" rel="noopener noreferrer">
              Open Armada
              <ArrowRight className="ml-2 size-5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="border border-white/15 text-white hover:text-white font-medium h-14 px-7 text-base"
            style={{ backgroundColor: SURFACE }}
          >
            <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer">
              <Code className="mr-2 size-4" />
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
            href={SOURCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Open source on ngit
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
      </div>
    </section>
  );
}
