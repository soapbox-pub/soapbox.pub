/**
 * /armada — Armada marketing landing page on Soapbox.pub.
 *
 * A standalone marketing site for Armada (armada.buzz) that:
 *
 *  - Frames Armada as "Discord without the company" — servers, channels,
 *    voice, and communities on the open Nostr relays.
 *  - Explains the Concord protocol (github.com/concord-protocol/concord):
 *    end-to-end encrypted communities with no central server, where
 *    membership is key possession and authority is a signed roster.
 *  - Covers the second deployment mode: running your own relay server
 *    (NIP-29) for sovereign internal infrastructure.
 *  - Invites visitors to join the official Soapbox Armada community via
 *    an invite link.
 *
 * Visual identity: Armada's own terminal aesthetic — deep aubergine-black
 * (#100b15, the app's dark theme color), hot pink ship-sail logo mark
 * (≈ Tailwind `pink-500`), cyan water-line accents (`cyan-400`), and
 * monospace type with a shell-prompt motif ("$ … _").
 */

import { Link } from 'react-router-dom';
import {
  Anchor,
  ArrowRight,
  Bluetooth,
  CheckCircle2,
  ExternalLink,
  EyeOff,
  Github,
  Headphones,
  KeyRound,
  LockKeyhole,
  MessagesSquare,
  MonitorSmartphone,
  Radio,
  ScrollText,
  Server,
  ShieldCheck,
  Users,
  Waves,
} from 'lucide-react';
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

/**
 * Invite link into the official Soapbox community on Armada. The URL
 * fragment carries the unlock token (per CORD-05, invite keys live in an
 * encrypted bundle on relays; the link itself is just a locator + token),
 * so it never reaches any server.
 */
const COMMUNITY_INVITE_URL =
  'https://armada.buzz/invite/naddr1qvzqqqyzz5pzqlvfu67gsh2vsa7yu0nyn2cyqdac2zj0kpld399t02eu0jr35ug9qqqqs3sdxq#BAACAwSZuujHSCu-HuGiV8Y_XDJI';

/** Concord protocol spec repository. */
const CONCORD_URL = 'https://github.com/concord-protocol/concord';

/** Armada source code. */
const GITLAB_URL = 'https://gitlab.com/soapbox-pub/armada';

/** Armada's dark theme background color. */
const INK = '#100b15';

