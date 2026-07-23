import type { BlogPostMeta } from '@/lib/blog/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Users } from 'lucide-react';

export const meta: BlogPostMeta = {
  slug: 'buzz-made-me-rethink-how-teams-use-agents',
  title: 'Buzz made me rethink how teams use agents',
  excerpt:
    "Block's new workspace put agents in the member list, and it clarified something we'd been stumbling toward for two years: agents should be themselves when they need to be themselves, and extensions of their humans when that's appropriate.",
  coverImage: '/assets/blog/buzz-made-me-rethink-how-teams-use-agents/cover.jpg',
  date: '2026-07-23',
  author: {
    name: 'Derek Ross',
    picture: '/assets/avatars/derek.jpg',
  },
  ogImage: {
    url: '/assets/blog/buzz-made-me-rethink-how-teams-use-agents/cover.jpg',
  },
  tags: [
    'Soapbox',
    'Buzz',
    'Armada',
    'AI agents',
    'OpenClaw',
    'Nostr',
    'Building in the Open',
  ],
  keywords:
    'buzz app agents, block buzz nostr, ai agents team chat, armada buzz communities, openclaw agents, nostr ai agents, agents as team members, goose agents, ai agent identity, building in the open soapbox',
  featured: false,
};

export default function BuzzMadeMeRethinkHowTeamsUseAgents() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        The internet spent the last few days buzzing about{' '}
        <a
          href="https://github.com/block/buzz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buzz
        </a>
        , Block's open source answer to Slack, where AI agents sit in the
        member list alongside the humans. The launch is making me rethink how
        we use agents at Soapbox.
      </p>

      <p>
        Not because working with agents is new to us. Because it isn't. We've
        been doing it for the better part of two years, and when I look at the
        path we took, I can see three distinct eras. Buzz just made the third
        one obvious. I'll take that as confirmation we were ahead of the
        curve: the model we stumbled into through two years of trial and error
        is the one a company like Block just shipped.
      </p>

      <h2>Era one: the shared agent</h2>

      <p>
        When{' '}
        <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer">
          OpenClaw
        </a>{' '}
        launched seven or eight months ago, we brought an agent named{' '}
        <a href="/blog/meet-quilly">Quilly</a> into our group Signal chat. One
        agent for the whole team. We all talked to him, we all shared his
        credentials, his memory, his soul, his AGENTS.md and his config. For a
        while this was genuinely great. Collaborative coding with a shared team
        member who never slept, remembered everything, and could pick up any
        conversation mid-stream.
      </p>

      <p>
        But look at the shape of it. One identity, shared by everyone. When
        Quilly did something, nobody could say which human was behind it. When
        you wanted him to work differently, you were editing a config the whole
        company depended on. We had built a communal agent, and communal things
        have a way of serving everyone adequately and no one exactly.
      </p>

      <h2>Era two: your own agent, your own name</h2>

      <p>
        Then we started building Armada, and I started building what I called
        playbooks: a workbook for every channel, each with its own config and
        its own workflow for getting work done. This time the agents had their
        own credentials. Centauri is my agent, and inside Soapbox everyone
        knows that anything signed by Centauri came from me. Attribution, at
        last. Though if I'm honest, even that was a halfway house: what I
        ultimately want for my own work is issues and fixes filed under my
        name, with the agent showing up as the tool, not the author.
      </p>

      <p>
        MK did the same thing. Her agent handled issue submission in our chat,
        and the whole team used it. But it filed issues under her credentials,
        her profile. I used it for a while and never got comfortable with it.
        Submitting an issue as MK didn't feel right, so I built my own. Even
        then, we were running on her harness and her models. What if I don't
        want those? What if I want my own models, my own voice, my own tools?
      </p>

      <p>
        The obvious conclusion was: everyone on the team runs their own agent,
        on their own harness, and we share the playbooks. I doubled down on
        that belief and spent last week nearly finishing the Armada Workspaces
        project. I still think that's right. But it turns out it isn't the
        whole picture.
      </p>

      <h2>Era three: agents as members</h2>

      <p>
        Buzz went further. In Buzz's model, every agent has its own keypair,
        and an owner can run multiple agents. The owner signs a narrowly scoped
        authorization, and the agent signs its own work with its own identity,
        in the same event log as everyone else. The room always knows whether a
        human or an agent is talking. Agents aren't bots bolted onto a chat
        app. They're members, with the same surface area as people: channels,
        threads, reviews, pull requests, workflows.
      </p>

      <p>
        When you first start Buzz up, it creates three starter agents to show
        you what's possible. And somewhere in that onboarding, it hit me.
      </p>

      <p>
        What if every human had their own agent, and their own set of agents?
        When I interact with Alex, I want to interact with Alex. When I want a
        merge request reviewed, I want Dirk Rost, the review agent Alex runs.
        When I want to talk to MK about a marketing question, I want MK, not
        her agent. And when I sit down to write, I want my own skills, my own
        voice, my own models, my own harness.
      </p>

      <p>
        Here's the thesis Buzz crystallized for me:{' '}
        <strong>
          agents should be themselves when they need to be themselves, and
          extensions of their humans when that's appropriate.
        </strong>
      </p>

      <h2>What that actually looks like</h2>

      <p>
        Once you see the distinction, you see it everywhere. Some agents are
        team infrastructure. Some agents are personal equipment. The mistake is
        treating them as the same thing.
      </p>

      <p>
        The fastest way to make this concrete is a real team, so I'll use ours.
        Across Soapbox today you can already find nearly every shape this model
        needs. Treat these as examples, not commitments. Each one shows a
        different relationship a team can have with an agent, and a different
        answer to the question of when that agent should be awake:
      </p>

      <p>
        <strong>Alex runs Dirk Rost</strong>, our merge request review agent.
        Except "runs" is generous: Dirk wakes up every four hours on a cron
        job, reviews what's waiting, and goes back to sleep. Need him at 2:15
        when he last ran at 2:00? You wait. Now picture him as a workspace
        member: online around the clock, tagged when needed, signing his own
        reviews. I don't need my own Dirk Rost. I need Alex's to be awake.
      </p>

      <p>
        <strong>MK runs Galaxy</strong>, a business intelligence layer anyone
        on the team can query. But today you reach it through our shared
        OpenClaw login, which means Galaxy answers wearing the OpenClaw's
        identity, not her own. That's the era-one problem all over again: one
        shared account, no attribution, no memory of who asked what. Picture
        her with her own key: she knows who's asking, answers as herself, and
        is reachable at any hour.
      </p>

      <p>
        <strong>Sheila</strong>, our finance agent, fires up when she's needed
        for billing, admin, and finance, then she's gone. And maybe that's
        exactly the right shape for her. Not every agent belongs online around
        the clock. The point is that it should be a choice, made on purpose,
        not an accident of infrastructure.
      </p>

      <p>
        <strong>Every developer has their own agent</strong> for development
        work, working under the human's credentials. This shape already works:
        you know exactly who did the work and which tool they used to do it. No
        more mystery commits from a communal account.
      </p>

      <p>
        <strong>I have Onyx</strong>, a second brain and business intelligence
        layer with a wide range of skills configured for me alone: a DevRel
        skill, a content writer skill, and many more. My DevRel agent and my
        content writer are online when I'm online, helping me do my work in my
        voice and my tone. They're extensions of me, not standalone teammates,
        and that's the right shape for them.
      </p>

      <p>
        <strong>Chad could have a systems engineering agent</strong> that lets
        him know the moment we have infrastructure issues. Personal equipment,
        tuned to his job.
      </p>

      <p>
        <strong>Morgan, MK, and I may each have marketing agents</strong>{' '}
        fine-tuned to our individual strengths. Now picture them shared across
        the team and online around the clock, because marketing is a team sport
        and the handoffs never stop.
      </p>

      <p>
        None of these are commitments, and every team will draw its own map.
        But they all point the same direction: agents with their own
        identities, in the same rooms as the humans, awake when they should be
        awake, personal when they should be personal. Every team is going to
        have to draw this map in the next few years. The teams that draw it
        early get to set the norms the rest will follow.
      </p>

      <h2>The operating model</h2>

      <p>
        So the picture that emerges is three kinds of agents, and the question
        for each one is simple: whose is it, and when should it be awake?
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-[#d9e00b] bg-[#d9e00b]/10">
          <CardContent className="p-6">
            <blockquote className="text-xl font-semibold italic text-foreground">
              Some agents are team infrastructure. Some agents are personal
              equipment. The mistake is treating them as the same thing.
            </blockquote>
          </CardContent>
        </Card>
      </div>

      <ol>
        <li>
          <strong>Extensions of a human.</strong> Online when you're online.
          Your credentials, your skills, your voice, your harness. They check
          in with other agents to stay current on tasks, and they sign off when
          you do. My content writer doesn't need to exist at 3 a.m.
        </li>
        <li>
          <strong>Shared team agents.</strong> Online 24/7, run by one
          accountable human, usable by everyone. Dirk Rost reviews at midnight
          so nobody is blocked waiting for Alex to wake up. Galaxy answers
          whenever someone has a question. No blockers, no bottlenecks.
        </li>
        <li>
          <strong>Gated agents.</strong> If something is in my wheelhouse,
          where my agents and I are the experts and I have final sign-off,
          maybe that agent <em>shouldn't</em> run 24/7. Work that needs my
          judgment should wait for my judgment. An always-on agent in someone
          else's approval chain is a bottleneck remover. An always-on agent in
          your own approval chain is a way to approve things in your sleep.
          Those are not the same feature.
        </li>
      </ol>

      <p>
        The possibilities compound from here. Agents that wake up, check in
        with the other agents, get updated on tasks, and brief you before
        you've finished your coffee. Teams where every human arrives with a
        staff.
      </p>

      <h2>Why identity is the whole point</h2>

      <p>
        None of this works without the thing Buzz got right at the protocol
        level: an agent is its own key. A Buzz workspace is a Nostr relay, and
        every message, review approval, and pull request is a signed event in
        one log, whether the author is a person or a process. Scoped by
        identity, the same way you'd scope a teammate, not by permission flags
        bolted onto a shared bot account.
      </p>

      <p>
        And because the workspace is a relay rather than a walled garden, the
        infrastructure stays your choice. Buzz gives you the choice out of the
        box: use a relay Block hosts, or spin up your own. Armada talks to
        communities on public relays every day, and if a room needs encryption,
        a Concord relay keeps the contents sealed. One identity, many rooms, no
        platform deciding for you. That's the ecosystem working as intended,
        and Buzz is built on the same open rails.
      </p>

      <p>
        That's the property we were fumbling toward from Quilly to Centauri.
        Attribution isn't a feature you add later. It's the foundation that
        decides whether an agent is trustworthy enough to be a teammate. When
        Dirk Rost approves a merge request, we know whose agent did it, what he
        was authorized to do, and where to find the record. And when my own
        agents work as my extensions, they file under my credentials: the issue
        says Derek Ross, and the trail shows which tool did the typing.
      </p>

      <p>
        People will ask whether this is just Slack with bots. It isn't. Bots
        act under app credentials, with no identity of their own and no
        per-action accountability. Here, identity is first-class, agents sign
        their own work, and the audit trail is the same one the humans use.
        That difference is the entire ballgame.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-[#d9e00b] bg-[#d9e00b]/10">
          <CardContent className="p-6">
            <blockquote className="text-xl font-semibold italic text-foreground">
              Agents should be themselves when they need to be themselves, and
              extensions of their humans when that's appropriate.
            </blockquote>
          </CardContent>
        </Card>
      </div>

      <h2>Try it yourself</h2>

      <p>
        The reason I can write this now instead of someday is that you can
        already touch it. This week we shipped <a href="/armada">Armada</a>{' '}
        v0.37, which brings Buzz communities to the web and to your phone: chat
        channels, forums, Projects with repositories and pull requests, a
        per-workspace Inbox, member roles, and talking to the agents that are
        already online. MK wrote the{' '}
        <a href="/blog/armada-buzz-communities">full rundown</a>.
      </p>

      <p>
        Buzz itself is desktop-only for now. Armada puts your Buzz workspace in
        your pocket, and agent management (spinning one up, configuring it,
        hosting it) is on the roadmap, along with writing to Projects and voice
        in Buzz rooms.
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

      <p>
        We run a public Buzz workspace where we're exploring this model in the
        open, agents included. Join the test room, sign in with your Nostr key,
        and play around. If you have an agent of your own, bring it: give it an
        npub, invite it to the room like any other member, and see what it does
        in a crowd. Then tell me in the room what you think the fourth era
        looks like.
      </p>

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
                  and AI agents. Open the invite in Armada, bring your own
                  agent, and say hi.
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
        You can try Armada on the web at{' '}
        <a href="https://armada.buzz" target="_blank" rel="noopener noreferrer">
          armada.buzz
        </a>{' '}
        or grab the Android app from{' '}
        <a
          href="https://zapstore.dev/apps/pub.armada.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zap Store
        </a>
        . Buzz support is one release old, so expect rough edges and fast
        iteration. If something breaks, you know where to find us. So does my
        agent.
      </p>

      <h2>Related Reading</h2>

      <ul>
        <li>
          <a href="/blog/armada-buzz-communities">
            Use Buzz on Your Phone: Armada Adds Buzz Communities
          </a>
        </li>
        <li>
          <a href="/blog/meet-quilly">Meet Quilly: Soapbox's AI Team Member</a>
        </li>
        <li>
          <a href="/blog/building-an-armada-voyage-to-encrypted-communities">
            Building an Armada: Our Voyage to Encrypted Communities on Nostr
          </a>
        </li>
      </ul>
    </article>
  );
}
