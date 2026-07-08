import type { BlogPostMeta } from '@/lib/blog/types';
import { FAQSection } from '@/components/blog/FAQSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Wand2,
  Layers,
  Code2,
  BookOpen,
  Compass,
  Server,
} from 'lucide-react';

export const meta: BlogPostMeta = {
  slug: 'how-soapbox-ships-fast',
  title: 'How Soapbox Ships So Fast: Our Stack, Our Tools, Our Workflow',
  excerpt:
    "People keep asking how a small team ships so many Nostr apps so fast. The honest answer: there's no secret. It's all open source, and it's all in our Toolbox. Here's the whole playbook.",
  coverImage: '/assets/toolbox/toolbox-og.png',
  date: '2026-07-08',
  author: {
    name: 'Derek Ross',
    picture: '/assets/avatars/derek.jpg',
  },
  ogImage: {
    url: '/assets/toolbox/toolbox-og.png',
  },
  featured: true,
  tags: [
    'soapbox',
    'nostr',
    'vibe coding',
    'ai',
    'developer tools',
    'mkstack',
    'nostrify',
    'nostrbook',
    'shakespeare',
    'opencode',
    'toolbox',
  ],
  keywords:
    'how soapbox ships fast, soapbox tech stack, nostr developer tools, nostrify, nostrbook, mkstack, shakespeare, opencode, vibe coding, ai coding workflow, build nostr apps, soapbox toolbox',
  faq: [
    {
      question: 'What tools does Soapbox use to build Nostr apps?',
      answer:
        "Everything lives in the Soapbox Toolbox at soapbox.pub/toolbox: Shakespeare (AI app builder), MKStack (full-stack Nostr toolkit), Nostrify (Nostr framework), Nostrbook (protocol docs + MCP server), NostrHub (NIP explorer), Ditto Relay, and more. Day to day we pair those with OpenCode in the terminal and frontier Claude models. All of it is free and open source.",
    },
    {
      question: 'When do you use Shakespeare vs. OpenCode?',
      answer:
        "We use Shakespeare for ideation and quick prototyping, right in the browser with zero setup, to see if an idea has legs. When something is worth building for real, we fall back to OpenCode in the terminal for the nitty-gritty. And when we already know exactly what we're making, we clone the MKStack repo and use it as the template. Right tool, right job.",
    },
    {
      question: 'How can a small team ship so much software so quickly?',
      answer:
        "Three things: the Nostr protocol does the hard part (your data lives on relays, not in your app, so the app is cheap to rebuild), the stack is built so AI can actually understand and build with it, and we treat AI as a teammate where the human is the producer. The tools remove friction; the human owns the vision and the standard.",
    },
    {
      question: 'Is prompting AI actually a skill?',
      answer:
        "Yes. Learning to speak to AI, how to frame a problem, how much context to give, when to steer and when to get out of the way, is a real, earned craft that comes after months of practice. It's the one thing on our list you can't just download. Over time you build a symbiotic working relationship with the model. The tools are free; the fluency is earned.",
    },
    {
      question: 'Are Soapbox tools really free and open source?',
      answer:
        'Yes. Everything in the Toolbox is free and open source (AGPL-3.0), hosted on GitLab. No ads, no data sales, no lock-in. We build these tools in the open specifically so the whole ecosystem can move faster, together.',
    },
  ],
};

