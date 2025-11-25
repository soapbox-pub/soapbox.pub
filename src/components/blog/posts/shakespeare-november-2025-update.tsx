import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';


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
  featured?: boolean;
  tags?: string[];
}

export const meta: BlogPostMeta = {
  "slug": "shakespeare-november-2025-update",
  "title": "Shakespeare Update: Image Vision, MCP Support, and More",
  "excerpt": "Shakespeare gets smarter with image vision support, MCP server integration, plugin support, configurable system prompts, gift cards, and real-time live preview updates.",
  "coverImage": "/assets/blog/shakespeare-november-2025-update/cover.png",
  "date": "2025-11-25",
  "author": {
    "name": "M.K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/shakespeare-november-2025-update/cover.png"
  },
  "featured": true,
  "tags": ["shakespeare", "update", "features", "ai"]
};

export default function ShakespeareNovember2025Update() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 rounded-2xl p-8 text-center border border-purple-200 dark:border-purple-800">
          <div className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-purple-300 dark:border-purple-700">
            🎭 November 2025 Update
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Shakespeare Just Got Smarter
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We've been busy shipping new features to make building with Shakespeare even more powerful. Here's what's new.
          </p>
        </div>
      </div>

      <h2>🖼️ Image Vision</h2>

      <p>
        The biggest addition to Shakespeare is <strong>image vision support</strong>. You can now attach images directly to your chat messages, and Shakespeare will analyze them to understand what you're showing. This opens up entirely new workflows for building websites and applications.
      </p>

      <p>
        Want to recreate a design you saw? Just attach a screenshot. Need to fix a visual bug? Show Shakespeare exactly what's wrong. Building something inspired by an existing site? Share the reference image. Shakespeare converts your images to base64 and passes them to vision-capable AI models like Claude and GPT-4, giving the AI the context it needs to understand your visual intent.
      </p>

      <div className="not-prose my-8">
        <figure>
          <img
            src="/assets/blog/shakespeare-november-2025-update/image-vision.png"
            alt="Image vision in Shakespeare - building a restaurant reservation site from a wireframe"
            className="rounded-lg shadow-md border"
          />
          <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-3">
            This <a href="https://restaurant-booking.shakespeare.wtf/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">restaurant reservation site</a> was built in a single prompt using image vision—total cost: $1.72.
          </figcaption>
        </figure>
      </div>

      <h2>🔌 MCP Support</h2>

      <p>
        Shakespeare now supports <a href="https://modelcontextprotocol.io/" target="_blank" rel="noopener noreferrer">Model Context Protocol (MCP)</a> servers, allowing you to extend the AI's capabilities with external tools and data sources. Configure MCP servers in <a href="https://shakespeare.diy/settings/ai" target="_blank" rel="noopener noreferrer">Settings → AI</a>, and Shakespeare will automatically discover and use the tools they provide.
      </p>

      <p>
        MCP servers can provide everything from database access to specialized APIs to custom development tools. Shakespeare currently supports the Streamable HTTP transport, and you can configure custom headers for authentication. Connection status is shown in real-time so you always know which servers are available.
      </p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/shakespeare-november-2025-update/mcp-servers.png"
          alt="MCP Servers configuration in Shakespeare settings"
          className="rounded-lg shadow-md border"
        />
      </div>

      <h2>🧩 Plugin Support (Experimental)</h2>

      <p>
        We're introducing an experimental plugin system that lets you extend Shakespeare with custom skills. Plugins are Git repositories containing reusable AI workflows that Shakespeare can invoke during conversations. Add a plugin URL in <a href="https://shakespeare.diy/settings/ai" target="_blank" rel="noopener noreferrer">Settings → AI</a>, and Shakespeare will clone it and make its skills available.
      </p>

      <p>
        Skills are specialized workflows for specific tasks—think of them as expert knowledge that Shakespeare can tap into when needed. The plugin system syncs with Git, so you can update plugins to get the latest skills. This is still experimental, but it lays the groundwork for a rich ecosystem of community-contributed capabilities.
      </p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/shakespeare-november-2025-update/plugins.png"
          alt="Plugins configuration in Shakespeare settings"
          className="rounded-lg shadow-md border"
        />
      </div>

      <h2>📝 Configurable System Prompt</h2>

      <p>
        Power users can now customize Shakespeare's system prompt directly in <a href="https://shakespeare.diy/settings/system" target="_blank" rel="noopener noreferrer">Settings → System</a>. The system prompt is the instruction set that tells the AI how to behave, what tools it has access to, and how to interact with your projects. It uses <a href="https://mozilla.github.io/nunjucks/" target="_blank" rel="noopener noreferrer">Nunjucks templating</a>, so you can include dynamic information like the current date, user profile, available tools, and project context.
      </p>

      <p>
        This is powerful for advanced use cases—you can customize how Shakespeare approaches code generation, add domain-specific instructions, or experiment with different prompting strategies. A "Restore to Default" button makes it easy to reset if you want to go back to the standard behavior.
      </p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/shakespeare-november-2025-update/system-prompt.png"
          alt="System prompt configuration in Shakespeare settings"
          className="rounded-lg shadow-md border"
        />
      </div>

      <h2>🌐 Mirrored for Resilience</h2>

      <p>
        True to our commitment to open source and decentralization, Shakespeare is now mirrored at multiple locations. If the main site ever goes down, you can access Shakespeare at <a href="https://shakespeare-diy.github.io/" target="_blank" rel="noopener noreferrer">shakespeare-diy.github.io</a>. You can always find the full list of mirrors in <a href="https://shakespeare.diy/settings/about" target="_blank" rel="noopener noreferrer">Settings → About</a>.
      </p>

      <p>
        This ensures Shakespeare remains accessible no matter what. The entire application runs in your browser with no central server dependencies, and now the code itself is hosted in multiple places. That's real decentralization.
      </p>

      <h2>🎁 Gift Cards</h2>

      <p>
        Want to share Shakespeare with others? You can now purchase gift cards directly in <a href="https://shakespeare.diy/settings/ai" target="_blank" rel="noopener noreferrer">Settings → AI</a>. Gift cards are perfect for <a href="/blog/shakespeare-workshop-guide">hosting Shakespeare workshops</a>, onboarding team members, or just giving the gift of AI-powered development to a friend.
      </p>

      <p>
        Purchase cards in bulk, export them as CSV, and distribute them however you like. Recipients can redeem gift cards to add credits to their account without needing to set up payment themselves. For workshops, we've also built a <a href="https://faucet.shakespeare.diy" target="_blank" rel="noopener noreferrer">faucet service</a> that generates QR codes for easy distribution.
      </p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/shakespeare-november-2025-update/gift-cards.png"
          alt="Gift card purchase interface in Shakespeare"
          className="rounded-lg shadow-md border"
        />
      </div>

      <h2>👁️ Live Preview Updates</h2>

      <p>
        The preview pane now updates in real-time as Shakespeare writes code. Instead of waiting for the AI to finish, you can watch your project come to life as files are created and modified. Shakespeare automatically triggers builds when files change, with smart debouncing to avoid excessive rebuilds during rapid edits.
      </p>

      <p>
        This makes the building experience feel more interactive and responsive. You get immediate visual feedback on what Shakespeare is creating, making it easier to course-correct early if something isn't quite right.
      </p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/shakespeare-november-2025-update/live-preview.png"
          alt="Live preview updating in real-time as Shakespeare writes code"
          className="rounded-lg shadow-md border"
        />
      </div>

      <h2>What's Next?</h2>

      <p>
        We're continuing to improve Shakespeare based on community feedback. If you have ideas for features or run into issues, let us know on Nostr using <strong>#ShakespeareDIY</strong> or submit an issue on <a href="https://gitlab.com/soapbox-pub/shakespeare" target="_blank" rel="noopener noreferrer">GitLab</a>.
      </p>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Try These New Features
            </h3>
            <p className="text-muted-foreground mb-6">
              All these features are available now at shakespeare.diy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3"
              >
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  🎭 Open Shakespeare
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 font-semibold px-8 py-3"
              >
                <a href="/shakespeare-resources">
                  📚 More Resources
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}
