import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blog/types';

export const meta: BlogPostMeta = {
  slug: 'master-at-arms-self-hosted-automod',
  title: 'Self-hosted auto-moderation for Armada: meet Master-at-Arms',
  excerpt:
    "Armada Communities are serverless and end-to-end encrypted, so the relay can't moderate for you. Here is the bot we built to watch every message and act on spam in seconds, and how to run it yourself.",
  coverImage: '/assets/blog/master-at-arms-self-hosted-automod/cover.jpg',
  date: '2026-08-02',
  author: {
    name: 'Derek Ross',
    picture: '/assets/avatars/derek.jpg',
  },
  ogImage: {
    url: '/assets/blog/master-at-arms-self-hosted-automod/cover.jpg',
  },
  featured: false,
  tags: [
    'Soapbox',
    'Armada',
    'Concord',
    'Vector',
    'Nostr',
    'Moderation',
    'Self-hosting',
    'DevRel',
  ],
};

const codeBlock =
  'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg text-sm overflow-x-auto';

const tocLink =
  'block cursor-pointer py-1 text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-200';

/** A warning aside, for the sharp edges. */
function Warning({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="not-prose my-8">
      <Card className="border-2 border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950">
        <CardContent className="flex items-start gap-3 p-6">
          <AlertTriangle className="mt-1 h-6 w-6 flex-shrink-0 text-orange-600 dark:text-orange-400" />
          <div className="space-y-2">
            <p className="m-0 font-bold text-orange-900 dark:text-orange-200">
              {title}
            </p>
            {children}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function MasterAtArmsSelfHostedAutomod() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
          >
            🛡️ Moderation
          </Badge>
          <Badge
            variant="secondary"
            className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
          >
            🚢 Armada
          </Badge>
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
          >
            ⚡ Nostr
          </Badge>
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
          >
            🔐 E2EE
          </Badge>
          <Badge
            variant="secondary"
            className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
          >
            🔧 Self-hosting
          </Badge>
        </div>
      </div>

      <div className="not-prose my-8">
        <Card className="border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
          <CardContent className="p-6">
            <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">
              🧭 What is in this post
            </h3>
            <div className="grid grid-cols-1 gap-x-8 gap-y-2 text-sm md:grid-cols-2">
              <div className="flex flex-col space-y-2">
                <a href="#section-1" className={tocLink}>
                  1. Moderation is the part nobody builds for you
                </a>
                <a href="#section-2" className={tocLink}>
                  2. Why a bot is the only honest answer
                </a>
                <a href="#section-3" className={tocLink}>
                  3. How it works
                </a>
                <a href="#section-4" className={tocLink}>
                  4. How to self-host it
                </a>
              </div>
              <div className="flex flex-col space-y-2">
                <a href="#section-5" className={tocLink}>
                  5. How to configure it
                </a>
                <a href="#section-6" className={tocLink}>
                  6. How to use it
                </a>
                <a href="#section-7" className={tocLink}>
                  7. Demonstrations
                </a>
                <a href="#section-8" className={tocLink}>
                  8. Current known limitations
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 id="section-1">1. Moderation is the part nobody builds for you</h2>

      <p>
        On a centralized platform, moderation runs on someone else's servers.
        Keyword filters, rate limits, the ban button, all of it executes in code
        the platform owns.
      </p>

      <p>
        <Link to="/blog/building-an-armada-voyage-to-encrypted-communities">
          Armada Communities
        </Link>{' '}
        are serverless by default and Armada Communities are end to end
        encrypted. This makes moderation unique. Because of this, a
        relay could want to block spam and still be blind to it. The only actors
        who see a message in plaintext are the members of that community and the
        clients holding their keys.
      </p>

      <p>
        So auto-moderation on Armada has to be a bot since we cannot rely on
        relays here, and specifically a bot that is itself a member of the
        community. It is invited in, granted a moderator role, and handed
        exactly the authority a human moderator would hold. It reads the same
        decrypted stream a human moderator reads. The difference is it never
        sleeps, and it reads every single message.
      </p>

      <p>
        This is Master-at-Arms, the auto-moderation bot for{' '}
        <Link to="/blog/armada-open-source-encrypted-discord-alternative">
          Armada
        </Link>
        . It is a standalone, single-purpose bot built on the{' '}
        <a
          href="https://github.com/VectorPrivacy/vector"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vector SDK
        </a>{' '}
        for the Concord protocol that Armada Communities run on, and any
        community operator can run it themselves. Discord-style AutoMod, adapted
        for a protocol where there is no central anything. It is MIT licensed,
        and it runs on the same end-to-end encrypted rails your community does.
      </p>

      <h2 id="section-2">2. Why a bot is the only honest answer</h2>

      <p>
        The hard part about moderation on Armada is not the mechanics of kicking
        someone. It is that everything about the system is designed so no third
        party can see anything. That is the point of the protocol, and it is
        exactly why moderation cannot be handed to infrastructure.
      </p>

      <p>
        Consider what the alternatives would look like. The relay cannot do it:
        it stores gift wraps, not words. A moderation service cannot do it: you
        would be handing your community's plaintext to another server, which
        defeats the entire design. A human mod team cannot do it in real time: a
        spam flood is over in seconds, and the community is too small to staff
        around the clock anyway.
      </p>

      <p>
        The bot closes that gap without breaking the model. It is a peer. It
        joins like a member, holds the community key like a member, and is bound
        by the same role system as a member. When it bans someone, it does it
        through the protocol's own authority model, the same call a human
        moderator's client would make. There is no new trust to place in a third
        party, because the bot is not a third party. It is a member with a very
        specific job and no capacity to get tired. But trust is still very much
        in play, and it is worth being precise about where: the host that runs
        the bot holds a key that can read every message in the community. That
        is the tradeoff behind self-hosting a moderation bot, and it is spelled
        out under known limitations below.
      </p>

      <h2 id="section-3">3. How it works</h2>

      <p>
        Every community message is scored against seven detection rules before
        the command dispatcher ever sees it. Each rule that fires adds points,
        and the total decides the action.
      </p>

      <table>
        <thead>
          <tr>
            <th>Rule</th>
            <th>Fires when</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rate burst</td>
            <td>more than 8 messages in 10 seconds</td>
            <td>+3</td>
          </tr>
          <tr>
            <td>Duplicate content</td>
            <td>3 identical messages in 60 seconds</td>
            <td>+4</td>
          </tr>
          <tr>
            <td>Banned keywords / regex</td>
            <td>a banned word or pattern appears</td>
            <td>+5 per hit</td>
          </tr>
          <tr>
            <td>Link filtering</td>
            <td>a non-allowlisted link appears</td>
            <td>+2 each (+4 for new members)</td>
          </tr>
          <tr>
            <td>Mention spam</td>
            <td>more than 5 npubs in one message</td>
            <td>+3</td>
          </tr>
          <tr>
            <td>New-account flooding</td>
            <td>new member exceeds 3 messages in the grace window</td>
            <td>+4</td>
          </tr>
          <tr>
            <td>Caps / wall of text</td>
            <td>shouting or a 1000+ char wall</td>
            <td>+1</td>
          </tr>
        </tbody>
      </table>

      <p>
        Every number in that table is a default, not a rule set in stone. All of
        it is configurable in the <code>[automod]</code> section of{' '}
        <code>bot.toml</code>, which the configuration section below walks
        through, so you can tighten or loosen any rule to fit how your community
        actually talks. The thresholds themselves are simple: a score of 3 or
        more deletes the message and warns the sender, 5 or more kicks, 7 or
        more bans. The defaults are tuned conservative, which is why the whole
        engine is off until you turn it on, and it is worth revisiting them
        after you have watched dry-run against real traffic.
      </p>

      <p>
        Two mechanisms stop it from being trigger-happy. The first is
        escalation. Repeat offenders get bumped up the ladder regardless of
        their raw score: the second actionable violation inside a rolling
        24-hour window forces at least a kick, and the third forces at least a
        ban. Crucially, violation history survives a kick, since a kick emits a
        member-leave event and wiping it there would let a rejoining spammer
        reset their counter every time. <code>!automod reset &lt;npub&gt;</code>{' '}
        is the explicit wipe, and only staff can do it.
      </p>

      <p>
        The second is the action cooldown. Messages are handled concurrently, so
        a 20-message flood would otherwise fire 20 kicks and 20 announcements.
        Inside a 60-second window, an equal-or-weaker repeat action is
        suppressed: the offending messages are still deleted, but the offender
        gets one enforcement action and one announcement, not twenty.
      </p>

      <p>
        Then there is the immunity model, which I think is the most important
        design decision in the whole bot. Master-at-Arms takes orders from the
        community's own trust hierarchy. The owner and any admin or moderator,
        meaning any role with management permissions, are immune to it and
        control it. The bot operator and an explicit authorized list are immune
        too, unless <code>strict_mode</code> is on. The owner is always immune,
        and the bot defensively refuses to moderate the owner even if it somehow
        reaches that path.
      </p>

      <p>
        When you first switch auto-mod on, it does not start enforcing. It runs
        in dry-run for 60 minutes, announcing exactly what it would have done,
        score and rules included, and taking no action. That is your window to
        sanity-check the thresholds against real traffic before the bot is
        allowed to kick anyone. The window is measured from the moment it was
        enabled, not from process start, so a restart does not quietly put a
        live engine back into log-only mode.{' '}
        <code>!automod dryrun off</code> goes live early if you are confident.
      </p>

      <p>
        Every enforcement action lands in an append-only JSONL audit log under{' '}
        <code>data/</code>, bans DM the operator, and in-channel announcements
        are on by default. There is also a deafness watchdog: if the bot stops
        hearing messages for 30 minutes, it force-refreshes its subscriptions
        with exponential backoff.
      </p>

      <h2 id="section-4">4. How to self-host it</h2>

      <p>
        The quickstart is six steps, and the longest one is waiting for the Rust
        build.
      </p>

      <ol>
        <li>
          <strong>Generate a fresh identity.</strong>{' '}
          <code>nak key generate</code> (or any Nostr keygen). Never reuse a
          personal key or another bot's.
        </li>
        <li>
          <strong>Configure it.</strong>{' '}
          <code>cp config/bot.toml.example config/bot.toml</code>, then set{' '}
          <code>bot.nsec</code> to the fresh key and <code>auth.owner</code> to
          your npub. The owner is the operator: invites from them auto-accept,
          and only they can drive the bot over DM. Day-to-day control in each
          community comes from that community's roles, with nothing to configure
          bot-side.
        </li>
        <li>
          <strong>Build and run.</strong> <code>cargo build --release</code>,
          then <code>./target/release/concord-automod</code>. Note the bot's
          npub from the startup log.
        </li>
        <li>
          <strong>Invite it.</strong> From your Armada app, invite the bot into
          the community using the account whose npub you set as{' '}
          <code>auth.owner</code>. With the default{' '}
          <code>invite_policy = "owner"</code>, the invite auto-accepts.
        </li>
        <li>
          <strong>Grant it a role.</strong> It needs a moderator role with KICK
          + BAN capability, and it must outrank the members it moderates.
        </li>
        <li>
          <strong>Turn it on.</strong> <code>!automod on</code>. It starts in
          dry-run for 60 minutes.
        </li>
      </ol>

      <p>
        Everything you change at runtime persists across restarts as JSON under{' '}
        <code>data/</code>. The runtime config file wins over{' '}
        <code>bot.toml</code> after the first run, so <code>!automod on</code>,
        banned words, and allowlist changes survive a reboot. Delete{' '}
        <code>data/automod-config.json</code> to fall back to the TOML values.
      </p>

      <p>
        There are three ways to run it long-term. A systemd user unit ships in{' '}
        <code>deploy/concord-automod.service</code>, with{' '}
        <code>loginctl enable-linger</code> so it survives logout. A two-stage
        Dockerfile in <code>deploy/Dockerfile</code> builds a slim image with{' '}
        <code>config/</code> and <code>data/</code> mounted and the nsec
        supplied via env var. And <code>deploy/install.sh</code> does the
        one-command system install, creating a dedicated service user under{' '}
        <code>/opt</code> with a systemd unit. Running multiple bots on one host
        is supported, but each needs its own working directory and its own nsec.
      </p>

      <h2 id="section-5">5. How to configure it</h2>

      <p>
        The <code>[automod]</code> section in <code>bot.toml</code> is every
        knob in one place:
      </p>

      <pre className={codeBlock}>
        {`[automod]
enabled = false              # master switch; !automod on flips it at runtime
strict_mode = false          # true = authorized users are checked too

max_messages = 8             # rate burst
burst_window_secs = 10
max_duplicates = 3           # duplicate content
dedupe_window_secs = 60

banned_words = ["free crypto giveaway", "double your sats"]
banned_patterns = ['(?i)t\\.me/\\w+', '(?i)discord\\.gg/\\w+']

link_action = "flag"         # "off" | "flag" | "block"
max_links = 3
link_allowlist = ["github.com", "gitlab.com", "nostr.org", "npmjs.com", "crates.io", "docs.rs"]

max_mentions = 5             # mention spam
new_user_grace_secs = 120    # new-account flooding
new_user_max_msgs = 3
caps_threshold_pct = 70      # caps / wall of text
caps_min_length = 20
max_msg_length = 1000

warn_threshold = 3           # delete + warn
kick_threshold = 5           # kick
ban_threshold = 7            # ban

escalation_kick_after = 2    # Nth violation in 24h forces at least a kick
escalation_ban_after = 3     # ...or at least a ban
action_cooldown_secs = 60    # one enforcement per burst

announce_actions = true      # post "kicked X for spam" in-channel
announce_dm_owner = true     # DM the owner on bans + permission gaps
delete_spam_messages = true`}
      </pre>

      <p>
        Two details worth knowing. Single banned words match on word boundaries,
        so banning <code>scam</code> does not also ban <code>scamper</code> or{' '}
        <code>descambiar</code>; multi-word phrases match as plain substrings.
        And <code>link_action = "block"</code> guarantees at least a warn even
        for a single non-allowlisted link, where plain <code>"flag"</code> would
        just add points.
      </p>

      <p>
        The <code>[watchdog]</code> section is worth tuning before you deploy.{' '}
        <code>silence_secs</code> defaults to 30 minutes and must sit
        comfortably above the longest normal gap between messages in your
        busiest channel, because a quiet community is indistinguishable from a
        broken subscription. Set it too low and the bot will resubscribe
        continuously against a perfectly healthy community.
      </p>

      <h2 id="section-6">6. How to use it</h2>

      <p>
        The command surface is deliberately small, because this bot does one
        job. <code>!help</code> prints it; <code>!auth</code> tells you your
        standing.
      </p>

      <table>
        <thead>
          <tr>
            <th>command</th>
            <th>who</th>
            <th>what</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>!ping</code>
            </td>
            <td>anyone</td>
            <td>liveness check</td>
          </tr>
          <tr>
            <td>
              <code>!help</code>
            </td>
            <td>anyone</td>
            <td>command help</td>
          </tr>
          <tr>
            <td>
              <code>!auth</code>
            </td>
            <td>anyone</td>
            <td>your standing: operator / community owner / staff / none</td>
          </tr>
          <tr>
            <td>
              <code>!automod status</code>
            </td>
            <td>staff</td>
            <td>config + stats</td>
          </tr>
          <tr>
            <td>
              <code>!automod on</code> / <code>off</code>
            </td>
            <td>staff</td>
            <td>master switch</td>
          </tr>
          <tr>
            <td>
              <code>!automod dryrun &lt;on|off|auto|status&gt;</code>
            </td>
            <td>staff</td>
            <td>log-only mode control</td>
          </tr>
          <tr>
            <td>
              <code>!automod words &lt;add|remove|list&gt;</code>
            </td>
            <td>staff</td>
            <td>banned words</td>
          </tr>
          <tr>
            <td>
              <code>!automod allowlist &lt;add|remove|list&gt;</code>
            </td>
            <td>staff</td>
            <td>link-filter allowlist</td>
          </tr>
          <tr>
            <td>
              <code>!automod history [npub]</code>
            </td>
            <td>staff</td>
            <td>recent enforcement actions</td>
          </tr>
          <tr>
            <td>
              <code>!automod reset &lt;npub&gt;</code>
            </td>
            <td>staff</td>
            <td>clear a user's violation history</td>
          </tr>
        </tbody>
      </table>

      <p>
        The subtle part is who counts as staff. It is not a bot-side roster.
        Master-at-Arms reads the community's own roles: the community owner, any
        admin, and any moderator, meaning any role with management permissions,
        controls the bot in that community. A typical Moderator role with KICK +
        BAN qualifies. The bot operator set in <code>auth.owner</code> passes
        every gate everywhere, which is what makes driving the bot over DM
        possible at all. When a new mod is promoted in the community, they get
        control of the bot automatically, and when they are demoted, they lose
        it. There is no separate list to keep in sync.
      </p>

      <h2 id="section-7">7. Demonstrations</h2>

      <p>
        <strong>The crypto giveaway.</strong> Someone drops "Click here for a
        FREE CRYPTO GIVEAWAY!!!" in general.{' '}
        <code>free crypto giveaway</code> is on the banned list, and one keyword
        hit scores +5, which is already at the kick threshold. The message is
        deleted and the channel sees:
      </p>

      <pre className={codeBlock}>
        {`👢 Kicked nostr:npub1... for spam (banned_keyword).`}
      </pre>

      <p>
        <strong>The duplicate flood.</strong> A user pastes the same "buy now"
        line three times in under a minute. The duplicate rule fires at +4, past
        the warn threshold, and the first message is removed:
      </p>

      <pre className={codeBlock}>
        {`🚫 nostr:npub1... message removed for spam (duplicate_content). Please knock it off.`}
      </pre>

      <p>
        The other copies in the burst are still deleted, but the action cooldown
        means nobody gets spammed with ten announcements.
      </p>

      <p>
        <strong>The repeat offender.</strong> First violation scores a warn. The
        second inside 24 hours is bumped to at least a kick no matter what it
        scores, and the third is bumped to a ban. If the offender is kicked and
        rejoins, the ladder does not reset, because the violation history
        survived the kick. That is the escalation rule doing its job, and{' '}
        <code>!automod history npub1...</code> shows the whole ladder.
      </p>

      <p>
        <strong>New-account flooding.</strong> A fresh npub joins and starts
        dropping links. Inside the 120-second grace window their link score
        doubles from +2 to +4, and each message past the limit adds +4 on top.
        Two non-allowlisted links from a brand-new account is 8 points on the
        spot, which is an instant ban.
      </p>

      <p>
        <strong>Dry-run.</strong> The day you set it up,{' '}
        <code>!automod on</code> replies in-channel that auto-mod is on, then
        adds that it is running log-only for 60 minutes. Each would-be action
        shows up as:
      </p>

      <pre className={codeBlock}>
        {`🟡 DRY-RUN: would kick npub1... (score: 5, rules: banned_keyword), no action taken`}
      </pre>

      <p>
        That is the whole point of the window: you see what the thresholds flag
        against real traffic before any of it becomes enforcement.
      </p>

      <h2 id="section-8">8. Current known limitations</h2>

      <Warning title="A self-hosted bot means handing your community key to one more machine.">
        <p className="m-0 text-sm text-orange-800 dark:text-orange-300">
          Master-at-Arms is a member, and members decrypt the community stream,
          so the server running the bot can read every message. The bot itself
          is built to keep that content off disk: duplicate detection stores
          hashes rather than text, the audit log records action, score, rules,
          and npub with message snippets strictly opt-in, audit entries are
          pruned after 30 days by default, service logs carry metadata only
          (never message content), and every state file is written
          owner-readable. The remaining exposure is the Vector SDK's own
          protocol database, which keeps decrypted history at rest; the honest
          mitigation there is full-disk encryption on the host. Run it on
          hardware you control and trust, and treat the nsec like the key it
          is.
        </p>
      </Warning>

      <ul>
        <li>
          <strong>Every ban invalidates outstanding invite links.</strong> A ban
          triggers a read-cut key rotation, so invite links minted before it
          hand out stale keys. Anyone who joins through a stale link lands on a
          severed plane: their client shows them a community that looks alive,
          but current members and the bot correctly cannot see anything they
          post. In an actively moderated community, links can go stale within
          minutes of being minted. Re-mint invite links.
        </li>
        <li>
          <strong>
            Automod settings are global per deployment, not per-community.
          </strong>{' '}
          One bot running for several communities applies the same banned words,
          thresholds, and dry-run state to all of them;{' '}
          <code>!automod on</code> and <code>off</code> scope per community, but
          the tuning underneath is shared. This bit us the first day, when a
          test community and a production community wanted different postures
          from the same bot. Per-community config is the top roadmap item.
        </li>
      </ul>

      <h2>Resources</h2>

      <ul>
        <li>
          Try Armada:{' '}
          <a
            href="https://armada.buzz"
            target="_blank"
            rel="noopener noreferrer"
          >
            armada.buzz
          </a>
        </li>
        <li>
          Self-host Armada itself:{' '}
          <Link to="/blog/how-to-self-host-armada">
            How to Self-host Armada
          </Link>
        </li>
        <li>
          Armada source:{' '}
          <a
            href="https://gitworkshop.dev/soapbox.pub/armada"
            target="_blank"
            rel="noopener noreferrer"
          >
            gitworkshop.dev/soapbox.pub/armada
          </a>
        </li>
        <li>
          Repo:{' '}
          <a
            href="https://github.com/derekross/concord-automod"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/derekross/concord-automod
          </a>
        </li>
        <li>
          Vector SDK and client:{' '}
          <a
            href="https://github.com/VectorPrivacy/vector"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/VectorPrivacy/vector
          </a>
        </li>
        <li>
          Concord protocol:{' '}
          <a
            href="https://github.com/concord-protocol/concord"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/concord-protocol/concord
          </a>
        </li>
      </ul>
    </article>
  );
}
