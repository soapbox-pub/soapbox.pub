import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { ExternalLink } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blog/types';

export const meta: BlogPostMeta = {
  slug: 'building-zuka',
  title: "Building Zuka: A Voice That Can't Be Killed",
  excerpt:
    "We built an AI persona platform for activists in 48 hours at HRF's second AI Hack for Freedom. It protects the humans behind the voice — and makes the voice impossible to silence.",
  coverImage: '/assets/blog/building-zuka/cover.jpg',
  date: '2026-05-12',
  author: {
    name: 'Derek Ross',
    picture: '/assets/avatars/derek.jpg',
  },
  ogImage: {
    url: '/assets/blog/building-zuka/cover.jpg',
  },
  featured: true,
  tags: [
    'nostr',
    'bitcoin',
    'activism',
    'hackathon',
    'zuka',
    'ai',
    'hrf',
    'rwanda',
    'freedom tech',
  ],
  keywords:
    'zuka, ai persona for activists, censorship resistant ai, nostr ai influencer, hrf ai hack for freedom, ai hack for freedom nashville, rwanda activism, aimable karasira, anaise kanimba, bitcoin park nashville, ppq ai nostr, breez spark wallet, mkstack hackathon, nostr lightning ai, soapbox hackathon, nip-44 backup, nip-46 remote signing',
  faq: [
    {
      question: 'What is Zuka?',
      answer:
        "Zuka is an AI persona platform built for activists living under authoritarian regimes. Each persona has its own Nostr identity, its own self-custodial Lightning wallet, and pays for its own AI inference. The architecture decouples the persona from the human operating it, so the regime has no one to track down — and the voice can't be silenced. Zuka means \"rebirth\" in Kinyarwanda.",
    },
    {
      question: 'Where did Zuka come from?',
      answer:
        "Zuka was built in 48 hours at the Human Rights Foundation's second AI Hack for Freedom hackathon in Nashville in May 2026. Soapbox's Derek Ross was paired with Rwandan-American human rights activist Anaïse Kanimba. The team won second place and $15,000 in prizes.",
    },
    {
      question: 'How does Zuka resist censorship?',
      answer:
        "Each persona is its own Nostr keypair, separate from the human operating it. Each persona has its own self-custodial Bitcoin Lightning wallet via the Breez Spark SDK. AI inference runs through PPQ, paid for by the persona's own wallet via NWC auto-topup. Encrypted backups are published to Nostr relays under the operator's pubkey, so personas can be resurrected on a new device. There is no central server, no company to pressure, no bank account to freeze.",
    },
    {
      question: 'Who was Aimable Karasira?',
      answer:
        "Aimable Karasira was a Rwandan YouTuber who ran the channel Ukuri Mbona (\"The Truth As I See It\") with more than 60,000 followers. He was arrested in 2021 for criticizing the Rwandan Patriotic Front and the Kagame government and reportedly tortured in detention. Three days before the Nashville hackathon, he died in custody at a hospital in Kigali, on the day he was reportedly supposed to be released. His death was the immediate context for Zuka.",
    },
    {
      question: 'Where can I try Zuka?',
      answer:
        "Zuka is available as a PWA at zuka.live and as an Android app via Capacitor. The source code lives at github.com/zuka-org/zuka-pwa. Future distribution is planned via Zapstore, Google Play, and the Apple App Store.",
    },
  ],
};

