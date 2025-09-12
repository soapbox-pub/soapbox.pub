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
  "slug": "soapbox-fe-v1.1-release",
  "title": "Soapbox FE v1.1 Released",
  "excerpt": "This release is so solid it makes v1.0 feel unfinished. Truly, Soapbox FE was put to the ultimate test — a real social network with 14,000 users. 185 issues were closed. Major new features were added. This update brings us up to speed with the latest Pleroma, released last month.",
  "coverImage": "/assets/blog/soapbox-fe-v1.1-release/v-1-1-thumb.png",
  "date": "2020-10-05",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/soapbox-fe-v1.1-release/v-1-1-thumb.png"
  },
  "tags": ["soapbox", "release", "frontend"]
};

export default function SoapboxFeV11Release() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>What is Pleroma?</h2>
      <p>Pleroma is a free and open source, federated, social media software allowing anyone to host their own online community. Servers can cross-communicate with other servers on the network thanks to federation. Soapbox&nbsp;FE is a sleek user interface that server admins can install on top of Pleroma.</p>
      <h2>Quality of Life</h2>
      <p>This release is so solid it makes v1.0 feel unfinished. Truly, Soapbox FE was put to the ultimate test — <em>a real social network with 14,000 users.</em></p>
      <p>185 issues were closed. Major new features were added. This update brings us up to speed with <a href="https://pleroma.social/blog/2020/08/28/releasing-pleroma-2-1-0/" target="_blank" rel="noopener noreferrer">the latest Pleroma, released last month</a>.</p>
      <h2>The Big Migration</h2>
      <p>Spinster, the largest feminist server on the network, has now <a href="https://4w.pub/spinster-2-0-moving-from-mastodon-backend-to-pleroma/" target="_blank" rel="noopener noreferrer">been migrated</a> from Mastodon to Pleroma. This was a difficult challenge that pushed us to the limit.</p>
      <p>Fortunately, our theory was correct, and Spinster now requires a fraction of the resources to operate. Before and after:</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/spinster-mastodon-to-pleroma-comparison.png"  />
      <p>Having a real userbase this time made all the difference. Users quickly identified bugs, and motivated us to make the software more robust to accomodate such a large community.</p>
      <p>Spinster is not the only site migrated to Pleroma+Soapbox this round. Community member Anirudh Oppiliappan was the first outsider to successfully migrate Mastodon to Pleroma using our tool, and <a href="https://icyphox.sh/blog/mastodon-to-pleroma/" target="_blank" rel="noopener noreferrer">his blog post</a> hit the front page of Hacker News. Congrats Anirudh!</p>
      <h2>Chats</h2>
      <p>Without a doubt, Pleroma's biggest new feature is federated chats. Chats are private and 1-on-1. This exciting new way to communicate is only available on some backends, so you'll want your friends to be on Pleroma too.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/soapbox-chats.gif"  />
      <p>"Mobile First" is the norm nowadays, but I think the Fediverse really needs a Facebook-style chat interface. So I built both. On desktop you can chat while browsing, and on mobile the chat will fill the screen.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/chat-panes.png"  />
      <h2>Soapbox Config</h2>
      <p>A big promise of Soapbox has always been server customization. As an admin, you're expected to bring your own brand. In older versions of Soapbox this required manually editing a file on the server, but now site settings such as logo and brand color can be customized right through the GUI.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/soapbox-config.gif"  />
      <strong>Upgrade note:</strong> If you've already configured a soapbox.json file, simply load the config page once and hit "Save". This will move your soapbox.json into the database, and you can safely delete it from your server.
      <h2>Profile Hover Cards</h2>
      <p>A classic Twitter feature, it took far too long for this to hit the Fediverse. Just hover your mouse over a user to see a preview of their account.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/profile-hover-card.gif"  />
      <h2>Theme Toggle</h2>
      <p>To protect your eyes, you can now quickly switch themes. In direct sunlight you'll likely need light mode to see the screen at all. While browsing at night, dark mode is easier on the eyes.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/theme-toggle.gif"  />
      <h2>Markdown</h2>
      <p>Posts are now Markdown-enabled by default! This will enable rich text formatting, and can be easily disabled on a per-post basis.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/markdown.png"  />
      <h2>Instance Favicons</h2>
      <p>In order to help newcomers understand the Fediverse, instance favicons can be shown next to each post. This feature needs to be enabled in Pleroma settings before it will take effect.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/favicons.png"  />
      <p>This is the first step in an initiative to "gameify" the Fediverse, and make its unique qualities truly shine.</p>
      <h2>Import Data</h2>
      <p>Probably the most highly requested feature since the v1.0 release, users want to import their follows when moving from Mastodon to a Pleroma+Soapbox server. CSV exports from Mastodon can now be imported into Soapbox FE.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/import-data.png"  />
      <h2>Bookmarks</h2>
      <p>To easily revisit posts later, they can be bookmarked and revisited any time.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/bookmarks.png"  />
      <h2>Audio Player</h2>
      <p>Uploading sound clips displays an embedded audio player. Uploading multiple files will display the audio player in a modal window.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/audio-player.png"  />
      <h2>Timeline Filters</h2>
      <p>More advanced timeline filtering options now exist, such as filtering out DMs.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/timeline-filters.png"  />
      <h2>Word Filters</h2>
      <p>Certain words or phrases can be filtered out of your timeline.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/word-filters.png"  />
      <h2>Multi-Factor Auth</h2>
      <p>For improved security, users can enable multi-factor auth. After setup, this will prompt them to enter a time-based code from an OTP app on their phone whenever they log in.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/mfa.png"  />
      <h2>Layout Improvements</h2>
      <p>Space was optimized in this release so all three columns are used.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/layout.png"  />
      <h2>Recurring Donations (Experimental)</h2>
      <p>You may have noticed the "Donation" widget in these screenshots. That comes from <a href="https://gitlab.com/soapbox-pub/patron" target="_blank" rel="noopener noreferrer">Patron</a>, an experimental recurring donations platform. It's already running in production on a few servers, but isn't ready for broader adoption yet.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/patron.png"  />
      <p>Our end goal for this is to allow servers to be self-funded by their users.</p>
      <h2>Bug Fixes</h2>
      <p>Some pretty annoying bugs were fixed. In particular there were some deep issues with scrollable lists and the post composer that got resolved.</p>
      <ul>
      <li><strong>Post Composer</strong> — When the autosuggest box popped up, the cursor would jump to the end no matter what. This was fixed by preventing unnecessary re-renders of the autosuggest textarea. <li><strong>Follower lists</strong> — While scrolling follower lists, entries would render invisibly and jump around the screen. This was due to duplicate entries and was resolved by storing the entries in a Set instead of a List.</li>
