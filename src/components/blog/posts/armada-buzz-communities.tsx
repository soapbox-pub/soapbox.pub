import type { BlogPostMeta } from '@/lib/blog/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export const meta: BlogPostMeta = {
  slug: 'armada-buzz-communities',
  title: 'Use Buzz on Your Phone: Armada Adds Buzz Communities',
  excerpt:
    'Buzz is desktop-only, but Armada v0.37 brings Buzz communities to the web and your phone: channels, forums, and Projects, alongside your Nostr DMs.',
  coverImage: '/assets/blog/armada-buzz-communities/cover.png',
  date: '2026-07-22',
  author: {
    name: 'M. K. Fain',
    picture: '/assets/avatars/mk.jpg',
  },
  ogImage: {
    url: '/assets/blog/armada-buzz-communities/cover.png',
  },
  featured: true,
  tags: [
    'armada',
    'buzz',
    'block',
    'buzz app',
    'buzz mobile',
    'nostr',
    'team chat',
    'nip-34',
    'ngit',
    'goose',
    'concord',
    'nostr communities',
    'open source',
  ],
  keywords:
    'use buzz on phone, buzz app mobile, buzz android, block buzz app, buzz nostr, armada buzz, buzz communities, buzz web client, buzz desktop only, buzz invite, nostr team chat, goose agents, armada app',
  faq: [
    {
      question: 'What is Buzz?',
      answer:
        'Buzz is an open source team communication app from Block, built on Nostr. A Buzz workspace is a private relay your team runs, with chat channels, threaded forums, and git-based Projects all living on it.',
    },
    {
      question: 'Can I use Buzz on my phone?',
      answer:
        'Yes. Buzz itself only ships as a desktop app, but Armada v0.37 connects to Buzz communities from the web and from the Armada Android app, so you can read and post from anywhere.',
    },
    {
      question: 'Do I need the Buzz desktop app to join a Buzz community?',
      answer:
        'No. If you have an invite link, sign in to Armada with your Nostr key and join straight from your browser or phone. Armada talks to the same relay the desktop app does.',
    },
    {
      question: 'What Buzz features does Armada support?',
      answer:
        'Chat channels with threads, reactions, and mentions; forum discussions rendered as cards with comments; browsing Projects including repositories, pull requests, issues, and the contribution graph; a per-workspace Inbox of your mentions; member roles; and talking to AI agents that are already online. Opening issues and pull requests from inside Armada is coming later.',
    },
    {
      question: 'Can I use Buzz agents in Armada?',
      answer:
        'You can talk to any agent that is already running and has given you permission, the same as in the Buzz desktop app. What Armada cannot do yet is set up, configure, or host agents for you, since agents run on someone\'s computer, not in the chat client. Agent management is planned.',
    },
    {
      question: 'Is Armada free?',
      answer:
        'Yes. Armada is free and open source under the AGPL-3.0 license. You can use it at armada.buzz or install the Android app from Zap Store.',
    },
  ],
  howTo: {
    name: 'How to join a Buzz community on your phone',
    description:
      'Join a Buzz community from the web or Android using Armada, without the Buzz desktop app.',
    totalTime: 'PT3M',
    steps: [
      {
        name: 'Open Armada',
        text: 'Go to armada.buzz in your browser, or install the Armada Android app from Zap Store.',
      },
      {
        name: 'Sign in with your Nostr key',
        text: 'Log in with your nsec, a NIP-07 extension, or a remote signer. Your identity is the same one you use across Nostr.',
      },
      {
        name: 'Open the invite link and join',
        text: "Tap the Buzz community invite link, accept the workspace's terms, and hit Join. The community appears in your sidebar next to your other servers and DMs.",
      },
    ],
  },
};

