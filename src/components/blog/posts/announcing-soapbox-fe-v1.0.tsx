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
  "slug": "announcing-soapbox-fe-v1.0",
  "title": "Announcing Soapbox FE v1.0",
  "excerpt": "After 12 weeks of strenuous labor, we're excited to announce that the Soapbox Frontend is finally stable. Countless hours and late nights were spent pouring love and energy into this release, so that the familiar interface can finally run on Pleroma with minimal gotchas.",
  "coverImage": "/assets/blog/announcing-soapbox-fe-v1.0/soapbox-launch.png",
  "date": "2020-06-15",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-soapbox-fe-v1.0/migrator-photo.jpg"
  },
  "tags": ["soapbox", "announcement", "frontend"]
};

export default function AnnouncingSoapboxFeV10() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>Labor of love</h2>
      <p>After 12 weeks of strenuous labor, we're excited to announce that the Soapbox Frontend is finally stable. Countless hours and late nights were spent pouring love and energy into this release, so that the familiar interface can finally run on Pleroma with minimal gotchas.</p>
      <p>The primary goal of this release was to take the existing interface we had with the legacy Mastodon+Soapbox fork, and stabilize it to work nicely with Pleroma. In future releases we intend to put more effort into design choices and additional features.</p>
      <h2>Why Pleroma?</h2>
      <img alt="" src="/assets/blog/announcing-soapbox-fe-v1.0/pleroma-htop.gif"  />
      <p>The simple answer: Because it's the future.</p>
      <p>Pleroma's <a href="https://pleroma.social/blog/2020/03/08/releasing-pleroma-2-0-0/" target="_blank" rel="noopener noreferrer">2.0 release</a> filled major feature gaps, and set the stage for its role as an innovative fediverse backend. If there were ever a time to jump ship, it's now.</p>
      <p>We are grateful to Mastodon for laying so much groundwork, but Pleroma is pushing things forward: first with EmojiReacts, now with <a href="https://git.pleroma.social/pleroma/pleroma/-/merge_requests/2429" target="_blank" rel="noopener noreferrer">ChatMessages</a>, and with a promise of exciting new features in the pipeline.</p>
      <blockquote><p>“People think you can’t make new activity types. But you can.”— Lain, creator of Pleroma</p></blockquote>
      <p>Pleroma is worlds more efficient, lowering the barrier of entry for fediverse servers. It's also incredibly flexible, allowing for swappable frontends, which is the feature making Soapbox FE possible. Changing backends was a huge move (more on that later), but will be well worth it in the long term.</p>
      <h2>Server customization</h2>
      <img alt="" src="/assets/blog/announcing-soapbox-fe-v1.0/soapbox-branding.gif"  />
      <p>The big promise of Soapbox is that it supports custom branding. Our philosophy is that fediverse servers should not be cookie-cutter software installations, but should instead appeal to a target demographic. The word "Soapbox" is not displayed in the interface, nor is the Soapbox logo; it's your job to create a name and logo that appeals to your community.</p>
      <p>I believe that we've succeeded in achieving that goal for the v1.0 release, which supports a custom site name, logo, and brand color throughout the interface. The brand color is probably the coolest, since it allows the admin to configure a single hex code to set the color scheme of the entire UI (independently of the light and dark themes).</p>
      <h2>Authentication and settings</h2>
      <img alt="" src="/assets/blog/announcing-soapbox-fe-v1.0/edit-profile.png"  />
      <p>Soapbox FE is based on Mastodon's frontend, which renders some pages in its React webapp, and others with Ruby on Rails. The Ruby on Rails pages could not be carried over, so they had to be rebuilt in React. This is an improvement because it unifies the interface and makes navigation faster.</p>
      <p>The primary areas were authentication (logging in, registering, "I forgot my password", etc.) and user preferences. Users can now log in without reloading the page, and set preferences with immediate results.</p>
      <h2>Emoji reactions</h2>
      <img alt="" src="/assets/blog/announcing-soapbox-fe-v1.0/emoji-reacts.gif"  />
      <p>Finally being on Pleroma, I could not help but implement the EmojiReact feature in this release. For the first release, I aimed to create minimal design changes and to be conservative about the approach.</p>
      <p>While Pleroma offers a lot of flexibility with reactions, Soapbox FE only lets you choose from 6 predefined reactions, and you can only react once to each post. The trade-off of flexibility is simplicity. I believe we're off to a good start with this streamlined UI, and I plan to build more flexibilty onto it in future releases.</p>
      <p>The "👍" reaction gets translated into "Favourite" automatically for compatibility with non-Pleroma servers.</p>
      <h2>Theming</h2>
      <img alt="" src="/assets/blog/announcing-soapbox-fe-v1.0/themes.gif"  />
      <p>The styles have been overhauled using native CSS variables, condensing it to a single stylesheet. This redefines a "theme" to mean a set of CSS variables rather than separate stylesheets for each theme. As a result the bundle is smaller, the SCSS builds faster, and themes can be switched on-the-fly without reloading the page.</p>
      <p>This method was inspired by Pleroma FE's theming system. Thank you HJ for the inspiration.</p>
      <h2>Translations</h2>
      <img alt="" src="/assets/blog/announcing-soapbox-fe-v1.0/soapbox-languages.gif"  />
      <p>Like themes, translations required a total overhaul from the Mastodon way. Previously, Mastodon rendered the user's language in Ruby on Rails, using a complicated build system in Webpack. The new system loads language files in a streamlined way, allowing languages to be switched on-the-fly, and only downloading the language when needed. The old build system was completely removed in favor of these dynamic imports.</p>
      <h2>Code improvements</h2>
      <img alt="" src="/assets/blog/announcing-soapbox-fe-v1.0/tests.png"  />
      <p>Hundreds of lines were refactored, and thousands reformatted. Test coverage increased significantly, now at 10% coverage (compared to Mastodon's 4%). There were some challenges writing tests early-on that have now been overcome, and our intention is that all new code will be tested using TDD.</p>
      <h2>Mastodon to Pleroma Migrator</h2>
      <img alt="" src="/assets/blog/announcing-soapbox-fe-v1.0/migrator-photo.jpg"  />
      <p>Part of this journey was creating a <a href="https://gitlab.com/soapbox-pub/migrator" target="_blank" rel="noopener noreferrer">migration script</a> to migrate existing Mastodon servers into Pleroma. It was an intense challenge that required total focus and perserverance over 12 consecutive days. So far only Gleasonator.com has been migrated this way, but the process is now fairly painless, and all legacy Mastodon+Soapbox servers will be migrated to Pleroma soon enough.</p>
      <h2>Soapbox FE in the wild</h2>
      <p>It has been very exciting to see new communities spring up running Soapbox FE. A huge thank you to everyone who tested it! I'm looking forward to seeing all the colors of the rainbow. 🌈</p>
      <img alt="" src="/assets/blog/announcing-soapbox-fe-v1.0/soapbox-homepages.gif"  />
      <p>Join a Soapbox server today:</p>
      <ul>
      <li><a href="https://gleasonator.com/" target="_blank" rel="noopener noreferrer">Gleasonator</a> <li>flagship developer instance run by yours truly</li>
<li><a href="https://social.handholding.io/" target="_blank" rel="noopener noreferrer">Handholding Social</a></li>
<li>generalistic server with extra features like video streaming </li><li><a href="https://pleroma.nl/" target="_blank" rel="noopener noreferrer">Pleroma 🇳🇱</a></li>
<li>generalistic Dutch server</li>
<li><a href="https://social.teci.world/" target="_blank" rel="noopener noreferrer">TECI Social</a> </li>- FOSS-themed server</li>
      </ul><h2>The future</h2>
      <p>Soapbox FE v1.0 is only the beginning. Our vision is to make Pleroma+Soapbox a total replacement for proprietary social media. Some features in the pipeline include:</p>
      <img alt="" src="/assets/blog/announcing-soapbox-fe-v1.0/chatmessages.png"  />
      <ul>
      <li><strong>Chats</strong> - Support for native 'Facebook Messenger'-style chats is already in Pleroma's develop branch, and just needs a UI from us. - <strong>Recurring donations</strong> - A feature originally in the legacy Mastodon+Soapbox, we are rebuilding the integrated recurring donations platform to help servers be sustainable through self-funding by users. - <strong>Groups</strong> - Planned for future Pleroma versions, we hope this feature will enhance discoverability and inspire users to organize.</li>
      </ul><h2>Installing Soapbox FE</h2>
      <p>Installation on an existing Pleroma server is a breeze, and can be done in less than 5 minutes. It is easy to remove if you change your mind.</p>
      <h3>0. Install Pleroma</h3>
      <p>If you haven't already follow <a href="https://docs-develop.pleroma.social/backend/installation/debian_based_en/" target="_blank" rel="noopener noreferrer">this guide</a> to install Pleroma.</p>
      <h3>1. Fetch the latest build</h3>
      <pre><code>curl -L https://gitlab.com/soapbox-pub/soapbox/-/jobs/artifacts/v1.0.0/download?job=build-production -o soapbox-fe.zip
      </code></pre>
      <h3>2. Unpack</h3>
      <pre><code>busybox unzip soapbox-fe.zip -o -d /opt/pleroma/instance
      </code></pre>
      <strong>That's it! 🎉 Soapbox FE is installed.</strong>
The change will take effect immediately, just refresh your browser tab.
It's not necessary to restart the Pleroma service.
      <p>Note that it replaces Pleroma FE. (Running alongside Pleroma FE is planned for a future release). Logged-in users will have to re-authenticate.</p>
      <p>For <strong>removal</strong>, run: <code>rm /opt/pleroma/instance/static/index.html</code></p>
      <h3>3. Customize it</h3>
      <p>You will probably want to customize your site's logo and color scheme. Follow the <a href="https://gitlab.com/soapbox-pub/soapbox/-/blob/main/docs/customization.md" target="_blank" rel="noopener noreferrer">customization docs</a> for instructions on how to do so.</p>
      <h2>Support the Soapbox Project</h2>
      <p>Soapbox is funded entirely by grants and donations, not ads or data sales. Visit our <a href="/transparency">funding transparency page</a> to learn how we use funds and how to contribute.</p>
      <h2>Special thanks</h2>
      <p>There were a lot of people who made this release happen. A huge thank you to everyone who got their hands dirty, but also to everyone who expressed enthusiasm, gave moral support, provided feedback, and more. I'm proud of the growing community around this project, and thank you all for being part of this journey.</p>
      <p>In particular, I'd like to thank the following contributors:</p>
      <ul>
      <li><strong>Curtis Rock</strong>, for dedicating countless time, energy, and love into the project. Thank you for the development, documentation, support, and for being an ambassador for the project. Your dedication and overflowing optimism has been a source of inspiration. <li><strong>Sean King</strong>, for his bug fixes and relentless enthusiasm.</li>
<li><strong>Bárbara de Castro Fernandes</strong>, for contributing excellent code to solve difficult problems.</li>
<li><strong>Lain, and the entire Pleroma dev team</strong>, for building such great software in the first place, and then implementing Pleroma fixes to address key obstacles along the way. </li>- <strong>Sander and Fluffy</strong>, and the users of pleroma.nl and social.handholding.io respectively, for being pioneers of the project and actually <em>running</em> it on real servers! Huge thank you for believing in the project and providing so much useful feedback. (Also, shout-outs to <strong>igel and waltercool</strong> for running it too) <li><strong>Isabell Deinschnitzel and matrix07012</strong> for contributing German and Czech translations respectively.</li>
<li><strong>David Steele, Steven, and other Gleasonator members</strong> who underwent the migration and provided constant support and feedback.</li>
<li><strong>Mastodon and Gab</strong>, for laying the groundwork for this to happen. Could not have done it without you. </li>- To everyone else I did not mention, a huge thank you for being part of this journey! </li>
      </ul></article>
  );
}