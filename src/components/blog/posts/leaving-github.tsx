import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blog/types';

export const meta: BlogPostMeta = {
  slug: 'leaving-github',
  title: 'Leaving GitHub: A Self-Hosted Git Alternative on Nostr',
  excerpt:
    'GitHub is one company, one jurisdiction and one takedown notice away from your project being a 404. That is why we moved Armada off it and onto Nostr. Here is what actually replaced it, what it cost us, and what still does not work.',
  coverImage: '/assets/blog/leaving-github/cover.jpg',
  date: '2026-07-30',
  author: {
    name: 'Derek Ross',
    picture: '/assets/avatars/derek.jpg',
  },
  ogImage: {
    url: '/assets/blog/leaving-github/cover.jpg',
  },
  featured: false,
  tags: [
    'Soapbox',
    'DevRel',
    'Nostr',
    'Git',
    'NIP-34',
    'Armada',
    'Self-hosting',
  ],
};

const codeBlock =
  'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg text-sm overflow-x-auto';

/**
 * A command block, optionally captioned. Card shells and heading colours are the
 * ones how-to-self-host-armada uses for its blue / green / purple command cards.
 */
const CODE_TONES = {
  neutral: {
    card: 'border-2 border-gray-200 dark:border-gray-800',
    head: 'text-gray-900 dark:text-gray-100',
  },
  blue: {
    card:
      'border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950',
    head: 'text-blue-800 dark:text-blue-200',
  },
  green: {
    card:
      'border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950',
    head: 'text-green-800 dark:text-green-200',
  },
  purple: {
    card:
      'border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950',
    head: 'text-purple-800 dark:text-purple-200',
  },
  orange: {
    card:
      'border-2 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950',
    head: 'text-orange-800 dark:text-orange-200',
  },
} as const;

function CodeCard({
  title,
  tone = 'neutral',
  children,
}: {
  title?: string;
  tone?: keyof typeof CODE_TONES;
  children: React.ReactNode;
}) {
  const t = CODE_TONES[tone];
  return (
    <div className="not-prose my-8">
      <Card className={t.card}>
        <CardContent className="space-y-3 p-6">
          {title && (
            <h4 className={`m-0 text-xl font-bold ${t.head}`}>{title}</h4>
          )}
          {children}
        </CardContent>
      </Card>
    </div>
  );
}

/** Blue aside, the note block from debugging-in-shakespeare. */
function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950">
      <p className="m-0 text-sm text-blue-900 dark:text-blue-100">{children}</p>
    </div>
  );
}

