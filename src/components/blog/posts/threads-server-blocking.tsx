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
  "slug": "threads-server-blocking",
  "title": "Threads is blocking servers on the Fediverse. Here's how we unblocked ourselves.",
  "excerpt": "Threads has begun testing federation over ActivityPub. And they have blocked two important servers I administrate. The first server is the Mostr Bridge. The Mostr Bridge connects ActivityPub and Nostr together, so people can communicate across protocols. The second server is Spinster.xyz, which is arguably the largest independent feminist community online.",
  "coverImage": "/assets/blog/facebook-hoodie.jpg",
  "date": "2023-12-25",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/facebook-hoodie.jpg"
  }
};

export default function ThreadsServerBlocking() {
  return (
    <article className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ 
        __html: `<p> Six years ago I deleted my Facebook and jumped ship to Mastodon. I wanted the Fediverse to win, and I always believed the way was to force Facebook and others to federate as their only option to stay relevant.</p>

<p>Finally my dream has been realized, somewhat. Threads has begun testing federation over ActivityPub. But to my dismay, I've discovered that Threads is already blocking a handful of servers, including several sites I administrate. Today I am proud to announce that we are fighting back.</p>

<h2>Blocked servers</h2>

<p>At least 5 servers are known to be blocked by Threads:</p>

<p>- <code>mostr.pub</code> - <code>spinster.xyz</code> - <code>neenster.org</code> - <code>poa.st</code> - <code>mitra.social</code></p>

<h3>The Mostr Bridge</h3>

<p>The first blocked server is the <a href="/blog/mostr-fediverse-nostr-bridge/" target="_blank" rel="noopener noreferrer">Mostr Bridge</a>. The Mostr Bridge connects ActivityPub and Nostr together, so people can communicate across protocols. Blocking this bridge amounts to blocking Nostr as a whole from communicating with Threads, a major blow to interoperability between protocols.</p>

<p>Nostr has grown significantly in the past year and has been <a href="https://opensats.org/blog/opensats-receives-additional-funding-of-dollar10m-from-startsmall" target="_blank" rel="noopener noreferrer">backed by Jack Dorsey</a>. It's interesting that Meta has chosen to silence a worthy competitor, raising questions about their motives for federating.</p>

<iframe
  title="The Mostr Bridge | Alex Gleason | Nostrasia 2023"
  width="560"
  height="315"
  src="https://poast.tv/videos/embed/99131b87-46b8-4b1f-bc8c-a019892f933f"
  frameborder="0"
  allowFullScreen=""
  sandbox="allow-same-origin allow-scripts allow-popups"
  className='shadow rounded-xl max-w-full'
></iframe>

<h3>Spinster</h3>

<a href="https://spinster.xyz/" target="_blank" rel="noopener noreferrer">Spinster</a> is the largest feminist server running on Soapbox, and is arguably the largest independent feminist community online. It is one of the sites blocked by Threads.

<p>What exactly is Threads afraid of? Do we need to report this violation to <a href="https://www.metacareers.com/diversity" target="_blank" rel="noopener noreferrer">Meta's DEI department</a>?</p>

<p>!<a href="/assets/blog/spinster-before.png" target="_blank" rel="noopener noreferrer">Spinster blocked</a></p>

<h3>Neenster</h3>

<p>Oddly enough, free-culture artist and animator <a href="https://blog.ninapaley.com/" target="_blank" rel="noopener noreferrer">Nina Paley</a> has been blocked. Between blocking her account on Spinster and blocking <a href="https://neenster.org/" target="_blank" rel="noopener noreferrer">her personal server</a>, it appears that Meta has it out for Nina Paley specifically.</p>

<p>I've heard that Nina has some pretty dangerous ideas, but I'm curious which it was that crossed the line? Was is <a href="https://sedermasochism.com/" target="_blank" rel="noopener noreferrer">Seder-Macochism</a>? Or <a href="https://www.sitasingstheblues.com/" target="_blank" rel="noopener noreferrer">Sita Sings the Blues</a>? I would love to know the real reason.</p>

<p>!<a href="/assets/blog/nina-paley.jpg" target="_blank" rel="noopener noreferrer">Nina Paley</a></p>

<h3>Poast</h3>

<a href="https://poa.st/" target="_blank" rel="noopener noreferrer">Poast</a> is a loosely-moderated shitposting community, and the largest Soapbox server online. Between its raunchy jokes and political incorrectness, it is the posterchild of everything Meta's Terms of Service stands against. Nevertheless, the decision to make a sweeping block against this whole server is truly lazy on Meta's part, as Meta is fully capable of moderating each user of Poast individually. We'll delve into that topic a bit later.

<h3>Mitra</h3>

<a href="https://mitra.social/" target="_blank" rel="noopener noreferrer">Mitra</a> is an ActivityPub backend written in Rust, with Ethereum and Monero integrations. Its flagship server <code>mitra.social</code> appears to be blocked by Threads, <a href="https://mitra.social/post/018c6a15-a34b-a462-7ca0-e124e8f78cf9" target="_blank" rel="noopener noreferrer">according to its developer</a>.

<p>Mitra's developer silverpill has authored <a href="https://codeberg.org/fediverse/fep/pulls?type=all&sort=&state=closed&labels=&milestone=0&project=0&assignee=0&poster=29663" target="_blank" rel="noopener noreferrer">numerous Fediverse specs</a>, making it especially interesting that Meta has targeted a prolific author of Fediverse standards.</p>

<h2>Are they really blocking us? Why?</h2>

<p>In our tests, we are consistently unable to fetch from Threads using the above domains. But without transparency from Meta, it's impossible to know whether the blocks are intentional.</p>

<p>!<a href="/assets/blog/threads-contact-mosseri.png" target="_blank" rel="noopener noreferrer">Contacting Mosseri</a></p>

<p>!<a href="/assets/blog/threads-contact-btsavage.png" target="_blank" rel="noopener noreferrer">Contacting btsavage</a></p>

<p>I have reached out to the Threads team, and they did not respond. They have not published an official list of servers they block. Without full transparency, I am unable to know if they are intentionally blocking these servers. I am therefore assuming that this is a bug on their end. And I'm proud to announce that I have fixed this bug, by signing requests from a different domain.</p>

<h2>Fighting back</h2>

<p>Starting today, the Mostr Bridge, Spinster, and others are now able to federate with Threads, at least to the extent Threads currently allows. Users of those sites can now discover users on Threads and view their posts!</p>

<figure>
  <div className='grid grid-cols-2 gap-2'>
    <img src='/assets/blog/damus-before.png' />
    <img src='/assets/blog/damus-after.png' />
  </div>
  <figcaption>Damus before and after federating with Threads</figcaption>
</figure>

<strong>Users on Nostr can now follow users on Threads, eg:</strong> <a href="https://nostr.com/p/2e0d5aab3fedffd4ad9456bbbc207bf22b0e3d6b4b26924a0a48652067e68f7d" target="_blank" rel="noopener noreferrer">@mosseri_at_threads.net@mostr.pub</a>

<p>Server admins running Rebased will need to <a href="https://gitlab.com/soapbox-pub/rebased/-/snippets/3634512" target="_blank" rel="noopener noreferrer">apply a patch</a> and configure a separate domain to sign requests. <strong>Spinster, Neenster, and Poast have already all been updated, so users of those sites can now interact with Threads freely.</strong></p>

<figure>
  <div className='grid grid-cols-2 gap-2'>
    <img src='/assets/blog/spinster-before.png' />
    <img src='/assets/blog/spinster-after.png' />
  </div>
  <figcaption>Spinster before and after federating with Threads</figcaption>
</figure>

<p>Threads is operating in limited federation mode with only about 5 accounts exposed. They cannot see our posts, but we can see theirs. Previously other Mastodon servers could see posts from Threads, while the aforementioned servers could not. After the fix we're back on equal footing.</p>

<p>I find it interesting that _Meta Platforms, Inc._, a company known for harvesting user data, is blocking some servers from fetching its public posts. They decided to implement a feature Mastodon calls _Authorized fetch_. The feature already existed on the Fediverse, but it was <a href="https://github.com/w3c/activitypub/issues/402" target="_blank" rel="noopener noreferrer">never offically enshrined</a>.</p>

<h2>How we got around Authorized fetch</h2>

<p>Authorized fetch was <a href="https://github.com/mastodon/mastodon/pull/11269" target="_blank" rel="noopener noreferrer">introduced by Mastodon in 2019</a>. In theory, it would prevent blocked users on other sites from seeing your posts. It would also prevent entire blocked servers from seeing your posts.</p>

<p>Since ActivityPub is a fundamentally open network, there are of course ways to circumvent it, some of which are very easy. You can create a new domain, fetch data with it, and then transfer the data to your main domain.</p>

<p>And that is exactly what I did. My modifications of <a href="https://gitlab.com/soapbox-pub/rebased/-/commit/2eb5c453ad71417bebcc45714c0c318bc956c336" target="_blank" rel="noopener noreferrer">Rebased</a> and <a href="https://gitlab.com/soapbox-pub/mostr/-/commit/cecee9ed129c9ce99386421205f09ebe806d9b90" target="_blank" rel="noopener noreferrer">Mostr</a> allow the admin to configure a separate domain to sign requests. If the domain gets blocked, it can be easily switched out for a new one without impacting the main site.</p>

<strong>Meta seems to be betting on the fact that people have played nicely in the past, but I for one am not going to let them have their way.</strong> I am going to ensure the data they publish remains free and open to all.

<strong>However, if Meta publishes a transparency page listing all the servers they block, I will stop "fixing" the federation issues between those servers.</strong>

<p>Tools to work around Authenticated fetch are being shipped with new versions of Fediverse software. Censorship by Meta will create a continued need for this industry to grow.</p>

<h2>How to tell if your server is blocked</h2>

<p>If you're a server administrator, try visiting a known Threads account such as <code>@mosseri@threads.net</code> from your server. If the profile is unavailable, check your server logs for requests from <code>facebookexternalua</code>, the user-agent used by Threads:</p>

<pre><code>grep facebookexternalua /var/log/nginx/access.log
</code></pre>

<p>- If you <strong>do</strong> see requests from <code>facebookexternalua</code> but you cannot load profiles from Threads, it's likely a bug in your server. Try upgrading.</p>

<p>- If you <strong>do not</strong> see requests from <code>facebookexternalua</code> in your logs, and you cannot load profiles from Threads, your server might be blocked, ruling out any other issues with your server such as firewall rules or signed fetching being disabled.</p>

<p>Authorized fetch is a two-step process. First your server identifies itself to Threads when requesting data. Threads will then validate your server by making a request to it, using the <code>facebookexternalua</code> user-agent found in your logs. If your server is blocked, no requests will be made.</p>

<h2>Threads must moderate users, not servers</h2>

<p>It's very common on Mastodon to block servers with a heavy hand, with huge blocklists such as "Fediblock" naming nearly every server on the network. This is a big problem, because it creates a fragmented network where people cannot communicate with each other.</p>

<p>People have been wondering what Threads is going to do. Are they going to import a blocklist? Are they going to block individual servers at all?</p>

<p>Threads reports having 33 million daily-active users. The Fediverse has just a little over 1.2 million _monthly_ active users by some estimates. What is another million users to them? If they can afford to individually moderate 33 million users, they can afford to individually moderate 34 million users.</p>

<p>Therefore, I am a proponent that Threads should not block any servers at all, unless the server itself is behaving badly from a technical standpoint. They should moderate every user on an individual level, regardless of which server they're on, using the extensive moderation tools at their disposal. Remote users who violate the Threads Terms of Service should be banned, simple as that. Otherwise it is far too political, goes against the open nature of the Fediverse, and is just plain lazy on their part.</p>

<p>Despite everything, I think the people building Threads are decent, and I hope they do the right thing here.</p>

<h2>What now?</h2>

<p>We will continue to monitor the situation. We will take actions to ensure the Fediverse stays <strong>open and connected.</strong></p>

<p>Censorship on ActivityPub highlights the need for Nostr, a new protocol whose data portability empowers people to access content however they wish. The greatest fighting spirit is alive on Nostr, which we continue to build for a better future.</p>

<p>My upcoming project, <a href="/blog/soapbox-awarded-grant/" target="_blank" rel="noopener noreferrer">Ditto</a>, will enable people on Nostr to access the Fediverse from different domain names, making it more difficult to make sweeping blocks against Nostr in general. Follow my progress on it <a href="https://gitlab.com/soapbox-pub/ditto" target="_blank" rel="noopener noreferrer">here</a>.</p>

<p>And finally, I wish you all a very Merry Christmas! 🎄🎉 </p>}`
      }} />
    </article>
  );
}
