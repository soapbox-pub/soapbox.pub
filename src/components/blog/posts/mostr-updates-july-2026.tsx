import type { BlogPostMeta } from '@/lib/blog/types';
import { FAQSection } from '@/components/blog/FAQSection';

export const meta: BlogPostMeta = {
  slug: 'mostr-updates-july-2026',
  title: 'Mostr Bridge Updates: Reserve Your Nostr Username',
  excerpt:
    'Mostr, the Fediverse-Nostr bridge and #1 Nostr relay with 54.2K active users, now lets Nostr users reserve usernames and browse hot posts from across the bridge.',
  coverImage: '/assets/blog/mostr-updates-july-2026/ditto-mostr-feed.png',
  date: '2026-07-19',
  author: {
    name: 'Alex Gleason',
    picture: '/assets/avatars/alex.png',
  },
  ogImage: {
    url: '/assets/blog/mostr-updates-july-2026/ditto-mostr-feed.png',
  },
  featured: true,
  tags: [
    'mostr',
    'fediverse',
    'nostr',
    'activitypub',
    'mastodon',
    'bridge',
    'nip-05',
    'username',
    'reserve username',
    'decentralization',
    'soapbox',
    'cross-posting',
  ],
  keywords:
    'mostr, mostr bridge, mostr pub, reserve nostr username, claim username mostr, nostr fediverse bridge, activitypub nostr bridge, mastodon nostr bridge, nostr nip-05, mostr username, fediverse username, nostr vs fediverse',
  faq: [
    {
      question: 'What is the Mostr bridge?',
      answer:
        'Mostr is a bridge between Nostr and the Fediverse (Mastodon and other ActivityPub servers). Posts flow in both directions: Nostr users can follow and interact with Fediverse accounts, and Fediverse users can follow Nostr users. It was the first thing Soapbox ever built for Nostr, and today it serves 54.2K active users, making it the #1 Nostr relay and client.',
    },
    {
      question: 'How do I reserve my username on Mostr?',
      answer:
        'Go to mostr.pub/username and sign in with your Nostr keys, choose your name, and solve the puzzle captcha. Your account will then appear as @you@mostr.pub on the Fediverse, and the name doubles as a verified NIP-05 identifier (you@mostr.pub) in any Nostr client.',
    },
    {
      question: 'Why should I reserve a username instead of using my npub?',
      answer:
        'By default, Nostr users appear on the Fediverse with a long npub-based username that is hard to read and nearly impossible to mention. Reserving a name gives you a short, memorable handle that Fediverse users can actually type, plus a verified NIP-05 address on Nostr.',
    },
    {
      question: 'Can I change my reserved username later?',
      answer:
        'Yes. Renaming sends a Move notification to your Fediverse followers so they keep following you, and your old name stays reserved for you. You can rename once every 30 days.',
    },
    {
      question: 'Do Fediverse users need to reserve a name too?',
      answer:
        'No. Fediverse users already have usernames on their own servers, which the bridge uses automatically. Name reservation is specifically for Nostr users, who otherwise only have a public key.',
    },
    {
      question: 'Is Mostr open source?',
      answer:
        'Yes. The source code is hosted on GitLab at gitlab.com/soapbox-pub/mostr.',
    },
  ],
  howTo: {
    name: 'How to reserve your username on Mostr',
    description:
      'Claim a short, memorable username on the Mostr bridge so Fediverse users see @you@mostr.pub instead of a long npub.',
    totalTime: 'PT3M',
    steps: [
      {
        name: 'Go to the claim page',
        text: 'Open https://mostr.pub/username in your browser.',
      },
      {
        name: 'Sign in with your Nostr keys',
        text: 'Approve sign-in with your Nostr signer (such as a NIP-07 browser extension). No password or account is needed — the name is owned by your keys.',
      },
      {
        name: 'Choose your username',
        text: 'Type the name you want. It becomes @you@mostr.pub on the Fediverse and a verified you@mostr.pub NIP-05 identifier on Nostr.',
      },
      {
        name: 'Solve the puzzle captcha',
        text: "Complete the short puzzle to prove you're human and keep squatters out.",
      },
      {
        name: 'Start posting under your new name',
        text: 'Your Nostr posts now appear on the Fediverse under your reserved name. Add you@mostr.pub to your Nostr profile to show the verified checkmark in any client.',
      },
    ],
  },
};

