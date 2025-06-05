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
  "slug": "soapbox-fe-v1.2-release",
  "title": "Soapbox FE v1.2 Released",
  "excerpt": "With a slew of administration new features, this release builds on the stability of the v1.1 release. It brings us up to speed with Pleroma 2.3, released last month. Managing a Fediverse server can be challenging. That's why we brought the most important admin features into a convenient dashboard.",
  "coverImage": "/assets/blog/soapbox-fe-v1.2-release/v-1-2-thumb.png",
  "date": "2021-04-02",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/soapbox-fe-v1.2-release/v-1-2-thumb.png"
  }
};

export default function SoapboxFeV12Release() {
  return (
    <article className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ 
        __html: `<p> <h2>What is Pleroma?</h2></p>

<p>Pleroma is a free and open source, federated, social media software allowing anyone to host their own online community. Servers can cross-communicate with other servers on the network thanks to federation. Soapbox&nbsp;FE is a sleek user interface that server admins can install on top of Pleroma.</p>

<h2>Battle Tested</h2>

<p>With a slew of administration new features, this release builds on the stability of the <a href="/blog/soapbox-fe-v1.1-release/">v1.1 release</a>. It brings us up to speed with <a href="https://pleroma.social/announcements/2021/03/02/pleroma-major-release-2-3-0/" target="_blank" rel="noopener noreferrer">Pleroma 2.3, released last month</a>.</p>

<h2>Admin Dashboard</h2>

<img alt="" src="/assets/blog/soapbox-fe-v1.2-release/dashboard.png" />

<p>Managing a Fediverse server can be challenging. That's why we brought the most important admin features into a convenient dashboard.</p>

<img alt="" src="/assets/blog/soapbox-fe-v1.2-release/reports.gif" />

<p>Reports can now be handled directly within Soapbox! Admins will get notified of reports. Take actions on reports, or close many reports quickly.</p>

<img alt="" src="/assets/blog/soapbox-fe-v1.2-release/registration-mode.gif" />

<p>A quick registration switcher lets you close signups at your convenience. This is a useful for fighting spam or brigades.</p>

<p>The "Approval Required" option is better than ever. When enabled, you'll get a notification for new signups, which you can approve through the dashboard. I highly recommend this option for most communities.</p>

<img alt="" src="/assets/blog/soapbox-fe-v1.2-release/mod-log.png" />

<p>Need to figure out what happened? Review the mod log to see a history of events.</p>

<h2>Inline Moderation</h2>

<img alt="" src="/assets/blog/soapbox-fe-v1.2-release/deletion-modal.gif" />

<p>Admins can take actions on users directly from their profile or in timelines. When deleting a local user, you must tick the box to prevent mistakes.</p>

<h2>Remote Timelines</h2>

<img alt="" src="/assets/blog/soapbox-fe-v1.2-release/remote-timeline.gif" />

<p>It's easy to see what's going on in remote servers. Click the favicon by any post and you will see the timeline for that instance. This promotes discoverability of federation, and helps people learn more about different communities on the Fediverse.</p>

<p>Note: you must enable instance favicons in AdminFE for this to take effect.</p>

<h2>Multiple Account Support</h2>

<p>To promote a project, idea, or brand, it is common to create a separate account. Now it is easy to switch between them. Simply sign in to each account, and they will all appear in your menu. Only local accounts are supported.</p>

<img alt="" src="/assets/blog/soapbox-fe-v1.2-release/profile-switcher.gif" />

<p>In supported browsers, you can middle-click an account to activate it in a new tab.</p>

<h2>Remote Follow Button</h2>

<img alt="" src="/assets/blog/soapbox-fe-v1.2-release/remote-follow.png" />

<p>To increase compatibility with third-party Fediverse software, remote follow is now possible.</p>

<h2>Responsive Follows</h2>

<img alt="" src="/assets/blog/soapbox-fe-v1.2-release/responsive-follow.gif" />

<p>The follow button updates immediately when it goes through. Previously, you had to refresh the page.</p>

<h2>Registration Feedback</h2>

<img alt="" src="/assets/blog/soapbox-fe-v1.2-release/registration-modal.png" />

<p>To date, "I can't log in" is still the number one complaint of Fediverse users. It is usually user error. We've done everything we can to streamline this process to make it easier to understand what's going on.</p>

<h2>Import Mutes</h2>

<img alt="" src="/assets/blog/soapbox-fe-v1.2-release/import-mutes.png" />

<p>Importing mutes by CSV is now possible.</p>

<h2>Bug Fixes</h2>

<p>- <strong>Heart react</strong> — The heart emoji reaction stopped working with Pleroma's 2.3 update, but is now fixed across versions. - <strong>Block & mutes pagination</strong> — Previously only the first 20 results were shown for blocks and mutes. Now it supports endless scrolling. - <strong>Markdown</strong> — Due to problems with Markdown, it's now disabled by default, but configurable in Preferences. - <strong>Search loading</strong> — Display a loading animation while a search is in progress. - <strong>"Bot" badge</strong> — A "bot" badge is now displayed with bot accounts. - <strong>Mobile content</strong> — Sidebar content is now visible on mobile from the Server Information menu item.</p>

<p>View the <a href="https://gitlab.com/soapbox-pub/soapbox/-/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">CHANGELOG</a> for the complete list of bug fixes.</p>

<h2>Verifications (Blue Check)</h2>

<img alt="" src="/assets/blog/soapbox-fe-v1.2-release/blue-check.gif" />

<p>For no other reason than just for fun, admins can give users a blue checkmark. This feature does not federate, but larger servers might find it useful.</p>

<h2>In the Future</h2>

<p>Here are some things we hope to include in the next version:</p>

<p>- <strong>Nested threading</strong> — To make it easier to see who replied to what, we want to adopt Reddit-style threading. - <strong>Notification dropdown</strong> — We'd like to make notifications a dropdown menu on desktop so you can check them without browsing away.</p>

<p>Have an idea? Submit it to our <a href="https://gitlab.com/soapbox-pub/soapbox/-/issues" target="_blank" rel="noopener noreferrer">issue tracker</a>.</p>

<h2>Installing Soapbox FE</h2>

<p>Installation on an existing Pleroma server is a breeze, and can be done in less than 5 minutes. It is easy to remove if you change your mind.</p>

<p>To upgrade, repeat these steps.</p>

<h3>0. Install Pleroma</h3>

<p>If you haven't already, follow <a href="https://docs-develop.pleroma.social/backend/installation/debian_based_en/" target="_blank" rel="noopener noreferrer">this guide</a> to install Pleroma. If you're still running an old Pleroma version, you should upgrade it.</p>

<h3>1. Fetch the v1.2 build</h3>

<pre><code>curl -L https://gitlab.com/soapbox-pub/soapbox/-/jobs/artifacts/v1.2.3/download?job=build-production -o soapbox-fe.zip
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

<p>For <strong>removal</strong>, run: <code>rm /opt/pleroma/instance/static/index.html</code></p>

<h2>Fund the Soapbox Project</h2>

<p>Soapbox is funded entirely by donations. If you would like to support me, you can send me a donation. Your support is greatly appreciated, and every bit counts. Thank you!</p>

<p>- Credit Card — <a href="https://paypal.me/gleasonator" target="_blank" rel="noopener noreferrer">PayPal</a> (alex@alexgleason.me) - Bitcoin — <code>bc1q9cx35adpm73aq2fw40ye6ts8hfxqzjr5unwg0n</code> - Etherium — <code>0xAc9aB5Fc04Dc1cB1789Af75b523Bd23C70B2D717</code> - Dogecoin — <code>D5zVZs6jrRakaPVGiErkQiHt9sayzm6V5D</code> - Ubiq (10grans) — <code>0x541a45cb212b57f41393427fb15335fc89c35851</code> - Monero — <code>45JDCLrjJ4bgVUSbbs2yjy9m5Mf4VLPW8fG7jw9sq5u69rXZZopQogZNeyYkMBnXpkaip4p4QwaaJNhdTotPa9g44DBCzdK</code></p>

<h2>Update: 1.2.1 (Apr 6, 2021)</h2>

<p>A new minor release fixes the following bugs:</p>

<p>- Redirect the user Home after logging in. - Fix the "View context" button on videos.</p>

<h2>Update: 1.2.2 (Apr 13, 2021)</h2>

<p>A new minor release fixes the following bugs:</p>

<p>- Infinite loop when a secondary account is stored incorrectly. - Emoji reacts not sent through notifications.</p>

<h2>Update: 1.2.3 (Apr 18, 2021)</h2>

<p>A new minor release makes the following changes:</p>

<p>- Redirect the user after registration. - Fix file uploads ending in .blob - Invalid auth users are now deleted from the user's browser. - Twemoji is now bundled with Soapbox FE instead of relying on Pleroma BE to provide them.</p>

<h2>Contributors</h2>

<p>A HUGE thank you to everyone who helped make this release a reality!</p>

<p>- Bane - Curtis Rock - Isabell Deinschnitzel - João Rodrigues - Marcin Mikołajczak - matrix07012 - NaiJi - NEETzsche - Ruine Zederberg - Sean King - The Pleroma dev team!</p>

<p>To everyone else I did not mention, a huge thank you for being part of this journey!</p>

<h2>Stay Updated</h2>

<p>To keep updated, follow me on the Fediverse at <a href="https://gleasonator.com/users/alex" target="_blank" rel="noopener noreferrer">@alex@gleasonator.com</a>. Thanks for your support!</p>}`
      }} />
    </article>
  );
}
