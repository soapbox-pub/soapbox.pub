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
  "slug": "take-down-big-tech-with-great-ux",
  "title": "How to Take Down Big Tech? With Great UX",
  "excerpt": "Ask a random stranger on the street how they feel about “Big Tech”, and you’re likely to be met with some criticism. Whether you think tech giants like Google, Facebook, or Apple already have too much power or that they need to exercise more of it, most people have some gripe with the companies that control our day-to-day lives on the internet.",
  "coverImage": "/assets/blog/take-down-big-tech-with-great-ux/great-ui-2-1.png",
  "date": "2022-02-01",
  "author": {
    "name": "Mary Kate Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/take-down-big-tech-with-great-ux/great-ui-2-1.png"
  }
};

export default function TakeDownBigTechWithGreatUx() {
  return (
    <article className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ 
        __html: `<p> Ask a random stranger on the street how they feel about “Big Tech”, and you’re likely to be met with some criticism. Whether you think tech giants like Google, Facebook, or Apple already have too much power or that they need to exercise more of it, most people have some gripe with the companies that control our day-to-day lives on the internet. Yet despite all the complaints (and lawsuits, Congressional inquires, etc.), Big Tech is as powerful today as ever.</p>

<p>Software freedom advocates have long fought to counter the rise of abusive, proprietary platforms by creating Free/Open Source (FOSS) alternatives to the daily tools we rely on, giving users the freedom to choose whether or not they wish to engage with Big Tech platforms. Linux is, perhaps, the most well-known example of a FOSS alternative. Computer users across the world are able to opt-out of vulnerable and controlling desktop operating systems like Windows and Apple by choosing one of many available Linux operating systems to install on their computer, instead.</p>

<p>The same is true for nearly any tool you run on your computer or phone: some good samaritan somewhere at some point has probably created a FOSS alternative. There’s Libre Office, the FOSS alternative to Microsoft Office; Chromium, the FOSS alternative to Google Chrome; and PixelFed, the FOSS alternative to Instagram. <a href="/blog/what-is-the-fediverse" target="_blank" rel="noopener noreferrer">The Fediverse</a>, a free and decentralized social media alternative, has existed for over a decade in some form. (To browse more alternatives to popular websites and apps, try <a href="https://alternativeto.net/" target="_blank" rel="noopener noreferrer">Alternative To</a> and filter by “open source” licenses).</p>

<p>But despite the freedom of choice users enjoy, these tools remain fairly under-utilized, even among the same people who complain about “Big Tech”.</p>

<p>There are many reasons for this, including the high barrier to entry for some of these tools (for example, installing Linux requires more technical knowledge than the average person has). In the case of social media, alternatives may also suffer from the network effect — a phenomenon where platforms become more useful to users based on the number of users the site has (think Facebook; would you use it if no else did? Of course not. The other people are the whole point.)</p>

<p>Solving these problems is not insignificant, especially as the virtual monopolies tech giants currently enjoy are abused to create a feedback loop where users become more and more locked into their systems. The solutions to these barriers are not often within the control of a single project.</p>

<p>But one thing is in our control: the experience that greets users when they do manage to find their way to a FOSS alternative. And the harsh truth is that many free software alternatives are failing users on this front, driving people away not just from their own project, but from alternative technology and tools altogether.</p>

<p>FOSS projects are infamous for their bad user experience (and have been for over a decade). In 2008, FOSS advocate Matthew Paul Thomas <a href="https://web.archive.org/web/20080820074509/http://mpt.net.nz/archive/2008/08/01/free-software-usability" target="_blank" rel="noopener noreferrer">wrote 15 reasons</a> “Why Free Software Has Poor Usability”. Although Thomas was hardly the first to point out the phenomenon, the article made waves back in its time. Yet, the issues remain largely unchanged. The list will likely resonate with anyone familiar with the FOSS projects of today:</p>

<p>1. Weak incentives for usability 2. Few good designers 3. Design suggestions often aren’t invited or welcomed 4. Usability is hard to measure 5. Coding before design 6. Too many cooks 7. Chasing tail-lights 8. Scratching their own itch 9. Leaving little things broken 10. Placating people with options 11. Fifteen pixels of fame 12. Design is high-bandwidth, the Net is low-bandwidth 13. Release early, release often, get stuck 14. Mediocrity through modularity 15. Gated development communities</p>

<p>Randall Kennedy expanded on Thomas’ lists and added another reason many FOSS projects fail on usability: arrogance. “many FOSS developers don’t try to make their products more usable or accessible because, frankly, they don’t care if anyone ever uses them,” Kennedy <a href="https://www.infoworld.com/article/2640786/why-foss-is-still-so-unusable.html" target="_blank" rel="noopener noreferrer">wrote</a>, “It’s the purists, the zealots, the anarchist Stallman-wannabes that sink the FOSS boat. And without some unifying force to rein in the crazies and get the rest of the community on the same page — UI and otherwise — it’s hard to see how the FOSS movement will ever deliver anything of lasting value to the larger IT community.”</p>

<p>The Fediverse, <a href="/blog/future-is-decentralized" target="_blank" rel="noopener noreferrer">arguably the most realistic threat to mainstream social platforms</a>, suffers from all of the above.</p>

<p>In a recent debate over the direction of Fediverse software, one regular contributor admitted that he was uninterested in improving usability or supporting the growth of the network, stating, “the way I build software is mostly for myself and friends. Normies mostly aren’t in that demographic.”</p>

<p>This brazen statement finally confirmed long-held suspicions within the community: many FOSS contributors are intentionally creating generally bad and unusable software with the specific goal of keeping the masses away. These sorts of contributors prefer being a big fish in a small pond, and any growth to the community is perceived as a risk to their limited status.</p>

<p>It’s no wonder the Fediverse has failed to achieve anything resembling mainstream acceptance, despite being around for longer than many of today’s popular social networks. Those who are the most involved in the network do not want it to succeed.</p>

<p>At Soapbox, we believe it’s time to change that.</p>

<p>We are actually committed to beating Big Tech. We plan to do this by building an alternative that is not only technically sufficient but actually provides a <em>better</em> experience for users than Facebook and Twitter. This means not only meeting users where their expectations are currently at in regards to design, features, speed, and accessibility, but also innovating and providing new experiences that are unique to the decentralized Fediverse ecosystem.</p>

<p>The saying goes, “If you build it, they will come.” But over ten years of stagnant Fediverse growth demonstrate that this is simply untrue. If alternative platforms want to attract users, they have to build something <em>good</em>. Then they will come.</p>

<a href="/blog/what-is-the-fediverse/" target="_blank" rel="noopener noreferrer">Learn More About Soapbox</a>}`
      }} />
    </article>
  );
}
