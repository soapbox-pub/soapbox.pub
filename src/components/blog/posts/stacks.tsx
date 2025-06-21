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
}


export const meta: BlogPostMeta = {
  "slug": "stacks",
  "title": "AI-First Development with Stacks",
  "excerpt": "Stacks is a new way to share AI project templates on Nostr. Browse starter kits, remix your own, and deploy lightning-fast AI apps — all from the terminal.",
  "coverImage": "/assets/images/stacks.png",
  "date": "2025-05-10",
  "author": {
    "name": "M.K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/stacks-homepage.png"
  }
};

export default function Stacks() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>Stacks: AI-First Development</h2>

      <p><strong><a href="https://soapbox.pub/tools/stacks" target="_blank" rel="noopener noreferrer">Stacks</a> is a decentralized template-sharing platform built on <a href="/blog/nostr101/" target="_blank" rel="noopener noreferrer">Nostr</a>, designed specifically to jumpstart AI development.</strong></p>

      <ul>
        <li>Publish AI-first project templates (called "stacks")</li>
        <li>Quickly bootstrap working apps from these templates</li>
        <li>Deploy functional applications in minutes</li>
      </ul>

      <p>Stacks are shared via Nostr events, meaning they're portable, censorship-resistant, and social. A stack can be anything from a <a href="https://getstacks.dev/stack/naddr1qvzqqqrhl5pzppscgyy746fhmrt0nq955z6xmf80pkvrat0yq0hpknqtd00z8z68qqrk6ennw3skx6c04w4fd" target="_blank" rel="noopener noreferrer">simple website template</a> to a <a href="https://getstacks.dev/stack/naddr1qvzqqqrhl5pzqprpljlvcnpnw3pejvkkhrc3y6wvmd7vjuad0fg2ud3dky66gaxaqq9kz6fdvd5xzapdvdkxjcz8fx7" target="_blank" rel="noopener noreferrer">AI chat app</a>, or even a <a href="https://getstacks.dev/stack/naddr1qvzqqqrhl5pzqprpljlvcnpnw3pejvkkhrc3y6wvmd7vjuad0fg2ud3dky66gaxaqqpxwcsx699p0" target="_blank" rel="noopener noreferrer">GameBoy ROM</a>!</p>

      <figure>
        <img alt="Stacks Homepage" src="/assets/blog/stacks-homepage.png" />
        <figcaption>Explore stacks at <a href="https://getstacks.dev" target="_blank" rel="noopener noreferrer">getstacks.dev</a></figcaption>
      </figure>

      <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '40px' }}>
        <a href="https://getstacks.dev" className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80">
          Try AI-first building with Stacks!
        </a>
      </div>

      <hr />

      <h2>How to Use Stacks</h2>

      <p>Install stacks CLI:</p>

      <pre><code>npm install -g @getstacks/stacks</code></pre>

      <p>Once installed, you can add stacks and start building.</p>

      <figure>
        <img alt="pg-relay stack" src="/assets/blog/example-pg-relay.png" />
        <figcaption>Installing the <a href="https://getstacks.dev/stack/naddr1qvzqqqrhl5pzqprpljlvcnpnw3pejvkkhrc3y6wvmd7vjuad0fg2ud3dky66gaxaqqy8qeedwfjkcctehjfz9x" target="_blank" rel="noopener noreferrer">pg-relay stack</a></figcaption>
      </figure>

      <p>For example, if you want to build a Nostr Relay, you can add the <code>pg-relay</code> stack:</p>

      <pre><code>stacks add naddr1qvzqqqrhl5pzqprpljlvcnpnw3pejvkkhrc3y6wvmd7vjuad0fg2ud3dky66gaxaqqy8qeedwfjkcctehjfz9x</code></pre>

      <p>This will add the stack to your local collection. You can view all the stacks you have added and their aliases with:</p>

      <pre><code>stacks list

