import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { ExternalLink } from 'lucide-react';

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
  "slug": "inkwell-born-in-walmart",
  "title": "Inkwell: A Writing App Born in Walmart",
  "excerpt": "I built a Nostr blog publishing tool while waiting for new tires. When existing apps failed me, Shakespeare helped me solve my own problem for about $3.",
  "coverImage": "/assets/blog/inkwell/inkwell-cover.jpg",
  "date": "2026-01-10",
  "author": {
    "name": "Derek Ross",
    "picture": "/assets/avatars/derek.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/inkwell/inkwell-cover.jpg"
  },
  "featured": true,
  "tags": ["shakespeare", "nostr", "vibe-coding", "inkwell"]
};

export default function InkwellBornInWalmart() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        Yesterday I was sitting in the Walmart waiting area while my car got new tires. I had some time to kill and wanted to write a blog post. Should be simple, right? Open an app, write, publish. Except it wasn't.
      </p>

      <h2>When Every App Fails You</h2>

      <p>
        I tried <strong>Yakihonne</strong>. Bugs. I tried <strong>Habla.news</strong>. Didn't work on mobile. <strong>Highlighter</strong>? Same story. <strong>Primal</strong>? Nope. Every Nostr blogging app I tried either had bugs or just flat out did not work on mobile.
      </p>

      <p>
        This is a frustrating reality that many Nostr users face. The ecosystem is young, and mobile support for long-form content is hit or miss. Most developers optimize for desktop first, leaving mobile users scrambling.
      </p>

      <p>
        But here's the thing about building on Nostr: <strong>you don't have to wait for someone else to fix your problems.</strong>
      </p>

      <h2>Building My Own Solution</h2>

      <p>
        I pulled up <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">Shakespeare</a> on my <a href="/blog/shakespeare-mobile-development">phone</a> and gave it a simple prompt:
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-purple-500">
          <CardContent className="p-6">
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
              "I want a simple and elegant writing app to publish blogs on Nostr. Nothing else, just writing."
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        That was it. No complex requirements document. No feature spec. Just a clear statement of what I needed.
      </p>

      <p>
        <strong>It cost me about $3.00 to create.</strong>
      </p>

      <p>
        By the time my tires were done, I had a working blog publishing tool. I published a new <a href="/blog/announcing-soapbox-sessions-podcast">Soapbox Sessions</a> blog post with it. Mission accomplished.
      </p>

      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200">
              The Result: Inkwell
            </h4>
            <p className="text-green-700 dark:text-green-300 text-sm mb-4">
              A simple, elegant markdown editor that publishes directly to Nostr. No accounts to create. No platforms to trust. Just write and publish.
            </p>
            <Button asChild variant="outline" className="border-green-600 text-green-700 hover:bg-green-100">
              <a href="https://inkwell.shakespeare.wtf" target="_blank" rel="noopener noreferrer">
                Try Inkwell
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <figure className="my-8">
        <img
          src="/assets/blog/inkwell/inkwell-landing.png"
          alt="Inkwell landing page - Write beautifully. Publish freely."
          className="rounded-lg shadow-lg w-full"
        />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          Inkwell's landing page - simple and focused
        </figcaption>
      </figure>

      <div className="my-8">
        <div className="grid grid-cols-2 gap-4">
          <figure>
            <img
              src="/assets/blog/inkwell/inkwell-mobile-landing.png"
              alt="Inkwell mobile landing page"
              className="rounded-lg shadow-lg w-full"
            />
          </figure>
          <figure>
            <img
              src="/assets/blog/inkwell/inkwell-mobile-editor.png"
              alt="Inkwell mobile editor"
              className="rounded-lg shadow-lg w-full"
            />
          </figure>
        </div>
        <p className="text-center text-sm text-muted-foreground mt-2">
          Works great on mobile - exactly what I needed at Walmart
        </p>
      </div>

      <h2>Adding Features That Matter</h2>

      <p>
        Today I went back and added a couple features I wanted to see:
      </p>

      <ul>
        <li><strong>Draft saving to relays</strong> instead of locally - so I can start writing on my phone and finish on my laptop</li>
        <li><strong>Editing existing articles</strong> - because typos happen</li>
        <li><strong>Improved mobile formatting toolbar</strong> - making it easier to format text on smaller screens</li>
      </ul>

      <figure className="my-8">
        <img
          src="/assets/blog/inkwell/inkwell-editor.png"
          alt="Inkwell editor interface with markdown formatting toolbar"
          className="rounded-lg shadow-lg w-full"
        />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          The clean, distraction-free editor with formatting toolbar
        </figcaption>
      </figure>

      <p>
        I probably won't be adding a whole lot more to this. I just want a simple place to publish a blog without a bunch of extra bells and whistles. Inkwell does that for me.
      </p>

      <h2>Why This Matters</h2>

      <p>
        This story isn't really about Inkwell. It's about what's now possible.
      </p>

      <p>
        <strong>We've entered an era where solving your own problems is cheaper than complaining about them.</strong> Three dollars and a tire rotation's worth of time gave me exactly the tool I needed.
      </p>

      <div className="not-prose my-8">
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="border-gray-200 dark:border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">$3</div>
              <p className="text-sm text-muted-foreground">Total cost to build</p>
            </CardContent>
          </Card>
          <Card className="border-gray-200 dark:border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">~1 hr</div>
              <p className="text-sm text-muted-foreground">Build time</p>
            </CardContent>
          </Card>
          <Card className="border-gray-200 dark:border-gray-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-2">0</div>
              <p className="text-sm text-muted-foreground">Lines of code I wrote</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <p>
        Think about what this means for freedom tech. The barrier between "I wish this existed" and "I built this" has collapsed. You don't need to be a developer. You don't need funding. You don't need permission from anyone.
      </p>

      <p>
        If an app doesn't work for you, build one that does. If a feature is missing, add it. If a tool doesn't exist, create it.
      </p>

      <h2>The Power of Simple Solutions</h2>

      <p>
        There's a temptation when building software to add everything. Dark mode, light mode, analytics, user accounts, premium tiers, social features, notifications, integrations...
      </p>

      <p>
        But sometimes the best tool is the simplest one. Inkwell does one thing: it lets you write and publish to Nostr. That's it. That's the whole app.
      </p>

      <p>
        When you're vibe coding with AI, this simplicity is actually a superpower. A focused prompt produces a focused tool. The less you ask for, the more likely you are to get exactly what you need.
      </p>

      <div className="not-prose my-8">
        <Card className="border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-purple-800 dark:text-purple-200">
              Prompting Tip
            </h4>
            <p className="text-purple-700 dark:text-purple-300 text-sm">
              Start with the simplest possible version of what you need. You can always add features later. A working simple tool beats a broken complex one every time.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Build Your Own</h2>

      <p>
        The next time you're frustrated that an app doesn't work the way you want, remember: you can build your own. It might take an hour. It might cost a few dollars. But you'll end up with exactly what you need.
      </p>

      <p>
        That's the promise of AI-first development on Nostr. Not just consuming technology, but creating it. Not waiting for someone to solve your problems, but solving them yourself.
      </p>

      <p>
        All it takes is a simple prompt and the willingness to try.
      </p>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">Write beautifully. Publish freely.</div>
            <p className="text-muted-foreground mb-6">
              Try Inkwell for your next Nostr blog post, or use Shakespeare to build your own tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
              >
                <a href="https://inkwell.shakespeare.wtf" target="_blank" rel="noopener noreferrer">
                  Try Inkwell
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  Build with Shakespeare
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}
