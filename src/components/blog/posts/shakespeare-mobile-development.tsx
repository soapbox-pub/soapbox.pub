import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Smartphone, Download, Settings, GitBranch, FolderOpen, Terminal, Eye, Code } from 'lucide-react';

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
  "slug": "shakespeare-mobile-development",
  "title": "AI-First Development on Mobile: Shakespeare Changes the Game",
  "excerpt": "While other vibe coding apps struggle to gain traction on mobile, Shakespeare delivers a full AI development experience that works beautifully on your phone. Here's how to get started.",
  "coverImage": "/assets/blog/shakespeare-mobile-development/cover.png",
  "date": "2025-12-16",
  "author": {
    "name": "Derek Ross",
    "picture": "/assets/avatars/aos.png"
  },
  "ogImage": {
    "url": "/assets/blog/shakespeare-mobile-development/cover.png"
  },
  "tags": ["shakespeare-resource", "mobile", "pwa", "nostr-git"]
};

export default function ShakespeareMobileDevelopment() {
  return (
    <article className="prose prose-lg max-w-none">

      {/* The Problem with Mobile Vibe Coding */}
      <p className="text-xl leading-relaxed">
        If you've tried using AI to build apps on your phone, you've probably been disappointed. A recent <a href="https://techcrunch.com/2025/09/23/dedicated-mobile-apps-for-vibe-coding-have-so-far-failed-to-gain-traction/" target="_blank" rel="noopener noreferrer">TechCrunch report</a> found that dedicated mobile apps for vibe coding have largely failed to gain traction:
      </p>

      <blockquote className="border-l-4 border-purple-500 pl-6 my-8 italic text-gray-700">
        "Despite the massive success of vibe-coding startups on desktop (with billion-dollar valuations), dedicated mobile apps in this space have virtually failed to gain traction. The largest app, Instance: AI App Builder, has only 16,000 downloads and $1,000 in consumer spending. The consensus: vibe coding is not ready for prime time on mobile devices."
      </blockquote>

      <p>
        The data paints a bleak picture for mobile developers who want to build with AI. Most solutions are clunky, limited, or simply don't work well on smaller screens. But there's an exception that the mainstream hasn't discovered yet.
      </p>

      {/* Shakespeare is Different */}
      <div className="not-prose my-12">
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="h-8 w-8 text-purple-600" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Shakespeare: The Mobile Exception
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Shakespeare is a Progressive Web App (PWA) that installs directly on your phone and works like a native app. Unlike dedicated mobile coding apps that try to reinvent the wheel, Shakespeare leverages modern web technology to deliver a full development experience that actually works on mobile.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">PWA</Badge>
                <p className="text-gray-600">Installs on your home screen, works offline</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300 mt-1">Nostr Git</Badge>
                <p className="text-gray-600">Sync projects between all your devices</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300 mt-1">AI Chat</Badge>
                <p className="text-gray-600">Build entire apps through conversation</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300 mt-1">Live Preview</Badge>
                <p className="text-gray-600">See your changes instantly on mobile</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Getting Started: Install Shakespeare as a PWA</h2>

      <p>
        The first step is to install Shakespeare on your mobile device. Visit <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">shakespeare.diy</a> in your mobile browser and you'll see the option to install it as an app.
      </p>

      {/* Step 1: Install PWA */}
      <div className="not-prose my-8">
        <Card className="border-green-200">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Download className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Step 1: Install the PWA
              </h3>
            </div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">1</Badge>
                <p className="text-gray-600">Open <strong>shakespeare.diy</strong> in your mobile browser</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">2</Badge>
                <p className="text-gray-600">Tap the <strong>Install</strong> button when prompted (or use your browser's "Add to Home Screen" option)</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">3</Badge>
                <p className="text-gray-600">Shakespeare will now appear on your home screen like any other app</p>
              </div>
            </div>
            <div className="mb-4">
              <img
                src="/assets/blog/shakespeare-mobile-development/shakespeare-mobile-pwa-install.png"
                alt="Shakespeare PWA install prompt on mobile device"
                className="rounded-lg w-full max-w-2xl mx-auto"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step 2: Sign in with Nostr */}
      <div className="not-prose my-8">
        <Card className="border-blue-200">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Settings className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Step 2: Sign in with Nostr
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              To sync your projects across devices, you'll need to sign in with your Nostr account. This enables Nostr Git, which lets you push and pull code changes from any device.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300 mt-1">1</Badge>
                <p className="text-gray-600">Open the menu and go to <strong>Settings</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300 mt-1">2</Badge>
                <p className="text-gray-600">Select <strong>Nostr</strong></p>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300 mt-1">3</Badge>
                <p className="text-gray-600">Add your Nostr account by signing in with a Nostr signer extension or entering your nsec</p>
              </div>
            </div>
            <div className="mb-4">
              <img
                src="/assets/blog/shakespeare-mobile-development/shakespeare-mobile-nostr-settings.png"
                alt="Nostr settings page showing connected account"
                className="rounded-lg w-full max-w-md mx-auto"
              />
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>Why Nostr?</strong> Nostr Git is a decentralized version control system that stores your code on Nostr relays. This means you own your code, can access it from any device, and don't depend on any single company's servers.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step 3: Create or Import a Project */}
      <div className="not-prose my-8">
        <Card className="border-purple-200">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <FolderOpen className="h-8 w-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Step 3: Create or Import a Project
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              You can start a new project from scratch or import an existing one. If you've already created projects on desktop, you can import them directly using Nostr Git.
            </p>

            <div className="space-y-6 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Create a New Project</h4>
                <p className="text-gray-600 mb-4">
                  Tap the <strong>+ New Project</strong> button to start fresh. Just describe what you want to build and let the AI create it for you.
                </p>
                <img
                  src="/assets/blog/shakespeare-mobile-development/shakespeare-mobile-new-project-menu.png"
                  alt="New Project dropdown menu"
                  className="rounded-lg w-full max-w-md mx-auto mb-4"
                />
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Import from Nostr Git</h4>
                <p className="text-gray-600 mb-4">
                  Click the dropdown arrow next to "New Project" and select <strong>Import Repository</strong>. You'll see your existing Nostr Git projects listed under "My Projects".
                </p>
                <img
                  src="/assets/blog/shakespeare-mobile-development/shakespeare-mobile-import-repository.png"
                  alt="Import Repository page showing projects list"
                  className="rounded-lg w-full max-w-md mx-auto mb-4"
                />
                <p className="text-gray-600 mb-4">
                  Simply tap <strong>Clone</strong> on any project to import it to your mobile device.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Step 4: Work on Your Project */}
      <div className="not-prose my-8">
        <Card className="border-orange-200">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <GitBranch className="h-8 w-8 text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Step 4: Work on Your Project
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Once your project is imported, you'll see a success message and be ready to start developing. Shakespeare on mobile has all the same features as desktop:
            </p>

            <div className="grid gap-6 md:grid-cols-2 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="h-5 w-5 text-purple-600" />
                  <h4 className="font-semibold text-gray-900">Live Preview</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  See your app running in real-time as you make changes.
                </p>
                <img
                  src="/assets/blog/shakespeare-mobile-development/shakespeare-mobile-preview.png"
                  alt="Live preview of app running on mobile"
                  className="rounded-lg w-full"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold text-gray-900">Code View</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Browse and edit your project files directly.
                </p>
                <img
                  src="/assets/blog/shakespeare-mobile-development/shakespeare-mobile-code-view.png"
                  alt="Code view showing project file tree"
                  className="rounded-lg w-full"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Terminal className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-gray-900">Terminal Access</h4>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Run commands like curl, hexdump, and git directly from your phone.
              </p>
              <img
                src="/assets/blog/shakespeare-mobile-development/shakespeare-mobile-terminal.png"
                alt="Terminal interface on mobile"
                className="rounded-lg w-full max-w-md mx-auto"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Syncing Between Devices */}
      <h2>Syncing Your Work Between Devices</h2>

      <p>
        One of the most powerful features of Shakespeare is seamless device sync via Nostr Git. Any changes you make on your phone can be pushed to Nostr relays and pulled on your desktop (or any other device).
      </p>

      <div className="not-prose my-8">
        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">How Device Sync Works</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">1</Badge>
                <div>
                  <p className="font-semibold text-gray-900">Start on Desktop</p>
                  <p className="text-gray-600">Create your project and push it to Nostr Git</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">2</Badge>
                <div>
                  <p className="font-semibold text-gray-900">Continue on Mobile</p>
                  <p className="text-gray-600">Import the repository on your phone and keep building</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">3</Badge>
                <div>
                  <p className="font-semibold text-gray-900">Push Changes</p>
                  <p className="text-gray-600">When you're done, push your mobile changes to Nostr Git</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300 mt-1">4</Badge>
                <div>
                  <p className="font-semibold text-gray-900">Pull on Any Device</p>
                  <p className="text-gray-600">Your changes are now available on desktop or any other device</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        This workflow means you're never stuck waiting to get back to your computer. See a bug while you're out? Fix it on your phone. Have an idea during lunch? Start building it immediately. Your work follows you everywhere.
      </p>

      {/* Why Shakespeare Works on Mobile */}
      <h2>Why Shakespeare Works When Others Don't</h2>

      <p>
        The reason most mobile vibe coding apps fail is they try to recreate a desktop IDE experience on a tiny screen. Shakespeare takes a different approach:
      </p>

      <ul>
        <li><strong>Conversation-first interface</strong> - You don't need to navigate complex menus or type precise code. Just tell Shakespeare what you want in plain language.</li>
        <li><strong>PWA architecture</strong> - By running as a web app, Shakespeare works on any device with a modern browser. No app store approval delays or platform restrictions.</li>
        <li><strong>Decentralized sync</strong> - Nostr Git means your code isn't locked in anyone's cloud. It's stored on relays you choose and accessible from anywhere.</li>
        <li><strong>Mobile-optimized UI</strong> - The interface adapts to smaller screens, with easy switching between Chat, Preview, and Code views.</li>
      </ul>

      {/* Call to Action */}
      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Code from Anywhere?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join the developers who are building real apps on their phones with Shakespeare. It's free to try and works on any mobile device.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3"
                >
                  <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                    Try Shakespeare on Mobile
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple-200 text-purple-700 hover:bg-purple-50 font-semibold px-8 py-3"
                >
                  <a href="/shakespeare-resources">
                    More Shakespeare Resources
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Works on iPhone, Android, and any device with a modern browser
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}
