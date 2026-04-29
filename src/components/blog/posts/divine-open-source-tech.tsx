import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code, Zap, Globe, GitBranch } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blog/types';

export const meta: BlogPostMeta = {
  "slug": "divine-open-source-tech",
  "title": "The Open Source Technology Behind Divine (MKStack + Nostr)",
  "excerpt": "Divine, the Nostr-powered short-form video app, is built with MKStack — Soapbox's open source framework. Here's the stack that made it possible.",
  "coverImage": "/assets/blog/mkstack_tutorial/mkstack-divine.png",
  "date": "2026-03-25",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/mkstack_tutorial/mkstack-divine.png"
  },
  "featured": true,
  "tags": [
    "mkstack",
    "divine",
    "divine app",
    "open source",
    "shakespeare",
    "development",
    "nostr",
    "nostrify",
    "react",
    "typescript",
    "tailwindcss",
    "fork divine",
    "build nostr apps",
    "decentralized video",
    "how to build on nostr"
  ],
  "keywords": "divine open source, how is divine built, divine source code, fork divine, divine github, mkstack, build nostr apps, nostr development framework, divine tech stack, how to build a nostr video app, divine react typescript, open source video app, decentralized video platform, shakespeare ai development, divine mkstack",
  "faq": [
    { "question": "Is Divine open source?", "answer": "Yes. Divine is fully open source. The web client is at github.com/divinevideo/divine-web and the native mobile app is at github.com/divinevideo/divine-mobile. Anyone can view the code, fork it, or contribute." },
    { "question": "Where can I find Divine's source code?", "answer": "Divine's source code is hosted on GitHub at github.com/divinevideo. The main repositories are divine-web (the web client built on MKStack) and divine-mobile (the native iOS and Android app built with Flutter)." },
    { "question": "What is MKStack?", "answer": "MKStack is Soapbox's open source framework for building Nostr applications. It provides a production-ready template with React 18, TypeScript, TailwindCSS, ShadCN UI, Vite, and Nostrify for Nostr protocol integration — so developers can build Nostr apps in weeks instead of months." },
    { "question": "Can I fork Divine and run my own version?", "answer": "Yes. Because Divine is open source and built on the permissionless Nostr protocol, anyone can fork the codebase and run their own version — with different relays, different features, or a different design. Content published from any Divine fork remains interoperable with the original Divine community via Nostr." },
    { "question": "What is Nostrify?", "answer": "Nostrify is a TypeScript framework for Nostr development used by MKStack. It handles the low-level protocol work — event signing, relay WebSocket connections, subscriptions, NIP implementations — so you don't have to." },
    { "question": "Do I need to know how to code to build a Nostr app?", "answer": "No. With Shakespeare, our AI-powered browser-based development environment, you can build Nostr apps by describing what you want in plain language. Shakespeare comes pre-configured with MKStack and handles the code generation and deployment for you." }
  ]
};

