import React from 'react';
import { ShakespeareMailchimpForm } from '../../ShakespeareMailchimpForm';
import { Card, CardContent } from '../../ui/card';
import { Badge } from '../../ui/badge';
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
}

export const meta: BlogPostMeta = {
  "slug": "announcing-shakespeare",
  "title": "🎭 Introducing Shakespeare: AI-Powered Website Builder on Nostr",
  "excerpt": "Shakespeare brings the power of MKStack to everyone with a AI-powered website builder that runs entirely on the Nostr protocol. Build professional websites through natural conversation with AI assistants, all while maintaining complete control over your data and identity.",
  "coverImage": "/assets/blog/announcing-shakespeare/shakespeare-blog-cover.png",
  "date": "2025-07-10",
  "author": {
    "name": "M.K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-shakespeare/shakespeare-blog-cover.png"
  },
  "featured": true
};

export default function AnnouncingShakespeare() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            🎭 Shakespeare
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            🤖 AI-Powered
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            🗽 Truly Free
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            ⚡ Now Available
          </Badge>
        </div>
      </div>

      <p className="text-xl leading-relaxed text-muted-foreground mb-8">
        We're thrilled to announce <strong>Shakespeare</strong> — an AI-powered website builder that runs entirely on the Nostr protocol, bringing the power of MKStack to everyone through natural conversation.
      </p>


      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-purple-200 dark:border-purple-800">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">
                🚀 Try Shakespeare Now
              </h3>
              <p className="text-muted-foreground mb-4">
                Visit our website to start building with Shakespeare today.
              </p>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  Visit shakespeare.diy →
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                📧 Join the Community
              </h3>
              <p className="text-muted-foreground mb-4">
                Stay updated with the latest features and announcements.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300"
              >
                <a href="#community-form">
                  Join Community Below ↓
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="not-prose my-8">
        <Card className="border-dashed border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              🎬 Watch the Tutorial
            </h3>
            <p className="text-muted-foreground mb-4">
              Watch Shakespeare build a complete website with Derek Ross
            </p>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/pK9gHjQr7nc?si=aoT84KgpSJ3iruZw"
                title="Shakespeare Tutorial with Derek Ross"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>What is Shakespeare?</h2>

      <p>
        <strong>Shakespeare is a web interface where you can build websites through conversation with AI assistants. It combines the power of AI with the freedom of the <a href="/blog/nostr101" className="text-blue-600 hover:underline">Nostr protocol</a>, allowing you to create dynamic web apps without any coding or technical expertise.</strong>
      </p>

      <p>
        Unlike similar proprietary and centralized services like <strong>Lovable</strong>, Shakespeare offers true freedom through user choice. While other website builders lock you into their platforms, with Shakespeare you can choose from multiple <a href="/blog/understanding-nostr-service-providers" className="text-blue-600 hover:underline">Nostr Service Providers (NSPs)</a> to power your AI conversations. This means you can select the AI capabilities that best fit your needs, including the available tools and the price you want to pay.
      </p>

      <p>
        This combination of AI web building + decentralization is completely unique, and only possible on Nostr!
      </p>

      <h2>Building Nostr Apps has Never Been Easier</h2>

      <h3>Conversational AI Building</h3>
      <p>
        Shakespeare's natural language interface understands context and remembers your project history. Choose from multiple Nostr Service Providers (NSPs), each offering unique AI capabilities and specializations. Whether you're building a simple landing page or a complex web application, just describe what you want and watch it come to life.
      </p>

      <h3>Live Preview System</h3>
      <p>
        Desktop users enjoy a side-by-side view with the chat interface on one side and a live preview of their website on the other. Every change appears instantly — no refreshing, no waiting for builds. Mobile users get a seamless experience with easy switching between chat and preview modes.
      </p>

      <img
        src="/assets/blog/announcing-shakespeare/shakespeare-example-project.png"
        alt="Shakespeare Example Project"
        className="rounded-lg shadow-md"
      />

      <h3>Instant Deployment</h3>
      <p>
        Your websites are automatically deployed and accessible via public URLs the moment they're created. No setup required, no configuration headaches. Want the source code? Download the complete project as a ZIP file with one click.
      </p>

      <h3>True Freedom from Big Tech</h3>
      <p>
        Shakespeare breaks free from the constraints of centralized, proprietary website builders that lock you into their ecosystems:
      </p>
      <ul>
        <li><strong>No Platform Lock-in:</strong> Your websites and data belong to you, not to a corporation</li>
        <li><strong>Censorship Resistance:</strong> No single company or government can shut down your projects or restrict your creativity</li>
        <li><strong>Self-Sovereign Identity:</strong> You control your identity through Nostr keys, not corporate accounts</li>
        <li><strong>Open Source:</strong> Fully auditable codebase under AGPL 3.0 license — no proprietary black boxes</li>
      </ul>

      <h3>Transparent Pay-Per-Use</h3>
      <p>
        No subscriptions, no hidden fees. Pay only for actual AI generation time with real-time cost tracking. Pay <a href="/blog/understanding-nostr-service-providers" className="text-blue-600 hover:underline">Nostr Service Providers (NSPs)</a> directly with USD via Stripe or Bitcoin Lightning. Shakespeare only takes a cut if you use our paid NSP: MKStack + Claude Sonnet 4.
      </p>

      <h2>How Shakespeare Works</h2>

      <div className="not-prose my-8">
        <div className="space-y-6">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 text-blue-600 dark:text-blue-400 font-bold text-sm min-w-[2rem] text-center">1</div>
                <div>
                  <h3 className="font-semibold mb-2">🗽 Connect with Freedom</h3>
                  <p className="text-sm text-muted-foreground">
                    Use any Nostr browser extension (Alby, nos2x, Flamingo) as your login. No corporate accounts or email required — your decentralized identity gives you true ownership and freedom.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 text-green-600 dark:text-green-400 font-bold text-sm min-w-[2rem] text-center">2</div>
                <div>
                  <h3 className="font-semibold mb-2">🤖 Choose Your AI Assistant</h3>
                  <p className="text-sm text-muted-foreground">
                    Browse available <a href="/blog/understanding-nostr-service-providers" className="text-blue-600 hover:underline">Nostr Service Providers (NSPs)</a>, each offering different AI capabilities, specializations, and pricing. Choose freely from a competitive marketplace instead of being locked into one vendor.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 text-purple-600 dark:text-purple-400 font-bold text-sm min-w-[2rem] text-center">3</div>
                <div>
                  <h3 className="font-semibold mb-2">💬 Start Building</h3>
                  <p className="text-sm text-muted-foreground">
                    Describe your website in natural language. The AI begins working immediately, showing progress in real-time through the live preview window.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-2 text-orange-600 dark:text-orange-400 font-bold text-sm min-w-[2rem] text-center">4</div>
                <div>
                  <h3 className="font-semibold mb-2">🔄 Iterate & Refine</h3>
                  <p className="text-sm text-muted-foreground">
                    Chat with the AI to make changes: "Add a contact form," "Make the header blue," or "Create a pricing section." See changes instantly in the preview.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 dark:bg-red-900 rounded-full p-2 text-red-600 dark:text-red-400 font-bold text-sm min-w-[2rem] text-center">5</div>
                <div>
                  <h3 className="font-semibold mb-2">🚀 Deploy & Share</h3>
                  <p className="text-sm text-muted-foreground">
                    Your website is automatically deployed with a public URL. Download the complete source code as a ZIP file or share your live website immediately.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>


      <h2>What You Can Build</h2>

      <p>
        Shakespeare's AI can create virtually any type of website or web application. To see real examples of what's possible with our technology stack, check out our showcase of live projects and applications.
      </p>

      <div className="not-prose my-8">
        <Card className="border-purple-200 dark:border-purple-800">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">
              🎨 View Live Examples
            </h3>
            <p className="text-muted-foreground mb-4">
              Explore our showcase of real websites and applications built with our technology stack.
            </p>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <a href="/showcase" rel="noopener noreferrer">
                Visit Showcase →
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <h3>Example Prompts to Try</h3>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
            <CardContent className="p-4">
              <p className="text-sm italic">
                "Build a modern portfolio website for a web developer with project showcases, an about section, and a contact form. Use a dark theme with blue accents."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
            <CardContent className="p-4">
              <p className="text-sm italic">
                "Create a Twitter-like social media app for Nostr with user profiles, real-time feeds, and the ability to post notes and images."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
            <CardContent className="p-4">
              <p className="text-sm italic">
                "Design a travel blog with comments, and the ability to like and share posts."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>Import & Collaborate with Git Repositories</h2>

      <p>
        Shakespeare isn't just for building new projects from scratch — it's also a powerful tool for importing, editing, and collaborating on existing projects. Whether you want to enhance your own repositories or contribute to open source projects, Shakespeare makes it incredibly easy.
      </p>

      <h3>Import Any GitHub or GitLab Project</h3>

      <p>
        Simply provide a GitHub or GitLab clone URL, and Shakespeare will import the entire project into your workspace. The AI assistant can then help you understand the codebase, make improvements, add features, or fix bugs — all through natural conversation.
      </p>
{/*
      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
            <CardContent className="p-4">
              <p className="text-sm italic">
                "Import https://github.com/username/my-portfolio and help me add a dark mode toggle to the navigation."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
            <CardContent className="p-4">
              <p className="text-sm italic">
                "Load https://gitlab.com/project/awesome-app and add a new user authentication system with login and signup forms."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
            <CardContent className="p-4">
              <p className="text-sm italic">
                "Import this React component library and help me create a new date picker component that matches the existing design system."
              </p>
            </CardContent>
          </Card>
        </div>
      </div> */}

      <div className="not-prose my-8">
        <div className="space-y-6">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 text-green-600 dark:text-green-400 font-bold text-sm min-w-[2rem] text-center">1</div>
                <div>
                  <h4 className="font-semibold mb-2">📥 Import Project</h4>
                  <p className="text-sm text-muted-foreground">
                    Paste any GitHub or GitLab clone URL and Shakespeare imports the entire project, understanding its structure and dependencies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 text-blue-600 dark:text-blue-400 font-bold text-sm min-w-[2rem] text-center">2</div>
                <div>
                  <h4 className="font-semibold mb-2">🤖 AI-Assisted Editing</h4>
                  <p className="text-sm text-muted-foreground">
                    Chat with the AI to understand the codebase, add features, fix bugs, or refactor code. The AI maintains context about the project's architecture and coding patterns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 text-purple-600 dark:text-purple-400 font-bold text-sm min-w-[2rem] text-center">3</div>
                <div>
                  <h4 className="font-semibold mb-2">🔄 Live Testing</h4>
                  <p className="text-sm text-muted-foreground">
                    See your changes in real-time through the live preview. Test functionality, verify fixes, and iterate quickly without leaving the browser.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
{/*
          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-2 text-orange-600 dark:text-orange-400 font-bold text-sm min-w-[2rem] text-center">4</div>
                <div>
                  <h4 className="font-semibold mb-2">📤 Submit Pull Request</h4>
                  <p className="text-sm text-muted-foreground">
                    Shakespeare generates a clean pull request with detailed commit messages, change summaries, and documentation — ready for maintainer review.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>

      <h3>Perfect for Open Source Contributions</h3>

      <p>
        Shakespeare democratizes open source contribution by removing technical barriers. Whether you're a seasoned developer or someone with great ideas but limited coding experience, you can now meaningfully contribute to projects you care about.
      </p>
{/*
      <div className="not-prose my-6">
        <Card className="border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">🌟 Contribution Examples</h4>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>• <strong>Bug Fixes:</strong> "This button doesn't work on mobile — can you fix the responsive layout?"</li>
              <li>• <strong>Feature Additions:</strong> "Add a search function to this documentation site"</li>
              <li>• <strong>UI Improvements:</strong> "Make this form more accessible with proper ARIA labels"</li>
              <li>• <strong>Performance Optimizations:</strong> "Optimize these images and add lazy loading"</li>
              <li>• <strong>Documentation:</strong> "Add code examples to this README file"</li>
            </ul>
          </CardContent>
        </Card>
      </div> */}

      <h2>Powered by Nostr Service Providers (NSPs)</h2>

      <p>
        Shakespeare is powered by <strong>Nostr Service Providers (NSPs)</strong> — a revolutionary new way to access AI tools and services through the decentralized Nostr protocol. NSPs were created specifically for Shakespeare and represent a breakthrough in decentralized AI services.
      </p>

      <p>
        Unlike traditional AI services that lock you into a single provider, Shakespeare lets you choose from multiple NSPs, each offering different AI models, capabilities, and pricing. This means you get the freedom to select the AI provider that best fits your specific needs and budget.
      </p>


      <img
        src="/assets/blog/announcing-shakespeare/choose-nsp.png"
        alt="Shakespeare Example Project"
        className="rounded-lg shadow-md"
      />

      <p>
        The <strong>MKStack NSP</strong> brings the full power of our <a href="/tools/mkstack" className="text-blue-600 hover:underline">MKStack framework</a> directly to your browser through Shakespeare, providing comprehensive Nostr development capabilities with 50+ NIPs, React components, and instant deployment.
      </p>

      <div className="not-prose my-6">
        <Card className="border-purple-200 dark:border-purple-800">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">🚀 Free Gemini Flash NSP</h4>
            <p className="text-muted-foreground mb-4">
              We're currently offering a <strong>free Gemini Flash NSP</strong> so you can try Shakespeare without adding credits! This gives you access to Google's Gemini Flash model at no cost.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300"
            >
              <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                Try Free Gemini Flash NSP →
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-6">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">🔍 Learn More About NSPs</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Discover how to choose the right NSP for your projects and learn how developers can create their own NSPs.
            </p>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <a href="/blog/understanding-nostr-service-providers">
                📚 Complete Guide to NSPs →
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <h2>The Future of Web Development</h2>

      <p>
        Shakespeare represents a fundamental shift in how websites are built. We're moving from a world where creating websites requires technical expertise to one where anyone can build professional web experiences through natural conversation.
      </p>

      <p>
        The combination of AI assistance and Nostr's decentralized infrastructure creates a new paradigm where:
      </p>

      <ul>
        <li><strong>Creativity is Democratized:</strong> Anyone can build professional websites regardless of technical skill</li>
        <li><strong>Development is Conversational:</strong> Building websites becomes as easy as describing what you want</li>
        <li><strong>Ownership is Preserved:</strong> You control your data, identity, and creations</li>
        <li><strong>Innovation is Accelerated:</strong> Rapid prototyping and iteration through AI collaboration</li>
      </ul>

      {/* <div className="not-prose my-8">
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">📸 Future Vision Screenshot</h4>
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-2">🔮</div>
                <p className="text-sm text-muted-foreground">The future of web development</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div> */}

      <h2>🎭 Get Started with Shakespeare</h2>

      <p>
        Shakespeare is now available for everyone to use. Start building your next website with AI-powered assistance today.
      </p>


      <div className="not-prose my-12" id="community-form">
        <ShakespeareMailchimpForm />
      </div>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-purple-200 dark:border-purple-800">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Build the Future?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of creators, developers, and visionaries who are already building with Shakespeare.
            </p>
            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3"
              >
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  🚀 Start Building at shakespeare.diy
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Or join our community above for updates and support
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <p className="text-sm text-muted-foreground text-center">
        <em>
          Shakespeare is developed by the team behind Soapbox, Ditto, and Nostrify.
          Follow our journey on Nostr and stay updated with the latest developments in decentralized web technology.
        </em>
      </p>
    </article>
  );
}