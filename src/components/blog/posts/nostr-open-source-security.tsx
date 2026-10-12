import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { KeyRound, Bot, Coins, Clock, Users, Copy, Check } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blog/types';

export const meta: BlogPostMeta = {
  slug: 'nostr-open-source-security',
  title: 'Guide to Open Source Nostr Security',
  excerpt:
    'People keep asking us to audit AI-built Nostr apps. Our advice: limit the attack surface, audit with AI, use bounties, and when risk is high, ship slow.',
  coverImage: '/assets/blog/nostr-open-source-security/cover.png',
  date: '2026-07-17',
  author: {
    name: 'Alex Gleason',
    picture: '/assets/avatars/alex.png',
  },
  ogImage: {
    url: '/assets/blog/nostr-open-source-security/cover.png',
  },
  featured: false,
  tags: [
    'nostr security',
    'security audit',
    'open source security',
    'AI generated code',
    'vibe coding',
    'nostr keys',
    'nsec',
    'remote signer',
    'bug bounty',
    'XSS',
    'content security policy',
    'supply chain security',
    'open source is dead',
    'AI vulnerability scanning',
    'threat model',
  ],
  keywords:
    'nostr security, nostr app security audit, open source security audit, audit AI generated code, vibe coded app security, AI vulnerability scanning open source, nostr private key storage, nostr remote signer, nsec security, bug bounty open source, content security policy, supply chain attack npm, is nostr secure, threat model for users',
  faq: [
    {
      question: 'Is Nostr secure?',
      answer:
        'Nostr relays store no personal information, so mass data breaches are not possible the way they are on traditional platforms. Security on Nostr comes down to the client: it must validate event signatures and protect the user\'s secret key. If a client does those two things well, the attack surface is very small.',
    },
    {
      question: 'What is the biggest security risk in a Nostr app?',
      answer:
        'Mishandling the secret key. The key is the user\'s entire identity. Clients should either avoid holding the key at all by supporting remote signers, or contain it to a single place in the code behind a limited signer interface.',
    },
    {
      question: 'Is AI-generated code safe to ship?',
      answer:
        'AI-generated code is not inherently less safe than human code, but it is often shipped faster and with less review. The same AI tools that wrote the code can review it. Run repeated, targeted security reviews with multiple models before shipping, especially for apps used in sensitive situations.',
    },
    {
      question: 'What is a remote signer?',
      answer:
        'A remote signer is an app or service that holds the user\'s Nostr secret key and exposes only limited functions like signEvent and decrypt. The client never sees the key itself, so a compromised client cannot leak it.',
    },
    {
      question: 'Do I need a professional security audit?',
      answer:
        'If your app serves users in high-risk situations and you can afford one, yes. But most of the practical risk in a Nostr client is covered by five practices: limiting the attack surface, AI-assisted review, community bounties, delaying releases behind a review period, and helping users understand their risk surface.',
    },
  ],
  howTo: {
    name: 'How to secure an open source Nostr app',
    description:
      'Four practices that cover most of the real security risk in an open source Nostr client.',
    steps: [
      {
        name: 'Limit the attack surface',
        text: 'Support remote signers so the app never touches the secret key. When the app must hold the key, contain it to one module behind a signer interface. Send a Content-Security-Policy header on web. Use secure device storage on native.',
      },
      {
        name: 'Audit with AI',
        text: 'Run repeated, targeted security reviews with AI: key handling paths, event validation, dependency risks. Use more than one model and treat findings as leads, not verdicts.',
      },
      {
        name: 'Post bounties for the community',
        text: 'Publish a SECURITY.md with a disclosure contact and offer bounties for concrete outcomes, like extracting the secret key from the app.',
      },
      {
        name: 'Delay security-critical releases',
        text: 'Hold releases behind a review window, pin dependencies, and let new dependency versions age before adopting them. Most supply chain attacks are caught within days of publication.',
      },
      {
        name: 'Help users understand their risk surface',
        text: 'Tell users what is public, what metadata relays can see, and what losing the secret key means. Publish a plain-language threat model.',
      },
    ],
  },
};

