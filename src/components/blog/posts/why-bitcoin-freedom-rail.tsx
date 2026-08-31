import type { BlogPostMeta } from '@/lib/blog/types';

export const meta: BlogPostMeta = {
  slug: 'why-bitcoin-freedom-rail',
  title: 'Why Bitcoin: The Base Layer of Freedom Tech',
  excerpt:
    "Two weeks in the Mediterranean, one question at every dinner table: why does a social media company need Bitcoin? The answer is about freedom, not price.",
  coverImage: '/assets/blog/why-bitcoin-freedom-rail/cover.jpg',
  date: '2026-09-01',
  author: {
    name: 'Derek Ross',
    picture: '/assets/avatars/derek.jpg',
  },
  ogImage: {
    url: '/assets/blog/why-bitcoin-freedom-rail/cover.jpg',
  },
  featured: false,
  tags: [
    'soapbox',
    'bitcoin',
    'nostr',
    'freedom tech',
    'agora',
    'human rights',
    'alex gladstein',
    'check your financial privilege',
    'financial censorship',
    'devrel',
  ],
  keywords:
    'why bitcoin, bitcoin human rights, check your financial privilege, alex gladstein, hrf, financial censorship, bitcoin activists, agora fundraising, freedom tech, bitcoin freedom rail, nigeria feminist coalition bitcoin, bysol bitcoin, bitcoin crowdfunding',
};

