import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Zap, Wallet, Globe, Clock, Coins, AlertTriangle, CheckCircle, BookOpen } from 'lucide-react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: { name?: string; picture?: string; };
  ogImage: { url?: string; };
  tags?: string[];
}

export const meta: BlogPostMeta = {
  slug: 'zapping-101',
  title: 'Zapping 101: How to Send (and Receive) Bitcoin Tips on Nostr',
  excerpt: "New to Nostr? Learn what zaps are, how to set up a Lightning wallet, and how to send your first Bitcoin tip — even if you've never touched Bitcoin before.",
  coverImage: '/assets/blog/zapping-101/cover.jpg',
  date: '2026-03-11',
  author: {
    name: 'Derek Ross',
    picture: '/assets/avatars/derek.jpg',
  },
  ogImage: {
    url: '/assets/blog/zapping-101/cover.jpg',
  },
  tags: ['nostr', 'bitcoin', 'lightning', 'zaps', 'tutorial'],
};

export default function Zapping101() {
  return (
    <article className="prose prose-lg max-w-none">
      <p>
        If you're new to Nostr, you've probably seen the ⚡ lightning bolt icon everywhere and wondered what it does.
      </p>

      <p>
        That's a <strong>zap</strong>. And it's one of the coolest things about Nostr.
      </p>

      <p>
        In this guide, I'll explain what zaps are, how to set up your wallet so you can receive them, and walk you through sending your first one — even if you've never touched Bitcoin before.
      </p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/zapping-101/cover.jpg"
          alt="Lightning — the power behind Nostr zaps"
          className="w-full rounded-xl object-cover max-h-96 shadow-lg"
        />
      </div>

      <h2>What Is a Zap?</h2>

      <p>
        A zap is a Bitcoin tip sent directly to another person on Nostr.
      </p>

      <p>
        When you see a post you love, instead of just hitting "like," you can send the creator actual money — instantly, with no middlemen, no fees going to a platform, and no waiting. It goes straight from you to them.
      </p>

      <p>
        Think of it like Venmo or Cash App, but built directly into your social network and powered by Bitcoin.
      </p>

      <p>
        This isn't theoretical. Real people are earning real money from their content every day on Nostr. Here are a few examples:
      </p>

      <p>
        Take <a href="https://agora.spot" target="_blank" rel="noopener noreferrer"><strong>Agora</strong></a>, a Nostr app built for activists. Organizers post actions — protests, campaigns, awareness drives — and pay real Bitcoin to participants who complete them. Not likes. Not clout. Actual money, sent directly over Lightning.
      </p>

      <div className="not-prose my-6 grid grid-cols-2 gap-4 max-w-lg mx-auto">
        <div className="flex flex-col items-center gap-2">
          <img
            src="/assets/blog/zapping-101/agora-liberenlos.png"
            alt="Agora action: Libérenlos a todos — $7.05 Bitcoin bounty by Leopoldo López"
            className="rounded-xl shadow-lg w-full"
          />
          <p className="text-sm text-center text-muted-foreground">$7.05 in Bitcoin for participating in the #LiberenlosATodos campaign</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src="/assets/blog/zapping-101/agora-amnistia.png"
            alt="Agora action: Amnistía Ya — $14.10 Bitcoin bounty by Leopoldo López"
            className="rounded-xl shadow-lg w-full"
          />
          <p className="text-sm text-center text-muted-foreground">$14.10 in Bitcoin for the #AmnistiaYa campaign</p>
        </div>
      </div>

      <p>
        These are real campaigns from Venezuela, funded by <a href="https://en.wikipedia.org/wiki/Leopoldo_L%C3%B3pez" target="_blank" rel="noopener noreferrer">Leopoldo López</a> — an opposition leader who couldn't use traditional payment rails to reach activists in his country. Bitcoin made it possible. No bank. No PayPal. No government blocking the payment.
      </p>

      <p>
        That's the power of zaps. And it works just as well for tipping a musician, supporting a writer, or saying thanks to someone who helped you online.
      </p>

      <h2>But Wait... Why Bitcoin?</h2>

      <p>
        Fair question. A lot of people hear "Bitcoin" and think: scam, complicated, or "isn't that for criminals?"
      </p>

      <p>
        Here's the thing — for sending small tips across the internet to anyone in the world, Bitcoin is actually the perfect tool. Not because it's Bitcoin, but because of what it can do:
      </p>

      <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-5 w-5 text-orange-500" />
              <h4 className="font-semibold">No Middleman</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              There's no PayPal, no Venmo, no company that can freeze your account or reverse a payment.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="h-5 w-5 text-blue-500" />
              <h4 className="font-semibold">No Borders</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              You can zap someone in Nigeria, Brazil, or Indonesia just as easily as someone next door.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-green-500" />
              <h4 className="font-semibold">Instant</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Payments settle in seconds, not days.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <Coins className="h-5 w-5 text-purple-500" />
              <h4 className="font-semibold">Tiny Amounts</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Traditional payment apps can't send $0.01. Bitcoin can.
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        No other payment system on the planet does all four of those things. That's why Nostr uses it.
      </p>

      <p>
        Beyond payments, Bitcoin matters for freedom. It's open, permissionless, and can't be shut down by any government or corporation. If you want to understand why that matters, these are great places to start:
      </p>

      <div className="not-prose my-6">
        <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-900/10">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-orange-500" />
              <h4 className="font-semibold text-orange-900 dark:text-orange-100">Learn More About Bitcoin</h4>
            </div>
            <div className="space-y-3">
              {[
                { name: 'bitcoin.org', url: 'https://bitcoin.org', desc: 'The official Bitcoin site. Start here.' },
                { name: 'hope.com', url: 'https://hope.com', desc: 'Curated books, articles, and podcasts about why Bitcoin matters.' },
                { name: 'The Simplest Bitcoin Book', url: 'https://thesimplestbitcoinbook.net', desc: 'A free, beginner-friendly book that explains Bitcoin without the jargon.' },
              ].map(({ name, url, desc }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 group no-underline">
                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-orange-500 mt-2" />
                  <div>
                    <span className="font-medium text-orange-800 dark:text-orange-200 group-hover:underline">{name}</span>
                    <span className="text-sm text-orange-700 dark:text-orange-300"> — {desc}</span>
                  </div>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-900/10">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Don't want to hold Bitcoin?</h4>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                  That's totally fine. When you receive zaps, you can send that Bitcoin straight to{' '}
                  <a href="https://strike.me" target="_blank" rel="noopener noreferrer" className="underline font-medium">Strike</a>{' '}
                  or{' '}
                  <a href="https://cash.app" target="_blank" rel="noopener noreferrer" className="underline font-medium">Cash App</a>{' '}
                  and convert it to dollars (or your local currency) in seconds. You never have to "be a Bitcoin person" to use zaps — treat it like a tip jar that auto-converts to cash.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>What You'll Need</h2>

      <p>To zap and receive zaps, you need two things:</p>

      <ol>
        <li><strong>A Lightning wallet</strong> — this is where your Bitcoin lives</li>
        <li><strong>A Lightning address</strong> — this is like your payment username (it looks like an email: <code>yourname@wallet.com</code>)</li>
      </ol>

      <p>
        Once you have those, you add your Lightning address to your Nostr profile and you're ready to go.
      </p>

      <h2>Step 1: Get a Lightning Wallet</h2>

      <p>
        If you're brand new to Bitcoin, start with one of these. They're free, easy to set up, and work immediately.
      </p>

      {/* TODO: Add screenshot collage of wallet apps (WoS, Primal, Rizful, CoinOS, Strike) */}

      <div className="not-prose my-8 space-y-4">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Wallet className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <div className="flex items-center flex-wrap gap-2 mb-1">
                  <a href="https://www.walletofsatoshi.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:underline">Wallet of Satoshi</a>
                  <span className="text-xs bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 px-2 py-0.5 rounded-full font-medium">Best for Beginners</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Available on iPhone and Android. Download the app and you instantly have a Lightning address like <code>yourname@walletofsatoshi.com</code>. No setup required. Just open it and you're ready to zap and get zapped.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Wallet className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <div className="flex items-center flex-wrap gap-2 mb-1">
                  <a href="https://primal.net/" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:underline">Primal</a>
                  <span className="text-xs bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-2 py-0.5 rounded-full font-medium">All-in-One Nostr App</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Primal is a Nostr client with a built-in wallet. Your social feed and your wallet in one place — great if you want everything under one roof.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Wallet className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <div className="flex items-center flex-wrap gap-2 mb-1">
                  <a href="https://rizful.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:underline">Rizful</a>
                  <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium">Browser-Based, No Install</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Works on any device right from your browser. Sign up, claim a Lightning address like <code>yourname@rizful.com</code>, and you're set. No app download needed. Built by the team behind one of the largest Lightning Network routing nodes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Wallet className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <div className="flex items-center flex-wrap gap-2 mb-1">
                  <a href="https://coinos.io/" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:underline">CoinOS</a>
                  <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-2 py-0.5 rounded-full font-medium">No Account Required</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Just pick a username and password — that's it. Your Lightning address becomes <code>yourname@coinos.io</code>. No email address, no ID, no personal information required. Sign up in seconds and start receiving zaps immediately.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Wallet className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <div className="flex items-center flex-wrap gap-2 mb-1">
                  <a href="https://strike.me/" target="_blank" rel="noopener noreferrer" className="font-bold text-lg hover:underline">Strike</a>
                  <span className="text-xs bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300 px-2 py-0.5 rounded-full font-medium">Best for Funding Your Wallet</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Strike is the easiest way to buy Bitcoin with your bank account and get it onto Lightning. Available in many countries worldwide. Requires ID verification, but it's the most trusted way to get real money into your Lightning wallet so you have sats to zap with.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Step 2: Add Your Lightning Address to Your Nostr Profile</h2>

      <p>
        Once you have your wallet and Lightning address, you need to tell Nostr where to send your zaps.
      </p>

      <div className="not-prose my-6 flex justify-center">
        <img
          src="/assets/blog/zapping-101/edit-profile-lightning.png"
          alt="Edit Profile in Ditto showing the Lightning address field filled in with derek@npub.cash"
          className="rounded-xl shadow-lg max-w-xs w-full"
        />
      </div>

      <div className="not-prose my-6">
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/10">
          <CardContent className="p-6">
            <ol className="space-y-3 list-none m-0 p-0">
              {[
                <>Open your Nostr app (<a href="https://ditto.pub" target="_blank" rel="noopener noreferrer" className="underline font-medium">Ditto</a>, <a href="https://primal.net" target="_blank" rel="noopener noreferrer" className="underline font-medium">Primal</a>, <a href="https://damus.io" target="_blank" rel="noopener noreferrer" className="underline font-medium">Damus</a>, <a href="https://www.amethyst.social" target="_blank" rel="noopener noreferrer" className="underline font-medium">Amethyst</a>, etc.)</>,
                <>Go to <strong>Edit Profile</strong></>,
                <>Find the field labeled <strong>Lightning Address</strong> (sometimes called "LN Address" or "Zap Address")</>,
                <>Paste in your Lightning address (e.g., <code>yourname@walletofsatoshi.com</code>)</>,
                <>Save your profile</>,
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500 text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                  <span className="text-sm pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>

      <p>
        That's it. You're now zappable. Anyone on Nostr can send you Bitcoin with one tap.
      </p>

      <h2>Step 3: Send Your First Zap</h2>

      <p>Now for the fun part.</p>

      <div className="not-prose my-6 grid grid-cols-2 gap-4 max-w-lg mx-auto">
        <div className="flex flex-col items-center gap-2">
          <img
            src="/assets/blog/zapping-101/ditto-post-zap-button.png"
            alt="A post in Ditto showing the ⚡ zap button in the action bar"
            className="rounded-xl shadow-lg w-full"
          />
          <p className="text-sm text-center text-muted-foreground">Tap the <strong>⚡</strong> in the post action bar</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src="/assets/blog/zapping-101/ditto-zap-dialog.png"
            alt="Ditto Send a Zap dialog showing preset amounts (21, 50, 100, 250, 1000 sats) and a message field"
            className="rounded-xl shadow-lg w-full"
          />
          <p className="text-sm text-center text-muted-foreground">Choose your amount, add a message, tap <strong>Zap</strong></p>
        </div>
      </div>

      <div className="not-prose my-6">
        <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-900/10">
          <CardContent className="p-6">
            <ol className="space-y-3 list-none m-0 p-0">
              {[
                <>Find a post on Nostr that you want to zap</>,
                <>Tap the <strong>⚡ lightning bolt icon</strong> below the post</>,
                <>Choose an amount (start with <strong>21 sats</strong> — it's tradition)</>,
                <>Add a message if you want (it's public and attached to the zap)</>,
                <>Confirm the payment in your wallet app</>,
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                  <span className="text-sm pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>

      <p>
        Done. The payment settles in seconds and the creator sees it instantly.
      </p>

      {/* TODO: Add demo video of zapping with Ditto — embed YouTube video here
          <div className="not-prose my-8 aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Demo: Sending a Zap with Ditto"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
      */}

      <h2>How Much Should I Zap?</h2>

      <p>There's no rule, but Nostr has its own zap culture:</p>

      <div className="not-prose my-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {[
          { amount: '21 sats', label: 'The Classic', desc: '"I liked this." The OG Nostr zap amount. (21 = 21 million BTC max supply 🧡)', color: 'orange' },
          { amount: '100 sats', label: 'Nice', desc: '"This was really good."', color: 'yellow' },
          { amount: '1,000 sats', label: 'Fire 🔥', desc: '"This made my day."', color: 'green' },
          { amount: '10,000+ sats', label: 'Legend', desc: '"This was genuinely valuable to me."', color: 'purple' },
        ].map(({ amount, label, desc, color }) => (
          <Card key={amount} className={`border-l-4 border-l-${color}-500`}>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <Zap className={`h-4 w-4 text-${color}-500`} />
                <span className="font-bold">{amount}</span>
                <span className={`text-xs bg-${color}-100 text-${color}-700 dark:bg-${color}-900/30 dark:text-${color}-300 px-2 py-0.5 rounded-full`}>{label}</span>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <p>Don't overthink it. The act of zapping means more than the amount.</p>

      <h2>One-Tap Zapping (Skip the Wallet Popup)</h2>

      <p>
        If you find yourself zapping a lot and don't want to confirm every payment in your wallet app, you can enable <strong>Nostr Wallet Connect (NWC)</strong>. This is a feature that lets your Nostr app send payments automatically on your behalf, up to a daily limit you control — no popup, no confirmation, just one tap and done.
      </p>

      <div className="not-prose my-6">
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/10">
          <CardContent className="p-6">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Wallets that support Nostr Wallet Connect</h4>
            <div className="flex flex-wrap gap-2 mb-3">
              {[
                { name: 'Primal', url: 'https://primal.net' },
                { name: 'Rizful', url: 'https://rizful.com' },
                { name: 'CoinOS', url: 'https://coinos.io' },
              ].map(({ name, url }) => (
                <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-white dark:bg-black/20 border border-purple-200 dark:border-purple-800 rounded-full px-3 py-1 text-sm font-medium text-purple-700 dark:text-purple-300 hover:bg-purple-50 transition-colors">
                  <CheckCircle className="h-3 w-3" />
                  {name}
                </a>
              ))}
            </div>
            <p className="text-sm text-purple-800 dark:text-purple-200">
              In your wallet app (Rizful, Primal, or CoinOS), find the NWC section and tap <strong>Get Connection Code</strong>. Then in Ditto, go to <strong>Settings → Advanced → Wallet → + Add</strong> and paste it in. That's it — your wallet is connected and zapping is instant.
            </p>
          </CardContent>
        </Card>
      </div>

      <p>Here's the full flow using <strong>Rizful</strong> and <strong>Ditto</strong>:</p>

      <div className="not-prose my-6 grid grid-cols-2 gap-4 max-w-2xl mx-auto">
        <div className="flex flex-col items-center gap-2">
          <img
            src="/assets/blog/zapping-101/rizful-nwc-menu.png"
            alt="Rizful wallet menu showing the NWC option alongside Settings, New Vault, and Exit"
            className="rounded-xl shadow-lg w-full"
          />
          <p className="text-sm text-center text-muted-foreground"><strong>Step 1:</strong> In Rizful, tap the menu → <strong>NWC</strong></p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src="/assets/blog/zapping-101/rizful-nwc-get-code.png"
            alt="Rizful Get NWC Codes screen showing the connection with 250k sats remaining and Get Connection Code button"
            className="rounded-xl shadow-lg w-full"
          />
          <p className="text-sm text-center text-muted-foreground"><strong>Step 2:</strong> Tap <strong>Get Connection Code</strong> and copy it</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src="/assets/blog/zapping-101/ditto-nwc-settings.png"
            alt="Ditto Advanced settings showing the Nostr Wallet Connect section with Add button"
            className="rounded-xl shadow-lg w-full"
          />
          <p className="text-sm text-center text-muted-foreground"><strong>Step 3:</strong> In Ditto, go to Settings → Advanced → Wallet → <strong>+ Add</strong></p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src="/assets/blog/zapping-101/ditto-nwc-connected.png"
            alt="Ditto showing NWC Wallet connected and Active with Ready status"
            className="rounded-xl shadow-lg w-full"
          />
          <p className="text-sm text-center text-muted-foreground"><strong>Done:</strong> NWC Wallet shows <strong>Active</strong> — one-tap zapping enabled</p>
        </div>
      </div>

      <h2>Why Zaps Matter</h2>

      <p>Zaps aren't just tipping. They're a signal.</p>

      <p>
        On every other platform, "likes" are free. That means they're gamed, bought, and manipulated. A zap costs something — even if it's just a penny. That makes it real.
      </p>

      <p>
        High-zap content rises because people actually valued it, not because an algorithm decided to show it to you. Spammers and bots don't zap. Real people do.
      </p>

      <p>
        It's also the foundation of a creator economy with no platform in the middle. No one takes a cut. No one can decide you're not allowed to receive money. Your Lightning address works the same whether you have 10 followers or 10,000.
      </p>

      <div className="not-prose my-8">
        <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-900/10 text-center">
          <CardContent className="p-8">
            <Zap className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <p className="text-xl font-semibold text-orange-900 dark:text-orange-100">
              That's what makes it different. That's why it matters.
            </p>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}
