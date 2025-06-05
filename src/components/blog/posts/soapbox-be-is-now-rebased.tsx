import React from 'react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: { name?: string; picture?: string; };
  ogImage: { url?: string; };
}

export const meta: BlogPostMeta = {
  "slug": "soapbox-be-is-now-rebased",
  "title": "Soapbox BE is now Rebased",
  "excerpt": "Back in 2019 I released Soapbox as a fork of Mastodon with a much nicer UI. Over time I got fed up with Mastodon being slow, expensive, and not innovating enough. So I decided to jumped ship to Pleroma.",
  "coverImage": "/assets/blog/soapbox-be-is-now-rebased/signal-2022-08-18-153539_002.png",
  "date": "2022-08-19",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/soapbox-be-is-now-rebased/signal-2022-08-18-153539_002.png"
  }
};

export default function SoapboxBeIsNowRebased() {
  return (
    <article className="prose prose-lg max-w-none">
      <p> <em>Wait, Soapbox has a backend?</em></p>
      <p>Back in 2019 I released Soapbox as a fork of Mastodon with a much nicer UI. Over time I got fed up with Mastodon being slow, expensive, and not innovating enough. So I decided to jumped ship to Pleroma.</p>
      <p>This was possible because Pleroma, despite being a totally different project in a different programming language, implemented Mastodon’s client-server API. It was even preconfigured to let you drop in a <em>different frontend</em> with no changes to Pleroma itself. So I separated the UI from my Mastodon fork and made it work for Pleroma.</p>
      <p>Several frontends were in development for Pleroma, including Pleroma FE, Fedi FE, and several other experiments. “FE” of course means “front-end”, as in the user interface of the application. I decided to follow their naming convention and call my frontend “Soapbox FE”. Soapbox FE was just another frontend for Pleroma.</p>
      <p>However, over time it became clear that I needed to fork Pleroma itself to do everything I wanted. When I did, I continued Pleroma’s convention of calling the backend simply “Soapbox”. Soapbox was the Pleroma alternative, and Soapbox FE was a frontend that supported both Pleroma and Soapbox.</p>
      <p>This of course lead to a lot of confusion. I ended up renaming Soapbox to Soapbox BE. So now there was a clear distinction: Soapbox FE for the frontend, Soapbox BE for the backend. But then we were assuming people have any clue what “FE” and “BE” meant, or that they had any clue about the whole history of Pleroma. In practice, people called the frontend “Soapbox”, and the backend fell off people’s radar.</p>
      <p>So to solve these issues, I will be dropping the “FE” from Soapbox, and giving the backend a unique new identity: <strong>Rebased</strong>.</p>
      <ul>
      <li>Soapbox FE is being renamed to simply <strong>Soapbox</strong>. - Soapbox BE is being renamed to <strong>Rebased</strong>.</li>
      </ul><h2>Why Rebased?</h2>
      <p>Rebased is a fork of Pleroma. In version control systems, to “rebase” is to move code from one branch to another. This is a nice homage to the history of the project – that it’s not a brand new codebase but rather an improved one. The word “based” is also slang for the opposite of cringe, and considering that Pleroma has become very cringe lately, a re-based alternative is sorely needed.</p>
      <p>The name was inspired by my speaking engagement at <a href="https://rebasedconf.com/" target="_blank" rel="noopener noreferrer">re:BASED tech conference</a>, with which this name change coincides.</p>
      <h2>Similar, but different</h2>
      <p>Rebased features a fresh new logo, created by breaking the Soapbox logo and conforming it into a git-branch shape. It’s clearly still part of Soapbox, but also unique in its own right.</p>
      <img alt="" src="/assets/blog/soapbox-be-is-now-rebased/Screenshot-from-2022-08-17-12-21-17.png"  />
      <p>Their fates may be intertwined, but Rebased also has its own destiny: to become the most widely used backend on the Fediverse. The plan is to gut this thing, make it fast and high-tech, and release the baggage that Pleroma left behind.</p>
      <p>Some of the initial work we’re doing involves better containerization and deployment methods, so it will be easy for people to run Rebased from anywhere.</p>
      <h2>What this means for the future</h2>
      <p>Here are some of the things on our radar to make Rebased the best Fediverse backend:</p>
      <ul>
      <li>Improved developer experience (CI improvements, removing cruft) <li>Improved deployment experience (containerization, envvar config)</li>
<li>Database/performance improvements (eg “Combine activities & objects into one table”)</li>
<li>Events (like Facebook events) </li><li>Groups (like Facebook groups)</li>
<li>Decentralized identity (eg IPFS, Nostr)</li>
<li>Ethereum integrations</li></li>
      </ul><h2>Support us</h2>
      <p>To help us make Rebased as awesome as possible, please consider making a donation!</p>
      <ul>
      <li>Credit Card — <a href="https://paypal.me/gleasonator" target="_blank" rel="noopener noreferrer">PayPal</a> (alex@alexgleason.me) <li>Bitcoin — <code>bc1q9cx35adpm73aq2fw40ye6ts8hfxqzjr5unwg0n</code></li>
<li>Etherium — <code>0xAc9aB5Fc04Dc1cB1789Af75b523Bd23C70B2D717</code></li>
<li>Dogecoin — <code>D5zVZs6jrRakaPVGiErkQiHt9sayzm6V5D</code> </li>- Ubiq (10grans) — <code>0x541a45cb212b57f41393427fb15335fc89c35851</code> - Monero — <code>45JDCLrjJ4bgVUSbbs2yjy9m5Mf4VLPW8fG7jw9sq5u69rXZZopQogZNeyYkMBnXpkaip4p4QwaaJNhdTotPa9g44DBCzdK</code></li>
      </ul><h2>Thank you!</h2>
      <p>Thank you to everyone who has helped make Soapbox (and now Rebased) awesome! We look forward to making the Fediverse win!</p></article>
  );
}