import type { BlogPostMeta } from '@/lib/blog/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { EmailSignupForm } from '@/components/EmailSignupForm';
import { MessagesSquare } from 'lucide-react';

export const meta: BlogPostMeta = {
  slug: 'armada-open-source-encrypted-discord-alternative',
  title: 'Armada: The Open Source, Encrypted Discord Alternative',
  excerpt:
    'Banned from Discord? Done with ID scans and data breaches? Armada is a free, open source, end-to-end encrypted Discord alternative, now in early access.',
  coverImage: '/assets/blog/armada-open-source-encrypted-discord-alternative/cover.png',
  date: '2026-07-22',
  author: {
    name: 'M. K. Fain',
    picture: '/assets/avatars/mk.jpg',
  },
  ogImage: {
    url: '/assets/blog/armada-open-source-encrypted-discord-alternative/cover.png',
  },
  featured: false,
  tags: [
    'discord alternative',
    'armada',
    'open source',
    'encrypted chat',
    'privacy',
    'nostr',
    'concord',
    'banned from discord',
    'self-hosting',
    'voice chat',
    'community chat',
    'decentralized chat',
    'discord privacy',
  ],
  keywords:
    'discord alternative, open source discord alternative, encrypted discord alternative, banned from discord, discord banned for no reason, discord ban appeal, is discord encrypted, can discord read my messages, discord data breach, discord age verification, discord id verification, self hosted discord alternative, discord alternative without phone number, private discord alternative, free discord alternative, armada app, armada beta, armada early access, nostr chat app',
  faq: [
    {
      question: 'What is the best open source Discord alternative?',
      answer:
        'Armada is a free, open source Discord alternative built on Nostr. It has servers, channels, threads, voice chat, screen sharing, roles, and moderation, and every community is end-to-end encrypted by default using the Concord protocol.',
    },
    {
      question: 'Is Discord end-to-end encrypted?',
      answer:
        'Discord encrypts voice and video calls end to end, and made that the default for every call in March 2026. Text messages, DMs, and channel history are not end-to-end encrypted, and Discord has said it has no plans to encrypt them. Armada encrypts all community messages end to end, so relay operators see only sealed ciphertext.',
    },
    {
      question: 'Is Armada ready to use?',
      answer:
        'Armada is in open beta, still ahead of its v1.0 release. Communities, encrypted DMs, voice and video calls, and the Android app all work today, with new releases landing almost daily. Expect occasional rough edges while it matures.',
    },
    {
      question: 'Do I need a phone number or email to use Armada?',
      answer:
        'No. An Armada account is a cryptographic key, so there is no email, phone number, face scan, or ID verification. You generate a key when you sign up and use it to log in anywhere.',
    },
    {
      question: 'Can I be banned from Armada?',
      answer:
        'There is no Armada company account to ban. Community owners moderate their own spaces and can remove members, but no company can delete your identity or take your community down everywhere. Communities live on multiple relays at once, so losing one relay does not end the conversation.',
    },
    {
      question: 'Is Armada free?',
      answer:
        'Yes. Armada is free and open source under the AGPL-3.0 license. It has no ads and no paid tier. Use it at armada.buzz or install the Android app from Zap Store.',
    },
    {
      question: 'Does Armada have voice chat like Discord?',
      answer:
        'Yes. Armada communities support voice channels with video calls and screen sharing, along with threads, reactions, custom emoji, roles, events with RSVPs, and encrypted direct messages.',
    },
    {
      question: 'Does Armada work on iPhone?',
      answer:
        'There is no iOS app yet. The web app at armada.buzz works on iPhone in the browser, and native apps exist for Android, Linux, and Windows.',
    },
    {
      question: 'Can I self-host a Discord alternative with Armada?',
      answer:
        'Yes. Armada is AGPL-3.0 open source and communities live on relays you can run yourself. Even without self-hosting, your messages are end-to-end encrypted, so relay operators cannot read them.',
    },
  ],
  howTo: {
    name: 'How to switch from Discord to Armada',
    description:
      'Set up a free, encrypted Discord alternative and move your community to Armada.',
    totalTime: 'PT10M',
    steps: [
      {
        name: 'Open Armada',
        text: 'Go to armada.buzz in your browser, or install Armada on Android from Zap Store. Desktop builds for Linux and Windows are also available.',
      },
      {
        name: 'Create your key',
        text: 'Tap Sign up to generate a Nostr key. Armada never asks for an email, phone number, or ID. Back up your key somewhere safe, because it is your account.',
      },
      {
        name: 'Create an encrypted community',
        text: 'Create a community, add text and voice channels, and set roles for your moderators. Everything in it is end-to-end encrypted by default.',
      },
      {
        name: 'Invite your members',
        text: 'Share an invite link or invite people directly by name. Friends join from the browser or the app after the same one-minute signup.',
      },
    ],
  },
};

