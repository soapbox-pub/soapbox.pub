import React from 'react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name?: string;
    picture?: string;
  };
  ogImage: {
    url?: string;
  };
  tags?: string[];
}

export const meta: BlogPostMeta = {
  "slug": "loomly-zapier-nostr-bridge",
  "title": "Solving Team Collaboration on Nostr: Our Loomly-Zapier Bridge",
  "excerpt": "How we solved the problem of multiple team members scheduling Nostr posts. A practical solution using Loomly's Zapier integration to bring collaborative content scheduling to Nostr.",
  "coverImage": "/assets/blog/loomly-zapier-nostr-bridge/loomly-zapier-nostr-bridge.png",
  "date": "2025-07-03",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/loomly-zapier-nostr-bridge/loomly-zapier-nostr-bridge.png"
  },
  "tags": ["automation", "bridge", "collaboration"]
};

export default function LoomlyZapierNostrBridge() {
  return (
    <article className="prose prose-lg max-w-none">
      <p>As our <a href="/about" target="_blank" rel="noopener noreferrer">team at Soapbox has grown</a>, we've faced a common challenge in the Nostr ecosystem: <strong>how do you enable multiple team members to schedule and publish content without sharing your private key (nsec) with each team member?</strong></p>

      <p>This is a fundamental problem that many Nostr teams encounter. Your nsec is your identity on Nostr - sharing it compromises security and makes it impossible to know who actually published what. Yet traditional social media management tools don't support Nostr natively.</p>

      <h2>Content Scheduling: Loomly + Zapier → Nostr</h2>

      <p>To solve this problem, we built a bridge that connects <a href="https://www.loomly.com/" target="_blank" rel="noopener noreferrer">Loomly</a> (a content scheduling platform) to Nostr through Zapier. <a href="https://zapier.com" target="_blank" rel="noopener noreferrer">Zapier</a> is automation tool for connecting the APIs of popular applications. While it's not the most "pure-Nostr" approach and it relies on proprietary platforms, it's a practical solution that actually works for real marketing teams with collaboration needs. We are sharing this solution in case it helps your team, too! <strong>The bridge works in four steps:</strong></p>


      <h3>Step 1: Configure Loomly Trigger in Zapier</h3>
      <p>We set up a Zapier trigger that watches for a "Post Manual Publish" event in Loomly. This means whenever a team member schedules a post on a "custom channel" to go live, it triggers our Zap.</p>

      <img
        src="/assets/blog/loomly-zapier-nostr-bridge/step-1.png"
        alt="Set a trigger for when a post in a custom channel requires manual publishing in Loomly"
        className="rounded-lg shadow-md"
      />

      <h3>Step 2: Loomly Post Conversion</h3>
      <p>Following the trigger, the first Zapier code block takes Loomly's post data and converts it into a format suitable for Nostr. This handles:</p>
      <ul>
        <li>Text content formatting</li>
        <li>Image & video attachments</li>
        <li>Hashtag & user tagging parsing</li>
      </ul>

      <img
        src="/assets/blog/loomly-zapier-nostr-bridge/step-2.png"
        alt="How to configure the Zapier code block to convert Loomly post data to Nostr format"
        className="rounded-lg shadow-md"
      />

      <p>Note: you could probably use this same workflow to any publishing tool that has a Zapier integration! We discuss Loomly here because it's what our team uses, however we encourage the community to explore what other tools work with this system!</p>

      <p><em>You can find the source code for this conversion step here: <a href="https://gitlab.com/soapbox-pub/loomly-zapier-nostr-bridge" target="_blank" rel="noopener noreferrer">Loomly Post Conversion on GitLab</a></em></p>

      <h3>Step 3: Nostr Event Signing</h3>
      <p>The third step handles creating the Nostr event structure and signing it with our nsec.</p>

      <img
        src="/assets/blog/loomly-zapier-nostr-bridge/step-3.png"
        alt="Signing the event with your Nostr private key (nsec) in Zapier"
        className="rounded-lg shadow-md"
      />

      <h3>Step 4: Nostr Event Publishing to Relays</h3>
      <p>The final step handles publishing the Nostr event to relays via Alby's API</p>

      <img
        src="/assets/blog/loomly-zapier-nostr-bridge/step-4.png"
        alt="Publishing the signed Nostr event to relays using Alby's API in Zapier"
        className="rounded-lg shadow-md"
      />

      <p>The final two code snippets are not specific to Loomly, and could actually be used to publish Nostr events in response to any trigger. We encourage the community to take this code and expand on it for their own needs!</p>

      <p><em>The uncompiled Nostr event signing and publishing code (steps 3 & 4) is available here: <a href="https://gitlab.com/soapbox-pub/zapier-nostr" target="_blank" rel="noopener noreferrer">Zapier Nostr Publishing on GitLab</a></em></p>


      <h2>Publishing Nostr Content on Loomly via the Zapier Bridge</h2>

      <p>Once the Zap is configured, team members can schedule posts in Loomly's custom channel. This works much the same as scheduling any other social post, except for tagging users. This requires adding the user's npub and hex pubkey into the text of the post manually to be parsed and converted into p tags. (See more documentation on formatting Nostr posts in Loomly <a href="https://docs.google.com/document/d/16Co1-SgItKDeRV_9YVlouSHun66PAzbtKFrqsSCRwHY/edit?usp=sharing" target='_blank' rel="noopener noreferrer">here</a>.)</p>

      <img
        src="/assets/blog/loomly-zapier-nostr-bridge/loomly-to-nostr-example.png"
        alt="Zapier Workflow Configuration"
        className="rounded-lg shadow-md"
      />

      <h2>Security Considerations 🚨</h2>

      <p>The biggest downside of this approach is that <strong>you do have to provide your nsec to Zapier</strong>. This means trusting Zapier to keep it secure, which is a trade-off some teams may be uncomfortable with. Zapier is a reputable platform, but it's still a third party. In the future, someone may expand on what we've started here to allow for another signing pattern that does not requiring putting the nsec into Zapier. However, for now this solution meets the needs of our team.</p>

      <h2>Building Bridges Helps Grow Nostr</h2>

      <p>This solution addresses a glaring gap in the Nostr ecosystem. While we wait for native team collaboration tools to mature, practical bridges like this enable businesses and marketing teams to adopt Nostr without abandoning their existing workflows.</p>

      <p>We know this is not the most decentralized or "pure" Nostr solution, but it's one that actually works now for real teams. Sometimes the best solution is the one that gets adopted and used, even if it's not perfect.</p>

      <h3>Explore other Nostr Bridges by Soapbox</h3>

      <p>This Loomly-Zapier-Nostr bridge continues Soapbox's tradition of building practical bridges between different social protocols and platforms. Our previous work includes:</p>

      <strong>Mostr: Bridging Nostr and the Fediverse</strong>
      <p>Our <a href="/blog/mostr-fediverse-nostr-bridge/" target="_blank" rel="noopener noreferrer">Mostr bridge</a> connects Nostr to Mastodon and the broader Fediverse, allowing users on both protocols to interact seamlessly. This has enabled thousands of cross-protocol conversations and helped grow both communities.</p>

      <strong>Eclipse: Nostr-Bluesky Bridge</strong>
      <p>We've also built bridges connecting Nostr to Bluesky's AT Protocol, enabling users to <a href="/blog/follow-bluesky/" target="_blank" rel="noopener noreferrer">follow Bluesky accounts from Nostr</a> and vice versa. This helps break down the silos between different decentralized social networks.</p>

      <p>These bridges serve a crucial role in the decentralized social media ecosystem - they allow users to maintain their preferred protocol while still connecting with friends and communities on other platforms.</p>

      <h2>Open Source Community</h2>

      <p>As with all our work at Soapbox, we're sharing this solution openly with the community. The code is available on GitLab, and we encourage other teams facing similar challenges to adapt and improve upon our approach.</p>

      <p>If you implement this solution or build upon it, we'd love to hear about your experience. The Nostr ecosystem grows stronger when we share practical solutions to real problems.</p>

      <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-8 flex flex-col items-center text-center">
        <h3 className="text-blue-800 mt-0">Get Involved</h3>
        <p className="text-blue-700 mb-0">Have questions about implementing this bridge? Want to contribute improvements?</p>
        <p><strong>Join the conversation on Nostr!</strong></p>
        <a
          href="https://ditto.pub/@soapbox@ditto.pub"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-4 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Follow Soapbox on Nostr
        </a>
      </div>
    </article>
  );
}