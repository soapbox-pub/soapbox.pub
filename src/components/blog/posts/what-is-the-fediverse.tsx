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
  "slug": "what-is-the-fediverse",
  "title": "What is the Fediverse? (And How to Join It)",
  "excerpt": "The Fediverse is a network of decentralized social media sites which all have the ability to communicate with one another. There are currently over 5,000 different sites (“servers”) on the Fediverse, which are home to over 4.4 million users.",
  "coverImage": "/assets/blog/what-is-the-fediverse/What-is-the-Fediverse-1.png",
  "date": "2022-01-27",
  "author": {
    "name": "Mary Kate Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/what-is-the-fediverse/What-is-the-Fediverse-1.png"
  }
};

export default function WhatIsTheFediverse() {
  return (
    <article className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ 
        __html: `<p> <strong>The Fediverse is a network of decentralized social media sites which all have the ability to communicate with one another.</strong> There are currently over 5,000 different sites (“servers”) on the Fediverse, which are home to over 4.4 million users. Because the Fediverse is <strong>decentralized and built on free software</strong>, this makes it different from other large social networks like Facebook and Twitter which are each controlled by a single company. No one person or entity can control the Fediverse, and, in fact, anyone with a bit of technical knowledge can start their own social site on the Fediverse.</p>

<h2>How it works</h2>

<p>The Fediverse works a lot like email. There are different platforms that users can join (or start their own), and then those platforms can send messages back and forth to each other. Consider, for example, two friends who use different email providers: Yahoo and Gmail.</p>

<p>The reason that jack@yahoo.com is able to send and receive email from jill@gmail.com, even though they are on totally different email servers running completely different software, is that both Yahoo and Gmail have agreed to send messages in the same format so that they can be universally read by any other email software. (This is called a protocol).</p>

<p>Likewise, users of the Fediverse can join different servers which are able to send and receive messages from each other because they have agreed to use a shared protocol.</p>

<h2>Software options</h2>

<p>The Fediverse contains many different software and communication formats, including microblogging like Twitter and video sharing similar to Youtube. Each server exists at a URL (like poa.st or spinster.xyz), and users are assigned a unique ID (like an email) based on which server they join. For example, our friends Jack and Jill may join the Fediverse as jack@poa.st and jill@spinster.xyz.</p>

<p>Different Fediverse software is good for different purposes. For example, Peertube is software that provides similar functionality as Youtube with a focus on video-sharing content. Pixelfed is software that provides image-sharing features, similar to Instagram.</p>

<strong>Soapbox</strong> is software that is more similar to Twitter and Facebook, with a focus on sharing text-based posts that can have images and videos as attachments. Soapbox is based on some earlier Fediverse implementations that are still in common use today: Mastodon and Pleroma, both of which provide more primitive features but similar core functionality.

<p>The software you choose to use on your Fediverse site is the most important aspect in attracting and retaining long-term users away from other social networks.</p>

<h2>How to join</h2>

<p>If you want to set up your own server, check out our <a href="/install/" target="_blank" rel="noopener noreferrer">step-by-step guide on how to install Soapbox</a>.</p>

<p>If you would like to join an existing site, here is a list of the top sites running Soapbox, the most user-friendly Fediverse software:</p>

<p>- <a href="https://poa.st" target="_blank" rel="noopener noreferrer">Poa.st</a> (12k+ users) - <a href="https://spinster.xyz" target="_blank" rel="noopener noreferrer">Spinster.xyz</a> (19k + users) - <a href="https://gleasonator.com" target="_blank" rel="noopener noreferrer">Gleasonator.com</a> (Soapbox flagship server: 500 users)</p>

<h2>Safety on the Fediverse</h2>

<p>Although all servers are <em>technically</em> able to communicate with all other servers on the Fediverse, one of the freedoms that decentralization provides is the freedom to choose with whom you communicate.</p>

<p>Many servers take full advantage of this freedom by limiting the servers they “federate” with to only servers they politically or ideologically agree with. Each server can also create its own internal rules against various objectionable content, and rules can differ dramatically between different servers on issues like hate speech and “adult” content. However, there are also “free speech” servers that allow any legal content and will federate with nearly any other server.</p>

<p>The federation and content policies of each server are factors users may consider when choosing a home on the Fediverse that makes them feel safe; whether that is safety from offensive content, or the safety to engage in it.</p>

<p>No matter what content policies a server chooses, though, users should always remember that posting anything online is forever — this is especially true on the Fediverse. where content can be swiftly disseminated to thousands of other servers. Anything posted publicly on the Fediverse should be considered “forever”, with no expectation of ever being able to truly delete that content.</p>}`
      }} />
    </article>
  );
}
