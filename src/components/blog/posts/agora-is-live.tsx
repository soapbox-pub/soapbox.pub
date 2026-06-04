import type { BlogPostMeta } from '@/lib/blog/types';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { ExternalLink, Globe, Lock, ShieldCheck } from 'lucide-react';

export const meta: BlogPostMeta = {
  slug: 'agora-is-live',
  title: "Launching Agora: How It Works, and What's Next",
  excerpt:
    "We launched Agora at Oslo Freedom Forum 2026. GoFundMe without borders, built on Bitcoin. Here's the story behind the launch, how the wallet actually works, and what we're building next.",
  coverImage: '/assets/blog/agora-is-live/cover.jpeg',
  date: '2026-06-04',
  author: {
    name: 'M. K. Fain',
    picture: '/assets/avatars/mk.jpg',
  },
  ogImage: {
    url: '/assets/blog/agora-is-live/cover.jpeg',
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
    'human rights',
    'censorship resistance',
    'nostr',
  ],
  keywords:
    'agora launch, agora oslo freedom forum, agora silent payments, agora bitcoin wallet, agora bip-352, how agora works, agora hd wallet, agora palestine pilot, agora roadmap, agora.spot, censorship-resistant fundraising, silent payment donations, bitcoin donations for activists, gofundme without borders, no custodian fundraising',
  faq: [
    {
      question: 'What is Agora?',
      answer:
        "Agora is a censorship-resistant Bitcoin donation platform built by Soapbox. It works like GoFundMe without borders. Activists launch campaigns and donors send Bitcoin directly to them, wallet to wallet. Agora never holds the money.",
    },
    {
      question: 'When did Agora launch?',
      answer:
        "Agora launched on June 2, 2026 at the Oslo Freedom Forum, hosted by the Human Rights Foundation. It is live now at agora.spot on the web and on ZapStore for Android.",
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
      question: "How does Agora display 'total raised' without a database?",
      answer:
        "For public campaigns, Agora reads the cumulative sats sent to the campaign's Bitcoin address from a public block explorer. The number comes from the chain itself. For silent-payment campaigns, no aggregate is shown, because publishing one would defeat the privacy guarantee.",
    },
    {
      question: 'What is next for Agora?',
      answer:
        'An organization-verification model, a pilot with a coalition of Palestinian activists to build a replicable model for onboarding, safety, off-ramping, and verification in high-risk environments, and funding partnerships across the Bitcoin ecosystem.',
    },
  ],
};

