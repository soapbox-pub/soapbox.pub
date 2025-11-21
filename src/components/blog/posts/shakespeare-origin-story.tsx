import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight, GitBranch } from 'lucide-react';

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
  "slug": "shakespeare-origin-story",
  "title": "The Shakespeare Origin Story: From Goose to Browser-Based AI Development",
  "excerpt": "How Shakespeare evolved from Block's Goose AI agent framework through Stacks to become a browser-based development environment for building Nostr applications",
  "coverImage": "/assets/blog/shakespeare-origin-story/history-of-shakespeare-ai.png",
  "date": "2025-11-20",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/shakespeare-origin-story/history-of-shakespeare-ai.png"
  },
  "tags": ["shakespeare", "history", "goose", "stacks", "development"]
};

export default function ShakespeareOriginStory() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>The Evolution of AI-Assisted Development</h2>

      <p>
        Shakespeare didn't appear overnight. It's the result of an evolution that started with Block's Goose framework, continued through Soapbox's Stacks project, and culminated in a browser-based development environment that makes building Nostr applications accessible to everyone.
      </p>

      <div className="not-prose my-12">
        <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">The Evolution Path</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              <div className="text-center">
                <div className="bg-gray-900 text-white rounded-2xl p-6 mb-4 shadow-lg">
                  <h4 className="text-xl font-bold mb-2">Goose</h4>
                  <p className="text-sm text-gray-300">Terminal-Based</p>
                  <p className="text-xs text-gray-400 mt-2">Block (2025)</p>
                </div>
                <p className="text-sm text-gray-600">AI agent framework<br />for developers</p>
              </div>

              <ArrowRight className="w-8 h-8 text-purple-600 rotate-90 md:rotate-0" />

              <div className="text-center">
                <div className="bg-violet-600 text-white rounded-2xl p-6 mb-4 shadow-lg">
                  <h4 className="text-xl font-bold mb-2">Stacks</h4>
                  <p className="text-sm text-violet-200">Nostr Templates</p>
                  <p className="text-xs text-violet-300 mt-2">Soapbox (2025)</p>
                </div>
                <p className="text-sm text-gray-600">Template system<br />for Nostr apps</p>
              </div>

              <ArrowRight className="w-8 h-8 text-purple-600 rotate-90 md:rotate-0" />

              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl p-6 mb-4 shadow-lg">
                  <h4 className="text-xl font-bold mb-2">Shakespeare</h4>
                  <p className="text-sm text-purple-200">Browser-Based</p>
                  <p className="text-xs text-purple-300 mt-2">Soapbox (2025)</p>
                </div>
                <p className="text-sm text-gray-600">Full development<br />environment</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Chapter 1: Goose by Block</h2>

      <p>
        In January 2025, <a href="https://block.xyz" target="_blank" rel="noopener noreferrer">Block (formerly Square)</a> introduced <strong>codename goose</strong>—an open-source AI agent framework that enabled developers to connect large language models to real-world actions. Goose was designed for software engineers, operating within development environments to automate repetitive tasks like reading and writing files, running tests, and installing dependencies.
      </p>

      <h3>Goose's Core Innovation</h3>

      <p>
        Goose introduced a modular architecture where developers could:
      </p>

      <ul>
        <li><strong>Choose Their AI Provider:</strong> Connect to any LLM (OpenAI, Anthropic, local models, etc.)</li>
        <li><strong>Use Model Context Protocol (MCP):</strong> Anthropic's open standard for connecting AI agents to systems and data sources</li>
        <li><strong>Build Custom Interfaces:</strong> Create specialized UIs for different use cases</li>
        <li><strong>Execute Autonomously:</strong> Let AI handle tasks end-to-end within the development environment</li>
      </ul>

      <p>
        Goose was powerful but required technical knowledge to use. It was a terminal-based tool for developers building traditional software projects.
      </p>

      <div className="not-prose my-8">
        <Card className="border-gray-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <GitBranch className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Learn More About Goose</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Block's original AI agent framework that inspired the development of Stacks and Shakespeare.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://block.xyz/inside/block-open-source-introduces-codename-goose" target="_blank" rel="noopener noreferrer">
                    Read Block's Announcement
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Chapter 2: Stacks for Nostr</h2>

      <p>
        Inspired by Goose's approach to AI-assisted development, the Soapbox team recognized an opportunity to bring similar capabilities to the <a href="/blog/nostr101">Nostr ecosystem</a>. In May 2025, we released <strong><a href="/tools/stacks">Stacks</a></strong>—a decentralized template-sharing platform built specifically for Nostr development.
      </p>

      <h3>Why We Built Stacks</h3>

      <p>
        While Goose was a general-purpose development tool, we needed something optimized for our specific use case:
      </p>

      <ul>
        <li><strong>Nostr-First Development:</strong> Building social apps, content platforms, and decentralized communities</li>
        <li><strong>Template Sharing:</strong> A way to package and share complete project templates across the Nostr network</li>
        <li><strong>Faster Bootstrapping:</strong> Starting new Nostr projects in minutes instead of days</li>
        <li><strong>Accessible to Non-Developers:</strong> Enabling creators without coding backgrounds to build on Nostr</li>
      </ul>

      <p>
        Stacks built on Goose's foundation while adding Nostr-specific features. Like Goose, it included an AI agent (we called it "Dork") that helped developers build projects through conversation. But unlike Goose, <a href="/blog/stacks">Stacks</a> was specifically designed around shareable templates published as Nostr events.
      </p>

      <div className="not-prose my-12">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Badge className="bg-gray-900 text-white">Goose</Badge>
                General Purpose
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Terminal-based AI agent</p>
              <p>• Any type of software project</p>
              <p>• Model Context Protocol (MCP)</p>
              <p>• For professional developers</p>
              <p>• Local development environment</p>
            </CardContent>
          </Card>

          <Card className="border-violet-200 bg-gradient-to-br from-violet-50 to-violet-100/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Badge className="bg-violet-600 text-white">Stacks</Badge>
                Nostr Specialized
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              <p>• Terminal-based with Dork agent</p>
              <p>• Nostr application templates</p>
              <p>• Nostrbook MCP for Nostr docs</p>
              <p>• For Nostr builders (all levels)</p>
              <p>• Template sharing via Nostr</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <h3>Introducing MKStack</h3>

      <p>
        The flagship template in the Stacks ecosystem was <a href="/blog/mkstack-tutorial">MKStack</a>—a comprehensive starter for building Nostr applications. MKStack included:
      </p>

      <ul>
        <li><strong>Nostrify Integration:</strong> Pre-configured Nostr protocol handling</li>
        <li><strong>Modern Design System:</strong> React, TypeScript, TailwindCSS, and ShadCN UI components</li>
        <li><strong>Authentication:</strong> Nostr login ready to use out of the box</li>
        <li><strong>Documentation:</strong> Context files and guides to help AI assistants understand the stack</li>
      </ul>

      <p>
        MKStack proved that the combination of good templates + AI assistance could dramatically speed up Nostr development. Projects that previously took weeks could be built in days or even hours. You can try Stacks today at <a href="https://getstacks.dev" target="_blank" rel="noopener noreferrer">getstacks.dev</a>.
      </p>

      <h2>Chapter 3: Shakespeare Goes Browser-Based</h2>

      <p>
        By July 2025, we had learned valuable lessons from Stacks. The terminal-based workflow worked well for developers, but it still had barriers: Node.js installation, command-line knowledge, and local development setup. We wanted to make Nostr development accessible to <strong>everyone</strong>, not just developers.
      </p>

      <p>
        This led to <strong>Shakespeare</strong>—a complete reimagining of the Stacks concept as a browser-based development environment.
      </p>

      <h3>The Browser-Based Revolution</h3>

      <p>
        Shakespeare eliminated all the traditional barriers to development:
      </p>

      <ul>
        <li><strong>No Installation:</strong> Everything runs in your web browser using modern Web APIs</li>
        <li><strong>No Terminal:</strong> Chat interface replaces command-line interactions</li>
        <li><strong>Visual Development:</strong> Live preview shows changes in real-time</li>
        <li><strong>Instant Deployment:</strong> One-click publishing to decentralized hosting</li>
        <li><strong>Code Editing:</strong> Built-in editor for those who want to make manual changes</li>
      </ul>

      <p>
        By moving to the browser, Shakespeare maintained the best parts of Goose (AI-assisted development, MCP support, model choice) and Stacks (Nostr templates, accessible to all skill levels) while removing the technical barriers.
      </p>

      <div className="not-prose my-12">
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8 border-2 border-purple-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">From Terminal to Browser</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Goose (Terminal)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ AI assistance</li>
                <li>✓ Model choice</li>
                <li>✓ File operations</li>
                <li>✗ Requires setup</li>
                <li>✗ Terminal-only</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Stacks (Terminal)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ AI assistance (Dork)</li>
                <li>✓ Model choice</li>
                <li>✓ Nostr templates</li>
                <li>✓ Template sharing</li>
                <li>✗ Requires setup</li>
                <li>✗ Terminal-only</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">Shakespeare (Browser)</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>✓ AI assistance</li>
                <li>✓ Model choice</li>
                <li>✓ Nostr templates</li>
                <li>✓ Live preview</li>
                <li>✓ Zero setup</li>
                <li>✓ Visual interface</li>
                <li>✓ Code editing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2>What Shakespeare Inherited from Goose</h2>

      <p>
        Shakespeare carries forward several key concepts from Goose:
      </p>

      <h3>1. Model Context Protocol (MCP)</h3>

      <p>
        Like Goose, Shakespeare uses MCP to connect AI assistants to specialized tools and knowledge. In Shakespeare's case, this includes <a href="/blog/nostrbook-mcp">Nostrbook MCP</a>—a queryable documentation system that gives the AI deep knowledge of Nostr protocols without requiring users to understand technical details.
      </p>

      <h3>2. Provider Independence</h3>

      <p>
        Goose pioneered the concept of letting users choose their own AI provider rather than being locked to a single vendor. Shakespeare extends this with Nostr Service Providers (NSPs)—AI providers that accept Bitcoin Lightning payments and can be discovered through the Nostr network.
      </p>

      <h3>3. Autonomous Task Execution</h3>

      <p>
        Both Goose and Shakespeare can autonomously handle complex tasks: reading and writing files, managing dependencies, running builds, and deploying projects. The user describes what they want, and the AI handles all the implementation details.
      </p>

      <h2>What Shakespeare Added</h2>

      <p>
        While inspired by Goose, Shakespeare introduced several innovations:
      </p>

      <h3>Browser-Native Architecture</h3>

      <p>
        Shakespeare runs entirely in the browser using modern Web APIs (IndexedDB for storage, WebAssembly for performance, Service Workers for offline support). This eliminates installation and works on any device with a web browser.
      </p>

      <h3>Visual Development Environment</h3>

      <p>
        Unlike terminal-based tools, Shakespeare provides a complete visual interface with live preview, syntax-highlighted code editor, file explorer, and real-time deployment. Developers can switch between conversational AI assistance and direct code editing as needed.
      </p>

      <h3>Nostr-Native Identity</h3>

      <p>
        Shakespeare integrates Nostr login directly, allowing users to authenticate with browser extensions like Alby or nos2x. Projects are tied to Nostr identities, enabling social features like sharing templates, discovering community projects, and publishing to decentralized hosting.
      </p>

      <h3>Git Integration</h3>

      <p>
        Shakespeare includes built-in Git support, allowing users to version control their projects, push to GitHub/GitLab, and collaborate with others—all from the browser without installing Git locally.
      </p>

      <h2>The Stacks Connection</h2>

      <p>
        Stacks served as the bridge between Goose's general-purpose AI development and Shakespeare's browser-based Nostr focus. Through Stacks, we learned:
      </p>

      <ul>
        <li><strong>Templates Matter:</strong> Good starter templates dramatically improve AI output quality</li>
        <li><strong>Context is Key:</strong> Providing AI with project-specific documentation (like Nostrbook MCP) leads to better results</li>
        <li><strong>Community Sharing:</strong> Publishing templates as Nostr events creates a network effect where everyone benefits</li>
        <li><strong>Nostr-First Works:</strong> Building specifically for Nostr rather than trying to be general-purpose produces better outcomes</li>
      </ul>

      <p>
        These insights shaped Shakespeare's design. While Stacks proved the concept through a terminal interface, Shakespeare made it accessible to everyone through the browser.
      </p>

      <div className="not-prose my-12">
        <Card className="border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="text-xl">Timeline of Development</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-sm font-semibold text-gray-600 min-w-[120px]">January 2025</div>
                <div className="text-sm text-gray-700">Block releases Goose AI agent framework</div>
              </div>
              <div className="flex gap-4">
                <div className="text-sm font-semibold text-gray-600 min-w-[120px]">May 2025</div>
                <div className="text-sm text-gray-700">Soapbox launches Stacks with Dork agent and MKStack template</div>
              </div>
              <div className="flex gap-4">
                <div className="text-sm font-semibold text-gray-600 min-w-[120px]">July 2025</div>
                <div className="text-sm text-gray-700">Shakespeare beta launches as browser-based development environment</div>
              </div>
              <div className="flex gap-4">
                <div className="text-sm font-semibold text-gray-600 min-w-[120px]">October 2025</div>
                <div className="text-sm text-gray-700">Shakespeare Act 2 adds local file storage, Git integration, and expanded features</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Standing on the Shoulders of Giants</h2>

      <p>
        Shakespeare wouldn't exist without the pioneering work of the Goose team at Block. Their open-source release of Goose under the Apache License 2.0 enabled the entire ecosystem to benefit from their innovations in AI-assisted development.
      </p>

      <p>
        By building on Goose's foundation, adapting it for Nostr through Stacks, and ultimately transforming it into Shakespeare's browser-based environment, we've created a tool that serves a different audience while honoring the original vision: <strong>using AI to give people time back to be their most creative selves</strong>.
      </p>

      <div className="not-prose my-16">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience the Evolution
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            From Goose to Stacks to Shakespeare—try the culmination of AI-assisted Nostr development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a
                href="https://shakespeare.diy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Shakespeare
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="https://getstacks.dev" target="_blank" rel="noopener noreferrer">
                Explore Stacks
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <h2>Related Reading</h2>

      <ul>
        <li><a href="/blog/announcing-shakespeare">Introducing Shakespeare: AI-Powered Website Builder on Nostr</a></li>
        <li><a href="/blog/announcing-shakespeare-act-2">Shakespeare Act 2: Build Freely</a></li>
        <li><a href="/blog/stacks">AI-First Development with Stacks</a></li>
        <li><a href="/blog/announcing-stacks-1.0">Stacks 1.0 Released</a></li>
        <li><a href="/blog/mkstack-tutorial">MKStack: Vibe Coding for Everyone</a></li>
        <li><a href="/blog/nostrbook-mcp">Nostrbook MCP: AI-Readable Nostr Documentation</a></li>
        <li><a href="https://block.xyz/inside/block-open-source-introduces-codename-goose" target="_blank" rel="noopener noreferrer">Block Introduces Codename Goose</a> - Original announcement</li>
      </ul>

      <p className="text-xl text-center font-semibold text-purple-600 mt-12">
        From Goose to Shakespeare: Making AI development accessible to all. 🎭
      </p>
    </article>
  );
}