export default function DivineOpenSourceTech() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-12">
        <div className="bg-gradient-to-r from-violet-600 to-purple-800 rounded-3xl p-8 text-white">
          <h1 className="text-4xl font-bold text-white mb-4">
            Building Divine with MKStack
          </h1>
          <p className="text-xl text-violet-100 max-w-3xl">
            How Soapbox's open source technology stack powers a modern, decentralized video platform
          </p>
        </div>
      </div>

      <p>
        <strong><a href="https://divine.video" target="_blank" rel="noopener noreferrer">Divine</a>, the short-form video app widely described as a spiritual successor to Vine, launches today on iOS and Android.</strong> Under the hood, Divine is built on <a href="https://soapbox.pub/mkstack" target="_blank" rel="noopener noreferrer">MKStack</a> — Soapbox's open source framework for rapidly building Nostr applications. Divine is fully open source, so you can view the code, fork it, or build your own video platform on top of it.
      </p>

      <h2>The Challenge: Building a Modern Video Platform</h2>

      <p>
        Creating a short-form video app like Divine traditionally requires months of development, significant infrastructure investment, and ongoing maintenance. You need video storage, user authentication, real-time feeds, social features, and a responsive mobile-first interface—all while ensuring scalability and performance.
      </p>

      <p>
        <strong>What if you could build all of this in weeks instead of months?</strong> That's exactly what happened with Divine, thanks to MKStack—an open source framework designed specifically for building Nostr applications rapidly.
      </p>

      <h2>What is MKStack?</h2>

      <p>
        <strong>MKStack is a production-ready template for building Nostr applications with modern web technologies.</strong> It provides everything you need to create decentralized social apps without starting from scratch: Nostr protocol integration, user authentication, media handling, responsive design, and deployment infrastructure.
      </p>

      <p>
        The entire Divine frontend is built with MKStack, demonstrating that this framework isn't just for simple projects—it's capable of powering real-world applications with thousands of users and demanding performance requirements.
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

      <h2>How Divine Uses MKStack</h2>

      <p>
        Divine is a perfect example of what's possible with MKStack. The app handles:
      </p>

      <ul>
        <li><strong>Video Upload and Playback:</strong> 6-second looping videos with MP4 and GIF support</li>
        <li><strong>Real-Time Feeds:</strong> Home, Discovery, Trending, and Hashtag-based video feeds</li>
        <li><strong>Social Features:</strong> Likes, comments, reposts, follows, and user profiles</li>
        <li><strong>Content Discovery:</strong> Full-text search, hashtag exploration, and trending content</li>
        <li><strong>Progressive Web App:</strong> Installable on mobile devices with native-like experience</li>
      </ul>

      <p>
        All of this was built on top of MKStack's foundation, allowing the Divine team to focus on video-specific features rather than reinventing authentication, relay management, or UI components.
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
        For Divine, this means reliable video event handling, fast feed loading, and seamless integration with the broader Nostr ecosystem—all without writing custom relay communication code.
      </p>

      <h2>Shakespeare: Building with AI Assistance</h2>

      <p>
        While MKStack provides the technical foundation, <strong>Shakespeare</strong> makes it accessible to developers of all skill levels. Shakespeare is an AI-powered development environment that lives entirely in your browser—no installations required.
      </p>

      <h3>How Shakespeare Works with MKStack</h3>

      <p>
        Shakespeare comes pre-configured with MKStack templates, meaning you can start building Nostr apps like Divine through natural language conversations with an AI assistant. Simply describe what you want to build, and Shakespeare generates the code, sets up the infrastructure, and handles deployment.
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

      <h2>Edit Divine in Shakespeare</h2>

      <p>
        Because Divine is built with MKStack and is fully open source, you can fork the project and start customizing it immediately. The entire codebase is available on GitHub, and you can import it directly into Shakespeare for AI-assisted development.
      </p>

      <div className="not-prose my-12">
        <div className="bg-gray-900 rounded-lg p-6 text-white">
          <div className="flex items-center mb-4">
            <GitBranch className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-green-400 font-mono text-sm">Clone Divine</span>
          </div>
          <div className="space-y-3">
            <p className="text-gray-300 text-sm mb-4">
              Fork the Divine repository and customize it to build your own video platform:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100" asChild>
                <a
                  href="https://shakespeare.diy/clone?url=https%3A%2F%2Fgithub.com%2Fdivinevideo%2Fdivine-web.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="https://shakespeare.diy/badge.svg" alt="Edit with Shakespeare" className="h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                <a href="https://github.com/divinevideo/divine-web" target="_blank" rel="noopener noreferrer">
                  View Source Code
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <h3>What You Can Build on the Divine Codebase</h3>

      <ul>
        <li><strong>Custom Video Platform:</strong> Fork Divine to create niche video communities (gaming clips, recipes, tutorials)</li>
        <li><strong>Different Content Types:</strong> Modify the video length constraints or add support for images, audio, or text</li>
        <li><strong>Specialized Features:</strong> Add custom moderation tools, monetization, or community features</li>
        <li><strong>Experimental UX:</strong> Test new interaction patterns, layouts, or discovery algorithms</li>
      </ul>

      <p>
        Because it's built on Nostr, any content created in your fork can still interact with the original Divine community—or you can create a completely separate community on different relays.
      </p>

      <h2>Where to Find Divine's Source Code</h2>

      <p>
        Divine is fully open source and hosted on GitHub under the <a href="https://github.com/divinevideo" target="_blank" rel="noopener noreferrer">divinevideo</a> organization. There are two main repositories:
      </p>

      <ul>
        <li><strong><a href="https://github.com/divinevideo/divine-web" target="_blank" rel="noopener noreferrer">divine-web</a></strong> — The web client, built with MKStack. This is the codebase you can fork and customize with Shakespeare.</li>
        <li><strong><a href="https://github.com/divinevideo/divine-mobile" target="_blank" rel="noopener noreferrer">divine-mobile</a></strong> — The native iOS and Android app, built with Flutter. Where the official App Store / Google Play releases come from.</li>
      </ul>

      <p>
        Both repos are public: you can open issues, submit pull requests, browse the release notes, and install pre-built APKs directly from the GitHub releases page. If you're not a coder, see <a href="/blog/build-without-coding">how to build a Nostr app without coding using Shakespeare</a>.
      </p>

      <h2>Real-World Production Use</h2>

      <p>
        Divine isn't a demo or proof-of-concept — it's a production application, now live on iOS and Android and serving real users with demanding requirements:
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
        Building Divine with MKStack provided several key advantages:
      </p>

      <h3>Speed to Market</h3>
      <p>
        Instead of spending months building authentication, relay management, and UI components from scratch, the Divine team could focus immediately on video-specific features. The core infrastructure was ready on day one.
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
        As new Nostr Improvement Proposals (NIPs) are adopted, MKStack stays current with protocol updates. Divine automatically benefits from these improvements without major refactoring.
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
        The success of Divine demonstrates the power of open source tools designed specifically for Nostr development. As the ecosystem grows, MKStack continues to evolve with:
      </p>

      <ul>
        <li><strong>More Templates:</strong> Pre-built patterns for common Nostr app types (marketplaces, blogs, forums)</li>
        <li><strong>Enhanced Media Support:</strong> Better handling of video, audio, and image content</li>
        <li><strong>Performance Optimizations:</strong> Faster loading, better caching, and improved relay strategies</li>
        <li><strong>Additional NIPs:</strong> Support for new protocol features as they're standardized</li>
      </ul>

      <hr className="my-12 border-gray-200" />

      <h2>Frequently Asked Questions</h2>

      <h3>Is Divine open source?</h3>
      <p>
        Yes. Divine is fully open source. The web client is at <a href="https://github.com/divinevideo/divine-web" target="_blank" rel="noopener noreferrer">github.com/divinevideo/divine-web</a> and the native mobile app is at <a href="https://github.com/divinevideo/divine-mobile" target="_blank" rel="noopener noreferrer">github.com/divinevideo/divine-mobile</a>. Anyone can view the code, fork it, or contribute.
      </p>

      <h3>Where can I find Divine's source code?</h3>
      <p>
        Divine's source code is hosted on GitHub at <a href="https://github.com/divinevideo" target="_blank" rel="noopener noreferrer">github.com/divinevideo</a>. The main repositories are <strong>divine-web</strong> (the web client built on MKStack) and <strong>divine-mobile</strong> (the native iOS and Android app built with Flutter).
      </p>

      <h3>What is MKStack?</h3>
      <p>
        <a href="https://soapbox.pub/mkstack" target="_blank" rel="noopener noreferrer">MKStack</a> is Soapbox's open source framework for building Nostr applications. It provides a production-ready template with React 18, TypeScript, TailwindCSS, ShadCN UI, Vite, and Nostrify for Nostr protocol integration — so developers can build Nostr apps in weeks instead of months.
      </p>

      <h3>Can I fork Divine and run my own version?</h3>
      <p>
        Yes. Because Divine is open source and built on the permissionless Nostr protocol, anyone can fork the codebase and run their own version — with different relays, different features, or a different design. Content published from any Divine fork remains interoperable with the original Divine community via Nostr.
      </p>

      <h3>What is Nostrify?</h3>
      <p>
        <a href="https://nostrify.dev" target="_blank" rel="noopener noreferrer">Nostrify</a> is a TypeScript framework for Nostr development used by MKStack. It handles the low-level protocol work — event signing, relay WebSocket connections, subscriptions, NIP implementations — so you don't have to.
      </p>

      <h3>Do I need to know how to code to build a Nostr app?</h3>
      <p>
        No. With <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">Shakespeare</a>, our AI-powered browser-based development environment, you can build Nostr apps by describing what you want in plain language. Shakespeare comes pre-configured with MKStack and handles the code generation and deployment for you. See <a href="/blog/build-without-coding">how to build a Nostr app without coding</a>.
      </p>

      <h2>Join the Movement</h2>

      <p>
        Divine shows what's possible when modern web technology meets decentralized protocols. Whether you're building a video platform, social network, marketplace, or something entirely new—MKStack provides the foundation to make it happen quickly and reliably.
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
            Explore the Divine source code, learn from the MKStack tutorial, or start your own project with Shakespeare.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-violet-700 hover:bg-violet-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a
                href="https://github.com/divinevideo/divine-web"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code className="w-5 h-5 mr-2" />
                View Divine Source
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
        <li><a href="/blog/how-to-login-divine-without-invite-code">How to Log In to Divine Without an Invite Code</a></li>
        <li><a href="/blog/what-is-nostr-divine">What is Nostr? The Protocol Powering Divine</a></li>
        <li><a href="/blog/mkstack-tutorial">MKStack Tutorial: Vibe Coding for Everyone</a></li>
        <li><a href="/blog/announcing-shakespeare-act-2">Shakespeare Act 2: Build Freely</a></li>
        <li><a href="/blog/nostr101">Nostr 101: A Beginner's Guide</a></li>
        <li><a href="https://soapbox.pub/mkstack" target="_blank" rel="noopener noreferrer">MKStack Documentation</a></li>
        <li><a href="https://nostrify.dev" target="_blank" rel="noopener noreferrer">Nostrify Framework</a></li>
        <li><a href="https://divine.video" target="_blank" rel="noopener noreferrer">Try Divine</a></li>
      </ul>
    </article>
  );
}