export default function MostrUpdatesJuly2026() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        The Mostr bridge was the first thing Soapbox ever built for Nostr. To
        this day, it remains the{' '}
        <a
          href="https://stats.andotherstuff.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          #1 Nostr relay
        </a>{' '}
        and{' '}
        <a
          href="https://ditto.pub/client/Mostr"
          target="_blank"
          rel="noopener noreferrer"
        >
          #1 Nostr client
        </a>{' '}
        with <strong>54.2K active users</strong>. And this week it got two of
        its biggest updates yet.
      </p>

      <p>
        The Fediverse is many times larger than Nostr, so connecting the two
        networks greatly increases the reach of Nostr content. It's a huge part
        of what makes Nostr the best place on the decentralized web: there's no
        server lock-in like on the Fediverse, but you can still talk to all
        your friends there. (For a deeper dive, see our{' '}
        <a href="/blog/comparing-protocols">
          comparison of Nostr, the Fediverse, and Bluesky
        </a>
        .)
      </p>

      <p>
        Every post flowing across the bridge is just ordinary Nostr data, which
        means you can browse and discover it from any client. The{' '}
        <a
          href="https://ditto.pub/client/Mostr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mostr client page on Ditto
        </a>{' '}
        is a great place to watch it all happen live:
      </p>

      <figure>
        <img
          alt="Browsing the Mostr feed on Ditto: the Mostr client page showing 54.2K active users, a feed of posts bridged from the Fediverse, and hot posts trending across the bridge"
          src="/assets/blog/mostr-updates-july-2026/ditto-mostr-feed.png"
        />
        <figcaption>
          Browsing the Mostr feed on Ditto, with 54.2K active users over the
          last 30 days
        </figcaption>
      </figure>

      <h2>Reserve Your Nostr Username on the Fediverse</h2>

      <p>
        Until now, Nostr users appeared on the Fediverse under a long
        npub-based username: a wall of random characters that nobody could
        read, remember, or mention in a reply. Fediverse users had no good way
        to talk <em>to</em> you, only <em>at</em> you.
      </p>

      <p>
        That's fixed. <strong>Nostr users can now secure their name on the
        bridge</strong>, so Fediverse users see a clean, memorable handle
        instead of the long npub username. Claim <code>you</code> and your
        account shows up as <code>@you@mostr.pub</code> on Mastodon and every
        other ActivityPub server.
      </p>

      <p>A few things make this especially nice:</p>

      <ul>
        <li>
          <strong>Owned by your Nostr keys</strong> — no password, no account.
          You sign with the keys you already have.
        </li>
        <li>
          <strong>Works as a NIP-05 identifier</strong> — add{' '}
          <code>you@mostr.pub</code> to your Nostr profile and show the
          verified checkmark in any client.
        </li>
        <li>
          <strong>Renames move your followers</strong> — changing your name
          sends a Move to your Fediverse followers and keeps your old name
          reserved. You can rename once every 30 days.
        </li>
        <li>
          <strong>Squatter-resistant</strong> — claiming a name requires
          solving a short puzzle captcha, and role names like{' '}
          <code>admin</code> and <code>webmaster</code> are off-limits.
        </li>
      </ul>

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
              <p className="text-xs text-muted-foreground">July 18, 2026</p>
            </div>
          </div>
          <p className="text-sm text-foreground leading-relaxed">
            On mostr.pub you can claim a username now. Then your Nostr account
            will show up as &lt;username&gt;@mostr.pub on Mastadon.
          </p>
          <img
            src="/assets/blog/mostr-updates-july-2026/claim-username.png"
            alt="The Mostr claim your username page: become @you@mostr.pub on the Fediverse and a verified you@mostr.pub on Nostr, owned by your Nostr keys"
            className="rounded-lg border w-full"
          />
          <a
            href="https://ditto.pub/nevent1qgsqgc0uhmxycvm5gwvn944c7yfxnnxm0nyh8tt62zhrvtd3xkj8fhgqyp7px3qjyaqsxcutgxucljgh5tlpe4uem2kf5a5srcfwvkvujhjfkl8lerp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-azure hover:underline"
          >
            View post on Ditto &rarr;
          </a>
        </div>
      </div>

      <h2>Hot Posts From Across the Bridge</h2>

      <p>
        The second update turns{' '}
        <a href="https://mostr.pub" target="_blank" rel="noopener noreferrer">
          mostr.pub
        </a>{' '}
        itself into a window onto the wider network. The homepage now shows{' '}
        <strong>hot posts from across the bridge</strong>: real posts from the
        Fediverse, appearing on Nostr right now, with a "New" tab when you want
        the raw firehose instead.
      </p>

      <figure>
        <img
          alt="mostr.pub showing hot posts from across the bridge: real posts from the Fediverse appearing on Nostr, with Hot and New tabs"
          src="/assets/blog/mostr-updates-july-2026/mostr-hot-posts.png"
        />
        <figcaption>
          Hot posts from across the bridge, live on mostr.pub
        </figcaption>
      </figure>

      <p>
        It's the fastest way to answer the question every newcomer asks:{' '}
        <em>"so what actually crosses the bridge?"</em> Answer: everything from
        butterfly photography to Bitcoin Core debates to the European
        Commission's textile policy. Each post links out to its Nostr copy and
        its Fediverse original, so you can explore whichever side of the bridge
        you prefer.
      </p>

      <h2>Under the Hood: Faster, More Reliable Bridging</h2>

      <p>
        Alongside the headline features, the bridge itself got sturdier.
        Profile events (kind 0) are now cached in Postgres, which
        dramatically cuts relay lookups for the most-requested data on the
        bridge. When a relay fetch does fail, actors are served from the
        database instead of erroring out. And the full NIP-05 user list no
        longer ships a bulky relays object, saving bandwidth on every
        resolution.
      </p>

      <p>
        These changes build on this year's infrastructure work: the migration
        from SQLite to Postgres, and from Deno to Bun. Mostr has been running
        since 2023 and has processed hundreds of millions of requests. It just
        keeps getting better.
      </p>

      <h2>Reserve Your Username on Mostr Today</h2>

      <p>
        If you're on Nostr, your name is waiting. Good names are first-come,
        first-served, and the captcha only slows down the bots, not you.
      </p>

      <div className="not-prose my-10">
        <div className="rounded-xl border bg-gradient-to-br from-purple-500/10 via-azure/10 to-fuchsia-500/10 p-8 text-center space-y-4">
          <p className="text-2xl font-bold text-foreground">
            Become @you@mostr.pub
          </p>
          <p className="text-muted-foreground max-w-md mx-auto">
            Claim your name on the bridge and be a real person to 54.2K
            bridged users and the entire Fediverse.
          </p>
          <a
            href="https://mostr.pub/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-azure px-8 py-3 font-semibold text-white hover:bg-azure/90 transition-colors"
          >
            Reserve your username on Mostr today!
          </a>
        </div>
      </div>

      <FAQSection items={meta.faq ?? []} />

      <h2>Related Reading</h2>

      <ul>
        <li>
          <a href="/blog/mostr-fediverse-nostr-bridge">
            Introducing Mostr: a Fediverse Nostr Bridge
          </a>
        </li>
        <li>
          <a href="/blog/mostr-zaps">Zapping Across the Bridge</a>
        </li>
        <li>
          <a href="/blog/comparing-protocols">
            Nostr vs. Fediverse vs. Bluesky: A Comparison of Decentralized
            Social Protocols
          </a>
        </li>
        <li>
          <a href="/blog/what-is-the-fediverse">What is the Fediverse?</a>
        </li>
      </ul>
    </article>
  );
}