/** Green aside, the success block from prompt-better-projects. */
function Success({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="not-prose my-6">
      <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950">
        <CardContent className="p-6">
          <h4 className="m-0 mb-2 font-semibold text-green-800 dark:text-green-200">
            {title}
          </h4>
          <p className="m-0 text-sm text-green-700 dark:text-green-300">
            {children}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

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

/** A lifted sentence, set as a pull quote. */
function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-8">
      <Card className="border-l-4 border-[#d9e00b] bg-[#d9e00b]/10">
        <CardContent className="p-6">
          <blockquote className="m-0 text-xl font-semibold italic text-foreground">
            {children}
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
}

export default function LeavingGitHub() {
  return (
    <article className="prose prose-lg max-w-none">

      <div className="not-prose mb-8">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            🐙 GitHub
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            ⚡ Nostr
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            🔀 Git
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            🚢 Armada
          </Badge>
          <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
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
                <a
                  href="#section-1"
                  className="block cursor-pointer py-1 text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-200"
                >
                  1. The case against GitHub
                </a>
                <a
                  href="#section-2"
                  className="block cursor-pointer py-1 text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-200"
                >
                  2. What replaces it
                </a>
                <a
                  href="#section-3"
                  className="block cursor-pointer py-1 text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-200"
                >
                  3. How it actually works
                </a>
                <a
                  href="#section-4"
                  className="block cursor-pointer py-1 text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-200"
                >
                  4. What Buzz adds
                </a>
              </div>
              <div className="flex flex-col space-y-2">
                <a
                  href="#section-5"
                  className="block cursor-pointer py-1 text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-200"
                >
                  5. Reading a repository inside Armada
                </a>
                <a
                  href="#section-6"
                  className="block cursor-pointer py-1 text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-200"
                >
                  6. Moving your project
                </a>
                <a
                  href="#section-7"
                  className="block cursor-pointer py-1 text-blue-600 hover:text-blue-800 hover:underline dark:text-blue-400 dark:hover:text-blue-200"
                >
                  7. Now is the time to do this
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 id="section-1">1. The case against GitHub</h2>

      <p className="lead">
        On July 23, India&apos;s Cyber Crime Coordination Centre gave GitHub
        three hours to disable three repositories. The repositories were
        bitchat, a messaging app that works over Bluetooth
        mesh without an internet connection. The notice came from a body under
        the Ministry of Home Affairs, cited Section 79(3)(b) of the Information
        Technology Act, 2000, and carried the standard consequence: comply or
        lose the intermediary protection that keeps a platform from being liable
        for what its users post. The stated reason was that bitchat keeps
        working &quot;even during network restrictions&quot; and &quot;internet
        shutdowns,&quot; which lets people &quot;circumvent lawful
        restrictions&quot; and hampers &quot;lawful interception, attribution,
        and traceability.&quot; Protesters at Jantar Mantar, where mobile
        internet had been shut off, had started using it.
      </p>

      <p>
        Here is what I take from it. A ministry in one country put a three-hour
        clock on three repositories, and the only thing standing between that
        clock and the code was one American company&apos;s willingness to absorb
        the liability. That willingness is real. It is also a judgment call,
        made by people who could decide differently next time, under a different
        government, in a different jurisdiction, about a project with less press
        attention than one associated with Jack Dorsey. The Internet Freedom
        Foundation made the sharper point about the order itself: &quot;The
        order also fails on its own terms as deleting a repository does not
        delete the application from any phone that carries it.&quot; True. But it
        would have deleted the place everyone goes to get it, and the issues,
        and the pull requests, and the history of how it was built.
      </p>

      <p>
        We know what that looks like, because the call has gone the other way
        before.
      </p>

      <p>
        In October 2020 the RIAA sent GitHub a DMCA notice claiming youtube-dl
        violated Section 1201, the anti-circumvention provision. GitHub took the
        repositories down on October 23. It reinstated them on November 16,
        after a letter from the EFF, and went further than it had to: it revised
        how it handles 1201 claims and put a million dollars into a developer
        defense fund. That is a genuinely good outcome. It also took three and a
        half weeks, and for three and a half weeks the canonical home of one of
        the most widely used tools on the internet was a 404.
      </p>

      <p>
        In August 2022, OFAC added Tornado Cash to the sanctions list. GitHub
        took down the repository and suspended two contributors&apos; accounts.
        Not the project&apos;s accounts. The developers&apos; accounts. The
        repository was later restored in read-only form once OFAC clarified that
        copying open-source code was not prohibited, and the sanctions
        themselves were lifted in March 2025. Reversed again, eventually. In the
        meantime, people lost the account their professional identity lived in
        because of a listing decision they had no part in and no process to
        contest.
      </p>

      <p>
        Both of those ended fine. That is precisely the thing I want you to
        notice. The question was never whether the code survives, because git is
        distributed and the code always survives on someone&apos;s laptop. The
        question is who decides, how fast they can be made to decide, and what
        your project looks like during the interval while it is being decided.
      </p>

      <h3>The other half</h3>

      <p>
        The takedown story is the dramatic one. The one that actually costs us
        time is that GitHub keeps falling over.
      </p>

      <p>
        I am not going to quote you an uptime percentage, because GitHub does
        not publish one. Its availability reports count incidents, not
        availability. So here are the incidents, in GitHub&apos;s own words,
        from its own reports.
      </p>

      <p>
        May 2026: nine incidents. On May 15, &quot;42% of Actions runs
        failed.&quot; On May 6, &quot;approximately 17.1% of jobs requesting a
        standard runner failed&quot; over two and a half hours. also on May 6,
        creating new pull request review threads failed for close to four hours,
        because a 32-bit integer key in a Vitess lookup table hit its maximum
        value.
      </p>

      <p>
        June 2026: six incidents. On June 8, &quot;roughly 34% of requests&quot;
        for pull requests, issues, releases and patch diffs errored for
        unauthenticated users. On June 10, the REST and GraphQL APIs returned
        authentication failures on about 9% of requests. On June 4, Copilot code
        review hit a &quot;peak failure rate of 93.9%.&quot;
      </p>

      <p>
        None of that is mysterious, and GitHub has been open about why. By The
        Register&apos;s reporting, GitHub handled one billion commits in all of
        last year and now takes 1.4 billion every month, and a planned tenfold
        capacity expansion was revised to thirtyfold in February. The same June
        report notes that monolith traffic in Azure &quot;peaked at 45% in
        Central US this month&quot; and git in Azure &quot;grew from 30% to a
        peak of 43%.&quot; They are rebuilding the engine at speed, while the
        load grows faster than the plan.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/leaving-github/github-uptime-april.jpg"
          alt="The Missing GitHub Status Page, showing 85.51% uptime and 95 incidents over the last 90 days"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          Marek Šuppa&apos;s independent tracker, &quot;The Missing GitHub
          Status Page&quot;: 85.51% uptime and 95 incidents over the 90 days
          ending April 30, 2026. GitHub publishes no monthly availability
          percentage of its own.
        </figcaption>
      </figure>

      <p>
        That chart is not GitHub&apos;s number and I am not presenting it as
        one. It is what you get when someone outside the company counts the
        incidents themselves over a rolling window. Your own experience of
        GitHub over the last few months probably sits closer to that line than
        to the four nines you would assume.
      </p>

      <h3>One company, one jurisdiction, one takedown</h3>

      <p>
        I want to be fair to GitHub here, because the fair version is the more
        damning one.
      </p>

      <p>
        GitHub handles government takedowns about as well as a company in its
        position can. It publishes the notices it receives in a public
        repository so the record exists. Its stated policy is that when a notice
        arrives from &quot;a relevant, official government agency that
        identifies illegal content and specifies the source of the
        illegality,&quot; it notifies the affected users, and that it will
        &quot;limit the geographic scope of the takedown when possible.&quot; It
        fought the RIAA and it funded the defense of developers it did not have
        to fund.
      </p>

      <p>None of that is the problem. The problem is the shape.</p>

      <p>
        Your repository has one canonical location. That location resolves to
        one company. That company has one legal address, in one country, and it
        holds accounts, issues, pull requests, releases and CI for tens of
        millions of projects at that single address. Every government with reach
        into that address gets a lever, and the lever works on everything at
        once.
      </p>

      <PullQuote>
        Good policy makes the lever harder to pull. It does not remove the
        lever.
      </PullQuote>

      <p>
        Git solved this for the code twenty years ago. Every clone is a complete
        copy of the history, and that part was never at risk. What we handed
        back to a single company was everything around the code: where it lives,
        what it is called, how people find it, where the conversation happens,
        and what runs when you push.
      </p>

      <p>
        So that is the part worth taking back. What we moved to is not another
        GitHub, and that difference is most of what the rest of this post is
        about.
      </p>

      <hr className="my-12" />

      <h2 id="section-2">2. What replaces it</h2>

      <p>
        <strong>
          <Link to="/blog/what-is-ngit">ngit</Link>
        </strong>{' '}
        is the tool. It installs two binaries. <code>ngit</code> is the command
        you run, and{' '}
        <code>git-remote-nostr</code> is a git remote helper, which is the piece
        that matters most and gets the least attention. A remote helper teaches
        git a new URL scheme. Once it is on your PATH, <code>nostr://</code>{' '}
        URLs work with plain <code>git clone</code>, plain{' '}
        <code>git fetch</code>, plain <code>git push</code>. No wrapper, no
        special client, no ngit-specific command in the daily loop.{' '}
        <Link to="/armada">Armada</Link>&apos;s <code>origin</code> is a{' '}
        <code>nostr://</code> URL and everything downstream of it is ordinary
        git.
      </p>

      <p>
        <strong>
          <a
            href="https://nostrhub.io/nip/34"
            target="_blank"
            rel="noopener noreferrer"
          >
            NIP-34
          </a>
        </strong>{' '}
        is the specification underneath. It defines a
        repository announcement, a repository state event that carries branches
        and tags, and event kinds for patches, pull requests, issues, and their
        statuses. It is marked <code>draft</code> and <code>optional</code>, so
        it is not a finished standard. It is a working one, and that is the only
        claim I can support.
      </p>

      <p>
        The idea in NIP-34 I find genuinely clever is how a project is
        identified. Not by a URL, and not by a name someone owns. By the commit
        ID of the earliest unique commit in its history, tagged <code>euc</code>
        . The spec&apos;s own words: it exists &quot;to identify it among forks
        and group it with other repositories hosted elsewhere that may represent
        essentially the same project.&quot; Your repository&apos;s identity is a
        fact about your history, which means nobody assigns it and nobody can
        take it away. Anyone can announce your project. Announcements that share
        an <code>euc</code> are understood to be the same project.
      </p>

      <p>
        <strong>GRASP</strong> is the hosting shape. A GRASP server is a git
        host and a Nostr relay at the same hostname. NIP-34 does not define it
        with a paragraph, it defines it with a detection rule: a host is a GRASP
        server for a repository if the same hostname appears in the
        announcement&apos;s <code>clone</code> tag as an HTTPS git URL and in
        its <code>relays</code> tag as a websocket URL. When you look at an
        announcement and see the same domain listed twice, that is not sloppy
        duplication. That is the declaration.
      </p>

      <p>
        Armada announces three of them: <code>git.shakespeare.diy</code>,{' '}
        <code>relay.ngit.dev</code>, and <code>git.nostrhub.io</code>. Three
        hosts, three separate operators, all serving the same repository, all
        discoverable from one event. If one of them goes down or decides it does
        not want to carry the project, the other two do not care and neither do
        you. That is the whole argument compressed into one tag.
      </p>

      <p>
        Which is where the words in the title start pulling against each other,
        and they should. Self-hosting normally means one box you own and one
        address everyone depends on, and a thing that is yours to run is also
        yours to lose. Here it describes where you publish from, not where the
        repository stops. You push to your own host, and the same push is
        carried by hosts run by other people who never asked you and never
        needed to. The screenshot below names five GRASP servers where Armada
        announces three. <code>gitnostr.com</code> and{' '}
        <code>ngit.danconwaydev.com</code> are carrying this repository and
        neither appears in its announcement. On GitHub a fork is a separate
        repository at a separate URL. Here it is the same project, and it stays
        reachable whether or not the box with your name on it is still up.
      </p>

      <Note>
        Be precise about what that redundancy buys. It protects you against
        losing a host. It does not protect you against your own state event,
        which every one of those hosts follows without question. That is in
        section 3, and it is the part of this design I would most want to know
        before moving a project I cared about.
      </Note>

      <p>
        <strong>Armada</strong> is our proof that this works on a real project
        rather than a demo.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/leaving-github/gitworkshop-armada-repo.png"
          alt="The Team Soapbox armada repository on gitworkshop.dev: Code, Issues 41, PRs 18, Actions and About tabs, a file tree, a Clone button, the maintainer list, and a sidebar panel listing five GRASP servers and two other relays"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          The armada repository on gitworkshop.dev. Code, issues, pull requests
          and maintainers, all of it read from Nostr events. The panel GitHub
          has no equivalent for is at the bottom right: the GRASP servers and
          relays carrying the project: five GRASP servers and two other relays,
          against the three Armada announces. Four maintainers, twelve stars,
          and the last commit eleven hours ago, all of it assembled from events
          rather than served by one company.
        </figcaption>
      </figure>

      <hr className="my-12" />

      <h2 id="section-3">3. How it actually works</h2>

      <h3>Cloning</h3>

      <CodeCard title="Clone Armada over Nostr" tone="blue">
        <pre className={codeBlock}>
          <code>{`git clone nostr://npub10qdp2fc9ta6vraczxrcs8prqnv69fru2k6s2dj48gqjcylulmtjsg9arpj/relay.ngit.dev/armada`}</code>
        </pre>
      </CodeCard>

      <p>
        That is Armada. It pulls 13,084 objects, 6.81 MiB, resolves 9,311
        deltas, and exits zero. The npub is the maintainer identity,{' '}
        <code>relay.ngit.dev</code> is one of the GRASP servers,{' '}
        <code>armada</code> is the repository ID. No account needed to clone.
      </p>

      <p>
        Look at what you get back. 29 remote refs, 112 tags, and 14 branches
        under <code>pr/</code>. Those <code>pr/</code> branches are the open
        pull requests. They are not hidden in a web UI you have to log into.
        They are remote-tracking branches, visible to <code>git branch -r</code>
        , checkoutable with plain git.
      </p>

      <h3>Pull requests</h3>

      <p>
        This is the part I most expected to be complicated and it is the part I
        was most wrong about. You do not open a pull request with an ngit
        command. You push a branch:
      </p>

      <CodeCard title="Open a pull request" tone="blue">
        <pre className={codeBlock}>
          <code>{`git push -u origin pr/my-branch`}</code>
        </pre>
      </CodeCard>

      <p>
        The <code>pr/</code> prefix is the whole mechanism. Title and
        description ride along as git push options:
      </p>

      <CodeCard title="Title and description as push options" tone="blue">
        <pre className={codeBlock}>
          <code>{`git push -o 'title=My PR' -o 'description=line1\\n\\nline2' -u origin pr/branch`}</code>
        </pre>
      </CodeCard>

      <p>
        <code>ngit --help</code> says it plainly: &quot;remote branches
        beginning with <code>pr/</code> are open PRs from contributors.&quot;
      </p>

      <p>
        Under the hood ngit picks the encoding by size. Small changes go out as
        patch events, larger ones as a pull request event, and the threshold
        ngit&apos;s own help names is about 60 kb per commit.{' '}
        <code>ngit send</code> exposes <code>--force-pr</code> and{' '}
        <code>--force-patch</code> to override it, with one asymmetry worth
        knowing: you cannot force a patch once a proposal already exists as a
        PR, because &quot;downgrades are not possible.&quot;
      </p>

      <p>
        <code>ngit pr</code> covers the rest of the lifecycle: <code>list</code>
        , <code>view</code>, <code>checkout</code>, <code>apply</code>,{' '}
        <code>send</code>, <code>close</code>, <code>reopen</code>,{' '}
        <code>ready</code>, <code>draft</code>, <code>comment</code>,{' '}
        <code>merge</code>, <code>label</code>, <code>set-subject</code>,{' '}
        <code>set-cover-note</code>. <code>ngit issue</code> mirrors it:{' '}
        <code>list</code>, <code>view</code>, <code>create</code>,{' '}
        <code>close</code>, <code>resolved</code>, <code>reopen</code>,{' '}
        <code>comment</code>, <code>label</code>, <code>set-subject</code>,{' '}
        <code>set-cover-note</code>.
      </p>

      <p>
        Merging is two steps, and the second one is the one that publishes.{' '}
        <code>ngit merge &lt;pr-id&gt;</code> checks out <code>main</code> and
        makes a real two-parent no-ff merge commit locally. It does not push.
        The subsequent <code>git push origin main</code> is what publishes the
        kind 1631 event flipping the PR to applied. If you come from a green
        merge button that did both, you will forget the second one at least
        once.
      </p>

      <p>
        Pass the PR id explicitly, from the <code>ID</code> column of{' '}
        <code>ngit pr list</code>. Bare <code>ngit merge</code> is documented to
        work while you are standing on a <code>pr/</code> branch, and on a
        branch we had pushed ourselves it did not:
      </p>

      <CodeCard title="What bare ngit merge said instead" tone="orange">
        <pre className={codeBlock}>
          <code>{`Error: branch 'pr/my-first-proposal' does not encode a PR id and no PR you
authored matches it; specify a PR event-id or nevent`}</code>
        </pre>
      </CodeCard>

      <p>
        The branch has to encode the id, which is what{' '}
        <code>ngit pr checkout</code> produces. That is why the{' '}
        <code>pr/</code> branches in a cloned repository look like{' '}
        <code>pr/channel-ordering(0c9048a5)</code>.
      </p>

      <h3>The state event is the authority, and that cuts both ways</h3>

      <p>
        There are two things that claim to know where your branches point: the
        git servers, and the Nostr state event. When they disagree, the state
        event wins, and it wins everywhere at once.
      </p>

      <p>
        We tested this deliberately. We published a state event moving{' '}
        <code>main</code> back to the root commit and then ran no ngit command
        at all. Within ten seconds all three GRASP servers had rewound{' '}
        <code>main</code> to match, walking a merge commit off the branch. We
        published a state event moving it forward again and all three followed
        again, also inside ten seconds. Nobody pushed anything. The servers
        watch the state event and apply it.
      </p>

      <p>
        That is the design working as intended, and it is the sharpest edge in
        the whole model. Anyone who can sign for the maintainer npub can rewind
        a project&apos;s default branch on every host simultaneously. In our
        testing nothing appeared to enforce monotonicity, so replaying an old
        state event had the same effect as publishing a new one.
      </p>

      <PullQuote>
        Your signing key is not just your identity here. It is the write
        authority over every copy of the repository.
      </PullQuote>

      <Warning title="Guard the key accordingly">
        <p className="m-0 text-sm text-orange-900 dark:text-orange-200">
          There is no per-host force-push protection standing behind it the way
          a branch protection rule stands behind GitHub. Use{' '}
          <code>ngit account login --local</code> so a machine-wide identity is
          not silently publishing for you, and treat maintainer keys with the
          seriousness you would give a signing key rather than a password.
        </p>
      </Warning>

      <p>
        The practical version of this shows up in <code>ngit sync</code>, which
        has a direction and it is worth knowing which way it points before you
        run it:
      </p>

      <CodeCard title="Which direction sync points" tone="orange">
        <pre className={codeBlock}>
          <code>{`ngit sync      # servers      <- state event   (state wins)
ngit sync -t   # state event  <- servers       (servers win)`}</code>
        </pre>
      </CodeCard>

      <p>
        Bare <code>ngit sync</code> is the destructive direction.{' '}
        <code>-t</code>, whose help text reads &quot;trust git server(s) that
        are fast-forward ahead of nostr state and update nostr state to match;
        only applies to clean fast-forwards, diverged refs must be resolved
        manually,&quot; is the one you want when the servers are ahead and
        correct.
      </p>

      <p>
        Drift does happen. As I write this, Armada&apos;s state event says{' '}
        <code>main</code> is at <code>v0.44.0</code> while the GRASP server is
        serving <code>v0.44.1</code>. One command fixes it, and you have to know
        which direction to run it in. I cannot tell you how it got that way. We
        tried to reproduce the condition deliberately and could not. GitHub
        never made you think about any of this, because GitHub was the only
        copy.
      </p>

      <h3>The numbers on Armada today</h3>

      <p>
        Run inside a fresh <code>nostr://</code> clone:
      </p>

      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-100">
              <th className="border border-gray-300 px-4 py-3 text-left dark:border-gray-700">
                Query
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left dark:border-gray-700">
                Result
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                <code>ngit pr list</code> (open and draft)
              </td>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                14
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                <code>ngit pr list --status open,draft,closed,applied</code>
              </td>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                35
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                <code>ngit issue list</code> (open)
              </td>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                40
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                <code>ngit issue list --status open,closed,resolved</code>
              </td>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                93
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        14 open pull requests, matching the 14 <code>pr/</code> branches
        exactly. 40 open issues with labels and comment threads. Real ones, not
        test data: &quot;Add full i18n support with en/ru/uk locales&quot;,
        &quot;Encode relay hints in GitWorkshop links&quot;, &quot;Improvements
        to GIF implementation&quot; with three comments, &quot;Armada
        doesn&apos;t open as a share target.&quot;
      </p>

      <h3>CI without GitHub</h3>

      <p>
        Armada has no <code>.github/</code> directory, instead the workflows
        live in <code>.ngit/act/workflows/</code>. There are four:{' '}
        <code>test.yml</code>, <code>deploy-web.yml</code>,{' '}
        <code>desktop.yml</code>, <code>release.yml</code>.
      </p>

      <p>
        Open one and it is a GitHub Actions file. <code>on:</code>,{' '}
        <code>jobs:</code>, <code>runs-on: ubuntu-latest</code>,{' '}
        <code>steps:</code>. The syntax did not change. What changed is what
        reads it. <strong>ngit-ci</strong> is a self-hosted, Nostr-native
        coordinator that watches the repository announcement and runs those
        workflows with{' '}
        <a
          href="https://github.com/nektos/act"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>act</code>
        </a>
        , one Linux container per job, publishing results and build artifacts
        back to Nostr where they show up on{' '}
        <a
          href="https://gitworkshop.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          gitworkshop.dev
        </a>{' '}
        against the commit or the PR.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/leaving-github/armada-ci-status-cards.png"
          alt="Two green CI status cards in the Armada channel: deploy-web succeeded on e8cb0ff and desktop succeeded on e8cb0ff, both from a push, each with an expandable job row linking out to the run"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          What that looks like when it lands. Two ngit-ci jobs, deploy-web and
          desktop, both green on commit <code>e8cb0ff</code>, rendered in the
          channel from the events the coordinator published. No GitHub Actions
          tab was involved in producing this.
        </figcaption>
      </figure>

      <Success title="The easiest part of the move">
        That is the single lowest-friction part of this migration.
      </Success>

      <p>
        One nice detail: <code>test.yml</code>&apos;s{' '}
        <code>pull_request:</code> trigger fires on Nostr PR events, not on a
        GitHub PR. The trigger name is the same, the thing triggering it is a
        Nostr event.
      </p>

      <p>
        The cost lands somewhere, and it lands on you: you are the runner
        operator now. ngit-ci maps <code>runs-on: ubuntu-latest</code> to an
        image you maintain, and ours bakes in the JDK and Node toolcaches, the
        Android SDK, ruby and fastlane, the <code>zsp</code> binary, wine, and
        warm <code>~/.gradle</code>, <code>~/.npm</code> and electron caches.
        That is not tuning. The workflow&apos;s own header comment records what
        happens without it: &quot;every run re-downloaded ~700 MB of
        toolchain+deps and blew the coordinator&apos;s 30-min default job
        timeout.&quot; There is also no <code>GITHUB_TOKEN</code>. Nothing is
        injected for you, secrets are provisioned per repository by the ngit-ci
        operator, and they are only populated on maintainer-authored triggers,
        so a third-party PR runs with empty secrets.
      </p>

      <p>
        And the coordinator is a machine someone runs. Ours is a box with
        Docker, a local image registry, and the coordinator process holding its
        own Nostr key and watching the repository announcement. Our image build
        script says so in its first line, &quot;Build and publish the armada-ci
        runner image on the ngit-ci coordinator host&quot;, and pushes the
        result to <code>localhost:5000</code> on that same box. We did not find
        a shared or public coordinator you can sign up for. If you adopt this,
        budget a build server.
      </p>

      <h3>Releases</h3>

      <p>
        The version lives in the git tag and nowhere else.{' '}
        <code>package.json</code> still says <code>0.1.0</code> and is not a
        release input. Cutting a release is two steps: one commit that edits{' '}
        <code>CHANGELOG.md</code>, then push a tag <code>vX.Y.Z</code>.
        Everything after the tag is automatic.
      </p>

      <p>
        <code>release.yml</code> derives both Android version fields from the
        tag:
      </p>

      <CodeCard title="release.yml derives the Android version from the tag" tone="purple">
        <pre className={codeBlock}>
          <code>{`VERSION_NAME="\${TAG#v}"                                        # v0.44.1 -> 0.44.1
VERSION_CODE="$(( MAJOR * 1000000 + MINOR * 1000 + PATCH ))"   # v0.44.1 -> 44001`}</code>
        </pre>
      </CodeCard>

      <p>
        That arithmetic is a scar. On GitLab the version code was{' '}
        <code>$CI_PIPELINE_IID</code>, a number the CI provider hands you.
        ngit-ci has no pipeline counter, so the first port used{' '}
        <code>git rev-list --count HEAD</code>. But ngit-ci&apos;s runner
        shallow-fetches only the tagged commit, so the count was always 1. Every
        release got the same version code, and{' '}
        <a
          href="https://zapstore.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zapstore
        </a>{' '}
        silently dropped them as duplicates. Deriving the number from the semver tag made it
        deterministic and independent of checkout depth.
      </p>

      <p>
        That is the flavor of problem you get. Not &quot;this is
        impossible,&quot; but &quot;the ambient thing your CI provider was
        quietly giving you is gone, and you did not know you were using it.&quot;
      </p>

      <p>Where the artifacts go, none of them GitHub Releases:</p>

      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-100">
              <th className="border border-gray-300 px-4 py-3 text-left dark:border-gray-700">
                Artifact
              </th>
              <th className="border border-gray-300 px-4 py-3 text-left dark:border-gray-700">
                Destination
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                Signed Android APK and AAB
              </td>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                ngit-ci run artifacts, visible on gitworkshop.dev
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                Signed APK
              </td>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                Zapstore, via <code>zsp --json publish</code>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                AAB
              </td>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                Google Play production track, via <code>fastlane supply</code>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                Linux AppImage and deb, Windows NSIS and portable
              </td>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                ngit-ci run artifacts
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                Web client
              </td>
              <td className="border border-gray-300 px-4 py-3 dark:border-gray-700">
                rsync over SSH to armada.buzz
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        You can verify the Zapstore half yourself. Query the Zapstore relay for
        release events by our publishing identity and you get real releases from
        this pipeline:
      </p>

      <CodeCard title="Verify the Zapstore releases yourself" tone="purple">
        <pre className={codeBlock}>
          <code>{`$ nak req -k 30063 -a 781a1527...9fdae5 -l 5 wss://relay.zapstore.dev
2026-07-30T01:46:50  buzz.armada.app@0.44.0
2026-07-29T18:58:48  buzz.armada.app@0.43.0
2026-07-28T06:27:12  buzz.armada.app@0.42.2`}</code>
        </pre>
      </CodeCard>

      <hr className="my-12" />

      <h2 id="section-4">4. What Buzz adds</h2>

      <p>
        Everything above is NIP-34 and works with any client.{' '}
        <Link to="/blog/buzz-made-me-rethink-how-teams-use-agents">Buzz</Link>{' '}
        sits on top and adds three things I have not found elsewhere.
      </p>

      <p>
        <strong>A pull request knows which conversation produced it.</strong>{' '}
        <code>buzz pr open</code> takes a <code>--channel</code> flag:
        &quot;Channel where this pull request originated.&quot; The PR event
        carries a tag pointing back at the chat channel where the work was
        decided. Six months later, the question is never &quot;what does this
        diff do,&quot; it is &quot;why did we do it this way,&quot; and the
        answer is usually in a conversation nobody linked. This links it at
        creation time.
      </p>

      <p>
        <strong>Branch and tag protection.</strong>{' '}
        <code>buzz repos protect</code> manages branch and tag protection rules
        on your repositories. NIP-34 has no concept of protection at all, which
        is the gap behind the state event problem in section 3: nothing in the
        spec stands between a signed state event and every host applying it.
        This is Buzz-specific and it is the right shape of answer. I will not
        claim it closes that hole, because we have not tested it against a
        rewound state event. When we have, I will say so.
      </p>

      <p>
        <strong>The PR surface is explicit about the wire format.</strong>{' '}
        <code>buzz pr open</code> publishes kind 1618, <code>buzz pr update</code>{' '}
        publishes 1619, and <code>buzz pr status</code> sets kinds 1630 through
        1633 for open, merged, closed, and draft. The help text names the kinds
        itself, so you are never guessing what a command wrote to the network.
      </p>

      <p>
        One rough edge, since I have been listing them.{' '}
        <code>buzz repos create</code> has no <code>--euc</code> flag. Announce
        a repository through Buzz and the announcement will not carry the
        earliest-unique-commit tag, which means it will not group with
        announcements made by ngit for the same project. We have exactly that
        situation on Armada right now: an announcement that is perfectly valid,
        reachable through <code>buzz repos get</code>, and invisible to an ngit{' '}
        <code>euc</code> query. If you announce with both tools, expect two
        views of your project until this is fixed.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/leaving-github/buzz-create-project.png"
          alt="Buzz's Create a new project dialog with four fields: Name, an optional Description, an optional Clone URL showing a relay-hosted git URL as its placeholder, and an optional Web URL"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          Announcing a repository from Buzz rather than the command line. Name,
          description, clone URL, web URL, and nowhere to put an{' '}
          <code>euc</code> tag, which is the rough edge above in dialog form.
        </figcaption>
      </figure>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/leaving-github/buzz-projects-repositories.png"
          alt="Buzz's Projects view on the Repositories tab, showing cards for Armada, Soapbox Website, Agora and Onyx, each with a description and per-repository commit, pull request and issue counts"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          The same four projects on the Repositories tab. Worth reading against
          the paragraph above: Armada shows no commits or pull requests here,
          while the same project shows 18 pull requests inside Armada. Two
          announcements, two views that have not converged.
        </figcaption>
      </figure>

      <hr className="my-12" />

      <h2 id="section-5">5. Reading a repository inside Armada</h2>

      <p>
        Everything so far is a command line. Armada is the other half: our own
        client, where a repository stops being a thing you query and becomes a
        thing your team is sitting in.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/leaving-github/armada-repo-activity-channel.png"
          alt="The Armada app showing the #armada channel: a channel list on the left, and a timeline mixing an opened issue, a comment with an image, four status changes, two green deploy-web runs and an opened pull request, with the admin and member roster on the right"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          Armada&apos;s #armada channel. An issue opening, a comment, four
          status changes, two CI runs and a pull request, in the same timeline
          as the conversation and the people having it. This is the whole
          argument for putting the repository in the chat rather than in a tab.
        </figcaption>
      </figure>

      <h3>Connecting a repo to a channel</h3>

      <p>
        You connect a repository to a channel, not to a community. Either at the
        moment you create the channel, or afterwards from the community info
        panel under &quot;Connected repositories.&quot; Both open the same
        picker, which takes a search over the public repository directory or a
        pasted address. That address is either an <code>naddr1…</code> or the{' '}
        <code>nostr://</code> URL ngit already wrote into your{' '}
        <code>.git/config</code>. If you give it a NIP-05 owner instead of an
        npub, it resolves it properly rather than trusting a profile field.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/leaving-github/armada-create-channel.png"
          alt="Armada's Create a channel dialog offering two options: Text channel, a plain conversation space for your community, and Repository channel, which ties a git repository to the channel with live activity in chat and a Projects view for issues and PRs"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          The first of the two entry points. A repository channel is a channel
          that happens to have a repository attached, and the dialog says what
          that buys you in one line: live activity in chat, and a Projects view
          for issues and PRs.
        </figcaption>
      </figure>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/leaving-github/armada-choose-repository.png"
          alt="Armada's Choose a repository picker: a search field reading Search repositories, or paste an naddr / nostr:// address, above a Recently Announced list showing gamestr, Nostr Events Chain, alice, and two Akamaister repositories"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          The picker both entry points open. The search runs over repositories
          announced to the network, which is why strangers&apos; projects show
          up under Recently Announced. The field also takes a pasted address,
          and that is the part with no GitHub equivalent: an{' '}
          <code>naddr1…</code> identifies a repository without naming a host to
          fetch it from.
        </figcaption>
      </figure>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/leaving-github/armada-connected-repositories.png"
          alt="Armada's Connected Repositories panel listing three entries: Team Soapbox / Agora attached to #agora, Team Soapbox / armada attached to #armada, and Team Soapbox / Soapbox Pub attached to #marketing, each with a delete button"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          The other entry point, and the clearest picture of the rule. One
          community, three repositories, each attached to its own channel:
          Agora to #agora, armada to #armada, the website to #marketing.
        </figcaption>
      </figure>

      <p>
        It writes no new event kind. The coordinate goes into the channel&apos;s
        own metadata record, which is why it needs the manage-channels
        permission and nothing else. What it stores is not a flag but an
        interval: attached at this time, detached at that one. Disconnect a
        repository later and the interval closes rather than disappearing, so
        the activity that happened while it was connected keeps rendering in the
        window it belongs to. A channel holds one repository, deliberately. Two
        would blend two projects into one timeline.
      </p>

      <h3>What shows up</h3>

      <p>
        Four things, in the channel, in line with the conversation: an issue or
        pull request opening, comments on it, status changes, and CI runs from
        ngit-ci. The comments are live rather than a mirror. You can reply to an
        issue from the channel, edit or delete your own comment, attach a file,
        and set a ticket&apos;s status without leaving the chat. Every card also
        links out to gitworkshop.dev for the public view.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/leaving-github/armada-issue-comment-card.png"
          alt="An issue comment card in the Armada channel for the issue Improvements to GIF implementation, showing chad's comment about KLIPY as an optional provider, with Earlier comments and Later comments markers and a View conversation in context link"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          One comment on one issue, in the channel. The card carries the issue
          title, the comment, and markers for what came before and after it.
          &quot;View conversation in context&quot; is the way back into the full
          thread without leaving the app.
        </figcaption>
      </figure>

      <p>
        Now the gap, because it is the obvious expectation. Commits do not
        appear. NIP-34&apos;s repository state event, kind 30618, is the one
        that carries branch and tag tips, and Armada does not read it yet. There
        is no push row, no branch row, no commit feed. The repository
        announcement is read too, for the repo&apos;s name and clone URLs and
        for deciding whose status changes to trust, but it is not itself a
        message: connecting a repository does not announce itself in the
        channel. And the CI kinds are an experimental NIP-34 extension whose
        trust model is, in the code&apos;s own words, none. Anyone can publish a
        run result. We render it the way gitworkshop does and I would not build
        a merge gate on it.
      </p>

      <h3>The Projects view</h3>

      <p>
        Once any channel in a community has a repository connected, a Projects
        entry appears in the sidebar. It folds every channel&apos;s repositories
        into one view and, unlike the channel timeline, it is not gated on those
        attachment intervals. This is where a repository&apos;s full history
        lives.
      </p>

      <p>
        Four tabs: Overview, Repositories, Pull Requests, Issues. Counts for
        repositories, pull requests, issues and people; a contribution graph; a
        people roster; an activity feed; repository cards with clone URLs. Buzz
        workspaces get the same view at the relay level, covering every NIP-34
        repository on the relay rather than the ones your channels happen to be
        connected to.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/leaving-github/armada-projects-view.png"
          alt="Armada's Projects view for Team Soapbox on the Overview tab: counts reading Repositories 3, Pull requests 18, Issues 65 and People 18, a recent activity feed mixing armada and Agora issues and pull requests with Open, Resolved and Merged states, a people roster and a contribution heatmap"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          The Projects view, Overview tab. The counts are community-wide across
          all three connected repositories, which is why 65 issues and 18 pull
          requests here are a larger number than any single repository page in
          this post shows. The activity feed mixes armada and Agora items for
          the same reason.
        </figcaption>
      </figure>

      <h3>And on the web</h3>

      <p>
        <a
          href="https://nostrhub.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          nostrhub.io
        </a>{' '}
        is a web viewer, and it is where you send someone who does not have the
        app. A repository page there has four tabs. Code, Issues, Merge
        requests, Discussion. <code>git.nostrhub.io</code>, one of Armada&apos;s
        three GRASP hosts from section 2, is the same operator wearing its other
        hat.
      </p>

      <p>
        The Code tab is the one worth explaining, because of how it works. There
        is no server rendering your files. Your browser shallow-clones the
        repository over git smart-HTTP, preferring the GRASP mirrors because
        those serve CORS headers, and then browses the result locally. You get a
        file tree with breadcrumbs, a branch picker and a tag picker, the
        current commit SHA, a file search palette, and a viewer with line
        numbers, a raw toggle, rendered Markdown, copy, download, and a link to
        the exact file you are looking at. The README renders under the listing,
        the way you expect. Issues and merge requests carry their full comment
        threads, a status pill, the patch as a colored diff, and an ahead-behind
        count against the target branch, which is computed with a partial clone
        that fetches commits without their file contents so the number is cheap
        on a large repository.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/leaving-github/nostrhub-armada-repo.png"
          alt="The armada repository on nostrhub.io, showing the Code tab with a file tree, the Issues, Merge requests and Discussion tabs, the repository relays and the repository fingerprint"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          The armada repository on nostrhub.io. The Code tab and its file tree,
          62 issues and 16 merge requests, the four relays the repository is
          announced to, and the fingerprint that identifies the project across
          forks and mirrors.
        </figcaption>
      </figure>

      <hr className="my-12" />

      <h2 id="section-6">6. Moving your project</h2>

      <p>
        Here is the whole thing, in order. It is about thirty minutes for a
        repository you already control.
      </p>

      <p>
        <strong>1. Install ngit.</strong> This is the line ngit prints for
        itself:
      </p>

      <CodeCard tone="green">
        <pre className={codeBlock}>
          <code>{`curl -Ls https://ngit.dev/install.sh | bash`}</code>
        </pre>
      </CodeCard>

      <p>
        You get <code>ngit</code> and <code>git-remote-nostr</code>. Confirm
        both are on your PATH. The remote helper is the one that makes{' '}
        <code>nostr://</code> work in plain git, so if{' '}
        <code>git clone nostr://...</code> says the protocol is unknown, that
        binary is not where git can see it.
      </p>

      <p>
        <strong>2. Log in to the repository, not the machine.</strong>
      </p>

      <CodeCard tone="green">
        <pre className={codeBlock}>
          <code>{`ngit account login --local`}</code>
        </pre>
        <pre className={codeBlock}>
          <code>{`saved login details to local git config. you are only logged in to this local repository.
logged in as npub1r7mxut3ju6...`}</code>
        </pre>
      </CodeCard>

      <p>
        Use <code>--local</code>. Without it, ngit writes your login into your{' '}
        <strong>global</strong> git config, where it becomes the identity every
        repository on that machine publishes under.{' '}
        <code>ngit account whoami --json</code> shows <code>local</code>,{' '}
        <code>global</code> and which one is <code>active</code>; local wins.{' '}
        <code>ngit account</code> also has <code>connect</code>,{' '}
        <code>logout</code>, <code>export-keys</code>, <code>create</code>, and{' '}
        <code>whoami</code>.
      </p>

      <p>
        <strong>
          3. Try it read-only first, on a repository that is already there.
        </strong>{' '}
        Do this before you announce anything. It costs you one clone and it
        tells you whether the whole model makes sense to you:
      </p>

      <CodeCard tone="green">
        <pre className={codeBlock}>
          <code>{`git clone nostr://npub10qdp2fc9ta6vraczxrcs8prqnv69fru2k6s2dj48gqjcylulmtjsg9arpj/relay.ngit.dev/armada
cd armada
git branch -r | grep pr/
ngit pr list
ngit issue list`}</code>
        </pre>
      </CodeCard>

      <Success title="What a working install looks like">
        You should see 14 <code>pr/</code> branches, 14 open PRs, 40 open
        issues. If you do, your install is correct and you have just read a live
        project&apos;s collaboration history without an account anywhere.
      </Success>

      <p>
        <strong>4. Demote your old host first.</strong> <code>ngit init</code>{' '}
        in the next step claims the name <code>origin</code> for itself, so get
        your old remote out of the way before you run it. Do not delete
        anything:
      </p>

      <CodeCard tone="green">
        <pre className={codeBlock}>
          <code>{`git remote rename origin github`}</code>
        </pre>
      </CodeCard>

      <p>
        Armada runs this way today: <code>origin</code> is the{' '}
        <code>nostr://</code> URL, <code>github</code> and <code>gitlab</code>{' '}
        are named mirrors.
      </p>

      <p>
        <strong>5. Announce your repository.</strong> From inside your existing
        checkout:
      </p>

      <CodeCard tone="green">
        <pre className={codeBlock}>
          <code>{`ngit init -g relay.ngit.dev -g git.shakespeare.diy -g git.nostrhub.io \\
  --name my-project --identifier my-project --description "..."`}</code>
        </pre>
      </CodeCard>

      <p>
        <code>-g</code> names your GRASP servers, &quot;where your git+nostr
        data is hosted.&quot; Use more than one. That redundancy is the entire
        point and it costs nothing. <code>--relay</code> adds relays beyond your
        GRASP servers, and <code>--clone</code> adds git server URLs beyond
        them.
      </p>

      <p>
        This one command does four things: publishes your repository
        announcement, publishes your first state event,{' '}
        <strong>
          sets <code>origin</code> to the <code>nostr://</code> URL
        </strong>
        , and pushes <code>main</code> to every GRASP server you named. It ends
        by printing your share link and clone URL:
      </p>

      <CodeCard tone="green">
        <pre className={codeBlock}>
          <code>{`set remote origin to nostr url
push: git.shakespeare.diy/npub1.../my-project.git over https (unauthenticated)...
 * [new branch]      main
...
share your repository: https://gitworkshop.dev/npub1.../relay.ngit.dev/my-project
clone url: nostr://npub1.../relay.ngit.dev/my-project`}</code>
        </pre>
      </CodeCard>

      <p>
        <strong>6. Move your CI, do not rewrite it.</strong>
      </p>

      <CodeCard tone="green">
        <pre className={codeBlock}>
          <code>{`git mv .github/workflows .ngit/act/workflows`}</code>
        </pre>
      </CodeCard>

      <p>
        The files stay GitHub Actions syntax. ngit-ci reads them from the new
        path and runs them with act. Before you trust it, go back to the runner
        image in section 3. If your builds are heavier than a plain Node
        project, budget an afternoon for a pre-baked image and expect the first
        few runs to teach you something.
      </p>

      <p>
        <strong>7. Open your first pull request the ordinary way.</strong>
      </p>

      <CodeCard tone="green">
        <pre className={codeBlock}>
          <code>{`git checkout -b pr/my-first-proposal
git push -o 'title=My first proposal' -u origin pr/my-first-proposal
ngit pr list`}</code>
        </pre>
      </CodeCard>

      <p>
        <strong>8. Merge, then publish. Two steps, and pass the PR id.</strong>
      </p>

      <CodeCard tone="green">
        <pre className={codeBlock}>
          <code>{`ngit merge <pr-event-id>
git push origin main`}</code>
        </pre>
        <pre className={codeBlock}>
          <code>{`merge commit created on main. don't forget to push`}</code>
        </pre>
      </CodeCard>

      <p>
        Take the id from the <code>ID</code> column of{' '}
        <code>ngit pr list</code>. On a branch you created and pushed yourself,
        bare <code>ngit merge</code> will refuse it, for the reason in section
        3. The merge is local; the <code>git push</code> is what publishes the
        kind 1631 event flipping the PR to <code>applied</code>.
      </p>

      <p>
        <strong>
          9. Know which way <code>sync</code> points before you run it.
        </strong>
      </p>

      <CodeCard tone="green">
        <pre className={codeBlock}>
          <code>{`ngit sync      # servers  <- state event   (state wins)
ngit sync -t   # state event <- servers    (servers win)`}</code>
        </pre>
      </CodeCard>

      <p>
        Bare <code>ngit sync</code> is the destructive direction: it makes your
        git servers conform to the state event, which can walk commits off a
        branch. <code>-t</code> (&quot;trust git server(s) that are
        fast-forward ahead of nostr state&quot;) is the one you want when the
        servers are ahead and correct. Reach for <code>-t</code> by default and
        use bare <code>ngit sync</code> only when you are certain the state
        event is the version you want to keep.
      </p>

      <p>
        <strong>10. Tell people where it is.</strong> Your announcement carries
        a <code>web</code> tag, and gitworkshop.dev will render your repository,
        its PRs, its issues, and your CI run artifacts from the Nostr events.
        That is the link you put in your README.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/leaving-github/gitworkshop-profile.png"
          alt="A gitworkshop.dev profile page for Derek Ross, showing the bio and links, an npub instead of a username, Overview, Activity, Repositories 38, Followed, Starred and Followed Authors tabs, six repository cards, and a recent activity feed"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          The other side of that link: a profile page with 38 repositories on
          it. The identity under the avatar is an npub, not an account on
          gitworkshop. Nobody issued it and nobody can suspend it.
        </figcaption>
      </figure>

      <p>Then keep going.</p>

      <hr className="my-12" />

      <h2 id="section-7">7. Now is the time to do this</h2>

      <p>
        What we proved is narrow, and it is enough. Armada&apos;s repository is
        not a place on one company&apos;s disk. It is a set of Nostr events, and
        the three git servers carrying the code are three separate operators
        with no single one of them load-bearing. The merge requests, the issues,
        the CI runs and the releases are events too, readable by anything that
        speaks the protocol.
      </p>

      <p>
        The reason to start now rather than next year is that the pieces exist
        and you just watched each one do its job. <code>ngit</code> makes{' '}
        <code>nostr://</code> work in plain git, with no wrapper around your
        daily loop. gitworkshop.dev and{' '}
        <a
          href="https://nostrhub.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          nostrhub.io
        </a>{' '}
        give your project a URL you can send to someone, and nostrhub browses
        the code in the reader&apos;s own browser. ngit-ci runs the GitHub
        Actions files you already have, on a machine you run. Buzz keeps the
        conversation
        attached to the pull request it produced. Armada puts the issues, the
        merge requests and the CI runs in the channel where your team is already
        talking.
      </p>

      <figure className="not-prose my-6">
        <img
          src="/assets/blog/leaving-github/gitworkshop-dashboard.png"
          alt="A logged-in gitworkshop.dev home page reading Good afternoon, Derek, with nine notifications about new issues on armada, a Continue where you left off feed grouped by this week, last week and last month, and a My repositories sidebar listing 38 repositories"
          className="w-full rounded-lg border shadow-md"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          Nine notifications, the repositories you own, and where you left off.
          The daily loop you already have, on a home page nobody owns. Every row
          on it is a Nostr event.
        </figcaption>
      </figure>

      <PullQuote>
        All of the tools are here and ready to use. Find the ones that work for
        you and take the plunge.
      </PullQuote>

      <div className="not-prose my-8 flex flex-wrap justify-center gap-3">
        <Button
          size="lg"
          className="bg-[#d9e00b] px-8 py-3 text-lg font-bold text-[#100b15] hover:bg-[#c8cc0a]"
          asChild
        >
          <a
            href="https://gitworkshop.dev/ngit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install ngit
          </a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-[#ec4899] px-8 py-3 text-lg font-bold text-[#ec4899] hover:bg-[#ec4899] hover:text-white dark:hover:bg-[#ec4899] dark:hover:text-white"
          asChild
        >
          <a href="/armada">Try Armada</a>
        </Button>
      </div>
    </article>
  );
}
