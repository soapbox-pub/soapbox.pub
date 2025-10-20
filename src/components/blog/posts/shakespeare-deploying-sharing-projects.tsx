import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Rocket, Github, GitlabIcon as Gitlab, ExternalLink, Globe } from 'lucide-react';
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
  "slug": "shakespeare-deploying-sharing-projects",
  "title": "Deploying your Shakespeare project",
  "excerpt": "Learn how to deploy your Shakespeare projects to production with one-click deployment, custom subdomains, and popular hosting platforms.",
  "coverImage": "/assets/blog/shakespeare-deploying-projects/shakespeare-importing-projects.png",
  "date": "2025-09-18",
  "author": {
    "name": "M.K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/shakespeare-deploying-projects/shakespeare-importing-projects.png"
  },
  "featured": false,
  "tags": ["shakespeare-resource", "deployment", "hosting"]
};

export default function ShakespeareDeployingSharingProjects() {
  return (
    <article className="prose prose-lg max-w-none">

      {/* Video Tutorial */}
      <div className="not-prose mb-12">
        <YouTubeEmbed
          src="https://www.youtube.com/embed/CfA95yxoH8U?si=WfqUTdYk9AqCXWUp"
          title="How to Deploy a Project in Shakespeare"
        />
      </div>

      {/* Table of Contents */}
      <div className="not-prose mb-12">
        <Card className="border-gray-200 dark:border-gray-800">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Table of Contents</h2>
            <nav className="space-y-2">
              <a href="#deploy-shakespeare" className="block text-blue-600 hover:underline">1. Deploy with Shakespeare</a>
              {/* <a href="#deploy-nsite" className="block text-blue-600 hover:underline">2. Deploy with Nsite</a> */}
              <a href="#deploy-netlify" className="block text-blue-600 hover:underline">2. Deploy with Netlify</a>
              {/* <a href="#deploy-vercel" className="block text-blue-600 hover:underline">4. Deploy with Vercel</a> */}
              <a href="#deploy-github" className="block text-blue-600 hover:underline">3. Deploy with GitHub Pages</a>
              <a href="#deploy-gitlab" className="block text-blue-600 hover:underline">4. Deploy with GitLab Pages</a>
            </nav>
          </CardContent>
        </Card>
      </div>

      {/* Deployment Methods */}
      <div className="not-prose mb-12">

        {/* Method 1: Deploy with Shakespeare */}
        <Card id="deploy-shakespeare" className="mb-8 border-blue-200 dark:border-blue-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                1. Deploying with Shakespeare
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Deploy to shakespeare.wtf subdomain - free, easy, one-click deployment with custom subdomains on a first-come, first-served basis. No custom DNS required.
            </p>

            <div className="space-y-6">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300 mt-1">Step 1</Badge>
                  <p className="text-gray-600 dark:text-gray-400">Click menu on the project preview pane → Deploy</p>
                </div>

                <div className="mb-6">
                  <img
                    src="/assets/images/shakespeare-screenshots/deploy-button.png"
                    alt="Deploy button in project preview pane menu"
                    className="rounded-lg w-full max-w-4xl mx-auto"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-start gap-3 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300 mt-1">Step 2</Badge>
                  <p className="text-gray-600 dark:text-gray-400">Select your custom subdomain</p>
                </div>

                <div className="mb-6">
                  <img
                    src="/assets/images/shakespeare-screenshots/shakespeare-wf-domain.png"
                    alt="Custom subdomain selection interface"
                    className="rounded-lg w-full max-w-4xl mx-auto"
                  />
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                ✨ Benefits of Shakespeare deployment:
              </p>
              <ul className="text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Free hosting on shakespeare.wtf subdomain</li>
                <li>• One-click deployment</li>
                <li>• Custom subdomains (first-come, first-served)</li>
                <li>• No DNS configuration required</li>
                <li>• Instant updates when you redeploy</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Method 2: Deploy with Nsite */}
        {/* <Card id="deploy-nsite" className="mb-8 border-violet-200 dark:border-violet-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-8 w-8 text-violet-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                2. Deploy with Nsite
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Deploy your static website to Nostr blossom servers. Nsite allows you to host websites on the decentralized Nostr network, tied to your npub (Nostr public key).
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-violet-100 text-violet-800 border-violet-300 mt-1">1</Badge>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Build your project in Shakespeare and download the static files
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-violet-100 text-violet-800 border-violet-300 mt-1">2</Badge>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Visit <a href="https://nsite.lol" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">nsite.lol</a> and connect your Nostr account
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-violet-100 text-violet-800 border-violet-300 mt-1">3</Badge>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Upload your static website files to publish on Nostr blossom servers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-violet-100 text-violet-800 border-violet-300 mt-1">4</Badge>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your site becomes accessible via your npub - visitors can enter your npub to view your published website
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-violet-50 dark:bg-violet-950 border border-violet-200 dark:border-violet-800 rounded-lg p-6">
              <p className="font-semibold text-violet-900 dark:text-violet-100 mb-2">
                🌐 Nsite benefits:
              </p>
              <ul className="text-violet-800 dark:text-violet-200 space-y-1">
                <li>• Decentralized hosting on Nostr network</li>
                <li>• Website tied to your npub identity</li>
                <li>• Censorship-resistant hosting</li>
                <li>• No traditional DNS required</li>
                <li>• Direct connection to Nostr ecosystem</li>
                <li>• Gateway access for easy viewing</li>
              </ul>
            </div>
          </CardContent>
        </Card> */}

        {/* Method 2: Deploy with Netlify */}
        <Card id="deploy-netlify" className="mb-8 border-teal-200 dark:border-teal-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-8 w-8 text-teal-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                2. Deploy with Netlify
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Deploy your project to Netlify for professional hosting with custom domains and advanced features.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-teal-100 text-teal-800 border-teal-300 mt-1">1</Badge>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Have an account on Netlify at <a href="https://netlify.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">netlify.com</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-teal-100 text-teal-800 border-teal-300 mt-1">2</Badge>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    In Shakespeare, go to Settings → Deployment and add Netlify, then connect your account
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-teal-100 text-teal-800 border-teal-300 mt-1">3</Badge>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Click "Deploy" and choose Netlify from the dropdown to deploy your project
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800 rounded-lg p-6">
              <p className="font-semibold text-teal-900 dark:text-teal-100 mb-2">
                🌐 Netlify benefits:
              </p>
              <ul className="text-teal-800 dark:text-teal-200 space-y-1">
                <li>• Global CDN for fast loading</li>
                <li>• Custom domain support</li>
                <li>• Automatic HTTPS</li>
                <li>• Form handling and serverless functions</li>
                <li>• Branch previews and rollbacks</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Method 3: Deploy with Vercel */}
        {/* <Card id="deploy-vercel" className="mb-8 border-purple-200 dark:border-purple-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="h-8 w-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                4. Deploy with Vercel
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Deploy your project to Vercel for edge-optimized hosting with excellent performance and developer experience.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300 mt-1">1</Badge>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Have an account on Vercel at <a href="https://vercel.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">vercel.com</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300 mt-1">2</Badge>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    In Shakespeare, go to Settings → Deployment and add Vercel, then connect your account
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300 mt-1">3</Badge>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Click "Deploy" and choose Vercel from the dropdown to deploy your project
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-lg p-6">
              <p className="font-semibold text-purple-900 dark:text-purple-100 mb-2">
                ⚡ Vercel benefits:
              </p>
              <ul className="text-purple-800 dark:text-purple-200 space-y-1">
                <li>• Edge network for optimal performance</li>
                <li>• Custom domain support</li>
                <li>• Automatic HTTPS</li>
                <li>• Serverless functions and API routes</li>
                <li>• Preview deployments for every commit</li>
                <li>• Built-in analytics and monitoring</li>
              </ul>
            </div>
          </CardContent>
        </Card> */}

        {/* Method 3: Deploy with GitHub Pages */}
        <Card id="deploy-github" className="mb-8 border-green-200 dark:border-green-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Github className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                3. Deploy with GitHub Pages
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Free hosting for public repositories with GitHub Pages.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">1</Badge>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Connect your repo to GitHub (see the <a href="/blog/shakespeare-git-guide" className="text-blue-600 hover:underline">version control resource blog</a>)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">2</Badge>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Follow these instructions for setting up GitHub Pages:
                  </p>
                  <a
                    href="https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site"
                    className="inline-flex items-center gap-2 text-blue-600 hover:underline mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Pages Setup Guide
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <p className="font-semibold text-green-900 dark:text-green-100 mb-2">
                💡 GitHub Pages benefits:
              </p>
              <ul className="text-green-800 dark:text-green-200 space-y-1">
                <li>• Free for public repositories</li>
                <li>• Custom domain support</li>
                <li>• Automatic HTTPS</li>
                <li>• Git-based deployment workflow</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Method 4: Deploy with GitLab Pages */}
        <Card id="deploy-gitlab" className="mb-8 border-orange-200 dark:border-orange-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Gitlab className="h-8 w-8 text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                4. Deploy with GitLab Pages
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Free hosting with GitLab Pages for any repository.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300 mt-1">1</Badge>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Connect your repo to GitLab (see the <a href="/blog/shakespeare-git-guide" className="text-blue-600 hover:underline">version control resource blog</a>)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300 mt-1">2</Badge>
                <div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Follow these instructions for setting up GitLab Pages:
                  </p>
                  <a
                    href="https://docs.gitlab.com/user/project/pages/"
                    className="inline-flex items-center gap-2 text-blue-600 hover:underline mt-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitLab Pages Setup Guide
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
              <p className="font-semibold text-orange-900 dark:text-orange-100 mb-2">
                🦊 GitLab Pages benefits:
              </p>
              <ul className="text-orange-800 dark:text-orange-200 space-y-1">
                <li>• Free for all repositories (public and private)</li>
                <li>• Custom domain support</li>
                <li>• Built-in CI/CD integration</li>
                <li>• Automatic HTTPS with Let's Encrypt</li>
              </ul>
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