import React from 'react';

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
  "slug": "mostr-zaps",
  "title": "Zapping Across the Bridge",
  "excerpt": "It is now possible to zap across the bridge. By leveraging existing technology in the ecosystem, sats can now flow between Nostr and the Fediverse. The is a first step in the journey to integrate payments with Soapbox.",
  "coverImage": "/assets/blog/mostr-zaps/lightning-banner.png",
  "date": "2024-02-05",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/mostr-zaps/lightning-banner.png"
  },
  "tags": ["mostr", "zaps", "lightning"]
};

export default function MostrZaps() {
  return (
    <article className="prose prose-lg max-w-none">
      <p> Last year we launched the <a href="/blog/mostr-fediverse-nostr-bridge" target="_blank" rel="noopener noreferrer">Mostr Bridge</a>, connecting ActivityPub and Nostr together.</p>
      <p>Since then, we've improved compatibility, onboarded new users, and processed over 200 million requests. But something has been missing... <strong>Zaps!</strong></p>
      <p>Zaps are a great innovation of Nostr. Clicking the "Zap" button on a post will send a small amount of Bitcoin (aka satoshis or "sats") to the author of the post. That's right - this enables us to monetize your shitposts. It means anyone in the world, including you, can get paid just for posting online.</p>
      <p>This has great implications for both users and admins. It means users can be financially empowered, and admins can afford to keep the lights on. I believe it's an integral missing piece. And I'm proud to announce that it's now possible to <strong>zap across the bridge.</strong></p>
      <h2>Accepting Zaps</h2>
      <p>Users on the Fediverse can start accepting zaps today. To get started, just add a Lightning address to your profile and save.</p>
      <figure>
        <img alt="Mastodon profile fields" src="/assets/blog/mostr-zaps/mastodon-profile-fields.png"   />
        <figcaption>Enable zaps in your profile fields</figcaption>
      </figure>
      <p>Just add a custom profile field in the "Edit profile" screen, using a lightning bolt emoji (⚡) as the label, and your Bitcoin Lightning address as the content. Now, users on Nostr will see a zap button by each of your posts.</p>
      <figure>
        <img alt="Zap button in Snort" src="/assets/blog/mostr-zaps/snort-zap.png"   />
        <figcaption>My Fediverse posts have a zap button on snort.social</figcaption>
      </figure>
      <p>Users on Nostr will then be able to send you zaps on all of your posts.</p>
      <p>You won't get in-app notifications for zaps, but your Lightning wallet might notify you.</p>
      <figure>
        <img alt="Alby zap email" src="/assets/blog/mostr-zaps/alby-email.png"   />
        <figcaption>Email notification sent from Alby</figcaption>
      </figure>
      <h3>How to get a Lightning address?</h3>
      <p>If you have Telegram, the easiest way might be <a href="https://t.me/LightningTipBot" target="_blank" rel="noopener noreferrer">t.me/LightningTipBot</a>. Simply join the room and the bot will give you a Lightning address instantly.</p>
      <figure>
        <img alt="LightningTipBot on Telegram" src="/assets/blog/mostr-zaps/lightning-tip-bot.png"   />
        <figcaption>LightningTipBot on Telegram</figcaption>
      </figure>
      <p>Another good choice is <a href="https://getalby.com/" target="_blank" rel="noopener noreferrer">Alby</a>. Alby is packed with useful features, including support for Nostr Wallet Connect (which will matter in the "sending zaps" section below). Use this option if you can, but you'll need an invite code before you can make a new account.</p>
      <p>If you don't have Telegram or an Alby invite, another good option is <a href="https://coinos.io/" target="_blank" rel="noopener noreferrer">Coinos</a>. People have also suggested <a href="https://primal.net/" target="_blank" rel="noopener noreferrer">Primal</a> mobile apps, <a href="https://zbd.gg/" target="_blank" rel="noopener noreferrer">zbd.gg</a> and <a href="https://legend.lnbits.com/" target="_blank" rel="noopener noreferrer">legend.lnbits.com</a>, among others.</p>
      <p>Finally, it's possible to get a non-custodial wallet like Zeus or Mutiny working, but you'll need to do a lot more work to get an actual Lightning address. I would suggest this route only after trying a custodial Lightning app first.</p>
      <h2>Sending Zaps</h2>
      <p>Users on Nostr can send zaps at the click of a button. Users on ActivityPub can receive zaps from Nostr users (after following the steps above). But can ActivityPub users zap Nostr users? Can ActivityPub users zap other ActivityPub users? The answer is <strong>YES.</strong> But it requires a few extra steps.</p>
      <figure>
        <img alt="Soapbox zap" src="/assets/blog/mostr-zaps/soapbox-zap.png"   />
        <figcaption>Zaps work by doing an emoji reaction.</figcaption>
      </figure>
      <h3>Zapple Pay</h3>
      <a href="https://www.zapplepay.com/" target="_blank" rel="noopener noreferrer">Zapple Pay</a> was <a href="https://www.coindesk.com/tech/2023/07/10/apple-may-not-like-it-but-zapple-pay-finds-workaround-for-bitcoin-tipping-on-damus/" target="_blank" rel="noopener noreferrer">created in response</a> to Apple banning zap functionality on the popular Nostr app, Damus. Zapple Pay works around the issue by letting users do a ⚡ emoji reaction instead, and then Zapple Pay's servers make the payment in the background.
      <p>Incredibly, it <a href="https://gleasonator.com/@alex/posts/AeYNmUx7nlOCI2Dc3s" target="_blank" rel="noopener noreferrer">was discovered</a> that Zapple Pay can be used (in conjuction with the Mostr Bridge) to enable ActivityPub users to send zaps, to both Nostr users, and to other ActivityPub users! As it turns out, Apple's censorship is our empowerment.</p>
      <figure>
        <img alt="Zapple Pay" src="/assets/blog/mostr-zaps/zapple-pay.png"   />
        <figcaption>Zapple Pay form.</figcaption>
      </figure>
      <p>Zapple Pay relies on emoji reactions, so Mastodon users are out of luck. Only users of Pleroma, Misskey, and other servers that supports emoji reactions can send zaps with Zapple Pay.</p>
      <p>To enable Zapple Pay, you'll need a Lightning wallet that supports Nostr Wallet Connect, such as Alby. Alby users can sign into <a href="https://nwc.getalby.com/" target="_blank" rel="noopener noreferrer">nwc.getalby.com</a>. These are the steps:</p>
      <p>1. Visit <a href="https://zapplepay.com/" target="_blank" rel="noopener noreferrer">zapplepay.com</a> and scroll down to the form. 2. Get your <code>npub</code> from <a href="https://mostr.pub/" target="_blank" rel="noopener noreferrer">mostr.pub</a> by entering your Fediverse username and clicking "Submit". 3. Paste your npub into Zapple Pay. 4. For "trigger emoji", choose the ⚡ emoji (or any emoji you like). 5. Enter 420 sats (about $0.18 USD) as the amount, or however much you prefer (<a href="https://www.kraken.com/learn/satoshi-to-usd-converter" target="_blank" rel="noopener noreferrer">convert sats to USD</a>). 6. Sign into <a href="https://nwc.getalby.com/" target="_blank" rel="noopener noreferrer">nwc.getalby.com</a> and connect a new app. Name it "zapple pay", then click "Next". Click "Copy pairing secret" and paste it into Zapple Pay. 7. Click "Submit" on Zapple Pay.</p>
      <p>Done! Now you can zap anyone on the Fediverse by doing a ⚡ emoji reaction to their post.</p>
      <p>If the recepient doesn't have zaps set up, the emoji will simply be ignored and no payment will be made.</p>
      <p>Remember that you don't _have_ to enable Zapple Pay to receive zaps, just to send it. So if you don't do these steps, it's still worth setting up a Lightning address to receive zaps.</p>
      <h2>Zap splits</h2>
      <p>Zaps can empower both users and server admins. A major problem in the Fediverse is unsustainability due to rising costs. Zap splits allow users to fund the services they rely on, whenever they send zaps.</p>
      <p>The Mostr Bridge now sets a suggested 8.5% zap split on payments made through the bridge. This is entirely optional, and only works on Nostr apps which support zap splits.</p>
      <figure>
        <img alt="A zap split in Snort" src="/assets/blog/mostr-zaps/snort-zap-split.png"   />
        <figcaption>A zap split in Snort</figcaption>
      </figure>
      <p>Users on ActivityPub can opt-out of zap splits by replacing the ⚡ emoji in their profile with the label <code>lud16</code>. This will preserve zap functionality but disable zap splits on your account.</p>
      <h2>Just the beginning</h2>
      <p>By leveraging existing technology in the ecosystem, sats can now flow between Nostr and the Fediverse. The is a first step in the journey to integrate payments with Soapbox. Keep your eyes out for <a href="https://gitlab.com/soapbox-pub/ditto" target="_blank" rel="noopener noreferrer">Ditto</a>, releasing this year, which includes a very unique Lightning feature never seen before (along with first-class zap integrations). Stay tuned, my friends! And enjoy earning Bitcoin for your posts.</p>
      <p>Special thanks to benthecarman for <a href="https://github.com/benthecarman/zapple-pay-backend/issues/20" target="_blank" rel="noopener noreferrer">debugging Zapple Pay</a> with me!</p></article>
  );
}