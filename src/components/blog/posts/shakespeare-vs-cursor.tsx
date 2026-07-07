import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { 
  ExternalLink, 
  Shield, 
  Lock, 
  DollarSign, 
  Zap, 
  Globe, 
  GitBranch, 
  Rocket, 
  EyeOff, 
  CheckCircle, 
  XCircle,
  Bitcoin,
  Server,
  Code,
  Terminal,
  Eye
} from 'lucide-react';

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
  slug: 'shakespeare-vs-cursor',
  title: 'Shakespeare vs. Cursor',
  excerpt: 'Comparing Shakespeare to Cursor. Cursor is a solid code editor for professional developers, but what if you\'re not a professional developer? Or what if you want more control over your privacy, payments, and AI providers?',
  coverImage: '/assets/blog/shakespeare-vs-cursor/cover.webp',
  date: '2026-02-09',
  author: {
    name: 'Heather Larson',
    picture: '/assets/avatars/heather.jpg'
  },
  ogImage: {
    url: '/assets/blog/shakespeare-vs-cursor/cover.webp'
  },
  featured: false,
  tags: ['Shakespeare', 'Cursor', 'AI', 'Open Source', 'Comparison', 'Privacy', 'Freedom']
};

export default function ShakespeareVsCursor() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        If you're exploring AI-assisted development tools, you've probably heard of Cursor. It's a solid code editor for professional developers who want AI help while coding. But what if you're not a professional developer? Or what if you want more control over your privacy, payments, and AI providers?
      </p>

      <p>
        <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">Shakespeare</a> was built for exactly this. Whether you're a seasoned dev or someone who's never touched code, Shakespeare gives you the freedom to build websites and apps through simple conversation with AI. We dug into Cursor's documentation, terms of service, and privacy policies to see how it stacks up.
      </p>

      <div className="not-prose my-8">
        <p className="text-sm text-muted-foreground mb-4">
          If you're merely looking for truly open source AI and want a shortcut, visit our <Link to="/blog/our-stance-on-ai" className="text-azure hover:text-azure-600 underline">Really Open AI</Link> site.
        </p>
      </div>

      <h2 className="flex items-center gap-2">
        <Lock className="h-6 w-6 text-green-500" />
        Shakespeare vs. Cursor: Code Ownership
      </h2>

      <p>
        You own your code with both tools. Cursor's Terms of Service confirm this, and Shakespeare takes the same approach. Your code belongs to you, full stop.
      </p>

      <h2 className="flex items-center gap-2">
        <DollarSign className="h-6 w-6 text-yellow-500" />
        Shakespeare vs. Cursor: Pricing
      </h2>

      <p>
        Cursor offers a free Hobby tier, but it's significantly limited. For full functionality, you'll need Pro ($20/mo), Pro+ ($60/mo), or Ultra ($200/mo). Teams start at $40/user/mo.
      </p>

      <p>
        Shakespeare works differently. Bring your own API key, connect a free model on OpenRouter, or run a local LLM and you get full functionality for free. If you want to purchase credits, you only pay for what you use. No subscriptions required.
      </p>

      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-gray-500" />
                  Cursor Pricing
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="text-sm">Hobby: Free (limited)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">Pro: $20/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">Pro+: $60/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">Ultra: $200/month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-sm">Teams: $40/user/month</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Shakespeare Pricing
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free with BYOK or local LLM
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Pay-per-use credits
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    No subscriptions required
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <Bitcoin className="h-6 w-6 text-orange-500" />
        Shakespeare vs. Cursor: Payment Options
      </h2>

      <div className="not-prose my-8">
        <Card className="border-orange-200 dark:border-orange-800">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-gray-500" />
                  Cursor
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Credit cards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Cash App Pay
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Bank accounts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Alipay
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    No Bitcoin
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Shakespeare
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Credit cards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Bitcoin payments
                  </li>
                </ul>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  We allow you to pay using Bitcoin so you can pay for AI credits without linking your identity to your payment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <Code className="h-6 w-6 text-purple-500" />
        Shakespeare vs. Cursor: AI Provider Choice
      </h2>

      <p>
        Both tools let you connect to models from OpenAI, Anthropic, Google, and others. Both support bringing your own API keys. Shakespeare adds increased privacy through Maple AI, which uses end-to-end encryption. You're not locked into any single ecosystem.
      </p>

      <div className="not-prose my-8">
        <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-6">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Learn More About AI in Shakespeare</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/shakespeare-ai-model-selection" className="text-azure hover:text-azure-600 underline">
                  Choosing AI Models with Shakespeare
                </Link>
              </li>
              <li>
                <Link to="/blog/shakespeare-configuring-ai-providers" className="text-azure hover:text-azure-600 underline">
                  Configuring AI Providers in Shakespeare
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <Server className="h-6 w-6 text-blue-500" />
        Shakespeare vs. Cursor: Local LLM Support
      </h2>

      <p>
        Cursor doesn't natively support local LLMs. Workarounds exist, but setup is technical and uses tunneling, like ngrok. A non-technical user will need help to set this up with Cursor. But if you're already skilled enough to set up a local LLM, you should be able to figure out how to run a local LLM with Cursor.
      </p>

      <p>
        Shakespeare supports local LLMs through Ollama with straightforward configuration. No tunneling required. You can also run everything fully offline.
      </p>

      <div className="not-prose my-8">
        <Card className="border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Server className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 m-0">
                Get Started with Local AI
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To get started with local LLMs in Shakespeare, check out our quick guide:
            </p>
            <Link to="/blog/shakespeare-local-ai-model" className="text-azure hover:text-azure-600 underline font-medium">
              Using Local AI Models with Shakespeare
            </Link>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <GitBranch className="h-6 w-6 text-green-500" />
        Shakespeare vs. Cursor: Import, Export, and Git
      </h2>

      <p>
        Both tools connect to GitHub and GitLab. Cursor imports from VS Code; Shakespeare imports from Git repos or ZIP files. The difference: Shakespeare doesn't assume you already know Git. It guides you through version control, and you can create pull requests without leaving the app.
      </p>

      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Learn More About Git in Shakespeare</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/shakespeare-importing-existing-projects" className="text-azure hover:text-azure-600 underline">
                  Importing Existing Projects to Shakespeare
                </Link>
              </li>
              <li>
                <Link to="/blog/shakespeare-version-control" className="text-azure hover:text-azure-600 underline">
                  Using Version Control in Shakespeare
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <Rocket className="h-6 w-6 text-orange-500" />
        Shakespeare vs. Cursor: Deployment
      </h2>

      <p>
        You can deploy what you build in Cursor by using third-party hosting services like Vercel or Netlify. It works with any deployment provider that has a command line interface (CLI) or that offers CI/CD integration.
      </p>

      <p>
        Shakespeare deploys for free from in-app using a free .wtf domain. Every project gets a public URL the moment you create it. No configuration, no waiting.
      </p>

      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 m-0">
                Shakespeare Deployment Options
              </h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Free .wtf domain</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Netlify</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Vercel</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Cloudflare</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Deno Deploy</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Railway</Badge>
            </div>
            <Link to="/blog/shakespeare-deploying-sharing-projects" className="text-azure hover:text-azure-600 underline font-medium">
              Learn about Deploying Shakespeare Projects
            </Link>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <Globe className="h-6 w-6 text-purple-500" />
        Shakespeare vs. Cursor: Nostr Support
      </h2>

      <p>
        Cursor has no built-in Nostr integration while Shakespeare is built on Nostr. Shakespeare intuitively builds on Nostr with its knowledge of NIPs, kinds, and handling relays. Cursor doesn't have that knowledge built in, so you'll have to consult an MCP.
      </p>

      <div className="not-prose my-8">
        <p className="text-sm text-muted-foreground">
          <Link to="/blog/what-is-nostr-divine" className="text-azure hover:text-azure-600 underline">Learn more about Nostr</Link>
        </p>
      </div>

      <h2 className="flex items-center gap-2">
        <EyeOff className="h-6 w-6 text-red-500" />
        Shakespeare vs. Cursor: Project Privacy
      </h2>

      <p>
        Cursor's Privacy Mode is available to all users but must be manually enabled. When it's off, Cursor may use your code to train models, and third-party providers may access your data. If you created your account after October 15, 2025, your prompts may also be shared with model providers. About half of Cursor users have Privacy Mode enabled.
      </p>

      <div className="not-prose my-8">
        <Card className="border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <Eye className="h-5 w-5 text-red-500" />
                  Cursor Privacy
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    Privacy Mode off by default
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    May train on your code
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    Prompts may be shared
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <EyeOff className="h-5 w-5 text-green-500" />
                  Shakespeare Privacy
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Privacy always on
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Never train on your projects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Never read your chats
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        Shakespeare's approach is simpler: privacy is always on. Your code stays yours. We don't train on your projects. We don't read your chats. There's no toggle because privacy isn't optional.
      </p>

      <h2 className="flex items-center gap-2">
        <Shield className="h-6 w-6 text-blue-500" />
        Shakespeare vs. Cursor: The Bottom Line
      </h2>

      <p>
        Cursor is a capable tool for professional developers comfortable with code editors and managing their own infrastructure. Shakespeare is for everyone, regardless of skill level. It's for developers who want more freedom as well as creators who've never written code. Anyone who wants to build without complexity, subscriptions, or privacy trade-offs.
      </p>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <Zap className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to build?
            </h3>
            <p className="text-muted-foreground mb-6">
              Try Shakespeare and experience the freedom of building without complexity, subscriptions, or privacy trade-offs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
              >
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  Try Shakespeare
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <Link to="/shakespeare">
                  Learn More
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Related Reading</h2>

      <ul>
        <li><Link to="/blog/build-without-coding" className="text-azure hover:text-azure-600 underline">Build Anything Without Coding</Link></li>
        <li><Link to="/blog/conversational-ai-for-beginners" className="text-azure hover:text-azure-600 underline">How to Code with AI: For Beginners</Link></li>
        <li><Link to="/blog/shakespeare-vs-lovable" className="text-azure hover:text-azure-600 underline">Shakespeare vs. Lovable</Link></li>
        <li><Link to="/blog/shakespeare-vs-replit" className="text-azure hover:text-azure-600 underline">Shakespeare vs. Replit</Link></li>
        <li><Link to="/blog/shakespeare-vs-goose" className="text-azure hover:text-azure-600 underline">Shakespeare vs. Goose</Link></li>
        <li><Link to="/blog/our-stance-on-ai" className="text-azure hover:text-azure-600 underline">Really Open AI</Link></li>
      </ul>
    </article>
  );
}
