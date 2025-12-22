import React from 'react';
import { Button } from '../../ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../../ui/card';
import { Badge } from '../../ui/badge';
import {
  ExternalLink,
  MessageCircle,
  Calendar,
  Award,
  BookOpen,
  Sparkles,
  ArrowRight,
  HelpCircle,
  Megaphone,
  MessageSquare,
  GitBranch,
  Lightbulb,
  Image,
  LifeBuoy,
  Users,
  MapPin,
} from 'lucide-react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: { name?: string; picture?: string };
  ogImage: { url?: string };
  tags?: string[];
}

export const meta: BlogPostMeta = {
  slug: 'announcing-shakespeare-community',
  title: 'Announcing the Shakespeare Community: Connect and Learn',
  excerpt:
    'Join the Shakespeare Community to connect with builders, attend workshops and events, become an ambassador, and get help with your AI-powered web development projects.',
  coverImage: '/assets/blog/shakespeare-workshop-guide/derek-shakespeare-workshop.jpeg',
  date: '2025-12-10',
  author: {
    name: 'Derek Ross',
    picture: '/assets/avatars/derek.jpg',
  },
  ogImage: {
    url: '/assets/blog/shakespeare-workshop-guide/derek-shakespeare-workshop.jpeg',
  },
  tags: ['shakespeare', 'community', 'announcement', 'events', 'workshops'],
};

