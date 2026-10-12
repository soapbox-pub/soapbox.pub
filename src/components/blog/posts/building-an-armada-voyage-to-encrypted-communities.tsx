import type { BlogPostMeta } from '@/lib/blog/types';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, Sparkles, Users } from 'lucide-react';

export const meta: BlogPostMeta = {
  slug: 'building-an-armada-voyage-to-encrypted-communities',
  title: 'Building an Armada: Our Voyage to Encrypted Communities on Nostr',
  excerpt:
    'NIP-04, NIP-17, NIP-29, Marmot, and now Concord. A personal account of every wall we hit trying to build encrypted communities on Nostr, and why we kept going.',
  coverImage: '/assets/blog/building-an-armada-voyage-to-encrypted-communities/cover.jpg',
  date: '2026-07-14',
  author: {
    name: 'Derek Ross',
    picture: '/assets/avatars/derek.jpg',
  },
  ogImage: {
    url: '/assets/blog/building-an-armada-voyage-to-encrypted-communities/cover.jpg',
  },
  featured: false,
  tags: [
    'soapbox',
    'nostr',
    'encrypted messaging',
    'concord',
    'armada',
    'nip-17',
    'privacy',
  ],
  keywords:
    'nostr private messaging, nostr encrypted dms, nip-04, nip-17, nip-44, nip-59, nip-29 groups, marmot mls nostr, concord protocol, armada, encrypted communities, soapbox',
};

