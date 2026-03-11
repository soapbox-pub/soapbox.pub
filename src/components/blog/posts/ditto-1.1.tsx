import React from 'react';
import { EmailSignupForm } from '../../EmailSignupForm';

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
  "slug": "ditto-1.1",
  "title": "Ditto 1.1",
  "excerpt": "Last month we released Ditto, a powerful new server for building communities on Nostr. This new release adds major stability and performance improvements we discovered after it became adopted by the Nostr community.",
  "coverImage": "/assets/blog/ditto-mobile.png",
  "date": "2024-07-15",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/ditto-mobile.png"
  },
  "tags": ["ditto", "release", "update"]
};

export default function Ditto11() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8 rounded-lg border border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50 p-4">
        <p className="text-sm font-semibold text-violet-900 mb-1">A new version of Ditto is here!</p>
        <p className="text-sm text-violet-700">Ditto has been completely redesigned with themes, infinite content types, and more. <a href="/ditto" className="font-medium text-violet-600 underline hover:text-violet-800">Learn more about Ditto</a> or check out the latest updates on <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer" className="font-medium text-violet-600 underline hover:text-violet-800">ditto.pub</a>.</p>
      </div>

      <p>Last month we released Ditto, a powerful new server for building communities on Nostr. This new release adds major stability and performance improvements we discovered after it became adopted by the Nostr community.</p>
      <h2>Database Timeouts</h2>
      <p>After the initial launch of Ditto, we started to see random periods where our sites would freeze (showing a black screen) for a minute or two at a time, with users unable to do anything.</p>
      <p>This problem has been fixed in Ditto 1.1 by adding database timeouts to each query.</p>
      <p>Timeouts are configurable by the admin with the following environment variables (in milliseconds):</p>
      <ul>
        <ul>
      <li><code>DB_TIMEOUT_RELAY</code> (default: <code>1000</code>)</li>
        <li><code>DB_TIMEOUT_DEFAULT</code> (default: <code>5000</code>)</li>
        <li><code>DB_TIMEOUT_TIMELINES</code> (default: <code>15000</code>)</li>
      </ul></ul>
      <p>It turns out this problem was being caused by Nostr clients making slow queries to Ditto's relay. Therefore, a more aggressive timeout is now applied to the relay by default, while internal queries are allowed to take longer.</p>
      <p>This has shown us there is still work to be done regarding database performance. We found a mixture of queries that were borderline malicious, alongside ones that should not be so slow. We will work to decrease these timeouts more in the next update.</p>
      <h2>Metrics</h2>
      <p>When dealing with performance issues, one thing you should NOT do is randomly try changing things and see if it "seems" better.</p>
      <p>During my <a href="https://x.com/knewter" target="_blank" rel="noopener noreferrer">tenure</a> at Truth Social, I'm happy to have learned a data-driven approach. For everyone's sanity, you must fully understand the problem before attempting to "fix" it.</p>
      <p>So Ditto now exposes a <code>/metrics</code> endpoint in Prometheus exposition format (also known as "OpenMetrics" format) which exposes a lot of data about Ditto over time, including: Nostr relay connections, HTTP responses, database query time, and most importantly "available database connections".</p>
      <p><img src="/assets/images/db-depleted-connections.png" alt="Depleted database connections" /></p>
      <p>"Available database connections" is what ended up <a href="https://gleasonator.dev/@alex@gleasonator.dev/posts/e444b335d961bffbaf851b3a119f06a5ab0221c5c91d17082d6d78f2e8a87f0f" target="_blank" rel="noopener noreferrer">cracking the code</a>, as we could see it drop to 0 whenever the site would freeze. Meanwhile, "database query time" would spike at the same time. So we deduced that slow queries were taking up all the connections, allowing us to introduce timeouts and finally fix the problem. After that, the graph looked perfect. So that's the value of data, folks.</p>
      <p>You can follow <a href="https://docs.soapbox.pub/ditto/metrics" target="_blank" rel="noopener noreferrer">the Ditto documentation</a> to learn how to install Prometheus alongside your Ditto server, as well as <a href="https://docs.soapbox.pub/ditto/metrics#useful-queries" target="_blank" rel="noopener noreferrer">useful queries</a> to make your own graphs!</p>
      <p>Some people have even built cool Grafana <a href="https://gleasonator.dev/@milo@anthro.cc/posts/f4618e91093cf36f31a5b31900587bf01a9851b1e89101655a8d73a3d43648c7" target="_blank" rel="noopener noreferrer">dashboards</a> already. 👀</p>
      <h2>Rate Limiting</h2>
      <p>Rate limiting is something we should not have slept on in the first release. Ditto 1.1 now rate-limits both the HTTP API and the Nostr relay.</p>
      <p>Ditto uses the <code>X-Real-Ip</code> header for IP rate limiting, so ensure your server is <a href="https://docs.soapbox.pub/ditto/rate-limiting" target="_blank" rel="noopener noreferrer">configured correctly</a> otherwise rate-limiting will be disabled.</p>
      <p>The HTTP API is limited to 300 requests per 5-minute window, while the relay allows 300 messages per 1-minute window.</p>
      <p>Due to a bug in <a href="https://github.com/denoland/deno/issues/24292" target="_blank" rel="noopener noreferrer">Deno itself</a>, WebSocket rate-limiting did not work correctly at first. So admins should upgrade to at least Deno 1.45.0 for the best performance.</p>
      <h2>nos2x Support</h2>
      <p>Several users reported that nos2x was broken on Ditto. Up until that point I had only tested with Alby, but after pulling down nos2x locally I discovered that it wasn't injecting the script into the page as quickly as it could. So I submitted a <a href="https://github.com/fiatjaf/nos2x/pull/62" target="_blank" rel="noopener noreferrer">patch</a> to nos2x (merged) and another <a href="https://github.com/diegogurpegui/nos2x-fox/pull/36" target="_blank" rel="noopener noreferrer">patch</a> to nos2x-fox to fix it.</p>
      <p>I also patched Soapbox to be more resilient to this issue, so upgrading either the browser extension or Soapbox (if you're a Ditto admin) should fix it.</p>
      <h2>Top Zaps</h2>
      <p>When viewing zaps on posts, the highest zaps are now shown at the top, and the results are paginated.</p>
      <p>bolt11 invoices are now also decoded, so zap receipts without any <code>amount</code> tag will still get displayed correctly.</p>
      <h2>What's Next</h2>
      <p>Ditto's goal is to serve large communities online. Before we can do that, there is still some groundwork to be done.</p>
      <p>While 1.1 fixes basic server performance, 1.2 will fix Nostr support by switching to a custom relay pool implementation with full outbox support. This will improve our ability to pull events from other relays, as well as fix problems with follower lists getting overriden.</p>
      <h3>Get notified of new releases!</h3>
      <EmailSignupForm tags={['Ditto']}  />
      <h2>Special Thanks</h2>
      <p>Thank you to our team: patrickReiis, shantaram, and MK! And thank you to the Nostr community for your outpouring of support for Ditto. This is just the beginning. 🚀</p>
    </article>
  );
}