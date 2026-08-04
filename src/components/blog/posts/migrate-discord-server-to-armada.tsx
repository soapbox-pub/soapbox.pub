import type { BlogPostMeta } from '@/lib/blog/types';
import { Button } from '@/components/ui/button';
import { FAQSection } from '@/components/blog/FAQSection';

export const meta: BlogPostMeta = {
  slug: 'migrate-discord-server-to-armada',
  title: 'How to Migrate Your Discord Server to Armada',
  excerpt:
    'Migrate your Discord server to Armada in minutes: channels, roles, emoji, and up to 10,000 messages of history per channel, plus an optional live two-way bridge.',
  coverImage: '/assets/blog/migrate-discord-server-to-armada/cover.png',
  date: '2026-08-04',
  author: {
    name: 'M. K. Fain',
    picture: '/assets/avatars/mk.jpg',
  },
  ogImage: {
    url: '/assets/blog/migrate-discord-server-to-armada/cover.png',
  },
  featured: true,
  tags: [
    'armada',
    'discord',
    'discord migration',
    'discord import',
    'discord alternative',
    'discord bridge',
    'move discord server',
    'nostr',
    'encrypted chat',
    'concord',
    'tutorial',
    'how to',
  ],
  keywords:
    'migrate discord server, how to migrate a discord server, move discord server to another platform, discord server migration tool, discord import tool, export discord server history, discord alternative with import, discord bridge, leave discord, discord to nostr, armada discord import, transfer discord server',
  faq: [
    {
      question: 'Can I migrate a Discord server without losing message history?',
      answer:
        'Yes, with limits. Armada imports the newest 10,000 messages per channel, keeping original timestamps and authors. History import is only available for servers with 100 members or fewer.',
    },
    {
      question: 'Do my Discord members transfer to Armada?',
      answer:
        'No. Members join your new Armada community through an invite link. Messages from people still on Discord appear in Armada under puppet accounts with their Discord name and avatar, and members can type /claim in a bridged Discord channel to link their imported history and roles to their own Nostr key.',
    },
    {
      question: 'Does the Discord bridge work both ways?',
      answer:
        'Yes. Text, replies, reactions, attachments up to 10 MB, custom emoji, deletes, and typing indicators flow in both directions. Voice, pings, Discord threads, and rich bot embeds do not cross the bridge.',
    },
    {
      question: 'Are bridged channels still end-to-end encrypted?',
      answer:
        'No. A bridged channel mirrors every message to Discord in plaintext, so it gives up end-to-end encryption. Channels you import without a bridge stay fully encrypted. You can turn a bridge off at any time.',
    },
    {
      question: 'Do I need a Discord bot token or an export file?',
      answer:
        'No. You sign in to Discord through the official OAuth window, invite the bridge bot to your server with one click, and the import tool does the rest. Armada never sees your Discord password.',
    },
    {
      question: 'Who owns the imported community?',
      answer:
        'You do. The founding events are signed with your own Nostr key in your browser, and the key never leaves your device. The bridge holds an Admin role to run the import and the live bridges, and you can revoke it from Armada at any time.',
    },
    {
      question: 'Is the Armada Discord import tool free?',
      answer:
        'Yes. Armada is free and open source under the AGPL-3.0 license, and the import tool at armada.buzz costs nothing.',
    },
  ],
  howTo: {
    name: 'How to migrate a Discord server to Armada',
    description:
      'Use the built-in import tool at armada.buzz to turn a Discord server you run into an encrypted Armada community.',
    totalTime: 'PT10M',
    steps: [
      {
        name: 'Open the import tool',
        text: 'Sign in at armada.buzz and start creating a new community, then click "Import a Discord server" below the create form.',
      },
      {
        name: 'Connect Discord',
        text: 'Click "Connect Discord" and sign in through the official Discord OAuth window. Only servers where you hold Manage Server are listed.',
      },
      {
        name: 'Pick your server',
        text: 'Select the Discord server you want to migrate and click Continue.',
      },
      {
        name: 'Install the bridge bot',
        text: 'If the bridge bot is not in your server yet, click "Install the bot", approve it on Discord, then click "I installed it, check again".',
      },
      {
        name: 'Review channels, roles, and history',
        text: 'Choose which channels to import, which to live-bridge with Discord, and which to backfill with message history.',
      },
      {
        name: 'Sign and start the import',
        text: 'Read the encryption warning, tick the consent box, and click "Import the server". You sign the founding events with your own Nostr key.',
      },
      {
        name: 'Open your community',
        text: 'When the progress screen finishes, click "Open your community" to join your new Armada community.',
      },
    ],
  },
};

