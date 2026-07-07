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
  EyeOff, 
  CheckCircle, 
  XCircle,
  Bitcoin,
  Server,
  Users,
  Code
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
  slug: 'shakespeare-vs-replit',
  title: 'Shakespeare vs. Replit',
  excerpt: 'Comparing open source Shakespeare to Big Tech alternatives. We break down code ownership, pricing, AI choice, deployment options, privacy, and why open source keeps you free.',
  coverImage: '/assets/blog/shakespeare-vs-replit/cover.webp',
  date: '2026-02-09',
  author: {
    name: 'Heather Larson',
    picture: '/assets/avatars/heather.jpg'
  },
  ogImage: {
    url: '/assets/blog/shakespeare-vs-replit/cover.webp'
  },
  featured: false,
  tags: ['Shakespeare', 'Replit', 'AI', 'Open Source', 'Comparison', 'Privacy', 'Freedom']
};

export default function ShakespeareVsReplit() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        You want to chat with an AI and have it build you a website or app and you're wondering whether to choose a Big Tech name like Replit, or go with open source <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">Shakespeare</a> by Soapbox. While we're a small name, we think we offer a comparable or even better experience. Shakespeare will benefit you whether you have no coding ability and even if you're a full-stack dev. It meets you at your level of skill, or lack of it.
      </p>

      <p>
        We'll focus on one of the well-known names in generative web app builders, Replit. The company garners much media attention. It also has many complaints against it about pricing, performance, and customer service. We'll compare how it stacks up to Shakespeare, one feature at a time.
      </p>

      <div className="not-prose my-8">
        <p className="text-sm text-muted-foreground mb-4">
          Learn more: <Link to="/blog/our-stance-on-ai" className="text-azure hover:text-azure-600 underline">Really Open AI</Link>
        </p>
      </div>

      <h2 className="flex items-center gap-2">
        <Lock className="h-6 w-6 text-orange-500" />
        Do You Own Your Code With Replit?
      </h2>

      <p>
        In short, yes. Replit automatically licenses your apps with an MIT license. It syncs your project to GitHub and also allows you to download a zip file of your project. This could change at any time. Replit could always claw back your code.
      </p>

      <p>
        What's different with Shakespeare is the code is stored in your browser. That gives us no control over it. This also means there's some personal responsibility required. Clear your browser cache without backing up your work and it's gone. This is why you should back up with GitHub or GitLab when using Shakespeare. If you're non-technical, Shakespeare lets you quickly download a zip file of your project as backup. If you ever lose your work, you can upload it to Shakespeare and tell it, "Build this." You'll quickly get your project back in this way.
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
              As an added bonus, we allow you to use GitLab rather than give you GitHub as your only option. Most builders give you GitHub for syncing your projects, very few give you GitLab as an option. While GitHub has long been the industry standard for version control and collaboration, some have expressed concerns about Microsoft's acquisition of it and how the GitHub CEO stepped down as the organization became more folded into the Big Tech company. If you share this concern, GitLab would be a great choice for you.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <Unlock className="h-6 w-6 text-green-500" />
        Open Source Keeps You Free
      </h2>

      <p>
        Never forget that Replit can, and will, ban you. That's something Shakespeare won't do and none of our tools at Soapbox will do that to you. So while you may own your code in Replit, you may lose access to it at a moment's notice.
      </p>

      <blockquote className="border-l-4 border-red-500 pl-6 my-8 italic text-gray-700 dark:text-gray-300 bg-red-50 dark:bg-red-950/30 py-4 rounded-r-lg">
        "A ban from Replit means you cannot log into your account and all Replit App will have been deleted."
        <footer className="text-sm mt-2 not-italic text-muted-foreground">— Replit Policy</footer>
      </blockquote>

      <p>
        Replit also has the ability to unpublish your app if it violates community standards. This information is posted publicly on its site. It does not specify if it releases your code to you after banning you and locking you out of your account, although there is an appeals process.
      </p>

      <h2 className="flex items-center gap-2">
        <DollarSign className="h-6 w-6 text-yellow-500" />
        Replit vs. Shakespeare Pricing
      </h2>

      <p>
        Replit is going to charge you a monthly recurring subscription fee, Shakespeare works on a pay-per-use basis with AI credits. You can also Bring Your Own Key (BYOK) via OpenRouter or another AI provider to both platforms. Going with pay-per-use AI credits in Shakespeare may serve you better than having all your subscription credits eaten up by doom loops and debugging—a frequent complaint about Big Tech, closed-source platforms.
      </p>

      <p>
        Having this problem also depends on how you use the tool. Shakespeare is more incentivized to take you off of this path so that you get more out of your AI credits. We want to teach you how to debug, not charge you for endless, unproductive loops. Our goal is to increase your AI literacy, help you understand how Shakespeare works, and give you basic knowledge as well as tech guardrails so you get the most out of it. We want working with AI to be fun, fast, and inexpensive.
      </p>

      <h2 className="flex items-center gap-2">
        <Bitcoin className="h-6 w-6 text-orange-500" />
        Replit vs. Shakespeare: Payment Options
      </h2>

      <div className="not-prose my-8">
        <Card className="border-orange-200 dark:border-orange-800">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  Replit
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Card payments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Bank account
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
                    Card payments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Currency choice
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

      <h2 className="flex items-center gap-2">
        <Code className="h-6 w-6 text-purple-500" />
        Replit vs. Shakespeare: AI Choice
      </h2>

      <p>
        Replit is going to choose your AI model for you based on what you choose to build unless you change this in your settings. Shakespeare lets you choose your AI model. You can change your model at any time based on tasks and the model's strengths.
      </p>

      <h2 className="flex items-center gap-2">
        <Server className="h-6 w-6 text-blue-500" />
        Replit vs. Shakespeare: Local LLM Support
      </h2>

      <p>
        Replit can use models such as Llama, Mistral, Qwen, and Deepseek through its integrations, primarily via OpenRouter. Shakespeare supports local LLMs through Ollama, GPT-OSS, DeepSeek R1, and Gemma 3. Working with a local LLM is the most private way to work with an AI provider. Here's <Link to="/blog/shakespeare-local-ai-model" className="text-azure hover:text-azure-600 underline">a guide we wrote to help you get started</Link>.
      </p>

      <h2 className="flex items-center gap-2">
        <GitBranch className="h-6 w-6 text-green-500" />
        Replit vs. Shakespeare: Import and Export Existing Projects
      </h2>

      <p>
        Replit syncs to GitHub and says it offers easy import from a variety of sources. Shakespeare syncs to GitHub, GitLab, and will let you import any existing zip files.
      </p>

      <h2 className="flex items-center gap-2">
        <GitBranch className="h-6 w-6 text-indigo-500" />
        Replit vs. Shakespeare: Git Integration
      </h2>

      <p>
        Again, Replit syncs to GitHub. Shakespeare does that and offers syncing to GitLab. You can also add a custom Git provider and Git identity.
      </p>

      <h2 className="flex items-center gap-2">
        <Rocket className="h-6 w-6 text-orange-500" />
        Replit vs. Shakespeare: Deployment Options
      </h2>

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
          </CardContent>
        </Card>
      </div>

      <p>
        You can only deploy ("publish") one app for free with Replit. Beyond one app, Replit offers deployment once you upgrade to Replit Core for $25/month, or $20/month billed annually.
      </p>

      <h2 className="flex items-center gap-2">
        <Globe className="h-6 w-6 text-purple-500" />
        Replit vs. Shakespeare: Nostr Support
      </h2>

      <p>
        While Replit technically can work with Nostr, it won't do as good a job as Shakespeare, which has native Nostr support. This means Shakespeare just "gets" things like Nostr login, NIPs, kinds, and every other detail of building on this open source protocol. If you want to build websites and apps that are uncensorable and open, this is not something Replit supports.
      </p>

      <h2 className="flex items-center gap-2">
        <EyeOff className="h-6 w-6 text-red-500" />
        Replit vs. Shakespeare: Project Privacy
      </h2>

      <p>
        Replit can't come close to Shakespeare in privacy. Replit collects your location and device information and much more as evidenced in its Privacy Policy.
      </p>

      <blockquote className="border-l-4 border-red-500 pl-6 my-8 italic text-gray-700 dark:text-gray-300 bg-red-50 dark:bg-red-950/30 py-4 rounded-r-lg">
        "Content published in public Apps may be used by Replit for improving the Service, including but not limited to developing or training large language models, both during and after the term of this agreement."
        <footer className="text-sm mt-2 not-italic text-muted-foreground">— Replit Terms of Service</footer>
      </blockquote>

      <p>
        Replit can see what you do and who you are from your code to your payments you make to use the service. It's for this reason we don't recommend Replit for activists, journalists, or others who may be endangered by exposing those in power.
      </p>

      <h2 className="flex items-center gap-2">
        <Shield className="h-6 w-6 text-blue-500" />
        How We're Answering the Most Common GenAI Problems
      </h2>

      <p>
        At Soapbox, our goal is to create open source tools to empower the public. We're a small team of developers, a DevRel, and one marketer. This team has spent years trying to apply open source software as the cure to big tech problems for consumers like you. What are these problems as they center around GenAI? You may have already experienced some of these.
      </p>

      <p>
        We're most commonly seeing users struggle with trendy GenAI tools that promise results but offer only a monthly fee and very little customer service. Since AI is new to the public, ideas like "vibe coding," aka AI-assisted development of websites and apps, can often be misunderstood.
      </p>

      <p>
        Yes, having "the robots" code you a project is an awesome feeling! It bridges gaps in skill for non-coders and can save time. However, we find it isn't always saving money. Our team found this out early in 2025, well before many of us began working together. We began trying our hands at vibe coding after the term was coined by Andrej Karpathy in February 2025. Each of us spent hundreds of dollars to build websites with popular AI-assisted coding programs.
      </p>

      <p>
        We quickly learned AI gets caught in doom loops, creates bad code, and creates hallucinatory results when unchecked. This is the dark side of building with AI products and it's costing consumers a lot of money with very little recourse.
      </p>

      <h2 className="flex items-center gap-2">
        <Users className="h-6 w-6 text-green-500" />
        AI Must Be Used to Advance Development in Collaboration with Others
      </h2>

      <p>
        Society must be able to build without limitation. Plenty has already been written about the why behind open source software. Replit CEO Amjad Masad claims the Replit mission is to make software more accessible and to empower a billion software engineers. But the legal pressure a former intern says he's applied to shut down his open source project would say otherwise.
      </p>

      <p>
        Open source software cures many problems of society, such as cost, lack of innovation, software licensing (related to cost), and making tools available to those who can't afford them, such as non-profits and other public service organizations.
      </p>

      <p>
        Open source collaboration is the proper way to innovate, rather than wait for a company to push such an initiative (and only when it may benefit that company). Those of us working in open source share resources, which means we're not building in siloes. This accelerates development, saving months or years. Rather than stifle voices, we are here to amplify. At Soapbox, we believe a rising tide lifts all boats. That's why we're building a 100-foot wave's worth of tools and keeping them open for all.
      </p>

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
              Experience open source AI-powered development. No subscriptions. No bans. Your code, your freedom.
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
        <li><Link to="/blog/our-stance-on-ai" className="text-azure hover:text-azure-600 underline">Really Open AI</Link></li>
        <li><Link to="/blog/free-software-free-societies" className="text-azure hover:text-azure-600 underline">Free Software: Free Societies</Link></li>
        <li><Link to="/blog/build-without-coding" className="text-azure hover:text-azure-600 underline">Build Anything Without Coding: AI's Revolution is For Everyone</Link></li>
        <li><Link to="/blog/shakespeare-local-ai-model" className="text-azure hover:text-azure-600 underline">How to Use a Local AI Model with Shakespeare</Link></li>
        <li><Link to="/blog/announcing-shakespeare-act-2" className="text-azure hover:text-azure-600 underline">Shakespeare Act 2: Build Freely</Link></li>
      </ul>
    </article>
  );
}
