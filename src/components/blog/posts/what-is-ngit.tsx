import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { GitBranch, KeyRound, Server, Globe } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blog/types';

export const meta: BlogPostMeta = {
  slug: 'what-is-ngit',
  title: 'What is Ngit? The New Git Protocol Taking On GitHub',
  excerpt:
    'Ngit lets you host repos, patches, and issues on Nostr instead of GitHub. Built by DanConwayDev, used by Shakespeare, and now shipping inside Block\'s Buzz.',
  coverImage: '/assets/blog/what-is-ngit/cover.png',
  date: '2026-07-21',
  author: {
    name: 'M. K. Fain',
    picture: '/assets/avatars/mk.jpg',
  },
  ogImage: {
    url: '/assets/blog/what-is-ngit/cover.png',
  },
  featured: true,
  tags: [
    'ngit',
    'nostr git',
    'nip-34',
    'github alternative',
    'decentralized git',
    'gitworkshop',
    'grasp',
    'buzz',
    'block',
    'open source',
    'code collaboration',
    'danconwaydev',
    'shakespeare',
  ],
  keywords:
    'what is ngit, ngit nostr, nostr git, github alternative, decentralized github, git over nostr, nip-34, gitworkshop.dev, grasp server, nostr clone url, block buzz git, buzz nostr, danconwaydev, decentralized code collaboration, self-sovereign git hosting, microsoft github problems',
  faq: [
    {
      question: 'What is ngit?',
      answer:
        'Ngit is a command-line tool and git remote helper that lets you use Nostr for code collaboration. Repos are announced as signed Nostr events, patches and issues travel over relays, and you can clone with a nostr:// URL. It was built by DanConwayDev and implements NIP-34, the open specification for git on Nostr.',
    },
    {
      question: 'Is ngit a replacement for git?',
      answer:
        'No. Ngit is a replacement for GitHub, not git. You keep using git exactly as before. Ngit replaces the centralized platform layer: hosting, pull requests, issues, and discovery all move to Nostr, where they are signed by your key and served by relays no single company controls.',
    },
    {
      question: 'What is a GRASP server?',
      answer:
        'A GRASP server is a Nostr relay that also acts as a git server. It stores your repository data and serves clones, while the Nostr events that announce the repo let anyone find it and verify who maintains it. If one GRASP server disappears, your repo announcement points to others.',
    },
    {
      question: 'What happens to my repo if a relay goes down?',
      answer:
        'Nothing is lost. Your repo announcement lists multiple clone URLs and relays, every contributor has a full copy of the history (that is how git works), and the events defining issues and patches are replicated across relays. There is no single server whose failure takes the project offline.',
    },
    {
      question: 'Who uses ngit today?',
      answer:
        'Shakespeare, Soapbox\'s AI app builder, pushes projects to Nostr git and was the first major source of adoption. NostrHub and gitworkshop.dev provide web interfaces for NIP-34 repos. In July 2026, Block shipped Buzz, an open-source team workspace with git hosting built on Nostr.',
    },
  ],
  howTo: {
    name: 'How to publish a git repo to Nostr with ngit',
    description:
      'Announce an existing git repository on Nostr so anyone can clone it with a nostr:// URL.',
    totalTime: 'PT10M',
    steps: [
      {
        name: 'Install ngit',
        text: 'Follow the install instructions at gitworkshop.dev/ngit. This installs the ngit CLI and the git-remote-nostr helper.',
        url: 'https://gitworkshop.dev/ngit',
      },
      {
        name: 'Initialize your repo on Nostr',
        text: 'Run ngit init inside an existing git repository. It walks you through creating a signed repository announcement with your Nostr key, including relays and clone URLs.',
      },
      {
        name: 'Push and pull with normal git',
        text: 'Add the nostr:// URL as a remote and use git push and git pull as usual. Contributors can clone the same URL and submit patches over Nostr.',
      },
    ],
  },
};