export default function AgoraIsLive() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        On June 2, we launched{' '}
        <a href="https://agora.spot" target="_blank" rel="noopener noreferrer">
          Agora
        </a>
        , a censorship-resistant Bitcoin donation platform. Think{' '}
        <em>GoFundMe without borders</em>. Activists launch campaigns. Donors
        send Bitcoin straight to them. No bank, no payment processor, no
        custodian. Not even us.
      </p>

      <p>
        Agora is built by Team Soapbox, in partnership with{' '}
        <a
          href="https://en.wikipedia.org/wiki/Leopoldo_L%C3%B3pez"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leopoldo López
        </a>{' '}
        and the{' '}
        <a
          href="https://worldlibertycongress.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          World Liberty Congress
        </a>
        , and it grew out of the{' '}
        <a href="https://hrf.org" target="_blank" rel="noopener noreferrer">
          Human Rights Foundation
        </a>
        's freedom-tech program.
      </p>

      {/* SECTION 1: The Launch */}

      <h2>1. Launching at Oslo Freedom Forum 2026</h2>

      <p>
        Oslo Freedom Forum is the room where freedom movements from dozens of
        countries find each other and trade strategy. It was the right place
        to put Agora in front of the people it was built for.
      </p>

      <p>
        On June 2, from the OFF stage, the World Liberty Congress announced
        Agora. Coverage{' '}
        <a
          href="https://www.prnewswire.com/news-releases/world-liberty-congress-launches-agora-at-oslo-freedom-forum-to-power-global-support-for-human-rights-movements-302788493.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          went out via PR Newswire
        </a>{' '}
        the same morning, and we cross-posted{' '}
        <a href="/blog/wlc-launches-agora-oslo-freedom-forum">
          the announcement on the Soapbox blog
        </a>
        .
      </p>

      <p>
        Leopoldo López, the Venezuelan opposition leader, former political
        prisoner, and co-founder of the World Liberty Congress, captained the
        team that originally built Agora at the HRF{' '}
        <a
          href="https://hrf.org/latest/announcing-the-ai-hack-for-freedom-hackathon-winners/"
          target="_blank"
          rel="noopener noreferrer"
        >
          AI Hack for Freedom hackathon
        </a>{' '}
        earlier this year, pairing developers with activists whose bank
        accounts get frozen, whose payment processors cut them off
        mid-campaign, and whose platforms get banned the week of a protest.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/20">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-foreground mb-3">
              "We are witnessing a coordinated assault on democratic principles.
              Agora is the infrastructure for an equally coordinated network of
              support going in the other direction."
            </blockquote>
            <p className="font-semibold text-orange-700 dark:text-orange-400">
              Leopoldo López, on the launch
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        At launch, Agora is running real campaigns supporting political
        prisoners and grassroots movements in <strong>Uganda, Nicaragua,
        Zimbabwe, Cambodia, and Palestine</strong>, alongside campaigns from
        the World Liberty Congress network. Browse them at{' '}
        <a href="https://agora.spot" target="_blank" rel="noopener noreferrer">
          agora.spot
        </a>{' '}
        or grab the Android build from{' '}
        <a href="https://zapstore.dev" target="_blank" rel="noopener noreferrer">
          ZapStore
        </a>
        . For background, see the <a href="/agora">/agora landing page</a>, the
        original{' '}
        <a href="/blog/agora-connecting-freedom-fighters">Agora announcement</a>
        , and the{' '}
        <a href="/blog/building-pathos">hackathon story</a>.
      </p>

      {/* SECTION 2: How Agora Works (Technical Deep Dive) */}

      <h2>2. How Agora Actually Works</h2>

      <p>
        Every architectural decision in Agora came out of three months of
        working closely with opposition-party members in Venezuela, watching
        them try to actually use earlier versions and tell us where the gaps
        were. We make no assumptions about what's right for anyone else. The
        job is to surface real tradeoffs and let people choose.
      </p>

      <p>
        "No middleman" has to do real technical work. The reason Agora can
        credibly claim it is that we made three engineering decisions that
        make a middleman structurally impossible:
      </p>

      <ol>
        <li>
          A self-custodial HD wallet on the user's device, derived
          deterministically from their Nostr identity.
        </li>
        <li>
          Two donation modes, <strong>Bitcoin Public Payments</strong> and{' '}
          <strong>Bitcoin Silent Payments</strong>. Both fully on-chain, both
          settling directly to the activist's wallet.
        </li>
        <li>
          A static silent-payment address per activist. The single tradeoff
          that lets us avoid running a coordinating server at all.
        </li>
      </ol>

      <p>
        Everything below is in the open-source repo at{' '}
        <a
          href="https://gitlab.com/soapbox-pub/agora"
          target="_blank"
          rel="noopener noreferrer"
        >
          gitlab.com/soapbox-pub/agora
        </a>
        .
      </p>

      <h3>2.1 One Identity, Two Domains: The HD Wallet</h3>

      <p>
        Agora users already have a Nostr keypair. Asking them to back up a
        second seed phrase for a separate Bitcoin wallet was a non-starter,
        especially in environments where secure storage is hard. So the
        Bitcoin wallet is derived deterministically from the Nostr secret key
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
        separator that lets us rotate the derivation later without touching
        the Nostr key. And because the output is a standard BIP-39 seed, the
        wallet roundtrips into Sparrow, Electrum, Trezor, Ledger, or anything
        else BIP-39 compatible. No Agora-shaped lock-in.
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

      <h3>2.2 How Silent Payments Work</h3>

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
        transactions to unrelated addresses.
      </p>

      <p>
        The <code>sp1q…</code> is two compressed secp256k1 public keys, a scan
        key <code>B_scan</code> and a spend key <code>B_spend</code>. The
        donor's wallet computes (<code>src/lib/hdwallet/sp/sender.ts</code>):
      </p>

      <pre><code>{`a            = Sum of a_i              # donor's input private keys
input_hash   = tagged_hash("BIP0352/Inputs", outpoint_L || A)
ecdh         = input_hash * a * B_scan        # ECDH shared secret
t_k          = tagged_hash("BIP0352/SharedSecret", ecdh || k)
P_k          = B_spend + t_k * G              # the Taproot output key`}</code></pre>

      <p>
        Different donors produce different <code>P_k</code> values because the
        ECDH shared secret depends on their own input keys. Even the same
        donor paying twice produces different outputs.
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
        ) publishes a per-transaction tweak equal to{' '}
        <code>input_hash * A</code>. The activist's wallet completes the ECDH
        locally with <code>b_scan</code>, which never leaves the device, and
        checks candidate <code>P_k</code> values against the block's Taproot
        outputs. A match means the output belongs to the activist.
      </p>

      <p>
        Scanner: <code>src/lib/hdwallet/sp/scanner.ts</code>. Primitives:{' '}
        <code>src/lib/hdwallet/sp/crypto.ts</code>. Spend path:{' '}
        <code>src/lib/hdwallet/sp/spend.ts</code>, which reconstructs{' '}
        <code>d_k = b_spend + t_k</code> and signs the BIP-341 sighash
        directly with BIP-340 Schnorr, deliberately bypassing the automatic
        TapTweak in <code>@scure/btc-signer</code> because <code>P_k</code> is
        already the output key.
      </p>

      <h3>2.3 What About the Fees?</h3>

      <p>
        Two answers. <strong>One:</strong> Bitcoin fees are cheap right now,
        and on-chain forces donations to be a <em>real</em> amount that can
        make a meaningful difference to someone in Gaza or Venezuela, instead
        of the borderline-insulting one-penny zaps that pad most Lightning
        stats. <strong>Two:</strong> onboarding people to Lightning before
        fees are high is selling them a solution before they understand the
        problem. Let the fees get high, then let the user choose to opt in
        with full knowledge of the tradeoffs. Sovereign choice, not
        paternalism.
      </p>

      <h3>2.4 Why Not Lightning, BTCPay, or Geyser?</h3>

      <p>
        We didn't land here by guessing. Here's what we ruled out, and why:
      </p>

      <ul>
        <li>
          <strong>Lightning (Agora v1).</strong> Our first version, built for
          opposition-party members in Venezuela, ran on Lightning. It worked
          on paper. In practice, onboarding required hands-on training to
          even receive a payment, and to our knowledge <em>no user ever
          successfully off-ramped Lightning funds into something that made a
          meaningful difference in their life</em>. The numbers were fast,
          but small to the point of being worthless.
        </li>
        <li>
          <strong>BTCPay Server and other address-rotation tools.</strong>{' '}
          Fresh address per donor is great for privacy, but it requires a
          server you have to run and trust. That server is a centralized
          liability: it can be stopped, subpoenaed, or used to harvest the
          donor list. It also breaks public "raised so far" totals, because
          you can't sum a moving target without server-side accounting.
        </li>
        <li>
          <strong>Geyser.</strong> Takes a percentage of every donation and
          (last we checked) charges a <strong>$25 upfront fee</strong> just
          to host a campaign. That's not greed, it's the cost of all the
          middle-manning they've taken on. We didn't want activists to pay
          for infrastructure they shouldn't need in the first place.
        </li>
      </ul>

      <h3>2.5 The Static-Address Tradeoff</h3>

      <p>
        Silent payments let us skip the coordinating server entirely. The
        freshness step happens inside the donor's wallet, using only public
        information. The activist publishes one static <code>sp1q…</code> in
        their campaign event (a Nostr addressable event, <code>kind 33863</code>),
        and that's it.
      </p>

      <p>
        The cost: <em>the same </em><code>sp1q…</code><em> is shared across
        all of a single activist's silent-payment campaigns</em>. Agora can't
        tell, from the silent-payment side alone, which campaign a given
        donation was intended for. The comparison:
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
        This is also why <a href="/agora">/agora</a> says silent-payment
        donation counts aren't public: the property that makes the donations
        unlinkable also makes a public progress bar impossible. Activists pick
        one. Most accept both, and the donation page produces a single BIP-21
        URI (<code>bitcoin:bc1p…?sp=sp1q…</code>) so BIP-352-aware wallets
        take the private endpoint and everything else falls back to on-chain.
      </p>

      <h3>2.6 Counting Donations Without a Database</h3>

      <p>
        Because there's no platform-side database of donations, the "raised
        so far" number on a public campaign can't come from a server we
        control. It doesn't. Agora reads it from the public chain (
        <code>src/hooks/useCampaignDonations.ts</code>):
      </p>

      <pre><code>{`totalSats   = chain_stats.funded_txo_sum         // from a public block explorer
pendingSats = mempool_stats.funded_txo_sum
            - mempool_stats.spent_txo_sum`}</code></pre>

      <p>
        One call to the same block explorer anyone else can query, on an
        address anyone can verify is controlled by the activist. The number
        can't be inflated by Nostr publishers and can't be censored by us.
      </p>

      <p>
        Nostr donation receipts (a custom kind, <code>8333</code>, documented
        in{' '}
        <a
          href="https://gitlab.com/soapbox-pub/agora/-/blob/main/NIP.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          NIP.md
        </a>
        ) layer on top for donor attribution: names, comments, a
        recent-donations feed. They are never the source of the headline
        total, and each receipt is verified against the chain before display.
        For silent-payment campaigns, no aggregate is shown. If agora.spot
        disappeared tomorrow, every campaign keeps working: the addresses
        are still valid, the donations still settle on Bitcoin, the receipts
        still propagate on Nostr.
      </p>

      {/* SECTION 3: What's Next */}

      <h2>3. What's Next</h2>

      <h3>3.1 Organization Verification for Campaigns</h3>

      <p>
        Anyone can create a campaign on Agora. That's intentional: no central
        authority decides who gets to ask for help. But donors reasonably want
        to know a campaign is who it claims to be.
      </p>

      <p>
        We're building a verification model where signals come from trusted
        civil-society institutions (HRF, the World Liberty Congress, regional
        coalitions) rather than from corporate identity providers, and can be
        revoked when circumstances change. Verification is a confidence
        signal, never a permission gate. If verification breaks, campaigns
        keep running.
      </p>

      <h3>3.2 The Palestine Pilot</h3>

      <p>
        Our next major pilot is with a coalition of Palestinian activists,
        one of the hardest fundraising environments in the world. Payment
        processors routinely block transactions, bank accounts are frozen,
        and organizers face physical risk if their identities or funding
        flows are exposed. It's also the right place to find out whether our
        privacy assumptions hold up against real adversaries.
      </p>

      <p>
        We're working alongside the coalition to develop a full model
        covering onboarding, operational safety, off-ramping, and
        verification.
      </p>

      <p>
        The point of the pilot is a <em>replicable model</em> that other local
        coalitions can adapt. Each pilot is a case study. We'll also use it as
        a real-world privacy audit. If silent payments aren't meeting the
        threat model these activists actually face, what ships next?{' '}
        <strong>Optional multisig configurations</strong>, for example, so a
        single device seizure doesn't equal a fund seizure. Better to find
        that out from a careful pilot than from an incident.
      </p>

      <h3>3.3 Funding Partnerships in Bitcoin</h3>

      <p>
        Agora's natural funding base is the Bitcoin community. We're talking
        to companies and foundations that have been waiting for credible
        applications that actually exercise Bitcoin's censorship-resistance
        properties.
      </p>

      <ul>
        <li>
          <strong>Bitcoin business and foundation partnerships</strong> to
          fund continued development and the per-region coalition pilots.
        </li>
        <li>
          <strong>Bitcoin training for World Liberty Congress members.</strong>{' '}
          Many WLC members are extraordinary political organizers but new to
          self-custody. We want the people deploying Agora in their countries
          to defend its threat model in practice.
        </li>
        <li>
          <strong>An off-ramp directory.</strong> A "marketplace" of regional
          off-ramp services (peer-to-peer exchanges, sympathetic local
          businesses) with ratings and reviews.{' '}
          <strong>Agora would not process those payments.</strong> Directory
          and reputation layer only; the off-ramp relationship stays directly
          between the activist and the service.
        </li>
      </ul>

      <p>
        If you're a Bitcoin business or organization that wants to support
        this work, get in touch: <a href="mailto:mk@soapbox.pub">mk@soapbox.pub</a>.
      </p>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-orange-300 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-2xl font-bold mb-3">Try Agora.</div>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Browse live campaigns, launch one of your own, or dig into the
              code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold"
              >
                <a href="https://agora.spot" target="_blank" rel="noopener noreferrer">
                  Open Agora
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://gitlab.com/soapbox-pub/agora"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitLab
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/agora">Learn more</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}

