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
  "slug": "announcing-stacks-1.0",
  "title": " Stacks 1.0 Released",
  "excerpt":
    "Be your own OpenRouter",
  "coverImage": "/assets/blog/stacks-1.0/stacks-upgrade.png",
  "date": "2025-08-20",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/stacks-1-0/stacks-upgrade.png",
  },
  "tags": ["stacks", "announcement", "ai"]
};

export default function AnnouncingStacks1() {
  return (
    <article className="prose prose-lg max-w-none">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-azure">Stacks 1.0: The freedom to choose your AI provider and model</h1>
      <p className="text-xl text-gray-600 mb-8">Stacks 1.0 is here! Run multiple AI providers, use slash commands, save your AI chat history, and enjoy a totally overhauled experience for building with Stacks. Upgrade now and unlock the next level of AI-first development.</p>
       <div className="aspect-video rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/HewEE6uf6cA?si=0agSOSNYRvRnVnYs"
          title="Stacks 1.0 Upgrade & Tutorial"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          ></iframe>
      </div>

      <h2 className="text-3xl font-bold text-azure mb-4">What is Stacks?</h2>
      <p>Stacks decentralized AI template-sharing platform built on Nostr, designed specifically to jumpstart development using templates and tools alongside LLMs. Anyone can publish a stack, which allows others to use their templates as a starting point for AI-first coding. <a href="/mkstack" className="text-azure hover:underline">MKstack</a>, a tool for building Nostr apps with AI, is one such stack!</p>
      <p>Stacks includes a CLI tool for managing and communicating with AI models through the terminal.</p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/stacks-1.0/stacks.png"
          alt="Example stacks "
          className="rounded-lg shadow-md mx-auto"
        />
        <figcaption className="text-center text-gray-500 text-sm mt-2">
          Featured stacks. Explore more on <a href="https://getstacks.dev" target="_blank" rel="noopener noreferrer" className="text-azure hover:underline">getstacks.dev</a>
        </figcaption>
      </div>

      <h2 className="text-3xl font-bold text-azure mb-4">What’s New in Stacks 1.0?</h2>
      <ul>
        <li><strong>Be your own open router:</strong> Easily configure and switch between multiple AI providers.</li>
        <li><strong>Quick upgrade:</strong> Just run <code>stacks upgrade</code> to get started (note: provider config will reset for a smoother setup experience).</li>
        <li><strong>Multiple providers at once:</strong> Use different providers for different models, or even your own custom models.</li>
        <li><strong>Per-project AI settings:</strong> Each project remembers its own AI settings—no more sharing models across users or projects.</li>
        <li><strong>Slash commands:</strong> Type <code>/</code> in any Stacks agent session to see all available commands. Change models, temperature, and more—mid-prompt!</li>
        <li><strong>AI chat history:</strong> All your AI sessions are saved in a new <code>.ai</code> folder (inspired by <code>.git</code>), so you can revisit and reload previous chats.</li>
        <li><strong>Quick model switch:</strong> Instantly swap between your 10 most recent models.</li>
        <li><strong>Overhauled menus:</strong> Every menu has been redesigned for a smoother, more intuitive experience.</li>
      </ul>

    <h2 className="text-3xl font-bold text-azure mb-4">Quickly swap between providers and models</h2>
      <p>Stacks 1.0 makes it easier than ever to manage multiple AI providers and models. Store your settings for providers like OpenRouter, PayPerQ, and more, and even use different providers for different models..</p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/stacks-1.0/slash-providers.png"
          alt="Stacks 1.0 Multiple Providers UI"
          className="rounded-lg shadow-md mx-auto"
        />
      </div>

      <p>You can access models from any provider with a slash `/`. So, GPT-4o on OpenAI's official API would be called `openai/gpt-4o`, while accessing it on OpenRouter would be `openrouter/openai/gpt-4o`</p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/stacks-1.0/slash-model.png"
          alt="Stacks 1.0 Multiple Providers UI"
          className="rounded-lg shadow-md mx-auto"
        />
      </div>

      <p>Once you use a model, stacks will remember it and suggest it for easy swaps in the future.</p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/stacks-1.0/recent-models.png"
          alt="Stacks 1.0 Multiple Providers UI"
          className="rounded-lg shadow-md mx-auto"
        />
      </div>

      <h2 className="text-2xl font-bold text-azure mt-10 mb-4">Slash Commands: Power at Your Fingertips</h2>
      <p>Stacks 1.0 introduces a powerful new slash command system. Just type <code>/</code> in any chat with your Stacks agent to:</p>
      <ul>
        <li>Switch models or providers instantly (<code>/model</code>, <code>/providers</code>)</li>
        <li>List available tools (<code>/tools</code>)</li>
        <li>Show or load chat history (<code>/history</code>, <code>/load</code>)</li>
        <li>Adjust temperature (<code>/temperature</code>)</li>
        <li>And more! Type <code>/help</code> or <code>/</code> to see all commands</li>
      </ul>
      <div className="not-prose my-8">
        <img
          src="/assets/blog/stacks-1.0/slash-commands.png"
          alt="Stacks 1.0 Slash Commands UI"
          className="rounded-lg shadow-md mx-auto"
        />
        <figcaption className="text-center text-gray-500 text-sm mt-2">Type <code>/</code> to access all commands in your Stacks agent session</figcaption>
      </div>

      <h2 className="text-2xl font-bold text-azure mt-10 mb-4">AI Chat History: Never Lose Your Flow</h2>
      <p>Every chat with your AI agent is now saved in a <code>.ai</code> folder in your project—just like <code>.git</code>. Reload any previous session, pick up where you left off, or review your progress at any time. Each project keeps its own settings and history, so you can use GPT for one project and GLM for another, with no conflicts.</p>
      <div className="not-prose my-8">
        <img
          src="/assets/blog/stacks-1.0/history.png"
          alt="Stacks 1.0 AI Chat History UI"
          className="rounded-lg shadow-md mx-auto"
        />
        <figcaption className="text-center text-gray-500 text-sm mt-2">All your AI chat sessions are saved and reloadable in Stacks 1.0</figcaption>
      </div>

      <h2 className="text-2xl font-bold text-azure mt-10 mb-4">How to Upgrade</h2>
      <ol>
        <li>Update your CLI: <code>npm install -g @getstacks/stacks</code></li>
        <li>In your project folder, run: <code>stacks upgrade</code></li>
        <li>Re-enter your provider config (it’s easier than ever!)</li>
        <li>Start building: <code>stacks agent</code></li>
      </ol>
      <div className="not-prose my-8">
        <img
          src="/assets/blog/stacks-1.0/update.png"
          alt="Stacks 1.0 Upgrade CLI"
          className="rounded-lg shadow-md mx-auto"
        />
        <figcaption className="text-center text-gray-500 text-sm mt-2">Upgrading to Stacks 1.0 is just one command away</figcaption>
      </div>

      <h2 className="text-2xl font-bold text-azure mt-10 mb-4">A Foundation for the Future</h2>
      <p>The new <code>.ai</code> folder is inspired by <code>.git</code> and lays the groundwork for the next phase of AI-first, decentralized development. This is a major step toward our vision to <strong>#FreeGit</strong> and paves the way for Shakespeare Act 2 and beyond.</p>
      <p>We’ve also moved provider config from <code>agent.json</code> to <code>.mcp.json</code> for a cleaner, more flexible setup.</p>

      <h2 className="text-2xl font-bold text-azure mt-10 mb-4">Try It Now</h2>
      <p>Ready to experience the new Stacks? Upgrade today and unlock the most powerful, flexible AI-first development workflow yet.</p>

      <h2 className="text-2xl font-bold text-azure mt-10 mb-4">Get Notified of New Releases</h2>
      <EmailSignupForm tags={['Stacks']} />

      <div className="not-prose my-12">
        <a
          href="https://getstacks.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md bg-azure px-6 py-3 text-lg font-semibold text-white hover:bg-azure-700 transition-colors shadow-lg"
        >
          Try Stacks 1.0 →
        </a>
      </div>
    </article>
  );
}