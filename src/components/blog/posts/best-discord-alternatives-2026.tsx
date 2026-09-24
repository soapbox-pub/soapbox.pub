import type { BlogPostMeta } from '@/lib/blog/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Compass, Minus, X } from 'lucide-react';

export const meta: BlogPostMeta = {
  slug: 'best-discord-alternatives-2026',
  title: 'The Best Discord Alternatives in 2026, Compared',
  excerpt:
    "Discord's IPO, ID scans, and 2025 data breach have people leaving. We compare the top Discord alternatives on encryption, privacy, and who can shut you down.",
  coverImage: '/assets/blog/best-discord-alternatives-2026/cover.png',
  date: '2026-07-30',
  author: {
    name: 'M. K. Fain',
    picture: '/assets/avatars/mk.jpg',
  },
  ogImage: {
    url: '/assets/blog/best-discord-alternatives-2026/cover.png',
  },
  featured: true,
  tags: [
    'discord alternative',
    'discord alternatives',
    'best discord alternative',
    'encrypted discord alternative',
    'open source discord alternative',
    'matrix vs discord',
    'revolt',
    'stoat',
    'fluxer',
    'nerimity',
    'gamevox',
    'armada',
    'privacy',
    'decentralized chat',
    'self-hosting',
    'discord privacy',
  ],
  keywords:
    'best discord alternatives, discord alternatives 2026, encrypted discord alternative, open source discord alternative, matrix vs discord, revolt vs discord, stoat chat, fluxer chat, nerimity, nerimity discord alternative, gamevox, gamevox discord alternative, decentralized discord alternative, self hosted discord alternative, discord alternative without phone number, private discord alternative, discord data breach, discord age verification, discord ipo, is discord encrypted, armada discord alternative, discord alternative comparison',
  faq: [
    {
      question: 'What is the best Discord alternative in 2026?',
      answer:
        'It depends on what you need. For an encrypted, decentralized, Discord-shaped community app, Armada is the closest match: it has servers, channels, voice, and roles, every community is end-to-end encrypted by default, and no company can shut it down. Matrix is the most mature federated option, and Signal is the strongest pure messenger, but neither is a drop-in Discord replacement.',
    },
    {
      question: 'Are Discord alternatives like Revolt and Fluxer end-to-end encrypted?',
      answer:
        'No. Revolt (now renamed Stoat) and Fluxer are open source and pleasant to use, but neither offers end-to-end encryption for chat. Their servers can read message history the same way Discord can. Matrix, Signal, and Armada do encrypt chat end to end.',
    },
    {
      question: 'Is Matrix a good Discord alternative?',
      answer:
        'Matrix is the most mature open, federated, end-to-end encrypted option, and Element is a solid client. Its trade-offs are metadata leakage across federated servers, key-management complexity, and weaker moderation and large-community UX than Discord. Armada aims for the same privacy goals with a more Discord-like feel and a Nostr key instead of a homeserver account.',
    },
    {
      question: 'Which Discord alternative does not require a phone number or email?',
      answer:
        'Armada and Fluxer both let you sign up without an email or phone number. Armada uses a Nostr key as your account, so there is no email, phone, face scan, or ID at any point. Signal and Telegram both require a phone number, and matrix.org requires an email.',
    },
    {
      question: 'What happened to Revolt and Guilded?',
      answer:
        'Revolt renamed itself Stoat in October 2025 after a trademark dispute; it is the same app. Guilded, which Roblox bought in 2021, was shut down in December 2025. Guilded is a reminder that a company-owned alternative can be acquired and then killed, taking your community with it.',
    },
    {
      question: 'Can a Discord alternative be shut down or banned like Discord?',
      answer:
        'Centralized alternatives (Revolt/Stoat, Fluxer, Signal, Telegram) run on one company\'s servers, so that company can ban accounts or go offline. Federated and decentralized options (Matrix, Armada, Flotilla) spread across many independent servers or relays, so no single operator can erase your identity or delete your community everywhere.',
    },
    {
      question: 'Is Armada free and open source?',
      answer:
        'Yes. Armada is free and open source under the AGPL-3.0 license, with no ads and no paid tier. Use it at armada.buzz or install the Android app from Zap Store.',
    },
  ],
  howTo: {
    name: 'How to choose a Discord alternative',
    description:
      'A short checklist for picking a Discord alternative that fits your privacy and community needs.',
    totalTime: 'PT5M',
    steps: [
      {
        name: 'Decide if you need encrypted chat',
        text: 'If you want messages nobody but members can read, rule out apps that only encrypt calls or nothing at all. Matrix, Signal, and Armada encrypt chat end to end; Discord, Revolt/Stoat, and Fluxer do not.',
      },
      {
        name: 'Decide if you need to be un-shutdownable',
        text: 'If losing your community to a ban or a company shutdown is unacceptable, pick a federated or decentralized option like Matrix or Armada over a single-company app.',
      },
      {
        name: 'Check the signup requirements',
        text: 'If you want to avoid handing over a phone number, email, or ID, choose an app that signs you up with a key instead. Armada uses a Nostr key with no personal information.',
      },
      {
        name: 'Try it with your community',
        text: 'Open the app, create a community, and invite a few members before you move everyone. Armada runs on the web at armada.buzz and on Android, Linux, and Windows.',
      },
    ],
  },
};

