import type { BlogPostMeta } from '@/lib/blog/types';
import { Card, CardContent } from '../../ui/card';
import { Globe, Lock } from 'lucide-react';

export const meta: BlogPostMeta = {
  slug: 'agora-is-live',
  title: 'Agora Launched at Oslo Freedom Forum',
  excerpt:
    'On June 2nd we launched our new version of Agora at the Oslo Freedom Forum. Here is the story behind it, how the unstoppable Bitcoin wallet works, and what we are doing next.',
  coverImage: '/assets/blog/agora-is-live/Agora-Launched-OFF-Leopoldo.png',
  date: '2026-06-04',
  author: {
    name: 'M. K. Fain',
    picture: '/assets/avatars/mk.jpg',
  },
  ogImage: {
    url: '/assets/blog/agora-is-live/Agora-Launched-OFF-Leopoldo.png',
  },
  featured: true,
  tags: [
    'agora',
    'agora launch',
    'oslo freedom forum',
    'world liberty congress',
    'bitcoin',
    'silent payments',
    'bip-352',
    'hd wallet',
    'palestine',
    'venezuela',
    'human rights',
    'censorship resistance',
    'nostr',
  ],
  keywords:
    'agora launch, agora oslo freedom forum, agora silent payments, agora bitcoin wallet, agora bip-352, how agora works, agora hd wallet, agora palestine pilot, agora venezuela, agora roadmap, agora.spot, censorship-resistant fundraising, silent payment donations, bitcoin donations for activists, gofundme without borders, no custodian fundraising, leopoldo lopez agora',
  faq: [
    {
      question: 'What is Agora?',
      answer:
        'Agora is a censorship-resistant Bitcoin donation platform built by Soapbox in partnership with the World Liberty Congress. Activists launch campaigns and donors send Bitcoin directly to them, wallet to wallet. Agora never holds the money.',
    },
    {
      question: 'When did Agora launch?',
      answer:
        'The new version of Agora launched on June 2, 2026 at the Oslo Freedom Forum, on the OFF Freedom Tech stage.',
    },
    {
      question: 'How does Agora keep donations private?',
      answer:
        "Activists can accept Bitcoin Silent Payments (BIP-352). Each donor's wallet derives a fresh, unlinkable Taproot output from the activist's static silent-payment address, so observers can't tie donations together or back to the campaign.",
    },
    {
      question: 'Does Agora ever take custody of donor funds?',
      answer:
        "No. Donations move directly from the donor's wallet to the activist's wallet on Bitcoin. There is no escrow account, no platform balance, and no operator who could freeze or redirect funds. If Agora disappeared tomorrow, every campaign would keep working.",
    },
    {
      question: 'What is next for Agora?',
      answer:
        'A verification system for campaigns, local pilot coalitions in Venezuela, Palestine, and Africa, and marketing and funding partnerships with Bitcoin businesses.',
    },
  ],
};