Stack Aliases (2):
---------------------
mkstack =&gt; nostr:naddr1qvzqqqrhl5pzqprpljlvcnpnw3pejvkkhrc3y6wvmd7vjuad0fg2ud3dky66gaxaqqrk66mnw3skx6c4g6ltw
pg-relay =&gt; nostr:naddr1qvzqqqrhl5pzqprpljlvcnpnw3pejvkkhrc3y6wvmd7vjuad0fg2ud3dky66gaxaqqy8qeedwfjkcctehjfz9x</code></pre>

      <p>Running the stack will create a project in your current directory:</p>

      <pre><code>stacks pg-relay</code></pre>

      <p>From there, you can prompt our built-in AI Agent "Dork" to help you build your app! Dork similar to <a href="https://getgoose.ai" target="_blank" rel="noopener noreferrer">Goose</a>, but fine-tuned to specialize in building with stacks. Dork helps generate boilerplate code, answer questions about your dependencies, and guide you through deployments.</p>

      <blockquote>
        <p><strong>Open Router API:</strong> Open Router API Key is currently required to get the most out of building stacks. You can sign up and get one here: <a href="https://openrouter.ai" target="_blank" rel="noopener noreferrer">https://openrouter.ai</a>. In the future we hope to offer a service to accept zaps to run the AI for users who don't wish to directly pay for Open Router.</p>
      </blockquote>

      <hr />

      <h2>Try Building a Nostr App with MKStack</h2>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/kJRwAGmAmGI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <p>Want to see Stacks in action? Check out <a href="https://getstacks.dev/stack/naddr1qvzqqqrhl5pzqprpljlvcnpnw3pejvkkhrc3y6wvmd7vjuad0fg2ud3dky66gaxaqqrk66mnw3skx6c4g6ltw" target="_blank" rel="noopener noreferrer">MKStack</a>, a Nostr template built using:</p>

      <ul>
        <li><a href="/blog/nostrbook-mcp" target="_blank" rel="noopener noreferrer">Nostrbook MCP</a> for queryable documentation</li>
        <li>Built-in Nostr login</li>
        <li>Context files to supercharge AI workflows</li>
      </ul>

      <p>Add MKStack and run it:</p>

      <pre><code>stacks add naddr1qvzqqqrhl5pzqprpljlvcnpnw3pejvkkhrc3y6wvmd7vjuad0fg2ud3dky66gaxaqqrk66mnw3skx6c4g6ltw

stacks mkstack</code></pre>

      <p>Then give Dork a prompt to get started. For example:</p>

      <pre><code>➜  stacks mkstack
│
◇  Enter project name
│  nostr-chat-app
│
◇
│
◆  CONTEXT.md found
│
◇  &lt;[o_o]&gt; Dork here! I'm ready to help you with nostr-chat-app. What do you need?
│  Please build a NIP-28 group chat add with Nostr login</code></pre>

      <p>Dork will then use the <a href="/_blog/nostrbook-mcp.mdx" target="_blank" rel="noopener noreferrer">Nostrbook MCP</a> to find the best way to build your app, pulling in the template components as needed.</p>

      <p>When it's finished, you can run the app with:</p>

      <pre><code>npm run dev</code></pre>

      <p>If you like what you see, deploy it with the built-in Surge integration:</p>

      <pre><code>npm run deploy</code></pre>

      <p>See example of a site built and deployed this way here: <a href="http://nip28.surge.sh/" target="_blank" rel="noopener noreferrer">http://nip28.surge.sh/</a></p>

      <figure>
        <img alt="MKStack" src="/assets/blog/mkstack-chat-app.png" />
        <figcaption>Build a Nostr chat app with MKStack</figcaption>
      </figure>

      <blockquote>
        <p><strong>Note:</strong> Surge is a free static hosting service that allows you to deploy your app with a single command. You will need to set up a free account on Surge if you want to deply this way: <a href="https://surge.sh" target="_blank" rel="noopener noreferrer">https://surge.sh</a></p>
      </blockquote>

      <p>You have now deployed a fully functioning Nostr Chat app in only a few commands - and NO code written!</p>

      <hr />

      <h2>Publish Your Own with the Stacks Protocol</h2>

      <p>The <a href="https://getstacks.dev/docs/protocol" target="_blank" rel="noopener noreferrer">Stacks Protocol</a> defines how project templates and AI agents are structured, shared, and consumed. It consists of several key components:</p>

      <ul>
        <li>stack.json - Metadata for project templates</li>
        <li>agent.json - Configuration for AI agents</li>
        <li>CONTEXT.md - Project context for AI agents</li>
        <li>Nostr Integration - Decentralized publishing and discovery</li>
      </ul>

      <p>Stack templates are published as Nostr events with kind <code>30717</code>. The stacks publish command converts the stack.json file into this Nostr event format and then publishes it. Each published stack has a unique identifier starting with naddr1, which encodes the event information in a compact format. This naddr1 is then used with the Stacks CLI to clone the stack or create an alias.</p>

      <p><a href="https://getstacks.dev/publish" target="_blank" rel="noopener noreferrer">Publish your own stack →</a></p>

      <hr />

      <h2>Try Our Other Tools for the Best Nostr Development Experience</h2>

      <p>Stacks is just one part of a growing toolkit designed to make building on Nostr easier and more powerful. Check out our other tools:</p>

      <ul>
        <li><strong>Nostrify</strong> – Bring your projects to life on Nostr with simple tools for relays, storage, signers, moderation policies, and more. <a href="https://nostrify.dev/" target="_blank" rel="noopener noreferrer">Try Nostrify →</a></li>
        <li><strong>Nostrbook MCP</strong> – A Comprehensive Registry of Nostr Documentation. Structured, detailed knowledge about Nostr for both humans and AI. <a href="https://nostrbook.dev/" target="_blank" rel="noopener noreferrer">Try Nostrbook →</a></li>
      </ul>

      <h3>Get notified of new releases!</h3>
      <EmailSignupForm tags={['Stacks']} />

      <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '40px' }}>
        <a href="https://soapbox.pub/tools/" className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80">
          Explore Nostr Development Tools
        </a>
      </div>
    </article>
  );
}