type Support = 'yes' | 'no' | 'partial';

interface CompRow {
  app: string;
  logo: string;
  highlight?: boolean;
  cells: { value: Support; label: string }[];
}

const LOGO_DIR = '/assets/blog/best-discord-alternatives-2026/logos';

const columns = [
  'Open source',
  'E2E Encrypted',
  'No company kill switch',
  'Self-hostable',
  'Sign up without personal info',
  'No ads',
];

const rows: CompRow[] = [
  {
    app: 'Armada',
    logo: `${LOGO_DIR}/armada.svg`,
    highlight: true,
    cells: [
      { value: 'yes', label: 'AGPL-3.0' },
      { value: 'yes', label: 'End-to-end by default' },
      { value: 'yes', label: 'Decentralized on Nostr relays' },
      { value: 'yes', label: 'Run your own relay' },
      { value: 'yes', label: 'Nostr key, no email' },
      { value: 'yes', label: 'No ads, no paid tier' },
    ],
  },
  {
    app: 'Discord',
    logo: `${LOGO_DIR}/discord.svg`,
    cells: [
      { value: 'no', label: 'Proprietary' },
      { value: 'no', label: 'Calls only, not text' },
      { value: 'no', label: 'One company' },
      { value: 'no', label: 'Hosted only' },
      { value: 'no', label: 'Email or phone, ID in some regions' },
      { value: 'no', label: 'Quests and video ads' },
    ],
  },
  {
    app: 'Matrix / Element',
    logo: `${LOGO_DIR}/element.svg`,
    cells: [
      { value: 'yes', label: 'AGPL / Apache' },
      { value: 'yes', label: 'On for new private rooms' },
      { value: 'yes', label: 'Federated homeservers' },
      { value: 'yes', label: 'Run a homeserver' },
      { value: 'partial', label: 'matrix.org needs email; other servers vary' },
      { value: 'yes', label: 'No ads' },
    ],
  },
  {
    app: 'Stoat (ex-Revolt)',
    logo: `${LOGO_DIR}/stoat.svg`,
    cells: [
      { value: 'yes', label: 'AGPLv3' },
      { value: 'no', label: 'Not encrypted' },
      { value: 'no', label: 'Central; self-hosts are islands' },
      { value: 'yes', label: 'Yes, but no federation' },
      { value: 'no', label: 'Email required' },
      { value: 'yes', label: 'No ads' },
    ],
  },
  {
    app: 'Fluxer',
    logo: `${LOGO_DIR}/fluxer.png`,
    cells: [
      { value: 'yes', label: 'AGPLv3' },
      { value: 'no', label: 'Not offered' },
      { value: 'no', label: 'Central; self-hosts are islands' },
      { value: 'yes', label: 'Yes, but no federation' },
      { value: 'yes', label: 'No email needed' },
      { value: 'yes', label: 'No ads' },
    ],
  },
  {
    app: 'Nerimity',
    logo: `${LOGO_DIR}/nerimity.png`,
    cells: [
      { value: 'yes', label: 'GPL-3.0' },
      { value: 'no', label: 'Not offered' },
      { value: 'no', label: 'Central; self-hosts are islands' },
      { value: 'yes', label: 'Yes, but no federation' },
      { value: 'no', label: 'Email required' },
      { value: 'yes', label: 'Donation funded' },
    ],
  },
  {
    app: 'GameVox',
    logo: `${LOGO_DIR}/gamevox.png`,
    cells: [
      { value: 'no', label: 'Proprietary' },
      { value: 'no', label: 'Calls only, not text' },
      { value: 'no', label: 'One company; cloud login' },
      { value: 'partial', label: 'Yes, but cloud auth required' },
      { value: 'yes', label: 'Username only, no email' },
      { value: 'yes', label: 'Paid tiers, no ads' },
    ],
  },
  {
    app: 'Flotilla',
    logo: `${LOGO_DIR}/flotilla.png`,
    cells: [
      { value: 'yes', label: 'AGPL' },
      { value: 'partial', label: 'DMs yes, spaces no' },
      { value: 'yes', label: 'Decentralized on Nostr relays' },
      { value: 'yes', label: 'Run your own relay' },
      { value: 'yes', label: 'Nostr key, no email' },
      { value: 'yes', label: 'No ads' },
    ],
  },
];

