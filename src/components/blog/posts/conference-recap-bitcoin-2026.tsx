import type { BlogPostMeta } from '@/lib/blog/types';

export const meta: BlogPostMeta = {
  slug: 'conference-recap-bitcoin-2026',
  title: 'Soapbox at Bitcoin 2026: Nostr Became Infrastructure',
  excerpt:
    'How Bitcoin Conference Week 2026 played out for Soapbox: five panels, NosVegas 2.0, V4V music payouts, and Nostr finally landing as infrastructure.',
  coverImage: '/assets/blog/conference-recap-bitcoin-2026/bitcoin-2026-hero.jpg',
  date: '2026-05-04',
  author: {
    name: 'Derek Ross',
    picture: '/assets/avatars/derek.jpg',
  },
  ogImage: {
    url: '/assets/blog/conference-recap-bitcoin-2026/bitcoin-2026-hero.jpg',
  },
  tags: ['Bitcoin', 'Nostr', 'Soapbox', 'Ditto', 'Shakespeare', 'Agora', 'NosVegas', 'Bitcoin 2026'],
  keywords:
    'bitcoin conference 2026 recap, nosvegas 2026, nostr at bitcoin 2026, soapbox bitcoin vegas, value for value music, v4v music nostr, bitcoin nostr ai freedom tech, shakespeare ai builder nostr, agora venezuelan activists nostr, HRF freedom tech bitcoin 2026, protocol vs platform nostr, nostr git nip-34',
  featured: false,
};

