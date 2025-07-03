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
}

export const meta: BlogPostMeta = {
  "slug": "loomly-zapier-nostr-bridge",
  "title": "Solving Team Collaboration on Nostr: Our Loomly-Zapier Bridge",
  "excerpt": "How we solved the problem of multiple team members scheduling Nostr posts without sharing our nsec. A practical solution using Loomly's Zapier integration to bridge content scheduling to Nostr publishing.",
  "coverImage": "/assets/blog/loomly-zapier-nostr-bridge.svg",
  "date": "2025-01-02",
  "author": {
    "name": "Soapbox Team",
    "picture": "/assets/avatars/soapbox.png"
  },
  "ogImage": {
    "url": "/assets/blog/loomly-zapier-nostr-bridge.svg"
  }
};

export default function LoomlyZapierNostrBridge() {
  return (
    <article className="prose prose-lg max-w-none">
      <p>As our team at Soapbox has grown, we've faced a common challenge in the Nostr ecosystem: <strong>how do you enable multiple team members to schedule and publish content without sharing your private key (nsec)?</strong></p>
      
      <p>This is a fundamental problem that many Nostr teams encounter. Your nsec is your identity on Nostr - sharing it compromises security and makes it impossible to know who actually published what. Yet traditional social media management tools don't support Nostr natively.</p>

      <p>Today, we're sharing our solution: a bridge that connects Loomly (our content scheduling platform) to Nostr through Zapier automation. While it's not the most "pure-Nostr" approach, it's a practical solution that actually works for real teams with real collaboration needs.</p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">📸 Screenshot Placeholder</p>
        <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded flex items-center justify-center">
          <span className="text-gray-500">Loomly Content Calendar Overview</span>
        </div>
      </div>

      <h2>The Problem: Nostr Team Collaboration</h2>
      
      <p>When you're running a team that publishes content to Nostr, you quickly run into several challenges:</p>
      
      <ul>
        <li><strong>Security:</strong> You can't share your nsec with team members without compromising your entire Nostr identity</li>
        <li><strong>Scheduling:</strong> Most Nostr clients don't have robust content scheduling features</li>
        <li><strong>Workflow:</strong> Content creation, approval, and publishing workflows are difficult to manage</li>
        <li><strong>Attribution:</strong> When multiple people have access to the same key, you lose track of who published what</li>
      </ul>

      <p>We needed a solution that would allow our team to:</p>
      <ul>
        <li>Create and schedule content collaboratively</li>
        <li>Maintain our existing content workflows</li>
        <li>Publish to Nostr automatically</li>
        <li>Keep our nsec secure</li>
      </ul>

      <h2>Our Solution: Loomly + Zapier + Nostr</h2>

      <p>We were already using <a href="https://www.loomly.com/" target="_blank" rel="noopener noreferrer">Loomly</a> for content scheduling across other social platforms. Loomly has excellent collaboration features, approval workflows, and a content calendar that our team loves. The key insight was realizing we could leverage Loomly's native Zapier integration to bridge to Nostr.</p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">📸 Screenshot Placeholder</p>
        <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded flex items-center justify-center">
          <span className="text-gray-500">Zapier Workflow Configuration</span>
        </div>
      </div>

      <h3>How It Works</h3>

      <p>Our bridge works in three steps:</p>

      <ol>
        <li><strong>Content Creation in Loomly:</strong> Team members create and schedule posts in Loomly using our normal approval workflow</li>
        <li><strong>Zapier Automation:</strong> When a post is published in Loomly, Zapier triggers our custom code</li>
        <li><strong>Nostr Publishing:</strong> Our code converts the Loomly post format and publishes it to Nostr relays</li>
      </ol>

      <p>The magic happens in two custom Zapier code steps:</p>

      <h4>Step 1: Loomly Post Conversion</h4>
      <p>The first step takes Loomly's post data and converts it into a format suitable for Nostr. This handles:</p>
      <ul>
        <li>Text content formatting</li>
        <li>Image attachments</li>
        <li>Hashtag processing</li>
        <li>URL handling</li>
      </ul>

      <p>You can find the source code for this conversion step here: <a href="https://gitlab.com/soapbox-pub/loomly-zapier-nostr-bridge" target="_blank" rel="noopener noreferrer">Loomly Post Conversion on GitLab</a></p>

      <h4>Step 2: Nostr Event Signing and Publishing</h4>
      <p>The second step handles the Nostr-specific operations:</p>
      <ul>
        <li>Creating the Nostr event structure</li>
        <li>Signing the event with our nsec</li>
        <li>Publishing to multiple Nostr relays</li>
        <li>Error handling and retry logic</li>
      </ul>

      <p>The Nostr publishing code is available here: <a href="https://gitlab.com/soapbox-pub/zapier-nostr" target="_blank" rel="noopener noreferrer">Zapier Nostr Publishing on GitLab</a></p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">📸 Screenshot Placeholder</p>
        <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded flex items-center justify-center">
          <span className="text-gray-500">Code by Zapier Configuration</span>
        </div>
      </div>

      <h2>Setting It Up</h2>

      <p>If you want to implement this solution for your team, here's what you'll need:</p>

      <h3>Requirements</h3>
      <ul>
        <li><strong>Loomly Pro account:</strong> Required for Zapier integration</li>
        <li><strong>Zapier paid account:</strong> Needed for the "Code by Zapier" steps</li>
        <li><strong>Your Nostr nsec:</strong> This will be stored in Zapier (see security considerations below)</li>
      </ul>

      <h3>Implementation Steps</h3>
      <ol>
        <li>Set up the Zapier trigger to watch for new Loomly posts</li>
        <li>Add the first "Code by Zapier" step with our Loomly conversion code</li>
        <li>Add the second "Code by Zapier" step with our Nostr publishing code</li>
        <li>Configure your nsec and relay URLs in the Zapier environment</li>
        <li>Test with a sample post</li>
      </ol>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">📸 Screenshot Placeholder</p>
        <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded flex items-center justify-center">
          <span className="text-gray-500">Successful Nostr Post from Loomly</span>
        </div>
      </div>

      <h2>Security Considerations</h2>

      <p>The biggest downside of this approach is that <strong>you do have to provide your nsec to Zapier</strong>. This means:</p>

      <ul>
        <li>Zapier has access to your private key</li>
        <li>You're trusting Zapier's security practices</li>
        <li>If Zapier is compromised, your Nostr identity could be at risk</li>
      </ul>

      <p>For many teams, this trade-off is acceptable given the workflow benefits, but it's important to understand the implications. Consider:</p>

      <ul>
        <li>Using a dedicated Nostr identity for team publishing</li>
        <li>Regularly rotating your nsec if possible</li>
        <li>Monitoring your Nostr activity for unauthorized posts</li>
      </ul>

      <h2>Why This Matters</h2>

      <p>This solution addresses a real gap in the Nostr ecosystem. While we wait for native team collaboration tools to mature, practical bridges like this enable teams to adopt Nostr without abandoning their existing workflows.</p>

      <p>It's not the most decentralized or "pure" Nostr solution, but it's one that actually works for real teams with real needs. Sometimes the best solution is the one that gets adopted and used, even if it's not perfect.</p>

      <h2>Soapbox's Bridge-Building Legacy</h2>

      <p>This Loomly-Zapier-Nostr bridge continues Soapbox's tradition of building practical bridges between different social protocols and platforms. Our previous work includes:</p>

      <h3>Mostr: Bridging Nostr and the Fediverse</h3>
      <p>Our <a href="/blog/mostr-fediverse-nostr-bridge/" target="_blank" rel="noopener noreferrer">Mostr bridge</a> connects Nostr to Mastodon and the broader Fediverse, allowing users on both protocols to interact seamlessly. This has enabled thousands of cross-protocol conversations and helped grow both communities.</p>

      <h3>Eclipse: Nostr-Bluesky Bridge</h3>
      <p>We've also built bridges connecting Nostr to Bluesky's AT Protocol, enabling users to <a href="/blog/follow-bluesky/" target="_blank" rel="noopener noreferrer">follow Bluesky accounts from Nostr</a> and vice versa. This helps break down the silos between different decentralized social networks.</p>

      <p>These bridges serve a crucial role in the decentralized social media ecosystem - they allow users to maintain their preferred protocol while still connecting with friends and communities on other platforms.</p>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">📸 Screenshot Placeholder</p>
        <div className="bg-gray-200 dark:bg-gray-700 h-64 rounded flex items-center justify-center">
          <span className="text-gray-500">Mostr Bridge in Action</span>
        </div>
      </div>

      <h2>Open Source and Community</h2>

      <p>As with all our work at Soapbox, we're sharing this solution openly with the community. The code is available on GitLab, and we encourage other teams facing similar challenges to adapt and improve upon our approach.</p>

      <p>If you implement this solution or build upon it, we'd love to hear about your experience. The Nostr ecosystem grows stronger when we share practical solutions to real problems.</p>

      <h2>What's Next?</h2>

      <p>While this bridge solves our immediate needs, we're also working on more native Nostr solutions for team collaboration. Future developments might include:</p>

      <ul>
        <li>NIP-46 remote signing integration for better security</li>
        <li>Native Nostr scheduling clients with team features</li>
        <li>Multi-signature or delegation schemes for team accounts</li>
        <li>Integration with other content management platforms</li>
      </ul>

      <p>The goal is to eventually have fully native Nostr solutions that don't require trusting third parties with private keys. But until then, practical bridges like this help teams adopt Nostr today.</p>

      <h2>Try It Yourself</h2>

      <p>If your team is struggling with similar Nostr collaboration challenges, give our bridge a try:</p>

      <ol>
        <li>Check out the code repositories linked above</li>
        <li>Set up your Loomly and Zapier accounts</li>
        <li>Copy our Zap configuration and code</li>
        <li>Customize it for your team's needs</li>
      </ol>

      <p>We're excited to see how other teams adapt and improve upon this approach. Together, we can build the tools that make Nostr practical for real-world team collaboration.</p>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg my-8">
        <h3 className="text-blue-800 dark:text-blue-200 mt-0">Get Involved</h3>
        <p className="text-blue-700 dark:text-blue-300 mb-0">Have questions about implementing this bridge? Want to contribute improvements? Join the conversation on Nostr or reach out to our team. We're always happy to help other teams solve their Nostr collaboration challenges.</p>
      </div>
    </article>
  );
}