const featureColumns = [
  'Voice chat',
  'Video and screen share',
  'Custom emoji',
  'GIF keyboard',
  'Threads',
  'Events',
  'Bots',
];

const featureRows: CompRow[] = [
  {
    app: 'Armada',
    logo: `${LOGO_DIR}/armada.svg`,
    highlight: true,
    cells: [
      { value: 'yes', label: 'Voice channels' },
      { value: 'yes', label: 'With screen share' },
      { value: 'yes', label: 'Custom emoji' },
      { value: 'yes', label: 'Built-in picker' },
      { value: 'yes', label: 'Yes' },
      { value: 'yes', label: 'Community events' },
      { value: 'yes', label: 'Concord bot SDK' },
    ],
  },
  {
    app: 'Matrix / Element',
    logo: `${LOGO_DIR}/element.svg`,
    cells: [
      { value: 'yes', label: 'Element Call' },
      { value: 'yes', label: 'With screen share' },
      { value: 'yes', label: 'Custom emoji' },
      { value: 'partial', label: 'Via integrations' },
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No native events' },
      { value: 'yes', label: 'Bots and bridges' },
    ],
  },
  {
    app: 'Fluxer',
    logo: `${LOGO_DIR}/fluxer.png`,
    cells: [
      { value: 'yes', label: 'Voice channels' },
      { value: 'yes', label: 'With screen share' },
      { value: 'yes', label: 'Emotes and stickers' },
      { value: 'no', label: 'No' },
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
      { value: 'yes', label: 'Discord-style API' },
    ],
  },
  {
    app: 'Flotilla',
    logo: `${LOGO_DIR}/flotilla.png`,
    cells: [
      { value: 'yes', label: 'Voice channels' },
      { value: 'partial', label: 'Video, no screen share' },
      { value: 'no', label: 'No' },
      { value: 'no', label: 'No' },
      { value: 'yes', label: 'Yes' },
      { value: 'yes', label: 'Event calendar' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    app: 'Stoat (ex-Revolt)',
    logo: `${LOGO_DIR}/stoat.svg`,
    cells: [
      { value: 'yes', label: 'Voice channels' },
      { value: 'no', label: 'Voice only' },
      { value: 'yes', label: 'Custom emoji' },
      { value: 'no', label: 'No' },
      { value: 'no', label: 'No threads' },
      { value: 'no', label: 'No' },
      { value: 'yes', label: 'Bot API' },
    ],
  },
];

function SupportIcon({ value }: { value: Support }) {
  if (value === 'yes') {
    return <Check className="mx-auto h-5 w-5 text-emerald-600 dark:text-emerald-400" aria-hidden />;
  }
  if (value === 'no') {
    return <X className="mx-auto h-5 w-5 text-rose-500" aria-hidden />;
  }
  return <Minus className="mx-auto h-5 w-5 text-amber-500" aria-hidden />;
}

const supportText: Record<Support, string> = {
  yes: 'Yes',
  no: 'No',
  partial: 'Partial',
};

function ComparisonTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: CompRow[];
}) {
  return (
    <div className="not-prose my-8 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b-2 border-border">
            <th
              className="sticky left-0 bg-background p-3 align-middle font-semibold"
              style={{ textAlign: 'center' }}
            >
              App
            </th>
            {columns.map((col) => (
              <th
                key={col}
                className="p-3 align-middle font-semibold text-muted-foreground"
                style={{ textAlign: 'center' }}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.app}
              className={
                row.highlight
                  ? 'border-b border-border bg-[#ec4899]/5'
                  : 'border-b border-border'
              }
            >
              <th
                scope="row"
                className={
                  row.highlight
                    ? 'sticky left-0 bg-[#fdf2f8] p-3 text-center align-top dark:bg-[#1a0f18]'
                    : 'sticky left-0 bg-background p-3 text-center align-top'
                }
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={row.logo}
                    alt={`${row.app} logo`}
                    loading="lazy"
                    className="mb-1.5 h-7 w-7 object-contain"
                  />
                  <span
                    className={
                      row.highlight
                        ? 'font-bold text-[#db2777] dark:text-[#ec4899]'
                        : 'font-semibold'
                    }
                  >
                    {row.app.includes(' (') ? (
                      <>
                        {row.app.slice(0, row.app.indexOf(' ('))}
                        <span className="block text-xs font-normal text-muted-foreground">
                          {row.app.slice(row.app.indexOf(' (') + 1)}
                        </span>
                      </>
                    ) : (
                      row.app
                    )}
                  </span>
                </div>
              </th>
              {row.cells.map((cell, i) => (
                <td key={columns[i]} className="p-3 text-center align-top">
                  <SupportIcon value={cell.value} />
                  <span className="sr-only">{supportText[cell.value]}. </span>
                  <span className="mt-1 block text-xs leading-tight text-muted-foreground">
                    {cell.label}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BestDiscordAlternatives2026() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>Why People Are Leaving Discord in 2026</h2>

      <p>
        In a breach disclosed in October 2025, attackers compromised one of
        Discord's third-party customer support vendors and took data belonging to
        users who had contacted support, including roughly 70,000 government ID
        photos that people had uploaded for age-verification appeals. Those IDs
        existed to be stolen only because Discord collected them in the first
        place. Discord disputes the attackers' larger claims about the haul, but
        the government IDs are confirmed.
      </p>

      <p>
        The collection is expanding. Under the UK's Online Safety Act, Discord
        began requiring UK users to verify their age with a face scan or an ID
        upload in 2025, with similar checks in Australia by the end of the year. In
        early 2026, Discord announced it would take age verification global,
        defaulting accounts to a teen experience until the user proves they are an
        adult, partly through an AI model that guesses your age from your activity.
        The backlash was loud enough that Discord delayed the worldwide rollout to
        the second half of 2026, the window we are in now.
      </p>

      <h3>Is Discord Encrypted? Your Text Isn't</h3>

      <p>
        Discord introduced end-to-end encryption for voice and video with its DAVE
        protocol in 2024 and made it the default for every call in 2026. Text
        messages got nothing. Your DMs, your server chat, and your full channel
        history sit on Discord's servers in a form the company can read, scan, and
        hand over in response to legal requests. Discord's VP of core technology
        confirmed there are no current plans to encrypt text. If you have ever
        asked whether Discord can read your messages, the answer is yes, all of
        them, going back years.
      </p>

      <h3>Automated Bans That Are Hard to Appeal</h3>

      <p>
        Search "banned from Discord for no reason" and you will find years of
        near-identical stories: an account disabled overnight, an appeal that
        returns an automated denial or nothing at all, and no human to reach. A
        Discord ban is platform-wide, so you lose every server and DM at once, even
        if the supposed problem was in one server you barely used. This is a widely
        voiced user grievance rather than a measured statistic, but the pattern of
        automated moderation with weak human appeals is exactly why an unbannable
        account appeals to so many people.
      </p>

      <h3>An IPO, and the Ads That Come With It</h3>

      <p>
        Discord spent years saying it would never run ads, then shipped sponsored
        Quests in 2024 and video ads on mobile in 2025, and partnered with ad
        measurement firms to track how those ads perform. In January 2026,
        Bloomberg reported Discord had confidentially filed for a US IPO. Going
        public raises the pressure to squeeze more revenue out of users, and the ad
        business already built points in one direction. Discord says it does not
        sell your personal information, but it does target ads using your account
        activity, and that is the model a public company will be asked to grow.
      </p>

      <h2>What to Look For in a Discord Alternative</h2>

      <p>
        Most "best Discord alternative" lists rank apps by feature checklists. The
        questions that actually protect you are different, and they are the columns
        in the chart below:
      </p>

      <ul>
        <li>
          <strong>Is group chat end-to-end encrypted?</strong> Not just calls, and
          not just one-to-one DMs. The messages your whole community sends.
        </li>
        <li>
          <strong>Can one company shut it down?</strong> If the app runs on a
          single company's servers, that company can ban you or simply switch it
          off, as Roblox did with Guilded in December 2025.
        </li>
        <li>
          <strong>Is it open source, and can you self-host?</strong> So you can
          audit it, fork it, and run it on hardware you control.
        </li>
        <li>
          <strong>Does signup demand personal information?</strong> A phone number,
          an email, or an ID is a record that can leak, as Discord's did.
        </li>
        <li>
          <strong>Are there ads?</strong> Ads mean your attention and your activity
          are the product.
        </li>
      </ul>

      <h2>Discord Alternatives Compared</h2>

      <p>
        Here is how the popular options stack up on the questions that matter. A
        green check is a clear yes, red is a no, and amber is a qualified or
        partial answer, explained in the notes below the table.
      </p>

      <ComparisonTable columns={columns} rows={rows} />

      <p className="text-sm text-muted-foreground">
        Notes: Revolt renamed itself Stoat in October 2025; it is the same app.
        Guilded (owned by Roblox) shut down in December 2025 and is left off the
        chart. Matrix rooms are encrypted by default only for new private
        conversations; large public rooms usually are not. Flotilla is another
        Nostr app: its direct messages are encrypted, but its community "spaces"
        are not end-to-end encrypted.
      </p>

      <h2>What Each Discord Alternative Offers</h2>

      <h3>Matrix and Element</h3>

      <p>
        Matrix is the most mature open, federated, encrypted option, and Element is
        a capable client. Rooms can be end-to-end encrypted, and because the
        network is federated, no single company can take it down. The trade-offs
        are real: federated servers still see metadata like who is in a room and
        when they post, key management and device verification are fiddly, and
        moderation and large-community features lag behind Discord. If you want the
        most battle-tested decentralized option and do not mind running or trusting
        a homeserver, Matrix is the one to beat.
      </p>

      <h3>Revolt, Now Stoat</h3>

      <p>
        Revolt is an open source Discord clone that feels familiar right away, and
        it renamed itself Stoat in October 2025 after a trademark dispute. It is
        AGPL licensed and self-hostable. Two caveats matter: it is not end-to-end
        encrypted, so its servers can read chat history the same way Discord can,
        and self-hosted instances do not federate, so each one is an island. It has
        also struggled to stay up during the traffic surges that follow every
        Discord controversy.
      </p>

      <h3>Fluxer</h3>

      <p>
        Fluxer is a newer open source Discord clone out of Sweden, AGPL licensed,
        with a genuinely nice touch: you can sign up in seconds without an email.
        It is self-hostable and ad-free. Like Revolt, though, it does not offer
        end-to-end encryption, and its architecture is a central instance with
        self-hosts that do not federate. It is a good pick if your priority is a
        low-friction, no-email Discord clone rather than encryption.
      </p>

      <h3>Nerimity</h3>

      <p>
        Nerimity is a community-run open source Discord clone, GPL-3.0 licensed
        and funded by donations rather than ads. Both the SolidJS frontend and the
        backend are public, so you can self-host your own instance, though like
        Revolt and Fluxer those instances do not federate with each other. It is
        not end-to-end encrypted, and registration asks for an email. It is a
        reasonable pick if you want a familiar, donation-backed clone and encryption
        is not a requirement.
      </p>

      <h3>GameVox</h3>

      <p>
        GameVox is a gaming-focused voice, video, and text app from LightSpeed
        Gaming, built as a native app rather than an Electron wrapper. Its strong
        points are a low-friction signup (a username and password, no email, phone,
        or ID) and a self-hosted server option that keeps your voice, chat, and
        files on your own hardware. The caveats: it is proprietary, not open source;
        end-to-end encryption covers voice only, not text; and even a self-hosted
        server still logs members in through GameVox's cloud, so the company remains
        in the loop. It is aimed at gaming communities that want a TeamSpeak-style
        voice tool without ID checks, not at people who need encrypted text.
      </p>

      <h2>Which Open Source Discord Alternative Has the Most Features?</h2>

      <p>
        If you are trying to work out which open source option comes closest to
        Discord, the chart below stacks up Armada, Matrix, Fluxer, Flotilla, and
        Stoat on the features people use most: voice, video, custom emoji, GIFs,
        threads, events, and bots. Green is a yes, amber is partial, red is a no.
      </p>

      <ComparisonTable columns={featureColumns} rows={featureRows} />

      <p className="text-sm text-muted-foreground">
        Notes: All five cover servers, channels, roles, and file sharing, so the
        table focuses on where they differ. Armada is the only one with the whole
        set: voice, video with screen share, custom emoji, a GIF picker, threads,
        events, and bots. Matrix matches most of it, but has no native events and
        gets GIFs through integrations. Fluxer adds screen sharing and a
        Discord-compatible bot API, without events or a GIF picker. Flotilla has
        an event calendar plus voice and video, but no custom emoji, GIF picker,
        or bots. Stoat has voice, custom emoji, and bots, but no video, threads,
        or events.
      </p>

      <h2>Armada: Encrypted, Unstoppable Discord Alternative</h2>

      <p>
        Armada is the only option in the chart that is a Discord-shaped community
        app, encrypted by default, un-shutdownable, open source, self-hostable, and
        signup-free of personal information, all at once. It is built by{' '}
        <a href="/">Soapbox</a> on <a href="/blog/nostr101">Nostr</a>, an open
        protocol that works like email: many independent servers, one identity you
        own, and no company in the middle. If you have used Discord, the layout is
        instantly familiar: communities on the left, channels in a sidebar, chat in
        the middle, members on the right.
      </p>

      <figure className="m-0">
        <img
          src="/assets/blog/armada-open-source-encrypted-discord-alternative/desktop-dark.webp"
          alt="Armada desktop app, an open source encrypted Discord alternative, showing channels, threads, a voice message, bots, and member roles in dark theme"
          className="w-full rounded-lg border"
        />
        <figcaption>
          An encrypted community in Armada: channels, threads, voice messages,
          bots, and roles, in a layout anyone from Discord already knows.
        </figcaption>
      </figure>

      <h3>Every Community Is Encrypted by Default</h3>

      <p>
        Where Discord encrypts only calls, and where Revolt and Fluxer encrypt
        nothing, Armada encrypts every community end to end using the open{' '}
        <a
          href="https://github.com/concord-protocol/concord"
          target="_blank"
          rel="noopener noreferrer"
        >
          Concord protocol
        </a>
        . Messages are locked on your device before they leave it, and the relays
        that carry them see only sealed ciphertext, with the sender and even the
        community's name hidden. We trust it enough that Team Soapbox shut down our
        company Signal and moved all internal chat to Armada, and we run a{' '}
        <a
          href="https://gitlab.com/soapbox-pub/armada"
          target="_blank"
          rel="noopener noreferrer"
        >
          public bug bounty
        </a>{' '}
        on the implementation. The first payout, $1,000, went out in June for a
        role-revocation flaw that was fixed the same day it was reported.
      </p>

      <h3>No Company, No Kill Switch</h3>

      <p>
        Your Armada account is a cryptographic key you hold, the same kind of key
        used across Nostr. Since no company issued it, no company can revoke it, so
        a platform-wide ban is technically impossible. Communities get the same
        treatment: a Concord community publishes to several independent relays at
        once, and if one relay drops the community or goes down, clients reroute to
        the others and nothing is lost. There is no server to seize and no
        headquarters to pressure. Guilded's shutdown is the cautionary tale on the
        other side of this: when a company owns your community, it can end it.
      </p>

      <h3>Sign Up With No Email, Phone, or ID</h3>

      <p>
        Signing up for Armada takes about a minute: open the app, tap sign up, and
        a key is generated for you. That key is the whole account. There is no
        email confirmation, no SMS code, and no age-verification selfie, so there
        is no database of your documents waiting to leak. The same key logs you in
        on the web, on Android, and on desktop, and it works across other Nostr
        apps too. Back it up carefully, because the flip side of an unbannable
        account is that you are the one holding the key. Our guide to{' '}
        <a href="/blog/managing-nostr-keys">managing your Nostr key</a> covers how.
      </p>

      <figure className="m-0">
        <img
          src="/assets/blog/armada-open-source-encrypted-discord-alternative/desktop-light.webp"
          alt="Armada light theme showing an encrypted community channel with a custom emoji picker, GIFs, reactions, and threaded replies, as a private Discord alternative"
          className="w-full rounded-lg border"
        />
        <figcaption>
          The same community in light theme. Armada ships text and voice channels,
          threads, roles, events, bots, custom emoji, and more than a dozen theme
          presets.
        </figcaption>
      </figure>

      <h3>Things Even Other Alternatives Can't Do</h3>

      <ul>
        <li>
          <strong>Bluetooth mesh chat.</strong> On Android, phones near each other
          relay messages over Bluetooth with no internet at all, at a protest, a
          festival, or during a blackout. It is compatible with bitchat.
        </li>
        <li>
          <strong>Notifications without Google.</strong> Pings on Android arrive
          directly from your community instead of through Google's push servers, so
          no third party learns who messages you.
        </li>
        <li>
          <strong>Buzz workspaces.</strong> Armada also connects to{' '}
          <a href="/blog/armada-buzz-communities">Buzz communities</a>, Block's
          open source team chat, with forums, git projects, and AI agents.
        </li>
        <li>
          <strong>A Discord bridge.</strong> You do not have to move everyone at
          once. A{' '}
          <a href="/armada">two-way bridge</a> can mirror a Discord server into an
          Armada community while people migrate.
        </li>
        <li>
          <strong>An identity that outlives the app.</strong> Your key works across
          the whole Nostr ecosystem, so your profile, name, contacts, and DMs are
          yours even if you stop using Armada.
        </li>
      </ul>

      <h2>Armada Is in Open Beta</h2>

      <p>
        Fair warning: Armada is early software, version 0.x, with releases landing
        almost daily on the road to v1.0. Everything above works today on the web,{' '}
        <a
          href="https://armada.buzz/downloads"
          target="_blank"
          rel="noopener noreferrer"
        >
          Android, Linux, and Windows
        </a>
        . There is no iOS app yet, though the web app
        works fine on an iPhone, and some Discord conveniences are still catching
        up, so expect occasional rough edges. The trade for that is that the
        features people ask for this month tend to ship the next. The full story of how it was built,
        including every protocol tried and abandoned, is in{' '}
        <a href="/blog/building-an-armada-voyage-to-encrypted-communities">
          Building an Armada
        </a>
        .
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>What is the best Discord alternative in 2026?</h3>
      <p>
        It depends on your priorities. For an encrypted, decentralized,
        Discord-shaped community app, Armada is the closest match. Matrix is the
        most mature federated option, and Signal is the strongest pure messenger,
        but neither is a drop-in replacement for a server-and-channel community.
      </p>

      <h3>Are Revolt, Stoat, and Fluxer encrypted?</h3>
      <p>
        No. Revolt (now Stoat) and Fluxer are open source and easy to use, but
        neither encrypts chat end to end, so their servers can read message history
        the way Discord can. Matrix, Signal, and Armada do encrypt chat end to end.
      </p>

      <h3>Which Discord alternative needs no phone number or email?</h3>
      <p>
        Armada and Fluxer both let you sign up without an email or phone number.
        Armada uses a Nostr key, so there is no email, phone, face scan, or ID at
        any point. Signal and Telegram require a phone number.
      </p>

      <h3>What happened to Revolt and Guilded?</h3>
      <p>
        Revolt renamed itself Stoat in October 2025 after a trademark dispute; it
        is the same app. Guilded, bought by Roblox in 2021, was shut down in
        December 2025, a reminder that a company-owned alternative can be acquired
        and then killed.
      </p>

      <h3>Can a Discord alternative be shut down like Discord?</h3>
      <p>
        Centralized ones can. Revolt/Stoat, Fluxer, Signal, and Telegram all run on
        one company's servers. Federated and decentralized options like Matrix,
        Armada, and Flotilla spread across many independent servers or relays, so no
        single operator can erase your identity or delete your community everywhere.
      </p>

      <h3>Is Armada free and open source?</h3>
      <p>
        Yes. Armada is free and open source under the AGPL-3.0 license, with no ads
        and no paid tier. Use it at armada.buzz or install the Android app from Zap
        Store.
      </p>

      <h2>Try It With Us</h2>

      <p>
        The easiest way to judge Armada against everything above is to open it and
        look around. Grab the app, then browse the encrypted communities already
        running on it.
      </p>

      <div className="not-prose mt-8 flex flex-wrap justify-center gap-3">
        <Button
          size="lg"
          className="bg-[#ec4899] px-8 py-3 text-lg font-bold text-white hover:bg-[#db2777]"
          asChild
        >
          <a href="https://armada.buzz" target="_blank" rel="noopener noreferrer">
            Try Armada on the Web
          </a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-[#ec4899] px-8 py-3 text-lg font-bold text-[#ec4899] hover:bg-[#ec4899] hover:text-white dark:hover:bg-[#ec4899] dark:hover:text-white"
          asChild
        >
          <a
            href="https://play.google.com/store/apps/details?id=buzz.armada.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/icons/google-play.svg"
              alt=""
              className="mr-2 h-5 w-5"
            />
            Get on Google Play
          </a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-[#ec4899] px-8 py-3 text-lg font-bold text-[#ec4899] hover:bg-[#ec4899] hover:text-white dark:hover:bg-[#ec4899] dark:hover:text-white"
          asChild
        >
          <a
            href="https://zapstore.dev/apps/buzz.armada.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/icons/zapstore.png"
              alt=""
              className="mr-2 h-5 w-5 rounded"
            />
            Get on Zap Store
          </a>
        </Button>
      </div>

      <p className="mt-3 text-center text-sm text-muted-foreground">
        An iOS app is coming soon. For now, the web app works on iPhone.
      </p>

      <div className="not-prose my-10">
        <a
          href="https://armada.buzz/invite/naddr1qvzqqqyzz5pzp0flk57hwj8x6a969ys0m7f50tl9jlunnadhuxjaqlx4hgh5scktqqqq3w62qc#BAACAwSD_R2taBjMMDl8Ybd670Lq"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <Card className="border border-[#ec4899]/50 bg-gradient-to-br from-[#181021] to-[#100b15] transition-shadow hover:shadow-lg hover:shadow-[#ec4899]/20">
            <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
              <Compass className="w-8 h-8 shrink-0 text-[#ec4899]" />
              <div>
                <p className="m-0 font-semibold text-white">
                  Discover communities on Armada
                </p>
                <p className="m-0 text-sm text-white/70">
                  Browse public, end-to-end encrypted communities already running
                  on Armada, including the one where the team that builds it hangs
                  out. Signing up takes a minute, with a key you create on the spot.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center rounded-full bg-[#ec4899] px-6 py-3 font-bold text-white">
                Discover communities
              </span>
            </CardContent>
          </Card>
        </a>
      </div>

      <h2>Related Reading</h2>

      <ul>
        <li>
          <a href="/blog/armada-open-source-encrypted-discord-alternative">
            Armada: The Open Source, Encrypted Discord Alternative
          </a>
        </li>
        <li>
          <a href="/blog/building-an-armada-voyage-to-encrypted-communities">
            Building an Armada: Our Voyage to Encrypted Communities on Nostr
          </a>
        </li>
        <li>
          <a href="/blog/armada-buzz-communities">
            Use Buzz on Your Phone: Armada Adds Buzz Communities
          </a>
        </li>
        <li>
          <a href="/blog/nostr101">
            Nostr 101: A Beginner Guide to the Decentralized Social Network
          </a>
        </li>
        <li>
          <a href="/blog/how-to-disappear-from-the-surveillance-internet">
            How to Disappear From the Surveillance Internet
          </a>
        </li>
      </ul>
    </article>
  );
}