const AUDIT_PROMPTS = [
  'Trace every code path in this codebase that touches the Nostr secret key (nsec) or seed phrase. Report every place the key is logged, serialized, stored, passed as a function argument, or sent over the network, including React state and context, localStorage, error reporters like Sentry, analytics payloads, and the clipboard. The key should live in exactly one module behind a signer interface. Flag anything that violates that. For each finding, give the file, the line, a severity (critical, high, medium, low), and how an attacker would exploit it. Only report issues you can point to concrete code for. If you find nothing, say so.',
  'Review how this client handles events received from relays. Relay data is untrusted input. Verify that each event\'s ID is recomputed from its content and that signature validation happens before any event is rendered, stored, or acted upon. Flag any place where relay data is trusted without validation, including tags, kind 0 metadata, and decrypted payloads. For each finding, give the file, the line, a severity (critical, high, medium, low), and how an attacker would exploit it. Only report issues you can point to concrete code for. If you find nothing, say so.',
  'Scan this codebase for classic web vulnerabilities: innerHTML and dangerouslySetInnerHTML usage, eval and other dynamic code execution, unsanitized URL and redirect handling, secrets appearing in error messages or logs, and missing or weak Content-Security-Policy configuration. For each finding, give the file, the line, a severity (critical, high, medium, low), how an attacker would exploit it, and a suggested fix. Only report issues you can point to concrete code for. If you find nothing, say so.',
];

function PromptBlock({ prompt }: { prompt: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable, leave the button in its default state.
    }
  };

  return (
    <div className="not-prose relative my-6">
      <pre className="whitespace-pre-wrap break-words rounded-lg border border-zinc-700 bg-zinc-900 p-4 pr-16 text-sm text-zinc-100 leading-relaxed">
        <code>{prompt}</code>
      </pre>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? 'Copied' : 'Copy prompt'}
        title={copied ? 'Copied' : 'Copy prompt'}
        className="absolute top-3 right-3 rounded-md border border-zinc-700 bg-zinc-800 p-2 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-700 transition-colors"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-600" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}

