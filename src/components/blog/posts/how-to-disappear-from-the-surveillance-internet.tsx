import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  KeyRound,
  Bitcoin,
  Server,
  Network,
  Smartphone,
  ExternalLink,
  Fingerprint,
  Store,
  Wifi,
  CreditCard,
} from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blog/types';

export const meta: BlogPostMeta = {
  slug: 'how-to-disappear-from-the-surveillance-internet',
  title: 'How to Disappear From the Surveillance Internet',
  excerpt:
    "The UK's under-16 social media ban means age-checks for everyone. Here's how to opt out with Nostr, Bitcoin, NostrVPN & a $5 VPS — tools nobody can revoke.",
  coverImage:
    '/assets/blog/how-to-disappear-from-the-surveillance-internet/cover.jpg',
  date: '2026-06-16',
  author: {
    name: 'Derek Ross',
    picture: '/assets/avatars/derek.jpg',
  },
  ogImage: {
    url: '/assets/blog/how-to-disappear-from-the-surveillance-internet/cover.jpg',
  },
  featured: true,
  tags: [
    'UK social media ban',
    'under 16 ban',
    'online safety act',
    'age verification',
    'digital ID',
    'VPN ban UK',
    'nostr',
    'bitcoin',
    'nostrvpn',
    'fips',
    'tor',
    'tor browser',
    'privacy VPS',
    'anonymous hosting',
    'freedom tech',
    'self-sovereign',
    'privacy',
  ],
  keywords:
    'UK social media ban, under 16 ban, online safety act, age verification, digital ID, VPN ban UK, Nostr, Bitcoin, NostrVPN, FIPS, Tor, Tor Browser, privacy VPS, anonymous VPS hosting, 1984 Hosting, Njalla, OrangeWebsite, freedom tech, self-sovereign, privacy',
};

