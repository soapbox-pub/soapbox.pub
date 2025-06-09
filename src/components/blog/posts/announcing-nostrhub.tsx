import React from 'react';
import { EmailSignupForm } from '../../EmailSignupForm';
import { Button } from '../../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { ExternalLink, Code, Users, GitBranch, FileText } from 'lucide-react';

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
  "slug": "announcing-nostrhub",
  "title": "Announcing NostrHub: Your One-Stop Shop for Nostr Development",
  "excerpt": "NostrHub is the ultimate resource for Nostr developers, featuring official and custom NIPs, app discovery, repository sharing, and a thriving developer community.",
  "coverImage": "/assets/blog/announcing-nostrhub/announcing-nostrhub.png",
  "date": "2024-12-19",
  "author": {
    "name": "Soapbox Team",
    "picture": "/assets/avatars/soapbox.png"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-nostrhub/announcing-nostrhub.png"
  }
};

export default function AnnouncingNostrHub() {
  return (
    <article className="prose prose-lg max-w-none">
      <p><strong>The Nostr ecosystem is growing rapidly,</strong> but developers have been scattered across different resources, documentation sites, and communities. Finding the right NIPs, discovering compatible apps, sharing projects, and connecting with other developers has been a fragmented experience.</p>
      
      <p>Today, we're excited to announce <strong>NostrHub</strong> — a comprehensive platform that brings together everything you need as a Nostr developer in one place.</p>

      <h2>What is NostrHub?</h2>
      
      <p>NostrHub is your one-stop shop for Nostr development, designed to streamline the developer experience and foster collaboration within the Nostr ecosystem. Whether you're just getting started with Nostr or you're building the next breakthrough application, NostrHub has the resources you need.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              NIPs Repository
            </CardTitle>
            <CardDescription>
              Access official and custom Nostr Implementation Possibilities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Browse the complete collection of NIPs, from official protocol specifications to innovative custom implementations. Submit your own NIPs and help shape the future of Nostr.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              App Discovery
            </CardTitle>
            <CardDescription>
              Find apps by supported event types and publish your own
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Discover Nostr applications organized by the event kinds they support. Perfect for finding compatible apps or showcasing your new creation to the community.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              Repository Sharing
            </CardTitle>
            <CardDescription>
              Share your Nostr projects and attract contributors
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Showcase your open-source Nostr projects, find collaborators, and discover interesting repositories from other developers in the ecosystem.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Developer Community
            </CardTitle>
            <CardDescription>
              Built-in NIP-72 community for Nostr developers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Connect with fellow Nostr developers in our dedicated community space. Share ideas, get help, and collaborate on the future of decentralized social media.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Why NostrHub Matters</h2>

      <p>The Nostr protocol's strength lies in its simplicity and extensibility, but this has led to a scattered landscape of resources. Developers often struggle to:</p>

      <ul>
        <li><strong>Find relevant NIPs</strong> for their use cases</li>
        <li><strong>Discover compatible applications</strong> that support specific event kinds</li>
        <li><strong>Share their projects</strong> with the right audience</li>
        <li><strong>Connect with other developers</strong> working on similar problems</li>
      </ul>

      <p>NostrHub solves these challenges by providing a centralized hub that doesn't compromise the decentralized nature of Nostr itself.</p>

      <h2>Current Features</h2>

      <p>NostrHub already includes a comprehensive <strong>NIPs repository</strong> where you can browse both official and custom Nostr Implementation Possibilities. You can explore the existing collection and understand how different event kinds and protocol extensions work together.</p>

      <div className="bg-muted p-6 rounded-lg my-6 not-prose">
        <p className="text-sm text-muted-foreground mb-4">
          <strong>Already available:</strong>
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Official NIPs</Badge>
          <Badge variant="secondary">Custom NIPs</Badge>
          <Badge variant="secondary">NIP Submission</Badge>
          <Badge variant="secondary">Protocol Documentation</Badge>
        </div>
      </div>

      <h2>Coming Soon: The Complete Platform</h2>

      <p>We're actively developing the remaining features that will make NostrHub the ultimate Nostr developer resource:</p>

      <h3>🚀 App Discovery Platform</h3>
      <p>Browse Nostr applications organized by the event kinds they support. Whether you're looking for a client that handles NIP-04 encrypted messages or want to showcase your new NIP-23 long-form content app, the app discovery platform will make it easy to find and share compatible applications.</p>

      <h3>📚 Repository Showcase</h3>
      <p>Share your open-source Nostr projects and discover interesting repositories from other developers. This feature will help you find collaborators, showcase your work, and contribute to the growing ecosystem of Nostr tools and applications.</p>

      <h3>👥 Developer Community</h3>
      <p>A built-in NIP-72 community space specifically for Nostr developers. Connect with peers, share ideas, get help with implementation challenges, and collaborate on the future of decentralized social media.</p>

      <h2>Get Involved Today</h2>

      <p>NostrHub is built by developers, for developers. We want your input to make it the best possible resource for the Nostr community.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="space-y-4">
          <h4 className="font-semibold">Submit Your Custom NIPs</h4>
          <p className="text-sm text-muted-foreground">
            Have you created a custom event kind or protocol extension? Share it with the community and help expand the Nostr ecosystem.
          </p>
          <Button asChild className="w-full">
            <a href="https://nostrhub.io/" target="_blank" rel="noopener noreferrer">
              Submit Custom NIP <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">List Your App</h4>
          <p className="text-sm text-muted-foreground">
            Built a Nostr application? Help others discover it by listing it in our app directory organized by supported event types.
          </p>
          <Button asChild variant="outline" className="w-full">
            <a href="https://nostrhub.io/apps" target="_blank" rel="noopener noreferrer">
              Submit Your App <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">Share Your Repository</h4>
          <p className="text-sm text-muted-foreground">
            Open-source your Nostr project and attract contributors from the developer community.
          </p>
          <Button asChild variant="outline" className="w-full">
            <a href="https://nostrhub.io/repositories" target="_blank" rel="noopener noreferrer">
              Share Repository <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="space-y-4">
          <h4 className="font-semibold">Join the Community</h4>
          <p className="text-sm text-muted-foreground">
            Connect with fellow Nostr developers, share ideas, and collaborate on exciting projects.
          </p>
          <Button asChild variant="outline" className="w-full">
            <a href="https://nostrhub.io/communities" target="_blank" rel="noopener noreferrer">
              Join Community <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      <h2>The Future of Nostr Development</h2>

      <p>NostrHub represents our vision for a more connected and collaborative Nostr ecosystem. By bringing together NIPs, apps, repositories, and developers in one place, we're making it easier than ever to build on Nostr.</p>

      <p>The platform will continue to evolve based on community feedback and needs. We're committed to supporting the Nostr ecosystem's growth while maintaining the principles of decentralization and open development that make Nostr special.</p>

      <h3>Stay Updated</h3>
      <p>Want to be notified when new features launch? Sign up for our newsletter to get the latest updates on NostrHub and the broader Nostr ecosystem.</p>
      
      <EmailSignupForm tags={['NostrHub', 'Nostr Development']} />

      <h2>Start Building with NostrHub 🚀</h2>
      
      <div className="flex flex-col sm:flex-row gap-4 my-8 not-prose">
        <Button asChild size="lg" className="flex-1">
          <a href="https://nostrhub.io/" target="_blank" rel="noopener noreferrer">
            Explore NostrHub <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="flex-1">
          <a href="https://nostrhub.io/apps" target="_blank" rel="noopener noreferrer">
            Browse Apps <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      <p className="text-center text-muted-foreground">
        <em>Join us in building the future of decentralized social media, one NIP at a time.</em>
      </p>
    </article>
  );
}