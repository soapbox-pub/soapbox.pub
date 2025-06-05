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
  "slug": "soapbox-fe-v1.3-cryptocurrency-release",
  "title": "Soapbox FE v1.3: The Cryptocurrency Release",
  "excerpt": "This update to the user interface for Pleroma+Soapbox brings cryptocurrency features to the Fediverse.",
  "coverImage": "/assets/blog/soapbox-fe-v1.3-cryptocurrency-release/v-1-3-thumb.png",
  "date": "2021-07-02",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/soapbox-fe-v1.3-cryptocurrency-release/v-1-3-thumb.png"
  }
};

export default function SoapboxFeV13CryptocurrencyRelease() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>On cryptocurrency</h2>
      <p>I've always believed integrated donations would be a necessary part of the Fediverse. Admins do all the heavy lifting; it's a thankless job. Meanwhile users want to help secure their new online home, but feel powerless to do so.</p>
      <p>I have been running an experimental payment platform based on Stripe alongside my Soapbox servers for a while. It is clunky, vulnerable to deplatforming, and does not fit with the Free Software ethos. I am still working on it, but in the meantime I offer you a more future-proof solution: cryptocurrency.</p>
      <p>Just a year ago cryptocurrency was considered "magical internet money." These days my mom is calling me on the phone asking if I know anything about Bitcoin because her friend's son got rich off it. Better late than never.</p>
      <p>As a developer, cryptocurrency is a dream come true. The integrations are simple and seamless, and I can sleep well at night knowing it is unstoppable. So I've decided to put effort into making cryptocurrency first-class in Soapbox.</p>
      <p>Does it completely solve payment processing? No. But it's a step in the right direction. It can't hurt. And maybe it will inspire people to use it more.</p>
      <blockquote><p>“If you build it, they will come.”</p></blockquote>
      <h2>Homepage donation widget</h2>
      <p>!<a href="/assets/blog/soapbox-fe-v1.3-cryptocurrency-release/crypto-homepage-widget.png" target="_blank" rel="noopener noreferrer">Crypto homepage donation widget</a></p>
      <p>First off, right on the homepage is a widget inviting users to donate crypto. This is configurable by the admin to display any cryptocurrency, and any number of them (or not at all).</p>
      <p>Mobile users can access "Cryptocurrency donations" from the mobile sidebar.</p>
      <h2>Admin donations</h2>
      <p>!<a href="/assets/blog/soapbox-fe-v1.3-cryptocurrency-release/crypto-admin-donate.png" target="_blank" rel="noopener noreferrer">Crypto admin donation page</a></p>
      <p>Expanding the widget will bring you to a page of all available wallets (configured by the admin). The icons come from a library called <a href="https://github.com/spothq/cryptocurrency-icons" target="_blank" rel="noopener noreferrer">cryptocurrency-icons</a>.</p>
      <p>From the admin's perspective, they just need to enter the addresses into a form.</p>
      <h2>QR Code</h2>
      <p>!<a href="/assets/blog/soapbox-fe-v1.3-cryptocurrency-release/crypto-modal.png" target="_blank" rel="noopener noreferrer">Crypto donation modal window</a></p>
      <p>Clicking the QR code icon next to a wallet opens a modal window, so you can easily scan it from your phone.</p>
      <h2>Block explorer</h2>
      <p>!<a href="/assets/blog/soapbox-fe-v1.3-cryptocurrency-release/crypto-block-explorer.png" target="_blank" rel="noopener noreferrer">Crypto block explorer link</a></p>
      <p>Clicking the arrow icon opens the address in a block explorer, giving a glimpse of what's inside.</p>
      <h2>User profiles</h2>
      <p>!<a href="/assets/blog/soapbox-fe-v1.3-cryptocurrency-release/crypto-user-profile.png" target="_blank" rel="noopener noreferrer">Crypto user profile</a></p>
      <p>Best yet, users can accept donations too! Just put an address in a profile field, and use <code>$BTC</code>, <code>$ETH</code>, or any other symbol as the label. Soapbox FE will render a crypto address component in its place.</p>
      <p>!<a href="/assets/blog/soapbox-fe-v1.3-cryptocurrency-release/profile-metadata.png" target="_blank" rel="noopener noreferrer">Crypto profile fields</a></p>
      <p>People have been putting crypto addresses in their profile fields for a while now. It is the natural place for them. Users are also accustomed to ticker symbols like <code>$BTC</code> (Twitter treats them like hashtags). The great thing about this solution is that it still makes sense to users of other frontends, it is predictable, and it even <em>federates</em>.</p>
      <p>!<a href="/assets/blog/soapbox-fe-v1.3-cryptocurrency-release/profile-metadata-mastodon.png" target="_blank" rel="noopener noreferrer">Crypto profile fields on Mastodon</a></p>
      <p>Users of unsupported software (<strong>like Mastodon, above</strong>) will just see the profile fields as plain text. However, Mastodon users who use ticker symbols in the profile fields will have them displayed correctly as addresses when viewed through Soapbox FE.</p>
      <h2>About the design</h2>
      <p>I put a lot of thought into creating the best possible design for these wallets. In the end I got something compact and reusable with powerful features.</p>
      <p>!<a href="/assets/blog/soapbox-fe-v1.3-cryptocurrency-release/wordpress-crypto-donate-box.png" target="_blank" rel="noopener noreferrer">Crypto Donate Box plugin for WordPress</a></p>
      <p>I was first inspired by the design of a WordPress plugin called Crypto Donate Box (<strong>shown above</strong>). It displays a QR code, a copy button, and lets you click between tabs. However, this tabular design doesn't scale to tens (or hundreds) of currencies.</p>
      <p>!<a href="/assets/blog/soapbox-fe-v1.3-cryptocurrency-release/cryptoicons-co.png" target="_blank" rel="noopener noreferrer">Cryptoicons.co</a></p>
      <p>Next, I noticed the grid of currencies from cryptoicons.co, and decided to try combining them. This is what I learned:</p>
      <p>1. It's best to use an HTML <code>&lt;input&gt;</code> field for the address. This reduces errors copying it, it leaves things up to the browser, and it also makes it easy to implement a “copy” button.</p>
      <p>2. It's best to avoid showing multiple QR codes on the screen at the same time. Doing so could cause the user’s phone to accidentally capture the wrong QR code, sending funds to the wrong address. This is why I ended up using a modal to display the QR code (and it made the design more compact as a result).</p>
      <h2>Accepting cryptocurrency</h2>
      <p>!<a href="/assets/blog/soapbox-fe-v1.3-cryptocurrency-release/trezor.jpg" target="_blank" rel="noopener noreferrer">Trezor hardware wallet</a></p>
      <p>If you want to easily accept all kinds of cryptocurrencies, I recommend getting your hands on a <a href="https://trezor.io/" target="_blank" rel="noopener noreferrer">Trezor</a>. This will generate addresses for you to plug into your site.</p>
      <p>Both models are fine, but the Model T is worth the price. I like Trezor because it's 100% open source <em>and</em> open hardware, down to the schematics.</p>
      <h2>But wait, there's more!</h2>
      <p>This is my first time creating a release around a theme, but the truth is there's a lot more in this release than just cryptocurrency features.</p>
      <h2>Scheduled posts</h2>
      <p>!<a href="/assets/blog/soapbox-fe-v1.3-cryptocurrency-release/scheduled-post.png" target="_blank" rel="noopener noreferrer">Scheduled post</a></p>
      <p>Users can now schedule posts! Combined with the ability to manage multiple accounts, this is a publisher's dream. It is easier than ever to manage accounts dedicated to a project or brand.</p>
      <p>Scheduling a post places it into a queue where you can review and cancel them if needed. You may only schedule posts at least 5 minutes in the future.</p>
      <p>Thank you to <a href="https://iddqd.social/@NEETzsche" target="_blank" rel="noopener noreferrer">NEETzsche</a> for first implementing this!</p>
      <h2>User subscriptions</h2>
      <p>!<a href="/assets/blog/soapbox-fe-v1.3-cryptocurrency-release/subscribe.png" target="_blank" rel="noopener noreferrer">User subscriptions</a></p>
      <p>Yet another big improvement for brands, users can subscribe to get notifications whenever an account posts. Take this opportunity to subscribe to <a href="https://gleasonator.com/@soapbox" target="_blank" rel="noopener noreferrer">@soapbox@gleasonator.com</a> so you don't miss a project update.</p>
      <p>Thank you to <a href="https://mstdn.io/@mkljczk" target="_blank" rel="noopener noreferrer">marcin mikołajczak</a> for first implementing this!</p>
      <h2>Bug fixes & small improvements</h2>
      <p>There are A LOT more improvements in this release. These are a few highlights:</p>
      <ul>
      <li>Major performance boost - Better support for multiple attachments - Localization improvements</li>
      </ul><p>To see 20+ more changes, view the complete <a href="https://gitlab.com/soapbox-pub/soapbox/-/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">CHANGELOG</a>.</p>
      <h2>Installing Soapbox FE</h2>
      <p>Installation on an existing Soapbox or Pleroma server is a breeze, and can be done in less than 5 minutes. It is easy to remove if you change your mind.</p>
      <p>To upgrade, repeat these steps.</p>
      <h3>0. Install Soapbox BE or Pleroma</h3>
      <p>If you haven't already, follow <a href="/install" target="_blank" rel="noopener noreferrer">this guide</a> to install Soapbox. If you have a Pleroma installation, you may use that too.</p>
      <h3>1. Fetch the v1.3 build</h3>
      <pre><code>curl -L https://gitlab.com/soapbox-pub/soapbox/-/jobs/artifacts/v1.3.0/download?job=build-production -o soapbox-fe.zip
      </code></pre>
      <h3>2. Unpack</h3>
      <pre><code>busybox unzip soapbox-fe.zip -o -d /opt/pleroma/instance
      </code></pre>
      <em>Or, if you installed the OTP release, unpack to this path instead:</em>
      <pre><code>busybox unzip soapbox-fe.zip -o -d /var/lib/pleroma
      </code></pre>
      <strong>That's it! 🎉 Soapbox FE is installed.</strong>