<li><strong>Notifications</strong> — Same as above. Duplicate notifications were prevented by using an OrderedMap instead of a List.</li>
<li><strong>Bundle size</strong> — Unnecessary libraries were removed or optimized, and thousands of lines of unused CSS were deleted. Because of this the bundle size stayed roughly the same despite all the new features.</li></li>
      </ul><p>View the <a href="https://gitlab.com/soapbox-pub/soapbox/-/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">CHANGELOG</a> for the complete list of bug fixes.</p>
      <h2>Happy Halloween!</h2>
      <p>One of the few missing features from Soapbox Legacy has returned in this release, just in time for Halloween. 🎃 Enable it in your Preferences.</p>
      <video src="/assets/blog/soapbox-fe-v1.1-release/halloween.mp4" autoPlay loop muted></video>
      <h2>In the Future</h2>
      <p>Just a small preview of a few ideas we're working on for a later release:</p>
      <ul>
      <li><strong>Viewing remote timelines</strong> — clicking an instance favicon will show you a timeline of that server's posts. This is part of an initiative to "gameify" the Fediverse. - <strong>Page editor</strong> — we want to add basic CMS capabilities so you can manage a wiki on your server directly through Soapbox FE. - <strong>Record your voice</strong> — speak directly into the post composer to send an audio message.</li>
      </ul><p>Have an idea? Submit it to our <a href="https://gitlab.com/soapbox-pub/soapbox/-/issues" target="_blank" rel="noopener noreferrer">issue tracker</a>.</p>
      <h2>Installing Soapbox FE</h2>
      <p>Installation on an existing Pleroma server is a breeze, and can be done in less than 5 minutes. It is easy to remove if you change your mind.</p>
      <p>To upgrade, repeat these steps.</p>
      <h3>0. Install Pleroma</h3>
      <p>If you haven't already, follow <a href="https://docs-develop.pleroma.social/backend/installation/debian_based_en/" target="_blank" rel="noopener noreferrer">this guide</a> to install Pleroma. If you're still running an old Pleroma version, be sure to upgrade it <em>before</em> upgrading Soapbox FE.</p>
      <h3>1. Fetch the v1.1 build</h3>
      <pre><code>curl -L https://gitlab.com/soapbox-pub/soapbox/-/jobs/artifacts/v1.1.0/download?job=build-production -o soapbox-fe.zip
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
      <p>Note that it replaces Pleroma FE. (Running alongside Pleroma FE is <a href="https://docs.soapbox.pub/frontend/administration/install-subdomain/" target="_blank" rel="noopener noreferrer">also possible</a>). Logged-in users will have to re-authenticate.</p>
      <p>For <strong>removal</strong>, run: <code>rm /opt/pleroma/instance/static/index.html</code></p>
      <h3>3. Customize it</h3>
      <p>After logging in, click your avatar in the topbar, and navigate to Soapbox Config to customize it. Additional settings can be found under Admin Settings in the same menu.</p>
      <img alt="" src="/assets/blog/soapbox-fe-v1.1-release/admin-link.png"  />
      <h2>Fund the Soapbox Project</h2>
      <p>Soapbox is funded entirely by donations. If you would like to support me, you can send me a donation. Your support is greatly appreciated, and every bit counts. Thank you!</p>
      <ul>
      <li>Credit Card — <a href="https://paypal.me/gleasonator" target="_blank" rel="noopener noreferrer">PayPal</a> (alex@alexgleason.me) <li>Bitcoin — <code>bc1q9cx35adpm73aq2fw40ye6ts8hfxqzjr5unwg0n</code></li>
