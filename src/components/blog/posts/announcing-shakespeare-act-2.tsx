import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { ShakespeareMailchimpForm } from '../../ShakespeareMailchimpForm';

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
  "slug": "announcing-shakespeare-act-2",
  "title": "Shakespeare: Act 2 - Complete AI Development Environment in the Browser",
  "excerpt": "Shakespeare Act 2 transforms from a simple AI website builder into a full-featured development environment, entirely in your browser (no downloads required!). With local file storage, any AI provider support, built-in Git integration, and complete project export - all while remaining 100% open source and decentralized.",
  "coverImage": "/assets/blog/shakespeare-act2-cover.png",
  "date": "2025-10-01",
  "author": {
    "name": "M.K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/shakespeare-act2-cover.png"
  },
  "featured": true,
  "tags": ["shakespeare", "ai", "announcement", "open-source", "development"]
};

export default function AnnouncingShakespeareAct2() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>User Freedom and Choice</h2>

      <p>
        Companies like <strong>Lovable</strong>, <strong>Replit</strong>, and <strong>Cursor</strong> lock you into their platforms, AI models, and hosting solutions. Shakespeare Act 2 gives you complete freedom to choose your AI provider, Git service, deployment platform, and data storage approach.
      </p>
{/*
      <div className="not-prose my-8">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-red-200 dark:border-red-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-lg font-bold mb-2 text-red-700 dark:text-red-300">Proprietary Tools</h3>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                <li>• Locked to their AI models</li>
                <li>• Forced hosting on their platforms</li>
                <li>• Subscription-only pricing</li>
                <li>• Proprietary, closed source</li>
                <li>• Limited export and migration</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 dark:border-yellow-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-2 text-yellow-700 dark:text-yellow-300">Act 1</h3>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                <li>• Nostr-based conversations</li>
                <li>• Multiple AI providers</li>
                <li>• Pay-per-use pricing</li>
                <li>• Open source foundation</li>
                <li>• Basic project export</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">🗽</div>
              <h3 className="text-lg font-bold mb-2 text-green-700 dark:text-green-300">Act 2</h3>
              <ul className="text-sm text-muted-foreground space-y-1 text-left">
                <li>• Choose any AI provider + local models</li>
                <li>• Deploy to any hosting platform</li>
                <li>• Pay-per-use OR free local AI</li>
                <li>• 100% open source (AGPL-3.0)</li>
                <li>• Complete project ownership</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div> */}

      <h3>AI Provider Choice</h3>
      <p>
        Unlike other tools that lock you into their AI models, Shakespeare Act 2 supports <strong>any AI provider</strong>. Bring your own API keys for OpenAI, Anthropic, Routstr, PayPerQ, and more, run and connect to your own model locally, or use our pay-per-use Shakespeare AI services.
      </p>

      <div className="not-prose my-8">
        <img
          src="/assets/images/shakespeare-screenshots/settings-add-openrouter-key.png"
          alt="AI provider selection interface showing multiple options"
        />
      </div>


      <h3>Development Environment</h3>
      <p>
        Act 2 provides a complete development environment in the browser. No more sacrificing control for convenience. You get a complete web text editor, file uploads, terminal commands in chat, live preview, Git integration, and full project export.
      </p>

      <div className="not-prose my-8">
        <div className="space-y-6">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 text-green-600 dark:text-green-400 font-bold text-sm min-w-[2rem] text-center">1</div>
                <div>
                  <h4 className="font-semibold mb-2">Code Editor</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Complete control over your project files. Review and edit the code without leaving your web browser.
                  </p>
                  <div className="not-prose my-4">
                    <img
                      src="/shakespeare-resources/edit-the-code-in-browser.png"
                      alt="File editor in the browser"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 text-blue-600 dark:text-blue-400 font-bold text-sm min-w-[2rem] text-center">2</div>
                <div>
                  <h4 className="font-semibold mb-2">Git Integration</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Use any Git provider you prefer. GitHub, GitLab, or custom providers. Import existing repositories, track changes, and push and pull updates wherever you want.
                  </p>
                  <div className="not-prose my-4">
                    <img
                      src="/shakespeare-resources/connect-your-git-account.png"
                      alt="Git integration setup interface"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 text-purple-600 dark:text-purple-400 font-bold text-sm min-w-[2rem] text-center">3</div>
                <div>
                  <h4 className="font-semibold mb-2">Preview and Building</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Live preview with hot reload, built-in development server, and production builds. See changes instantly as the AI or you edit code.
                  </p>
                  <div className="not-prose my-4">
                    <img
                      src="/assets/images/shakespeare-screenshots/make-website-example-kpop-pulse.png"
                      alt="File editor in the browser"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 dark:bg-orange-900 rounded-full p-2 text-orange-600 dark:text-orange-400 font-bold text-sm min-w-[2rem] text-center">4</div>
                <div>
                  <h4 className="font-semibold mb-2">Deploy and Export</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Use our built-in, free, deployment service or export your complete project and deploy anywhere you choose. No lock-in. No restrictions. No hosting costs.
                  </p>
                  <div className="not-prose my-4">
                    <img
                      src="/shakespeare-resources/project-settings-export-and-delete.png"
                      alt="Project export and settings interface"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>Comparison with Other AI Development Tools</h2>

      <div className="not-prose my-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-700 text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Feature</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Lovable</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Replit</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Cursor</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">v0</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">Base44</th>
                <th className="border border-gray-300 dark:border-gray-700 p-3 text-left font-bold">Shakespeare Act 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Source Code</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">🔒 Proprietary</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">🔒 Proprietary</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">🔒 Proprietary</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">🔒 Proprietary</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">🔒 Proprietary</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-bold">🗽 Open source</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Pricing</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">💳 $20-200/month</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">💳 $7-25/month</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">💳 $20/month</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">💳 Free tier + usage</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">💳 Subscription</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-bold">💰 Pay-per-use OR free</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Payment Options</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">💳 USD only</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">💳 USD only</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">💳 USD only</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">💳 USD only</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">💳 USD only</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-bold">⚡ USD or Bitcoin</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">AI Choice</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">🔒 Fixed selection</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">🔒 Fixed selection</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">🔒 OpenAI/Claude only</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">🔒 Vercel's models</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">🔒 Fixed selection</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-bold">🗽 Any</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Local LLM Support</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-bold">✅ Yes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Import Existing Projects</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">✅ Yes</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">✅ Yes</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-bold">✅ Yes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Project Export</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">📤 Limited</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">✅ Full export</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">✅ Full export</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">📋 Copy code</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">📤 Limited</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-bold">✅ Full export</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Git Integration</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">🔄 Github only</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">✅ Yes</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">✅ Yes</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No Git</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">🔄 Basic Git</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-bold">✅ Yes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Nostr Support</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-bold">✅ Yes</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-medium">Privacy</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3">❌ No</td>
                <td className="border border-gray-300 dark:border-gray-700 p-3 font-bold">✅ Private unless you share</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>





      <h2>What You Can Build</h2>

      <p>
        Shakespeare Act 2 can create web applications across multiple categories. Here are examples:
      </p>

      <div className="not-prose my-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">E-commerce Platforms</h4>
              <p className="text-sm text-muted-foreground mb-3">
                "Build a marketplace for handmade crafts with user accounts, product catalogs, shopping cart, payment integration, and admin dashboard."
              </p>
              <div className="not-prose my-3">
                <img
                  src="/assets/images/shakespeare-screenshots/coffeeshop-exmaple.png"
                  alt="Coffee shop website example"
                  className="w-full rounded-lg shadow-sm"
                />
              </div>

            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Social Platforms</h4>
              <p className="text-sm text-muted-foreground mb-3">
                "Create a Twitter-like platform for my photography community with image uploads, comments, likes, and user profiles."
              </p>
              <div className="not-prose my-3">
                <img
                  src="/assets/images/shakespeare-screenshots/bookstr-example.png"
                  alt="Social platform example - Bookstr"
                  className="w-full rounded-lg shadow-sm"
                />
              </div>

            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Interactive Apps</h4>
              <p className="text-sm text-muted-foreground mb-3">
                "Create a quiz platform for my educational content with progress tracking, leaderboards, and certificate generation."
              </p>
              <div className="not-prose my-3">
                <img
                  src="/assets/images/shakespeare-screenshots/kanban-example.png"
                  alt="Interactive app example - Kanban board"
                  className="w-full rounded-lg shadow-sm"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-2">Business Dashboards</h4>
              <p className="text-sm text-muted-foreground mb-3">
                "Build an analytics dashboard for tracking my freelance business with client management, project timelines, and revenue charts."
              </p>
              <div className="not-prose my-3">
                <img
                  src="/assets/images/shakespeare-screenshots/blockparty-example.png"
                  alt="Business dashboard example - BlockParty"
                  className="w-full rounded-lg shadow-sm"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>



      <div className="not-prose my-8">
        <Card className="border-dashed border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Try Shakespeare Act 2 Now
            </h3>
            <p className="text-muted-foreground mb-6">
              Start building today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3"
              >
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  Launch Shakespeare Act 2
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300"
              >
                <a href="https://github.com/soapbox-pub/shakespeare" target="_blank" rel="noopener noreferrer">
                  View Source Code
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to learn more?
          </h3>
          <p className="text-lg text-muted-foreground">
            Sign up to get the latest tips and tricks about building with Shakespeare!
          </p>
        </div>
        <ShakespeareMailchimpForm />
      </div>

      <hr className="my-12" />

      <p className="text-sm text-muted-foreground text-center">
        <em>
          Shakespeare Act 2 is developed by the team behind Soapbox, Ditto, and Nostrify.
          We build tools for a decentralized, user-controlled internet.
        </em>
      </p>
    </article>
  );
}