export default function WhatIsNgit() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        <a
          href="https://gitworkshop.dev/ngit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ngit
        </a>{' '}
        is a tool that lets developers collaborate on code over{' '}
        <Link to="/blog/nostr101">Nostr</Link> instead of GitHub. Your repos,
        pull requests, and issues become signed events on an open protocol,
        hosted by servers anyone can run. Today it took its biggest step yet:
        Block shipped{' '}
        <a
          href="https://github.com/block/buzz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buzz
        </a>
        , a team workspace with git hosting built on Nostr,{' '}
        <a
          href="https://x.com/jack/status/2079605800998146171"
          target="_blank"
          rel="noopener noreferrer"
        >
          announced by Jack Dorsey
        </a>
        .
      </p>

      <h2>The Problem: Open Source Lives on a Closed Platform</h2>

      <p>
        Git itself is decentralized. Linus Torvalds designed it in 2005 so
        that every contributor holds a full copy of the project history and
        no central server is required. Then the world put nearly all of it in
        one place anyway.
      </p>

      <p>
        GitHub hosts the overwhelming majority of open source development,
        and GitHub is a closed-source product owned by Microsoft, which{' '}
        <a
          href="https://news.microsoft.com/2018/06/04/microsoft-to-acquire-github-for-7-5-billion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          acquired it for $7.5 billion in 2018
        </a>
        . The result is a strange arrangement: the free software movement,
        built on the idea that code should not be controlled by any single
        company, coordinates almost all of its work inside a single
        company&apos;s proprietary platform.
      </p>

      <p>That control gets exercised. A few examples:</p>

      <ul>
        <li>
          In 2020, GitHub{' '}
          <a
            href="https://github.blog/news-insights/policy-news-and-insights/standing-up-for-developers-youtube-dl-is-back/"
            target="_blank"
            rel="noopener noreferrer"
          >
            took down youtube-dl
          </a>
          , one of the most popular open source projects in the world, after
          a DMCA notice from the RIAA. It was later restored, but the
          takedown itself required nothing more than a letter.
        </li>
        <li>
          In 2019, GitHub{' '}
          <a
            href="https://techcrunch.com/2019/07/29/github-ban-sanctioned-countries/"
            target="_blank"
            rel="noopener noreferrer"
          >
            restricted accounts of developers in Iran, Syria, and Crimea
          </a>{' '}
          to comply with US sanctions, cutting people off from their own code
          because of where they live.
        </li>
        <li>
          Microsoft trained GitHub Copilot on the public code hosted on the
          platform, a move that{' '}
          <a
            href="https://githubcopilotlitigation.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            triggered a class-action lawsuit
          </a>{' '}
          over open source license violations.
        </li>
        <li>
          When GitHub goes down, and{' '}
          <a
            href="https://www.githubstatus.com/history"
            target="_blank"
            rel="noopener noreferrer"
          >
            it has had repeated major outages
          </a>
          , a large fraction of the world&apos;s software development stops
          with it.
        </li>
      </ul>

      <p>
        None of this means GitHub is uniquely bad. It means it is a single
        point of failure and a single point of control, and{' '}
        <strong>code is speech</strong>. If your money runs on Bitcoin and
        your identity runs on Nostr but your code lives on a platform that
        can delist it with a policy change, the most important layer of your
        stack is the least sovereign one.
      </p>

      <h2>What Ngit Is</h2>

      <p>
        Ngit is a CLI tool and git plugin built by{' '}
        <a
          href="https://ditto.pub/npub15qydau2hjma6ngxkl2cyar74wzyjshvl65za5k5rl69264ar2exs5cyejr"
          target="_blank"
          rel="noopener noreferrer"
        >
          DanConwayDev
        </a>
        , developed in partnership with Soapbox. It implements{' '}
        <a
          href="https://nostrbook.dev/nips/34"
          target="_blank"
          rel="noopener noreferrer"
        >
          NIP-34
        </a>
        , the open specification for code collaboration on Nostr. It does not
        replace git. It replaces the platform around git:
      </p>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-5 flex items-start gap-3">
              <GitBranch className="w-6 h-6 text-azure flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold m-0">Repos as signed events</p>
                <p className="text-sm text-muted-foreground m-0">
                  A repository announcement on Nostr declares the project, its
                  maintainers, and where to clone it. Signed by your key, not
                  granted by a platform.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 flex items-start gap-3">
              <Globe className="w-6 h-6 text-azure flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold m-0">nostr:// clone URLs</p>
                <p className="text-sm text-muted-foreground m-0">
                  With the git-remote-nostr helper installed, you can run{' '}
                  <code>git clone nostr://npub.../repo</code> like any other
                  URL.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 flex items-start gap-3">
              <KeyRound className="w-6 h-6 text-azure flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold m-0">
                  PRs and issues over relays
                </p>
                <p className="text-sm text-muted-foreground m-0">
                  Patches, pull requests, and issues are Nostr events sent to
                  the repo&apos;s relays. No account on anyone&apos;s platform
                  required, just your key.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 flex items-start gap-3">
              <Server className="w-6 h-6 text-azure flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold m-0">GRASP servers</p>
                <p className="text-sm text-muted-foreground m-0">
                  Relays that double as git servers host the actual repo data.
                  Your repo can list several at once, so no single host can
                  take it offline.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <p>
        The workflow stays familiar. <code>ngit init</code> announces an
        existing repo to Nostr. After that, <code>git push</code> and{' '}
        <code>git pull</code> work against the <code>nostr://</code> remote
        like any other. Contributors clone the same URL and send patches
        without asking permission from a hosting company. If a maintainer
        disappears or a host delists the project, the repo announcement, the
        history, and the discussion all still exist, replicated across relays
        and every contributor&apos;s machine.
      </p>

      <p>
        For a web interface, DanConwayDev also built{' '}
        <a
          href="https://gitworkshop.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          gitworkshop.dev
        </a>
        , which describes itself as &quot;git collaboration, without the
        platform.&quot; It gives you the browsing, issues, and PR review
        experience you expect from GitHub, on top of NIP-34 events. The
        project is open source and{' '}
        <a
          href="https://opensats.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          supported by OpenSats
        </a>
        .
      </p>

      <h2>First Major Use: Shakespeare</h2>

      <p>
        Ngit&apos;s first wave of real-world adoption came from{' '}
        <a
          href="https://shakespeare.diy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shakespeare
        </a>
        , Soapbox&apos;s AI app builder. Shakespeare runs git entirely in the
        browser and supports <code>nostr://</code> URLs natively, so every
        project built there can be{' '}
        <Link to="/blog/shakespeare-version-control">
          pushed to Nostr git
        </Link>{' '}
        with a click. Thousands of vibe-coded projects became NIP-34 repos
        this way, which gave the protocol something every new protocol needs:
        actual repositories with actual users.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/what-is-ngit/shakespeare-git-providers.png"
          alt="Shakespeare AI app builder git sync dialog offering Nostr, GitLab, and Other as code hosting providers"
          className="rounded-lg border shadow-md w-full"
          loading="lazy"
        />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          In Shakespeare, Nostr is a first-class git provider next to GitLab.
        </figcaption>
      </figure>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/what-is-ngit/shakespeare-nostr-push.png"
          alt="Shakespeare pushing a project to Nostr git with one click, storing the repository on public Nostr git servers"
          className="rounded-lg border shadow-md w-full"
          loading="lazy"
        />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          One click, a repo identifier, and the project is on Nostr.
        </figcaption>
      </figure>

      <p>
        Support has since spread across the ecosystem.{' '}
        <a
          href="https://nostrhub.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          NostrHub
        </a>
        , Soapbox&apos;s developer platform, lets you{' '}
        <Link to="/blog/nostrhub-2">
          create a repo in the browser and push it to a GRASP server
        </Link>
        , or mirror an existing GitHub repo onto Nostr. Gitworkshop.dev
        covers the full maintainer workflow. And because repos, issues, and
        patches are just Nostr events, general-purpose clients can link to
        and render them too.
      </p>

      <h2>Now Shipping Inside Buzz</h2>

      <p>
        Today Block released{' '}
        <a
          href="https://engineering.block.xyz/blog/buzz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buzz
        </a>
        , an open-source, self-hostable workspace where teams of humans and
        AI agents work together in channels. Buzz is built on Nostr: every
        person and every agent has a keypair, and every message, approval,
        and commit is signed. It ships with git hosting and a forge UI, with
        repositories stored on object storage and coordinated through Nostr
        events.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/what-is-ngit/buzz-repositories.png"
          alt="Buzz repositories tab showing a Nostr-hosted git repo with commits, pull requests, and issues"
          className="rounded-lg border shadow-md w-full"
          loading="lazy"
        />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          Repositories in Buzz, hosted on Nostr instead of GitHub.
        </figcaption>
      </figure>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/what-is-ngit/buzz-overview.png"
          alt="Buzz projects overview showing repositories, pull requests, and issues, with AI agents and humans collaborating on Nostr git"
          className="rounded-lg border shadow-md w-full"
          loading="lazy"
        />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          A Buzz project: AI agents open pull requests and file issues, humans
          make the call.
        </figcaption>
      </figure>

      <p>
        Block&apos;s reasoning, from{' '}
        <a
          href="https://engineering.block.xyz/blog/buzz"
          target="_blank"
          rel="noopener noreferrer"
        >
          their engineering post
        </a>
        , reads like the case for Nostr git in general: &quot;If Buzz
        disappears, your identity and signed history still verify. Git
        remains Git and can be rehosted. It means the host does not own your
        name or your work. A protocol anyone can rebuild is a protocol nobody
        can lock you into.&quot;
      </p>

      <p>
        There is also a practical driver: AI agents. Block notes that a team
        of agents can produce &quot;human-months of commits and CI runs in an
        afternoon,&quot; and centralized forges were designed around human
        rate limits. Signed events and self-hosted git storage handle
        machine-scale collaboration in a way a platform account model does
        not. The code and protocol specs are at{' '}
        <a
          href="https://github.com/block/buzz"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/block/buzz
        </a>
        , and yes, the irony of that URL is exactly why this movement exists.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/what-is-ngit/buzz-forge.png"
          alt="Buzz git forge pull request view with commits, reviewers, branches, and a merge button, all built on Nostr"
          className="rounded-lg border shadow-md w-full"
          loading="lazy"
        />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          A pull request in Buzz&apos;s forge: conversation, commits,
          reviewers, and merge, with every action signed by a Nostr key.
        </figcaption>
      </figure>

      <h2>Try It in 10 Minutes</h2>

      <ol>
        <li>
          Install ngit from{' '}
          <a
            href="https://gitworkshop.dev/ngit"
            target="_blank"
            rel="noopener noreferrer"
          >
            gitworkshop.dev/ngit
          </a>
          . This includes the git-remote-nostr helper.
        </li>
        <li>
          Run <code>ngit init</code> inside an existing repo to announce it
          on Nostr with your key.
        </li>
        <li>
          Push and pull with normal git against your new{' '}
          <code>nostr://</code> remote, and browse the repo on{' '}
          <a
            href="https://gitworkshop.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            gitworkshop.dev
          </a>
          .
        </li>
      </ol>

      <p>
        No terminal? Create a repo directly in the browser on{' '}
        <a
          href="https://nostrhub.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          NostrHub
        </a>
        , or build something in{' '}
        <a
          href="https://shakespeare.diy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shakespeare
        </a>{' '}
        and push it to Nostr from there.
      </p>

      <h2>Frequently Asked Questions</h2>

      <h3>What is ngit?</h3>
      <p>
        Ngit is a command-line tool and git remote helper that lets you use
        Nostr for code collaboration. Repos are announced as signed Nostr
        events, patches and issues travel over relays, and you can clone with
        a <code>nostr://</code> URL. It was built by DanConwayDev and
        implements NIP-34, the open specification for git on Nostr.
      </p>

      <h3>Is ngit a replacement for git?</h3>
      <p>
        No. Ngit is a replacement for GitHub, not git. You keep using git
        exactly as before. Ngit replaces the centralized platform layer:
        hosting, pull requests, issues, and discovery all move to Nostr,
        where they are signed by your key and served by relays no single
        company controls.
      </p>

      <h3>What is a GRASP server?</h3>
      <p>
        A GRASP server is a Nostr relay that also acts as a git server. It
        stores your repository data and serves clones, while the Nostr events
        that announce the repo let anyone find it and verify who maintains
        it. If one GRASP server disappears, your repo announcement points to
        others.
      </p>

      <h3>What happens to my repo if a relay goes down?</h3>
      <p>
        Nothing is lost. Your repo announcement lists multiple clone URLs and
        relays, every contributor has a full copy of the history (that is how
        git works), and the events defining issues and patches are replicated
        across relays. There is no single server whose failure takes the
        project offline.
      </p>

      <h3>Who uses ngit today?</h3>
      <p>
        Shakespeare pushes projects to Nostr git and was the first major
        source of adoption. NostrHub and gitworkshop.dev provide web
        interfaces for NIP-34 repos. And as of July 2026, Block&apos;s Buzz
        ships git hosting built on Nostr for teams of humans and AI agents.
      </p>

      <h2>Related Reading</h2>

      <ul>
        <li>
          <Link to="/blog/nostrhub-2">
            NostrHub 2.0: Git on Nostr in the Browser
          </Link>
        </li>
        <li>
          <Link to="/blog/shakespeare-version-control">
            Using Version Control in Shakespeare
          </Link>
        </li>
        <li>
          <Link to="/blog/conference-recap-bitcoin-2026">
            Bitcoin 2026 Recap: The Case for Sovereign Code
          </Link>
        </li>
        <li>
          <Link to="/blog/free-software-free-societies">
            Free Software, Free Societies
          </Link>
        </li>
        <li>
          <Link to="/blog/nostr101">Nostr 101</Link>
        </li>
      </ul>
    </article>
  );
}
