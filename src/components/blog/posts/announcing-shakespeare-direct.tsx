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
  "excerpt": "We just released our Shakespeare Direct presentation, a showcase of our work at Soapbox in the past year. Watch the full video presentation here.",
  "coverImage": "/assets/blog/announcing-shakespeare-direct/cover.png",
  "date": "2026-02-10",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-shakespeare-direct/cover.png"
  },
  "tags": ["shakespeare", "announcement", "video", "soapbox"]
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
            Year in Review
          </Badge>
        </div>
      </div>

      <p className="text-xl leading-relaxed text-muted-foreground mb-8">
        We just released our Shakespeare Direct presentation, a showcase of our work at Soapbox in the past year.
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
        In this presentation, we dive deep into everything we've been building, including updates on Shakespeare, our AI-powered website builder for Nostr. It's been an incredible year of shipping, learning, and iterating.
      </p>

      <p>
        Shakespeare Direct covers our journey, the technical challenges we've overcome, and our vision for the future of decentralized applications. Whether you're a developer, a creator, or just interested in the intersection of AI and Nostr, this presentation has something for you.
      </p>

      <h2>What to Expect</h2>

      <ul>
        <li>A look back at our major milestones over the last year.</li>
        <li>Deep dives into Shakespeare and how it empowers users.</li>
        <li>Insights into our development process and community feedback.</li>
        <li>A glimpse into what's coming next for Soapbox and Shakespeare.</li>
      </ul>

      <p>
        We're incredibly proud of what our team and community have achieved. This video is a celebration of that hard work and a roadmap for where we're going.
      </p>

      <div className="not-prose my-12">
        <Card className="border-green-200 dark:border-green-800">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-300">
              Build with Shakespeare
            </h3>
            <p className="text-muted-foreground mb-4">
              Inspired by what you saw? Start building your own decentralized websites today.
            </p>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
            >
              <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                Try Shakespeare Now →
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

    </article>
  );
}
