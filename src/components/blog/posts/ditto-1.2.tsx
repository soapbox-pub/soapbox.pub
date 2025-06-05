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
  "slug": "ditto-1.2",
  "title": "Ditto 1.2: Elevating User Experience",
  "excerpt": "We are thrilled to announce the release of Ditto 1.2, packed with enhancements designed to make Ditto communities more user-friendly and engaging.",
  "coverImage": "/assets/blog/ditto-1.2/ditto-1.2.png",
  "date": "2025-02-5",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/ditto-1.2/ditto-1.2.png"
  }
};

export default function Ditto12() {
  return (
    <article className="prose prose-lg max-w-none">
      <p> We are thrilled to announce the release of Ditto 1.2, packed with enhancements designed to make Ditto communities more user-friendly and engaging. Here's a breakdown of what's new:</p>
      <h2>Ditto PWA & Android App Store Integration</h2>
      <p>Our small team is diligently working to transform Ditto into a Progressive Web App (PWA), paving the way for its submission to Google Play and other Android app stores. While Ditto isn't a native app, the new integration of Web Push enables it to send OS notifications on both iOS and Android devices, ensuring you stay connected wherever you are.</p>
      <h2>Revamped Onboarding Experience</h2>
      <p>First impressions matter, and we've redesigned the login and registration processes to be more welcoming and user-friendly. New users will encounter an intuitive onboarding flow presented in a modal. To bolster security and combat spam on Ditto's relay, we've developed a custom captcha. New members will need to drag a puzzle piece into the correct position upon joining, ensuring a seamless yet secure entry.</p>
      <figure>
      <div className="grid grid-cols-3 gap-2">
      <img src="/assets/blog/ditto-1.2/onboarding-puzzle.png"  />
      <img src="/assets/blog/ditto-1.2/onboarding-username.png"  />
      <img src="/assets/blog/ditto-1.2/onboarding-complete.png"  />
      </div>
      <figcaption>New Ditto onboarding flow</figcaption>
      </figure>
      <h2>Enhanced Community Features</h2>
      <ul>
      <li><strong>User Interface Updates:</strong> We've polished the general UI to offer a more cohesive and enjoyable experience and set the stage for coming improvements and community features. - <strong>NIP-05 Domain Recognition:</strong> Users with valid NIP-05 names will now see their domain's favicon displayed next to their name on posts. Clicking the favicon will showcase a feed exclusively featuring users from that NIP-05 domain, fostering a sense of community and shared identity. - <strong>NIP-05 Encouragement:</strong> We'll gently remind users to set up their NIP-05 identifiers to enhance their credibility and visibility within the community. - <strong>Latest Accounts Highlight:</strong> The newest members to join the community are now featured in the sidebar to encourage community building and welcoming of new users. </li>
      </ul><figure>
        <img alt="Ditto 1.2 UI improvements" src="/assets/blog/ditto-1.2/ditto-1.2-ui.png"   />
        <figcaption>New streamlined Ditto UI, as seen on Henhouse.</figcaption>
      </figure>
      <h2>Advanced Search, Autocomplete, and Filtering</h2>
      <ul>
      <li><strong>Language Detection and Translation:</strong> We've embedded a compact neural network, Lande, into Ditto to detect the language of posts. With support for the NIP-50 language extension and a new language dropdown feature, users can easily filter content by language. Additionally, integration with third-party translation APIs like DeepL and LibreTranslate allows admins to enable a "Translate" button beneath posts in foreign languages, bridging communication gaps effortlessly. - <strong>Improved Autocomplete:</strong> When mentioning a user or searching for an account, the autocompletion popup now prioritizes people you follow, with additional results ordered by their number of followers, making connections more intuitive. - <strong>Advanced Search Capabilities:</strong> Ditto's search functionality now supports queries with various attributes, such as <code>video:true</code> and <code>protocol:activitypub</code>. These filters can be combined for a more refined and targeted search experience.</li>
      </ul><figure>
        <img alt="Search filters" src="/assets/blog/ditto-1.2/search-filters.png"   />
        <figcaption>Search filtered for: videos, Nostr, and English</figcaption>
      </figure>
      <h2>Database Overhaul & Performance Boosts</h2>
      <p>Recognizing the limitations of SQLite in a production environment, we've transitioned Ditto to a specialized Postgres setup. This shift has resulted in a tenfold performance improvement, especially for tag queries. We've also developed a custom rate-limiter from scratch, significantly enhancing Ditto's ability to block harmful traffic. These database optimizations have notably increased feed loading speeds, ensuring a smoother user experience.</p>
      <h2>Additional Enhancements</h2>
      <ul>
      <li><strong>OpenGraph Support:</strong> Sharing links from Ditto on other websites now generates a preview card, offering a glimpse into the shared content. <li><strong>Zap Splits:</strong> Admins can configure zap splits, allowing users of their server to contribute back whenever they post or zap, promoting a culture of mutual support.</li>
<li><strong>Native Emojis:</strong> We've transitioned to using native emojis instead of images, making Ditto more lightweight and eliminating the dependency on Twemoji.</li>
<li><strong>Olas Compatibility:</strong> Ditto now supports displaying kind 20 "Picture" events produced by Olas, enriching the visual content on the platform. </li>- <strong>Custom Profile Fields:</strong> Inspired by the pronouns field discussion in the NIPs repository, we've implemented user-defined custom fields, allowing for greater personalization of profiles. Codebase Refactoring: Significant portions of the codebase have been modernized. Dependencies have been optimized to reduce the bundle size, resulting in faster loading times and a more efficient platform.</li>
      </ul><figure>
        <img alt="Native Emojis" src="/assets/blog/ditto-1.2/native-emojis.png"   />
        <figcaption>Native emojis as seen on a Google Pixel phone</figcaption>
      </figure>
      <h2>Coming Soon</h2>
      <p>The future of Ditto is even more exciting! Here's a sneak peek at what's next:</p>
      <ul>
      <li><strong>Public Groups (NIP-29):</strong> We are working on implementing public "groups," allowing users to create and participate in topic-based discussions more effectively. - <strong>Cashu Nutzaps & Expanded Commerce:</strong> Soon, Ditto will support Cashu Nutzaps, providing users with more ways to transact and engage in commerce within the platform. - <strong>Post Streaks:</strong> A new feature encouraging user engagement by tracking and rewarding posting consistency. Discoverability UI Improvements: We plan to implement new UI and features to help users find and engage with content across the network including improved search filter UI, cross-protocol highlights, and advanced trends. </li>
      </ul><p>We invite you to explore these updates and experience the enhanced Ditto firsthand. As always, your feedback is invaluable to us as we continue to refine and improve the platform.</p>
      <p>Try Ditto today on any of our <a href="https://soapbox.pub/servers/" target="_blank" rel="noopener noreferrer">servers</a>! </p>
      <p> <em>Special thank you to our Soapbox team: patrickReiis, Danidfra, shantaram! And thank you to the Nostr community for your outpouring of support for Ditto. Onward! 🚀</em></p></article>
  );
}