The change will take effect immediately, just refresh your browser tab.
It's not necessary to restart the Pleroma service.
      <p>Note that it replaces Pleroma FE. (Running alongside Pleroma FE is <a href="https://docs.soapbox.pub/frontend/administration/install-subdomain/" target="_blank" rel="noopener noreferrer">also possible</a>).</p>
      <p>For <em>removal</em>, run: <code>rm /opt/pleroma/instance/static/index.html</code></p>
      <h2>Groups?</h2>
      <p>Groups are in the works! Follow along here:</p>
      <ul>
      <li><strong>Groups ActivityPub document:</strong> <a href="https://gitlab.com/-/snippets/2138031" target="_blank" rel="noopener noreferrer">https://gitlab.com/-/snippets/2138031</a> - <strong>Client-Server API document:</strong> <a href="https://gitlab.com/-/snippets/2137299" target="_blank" rel="noopener noreferrer">https://gitlab.com/-/snippets/2137299</a> - <strong>WIP backend code:</strong> <a href="https://git.pleroma.social/alexgleason/pleroma/-/merge_requests/4" target="_blank" rel="noopener noreferrer">https://git.pleroma.social/alexgleason/pleroma/-/merge_requests/4</a> - <strong>WIP frontend code:</strong> <a href="https://gitlab.com/soapbox-pub/soapbox/-/merge_requests/554" target="_blank" rel="noopener noreferrer">https://gitlab.com/soapbox-pub/soapbox/-/merge_requests/554</a></li>
      </ul><h2>Fund the Soapbox Project</h2>
      <p>Soapbox is funded entirely by donations. If you would like to support me, you can send me a donation. Your support is greatly appreciated, and every bit counts.</p>
      <ul>
      <li>Credit Card — <a href="https://paypal.me/gleasonator" target="_blank" rel="noopener noreferrer">PayPal</a> (alex@alexgleason.me) <li>Bitcoin — <code>bc1q9cx35adpm73aq2fw40ye6ts8hfxqzjr5unwg0n</code></li>
<li>Etherium — <code>0xAc9aB5Fc04Dc1cB1789Af75b523Bd23C70B2D717</code></li>
<li>Dogecoin — <code>D5zVZs6jrRakaPVGiErkQiHt9sayzm6V5D</code> </li>- Ubiq (10grans) — <code>0x541a45cb212b57f41393427fb15335fc89c35851</code> - Monero — <code>45JDCLrjJ4bgVUSbbs2yjy9m5Mf4VLPW8fG7jw9sq5u69rXZZopQogZNeyYkMBnXpkaip4p4QwaaJNhdTotPa9g44DBCzdK</code></li>
      </ul><h2>Thank you!</h2>
      <p>As always, a HUGE thank you to the contributors of this release. The community has stepped up its game, and I look forward to continuing to build with you.</p></article>
  );
}