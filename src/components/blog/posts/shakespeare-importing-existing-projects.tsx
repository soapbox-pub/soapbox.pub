import React from 'react';
import { Card, CardContent } from '../../ui/card';
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
  "slug": "shakespeare-importing-existing-projects",
  "title": "Importing existing projects to Shakespeare",
  "excerpt": "Learn how to bring your existing codebases into Shakespeare, migrate from other platforms, and continue development with AI assistance.",
  "coverImage": "/assets/blog/shakespeare-importing-projects/shakespeare-importing-projects.png",
  "date": "2025-09-18",
  "author": {
    "name": "M.K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/shakespeare-importing-projects/shakespeare-importing-projects.png"
  },
  "featured": false,
  "tags": ["shakespeare-resource", "import", "migration"]
};

export default function ShakespeareImportingExistingProjects() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 rounded-2xl p-8 text-center border border-purple-200 dark:border-purple-800">
          <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-300 dark:border-blue-700">
            📚 Shakespeare Resource
          </div>
          <h2 className="text-4xl font-bold mb-4">
            📥 <span className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Importing existing projects to Shakespeare</span>
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Migrate your existing codebases and continue with AI assistance
          </h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="not-prose my-12">
              <Card className="border-dashed border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">🚧</div>
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    Coming Soon!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    This step-by-step guide to importing existing projects into Shakespeare is currently being written. Check back soon for migration instructions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Build with Shakespeare?
            </h3>
            <p className="text-muted-foreground mb-6">
              Start building amazing projects with AI-powered development on Nostr.
            </p>
            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3"
              >
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  🎭 Try Shakespeare
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Turn your ideas into reality through natural conversation with AI
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}