export default function AgoraIsLive() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        On June 2nd, we launched our new version of{' '}
        <a href="https://agora.spot" target="_blank" rel="noopener noreferrer">
          Agora
        </a>{' '}
        on the OFF Freedom Tech stage. Agora was borne out of a 6-month
        partnership with Venezuelan opposition leader{' '}
        <a
          href="https://en.wikipedia.org/wiki/Leopoldo_L%C3%B3pez"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leopoldo López
        </a>{' '}
        and his team from the{' '}
        <a
          href="https://worldlibertycongress.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          World Liberty Congress
        </a>
        , including Aaron Rodriguez, who leads Tech and Freedom initiatives at
        WLC.
      </p>

      <h2>Background: Building through collaboration with the HRF and WLC</h2>

      <p>
        We built our first version of Agora with Leo and Aaron at a January{' '}
        <a href="https://hrf.org" target="_blank" rel="noopener noreferrer">
          HRF
        </a>{' '}
        <a
          href="https://hrf.org/latest/announcing-the-ai-hack-for-freedom-hackathon-winners/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI Hack for Freedom
        </a>
        . This version featured voices from around the world rising up against
        censorship, especially important since sites like Twitter are often
        banned in countries like Venezuela and other dictatorships. Leo and
        Aaron onboarded over 1,000 members of their Voluntad Popular community
        onto Agora.
      </p>

      <p>
        But we soon found that this platform format offered little real benefit
        to the users beyond other Nostr apps like Primal. We analyzed months of
        data and traffic to the site and found one consistent pattern: people
        showed up when there was money available. Week after week, people showed
        up to receive donations Leo was offering through the Freedom Zap Fund,
        and then disappeared the next day. USDT, a "stablecoin" tied to the US
        Dollar, has become common currency and a method for storing value where
        the Venezuelan fiat currency has inflated to worthlessness. Yet, users
        were not even receiving enough zaps to be able to exchange into the
        currency they needed.
      </p>

      <p>
        Aaron and Leo have both been detained as political prisoners, and told
        us that sometimes as little as $800 USD is needed to help someone being
        hunted by the regime escape to safety. By the time they know they need
        the money, the question of privacy is already out the window. The only
        thing that matters then is receiving and spending the money as easily as
        possible. Any barrier to access at this point is the #1 liability. Being
        "unstoppable" money, including by dictators, corporations, or technical
        barriers to accessibility was the truly unique value.
      </p>

      <p>
        At the same time, Team Soapbox member Morgan Maksoud-Miller was building
        partnerships with families in Gaza displaced and injured by the war.
        With the Palestinian financial system in collapse, and the only access
        to money typically available through Hamas, families turned to
        cryptocurrencies for buying basics like food and for assistance with
        evacuation. Like in Venezuela, they were also storing value in USDT.
        Sending crypto was one of the only accessible ways to get money to a
        real person in Gaza without an intermediary. GoFundMe and similar
        platforms rely on having a point of contact in the US or another
        accepted country to facilitate the transfer of funds. Often, those who
        are the most vulnerable are the least likely to have access to this.
      </p>

      <p>
        Across the world the pattern emerged: crypto was the solution when
        financial systems collapsed or couldn't be used by people at risk.
        Sending Bitcoin, which was easily exchanged for stablecoins when needed,
        provided an actual lifeline. Yet the funds most users were receiving
        with content-based zaps amounted to pennies, amounts so low it was
        practically insulting. The only thing missing was a platform to connect
        people in need with people willing to donate real amounts that could
        make an actual difference.
      </p>

      <h2>How we built Agora</h2>

      <p>
        After six months of partnership and research, we realized we needed to
        take the entire project back to the drawing board. We scrapped the old
        code base, and built the new Agora as a fork of{' '}
        <a
          href="https://soapbox.pub/ditto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ditto
        </a>
        . Forking Ditto gave us the benefit of a huge context reference for
        anything we wanted to include and allowed us to work extremely quickly.
        We ripped out anything we didn't need, rebranded, and dramatically
        changed and added many core features.
      </p>

      <p>
        The largest change and the focus of this work was the wallet. Our work
        and research proved that accessibility and ease of exchange was
        paramount, but there were also serious privacy concerns with the
        on-chain zap system Ditto recently implemented. Thanks to the
        conversation sparked by Ditto's implementation, we were able to harvest
        ideas and feedback from the Nostr and Bitcoin community to come up with
        a system to offer Agora users the best of both worlds with minimal
        tradeoffs to our core accessibility and exchange concerns. We would like
        to thank everyone who worked productively with us on this issue to push
        towards real solutions, including members of the AOS community and our
        partners and funders at{' '}
        <a href="https://hrf.org" target="_blank" rel="noopener noreferrer">
          HRF
        </a>{' '}
        who provided leadership and guidance on the final implementation.
      </p>

      <h2>Unstoppable funding</h2>

      <p>
        To be truly unstoppable funding, Agora could not depend on any server or
        middle-man service (including us) that could be shut down by a
        government, corporation, or hurricane. There are multiple benefits to
        operating this way for our users:
      </p>

      <ol>
        <li>
          No third-party can take down/censor their fundraiser (unlike with
          GoFundMe).
        </li>
        <li>
          No one can rug their funds after they've been donated (unlike with
          custodial Bitcoin layers).
        </li>
        <li>
          No one can subpoena Agora to receive information about the users (or
          if they do, we won't have anything to give them).
        </li>
        <li>
          Operating Agora requires practically zero infrastructure set up, which
          means that if our version of Agora went down anyone in the world could
          easily spin the code of the website up on a new domain with zero
          infrastructure or hosting knowledge (unlike with self-hosted solutions
          like BTCPay servers).
        </li>
        <li>
          With no infrastructure costs, the cost of maintaining Agora in
          perpetuity is extremely cheap, which means we do not need to charge any
          platform fees so all funds go directly to the intended recipient
          (unlike other Bitcoin fundraising platforms).
        </li>
      </ol>

      <p>
        Regular on-chain Bitcoin is the obvious solution to this but comes with
        privacy tradeoffs, especially for people in high-risk situations.
        However, concerns about the privacy of Bitcoin came entirely from the
        Bitcoin community itself, not the activists and people we were speaking
        to in war-torn regions. Time and time again when we asked real people in
        desperate need of money if privacy was important if it came at the
        tradeoff of ease of access, the answer was a resounding no and a
        frustration with the paternalism of the Bitcoin community.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/20">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-foreground mb-3">
              "I was kidnapped by the state, you don't need to explain privacy
              to me. If you ask someone who is about to get caught what they
              prefer, to receive this money from Agora or to be scared someone
              will know you will receive the money, they want to receive the
              money. By the time you get to this point, the decision about
              privacy is already made by the person."
            </blockquote>
            <p className="font-semibold text-orange-700 dark:text-orange-400">
              An activist now living in exile
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-foreground mb-3">
              "A lot of people ask me for help to create a GoFundMe. You need to
              decide — go public and receive the money or go private and find
              another way. A lot of them all around the world, they don't have
              the chance to decide, not even just for their life what to eat
              today or what to study. It's the possibility to decide. A lot of
              people will be waiting to create their campaign and willing to
              raise the risks."
            </blockquote>
            <p className="font-semibold text-blue-700 dark:text-blue-400">
              An organizer who works with people in authoritarian regimes around
              the world
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        User choice became the obvious solution. People understand their own
        situations better than we do. Each user should be free to choose the
        level of privacy they require. Nostr already naturally provides this, as
        anyone can create an npub completely anonymously. Silent Payments became
        the solution for user financial autonomy.
      </p>

      <h2>Agora Wallet: BIP-32 HD Wallet + Silent Payments</h2>

      <p>
        The Bitcoin wallet is derived deterministically from the Nostr secret
        key. The benefit of this to the user is that they don't have multiple
        keys to manage and store, their wallet exists automatically at signup,
        and it can be ported with them to any normal Bitcoin wallet.
      </p>

      <p>
        (<code>src/lib/hdwallet/seed.ts</code>):
      </p>

      <pre><code>{`nsec (32 bytes)
  -> HKDF-SHA256(salt="", info="agora/v1", len=32)  -> entropy (32 B)
  -> BIP-39 encode                                  -> 24-word mnemonic
  -> PBKDF2-HMAC-SHA512(passphrase="", 2048 iters)  -> 64-byte seed
  -> HDKey.fromMasterSeed                           -> BIP-32 root`}</code></pre>

      <p>
        HKDF is one-way, so writing down the 24-word mnemonic doesn't leak the
        Nostr identity. The <code>"agora/v1"</code> info string is a domain
        separator that lets us rotate the derivation later without touching the
        Nostr key. And because the output is a standard BIP-39 seed, the wallet
        roundtrips into Sparrow, Electrum, Trezor, Ledger, or anything else
        BIP-39 compatible. No Agora-shaped lock-in.
      </p>

      <p>
        From the BIP-32 root, Agora maintains two independent hardened branches
        (<code>src/lib/hdwallet/derivation.ts</code>):
      </p>

      <div className="not-prose my-6">
        <Card>
          <CardContent className="p-6 space-y-5">
            <div className="flex gap-3">
              <Globe className="size-5 mt-0.5 text-orange-600 dark:text-orange-400 shrink-0" />
              <div>
                <p className="font-semibold text-orange-700 dark:text-orange-400">
                  BIP-86 (Taproot, single-key)
                </p>
                <p className="font-mono text-xs text-muted-foreground mt-1">
                  m / 86' / 0' / 0' / change / index
                </p>
                <p className="text-sm mt-2">
                  Standard Taproot addresses (<code>bc1p…</code>). Backs{' '}
                  <strong>Bitcoin Public Payments</strong>: one fresh leaf per
                  public campaign.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Lock className="size-5 mt-0.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <div>
                <p className="font-semibold text-indigo-700 dark:text-indigo-400">
                  BIP-352 (Silent Payments)
                </p>
                <p className="font-mono text-xs text-muted-foreground mt-1">
                  spend: m / 352' / 0' / 0' / 0' / 0
                  <br />
                  scan:&nbsp; m / 352' / 0' / 0' / 1' / 0
                </p>
                <p className="text-sm mt-2">
                  One static silent-payment address (<code>sp1q…</code>) per
                  user. Backs <strong>Bitcoin Silent Payments</strong>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3>How Silent Payments Work</h3>

      <p>
        Silent payments (
        <a
          href="https://github.com/bitcoin/bips/blob/master/bip-0352.mediawiki"
          target="_blank"
          rel="noopener noreferrer"
        >
          BIP-352
        </a>
        ) are the primitive that makes private, serverless donations work. The
        recipient publishes one static address (the <code>sp1q…</code>), and
        every donor's wallet uses that address plus the donor's own input keys
        to derive a brand new, one-shot Taproot output that only the recipient
        can find. On-chain, donations to the same activist look like unrelated
        transactions to unrelated addresses. (For those following the earliest
        Nostr conversations about silent payments, please note that this is an
        original implementation not tied to previous public discussions.)
      </p>

      <p>
        The <code>sp1q…</code> is two compressed secp256k1 public keys, a scan
        key <code>B_scan</code> and a spend key <code>B_spend</code>. The donor's
        wallet computes (<code>src/lib/hdwallet/sp/sender.ts</code>):
      </p>

      <pre><code>{`a            = Sum of a_i              # donor's input private keys
input_hash   = tagged_hash("BIP0352/Inputs", outpoint_L || A)
ecdh         = input_hash * a * B_scan        # ECDH shared secret
t_k          = tagged_hash("BIP0352/SharedSecret", ecdh || k)
P_k          = B_spend + t_k * G              # the Taproot output key`}</code></pre>

      <p>
        Different donors produce different <code>P_k</code> values because the
        ECDH shared secret depends on their own input keys. Even the same donor
        paying twice produces different outputs.
      </p>

      <p>
        Receiving works by scanning, not by watching an address. A public
        indexer (Agora uses{' '}
        <a
          href="https://github.com/setavenger/BlindBit-Oracle"
          target="_blank"
          rel="noopener noreferrer"
        >
          BlindBit Oracle
        </a>
        ) publishes a per-transaction tweak equal to <code>input_hash * A</code>.
        The activist's wallet completes the ECDH locally with <code>b_scan</code>
        , which never leaves the device, and checks candidate <code>P_k</code>{' '}
        values against the block's Taproot outputs. A match means the output
        belongs to the activist.
      </p>

      <p>
        Scanner: <code>src/lib/hdwallet/sp/scanner.ts</code>. Primitives:{' '}
        <code>src/lib/hdwallet/sp/crypto.ts</code>. Spend path:{' '}
        <code>src/lib/hdwallet/sp/spend.ts</code>, which reconstructs{' '}
        <code>d_k = b_spend + t_k</code> and signs the BIP-341 sighash directly
        with BIP-340 Schnorr, deliberately bypassing the automatic TapTweak in{' '}
        <code>@scure/btc-signer</code> because <code>P_k</code> is already the
        output key.
      </p>

      <h2>Campaign addresses</h2>

      <p>
        Silent payments let us skip the coordinating server entirely. The
        freshness step happens inside the donor's wallet, using only public
        information. The activist publishes one static <code>sp1q…</code> in
        their campaign event (a Nostr addressable event, <code>kind 33863</code>
        ), and that's it.
      </p>

      <p>
        The cost: the same <code>sp1q…</code> is shared across all of a single
        activist's silent-payment campaigns. Agora can't tell, from the
        silent-payment side alone, which campaign a given donation was intended
        for. The comparison:
      </p>

      <div className="not-prose my-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-orange-300">
              <th className="text-left p-3 bg-orange-50 dark:bg-orange-950/30">
                Approach
              </th>
              <th className="text-left p-3 bg-orange-50 dark:bg-orange-950/30">
                Donor privacy
              </th>
              <th className="text-left p-3 bg-orange-50 dark:bg-orange-950/30">
                Server?
              </th>
              <th className="text-left p-3 bg-orange-50 dark:bg-orange-950/30">
                Per-campaign totals?
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 align-top">
                Single shared on-chain address per campaign
              </td>
              <td className="p-3 align-top">Weak (donors cluster)</td>
              <td className="p-3 align-top">No</td>
              <td className="p-3 align-top">Yes</td>
            </tr>
            <tr className="border-b">
              <td className="p-3 align-top">
                Server-coordinated fresh address per donor
              </td>
              <td className="p-3 align-top">Strong on-chain</td>
              <td className="p-3 align-top">
                <strong>Yes</strong> (central failure point)
              </td>
              <td className="p-3 align-top">Yes</td>
            </tr>
            <tr className="border-b bg-orange-50/40 dark:bg-orange-950/10">
              <td className="p-3 align-top font-semibold">
                Static <code>sp1q…</code> per user (Agora SP mode)
              </td>
              <td className="p-3 align-top">
                Maximal (every output unlinkable)
              </td>
              <td className="p-3 align-top">
                <strong>No</strong>
              </td>
              <td className="p-3 align-top">No (by design)</td>
            </tr>
            <tr>
              <td className="p-3 align-top">
                Fresh BIP-86 leaf per public campaign (Agora public mode)
              </td>
              <td className="p-3 align-top">Donors cluster, per-campaign</td>
              <td className="p-3 align-top">No</td>
              <td className="p-3 align-top">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        This is also why silent-payment donation counts aren't public: the
        property that makes the donations unlinkable also makes a public
        progress bar impossible. Activists pick one. Most accept both, and the
        donation page produces a single BIP-21 URI (
        <code>bitcoin:bc1p…?sp=sp1q…</code>) so BIP-352-aware wallets take the
        private endpoint and everything else falls back to on-chain.
      </p>

      <h2>What's next</h2>

      <h3>Verification System for Campaigns</h3>

      <p>
        Anyone can create a campaign on Agora. That's intentional: no central
        authority decides who gets to ask for help. But donors, especially
        institutional ones, reasonably want to know a campaign is who it claims
        to be.
      </p>

      <p>
        We're building a verification model where signals come from trusted
        civil-society institutions (HRF, the World Liberty Congress, regional
        coalitions) rather than from corporate identity providers, and can be
        revoked when circumstances change. Verification is a confidence signal,
        not a permission gate. If verification breaks, campaigns keep running.
      </p>

      <h3>Local Pilot Coalitions</h3>

      <p>
        We are developing on three coalitions to battle-test Agora's central
        promises and tradeoffs in high-impact communities.
      </p>

      <h4>1. World Liberty Congress members</h4>

      <p>
        We are already working closely with Leo and other members of the{' '}
        <a
          href="https://worldlibertycongress.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          WLC
        </a>{' '}
        to pilot Agora in their key countries such as Venezuela, Cambodia,
        Uganda, Zimbabwe, and Nicaragua. We are planning to host onboarding
        training and research gathering sessions with leads of these movements.
      </p>

      <h4>2. Palestine aid coalition</h4>

      <p>
        Our next major pilot is with a coalition of Palestinian activists, one
        of the hardest fundraising environments in the world. We're working on
        building a team of on-the-ground experts from organizations such as{' '}
        <a
          href="https://realignforpalestine.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Realign for Palestine
        </a>{' '}
        and{' '}
        <a
          href="https://www.operationolivebranch.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Operation Olive Branch
        </a>{' '}
        to develop a full model covering onboarding, operational safety,
        off-ramping, and verification. This pilot, especially, will help inform
        if our current privacy options are sufficient, with additional
        protection layers such as multi-sig being considered and tested.
      </p>

      <h4>3. African women's sovereignty coalition</h4>

      <p>
        Thanks to the contacts we have developed through Hack4Freedom and the{' '}
        <a href="https://hrf.org" target="_blank" rel="noopener noreferrer">
          Human Rights Foundation
        </a>
        , we plan to collaborate with multiple organizations in Africa dedicated
        to women's financial empowerment and sovereignty. We will be traveling
        to Nairobi next week with multiple meetings scheduled to advance these
        conversations.
      </p>

      <h3>Marketing and Funding Partnerships with Bitcoin Businesses</h3>

      <p>
        Agora's natural funding base is the Bitcoin community. We're talking to
        companies and foundations that have been waiting for credible
        applications that actually exercise Bitcoin's censorship-resistance
        properties and who wish to add a charitable element to their business
        model. If you are one such business, please{' '}
        <a href="mailto:mk@soapbox.pub">get in touch with us</a>!
      </p>

      <p>
        In the long run, we hope that Agora can also be a mainstream use case
        for Bitcoin adoption to help everyday people understand the freedom that
        Bitcoin can bring to the world.
      </p>
    </article>
  );
}