export default function WhyBitcoinFreedomRail() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        I just spent two weeks on a cruise ship in the Mediterranean with my
        wife, from Barcelona to Rome. Sicily, Athens, Santorini, Ephesus,
        Mykonos, Olympia along the way. If you've never done a cruise, here's
        the deal: you sit at dinner with strangers every night, and sooner or
        later the conversation lands on the same question.
      </p>

      <p>"So what do you do?"</p>

      <p>
        I build freedom tech on Nostr and Bitcoin. Say that at a dinner table
        of normal, nice people and you get the polite nod. It doesn't land
        anywhere they can grab onto, so eventually someone asks what that
        actually means.
      </p>

      <p>
        Say "I work in social media" and they perk up. They know that world.
        Are you an influencer? Do you work at one of the Big Tech companies?
        Those questions I can answer in one sentence.
      </p>

      <p>
        The Nostr and Bitcoin version takes longer. Nostr is usually new to
        everyone at the table, and Bitcoin comes with a lot of baggage. But I
        can count on where it ends up.
      </p>

      <p>
        At dinner, at a cruise ship bar, on a shore excursion, the question
        nobody could get past was the same: <em>why does a social media company
        need Bitcoin?</em>
      </p>

      <p>
        I want to answer that properly, because it's the right question. And
        the answer has nothing to do with price charts.
      </p>

      <h2>The example I kept reaching for</h2>

      <p>
        When people asked what we actually build, I stopped leading with the
        apps. I led with the people.
      </p>

      <p>
        At Soapbox we build{' '}
        <a
          href="https://agora.spot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agora
        </a>
        , a fundraising platform for{' '}
        <a
          href="/blog/gaza-families-bitcoin-crowdfunding-agora"
        >
          people who can't safely use GoFundMe
        </a>
        . GoFundMe isn't bad. The people who need Agora most just can't use it.
        We built it alongside Venezuelan opposition leaders and human rights
        defenders. The people who use it include activists in countries where
        the government freezes bank accounts the moment you organize. Where
        payment processors pull out rather than cross sanctions regimes. Where
        a fundraiser can be switched off from thousands of miles away by a
        company that has never heard your name.
      </p>

      <figure className="my-8">
        <img
          src="/assets/blog/why-bitcoin-freedom-rail/agora-athens.jpg"
          alt="The ancient Agora of Athens, Greece"
          loading="lazy"
          className="w-full rounded-lg"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          The ancient Agora of Athens. I took this photo on the trip. There
          are no coincidences.
        </figcaption>
      </figure>

      <p>
        For those people, Bitcoin was never a debate. What else is there?
      </p>

      <p>That's usually where the dinner table went quiet.</p>

      <h2>Check your financial privilege</h2>

      <p>
        The best thing I've ever read on this is Alex Gladstein's book{' '}
        <a
          href="https://store.bitcoinmagazine.com/products/check-your-financial-privilege"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Your Financial Privilege
        </a>
        , from the Human Rights Foundation. He opens by lining up the loudest
        critics. Charlie Munger called Bitcoin "disgusting." Warren Buffett
        called it "rat poison squared." Then comes the verdict: "They are
        wrong, and they are blinded mainly by their financial privilege."
      </p>

      <p>
        If you live in a country with a stable currency, functioning banks,
        property rights, and a government that mostly leaves your accounts
        alone, Bitcoin looks like a solution in search of a problem. A
        speculative toy. Weird internet money.
      </p>

      <p>But that's not most of the world.</p>

      <p>
        In the{' '}
        <a
          href="https://bitcoinmagazine.com/culture/check-your-financial-privilege"
          target="_blank"
          rel="noopener noreferrer"
        >
          essay that became the book
        </a>
        , Gladstein lays out the numbers:
      </p>

      <blockquote>
        <p>
          "only 13% of our planet's population is born into the dollar, euro,
          Japanese yen, British pound, Australian dollar, Canadian dollar or
          Swiss Franc. The other 87% are born into autocracy or considerably
          less trustworthy currencies. 4.3 billion people live under
          authoritarianism, and 1.2 billion people live under double- or
          triple-digit inflation."
        </p>
        <footer>
          - Alex Gladstein, Check Your Financial Privilege
        </footer>
      </blockquote>

      <ul>
        <li>
          <strong>Nigeria</strong>, where the Feminist Coalition was funding
          the EndSARS protests until the regime shuttered its bank accounts.
          "Bitcoin was the only option left," as Gladstein tells it. They spun
          up a BTCPay server, Jack Dorsey shared the link, and they raised
          more than 7 BTC. Frozen out of banking, still able to receive
          support, because nobody can freeze Bitcoin.
        </li>
        <li>
          <strong>Argentina</strong>, where inflation eats your savings every
          year and people have spent generations getting creative just to
          preserve value.
        </li>
        <li>
          <strong>Belarus</strong>, where the BYSOL solidarity fund (founded
          days into the 2020 protests) has paid millions of euros to workers
          fired for striking and organizing, much of it in Bitcoin, because it
          was the only rail the regime couldn't sever.
        </li>
        <li>
          <strong>Sudan, Cuba, Afghanistan, Venezuela</strong>, places where
          the banking system itself collapses, or the money does, or both.
        </li>
      </ul>

      <p>
        Gladstein's point, and{' '}
        <a href="https://hrf.org" target="_blank" rel="noopener noreferrer">
          HRF's
        </a>{' '}
        whole body of work on financial censorship, is that when we in the
        West say "I don't need Bitcoin," we're really saying "my money works
        for me." Congratulations. Seriously. But understand that you're in a
        minority. By population, the people whose money <em>works against
        them</em> vastly outnumber us. For them, in Gladstein's words,
        "Bitcoin is a protest, a lifeline and a way out."
      </p>

      <p>
        That's what I was explaining between the shrimp cocktail and the
        second wine pairing. I wasn't talking about number go up. I was
        talking about money that can't be turned off.
      </p>

      <h2>Why Bitcoin specifically</h2>

      <p>
        People would counter, reasonably, with "fine, but why <em>Bitcoin</em>?
        Why not Venmo, or a bank wire, or one of the ten thousand other
        coins?"
      </p>

      <p>
        Because Bitcoin is the only option with the properties the job
        requires, all at once:
      </p>

      <p>
        <strong>No issuer.</strong> Nobody prints it, nobody administers it,
        nobody can be pressured, bought, or legislated into turning off your
        money. There is no customer service number, and that's a feature.
        There's also no compliance department that can suspend you.
      </p>

      <p>
        <strong>Censorship resistance at the protocol level.</strong> A
        Bitcoin transaction doesn't ask permission. It doesn't check your
        politics, your sanction list, your flag. It just settles. That's how
        the system is built.
      </p>

      <p>
        <strong>Open to anyone, 24/7, without an application.</strong> No KYC
        gate you can fail, no branch you have to visit, no minimum balance. A
        human rights lawyer and a dictator use the same network under the same
        rules.
      </p>

      <p>
        <strong>Actually mature.</strong> Seventeen years without the ledger
        being rolled back or the network being shut down. For people risking
        their freedom, "it usually works" isn't good enough.
      </p>

      <p>
        I'll be honest about where I stand: most of the crypto landscape
        outside Bitcoin is a casino. Gambling degens, scammers, charlatans,
        and VCs pumping their own bags. Monero is the one exception I'll
        grant. Its privacy is real, and it's genuinely useful for people who
        need it. But when the audience is an activist whose opponent is a
        nation-state, you bet on the boring, battle-tested, most-secure
        network on earth.
      </p>

      <h2>The rails under the freedom tech stack</h2>

      <p>Here's how I explained our stack on the ship, and how I'll explain it here.</p>

      <p>
        Freedom tech is the idea that the important layers of your digital
        life shouldn't depend on a company that can be pressured:
      </p>

      <ul>
        <li>
          <strong>Sovereign communication: Nostr.</strong> Your identity is
          your keys. No algorithm between you and your audience, no server
          that can delete your account.
        </li>
        <li>
          <strong>Sovereign intelligence:</strong> open AI tooling you run and
          configure yourself, that doesn't report your questions to a platform.
        </li>
        <li>
          <strong>Sovereign money: Bitcoin.</strong> The base layer. When the
          banks close, it's what keeps the other two alive.
        </li>
      </ul>

      <p>
        Each layer needs the others. Nostr without Bitcoin is speech with no
        way to fund it. Bitcoin without Nostr is money with no way to organize
        around it. That's why a "social media company" uses Bitcoin
        infrastructure: speech and money are the same fight. The moment either
        one has a kill switch, both are conditional.
      </p>

      <p>
        The last stop on the trip was Rome, so I saw the Roman version too:
        the Forum. The Greeks had the agora, the Romans had the Forum. Two
        empires, same instinct: a civilization needs a public square, a place
        where citizens show up and speak. Ours lives on company servers now,
        and we've seen how that goes. Nostr is the new square. Bitcoin is
        what keeps it standing when the pressure comes.
      </p>

      <figure className="my-8">
        <img
          src="/assets/blog/why-bitcoin-freedom-rail/roman-forum.jpg"
          alt="The Roman Forum in Rome, Italy"
          loading="lazy"
          className="w-full rounded-lg"
        />
        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
          The Roman Forum. Rome's agora. Every civilization builds a public
          square.
        </figcaption>
      </figure>

      <h2>What that looks like in practice</h2>

      <p>
        Concretely, Agora fundraises in Bitcoin, on-chain, with Taproot and
        Silent Payments. No custodian holding the money. No platform fees
        shaving the top. A donor in one country can support a campaign in
        another, and 100% of it arrives. The campaign can't be chargebacked
        into oblivion or deplatformed by a payment processor that got a
        complaint.
      </p>

      <p>
        When we{' '}
        <a href="/blog/agora-is-live">relaunched Agora at the Oslo Freedom
        Forum</a>
        , campaigners put up more than 60 campaigns in the first days and
        moved thousands of dollars directly to recipients. Peer to peer,
        permissionless, from strangers who wanted to help. No intermediary
        said yes or no. That's the product.
      </p>

      <h2>The honest part</h2>

      <p>
        I'm not going to pretend the objections at those dinner tables were
        dumb. They weren't.
      </p>

      <p>
        Self-custody is genuinely hard. Responsibility you can't outsource is
        the cost of money nobody can freeze, and it's a real cost, especially
        for people under stress. The price is volatile, and for someone living
        hand-to-mouth, that matters. And the ecosystem has more than its share
        of scammers circling the honest core; you have to know how to tell
        them apart, which is a skill most people shouldn't need.
      </p>

      <p>
        But here's what I kept coming back to: every one of those problems is
        a hard problem. The alternative, money that a government or company
        can switch off, was never a problem for the people at my dinner
        tables. It's a catastrophe for the people Agora exists for. When your
        options are "volatile" or "frozen," you learn to love volatility.
      </p>

      <p>
        The tools will keep getting easier. Wallets improve every year. But
        the foundation doesn't change: money that can't be turned off, for
        people who already had everything else turned off.
      </p>

      <h2>Why we choose this</h2>

      <p>
        So when someone on a ship in the Aegean asks why our company, a
        social media company (really a freedom technology company, but
        everything we build is social communication, or facilitates it, so
        that's the part that fits in a dinner conversation), runs its own
        Bitcoin nodes and builds on-chain fundraising, the answer is the
        mission: technology that increases human autonomy. And I mean that
        concretely: an activist in an
        authoritarian country can feed their family and fund their work if the
        banks close tomorrow.
      </p>

      <p>That's the point.</p>

      <p>
        If that resonates, go read Check Your Financial Privilege and take
        its challenge: "It's time to check your financial privilege." Read
        the{' '}
        <a
          href="https://hrf.org/blogs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Human Rights Foundation's blog
        </a>
        . And look at what{' '}
        <a href="/blog/venezuela-earthquake-relief-bitcoin">campaigners are
        doing on Agora</a>
        , real people, real causes, money that arrives.
      </p>

      <p>
        The internet made speech free. Bitcoin made money free. We're just
        building the tools where those two meet.
      </p>
    </article>
  );
}
