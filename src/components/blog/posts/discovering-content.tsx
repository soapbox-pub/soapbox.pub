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
  "slug": "discovering-content",
  "title": "Discovering Content on the Fediverse",
  "excerpt": "So you've started a new server on the Fediverse - and it's completely empty. By default, nothing happens. You're stuck there alone on your personal little island with no way to the external world.",
  "coverImage": "/assets/images/Desertisland.jpg",
  "date": "2023-01-07",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/images/Desertisland.jpg"
  }
};

export default function DiscoveringContent() {
  return (
    <article className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ 
        __html: `<p> So you've started a new server on the Fediverse - and it's completely empty. By default, nothing happens. You're stuck there alone on your personal little island with no way to the external world.</p>

<p>This is by design. There are no centralized authorities to connect servers. You have to make your server discover another server. But how?</p>

<h2>Relays</h2>

<p>Someone may have told you to try adding a relay. It can connect you to hundreds of different servers instantly, and you get ALL of their posts!</p>

<p>Once you add a few relays, though, you'll quickly discover that:</p>

<p>1. Performance suffers. Suddenly your server is processing a LOT of posts. 2. 99% of the content are things you don't want to see. They may be posts in a foreign language, advertisements, pornography, bot posting, and spam. 3. Over time, your database size will grow and grow. Before you know it, you've stored 200 GB of Japanese shitposts and furry porn for no apparent reason, and your community is no better off. 4. You find the need to moderate activity in the Fediverse feed. You waste time tracking down inappropriate content and trying to figure out how to remove it. 5. This is very expensive. You're paying a lot of hard-earned money for content you and your users don't want to see.</p>

<p>We strongly recommend NOT adding open relays.</p>

<p>Many Rebased/Pleroma servers have their own relay at <code>example.com/relay</code>, so if you want to see all posts from a _specific server_, a way better solution is to just add that one server's relay.</p>

<p>If you and your friends host a _private relay_, that can also be okay. But as you get bigger, you'll want it less and less. Once you build a community and your server has healthy federation, relays simply add cruft.</p>

<h2>Growing your network naturally</h2>

<p>When starting a brand-new server, the best approach is to follow _one person._ One active user on a different server who you want to see; that's all it takes.</p>

<p>That person will repost content. Because you follow them, your server will discover the reposted content and give you more potential people to follow.</p>

<p>If you're feeling adventurous, you can follow two or three people!</p>

<p>The way your network grows is through follows and reposts. Your Fediverse feed is the collection of all users people on your server follow, and all the content they've reposted.</p>

<p>This is efficient. It contains only the posts you and your users want to see. It's cost-effective, user-friendly, but it takes time. Like planting a seed, you have to give it the right environment and _wait_.</p>

<p>Don't succumb to easy solutions that promise a fast payoff. On the Fediverse you need to have patience, and then everything will work itself out.</p>}`
      }} />
    </article>
  );
}
