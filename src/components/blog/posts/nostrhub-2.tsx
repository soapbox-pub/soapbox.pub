import type { BlogPostMeta } from '@/lib/blog/types';
import { FAQSection } from '@/components/blog/FAQSection';

export const meta: BlogPostMeta = {
  slug: 'nostrhub-2',
  title: 'NostrHub 2.0: A Meritocracy for Building Nostr Together',
  excerpt:
    "NostrHub 2.0 is a Nostr-native hub where developers build the protocol together. Not a democracy, not a dictatorship, but a configurable meritocracy curated by Nostr experts, with NIPs, a plan graph, apps, and git repos.",
  coverImage: '/assets/blog/nostrhub-2/cover.jpg',
  date: '2026-06-28',
  author: {
    name: 'Alex Gleason',
    picture: '/assets/avatars/alex.png',
  },
  ogImage: {
    url: '/assets/blog/nostrhub-2/cover.jpg',
  },
  featured: true,
  tags: [
    'nostrhub',
    'nostr',
    'nips',
    'meritocracy',
    'web of trust',
    'nostr development',
    'plan graph',
    'nip-34',
    'git on nostr',
    'borkstr',
    'fiatjaf',
    'decentralization',
  ],
  keywords:
    'nostrhub, nostrhub 2.0, nostr nips, decentralized nips registry, nostr web of trust, nostr experts, nip approval, meritocracy nostr, git on nostr, nip-34, grasp servers, borkstr compatibility, nostr plan graph, nostr developer hub, custom nips, decentralizing the nips registry',
  faq: [
    {
      question: 'What is NostrHub?',
      answer:
        "NostrHub is a Nostr-native hub where the developer community collaborates on building the Nostr protocol together. Its center of gravity is NIPs, the proposals that define how Nostr works, along with the discussion around them, a plan graph of what the ecosystem is building, an app directory, and git repos. Everything lives on Nostr as ordinary events.",
    },
    {
      question: 'How does NostrHub decide which NIPs are official without a central authority?',
      answer:
        "It uses a configurable meritocracy. NostrHub ships with a default set of 'Nostr experts', the top contributors to the NIPs repo. Anyone can approve a NIP using a NIP-32 label, but only approvals from experts count toward ranking. You can edit the expert list in Settings, so the meritocracy is subjective and yours to tune.",
    },
    {
      question: 'How does NostrHub prevent spam?',
      answer:
        "From the expert list, NostrHub derives a larger 'community' author set: it combines the follow lists of every expert, ranks each followed account by how many experts follow them, and caps the result (1000 by default). Comments, chat, the plan graph, apps, and repos are all scoped to that set. To be seen, you first have to earn the attention of people the experts already trust.",
    },
    {
      question: 'What is the NostrHub plan graph?',
      answer:
        "The plan graph is a shared, visual map of what the Nostr community is building: goals, problems, tasks, and the people and projects connected to them. Every node and edge is an independent Nostr event owned by its author. The client merges everyone's contributions into one force-directed 'galaxy' and computes the layout locally, so nobody can fight over a shared canvas.",
    },
    {
      question: 'Can I host git repositories on NostrHub?',
      answer:
        "Yes. NostrHub implements NIP-34, so repos are announced over relays and cloneable from anywhere, owned by no forge. You can create a brand-new repo entirely in the browser and push it to a GRASP server (a relay that doubles as a git host), or mirror an existing GitHub/GitLab repo onto Nostr.",
    },
    {
      question: 'Is NostrHub open source?',
      answer:
        'Yes. NostrHub is open source and was built with MKStack, Soapbox\u2019s framework for building Nostr clients with AI. The source code is hosted on NostrHub itself, at https://nostrhub.io/alex@gleasonator.com/nostrhub.',
    },
  ],
};

