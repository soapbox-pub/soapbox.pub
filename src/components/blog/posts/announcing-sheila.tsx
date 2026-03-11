import React from 'react';

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
  "slug": "announcing-sheila",
  "title": "Announcing Sheila",
  "excerpt": "An AI agent that replaced our entire accounting flow at Soapbox. Contractor invoices, payments in fiat and Bitcoin, bookkeeping, expense tracking, all handled by one agent built with OpenCode.",
  "coverImage": "/assets/blog/announcing-sheila/cover.jpg",
  "date": "2026-03-06",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-sheila/cover.jpg"
  },
  "featured": false,
  "tags": ["AI", "Open Source", "OpenCode"]
};

export default function AnnouncingSheila() {
  return (
    <article className="prose prose-lg max-w-none">
      <p>Everybody is building AI agent platforms right now. Agent frameworks, agent marketplaces, multi-agent orchestration engines. Billions of dollars are going into this space. Has anyone actually built ONE agent that works?</p>

      <p>I built one. It's called <strong>Sheila</strong>, and it replaced our entire accounting flow at Soapbox.</p>

      <h2>What It Does</h2>

      <p>Sheila handles the full lifecycle of contractor payments. She reads invoices from email, records them in a Google Spreadsheet, sends payments in both fiat (ACH/wire via <a href="https://mercury.com" target="_blank" rel="noopener noreferrer">Mercury</a>) and Bitcoin (via Kraken, Lightning, and Boltz), generates invoice PDFs, archives everything to Google Drive, and submits our expenses to <a href="https://opencollective.com" target="_blank" rel="noopener noreferrer">OpenCollective</a>. She also tracks P&L and generates 1099 reports.</p>

      <p>I open a terminal and say "what's the status?" and she tells me what's done, what's pending, and what needs attention.</p>

      <figure>
        <img src="/assets/blog/announcing-sheila/spreadsheet.png" alt="Google Sheets payment tracker managed by Sheila" />
        <figcaption>The payment tracker spreadsheet. Sheila maintains this automatically.</figcaption>
      </figure>

      <h2>How I Built It</h2>

      <p>I ran <a href="https://opencode.ai" target="_blank" rel="noopener noreferrer">OpenCode</a> in an empty folder and just started describing what I wanted.</p>

      <p>This is actually Sheila v2. In v1, I tried to build complex multi-step flows in code. It was fragile and inflexible.</p>

      <p>For v2, I built a <strong>toolkit of granular scripts</strong> instead. Each one does exactly one thing: check a balance, send a payment, upload a file, append a row to a spreadsheet, read an email. I tested them one by one (over 50 scripts in total).</p>

      <p>Then I wrote <code>AGENTS.md</code>, a 600-line document that describes the workflows in plain English. When I tell Sheila to "process invoices," the agent reads the instructions and chains the right scripts together in the right order.</p>

      <figure>
        <img src="/assets/blog/announcing-sheila/scripts.png" alt="Sheila's package.json showing available scripts" />
        <figcaption>Sheila runs TypeScript scripts to perform various tasks.</figcaption>
      </figure>

      <h2>Human Oversight</h2>

      <p>Sheila is not fully autonomous. She runs in OpenCode, which means I'm sitting in the terminal watching her work. She can draft an email or prepare a payment, but I see what she's doing before it goes out. This is still a drastic time-saver, and maybe someday Sheila will run fully autonomously.</p>

      <figure>
        <img src="/assets/blog/announcing-sheila/opencollective.png" alt="OpenCollective expense submitted by Sheila with a comment" />
        <figcaption>Sheila submits expenses to OpenCollective and comments on them.</figcaption>
      </figure>

      <h2>Why OpenCode</h2>

      <p>The best tool for building AI agents today is <a href="https://opencode.ai" target="_blank" rel="noopener noreferrer">OpenCode</a>, not <a href="https://github.com/open-claw/open-claw" target="_blank" rel="noopener noreferrer">OpenClaw</a>. Despite the hype around OpenClaw, and despite the fact that OpenCode is marketed as a coding agent, OpenCode is the better tool for this.</p>

      <p>The reason is the human feedback loop. Building a real agent requires constant iteration. You write a script, test it, discover an edge case, fix it. You test the workflow end-to-end, find out the AI misunderstands a step, rewrite the instructions, test again. Hundreds of cycles like this.</p>

      <p>That loop is still essential. Autonomous agent platforms skip it, and that's why their agents don't work in production. They're optimizing for demos where the human walks away. But the work that makes an agent reliable happens in the iterations between the human and the AI. OpenCode gives you that.</p>

      <h2>Top-Down vs. Bottom-Up</h2>

      <p>The AI industry has a top-down bias right now. Build the platform first, design the abstraction layer, create the marketplace, then hope agents emerge. This is backwards. It's a huge waste of money. You can't build a useful agent platform without first understanding what a useful agent looks like, and you can't understand that without building one from scratch.</p>

      <p>The AI companies that work will be the ones that put in the hard work to build each agent one at a time from the bottom up. Sheila was built that way. Script by script, workflow by workflow, over weeks of iteration.</p>

      <figure>
        <img src="/assets/blog/announcing-sheila/email-reply.png" alt="Email from Sheila notifying a contractor that payment was sent" />
        <figcaption>Sheila emails contractors when their payment is sent.</figcaption>
      </figure>

      <h2>Make Your Own</h2>

      <p>Sheila's exact setup probably isn't a perfect fit for you. You might not use Mercury for banking or pay contractors in Bitcoin or need OpenCollective integration. But the pattern works for anything: build granular scripts, describe workflows in <code>AGENTS.md</code>, iterate with human feedback until it's reliable.</p>

      <p>Fork it and swap the scripts for your own integrations, or start from scratch in an empty folder with OpenCode.</p>

      <p>Sheila is open source under the AGPL.</p>

      <p><strong>Source code:</strong> <a href="https://gitlab.com/soapbox-pub/sheila" target="_blank" rel="noopener noreferrer">https://gitlab.com/soapbox-pub/sheila</a></p>
    </article>
  );
}