export default function BuildingZuka() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        We built an AI persona platform for activists in 48 hours. Three days
        before the hackathon, a Rwandan YouTuber with 60,000 followers died in
        custody on the day he was reportedly supposed to be released. By
        Sunday, we had a working prototype that hides the human behind the
        voice — so the regime has no one to find, and no way to shut the voice
        up.
      </p>

      <figure className="my-8">
        <img
          src="/assets/blog/building-zuka/homepage.jpg"
          alt="Zuka homepage hero — Voices that can't be silenced. A young woman recording video on a phone gimbal overlooking Kigali, Rwanda, with the taglines: your identity stays hidden, a voice fully its own, impossible to silence."
          className="w-full rounded-lg"
        />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          Zuka's homepage: voices that can't be silenced.
        </figcaption>
      </figure>

      <p>
        A few months ago in January, the Soapbox team went to Bitcoin Park
        Austin for the AI Hack for Freedom hackathon, sponsored by the{' '}
        <a href="https://hrf.org" target="_blank" rel="noopener noreferrer">
          Human Rights Foundation
        </a>
        . We built{' '}
        <a href="/blog/building-pathos">Agora</a> with Leopoldo López — a
        censorship-resistant platform for Venezuelan activists that's now in
        production.
      </p>

      <p>
        This past weekend, HRF ran the second edition at Bitcoin Park's other
        location in Nashville. I came back for the same reason Soapbox went the
        first time: pair developers with real activists facing real problems.
        No hypothetical users. No imagined use cases. Just people whose lives
        depend on the tools we build.
      </p>

      <p>
        My team won second place at the Nashville hackathon, just like we did
        in Austin. $15,000 in prizes. But that's not what made the weekend.
      </p>

      <h2>When the Problem Walks Into the Room</h2>

      <p>
        I was paired with Anaïse Kanimba, a Rwandan-American human rights
        activist. Her father is Paul Rusesabagina — the man depicted in{' '}
        <em>Hotel Rwanda</em>, who was kidnapped and detained by the Kagame
        regime. She's spent her adult life advocating for political prisoners.
        She knows what authoritarian states do to people who speak.
      </p>

      <p>
        Anaïse didn't come with a wishlist of features. She came with a fresh,
        brutal data point. Three days before the hackathon, a Rwandan YouTuber
        named{' '}
        <a
          href="https://en.wikipedia.org/wiki/Aimable_Karasira"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aimable Karasira
        </a>{' '}
        died in custody at a hospital in Kigali. He ran a YouTube channel
        called <em>Ukuri Mbona</em> — "The Truth As I See It" — with more than
        60,000 followers. He had been arrested in 2021 for criticizing the
        Rwandan Patriotic Front and the Kagame government, sentenced to five
        years for "inciting division," and reportedly tortured while detained.
        He died on the day he was supposed to be released. The Rwandan
        Correctional Service called it a medication overdose. Exiled Rwandan
        human rights activists called it suspicious and demanded an
        independent investigation.
      </p>

      <p>That was the news Anaïse showed up with.</p>

      <p>Her ask was as simple as it gets:</p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/20">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-foreground mb-3">
              "You can't speak in Rwanda without being silenced or killed. I
              want an AI influencer that can't be killed or shut down."
            </blockquote>
            <p className="font-semibold text-orange-700 dark:text-orange-400">
              — Anaïse Kanimba
            </p>
          </CardContent>
        </Card>
      </div>

      <p>That's the problem. Now figure out the product.</p>

      <h2>What "Can't Be Silenced" Actually Means</h2>

      <p>
        Authoritarian regimes have a playbook for shutting voices down. We
        listed it on a whiteboard:
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-red-500">
          <CardContent className="p-6 space-y-4">
            <div>
              <p className="font-semibold text-red-700 dark:text-red-400">
                Physical violence.
              </p>
              <p className="text-sm text-muted-foreground">
                Kill the human. The voice goes silent.
              </p>
            </div>
            <div>
              <p className="font-semibold text-red-700 dark:text-red-400">
                Platform takedowns.
              </p>
              <p className="text-sm text-muted-foreground">
                Pressure YouTube, X, or Meta to remove the account.
              </p>
            </div>
            <div>
              <p className="font-semibold text-red-700 dark:text-red-400">
                Domain seizures.
              </p>
              <p className="text-sm text-muted-foreground">
                Block the website at the ISP level.
              </p>
            </div>
            <div>
              <p className="font-semibold text-red-700 dark:text-red-400">
                Bank account freezes.
              </p>
              <p className="text-sm text-muted-foreground">
                Choke off the money keeping the operation running.
              </p>
            </div>
            <div>
              <p className="font-semibold text-red-700 dark:text-red-400">
                Identity exposure.
              </p>
              <p className="text-sm text-muted-foreground">
                Once the regime knows who you are, they can find your family.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        Every centralized tool fails on at least one of these. Most fail on
        all of them.
      </p>

      <p>
        For an AI persona to actually be ungovernable by a state, every single
        one of these has to break differently than it does on traditional
        infrastructure. That's the design constraint.
      </p>

      <h2>48 Hours to Build Something Real</h2>

      <p>
        I was the only Soapbox attendee at the event this time around, and the
        only Soapbox member on the team. The hackathon's pairing model put me
        on a four-person team with three people I'd never worked with before:
      </p>

      <ul>
        <li>
          <strong>Anaïse</strong> — captain, product voice, demo lead, persona
          sign-off
        </li>
        <li>
          <strong>Me</strong> — frontend, Nostr integration, PWA, Android via
          Capacitor
        </li>
        <li>
          <strong>Jim</strong> — PPQ AI integration, AI video creation, video
          studio implementation
        </li>
        <li>
          <strong>Topher</strong> — Breez Spark wallet, donation surfacing, AI
          assistant wizard
        </li>
      </ul>

      <figure className="my-8">
        <img
          src="/assets/blog/building-zuka/team.jpg"
          alt="The Zuka hackathon team at Bitcoin Park Nashville"
          className="w-full rounded-lg"
        />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          The Zuka team at Bitcoin Park Nashville.
        </figcaption>
      </figure>

      <p>
        None of this would have shipped in 48 hours without{' '}
        <a href="/tools/mkstack">MKStack</a>. It's Soapbox's open-source starter
        kit for Nostr apps — React, Vite, Tailwind, shadcn/ui, and Nostrify
        already wired together, plus a library of pre-built components for the
        things every Nostr app needs: login, profiles, posts, zaps, relays. The
        tech stack and the building blocks were locked in before we landed in
        Nashville.
      </p>

      <p>By Sunday morning we had a working app.</p>

      <p>
        <strong>Zuka</strong> is a PWA — and an Android app — for creating and
        operating AI personas. The name is Kinyarwanda for <em>"rebirth."</em>{' '}
        Anaïse picked it. The metaphor is exactly right: even with a fresh
        face, an old voice can come back stronger.
      </p>

      <p>Here's what we shipped:</p>

      <ul>
        <li>
          <strong>Persona-owned Nostr identity.</strong> Every persona is its
          own Nostr keypair. The human running it is a separate keypair that
          never posts publicly. To outside observers, there's no link between
          them.
        </li>
        <li>
          <strong>Persona-owned Lightning wallet.</strong> Each persona gets
          its own self-custodial Spark wallet via the Breez SDK. It accepts
          zaps, exposes a Lightning Address, and pays for its own AI
          inference.
        </li>
        <li>
          <strong>Self-sustaining AI.</strong> AI inference runs through PPQ.
          The persona's wallet auto-tops-up its PPQ credits via NWC. Donations
          sustain the voice — the persona literally pays for its own
          thoughts.
        </li>
        <li>
          <strong>Encrypted backup on Nostr.</strong> Persona keys + wallet
          seed + assets are encrypted (NIP-44) to the operator's pubkey and
          published as a kind 30078 event. No identifying tags.
          Indistinguishable from any other Nostr application-data event.
        </li>
        <li>
          <strong>Video-first composer.</strong> Idea + sources + style →
          AI-generated video. Posted to Nostr (kind 1 with NIP-92), optionally
          cross-posted to X / Facebook / Instagram via webhook.
        </li>
        <li>
          <strong>Resurrection.</strong> Lose your phone? Log into the
          operator account on a new device, fetch the encrypted backups from
          relays, decrypt locally, every persona is back. Funded.
          Publishable.
        </li>
      </ul>

      <figure className="my-8">
        <img
          src="/assets/blog/building-zuka/composer.jpg"
          alt="Zuka composer section — Your words. Their voice. The world's ears. Curate the sources, shape the tone, Zuka turns a raw thought into a styled post in your persona's voice with citations attached."
          className="w-full rounded-lg"
        />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          The composer: curate the sources, shape the tone, ship in your
          persona's voice with citations attached.
        </figcaption>
      </figure>

      <h2>The Demo Moment</h2>

      <p>We pitched to the HRF judges with a six-minute live demo.</p>

      <p>
        Built a persona on stage. Filled in the wizard, generated a face with
        AI, minted a Nostr keypair, created a Lightning wallet. Then we
        composed a thought, watched the AI style it in the persona's voice,
        and published it to Nostr.
      </p>

      <p>
        Our plan was to close with a kill-and-resurrect beat — close the
        laptop, log the persona back in on a second device, prove the voice
        doesn't depend on us. We ran out of time. So instead, we played a
        video we'd generated earlier in the weekend: a short clip of the
        persona we'd built, talking in his own voice, on his own face, poking
        fun at the regime's tactics. The audience laughed.
      </p>

      <p>
        That worked too. Maybe better. The point of the demo wasn't really
        "the keys are portable" — it was "this voice belongs to itself now,
        and it has something to say." A laugh at a dictator's expense,
        delivered by a face that doesn't exist, paid for by money that can't
        be silenced.
      </p>

      <p>We took second place. $15,000 in prizes.</p>

      <h2>Why Nostr and Bitcoin (Again)</h2>

      <figure className="my-8">
        <img
          src="/assets/blog/building-zuka/designed-deliberately.jpg"
          alt="Zuka designed deliberately section — For the people whose words have weight. Zuka is built where compromise isn't an option. Every choice — what's encrypted, what's signed, what survives — was made with one question in mind: what happens when someone's safety depends on this?"
          className="w-full rounded-lg"
        />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          Every architectural choice answered one question: what happens when
          someone's safety depends on this?
        </figcaption>
      </figure>

      <p>
        Earlier this year, after Austin,{' '}
        <a href="/blog/building-pathos">
          I wrote about why we used Nostr and Bitcoin to build Agora
        </a>
        . The same logic applies here, sharpened by a different threat model.
      </p>

      <p>
        Nostr eliminates single points of failure for identity and publishing.
        There is no company to pressure, no server to seize, no database to
        compromise. The persona's identity is a cryptographic key replicated
        across hundreds of relays worldwide. To kill the voice, you'd have to
        take down every relay — and the moment one comes back online, the
        persona's posts can be rebroadcasted there, resurrected, reborn.
      </p>

      <p>
        Bitcoin solves the money problem the same way it does for human
        activists. A persona that depends on a credit card or a bank account
        is a persona that can be cut off in a single phone call to a payment
        processor. A persona with its own self-custodial Lightning wallet is
        one that gets paid in sats from anywhere, by anyone, without
        permission.
      </p>

      <p>
        But Zuka adds a new dimension:{' '}
        <strong>
          the AI inference is paid for by the persona itself
        </strong>
        . We're not running an OpenAI key on a server somewhere that can be
        revoked. Each persona has its own PPQ credits, funded directly by
        donations from supporters via NWC auto-topup. As long as someone in
        the world is willing to spend sats to keep the voice alive, the voice
        stays alive.
      </p>

      <p>
        That's the architecture activists asked for. That's what we shipped.
        An AI influencer that cannot be silenced.
      </p>

      <h2>What's Next</h2>

      <p>We're transitioning from hackathon V1 to a more ambitious V2.</p>

      <p>
        <strong>V2</strong> is the agent-driven character creator. Right now
        the persona wizard is form-based — you fill in name, bio, system
        prompt, upload a face. V2 replaces it with a real interview: the
        embedded AI asks you about your values, your region, what this voice
        stands for, and proposes a persona based on your answers. Plus video
        generation with persona likeness and voice consistency, multi-language
        interviews (starting with Kinyarwanda + English), and
        multi-operator-per-device for activists who need to compartmentalize
        persona groups.
      </p>

      <p>
        We're also pursuing app store releases.{' '}
        <a
          href="https://zapstore.dev/apps/live.zuka.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zapstore
        </a>{' '}
        was first — censorship-resistant, no gatekeepers, decentralized. Then
        Google Play and the Apple App Store via the AOS collective for wider
        reach. Websites can be blocked. Apps distributed through Zapstore
        can't.
      </p>

      <h2>The Point</h2>

      <p>
        Soapbox keeps showing up to these hackathons because the problems are
        real. In January, the team built{' '}
        <a href="https://agora.spot" target="_blank" rel="noopener noreferrer">
          Agora
        </a>{' '}
        with Leopoldo, who was asking how Venezuelan activists find each other
        when X gets banned and bank accounts are frozen. This time I was the
        one in the room, paired with Anaïse, who was asking how a voice
        survives the murder of the person speaking.
      </p>

      <p>
        The answers aren't in product spec documents. They're in the
        protocols. Nostr lets a voice exist without a platform. Bitcoin lets
        it earn without a bank.
      </p>

      <p>
        Stack those together and you get something new: a voice the regime
        can't trace back to a person to target. A persona that pays for its
        own thoughts. An influencer that can't be killed or shut down,
        because there's no one specific to find, and nothing specific to
        seize.
      </p>

      <p>
        That's Zuka. It's named <em>rebirth</em> for a reason.
      </p>

      <p>We built it in a weekend. We're just getting started.</p>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-orange-300 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-2">🗣️</div>
            <div className="text-2xl font-bold mb-3">
              A voice that can't be killed.
            </div>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Try Zuka, follow development on GitHub, or build your own
              freedom tech with MKStack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold"
              >
                <a
                  href="https://zuka.live"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Zuka
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://github.com/zuka-org/zuka-pwa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/tools/mkstack">
                  Build with MKStack
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}