export default function Armada() {
  useSEO({
    title: 'Armada — Discord Without the Company | Soapbox',
    description:
      'Armada is a Discord-style chat app built on Nostr: servers, channels, voice, and end-to-end encrypted communities powered by the Concord protocol. No central server, no company in the middle. Your keys, your fleet.',
    image: ARMADA_OG_IMAGE,
    type: 'website',
    keywords:
      'armada, armada.buzz, concord protocol, discord alternative, encrypted group chat, end-to-end encryption, nostr, nostr communities, nip-29, private communities, decentralized chat, voice chat, bluetooth mesh, bitchat, soapbox, self-hosted discord, e2ee communities',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Armada',
      description:
        'A Discord-style chat app built on Nostr with end-to-end encrypted communities powered by the Concord protocol. Servers, channels, voice, and moderation — with no company and no central server. Built by Team Soapbox.',
      applicationCategory: 'CommunicationApplication',
      operatingSystem: 'Web, Android, Linux, Windows',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      url: ARMADA_URL,
      sameAs: [GITLAB_URL, CONCORD_URL],
      publisher: {
        '@type': 'Organization',
        name: 'Soapbox',
        url: 'https://soapbox.pub',
      },
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <HeroSection />
      <ConcordSection />
      <TwoWaysSection />
      <FeaturesSection />
      <CommunityCtaSection />
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
      {/* Pink + cyan harbor glow */}
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
            {/* Shell-prompt eyebrow — the same motif as Armada's own
                wordmark ("$ a sovereign harbor on the open relays"). */}
            <p className="font-mono text-sm sm:text-base text-pink-400 mb-6">
              <span className="text-cyan-400">$</span> a sovereign harbor on
              the open relays<span className="animate-pulse">_</span>
            </p>

            <h1 className="font-mono font-bold tracking-tight leading-[1.05] text-white text-4xl sm:text-5xl lg:text-6xl mb-8">
              Discord without
              <br />
              the company.
              <br />
              <span className="text-pink-500">Your keys. Your fleet.</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
              Armada is a chat app with servers, channels, threads, voice, and
              moderation — everything you expect from Discord — built on the
              open Nostr relays with end-to-end encrypted communities powered
              by the{' '}
              <a
                href={CONCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-200 underline decoration-cyan-400/40 hover:decoration-cyan-300 underline-offset-2"
              >
                Concord protocol
              </a>
              . No company holds your messages. No server decides who's in
              charge.
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
                <a
                  href={COMMUNITY_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Anchor className="mr-2 size-4" />
                  Join our community
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
                <span>Open source</span>
              </div>
            </div>
          </div>

          {/* Right: floating chat mockup */}
          <div className="lg:col-span-5">
            <HeroChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * A faux Armada channel window built in JSX — Discord-familiar chrome
 * (channel header, avatars, voice bar) so a visitor instantly recognizes
 * the product category before reading a word of copy.
 */
function HeroChatMockup() {
  const messages = [
    {
      initial: 'S',
      color: 'from-pink-500 to-rose-600',
      name: 'siren',
      time: '09:42',
      text: 'weigh anchor — new release is tagged 🚢',
    },
    {
      initial: 'K',
      color: 'from-cyan-400 to-blue-600',
      name: 'kraken',
      time: '09:43',
      text: 'relays only see noise. love it here.',
    },
    {
      initial: 'M',
      color: 'from-violet-500 to-purple-700',
      name: 'mkfain',
      time: '09:45',
      text: 'hopping into voice, join us ⚓',
    },
  ];

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

      <Card className="relative bg-[#181021] border-white/10 overflow-hidden shadow-2xl rotate-[1.5deg] hover:rotate-0 transition-transform duration-500">
        {/* Channel header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
          <div className="flex items-center gap-2 min-w-0">
            <img
              src={ARMADA_ICON}
              alt="Armada app icon — pink ship sail over cyan water lines"
              className="size-6 rounded-md shrink-0"
            />
            <span className="font-mono text-sm text-white font-semibold truncate">
              #quarterdeck
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-[10px] font-semibold uppercase tracking-wider">
            <LockKeyhole className="size-3" />
            <span>Encrypted</span>
          </div>
        </div>

        <CardContent className="p-4 space-y-4 text-white">
          {messages.map((m) => (
            <div key={m.name} className="flex items-start gap-3">
              <div
                className={`size-8 shrink-0 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center text-white text-xs font-bold`}
              >
                {m.initial}
              </div>
              <div className="min-w-0">
                <p className="text-xs mb-0.5">
                  <span className="font-semibold text-pink-300">{m.name}</span>{' '}
                  <span className="text-gray-500">{m.time}</span>
                </p>
                <p className="text-sm text-gray-200 leading-snug">{m.text}</p>
              </div>
            </div>
          ))}

          {/* Voice bar */}
          <div className="flex items-center justify-between rounded-lg bg-cyan-400/10 border border-cyan-400/25 px-3 py-2.5">
            <div className="flex items-center gap-2 text-cyan-300 text-xs font-medium">
              <Headphones className="size-4" />
              <span>Voice · 3 aboard</span>
            </div>
            <div className="flex -space-x-2">
              {['bg-pink-500', 'bg-cyan-500', 'bg-violet-500'].map((bg) => (
                <span
                  key={bg}
                  className={`size-6 rounded-full ${bg} border-2 border-[#181021]`}
                />
              ))}
            </div>
          </div>

          {/* Composer */}
          <div className="flex items-center gap-2 rounded-lg bg-white/[0.05] border border-white/10 px-3 py-2.5">
            <span className="font-mono text-sm text-gray-500">
              Message #quarterdeck
            </span>
            <span className="font-mono text-pink-400 animate-pulse">_</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: The Concord protocol
//
// The load-bearing differentiator. Concord splits the three jobs of a
// central chat server into pieces that require no trust: storage becomes
// dumb relays carrying ciphertext, membership becomes key possession,
// and authority becomes a signed roster every client re-verifies.
// ───────────────────────────────────────────────────────────────────────────

function ConcordSection() {
  const pillars = [
    {
      icon: Radio,
      title: 'Storage → dumb relays',
      body:
        'Messages travel as encrypted blobs addressed to rotating, meaningless labels across interchangeable Nostr relays. Relays, network observers, and non-members see only noise. One misbehaves? Use the others.',
    },
    {
      icon: KeyRound,
      title: 'Membership → key possession',
      body:
        "If you can decrypt the room, you're in it. There's no member list on a server to enforce, leak, or subpoena. Removing someone for real means changing the locks — the community rolls to a new key handed only to who's left.",
    },
    {
      icon: ScrollText,
      title: 'Authority → a signed roster',
      body:
        "Owners, admins, moderators, roles, kicks, and bans all trace back to signatures rooted in the owner's identity. Every member's client re-checks the math itself — a forged \"ban\" is simply dropped. Authority is cryptography, not a switch a server flips.",
    },
  ];

  return (
    <section
      id="concord"
      className="relative text-white py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: INK }}
    >
      {/* Subtle cyan water-line texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 120px, rgba(34, 211, 238, 0.5) 120px, rgba(34, 211, 238, 0.5) 121px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-mono text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3">
            Powered by the Concord protocol
          </p>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Every group chat has a computer in the middle.
            <br className="hidden sm:block" />{' '}
            <span className="text-pink-500">Concord deletes it.</span>
          </h2>
          <p className="text-lg text-gray-400">
            The server that holds every message, knows every member, and
            decides who's in charge can be subpoenaed, hacked, sold, or
            switched off — and your community dies with it. Concord splits its
            three jobs into pieces that need to trust nobody.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] transition-colors"
            >
              <div className="size-10 rounded-lg bg-pink-500/15 border border-pink-500/30 flex items-center justify-center mb-5">
                <Icon className="size-5 text-pink-400" />
              </div>
              <h3 className="font-mono font-bold text-white text-lg mb-2.5 leading-snug">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Full moderation, zero trust — highlight band */}
        <div className="mt-10 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-white/[0.04] to-cyan-400/[0.04] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="size-12 shrink-0 rounded-xl bg-cyan-400/10 border border-cyan-400/25 flex items-center justify-center">
              <ShieldCheck className="size-6 text-cyan-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-display font-bold text-white text-xl sm:text-2xl mb-1.5">
                Full Discord-style moderation. Zero trusted servers.
              </h3>
              <p className="text-gray-400 leading-relaxed text-[15px]">
                Owners, admins, custom roles, invites that revoke without
                re-keying, kicks, bans, and even end-to-end encrypted voice,
                video, and screen sharing — all defined by the open{' '}
                <span className="font-mono text-cyan-300">CORD</span> specs,
                the way Nostr is defined by NIPs. Anyone can build a Concord
                client; Armada is the first.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="shrink-0 border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <a href={CONCORD_URL} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 size-4" />
                Read the specs
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Two ways to run your fleet
//
// Armada speaks two protocols: Concord for serverless E2EE communities
// (the default), and NIP-29 relay-based groups for teams who want to run
// their own sovereign server as internal infrastructure.
// ───────────────────────────────────────────────────────────────────────────

function TwoWaysSection() {
  return (
    <section className="bg-[#faf8fb] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-mono text-xs font-semibold tracking-widest uppercase text-pink-600 mb-3">
            Two ways to sail
          </p>
          <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Serverless — or your own server.
          </h2>
          <p className="text-lg text-gray-600">
            Most chat apps make you pick between convenience and control.
            Armada gives you both, in one client.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Concord communities */}
          <Card className="overflow-hidden border-gray-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-pink-500 to-rose-600 px-6 py-5 text-white">
              <div className="flex items-center gap-2 mb-1">
                <LockKeyhole className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Concord communities
                </span>
              </div>
              <p className="text-pink-100 text-sm">
                Encrypted · Serverless · The default
              </p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-display font-bold text-gray-900 text-xl mb-2">
                  A community that nobody can turn off.
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Create a community in seconds — no hosting, no setup. It
                  lives as encrypted events on public Nostr relays, readable
                  only by members holding the keys.
                </p>
              </div>

              <ul className="space-y-2.5">
                {[
                  'End-to-end encrypted channels, voice, video, and screen share',
                  'Relays and observers see only noise — even the community name is sealed',
                  'Invite links that expire and revoke; bans enforced by re-keying, not by a server',
                  'If every relay it uses vanished tomorrow, the community moves to others',
                ].map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-pink-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-snug">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600 leading-snug">
                  <span className="font-semibold text-gray-800">
                    Best for:
                  </span>{' '}
                  friend groups, activist networks, open-source projects, and
                  any community that can't afford a single point of failure —
                  or a single point of surveillance.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Self-hosted relay servers */}
          <Card className="overflow-hidden border-gray-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-cyan-600 to-sky-700 px-6 py-5 text-white">
              <div className="flex items-center gap-2 mb-1">
                <Server className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Your own server
                </span>
              </div>
              <p className="text-cyan-100 text-sm">
                Self-hosted · NIP-29 · Internal infrastructure
              </p>
            </div>
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-display font-bold text-gray-900 text-xl mb-2">
                  A harbor you run yourself.
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Armada ships a complete open-source relay stack built on
                  Nostr's NIP-29 groups. One command stands up the relay,
                  voice server, and client — on your hardware, under your
                  rules.
                </p>
              </div>

              <ul className="space-y-2.5">
                {[
                  'Deploy the full stack with a single ./start.sh',
                  'Channels, roles, moderation, and LiveKit-powered voice out of the box',
                  'Runs air-gapped on an internal network — no outside dependency',
                  'Standard Nostr underneath: interoperable with other NIP-29 clients',
                ].map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5">
                    <CheckCircle2 className="size-4 text-cyan-700 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-snug">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600 leading-snug">
                  <span className="font-semibold text-gray-800">
                    Best for:
                  </span>{' '}
                  companies, teams, and organizations that want Discord-style
                  chat as sovereign internal infrastructure instead of a SaaS
                  subscription.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-center mt-10 max-w-2xl mx-auto text-gray-600 text-sm leading-relaxed">
          Either way, your identity is a Nostr keypair you control — log in
          with an nsec, a signer extension, or a remote bunker, and take the
          same account to any relay or community.{' '}
          <a
            href={GITLAB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-pink-600 hover:text-pink-700 underline decoration-pink-300 hover:decoration-pink-500 underline-offset-2 inline-flex items-center gap-1"
          >
            Source on GitLab
            <ExternalLink className="size-3.5" />
          </a>
        </p>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Feature grid
// ───────────────────────────────────────────────────────────────────────────

function FeaturesSection() {
  const features = [
    {
      icon: Headphones,
      title: 'Voice, video & screen share',
      body:
        'Hop into a voice channel, share your screen, or watch YouTube together in sync. In Concord communities, calls are end-to-end encrypted — the media server only ever forwards ciphertext.',
    },
    {
      icon: MessagesSquare,
      title: 'Threads, reactions & everything else',
      body:
        'Slack-style threads, replies, emoji reactions, custom emoji, pins, mentions, typing indicators, markdown with code blocks, and a Ctrl+K quick switcher. It feels like the chat app you already know.',
    },
    {
      icon: Users,
      title: 'Roles & real moderation',
      body:
        'Owners, admins, moderators, and custom roles with fine-grained permissions. Kick, ban, hide, and revoke invites — enforced by cryptography in Concord communities, by your relay on your own server.',
    },
    {
      icon: Bluetooth,
      title: 'Bluetooth mesh, no internet',
      body:
        'On Android, Armada chats over a Bluetooth mesh with people nearby — no signal, no Wi-Fi, no problem. Compatible with bitchat, so both apps see each other on the same mesh.',
    },
    {
      icon: EyeOff,
      title: 'Push notifications, no Google',
      body:
        'Instant native notifications on Android delivered without Google or any third-party push service — even when the app is closed, with any login method.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Everywhere you are',
      body:
        'A web app, an installable PWA, an Android app, and Linux/Windows desktop builds with tray support. Offline-first: history is cached on-device and messages queue until you reconnect.',
    },
  ];

  return (
    <section className="text-white py-20 md:py-28" style={{ backgroundColor: INK }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="font-mono text-xs font-semibold tracking-widest uppercase text-pink-400 mb-3">
            Batteries included
          </p>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Nothing to give up.
          </h2>
          <p className="text-lg text-gray-400">
            Sovereignty usually means sacrifice. Armada keeps the comforts of
            the walled garden — and leaves the walls behind.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-5xl mx-auto">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.06] transition-colors"
            >
              <div className="size-10 rounded-lg bg-cyan-400/10 border border-cyan-400/25 flex items-center justify-center mb-5">
                <Icon className="size-5 text-cyan-400" />
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2.5 leading-snug">
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
                alt="Armada logo — pink ship sail above cyan water lines on a dark background"
                className="size-20 rounded-2xl shadow-lg shadow-pink-500/20"
              />
              <p className="font-mono text-sm text-pink-400">
                <span className="text-cyan-400">$</span> join the fleet
                <span className="animate-pulse">_</span>
              </p>
            </div>

            {/* Right: invite copy */}
            <CardContent className="md:col-span-3 p-8 sm:p-10">
              <p className="font-mono text-xs font-semibold tracking-widest uppercase text-pink-600 mb-3">
                Come aboard
              </p>
              <h2 className="font-display font-bold text-gray-900 text-2xl sm:text-3xl mb-3">
                Join the Soapbox community on Armada.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Team Soapbox hangs out in an end-to-end encrypted Concord
                community — product chat, dev talk, voice hangs, and early
                word on everything we ship. The invite link below carries its
                unlock key in the URL fragment, so it never touches a server.
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
                    <Anchor className="mr-2 size-4" />
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
// Section: Final CTA
// ───────────────────────────────────────────────────────────────────────────

function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#4c0d33] via-[#9d174d] to-[#ec4899] text-white py-20 md:py-28">
      {/* Cyan horizon accent */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none opacity-30"
        style={{
          background:
            'linear-gradient(to top, rgba(34, 211, 238, 0.35), transparent)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-mono text-xs font-semibold tracking-widest uppercase text-white/80 mb-4 flex items-center justify-center gap-2">
          <Waves className="size-4" />
          Set sail
        </p>
        <h2 className="font-display font-bold text-white text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6 leading-[0.95]">
          The harbor is open.
        </h2>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Armada is open source, built by Team Soapbox, and free for everyone,
          everywhere — no company, no central server, no one to ask for
          permission.
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
          </a>
        </p>
      </div>
    </section>
  );
}