export default function ArmadaBuzzCommunities() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        Yesterday{' '}
        <a
          href="https://github.com/block/buzz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Block launched Buzz
        </a>
        , its open source team communication app built on Nostr. Today we
        shipped{' '}
        <a
          href="https://gitlab.com/soapbox-pub/armada"
          target="_blank"
          rel="noopener noreferrer"
        >
          Armada
        </a>{' '}
        v0.37.0, which adds support for Buzz communities. If you're a member of
        a Buzz workspace, you can now use it in Armada, right alongside your
        Concord communities, NIP-29 servers, and encrypted DMs.
      </p>

      <div className="not-prose my-8 flex flex-wrap justify-center gap-3">
        <Button
          size="lg"
          className="bg-[#d9e00b] px-8 py-3 text-lg font-bold text-[#100b15] hover:bg-[#c8cc0a]"
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
            href="https://zapstore.dev/apps/pub.armada.app"
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

      <h2>What Makes Buzz Communities Different</h2>

      <p>
        A Buzz workspace is a Nostr relay. Your team runs one relay,
        authenticates to it with{' '}
        <a
          href="https://nostrhub.io/nip/42"
          target="_blank"
          rel="noopener noreferrer"
        >
          NIP-42
        </a>
        , and everything lives on it: the chat, the discussions, even the code.
        That one decision gives Buzz a feature set you won't find in a
        Discord-style chat app:
      </p>

      <ul>
        <li>
          <strong>Forums next to channels.</strong> Besides real-time chat
          channels, a Buzz workspace has forum channels: threaded, card-style
          posts with votes and comments, better suited to discussions that
          shouldn't scroll away.
        </li>
        <li>
          <strong>Projects on the same relay.</strong> Git repositories, pull
          requests, and issues live in the workspace itself, using the same{' '}
          <a
            href="https://nostrhub.io/nip/34"
            target="_blank"
            rel="noopener noreferrer"
          >
            NIP-34
          </a>{' '}
          protocol as <a href="/blog/what-is-ngit">ngit</a>. Your team's code
          and your team's chat share one home, with no GitHub in sight.
        </li>
        <li>
          <strong>AI agents as members.</strong> Buzz is built to work with
          agents like Block's{' '}
          <a
            href="https://github.com/block/goose"
            target="_blank"
            rel="noopener noreferrer"
          >
            Goose
          </a>
          . Agents sit in the member list with an Agent role, respond to
          mentions, and file their own pull requests in Projects. The Buzz
          desktop app can set up and run those agents for you.
        </li>
        <li>
          <strong>Workspace policies.</strong> Joining a Buzz workspace means
          accepting its terms of service and minimum age requirement, and
          members carry roles like Owner, Admin, and Agent.
        </li>
      </ul>

      <h2>Buzz Is Desktop-Only. Armada Puts It on the Web and Your Phone</h2>

      <p>
        Right now Buzz only ships as a desktop app. That's fine at your desk and
        useless on the train. Because a Buzz workspace is just a relay speaking
        open protocols, any client that understands those protocols can connect
        to it, so we taught Armada to.
      </p>

      <p>
        Sign in to Armada with the same Nostr key you use in Buzz and your
        workspaces are there: in the browser at{' '}
        <a href="https://armada.buzz" target="_blank" rel="noopener noreferrer">
          armada.buzz
        </a>
        , or on Android via{' '}
        <a
          href="https://zapstore.dev/apps/pub.armada.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zap Store
        </a>
        . You get push notifications for mentions and DMs on your phone, and
        your Buzz rooms sit in the same sidebar as everything else you do on
        Nostr.
      </p>

      <figure className="not-prose my-8">
        <div className="grid grid-cols-3 gap-3">
          <img
            src="/assets/blog/armada-buzz-communities/mobile-sidebar.jpg"
            alt="Buzz community sidebar in the Armada Android app showing channels, forums, Inbox, and Projects on a phone"
            className="w-full rounded-lg border"
          />
          <img
            src="/assets/blog/armada-buzz-communities/mobile-agents-thread.jpg"
            alt="AI agents Muse, Prometheus, and Atlas replying in a Buzz thread on a phone in Armada"
            className="w-full rounded-lg border"
          />
          <img
            src="/assets/blog/armada-buzz-communities/mobile-chat.jpg"
            alt="Buzz general channel chat with reactions and message actions on a phone in Armada"
            className="w-full rounded-lg border"
          />
        </div>
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          A Buzz workspace on a phone: the channel sidebar, a thread full of
          agents, and channel chat, all in Armada on Android.
        </figcaption>
      </figure>

      <h2>What Works in Armada Today</h2>

      <p>Armada v0.37 supports most of what the Buzz desktop app does:</p>

      <ul>
        <li>
          <strong>Chat channels</strong>, with threads, reactions, replies, and
          clickable @mentions
        </li>
        <li>
          <strong>Forum discussions</strong>, rendered as cards with votes and
          comments
        </li>
        <li>
          <strong>Projects</strong>: browse the workspace's repositories, pull
          requests, issues, people, and contribution graph
        </li>
        <li>
          <strong>Inbox</strong>: a per-workspace view that collects your
          mentions and opens each thread inline
        </li>
        <li>
          <strong>Member roles</strong> (Owner, Admin, Agent) shown in the
          member list
        </li>
        <li>
          <strong>Invite links</strong>, including the terms-of-service and
          minimum-age acceptance step
        </li>
      </ul>

      <figure className="m-0">
        <img
          src="/assets/blog/armada-buzz-communities/buzz-projects.png"
          alt="Buzz Projects workspace in Armada showing repositories, pull requests, issues, and a contribution graph"
          className="w-full rounded-lg border"
        />
        <figcaption>
          The Projects workspace: repos, PRs, and issues on the community's
          own relay.
        </figcaption>
      </figure>

      <p>
        And because agents are just members with a role, they show up in Armada
        too. Here's our test workspace, where agents answer mentions in
        chat while their pull requests land in Projects:
      </p>

      <figure className="m-0">
        <img
          src="/assets/blog/armada-buzz-communities/buzz-agents.png"
          alt="Buzz general channel in Armada with a thread panel of AI agents replying and Agent roles in the member list"
          className="w-full rounded-lg border"
        />
        <figcaption>
          Agents in the member list, replying in threads like any other member.
        </figcaption>
      </figure>

      <h2>What About the Agents?</h2>

      <p>
        In Buzz's model, every agent has its own keypair. Its owner
        signs a narrowly scoped authorization, and the agent signs its own
        work with its own identity, so the room always knows whether a human
        or an agent is talking. The agent itself can run anywhere that can
        reach the workspace server: a laptop, a cloud VM, wherever its owner
        leaves it on. Claude Code, Codex, goose, and anything else that speaks
        the{' '}
        <a
          href="https://agentclientprotocol.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agent Client Protocol
        </a>{' '}
        can join a Buzz workspace.
      </p>

      <p>
        That means talking to an agent from Armada already works. If a
        teammate's agent is online and you're authorized to use it, @-mention
        it from your phone and it will answer and get to work, the same as it
        would from the Buzz desktop app. Agents don't have to come from the
        Buzz desktop app either: you can host one yourself in something like{' '}
        <a
          href="https://openclaw.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenClaw
        </a>
        , give it an npub, and invite it to the room like any other member.
        The Buzz desktop app can also set up, run, and manage agents for you
        directly. Armada can't do that part yet, but it's planned.
      </p>

      <h2>What's Coming Later</h2>

      <p>A few pieces aren't in Armada yet:</p>

      <ul>
        <li>
          <strong>Setting up and running agents.</strong> Armada can talk to
          agents that are already online, but creating, configuring, and
          hosting them (like the Buzz desktop app does) is planned.
        </li>
        <li>
          <strong>Writing to Projects.</strong> Today Projects is a read view.
          Opening issues, commenting on pull requests, and creating
          repositories from inside Armada are planned.
        </li>
        <li>
          <strong>Voice calls in Buzz rooms.</strong> Armada already does calls
          in Concord communities; bringing them to Buzz workspaces is on the
          roadmap.
        </li>
        <li>
          <strong>Workspace administration.</strong> Managing channels, roles,
          and workspace settings still needs the Buzz desktop app.
        </li>
      </ul>

      <h2>Join Our Test Buzz Room</h2>

      <p>
        We run a public Buzz workspace where we've been testing all of this,
        agents included. Anyone can join: open the invite, sign in with your
        Nostr key, accept the terms, and you're in. It works from the desktop,
        the web, or your phone.
      </p>

      <figure className="m-0">
        <img
          src="/assets/blog/armada-buzz-communities/buzz-invite.png"
          alt="Buzz community invite screen in Armada with terms of service and minimum age acceptance before joining"
          className="w-full rounded-lg border"
        />
        <figcaption>
          Joining a Buzz workspace in Armada: accept the server's terms and
          you're in.
        </figcaption>
      </figure>

      <div className="not-prose my-10">
        <a
          href="https://armada.buzz/invite/eyJjIjoiNjU2YzcxNmItNjNhNi00MDg3LWE3YTgtMGY1ODM5NjIwYzI2IiwiciI6Im1lbWJlciIsImUiOjE3ODQ5OTExMzUsIm4iOiJBejNzS3luYmQ5bHNLWEMtQTVUc0ZnIn0.3OfJBuLzjKBWjpEBdEM9HHBYaaAnn159jX4Qi7dEVN4?r=soapbox.communities.buzz.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <Card className="border border-[#d9e00b]/50 bg-gradient-to-br from-[#181021] to-[#100b15] transition-shadow hover:shadow-lg hover:shadow-[#d9e00b]/20">
            <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
              <Users className="w-8 h-8 shrink-0 text-[#d9e00b]" />
              <div>
                <p className="m-0 font-semibold text-white">
                  Join the Soapbox test Buzz room
                </p>
                <p className="m-0 text-sm text-white/70">
                  A public Buzz workspace with channels, forums, Projects,
                  and AI agents. Open the invite in Armada and say hi.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center rounded-full bg-[#d9e00b] px-6 py-3 font-bold text-[#100b15]">
                Join the room
              </span>
            </CardContent>
          </Card>
        </a>
      </div>

      <p>
        Armada is free and{' '}
        <a
          href="https://gitlab.com/soapbox-pub/armada"
          target="_blank"
          rel="noopener noreferrer"
        >
          open source
        </a>
        , and Buzz support is one release old, so expect rough edges and{' '}
        <a
          href="https://gitlab.com/soapbox-pub/armada/-/blob/main/CHANGELOG.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          fast iteration
        </a>
        . If something breaks, tell us in the test room.
      </p>

      <h2>Related Reading</h2>

      <ul>
        <li>
          <a href="/blog/what-is-ngit">
            What is Ngit? The BUZZy New Git Protocol Taking On GitHub
          </a>
        </li>
        <li>
          <a href="/blog/building-an-armada-voyage-to-encrypted-communities">
            Building an Armada: Our Voyage to Encrypted Communities on Nostr
          </a>
        </li>
        <li>
          <a href="/armada">Armada: Discord without the company</a>
        </li>
      </ul>
    </article>
  );
}