export default function HowToDisappearFromTheSurveillanceInternet() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        The UK just decided that being online should require showing your
        papers. Here's how to opt out — with tools that already exist, that
        nobody can revoke, and that you can run for the price of a coffee.
      </p>

      <p>
        On June 15, 2026, the UK government announced it would ban social media
        for everyone under 16. TikTok, Instagram, Snapchat, Facebook, X,
        YouTube — blocked for kids, with a "graduated" set of restrictions
        stacked on 16- and 17-year-olds and overnight curfews "under
        consideration" for under-18s. The government is calling it "Australia
        plus," because Australia did it first in December 2025 and the UK
        decided to go further. Regulations are expected to pass before
        Christmas, with the ban live by spring 2027.
      </p>

      <p>
        I'm not here to argue about whether kids should be on TikTok. That's a
        real conversation for real parents, and I'm not going to pretend it
        isn't.
      </p>

      <p>
        I'm here to talk about the machine you have to build to enforce a thing
        like this. Because you cannot stop a 15-year-old from opening Instagram
        without first answering one question for <em>everyone</em>: who are
        you, and prove it.
      </p>

      <p>
        That's the part nobody voted for. And that's the part that doesn't go
        away.
      </p>

      <h2>The Quiet Part</h2>

      <p>
        To ban under-16s from social media, you need to know everyone's age. To
        know everyone's age, you need to check everyone's identity. So the
        actual policy isn't "kids off social media." The actual policy is{' '}
        <strong>age verification for the entire population</strong> — every
        adult, every login, forever.
      </p>

      <p>
        This isn't speculative. It's already happening. The Online Safety Act's
        age-verification rules went live on July 25, 2025. Within minutes,
        Proton VPN reported UK signups surging over 1,400% in an hour, settling
        into a sustained 1,800% daily increase. NordVPN reported a 1,000% jump
        in purchases. Five VPN apps hit the top 10 free apps on the UK App
        Store by the following Monday. The Age Verification Providers
        Association reported around 5 million extra age checks <em>per day</em>.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/20">
          <CardContent className="p-6">
            <blockquote className="text-xl font-semibold italic text-foreground">
              Five million people a day, proving who they are to look at the
              internet.
            </blockquote>
          </CardContent>
        </Card>
      </div>

      <p>
        The approved ways to prove it tell you everything: facial age
        estimation from a live selfie, credit card checks, passport-to-selfie
        matching, or a "digital ID wallet." Read that last one again. The end
        state of "protect the children" is a government ID you carry to use the
        web.
      </p>

      <p>
        And we already know how that ends, because it already leaked. In
        October 2025, an age-verification vendor breach reportedly exposed the
        photo IDs of around 70,000 Discord users. The Open Rights Group put it
        plainly: it's becoming "virtually impossible" to be online in the UK
        without handing over identity documents or biometric data. Big Brother
        Watch called it a "papers please" internet.
      </p>

      <h2>Then They Came for the Escape Hatch</h2>

      <p>
        When millions of Brits reached for VPNs, the government noticed.
      </p>

      <p>
        Ofcom declared that platforms "must not host, share or permit content
        encouraging use of VPNs to get around age checks" — and the government
        confirmed to the BBC that under the Online Safety Act, it's now illegal
        for platforms to do so. Ofcom told parents they "should block or
        control VPN usage" at home.
      </p>

      <p>
        Then it escalated. A national consultation — "Growing up in the online
        world" — closed in May 2026 explicitly contemplating whether VPNs
        should be <em>age-restricted</em> if they undermine the rules. The
        House of Lords went further and floated an outright VPN ban for
        children. Ministers have so far said a blanket ban is "not on the
        cards" because VPNs are "essential to data protection for businesses" —
        which is a careful way of saying <em>not yet, and not for everyone</em>.
      </p>

      <p>
        Mozilla — the people who make Firefox — warned UK regulators that
        age-restricting VPNs "will create massive cybersecurity risks" and
        "undermine the privacy and security of all users while failing to
        protect kids." They're right. But notice the shape of this. First you
        verify identity to protect kids. Then people route around it. Then you
        move to close the route. Each step is sold as discrete and reasonable.
        Stacked together, they're an architecture.
      </p>

      <p>
        Pair this with the digital ID push — Keir Starmer's mandatory ID scheme
        announced in September 2025, the one the press nicknamed "BritCard," the
        one a parliamentary committee later called "nothing short of a fiasco" —
        and the trajectory is impossible to miss. Age verification trains you to
        prove identity online. Digital ID gives you the thing to prove it with.
        VPN restrictions close the exit. That's not a conspiracy theory. That's
        just three news cycles read in order.
      </p>

      <h2>This Is Why We Build What We Build</h2>

      <p>
        At Soapbox, we don't build tools for a hypothetical dystopia. We build
        them with activists who are already living in one.
      </p>

      <p>
        We built{' '}
        <a href="https://agora.spot" target="_blank" rel="noopener noreferrer">
          Agora
        </a>{' '}
        with{' '}
        <a
          href="https://en.wikipedia.org/wiki/Leopoldo_L%C3%B3pez"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leopoldo López
        </a>
        , a Venezuelan opposition leader who spent years as a political
        prisoner. We built{' '}
        <a href="https://zuka.live" target="_blank" rel="noopener noreferrer">
          Zuka
        </a>{' '}
        with{' '}
        <a
          href="https://en.wikipedia.org/wiki/Ana%C3%AFse_Kanimba"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anaïse Kanimba
        </a>
        , whose father is the man from <em>Hotel Rwanda</em>,
        three days after a Rwandan YouTuber with 60,000 followers died in
        custody on the day he was supposed to be released. The threat models in
        those rooms make the UK look gentle. X gets banned. Bank accounts get
        frozen. The internet goes dark. The person speaking gets killed.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-orange-500 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20">
          <CardContent className="p-6">
            <p className="text-lg text-foreground m-0">
              Here's what we learned building for people who can't afford to be
              wrong:{' '}
              <strong>
                the answer to "what if they take it away" is to build things
                that don't have an owner to pressure, a server to seize, or a
                database to leak.
              </strong>
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        That's not idealism. It's architecture. And the same architecture that
        keeps a Venezuelan organizer online keeps a British adult from having to
        show their passport to read a forum. The surveillance internet has one
        weakness — it depends on choke points. Identity providers. App stores.
        ISPs. Payment processors. Remove the choke points and there's nothing
        left to lean on.
      </p>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-5 flex items-start gap-3">
              <Fingerprint className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold m-0">Identity providers</p>
                <p className="text-sm text-muted-foreground m-0">
                  Broken by Nostr — an identity nobody issues you.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 flex items-start gap-3">
              <CreditCard className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold m-0">Payment processors</p>
                <p className="text-sm text-muted-foreground m-0">
                  Broken by Bitcoin — money nobody can freeze.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 flex items-start gap-3">
              <Store className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold m-0">App stores &amp; hosts</p>
                <p className="text-sm text-muted-foreground m-0">
                  Broken by a $5 VPS — your own corner of the web.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-5 flex items-start gap-3">
              <Wifi className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold m-0">ISPs &amp; networks</p>
                <p className="text-sm text-muted-foreground m-0">
                  Broken by NostrVPN and FIPS — a mesh with no middle.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <p>
        Here's the toolkit. None of this requires permission. Most of it is free
        or nearly free.
      </p>

      <h2>1. Get an Identity Nobody Issued You</h2>

      <p>
        The root of all of it is <strong>Nostr</strong>.
      </p>

      <p>
        On the old internet, your identity is an account someone grants you — an
        email, a phone number, a profile on a platform that can suspend it. On
        Nostr, your identity is a cryptographic key pair you generate yourself.
        Your public key is who you are. Your private key proves it. No email, no
        phone number, no company in the loop. No one issued it, so no one can
        revoke it.
      </p>

      <p>
        This is the thing that breaks the whole verification regime at the root.
        There's no central account to check, no platform to pressure into
        demanding your ID, no registry to join. Your followers follow your key,
        not your presence on someone's server. Switch apps and they come with
        you.
      </p>

      <p>
        Soapbox builds{' '}
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
          Ditto
        </a>{' '}
        on exactly this. It's a social platform where your account is a key, not
        a permission slip — posts, articles, video, livestreams, polls,
        communities, the works. "Your content, your vibe, your rules" isn't a
        slogan, it's a description of who holds the keys: you do. And because
        Ditto bridges to Bluesky and Mastodon, you're not stuck in a walled
        garden to use it.
      </p>

      <p>
        <strong>
          Cost: free. Start at{' '}
          <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
            ditto.pub
          </a>
          .
        </strong>
      </p>

      <h2>2. Get Money Nobody Can Freeze</h2>

      <p>
        The second choke point is money. Age-verification vendors, ad networks,
        app stores, the whole surveillance economy runs on payment rails that
        can be cut with a phone call.
      </p>

      <p>
        <strong>Bitcoin</strong> removes that lever. When a Venezuelan
        activist's bank account is frozen, a $10 Lightning zap from Germany
        still lands in seconds, no permission required. The same property that
        makes Bitcoin matter in Caracas makes it matter when paying for a
        privacy tool that a regulator would rather you didn't have. No card
        linked to your real name. No processor deciding what you're allowed to
        buy.
      </p>

      <p>
        On Nostr, this shows up as zaps — Bitcoin sent creator-to-creator with
        no middleman taking a cut and no ad model harvesting you to make up the
        difference. The money and the identity layer fit together: you can earn,
        spend, and support directly, as yourself, without a bank as a witness.
      </p>

      <h2>3. Run Your Own Corner of the Internet for $5 a Month</h2>

      <p>
        Here's the part people don't believe until they do it: you can host your
        own piece of the web for the price of a sandwich.
      </p>

      <p>
        A VPS — a virtual private server — runs about <strong>$5 a month</strong>
        . On it you can run your own Nostr relay, host your own website, run your
        own services. Ditto is built specifically for this: it compiles to
        static files and deploys on a $5 VPS, GitHub Pages, Netlify, or a
        Raspberry Pi sitting in your closet. When your social platform is a
        folder of files you control on a box you rent, there is no company in
        between to serve you an ID prompt.
      </p>

      <p>
        And you don't need to be an engineer anymore. Soapbox's{' '}
        <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
          Shakespeare
        </a>{' '}
        lets you build and deploy real web apps by describing them in plain
        language — the same tool we used to ship Agora and Ditto 2.0. The gap
        between "I wish I controlled my own thing" and "I control my own thing"
        is now an afternoon.
      </p>

      <p>
        <strong>
          Cost: ~$5/month. Owning your own infrastructure: priceless.
        </strong>
      </p>

      <h2>4. Move Packets They Can't Read</h2>

      <p>
        A commercial VPN helps. But it's still a company — one with servers to
        subpoena and a corporate stance that can change. For people who want to
        go further, a new class of tooling is emerging that has no company at
        all.
      </p>

      <p>
        <a href="https://nostrvpn.org" target="_blank" rel="noopener noreferrer">
          <strong>NostrVPN</strong>
        </a>
        , from early Bitcoin contributor Martti Malmi, links your own devices
        into an encrypted private mesh with no control server, no accounts, and
        no email — your Nostr key <em>is</em> your device identity. Think
        Tailscale, but with nobody in the middle. It's free and open source.
      </p>

      <p>
        Next up, we have{' '}
        <a href="https://fips.network" target="_blank" rel="noopener noreferrer">
          <strong>FIPS</strong>
        </a>{' '}
        — the Free Internetworking Peering System — a self-organizing encrypted
        mesh that works over <em>anything that moves packets</em>: WiFi,
        Ethernet, UDP, Tor, the Nym mixnet, even Bluetooth and serial cables. No
        DNS provider, no certificate authority, no exit node to seize. It elects
        its own root, merges with neighbors on contact, and reroutes around
        damage on its own. One Nostr keypair, zero registries. If the internet
        goes dark — or gets walled behind an ID check — a mesh that runs over
        Bluetooth doesn't care.
      </p>

      <h2>The Point</h2>

      <p>
        Every one of these tools breaks a different choke point. Nostr removes
        the identity gatekeeper. Bitcoin removes the payment gatekeeper. A $5
        VPS removes the hosting gatekeeper. NostrVPN and FIPS remove the network
        gatekeeper. Stack them together and the surveillance internet has
        nothing left to grab.
      </p>

      <p>
        That's the whole strategy. Not one magic app. A set of independent
        tools, each owned by no one, that together let an ordinary person be
        online as themselves without asking anyone's permission and without
        leaving a trail for sale.
      </p>

      <p>
        The UK is going to spend the next few years building a machine to verify
        who everyone is, all the time. They'll call it child safety, and some of
        them will even mean it. But the machine they're building doesn't know
        how to tell the difference between a kid sneaking onto Snapchat and an
        adult who simply refuses to show their papers to read the news. It
        treats everyone as a suspect to be cleared.
      </p>

      <p>
        You don't have to live inside that machine. The exits already exist.
        They're open source, they're cheap, and the only thing standing between
        you and self-sovereignty is the afternoon it takes to set them up.
      </p>

      <h2>Your Escape Kit: Exactly What to Download</h2>

      <p>
        You don't need to do all of this at once. Start at Step 1. Each step
        stands on its own and makes you harder to track. Do as many as you want.
      </p>

      {/* Step 1 */}
      <div className="not-prose my-8">
        <Card className="border-orange-200 dark:border-orange-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-white text-sm font-bold">
                1
              </span>
              <span className="flex items-center gap-2">
                <KeyRound className="w-5 h-5 text-orange-600" />
                Get a Nostr identity
              </span>
              <span className="ml-auto text-sm font-normal text-muted-foreground">
                5 minutes · free
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p className="m-0">
              Open Ditto, let it generate your keys, and you're done. That's
              your account. No email, no phone number, nothing to verify.
            </p>
            <p className="m-0">
              <a
                href="https://ditto.pub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-700 dark:text-orange-400 underline font-semibold"
              >
                Ditto
              </a>{' '}
              · Soapbox's social platform. Your identity{' '}
              <em>and</em> a{' '}
              <strong className="text-foreground">built-in Bitcoin wallet</strong>{' '}
              in one app, so it covers Step 2 too.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button size="sm" variant="outline" asChild>
                <a
                  href="https://apps.apple.com/us/app/ditto-fun-social-media/id6761851821"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/icons/app-store.svg"
                    alt=""
                    className="mr-2 h-4 w-4"
                  />
                  iOS
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a
                  href="https://play.google.com/store/apps/details?id=pub.ditto.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/icons/google-play.svg"
                    alt=""
                    className="mr-2 h-4 w-4"
                  />
                  Android
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a
                  href="https://zapstore.dev/apps/pub.ditto.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/icons/zapstore.png"
                    alt=""
                    className="mr-2 h-4 w-4"
                  />
                  Zapstore
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-amber-200 bg-amber-50 dark:border-amber-900 dark:bg-amber-950/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-amber-700 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-300 mb-2 mt-0">
                  Protect your keys
                </h4>
                <p className="text-sm text-amber-900 dark:text-amber-200 m-0">
                  Your private key (nsec) <em>is</em> your account — treat it
                  like the keys to your house. Back it up somewhere safe, and
                  never paste it into a site you don't trust. (New to this? See
                  our guide on{' '}
                  <a
                    href="/blog/managing-nostr-keys"
                    className="underline font-medium"
                  >
                    managing your Nostr keys
                  </a>
                  .)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step 1.5 */}
      <div className="not-prose my-8">
        <Card className="border-orange-200 dark:border-orange-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-orange-400 text-white text-xs font-bold">
                1.5
              </span>
              <span className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-orange-600" />
                Harden the phone underneath it all
              </span>
              <span className="ml-auto text-sm font-normal text-muted-foreground">
                optional
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p className="m-0">
              This one's a bigger commitment, but it's the single biggest
              privacy upgrade most people can make.{' '}
              <strong className="text-foreground">GrapheneOS</strong> is a
              hardened, de-Googled version of Android that strips out the
              tracking baked into a normal phone — while still running the apps
              you actually use. It only runs on Google Pixel phones, and you can
              install it from your web browser by clicking buttons — no command
              line.
            </p>
            <p className="m-0">
              <a
                href="https://grapheneos.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-700 dark:text-orange-400 underline font-semibold"
              >
                GrapheneOS
              </a>{' '}
              · install it straight from your browser with the{' '}
              <a
                href="https://grapheneos.org/install/web"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-700 dark:text-orange-400 underline"
              >
                official web installer
              </a>
              . (Pixel 8 or newer recommended.)
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Step 2 */}
      <div className="not-prose my-8">
        <Card className="border-orange-200 dark:border-orange-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-white text-sm font-bold">
                2
              </span>
              <span className="flex items-center gap-2">
                <Bitcoin className="w-5 h-5 text-orange-600" />
                Use your built-in Bitcoin wallet
              </span>
              <span className="ml-auto text-sm font-normal text-muted-foreground">
                already done
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p className="m-0">
              If you started with Ditto in Step 1, you already have this. Ditto
              ships with a{' '}
              <strong className="text-foreground">built-in Bitcoin wallet</strong>
              , so you can send and receive money — and zap creators — right from
              the same app, without a bank watching. No separate download, no
              extra account.
            </p>
            <p className="m-0">
              That's how you support people directly: a few sats sent
              creator-to-creator, no middleman taking a cut, no payment processor
              deciding what you're allowed to fund. (See how it works under the
              hood in{' '}
              <a
                href="/blog/onchain-zaps-in-ditto"
                className="text-orange-700 dark:text-orange-400 underline"
              >
                On-chain Zaps in Ditto
              </a>
              .)
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Step 3 */}
      <div className="not-prose my-8">
        <Card className="border-orange-200 dark:border-orange-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-white text-sm font-bold">
                3
              </span>
              <span className="flex items-center gap-2">
                <Server className="w-5 h-5 text-orange-600" />
                Run your own corner of the web
              </span>
              <span className="ml-auto text-sm font-normal text-muted-foreground">
                $5/month
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p className="m-0">
              Rent a small server and host your own site, relay, or social
              platform. No coding required.
            </p>
            <ul className="space-y-2 m-0 list-none pl-0">
              <li>
                <strong className="text-foreground">
                  Pick a VPS (cheapest):
                </strong>{' '}
                <a
                  href="https://www.hetzner.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 dark:text-orange-400 underline"
                >
                  Hetzner
                </a>{' '}
                (~€4/mo) ·{' '}
                <a
                  href="https://www.digitalocean.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 dark:text-orange-400 underline"
                >
                  DigitalOcean
                </a>{' '}
                ·{' '}
                <a
                  href="https://www.vultr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 dark:text-orange-400 underline"
                >
                  Vultr
                </a>
                . These are the popular, low-cost options — but they're
                standard companies that want your real name and card.
              </li>
              <li>
                <strong className="text-foreground">
                  Pick a VPS (for maximum privacy):
                </strong>{' '}
                <a
                  href="https://1984.hosting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 dark:text-orange-400 underline"
                >
                  1984 Hosting
                </a>{' '}
                ·{' '}
                <a
                  href="https://njal.la"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 dark:text-orange-400 underline"
                >
                  Njalla
                </a>{' '}
                ·{' '}
                <a
                  href="https://www.orangewebsite.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 dark:text-orange-400 underline"
                >
                  OrangeWebsite
                </a>
                . Privacy-first hosts in jurisdictions like Iceland that take
                minimal data and accept Bitcoin or Monero — pay with the wallet
                from Step 2 and you can sign up with no real name attached.
              </li>
              <li className="text-xs italic">
                One honest caveat: no host is magic. A provider can still see
                what runs on the box and is bound by its country's laws — what
                "private" really buys you is how little they know about{' '}
                <em>you</em> (anonymous signup, crypto payment) and a friendlier
                jurisdiction.
              </li>
              <li>
                <strong className="text-foreground">Build the thing with AI:</strong>{' '}
                <a
                  href="https://shakespeare.diy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 dark:text-orange-400 underline"
                >
                  Shakespeare
                </a>{' '}
                (describe an app in plain English, deploy it). New to it? Read{' '}
                <a
                  href="/blog/build-without-coding"
                  className="text-orange-700 dark:text-orange-400 underline"
                >
                  how to build without coding
                </a>
                .
              </li>
              <li>
                <strong className="text-foreground">
                  Get apps without app-store gatekeepers (Android):
                </strong>{' '}
                <a
                  href="https://zapstore.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 dark:text-orange-400 underline"
                >
                  Zapstore
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Step 4 */}
      <div className="not-prose my-8">
        <Card className="border-orange-200 dark:border-orange-900">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 text-white text-sm font-bold">
                4
              </span>
              <span className="flex items-center gap-2">
                <Network className="w-5 h-5 text-orange-600" />
                Move your packets across a mesh
              </span>
              <span className="ml-auto text-sm font-normal text-muted-foreground">
                advanced
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm text-muted-foreground">
            <p className="m-0">
              For when you want a network with no company in the middle at all.
            </p>
            <ul className="space-y-2 m-0 list-none pl-0">
              <li>
                <a
                  href="https://nostrvpn.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 dark:text-orange-400 underline font-semibold"
                >
                  NostrVPN
                </a>{' '}
                — links your own devices privately. Install the app, or{' '}
                <code>cargo install nvpn</code>. (
                <a
                  href="https://github.com/mmalmi/nostr-vpn/releases/latest"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 dark:text-orange-400 underline"
                >
                  releases
                </a>
                )
              </li>
              <li>
                <a
                  href="https://fips.network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 dark:text-orange-400 underline font-semibold"
                >
                  FIPS
                </a>{' '}
                — the encrypted mesh underneath.{' '}
                <a
                  href="https://learn.fips.network"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 dark:text-orange-400 underline"
                >
                  Learn how it works
                </a>
                .
              </li>
              <li>
                <a
                  href="https://www.torproject.org/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 dark:text-orange-400 underline font-semibold"
                >
                  Tor
                </a>{' '}
                — not Nostr-native, but the most battle-tested option of all.
                The Tor Browser routes your traffic through volunteer-run relays
                to anonymize it and slip past blocks — a nonprofit network with
                no company to pressure. Free, and as simple as installing a
                browser.{' '}
                <a
                  href="https://tb-manual.torproject.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-700 dark:text-orange-400 underline"
                >
                  User guide
                </a>
                .
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <hr />

      <p>
        For years, the case for this stuff sounded abstract to most people in
        the free world. Privacy was something you needed if you were a
        dissident, a journalist, someone living under a regime. Everyone else
        could afford not to care.
      </p>

      <p>
        That excuse is gone. The surveillance is being built right here, in a
        democracy, in plain sight — wrapped in the language of child safety and
        rolled out by a government you can vote for. Age checks for everyone. A
        digital ID to carry. An open question about whether you're even allowed
        the tools to opt out. This isn't a warning about some other country's
        future. It's the news.
      </p>

      <p>
        So don't wait for it to get worse before you take ten minutes to set
        yourself free. The exits are open source, they're cheap, and they work
        today.
      </p>

      <p>It's all out there. Go own your corner of it.</p>

      <div className="not-prose my-16">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-white opacity-90" />
          <h2 className="text-4xl font-bold text-white mb-6 mt-0">
            Go own your corner of the internet.
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Get a Nostr identity nobody issued you, or build your own freedom
            tech. The exits are open source, cheap, and work today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
                Start on Ditto
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
              asChild
            >
              <a
                href="https://shakespeare.diy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Build with Shakespeare
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <h2>Related Reading</h2>

      <ul>
        <li>
          <a href="/blog/building-zuka">
            Building Zuka: A Voice That Can't Be Killed
          </a>
        </li>
        <li>
          <a href="/blog/agora-is-live">
            Agora Launched at Oslo Freedom Forum: What We Built and Why
          </a>
        </li>
        <li>
          <a href="/blog/managing-nostr-keys">
            How to Store and Manage Your Nostr Private Key
          </a>
        </li>
        <li>
          <a href="/blog/onchain-zaps-in-ditto">On-chain Zaps in Ditto</a>
        </li>
        <li>
          <a href="/blog/build-without-coding">
            How to Build a Nostr App Without Coding
          </a>
        </li>
        <li>
          <a href="/blog/free-software-free-societies">
            Free Software, Free Societies
          </a>
        </li>
      </ul>
    </article>
  );
}
