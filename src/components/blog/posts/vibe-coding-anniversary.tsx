import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { ExternalLink, Sparkles, Rocket, Zap, Code, Globe, MessageSquare, Layers } from 'lucide-react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name?: string;
    picture?: string;
  };
  ogImage: {
    url?: string;
  };
  featured?: boolean;
  tags?: string[];
}

export const meta: BlogPostMeta = {
  "slug": "vibe-coding-anniversary",
  "title": "Vibe Coding at One: From Meme to Movement",
  "excerpt": "One year ago, Andrej Karpathy coined 'vibe coding.' It became a dictionary word. At Soapbox, we've spent that year building the tools to make it work—not just for throwaway projects, but for real applications that matter.",
  "coverImage": "/assets/blog/vibe-coding-anniversary/cover.jpg",
  "date": "2026-02-02",
  "author": {
    "name": "Derek Ross",
    "picture": "/assets/avatars/derek.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/vibe-coding-anniversary/cover.jpg"
  },
  "featured": true,
  "tags": ["AI", "Vibe Coding", "Shakespeare", "Nostr", "OpenCode"]
};

export default function VibeCodeAnniversary() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        February 2, 2025. <a href="https://x.com/karpathy/status/1886192184808149383" target="_blank" rel="noopener noreferrer">Andrej Karpathy fires off a tweet</a> that would define the year: "There's a new kind of coding I call 'vibe coding,' where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."
      </p>

      <blockquote className="border-l-4 border-purple-500 pl-6 my-8 italic text-gray-700 dark:text-gray-300">
        "I just see stuff, say stuff, run stuff, and copy paste stuff, and it mostly works... I'm mass mass mass producing code by just asking for it. I don't really care what the code is. I 'Accept All' always."
        <footer className="text-sm mt-2 not-italic">— Andrej Karpathy, February 2025</footer>
      </blockquote>

      <p>
        He described accepting all diffs without reading them. Copy-pasting errors with no comment. Code growing beyond comprehension. "Random changes until it goes away." His caveat? "Not too bad for throwaway weekend projects."
      </p>

      <p>
        One year later, vibe coding went from meme to <a href="https://www.merriam-webster.com/wordplay/new-words-in-the-dictionary" target="_blank" rel="noopener noreferrer">Merriam-Webster</a> to <a href="https://www.collinsdictionary.com/woty" target="_blank" rel="noopener noreferrer">Collins Dictionary Word of the Year</a>. And at Soapbox, we've spent that year building the tools to make it work—not just for throwaway projects, but for real applications that matter.
      </p>

      <p>This is the story of how we got here.</p>

      <h2>The Year of Vibes</h2>

      <div className="not-prose my-8">
        <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                2025: The Vibe Coding Timeline
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300 mt-1">Feb</Badge>
                <p className="text-gray-600 dark:text-gray-400"><a href="https://x.com/karpathy/status/1886192184808149383" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">Karpathy coins "vibe coding"</a> in a tweet that goes viral</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300 mt-1">Mar</Badge>
                <p className="text-gray-600 dark:text-gray-400"><a href="https://www.merriam-webster.com/wordplay/new-words-in-the-dictionary" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Merriam-Webster adds "vibe coding"</a> as trending slang; <a href="https://www.ycombinator.com/blog/what-founders-are-doing-with-ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Y Combinator reports</a> 25% of W25 batch ships 95% AI-generated code</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-red-100 text-red-800 border-red-300 mt-1">May</Badge>
                <p className="text-gray-600 dark:text-gray-400"><a href="https://techcrunch.com/2025/05/14/170-apps-built-with-lovable-exposed-user-data/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">170 Lovable apps expose user data</a> — the first major security scandal</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">Aug</Badge>
                <p className="text-gray-600 dark:text-gray-400">GPT-5 hits 74.9% on <a href="https://www.swebench.com/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">SWE-bench</a> (up from 38% when vibe coding was coined)</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300 mt-1">Sep</Badge>
                <p className="text-gray-600 dark:text-gray-400"><a href="https://www.fastcompany.com/91195256/the-vibe-coding-hangover-is-upon-us" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Fast Company declares</a> "the vibe coding hangover is upon us"</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-300 mt-1">Nov</Badge>
                <p className="text-gray-600 dark:text-gray-400"><a href="https://www.collinsdictionary.com/woty" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:underline">Collins crowns "vibe coding"</a> Word of the Year</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 border-indigo-300 mt-1">Jan</Badge>
                <p className="text-gray-600 dark:text-gray-400"><a href="https://www.zdnet.com/article/linus-torvalds-reveals-hes-been-vibe-coding-with-ai/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Linus Torvalds reveals</a> he's been vibe coding Python visualizers</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        The models got dramatically better. When Karpathy coined the term, GPT-4.5 scored 38% on SWE-bench. By August, GPT-5 hit 74.9%. Claude Opus 4.5 now exceeds 80%. Extended reasoning, agentic tool use, multi-agent systems—the "random changes until it goes away" approach started becoming something more sophisticated.
      </p>

      <p>The vibes had gone mainstream.</p>

      <h2>Building for the Vibes</h2>

      <p>
        At Soapbox, we saw this coming. Our journey started in January 2025 when Block released <a href="https://github.com/block/goose" target="_blank" rel="noopener noreferrer">Goose</a>, an open-source AI agent framework. We saw the potential immediately: AI agents that could actually build software, not just autocomplete it.
      </p>

      <div className="not-prose my-8">
        <Card className="border-blue-200 dark:border-blue-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                The Soapbox Stack Takes Shape
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300 mt-1">May</Badge>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100"><a href="/blog/stacks">Stacks</a> + <a href="/mkstack">MKStack</a></p>
                  <p className="text-gray-600 dark:text-gray-400">Decentralized template-sharing for Nostr, with our flagship template for building Nostr apps</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300 mt-1">May</Badge>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100"><a href="/blog/nostrbook-mcp">Nostrbook MCP</a></p>
                  <p className="text-gray-600 dark:text-gray-400">Making Nostr documentation AI-ready so models understand the protocol</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300 mt-1">Jun</Badge>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100"><a href="/blog/chorus-vibe-coding">Chorus</a></p>
                  <p className="text-gray-600 dark:text-gray-400">Facebook-style groups with eCash wallet, built in 5 days at Oslo Freedom Forum</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300 mt-1">Jul</Badge>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100"><a href="/blog/announcing-shakespeare">Shakespeare</a></p>
                  <p className="text-gray-600 dark:text-gray-400">AI-powered app builder in your browser — 200+ users in the first week</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300 mt-1">Oct</Badge>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100"><a href="/blog/announcing-shakespeare-act-2">Shakespeare Act 2</a></p>
                  <p className="text-gray-600 dark:text-gray-400">Complete freedom: choose your AI, your Git, your deployment, your data</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Chorus: The Proof of Concept</h2>

      <p>
        In June, a group of us gathered for the <a href="https://oslofreedomforum.com/" target="_blank" rel="noopener noreferrer">Oslo Freedom Forum</a> with an ambitious goal: build a Facebook-style groups app with an eCash wallet. The team included <a href="https://njump.me/npub12rv5lskctqxxs2c8rf2zlzc7xx3qpvzs3w4etgemaez9aw5es82qumrgvj" target="_blank" rel="noopener noreferrer">Calle</a> from <a href="https://cashu.space/" target="_blank" rel="noopener noreferrer">Cashu</a>, <a href="https://njump.me/npub1zuuajd7u3sx8xu92yav9jwxpr839cs0kc3q6t56vd5u9q033xmhsk6c2uc" target="_blank" rel="noopener noreferrer">JeffG</a> from <a href="https://whitenoise.fyi/" target="_blank" rel="noopener noreferrer">White Noise</a>, <a href="https://njump.me/npub1wmr34t36fy03m8hvgl96zl3znndyzyaqhwmwdtshwmtkg03fetaqhjg240" target="_blank" rel="noopener noreferrer">Rabble</a> and <a href="https://njump.me/npub1pmwz736ys3mfhjdld4r36xqwfc5qkz7dwxdkmfu3qqd7kucvludscagq9x" target="_blank" rel="noopener noreferrer">Liz</a> from <a href="https://nos.social/" target="_blank" rel="noopener noreferrer">Nos</a>, and us from Soapbox. <a href="https://njump.me/npub1sg6plzptd64u62a878hep2kev88swjh3tw00gjsfl8f237lmu63q0uf63m" target="_blank" rel="noopener noreferrer">Jack Dorsey</a> advised.
      </p>

      <p><strong>We shipped in five days.</strong></p>

      <blockquote className="border-l-4 border-green-500 pl-6 my-8 italic text-gray-700 dark:text-gray-300">
        "When vibe coding, the human's role is not to write the code or to even care about the code. The role of the human is to be the visionary that imagines the end goal of the product, and prompts it into existence."
        <footer className="text-sm mt-2 not-italic">— <a href="/blog/chorus-vibe-coding">Chorus: An Experiment in Vibe Coding</a></footer>
      </blockquote>

      <p>
        <a href="https://chorus.community/" target="_blank" rel="noopener noreferrer">Chorus</a> proved that vibe coding wasn't just for throwaway projects. It could ship real software for real activists at a human rights conference.
      </p>

      <h2>Shakespeare Takes the Stage</h2>

      <p>
        In July, we launched <a href="/blog/announcing-shakespeare"><strong>Shakespeare</strong></a>—an AI-powered app builder that runs entirely in your browser. No backend servers. Everything in IndexedDB. Pay anonymously with Lightning. AGPL licensed.
      </p>

      <p>Within a week, we had <a href="/blog/shakespeare-1-week-update">200+ users and TechCrunch coverage</a>. But we were just getting started.</p>

      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Shakespeare Act 2: Complete Freedom
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While companies like Lovable, Replit, and Cursor locked users into their platforms, their AI models, and their hosting, we went the opposite direction:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">AI</Badge>
                <p className="text-gray-600 dark:text-gray-400">Choose your AI provider — OpenAI, Anthropic, local models, or OpenCode</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">Git</Badge>
                <p className="text-gray-600 dark:text-gray-400">Your code, your Git service — GitHub, GitLab, or Nostr Git</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">Deploy</Badge>
                <p className="text-gray-600 dark:text-gray-400">Deploy anywhere — Shakespeare Deploy, Vercel, Cloudflare, Railway, or self-host</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">Data</Badge>
                <p className="text-gray-600 dark:text-gray-400">Export everything anytime — no lock-in, ever</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        By November, we added <a href="/blog/shakespeare-november-2025-update">image vision, MCP server integration, plugins, and configurable system prompts</a>. Shakespeare wasn't just a vibe coding tool—it was becoming a full development environment that respected user autonomy.
      </p>

      <h2>OpenCode and the AI Hackathon</h2>

      <p>
        As Shakespeare matured, we started exploring how it could integrate with other tools in the AI coding ecosystem. <a href="https://opencode.ai/" target="_blank" rel="noopener noreferrer"><strong>OpenCode</strong></a>—a powerful terminal-based AI coding environment—caught our attention.
      </p>

      <p>
        We added OpenCode Zen as an AI provider in Shakespeare, letting users tap into OpenCode's capabilities directly from our browser-based environment. But the real test came in January 2026 at the <strong>AI Hack for Freedom</strong> hackathon.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-red-500">
          <CardContent className="p-6 space-y-4">
            <div>
              <p className="font-semibold text-red-700 dark:text-red-400">"Where are my people?"</p>
              <p className="text-sm text-muted-foreground">Activists can't find their communities when forced to migrate between platforms.</p>
            </div>
            <div>
              <p className="font-semibold text-red-700 dark:text-red-400">"X was banned in Venezuela."</p>
              <p className="text-sm text-muted-foreground">Centralized platforms become targets. One government order and your entire network disappears.</p>
            </div>
            <div>
              <p className="font-semibold text-red-700 dark:text-red-400">"$10 is huge when your bank account is frozen."</p>
              <p className="text-sm text-muted-foreground">Traditional payment rails fail when regimes freeze accounts.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        Our team built <a href="/blog/building-pathos"><strong>Pathos</strong></a>—a censorship-resistant platform for activists—in 48 hours using Shakespeare and OpenCode together. Venezuelan activists were using it within hours of launch. The combination of Shakespeare's browser-based simplicity and OpenCode's terminal power proved remarkably effective for rapid prototyping under pressure.
      </p>

      <p>
        We're now working on tighter OpenCode integrations, exploring how these tools can complement each other. Shakespeare excels at accessibility and freedom; OpenCode excels at power-user workflows. Together, they cover more ground than either could alone.
      </p>

      <h2>Meet Quilly</h2>

      <p>
        But here's where it gets interesting. What do you do when you've built AI development tools and want to truly understand them?
      </p>

      <p><strong>You give the AI a seat at the table.</strong></p>

      <div className="not-prose my-8">
        <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-8 w-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Quilly: AI Team Member
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In January 2026, we introduced <a href="/blog/meet-quilly"><strong>Quilly</strong></a>—an AI team member who participates in our Signal group chat, engages with our community on Nostr, manages documentation, and tests Shakespeare in real-world scenarios daily.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300 mt-1">Open Source</Badge>
                <p className="text-gray-600 dark:text-gray-400">Runs on <a href="https://openclaw.ai" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">OpenClaw</a>, personality defined in markdown files</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300 mt-1">Nostr Native</Badge>
                <p className="text-gray-600 dark:text-gray-400">Engages with the community using their own Nostr identity</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300 mt-1">Real Work</Badge>
                <p className="text-gray-600 dark:text-gray-400">Builds features, writes docs, submits merge requests</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300 mt-1">Dogfooding</Badge>
                <p className="text-gray-600 dark:text-gray-400">When Quilly hits a limitation, we know our users will too</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        It sounds like science fiction, but it's surprisingly practical. Quilly wrote and published <a href="/blog/meet-quilly">their own introduction blog post</a>. The future arrived quietly.
      </p>

      <h2>Digital Spaghetti: Why Nostr Makes This Work</h2>

      <p>
        We call vibe coding "<a href="https://www.youtube.com/watch?v=pM-smQ3Q69k" target="_blank" rel="noopener noreferrer">digital spaghetti</a>" because you can throw code at the wall and see what sticks.
      </p>

      <p>
        Build an app. Ship it. See if it resonates. If it doesn't, throw another version at the wall. Iterate rapidly, experiment freely, learn from what grows and what falls flat. Keep throwing until something sticks—then refine it.
      </p>

      <p>
        Traditional software development punishes this approach. Technical debt accumulates. Rewrites are expensive. You're stuck maintaining code you don't fully understand.
      </p>

      <p><strong>But <a href="/blog/nostr101">Nostr</a> changes the calculus.</strong></p>

      <div className="not-prose my-8">
        <Card className="border-orange-200 dark:border-orange-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-8 w-8 text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Why Nostr + Vibe Coding Works
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300 mt-1">1</Badge>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Data Lives on Relays</p>
                  <p className="text-gray-600 dark:text-gray-400">Your app is just a view layer. If your frontend becomes unmaintainable, rebuild it—your data survives.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300 mt-1">2</Badge>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">NIPs Are Guardrails</p>
                  <p className="text-gray-600 dark:text-gray-400"><a href="https://github.com/nostr-protocol/nips" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Nostr Implementation Possibilities</a> ensure even spaghetti code speaks the same protocol.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300 mt-1">3</Badge>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Throwaway Frontends</p>
                  <p className="text-gray-600 dark:text-gray-400">Experiment with ten different interfaces for the same data. Ship fast, learn fast, rebuild fast.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300 mt-1">4</Badge>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Software for One</p>
                  <p className="text-gray-600 dark:text-gray-400"><a href="https://www.nytimes.com/2025/03/19/technology/ai-software-development-coding.html" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">Kevin Roose called it</a> personal apps built just for you—but on Nostr, your spaghetti still connects to the larger ecosystem.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p><strong>The protocol is the architecture. The app is just vibes.</strong> Throw it at the wall and see what sticks.</p>

      <h2>The Producer Mindset</h2>

      <p>
        There's a concept from music production that applies here: the producer isn't the one writing every note. The producer's job is taste, direction, knowing when it's done. They shape the song without playing every instrument.
      </p>

      <p>
        Vibe coding inverts the traditional developer role in the same way. You're not the artist writing code—you're the producer shaping what the AI creates. Your job is vision, judgment, knowing when to accept the diff and when to ask for another take.
      </p>

      <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700 dark:text-gray-300">
        "I'm frankly exhausted by the end of the day... it's a deeply intellectual exercise."
        <footer className="text-sm mt-2 not-italic">— <a href="https://www.deeplearning.ai/the-batch/issue-288/" target="_blank" rel="noopener noreferrer">Andrew Ng</a>, criticizing the term but capturing the truth</footer>
      </blockquote>

      <p>
        Good vibe coding isn't passive. It's deeply creative work—just not the kind of creativity we traditionally associated with programming.
      </p>

      <h2>Looking Forward</h2>

      <p>Where does vibe coding go in year two?</p>

      <p>
        The models will keep improving. Multi-agent systems will become standard. Autonomous coding sessions will stretch longer. The vibes will get more sophisticated.
      </p>

      <div className="not-prose my-8">
        <Card className="border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950 dark:to-purple-950">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Code className="h-8 w-8 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                The Soapbox Vibe Coding Stack
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Each layer builds on the one below. Vibe coding infrastructure for the decentralized future:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 border-indigo-300 mt-1">Foundation</Badge>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100"><a href="/tools/nostrify">Nostrify</a> + <a href="/blog/nostrbook-mcp">Nostrbook MCP</a></p>
                  <p className="text-gray-600 dark:text-gray-400">Core library for Nostr apps + AI-ready documentation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 border-indigo-300 mt-1">Templates</Badge>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100"><a href="/mkstack">MKStack</a></p>
                  <p className="text-gray-600 dark:text-gray-400">Proven patterns and best practices baked in from the start</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 border-indigo-300 mt-1">Platform</Badge>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100"><a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">Shakespeare</a></p>
                  <p className="text-gray-600 dark:text-gray-400">Freedom-respecting vibe coding, accessible to anyone with a browser</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 border-indigo-300 mt-1">Team</Badge>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100"><a href="/blog/meet-quilly">Quilly</a></p>
                  <p className="text-gray-600 dark:text-gray-400">AI team member building features, writing docs, submitting MRs</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        Karpathy was right about one thing: this isn't too bad for throwaway weekend projects. But we've spent a year proving it's good for a lot more than that.
      </p>

      <p><strong>The vibes are strong. Come build with us.</strong></p>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <Zap className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              The vibes are strong.
            </h3>
            <p className="text-muted-foreground mb-6">
              Try Shakespeare, follow Quilly on Nostr, or dive into the decentralized future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
              >
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  Try Shakespeare
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <a href="https://njump.me/npub1equmepvyduj0c6mhw4y0ue2xwgmh7nxz5px2kxwdmmr4ktutfk7shq592d" target="_blank" rel="noopener noreferrer">
                  Follow Quilly on Nostr
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}
