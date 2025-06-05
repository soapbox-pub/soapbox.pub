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
  "slug": "nostrbook-mcp",
  "title": "Nostrbook MCP: AI-Ready Developer Documentation for Nostr",
  "excerpt": "Learn how to use Nostrbook MCP to build smarter apps and AI tools on Nostr with structured, queryable documentation.",
  "coverImage": "/assets/images/nostrbook.png",
  "date": "2025-05-07",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/images/nostrbook.png"
  }
};

export default function NostrbookMcp() {
  return (
    <article className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ 
        __html: `<p> <h2>A New Era of Building on Nostr</h2></p>

<p>If you’ve ever tried building on <a href="https://nostr.com" target="_blank" rel="noopener noreferrer">Nostr</a> and found yourself hopping between NIPs, blog posts, and example code scattered across the internet, you're not alone. This isn't just a problem for humans, it's a major hurdle for AI systems too.</p>

<p>The Nostr ecosystem is growing rapidly, with new protocols, libraries, and tools emerging every day. But as a developer, you need a reliable source of truth to understand how everything fits together. You need structured documentation that’s easy to query and understand, so you can stop copy/pasting NIPs and code snipets into your AI agent.</p>

<p>That’s exactly the problem <a href="https://nostrbook.dev/" target="_blank" rel="noopener noreferrer">Nostrbook</a> solves.</p>

<p> ---</p>

<h2>What is Nostrbook MCP?</h2>

<figure>
  <img src='/assets/blog/nostrbook-mcp-4.png' alt='Using Nostrbook MCP' />
    <figcaption>Using Nostrbook MCP</figcaption>
</figure>

<p> MCP stands for <strong>Model-Context Protocol</strong>. It’s a format designed to help AI models better understand and interact with structured information.</p>

<p>Instead of trying to parse random Github pages, Nostrbook MCP delivers clean, normalized representations of the entire Nostr spec in AI-friendly markdown pages. Our llms.txt file at the root of the site also provides a structured overview of key resources for AI agents.</p>

<p> This means you (or your AI assistant) can now do things like: - Find exactly how a specific tag works in a given NIP - Get a complete schema of a Nostr event, including all fields and their constraints - Understand relay behavior defined across multiple NIPs - Generate contextual examples for any part of the protocol - Power LLM agents with reliable, up-to-date source material</p>

<h3>Get notified of new releases!</h3>
<EmailSignupForm tags={['Nostrbook']} />

<p>---</p>

<h2>Try Nostrbook MCP with your Favorite AI Code Assistants</h2>

<h3>Use NostrBook MCP with Goose</h3>

<a href="https://block.github.io/goose/" target="_blank" rel="noopener noreferrer">Goose</a> is an open-source AI interface developed by Block. To install the Nostr MCP as a Goose extension:

<p>1. Run "<strong><code>goose configure</code></strong>" 2. Choose "<strong><code>Add Extension</code></strong>" 3. Choose "<strong><code>Command-line Extension</code></strong>" 4. Enter a name you prefer, such as "<strong><code>nostrbook</code></strong>" 5. Enter the command: "<strong><code>npx -y xjsr @nostrbook/mcp</code></strong>" 6. Enter a timeout in seconds, such as "<strong><code>369</code></strong>" 7. "<strong><code>No</code></strong>" to adding a description (you can hit "<strong><code>yes</code></strong>" if you want) 8. "<strong><code>No</code></strong>" to adding environment variables</p>

<figure>
  <img src='/assets/blog/install-nostrbookmcp-goose.png' alt='Install Nostrbook MCP with Goose' />
</figure>

<p>Now when you run goose, it will automatically use the Nostrbook MCP when it needs to know about Nostr.</p>

<h3>Use Nostrbook MCP with VSCode</h3>

<p>If you're using Visual Studio Code with GitHub Copilot, you can integrate Nostr MCP by creating a .vscode/mcp.json file in your project:</p>

<pre><code>{
  "servers": {
    "nostr": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "xjsr", "@nostrbook/mcp"]
    }
  }
}
</code></pre>

<p>This allows Copilot to access Nostr documentation directly. For more information, see <a href="https://code.visualstudio.com/docs/copilot/chat/mcp-servers" target="_blank" rel="noopener noreferrer">Use MCP servers in VS Code</a>.</p>

<p>---</p>

<h2>Try Our Other Tools for the Best Nostr Development Experience</h2>

<p>Nostrbook MCP is just one part of a growing toolkit designed to make building on Nostr easier and more powerful.</p>

<p>Check out our other tools:</p>

<p>- <strong>Nostrify</strong> – Bring your projects to life on Nostr with simple tools for relays, storage, signers, moderation policies, and more. <a href="https://nostrify.dev/" target="_blank" rel="noopener noreferrer">Try Nostrify →</a> - <strong>Stacks</strong> – Share and Discover AI Project Templates: Stacks is a decentralized platform for sharing AI templates on the Nostr network. Find the perfect starter for your next project, or share your own templates with the community. <a href="https://getstacks.dev/" target="_blank" rel="noopener noreferrer">Explore Stacks →</a></p>

<p>Together with Nostrbook MCP, these tools give you everything you need to start building scalable, user-friendly, and standards-compliant Nostr applications.</p>

<div style={{ textAlign: 'center', marginBottom: '40px' }}>
  <Button theme='secondary' href='https://nostrbook.dev'>Try Nostrbook Now!</Button>
</div>

<p>--- </p>}`
      }} />
    </article>
  );
}