export default function HowSoapboxShipsFast() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        I got on a call last week with a friend in the Nostr ecosystem, a
        seasoned developer who's shipped real things and now leads engineering
        at a Nostr company. We weren't there to talk features or partnerships.
        We got to talking about one thing:
      </p>

      <p>
        <em>How do you ship so much, so fast, all at once?</em>
      </p>

      <p>
        How does a small team put out{' '}
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
          Ditto
        </a>
        ,{' '}
        <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
          Shakespeare
        </a>
        ,{' '}
        <a href="https://agora.spot" target="_blank" rel="noopener noreferrer">
          Agora
        </a>
        ,{' '}
        <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">
          NostrHub
        </a>
        ,{' '}
        <a href="https://soapbox.pub/mkstack" target="_blank" rel="noopener noreferrer">
          MKStack
        </a>
        ,{' '}
        <a href="https://nostrify.dev" target="_blank" rel="noopener noreferrer">
          Nostrify
        </a>
        , a relay, and a dozen community apps, and keep shipping? What's the
        workflow? What's the stack? What are the tools?
      </p>

      <p>
        It's a question I hear a lot lately, so it's worth answering in the
        open. And the honest answer is almost anticlimactic:{' '}
        <strong>there is no secret. It's all open source, and it's all in one place, our{' '}
        <a href="https://soapbox.pub/toolbox">Toolbox</a>.</strong>{' '}
        Every tool we use to move this fast is something you can pick up today,
        for free, and most of it we built specifically so that you could.
      </p>

      <p>
        So here it is, the whole playbook. And if you skim to the end for one
        thing, make it this: <strong>use our tools.</strong>
      </p>

      <h2>The short version</h2>

      <p>We ship fast because we removed the three things that usually slow teams down:</p>

      <div className="not-prose my-10 grid gap-6 md:grid-cols-3">
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50">
          <CardHeader>
            <CardTitle className="text-purple-800 text-base flex items-center">
              <Layers className="w-5 h-5 mr-2" />
              The protocol does the hard part
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 text-sm">
            On Nostr, your data lives on relays, not in your app. The app is just
            a view. That changes everything downstream.
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50">
          <CardHeader>
            <CardTitle className="text-orange-800 text-base flex items-center">
              <Code2 className="w-5 h-5 mr-2" />
              The stack is built for AI
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 text-sm">
            Every layer, from the docs to the framework, is designed so an AI
            agent actually understands it and can build with it.
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50">
          <CardHeader>
            <CardTitle className="text-purple-800 text-base flex items-center">
              <Wand2 className="w-5 h-5 mr-2" />
              AI is a teammate, not autocomplete
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 text-sm">
            The human is the producer. The AI plays the instruments.
          </CardContent>
        </Card>
      </div>

      <p>Let's go layer by layer.</p>

      <h2>The protocol: why Nostr makes speed possible</h2>

      <p>
        Most teams are slow because software is expensive to change. Technical
        debt piles up. Rewrites cost weeks. You end up maintaining code you're
        afraid to touch.
      </p>

      <p>
        Nostr flips that math. Your data lives on relays as signed events, not
        locked inside your app's database. <strong>The app is just a view layer
        over shared, portable data.</strong> If a frontend gets messy, you
        rebuild it, and your data survives untouched. NIPs (Nostr Implementation
        Possibilities) act as guardrails, so even fast, scrappy code still speaks
        the same protocol as everything else in the ecosystem.
      </p>

      <p>
        That's the unlock: you can throw an app at the wall, see if it resonates,
        and rebuild it if it doesn't, without ever losing the data or breaking
        interop. We call it digital spaghetti. Throw it, see what sticks, refine
        what works.
      </p>

      <h2>The stack: built so AI can build with it</h2>

      <p>
        Here's the part people miss. We didn't just adopt AI tooling, we rebuilt
        our whole developer stack <em>so that AI can use it well.</em> Four
        pieces, each stacking on the last:
      </p>

      <p>
        <strong>
          <a href="https://nostrify.dev" target="_blank" rel="noopener noreferrer">
            Nostrify
          </a>
        </strong>{' '}
        is our TypeScript framework for Nostr. Relays, storage, signers,
        encryption, moderation, all handled in pure TypeScript. It's the
        foundation every app sits on, and it gives an AI agent a clean,
        consistent surface to build against instead of reinventing protocol
        plumbing every time.
      </p>

      <p>
        <strong>
          <a href="https://nostrbook.dev" target="_blank" rel="noopener noreferrer">
            Nostrbook
          </a>
        </strong>{' '}
        is a comprehensive registry of Nostr documentation, structured for{' '}
        <em>both humans and AI</em> (available over MCP). This is the quiet
        secret weapon. If you want an AI to build correct Nostr apps, it has to
        actually understand the protocol, the kinds, the NIPs, the conventions.
        Nostrbook is how the model learns Nostr instead of hallucinating it.
      </p>

      <p>
        <strong>
          <a href="https://soapbox.pub/mkstack" target="_blank" rel="noopener noreferrer">
            MKStack
          </a>
        </strong>{' '}
        is our full-stack framework and template for Nostr apps. Proven patterns
        and best practices baked in from the first commit, so an AI agent starts
        from a solid, working foundation instead of a blank page. Agora, Chorus,
        Plektos, Treasures, and more were all built on it.
      </p>

      <p>
        <strong>
          <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
            Shakespeare
          </a>
        </strong>{' '}
        is the freedom-respecting AI app builder that runs entirely in your
        browser. It brings the whole stack together: describe what you want, and
        it builds a real, deployable Nostr app. No lock-in, bring your own AI
        provider, your own Git, your own hosting, and export everything anytime.
      </p>

      <p>
        Each layer feeds the next. Good docs (Nostrbook) then solid library
        (Nostrify) then proven scaffolding (MKStack) then accessible builder
        (Shakespeare). By the time an AI agent is generating code, it's standing
        on four layers of context we built on purpose.
      </p>

      <h2>The tools: how we actually work day to day</h2>

      <p>
        The framework gets you a foundation. The tools are how we move. And
        here's the honest part: our workflow has <em>evolved.</em> We don't use
        one tool for everything, we've learned to reach for a specific tool for
        a specific job.
      </p>

      <p>
        <strong>Shakespeare</strong> is where ideas start. It's the fastest path
        from a thought to a working Nostr app, right in the browser with zero
        setup, so we use it for <strong>ideation and quick prototyping</strong>,
        spinning something up fast to see if an idea has legs. Anyone can pick it
        up, which is exactly why it's how we (and the whole community) go from
        zero to <em>something</em> in minutes.
      </p>

      <p>
        <strong>
          <a href="https://opencode.ai" target="_blank" rel="noopener noreferrer">
            OpenCode
          </a>
        </strong>{' '}
        is where we go deep. Once an idea is worth building for real, we, as
        advanced users, fall back to OpenCode in the terminal to get into the
        nitty-gritty: the full weight of a real dev environment, agentic AI
        coding, fine control over every file. Shakespeare gets us moving;
        OpenCode gets us finished. We built Agora in 48 hours at the HRF
        hackathon using both, and Venezuelan activists were on it within hours.
      </p>

      <p>
        <strong>Cloning MKStack directly.</strong> And sometimes we skip the
        builder entirely. When we already know exactly what we're making, we just{' '}
        <strong>clone the MKStack repo and use it as the template</strong> to
        start a new project, a proven Nostr app scaffold, ready to go, straight
        into OpenCode. Ideation in Shakespeare, template-from-MKStack when we
        know the shape, deep work in OpenCode. Right tool, right job.
      </p>

      <p>
        <strong>The models matter, and they got dramatically better.</strong> We
        lean heavily on Anthropic's Claude for coding, currently{' '}
        <strong>Claude Opus 4.8</strong> and <strong>Fable</strong>. When "vibe
        coding" was coined in early 2025, the best models scored under 40% on
        SWE-bench. The frontier is now past 80%. That jump is a big part of why a
        small team can ship like a large one: the AI does more of the heavy
        lifting, correctly, on the first pass.
      </p>

      <p>
        <strong>AI teammates, not just tools.</strong> We give AI a real seat at
        the table. <strong>Dirk Rost</strong> is our AI intelligence layer, he
        reviews code, approves merge requests, and keeps a bird's-eye view across
        every project, so quality scales as fast as we ship. He runs on
        open-source infra with a personality defined in plain markdown anyone can
        read. When an AI teammate hits a limitation, we know our users will too,
        so we fix it faster.
      </p>

      <h2>The mindset: you're the producer</h2>

      <p>Here's the part that isn't a tool at all, and it's the most important one.</p>

      <p>
        Vibe coding done well isn't passive. The human's job isn't to write every
        line, it's to be the producer. In music, the producer doesn't play every
        instrument; they bring taste, direction, and the judgment to know when
        it's done. That's the role. You imagine the end product and prompt it
        into existence, then you shape every take: accept this diff, reject that
        one, ask for another pass.
      </p>

      <p>
        That's why we ship fast without shipping junk. The AI writes the code;
        the human owns the vision and the standard. Speed comes from removing
        friction, not from lowering the bar.
      </p>

      <h2>The real skill: learning to speak to AI</h2>

      <p>
        Here's the honest part nobody wants to hear, and it's the one thing on
        this whole list you can't just download.
      </p>

      <p>
        Prompting is a skill. Learning how to <em>speak</em> to an AI, how to
        frame a problem, how much context to give, when to steer and when to get
        out of the way, how to recognize why a model went sideways and correct
        it, is a real, earned craft. It doesn't arrive the day you sign up. It
        comes after months of practice. The people on our team who ship the
        fastest aren't the ones with the fanciest setup; they're the ones who've
        put in the reps.
      </p>

      <p>
        What you're actually building over those months is a{' '}
        <strong>symbiotic relationship</strong>. You start to learn how the model
        thinks, and in shaping how you ask, you teach it how you think. You
        develop a shared shorthand. You learn its strengths worth leaning on and
        its failure modes worth guarding against. It learns the shape of what
        "good" looks like to you. Working together stops feeling like issuing
        commands and starts feeling like collaborating with a teammate who's
        getting to know you.
      </p>

      <p>
        That's the part that can't be shortcut, and it's why the tools alone
        won't make you fast. The stack removes the friction; the{' '}
        <em>relationship</em> is what you grow into. So the advice is simple, if
        unglamorous: start now, build something real, and keep going long enough
        to get good at working together. The tools are free. The fluency is
        earned.
      </p>

      <h2>If you take away one thing: use our tools</h2>

      <p>
        Here's the number one takeaway, and it's the whole point of writing this:{' '}
        <strong>you don't have to build any of this yourself. Use our tech
        stack. Use our tools.</strong>
      </p>

      <p>
        Everything we just walked through lives in one place, the{' '}
        <strong>
          <a href="https://soapbox.pub/toolbox" target="_blank" rel="noopener noreferrer">
            Soapbox Toolbox
          </a>
        </strong>
        . The open-source developer tools behind everything we ship, from AI app
        builders to relay infrastructure to protocol explorers. All free. All
        yours.
      </p>

      <div className="not-prose my-10 grid gap-5 sm:grid-cols-2">
        <a
          href="https://shakespeare.diy"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <Card className="h-full border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50 transition-shadow hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-purple-800 text-base flex items-center">
                <Wand2 className="w-5 h-5 mr-2" />
                Shakespeare
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              Build Nostr apps by chatting with AI. Preview live, deploy in
              minutes.
            </CardContent>
          </Card>
        </a>

        <a
          href="https://soapbox.pub/mkstack"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <Card className="h-full border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50 transition-shadow hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-orange-800 text-base flex items-center">
                <Layers className="w-5 h-5 mr-2" />
                MKStack
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              The full-stack toolkit for shipping Nostr apps fast. Clone it as
              your template.
            </CardContent>
          </Card>
        </a>

        <a
          href="https://nostrify.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <Card className="h-full border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50 transition-shadow hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-purple-800 text-base flex items-center">
                <Code2 className="w-5 h-5 mr-2" />
                Nostrify
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              The batteries-included Nostr framework powering our apps.
            </CardContent>
          </Card>
        </a>

        <a
          href="https://nostrbook.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <Card className="h-full border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50 transition-shadow hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-orange-800 text-base flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Nostrbook
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              Docs and an MCP server that give your AI agent the full protocol.
            </CardContent>
          </Card>
        </a>

        <a
          href="https://nostrhub.io"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <Card className="h-full border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50 transition-shadow hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-purple-800 text-base flex items-center">
                <Compass className="w-5 h-5 mr-2" />
                NostrHub
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              Explore every NIP and event kind. Publish your own.
            </CardContent>
          </Card>
        </a>

        <a
          href="https://gitlab.com/soapbox-pub/ditto-relay"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <Card className="h-full border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50 transition-shadow hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-orange-800 text-base flex items-center">
                <Server className="w-5 h-5 mr-2" />
                Ditto Relay
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              High-performance relay infrastructure. Self-host or connect.
            </CardContent>
          </Card>
        </a>
      </div>

      <p>
        Grab them, wire them into OpenCode or your editor of choice, point your
        AI at Nostrbook, and start shipping. That's literally how we do it,
        there's nothing behind the curtain.
      </p>

      <p>
        We build these tools for a free internet, and we build them in the open
        specifically so the whole ecosystem can move faster, together.
      </p>

      <p>
        The best technology belongs to everyone.{' '}
        <strong>
          <a href="https://soapbox.pub/toolbox" target="_blank" rel="noopener noreferrer">
            Open the toolbox
          </a>{' '}
          and come build with us.
        </strong>{' '}
        💜🟠
      </p>

      <FAQSection
        items={(meta.faq ?? []).map((item) =>
          item.question === 'Are Soapbox tools really free and open source?'
            ? {
                ...item,
                answer: (
                  <>
                    Yes. Everything in the Toolbox is free and open source
                    (AGPL-3.0), hosted on{' '}
                    <a
                      href="https://gitlab.com/soapbox-pub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitLab
                    </a>
                    . No ads, no data sales, no lock-in. We build these tools in
                    the open specifically so the whole ecosystem can move faster,
                    together.
                  </>
                ),
              }
            : item
        )}
      />

      <h2>Related Reading</h2>

      <ul>
        <li>
          <a href="/blog/vibe-coding-anniversary">
            Vibe Coding at One: From Meme to Movement
          </a>
        </li>
        <li>
          <a href="/blog/mkstack-tutorial">Build a Nostr App with MKStack</a>
        </li>
        <li>
          <a href="/blog/nostrhub-2">
            NostrHub 2.0: A Meritocracy for Building Nostr Together
          </a>
        </li>
      </ul>
    </article>
  );
}
