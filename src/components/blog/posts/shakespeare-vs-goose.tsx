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
  Bitcoin,
  Server,
  Code,
  Download,
  Terminal,
  Users
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
  slug: 'shakespeare-vs-goose',
  title: 'Shakespeare vs. Goose',
  excerpt: 'Comparing open source Shakespeare to Goose. While Shakespeare is designed to meet you at your skill level, Goose is built for people who want maximum control and aren\'t afraid of technical complexity.',
  coverImage: '/assets/blog/shakespeare-vs-goose/cover.webp',
  date: '2026-02-09',
  author: {
    name: 'Heather Larson',
    picture: '/assets/avatars/heather.jpg'
  },
  ogImage: {
    url: '/assets/blog/shakespeare-vs-goose/cover.webp'
  },
  featured: false,
  tags: ['Shakespeare', 'Goose', 'AI', 'Open Source', 'Comparison', 'Privacy', 'Freedom']
};

export default function ShakespeareVsGoose() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        You want to chat with an AI and have it do more than just chat. You're ready for AI to build you a website or app, and you're trying to choose between two open source tools, <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">Shakespeare</a> and Goose. While Shakespeare is designed to meet you at your skill level, Goose is built for people who want maximum control and aren't afraid of technical complexity.
      </p>

      <p>
        We'll focus on Goose, a powerful open-source tool that scores well on privacy and control but requires more technical know-how. While Shakespeare excels at being easy to use and accessible to everyone, Goose prioritizes complete freedom over user-friendliness for non-technical vibe coders. We'll compare how it stacks up based on what matters most: ownership, privacy, and freedom.
      </p>

      <h2 className="flex items-center gap-2">
        <Lock className="h-6 w-6 text-orange-500" />
        Do You Own Your Code With Goose?
      </h2>

      <p>
        In short, yes--completely. With Goose, your code is stored locally on your computer, so you have total ownership. Goose is open source with an Apache 2.0 license, meaning the tool itself is as free as the projects you create with it.
      </p>

      <p>
        You also own your code with Shakespeare completely and you don't have to designate a file path as it's simply stored in your browser. This makes Shakespeare the easier plug-and-play choice, and a solid choice for non-technical users who don't understand terminals or file paths.
      </p>

      <h2 className="flex items-center gap-2">
        <Unlock className="h-6 w-6 text-green-500" />
        Goose and Shakespeare: Two Solid Open Source Choices
      </h2>

      <p>
        Goose is completely open source from the desktop app to the command line interface. Shakespeare is also open source but designed to be accessible to everyone, regardless of technical skill.
      </p>

      <p>
        The key difference is in how they approach user experience. Goose assumes you're comfortable with technical tools and want maximum control. Shakespeare assumes you might be new to vibe coding with absolutely no experience in creating a website or app and want guidance every step of the way.
      </p>

      <h2 className="flex items-center gap-2">
        <DollarSign className="h-6 w-6 text-yellow-500" />
        Shakespeare vs Goose: Pricing
      </h2>

      <p>
        Shakespeare works on a pay-per-use basis with AI credits, and you can also bring your own AI keys. This means you only pay for what you use, which is great if you're watching your budget. Goose is free to use, but you'll need to pay for whatever AI providers you connect to it.
      </p>

      <p>
        With Goose, you can use local AI models for free with usage limitations, or connect to paid providers. Shakespeare makes this simpler by managing the AI credits and providers for you, while Goose requires you to handle those connections yourself.
      </p>

      <h2 className="flex items-center gap-2">
        <Bitcoin className="h-6 w-6 text-orange-500" />
        Shakespeare vs Goose: Payment Options
      </h2>

      <div className="not-prose my-8">
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-gray-500" />
                  Goose
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free to use (tool itself)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Pay AI providers directly
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Wide payment flexibility via providers
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
        Shakespeare lets you pay with a credit card or Bitcoin, giving you some flexibility in how you pay. In Goose, you deal directly with AI providers--whatever payment methods they accept, you can use. This makes Goose accessible to more people worldwide, but it also requires more technical setup to connect to these different providers.
      </p>

      <h2 className="flex items-center gap-2">
        <Code className="h-6 w-6 text-purple-500" />
        Shakespeare vs Goose: AI Choice
      </h2>

      <p>
        Shakespeare lets you choose from different AI models and makes it easy to switch between them. Goose allows you to use any OpenAI-compatible provider, which means a wide range of AI models are available to you. Both give you total choice when it comes to which AI provider you choose. OpenRouter also works with each, opening up a world of AI models.
      </p>

      <h2 className="flex items-center gap-2">
        <Server className="h-6 w-6 text-blue-500" />
        Shakespeare vs Goose: Local LLM Support
      </h2>

      <p>
        Goose works seamlessly with local AI models like Ollama and RamaLama, letting you run AI completely on your own computer without internet connections. Working with local models like this is the most private way to work with AI.
      </p>

      <p>
        Shakespeare also supports local models, but Goose is built more around this local-first approach. For anyone concerned about privacy or who wants to work offline, Goose's local model support is excellent--though it does require technical knowledge to set up.
      </p>

      <div className="not-prose my-8">
        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Server className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900 m-0">
                Why Use a Local AI Model?
              </h3>
            </div>
            <p className="text-gray-700 m-0">
              If you're wondering why someone would want to vibe code using a local model, in short, they offer far more privacy, more customization, and an end to recurring costs.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <Download className="h-6 w-6 text-green-500" />
        Shakespeare vs Goose: Import and Export Existing Projects
      </h2>

      <p>
        Shakespeare makes it easy to import and export projects with simple zip file downloads and uploads. Goose stores everything as regular files on your computer, so importing and exporting is just a matter of copying files around.
      </p>

      <p>
        Both approaches work well, but Shakespeare's method is more user-friendly for beginners. Shakespeare stores your code in your browser and helps you with things like Git integration and deployment. Goose's approach gives you more control but requires you to understand file management, as you choose where your files are stored.
      </p>

      <div className="not-prose my-8">
        <p className="text-sm text-muted-foreground mb-4">
          If you need help setting up GitHub with Shakespeare and have never used it before, take a few minutes with this handy guide: <Link to="/blog/shakespeare-version-control" className="text-azure hover:text-azure-600 underline">A Non-Technical Guide to Setting Up GitHub To Back Up Your Projects in Shakespeare</Link>
        </p>
      </div>

      <h2 className="flex items-center gap-2">
        <GitBranch className="h-6 w-6 text-indigo-500" />
        Shakespeare vs Goose: Git Integration
      </h2>

      <p>
        Shakespeare offers automated Git integration with GitHub and GitLab, making it easy to back up your work even if you don't know what Git is. Goose takes a more hands-off approach--you can use any Git service you want, but you need to set it up yourself.
      </p>

      <p>
        For non-technical users, Shakespeare's automated Git integration is a huge advantage. For technical users who want to customize their Git setup, Goose offers more flexibility.
      </p>

      <div className="not-prose my-8">
        <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="h-6 w-6 text-yellow-600" />
              <h3 className="text-xl font-bold text-gray-900 m-0">
                Note to Non-Technical Vibe Coders
              </h3>
            </div>
            <p className="text-gray-700 m-0">
              Setting up GitHub for backups with both Goose and Shakespeare will be confusing to those who are completely unfamiliar. Goose leans toward a more complicated setup with GitHub requiring you enter both an access token and command; while this appears to be a mere few steps, non-technical users may get confused here.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <Rocket className="h-6 w-6 text-orange-500" />
        Shakespeare vs Goose: Deployment Options
      </h2>

      <p>
        Shakespeare offers one-click deployment to many platforms like Netlify, Vercel, and others, making it simple to get your project online. Goose gives you complete control over deployment, but you need to handle the technical setup yourself.
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
            <p className="text-gray-700 mt-4 mb-0">
              Shakespeare is better suited for beginners who just want to get their projects online quickly. Goose is better for technical users who want to customize every aspect of their deployment process.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <Globe className="h-6 w-6 text-purple-500" />
        Shakespeare vs Goose: Nostr Support
      </h2>

      <p>
        Goose has Nostr support through MCP servers that can help you build on this open protocol. However, it asks technical questions and assumes you understand development concepts. Shakespeare also supports Nostr but makes it much more accessible to non-technical users.
      </p>

      <p>
        If you want to build on Nostr and are comfortable with technical tools, Goose is powerful. If you want to build on Nostr but need guidance, Shakespeare is more user-friendly. With Shakespeare, you don't have to understand Nostr development terms like NIPs or kinds.
      </p>

      <h2 className="flex items-center gap-2">
        <EyeOff className="h-6 w-6 text-green-500" />
        Shakespeare vs Goose: Project Privacy
      </h2>

      <p>
        Both tools offer excellent privacy compared to closed-source platforms. With Goose, your code lives on your computer and is completely private. With Shakespeare, your code lives in your browser, which is also very private--much better than cloud-based, closed-source platforms that can see everything you're building.
      </p>

      <h2 className="flex items-center gap-2">
        <Terminal className="h-6 w-6 text-gray-600" />
        Who Should Choose Goose?
      </h2>

      <div className="not-prose my-8">
        <Card className="border-gray-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Goose if you:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Are comfortable with technical tools and setup
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Want maximum control over every aspect of your projects
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Don't mind handling configuration and setup yourself
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Value having the most powerful and flexible options
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Are already familiar with development concepts
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Want to run AI completely locally for maximum privacy
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <Users className="h-6 w-6 text-purple-600" />
        Who Should Choose Shakespeare?
      </h2>

      <div className="not-prose my-8">
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Shakespeare if you:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Want an easy-to-use, guided experience
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Are new to coding or AI-assisted development or have no knowledge of coding at all
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Prefer tools that handle technical setup for you
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Value accessibility and user-friendliness
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Want to get started quickly without technical hurdles
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                Still care about privacy and open source principles
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <Shield className="h-6 w-6 text-blue-500" />
        The Bottom Line
      </h2>

      <p>
        Goose is a power tool for people who want maximum flexibility and aren't afraid of complexity. Shakespeare represents freedom made accessible--open source principles in a package that anyone can use, regardless of technical skill. Devs will love Goose while Shakespeare democratizes AI for all to use, even those without technical skills.
      </p>

      <p>
        For most people, Shakespeare is the better choice because it delivers the benefits of open source without requiring technical expertise. Goose is excellent for technical users who want maximum control and don't mind the learning curve.
      </p>

      <p>
        Both tools respect your freedom and ownership, but Shakespeare makes that freedom accessible to everyone, while Goose reserves it for those with technical skills. Your choice depends on whether you prioritize power or accessibility.
      </p>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <Zap className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to try Shakespeare?
            </h3>
            <p className="text-muted-foreground mb-6">
              Experience open source AI-powered development. No subscriptions. No technical barriers. Your code, your freedom.
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
        <li><Link to="/blog/shakespeare-vs-replit" className="text-azure hover:text-azure-600 underline">Shakespeare vs. Replit</Link></li>
        <li><Link to="/blog/our-stance-on-ai" className="text-azure hover:text-azure-600 underline">Really Open AI</Link></li>
        <li><Link to="/blog/free-software-free-societies" className="text-azure hover:text-azure-600 underline">Free Software: Free Societies</Link></li>
        <li><Link to="/blog/build-without-coding" className="text-azure hover:text-azure-600 underline">Build Anything Without Coding: AI's Revolution is For Everyone</Link></li>
        <li><Link to="/blog/shakespeare-local-ai-model" className="text-azure hover:text-azure-600 underline">How to Use a Local AI Model with Shakespeare</Link></li>
      </ul>
    </article>
  );
}
