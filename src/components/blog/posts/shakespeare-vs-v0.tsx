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
  Server,
  Code,
  Download,
  Layers,
  CreditCard
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
  slug: 'shakespeare-vs-v0',
  title: 'Shakespeare vs. v0 by Vercel',
  excerpt: 'v0 by Vercel is popular for AI-generated UI components, but if you want a no-code, non-technical experience with real privacy and full-stack capabilities, Shakespeare is the better choice.',
  coverImage: '/assets/blog/shakespeare-vs-v0/cover.webp',
  date: '2026-02-09',
  author: {
    name: 'Heather Larson',
    picture: '/assets/avatars/heather.jpg'
  },
  ogImage: {
    url: '/assets/blog/shakespeare-vs-v0/cover.webp'
  },
  featured: false,
  tags: ['Shakespeare', 'v0', 'Vercel', 'AI', 'Open Source', 'Comparison', 'Privacy', 'Freedom']
};

export default function ShakespeareVsV0() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        v0 by Vercel has become a popular choice for developers who want AI-generated UI components. However, if you want a no-code, non-technical experience, <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">Shakespeare</a> will better serve you. v0 is backed by a company known for modern web infrastructure, but it is designed for front-end only--and comes with some serious trade-offs around privacy and ownership.
      </p>

      <p>
        We evaluated v0 using the same criteria we apply to every vibe coding tool. You can find the TL;DR on <a href="https://reallyopen.ai" target="_blank" rel="noopener noreferrer">ReallyOpen.ai</a>. Here are the specifics we found when we dug into v0 by Vercel.
      </p>

      <h2 className="flex items-center gap-2">
        <Lock className="h-6 w-6 text-orange-500" />
        Do You Own Your Code With v0?
      </h2>

      <p>
        Yes, according to the company, "Vercel doesn't own the code generated based on your queries and prompts."
      </p>

      <p>
        With Shakespeare, you also own your code, your data, and your choice of where it lives.
      </p>

      <h2 className="flex items-center gap-2">
        <DollarSign className="h-6 w-6 text-yellow-500" />
        v0 vs. Shakespeare: Pricing
      </h2>

      <p>
        v0 offers 5 free credits per month, then pushes you into subscription tiers. There's no pay-as-you-go option. Pricing begins at $20/mo and maxes out on the $100/mo Business plan it says is for "privacy conscious teams."
      </p>

      <p>
        Shakespeare uses OpenRouter, as well as other AI providers that allow you to bring your own key (BYOK), so you only pay for the AI requests you actually make. There's no price tier for privacy because Shakespeare grants you privacy by default.
      </p>

      <div className="not-prose my-8">
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900 m-0">
                Stay on Budget While Vibe Coding
              </h3>
            </div>
            <p className="text-gray-700 m-0">
              If you're concerned about vibe coding costs while paying per use, there are ways you can stay on budget. You can prompt in more effective ways that debug and help prevent runaway fees. Learn more in our blog post about <Link to="/blog/debugging-in-shakespeare" className="text-azure hover:text-azure-600 underline">Debugging In Shakespeare</Link>.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <CreditCard className="h-6 w-6 text-green-500" />
        v0 vs. Shakespeare: Payment Options
      </h2>

      <div className="not-prose my-8">
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  v0
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Card payments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Bank account
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Google Pay
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    No Bitcoin payments
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Shakespeare
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Card payments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Bitcoin payments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Lightning payments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Permissionless
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        Shakespeare accepts cards, Bitcoin, and Lightning. Pay permissionlessly without sharing financial data with intermediaries.
      </p>

      <h2 className="flex items-center gap-2">
        <Code className="h-6 w-6 text-purple-500" />
        v0 vs. Shakespeare: AI Choice
      </h2>

      <p>
        v0 scores well here--it works with any OpenAI-compatible provider through Vercel's AI Gateway. It also works with Groq, fal, Deep Infra, and x.AI.
      </p>

      <p>
        Shakespeare offers full model flexibility through OpenRouter. You can also choose from OpenCode Zen, PayPerQ, Rouster, z.AI, OpenAI, xAI, Deepseek, Moonshot AI, Google, Vercel, or add a custom provider. Shakespeare also offers increased privacy through Maple AI.
      </p>

      <h2 className="flex items-center gap-2">
        <Server className="h-6 w-6 text-blue-500" />
        v0 vs. Shakespeare: Local LLM Support
      </h2>

      <p>
        v0 supports Mistral, Qwen, and Deepseek through its AI Gateway. You can also set it up to use Ollama.
      </p>

      <p>
        Shakespeare supports local LLMs for users who want maximum privacy. Keep everything on your own hardware if that's what you need.
      </p>

      <div className="not-prose my-8">
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Server className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-bold text-gray-900 m-0">
                Local AI Setup Guide
              </h3>
            </div>
            <p className="text-gray-700 m-0">
              Setting up a local model as an AI provider requires some technical skill and we've written a guide on how to <Link to="/blog/shakespeare-local-ai-model" className="text-azure hover:text-azure-600 underline">set up Shakespeare with local models like GPT-OSS, Ollama, Gemma, and Deepseek</Link>.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <Download className="h-6 w-6 text-green-500" />
        v0 vs. Shakespeare: Import and Export Existing Projects
      </h2>

      <p>
        v0 lets you sync with GitHub. You can also download a zip file of your code.
      </p>

      <p>
        Shakespeare makes Git integration straightforward. Connect to GitHub, GitLab, or a custom provider. Export your full codebase anytime via zip file.
      </p>

      <h2 className="flex items-center gap-2">
        <GitBranch className="h-6 w-6 text-indigo-500" />
        v0 vs. Shakespeare: Git Integration
      </h2>

      <p>
        v0 connects to GitHub and can sync to branches. That's the only choice you have at this time. It does at least automatically back up your work.
      </p>

      <p>
        Shakespeare treats version control as a first-class feature. Push, pull, and manage your repos without friction. Choose GitHub, GitLab, or a custom provider. Shakespeare also backs up your projects automatically and will remind you to set up a repo.
      </p>

      <h2 className="flex items-center gap-2">
        <Rocket className="h-6 w-6 text-orange-500" />
        v0 vs. Shakespeare: Deployment Options
      </h2>

      <p>
        v0 deploys to Vercel by default. That's convenient if you're already in their ecosystem, but it locks you into their infrastructure. To deploy to other options, you'll have to export your code first.
      </p>

      <div className="not-prose my-8">
        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900 m-0">
                Shakespeare Deployment Options
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Railway</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Vercel</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Netlify</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">nsite</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Shakespeare (.wtf)</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Cloudflare</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Deno Deploy</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Custom Provider</Badge>
            </div>
            <p className="text-gray-700 mt-4 mb-0">
              Shakespeare gives you choices. You decide where your app lives.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <Globe className="h-6 w-6 text-purple-500" />
        v0 vs. Shakespeare: Nostr Support
      </h2>

      <p>
        v0 can technically build on Nostr, but it wasn't designed for it.
      </p>

      <p>
        Shakespeare was built specifically for Nostr with native Nostr support and proper NIP implementation.
      </p>

      <h2 className="flex items-center gap-2">
        <EyeOff className="h-6 w-6 text-red-500" />
        v0 vs. Shakespeare: Project Privacy
      </h2>

      <p>
        v0 requires sign-up with Google, GitHub, email, GitLab, or Bitbucket. Vercel collects your source code, billing info including your address, and location data based on IP.
      </p>

      <blockquote className="border-l-4 border-orange-500 pl-6 my-8 italic text-gray-700 bg-orange-50 py-4 rounded-r-lg">
        You also can't delete your own data--you have to request deletion from Vercel.
      </blockquote>

      <p>
        Shakespeare prioritizes your privacy. No surveillance, no data harvesting.
      </p>

      <h2 className="flex items-center gap-2">
        <Layers className="h-6 w-6 text-red-600" />
        v0 vs. Shakespeare: Range
      </h2>

      <div className="not-prose my-8">
        <Card className="border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="h-6 w-6 text-red-600" />
              <h3 className="text-xl font-bold text-gray-900 m-0">
                v0's Limitation: Front-End Only
              </h3>
            </div>
            <p className="text-gray-700 mb-0">
              Here's where v0 falls short: it's front-end only. No backends, no databases. If you need a full-stack application, you'll need another tool.
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        With the recent addition of Railway, Shakespeare handles backend frameworks like databases, containerization, and high-traffic applications.
      </p>

      <hr className="my-12 border-gray-200" />

      <h2 className="flex items-center gap-2">
        <Shield className="h-6 w-6 text-blue-500" />
        The Bottom Line
      </h2>

      <p>
        v0 is a polished front-end generator backed by Vercel's infrastructure. If you're already deep in the Vercel ecosystem and only need UI components, it might work for you.
      </p>

      <p>
        But if you want full-stack capabilities, real privacy, Bitcoin payments, and apps that work on decentralized protocols--v0 isn't built for that.
      </p>

      <p>
        Shakespeare gives you the full picture: ownership, privacy, model choice, permissionless payments, and the ability to build complete applications on freedom tech.
      </p>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <Zap className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to build something you actually own?
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience open source AI-powered development. No subscriptions. No data harvesting. Your code, your freedom.
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
        <li><Link to="/blog/shakespeare-vs-lovable" className="text-azure hover:text-azure-600 underline">Shakespeare vs. Lovable</Link></li>
        <li><Link to="/blog/shakespeare-vs-goose" className="text-azure hover:text-azure-600 underline">Shakespeare vs. Goose</Link></li>
        <li><Link to="/blog/shakespeare-vs-replit" className="text-azure hover:text-azure-600 underline">Shakespeare vs. Replit</Link></li>
        <li><Link to="/blog/our-stance-on-ai" className="text-azure hover:text-azure-600 underline">Really Open AI</Link></li>
        <li><Link to="/blog/build-without-coding" className="text-azure hover:text-azure-600 underline">Build Anything Without Coding: AI's Revolution is For Everyone</Link></li>
        <li><Link to="/blog/debugging-in-shakespeare" className="text-azure hover:text-azure-600 underline">Debugging In Shakespeare</Link></li>
        <li><Link to="/blog/shakespeare-local-ai-model" className="text-azure hover:text-azure-600 underline">How to Use a Local AI Model with Shakespeare</Link></li>
      </ul>
    </article>
  );
}