export default function AnnouncingShakespeareCommunity() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge
            variant="secondary"
            className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
          >
            Shakespeare
          </Badge>
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
          >
            Community
          </Badge>
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
          >
            Events
          </Badge>
        </div>
      </div>

      <p className="text-xl leading-relaxed text-muted-foreground mb-8">
        Building websites with AI is better when you're not doing it alone. Today we're excited to
        announce the <strong>Shakespeare Community</strong> — a place to connect with builders, get
        help with your projects, and be part of the future of AI-powered web development.
      </p>

      <div className="not-prose my-8 flex flex-wrap gap-4 justify-center">
        <Button asChild size="lg">
          <a
            href="https://app.flotilla.social/join?r=chat.shakespeare.diy&c=725J9PH4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Join Shakespeare Chat
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="/shakespeare-community">
            <Users className="h-4 w-4 mr-2" />
            Visit Community
          </a>
        </Button>
      </div>

      <h2>Why a Community?</h2>

      <p>
        Shakespeare has grown rapidly since launch, with countless people building websites
        through AI-powered conversations. As the community grows, so does the need for a dedicated
        space to share ideas, get help, and learn from each other.
      </p>

      <p>
        The Shakespeare Community is built on <strong>Nostr</strong>, the same decentralized
        protocol that powers Shakespeare itself. This means your identity, conversations, and
        connections belong to you — not to a corporation.
      </p>

      <h2>How to Get Involved</h2>

      <p>
        There are three main ways to participate in the Shakespeare Community, no matter your
        experience level:
      </p>

      <div className="not-prose my-8 grid md:grid-cols-3 gap-6">
        <Card className="overflow-hidden group hover:shadow-lg transition-shadow flex flex-col">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Community chat"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardHeader className="flex-1">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <CardTitle>Join Community Online</CardTitle>
            <CardDescription>
              Chat with other Shakespeare builders, get help with your projects, and share what
              you're creating.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button asChild variant="outline" className="w-full">
              <a
                href="https://app.flotilla.social/join?r=chat.shakespeare.diy&c=725J9PH4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Shakespeare Chat
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="overflow-hidden group hover:shadow-lg transition-shadow flex flex-col">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/assets/blog/shakespeare-workshop-guide/derek-shakespeare-workshop.jpeg"
              alt="Community events"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <CardHeader className="flex-1">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-2">
              <MapPin className="h-5 w-5 text-orange-600" />
            </div>
            <CardTitle>Connect IRL</CardTitle>
            <CardDescription>
              Attend conferences, workshops, and meetups. Learn from experts and network with fellow
              builders.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button asChild variant="outline" className="w-full">
              <a href="/shakespeare-community#events">
                View Events
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="overflow-hidden group hover:shadow-lg transition-shadow flex flex-col">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80"
              alt="Ambassador program"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              style={{ objectPosition: '50% 60%' }}
            />
          </div>
          <CardHeader className="flex-1">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-2">
              <Award className="h-5 w-5 text-yellow-600" />
            </div>
            <CardTitle>Become an Ambassador</CardTitle>
            <CardDescription>
              Host workshops in your city, teach others to build with Shakespeare, and earn
              recognition.
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto">
            <Button asChild variant="outline" className="w-full">
              <a href="#ambassador">
                Learn More
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <h2>The #ShakespeareDIY Feed</h2>

      <p>
        The community page features a live feed of posts from Nostr using the{' '}
        <strong>#ShakespeareDIY</strong> hashtag. Share your projects, ask questions, and see what
        others are building — all in real-time.
      </p>

      <div className="not-prose my-8">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <h4 className="font-semibold text-lg">Share Your Creations</h4>
              <Badge variant="outline">Live from Nostr</Badge>
            </div>
            <p className="text-muted-foreground">
              Post on Nostr with the <code className="bg-muted px-1 rounded">#ShakespeareDIY</code>{' '}
              hashtag to have your content appear on the community feed. Show off what you've built,
              share tips, or ask for feedback from fellow builders.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Upcoming Events</h2>

      <p>
        The Shakespeare Community hosts and participates in events around the world. From online
        workshops to in-person conferences, there are many ways to connect with other builders.
      </p>

      <p>
        Events are pulled directly from Nostr calendar events, so they're always up to date. Whether
        you're looking for a local meetup or a major conference, you'll find it on the community
        page.
      </p>

      <div className="not-prose my-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              <CardTitle>Workshop Example: SatsConf Brazil 2025</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <img
              src="/assets/press/satsconf-brazil-2025/alex-workshop.jpeg"
              alt="Shakespeare workshop at SatsConf Brazil"
              className="w-full rounded-lg mb-4"
            />
            <p className="text-muted-foreground text-sm">
              Shakespeare workshops bring together builders of all skill levels to learn AI-powered
              web development hands-on. Participants leave with a working website they built
              themselves.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 id="ambassador">The Ambassador Program</h2>

      <p>
        Want to help grow the Shakespeare community in your area? The Ambassador Program is for
        passionate builders who want to teach others and host local events.
      </p>

      <div className="not-prose my-8 grid md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-white" />
            </div>
            <CardTitle className="text-xl">Ambassador Benefits</CardTitle>
            <CardDescription>
              Become a community leader by hosting workshops in your city.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Host local workshops and meetups
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Get exclusive access to new features
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Earn free credits for teaching
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Be recognized in the community
              </li>
            </ul>
            <Button asChild className="w-full">
              <a
                href="https://app.flotilla.social/join?r=chat.shakespeare.diy&c=725J9PH4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply to Become an Ambassador
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <div className="aspect-video overflow-hidden">
            <img
              src="/assets/press/satsconf-brazil-2025/alex-workshop.jpeg"
              alt="Workshop"
              className="w-full h-full object-cover"
              style={{ objectPosition: '50% 10%' }}
            />
          </div>
          <CardHeader>
            <CardTitle>Host a Workshop</CardTitle>
            <CardDescription>
              Already know Shakespeare well? Host a workshop in your area and teach others how to
              build amazing websites with AI.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <a href="/blog/shakespeare-workshop-guide">
                View Workshop Guide
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <h2>Chat Channels</h2>

      <p>
        Shakespeare Chat is organized into channels to help you find the right conversations. Here's
        what you'll find:
      </p>

      <div className="not-prose my-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Megaphone className="h-4 w-4 text-blue-500" />
              </div>
              <CardTitle className="text-base">#announcements</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Official updates about Shakespeare features, releases, and important news from the
              team.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-purple-500" />
              </div>
              <CardTitle className="text-base">#feedback</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Share your ideas, suggestions, and feedback to help improve Shakespeare.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                <GitBranch className="h-4 w-4 text-green-500" />
              </div>
              <CardTitle className="text-base">#git</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Follow along with the latest commits and development activity on Shakespeare.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                <Lightbulb className="h-4 w-4 text-yellow-500" />
              </div>
              <CardTitle className="text-base">#prompts</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Share and discover effective prompts for building better projects with AI.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center">
                <Image className="h-4 w-4 text-pink-500" />
              </div>
              <CardTitle className="text-base">#showcase</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Show off your Shakespeare creations and get inspired by what others have built.
            </p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                <LifeBuoy className="h-4 w-4 text-red-500" />
              </div>
              <CardTitle className="text-base">#support</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Get help from the community when you're stuck or have questions about using
              Shakespeare.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Resources and FAQs</h2>

      <p>
        The community page also includes a collection of helpful resources and frequently asked
        questions to help you get the most out of Shakespeare.
      </p>

      <div className="not-prose my-8 grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <CardTitle>Featured Guides</CardTitle>
            </div>
            <CardDescription>Learn tips and tricks from the community</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <a
              href="/blog/how-to-prompt-better-projects"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
            >
              <div>
                <p className="font-medium group-hover:text-primary transition-colors">
                  How to Prompt Better Projects
                </p>
                <p className="text-sm text-muted-foreground">by Derek Ross</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href="/blog/shakespeare-deploying-sharing-projects"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
            >
              <div>
                <p className="font-medium group-hover:text-primary transition-colors">
                  Deploying your Shakespeare project
                </p>
                <p className="text-sm text-muted-foreground">by M.K. Fain</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href="/blog/debugging-in-shakespeare"
              className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group"
            >
              <div>
                <p className="font-medium group-hover:text-primary transition-colors">
                  Debugging in Shakespeare
                </p>
                <p className="text-sm text-muted-foreground">by Derek Ross</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
            </a>
            <Button asChild variant="ghost" className="w-full mt-2">
              <a href="/shakespeare-resources">
                View All Resources
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              <CardTitle>Frequently Asked Questions</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-sm">What is Shakespeare and how does it work?</h4>
              <p className="text-sm text-muted-foreground">
                Shakespeare is an AI-powered website builder that lets you create custom websites by
                chatting with AI. Simply describe what you want to build, and AI will code, design,
                and deploy your site for you.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Do I need coding experience?</h4>
              <p className="text-sm text-muted-foreground">
                No coding experience required! Shakespeare is designed for everyone. Just describe
                your ideas in plain language and let the AI handle the technical details.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Where can I get help if I'm stuck?</h4>
              <p className="text-sm text-muted-foreground">
                Join Shakespeare Chat at chat.shakespeare.diy to connect with other builders, get
                help from the community, and share what you're building!
              </p>
            </div>
            <Button asChild variant="ghost" className="w-full mt-2">
              <a href="/shakespeare-resources">
                View All FAQs
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <h2>Join the Community Today</h2>

      <p>
        The Shakespeare Community is just getting started, and we'd love to have you be a part of
        it. Whether you're a seasoned developer or just getting started with AI-powered web
        development, there's a place for you here.
      </p>

      <div className="not-prose my-8">
        <Card className="border-dashed border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Join?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Join Shakespeare Chat to connect with the community, get help with your projects, and
              be part of the conversation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <a
                  href="https://app.flotilla.social/join?r=chat.shakespeare.diy&c=725J9PH4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join Shakespeare Chat
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/shakespeare-community">
                  Visit Community
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Learn More</h2>

      <ul>
        <li>
          <a href="/blog/announcing-shakespeare">Announcing Shakespeare</a> — The original
          announcement of Shakespeare
        </li>
        <li>
          <a href="/blog/shakespeare-workshop-guide">How to Host a Shakespeare Workshop</a> —
          Complete guide to hosting your own workshop
        </li>
        <li>
          <a href="/shakespeare-resources">Shakespeare Resources</a> — Tutorials, guides, and FAQs
        </li>
        <li>
          <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
            shakespeare.diy
          </a>{' '}
          — Start building with Shakespeare
        </li>
      </ul>

      <p className="text-xl font-semibold text-center text-primary mt-12">
        See you in the community!
      </p>
    </article>
  );
}