export default function ArmadaOpenSourceEncryptedDiscordAlternative() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        People search for a Discord alternative for concrete reasons:
        surprise bans, face scans, leaked IDs, ads.{' '}
        <a href="/armada">Armada</a> is our answer: a free, open source chat
        app with servers, channels, voice, and moderation, where every
        community is end-to-end encrypted and no company sits in the middle.
        It is in open beta ahead of v1.0, so releases land almost daily and
        early users steer the roadmap.
      </p>

      <div className="not-prose my-8 flex flex-wrap justify-center gap-3">
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

      <h2>Why People Are Looking for a Discord Alternative</h2>

      <p>
        Discord is where the communities are, and that is exactly the
        problem. One company holds every account and every message, so when
        that company makes a bad call, there is nothing you can do about it.
        The complaints below come up constantly, and they are the ones Armada
        was built to fix.
      </p>

      <h3>Banned From Discord With No Explanation</h3>

      <p>
        Search "banned from Discord for no reason" and you will find years of
        identical stories: an account disabled overnight, an appeal form that
        returns an automated denial or nothing at all, and no human to talk
        to. A Discord ban is platform-wide. You lose every server you belong
        to and every DM at once, even if the supposed violation happened in
        one server you barely used. Server owners have it worse: entire
        communities, some with years of accumulated knowledge, get deleted
        without warning, and there is no backup button.
      </p>

      <p>
        On Armada, your identity is a cryptographic key that you hold. There
        is no company account to disable, so a platform-wide ban is
        technically impossible. Individual communities still moderate
        themselves, and owners can remove people from their own spaces, but
        nobody can erase you from every community at once or delete a
        community out from under its members.
      </p>

      <h3>Is Discord Encrypted? Your Messages Aren't</h3>

      <p>
        Discord started encrypting voice and video calls with its DAVE
        protocol in 2024 and made that the default for every call in March
        2026. Text messages got nothing, and in May 2026 Discord confirmed it
        has no plans to change that. Your messages, DMs, and full channel
        history sit on Discord's servers, where the company can read and scan
        them, and where they can be produced in response to legal requests.
        If you have ever asked "can Discord read my messages," the answer is
        yes, all of them, going back years.
      </p>

      <p>
        Armada encrypts everything in a community end to end using the open{' '}
        <a
          href="https://github.com/concord-protocol/concord"
          target="_blank"
          rel="noopener noreferrer"
        >
          Concord protocol
        </a>
        . Messages are locked on your device before they are sent, and the
        relays that carry them see only sealed ciphertext, with the sender
        and even the community's name hidden. We trust it enough that Team
        Soapbox shut down our company Signal and moved all internal chat to
        Armada, and we run a{' '}
        <a
          href="https://gitlab.com/soapbox-pub/armada"
          target="_blank"
          rel="noopener noreferrer"
        >
          public bug bounty
        </a>{' '}
        on the implementation. The first payout went out in June: $1,000 for
        a role-revocation flaw that was fixed the same day it was reported.
      </p>

      <figure className="m-0">
        <img
          src="/assets/blog/armada-open-source-encrypted-discord-alternative/desktop-dark.webp"
          alt="Armada desktop app, an open source encrypted Discord alternative, showing channels, threads, a voice message, bots, and member roles in dark theme"
          className="w-full rounded-lg border"
        />
        <figcaption>
          An encrypted community in Armada on desktop: channels, threads,
          voice messages, a GIF picker, and bots, with owner and admin roles
          in the member list.
        </figcaption>
      </figure>

      <h3>Data Breaches and ID Verification</h3>

      <p>
        In a breach disclosed in October 2025, attackers compromised one of
        Discord's third-party customer support vendors and walked away with
        data belonging to users
        who had contacted support, including roughly 70,000 government ID
        photos that people had submitted for age verification appeals. Those
        IDs existed on a vendor's servers because Discord collected them in
        the first place.
      </p>

      <p>
        And the collection is expanding. Under the UK's Online Safety Act,
        Discord began requiring UK users to verify their age with a face scan
        or an ID upload in 2025, with similar checks in Australia. In
        February 2026, Discord announced it would take age verification
        global, defaulting every account to a teen experience until the user
        proves they are an adult. The backlash was loud enough that Discord
        delayed the worldwide rollout to the second half of 2026, the window
        we are in now. A chat app wants your government ID or your
        biometrics, and the 2025 breach showed exactly what can happen to
        that data.
      </p>

      <p>
        Armada's answer is to hold nothing worth stealing. It never asks for
        an email, a phone number, a face scan, or an ID upload, so there is
        no database of your documents waiting to leak. For the wider picture
        on opting out of age-check infrastructure, we wrote{' '}
        <a href="/blog/how-to-disappear-from-the-surveillance-internet">
          How to Disappear From the Surveillance Internet
        </a>
        .
      </p>

      <h3>Ads, Upsells, and Monetization Pressure</h3>

      <p>
        Discord spent years promising it would never do ads, then shipped
        sponsored Quests in 2024 and video ads on mobile in 2025, with Nitro
        upsells layered on top of features that used to be free. With the
        company reportedly filing confidentially for an IPO in January 2026,
        that pressure only points one direction. Armada is AGPL-3.0 open source, has no ads and no paid
        tier, and holds no data worth selling, because encrypted messages are
        worthless to advertisers.
      </p>

      <h2>What Is Armada?</h2>

      <p>
        Armada is a Discord-style chat app built by{' '}
        <a href="/">Soapbox</a> on{' '}
        <a href="/blog/nostr101">Nostr</a>, an open protocol that works like
        email: many independent servers, one identity you own, and no single
        company in control. You do not need to understand any of that to use
        it. If you have used Discord, the layout is instantly familiar:
        communities in a rail on the left, channels in a sidebar, chat in the
        middle, members on the right.
      </p>

      <figure className="not-prose my-8">
        <div className="grid grid-cols-3 gap-3">
          <img
            src="/assets/blog/armada-open-source-encrypted-discord-alternative/mobile-create-community.webp"
            alt="Create encrypted community screen in Armada, a decentralized encrypted chat app that signs you up without email or phone number"
            className="w-full rounded-lg border"
          />
          <img
            src="/assets/blog/armada-open-source-encrypted-discord-alternative/mobile-community-relays.webp"
            alt="Armada community settings showing channels and the multiple independent relays an encrypted community runs on"
            className="w-full rounded-lg border"
          />
          <img
            src="/assets/blog/armada-open-source-encrypted-discord-alternative/mobile-invite.webp"
            alt="Inviting people to an encrypted Armada community with a shareable invite link on Android"
            className="w-full rounded-lg border"
          />
        </div>
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          Armada on Android: start an encrypted community, see the relays it
          runs on, and invite your crew with a revocable link.
        </figcaption>
      </figure>

      <p>Everything you would expect is here:</p>

      <ul>
        <li>
          <strong>Text channels</strong> with threads, replies, reactions,
          markdown, and code blocks
        </li>
        <li>
          <strong>Voice channels</strong> with video calls and screen sharing
        </li>
        <li>
          <strong>Roles and moderation</strong> so owners and admins can run
          their communities
        </li>
        <li>
          <strong>Encrypted direct messages</strong> with anyone on Nostr
        </li>
        <li>
          <strong>Events with RSVPs</strong> for planning inside your
          community
        </li>
        <li>
          <strong>Bots and slash commands</strong>, so the utilities your
          server relies on come along too
        </li>
        <li>
          <strong>A GIF keyboard, custom emoji, and custom themes</strong>,
          because a community app should be fun
        </li>
      </ul>

      <p>
        The difference is what happens underneath. Every community is
        end-to-end encrypted by default, and instead of one company server,
        your community lives on several independent relays at the same time.
      </p>

      <h2>Why You Can't Be Banned From Armada</h2>

      <p>
        Your Armada account is a key pair, the same kind of key used across
        Nostr. Signing up generates one, and logging in anywhere means
        proving you hold it. Since no company issued your account, no company
        can revoke it. Our guide to{' '}
        <a href="/blog/managing-nostr-keys">
          storing and managing your Nostr key
        </a>{' '}
        covers how to back it up properly, because the flip side of an
        unbannable account is that you are the only one holding the key.
      </p>

      <p>
        Communities get the same treatment. A Concord community publishes its
        encrypted messages to multiple relays at once, and members hold the
        key that decrypts them. If a relay goes down or kicks the community
        off, clients reroute to the remaining relays and the conversation
        continues with nothing lost. Anyone can add more relays, including
        one they run themselves. There is no server to seize and no
        headquarters to pressure.
      </p>

      <h2>Sign Up Without a Phone Number, Email, or ID</h2>

      <p>
        Signing up for Armada takes about a minute: open the app, tap Sign
        up, and a key is generated for you. That key is the whole account.
        Armada skips the email confirmation, the SMS code, and the
        age-verification selfie entirely. The same key logs you in on the
        web, on Android, and on desktop, and it works across other Nostr apps
        too, so the identity you create for Armada is yours everywhere. New
        to the protocol? Start with{' '}
        <a href="/blog/nostr101">
          Nostr 101: A Beginner Guide to the Decentralized Social Network
        </a>
        .
      </p>

      <h2>Features Discord Doesn't Have</h2>

      <ul>
        <li>
          <strong>Bluetooth mesh chat.</strong> On Android, phones near each
          other relay messages over Bluetooth with no internet at all, at a
          festival, on a plane, or during a blackout. It is compatible with
          bitchat.
        </li>
        <li>
          <strong>Notifications without Google.</strong> Pings on Android
          arrive directly from your community rather than through Google's
          push servers, so no third party learns who messages you.
        </li>
        <li>
          <strong>Self-hosting.</strong> Run your own relay and your
          community's encrypted data sits on hardware you control. The entire
          app is AGPL-3.0, so you can audit or fork every line. Our{' '}
          <a href="/blog/how-to-self-host-armada">
            step-by-step self-hosting guide
          </a>{' '}
          walks through the app, the relay, and the voice server.
        </li>
        <li>
          <strong>Buzz workspaces.</strong> Armada also connects to{' '}
          <a href="/blog/armada-buzz-communities">Buzz communities</a>,
          Block's open source team chat, complete with forums, git Projects,
          and AI agents.
        </li>
        <li>
          <strong>An identity that outlives the app.</strong> Your key works
          across the whole Nostr ecosystem, so your profile, your name, your
          contacts, and your DMs are yours even if you stop using Armada.
        </li>
      </ul>

      <h2>How to Switch From Discord to Armada</h2>

      <figure className="m-0">
        <img
          src="/assets/blog/armada-open-source-encrypted-discord-alternative/desktop-light.webp"
          alt="Armada light theme showing an encrypted community channel with custom emoji picker, GIFs, reactions, and threaded replies"
          className="w-full rounded-lg border"
        />
        <figcaption>
          The same community in light theme, with the custom emoji picker
          open. Armada ships more than a dozen theme presets.
        </figcaption>
      </figure>

      <ol>
        <li>
          <strong>Open Armada.</strong> Go to{' '}
          <a
            href="https://armada.buzz"
            target="_blank"
            rel="noopener noreferrer"
          >
            armada.buzz
          </a>{' '}
          in your browser, or install it on Android from{' '}
          <a
            href="https://zapstore.dev/apps/buzz.armada.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zap Store
          </a>
          . Desktop builds for Linux and Windows are also available.
        </li>
        <li>
          <strong>Create your key.</strong> Tap Sign up and a Nostr key is
          generated for you. Armada never asks for an email, phone number, or
          ID. Back it up somewhere safe; it is your account.
        </li>
        <li>
          <strong>Create an encrypted community.</strong> Add text and voice
          channels and set roles for your moderators. Everything inside is
          end-to-end encrypted by default.
        </li>
        <li>
          <strong>Invite your members.</strong> Share an invite link or
          invite people directly by name. The unlock key travels inside the
          link itself and never reaches any server, and joining takes the
          same one-minute signup.
        </li>
      </ol>

      <h2>Armada Is in Open Beta</h2>

      <p>
        Armada is early software, version 0.x with releases landing almost
        daily on the road to v1.0. Everything above works today on the web,
        Android, Linux, and Windows. There is no iOS app yet, though the web
        app works fine on an iPhone in the meantime, and some Discord
        conveniences are still catching up, so expect occasional rough
        edges. Being this early has an upside: the{' '}
        <a
          href="https://gitlab.com/soapbox-pub/armada/-/blob/main/CHANGELOG.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          changelog
        </a>{' '}
        moves fast, and the people asking for features this month tend to see
        them ship the next. The full story of how we got here, including
        every protocol we tried and abandoned along the way, is in{' '}
        <a href="/blog/building-an-armada-voyage-to-encrypted-communities">
          Building an Armada
        </a>
        .
      </p>

      <figure className="not-prose my-8">
        <div className="grid grid-cols-3 gap-3">
          <img
            src="/assets/blog/armada-open-source-encrypted-discord-alternative/mobile-voice-video.webp"
            alt="Voice chat and video calls in the Armada Android app, an encrypted Discord alternative"
            className="w-full rounded-lg border"
          />
          <img
            src="/assets/blog/armada-open-source-encrypted-discord-alternative/mobile-gif-emoji.webp"
            alt="GIF keyboard and custom emoji in the Armada mobile app"
            className="w-full rounded-lg border"
          />
          <img
            src="/assets/blog/armada-open-source-encrypted-discord-alternative/mobile-bots-commands.webp"
            alt="Slash commands and bots in Armada, like Discord bots but on an open protocol"
            className="w-full rounded-lg border"
          />
        </div>
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          Armada on Android: a video call in a voice channel, the GIF
          keyboard, and slash commands with bots.
        </figcaption>
      </figure>

      <h2>Frequently Asked Questions</h2>

      <h3>Is Discord end-to-end encrypted?</h3>
      <p>
        Voice and video calls are, by default for every call since March
        2026. Text messages, DMs, and channel history are not, and Discord
        has said it has no plans to encrypt them. Armada encrypts all
        community messages end to end.
      </p>

      <h3>Is Armada ready to use?</h3>
      <p>
        Armada is in open beta, still ahead of its v1.0 release. Communities,
        encrypted DMs, voice and video calls, and the Android app all work
        today, with new releases landing almost daily. Expect occasional
        rough edges while it matures.
      </p>

      <h3>Do I need a phone number or email to use Armada?</h3>
      <p>
        No. An Armada account is a cryptographic key. Armada never asks for
        an email, a phone number, a face scan, or an ID.
      </p>

      <h3>Can I be banned from Armada?</h3>
      <p>
        There is no company account to ban. Community owners can remove
        members from their own communities, but no one can delete your
        identity or take your community down across all of its relays.
      </p>

      <h3>Is Armada free?</h3>
      <p>
        Yes. Armada is free and open source under the AGPL-3.0 license. It
        has no ads and no paid tier.
      </p>

      <h3>Does Armada have voice chat?</h3>
      <p>
        Yes. Voice channels with video calls and screen sharing work in
        communities today, alongside threads, reactions, roles, and events.
      </p>

      <h3>Does Armada work on iPhone?</h3>
      <p>
        There is no iOS app yet. The web app at armada.buzz works on iPhone,
        and native apps exist for Android, Linux, and Windows.
      </p>

      <h3>Can I self-host it?</h3>
      <p>
        Yes. Communities live on relays you can run yourself, and the whole
        client is open source. Even on relays you don't control, your
        messages are sealed by end-to-end encryption. See the{' '}
        <a href="/blog/how-to-self-host-armada">
          how to self-host Armada guide
        </a>{' '}
        for the full walkthrough.
      </p>

      <h2>Try It With Us</h2>

      <p>
        The easiest way to judge Armada is inside a live community. We run
        our public community on Armada, and anyone can join: open the
        invite, sign up in a minute, and say hi.
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
              <MessagesSquare className="w-8 h-8 shrink-0 text-[#ec4899]" />
              <div>
                <p className="m-0 font-semibold text-white">
                  Join the Soapbox community on Armada
                </p>
                <p className="m-0 text-sm text-white/70">
                  An end-to-end encrypted community with channels, voice, and
                  the team that builds Armada. Signing up takes a minute,
                  with a key you create on the spot.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center rounded-full bg-[#ec4899] px-6 py-3 font-bold text-white">
                Join the community
              </span>
            </CardContent>
          </Card>
        </a>
      </div>

      <div className="not-prose my-8 flex flex-wrap justify-center gap-3">
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

      <div className="not-prose my-10 rounded-xl border border-pink-200 dark:border-pink-900 bg-gradient-to-br from-pink-50 to-cyan-50 dark:from-pink-950/40 dark:to-cyan-950/40 p-6">
        <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
          Get notified when Armada comes to iOS
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          There is no iPhone app yet. Drop your email and we will tell you the
          day it ships.
        </p>
        <EmailSignupForm tagId="535095" />
      </div>

      <h2>Related Reading</h2>

      <ul>
        <li>
          <a href="/armada">Armada: the open source Discord alternative</a>
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
          <a href="/blog/managing-nostr-keys">
            How to Store and Manage Your Nostr Private Key (nsec)
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
