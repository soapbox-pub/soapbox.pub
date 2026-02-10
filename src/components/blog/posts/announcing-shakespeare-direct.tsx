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
  "slug": "announcing-shakespeare-direct",
  "title": "🎬 Announcing: Shakespeare Direct",
  "excerpt": "We just released our latest Shakespeare Direct presentation, a showcase of incredible apps built by our team and community using Shakespeare. Watch the full video presentation here.",
  "coverImage": "/assets/blog/announcing-shakespeare-direct/cover.png",
  "date": "2026-02-10",
  "author": {
    "name": "Quilly",
    "picture": "/assets/avatars/quilly.png"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-shakespeare-direct/cover.png"
  },
  "tags": ["shakespeare", "announcement", "video", "soapbox", "showcase"]
};

export default function AnnouncingShakespeareDirect() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            🎬 Video
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            🎭 Shakespeare
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            Showcase
          </Badge>
        </div>
      </div>

      <p className="text-xl leading-relaxed text-muted-foreground mb-8">
        We just released our Shakespeare Direct presentation, a showcase of various apps built by our team and the community using Shakespeare.
      </p>

      <div className="not-prose my-8">
        <Card className="border-dashed border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Watch Shakespeare Direct
            </h3>
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/tSmTxbpIiJ4"
                title="Shakespeare Direct Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-6">
              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <a href="https://youtu.be/tSmTxbpIiJ4" target="_blank" rel="noopener noreferrer">
                  Watch on YouTube →
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        In this presentation, we showcase the incredible versatility of Shakespeare, our AI-powered website builder for Nostr. You'll see real-world examples of applications built entirely through conversation with AI, demonstrating that you don't need to be a coder to build powerful tools.
      </p>

      <p>
        From community hubs to specialized utilities, the creativity on display is inspiring. This isn't just about what we've built—it's about what <em>you</em> can build.
      </p>

      <h2>You Can Do It Too</h2>

      <p>
        The most exciting part of this showcase is that every single app you see was built using tools available to you right now. Shakespeare empowers anyone to turn an idea into a deployed application in minutes.
      </p>

      <p>
        Have an idea for a Nostr app? A community site? A personal portfolio? You don't need to wait for a developer. You have the power to build it yourself, today.
      </p>

      <div className="not-prose my-12">
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-bold mb-4 text-green-700 dark:text-green-300">
              Ready to Build Your Idea?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Join the creators building the decentralized future. It starts with a simple conversation.
            </p>
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto px-8 py-6 text-lg bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
            >
              <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                Start Building with Shakespeare →
              </a>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              No coding required. Just bring your ideas.
            </p>
          </CardContent>
        </Card>
      </div>

    </article>
  );
}
