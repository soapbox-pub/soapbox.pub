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
  "slug": "future-is-decentralized",
  "title": "Why the Future of Social Media is Decentralized",
  "excerpt": "Mainstream social media platforms like Facebook, Twitter, Reddit, and Youtube have been under fire for years, blamed for nearly any issue you can think of: too much censorship, not enough censorship, manipulating users for profit, destroying teen mental health, threatening democracy, and even contributing to genocide.",
  "coverImage": "/assets/blog/future-is-decentralized/decentralized-future-1.png",
  "date": "2022-02-13",
  "author": {
    "name": "Mary Kate Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/future-is-decentralized/decentralized-future-1.png"
  }
};

export default function FutureIsDecentralized() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>The Problem With Centralization</h2>
      <p>Mainstream social media platforms like Facebook, Twitter, Reddit, and Youtube have been under fire for years, blamed for nearly any issue you can think of: too much censorship, not enough censorship, manipulating users for profit, destroying teen mental health, threatening democracy, and even contributing to genocide. But despite widespread mistrust and disapproval of social media giants, users across the world continue to log in.</p>
      <p>Why? Because people feel they need social media.</p>
      <p>In today’s society, deleting your Facebook, Instagram, TikTok, or Twitter account feels akin to social or career suicide. Many people rely on these sites to stay connected to friends and loved ones, informed about the events and happenings in their community, or even grow their business and network. This became even more true during the COVID-19 pandemic, when so much of our day-to-day interactions where forced to move online: whether we liked it or not.</p>
      <blockquote><p><em>“Deleting your Facebook, Instagram, TikTok, or Twitter account feels akin to social or career suicide.“</em></p></blockquote>
      <p>Social media is an undeniably important part of our lives that’s not going anywhere any time soon, yet nearly everyone can agree that there are major issues with large tech platforms (even if they may disagree about what those issues actually are). Attempts to regular the existing social platforms have repeatedly failed (at least in the US), largely due to an issue caused by the very platforms in question: political polarization and social division. No one can agree what we need.</p>
      <p>Lately, the discussion has been centered on censorship: are platforms a de facto public sphere in which free speech should reign? Or do companies have an obligation to clamp down on hate speech, misinformation, and conspiracy theories? No matter which you choose, half of the population is unhappy.</p>
      <p>Alternate social sites like Parler and Gettr have popped up in an attempt to create new spaces that cater to conservatives who prefer the free speech approach. But these platforms, too, ultimate fail precisely for the very reason they were created: they only appeal to a minority of users. Social media depends on the “<a href="https://www.investopedia.com/terms/n/network-effect.asp" target="_blank" rel="noopener noreferrer">network effect</a>” to succeed: a phenomenon whereby increased numbers of people or participants improve the value of a good or service. When alternative platforms only appeal to a portion of the general population, users find themselves still dependent on their old Facebook and Twitter accounts to reach friends, family, or the broader conversation outside of their niche political community.</p>
      <p>Big Tech platforms like Facebook and new, alternative sites like Gettr are both failing users, and they are ultimately failing for the same reason: all of these sites are centralized.</p>
      <h2>Centralized vs. Decentralized Platforms</h2>
      <strong>Centralized</strong> platforms are sites that are owned and opperated by a single company, where users are all housed on one website (and/or app). On a centralized site, like Facebook, users all speak through the single site and it’s servers. Facebook controls all the users on it’s network, their data, and their ability to communicate.
      <strong>Decentralized</strong> platforms, on the otherhand, consist of multiple websites where users can log in completely independently. However, thanks to using a shared communication protocol, users of decentralized networks are able to communicate with eachother.
      <p>!<a href="/assets/blog/future-is-decentralized/decentralized-versus-centralized-apps.jpg" target="_blank" rel="noopener noreferrer">The Fediverse: Centralized vs. Decentralized social media platforms</a></p>
      <em>Img via <a href="https://www.aceinfoway.com/blog/centralized-vs-decentralized-apps" target="_blank" rel="noopener noreferrer">Ace Infoway</a></em>
      <p>Email is the most popular decentralized internet technology. Consider, for example, two friends who use different email providers: Yahoo and Gmail.</p>
      <p>Jack@yahoo.com is able to send and receive email from jill@gmail.com, even though they are on totally different email servers running completely different software, because both Yahoo and Gmail have agreed to send messages in the same format so that they can be universally read by any other email software.</p>
      <p>Likewise, users of decentralized social media can join different websites which are able to send messages to eachother. The most popular implementation of decentralized social media today is The Fediverse.</p>
      <strong>The Fediverse</strong> is a network of decentralized social media sites which all have the ability to communicate with one another. There are currently over 5,000 different sites (“servers”) on the Fediverse, which are home to over 4.4 million users. Because the Fediverse is decentralized and built on free software, this makes it different from other large social networks like Facebook and Twitter which are each controlled by a single company. No one person or entity can control the Fediverse, and, in fact, anyone with a bit of technical knowledge can start their own social site on the Fediverse (<a href="/blog/what-is-the-fediverse" target="_blank" rel="noopener noreferrer">learn more</a>).
      <h2>Decentralized Social Media: The Next Frontier</h2>
      <p>Decentralized social networks, like the Fediverse, solve many of the problems present with today’s centralized platforms, especially when those networks are build on Free/Open Source Software.</p>
      <p>!<a href="/assets/blog/future-is-decentralized/Centralized-Vs.-Decentralzed-Platforms-1024x576.png" target="_blank" rel="noopener noreferrer">The Fediverse: Centralized vs. Decentralized social media platform features comparison</a></p>
      <p>On the Fediverse, different sites can set their own rules, including choosing which other commuites to talk to. Users have the freedom to choose which site they join, or even to start their own. This provides the niche community experience for marginalized communities that sites like Parler and Gettr have tried to achieve, but without limiting the scope of the size the network can achieve to only those who are politically aligned. Far-left and far-right users co-exist on the Fediverse, and neither has the power to truly silence the other.</p>
      <blockquote><p>“<em>Big Tech platforms see the writing on the wall when it comes to decentralization and are trying to get out ahead of it.</em>“</p></blockquote>
      <p>It’s not just Fediverse advocates like us that see this is the natural progression of social media. In 2019, Jack Dorsey announced the creation of <a href="https://blueskyweb.xyz/" target="_blank" rel="noopener noreferrer">Bluesky</a>, Twitter’s internal effort to move to a decentralized system. Progress on the project appears to have been slow, but it’s clear that Big Tech platforms see the writing on the wall when it comes to decentralization and are trying to get out ahead of it. Hundreds of millions of dollars have poured into decentralized technologies in recent years, as investors are hoping to get in on the ground floor of emerging platforms.</p>
      <p>But perhaps the best thing about the Fediverse and decentralized social media is that we don’t need science fiction or VC funding to make it a reality, Millions of people already using the Fediverse, where thousands of independently owned and operated sites are already interconnected.</p>
      <a href="/blog/what-is-the-fediverse" target="_blank" rel="noopener noreferrer">Learn More and Join the Fediverse</a></article>
  );
}