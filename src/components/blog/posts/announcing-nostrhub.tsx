import React from 'react';
import { EmailSignupForm } from '../../EmailSignupForm';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { ExternalLink, Code, Users, GitBranch, FileText, Search, Star } from 'lucide-react';

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
  "title": "NostrHub: NIPs, Apps, and Repos on Nostr",
  "excerpt": "NostrHub is the ultimate resource for Nostr developers, featuring official and custom NIPs, app discovery, repository sharing, and a truly social experience where you can comment on NIPs, apps, and repositories.",
  "coverImage": "/assets/blog/announcing-nostrhub/nostrhub-blog.png",
  "date": "2025-06-10",
  "author": {
    "name": "M.K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-nostrhub/nostrhub-blog.png"
  }
};

export default function AnnouncingNostrHub() {
  return (
    <article className="prose prose-lg max-w-none">
      <p><strong>The Nostr ecosystem is growing rapidly,</strong> but developers have been scattered across different resources, documentation sites, and communities. Finding the right NIPs, discovering compatible apps, sharing projects, and connecting with other developers has been a fragmented experience.</p>
      
      <p>Today, we're excited to announce <strong><a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">NostrHub</a></strong> — a comprehensive platform that brings together everything you need as a Nostr developer in one place.</p>

      <h2>What is NostrHub?</h2>
      
      <p><a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">NostrHub</a> is your one-stop shop for Nostr development, designed to streamline the developer experience and foster collaboration within the Nostr ecosystem. Whether you're just getting started with Nostr or you're building the next breakthrough application, NostrHub has the resources you need — plus a truly social experience where you can comment and discuss every NIP, app, and repository. Now featuring a <strong>DVM marketplace (beta)</strong> where you can discover and use AI-powered Data Vending Machines for on-demand data processing.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
        <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-5 w-5 text-blue-500" />
              <h4 className="font-semibold">Submit Your Custom NIPs</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Have you created a custom event kind or protocol extension? Share it with the community and help expand the Nostr ecosystem.
            </p>
            <Button asChild className="w-full">
              <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">
                Submit Custom NIP <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Code className="h-5 w-5 text-green-500" />
              <h4 className="font-semibold">List Your App</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Built a Nostr application? Help others discover it by listing it in our app directory organized by supported event types.
            </p>
            <Button asChild variant="outline" className="w-full">
              <a href="https://nostrhub.io/apps" target="_blank" rel="noopener noreferrer">
                Submit Your App <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <GitBranch className="h-5 w-5 text-purple-500" />
              <h4 className="font-semibold">Share Your Repository</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Open-source your Nostr project and attract contributors. Others can submit issues and patches directly on your repository page.
            </p>
            <Button asChild variant="outline" className="w-full">
              <a href="https://nostrhub.io/repositories" target="_blank" rel="noopener noreferrer">
                Share Repository <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Users className="h-5 w-5 text-orange-500" />
              <h4 className="font-semibold">Join the Community</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Connect with fellow Nostr developers, share ideas, and collaborate on exciting projects.
            </p>
            <Button asChild variant="outline" className="w-full">
              <a href="https://nostrhub.io/community" target="_blank" rel="noopener noreferrer">
                Join Community <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
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

      <h2>Explore NostrHub's Features</h2>

      <h3>💬 Social Interaction & Comments</h3>
      <p>NostrHub isn't just a directory — it's a <strong>truly social experience</strong>. You can comment on NIPs, apps, and repositories directly on their pages, creating meaningful discussions around Nostr development. Share your implementation experiences, ask questions about specific NIPs, provide feedback on applications, or collaborate on repository improvements. All comments are powered by Nostr, ensuring your discussions are decentralized and censorship-resistant.</p>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 rounded-lg my-6 not-prose border-l-4 border-l-blue-500">
        <div className="flex items-start gap-3">
          <Users className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Engage with the Community</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              Every NIP, app, and repository on NostrHub has its own comment section where you can discuss implementation details, share use cases, report issues, or collaborate with other developers. It's like having a built-in forum for every piece of Nostr technology.
            </p>
          </div>
        </div>
      </div>

      <h3>📋 <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">Source for Official and Custom NIPs</a></h3>
      <p>Access the complete collection of Nostr Improvement Proposals (NIPs) in one place. Browse official NIPs from the main repository alongside community-submitted custom NIPs. Whether you're implementing existing standards or exploring innovative extensions to the protocol, NostrHub provides comprehensive documentation and real-world examples for every NIP.</p>

      <div className="my-8 not-prose">
        <img 
          src="/assets/blog/announcing-nostrhub/announcing-nostrhub.png" 
          alt="NostrHub NIPs page showing official and custom Nostr Improvement Proposals"
          className="w-full rounded-lg shadow-lg border"
        />
        <p className="text-sm text-muted-foreground text-center mt-2">Explore official and custom NIPs with comprehensive documentation</p>
      </div>

      <h3>🚀 <a href="https://nostrhub.io/apps" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">App Discovery Platform</a></h3>
      <p>Browse Nostr applications organized by the event kinds they support. Whether you're looking for a client that handles NIP-04 encrypted messages or want to showcase your new NIP-23 long-form content app, the app discovery platform makes it easy to find and share compatible applications.</p>

      <div className="my-8 not-prose">
        <img 
          src="/assets/blog/announcing-nostrhub/Nostr-apps.png" 
          alt="NostrHub Apps page showing Nostr applications organized by supported event kinds"
          className="w-full rounded-lg shadow-lg border"
        />
        <p className="text-sm text-muted-foreground text-center mt-2">Discover Nostr apps organized by event kinds they support</p>
      </div>

      <h3>📚 <a href="https://nostrhub.io/repositories" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">Repository Showcase</a></h3>
      <p>Share your open-source Nostr projects and discover interesting repositories from other developers. This feature helps you find collaborators, showcase your work, and contribute to the growing ecosystem of Nostr tools and applications. <strong>You can also submit issues and patches directly on repository pages</strong>, making it easy to report bugs, request features, and contribute code improvements to projects you're interested in.</p>

      <div className="my-8 not-prose">
        <img 
          src="/assets/blog/announcing-nostrhub/nostrhub-repos.png" 
          alt="NostrHub Repositories page showcasing open-source Nostr projects"
          className="w-full rounded-lg shadow-lg border"
        />
        <p className="text-sm text-muted-foreground text-center mt-2">Browse and share Nostr repositories with the community</p>
      </div>

      <h3>👥 <a href="https://nostrhub.io/community" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">Developer Community</a></h3>
      <p>A built-in NIP-72 community space specifically for Nostr developers. Connect with peers, share ideas, get help with implementation challenges, and collaborate on the future of decentralized social media.</p>

      <div className="my-8 not-prose">
        <img 
          src="/assets/blog/announcing-nostrhub/nostrhub-community.png" 
          alt="NostrHub Community page showing developer discussions and collaboration"
          className="w-full rounded-lg shadow-lg border"
        />
        <p className="text-sm text-muted-foreground text-center mt-2">Connect with fellow Nostr developers in our NIP-72 community</p>
      </div>

      <h3>🤖 <a href="https://nostrhub.io/dvms" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">DVM Marketplace (Beta)</a></h3>
      <p>Discover and use <strong>Data Vending Machines</strong> - AI-powered services that process your data on-demand. From text translation to image generation, find the perfect service for your needs. The DVM marketplace connects you with decentralized AI services running on the Nostr network, enabling everything from content moderation to creative assistance.</p>

      <div className="my-8 not-prose">
        <img 
          src="/assets/blog/announcing-nostrhub/notrhub-dvms.png" 
          alt="NostrHub DVM Marketplace showing AI-powered Data Vending Machines for on-demand data processing"
          className="w-full rounded-lg shadow-lg border"
        />
        <p className="text-sm text-muted-foreground text-center mt-2">Explore AI-powered Data Vending Machines in the NostrHub marketplace</p>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-lg my-6 not-prose border-l-4 border-l-purple-500">
        <div className="flex items-start gap-3">
          <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-xs font-bold">β</span>
          </div>
          <div>
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Beta Feature</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm">
              The DVM marketplace is currently in beta. Explore AI-powered services like language translation, image processing, content analysis, and more - all running on decentralized infrastructure through the Nostr protocol.
            </p>
          </div>
        </div>
      </div>

      <h2>Meet Nostr Developers</h2>

      <p>NostrHub developers are already using the platform to showcase their work and connect with the community. Check out some of the amazing profiles:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/assets/avatars/alex.png" 
                alt="Alex Gleason"
                className="w-12 h-12 rounded-full object-cover border-2 border-border"
              />
              <div>
                <h4 className="font-semibold">Alex Gleason</h4>
                <p className="text-sm text-muted-foreground">Ditto & Soapbox Developer</p>
              </div>
            </div>
            <img 
              src="/assets/blog/announcing-nostrhub/alex-nostrhub-profile.png" 
              alt="Alex Gleason's NostrHub profile page"
              className="w-full rounded-lg shadow-sm border mb-4"
            />
            <Button asChild className="w-full" variant="outline">
              <a href="https://nostrhub.io/npub18ams6ewn5aj2n3wt2qawzglx9mr4nzksxhvrdc4gzrecw7n5tvjqctp424" target="_blank" rel="noopener noreferrer">
                <Star className="mr-2 h-4 w-4" />
                Visit Profile
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/assets/avatars/derek.jpg" 
                alt="Derek Ross"
                className="w-12 h-12 rounded-full object-cover border-2 border-border"
              />
              <div>
                <h4 className="font-semibold">Derek Ross</h4>
                <p className="text-sm text-muted-foreground">Nostr Advocate & Builder</p>
              </div>
            </div>
            <img 
              src="/assets/blog/announcing-nostrhub/derek-nostrhub-profile.png" 
              alt="Derek Ross's NostrHub profile page"
              className="w-full rounded-lg shadow-sm border mb-4"
            />
            <Button asChild className="w-full" variant="outline">
              <a href="https://nostrhub.io/npub1q3sle0kvfsehgsuexttt3ugjd8xdklxfwwkh559wxckmzddywnws6cd26p" target="_blank" rel="noopener noreferrer">
                <Star className="mr-2 h-4 w-4" />
                Visit Profile
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <h2>The Future of Nostr Development</h2>

      <p><a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">NostrHub</a> represents our vision for a more connected and collaborative Nostr ecosystem. By bringing together NIPs, apps, repositories, and developers in one place, we're making it easier than ever to build on Nostr.</p>

      <p>The platform will continue to evolve based on community feedback and needs. We're committed to supporting the Nostr ecosystem's growth while maintaining the principles of decentralization and open development that make Nostr special.</p>

      <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-8 rounded-xl my-8 not-prose border">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold">Stay Updated</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Want to be notified when new features launch? Sign up for our newsletter to get the latest updates on NostrHub and the broader Nostr ecosystem.
          </p>
          <div className="max-w-md mx-auto">
            <EmailSignupForm tags={['NostrHub', 'Nostr Development']} />
          </div>
        </div>
      </div>

      <h2 className="text-center">Start Building with NostrHub 🚀</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-8 not-prose">
        <Button asChild size="lg" className="h-auto py-4">
          <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
            <Search className="h-5 w-5" />
            <span>Explore NostrHub</span>
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-auto py-4">
          <a href="https://nostrhub.io/apps" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
            <Code className="h-5 w-5" />
            <span>Browse Apps</span>
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-auto py-4">
            <a href="https://nostrhub.io/repositories" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
            <GitBranch className="h-5 w-5" />
            <span>View Repos</span>
            </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-auto py-4">
          <a href="https://nostrhub.io/community" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
            <Users className="h-5 w-5" />
            <span>Join Community</span>
          </a>
        </Button>
      </div>
    </article>
  );
}