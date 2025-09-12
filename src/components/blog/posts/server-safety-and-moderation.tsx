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
  "slug": "server-safety-and-moderation",
  "title": "Server Safety and Moderation Features in Soapbox",
  "excerpt": "Soapbox and the Fediverse offer site administrators multiple tools to ensure the safety of their users and the enforcement of community standards. This article includes a summary of some of the key safety and moderation features Soapbox offers.",
  "coverImage": "/assets/blog/server-safety-and-moderation/Soapbox-Moderation.png",
  "date": "2021-11-02",
  "author": {
    "name": "Mary Kate Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/server-safety-and-moderation/Soapbox-Moderation.png"
  },
  "tags": ["soapbox", "moderation", "safety"]
};

export default function ServerSafetyAndModeration() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>Registration Options</h2>
      <img alt="" src="/assets/blog/server-safety-and-moderation/Screenshot-from-2022-02-15-13.31.18.png"  />
      <h3>New user signup</h3>
      <p>Your server can have one of three different new account signup formats: open, approval required, or closed. When server registration is open, anyone can sign up immediately. Approval required mode asks new users to provide a reason for joining and then gives Moderators the ability to approve or reject new accounts in the Mod Dashboard (as seen above). When registration is closed, no one can sign up for a new account.</p>
      <h3>Account activation</h3>
      <p>Servers can require that users confirm their email in order to activate a new account. This is useful for preventing spam, but also ensuring that users have access to their email in case they need to reset their password in the future.</p>
      <h2>Federation Restrictions</h2>
      <img alt="" src="/assets/blog/server-safety-and-moderation/Screenshot-from-2022-02-15-13.36.10-980x482.png"  />
      <h3>Federation Restrictions</h3>
      <p>There are multiple ways Fediverse servers can choose to interact with (or not) other servers. Soapbox BE provides multiple, configurable options on how to handle incoming messages from other servers, including completely rejecting content, rejecting some content, and fully whitelisting.</p>
      <h3>Custom MRFs</h3>
      <p>Soapbox also allows site admins to build and implement completely custom MRF (Message Rewrite Facility) policies for handling incoming messages. Learn more about custom MRFs on <a href="https://docs-develop.pleroma.social/backend/configuration/mrf/" target="_blank" rel="noopener noreferrer">Pleroma’s documentation</a>.</p>
      <h2>Content Moderation</h2>
      <img alt="" src="/assets/blog/server-safety-and-moderation/Screenshot-from-2022-02-15-13.25.12-980x483.png"  />
      <h3>Reports</h3>
      <p>Users are able to report content and users, attach relevant posts, and describe the reason for the report. Moderators are able to view and handle reporters directly in the Soapbox Mod Dashboard, including deleting posts, marking posts as “sensitive”, and moderating accounts.</p>
      <h3>Account moderation</h3>
      <p>Mods are able to delete, deactivate, and perform other moderation features directly to user accounts in Soapbox.</p>
      <h2>Mod Log</h2>
      <img alt="" src="/assets/blog/server-safety-and-moderation/Screenshot-from-2022-02-15-13.33.25-980x481.png"  />
      <p> Soapbox includes a detailed Admin panel with comprehensive options for Mods and Admins, including a Moderation Log summarizing all actions taken by mods. This is especially useful for large sites with multiple members on content moderation teams and provides oversight against Mod abuse.</p></article>
  );
}