export default function ConferenceRecapBitcoin2026() {
  return (
    <article className="prose prose-lg max-w-none">
      <p>
        Every year, Bitcoin Conference Week gets bigger. This year, something
        shifted. Nostr wasn't a side-quest anymore — it was in the room, on the
        stages, and in the conversations happening between every panel. Freedom
        tech finally moved from niche pitch to accepted premise, and Soapbox was
        in the middle of it all week long.
      </p>

      <p>
        I walked into Vegas on Sunday with a packed calendar: five panels, a
        hosted moderator slot, a headline talk at NosVegas, and a week of
        back-to-back meetings with builders, press, funders, and founders across
        the ecosystem. Here's how it played out — and why I believe the
        marketing budget we put into this week paid back many times over.
      </p>

      <h2>Nostr Wasn't a Sidebar — It Was Infrastructure</h2>

      <p>
        Before I walk through the week day by day, this needs its own section.
        The most underappreciated story of Bitcoin 2026 is that the conference
        itself, in meaningful ways, ran on Nostr. Not as a sponsor mention. Not
        as a booth. As working infrastructure — imperfect, partial, and clearly
        still in its early innings, but undeniably working.
      </p>

      <p>
        <strong>The conference had a Nostr-native photo-sharing app.</strong>{' '}
        The organizers stood up a{' '}
        <a
          href="https://2026.b.tc/share"
          target="_blank"
          rel="noopener noreferrer"
        >
          dedicated photo-sharing app
        </a>{' '}
        that posted images to Nostr with specific event hashtags. Those photos were then pulled
        into displays used on and around panels throughout the conference. Not
        every photo was a Nostr photo and not every screen was pulling from
        Nostr — but the pipeline existed, it was official, and it worked. That's
        Nostr as a real content pipeline for a major Bitcoin conference, not a
        proof of concept.
      </p>

      <p>
        <strong>Speakers were zapped live on the Open Source Stage.</strong> The
        conference team emailed every Open Source Stage speaker ahead of time
        with instructions to set up a Nostr profile and create a Nostr event for
        their talk. During sessions, two large TVs on stage displayed QR codes
        powered by{' '}
        <a
          href="https://pubpay.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          PubPay
        </a>
        . Live in-person viewers could scan, zap, and watch
        the leaderboard update in real time. This is the same setup we ran at
        NosVegas, and seeing it adopted on a main conference stage this year is
        a real milestone. The speakers who participated left the stage with
        actual sats. Attendees got a real-time signal of which talks were
        landing. The feedback loop was tight, visible, and working.
      </p>

      <figure className="not-prose my-8">
        <img
          src="/assets/blog/conference-recap-bitcoin-2026/derek-zap-open-source.jpg"
          alt="The Open Source Stage TVs showing a live PubPay zap leaderboard with Derek Ross's note 'Ditto.pub has themes!' next to the upcoming 'Verifiable Smart Contracts with Simplicity' panel"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          Live zap leaderboard on the Open Source Stage, powered by PubPay.
        </figcaption>
      </figure>

      <p>
        Not every speaker participated. Some didn't have a Nostr profile. Some
        didn't want to set one up for a single talk. Some just didn't want to
        bother. And honestly, that's fine. That's not a problem; that's{' '}
        <em>headroom</em>. It means there's still a huge cohort of Bitcoin
        speakers and developers who haven't onboarded yet, and every future
        conference is an opportunity to close that gap. The ones who{' '}
        <em>did</em> participate proved the model works. The ones who didn't are
        the next wave of purple-pilling. Growth loops like this take a few
        cycles to reach saturation, and we're clearly at the start of that curve
        — not the end.
      </p>

      <p>
        <strong>The Open Source Stage was livestreamed — on Nostr only.</strong>{' '}
        This is the one that really tells you where things are going. The
        conference didn't run an official livestream for the Open Source Stage,
        but a Nostrich in good standing,{' '}
        <a
          href="https://ditto.pub/reverendhodl@nostrplebs.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Reverend Hodl</strong>
        </a>
        , was
        allowed to use the same streaming equipment he ran at NosVegas to
        broadcast the stage live to Nostr for anyone who wanted to watch. It
        was unofficial. It wasn't conference-branded. Not every talk was
        necessarily captured, and it wasn't promoted alongside the main
        conference channels — but it was <em>sanctioned</em>. An "approved
        pirate stream" is a very Bitcoin-conference way to say{' '}
        <em>"Nostr is ready for this, even if our marketing team isn't."</em>{' '}
        With any luck, next year it won't be unofficial — next year it could
        be the stream.
      </p>

      <p>
        Put the three together and you have a clear signal: photo sharing, live
        payments, and live broadcasting — three of the core functions of any
        modern event — all running in production on Nostr infrastructure at
        the biggest Bitcoin event of the year. Not all of it. Not universally.
        Not perfectly. But <em>real</em> — and growing. Nostr didn't show up to
        Bitcoin 2026 as a guest. It showed up as plumbing. And every conference
        from here out is going to use more of it, not less.
      </p>

      <h2>Sunday: Setting the Tone at the HRF Reception</h2>

      <p>
        The week kicked off on Sunday evening at the Human Rights Foundation's
        reception for freedom builders. The room was dense with the kind of
        people who actually ship — activists, engineers, funders, and founders
        from across Bitcoin and Nostr. I spent most of the evening talking
        about <strong>Agora</strong> and{' '}
        <a
          href="https://shakespeare.diy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Shakespeare</strong>
        </a>
        .
        Shakespeare is our AI web builder, and it's the tool we used at HRF's
        AI Hack for Freedom earlier this year to build Agora in a single
        weekend. One product enabled the other — and both came up in nearly
        every conversation I had in that room.
      </p>

      <p>
        Two conversations stood out. The first was with{' '}
        <strong>Eric Yakes</strong>, author of <em>The 7th Property</em> and
        founder of Epoch. Eric walked away from private equity to join the
        Bitcoin revolution full-time, and now spends his time writing and
        investing in the future of the Bitcoin-native financial system. His
        framing of Bitcoin as a new property class — and what a Bitcoin-native
        capital stack looks like — maps cleanly onto the Nostr thesis. If you
        believe capital can be sovereign, the same has to be true for identity,
        communication, and the data layer underneath both. That's exactly the
        kind of Bitcoiner who's one short conversation away from being a Nostr
        evangelist.
      </p>

      <p>
        The second was with{' '}
        <a
          href="https://ditto.pub/calle@cashu.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Calle</strong>
        </a>
        , a PhD physicist, Bitcoin
        developer, and maintainer of the{' '}
        <a
          href="https://cashu.space/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Cashu</strong>
        </a>{' '}
        open-source protocol. Calle has one of the clearest articulations of the
        freedom-tech mission out there:{' '}
        <em>
          civilization in the information age can only be saved if we defend
          the freedom and privacy of individuals on the internet
        </em>
        . Calle is also a member of{' '}
        <a
          href="https://andotherstuff.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>AOS (And Other Stuff)</strong>
        </a>{' '}
        —
        the same collective Soapbox belongs to — which means we share a fiscal
        sponsor, a philosophy, and a mission. That shared ground made the
        conversation land differently. We're not building adjacent to each
        other; we're building together. The Bitcoin community and the Nostr
        community aren't two communities. They're one community that hasn't
        fully noticed yet.
      </p>

      <p>
        The conversations were the kind you can't buy: deep, genuine, and
        directly relevant to the work we're doing. By the end of the night, we
        had set the tone for the week — Soapbox was here to build, to partner,
        and to show up for the people pushing freedom tech forward.
      </p>

      <h2>Monday: Expo Floor and a Surprise HRF Stage Slot</h2>

      <p>
        Monday morning was for reconnaissance — walking the expo hall, seeing
        who was here, and having dozens of spontaneous conversations about
        Ditto, Shakespeare, and the broader Soapbox stack. The appetite for
        what we're building is real. People want alternatives to Big Tech, and
        they want tools that actually work.
      </p>

      <h3>A Surprise Lightning Talk on the HRF Freedom Goes Up Stage</h3>

      <p>
        While I was near the HRF Freedom Goes Up stage Monday morning, Justin
        Moon pulled me aside and asked if I'd hop on one of his panels for an
        impromptu lightning talk. I said yes on the spot. The topic: everything
        I'm doing with my <strong>OpenClaw agent</strong> — the full-stack
        workflow I use to build on the open web, run my daily DevRel
        operations, and handle general productivity work. I walked the audience
        through the apps, tools, and ideas I use it for, including{' '}
        <a
          href="https://clawstr.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Clawstr</strong>
        </a>
        , Soapbox's social network for AI agents (more in our{' '}
        <a href="/blog/announcing-clawstr">Clawstr announcement</a>). That
        kind of unscripted, real-time visibility into how builders actually
        work is gold for the audience and gold for Soapbox.
      </p>

      <h3>The Expo Floor</h3>

      <p>
        Not every important conversation happened at a named event. A huge
        chunk of the week's ecosystem work happened on the expo floor, at
        coffee lines, in hallways, and during those windows between panels
        where everyone is milling around looking for the next thing. Two
        relationships in particular got significantly stronger across those
        in-between moments:
      </p>

      <ul>
        <li>
          <a
            href="https://ditto.pub/ericfj@my.conduit.market"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Eric FJ</strong>
          </a>{' '}
          from{' '}
          <a
            href="https://github.com/GammaMarkets"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Gamma Markets</strong>
          </a>{' '}
          and <strong>Conduit</strong> — Gamma Markets is a collective of
          Nostr decentralized marketplaces converging on an interoperable
          marketplace specification; Conduit (alongside Shopstr) is one of
          its member projects. Eric and I crossed paths at several events
          and spent real time on the roadmap.
        </li>
        <li>
          <a
            href="https://ditto.pub/npub16dhgpql60vmd4mnydjut87vla23a38j689jssaqlqqlzrtqtd0kqex0nkq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Calvadev</strong>
          </a>{' '}
          from{' '}
          <a
            href="https://shopstr.market/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Shopstr</strong>
          </a>{' '}
          (a fellow Gamma Markets member project) — one of the most prolific
          Nostr commerce developers in the ecosystem. Every e-commerce
          conversation on Nostr eventually comes back to his work. We walked
          through where Shopstr and the broader Gamma Markets collective
          interlock with Ditto and the rest of the Soapbox stack, and that's
          a collaboration I'll have more to say about in the coming months.
        </li>
      </ul>

      <p>
        Those are the conversations that make all the panels and parties worth
        it. Panels get the press. The expo floor gets the partnerships.
      </p>

      <h3>Monday Evening: Hotstyle Takeover, IPF Launch, and Bitcoin Beefsteak</h3>

      <p>
        After the panels, a group of us headed to the{' '}
        <a
          href="https://hotstyle.pubkey.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Hotstyle Takeover</strong>
        </a>{' '}
        hosted by{' '}
        <a
          href="https://pubkey.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>PubKey</strong>
        </a>{' '}
        —
        the NYC and Washington, D.C. Bitcoin cultural hub bringing its energy
        to Vegas for the week. The event included a live recording of{' '}
        <a
          href="https://www.fountain.fm/show/VDaMppQRUBZioj2XkaLn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>Rabbit Hole Recap</em>
        </a>{' '}
        with Matt Odell and Marty Bent, plus
        performances from{' '}
        <a
          href="https://ditto.pub/noagruman@primal.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          Noa Gruman
        </a>{' '}
        featuring tracks from{' '}
        <a
          href="https://ditto.pub/buglenews@nostrcheck.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <em>The Bitcoin Bugle</em>
        </a>
        , the satirical Bitcoin music project. It
        was the kind of crowd — Bitcoiners, podcasters, creators, comedians —
        that we need to be in front of every chance we get.
      </p>

      <figure className="not-prose my-8">
        <img
          src="/assets/blog/conference-recap-bitcoin-2026/hotstyle-takeover.jpg"
          alt="Live Rabbit Hole Recap recording at the PubKey Hotstyle Takeover, with panelists on a throne-style stage and confetti dollar bills covering the floor"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          Live <em>Rabbit Hole Recap</em> taping at the PubKey Hotstyle
          Takeover.
        </figcaption>
      </figure>

      <p>
        My favorite takeaway from the night had nothing to do with the stage.
        I got to meet{' '}
        <a
          href="https://ditto.pub/npub1y3amwkwt234r3cgzp363pqcc2f3f08pxcwpka3jq3dj4ah6p670s0hu0x3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Lahav Levi</strong>
        </a>{' '}
        — filmmaker, producer, and
        the creative partner behind the Israeli progressive metal band{' '}
        <a
          href="http://scardust.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Scardust
        </a>
        . Lahav directs Scardust's cinematic music videos and their
        remarkable live one-shot performances, including the <em>[RIP]</em>{' '}
        video and work on <em>Strangers</em> (2020) and <em>Souls</em> (2025).
        Over the course of our conversation, he told me he'd used{' '}
        <a
          href="https://shakespeare.diy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Shakespeare</strong>
        </a>{' '}
        to vibe code a web application — his very
        first time vibe coding anything. That's the story that made my entire
        week. A working filmmaker with no previous coding experience shipped a
        real web app using our open-source AI builder. Shakespeare is meeting
        people exactly where it's supposed to: at the intersection of
        creativity, curiosity, and zero-friction building. Every Bitcoiner at
        that event was one conversation away from the same experience.
      </p>

      <p>
        From there it was over to{' '}
        <a
          href="https://ditto.pub/jeffg.fyi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jeff Gardner
        </a>
        's launch event for the{' '}
        <a href="https://ipf.dev" target="_blank" rel="noopener noreferrer">
          <strong>Internet Privacy Foundation</strong>
        </a>{' '}
        — a new foundation focused on privacy infrastructure and the
        protocols supporting it. Jeff is an <strong>AOS</strong> member (same
        collective as Soapbox), and he's been building <strong>White Noise</strong>{' '}
        on top of his <strong>Marmot Protocol</strong>. IPF is the umbrella
        that will support that work and more, and it's one of the most
        important freedom-tech organizations spinning up this year.
      </p>

      <p>
        Two of the sharpest conversations of the entire week happened at this
        event:
      </p>

      <ul>
        <li>
          <a
            href="https://ditto.pub/npub1e0z776cpe0gllgktjk54fuzv8pdfxmq6smsmh8xd7t8s7n474n9smk0txy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>NiftyNei</strong>
          </a>
          , incoming IPF board member. NiftyNei is a
          native Texan, software engineer, prolific writer, and the force
          behind{' '}
          <a
            href="https://btcplusplus.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Bitcoin++ (btc++)</strong>
          </a>{' '}
          — the world's largest
          Bitcoin developer conference series. If you've ever attended a btc++
          event, you've experienced her rare combination of deep technical
          chops and real hospitality. Having her on the IPF board tells you
          exactly where that foundation is headed, and it's yet another
          Bitcoin builder bridging directly into the privacy and Nostr world.
        </li>
        <li>
          <a
            href="https://ditto.pub/npub1qqqqqq0u2gj96tdfvqymdqn739k4s0h9rzdwyegfmalv28j7a5ssh5ntu2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Dread</strong>
          </a>
          , who's building{' '}
          <a
            href="https://getflash.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Flash Bitcoin Wallet</strong>
          </a>{' '}
          — Jamaica's first native
          Bitcoin app. Flash has been on the ground doing real work, including
          hurricane relief when the traditional payment rails failed. Dread is
          thinking about this the right way: Flash isn't a crypto product,
          it's community infrastructure for Jamaica. We went deep on{' '}
          <strong>Nostr as an identity layer</strong> and on{' '}
          <strong>NIP-17</strong> for encrypted direct messages — how Flash
          could use Nostr not just for auth, but for private communication
          between wallet users without ever touching a corporate messaging
          stack. That's the freedom-tech stack compounding in real time:
          start with Bitcoin, add Nostr, and the entire app can survive the
          collapse of any centralized infrastructure around it. (Background
          on Dread and Flash:{' '}
          <a
            href="https://www.forbes.com/sites/frankcorva/2025/11/20/jamaicas-first-native-bitcoin-app-is-helping-with-hurricane-relief/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jamaica's First Native Bitcoin App Is Helping With Hurricane
            Relief — Forbes, Nov 2025
          </a>
          .)
        </li>
      </ul>

      <p>
        We closed Monday at the <strong>Bitcoin Beefsteak</strong> hosted by
        Awayslice — one of the highlights of the week. It's the kind of event
        where you can actually <em>talk</em>, catch up with old friends, and
        have the private conversations that don't happen on panel stages.
        Business gets done at these events. Relationships get built. This is
        where a real week of networking compounds.
      </p>

      <p>
        I got extended time with <strong>Lee Salminen</strong> — co-founder
        and developer at{' '}
        <a
          href="https://www.bitcoinjungle.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Bitcoin Jungle</strong>
        </a>{' '}
        in Costa Rica, and
        the friend I was supposed to be sharing the Vibe Coding stage with the
        next morning (spoiler: Vegas had other plans). Lee is a software
        engineer and entrepreneur with nearly fifteen years of experience,
        going all the way back to building websites and apps for local
        businesses in 2008. Bitcoin Jungle is one of the most impressive
        circular Bitcoin economies in the world, and Lee's hands-on approach —
        real merchants, real payments, real adoption in a single region — is a
        playbook more Bitcoin communities should be running.
      </p>

      <p>
        And here's the part of this story that doesn't get told enough:{' '}
        <strong>
          a huge number of Bitcoin Jungle users are already on Nostr.
        </strong>{' '}
        Lee is a long-time Nostr enthusiast and one of the protocol's early
        adopters, and he's carried that thinking into the community he's built
        in Costa Rica. The Nostr adoption story inside Bitcoin Jungle is a
        case study in exactly the purple-pill-orange-pill dynamic I keep
        talking about — a Bitcoin community that walked itself into Nostr
        through trust and proximity, not through marketing.
      </p>

      <p>
        Lee is now building{' '}
        <a
          href="https://zapstore.dev/apps/app.tubestr.mobile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Tubestr</strong>
        </a>{' '}
        — a safe, child-friendly,
        TikTok-style video app where parents can approve follows and kids can
        build curated content channels to share videos back and forth with one
        another. The whole thing is facilitated by <strong>Nostr</strong> and{' '}
        <strong>Marmot</strong> (Jeff Gardner's encrypted-messaging protocol).
        It's exactly the kind of build that could only exist on open
        protocols: parent-controlled trust graphs, no corporate data
        collection on minors, end-to-end encrypted channels between kids, and
        an experience that stays portable across any Nostr-compatible client.
        A Big Tech answer to "safe social media for kids" is a surveillance
        honeypot by definition. The Nostr + Marmot answer is actually safe by
        design. Tubestr is one to watch.
      </p>

      <p>
        I also spent time with <strong>Barry Dean</strong>, a prominent
        Bitcoin Lightning and Nostr developer building{' '}
        <a
          href="https://nostrarchives.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          NostrArchives.com
        </a>
        . Barry is preserving Nostr content at scale, which matters
        enormously for a protocol whose value compounds as its history
        matures. The archive thesis on Nostr is underrated, and Barry is the
        guy doing the work.
      </p>

      <p>
        The Beefsteak is also where I caught up with{' '}
        <a
          href="https://ditto.pub/openmike@grownostr.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>OpenMike</strong>
        </a>{' '}
        from{' '}
        <a
          href="https://tunestr.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tunestr.io
        </a>{' '}
        — the platform powering half of our V4V music at NosVegas. We mapped
        out the next round of collaborations on live-zapping music and
        podcasts, and his fingerprints would be all over the NosVegas stage
        the following night.
      </p>

      <p>
        Every one of those conversations is the <em>real</em> ROI of a week
        like this. Community building doesn't happen on conference stages — it
        happens over dinner, over drinks, at private events where builders who
        respect each other's work can sit down and get specific. We did that
        every single night this week, and the compounding effect on Soapbox's
        position in both the Bitcoin and Nostr communities is enormous.
      </p>

      <p>The only downside: a 1 AM finish, and a full Tuesday ahead.</p>

      <h2>Tuesday: Vibe Coding on the Open Source Stage, Then NosVegas</h2>

      <p>
        Tuesday was a long one. A 10 AM stage call after a 1 AM Beefsteak
        finish, a full day on the expo floor, and a nightclub takeover that
        didn't end until after 2. Worth every minute.
      </p>

      <h3>Panel 1: Vibe Coding on Bitcoin</h3>

      <p>
        My first scheduled panel of the week was Tuesday morning on the Open
        Source Stage: <em>Vibe Coding on Bitcoin</em>, hosted by{' '}
        <strong>
          <a
            href="https://tabconf.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mike Tidwell
          </a>{' '}
          (ZBD)
        </strong>
        , alongside{' '}
        <strong>
          Rockstar Dev (
          <a
            href="https://btcpayserver.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BTCPayServer
          </a>
          )
        </strong>
        .{' '}
        <strong>Lee Salminen (Bitcoin Jungle)</strong> was scheduled but
        didn't make it — Vegas has that effect, and after the Beefsteak ran
        until 1 AM it was frankly a miracle any of us were on that stage at
        10.
      </p>

      <p>
        Mike moderated it like a pro. The audience was engaged, the panel was
        loose without being sloppy, and we got into real territory:
      </p>

      <figure className="not-prose my-8">
        <img
          src="/assets/blog/conference-recap-bitcoin-2026/derek-rockstar-mike.jpg"
          alt="Derek Ross, Mike Tidwell, and Rockstar Dev backstage at the Vibe Coding on Bitcoin panel holding an uncut sheet of US dollar bills"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          Backstage at the Vibe Coding on Bitcoin panel — Derek Ross,
          Mike Tidwell (ZBD), and Rockstar Dev (BTCPayServer).
        </figcaption>
      </figure>

      <ul>
        <li>
          <strong>
            How AI-assisted development is collapsing the distance between
            idea and shipped product.
          </strong>{' '}
          Shakespeare is our open-source, AI-powered app builder that runs
          entirely in the browser. You describe what you want, AI builds it,
          and you deploy it — including to decentralized Nostr nsites —
          without ever leaving the tab. It works with any AI provider: Nostr
          Service Providers (NSPs), your own OpenRouter key, or a local model.
          You can import a GitHub or GitLab repo and edit it with AI. It's
          self-hostable, AGPL-3.0, and now has an Android app. That's the top
          of the vibe-coding funnel.
        </li>
        <li>
          <strong>
            A respectful nod to{' '}
            <a
              href="https://ditto.pub/rockstar@primal.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rockstar
            </a>{' '}
            on the panel.
          </strong>{' '}
          BTCPayServer isn't a "vibe project" — it was a principled build by
          Nicolas Dorier during the SegWit2x fight in 2017. But the culture
          that grew around it — 170+ contributors, plugins, Nostr payments,
          PRs from people who just wanted to scratch an itch — <em>is</em>{' '}
          what vibe coding at its best looks like. Open source plus Bitcoin
          equals compounding curiosity. The difference in 2026 is that AI
          collapses the "have an itch → ship a fix" loop from months to an
          afternoon.
        </li>
        <li>
          <strong>
            <a href="/blog/agora-connecting-freedom-fighters">
              Agora
            </a>{' '}
            as the case study.
          </strong>{' '}
          Six people, three days,
          one working MVP — now in active use by Venezuelan activists. Built
          in January at HRF's AI Hack for Freedom in Austin with{' '}
          <a
            href="https://ditto.pub/leo@primal.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Leopoldo Lopez</strong>
          </a>{' '}
          (Venezuelan opposition leader,
          co-founder of the World Liberty Congress) and{' '}
          <strong>Aaron Rodriguez</strong> translating real activist needs
          into features in real time. The dev team: myself, Alex Gleason, M.K.
          Fain, and Chad Curtist from Soapbox, plus Hzrd149 on the Bitchat
          Bluetooth mesh integration and Elsat as PM. We scaffolded the whole
          thing with Shakespeare. Nostr for identity and communication. A
          self-custodial Lightning wallet built on the Breez SDK's Spark
          implementation. Capacitor for the Android build. Bitchat mesh for
          when the internet goes down during elections or protests. Bitcoin
          bounties on activist "actions" so organizers can fund real work
          directly. 100+ activists onboarded at the hackathon; today it ships
          in 26 languages and is expanding from Venezuela into Nicaragua,
          Zimbabwe, Cambodia, and Uganda in 2026. Live at{' '}
          <a
            href="https://agora.spot"
            target="_blank"
            rel="noopener noreferrer"
          >
            agora.spot
          </a>
          , code at{' '}
          <a
            href="https://gitlab.com/soapbox-pub/agora"
            target="_blank"
            rel="noopener noreferrer"
          >
            gitlab.com/soapbox-pub/agora
          </a>
          .
        </li>
        <li>
          <strong>Why this matters for the panel's thesis.</strong> Agora
          wasn't a casual weekend hack — it was vibe coding with stakes. AI,
          open source, and a room full of builders compressed what should
          have been a six-month product cycle into 36 hours. Real people have
          the tool now because we skipped the committees and shipped. That's
          the difference between "vibe coding" as a meme and vibe coding as
          a methodology. Four months later, we're still actively working on
          Agora and preparing for a 2.0 launch in the near future.
        </li>
        <li>
          <strong>A hot take the audience latched onto:</strong> consensus in
          Bitcoin might eventually shift from{' '}
          <em>"which app has the best security"</em> to{' '}
          <em>
            "which libraries and skills give AI agents the best UX."
          </em>{' '}
          As agents become the primary way non-developers interact with
          Bitcoin, the winning building blocks won't be monolithic clients
          like Bitcoin Core — they'll be the composable SDKs, libraries, and
          skills that agents can wire together on demand. The Breez SDK is
          already a preview of that world. Shakespeare is another. The gap
          between "I have an idea" and "users in another country are using
          my app" keeps shrinking.
        </li>
      </ul>

      <p>
        The rest of the day was spent on the expo floor — discussing NIPs
        with other developers, talking about what Soapbox is shipping, and
        advocating for Ditto and Nostr in every conversation that had an
        opening.
      </p>

      <h3>NosVegas 2.0</h3>

      <p>
        Tuesday night was <strong>NosVegas 2.0</strong> at We All Scream
        Nightclub on Fremont Street. This was the event I'd been building
        toward all week, and it delivered on every dimension. Soapbox was
        proud to be one of the sponsors — and making NosVegas happen every
        year is one of the investments we consider core to our mission, not
        an optional line item. This is how you build community: you put your
        own capital and time behind the events that bring people together.
      </p>

      <figure className="not-prose my-8">
        <img
          src="/assets/blog/conference-recap-bitcoin-2026/soapbox-nosvegas-sponsor.jpg"
          alt="Sponsor wall at NosVegas 2.0 featuring Layer3.press, OpenAgents, and Soapbox logos against the venue's purple-and-stars decor"
          className="rounded-xl shadow-lg w-full h-auto sm:max-w-md mx-auto"
          loading="lazy"
        />
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          Soapbox on the NosVegas 2.0 sponsor wall, alongside Layer3.press
          and OpenAgents.
        </figcaption>
      </figure>

      <p>
        NosVegas exists because community gatherings are how ecosystems
        actually grow — not conferences, not announcements, not ad buys.
        People show up, meet each other, hear real talks, zap real artists,
        and leave with the feeling that they're part of something that's
        going somewhere. That's the purple pill hitting in real time. Half
        the crowd was there for Bitcoin events all week and ended the night
        with a Nostr client on their phone. Mission accomplished.
      </p>

      <h3>The Grow Nostr Room</h3>

      <p>The educational block opened with five sharp ten-minute talks:</p>

      <ol>
        <li>
          <strong>
            <a
              href="https://ditto.pub/heather@nostrplebs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Heather Larson
            </a>{' '}
            (Soapbox) &amp;{' '}
            <a
              href="https://ditto.pub/sarajade@tunestr.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sara Jade
            </a>{' '}
            — Value for Value Music on Nostr.
          </strong>{' '}
          Heather teed up the V4V model and Sara Jade, a working musician,
          grounded it in what it actually means for artists who want to get
          paid without intermediaries.
        </li>
        <li>
          <strong>
            Eric Blackstone —{' '}
            <a
              href="https://bitcoinisforeveryone.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bitcoin Is For Everyone
            </a>{' '}
            (Portland).
          </strong>{' '}
          Eric
          walked through how he's grown his Portland conference year over
          year and how he's using Nostr for coordination, community, and
          onboarding. A real-world case study in grassroots adoption.
        </li>
        <li>
          <strong>
            David Strayhorn (
            <a
              href="https://nosfabrica.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              NosFabrica
            </a>
            ) — Web of Trust.
          </strong>{' '}
          David
          ran a live Web of Trust impersonation search — first for Jack
          Dorsey, then for me — demonstrating how communities can moderate
          themselves with trust graphs instead of central authorities.
          NosFabrica is building the trust-as-a-service infrastructure on
          NIP-85 that the rest of Nostr will eventually run on.
        </li>
        <li>
          <strong>
            <a
              href="https://ditto.pub/derekross@grownostr.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Derek Ross
            </a>{' '}
            (Soapbox) — Make the Internet Weird Again.
          </strong>{' '}
          My Ditto talk. The thesis: the internet used to be fun, then
          everything became the same, and Ditto exists to turn that world
          upside down. I walked the room through the "your profile is a
          planet" philosophy, the Nostr Kind Cube, and the 27+ content types
          that Ditto ships that no centralized platform would ever build —
          Vines, Treasures (geocaching), Magic Decks, Color Moments, webxdc
          games like Quake III in your browser, music, podcasts, books,
          polls, Blobbi pets, Letters. The room was dialed in. People
          weren't just listening — they were pulling out their phones.
        </li>
        <li>
          <strong>
            <a
              href="https://ditto.pub/paul@primal.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paul Keating
            </a>{' '}
            (Primal) — Primal 3.0 Update.
          </strong>{' '}
          Paul
          closed with the Primal roadmap: new features, upcoming releases,
          and where Primal is heading. Returning speaker, known quantity,
          excellent delivery.
        </li>
        <li>
          <strong>OpenAgents</strong>, one of our sponsors, also took time to
          present what they're building — a serious effort on autonomous AI
          agents with open infrastructure. Worth a look at{' '}
          <a
            href="https://openagents.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            openagents.com
          </a>
          .
        </li>
      </ol>

      <h3>The Music — V4V in the Wild</h3>

      <figure className="not-prose my-8">
        <img
          src="/assets/blog/conference-recap-bitcoin-2026/openmike-noa-stage.jpg"
          alt="OpenMike and Noa Gruman on the Genesis Stage discussing Value for Value and music on Nostr"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          OpenMike and Noa Gruman on the Genesis Stage talking Value for
          Value and music on Nostr.
        </figcaption>
      </figure>

      <p>
        The music portion was where the thesis got validated in real time. We
        brought on{' '}
        <a
          href="https://ditto.pub/noagruman@primal.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Noa Gruman</strong>
        </a>
        ,{' '}
        <a
          href="https://ditto.pub/Abel@primal.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Abel James</strong>
        </a>
        ,{' '}
        <a
          href="https://ditto.pub/thehigherlow@primal.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>The Higher Low</strong>
        </a>
        , and{' '}
        <a
          href="https://ditto.pub/sarajade@tunestr.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Sara Jade</strong>
        </a>{' '}
        —
        four acts, all talented, all running shows you could feel. And every
        set was being zapped live from the audience via{' '}
        <a
          href="https://tunestr.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          tunestr.io
        </a>{' '}
        and{' '}
        <a
          href="https://pubpay.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          pubpay.me
        </a>
        .
      </p>

      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <figure className="m-0">
          <img
            src="/assets/blog/conference-recap-bitcoin-2026/noa-gruman.jpeg"
            alt="PubPay leaderboard for Noa Gruman at NosVegas 2.0 showing 374,349 sats across 37 zaps"
            className="rounded-xl shadow-lg w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            Noa Gruman — 374,349 sats / 37 zaps
          </figcaption>
        </figure>
        <figure className="m-0">
          <img
            src="/assets/blog/conference-recap-bitcoin-2026/abel-james.jpeg"
            alt="PubPay leaderboard for Abel James at NosVegas 2.0 showing 507,122 sats across 34 zaps"
            className="rounded-xl shadow-lg w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            Abel James — 507,122 sats / 34 zaps
          </figcaption>
        </figure>
        <figure className="m-0">
          <img
            src="/assets/blog/conference-recap-bitcoin-2026/the-higher-low.jpeg"
            alt="PubPay leaderboard for The Higher Low at NosVegas 2.0 showing 129,270 sats across 38 zaps"
            className="rounded-xl shadow-lg w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            The Higher Low — 129,270 sats / 38 zaps
          </figcaption>
        </figure>
        <figure className="m-0">
          <img
            src="/assets/blog/conference-recap-bitcoin-2026/sara-jade.jpeg"
            alt="PubPay leaderboard for Sara Jade at NosVegas 2.0 showing 566,644 sats across 77 zaps"
            className="rounded-xl shadow-lg w-full h-auto"
            loading="lazy"
          />
          <figcaption className="text-center text-sm text-gray-500 mt-2">
            Sara Jade — 566,644 sats / 77 zaps
          </figcaption>
        </figure>
      </div>

      <p>The numbers speak for themselves:</p>

      <div className="not-prose my-6 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 dark:bg-gray-900">
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left p-3">Artist</th>
              <th className="text-right p-3">Total Sats</th>
              <th className="text-right p-3">Zaps</th>
              <th className="text-right p-3">USD Equivalent</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-3 font-semibold">Noa Gruman</td>
              <td className="p-3 text-right">374,349</td>
              <td className="p-3 text-right">37</td>
              <td className="p-3 text-right">$291.99</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-3 font-semibold">Abel James</td>
              <td className="p-3 text-right">507,122</td>
              <td className="p-3 text-right">34</td>
              <td className="p-3 text-right">$395.55</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-3 font-semibold">The Higher Low</td>
              <td className="p-3 text-right">129,270</td>
              <td className="p-3 text-right">38</td>
              <td className="p-3 text-right">$100.83</td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-3 font-semibold">Sara Jade</td>
              <td className="p-3 text-right">566,644</td>
              <td className="p-3 text-right">77</td>
              <td className="p-3 text-right">$441.98</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-900 font-bold">
              <td className="p-3">Total</td>
              <td className="p-3 text-right">1,577,385</td>
              <td className="p-3 text-right">186</td>
              <td className="p-3 text-right">$1,230.36</td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500 dark:text-gray-400 px-3 py-2">
          USD equivalents calculated at ~$78,000 / BTC at the time of the
          event.
        </p>
      </div>

      <p>
        Every one of those artists earned more in a single NosVegas set than
        they would have made with a tip jar on a typical Tuesday night — by
        orders of magnitude. Value for Value isn't a slogan anymore. It's a
        working revenue model for independent artists, powered by Nostr
        identity and Lightning payments. No record label. No streaming
        service taking 70%. No payment processor in the middle. Just
        performers, an audience, and sats flowing directly from one to the
        other in real time.
      </p>

      <p>
        This is the future of how musicians get paid, and NosVegas was a live
        proof of concept.
      </p>

      <p>
        The night closed on the rooftop with{' '}
        <a
          href="https://ditto.pub/tatum@primal.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Tatum Turnup</strong>
        </a>{' '}
        spinning a DJ set that ran until close. Everyone I spoke to the next
        morning said the same thing: NosVegas 2.0 was the event of the week.
        A 2 AM ride back to the hotel, and I'd do it again.
      </p>

      <h2>Wednesday: Three Panels, One Thesis</h2>

      <p>
        Wednesday was the heaviest day of the week — three panels back to
        back to back, across three different stages.
      </p>

      <h3>Panel 3: Protocol vs Platform — Nostr Beyond Social Media (Open Source Stage)</h3>

      <p>
        This was the panel I moderated, and it was the panel I most wanted to
        land. On stage with me:
      </p>

      <ul>
        <li>
          <strong>
            <a
              href="https://ditto.pub/jeffg.fyi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jeff Gardner
            </a>{' '}
            (White Noise / IPF)
          </strong>{' '}
          — on encrypted
          messaging and the Marmot Protocol
        </li>
        <li>
          <strong>
            <a
              href="https://ditto.pub/jb55.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              William Casarin
            </a>{' '}
            (Damus)
          </strong>{' '}
          — on Damus, Agentium, and
          what AI agents look like when they have their own Nostr identities
        </li>
        <li>
          <strong>
            <a
              href="https://ditto.pub/david@bitcoinpark.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              David Strayhorn
            </a>{' '}
            (NosFabrica)
          </strong>{' '}
          — on
          trust-as-a-service and Web of Trust infrastructure
        </li>
      </ul>

      <p>
        We covered the{' '}
        <a
          href="https://divine.video"
          target="_blank"
          rel="noopener noreferrer"
        >
          Divine
        </a>{' '}
        launch, Damus Agentium's orchestrator model for
        AI agents on Nostr, why Jeff built a Signal competitor on Nostr and
        Marmot instead of rebuilding on Signal's rails, and the one thing
        legacy social media structurally can't do that Nostr can:
        permissionless, user-controlled trust graphs.
      </p>

      <p>
        The argument I opened with held up all week:{' '}
        <strong>Twitter is a company. Nostr is a protocol.</strong> Companies
        get bought, pressured, and shut down. Protocols don't. And the
        "beyond social media" story — geocaching, games, messaging,
        commerce, trust infrastructure — is where Nostr's real leverage is.
      </p>

      <h3>Panel 4: Protecting Free Speech (HRF / Freedom Goes Up Stage)</h3>

      <figure className="not-prose my-8">
        <img
          src="/assets/blog/conference-recap-bitcoin-2026/derek-will-alex.jpg"
          alt="Alex Li, Derek Ross, and William Casarin on the HRF Freedom Goes Up Stage during the Protecting Free Speech with Nostr panel"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          Alex Li (HRF), Derek Ross (Soapbox), and William Casarin (Damus)
          on the HRF Freedom Goes Up Stage.
        </figcaption>
      </figure>

      <p>
        Back on the HRF stage with <strong>Alex Li</strong> and{' '}
        <strong>William Casarin</strong>. The focus: why Nostr matters for
        free speech, why zaps matter for economic freedom, and why the
        freedom to communicate is the foundation everything else rests on.
      </p>

      <p>
        The core argument is simple:{' '}
        <strong>you can't have free speech on someone else's server.</strong>{' '}
        Twitter, Facebook, YouTube — every centralized platform caves to
        government pressure eventually, and Section 230 doesn't protect you
        when the platform itself <em>wants</em> to censor. Nostr has no
        server to seize, no CEO to pressure, and no company to subpoena.
        Freedom of speech becomes a <em>technical</em> guarantee instead of a
        legal one.
      </p>

      <p>
        I pointed to Agora as the working example. Built at HRF's AI Hack for
        Freedom in January, now in active use by Venezuelan activists, with
        Bluetooth mesh fallback for internet blackouts and self-custodial
        Lightning for frozen bank accounts. Ditto as the flagship Nostr
        client — builds to static files, self-hostable on a Raspberry Pi or
        any VPS, no email and no phone number required. Shakespeare as the
        tool that lets anyone build and deploy freedom-first software without
        needing a dev team. William brought the Damus perspective: an iOS
        Nostr client that Apple almost didn't approve, which is a reminder
        that free speech infrastructure still has to fight for distribution
        even when the protocol itself can't be stopped.
      </p>

      <p>
        The sharpest point William made — and one I don't think enough
        developers in the room had thought about — was on{' '}
        <a
          href="https://gitworkshop.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Nostr Git</strong>
        </a>
        . GitHub has had a rough stretch lately:
        multiple major outages in a single month, plus a long, well-documented
        history of censoring code. And <em>code is speech</em>. If you build
        on open protocols for money (Bitcoin), identity and communication
        (Nostr), but you're still hosting the code itself on a centralized
        platform that can go down at any moment or delist your repo on a
        policy whim, you've left a massive single point of failure in your
        stack. <strong>Nostr Git (NIP-34)</strong> fixes that. Your repos
        live on Nostr relays, they're cryptographically signed by you, and no
        one company can take them offline. William made the case bluntly: if
        you're serious about freedom tech, the Git layer has to be as
        decentralized as everything else. Hard to argue with.
      </p>

      <p>The tooling is already here and already usable today:</p>

      <ul>
        <li>
          <a
            href="https://nostrhub.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>NostrHub</strong>
          </a>{' '}
          — Soapbox's Nostr developer platform. Host Nostr Git repos, publish
          and discover custom NIPs, browse the Nostr app directory, and
          participate in developer community discussions. It's the "one
          place" for Nostr builders and it's where a lot of our own work now
          lives.
        </li>
        <li>
          <a
            href="https://gitworkshop.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>gitworkshop.dev</strong>
          </a>{' '}
          — a web-based Nostr Git frontend that makes browsing, issuing
          patches, and collaborating on NIP-34 repos feel as natural as
          using GitHub. A great complement to NostrHub for anyone who wants
          a familiar web UI on top of Nostr-native git.
        </li>
        <li>
          <a
            href="https://gitworkshop.dev/ngit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>ngit</strong>
          </a>{' '}
          — the CLI tool that makes Nostr Git actually practical.{' '}
          <code>ngit push</code>, <code>ngit fetch</code>, real workflow
          parity with the Git you already know. If you've been waiting for
          "Nostr Git, but usable from my terminal," this is it.
        </li>
      </ul>

      <p>
        The pitch to every developer in that room: your money is sovereign,
        your identity is sovereign, your speech is sovereign — it's time your
        source code is, too.
      </p>

      <p>
        Short panel, but the room was HRF's audience — the exact people we
        need to be reaching, and the exact audience where Soapbox's mission
        lands hardest.
      </p>

      <h3>Panel 5: AI + Bitcoin + Nostr = The Freedom Tech Stack (Genesis Stage)</h3>

      <figure className="not-prose my-8">
        <img
          src="/assets/blog/conference-recap-bitcoin-2026/derek-panel.jpeg"
          alt="Derek Ross on the Genesis Stage at Bitcoin 2026 in front of an 'AI + Bitcoin + Nostr = Freedom Tech Stack' panel banner"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          On the Genesis Stage closing out the week.
        </figcaption>
      </figure>

      <p>
        The week closed on the Genesis Stage with Justin Moon moderating,
        alongside{' '}
        <strong>
          <a
            href="https://ditto.pub/npub1tr7ndmjkguzupvqhn9clasx4r08q2sklhal4g60844nsnnalw0tqpwnc05"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jesse Posner
          </a>{' '}
          (Vora)
        </strong>{' '}
        and{' '}
        <strong>
          <a
            href="https://ditto.pub/marks@primal.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mark Suman
          </a>{' '}
          (
          <a
            href="https://trymaple.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maple AI
          </a>
          )
        </strong>
        . Jesse and Mark brought the
        serious AI privacy angles.{' '}
        <a
          href="https://vora.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>Vora</strong>
        </a>{' '}
        is personal AI that's private, powerful, and owned by you — the
        antithesis of the ChatGPT model where your queries, history, and
        identity all live on someone else's server. <strong>Maple AI</strong>{' '}
        is privacy-preserving AI that actually respects user data. Both are
        essential pieces of the freedom tech stack, and both are exactly the
        right kind of partners for a conversation about sovereign
        intelligence.
      </p>

      <p>
        My contribution walked through how we got here. In the '90s, the
        internet was decentralized by default — but to scale, we had to hand
        the infrastructure over to Big Tech. We now, in 2026, finally have
        the stack to reverse that. Fast internet everywhere. Cheap compute.
        Easy self-hosting. Point-and-click deploys. AI that assists
        non-developers in shipping production software. The tools have
        finally caught up to the vision.
      </p>

      <p>
        <strong>Nostr is the communication and identity layer.</strong>{' '}
        Bitcoin is the settlement and value layer. Open AI is the
        intelligence layer. Stacked together, they form the foundation for a
        truly sovereign internet. This isn't 2030. This is today.
      </p>

      <h2>The Soapbox Stack — Everything We Showed Up With</h2>

      <p>
        For readers who want a quick reference of everything we demoed,
        discussed, and pointed people toward this week:
      </p>

      <ul>
        <li>
          <a
            href="https://ditto.pub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Ditto</strong>
          </a>{' '}
          — Our flagship Nostr social client. Your content, your vibe, your
          rules. Bridges to Bluesky and Mastodon. 27+ content types, full
          profile theming, self-hostable.
        </li>
        <li>
          <a
            href="https://shakespeare.diy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Shakespeare</strong>
          </a>{' '}
          — AI-powered website and app builder. Describe it, build it, deploy
          it. Open source and self-hostable.
        </li>
        <li>
          <a
            href="https://agora.spot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Agora</strong>
          </a>{' '}
          — Censorship-resistant activist platform built with HRF and the
          World Liberty Congress. Bluetooth mesh + self-custodial Lightning
          + Nostr. In active use in Venezuela; expanding in 2026.
        </li>
        <li>
          <a
            href="https://mostr.pub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Mostr</strong>
          </a>{' '}
          — The bridge that connects Nostr, Mastodon, and Bluesky. 56,000+
          users connected across networks.
        </li>
        <li>
          <a href="/tools/signer">
            <strong>Soapbox Signer</strong>
          </a>{' '}
          — NIP-07 browser extension for secure Nostr key management.
        </li>
        <li>
          <a
            href="https://sessions.soapbox.pub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Soapbox Sessions</strong>
          </a>{' '}
          — Our weekly Nostr-native podcast on decentralized social, freedom
          tech, and ecosystem news. New episodes every Thursday.
        </li>
      </ul>

      <h2>Why This Week Was Worth It</h2>

      <p>
        A week like this isn't cheap. Flights, hotels, sponsorships, swag,
        private events, and a team on the ground — Bitcoin Conference Week is
        one of the biggest marketing line items on our annual calendar. I
        take that seriously, and so does the rest of Soapbox. Every dollar
        has to work.
      </p>

      <p>
        And there is no better community in the world to invest that dollar
        in than the Bitcoin community. Bitcoiners already understand
        decentralization. They already understand censorship resistance. They
        already understand the need to control their own keys and opt out of
        systems that don't serve them. They live freedom tech every day with
        their money — they don't need to be convinced that Big Tech is
        broken, or that the alternative has to be permissionless and
        self-custodial, because that's the entire reason they got into
        Bitcoin in the first place. Telling a Bitcoiner that their identity,
        their speech, and their social graph deserve the same sovereignty as
        their savings isn't a sales pitch; it's a logical extension of
        beliefs they already hold. That's why Bitcoin Conference Week is the
        single most fertile ground in the world for onboarding to Nostr — and
        it's why we keep showing up here in force.
      </p>

      <p>
        Here's why I believe this week was one of the highest-ROI investments
        we've made all year:
      </p>

      <ul>
        <li>
          <strong>Five panels across two days</strong> put Soapbox and Nostr
          in front of every major audience at the conference — developers,
          activists, investors, press, and the broader Bitcoin community.
          That kind of stage presence is not something you can buy with ads.
        </li>
        <li>
          <strong>NosVegas 2.0 was a mainstage moment</strong> for Nostr.
          Live V4V music, a full slate of talks, and a packed nightclub full
          of people who walked out wanting to build. That's earned attention,
          not paid attention.
        </li>
        <li>
          <strong>Agora and Ditto landed with the right audiences.</strong>{' '}
          HRF, activists, journalists, and builders are now actively asking
          how they can get involved. Agora's story — shipped in a weekend,
          in active use by Venezuelans — is the exact kind of real-world
          proof that moves both users and funders.
        </li>
        <li>
          <strong>
            Shakespeare is becoming the default "how do I build on Nostr?"
            answer.
          </strong>{' '}
          Every panel conversation eventually came back to it. Every
          developer I met either uses it or wants to.
        </li>
        <li>
          <strong>The relationships we compounded this week</strong> — with
          HRF, White Noise / IPF, NosFabrica, Vora, Maple AI,
          OpenAgents, ZBD, BTCPayServer, and dozens of others — are the
          real asset. This is community building as a long-term investment:
          every one of those relationships seeds the next partnership, the
          next collaboration, the next grant, and the next wave of people
          getting onboarded to Nostr through someone they already trust.
          You can't buy that with ad spend. You build it by showing up.
        </li>
        <li>
          <strong>The purple-pill-orange-pill flywheel is working.</strong>{' '}
          Bitcoiners who came for the conference left with Ditto on their
          phones and sats flowing through them via zaps.
          Nostr-natives who came for NosVegas walked out with new Bitcoin
          tools they'd never touched before. Every direction of onboarding
          was happening at the same time, all week, and that's the best
          signal you can possibly get that you're investing in the right
          community.
        </li>
      </ul>

      <p>
        The bet we made at Soapbox was that freedom tech is ready for its
        mainstream moment, and that showing up loud and often at the
        intersection of Bitcoin, Nostr, and AI is how you catalyze it. This
        week proved that bet. The ecosystem is bigger, more capable, and
        more ready to ship than it has ever been.
      </p>

      <h2>What's Next</h2>

      <p>
        If anything here resonated with you — whether you're a developer, an
        activist, a musician, a journalist, or just someone who's tired of
        Big Tech running your social life — here's where to start:
      </p>

      <ul>
        <li>
          <strong>Try Ditto:</strong>{' '}
          <a
            href="https://ditto.pub"
            target="_blank"
            rel="noopener noreferrer"
          >
            ditto.pub
          </a>
          . No email. No phone number. Just a Nostr key.
        </li>
        <li>
          <strong>Build with Shakespeare:</strong>{' '}
          <a
            href="https://shakespeare.diy"
            target="_blank"
            rel="noopener noreferrer"
          >
            shakespeare.diy
          </a>
          . Describe a site. Deploy it. Own it.
        </li>
        <li>
          <strong>Support activists with Agora:</strong>{' '}
          <a
            href="https://agora.spot"
            target="_blank"
            rel="noopener noreferrer"
          >
            agora.spot
          </a>
          . Real people, real freedom, real impact.
        </li>
        <li>
          <strong>Subscribe to Soapbox Sessions:</strong>{' '}
          <a
            href="https://sessions.soapbox.pub"
            target="_blank"
            rel="noopener noreferrer"
          >
            sessions.soapbox.pub
          </a>
          . Weekly, Nostr-native.
        </li>
      </ul>

      <p>
        We're not done. We're barely getting started. The next conference
        will be bigger, the next NosVegas louder, and the next generation of
        Soapbox products will make the freedom tech stack feel inevitable to
        anyone who touches it.
      </p>

      <p>
        Thank you to every partner, sponsor, speaker, musician, and builder
        who made this week what it was. Thank you to{' '}
        <a
          href="https://hrf.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HRF
        </a>
        , to the{' '}
        <a
          href="https://b.tc"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bitcoin conference
        </a>{' '}
        organizers, and to everyone who showed up ready to work.
      </p>

      <p>See you at the next one.</p>
    </article>
  );
}
