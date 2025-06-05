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
  "slug": "releasing-soapbox-3.0",
  "title": "Releasing Soapbox 3.0",
  "excerpt": "This is the biggest release of Soapbox ever. What started out as a fork of Gab’s 2019 UI has now become a mainstay on the Fediverse. Originally created for the feminist platform Spinster, Soapbox now powers Truth Social, which has quickly become the largest website running Mastodon online.",
  "coverImage": "/assets/blog/releasing-soapbox-3.0/soapbox-readme-cover-full.png",
  "date": "2022-12-25",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/releasing-soapbox-3.0/soapbox-readme-cover-full.png"
  }
};

export default function ReleasingSoapbox30() {
  return (
    <article className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ 
        __html: `<p> This is the biggest release of Soapbox ever. What started out as a fork of Gab's 2019 UI has now become a mainstay on the Fediverse. Originally created for the feminist platform Spinster, Soapbox now powers Truth Social, which has quickly become the largest website running Mastodon online.</p>

<p>Many of the improvements here are thanks to a collaboration between Truth Social, a young man in Poland, and a vibrant Open Source community. These parts have contributed equally to create something amazing.</p>

<p>I am proud to see Soapbox used by leftist anarchists, conservatives, businesses, and fools. People from all different backgrounds use Soapbox, and we build together with ranging viewpoints. The result is the best UI on the Fediverse.</p>

<p>No line of code has gone untouched. The codebase has been converted to TypeScript and Tailwind CSS. We now support key features such as quote posting and events. Now is the best time ever to jump ship.</p>

<p>We hope you enjoy this release as much as we did making it. The journey never ends. But we are better equipped than ever to usher forward this new era of the internet.</p>

<h2>What is Soapbox?</h2>

<p>Soapbox is a UI for the Fediverse. You can use it to replace Mastodon's UI with something more beautiful, but we can do much better. Soapbox has its own backend called Rebased, built especially for Soapbox to do new things Mastodon can not. Many of these new features are only available on the latest version of Rebased, which has also been released. With Rebased, Soapbox becomes a full replacement for Mastodon.</p>

<h2>Quote Posts</h2>

<p>Finally, this important and obvious feature is available. Quote posting is a feature people have come to expect, so a social media experience is simply incomplete without it.</p>

<p>!<a href="/assets/blog/releasing-soapbox-3.0/quote-post.png" target="_blank" rel="noopener noreferrer">Quote post screenshot</a></p>

<strong>Backends:</strong> Rebased, Fedibird

<h2>Reply Mentions</h2>

<p>!<a href="/assets/blog/releasing-soapbox-3.0/hellthread-reply.png" target="_blank" rel="noopener noreferrer">Reply mentions screenshot</a></p>

<p>When replying to a post, Soapbox would previously insert mentions into the text. Now they are separate, which makes things more readable.</p>

<video src="/assets/blog/releasing-soapbox-3.0/hellthread.webm" autoPlay muted loop></video>

<p>In the post composer itself, recepients are visible at the top. You can click into them to add or remove recipients. (You can also tag people as normal to add them to the conversation).</p>

<strong>Backends:</strong> Rebased, Pleroma

<h2>Editing</h2>

<p>!<a href="/assets/blog/releasing-soapbox-3.0/edited-post.png" target="_blank" rel="noopener noreferrer">Edited post screenshot</a></p>

<p>Users can finally edit posts! No more broken threads.</p>

<p>!<a href="/assets/blog/releasing-soapbox-3.0/edit-history.png" target="_blank" rel="noopener noreferrer">Edit history screenshot</a></p>

<p>Edited posts will display a pencil icon, and can be clicked to view the full editing history.</p>

<strong>Backends:</strong> Rebased, Mastodon, Pleroma

<h2>Events</h2>

<p>The biggest new feature available only in Rebased - federated events! Users can post conferences, meetups, online events, or just have some fun.</p>

<p>!<a href="/assets/blog/releasing-soapbox-3.0/event-discussion.png" target="_blank" rel="noopener noreferrer">Event discussion screenshot</a></p>

<p>Users can join events and comment on them.</p>

<p>!<a href="/assets/blog/releasing-soapbox-3.0/events-map.png" target="_blank" rel="noopener noreferrer">Event map screenshot</a></p>

<p>The event location can be viewed on a map right in Soapbox, powered by OpenStreetMap.</p>

<p>Events in Rebased federate with <a href="https://joinmobilizon.org/en/" target="_blank" rel="noopener noreferrer">Mobilizon</a>.</p>

<strong>Backends:</strong> Rebased

<h2>Birthdays</h2>

<p>!<a href="/assets/blog/releasing-soapbox-3.0/birthday-edit-profile.png" target="_blank" rel="noopener noreferrer">Edit profile screenshot</a></p>

<p>Users can now add a birthday to their profile.</p>

<p>!<a href="/assets/blog/releasing-soapbox-3.0/birthday-widget.png" target="_blank" rel="noopener noreferrer">Birthday widget screenshot</a></p>

<p>When people you follow have a birthday, they'll show up in the homepage sidebar. Be sure to wish them a happy birthday!</p>

<p>Admins can also enforce an age requirements for users - in which case a birthday field will be added to the registration form.</p>

<strong>Backends:</strong> Rebased, Pleroma

<h2>Chats Redesign</h2>

<p>Chats have been completely overhauled. This new design really brings out the best of chats!</p>

<p>!<a href="/assets/blog/releasing-soapbox-3.0/chat-widget.png" target="_blank" rel="noopener noreferrer">Chat widget screenshot</a></p>

<p>The chat widget has been unified into a single pane. This streamlines the UI and makes chatting while browsing easy.</p>

<p>!<a href="/assets/blog/releasing-soapbox-3.0/chat-desktop.png" target="_blank" rel="noopener noreferrer">Chat widget screenshot</a></p>

<p>On desktop, a full chats view is available, allowing you to quickly switch between chats. This UI is responsive, and collapses into a single column on mobile.</p>

<p>Some major quality of life improvements have been made, including</p>

<p>1. A larger viewport. 2. Autoresizing textarea. 3. Autocomplete for emojis. 4. Ability to leave a chat.</p>

<p>This is truly the best direct messaging experience the Fediverse has ever seen!</p>

<strong>Backends:</strong> Rebased, Pleroma

<h2>Onboarding</h2>

<p>New users are greeted with an onboarding screen and prompted to set up their bio and avatar.</p>

<video src="/assets/blog/releasing-soapbox-3.0/onboarding.webm" autoPlay muted loop></video>

<strong>Backends:</strong> All

<h2>Server Rules</h2>

<p>If the admin configures server rules, users will be required to select one or more rule violations when submitting a report. The reports modal has been completely redesigned to accomodate this.</p>

<p>!<a href="/assets/blog/releasing-soapbox-3.0/report-rules.png" target="_blank" rel="noopener noreferrer">Report rules screenshot</a></p>

<strong>Backends:</strong> Rebased, Mastodon

<h2>Translations</h2>

<p>It is now possible to translate posts into your native language!</p>

<video src="/assets/blog/releasing-soapbox-3.0/translations.webm" autoPlay muted loop></video>

<p>This relies on a third-party service, and so far the supported options are DeepL (proprietary) and LibreTranslate (FOSS). Only public posts can be translated.</p>

<strong>Backends:</strong> Rebased

<h2>UI Redesign</h2>

<p>In Soapbox 3.0, we built a UI component library from the ground-up to support the most basic features of Soapbox. These basic elements (such as <code>Stack</code>, <code>HStack</code>, <code>Button</code>, <code>Input</code>, <code>Card</code>, <code>Text</code>, etc) are used as the building blocks for more complex components. This resulted in a high level of consistency across the entire UI. Thousands of lines of CSS were deleted in favor of these UI components, which use <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a> utility classes. Switching to TypeScript was essential, as it made these new UI components easy to use. Most class-based components were also converted to functional components so reusable hooks can simplify our code. The project has truly been made beautiful both inside and out, a reminder that good design and engineering are inseparable.</p>

<p>The outdated FontAwesome icons have been replaced with <a href="https://tabler-icons.io/" target="_blank" rel="noopener noreferrer">Tabler</a>, a beautiful Open Source icon set. Tabler uses "line icons" (opposed to "filled"), which is a more modern design trend. Icons are now rendered as SVGs instead of fonts.</p>

<p>!<a href="/assets/blog/releasing-soapbox-3.0/ui-navigation.png" target="_blank" rel="noopener noreferrer">Desktop navigation screenshot</a></p>

<p>Finally, the layout has been streamlined and beautified. Navigation and settings have been consolidated. A new color system makes Dark Mode better than ever. Focus states make the UI more acessible, and performance has been improved. This is an update you won't want to miss!</p>

<strong>Backends:</strong> All

<h2>Theme editor</h2>

<p>With Tailwind CSS came a robust new color system. Previously Soapbox supported configuring only one or two colors, which it would extrapolate to the rest of the UI. Now admins can configure every individual color used on the whole site.</p>

<video src="/assets/blog/releasing-soapbox-3.0/theme-editor.webm" autoPlay muted loop></video>

<p>The theme editor has a convenient hue slider that can adjust whole palettes at once, as well as the ability to export and import themes in JSON format. We hope you enjoy creating and sharing themes!</p>

<strong>Backends:</strong> Rebased, Pleroma

<h2>Admin Improvements</h2>

<p>In Soapbox, admins can manage users directly from their profile. Admin actions are now consolidated into a single "Moderate user" action from the 3-dots menu. This displays a modal with the ability to verify, suggest, deactivate, and delete accounts.</p>

<p>!<a href="/assets/blog/releasing-soapbox-3.0/moderate-user.png" target="_blank" rel="noopener noreferrer">Moderation modal screenshot</a></p>

<p>It is also now possible for admins to add custom badges to accounts. These badges are local-only and do not federate, but admins can add badges to both local and remote users.</p>

<strong>Backends:</strong> Rebased, Pleroma

<h2>Toast</h2>

<p>A new toast system has been designed from the ground up for Soapbox! It features beautiful animations, and finally the ability to dismiss a toast.</p>

<video src="/assets/blog/releasing-soapbox-3.0/toast.webm" autoPlay muted loop></video>

<strong>Backends:</strong> All

<h2>Internationalization</h2>

<p>Full RTL (right-to-left) support has been added, which puts Soapbox into an amazing upside-down world. RTL languages include Arabic, Hebrew, Persian, and Central Kurdish. A full translation into Arabic has also been added.</p>

<p>!<a href="/assets/blog/releasing-soapbox-3.0/i18n-rtl.png" target="_blank" rel="noopener noreferrer">Soapbox in Arabic screenshot</a></p>

<p>Translations for Polish and Italian have also been updated. Thank you, translators!</p>

<p>Finally, we are in the early stages of setting up Weblate. This will allow users to provide translations without needing to edit the code.</p>

<strong>Backends:</strong> All

<h2>Support for Mastodon</h2>

<p>Soapbox is originally a fork of Mastodon's UI, transplanted onto Pleroma. In doing so, we lost the ability for it to run on Mastodon anymore, even though it still talked to the same APIs.</p>

<p>In this release, we have restored compatibility with Mastodon. Soapbox is now very flexible, and can adapt to its circumstances. If you run it on Mastodon, Soapbox knows this, and will only display Mastodon features.</p>

<p>It's important to note that while Soapbox supports Mastodon, Mastodon does not support Soapbox. If you decide to run Soapbox as your main frontend on Mastodon, you'll need to overcome some technical hurdles, and it will not support every feauture that Mastodon offers. This is mainly because Soapbox is purely an API client, so it cannot do things that Mastodon does not expose an API for.</p>

<h2>Other Stuff</h2>

<p>This release was so big, we couldn't highlight everything. So here are some of the other improvements you can expect.</p>

<p>- <strong>Admin:</strong> reorganize UI into 3-column layout. - <strong>Admin:</strong> include external link to frontend repo for the running commit. - <strong>Compatibility:</strong> added compatibility with Truth Social, Fedibird, Pixelfed, Akkoma, and Glitch. - <strong>Composer:</strong> support custom emoji categories. - <strong>Composer:</strong> move emoji button alongside other composer buttons, add numerical counter. - <strong>Composer:</strong> use graphical ring counter for character count. - <strong>Developers:</strong> added Test feed, Service Worker debugger, and Network Error preview. - <strong>Ethereum:</strong> Metamask sign-in with Mitra. - <strong>Feeds:</strong> added gaps between posts in feeds. - <strong>Feeds:</strong> automatically load new posts when scrolled to the top of the feed. - <strong>Feeds:</strong> display suggested accounts in Home feed (optional by admin). - <strong>i18n:</strong> added Icelandic translation. - <strong>i18n:</strong> added Shavian alphabet (<code>en-Shaw</code>) transliteration. - <strong>Layout:</strong> improved design of top navigation bar. - <strong>Lists:</strong> ability to edit and delete a list. - <strong>Notifications:</strong> added unread badge to favicon when user has notifications. - <strong>Notifications:</strong> display full attachments in notifications instead of links. - <strong>Posts:</strong> hover the "replying to" line to see a preview card of the parent post. - <strong>Posts:</strong> changed the thumbs-up icon to a heart. - <strong>Posts:</strong> move instance favicon beside username instead of post timestamp. - <strong>Posts:</strong> changed the behavior of content warnings. CWs and sensitive media are unified into one design. - <strong>Posts:</strong> redesigned interaction counters to use text instead of icons. - <strong>Posts:</strong> letterbox images taller than 1:1. - <strong>Profile:</strong> overhauled user profiles to be consistent with the rest of the UI. - <strong>Profile:</strong> ability to feature other users on your profile (on Rebased, Mastodon). - <strong>Profile:</strong> remove a specific user from your followers (on Rebased, Mastodon). - <strong>Search:</strong> added a dedicated search page with prefilled suggestions. - <strong>Settings:</strong> unified settings under one path with separate sections. - <strong>Suggestions:</strong> ability to view all suggested profiles. - <strong>Theme:</strong> auto-detect system theme by default.</p>

<p>See the <a href="https://gitlab.com/soapbox-pub/soapbox/-/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer">full CHANGELOG</a> for a list of all changes.</p>

<h2>Removed</h2>

<p>Unfortunately, some features didn't make the cut. These features were not removed on purpose, but were steamrolled during the major UI updates and never added back. It's possible some of them could reappear in the future.</p>

<p>- <strong>Halloween theme:</strong> I'm sad to see this one go, but Soapbox has become a more serious project. When working on a team, maintaining little things like this can be burdensome, so we decided not to add it back. - <strong>Dyslexic mode, Demetricator:</strong> for similar reasons as above. We might explore solving these problems in a different way in the future. - <strong>Advanced notification categories:</strong> a good feature, but needs more design work to not be overwhelming. - <strong>Private notes on accounts:</strong> this feature will reappear. We simply didn't find a good place for it yet in the new design. - <strong>Backup/export functionality:</strong> also a feature that will be added back. We were not happy with the following export implementation, which abuses the server by making lots of API requests and is not 100% accurate. ZIP backups (a separate feature) simply weren't yet adapted to the new design.</p>

<p>If you need to access a removed feature, you can still use an older version of Soapbox. We preserve the 1.x and 2.x lines of Soapbox at https://v1.soapbox.pub and https://v2.soapbox.pub respectively. It's a great source of nostalgia!</p>

<h2>Installing a server</h2>

<p>Want to set up your own Soapbox instance? See our <a href="/install/" target="_blank" rel="noopener noreferrer">install guide</a>!</p>

<p>If you just want to try it out, visit <a href="https://fe.soapbox.pub/" target="_blank" rel="noopener noreferrer">fe.soapbox.pub</a> and log in with any Mastodon account.</p>

<h2>Plans for 2023</h2>

<p>This has been a huge year for Soapbox. Thank you to everyone who helped make it special!</p>

<p>We waited way too long to do this release, partly because blog posts like this are time-consuming and distract from development time. In the future we'll start doing casual releases on GitLab more often, and save the blog post fanfare only for larger releases like this one.</p>

<p>The polished new look for Soapbox now makes our website look outdated. In addition, we get a lot of new admins seeking help with no efficient way to document solutions. So Q1 2023 seems like a great time to build a new website and docs. The next iteration will use Markdown files so people can easily contribute on GitLab.</p>

<p>At this point our product feels capable of taking on Big Tech, so it's just a matter of polishing and making it easier to self-host.</p>

<h2>Thank You!</h2>

<p>Thanks again to everyone! Have a Merry Christmas, a Happy New Year, and I look forward to building with you all again in 2023!</p>}`
      }} />
    </article>
  );
}
