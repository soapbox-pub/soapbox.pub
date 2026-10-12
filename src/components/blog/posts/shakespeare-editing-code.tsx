import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { YouTubeEmbed } from '../../YouTubeEmbed';

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
  "slug": "shakespeare-editing-code",
  "title": "Editing the code in Shakespeare",
  "excerpt": "Master the code editor in Shakespeare, learn keyboard shortcuts, understand the interface, and efficiently edit your projects with AI assistance.",
  "coverImage": "/assets/blog/shakespeare-code-editor/shakespeare-code-editor.png",
  "date": "2025-09-18",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/shakespeare-code-editor/shakespeare-code-editor.png"
  },
  "featured": false,
  "tags": ["shakespeare-resource", "code-editor", "interface"]
};

export default function ShakespeareEditingCode() {
  return (
    <article className="prose prose-lg max-w-none [&_img]:shadow-none [&_img]:border-0">

      {/* Video Tutorial */}
      <div className="not-prose mb-12">
        <YouTubeEmbed
          src="https://www.youtube.com/embed/A9NFYxDHOw0?si=mRl5T0bLW8sbv24z"
          title="How to Edit Code in Shakespeare"
        />
      </div>

      <p className="text-lg text-gray-700 mb-8">
        Shakespeare gives you the freedom to edit your code directly in the web browser and even run a terminal entirely online. Whether you need to make quick adjustments or dive deep into your project files, Shakespeare's built-in tools provide a seamless development experience without leaving your browser.
      </p>

      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        🔧 Editing Code in the Browser
      </h2>

      <p className="mb-6">
        From the preview pane, you can easily access Shakespeare's built-in code editor to make changes to your project files.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-blue-800">
          📝 How to Access the Code Editor
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>From the preview pane, click the code <code className="bg-gray-200 px-2 py-1 rounded">&lt;&gt;</code> icon in the top right corner</li>
          <li>This opens Shakespeare's simple text editor with mobile support</li>
          <li>Make your changes to the code</li>
          <li>Click <strong>Save</strong> when you're done editing</li>
          <li>Go to the hamburger menu and select <strong>Rebuild</strong> to see your changes</li>
        </ol>
      </div>

      <div className="my-8">
        <img
          src="/assets/images/shakespeare-screenshots/edit-the-code.png"
          alt="Shakespeare code editor interface showing the code icon and editor view"
        />
        <p className="text-sm text-gray-600 mt-2 text-center">
          The Shakespeare code editor provides a clean, simple interface for editing your project files
        </p>
      </div>

      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        💻 Terminal Access
      </h2>

      <p className="mb-6">
        For more advanced development tasks, Shakespeare also provides terminal access directly in your browser.
      </p>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold mb-4 text-green-800">
          🖥️ How to Access the Terminal
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>From the code editor view, click the terminal icon <code className="bg-gray-200 px-2 py-1 rounded">&gt;_</code> in the top right of the pane</li>
          <li>This opens a web-based terminal with support for basic terminal commands</li>
          <li>Use standard commands like <code className="bg-gray-200 px-2 py-1 rounded">ls</code>, <code className="bg-gray-200 px-2 py-1 rounded">cd</code>, etc.</li>
          <li>Perfect for running build commands, installing packages, or debugging</li>
        </ol>
      </div>

      <div className="my-8">
        <img
          src="/assets/images/shakespeare-screenshots/shakespeare-terminal.png"
          alt="Shakespeare terminal interface showing command line access in the browser"
        />
        <p className="text-sm text-gray-600 mt-2 text-center">
          The Shakespeare terminal provides full command-line access without leaving your browser
        </p>
      </div>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Build with Shakespeare?
            </h3>
            <p className="text-muted-foreground mb-6">
              Start building amazing projects with AI-powered development on Nostr.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3"
                >
                  <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                    🎭 Try Shakespeare
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple-200 text-purple-700 hover:bg-purple-50 font-semibold px-8 py-3"
                >
                  <a href="/shakespeare-resources">
                    📚 More Resources
                  </a>
                </Button>
              </div>
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