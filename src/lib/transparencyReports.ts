export interface TransparencyReport {
  slug: string;
  title: string;
  dateRange: string;
  summary: string;
  content: string;
}

export const BTC_ADDRESS = 'bc1qzz8wvcv87rstc7t5hfm6reazvwsm39jwvyqv8j';
export const OCE_URL = 'https://opencollective.com/aos-collective?hostname=opencollective.com';

export const transparencyReports: TransparencyReport[] = [
  {
    slug: 'feb-apr-2026',
    title: 'OpenSats Grant Report: February 2026 \u2013 April 2026',
    dateRange: 'February \u2013 April 2026',
    summary: 'Rebuilt Ditto from scratch with MKStack and Shakespeare, launched a high-performance Nostr relay, shipped Shakespeare to Android, and built tools for activists.',
    content: `
<h2>Summary</h2>
<p>This quarter, we focused on growing and improving our AI tools and systems, which empowered us to finally return to Ditto. We rebuilt Ditto from the ground up with MKStack and Shakespeare, incorporating everything we learned over the past year of working on Shakespeare to make a new version of Ditto that is better than ever. We also launched a new high-performance Nostr relay, shipped Shakespeare to Android, built tools for activists, and continued strengthening the core infrastructure that powers the Soapbox ecosystem.</p>

<h2>Ditto 2.0 &mdash; Complete Rewrite</h2>
<p>Ditto 2.0 is a complete rewrite of our Nostr social client, built from scratch starting February 16 using <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">Shakespeare</a> and <a href="https://mkstack.xyz" target="_blank" rel="noopener noreferrer">MKStack</a>. The vision: a social platform where fun requires freedom. It launched on March 26 as v2.0.0 and saw 26 releases in under two weeks, reaching v2.6.2 by April 8.</p>
<ul>
<li><strong>Custom Themes &amp; Self-Expression</strong> &mdash; Full profile theming with color palettes, background images, fonts, and more. Users create and share themes, browse others' creations, and turn their profile into a personal canvas.</li>
<li><strong>Infinite Content Types</strong> &mdash; Far more than text posts. Ditto supports 27+ content types: posts, articles, photos, short videos, livestreams, polls, music, podcasts, books, events, games, geocaching, Letters, Blobbi virtual pets, badges, nsites, and a world map.</li>
<li><strong>Comment on Anything</strong> &mdash; Posts, URLs, profiles, hashtags, countries, books &mdash; if it exists on Nostr, you can discuss it.</li>
<li><strong>Bridge to the Open Web</strong> &mdash; Ditto connects to Bluesky, Mastodon, and the entire Fediverse through the <a href="https://mostr.pub" target="_blank" rel="noopener noreferrer">Mostr Bridge</a> and Bridgy Fed. One account, three networks, zero lock-in.</li>
<li><strong>Made for Hacking</strong> &mdash; Open source, builds to static files. Deploy on a $5 VPS, GitHub Pages, or a Raspberry Pi.</li>
<li><strong>Run Apps Inside Ditto</strong> &mdash; Nsites and web apps run directly inside Ditto. Webxdc games launch in-app.</li>
<li><strong>Social Discovery</strong> &mdash; Follow links and QR codes for one-tap follows. Shareable follow packs and follow sets. Badge system. Custom profile tabs.</li>
<li><strong>Mobile-First Native Experience</strong> &mdash; iOS and Android support via Capacitor. Ditto is now live on <a href="https://play.google.com/store/apps/details?id=pub.ditto.app" target="_blank" rel="noopener noreferrer">Google Play</a> and <a href="https://zapstore.dev" target="_blank" rel="noopener noreferrer">Zapstore</a>.</li>
<li><strong>Performance</strong> &mdash; React 18 to React 19 upgrade with roughly 50% initial bundle size reduction.</li>
</ul>
<p><a href="https://gitlab.com/soapbox-pub/ditto" target="_blank" rel="noopener noreferrer">Ditto Repository</a> | <a href="https://soapbox.pub/blog/announcing-ditto-2" target="_blank" rel="noopener noreferrer">Blog: Soapbox Launches Massive Update to Ditto</a></p>

<h2>Shakespeare Updates</h2>
<ul>
<li><strong>Android App</strong> &mdash; Shipped a native Android app powered by Capacitor with deep links, splash screen, and signed release builds.</li>
<li><strong>Nsite Decentralized Deployment</strong> &mdash; Added nsite deployment for decentralized hosting via Nostr.</li>
<li><strong>App Publishing UI Redesign</strong> &mdash; Redesigned the App dialog with overlapping banner and avatar card layout.</li>
<li><strong>New AI Tools</strong> &mdash; Added Blossom media upload tool, Nostr encode/decode tools, and image generation improvements with transparency support.</li>
</ul>
<p><a href="https://gitlab.com/soapbox-pub/shakespeare" target="_blank" rel="noopener noreferrer">Shakespeare Repository</a></p>

<h2>Ditto Relay</h2>
<p>We built and launched a new high-performance Nostr relay backed by OpenSearch, designed for horizontal scalability and advanced search.</p>
<ul>
<li><strong>NIP-50 Full-Text Search</strong> with rich extensions: filter by detected language, sentiment, media type, protocol origin, and sort by top/hot/controversial/rising/zaps.</li>
<li><strong>Horizontally Scalable</strong> &mdash; Stateless design allows running multiple instances behind a load balancer sharing one OpenSearch cluster.</li>
<li><strong>Replaceable Event History</strong> &mdash; Preserves version history of replaceable events, configurable per kind.</li>
<li><strong>Off-Thread Analysis</strong> &mdash; Worker pool handles signature verification, language detection, sentiment analysis, and media detection off the main thread.</li>
</ul>
<p><a href="https://gitlab.com/soapbox-pub/ditto-relay" target="_blank" rel="noopener noreferrer">Ditto Relay Repository</a></p>

<h2>Agora</h2>
<p><a href="https://agora.spot" target="_blank" rel="noopener noreferrer">Agora</a> is a censorship-resistant platform for activists, built with MKStack and Shakespeare at the <a href="https://hrf.org/latest/announcing-the-ai-hack-for-freedom-hackathon-winners/" target="_blank" rel="noopener noreferrer">Human Rights Foundation's AI Hack for Freedom</a> hackathon, where it was named one of the winners.</p>
<ul>
<li>Launched a Venezuela pilot in partnership with Leopoldo L&oacute;pez and the World Liberty Congress.</li>
<li>Features country-specific feeds with organizer-led actions, Bitcoin bounties, a built-in self-custodial Lightning wallet, and Bluetooth mesh networking for internet shutdowns.</li>
<li>Supports 26 languages. Expanding in 2026 to Nicaragua, Zimbabwe, Cambodia, and Uganda.</li>
</ul>

<h2>Core Infrastructure</h2>
<ul>
<li><strong>Nostrify</strong> &mdash; Added NIP-42 AUTH auto-retry, client-initiated NIP-46 login, Web of Trust quorum support, and React 19 compatibility.</li>
<li><strong>MKStack</strong> &mdash; Upgraded to React 19, Vite 8, and Zod v4. Added NIP-42 relay authentication and client-initiated NIP-46 login.</li>
<li><strong>Mostr Bridge</strong> &mdash; Migrated from SQLite to PostgreSQL. Split cipher table into separate actors and objects tables.</li>
</ul>

<h2>AI Tooling &amp; Agent Ecosystem</h2>
<ul>
<li><strong>Sheila</strong> &mdash; An AI agent that replaced our entire accounting flow. Reads invoices from email, sends payments in fiat and Bitcoin, tracks everything in spreadsheets.</li>
<li><strong>Dirk</strong> &mdash; An AI project management and intelligence agent that sits across Soapbox's projects, people, and data.</li>
<li><strong>AGENTS.md Standardization</strong> &mdash; Adopted a standardized AGENTS.md pattern across all repositories for consistent AI agent instructions.</li>
</ul>
`,
  },
  {
    slug: 'nov-2025-jan-2026',
    title: 'OpenSats Grant Report: November 2025 \u2013 January 2026',
    dateRange: 'November 2025 \u2013 January 2026',
    summary: 'Collected user feedback on Shakespeare Act 2 and implemented improvements. Held workshops at Bitcoin conferences in Brazil, UK, and Taiwan.',
    content: `
<h2>Summary</h2>
<p>This quarter, Soapbox focused on collecting user feedback on Shakespeare Act 2 and implementing improvements and updates based on user feedback.</p>

<h2>Shakespeare Updates</h2>
<ul>
<li>Improve zaps and cashu integrations</li>
<li>UI menu improvements</li>
<li>Show your Nostr projects and those from people you follow</li>
<li>Project Labels/Folders</li>
<li>Git and syncing refactor</li>
<li>OpenCode support</li>
<li>Cost reductions with prompt caching and building relationships with OpenRouter</li>
<li>Add outbox support to Shakespeare and MKStack so all future Shakespeare apps support outbox</li>
<li>Image vision and generation</li>
<li>MCP support</li>
<li>Live preview updates</li>
<li>Configurable system prompt</li>
</ul>
<p><a href="https://soapbox.pub/blog/shakespeare-november-2025-update" target="_blank" rel="noopener noreferrer">Read more about these updates</a> | <a href="https://gitlab.com/soapbox-pub/shakespeare/-/commits/main?author=Alex%20Gleason" target="_blank" rel="noopener noreferrer">View commits</a></p>

<h2>Nostr Community</h2>
<ul>
<li>Help with diVine launch backend, and web app build with MKStack/Shakespeare: <a href="https://soapbox.pub/blog/divine-open-source-tech" target="_blank" rel="noopener noreferrer">read more</a></li>
<li>Fix Mostr Bridge</li>
</ul>

<h2>Shakespeare Workshops</h2>
<p>This quarter, we held a series of Shakespeare workshops at Bitcoin conferences and launched a guide to hosting a Shakespeare workshop, including a built-in giftcard system perfect for the conference setting. We also developed a partnership with BTC++ and will be regular hackathon hosts at their events.</p>
<p>We attended: SatsConf (Brazil), Nostrshire (UK), BTC++ Taipei</p>
<p><a href="https://soapbox.pub/blog/shakespeare-workshop-guide" target="_blank" rel="noopener noreferrer">Workshop Guide</a></p>

<h2>Really Open AI</h2>
<p>As part of ongoing resistance to Big AI and the threats it poses to freedom technology, we launched "Really Open AI," a project which ranks popular AI models and tools for freedom.</p>
<p><a href="https://reallyopen.ai" target="_blank" rel="noopener noreferrer">reallyopen.ai</a></p>
`,
  },
  {
    slug: 'aug-oct-2025',
    title: 'OpenSats Grant Report: August 2025 \u2013 October 2025',
    dateRange: 'August \u2013 October 2025',
    summary: 'Launched Shakespeare Act 2, a major rebuild of the open-source AI builder for Nostr that runs entirely in the browser.',
    content: `
<h2>Summary</h2>
<p>This quarter we launched Shakespeare: Act 2, an open-source AI builder for Nostr. Act 2 is a major technical advancement over the first version. We identified multiple limitations with the initial structure and rebuilt Shakespeare from the ground up so it now runs entirely in the browser, maximizing user freedom while rivaling closed-source cloud services.</p>

<h2>Shakespeare: Act II</h2>
<p>The goal of Shakespeare is to empower any person with an idea to be able to build on the open, decentralized web. We aim to make Nostr the open-secret of how websites work, bringing freedom to people who don't even know to ask for it.</p>

<h3>Total AI Provider and Model Freedom</h3>
<ul>
<li>Shakespeare Act 2 supports any AI provider, including default configurations for: OpenAI, Anthropic, Routstr, PayPerQ, Z.ai, xAI, Deepseek, Moonshot AI, and Google</li>
<li>Add a custom provider to use your own local model</li>
<li>Users can change AI models and providers on the fly without losing context</li>
<li>Price transparency for every model, and no subscription fees</li>
</ul>
<p>Read more: <a href="https://soapbox.pub/blog/shakespeare-ai-model-selection" target="_blank" rel="noopener noreferrer">Which AI Model Should I Use?</a> | <a href="https://soapbox.pub/blog/shakespeare-local-ai-model" target="_blank" rel="noopener noreferrer">Using Local AI Models</a></p>

<h3>Web-based Dev Environment</h3>
<ul>
<li>All files stored locally and never leave your machine unless you want it to</li>
<li>Built-in git integration for version control and project syncing</li>
<li>Use any Git provider (GitHub, GitLab, or custom)</li>
<li>Built-in text editor, terminal, console, and debugging tools</li>
<li>Live preview updates</li>
<li>Instantly deploy to free shakespeare.wtf domain</li>
</ul>

<h3>Edit with Shakespeare &amp; Showcase</h3>
<ul>
<li>Edit any existing compatible project by importing from a git URL</li>
<li>This allows users of open source software to actually edit and improve the projects they use, regardless of technical skill: realizing the true promise of open source</li>
<li>Get started from the Shakespeare showcase or template library</li>
</ul>

<h3>Advanced Web Technology</h3>
<ul>
<li>Project files stored locally in the browser using IndexedDB with LightningFS</li>
<li>Isomorphic-git handles Git operations entirely client-side</li>
<li>TypeScript projects compile directly in the browser using esbuild-wasm</li>
</ul>
<p><a href="https://shakespeare.diy/" target="_blank" rel="noopener noreferrer">Try Shakespeare</a> | <a href="https://soapbox.pub/blog/announcing-shakespeare-act-2" target="_blank" rel="noopener noreferrer">Read more about Act 2</a> | <a href="https://soapbox.pub/shakespeare-resources/" target="_blank" rel="noopener noreferrer">Resource Center</a></p>
`,
  },
  {
    slug: 'may-jul-2025',
    title: 'OpenSats Grant Report: May 2025 \u2013 July 2025',
    dateRange: 'May \u2013 July 2025',
    summary: 'Pivoted to building AI-assisted programming tools for Nostr: Nostrbook MCP, Stacks, MKStack, NostrHub, and Shakespeare.',
    content: `
<h2>Summary</h2>
<p>This quarter brought a major pivot. With the rise of AI-assisted tools, we identified that non-technical community leaders were eager to create their own spaces online but lacked the tools to do so in a way that was Nostr-native. To solve this, we spent the quarter building a suite of tools for AI-assisted programming to make Nostr the easiest and most accessible way to create your community on the decentralized web. This includes: Nostrbook MCP, Stacks, MKStack, NostrHub, and Shakespeare.</p>

<h2>Nostrbook MCP</h2>
<p>Nostrbook MCP delivers clean, normalized representations of the entire Nostr spec in AI-friendly markdown pages. This resource dramatically improves building on Nostr with AI assistants, and is compatible with multiple providers and tools.</p>
<p><a href="https://nostrbook.dev" target="_blank" rel="noopener noreferrer">View Nostrbook</a> | <a href="https://soapbox.pub/blog/nostrbook-mcp" target="_blank" rel="noopener noreferrer">Read more</a></p>

<h2>Stacks</h2>
<p>Stacks is a decentralized template-sharing protocol built on Nostr, designed specifically to jumpstart AI development. Stacks are shared via Nostr events, meaning they're portable, censorship-resistant, and social.</p>
<p><a href="https://getstacks.dev/" target="_blank" rel="noopener noreferrer">Try Stacks</a> | <a href="https://soapbox.pub/blog/stacks" target="_blank" rel="noopener noreferrer">Read more</a></p>

<h2>MKStack</h2>
<p>MKStack is a complete framework for building Nostr clients with AI. It uses Nostrbook MCP, a custom developer MCP, and Nostr-specific context and templates to jumpstart successful clients in one prompt.</p>
<p><a href="https://soapbox.pub/blog/mkstack-tutorial" target="_blank" rel="noopener noreferrer">Read more</a></p>

<h2>NostrHub</h2>
<p>NostrHub is a one-stop shop for Nostr development. It features official and custom NIPs, apps, git repositories, a DVM marketplace, and a Nostr developer community.</p>
<p><a href="https://nostrhub.io/" target="_blank" rel="noopener noreferrer">Explore NostrHub</a> | <a href="https://soapbox.pub/blog/announcing-nostrhub" target="_blank" rel="noopener noreferrer">Read more</a></p>

<h2>Shakespeare</h2>
<p>Shakespeare is a web interface for building Nostr clients with MKStack through natural conversation (no terminal or technical knowledge required!).</p>
<p><a href="https://shakespeare.diy/" target="_blank" rel="noopener noreferrer">Try Shakespeare</a> | <a href="https://soapbox.pub/blog/announcing-shakespeare" target="_blank" rel="noopener noreferrer">Read more</a></p>
`,
  },
  {
    slug: 'feb-apr-2025',
    title: 'Soapbox Progress Report: February 2025 \u2013 April 2025',
    dateRange: 'February \u2013 April 2025',
    summary: 'Launched Ditto 1.3 with Explore features, added Cashu support, launched Nostrbook MCP and MKStack, and onboarded new global communities.',
    content: `
<h2>Launched Ditto 1.3</h2>
<p>Ditto 1.3 is all about discovery. From improved search and event fetching to a brand-new Explore tab, this release makes it easier than ever to find people, posts, and conversations across the Nostr network.</p>
<ul>
<li><strong>Explore Tab &amp; Search Filter UI</strong></li>
<li><strong>Profile &amp; Event Fetching Improvements</strong> &mdash; Look up identifiers on remote relays, outbox-style REQ router</li>
<li><strong>Media Improvements</strong> &mdash; Video transcoding, improved link previews</li>
<li><strong>Streaks</strong> &mdash; User streak tracking with alerts</li>
<li><strong>Improved Admin Site Management</strong> &mdash; Revoke usernames, promoting admins</li>
<li><strong>Improved Translations</strong> &mdash; Better DeepL parsing and language detection</li>
<li><strong>Basic custom emoji support</strong></li>
</ul>
<p><a href="https://soapbox.pub/blog/ditto-1.3/" target="_blank" rel="noopener noreferrer">Full release notes</a></p>

<h2>Refactored Ditto into Monorepo</h2>
<p>Refactored Ditto into a monorepo and upgraded to Deno v2.1.10, laying the foundation for faster development and better performance.</p>

<h2>Added Cashu Support to Ditto</h2>
<p>We added support for Cashu wallets in Ditto, allowing new users on Nostr to receive zaps immediately.</p>

<h2>Policy UI for Admins</h2>
<p>A new Policy UI admin panel makes it easy for self-hosted Ditto communities to moderate their own space.</p>

<h2>Onboarded New Communities</h2>
<p>Working with multiple global communities to onboard them to Nostr with Ditto, including: seewaan.com (Arabic community), cvrkut.com (Croatian community), and Pura Vida Nostr (Costa Rica community).</p>

<h2>Launched Nostrbook MCP and MKStack</h2>
<p><strong>Nostrbook</strong> serves as a central registry of well-structured documentation about the Nostr protocol, making it easier for developers, users, and AI systems to understand and work with Nostr.</p>
<p><strong>MKStack</strong> is a framework for building Nostr clients with one AI prompt, combining the Nostrbook MCP, Nostrify, and a new AI-ready template.</p>
<p><a href="https://nostrbook.dev/mcp" target="_blank" rel="noopener noreferrer">View Nostrbook MCP</a> | <a href="https://mkstack.xyz/" target="_blank" rel="noopener noreferrer">Try MKStack</a></p>
`,
  },
  {
    slug: 'nov-2024-feb-2025',
    title: 'Soapbox Progress Report: November 2024 \u2013 February 2025',
    dateRange: 'November 2024 \u2013 February 2025',
    summary: 'Launched Eclipse (Bluesky-Nostr bridge), created Knox bunker, moved to self-hosted infrastructure saving over $1,000/month.',
    content: `
<h2>Bluesky Bridge</h2>
<p>In December we launched a bridge between Nostr and Bluesky at <a href="https://eclipse.pub/" target="_blank" rel="noopener noreferrer">eclipse.pub</a>. The bridge is hosted on a rack server in-house, because it simply would not be possible to support a bridge of this scale on cloud infrastructure.</p>
<p><a href="https://gitlab.com/soapbox-pub/eclipse" target="_blank" rel="noopener noreferrer">Source code</a></p>

<h2>Knox</h2>
<p>Knox is a Nostr bunker implementation with a command line interface. It invents a new .bunker binary format with NIP-49 encryption. Built to delegate login credentials for marketing accounts to the team without exposing the private key.</p>
<p><a href="https://gitlab.com/soapbox-pub/knox" target="_blank" rel="noopener noreferrer">Source code</a></p>

<h2>Soapbox UI Redesign</h2>
<p>Soapbox got a visual overhaul, making it look more modern and setting the groundwork for important new features. Large portions of the codebase were modernized and dependencies optimized to shrink the bundle size.</p>

<h2>Ditto Updates</h2>
<ul>
<li><strong>Performance Improvements</strong> &mdash; A custom rate-limiter was developed from scratch, and database fixes increased feed loading speed significantly.</li>
<li><strong>Advanced Search</strong> &mdash; Ditto's search now supports attributes like <code>video:true</code> and <code>protocol:activitypub</code>. Filters can be combined for advanced search.</li>
<li><strong>Compatibility with Olas</strong> &mdash; Now supports displaying kind 20 "Picture" events.</li>
<li><strong>Custom Profile Fields</strong> &mdash; Mastodon-style user-defined custom fields.</li>
<li><strong>JSON Logging</strong> &mdash; New JSON logging framework (Logi) for consistent, queryable log output.</li>
</ul>

<h2>Ditching the Cloud</h2>
<p>Nearly all public internet servers were moved off the cloud and onto a server rack in-house. This improved performance and saved over $1,000/month. The setup includes uplinks from 2 ISPs, backup batteries, and comprehensive monitoring with Prometheus and Grafana dashboards.</p>
`,
  },
  {
    slug: 'jul-oct-2024',
    title: 'Soapbox Progress Report: July \u2013 October 2024',
    dateRange: 'July \u2013 October 2024',
    summary: 'Spoke at Nostriga, launched Cobrafuma for Brazil, shipped Web Push notifications, PWA support, language detection, machine translations, captcha, and database overhaul.',
    content: `
<h2>Cobrafuma.com</h2>
<p>With X banned in Brazil, we launched <a href="https://cobrafuma.com" target="_blank" rel="noopener noreferrer">cobrafuma.com</a> &mdash; a Ditto server and gateway to Nostr for the people of Brazil. Soapbox+Ditto was fully translated into Portuguese with a custom logo, color scheme, and brand.</p>

<h2>Web Push Notifications</h2>
<p>Although Ditto is not a native app, Web Push allows it to send OS notifications on iOS and Android. This improves user engagement and enables reaching subscribers in a privacy-friendly way (without requiring an email address).</p>

<h2>Language Detection &amp; Filtering</h2>
<p>A tiny neural network (lande) has been embedded into Ditto to detect post languages. This enables filtering posts by language and opens the door to trending posts by language, machine translations, and more.</p>

<h2>Machine Translations</h2>
<p>Integration with DeepL and LibreTranslate has been added. Admins can enable this and a "Translate" button appears beneath posts in other languages.</p>

<h2>Login/Registration Overhaul</h2>
<p>Login and registration were redesigned with a friendlier and more approachable UI, including an onboarding flow for new Nostr users.</p>

<h2>Zap Splits</h2>
<p>Admins can configure zap splits so users can help contribute back to their server whenever they post or zap.</p>

<h2>Captcha</h2>
<p>A custom puzzle captcha was built from scratch to protect against spam. New users drag a puzzle piece into the correct position when they join.</p>

<h2>Database Overhaul</h2>
<p>The database adapter was rewritten to be specialized for Postgres, with 10x performance improvement especially for tag queries. SQLite was removed and replaced with PGlite for local development.</p>

<h2>Nostrify: Domain &amp; Web of Trust Policies</h2>
<p>New relay policies can require valid NIP-05 names (with domain whitelists/blacklists) and restrict events to a user's web of trust.</p>
`,
  },
  {
    slug: 'apr-jun-2024',
    title: 'Soapbox Progress Report: April \u2013 June 2024',
    dateRange: 'April \u2013 June 2024',
    summary: 'Launched Nostrify, NosDrive, Ditto 1.0 and 1.1, multiple Nostr communities, and a creator program. Received Long-Term Support grant.',
    content: `
<h2>Launch of Nostrify</h2>
<p><a href="https://soapbox.pub/blog/announcing-nostrify/" target="_blank" rel="noopener noreferrer">Nostrify</a> is a flexible library for building Nostr apps in TypeScript. It provides Relays, Signers, Storages, and more. Centered around interfaces such as NStore, NRelay, and NostrSigner for maximum flexibility.</p>

<h2>Launch of NosDrive</h2>
<p><a href="https://nosdrive.app/" target="_blank" rel="noopener noreferrer">NosDrive</a> is a Nostr Relay that saves your events to Google Drive.</p>

<h2>Improvements to Mostr Bridge</h2>
<p>An improvement to the <a href="https://mostr.pub/" target="_blank" rel="noopener noreferrer">Mostr Bridge</a> UI allows Nostr users to more easily search accounts across multiple platforms, including new support for following users on Bluesky and Threads.</p>

<h2>Launch of Ditto 1.0</h2>
<p><a href="https://soapbox.pub/blog/announcing-ditto/" target="_blank" rel="noopener noreferrer">Ditto</a> is a Nostr community server with a built-in Nostr relay, a web UI, and Mastodon's REST API support. Features include customizable themes, emoji reactions, zaps, quote posts, trending posts/people/topics, full text search, media uploads, moderation dashboard, and spam blocking.</p>

<h2>Ditto 1.1</h2>
<p><a href="https://soapbox.pub/blog/ditto-1.1" target="_blank" rel="noopener noreferrer">Ditto 1.1</a> added database timeouts, a /metrics endpoint, rate limiting on both the HTTP API and Nostr relay, nos2x support, and top zaps.</p>

<h2>Multiple Nostr Communities Launch on Ditto</h2>
<p>Ditto launched with multiple flagship communities: <a href="https://gleasonator.dev/" target="_blank" rel="noopener noreferrer">Gleasonator.dev</a>, <a href="https://ditto.pub/" target="_blank" rel="noopener noreferrer">Ditto.pub</a>, <a href="https://henhouse.social/" target="_blank" rel="noopener noreferrer">Henhouse.social</a>, Oregonbitcoiners.com, and Poster.place.</p>

<h2>Nostr Creator Program</h2>
<p>The Ditto Creator Incubator empowers emerging creators by providing resources, support, and exposure to build and monetize their social community on Nostr. Participants receive personalized onboarding, support for setting up Bitcoin micropayments, and promotion across multiple channels.</p>

<h2>LTS Support Received</h2>
<p>We were honored to receive a Long-Term Support grant from OpenSats to continue this work beyond the original grant period.</p>
`,
  },
  {
    slug: 'jul-sep-2023',
    title: 'Soapbox OpenSats Q1 Report: July \u2013 September 2023',
    dateRange: 'July \u2013 September 2023',
    summary: 'First quarter of OpenSats funding. Launched Ditto alpha with Mastodon API support, built-in Nostr relay, and began Soapbox modernization.',
    content: `
<h2>Building Connections</h2>
<p>Alex spoke about his work on Ditto, ActivityPub, and Nostr on the <em>Thank God For Nostr</em> podcast with Jon Staab, and appeared on the Minds Town Hall livestream during their launch of ActivityPub.</p>

<h2>Ditto Alpha Released</h2>
<p>An initial working version of Ditto was released with the following accomplishments:</p>
<ul>
<li>Mastodon API support including basic posting, profile editing, following, likes, reposts, replies, and more</li>
<li>Home feed, hashtag feed, community feed, and public feed</li>
<li>Trending hashtags</li>
<li>An integrated Nostr relay for full native Nostr functionality</li>
<li>A firehose module that autodiscovers new relays</li>
<li>A mixer module that combines events from multiple sources</li>
<li>Nostr streaming and Mastodon streaming for realtime updates</li>
<li>Notifications support</li>
<li>NIP-46 (Nostr Connect) for signing events using a separate signer app</li>
<li>Full-text search of users and notes</li>
<li>Admin privileges and site customization</li>
<li>Media uploads to S3 and IPFS</li>
<li>Proof-of-work signup with NIP-05 username</li>
<li>ActivityPub actor support</li>
</ul>

<h2>Soapbox Modernization</h2>
<p>Soapbox, the web UI for Ditto, received several key improvements:</p>
<ul>
<li>Added NIP-07 support for direct Nostr event signing</li>
<li>Added NIP-46 support, making Soapbox a fully-fledged signer app</li>
<li>Nostr client functionality connecting to Ditto's relay</li>
<li>Switched from Webpack to Vite for 10x faster devserver startup</li>
<li>Removed legacy code, saving roughly 1MB</li>
</ul>
`,
  },
];

export function getReportBySlug(slug: string): TransparencyReport | undefined {
  return transparencyReports.find((r) => r.slug === slug);
}
