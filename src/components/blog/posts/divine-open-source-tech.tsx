import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, Zap, Globe, GitBranch } from 'lucide-react';

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
  "slug": "divine-open-source-tech",
  "title": "The Open Source Technology Behind diVine",
  "excerpt": "How MKStack and Shakespeare enable rapid development of production-ready Nostr applications like diVine",
  "coverImage": "/assets/blog/mkstack_tutorial/mkstack-tutorial-cover.png",
  "date": "2025-11-20",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/mkstack_tutorial/mkstack-tutorial-cover.png"
  },
  "tags": ["mkstack", "divine", "open-source", "shakespeare", "development"]
};

export default function DivineOpenSourceTech() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-12">
        <div className="bg-gradient-to-r from-violet-600 to-purple-800 rounded-3xl p-8 text-white">
          <h1 className="text-4xl font-bold text-white mb-4">
            Building diVine with MKStack
          </h1>
          <p className="text-xl text-violet-100 max-w-3xl">
            How Soapbox's open source technology stack powers a modern, decentralized video platform
          </p>
        </div>
      </div>

      <h2>The Challenge: Building a Modern Video Platform</h2>

      <p>
        Creating a short-form video app like diVine traditionally requires months of development, significant infrastructure investment, and ongoing maintenance. You need video storage, user authentication, real-time feeds, social features, and a responsive mobile-first interface—all while ensuring scalability and performance.
      </p>

      <p>
        <strong>What if you could build all of this in weeks instead of months?</strong> That's exactly what happened with diVine, thanks to MKStack—an open source framework designed specifically for building Nostr applications rapidly.
      </p>

      <h2>What is MKStack?</h2>

      <p>
        <strong>MKStack is a production-ready template for building Nostr applications with modern web technologies.</strong> It provides everything you need to create decentralized social apps without starting from scratch: Nostr protocol integration, user authentication, media handling, responsive design, and deployment infrastructure.
      </p>

      <p>
        The entire diVine frontend is built with MKStack, demonstrating that this framework isn't just for simple projects—it's capable of powering real-world applications with thousands of users and demanding performance requirements.
      </p>

      <div className="not-prose my-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          MKStack Technical Stack
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50">
            <CardHeader>
              <CardTitle className="text-orange-800 text-lg flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Nostr Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="space-y-1 text-sm">
                <li>• Nostrify for protocol handling</li>
                <li>• Built-in relay management</li>
                <li>• Event publishing and querying</li>
                <li>• NIP-19 identifier support</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50">
            <CardHeader>
              <CardTitle className="text-purple-800 text-lg flex items-center">
                <Code className="w-5 h-5 mr-2" />
                Modern Design System
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="space-y-1 text-sm">
                <li>• React 18 with TypeScript</li>
                <li>• ShadCN UI components</li>
                <li>• TailwindCSS styling</li>
                <li>• Responsive mobile-first design</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50">
            <CardHeader>
              <CardTitle className="text-blue-800 text-lg flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Performance Optimized
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="space-y-1 text-sm">
                <li>• Vite for fast builds</li>
                <li>• React Query for caching</li>
                <li>• Lazy loading and code splitting</li>
                <li>• Progressive web app support</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100/50">
            <CardHeader>
              <CardTitle className="text-green-800 text-lg flex items-center">
                <GitBranch className="w-5 h-5 mr-2" />
                Developer Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="space-y-1 text-sm">
                <li>• TypeScript for type safety</li>
                <li>• ESLint and testing built-in</li>
                <li>• Git integration ready</li>
                <li>• One-command deployment</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>How diVine Uses MKStack</h2>

      <p>
        diVine is a perfect example of what's possible with MKStack. The app handles:
      </p>

      <ul>
        <li><strong>Video Upload and Playback:</strong> 6-second looping videos with MP4 and GIF support</li>
        <li><strong>Real-Time Feeds:</strong> Home, Discovery, Trending, and Hashtag-based video feeds</li>
        <li><strong>Social Features:</strong> Likes, comments, reposts, follows, and user profiles</li>
        <li><strong>Content Discovery:</strong> Full-text search, hashtag exploration, and trending content</li>
        <li><strong>Progressive Web App:</strong> Installable on mobile devices with native-like experience</li>
      </ul>

      <p>
        All of this was built on top of MKStack's foundation, allowing the diVine team to focus on video-specific features rather than reinventing authentication, relay management, or UI components.
      </p>

      <h2>The Role of Nostrify</h2>

      <p>
        Behind the scenes, MKStack uses <a href="https://nostrify.dev" target="_blank" rel="noopener noreferrer">Nostrify</a>—a powerful TypeScript framework for Nostr development. Nostrify handles all the low-level protocol details:
      </p>

      <ul>
        <li><strong>Event Signing and Verification:</strong> Cryptographic operations for secure communication</li>
        <li><strong>Relay Communication:</strong> WebSocket connections, subscriptions, and event publishing</li>
        <li><strong>Query Optimization:</strong> Efficient filtering and caching of Nostr events</li>
        <li><strong>NIP Implementation:</strong> Support for standard Nostr Improvement Proposals</li>
      </ul>

      <p>
        For diVine, this means reliable video event handling, fast feed loading, and seamless integration with the broader Nostr ecosystem—all without writing custom relay communication code.
      </p>

      <h2>Shakespeare: Building with AI Assistance</h2>

      <p>
        While MKStack provides the technical foundation, <strong>Shakespeare</strong> makes it accessible to developers of all skill levels. Shakespeare is an AI-powered development environment that lives entirely in your browser—no installations required.
      </p>

      <h3>How Shakespeare Works with MKStack</h3>

      <p>
        Shakespeare comes pre-configured with MKStack templates, meaning you can start building Nostr apps like diVine through natural language conversations with an AI assistant. Simply describe what you want to build, and Shakespeare generates the code, sets up the infrastructure, and handles deployment.
      </p>

      <div className="not-prose my-12">
        <Card className="border-2 border-violet-200 bg-gradient-to-br from-violet-50 to-violet-100/50">
          <CardHeader>
            <CardTitle className="text-2xl text-violet-900">
              Build a Nostr Video App in Minutes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              With Shakespeare and MKStack, you can prototype and deploy Nostr applications faster than ever:
            </p>
            <ol className="text-gray-700 space-y-2">
              <li><strong>1. Describe Your Idea:</strong> "Build a video sharing app with hashtag feeds"</li>
              <li><strong>2. AI Generates Code:</strong> Shakespeare creates components, hooks, and pages using MKStack</li>
              <li><strong>3. Customize Freely:</strong> Edit code directly or continue refining with AI</li>
              <li><strong>4. Deploy Instantly:</strong> One command publishes your app to Nostr and decentralized hosting</li>
            </ol>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white" asChild>
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  <Zap className="w-5 h-5 mr-2" />
                  Try Shakespeare
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/blog/mkstack-tutorial">
                  <Code className="w-5 h-5 mr-2" />
                  MKStack Tutorial
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Edit diVine in Shakespeare</h2>

      <p>
        Because diVine is built with MKStack and is fully open source, you can fork the project and start customizing it immediately. The entire codebase is available on GitLab, and you can import it directly into Shakespeare for AI-assisted development.
      </p>

      <div className="not-prose my-12">
        <div className="bg-gray-900 rounded-lg p-6 text-white">
          <div className="flex items-center mb-4">
            <GitBranch className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-green-400 font-mono text-sm">Clone diVine</span>
          </div>
          <div className="space-y-3">
            <p className="text-gray-300 text-sm mb-4">
              Fork the diVine repository and customize it to build your own video platform:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                <a 
                  href="https://shakespeare.diy/clone?url=https%3A%2F%2Fgitlab.com%2Fdivine-video%2Fdivine-web.git" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src="https://shakespeare.diy/badge.svg" alt="Edit with Shakespeare" className="h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                <a href="https://gitlab.com/divine-video/divine-web" target="_blank" rel="noopener noreferrer">
                  View Source Code
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <h3>What You Can Build on the diVine Codebase</h3>

      <ul>
        <li><strong>Custom Video Platform:</strong> Fork diVine to create niche video communities (gaming clips, recipes, tutorials)</li>
        <li><strong>Different Content Types:</strong> Modify the video length constraints or add support for images, audio, or text</li>
        <li><strong>Specialized Features:</strong> Add custom moderation tools, monetization, or community features</li>
        <li><strong>Experimental UX:</strong> Test new interaction patterns, layouts, or discovery algorithms</li>
      </ul>

      <p>
        Because it's built on Nostr, any content created in your fork can still interact with the original diVine community—or you can create a completely separate community on different relays.
      </p>

      <h2>Real-World Production Use</h2>

      <p>
        diVine isn't a demo or proof-of-concept—it's a production application serving real users with demanding requirements:
      </p>

      <ul>
        <li><strong>Video Processing:</strong> Handles upload, transcoding, and streaming of thousands of videos</li>
        <li><strong>Real-Time Performance:</strong> Fast feed loading and smooth video playback on mobile devices</li>
        <li><strong>Decentralized Architecture:</strong> Works with multiple Nostr relays including the specialized relay.divine.video</li>
        <li><strong>Progressive Web App:</strong> Installable on iOS and Android with offline support</li>
      </ul>

      <p>
        This demonstrates that MKStack isn't just for quick prototypes—it's a viable foundation for serious applications that need to scale and perform.
      </p>

      <h2>The MKStack Advantage</h2>

      <p>
        Building diVine with MKStack provided several key advantages:
      </p>

      <h3>Speed to Market</h3>
      <p>
        Instead of spending months building authentication, relay management, and UI components from scratch, the diVine team could focus immediately on video-specific features. The core infrastructure was ready on day one.
      </p>

      <h3>Proven Architecture</h3>
      <p>
        MKStack is battle-tested across multiple Soapbox projects including Ditto, Bookstr, and other community platforms. The patterns and practices are proven to work at scale.
      </p>

      <h3>Community Support</h3>
      <p>
        Because MKStack is open source and well-documented, developers can learn from other projects, contribute improvements, and get help from the community. The entire Nostr ecosystem benefits from shared tools.
      </p>

      <h3>Future-Proof</h3>
      <p>
        As new Nostr Improvement Proposals (NIPs) are adopted, MKStack stays current with protocol updates. diVine automatically benefits from these improvements without major refactoring.
      </p>

      <h2>Getting Started with MKStack</h2>

      <p>
        Ready to build your own Nostr application? MKStack makes it easy to get started:
      </p>

      <div className="not-prose my-12">
        <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Two Ways to Start</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                <Badge className="mb-2">Beginner-Friendly</Badge>
                <br />
                Use Shakespeare (Browser-Based)
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                No installation required. Build with AI assistance directly in your browser.
              </p>
              <Button asChild>
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  Open Shakespeare
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                <Badge className="mb-2">Advanced</Badge>
                <br />
                Clone the Repository
              </h4>
              <p className="text-gray-700 text-sm mb-3">
                Full control with local development using Git and your favorite editor.
              </p>
              <Button variant="outline" asChild>
                <a href="https://soapbox.pub/mkstack" target="_blank" rel="noopener noreferrer">
                  MKStack Documentation
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <h2>What's Next for MKStack?</h2>

      <p>
        The success of diVine demonstrates the power of open source tools designed specifically for Nostr development. As the ecosystem grows, MKStack continues to evolve with:
      </p>

      <ul>
        <li><strong>More Templates:</strong> Pre-built patterns for common Nostr app types (marketplaces, blogs, forums)</li>
        <li><strong>Enhanced Media Support:</strong> Better handling of video, audio, and image content</li>
        <li><strong>Performance Optimizations:</strong> Faster loading, better caching, and improved relay strategies</li>
        <li><strong>Additional NIPs:</strong> Support for new protocol features as they're standardized</li>
      </ul>

      <h2>Join the Movement</h2>

      <p>
        diVine shows what's possible when modern web technology meets decentralized protocols. Whether you're building a video platform, social network, marketplace, or something entirely new—MKStack provides the foundation to make it happen quickly and reliably.
      </p>

      <p>
        <strong>
          The tools are open source, the protocol is permissionless, and the community is ready to help. What will you build?
        </strong>
      </p>

      <div className="not-prose my-16">
        <div className="bg-gradient-to-r from-violet-600 to-purple-800 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Building Today
          </h2>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Explore the diVine source code, learn from the MKStack tutorial, or start your own project with Shakespeare.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-violet-700 hover:bg-violet-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a
                href="https://gitlab.com/divine-video/divine-web"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code className="w-5 h-5 mr-2" />
                View diVine Source
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-violet-700 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="/blog/mkstack-tutorial">
                Read MKStack Tutorial
              </a>
            </Button>
          </div>
        </div>
      </div>

      <h2>Additional Resources</h2>

      <ul>
        <li><a href="/blog/mkstack-tutorial">MKStack Tutorial: Vibe Coding for Everyone</a></li>
        <li><a href="/blog/announcing-shakespeare-act-2">Shakespeare Act 2: Build Freely</a></li>
        <li><a href="/blog/nostr101">Nostr 101: A Beginner's Guide</a></li>
        <li><a href="https://soapbox.pub/mkstack" target="_blank" rel="noopener noreferrer">MKStack Documentation</a></li>
        <li><a href="https://nostrify.dev" target="_blank" rel="noopener noreferrer">Nostrify Framework</a></li>
        <li><a href="https://divine.video" target="_blank" rel="noopener noreferrer">Try diVine</a></li>
      </ul>
    </article>
  );
}