export default function NostrHub2() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        Nostr is a mycelial network. It's connected through the ground. In the
        best case you won't see it, but you'll feel it.
      </p>

      <figure>
        <img
          alt="NostrHub 2.0: tree roots beneath the forest floor woven together with glowing fiber-optic cables, the Nostr network connected through the ground like mycelium"
          src="/assets/blog/nostrhub-2/section-mycelium.jpg"
        />
      </figure>

      <p>
        At AOS Convergence 2026, we saw the results from Superbloom's Nostr
        development survey:{' '}
        <a
          href="https://docs.google.com/presentation/d/1a9pRXK5b2JhB5z6Urwm1R90ANPc-N8QCOKbDzlLsgqg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>"Faster alone, farther together?"</em>
        </a>
      </p>

      <p>
        It highlighted issues of coordination in the Nostr ecosystem,
        exactly what NostrHub was created to solve. Many people echoed that
        sentiment in person. So we took the feedback and built a new version of
        NostrHub from the ground up.
      </p>

      <h2>Democracy</h2>

      <figure>
        <img
          alt="A parliament of many different birds perched in a row on a branch that doubles as a power line, all squawking at once like a noisy debate over what becomes official Nostr"
          src="/assets/blog/nostrhub-2/section-democracy.jpg"
        />
      </figure>

      <p>
        NIPs on GitHub are centralized. GitHub itself is centralized, but the
        NIPs repo is also an oligarchy of people who get to decide which NIPs
        are real (I'm one such oligarch).
      </p>

      <p>
        There's an ancient issue on GitHub titled{' '}
        <a
          href="https://github.com/nostr-protocol/nips/issues/162"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Decentralizing the NIPs registry</em>
        </a>{' '}
        in which much drama ensued. People were critical of the top-down
        approach, and rightfully so.
      </p>

      <p>
        I created the first version of NostrHub out of spite, because fiatjaf{' '}
        <a
          href="https://github.com/nostr-protocol/nips/pull/1943"
          target="_blank"
          rel="noopener noreferrer"
        >
          closed
        </a>{' '}
        Chad's geocaching NIP pull request. He took issue that it was generated
        by AI, although in my opinion the quality exceeded a lot of the human
        slop left open or even merged. We built AI context files to make the AI
        write NIPs in the tone of the NIPs repo. We even created a fake version
        of fiatjaf we argued with, to understand his positions. Recently the
        real fiatjaf relented and merged geocaching as an official NIP, NIP-CC.
      </p>

      <p>
        That first NostrHub got covered in spam. Then ManiMe added web-of-trust
        scoring to it, which improved the quality, but it was still
        missing a way for a NIP to become <em>"official."</em>
      </p>

      <p>
        For NostrHub 2.0 I wanted NIPs to be enshrined. To get there, I figured
        I'd have to build a democracy. Or so I thought.
      </p>

      <p>
        I looked into decentralized autonomous organizations (DAOs). I stressed
        about adding people to a group and kicking them off. I thought a lot
        about Ethereum.
      </p>

      <p>
        When I mentioned all this to fiatjaf, he{' '}
        <a
          href="https://ditto.pub/nevent1qgsrhuxx8l9ex335q7he0f09aej04zpazpl0ne2cgukyawd24mayt8gqyqh6nr6ndhkvx562pr0ueepx64h3yxywlcmvfwvqux7zjdcwcfuqg2nmvdw"
          target="_blank"
          rel="noopener noreferrer"
        >
          replied
        </a>{' '}
        with sarcasm: <em>"Voting? That sounds like a recipe for disaster."</em> He
        was right.
      </p>

      <div className="not-prose my-10">
        <div className="relative bg-muted/40 rounded-lg p-6 pt-10">
          <span
            aria-hidden="true"
            className="absolute top-1 left-4 text-6xl leading-none font-serif text-purple-500/60 select-none"
          >
            &ldquo;
          </span>
          <p className="text-lg font-medium text-foreground leading-snug">
            Democracy basically means government by the people. Of the people.
            For the people. But the people are retarded.
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
            Osho
          </p>
        </div>
      </div>

      <p>
        But what was the alternative, fascism? fiatjaf has been{' '}
        <a
          href="https://www.businessinsider.com/jack-dorsey-fiatjaf-nostr-donation-2024-6"
          target="_blank"
          rel="noopener noreferrer"
        >
          accused
        </a>{' '}
        of being one by dishonest journalists, but I knew there was more to the
        story.
      </p>

      <p>
        So I traced that infamous "but the people are retarded" line back to its{' '}
        <a
          href="https://www.youtube.com/watch?v=fCQoukZvvFo"
          target="_blank"
          rel="noopener noreferrer"
        >
          full speech
        </a>{' '}
        by Osho. The Indian philosopher's answer was not fascism. It was
        meritocracy.
      </p>

      <div className="not-prose my-8 aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/fCQoukZvvFo"
          title="Osho on democracy and meritocracy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="not-prose my-10">
        <div className="relative bg-muted/40 rounded-lg p-6 pt-10">
          <span
            aria-hidden="true"
            className="absolute top-1 left-4 text-6xl leading-none font-serif text-purple-500/60 select-none"
          >
            &ldquo;
          </span>
          <p className="text-lg font-medium text-foreground leading-snug">
            Democracy cannot be the highest possibility man can attain. It is
            good in comparison to other forms of government that have preceded
            it. But not something that can succeed it. I call it meritocracy. I
            want a government by the people of merit.
          </p>
          <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
            Osho
          </p>
        </div>
      </div>

      <p>But how do you build a meritocracy? Is it even possible?</p>

      <p>
        A meritocracy is a system ruled by experts. But who decides who the
        experts are? Measuring impact is subjective. Choose the wrong experts
        and you've built an authoritarianism. Choose the right ones and you've
        built a benevolent dictatorship, arguably the rarest and best
        form of society, and the hardest to keep.
      </p>

      <h2>Meritocracy</h2>

      <figure>
        <img
          alt="Wise owls perched high in an ancient tree at dawn, keeping watch over a misty forest valley, like the trusted experts whose approvals make NIPs official on NostrHub"
          src="/assets/blog/nostrhub-2/section-meritocracy.jpg"
        />
      </figure>

      <p>
        My solution for NostrHub 2.0 was to ship a default set of experts, but
        make them configurable by the user.
      </p>

      <p>
        Instead of a "Follow" button, profiles on NostrHub have an{' '}
        <strong>"add as expert"</strong> button. You can remove experts too.
        Experts wear a shield badge above their avatar wherever they appear, so
        you always know whose judgment you're looking at.
      </p>

      <p>
        To choose the default experts, I simply took the top twelve contributors
        of the existing NIPs repo on GitHub: fiatjaf, hodlbod, Vitor
        Pamplona, PABLOF7z, jb55, Kieran, mattn, and the rest. There are strong
        signals of expertise in that list, and leaning on it keeps my personal
        bias out of the defaults. Since users can customize it, we get the best
        of both worlds: a <em>subjective</em> meritocracy. There is no objective
        expert, so I stopped pretending there could be one, and handed you the
        dial instead.
      </p>

      <p>
        Anyone can approve a NIP on NostrHub. Approvals are{' '}
        <a
          href="https://github.com/nostr-protocol/nips/blob/master/32.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          NIP-32
        </a>{' '}
        label events, so they're just ordinary Nostr data. But only approvals
        from <em>your</em> experts count toward a NIP becoming "official." NIPs
        are ranked by how many experts approved them. Change your experts, and
        the rankings rearrange themselves around your trust.
      </p>

      <h2>The Community</h2>

      <figure>
        <img
          alt="A vast flock of migrating birds across the dawn sky, linked bird to bird by threads of light into a living web of trust, the wider Nostr developer community"
          src="/assets/blog/nostrhub-2/section-community.jpg"
        />
      </figure>

      <p>Not everyone can be an expert. What about the rest of us?</p>

      <p>
        Here's where the mycelium spreads. From the experts, NostrHub derives a
        much larger <strong>community</strong>. It combines the follow lists of
        every expert, ranks each followed account by how many experts follow
        them, and caps the result at 1,000 (configurable, or you can turn the
        cap off entirely). The experts and you are always included.
      </p>

      <p>
        So to be <em>seen</em> on NostrHub, you don't need anyone's permission.
        Nostr is permissionless, and you can publish anything. But to be{' '}
        <em>rendered</em>, you have to have already earned the attention of
        people the experts trust. You engage with the developer community
        through clients like Amethyst, Coracle, and Ditto first. You do good
        work. The trust flows back through the network to you.
      </p>

      <p>
        This is what kills the spam that drowned NostrHub 1.0. Not a moderator,
        not a captcha, not a blocklist. Just the shape of the network
        itself. The same community set scopes everything downstream: comments,
        chat, the plan graph, the apps, the repos. One trust primitive applied
        everywhere.
      </p>

      <h2>Building Nostr Together</h2>

      <figure>
        <img
          alt="The NostrHub plan graph seen as a constellation through a forest canopy at night, glowing nodes and little suns linked by threads of light, mapping the goals, problems, and people building Nostr"
          src="/assets/blog/nostrhub-2/section-plan-graph.jpg"
        />
      </figure>

      <p>
        I've been trying to figure out a way for people to collaborate on a
        bigger-picture strategy for Nostr. The goal is to align people so that we
        can identify problems and missing gaps together and tackle the
        highest-value issues.
      </p>

      <p>
        I started by creating a simple public{' '}
        <a href="https://nostrhub.io/chat" target="_blank" rel="noopener noreferrer">
          chat
        </a>{' '}
        with AI agent integration, loosely inspired by Block's Sprout (now{' '}
        <a
          href="https://github.com/block/buzz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buzz
        </a>
        ). I didn't feel I had quite nailed it, so I then tried building a
        collaborative mindmap I called{' '}
        <a href="https://nostrhub.io/plan" target="_blank" rel="noopener noreferrer">
          Plan
        </a>
        .
      </p>

      <p>
        These are both experiments and I'm not satisfied with either solution
        yet. Play around with them and let me know what you think.
      </p>

      <p>
        These experiments inspired us to create{' '}
        <a
          href="https://gitlab.com/soapbox-pub/armada"
          target="_blank"
          rel="noopener noreferrer"
        >
          Armada
        </a>
        , an upcoming community chat client we're building at Soapbox. We may
        extend Armada with collaboration features like this, and definitely with
        AI agents. We'd also like to start organizing weekly community video
        calls hosted on NostrHub. More on that later!
      </p>

      <h2>NIPs, Apps, and Repos</h2>

      <figure>
        <img
          alt="A row of handmade birdhouses and nests wired together along a tree branch, some glowing warmly and lively, others dim or half-built, like compatibility tiers rating how well each app implements the NIPs"
          src="/assets/blog/nostrhub-2/section-apps.jpg"
        />
      </figure>

      <p>
        NIPs are the heart, but a protocol is only as real as the software that
        implements it. So NostrHub closes the loop.
      </p>

      <p>
        The <strong>app directory</strong> lists applications announced on Nostr
        itself, as{' '}
        <a
          href="https://github.com/nostr-protocol/nips/blob/master/89.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          NIP-89
        </a>{' '}
        handler events, with no central submission. The community then rates
        how well each app actually implements each NIP, ProtonDB-style:{' '}
        <strong>Flawless</strong>, <strong>Incomplete</strong>,{' '}
        <strong>Isolated</strong>, or <strong>Borked</strong>. These reports are
        shared 1:1 with the{' '}
        <a href="https://borkstr.com" target="_blank" rel="noopener noreferrer">
          Borkstr
        </a>{' '}
        directory, so the ratings flow between clients instead of being trapped
        in one. Interoperability, measured interoperably.
      </p>

      <p>
        And there are <strong>git repos</strong>. NostrHub implements{' '}
        <a
          href="https://github.com/nostr-protocol/nips/blob/master/34.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          NIP-34
        </a>
        : code that lives on Nostr, announced over relays, cloneable from
        anywhere, owned by no forge. You can spin up a brand-new repo entirely in
        the browser and push it straight to a GRASP server (a relay that doubles
        as a git host), or mirror an existing GitHub repo onto Nostr in a few
        clicks. The repo pages are laid out GitHub-style, with issues, pull
        requests, and a file browser, except there's no GitHub underneath.
      </p>

      <p>
        We started by trying to escape GitHub's oligarchy over
        the NIPs. We ended up rebuilding the good parts of GitHub itself, the
        proposals, discussion, code, and issues, on a substrate nobody owns,
        governed by a meritocracy you control.
      </p>

      <h2>Farther Together</h2>

      <figure>
        <img
          alt="A dawn forest with a glowing river of light winding toward the sunrise, deer, foxes, birds and other creatures converging along its banks, the Nostr developer community going farther together"
          src="/assets/blog/nostrhub-2/section-together.jpg"
        />
      </figure>

      <p>
        Superbloom asked whether we'd go <em>"faster alone, or farther
        together?"</em> The honest answer is that Nostr has spent years going
        fast alone. Brilliant developers building brilliant things in
        parallel, occasionally colliding, rarely coordinating.
      </p>

      <p>
        NostrHub is my attempt at the "together" without giving up the things
        that make Nostr worth it: no central server deciding what's real, no
        committee you have to beg, no king. Just a network of trust you can see,
        shape, and grow, with experts at the core, a community in the canopy,
        and a mycelial web of NIPs, plans, apps, and code connecting it all
        through the ground.
      </p>

      <p>
        It's not a democracy. It's not a dictatorship. It's a meritocracy you
        configure yourself. And for the first time, I think it can actually
        work.
      </p>

      <p>
        Come build Nostr with us at{' '}
        <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">
          nostrhub.io
        </a>
        .
      </p>

      <FAQSection
        items={(meta.faq ?? []).map((item) =>
          item.question === 'Is NostrHub open source?'
            ? {
                ...item,
                answer: (
                  <>
                    Yes. NostrHub is open source and was built with MKStack,
                    Soapbox&rsquo;s framework for building Nostr clients with AI.
                    The source code is hosted on NostrHub itself, at{' '}
                    <a
                      href="https://nostrhub.io/alex@gleasonator.com/nostrhub"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      nostrhub.io/alex@gleasonator.com/nostrhub
                    </a>
                    .
                  </>
                ),
              }
            : item
        )}
      />

      <h2>Related Reading</h2>

      <ul>
        <li>
          <a href="/blog/announcing-nostrhub">
            NostrHub: NIPs, Apps, and Repos on Nostr
          </a>
        </li>
        <li>
          <a href="/blog/onchain-zaps-in-ditto">
            Onchain Zaps in Ditto: Bitcoin Tipping Without Lightning
          </a>
        </li>
        <li>
          <a href="/blog/mkstack-tutorial">Build a Nostr App with MKStack</a>
        </li>
      </ul>
    </article>
  );
}