export default function MigrateDiscordServerToArmada() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        Armada has a built-in Discord import tool. It turns a Discord server you
        run into an encrypted{' '}
        <a href="/blog/armada-open-source-encrypted-discord-alternative">
          Armada
        </a>{' '}
        community: channels, roles, custom emoji, and up to 10,000 messages of
        history per channel, signed with your own key so you own it outright.
        You can also keep a live two-way bridge to Discord while your members
        move over.
      </p>

      <p>You need three things:</p>
      <ul>
        <li>A Discord account with <strong>Manage Server</strong> on the server</li>
        <li>A free Nostr login at <a href="https://armada.buzz">armada.buzz</a></li>
        <li>About ten minutes</li>
      </ul>

      <p>
        No bot tokens, no export files, no self-hosting. The screenshots below
        walk through migrating a small demo server, Moonrise Arcade.
      </p>

      <h2>Step 1: Open the Discord Import Tool</h2>

      <p>
        Sign in at <a href="https://armada.buzz">armada.buzz</a> and start
        creating a new community: click the <strong>+</strong> in the server
        rail, or <strong>Create community</strong> on the Discover page. Below
        the create form, click <strong>Import a Discord server</strong>.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/migrate-discord-server-to-armada/import-button.png"
          alt="Import a Discord server button in Armada's Discover page, the entry point for Discord server migration"
          className="mx-auto max-w-md w-full rounded-lg border shadow-md"
          loading="lazy"
        />
      </figure>

      <h2>Step 2: Connect Your Discord Account</h2>

      <p>
        Click <strong>Connect Discord</strong>. Discord's own sign-in opens in
        a popup, so Armada never sees your password. Only servers where you
        hold Manage Server are listed.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/migrate-discord-server-to-armada/connect-discord.png"
          alt="Armada Discord import wizard connect step with the Connect Discord button for OAuth sign-in"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
      </figure>

      <h2>Step 3: Pick the Discord Server to Migrate</h2>

      <p>
        The whole server becomes a brand-new Armada community that you own.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/migrate-discord-server-to-armada/pick-server.png"
          alt="Pick a server step in the Armada Discord migration wizard listing Discord servers you manage"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
      </figure>

      <h2>Step 4: Install the Bridge Bot</h2>

      <p>
        The bridge bot reads your channels and mirrors messages, so it has to
        be in the server before the import can read anything. Click{' '}
        <strong>Install the bot</strong>, approve it on Discord, then come back
        and click <strong>I installed it, check again</strong>.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/migrate-discord-server-to-armada/install-bot.png"
          alt="Install the bridge bot step during Discord server migration to Armada"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
      </figure>

      <h2>Step 5: Review Channels, Roles, and History</h2>

      <p>Each channel has up to three toggles:</p>

      <ul>
        <li><strong>Include</strong>: import the channel at all</li>
        <li><strong>Bridge</strong>: mirror messages live between Discord and Armada, both directions</li>
        <li><strong>History</strong>: backfill the newest 10,000 messages with their original times and authors</li>
      </ul>

      <p>
        Roles come across with their names, colors, and hierarchy. Permissions
        that have no Armada equivalent (like Manage Webhooks) are listed next
        to each role so you know exactly what is dropped. The{' '}
        <strong>Not imported</strong> section names everything that gets
        skipped, and why.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/migrate-discord-server-to-armada/review-channels.png"
          alt="Armada Discord import review step with per-channel bridge and history toggles, role mapping, and a not-imported list"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
      </figure>

      <h2>Step 6: Read the Warning, Then Sign With Your Key</h2>

      <p>
        The wizard is blunt about the one real trade-off:{' '}
        <strong>bridged channels give up end-to-end encryption</strong>,
        because every message is mirrored to Discord in plaintext. Channels you
        import without a bridge stay fully encrypted. Tick the consent box and
        click <strong>Import the server</strong>. Your Nostr key signs the
        community's founding events right in the browser and never leaves your
        device.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/migrate-discord-server-to-armada/review-consent.png"
          alt="Encryption warning and consent checkbox before importing a Discord server to Armada"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
      </figure>

      <h2>Step 7: Wait for the Import to Finish</h2>

      <p>
        The community is minted, channels and roles are published, live
        bridges are wired, and history backfills. A few minutes for a big
        server. If anything stops partway, nothing is lost: retrying resumes
        from where it left off.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/migrate-discord-server-to-armada/importing-progress.png"
          alt="Live progress screen while migrating a Discord server to Armada, showing channels, roles, bridges, and history messages"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
      </figure>

      <h2>Step 8: Open Your New Community</h2>

      <p>
        Done. Click <strong>Open your community</strong> and share the invite
        link with your members.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/migrate-discord-server-to-armada/import-done.png"
          alt="Discord server migration to Armada complete, with channel, bridge, history, and emoji counts"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
      </figure>

      <hr className="my-12" />

      <h2>What Gets Migrated</h2>

      <ul>
        <li>Server name, description, and icon</li>
        <li>Text and announcement channels, with topics and category grouping</li>
        <li>Voice channels, as placeholder text rooms (no voice yet)</li>
        <li>Up to 99 roles with names, colors, hierarchy, and mapped permissions</li>
        <li>Custom emoji, published as an Armada emoji pack</li>
        <li>Message history: the newest 10,000 messages per channel, original timestamps and authors, for servers with 100 members or fewer</li>
      </ul>

      <h2>What Does Not Migrate</h2>

      <p>The tool tells you this up front, and so will we:</p>

      <ul>
        <li><strong>Members.</strong> People join through your Armada invite. Until they do, their bridged messages appear under puppet accounts carrying their Discord name and avatar. Anyone can type <code>/claim</code> in a bridged Discord channel to link their imported history and roles to their own Nostr key.</li>
        <li><strong>Forum and media channels.</strong> Not supported yet.</li>
        <li><strong>Private channels.</strong> Not supported yet; they are skipped and listed in the review step.</li>
        <li><strong>History for servers over 100 members</strong>, and anything past the 10,000-message cap per channel.</li>
        <li><strong>Stickers, soundboard, onboarding, welcome screens, and integrations.</strong> No Armada equivalent.</li>
        <li><strong>Discord-only permissions</strong> like Connect, Speak, and Manage Webhooks. Each role's dropped permissions are listed in the review step.</li>
      </ul>

      <h2>What Works Over the Live Bridge</h2>

      <p>
        Channels you mark as bridged keep talking to Discord after the
        migration, so nobody is stranded. Here is the honest fidelity table:
      </p>

      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 pr-4">Feature</th>
              <th className="text-left py-2 pr-4">Discord to Armada</th>
              <th className="text-left py-2">Armada to Discord</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-4">Text messages</td>
              <td className="py-2 pr-4">Yes</td>
              <td className="py-2">Yes (long posts split at 2,000 chars)</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Replies</td>
              <td className="py-2 pr-4">Yes</td>
              <td className="py-2">Yes, with a jump link</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Reactions</td>
              <td className="py-2 pr-4">Yes, per user</td>
              <td className="py-2">Yes, collapsed onto the bot</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Images and files</td>
              <td className="py-2 pr-4">Yes, up to 10 MB</td>
              <td className="py-2">Yes, up to 10 MB</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Custom emoji</td>
              <td className="py-2 pr-4">Yes</td>
              <td className="py-2">Yes, for Discord-origin emoji</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Deletes</td>
              <td className="py-2 pr-4">Yes</td>
              <td className="py-2">Yes, including moderator deletes</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Names and avatars</td>
              <td className="py-2 pr-4">Yes</td>
              <td className="py-2">Yes</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Typing indicators</td>
              <td className="py-2 pr-4">Yes</td>
              <td className="py-2">Yes</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Discord threads</td>
              <td className="py-2 pr-4 font-medium">No, ignored</td>
              <td className="py-2">Armada threads flatten into the channel</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Edits</td>
              <td className="py-2 pr-4">Off by default</td>
              <td className="py-2">Off by default</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Mentions and pings</td>
              <td className="py-2 pr-4">Plain text, no ping</td>
              <td className="py-2">Plain text, no ping</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Voice</td>
              <td className="py-2 pr-4 font-medium">No</td>
              <td className="py-2 font-medium">No</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Rich embeds and bot messages</td>
              <td className="py-2 pr-4 font-medium">No</td>
              <td className="py-2">n/a</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Two more caveats worth knowing. If the bridge is offline, Discord
        messages sent during the gap are lost (Armada messages catch up when it
        returns). And a bridged channel is, by definition, mirrored to Discord
        in plaintext, so treat it like a public room, and drop the bridge once
        your members have moved.
      </p>

      <h2>You Own the Result</h2>

      <p>
        The community's founding events are signed by your key, in your
        browser. The bridge service holds an Admin role only so it can run the
        import and the live mirrors, and you can revoke that role from inside
        Armada whenever you want. Kill the bridge, and you are left with a
        fully encrypted,{' '}
        <a href="/blog/how-to-self-host-armada">self-hostable</a> community
        that no company can delete.
      </p>

      <div className="not-prose my-10 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <a href="https://armada.buzz" target="_blank" rel="noopener noreferrer">
            Migrate your server at armada.buzz
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a
            href="https://gitworkshop.dev/soapbox.pub/armada"
            target="_blank"
            rel="noopener noreferrer"
          >
            View the source
          </a>
        </Button>
      </div>

      <FAQSection
        title="Discord Migration FAQ"
        items={(meta.faq ?? []).map(({ question, answer }) => ({
          question,
          answer,
        }))}
      />

      <h2>Related Reading</h2>
      <ul>
        <li>
          <a href="/blog/armada-open-source-encrypted-discord-alternative">
            Armada: The Open Source, Encrypted Discord Alternative
          </a>
        </li>
        <li>
          <a href="/blog/best-discord-alternatives-2026">
            The Best Discord Alternatives in 2026
          </a>
        </li>
        <li>
          <a href="/blog/how-to-self-host-armada">
            How to Self-host Armada
          </a>
        </li>
        <li>
          <a href="/blog/master-at-arms-self-hosted-automod">
            Self-hosted Auto-moderation for Armada: Meet Master-at-Arms
          </a>
        </li>
      </ul>
    </article>
  );
}
