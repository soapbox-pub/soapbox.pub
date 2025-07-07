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
  "excerpt": "Shakespeare brings the power of MKStack to everyone with a revolutionary AI-powered website builder that runs entirely on the Nostr protocol. Build professional websites through natural conversation with AI assistants, all while maintaining complete control over your data and identity.",
  "coverImage": "/assets/blog/announcing-shakespeare/shakespeare-cover.svg",
  "date": "2025-07-06",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-shakespeare/shakespeare-cover.svg"
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
            ⚡ Beta Launch
          </Badge>
        </div>
      </div>

      <p className="text-xl leading-relaxed text-muted-foreground mb-8">
        Today marks a revolutionary moment in web development. We're thrilled to announce <strong>Shakespeare</strong> — an AI-powered website builder that runs entirely on the Nostr protocol, bringing the power of MKStack to everyone through natural conversation.
      </p>


      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-purple-200 dark:border-purple-800">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">
                🚀 Try Shakespeare Now
              </h3>
              <p className="text-muted-foreground mb-4">
                Visit our website to explore Shakespeare and request beta access directly.
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
                📧 Join the Waitlist
              </h3>
              <p className="text-muted-foreground mb-4">
                Get notified when your beta invite is ready and receive updates.
              </p>
              <Button 
                asChild 
                variant="outline"
                className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300"
              >
                <a href="#waitlist-form">
                  Join Waitlist Below ↓
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
              🎬 Demo Video Coming Soon
            </h3>
            <p className="text-muted-foreground mb-4">
              Watch Shakespeare build a complete website in real-time through AI conversation
            </p>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="/assets/blog/announcing-shakespeare/demo-video-placeholder.svg" 
                alt="Shakespeare Demo Video Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>What is Shakespeare?</h2>
      
      <p>
        Shakespeare represents a fundamental shift in how websites are built. Instead of wrestling with complex website builders or learning to code, you simply describe what you want in plain English, and Shakespeare's AI assistants bring your vision to life in real-time.
      </p>

      <p>
        Built entirely on the Nostr protocol, Shakespeare offers true freedom from the limitations of centralized, proprietary systems like Lovable. Unlike traditional website builders that lock you into their platforms, Shakespeare is decentralized, censorship-resistant, and puts you in complete control of your data and creations.
      </p>

      <div className="not-prose my-8">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">
              💡 Example Conversation
            </h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border-l-4 border-blue-500">
                <strong>You:</strong> "Build me a modern portfolio website for a web developer with project showcases, an about section, and a contact form. Use a dark theme with blue accents."
              </div>
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg border-l-4 border-blue-600">
                <strong>Shakespeare AI:</strong> "I'll create a sleek portfolio site for you! Starting with a dark theme and blue accents. Let me build the header, hero section, and project showcase..."
              </div>
              <div className="text-center text-xs text-muted-foreground">
                ⚡ Watch your website appear in real-time as the AI works
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Revolutionary Features</h2>

      <h3>Conversational AI Building</h3>
      <p>
        Shakespeare's natural language interface understands context and remembers your project history. Choose from multiple Nostr Service Providers (NSPs), each offering unique AI capabilities and specializations. Whether you're building a simple landing page or a complex web application, just describe what you want and watch it come to life.
      </p>

      <div className="not-prose my-6">
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">📸 Screenshot Placeholder</h4>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="/assets/blog/announcing-shakespeare/chat-interface.svg" 
                alt="Shakespeare Chat Interface"
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <h3>Live Preview System</h3>
      <p>
        Desktop users enjoy a side-by-side view with the chat interface on one side and a live preview of their website on the other. Every change appears instantly — no refreshing, no waiting for builds. Mobile users get a seamless experience with easy switching between chat and preview modes.
      </p>

      <div className="not-prose my-6">
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">📸 Live Preview Screenshot</h4>
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src="/assets/blog/announcing-shakespeare/live-preview.svg" 
                alt="Shakespeare Live Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <h3>Instant Deployment</h3>
      <p>
        Your websites are automatically deployed and accessible via public URLs the moment they're created. No setup required, no configuration headaches. Want the source code? Download the complete project as a ZIP file with one click.
      </p>

      <h3>True Freedom from Big Tech</h3>
      <p>
        Shakespeare breaks free from the constraints of centralized, proprietary website builders that lock you into their ecosystems:
      </p>
      <ul>
        <li><strong>No Platform Lock-in:</strong> Your websites and data belong to you, not a corporation</li>
        <li><strong>Censorship Resistance:</strong> No single company can shut down your projects or restrict your creativity</li>
        <li><strong>Self-Sovereign Identity:</strong> You control your identity through Nostr keys, not corporate accounts</li>
        <li><strong>Open Source:</strong> Fully auditable codebase under AGPL 3.0 license — no proprietary black boxes</li>
      </ul>

      <h3>Transparent Pay-Per-Use</h3>
      <p>
        No subscriptions, no hidden fees. Pay only for actual AI generation time with real-time cost tracking. Simple sites typically cost $2-5, complex applications $10-25, and small changes just $0.50-2. Pay with USD via Stripe or Bitcoin Lightning.
      </p>

      <div className="not-prose my-8">
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3 text-green-900 dark:text-green-100">
              💸 Pricing Examples
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="font-semibold text-green-600 dark:text-green-400">Simple Landing Page</div>
                <div className="text-2xl font-bold">$2-5</div>
                <div className="text-muted-foreground">Portfolio, business card site</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="font-semibold text-blue-600 dark:text-blue-400">Complex Web App</div>
                <div className="text-2xl font-bold">$10-25</div>
                <div className="text-muted-foreground">E-commerce, dashboards</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="font-semibold text-purple-600 dark:text-purple-400">Small Changes</div>
                <div className="text-2xl font-bold">$0.50-2</div>
                <div className="text-muted-foreground">Tweaks, color changes</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>What You Can Build</h2>

      <p>
        Shakespeare's AI can create virtually any type of website or web application. Here are just a few examples:
      </p>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">📄 Business & Marketing</h3>
              <ul className="space-y-1 text-sm">
                <li>• Professional landing pages</li>
                <li>• Portfolio websites</li>
                <li>• Company websites</li>
                <li>• Marketing sites with lead capture</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3 text-green-600 dark:text-green-400">🛒 E-commerce Solutions</h3>
              <ul className="space-y-1 text-sm">
                <li>• Online stores with product catalogs</li>
                <li>• Shopping cart functionality</li>
                <li>• Product galleries</li>
                <li>• Inventory management interfaces</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">📱 Web Applications</h3>
              <ul className="space-y-1 text-sm">
                <li>• Social media platforms</li>
                <li>• Dashboard interfaces</li>
                <li>• Content management systems</li>
                <li>• User authentication systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">🎮 Interactive Experiences</h3>
              <ul className="space-y-1 text-sm">
                <li>• Browser-based games</li>
                <li>• Interactive galleries</li>
                <li>• Educational tools and quizzes</li>
                <li>• Creative multimedia experiences</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

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
                    Browse available Nostr Service Providers (NSPs), each offering different AI capabilities, specializations, and pricing. Choose freely from a competitive marketplace instead of being locked into one vendor.
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

      <h2>Example Prompts to Try</h2>

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
                "Build an e-commerce store for handmade jewelry with product galleries, shopping cart, and a clean, elegant design."
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
            <CardContent className="p-4">
              <p className="text-sm italic">
                "Make a cryptocurrency dashboard that tracks Bitcoin and Ethereum prices with charts and price alerts."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>Nostr Service Providers (NSPs)</h2>

      <p>
        Shakespeare is powered by <strong>Nostr Service Providers (NSPs)</strong> — a revolutionary new way to access AI tools and services through the decentralized Nostr protocol. NSPs are the backbone that makes Shakespeare's AI-powered website building possible.
      </p>

      <h3>What are NSPs?</h3>
      <p>
        NSPs (Nostr Service Providers) are decentralized services that provide AI capabilities, tools, and resources through the Nostr protocol. Think of them as specialized AI assistants that you can connect to and use for different tasks. Each NSP offers unique capabilities, from different AI models to specialized tools for specific use cases.
      </p>

      <p>
        The tools you're using in Shakespeare — including which AI model powers your conversations — are all provided through NSPs. This means you have choice and flexibility in selecting the AI provider that best fits your needs and budget.
      </p>

      <h3>MKStack NSP: Bringing MKStack to the Web</h3>
      <p>
        One of the most powerful NSPs available is the <strong>MKStack NSP</strong>, which brings the full power of our <a href="/tools/mkstack" className="text-blue-600 hover:underline">MKStack framework</a> directly to your browser through Shakespeare. Anything you could build before with MKStack's command-line tools, you can now build in the web with Shakespeare thanks to the MKStack NSP!
      </p>

      <p>
        The MKStack NSP provides comprehensive Nostr development capabilities, including 50+ NIPs, React components, TypeScript support, and instant deployment — all accessible through natural conversation in Shakespeare.
      </p>

      <div className="not-prose my-6">
        <Card className="border-purple-200 dark:border-purple-800">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">🚀 Free Gemini Flash NSP</h4>
            <p className="text-muted-foreground mb-4">
              We're currently offering a <strong>free Gemini Flash NSP</strong> so you can try Shakespeare without adding credits! This gives you access to Google's Gemini Flash model at no cost during the beta period.
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

      <h3>How NSPs Work</h3>
      <p>
        NSP providers are hosted separately from Shakespeare and distributed over the Nostr network, which means anyone can create and run their own NSP. This creates a competitive marketplace where providers can offer different AI models, specialized tools, pricing models, and capabilities.
      </p>

      <p>
        Similar to how <a href="https://openrouter.ai" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">OpenRouter</a> works, you buy credits on the NSP to access their services. The key difference is that NSPs are decentralized, censorship-resistant, and give you the freedom to choose from multiple providers rather than being locked into traditional proprietary APIs.
      </p>

      <h3>Anyone Can Make an NSP</h3>
      <p>
        The beauty of the NSP system is that it's completely open. Developers, AI researchers, and service providers can create their own NSPs offering specialized capabilities:
      </p>

      <ul>
        <li><strong>Specialized AI Models:</strong> Fine-tuned models for specific domains like design, coding, or content creation</li>
        <li><strong>Custom Tools:</strong> Unique development tools, APIs, or services</li>
        <li><strong>Different Pricing:</strong> Competitive pricing models, subscription options, or even free tiers</li>
        <li><strong>Regional Services:</strong> NSPs optimized for specific regions or languages</li>
      </ul>

      <div className="not-prose my-6">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">🔗 Learn More About MKStack NSP</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Explore the technical details and see examples of what you can build with the MKStack NSP.
            </p>
            <div className="space-y-3">
              <Button 
                asChild 
                variant="outline"
                className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300"
              >
                <a href="https://gitlab.com/soapbox-pub/mkstack-nsp" target="_blank" rel="noopener noreferrer">
                  📚 MKStack NSP Documentation
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300"
              >
                <a href="/tools/mkstack" rel="noopener noreferrer">
                  🛠️ Explore MKStack Framework
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300"
              >
                <a href="/showcase" rel="noopener noreferrer">
                  🎨 View MKStack Showcase
                </a>
              </Button>
            </div>
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

      <div className="not-prose my-8">
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
      </div>

      <h2>🎭 Get Started with Shakespeare</h2>

      <p>
        Shakespeare is currently in private beta with invite-only access. We're carefully onboarding users to ensure the best possible experience as we refine the platform.
      </p>


      <div className="not-prose my-12" id="waitlist-form">
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
                Or join the waitlist above for email updates and priority access
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