export default function BuildingAnArmadaVoyageToEncryptedCommunities() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        If you've followed my work on Nostr for any length of time, you know I
        don't usually lead with the hard parts. I'm the guy on stage telling you
        why this protocol is going to change everything. I believe that. But I
        want to tell a different kind of story here, the one about how many times
        we hit a wall trying to do something that sounds simple: let people send
        each other a private message.
      </p>

      <p>
        Turns out "private message" is one of the hardest things to build on an
        open protocol. And we've been chasing it, in one form or another, for
        years. Here's the voyage we actually sailed to get to something I'm proud
        of. It was not a straight line.
      </p>

      <h2>NIP-04, and the lie of the little lock icon</h2>

      <p>
        In the beginning there was{' '}
        <a
          href="https://nostrhub.io/nip/04"
          target="_blank"
          rel="noopener noreferrer"
        >
          NIP-04
        </a>
        , the original encrypted direct message. It worked, sort of, and for a
        long time it was all we had. You could send someone a DM and the{' '}
        <em>content</em> was encrypted. Job done, right?
      </p>

      <p>
        Not even close. NIP-04 encrypted what you said but broadcast everything
        about the fact that you said it. The metadata was wide open: anyone
        watching the relays could see that this pubkey messaged that pubkey, at
        this time, this often. For most social apps that's a bad look. For the
        people Soapbox builds for, activists, dissidents, people whose threat
        model is a government, not an advertiser, metadata <em>is</em> the
        danger. Knowing who talks to whom, and when, is frequently more dangerous
        than knowing what they said. The little lock icon was telling users they
        were safe when they weren't. That bothered me then and it bothers me now.
      </p>

      <p>
        NIP-04 also used an encryption scheme that cryptographers had been
        side-eyeing for years. We knew it had to go. The question was what
        replaced it.
      </p>

      <h2>NIP-17, gift wrap, and the beautiful, painful upgrade</h2>

      <p>
        The answer the ecosystem converged on was a stack:{' '}
        <a
          href="https://nostrhub.io/nip/44"
          target="_blank"
          rel="noopener noreferrer"
        >
          NIP-44
        </a>{' '}
        for modern encryption,{' '}
        <a
          href="https://nostrhub.io/nip/59"
          target="_blank"
          rel="noopener noreferrer"
        >
          NIP-59
        </a>{' '}
        for "gift wrapping," and{' '}
        <a
          href="https://nostrhub.io/nip/17"
          target="_blank"
          rel="noopener noreferrer"
        >
          NIP-17
        </a>{' '}
        for private DMs built on top of both. This was a genuine leap. Gift wrap
        doesn't just encrypt the message, it hides the metadata too. The sender
        is concealed, the event is wrapped in a throwaway key, timestamps are
        fuzzed. An observer watching the relay sees noise addressed to nobody in
        particular. This is the real thing NIP-04 only pretended to be.
      </p>

      <p>
        I want to be clear: NIP-17 was the right move, and I'd make it again. But
        living through the migration was humbling. "Just switch to the new DMs"
        is a sentence that hides an enormous amount of pain:
      </p>

      <ul>
        <li>
          <strong>Everything had to change at once.</strong> Sending, receiving,
          notifications, search, the way clients even <em>find</em> your
          messages, gift wrap touches all of it. A DM in this model isn't one
          event, it's a sealed thing inside a wrapped thing, and every app had to
          learn the whole dance.
        </li>
        <li>
          <strong>Interop was brutal.</strong> For a stretch, whether your
          "private" message arrived depended on whether the <em>other</em>{' '}
          person's client had implemented the same pieces the same way. We spent
          real time chasing messages that vanished into the gap between two
          implementations.
        </li>
        <li>
          <strong>The old and new worlds coexisted.</strong> You can't flip a
          protocol overnight. For a long while some contacts were NIP-04, some
          were NIP-17, and the client had to be gracious about both without
          confusing the user or leaking them back into the insecure path. And
          this is still a problem on the user experience side that many clients
          struggle with today.
        </li>
      </ul>

      <p>
        And there's a deeper headache baked into the design, one that hits group
        messages hardest. For a gift-wrapped DM to reach you, the sender has to
        know <em>where</em> you're listening, so NIP-17 leans on DM relay lists,
        a dedicated event (
        <a
          href="https://nostrhub.io/nip/17"
          target="_blank"
          rel="noopener noreferrer"
        >
          kind 10050
        </a>
        ) where you publish the specific relays you read DMs on, and other
        people's clients are supposed to find that list and deliver there. When
        it works, it's beautifully decentralized. When it doesn't, and it often
        doesn't, your message gets sealed up perfectly and delivered to a relay
        the recipient never checks. It just quietly never arrives. One-on-one,
        that's frustrating. In a <em>group</em>, it's fatal: every extra member
        is another DM relay list that has to be published, discovered, and
        honored correctly, and the odds that <em>someone's</em> is stale or
        missing climb with every person you add. That's the real reason group DMs
        on Nostr never felt solid. The math was always working against them.
      </p>

      <p>
        We got through the one-to-one part. The broader ecosystem moved onto
        real, metadata-resistant DMs, though some still won't budge on the old
        NIP-04 implementation. But one-to-one messaging was only ever half of
        what people actually wanted, and the half we couldn't make feel reliable
        was exactly the half that mattered most: talking to more than one person
        at once.
      </p>

      <h2>NIP-29 groups, and paying the server tax</h2>

      <p>
        Because the thing people <em>really</em> wanted wasn't just DMs. It was{' '}
        <strong>community</strong>. Group chat. A Discord you actually own. So we
        turned to{' '}
        <a
          href="https://nostrhub.io/nip/29"
          target="_blank"
          rel="noopener noreferrer"
        >
          NIP-29
        </a>
        , relay-based groups, and built toward it, it's still the foundation of a
        lot of what our chat app{' '}
        <strong>
          <a href="/armada">Armada</a>
        </strong>{' '}
        does today, and I don't regret the investment.
      </p>

      <p>
        But NIP-29 came with a tax I didn't love. To run a community, you run a
        server, a relay configured as the group host. That relay is the
        authority: it decides who's in, enforces the roles, holds the state. And
        the messages flowing through it are <strong>not</strong> end-to-end
        encrypted. Better than a corporate silo, absolutely. You can leave, you
        can self-host. But look at what we'd walked back into: a computer in the
        middle that knows every member, holds every message, and is the final say
        on who's in charge. We'd spent all that effort killing the metadata
        problem for DMs, then reintroduced a central authority the moment we
        wanted more than two people in a room.
      </p>

      <p>
        I'd be doing this whole story a disservice if I didn't tip my hat to{' '}
        <a
          href="https://flotilla.social"
          target="_blank"
          rel="noopener noreferrer"
        >
          Flotilla
        </a>{' '}
        and its developer,{' '}
        <a
          href="https://github.com/coracle-social/flotilla"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hodlbod
        </a>
        , who has led the charge on NIP-29 communities for the last couple of
        years. Armada's relays-as-servers model is borrowed straight from his
        work, and the whole ecosystem is better for it. He's even gone a step
        further and made the hard part easier: with Flotilla hosting, you can
        just buy a NIP-29 server from him instead of standing one up yourself.
        That genuinely lowers the barrier, and it's a smart, generous thing to
        offer.
      </p>

      <p>
        But, and this is my opinion, not a mark against the excellent work: even
        "just buy a server" is still a concept most people shouldn't have to
        think about. The average person doesn't want to reason about servers,
        hosts, or who's running their group's relay. They want to open an app and
        talk to their people. Every place where the plumbing pokes through is a
        place we lose someone who isn't a Nostr native yet.
      </p>

      <p>
        For an internal team tool, none of this matters. For a community that
        needs to survive pressure, that central relay is exactly the thing an
        adversary goes after. I kept coming back to the same nagging feeling: we
        can do better than "trust the server, but a nicer server."
      </p>

      <h2>Universes, the one that got away</h2>

      <p>
        Somewhere in the middle of all this, we took our own real swing at
        community. About a year ago we built{' '}
        <a
          href="https://gitlab.com/soapbox-pub/universes"
          target="_blank"
          rel="noopener noreferrer"
        >
          Universes
        </a>
        , a Discord for Nostr: communities, channels, a marketplace, shared
        resources, the whole thing. We built it on{' '}
        <a
          href="https://nostrhub.io/nip/72"
          target="_blank"
          rel="noopener noreferrer"
        >
          NIP-72
        </a>{' '}
        moderated communities, with plenty of back-and-forth about whether
        relay-based groups (NIP-29) should carry it instead. On paper it had
        everything.
      </p>

      <p>
        We never quite got it off the ground. The foundations we had to choose
        between each pulled in a direction that cost us something we didn't want
        to give up, and the experience never came together into the thing we
        could see in our heads. So we made the call to set it down, and we did
        the thing we always do:{' '}
        <strong>
          we left it open source, out there for anyone to pick up and build on.
        </strong>{' '}
        Universes wasn't wasted effort. It was the experiment that taught us,
        concretely, what building real community on Nostr actually demands, and
        what the existing options couldn't give us. Every wall we ran into there
        is a big part of why we recognized the right answer when we finally saw
        it. Sometimes the most useful thing an attempt leaves you is a very clear
        map of where the ground is soft.
      </p>

      <h2>Marmot, MLS, and the right tool for a different job</h2>

      <p>
        So we looked hard at{' '}
        <a
          href="https://github.com/marmot-protocol/marmot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Marmot
        </a>
        , the effort to bring{' '}
        <a
          href="https://www.rfc-editor.org/rfc/rfc9420.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          MLS
        </a>{' '}
        (the same messaging-layer security standard behind serious secure
        messengers) to Nostr, with implementations like MDK and the White Noise
        client. It's a serious, long-running effort, we watched it evolve over a
        couple of years, from its early days as NIP-104, through NIP-EE, into
        what's now Marmot, and that care shows. On paper it's the gold standard:
        forward secrecy, post-compromise security, the real cryptographic
        guarantees. For a small, high-stakes group where every member's safety is
        paramount, it's genuinely excellent, and I have a lot of respect for the
        people building it.
      </p>

      <p>
        But MLS is built around a specific shape of group, and it isn't ours. MLS
        advances in lockstep: members' keys ratchet forward in an ordered
        sequence, every membership change is a coordinated commit, and the cost
        of each change grows with the group. That's a fantastic fit for a secure
        team of a dozen people. It is a punishing fit for a big, casual, public
        community where people wander in and out all day, hundreds at a time. The
        very ratcheting that makes MLS strong for small rooms is doing a lot of
        work in a large, high-churn one. We prototyped, we thought about it hard,
        and we came to a conclusion that's important to say out loud:{' '}
        <strong>
          Marmot is excellent. It's just built for a different target than a
          public, Discord-style community.
        </strong>{' '}
        And picking a tool because it's impressive, rather than because it fits
        the job in front of you, is a mistake no matter how good the tool is.
      </p>

      <p>
        And to be clear, none of this is a knock on the Marmot team. They're
        heads-down, pushing code, doing the slow and careful work that MLS
        demands, you don't rush forward secrecy, and they're right not to. But we
        were up against a different clock. We had real communities that needed
        off centralized chat now, not eventually, people relying on us this year,
        not whenever a still-maturing spec settled. "Hard problem, done
        carefully, on its own timeline" is exactly the right way to build MLS; it
        just collides with "our users can't wait." Respect the work. We simply
        couldn't wait on it, and even finished, it's built for a smaller room
        than the one we needed to fill.
      </p>

      <p>
        That was the moment the whole journey clicked into focus. Every approach
        so far was excellent at <em>something</em> and wrong for <em>us</em>:
      </p>

      <div className="not-prose my-8">
        <Card className="bg-muted/40">
          <CardContent className="p-6">
            <ul className="space-y-2 m-0 list-none p-0">
              <li>
                <strong className="text-purple-700">NIP-04</strong>{' '}
                — encrypted content, but leaked everything else.
              </li>
              <li>
                <strong className="text-orange-700">NIP-17</strong>{' '}
                — nailed private DMs, but couldn't become a community.
              </li>
              <li>
                <strong className="text-purple-700">NIP-29</strong>{' '}
                — gave us communities, but put a server back in charge with no
                encryption.
              </li>
              <li>
                <strong className="text-orange-700">Universes</strong>{' '}
                — our own full attempt, but the foundations couldn't carry it.
              </li>
              <li>
                <strong className="text-purple-700">Marmot</strong>{' '}
                — world-class encryption, but at a scale and shape we don't have.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p>What we needed didn't exist. So we built it.</p>

      <h2>Concord</h2>

      <p>
        <a
          href="https://github.com/concord-protocol/concord"
          target="_blank"
          rel="noopener noreferrer"
        >
          Concord
        </a>{' '}
        is the protocol we landed on for end-to-end encrypted communities, and
        it's designed around the exact hole every prior step left open. The whole
        thing rests on one clean idea: delete the computer in the middle.
      </p>

      <p>
        And I want to be clear about where it came from, because we didn't invent
        it. Concord is the work of the{' '}
        <a
          href="https://github.com/VectorPrivacy/Vector"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vector
        </a>{' '}
        team,{' '}
        <a
          href="https://ditto.pub/npub16ye7evyevwnl0fc9hujsxf9zym72e063awn0pvde0huvpyec5nyq4dg4wn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>JSKitty</strong>
        </a>{' '}
        and{' '}
        <a
          href="https://ditto.pub/npub12w73tzcqgpr2pcy4el5x60d2emeud4cyeeayynzqqg2fefzgytaqm4ktz3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>YuurinBee</strong>
        </a>
        .
        Interestingly, Vector originally built on Marmot and MLS, walked the same
        road we did, and eventually reached the same conclusion: for the kind of
        communities they wanted, they needed a different foundation. So they
        designed their own,{' '}
        <a
          href="https://github.com/concord-protocol/concord"
          target="_blank"
          rel="noopener noreferrer"
        >
          the Concord Protocol
        </a>
        . I still remember opening the Vector app for the first time. I used it
        for about thirty seconds and thought, <em>this is the best Nostr
        messaging experience I've ever had.</em> I immediately went and told the
        rest of the team they had to try it. When we dug into how it worked, it
        was the answer we'd been circling for years. Our own Alex Gleason worked
        alongside them on version 2 of the protocol, and we ran with it. That's
        the open web working exactly as it should: two teams, arriving at the
        same hard problem from different directions, and building the fix
        together in the open instead of each walling off their own version.
      </p>
      <p>
        Here's how it works. It splits the three jobs a central server used to do
        into pieces that need to trust nobody.
      </p>

      <ul>
        <li>
          <strong>Storage and delivery</strong> become dumb, interchangeable
          relays that only ever see encrypted blobs addressed to meaningless,
          rotating labels. One misbehaves, you use another.
        </li>
        <li>
          <strong>"Who's a member?"</strong> stops being a list a server enforces
          and becomes simple key possession: if you can decrypt the room, you're
          in it.
        </li>
        <li>
          <strong>"Who's in charge?"</strong> stops being a switch a server flips
          and becomes a signed roster rooted in the owner's identity, authority
          is math that every member re-checks for themselves. A forged "ban" just
          gets dropped, because it doesn't trace back to the owner.
        </li>
      </ul>

      <figure className="m-0">
        <img
          src="/assets/blog/building-an-armada-voyage-to-encrypted-communities/armada-community-relays.png"
          alt="Soapbox Community settings in Armada showing the owner, channels, and the relays the community runs on"
          className="w-full max-w-md mx-auto rounded-lg"
        />
        <figcaption>
          A community is just an owner, some channels, and a handful of relays.
          Swap the relays, keep the community, there's no server to lose.
        </figcaption>
      </figure>

      <p>
        You still get the full Discord-style experience, communities, channels,
        roles, admins, kicks, bans, even voice and video, but the relays, the
        network, and non-members see only noise. And here's the part that makes
        me smile after everything above: Concord's base primitive is a stream of{' '}
        <strong>NIP-59 gift wraps</strong> sharing one key. That painful gift-wrap
        machinery we fought through back in the NIP-17 days? It became the
        foundation the community layer is built on.
      </p>

      <figure className="m-0">
        <img
          src="/assets/blog/building-an-armada-voyage-to-encrypted-communities/armada-soapbox-community.png"
          alt="The Soapbox Community running in Armada — channels, live conversation, and member list, Discord-style"
          className="w-full rounded-lg"
        />
        <figcaption>
          The Soapbox Community, running on Armada and Concord. Familiar
          Discord-style layout, but the relays behind it only ever see encrypted
          noise.
        </figcaption>
      </figure>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-orange-500 bg-orange-50/50">
          <CardContent className="p-6 flex gap-4">
            <Sparkles className="w-6 h-6 shrink-0 text-orange-600" />
            <p className="text-lg italic text-foreground m-0">
              None of that struggle was wasted. It was tuition.
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        Concord is honest about its lane, too, the spec itself says so. It
        doesn't try to replace NIP-17 for your one-on-one DMs, or out-secure
        Marmot for a six-person cell. It's built for one specific thing the
        others weren't: large, real, un-shutdownable communities. That clarity is
        exactly what we were missing for years.
      </p>

      <h2>Where Concord is now</h2>

      <p>
        This isn't theory anymore, it's shipping. Concord v2 is finalized and
        running in production. And the truest thing I can tell you about it is
        this: <strong>we shut down our Signal and moved the entire company onto
        it.</strong> Every team chat, every meeting, every conversation we used
        to have on Signal now happens in our own encrypted communities, on the
        protocol we built, over infrastructure nobody but us controls. There's no
        better test of whether you believe your own software than betting your
        daily work on it, and we did. If it broke, <em>we'd</em> be the ones
        locked out of our own company. It doesn't break.
      </p>

      <figure className="m-0">
        <img
          src="/assets/blog/building-an-armada-voyage-to-encrypted-communities/armada-create-community.png"
          alt="Armada's create-community dialog: 'gather your crew, start an encrypted community — serverless and end-to-end-encrypted'"
          className="w-full max-w-md mx-auto rounded-lg"
        />
        <figcaption>
          Starting a community in Armada. No host, no server to trust, your key
          is your membership, and you become the owner.
        </figcaption>
      </figure>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-purple-500 bg-purple-50/50">
          <CardContent className="p-6 flex gap-4">
            <ShieldCheck className="w-6 h-6 shrink-0 text-purple-600" />
            <p className="text-lg italic text-foreground m-0">
              We shut down our Signal and moved the entire company onto Concord.
              We don't ask you to trust the software we build, we bet our own
              daily work on it.
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        We also opened it up. There's now a <strong>public Soapbox community</strong>{' '}
        anyone can join, a place to talk about our products, and about the wider
        open web, Nostr, open source, and where all of this is going. Not a
        support ticket queue, a real room, run on the same encrypted protocol we
        live in ourselves. The invite's at the bottom of this post.
      </p>

      <p>
        The ecosystem around Concord is filling in too, which is the part that
        tells me it's real. A good example: JSKitty just finalized the{' '}
        <a
          href="https://crates.io/crates/vector_sdk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vector SDK
        </a>{' '}
        for Concord v2, the Rust bot SDK that brings the whole bot ecosystem to
        the protocol. And here's what I love about it: Vector is the Vector
        team's own Concord client, a sibling to our Armada, and the SDK isn't
        Armada-only or Vector-only. It works for <em>any</em> Concord client.
        That's the difference between building on an open protocol and building a
        walled garden: a bot someone writes for Vector runs in Armada, and vice
        versa, because the protocol is the thing, not any one app. Concord is
        already bigger than the team that started it.
      </p>

      <p>
        And because encrypted communities are exactly the kind of software you
        should <em>never</em> take on faith, we run a{' '}
        <strong>bug-bounty program</strong> on Concord. It's already earned its
        keep. A researcher found a real flaw in the permission system, the role
        logic checked what a signer had granted but not what they'd revoked, so a
        member could strip someone else's roles. Serious bug. It was reported and
        patched the same day (fix{' '}
        <a
          href="https://gitlab.com/soapbox-pub/armada/-/commit/5a6551127fec11cbf69d27dc140010db72419683"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>5a655112</code>
        </a>
        , by{' '}
        <a
          href="https://ditto.pub/npub1scvyzz02ayma34hesz62pdrd5nhsmxp74hjq8msmfs9khh3r3drsnw68d8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chad Curtis
        </a>
        ), and we paid the researcher,{' '}
        <a
          href="https://ditto.pub/npub1ye5ptcxfyyxl5vjvdjar2ua3f0hynkjzpx552mu5snj3qmx5pzjscpknpr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong>hzrd149</strong>
        </a>
        , a $1,000 bounty and wrote the whole thing up in public. That's the deal
        we want: you don't have to trust that we handle security responsibly, you
        can watch us do it, in the open, with receipts, and get paid for making
        it better.
      </p>

      <h2>Why I'm telling you the messy version</h2>

      <p>
        I could have written you a clean announcement, "Soapbox now has encrypted
        communities!", and left out the four dead ends, the migrations that ate
        weeks, the prototype we walked away from. But that's not building in the
        open, and honestly it wouldn't be useful to anyone.
      </p>

      <p>
        Here's what the messy version actually shows: private messaging on an
        open protocol is <em>hard</em>, and the reason it's hard is the same
        reason it's worth it. On a closed platform, one company just decides how
        messaging works and you live with it. On Nostr, we had to earn every
        guarantee in the open, in public, with real cryptography and real
        tradeoffs, and anyone can check our work, poke holes in it, and build
        something better. That's slower. It's also the only version where the
        answer belongs to you instead of to a company that can change its mind.
      </p>

      <p>
        And I want to be upfront about one thing:{' '}
        <strong>all of this is open beta.</strong> It's real, we run our own
        company on it, but it's early. Concord's newer pieces are still proving
        out, some of it isn't ratified yet, you'll find rough edges, and we'll
        hit more walls, we always do. Come in with that expectation, and come in
        knowing the whole point is that you can watch it get better in the open,
        and help. But for the first time in this whole journey, the foundation
        matches the mission: no company in the middle, encryption that's real,
        and a community that can't be switched off. That was worth the long road.
      </p>

      <p>If you want to see any of it, it's all open:</p>

      <ul>
        <li>
          <strong>Concord protocol:</strong>{' '}
          <a
            href="https://github.com/concord-protocol/concord"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/concord-protocol/concord
          </a>
        </li>
        <li>
          <strong>Armada</strong> (our chat client built on this):{' '}
          <a
            href="https://gitlab.com/soapbox-pub/armada"
            target="_blank"
            rel="noopener noreferrer"
          >
            gitlab.com/soapbox-pub/armada
          </a>
        </li>
      </ul>

      <p>
        Read it, run it, break it, tell us where we're wrong. That's the whole
        point.
      </p>

      <p>
        And if you'd rather just come talk to us, that's the best part:{' '}
        <strong>join the Soapbox community</strong> and see the whole thing in
        action. It's where we hang out, where we talk about what we're building,
        and where anyone can dig into the open web, Nostr, and open source with
        us. Same encrypted protocol we run our own company on. Come say hi.
      </p>

      <div className="not-prose my-10">
        <a
          href="https://armada.buzz/invite/naddr1qvzqqqyzz5pzp0flk57hwj8x6a969ys0m7f50tl9jlunnadhuxjaqlx4hgh5scktqqqq3w62qc#BAACAwSD_R2taBjMMDl8Ybd670Lq"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <Card className="border border-[#ec4899]/40 bg-gradient-to-br from-[#181021] to-[#100b15] transition-shadow hover:shadow-lg hover:shadow-[#ec4899]/20">
            <CardContent className="p-6 flex items-center gap-4">
              <Users className="w-8 h-8 shrink-0 text-cyan-400" />
              <div>
                <p className="m-0 font-semibold text-[#ec4899]">
                  Join the Soapbox community on Armada
                </p>
                <p className="m-0 text-sm text-white/70">
                  Encrypted, un-shutdownable, and open to everyone. Come talk
                  Nostr, open source, and the open web with us.
                </p>
              </div>
            </CardContent>
          </Card>
        </a>
      </div>

      <p>Pura vida. 🫂🤙🏻</p>
    </article>
  );
}
