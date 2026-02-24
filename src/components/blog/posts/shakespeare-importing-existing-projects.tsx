import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { EditWithShakespeareButton } from '../../EditWithShakespeareButton';
import { Badge } from '../../ui/badge';
import { CheckCircle, GitBranch, Upload, Download } from 'lucide-react';
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
  "slug": "shakespeare-importing-existing-projects",
  "title": "Importing existing projects to Shakespeare",
  "excerpt": "Learn how to bring your existing codebases into Shakespeare, migrate from other platforms, and continue development with AI assistance.",
  "coverImage": "/assets/blog/shakespeare-importing-projects/shakespeare-importing-projects.png",
  "date": "2025-09-18",
  "author": {
    "name": "M. K. Fain",
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

      {/* Video Tutorial */}
      <div className="not-prose mb-12">
        <YouTubeEmbed
          src="https://www.youtube.com/embed/w08Rj6V2EzA?si=tKYBTa9jwDokI-Ea"
          title="How to Import Projects Into Shakespeare"
        />
      </div>

      {/* Project Compatibility Requirements */}
      <div className="not-prose mb-12">
        <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                What projects are compatible with Shakespeare?
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">1</Badge>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Must be a web-based project</p>
                  <p className="text-gray-600 dark:text-gray-400">Shakespeare works with frontend web applications that run in the browser</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300 mt-1">2</Badge>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">Must have these files: index.html, package.json, package-lock.json</p>
                  <p className="text-gray-600 dark:text-gray-400">These core files help Shakespeare understand your project structure</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300 mt-1">3</Badge>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-100">You must have the source code either in a git repository or zip file</p>
                  <p className="text-gray-600 dark:text-gray-400">Shakespeare can import from GitHub, GitLab, or zip archives</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Import Methods */}
      <div className="not-prose mb-12">

        {/* Method 1: Import via Git */}
        <Card className="mb-8 border-blue-200 dark:border-blue-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <GitBranch className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                1. Import via Git
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Use the HTTPS clone address to import your repository directly into Shakespeare.
            </p>

            <div className="mb-6">
              <img
                src="/assets/images/shakespeare-screenshots/import-from-git.png"
                alt="Import from Git interface showing repository URL input field"
                className="rounded-lg w-full max-w-4xl mx-auto"
              />
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-4">
                💡 Pro tip: Anywhere you see this "Edit with Shakespeare" button, you can clone the repository in one click directly into Shakespeare!
              </p>
              <p className="text-blue-800 dark:text-blue-200 mb-4">
                Try it here with the Soapbox website:
              </p>
              <EditWithShakespeareButton
                gitUrl="https://gitlab.com/soapbox-pub/soapbox.pub.git"
                className="w-full sm:w-auto"
              />
            </div>
          </CardContent>
        </Card>

        {/* Method 2: Import via Zip */}
        <Card className="mb-8 border-green-200 dark:border-green-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Upload className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                2. Importing via zip
              </h3>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">1</Badge>
                <p className="text-gray-600 dark:text-gray-400">Click the three dots menu</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">2</Badge>
                <p className="text-gray-600 dark:text-gray-400">Select "Import Zip file"</p>
              </div>
            </div>

            <div className="mb-6">
              <img
                src="/assets/images/shakespeare-screenshots/import-from-zip.png"
                alt="Import from zip interface showing three dots menu with import zip file option"
                className="rounded-lg w-full max-w-4xl mx-auto"
              />
            </div>
          </CardContent>
        </Card>

        {/* Method 3: Import from Act 1 */}
        <Card className="mb-8 border-orange-200 dark:border-orange-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Download className="h-8 w-8 text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                3. Importing from Shakespeare Act 1
              </h3>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300 mt-1">1</Badge>
                <p className="text-gray-600 dark:text-gray-400">
                  Go to your project at: <a href="https://act1.shakespeare.diy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://act1.shakespeare.diy/</a>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300 mt-1">2</Badge>
                <p className="text-gray-600 dark:text-gray-400">Export project as zip</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300 mt-1">3</Badge>
                <p className="text-gray-600 dark:text-gray-400">Import into Act 2 as zip (using method 2 above)</p>
              </div>
            </div>

            <div className="mb-6">
              <img
                src="/assets/images/shakespeare-screenshots/export-from-act1.png"
                alt="Export from Act 1 interface showing project export options"
                className="rounded-lg w-full max-w-4xl mx-auto"
              />
            </div>
          </CardContent>
        </Card>
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