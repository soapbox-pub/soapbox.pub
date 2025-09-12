import React from 'react';
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
  tags?: string[];
}

export const meta: BlogPostMeta = {
  "slug": "understanding-nostr-service-providers",
  "title": "🔧 Understanding Nostr Service Providers (NSPs): The Future of Decentralized AI Services",
  "excerpt": "Discover how Nostr Service Providers (NSPs) are revolutionizing AI services through decentralization. Learn how to choose the right NSP for your Shakespeare projects and explore how developers can create their own NSPs to serve the growing ecosystem.",
  "coverImage": "/assets/blog/announcing-shakespeare/nsp-cover.png",
  "date": "2025-07-09",
  "author": {
    "name": "M.K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-shakespeare/nsp-cover.png"
  },
  "tags": ["nostr", "ai", "development"]
};

export default function UnderstandingNostrServiceProviders() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            🔧 NSPs
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            🤖 AI Services
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            🗽 Decentralized
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            🛠️ Developer Guide
          </Badge>
        </div>
      </div>

      <p className="text-xl leading-relaxed text-muted-foreground mb-8">
        Nostr Service Providers (NSPs) represent a revolutionary approach to AI services, bringing the power of decentralization to artificial intelligence. Whether you're using <a href="/blog/announcing-shakespeare" className="text-blue-600 hover:underline">Shakespeare</a> to build websites or looking to create your own NSP, this guide will help you understand everything you need to know about this groundbreaking technology.
      </p>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-purple-200 dark:border-purple-800">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">
                🎭 Try Shakespeare with NSPs
              </h3>
              <p className="text-muted-foreground mb-4">
                Experience NSPs in action by building websites with Shakespeare's AI-powered interface.
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
                📚 Read Shakespeare Announcement
              </h3>
              <p className="text-muted-foreground mb-4">
                Learn how Shakespeare uses NSPs to democratize website building through AI.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300"
              >
                <a href="/blog/announcing-shakespeare">
                  Read Announcement →
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>What are Nostr Service Providers (NSPs)?</h2>

      <p>
        <strong>Nostr Service Providers (NSPs) are decentralized services that provide AI capabilities, tools, and resources through the Nostr protocol.</strong> Think of them as specialized AI assistants that you can connect to and use for different tasks, but unlike traditional centralized AI services, NSPs operate on a decentralized network that gives you choice, freedom, and control.
      </p>

      <p>
        NSPs were originally created to power <a href="/blog/announcing-shakespeare" className="text-blue-600 hover:underline">Shakespeare</a>, our AI-powered website builder, but their potential extends far beyond web development. Each NSP offers unique capabilities, from different AI models to specialized tools for specific use cases, creating a competitive marketplace where innovation thrives.
      </p>

      <h3>How NSPs Differ from Traditional AI Services</h3>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3 text-red-700 dark:text-red-300">❌ Traditional AI Services</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Centralized control by single companies</li>
                <li>• Platform lock-in and vendor dependency</li>
                <li>• Limited choice in AI models and capabilities</li>
                <li>• Censorship and content restrictions</li>
                <li>• Opaque pricing and billing</li>
                <li>• No user ownership of data or identity</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">✅ Nostr Service Providers</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Decentralized network of competing providers</li>
                <li>• Freedom to switch between providers</li>
                <li>• Wide variety of AI models and specializations</li>
                <li>• Censorship-resistant communication</li>
                <li>• Transparent, competitive pricing</li>
                <li>• User-controlled identity and data ownership</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>For Shakespeare Users: Choosing the Right NSP</h2>

      <p>
        When using <a href="https://shakespeare.diy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Shakespeare</a> to build websites, you'll need to choose an NSP to power your AI conversations. Each NSP offers different capabilities, pricing models, and specializations. Here's what you need to know to make the best choice for your projects.
      </p>

      <h3>Key Factors to Consider</h3>

      <div className="not-prose my-8">
        <div className="space-y-6">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 text-blue-600 dark:text-blue-400 font-bold text-sm min-w-[2rem] text-center">🤖</div>
                <div>
                  <h3 className="font-semibold mb-2">AI Model and Capabilities</h3>
                  <p className="text-sm text-muted-foreground">
                    Different NSPs use different AI models (GPT-4, Claude, Gemini, etc.) with varying strengths. Some excel at creative tasks, others at technical implementation, and some offer specialized tools for specific domains.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 text-green-600 dark:text-green-400 font-bold text-sm min-w-[2rem] text-center">💰</div>
                <div>
                  <h3 className="font-semibold mb-2">Pricing Model</h3>
                  <p className="text-sm text-muted-foreground">
                    NSPs set their own pricing. Some offer pay-per-use models, others have subscription tiers, and some provide free tiers for basic usage. Compare costs based on your expected usage patterns.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 text-purple-600 dark:text-purple-400 font-bold text-sm min-w-[2rem] text-center">🛠️</div>
                <div>
                  <h3 className="font-semibold mb-2">Available Tools and Frameworks</h3>
                  <p className="text-sm text-muted-foreground">
                    Some NSPs specialize in specific frameworks or provide unique development tools. The MKStack NSP, for example, offers comprehensive Nostr development capabilities with 50+ NIPs and React components.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-2 text-orange-600 dark:text-orange-400 font-bold text-sm min-w-[2rem] text-center">⚡</div>
                <div>
                  <h3 className="font-semibold mb-2">Performance and Reliability</h3>
                  <p className="text-sm text-muted-foreground">
                    Consider response times, uptime, and the provider's track record. Some NSPs may offer faster responses or better reliability for mission-critical projects.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 dark:bg-red-900 rounded-full p-2 text-red-600 dark:text-red-400 font-bold text-sm min-w-[2rem] text-center">🌍</div>
                <div>
                  <h3 className="font-semibold mb-2">Geographic Location and Compliance</h3>
                  <p className="text-sm text-muted-foreground">
                    Some NSPs may be optimized for specific regions or comply with particular regulations. Choose providers that align with your location and compliance requirements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <h3>Popular NSP Options</h3>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">🚀 MKStack NSP (Recommended)</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    The flagship NSP that brings the full power of the <a href="/tools/mkstack" className="text-blue-600 hover:underline">MKStack framework</a> to Shakespeare. Offers comprehensive Nostr development capabilities with 50+ NIPs, React components, TypeScript support, and instant deployment.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Claude Sonnet 4</Badge>
                    <Badge variant="outline" className="text-xs">Nostr Specialized</Badge>
                    <Badge variant="outline" className="text-xs">Pay-per-use</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">🆓 Free Gemini Flash NSP</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Currently offered for free during Shakespeare's beta period. Powered by Google's Gemini Flash model, perfect for trying out Shakespeare without adding credits.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">Gemini Flash</Badge>
                    <Badge variant="outline" className="text-xs">Free Tier</Badge>
                    <Badge variant="outline" className="text-xs">Beta Access</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="not-prose my-8">
        <Card className="border-dashed border-2 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-300">
              🔍 Discover More NSPs
            </h3>
            <p className="text-muted-foreground mb-4">
              The NSP ecosystem is growing rapidly. New providers are launching regularly with specialized capabilities and competitive pricing.
            </p>
            <p className="text-sm text-muted-foreground">
              Browse available NSPs directly in Shakespeare when you start a new project.
            </p>
          </CardContent>
        </Card>
      </div>

      <h3>How to Switch Between NSPs</h3>

      <p>
        One of the key advantages of the NSP system is that you're never locked into a single provider. You can easily switch between NSPs based on your needs:
      </p>

      <ul>
        <li><strong>Per Project:</strong> Choose different NSPs for different projects based on their requirements</li>
        <li><strong>Mid-Project:</strong> Switch NSPs during development if you need different capabilities</li>
        <li><strong>Cost Optimization:</strong> Move to more cost-effective providers for simple tasks</li>
        <li><strong>Specialization:</strong> Use specialized NSPs for specific domains or technologies</li>
      </ul>

      <h2>For Developers: Creating Your Own NSP</h2>

      <p>
        The beauty of the NSP system is that it's completely open and decentralized. Any developer can create and operate their own NSP, contributing to the ecosystem while potentially building a sustainable business. Here's everything you need to know about creating your own NSP.
      </p>

      <h3>Why Create an NSP?</h3>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3 text-green-700 dark:text-green-300">💼 Business Opportunities</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Generate revenue from AI services</li>
                <li>• Build a sustainable SaaS business</li>
                <li>• Serve niche markets and specializations</li>
                <li>• Compete on features, price, and quality</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3 text-blue-700 dark:text-blue-300">🚀 Technical Innovation</h4>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Experiment with cutting-edge AI models</li>
                <li>• Create specialized development tools</li>
                <li>• Optimize for specific use cases</li>
                <li>• Contribute to the decentralized ecosystem</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <h3>Technical Requirements</h3>

      <p>
        Creating an NSP requires implementing the <strong>Nostr SPA Builder</strong> protocol. The good news is that we've open-sourced the complete MKStack NSP implementation to serve as a reference and starting point.
      </p>

      <div className="not-prose my-8">
        <Card className="border-purple-200 dark:border-purple-800">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-purple-700 dark:text-purple-300">🛠️ Core Technologies</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="font-medium mb-2">Required Skills:</h5>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Nostr protocol knowledge</li>
                  <li>• NIP-44 encryption implementation</li>
                  <li>• AI API integration (OpenAI, Anthropic, etc.)</li>
                  <li>• Real-time event handling</li>
                  <li>• Payment processing (Stripe, Lightning)</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium mb-2">Infrastructure:</h5>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Server hosting (VPS, cloud)</li>
                  <li>• Domain and SSL certificates</li>
                  <li>• Database for user accounts and projects</li>
                  <li>• File storage for generated applications</li>
                  <li>• Monitoring and metrics</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3>Getting Started: Fork the MKStack NSP</h3>

      <p>
        The fastest way to create your own NSP is to fork our open-source MKStack NSP implementation. It provides a complete, production-ready foundation that you can customize and extend.
      </p>

      <div className="not-prose my-8">
        <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">📚 MKStack NSP Resources</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Access the complete source code, documentation, and protocol specification for building your own NSP.
            </p>
            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <a href="https://gitlab.com/soapbox-pub/mkstack-nsp" target="_blank" rel="noopener noreferrer">
                  📦 View Source Code on GitLab
                </a>
              </Button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300"
                >
                  <a href="/tools/mkstack" rel="noopener noreferrer">
                    🛠️ Explore MKStack Framework
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300"
                >
                  <a href="/showcase" rel="noopener noreferrer">
                    🎨 View Example Projects
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3>NSP Specialization Ideas</h3>

      <p>
        While the MKStack NSP focuses on Nostr web applications, there are countless opportunities for specialized NSPs. Here are some ideas to inspire your own NSP:
      </p>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-purple-200 dark:border-purple-800">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">🎨 Design-Focused NSP</h4>
              <p className="text-sm text-muted-foreground">
                Specialize in creating beautiful, designer-quality websites with advanced styling capabilities and design system integration.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">🛒 E-commerce NSP</h4>
              <p className="text-sm text-muted-foreground">
                Focus on building online stores with payment integration, inventory management, and e-commerce best practices.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">📱 Mobile-First NSP</h4>
              <p className="text-sm text-muted-foreground">
                Specialize in creating mobile-optimized applications with PWA capabilities and mobile-specific features.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 dark:border-orange-800">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-300">🎮 Gaming NSP</h4>
              <p className="text-sm text-muted-foreground">
                Build browser-based games and interactive experiences with game engines and specialized gaming frameworks.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">📊 Data Visualization NSP</h4>
              <p className="text-sm text-muted-foreground">
                Focus on creating dashboards, analytics tools, and data-driven applications with advanced charting libraries.
              </p>
            </CardContent>
          </Card>

          <Card className="border-indigo-200 dark:border-indigo-800">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2 text-indigo-700 dark:text-indigo-300">🌍 Multi-Language NSP</h4>
              <p className="text-sm text-muted-foreground">
                Specialize in internationalization with support for multiple languages, RTL layouts, and localization features.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <h3>Protocol Implementation</h3>

      <p>
        NSPs communicate using the <strong>Nostr SPA Builder</strong> protocol, which defines how clients and service providers exchange messages securely over the Nostr network. Key aspects include:
      </p>

      <ul>
        <li><strong>Service Discovery:</strong> NSPs advertise themselves using NIP-31999 events</li>
        <li><strong>Encrypted Communication:</strong> All messages use NIP-44 encryption for privacy</li>
        <li><strong>Real-time Updates:</strong> Ephemeral events enable instant feedback and notifications</li>
        <li><strong>Multi-event Transport:</strong> Large payloads are automatically chunked across multiple events</li>
        <li><strong>Payment Integration:</strong> Built-in support for USD and Bitcoin Lightning payments</li>
      </ul>

      <div className="not-prose my-8">
        <Card className="border-dashed border-2 border-gray-200 dark:border-gray-800">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">📋 Protocol Specification</h4>
            <p className="text-sm text-muted-foreground mb-4">
              The complete protocol specification is available in the MKStack NSP repository. It includes detailed information about event structures, RPC methods, error handling, and security considerations.
            </p>
            <Button
              asChild
              variant="outline"
              className="w-full"
            >
              <a href="https://gitlab.com/soapbox-pub/mkstack-nsp/-/blob/main/NIP.md" target="_blank" rel="noopener noreferrer">
                📖 Read Protocol Specification
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <h3>Business Model Considerations</h3>

      <p>
        Running an NSP can be a profitable business, but it requires careful consideration of costs, pricing, and market positioning:
      </p>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">💰 Revenue Streams</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Pay-per-use AI generation fees</li>
                <li>• Subscription tiers for heavy users</li>
                <li>• Premium features and specialized tools</li>
                <li>• Enterprise support and custom integrations</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">💸 Operating Costs</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• AI API costs (OpenAI, Anthropic, etc.)</li>
                <li>• Server hosting and infrastructure</li>
                <li>• Payment processing fees</li>
                <li>• Development and maintenance time</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">🎯 Competitive Advantages</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Specialized AI models or fine-tuning</li>
                <li>• Unique development tools and frameworks</li>
                <li>• Superior performance and reliability</li>
                <li>• Competitive pricing and transparent costs</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>The Future of NSPs</h2>

      <p>
        Nostr Service Providers represent just the beginning of a new era in decentralized AI services. As the ecosystem grows, we expect to see:
      </p>

      <ul>
        <li><strong>Specialized AI Models:</strong> NSPs offering fine-tuned models for specific domains and use cases</li>
        <li><strong>Advanced Tool Integration:</strong> NSPs providing access to specialized APIs, databases, and services</li>
        <li><strong>Cross-NSP Collaboration:</strong> NSPs working together to provide comprehensive solutions</li>
        <li><strong>Improved Discovery:</strong> Better tools for finding and comparing NSPs based on capabilities and pricing</li>
        <li><strong>Quality Assurance:</strong> Community-driven rating and review systems for NSP reliability</li>
      </ul>

      <div className="not-prose my-8">
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 border-purple-200 dark:border-purple-800">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              🌟 Join the NSP Revolution
            </h3>
            <p className="text-muted-foreground mb-6">
              Whether you're building websites with Shakespeare or creating your own NSP, you're part of a movement that's democratizing AI and breaking free from Big Tech control.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  🎭 Try Shakespeare
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300"
              >
                <a href="https://gitlab.com/soapbox-pub/mkstack-nsp" target="_blank" rel="noopener noreferrer">
                  🛠️ Build Your NSP
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Getting Started</h2>

      <p>
        Ready to dive into the world of Nostr Service Providers? Here are your next steps:
      </p>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-purple-700 dark:text-purple-300">
                👤 For Users
              </h3>
              <ol className="text-sm space-y-2 text-muted-foreground">
                <li>1. Visit <a href="https://shakespeare.diy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">shakespeare.diy</a></li>
                <li>2. Connect your Nostr identity</li>
                <li>3. Browse available NSPs</li>
                <li>4. Start building your first website</li>
                <li>5. Experiment with different NSPs</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-300">
                👨‍💻 For Developers
              </h3>
              <ol className="text-sm space-y-2 text-muted-foreground">
                <li>1. Study the <a href="https://gitlab.com/soapbox-pub/mkstack-nsp/-/blob/main/NIP.md" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">protocol specification</a></li>
                <li>2. Fork the <a href="https://gitlab.com/soapbox-pub/mkstack-nsp" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">MKStack NSP</a></li>
                <li>3. Set up your development environment</li>
                <li>4. Customize for your specialization</li>
                <li>5. Deploy and advertise your NSP</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>

      <hr className="my-12" />

      <p className="text-sm text-muted-foreground text-center">
        <em>
          NSPs are part of the broader Nostr ecosystem that's building a more open, decentralized internet.
          Learn more about our other projects including <a href="/blog/announcing-shakespeare" className="text-blue-600 hover:underline">Shakespeare</a>,
          <a href="/tools/mkstack" className="text-blue-600 hover:underline"> MKStack</a>, and
          <a href="/tools/ditto" className="text-blue-600 hover:underline"> Ditto</a>.
        </em>
      </p>
    </article>
  );
}