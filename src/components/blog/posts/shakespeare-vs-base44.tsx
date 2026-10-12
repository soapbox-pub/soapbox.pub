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
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Bitcoin,
  Server,
  Code,
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
  slug: 'shakespeare-vs-base44',
  title: 'Shakespeare vs. Base44',
  excerpt: 'Comparing open source Shakespeare to Base44. You may own your front-end code, but can you take your back-end with you? We break down ownership, pricing, AI choice, and privacy.',
  coverImage: '/assets/blog/shakespeare-vs-base44/cover.webp',
  date: '2026-02-09',
  author: {
    name: 'Heather Larson',
    picture: '/assets/avatars/heather.jpg'
  },
  ogImage: {
    url: '/assets/blog/shakespeare-vs-base44/cover.webp'
  },
  featured: false,
  tags: ['Shakespeare', 'Base44', 'AI', 'Open Source', 'Comparison', 'Privacy', 'Freedom']
};

export default function ShakespeareVsBase44() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        Base44 is an all-in-one platform for non-technical users to build apps with AI by conversing with it. So is Shakespeare. So which is best for you? Base44 promises users that, if you can describe your idea, you can build it. But what's actually happening behind those scenes? And more importantly--do you own what you build? Can you take it with you when you go?
      </p>

      <div className="not-prose my-8">
        <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              <h3 className="text-xl font-bold text-gray-900 m-0">
                TL;DR
              </h3>
            </div>
            <p className="text-gray-700 m-0">
              You may own your code to the front-end of an app you build with Base44, but when you try to leave the platform, you can't take the back-end infrastructure with you.
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        We put Base44 through the same evaluation we use for every vibe coding tool, and the results might surprise you.
      </p>

      <p>
        For a shortcut, read our evaluation of which AI tools are truly open: <a href="https://reallyopen.ai/" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 underline">reallyopen.ai</a>
      </p>

      <h2 className="flex items-center gap-2">
        <Lock className="h-6 w-6 text-orange-500" />
        Do You Own Your Code With Base44?
      </h2>

      <p>
        Base44 claims you own what you build. But online users tell a different story. One Reddit user pointed out that the fine print isn't as clear as the marketing suggests. If you're non-technical and don't fully understand code licensing, you're gambling on whether you can take your app elsewhere.
      </p>

      <p>
        With Shakespeare, there's no ambiguity. You own 100% of what you build. You can export your code, host it anywhere, and do whatever you want with it. Shakespeare doesn't offer subscription tiers that limit your rights to your code unless you pay monthly at a certain level. You can bring your own API keys (BYOK) for the AI providers of your choice, even OpenRouter. You can also keep your backend free by using Shakespeare's Railway integration.
      </p>

      <h2 className="flex items-center gap-2">
        <DollarSign className="h-6 w-6 text-yellow-500" />
        Base44 vs. Shakespeare: Pricing
      </h2>

      <div className="not-prose my-8">
        <Card className="border-red-200">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  Base44
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    5 messages/day free
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    25 messages/month limit
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    $16-$160/month plans
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    GitHub requires $40/mo minimum
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    Credits don't roll over
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
                    Pay only for what you use
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    No artificial message limits
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Bring your own API keys
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Git access always free
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Backup to GitLab and Nostr
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        Base44 has a free plan with 5 messages per day and 25 messages per month--barely enough to test the waters. Paid plans range from $16 to $160/month (billed annually). If you want GitHub access, that's $40/month minimum. Credits don't roll over. You can't buy standalone credits--if you run out, you wait or upgrade.
      </p>

      <p>
        Shakespeare lets you pay only for what you use through OpenRouter or any AI provider of your choice, including privacy-focused Maple AI. No subscriptions, no artificial feature gates. Bring your own API keys (BYOK) and control your costs. Git access is always free. You can also back up to GitLab and Nostr.
      </p>

      <h2 className="flex items-center gap-2">
        <Bitcoin className="h-6 w-6 text-orange-500" />
        Base44 vs. Shakespeare: Payment Options
      </h2>

      <div className="not-prose my-8">
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-500" />
                  Base44
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Card payments
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Google Pay
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Bank transfers
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    No Bitcoin/Lightning
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
                    Permissionless, no intermediaries
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        Base44 accepts cards, Google Pay, or bank. Shakespeare accepts Bitcoin and Lightning payments. Pay permissionlessly, without intermediaries, and without handing over personal financial data.
      </p>

      <h2 className="flex items-center gap-2">
        <Code className="h-6 w-6 text-purple-500" />
        Base44 vs. Shakespeare: AI Choice
      </h2>

      <p>
        Base44 allows you to connect to OpenAI, Claude, Groq, and Mistral. Of these, only Mistral is open source.
      </p>

      <p>
        Shakespeare gives you full model choice through OpenRouter. Switch between Claude, GPT, Mistral, Llama, and dozens of other models instantly. No paywall blocking your preferences.
      </p>

      <h2 className="flex items-center gap-2">
        <Server className="h-6 w-6 text-blue-500" />
        Base44 vs. Shakespeare: Local LLM Support
      </h2>

      <p>
        Base44 doesn't allow you to connect to local models.
      </p>

      <p>
        Shakespeare supports local LLMs for users who want maximum privacy. Run models on your own hardware and keep everything local. Here's <Link to="/blog/shakespeare-local-ai-model" className="text-azure hover:text-azure-600 underline">a guide we wrote to help you get started with local AI in Shakespeare</Link>.
      </p>

      <h2 className="flex items-center gap-2">
        <GitBranch className="h-6 w-6 text-green-500" />
        Base44 vs. Shakespeare: Import and Export Existing Projects
      </h2>

      <div className="not-prose my-8">
        <Card className="border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileWarning className="h-6 w-6 text-red-600" />
              <h3 className="text-xl font-bold text-gray-900 m-0">
                Base44 Export Restrictions
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700 mb-0">
              <li className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                Can't import code
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                Can't upload zip files
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                No Git without subscription
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                Zip export requires $40/mo+ plan
              </li>
              <li className="flex items-center gap-2">
                <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                GitHub requires $40/mo+ plan
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p>
        Base44 makes exporting a premium feature. You can't import code, upload a zip file, or use Git without paying for a subscription. To export a zip file, you must upgrade to Builder, Pro, Elite or Enterprise plans. This excludes the starter plan at $16/mo. Once you upgrade to a $40/mo or above plan, you can connect with GitHub to make changes directly from your repo.
      </p>

      <p>
        Shakespeare lets you export your full codebase anytime. Import existing projects, sync with Git, and move your code wherever you want--no paywall required. You can export your files as a zip without paying any extra fees.
      </p>

      <h2 className="flex items-center gap-2">
        <Rocket className="h-6 w-6 text-orange-500" />
        Base44 vs. Shakespeare: Deployment Options
      </h2>

      <p>
        Base44 offers one-click deployment to Base44 URLs. On the $40/mo plan, you gain access to one free domain annually.
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
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Netlify</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Cloudflare</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Deno Deploy</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Railway</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Vercel</Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-300">Custom Infrastructure</Badge>
            </div>
            <p className="text-gray-700 mt-4 mb-0">
              Full visibility and control. Deploy wherever makes sense for your project.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <Globe className="h-6 w-6 text-purple-500" />
        Base44 vs. Shakespeare: Nostr Support
      </h2>

      <p>
        Base44 knows Bitcoin and Nostr exist and can technically build on Nostr, but you may not get great results.
      </p>

      <p>
        Shakespeare was built for freedom tech--native Nostr support, Lightning integration, and the ability to build truly decentralized applications.
      </p>

      <h2 className="flex items-center gap-2">
        <EyeOff className="h-6 w-6 text-red-500" />
        Base44 vs. Shakespeare: Project Privacy
      </h2>

      <p>
        Base44 has access to users' code, data, and chat interactions within its platform. While Base44 states they do not use your inputs to train public AI models, a 2025 security flaw exposed potential risks of unauthorized access to user data and accounts. Their Terms of Service explicitly states they share user data with third parties for operational purposes but they don't sell your personal information.
      </p>

      <blockquote className="border-l-4 border-green-500 pl-6 my-8 italic text-gray-700 bg-green-50 py-4 rounded-r-lg">
        Shakespeare prioritizes your privacy. You can build without surveillance, keep your projects private, and never worry about your data being sold to advertisers.
      </blockquote>

      <h2 className="flex items-center gap-2">
        <Shield className="h-6 w-6 text-blue-500" />
        The Bottom Line
      </h2>

      <p>
        Base44 is closed-source, locks basic features behind paywalls, and shares your data with third parties. It might work for quick prototypes you don't plan to keep, but if you want to own what you build--really own it--look elsewhere.
      </p>

      <p>
        Shakespeare gives you ownership, privacy, model choice, and permissionless payments. No gatekeeping, no data harvesting, no surprises.
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
        <li><a href="https://reallyopen.ai/" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 underline">Really Open AI - Our evaluation of which AI tools are truly open</a></li>
        <li><Link to="/blog/shakespeare-vs-lovable" className="text-azure hover:text-azure-600 underline">Shakespeare vs. Lovable</Link></li>
        <li><Link to="/blog/shakespeare-vs-replit" className="text-azure hover:text-azure-600 underline">Shakespeare vs. Replit</Link></li>
        <li><Link to="/blog/our-stance-on-ai" className="text-azure hover:text-azure-600 underline">Really Open AI</Link></li>
        <li><Link to="/blog/free-software-free-societies" className="text-azure hover:text-azure-600 underline">Free Software: Free Societies</Link></li>
        <li><Link to="/blog/shakespeare-local-ai-model" className="text-azure hover:text-azure-600 underline">How to Use a Local AI Model with Shakespeare</Link></li>
      </ul>
    </article>
  );
}