export default function NostrOpenSourceSecurity() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        We have been getting a lot of requests lately to audit open source
        Nostr apps. Most of them were built heavily with AI, and some are
        intended for people in sensitive situations: activists, journalists,
        people who cannot afford a mistake.
      </p>

      <p>
        We are not security auditors, and this post is not a substitute for a
        professional audit. But our team has been shipping open source Nostr
        software for years, and the advice we give in these conversations is
        always the same. Given the number of requests of this nature we
        receive, we decided to write it down.
      </p>

      <h2>Is Open Source a Security Liability in the Age of AI?</h2>

      <p>
        People keep arguing that AI has made open source a security
        liability. It's incredibly easy to scan any open codebase with AI and
        find vulnerabilities. And state actors, including ones hostile to the
        activists these apps serve, get frontier models before the public
        does. Publishing your code just gives them a head start.
      </p>

      <p>
        But hiding your code doesn't fix either of those things. AI is also
        good at reverse engineering compiled binaries and probing running
        systems, so closed source slows a well-funded attacker down less than
        it ever has. What it reliably does is <strong>stop everyone else from
        reviewing your code</strong>. Researchers, contributors, and whatever
        models you do have access to can only audit what they can read.
      </p>

      <p>
        The open source community has been having this argument for decades.
        Attackers have always been able to read open code, and open source
        software has a strong security record anyway, because <strong>
        visibility helps defenders at least as much</strong>. The tools have
        changed. The tradeoffs haven't.
      </p>

      <p>
        Don't assume hand-written code is the safe baseline either.{' '}
        <strong>Human slop</strong> predates AI slop by decades.{' '}
        <a
          href="https://www.veracode.com/state-of-software-security-report/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Veracode's State of Software Security
        </a>{' '}
        reports, built from scans of hundreds of thousands of applications
        written mostly by humans, have found year after year that roughly
        three quarters of applications contain at least one security flaw on
        first scan. Classic industry estimates put defect density at 15 to 50
        bugs per 1,000 lines of delivered human code (Steve McConnell,{' '}
        <em>Code Complete</em>). Code needs review either way.
      </p>

      <p>
        I went through this whole argument in my talk "Open Source is Dead" at
        Bitcoin++:
      </p>

      <div className="not-prose my-10">
        <div className="rounded-xl border bg-card shadow-sm p-5 space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/avatars/derek.jpg"
              alt="Derek Ross"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-foreground">
                Derek Ross
              </p>
              <p className="text-xs text-muted-foreground">July 16, 2026</p>
            </div>
          </div>
          <p className="text-sm text-foreground leading-relaxed">
            <span className="text-azure">@Alex Gleason</span>'s talk from
            Bitcoin++ is now live. Open Source is Dead!{' '}
            <a
              href="https://www.youtube.com/watch?v=w7KQl6qh4yM"
              target="_blank"
              rel="noopener noreferrer"
              className="text-azure hover:underline break-all"
            >
              https://www.youtube.com/watch?v=w7KQl6qh4yM
            </a>
          </p>
          <a
            href="https://www.youtube.com/watch?v=w7KQl6qh4yM"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <img
              src="https://img.youtube.com/vi/w7KQl6qh4yM/maxresdefault.jpg"
              alt="Open Source is Dead: Alex Gleason's talk at Bitcoin++, watch on YouTube"
              className="rounded-lg border w-full"
            />
          </a>
          <a
            href="https://ditto.pub/nevent1qgsr7acdvhf6we9fch94qwhpy0nza36e3tgrtkpku25ppuu80f69kfqqyq543faq4ascul9xk8vsyj0ztl9hdg7hwc4e23m3dynlhrl07eul5x8a2cm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-azure hover:underline"
          >
            View post on Ditto &rarr;
          </a>
        </div>
      </div>

      <h2>First, Understand the Nostr Security Model</h2>

      <p>
        In traditional Web 2.0 sites, you authorize yourself to a server. You
        might use OAuth, for example. The server is protecting some resource,
        usually entries in a database, and you have to prove that you're
        allowed to access it. If the database were breached, everyone would be
        screwed.
      </p>

      <p>
        In Nostr the security model is flipped. You hold a secret key.{' '}
        <strong>The secret key IS the protected resource.</strong> So instead
        of authorizing yourself to servers, servers authorize to you. This is
        a sovereign model where the servers (relays) are dumb data stores
        designed to serve the user.
      </p>

      <p>
        Nostr relays don't store user PII. They don't store emails, phone
        numbers, names, or any other personal information. Users generate
        their own key out of thin air (a long random number), sign events with
        it, and publish those events to relays. The authorization model is: is
        the signature valid? If so, the event is accepted, otherwise it's
        rejected. The relay doesn't care whose signature it is, just that a
        valid signature is used. There is nothing to attack. All of the
        application logic is handled by clients, which query relays for events
        published by keys they trust. Most data on Nostr is public, but
        private data is supported using encryption with the private key. To
        relay operators and everyone else, encrypted data just looks like
        noise.
      </p>

      <p>
        As a result, <strong>massive data breaches cannot occur on
        Nostr</strong>. The only way
        to exploit Nostr is through targeted attacks on specific users running
        specific vulnerable clients. This is "united we stand, divided we
        fall" encoded into computer infrastructure. Traditional sites like
        Facebook, and even Mastodon, suffer from data breaches that simply
        aren't possible on Nostr.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-orange-500 bg-orange-50/50">
          <CardContent className="p-6">
            <p className="text-lg font-semibold text-foreground m-0">
              A Nostr client has exactly two security jobs: validate events,
              and store the secret key safely. The entire security model hinges
              on these two things.
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        Event validation is the easy half, because all of the complexity is
        handled by battle-tested libraries available in every programming
        language. If those libraries (or the underlying cryptography) were
        compromised, the world would have much bigger problems. Still, if
        you're worried, audit them. With AI at your fingertips, no one can
        stop you.
      </p>

      <p>
        Storing the secret key safely is harder. That's where the rest of this
        guide comes in. Relays are considered untrusted by clients anyway, so
        there is not much you can do wrong with a relay.{' '}
        <strong>It's all about the client.</strong>
      </p>

      <h2>1. Limit the Attack Surface</h2>

      <p>
        The simplest way to protect the secret key is to never touch it. When
        users log in with a{' '}
        <a
          href="https://nostrbook.dev/nips/46"
          target="_blank"
          rel="noopener noreferrer"
        >
          remote signer
        </a>
        , the application can only call functions like <code>signEvent</code>{' '}
        and <code>decrypt</code>. It cannot access the secret key directly. A
        compromised client can misuse those functions while it's running, but
        it cannot exfiltrate the key itself. On the web, browser extension
        signers (NIP-07) give you the same property.{' '}
        <strong>Support these login methods first</strong>, and encourage your
        users toward them.
      </p>

      <div className="not-prose my-8">
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="p-6">
            <p className="text-sm text-amber-900 m-0">
              On desktop, we recommend the{' '}
              <a
                href="https://chromewebstore.google.com/detail/ditto-extension/fbiegkepanmjielbemkhieckmlckiagi"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                Ditto Extension
              </a>
              , our open source browser signer. It keeps the key inside the
              extension and exposes only the NIP-07 signer interface to
              websites.
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        When your client does store the secret key,{' '}
        <strong>contain it to a single place in the code</strong>, and expose
        a limited signer interface (similar to
        the remote signer interface) to the rest of your codebase. Your code
        should act on the signer, never pass the raw key around. This alone
        mitigates many issues, because the amount of code that can leak the
        key shrinks to one module you can actually review.
      </p>

      <p>Beyond key containment:</p>

      <ul>
        <li>
          <strong>Web apps:</strong> send a{' '}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"
            target="_blank"
            rel="noopener noreferrer"
          >
            Content-Security-Policy header
          </a>{' '}
          with the site response to defend against cross-site scripting (XSS).
          Even if an XSS bug exists, a strict CSP neutralizes it. Nostr apps
          render a lot of user-generated content, so assume XSS attempts will
          happen.
        </li>
        <li>
          <strong>Native apps:</strong> store the key in secure device storage
          (Keychain on iOS, Keystore on Android) and take care not to
          introduce remote code execution vulnerabilities, for example through
          embedded web views or dynamic code loading.
        </li>
        <li>
          <strong>Everyone:</strong> keep the dependency tree small. Every
          package you add is code you didn't write running next to the key.
        </li>
      </ul>

      <p>
        If you're building with{' '}
        <a
          href="https://mkstack.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          MKStack
        </a>
        , most of this is done for you. The stack ships with the signer
        interface and key containment described above, remote signer support,
        and CSP configuration, so you start with these Nostr best practices
        already baked in rather than adding them after the fact.
      </p>

      <h2>2. Audit With AI</h2>

      <p>
        AI review is not a replacement for human review, but it is cheap,
        fast, and catches real bugs, so there is no reason to skip it.
      </p>

      <p>
        Generic prompts like "review this code for security issues" produce
        generic results. Point the AI at the two jobs that matter. Here are
        prompts you can copy and paste:
      </p>

      {AUDIT_PROMPTS.map((prompt) => (
        <PromptBlock key={prompt.slice(0, 32)} prompt={prompt} />
      ))}

      <p>
        Run the review more than once, and with more than one model. Different
        models catch different things, and results vary between runs.{' '}
        <strong>Treat findings as leads to verify, not verdicts.</strong> An
        AI review that finds
        nothing is not a certificate of safety, but an AI review that finds
        something has saved you an incident.
      </p>

      <h2>3. Harness the Open Source Community With Bounties</h2>

      <p>
        "Open source means anyone can audit the code" is true, and it's also
        true that by default, nobody does. Reviewers show up when there is an
        incentive.
      </p>

      <p>
        Bounties fix the incentive. You don't need a formal program on a big
        platform to start. Add a <code>SECURITY.md</code> to your repository
        with a contact for private disclosure, then publicly offer rewards for
        concrete outcomes rather than vague ones.{' '}
        <strong>"Demonstrate a way to extract the user's secret key from this
        app" is a good bounty.</strong>{' '}
        "Find security bugs" is not, because it invites low-effort reports.
      </p>

      <p>
        On Nostr you can pay bounties in Bitcoin directly, with no payment
        processor or bounty platform in the middle. A few hundred dollars in
        sats for a key-extraction proof of concept is dramatically cheaper
        than a professional audit, and it pays only on results.
      </p>

      <p>
        We recently did this ourselves with{' '}
        <a href="/blog/building-an-armada-voyage-to-encrypted-communities">
          Armada
        </a>
        , our encrypted communities project. I posted a bounty, hzrd149 found
        a vulnerability and claimed it, and $1,000 in Bitcoin was dispatched:
      </p>

      <div className="not-prose my-10">
        <div className="rounded-xl border bg-card shadow-sm p-5 space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/avatars/alex.png"
              alt="Alex Gleason"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm text-foreground">
                Alex Gleason
              </p>
              <p className="text-xs text-muted-foreground">July 13, 2026</p>
            </div>
          </div>
          <p className="text-sm text-foreground leading-relaxed">
            Update:{' '}
            <a
              href="https://ditto.pub/npub1ye5ptcxfyyxl5vjvdjar2ua3f0hynkjzpx552mu5snj3qmx5pzjscpknpr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-azure hover:underline"
            >
              @hzrd149
            </a>{' '}
            won this bounty. $1k in Bitcoin dispatched. 🫡 Armada being
            updated!
          </p>
          <div className="rounded-lg border bg-muted/40 p-4 space-y-2">
            <div className="flex items-center gap-2">
              <img
                src="/assets/avatars/alex.png"
                alt="Alex Gleason"
                className="h-6 w-6 rounded-full"
              />
              <p className="font-semibold text-xs text-foreground m-0">
                Alex Gleason
              </p>
              <p className="text-xs text-muted-foreground m-0">July 7, 2026</p>
            </div>
            <p className="text-sm text-foreground leading-relaxed m-0">
              You guys should try it! I think you'll enjoy:{' '}
              <a
                href="https://armada.buzz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-azure hover:underline"
              >
                https://armada.buzz/
              </a>{' '}
              And if any of y'all can figure out how to hack or disrupt it
              I'll pay you Bitcoin, up to $1,000 depending on the severity of
              your find. Email: alex@soapbox.pub
            </p>
          </div>
          <a
            href="https://ditto.pub/nevent1qgsqgc0uhmxycvm5gwvn944c7yfxnnxm0nyh8tt62zhrvtd3xkj8fhgqyzhsecl7npqrwm86gmsvgsekm2tddzuf3dsxlulqz038qlgw60x62r7lhwa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-azure hover:underline"
          >
            View post on Ditto &rarr;
          </a>
        </div>
      </div>

      <p>
        <strong>Put bounties out early</strong>, before you have serious
        at-risk users. A
        vulnerability found while your user base is small costs you a bounty
        payment. The same vulnerability found later, in the wild, costs your
        users.
      </p>

      <h2>4. Don't Rush Security-Critical Updates</h2>

      <p>
        Speed is a liability in security-critical software. If your users
        include people in sensitive situations, a slow release costs you
        little. Shipping a compromised or broken build to people who trusted
        it can cost them everything.
      </p>

      <ul>
        <li>
          <strong>Hold releases behind a review window.</strong> Cut a release
          candidate, announce it, and give the community days or weeks to test
          and review before it becomes the recommended build. Nothing about an
          update to a working app is urgent, except actual security fixes.
        </li>
        <li>
          <strong>Pin your dependencies and let new versions age.</strong>{' '}
          Most npm supply chain attacks are detected within days of a
          malicious version being published. If you only adopt dependency
          updates after they have been public for a while, you let the rest of
          the ecosystem absorb that risk for you.
        </li>
        <li>
          <strong>Make builds reproducible where you can.</strong> If anyone
          can rebuild your release from source and get the same artifact, a
          tampered binary becomes detectable.
        </li>
      </ul>

      <p>
        This is the opposite of how AI-assisted development usually feels,
        where shipping ten times a day is the whole point. Ship fast while
        you're building.{' '}
        <strong>Once real people depend on the app for their safety, the
        release process should slow down on purpose.</strong>
      </p>

      <h2>5. Help Users Understand Their Risk Surface</h2>

      <p>
        A perfectly built client can still get its users hurt if they
        misunderstand what it protects. If your app serves people in sensitive
        situations, part of the security work is making the boundaries
        legible.
      </p>

      <ul>
        <li>
          <strong>Be explicit about what is public.</strong> Most data on
          Nostr is public and effectively permanent. Users coming from
          platforms with delete buttons and private accounts will assume
          protections that do not exist. Say what is public, in the interface,
          at the moment it matters.
        </li>
        <li>
          <strong>Explain the metadata.</strong> Even when content is
          encrypted, relays can see IP addresses, publish times, and often who
          is talking to whom. If your app does not hide the social graph, say
          so. Users deciding whether to organize on your app need this
          information more than they need a feature list.
        </li>
        <li>
          <strong>Make key consequences clear.</strong> Anyone who obtains the
          secret key is the user, everywhere, with no password reset. Users
          should know this before it matters, along with what to do if the key
          leaks.
        </li>
        <li>
          <strong>Publish a plain-language threat model.</strong> One page:
          what the app defends against, what it does not, and what the user is
          trusting (their device, their relays, your release process). Honest
          scope is worth more to an at-risk user than a vague promise of
          security.
        </li>
      </ul>

      <h2>Nostr Security Checklist</h2>

      <p>
        Master this, and you will have mastered Nostr security. It's all about
        validating events and protecting the key. Limit how much of your code
        can touch the key, use AI to check the parts that do, pay strangers to
        try to break it, give every release time to be looked at before people
        rely on it, and make sure the people relying on it know exactly what
        it does and does not protect.
      </p>

      <p>
        None of this requires a security team or an audit budget. It requires
        slowing down and doing the checks before people rely on the app.
      </p>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-5 flex items-start gap-3">
              <KeyRound className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold m-0">Limit the attack surface</p>
                <p className="text-sm text-muted-foreground m-0">
                  Remote signers, one key module, CSP headers, secure storage.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 flex items-start gap-3">
              <Bot className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold m-0">Audit with AI</p>
                <p className="text-sm text-muted-foreground m-0">
                  Targeted reviews of key paths and validation, multiple
                  models, repeated runs.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 flex items-start gap-3">
              <Coins className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold m-0">Post bounties</p>
                <p className="text-sm text-muted-foreground m-0">
                  SECURITY.md plus Bitcoin rewards for concrete exploits.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 flex items-start gap-3">
              <Clock className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold m-0">Ship slow</p>
                <p className="text-sm text-muted-foreground m-0">
                  Review windows, pinned dependencies, reproducible builds.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="sm:col-span-2">
            <CardContent className="p-5 flex items-start gap-3">
              <Users className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold m-0">
                  Help users understand their risk surface
                </p>
                <p className="text-sm text-muted-foreground m-0">
                  Say what is public, what metadata leaks, and what the key
                  means. Publish a plain-language threat model.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>Frequently Asked Questions</h2>

      <h3>Is Nostr secure?</h3>
      <p>
        Nostr relays store no personal information, so mass data breaches are
        not possible the way they are on traditional platforms. Security on
        Nostr comes down to the client: it must validate event signatures and
        protect the user's secret key. If a client does those two things well,
        the attack surface is very small.
      </p>

      <h3>What is the biggest security risk in a Nostr app?</h3>
      <p>
        Mishandling the secret key. The key is the user's entire identity.
        Clients should either avoid holding the key at all by supporting
        remote signers, or contain it to a single place in the code behind a
        limited signer interface.
      </p>

      <h3>Is AI-generated code safe to ship?</h3>
      <p>
        AI-generated code is not inherently less safe than human code, but it
        is often shipped faster and with less review. The same AI tools that
        wrote the code can review it. Run repeated, targeted security reviews
        with multiple models before shipping, especially for apps used in
        sensitive situations.
      </p>

      <h3>What is a remote signer?</h3>
      <p>
        A remote signer is an app or service that holds the user's Nostr
        secret key and exposes only limited functions like{' '}
        <code>signEvent</code> and <code>decrypt</code>. The client never sees
        the key itself, so a compromised client cannot leak it.
      </p>

      <h3>Do I need a professional security audit?</h3>
      <p>
        If your app serves users in high-risk situations and you can afford
        one, yes. But most of the practical risk in a Nostr client is covered
        by the five practices above: limiting the attack surface, AI-assisted
        review, community bounties, delaying releases behind a review period,
        and helping users understand their risk surface.
      </p>

      <h2>Related Reading</h2>

      <ul>
        <li>
          <a href="/blog/managing-nostr-keys">
            How to Store and Manage Your Nostr Private Key
          </a>
        </li>
        <li>
          <a href="/blog/announcing-soapbox-signer">
            Announcing Soapbox Signer
          </a>
        </li>
        <li>
          <a href="/blog/how-soapbox-ships-fast">How Soapbox Ships Fast</a>
        </li>
        <li>
          <a href="/blog/how-to-disappear-from-the-surveillance-internet">
            How to Disappear From the Surveillance Internet
          </a>
        </li>
        <li>
          <a href="/blog/our-stance-on-ai">Our Stance on AI</a>
        </li>
      </ul>
    </article>
  );
}
