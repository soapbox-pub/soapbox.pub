import type { BlogPostMeta } from '@/lib/blog/types';

export const meta: BlogPostMeta = {
  slug: 'onchain-zaps-in-ditto',
  title: 'Onchain Zaps in Ditto: Bitcoin Tipping Without Lightning',
  excerpt:
    "Ditto 2.12 ships an onchain Bitcoin wallet that uses Nostr keys as Bitcoin addresses. No Lightning, no setup — send Bitcoin tips to any Nostr user, immediately.",
  coverImage: '/assets/blog/onchain-zaps-in-ditto/cover.jpg',
  date: '2026-05-25',
  author: {
    name: 'Alex Gleason',
    picture: '/assets/avatars/alex.png',
  },
  ogImage: {
    url: '/assets/blog/onchain-zaps-in-ditto/cover.jpg',
  },
  tags: [
    'ditto',
    'nostr',
    'bitcoin',
    'onchain zaps',
    'zaps',
    'lightning',
    'silent payments',
    'nostr wallet',
    'bitcoin tipping',
    'amethyst',
  ],
  keywords:
    'onchain zaps, onchain zaps ditto, bitcoin zaps on nostr, nostr bitcoin wallet, nostr keys as bitcoin addresses, ditto wallet, ditto 2.12, bitcoin tipping nostr, lightning vs onchain bitcoin, silent payments nostr, nip-sp, nostr without lightning, send bitcoin on nostr, amethyst onchain zaps',
  faq: [
    {
      question: 'What are onchain zaps?',
      answer:
        "Onchain zaps are Bitcoin tips sent directly to a user's Nostr public key, which is also a valid Bitcoin address. Unlike traditional zaps, they don't use the Lightning Network — they settle on the Bitcoin base layer. Senders and receivers need no additional setup; any Nostr user can receive one immediately.",
    },
    {
      question: 'Which Ditto version shipped onchain zaps?',
      answer:
        'Onchain zaps shipped in Ditto 2.12. Amethyst, a popular Android Nostr client, added the same feature within 24 hours of Ditto.',
    },
    {
      question: 'Are onchain zap fees too high?',
      answer:
        "No. Bitcoin's base layer is uncongested compared to 2017, and on-chain fees have been roughly $0.24 per transaction. That's fine when you're sending real value — $1, $5, $100 — instead of $0.02 likes that are uneconomic to spend anyway.",
    },
    {
      question: 'What about privacy? Isn\u2019t Bitcoin a public ledger?',
      answer:
        "Yes. Bitcoin is a public ledger, and onchain zaps link payments to Nostr identities. For most users this is fine; for users who need strong privacy, Silent Payments are being explored as an opt-in alternative. But public, unstoppable payments are what most people actually need, and the public ledger is part of why Bitcoin works at all.",
    },
    {
      question: 'What are Silent Payments and how do they fit in?',
      answer:
        "Silent Payments are a Bitcoin technique that makes onchain payments more private, similar to how Monero works, without changing the Bitcoin protocol. Tim Bouma discovered that a silent payment address can be derived directly from a Nostr public key, making them a possible drop-in alternative to onchain zaps. They are slower to receive — your wallet must scan the chain — but no recipient setup is required. Ditto may offer them as an option in the future, alongside public onchain zaps.",
    },
  ],
};

