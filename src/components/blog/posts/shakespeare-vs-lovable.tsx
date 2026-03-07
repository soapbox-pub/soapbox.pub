import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { 
  ExternalLink, 
  Shield, 
  Lock, 
  Unlock, 
  DollarSign, 
  Zap, 
  Globe, 
  GitBranch, 
  Rocket, 
  Eye, 
  EyeOff, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Bitcoin,
  Server,
  Code,
  Download,
  FileWarning
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
  slug: 'shakespeare-vs-lovable',
  title: 'Shakespeare vs. Lovable',
  excerpt: 'Comparing open source Shakespeare to Lovable. We break down code ownership, pricing, AI choice, deployment options, privacy, and why open source keeps you free.',
  coverImage: '/assets/blog/shakespeare-vs-lovable/cover.webp',
  date: '2026-02-09',
  author: {
    name: 'Heather Larson',
    picture: '/assets/avatars/heather.jpg'
  },
  ogImage: {
    url: '/assets/blog/shakespeare-vs-lovable/cover.webp'
  },
  featured: false,
  tags: ['Shakespeare', 'Lovable', 'AI', 'Open Source', 'Comparison', 'Privacy', 'Freedom']
};

export default function ShakespeareVsLovable() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        You want to chat with an AI and have it build you a website or app and you're wondering whether to choose a mainstream platform like Lovable, or go with open source <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">Shakespeare</a> by Soapbox. While we're a small name, we think we offer a comparable or even better experience. Shakespeare will benefit you whether you have no coding ability and even if you're a full-stack dev. It meets you at your level of skill, or lack of it.
      </p>

      <p>
        We'll focus on Lovable, a well-known name in generative web app builders that markets itself as beginner-friendly and fast. While Lovable excels at ease of use, it has significant drawbacks around pricing, data rights, and portability. We'll compare how it stacks up based on what matters most: ownership, privacy, and freedom.
      </p>

      <h2 className="flex items-center gap-2">
        <Lock className="h-6 w-6 text-orange-500" />
        Do You Own Your Code With Lovable?
      </h2>

      <p>
        In short, yes--but with major caveats. While you technically own your code, Lovable's Terms of Service grant the company a "worldwide, perpetual, royalty-free license" to use your Customer Data (excluding personally identifiable information) for their business purposes. This includes developing and training AI models, creating benchmarks and analytics, and "any other lawful business purpose."
      </p>

      <p>
        If you want to opt out of having your code used to train their models, you'll need to either contact Lovable Support (for Free/Pro plans) or upgrade to a Business plan where admins can control this setting directly. While this is all subject to change as GenAI platforms give and take features away at will, this was such an issue that one Reddit user built a Chrome extension for it.
      </p>

      <p>
        What's different with Shakespeare is the code is stored in your browser. That gives us no control over it. This also means there's some personal responsibility required. If you clear your browser cache without backing up your work, it's gone. This is why you should back up with GitHub or GitLab when using Shakespeare.
      </p>

      <p>
        If you're non-technical, and the concept of Git is too much, Shakespeare lets you quickly download a zip file of your project as backup for free. If you ever lose your work, you can upload it to Shakespeare and tell it, "Build this." You'll quickly get your project back in this way.
      </p>

      <div className="not-prose my-8">
        <Card className="border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 m-0">
                GitLab: An Alternative to GitHub
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 m-0">
              As an added bonus, we allow you to use GitLab rather than give you GitHub as your only option. Most builders give you GitHub for syncing your projects; very few give you GitLab as an option. While GitHub has long been the industry standard for version control and collaboration, some have expressed concerns about Microsoft's acquisition of it and how the GitHub CEO stepped down as the organization became more folded into Big Tech. If you share this concern, GitLab would be a great choice for you.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <Unlock className="h-6 w-6 text-green-500" />
        Open Source Keeps You Free
      </h2>

      <p>
        Lovable is a closed-source, proprietary platform. While it won't ban you the way some platforms might, you're still at the mercy of their terms, pricing changes, and data policies. That's something Shakespeare won't do and none of our tools at Soapbox will do that to you.
      </p>

      <p>
        With Lovable, your projects live on their servers. They can see everything you build, every chat you have with the AI, and they explicitly reserve the right to use that data. For activists, journalists, or anyone working on sensitive projects, this should be a dealbreaker.
      </p>

      <h2 className="flex items-center gap-2">
        <DollarSign className="h-6 w-6 text-yellow-500" />
        Lovable vs. Shakespeare: Pricing
      </h2>

      <p>
        Lovable requires you to choose a monthly recurring subscription. You can experiment for free, but to deploy anything meaningful, you must pay. Shakespeare works on a pay-per-use basis with AI credits. You can also Bring Your Own Key (BYOK) via OpenRouter or another AI provider to both platforms--though Lovable makes this difficult for non-technical users.
      </p>

      <p>
        Going with pay-per-use AI credits in Shakespeare may serve you better than having all your subscription credits eaten up by doom loops and debugging--a frequent complaint about closed-source platforms. Having this problem also depends on how you use the tool.
      </p>

      <p>
        Shakespeare is more incentivized to take you off of this path so that you get more out of your AI credits. We want to teach you how to debug, not charge you for endless, unproductive loops. Our goal is to increase your AI literacy, help you understand how Shakespeare works, and give you basic knowledge as well as tech guardrails so you get the most out of it. We want working with AI to be fun, fast, and inexpensive.
      </p>

      <h2 className="flex items-center gap-2">
        <Bitcoin className="h-6 w-6 text-orange-500" />
        Lovable vs. Shakespeare: Payment Options
      </h2>

      <div className="not-prose my-8">
        <Card className="border-orange-200 dark:border-orange-800">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  Lovable
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Card payments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Subscription tiers
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    No Bitcoin payments
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
                    Card payments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Pay-per-use credits
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Bitcoin payments
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        With Lovable, you must pay with a credit card and commit to a subscription tier. There's no option to pay only for what you use. With Shakespeare, you have the option to pay with a card or choose to pay in Bitcoin. Lovable doesn't offer Bitcoin payments. This makes Shakespeare accessible to the unbanked and those who value financial privacy where Lovable is not.
      </p>

      <h2 className="flex items-center gap-2">
        <Code className="h-6 w-6 text-purple-500" />
        Lovable vs. Shakespeare: AI Choice
      </h2>

      <p>
        Lovable chooses your AI model for you. While technically you can use OpenRouter to access different models, this requires developer knowledge--not exactly beginner-friendly. Shakespeare lets you choose your AI model from the start and change it at any time based on the task at hand. Want to use Claude for planning and GPT-5 for implementation? Shakespeare makes that easy. You can switch between models based on their strengths--something Lovable doesn't offer.
      </p>

      <h2 className="flex items-center gap-2">
        <Server className="h-6 w-6 text-blue-500" />
        Lovable vs. Shakespeare: Local LLM Support
      </h2>

      <p>
        Lovable offers essentially no support for local models. If you want to run AI privately on your own machine, Lovable isn't designed for that. Shakespeare works with local models like Ollama, GPT-OSS, DeepSeek R1, and Gemma 3. Working with a local LLM is the most private way to work with an AI provider. Here's <Link to="/blog/shakespeare-local-ai-model" className="text-azure hover:text-azure-600 underline">a guide we wrote to help you get started with local AI in Shakespeare</Link>.
      </p>

      <h2 className="flex items-center gap-2">
        <GitBranch className="h-6 w-6 text-green-500" />
        Lovable vs. Shakespeare: Import and Export Existing Projects
      </h2>

      <p>
        This is where Lovable really stumbles. You can export your code to GitHub, but you cannot import code from GitHub back into Lovable without a workaround that requires developer-level skills. You're essentially on a one-way street. Shakespeare syncs to GitHub, GitLab, and will let you import any existing zip files. We believe in bidirectional workflows. Your code should move freely in and out of any platform.
      </p>

      <h2 className="flex items-center gap-2">
        <GitBranch className="h-6 w-6 text-indigo-500" />
        Lovable vs. Shakespeare: Git Integration
      </h2>

      <p>
        Lovable syncs to GitHub, but only one way--you can push to GitHub but can't pull from it. Shakespeare syncs to both GitHub and GitLab bidirectionally. You can also add a custom Git provider and Git identity. We give you options when it comes to version control.
      </p>

      <h2 className="flex items-center gap-2">
        <Rocket className="h-6 w-6 text-orange-500" />
        Lovable vs. Shakespeare: Deployment Options
      </h2>

      <p>
        Lovable has limited deployment options and they're tightly integrated with their platform. You'll need a subscription to deploy anything meaningful.
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
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">nsite</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Shakespeare Deploy</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Netlify</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Vercel</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Cloudflare</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Deno Deploy</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">GitHub Pages</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">GitLab Pages</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Custom Provider</Badge>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-4 mb-0">
              You have the freedom to deploy wherever makes sense for your project.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <Globe className="h-6 w-6 text-purple-500" />
        Lovable vs. Shakespeare: Nostr Support
      </h2>

      <p>
        Lovable technically can work with Nostr, but barely. When tested, Lovable's understanding of Nostr was extremely limited and it incorrectly categorized it as "Web3." If you want to build websites and apps on Nostr--a truly open, censorship-resistant protocol--Lovable is not the tool for you.
      </p>

      <p>
        Shakespeare has native Nostr support. This means Shakespeare just "gets" things like Nostr login, NIPs, kinds, and every other detail of building on this open source protocol. If you want to build websites and apps that are uncensorable and open, Shakespeare is purpose-built for that.
      </p>

      <h2 className="flex items-center gap-2">
        <EyeOff className="h-6 w-6 text-red-500" />
        Lovable vs. Shakespeare: Project Privacy
      </h2>

      <p>
        This is perhaps the biggest difference between the two platforms. Lovable can see everything: your code, your conversations with the AI, your project data. Their Terms of Service explicitly state they can use your Customer Data for model training, analytics, and other business purposes unless you opt out or upgrade to a Business plan.
      </p>

      <blockquote className="border-l-4 border-orange-500 pl-6 my-8 italic text-gray-700 dark:text-gray-300 bg-orange-50 dark:bg-orange-950/30 py-4 rounded-r-lg">
        Lovable's data retention policy states they "may retain indefinitely Customer Data in an anonymized and aggregated form." Even after you delete your account, they may keep your data for "fraud prevention, legal defense, or to comply with legal obligations." Your deleted data "may persist in backups for a limited time before being permanently removed."
      </blockquote>

      <p>
        With Shakespeare, your code is stored in your browser. We literally cannot see what you're building. We can't use your code to train models because we don't have access to it. For journalists, activists, dissidents, or anyone who values privacy, this distinction is critical.
      </p>

      <h2 className="flex items-center gap-2">
        <FileWarning className="h-6 w-6 text-red-600" />
        Lovable's $50/Month Paywall to Export a Zip File: A Red Flag
      </h2>

      <div className="not-prose my-8">
        <Card className="border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 m-0">
                Vendor Lock-In Warning
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Even more concerning: if you want to export your project as a zip file, you'll need to upgrade to Lovable's Business plan at <strong>$50/month</strong>. This means a feature as basic as downloading your own code requires an ongoing subscription.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-0">
              This is vendor lock-in disguised as a feature tier--it creates an ongoing financial barrier to leaving their platform and taking your work with you.
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        Shakespeare lets you download your project as a zip file anytime, for free. Because we believe you should own your work without paying ransom for it.
      </p>

      <p>
        This policy takes advantage of the general public's lack of skill when it comes to software development.
      </p>

      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Download className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 m-0">
                Shakespeare: Free Zip Downloads
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 m-0">
              With Shakespeare, you can download a zip file of your project anytime, completely free. No subscription required. No barriers to taking your work with you. Your code belongs to you.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <Zap className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to try Shakespeare?
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
        <li><Link to="/blog/shakespeare-vs-replit" className="text-azure hover:text-azure-600 underline">Shakespeare vs. Replit</Link></li>
        <li><Link to="/blog/our-stance-on-ai" className="text-azure hover:text-azure-600 underline">Really Open AI</Link></li>
        <li><Link to="/blog/free-software-free-societies" className="text-azure hover:text-azure-600 underline">Free Software: Free Societies</Link></li>
        <li><Link to="/blog/build-without-coding" className="text-azure hover:text-azure-600 underline">Build Anything Without Coding: AI's Revolution is For Everyone</Link></li>
        <li><Link to="/blog/shakespeare-local-ai-model" className="text-azure hover:text-azure-600 underline">How to Use a Local AI Model with Shakespeare</Link></li>
      </ul>
    </article>
  );
}
