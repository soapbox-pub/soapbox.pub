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
  "slug": "follow-threads",
  "title": "How to Follow Threads Accounts from Nostr with the Mostr Bridge",
  "excerpt": "Nostr users can now follow certain Threads accounts via ActivityPub. Learn how to follow Threads users from Nostr.",
  "coverImage": "/assets/blog/follow-threads/follow-threads.png",
  "date": "2024-05-13",
  "author": {
    "name": "Mary Kate Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/follow-threads/follow-threads.png"
  },
  "tags": ["threads", "tutorial", "bridge"]
};

export default function FollowThreads() {
  return (
    <article className="prose prose-lg max-w-none">
      <strong>Nostr users can now follow certain Threads accounts thanks to the Mostr bridge.</strong> Learn how to follow Threads users from Nostr.
      <h2>What is the Mostr Bridge?</h2>
The Mostr Bridge is a tool developed by <a href="https://njump.me/nprofile1qqs8nsk2uy2w529fs8n4tx60u7z553e4yx5dy2nxhw4elgjgawpqlaspz4mhxue69uhhyetvv9ujumt0wd68ytnsw43q4hag5n" target="_blank" rel="noopener noreferrer">Alex Gleason</a> and Soapbox to follow Fediverse accounts on Nostr, and vice versa.
For example, <a href="https://njump.me/nprofile1qqs9sc5at8sj6g6l4clqkdzzp4zyz9chk4gduydjt5e3gf8j7mcxfjgpz4mhxue69uhhyetvv9ujumt0wd68ytnsw43q6hrcjt" target="_blank" rel="noopener noreferrer">here</a> is free sotware advocate Richard Stallman's account on mastodon.social, bridged to Nostr.
      <em>Learn more about the <a href="/blog/mostr-fediverse-nostr-bridge/" target="_blank" rel="noopener noreferrer">Mostr Bridge</a></em>
      <h2>Is Threads part of the Fediverse?</h2>
Yes! Threads has implemented ActivityPub,  and certain users accounts may opt-in to federating across the Fediverse, including through the Mostr Bridge.
      <em>Learn more about <a href="https://engineering.fb.com/2024/03/21/networking-traffic/threads-has-entered-the-fediverse/" target="_blank" rel="noopener noreferrer">Threads impelenting ActivityPub</a></em>
      <h2>How can I follow Threads accounts from Nostr?</h2>
      <strong>1.&nbsp; Threads user must opt in to the federation</strong> <br />
Threads users aged 18+ with public profiles in the US, Canada, and Japan can now choose to share their Threads posts to other ActivityPub-compliant servers. <a href="https://help.instagram.com/760878905943039" target="_blank" rel="noopener noreferrer">Learn how</a>.
      <figure>
        <img alt="Turn on Federation in Threads settings" src="/assets/blog/follow-threads/federation-settings.png"   />
        <figcaption>Turn on Federation in Threads settings</figcaption>
      </figure>
      <strong>2.&nbsp; Search for account on Mostr.pub</strong> <br />
Go to <a href="https://mostr.pub/" target="_blank" rel="noopener noreferrer">Mostr.pub</a><br />
Select the "Threads" option fron the dropdown menu<br />
Type their username, for example: <code>potus</code>
      <figure>
        <img alt="Mostr Search" src="/assets/blog/follow-threads/mostr-search.png"   />
        <figcaption>Search for the account POTUS on Threads</figcaption>
      </figure>
      <p>This will bring up the NJump link to their account</p>
      <strong>3.&nbsp; Alternately: Look up the account directly in your client</strong><br />
Using the pattern: <code>[username]_at_threads.net@mostr.pub</code>
      <p>Example: <code>potus_at_threads.net@mostr.pub</code></p>
      <figure>
        <img alt="Bridged Nostr Account" src="/assets/blog/follow-threads/account-on-nostr.png"   />
        <figcaption>Bridged account can now be followed from Nostr</figcaption>
      </figure>
      <h2>Can I bridge my Nostr account to Threads so they see my posts?</h2>
At the moment, Threads federation only works one way. We hope Threads will do the right thing and further open their platform in the future. <a href="https://njump.me/npub1d03clrrrma7mlpxm0mz2dehmhkx3nh9rhxqwltgctpwyduztymustepzfs" target="_blank" rel="noopener noreferrer">Follow the Mostr Bridge</a> to stay up to date!
      <h2>Sample Accounts to Follow over the Bridge</h2>

      <p>Many threads users have already opted into federation! Here's a few to get you started:</p>

      <ul>
        <li>President Biden (<a href="https://www.threads.net/@potus" target="_blank" rel="noopener noreferrer">@potus</a> | <a href="https://njump.me/nprofile1qqs8rddhkd7myyzq8k9fzztgtu699fcgtlptnngm3z6uucdempc99tgpz4mhxue69uhhyetvv9ujumt0wd68ytnsw43qhv5lvu" target="_blank" rel="noopener noreferrer">NJump</a>)</li>
        <li>John Green (<a href="https://www.threads.net/@johngreenwritesbooks" target="_blank" rel="noopener noreferrer">@johngreenwritesbooks</a> | <a href="https://njump.me/nprofile1qqsyghuk7ve59r7e6qkuhwx7galx7pwj0shy790dwfk3u6n4xwncf4qpz4mhxue69uhhyetvv9ujumt0wd68ytnsw43q38djkk" target="_blank" rel="noopener noreferrer">NJump</a>)</li>
        <li>Victoria Song (<a href="https://www.threads.net/@vicmsong" target="_blank" rel="noopener noreferrer">@vicmsong</a> | <a href="https://njump.me/nprofile1qqs0jwsj4aypt5053w8q5w8mfeway0em2wndp3mhgsh4dzqxj3v35hqpz4mhxue69uhhyetvv9ujumt0wd68ytnsw43q52v80x" target="_blank" rel="noopener noreferrer">NJump</a>)</li>
        <li>PJ Vogt (<a href="https://www.threads.net/@pjvogt" target="_blank" rel="noopener noreferrer">@pjvogt</a> | <a href="https://njump.me/nprofile1qqsxphx46edfv7cqc6pyhgms98ks699qr6gsr3d8kndulq96w4rct5qpz4mhxue69uhhyetvv9ujumt0wd68ytnsw43q3eqks3" target="_blank" rel="noopener noreferrer">NJump</a>)</li>
      </ul>
    </article>
  );
}