export default function OnchainZapsInDitto() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        Bitcoin needs a hero. As the great clown Mark Cuban said: Bitcoin has{' '}
        <em>"lost the plot."</em>
      </p>

      <h2>The Plot</h2>

      <figure>
        <img
          alt="Bitcoin's open pasture &mdash; a pirate flag flying over an uncongested digital landscape, symbolizing Bitcoin returning to its freedom-money roots"
          src="/assets/blog/onchain-zaps-in-ditto/section-plot.jpg"
        />
      </figure>

      <p>
        Bitcoin is freedom money. It's Open Source money. It's magical
        Internet money.
      </p>

      <p>Mark Cuban only cares about money. I care about the world.</p>

      <p>
        This year, a great thing happened to Bitcoin:{' '}
        <a
          href="https://cointelegraph.com/news/square-begins-auto-enabling-bitcoin-payments-for-eligible-us-sellers-exec-says"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>"Square Rolls Out Auto-Enabled Bitcoin Payments for US Sellers"</em>
        </a>
      </p>

      <p>Bitcoin is ready for the world. But is the world ready for Bitcoin?</p>

      <h2>Nostr</h2>

      <figure>
        <img
          alt="Nostr as a black hole &mdash; a cryptographic void waiting to be filled, surrounded by Bitcoin keys swirling into orbit"
          src="/assets/blog/onchain-zaps-in-ditto/section-nostr.jpg"
        />
      </figure>

      <p>
        Nostr is Bitcoin Twitter's social network. Except that Bitcoin Twitter
        is on Twitter instead of Nostr. Nostr is something else &mdash; a
        black hole. A void waiting to be filled.
      </p>

      <p>
        Nostr was created by Bitcoin developers. It uses Bitcoin keys for its
        addresses. The promise was that Nostr would let people send each other
        Bitcoin across a decentralized social network.
      </p>

      <p>
        Its keys are Bitcoin addresses. But ignore that. Nostr uses Lightning,
        not Bitcoin. Well, Lightning is a type of Bitcoin. Lightning was
        created out of fear and anxiety caused by the "bull run of 2017", a
        great reckoning in which too much buying and selling Bitcoin congested
        the network.
      </p>

      <p>
        For 3 years Lightning is the ONLY way people have been transacting on
        Nostr. And yet, "I can't zap you" is probably the top phrase repeated
        on Nostr. People have tried very hard to make it better, and the only
        ones who succeeded did so by making Bitcoin LESS free, LESS Open
        Source, and LESS magical.
      </p>

      <p>
        The "regular Bitcoin" UX is actually fantastic. It's a little weird,
        but it asks very little of you and grants you immense freedom. Most
        importantly, it WORKS. Bitcoin makes me feel like a pirate, and
        Lightning makes me feel like an accountant.
      </p>

      <p>Are you a pirate or an accountant?</p>

      <figure>
        <img
          alt="Pirate versus accountant &mdash; Bitcoin's freedom-money UX (a pirate with a treasure chest) contrasted with Lightning's tedious bookkeeping (an accountant buried in spreadsheets)"
          src="/assets/blog/onchain-zaps-in-ditto/section-pirate-vs-accountant.jpg"
        />
      </figure>

      <h2>The Reckoning</h2>

      <p>
        2017 was a long time ago. It's time for Bitcoin boomers to wake up.
        The network is uncongested as ever &mdash; an open pasture. Is the
        world ready for Bitcoin?
      </p>

      <p>
        Since I first read NIP-01 (Nostr's equivalent of a whitepaper) I have
        been thinking about the fact that Nostr keys are Bitcoin addresses.
        It's the first thing anyone thought when they read NIP-01.
      </p>

      <p>
        For years I dreamed of sending Bitcoin directly between Nostr
        addresses while the network struggled with Lightning. "The fees will
        be too high" they told me. "It would never work."
      </p>

      <h2>Onchain Zaps in Ditto</h2>

      <figure>
        <img
          alt="Ditto 2.12 wallet sending Bitcoin directly between Nostr addresses &mdash; an onchain zap flowing from one cryptographic identity to another, no Lightning required"
          src="/assets/blog/onchain-zaps-in-ditto/section-onchain-zaps.jpg"
        />
      </figure>

      <p>
        Starting in Ditto 2.12 we shipped a wallet that lets you transfer
        Bitcoin into your Nostr address. Since it uses Nostr keys directly as
        Bitcoin addresses, it requires no additional setup for senders OR
        receivers. Whether they're ready or not, you can already send money
        to anyone on the network!
      </p>

      <p>
        The Nostr protocol has evolved to become the thing it always was, and
        was always meant to be: cryptographic money transferred through
        cryptographic identities.
      </p>

      <p>
        On the first day I sent $100 to a handful of prominent Nostr
        developers each, including Vitor Pamplona, creator of Nostr's top
        Android client Amethyst. He chimed back that it was a good idea, and
        no less than 24 hours later Amethyst got the feature as well, bringing
        "regular Bitcoin" tipping to thousands of Nostr users.
      </p>

      <p>
        That day I gave out around $2,000 worth of Bitcoin to people. It feels
        good to give to people. There were no barriers stopping me from
        giving; no barriers stopping them from receiving.
      </p>

      <p>
        I want to give more to people. I want to give as much as I possibly
        can. I want people to support each other and create an environment of
        teamwork and coordination.
      </p>

      <p>
        Bitcoin is achieving that right now. Not Lightning. Bitcoin is the
        superior UX. I don't want to use Lightning unless I absolutely have
        to. If I have to, I will. But it's wrong to onboard people to it as
        their first experience with Bitcoin. It's not the same.
      </p>

      <h2>The Backlash</h2>

      <figure>
        <img
          alt="The backlash against onchain zaps &mdash; a storm of angry comments and accusations swirling around a steady Bitcoin signal"
          src="/assets/blog/onchain-zaps-in-ditto/section-backlash.jpg"
        />
      </figure>

      <p>
        Upon Amethyst releasing the feature, there was a great backlash, to
        me, to Vitor, and to the whole idea. They called us idiots. They
        continued to deny it could work as it worked before their very eyes.
        They talked in circles and shifted tactics.
      </p>

      <p>
        For days we argued about fees. It was costing $0.24 to send a
        transaction. For most of its life the average Nostr transaction was
        about $0.02. But now I was sending people $1, $5, $100. They were
        missing the point. It mattered to send $0.02 when we still thought
        Nostr could overtake Twitter, and thousands of likes could translate
        into potentially real money. Now it's clear that's not happening, yet
        Nostr is still stuck in that expired mentality. $0.02 in Lightning is
        not actually useful to people &mdash; it costs more to get it out, and
        is almost impossible to convert it into "real money" anyway. To be
        useful, we need to start sending real value that people can actually
        use.
      </p>

      <p>
        Once the fee debates died down, people shifted to privacy. They made
        dramatic accusations, like "there's blood on your hands."
      </p>

      <p>
        Bitcoin is a public ledger. Linking your social media profile to
        transactions made some people very uncomfortable. But nobody was
        forcing them to use it. "Yes you are" they'd say, since their Nostr
        address is a Bitcoin address, and anyone can send money to it, and
        they can't stop it. Well I'm sorry to the people who are disappointed
        by the design of Nostr. What we did was so obvious and natural, and
        the protocol was clearly designed to allow it from the beginning.
      </p>

      <p>
        Still, people made other points, like that it was a form of "address
        reuse", so it didn't follow Bitcoin best practices. Satoshi had even
        mentioned using different addresses for each transaction in the
        whitepaper.
      </p>

      <p>
        Yet Nostr itself is also a form of "address reuse". Each identity has
        only 1 key &mdash; it's like that by design. It's no worse than
        Ethereum, who also has 1 key, and laughs at us from its mountain of
        dApps. Stablecoins like USDT are being used as a primary form of
        currency in Venezuela where privacy is a luxury.
      </p>

      <p>
        Probably the most compelling case for Bitcoin privacy is that donors
        to Alexei Navalny's Bitcoin address are{' '}
        <a
          href="https://en.zona.media/article/2026/04/21/acf_donations"
          target="_blank"
          rel="noopener noreferrer"
        >
          still being prosecuted
        </a>{' '}
        today.
      </p>

      <h2>Silent Payments</h2>

      <figure>
        <img
          alt="Silent Payments on Nostr &mdash; cryptographic stealth addresses derived from a Nostr public key, transactions vanishing into the chain like whispers"
          src="/assets/blog/onchain-zaps-in-ditto/section-silent-payments.jpg"
        />
      </figure>

      <p>
        Most people won't be targeted, so I am truly not worried about the
        LARPers on Nostr. But what about the ones who are?
      </p>

      <p>
        Other blockchains like Monero have completely fixed the privacy
        problem, but all of the money is in Bitcoin. So people are trying to
        force Bitcoin into having all the features they want, like privacy,
        because the money is already there.
      </p>

      <p>
        The developers of Samurai Wallet were jailed for trying to add privacy
        on top of Bitcoin through their whirlpool service which they profited
        from. They were acused of unlicensed money transmitting and money
        laundering.
      </p>

      <p>
        A new solution has been proposed: Silent Payments. Silent Payments are
        a neat cryptographic trick that requires no changes to Bitcoin itself,
        yet makes Bitcoin work more similarly to Monero. First introduced in
        2023, Silent Payments have not been widely adopted by wallets.
      </p>

      <p>
        The Nostr community jumped into action. A group was formed between me,
        hzrd, Vitor, and Tim Bouma.
      </p>

      <p>
        hzrd forked Ditto and built a complete implementation of Silent
        Payments into Ditto's wallet. hzrd also authored{' '}
        <a
          href="https://nostrhub.io/naddr1qvzqqqrcvypzqfngzhsvjggdlgeycm96x4emzjlwf8dyyzdfg4hefp89zpkdgz99qy28wumn8ghj7un9d3shjtnyv9kh2uewd9hsqpjwf9gz656seqszmx"
          target="_blank"
          rel="noopener noreferrer"
        >
          NIP-SP
        </a>
        , a proposed standard for silent payments on Nostr. hzrd's proposal
        required the recipient to publish an event before they could receive,
        though, meaning it couldn't work as a "drop-in" replacement for what
        onchain zaps are trying to do.
      </p>

      <p>
        Vitor tried a few prompts, also authored a spec (that was very similar
        to hzrd's), and then quickly came to the same conclusion as me that
        this was not worth pursuing as a real alternative to onchain zaps.
      </p>

      <p>But hzrd and Tim Bouma continued hacking away. Then, Tim Bouma made a major breakthrough.</p>

      <p>
        Tim discovered that it was possible to derive a silent payment address{' '}
        <a
          href="https://gist.github.com/trbouma/77648ebe1005b181b67d1c4b42c7f31d"
          target="_blank"
          rel="noopener noreferrer"
        >
          directly from a Nostr public key
        </a>
        . Compared to hzrd's proposal, which required people to set up their
        wallet before they could receive, Tim's version could send to anyone.
        This breakthrough made no major compromises compared to "onchain zaps".
      </p>

      <p>
        Tim and hzrd deserve a lot of credit for their perserverance here. I
        don't think people appreciate the gravity of this discovery yet.
      </p>

      <p>
        Then I started implementing silent payment support in my projects. I
        upgraded Ditto to send silent payments for testing. I upgraded Ditto
        Extension to send it as well. Now I am building a silent payments
        wallet from the ground up for an upcoming project.
      </p>

      <h2>Tradeoffs</h2>

      <figure>
        <img
          alt="Tradeoffs of Silent Payments &mdash; a balance scale weighing privacy against the slow blockchain scan required to receive payments"
          src="/assets/blog/onchain-zaps-in-ditto/section-tradeoffs.jpg"
        />
      </figure>

      <p>
        The biggest barrier to Silent Payments is adoption by wallets. Most
        Bitcoin software cannot send or receive them. But that's not the only
        thing holding it back.
      </p>

      <p>
        Silent Payments are slow to receive. Your wallet has to scan the
        blockchain to find them. The payments cannot be indexed by public
        scanners &mdash; that's the very point. It's similar to how Monero
        works. So as the receiver, your UX is degraded when people send you a
        silent payment. But if privacy matters more, then this is the
        experience you should prefer.
      </p>

      <p>
        So it's not a magic silver bullet. It's an option for when extreme
        privacy is needed. The fact is, on a decentralized social network,
        public works better. This is not an opinion but a law of nature. In
        public other people can help you before you even ask. In private, by
        default you are alone.
      </p>

      <h2>The Case for Public</h2>

      <figure>
        <img
          alt="The case for a public ledger &mdash; Bitcoin transactions illuminated by sunlight in an open town square, citizens watching and participating openly"
          src="/assets/blog/onchain-zaps-in-ditto/section-case-for-public.jpg"
        />
      </figure>

      <p>
        Bitcoin's design as a public ledger in many ways contributed to its
        success.
      </p>

      <p>
        It promotes virality, triggers important discussions, and the "above
        ground" nature of it lends it legitimacy and credibility, legal
        protection, scale, democratic participation, and sustainability.
      </p>

      <p>The public ledger is what makes Bitcoin "just work".</p>

      <p>
        See also:{' '}
        <a
          href="https://simplygaby.substack.com/p/careful-caesar-the-citizens-are-watching"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Careful, Caesar. The Citizens are watching.</em>
        </a>
      </p>

      <p>
        The biggest privacy freaks tend to be the most affluent and wealthy.
        This makes sense, but should their opinion matter more than actual
        dissidents? People who have no privacy because every system around
        them is already compromised. When privacy is a luxury, unstoppable
        funding is what people need most.
      </p>

      <p>
        The most unstoppable funding is Bitcoin in its purest and simplest
        form: a static address. If not for the static address, would anyone
        have been able to donate to Alexei Navalny in the first place?
      </p>

      <p>
        Most dissidents are captured through legacy systems, because they
        already have no privacy. Forcing Bitcoin into a privacy shape detracts
        from its usage as unstoppable money. The solutions create too many
        barriers, because it's simply not what Bitcoin is.
      </p>

      <p>
        What matters most is that people can get the money. Is Bitcoin
        UNSTOPPABLE or is it STOPPABLE? If people can't get the money, then
        Bitcoin has lost the plot.
      </p>

      <h2>Self-Hatred</h2>

      <figure>
        <img
          alt="Bitcoin maximalist self-hatred &mdash; a figure wrapping Bitcoin in chains and ceremonial rules, suppressing its native simplicity"
          src="/assets/blog/onchain-zaps-in-ditto/section-self-hatred.jpg"
        />
      </figure>

      <p>
        Something I've learned through this is that Bitcoin's biggest fans
        despise its design on the most basic level. There is a religious
        fervor around the "right way" to use it, while its basic functionality
        is considered forbidden.
      </p>

      <p>
        I believe Bitcoin developed this fanaticism as a defense mechanism
        against things they percieve as "problems" about Bitcoin that they
        know cannot be "fixed" on a technical level. So it must be socially
        enforced. This is why I have touched a nerve.
      </p>

      <p>
        I for one accept Bitcoin for what it is. A tool for unstoppable money.
        Not infinite privacy.
      </p>

      <h2>Unstoppable Money</h2>

      <figure>
        <img
          alt="Unstoppable money &mdash; Bitcoin flowing freely across borders, breaking through barriers and reaching the people who need it most"
          src="/assets/blog/onchain-zaps-in-ditto/section-unstoppable-money.jpg"
        />
      </figure>

      <p>
        Silent Payments are an option for the future. They are not a
        replacement, and they never will be. Ditto will offer them where they
        make sense, but the heart of Ditto is the public ledger &mdash; the
        same public ledger that let strangers donate to Alexei Navalny, the
        same public ledger that made Bitcoin legitimate, the same public
        ledger Mark Cuban thinks Bitcoin has outgrown.
      </p>

      <p>
        Bitcoin hasn't outgrown anything. Its loudest fans have. They built a
        religion around the parts of Bitcoin they don't trust, and they call
        anyone who uses it as designed an idiot. They are the barrier. Not
        the fees, not the chain, not the world &mdash; Bitcoin's own people.
      </p>

      <p>
        I gave away $2,000 in a weekend with no Lightning channels, no LNURL
        servers, no invite codes, no anxiety. People I had never spoken to
        received it instantly. Nobody had to ask permission. Nobody had to
        set anything up. That is what Bitcoin was supposed to be, and that
        is what Bitcoin already is, the moment you stop apologizing for it.
      </p>

      <p>
        The pirate doesn't ask. The accountant asks. Square is ready. The
        world is ready. Bitcoin is ready. The only thing left is for
        Bitcoiners to be ready.
      </p>

      <p>
        We have created too many barriers. Now is the time to remove
        barriers. UNSTOPPABLE MONEY is the plot.
      </p>

      <h2>Related Reading</h2>

      <ul>
        <li>
          <a href="/blog/zapping-101">Zapping 101: How to Send (and Receive) Bitcoin Tips on Nostr</a>
        </li>
        <li>
          <a href="/blog/announcing-ditto-2">
            Soapbox Launches Massive Update to Ditto
          </a>
        </li>
        <li>
          <a href="/blog/ditto-bitcoin-vegas-2026">Ditto at Bitcoin Vegas 2026</a>
        </li>
        <li>
          <a href="/blog/mostr-zaps">Mostr Zaps</a>
        </li>
      </ul>
    </article>
  );
}