<li>Etherium — <code>0xAc9aB5Fc04Dc1cB1789Af75b523Bd23C70B2D717</code></li>
<li>Dogecoin — <code>D5zVZs6jrRakaPVGiErkQiHt9sayzm6V5D</code> </li>- Ubiq (10grans) — <code>0x541a45cb212b57f41393427fb15335fc89c35851</code> - Monero — <code>45JDCLrjJ4bgVUSbbs2yjy9m5Mf4VLPW8fG7jw9sq5u69rXZZopQogZNeyYkMBnXpkaip4p4QwaaJNhdTotPa9g44DBCzdK</code></li>
      </ul><h2>Contributors</h2>
      <p>A HUGE thank you to everyone who helped make this release a reality! In particular I'd like to thank M.K. Fain and the Spinster community for pushing to make this release perfect. And of course, the usual suspects. 😉</p>
      <ul>
      <li>Curtis Rock <li>Sean King</li>
<li>Bárbara de Castro Fernandes</li>
<li>M.K. Fain </li>- Lain, Feld, and the Pleroma dev team!</li>
      </ul><p>To everyone else I did not mention, a huge thank you for being part of this journey! I'm eternally grateful, and excited about how this community is growing.</p>
      <h2>Stay Updated</h2>
      <p>To keep updated, follow me on the Fediverse at <a href="https://gleasonator.com/users/alex" target="_blank" rel="noopener noreferrer">@alex@gleasonator.com</a>. Thanks for your support! </p></article>
  );
}