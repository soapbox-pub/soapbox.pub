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
  "slug": "follow-bluesky",
  "title": "How to Follow Bluesky Accounts from Nostr with the Mostr Bridge + Bridgy Fed",
  "excerpt": "Nostr users can now follow Bluesky accounts thanks to a combination of the Mostr Bridge and Bridgy Fed! Learn how to follow Bluesky users from Nostr.",
  "coverImage": "/assets/blog/follow-bluesky/follow-bluesky.png",
  "date": "2024-05-10",
  "author": {
    "name": "Mary Kate Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/follow-bluesky/follow-bluesky.png"
  }
};

export default function FollowBluesky() {
  return (
    <article className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ 
        __html: `<strong>Nostr users can now follow Bluesky accounts thanks to a combination of the Mostr Bridge and Bridgy Fed!</strong> Learn how to follow Bluesky users from Nostr.

<h2>What is the Mostr Bridge?</h2>
The Mostr Bridge is a tool developed by <a href="https://njump.me/nprofile1qqs8nsk2uy2w529fs8n4tx60u7z553e4yx5dy2nxhw4elgjgawpqlaspz4mhxue69uhhyetvv9ujumt0wd68ytnsw43q4hag5n" target="_blank" rel="noopener noreferrer">Alex Gleason</a> and Soapbox to follow Fediverse accounts on Nostr, and vice versa. 
For example, <a href="https://njump.me/nprofile1qqsxjeekajglndyhhuzgpae4xz4at39rh78zv88myvykmkyzj73pjrcpz4mhxue69uhhyetvv9ujumt0wd68ytnsw43qr5z79g" target="_blank" rel="noopener noreferrer">here</a> is popular journalist Taylor Lorenz's account on mastodon.social, bridged to Nostr.

<em>Learn more about the <a href="/blog/mostr-fediverse-nostr-bridge/" target="_blank" rel="noopener noreferrer">Mostr Bridge</a> | <a href="https://njump.me/npub1d03clrrrma7mlpxm0mz2dehmhkx3nh9rhxqwltgctpwyduztymustepzfs" target="_blank" rel="noopener noreferrer">Follow the Mostr Bridge on Nostr</a></em>

<h2>What is Bridgy Fed?</h2>
Bridgy Fed is another bridge, developed by <a href="https://njump.me/nprofile1qqs2gn0t9mls84fknraqa7c5mlypunt0m25athwsaz3sr7cu2qnftwgpz4mhxue69uhhyetvv9ujumt0wd68ytnsw43qm75802" target="_blank" rel="noopener noreferrer">Ryan Barrett</a> that connects multiple platforms including the Fediverse and Bluesky/AT Protocol. 

<em>Learn more about <a href="https://fed.brid.gy/docs" target="_blank" rel="noopener noreferrer">Bridgy Fed</a></em>

<p> <h2>How can I follow Bluesky accounts from Nostr?</h2></p>

<strong>1.&nbsp; Bluesky user must opt in to the bridge</strong> <br />
Bluesky users can opt in by following the <a href="https://bsky.app/profile/ap.brid.gy" target="_blank" rel="noopener noreferrer">Bridgy Fed account</a>

<figure>
  <img alt='Sample account on Bluesky' src='/assets/blog/follow-bluesky/bluesky-account.png' />
  <figcaption>Sample account on Bluesky with username @mkfain.bsky.social</figcaption>
</figure>

<strong>2.&nbsp; Search for account on Mostr.pub</strong> <br />
Go to <a href="https://mostr.pub/" target="_blank" rel="noopener noreferrer">Mostr.pub</a><br />
Select the "Bluesky" option fron the dropdown menu<br />
Use their full username, for example: <code>mkfain.bsky.social</code>

<figure>
  <img alt='Mostr Search' src='/assets/blog/follow-bluesky/mostr-search2.png' />
  <figcaption>Search for mkfain.bsky.social on Bluesky</figcaption>
</figure>

<p>This will bring up the NJump link to their account</p>

<strong>3.&nbsp; Alternately: Look up the account directly in your client</strong><br />
Using the pattern: <code>[full.bluesky.username]_at_bsky.brid.gy@mostr.pub</code>

<p>Example: <br /> <code>Nostr Account: mkfain.bsky.social_at_bsky.brid.gy@mostr.pub</code></p>

<figure>
  <img alt='Bridged Nostr Account' src='/assets/blog/follow-bluesky/account-on-nostr.png' />
  <figcaption>Bridged account can now be followed from Nostr</figcaption>
</figure>

<h2>How can I bridge my Nostr account to Bluesky so they see my posts?</h2>
We'll have a separate guide on that, coming soon!

<p> <h2>Notes</h2></p>

<p>Please keep in mind that both the Mostr Bridge and Bridgy Fed are new services, still undergoing improvement, and may not be reliable. In addition, Nostr and AtProto are also both young protocols - this is a recipe for bugs! </p>

<p>It can take 15 minutes+ for posts and follows to federate through both bridges. Maybe even longer. Please be patient! </p>

<p> <h2>Sample Accounts to Follow over the Bridge</h2> Over 1.2k Bluesky users have already opted into the bridge! Here's a few to get you started:</p>

<p>- Jay, Bluesky CEO (<a href="https://bsky.app/profile/jay.bsky.team" target="_blank" rel="noopener noreferrer">@jay.bsky.team</a> | <a href="https://njump.me/nprofile1qqsvuef74pfa6xfyl072p8wcdffahh0s8gsctnjjrwgxmvlkszmxlfcpz4mhxue69uhhyetvv9ujumt0wd68ytnsw43q92uehx" target="_blank" rel="noopener noreferrer">NJump</a>) - Ricardo Grego (<a href="https://bsky.app/profile/ricgrego.me" target="_blank" rel="noopener noreferrer">@ricgrego.me</a> | <a href="https://njump.me/nprofile1qqst6pneyz35k2tq6p6kej2cvkc6aqnjxtcrlm7n3vm4rh6jngv4hrspz4mhxue69uhhyetvv9ujumt0wd68ytnsw43qyq3txp" target="_blank" rel="noopener noreferrer">NJump</a>) - Keeley (<a href="https://bsky.app/profile/vertedin.de" target="_blank" rel="noopener noreferrer">@ertedin.de</a> | <a href="https://njump.me/nprofile1qqsd6j6mea2uzvuqcd4ugsw4ckh9q5yy7q0jvs36cusxsxzj66gt88cpz4mhxue69uhhyetvv9ujumt0wd68ytnsw43qj4pd58" target="_blank" rel="noopener noreferrer">NJump</a>) - Peter (<a href="https://bsky.app/profile/peterdutoit.com" target="_blank" rel="noopener noreferrer">@peterdutoit.com</a> | <a href="https://njump.me/nprofile1qqspv2zs3lgdyw48vetyny8hauldunvqvkng2ttv3mv8r4la0aj42rqpz4mhxue69uhhyetvv9ujumt0wd68ytnsw43qgnl7fq" target="_blank" rel="noopener noreferrer">NJump</a>)</p>

<em>Browse all bridged Bluesky accounts to follow <a href="https://bsky.app/profile/ap.brid.gy/followers" target="_blank" rel="noopener noreferrer">here</a></em>}`
      }} />
    </article>
  );
}
