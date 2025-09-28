import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';

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
  "slug": "shakespeare-configuring-ai-providers",
  "title": "How to Configure AI Providers in Shakespeare",
  "excerpt": "Shakespeare's flexible AI provider system gives you maximum flexibility to choose from dozens of AI providers. With support for 40+ models across cloud providers, local installations, and custom APIs, you're never locked into a single vendor.",
  "coverImage": "/assets/blog/shakespeare-configure-providers/shakespeare-configure-providers.png",
  "date": "2025-09-25",
  "author": {
    "name": "Derek Ross",
    "picture": "/assets/avatars/derek.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/shakespeare-configure-providers/shakespeare-configure-providers.png"
  },
  "featured": false,
  "tags": ["shakespeare-resource", "ai-providers", "configuration"]
};

export default function ShakespeareConfiguringAIProviders() {
  return (
    <article className="prose prose-lg max-w-none">

      <div className="not-prose mb-8">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            🤖 40+ Models
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            ☁️ Cloud Providers
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            💻 Local Models
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            🔐 Privacy-First
          </Badge>
        </div>
      </div>

      <p className="text-xl leading-relaxed text-muted-foreground mb-8">
        Shakespeare's flexible AI provider system gives you maximum flexibility to choose from dozens of AI providers for your website building needs. With support for 40+ models across cloud providers, local installations, and custom APIs, you're never locked into a single vendor. Shakespeare makes it simple to configure and instantly switch between any AI provider you choose.
      </p>

      <h2>Accessing AI Settings</h2>

      <p>Getting to your AI configuration is straightforward:</p>

      <div className="not-prose my-6">
        <div className="space-y-4">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-2 text-blue-600 dark:text-blue-400 font-bold text-sm min-w-[2rem] text-center">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Navigate to Settings</h4>
                  <p className="text-sm text-muted-foreground">
                    Open Settings from your Shakespeare dashboard
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-full p-2 text-purple-600 dark:text-purple-400 font-bold text-sm min-w-[2rem] text-center">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Click AI Settings</h4>
                  <p className="text-sm text-muted-foreground">
                    Select AI Settings from the settings menu
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900 rounded-full p-2 text-green-600 dark:text-green-400 font-bold text-sm min-w-[2rem] text-center">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Manage Providers</h4>
                  <p className="text-sm text-muted-foreground">
                    View configured providers and add new ones
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/shakespeare-configure-providers/configure-providers.png"
          alt="Shakespeare AI Settings Interface"
          className="rounded-lg shadow-lg border border-gray-200 dark:border-gray-800"
        />
        <p className="text-center mt-2">
            <a
          href="https://shakespeare.diy/settings/ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 hover:underline"
            >
          Edit your AI provider settings
            </a>
        </p>
      </div>

      <h2>Understanding the Interface</h2>

      <p>The AI Settings page is organized into two main sections:</p>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">
                ✅ Configured Providers
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Shows your active providers like:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Shakespeare AI</strong> - Default provider</li>
                <li>• Current Balance (e.g., "$0.00")</li>
                <li>• Configure or delete provider options</li>
                <li>• Real-time cost tracking</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                ➕ Add Provider
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Choose from multiple options:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• 40+ cloud models</li>
                <li>• Local installations</li>
                <li>• Custom API endpoints</li>
                <li>• OpenAI-compatible endpoints</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>Available Provider Options</h2>

      <div className="not-prose mb-8">
        <div className="space-y-6">
          <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ☁️ Cloud Providers (40+ models)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Premium Providers</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>OpenRouter</strong> - Claude, GPT-5, Gemini & more</li>
                    <li><strong>Anthropic</strong> - Claude models</li>
                    <li><strong>OpenAI</strong> - GPT-5 & ChatGPT models</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2">Alternative Options</h4>
                  <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li><strong>PayPerQ</strong> - Pay-per-query services</li>
                    <li><strong>Routstr</strong> - Decentralized routing</li>
                    <li><strong>Z.ai</strong> - Cost-effective alternatives</li>
                    <li><strong>xAI</strong> - Grok models</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-300">
                💻 Local Models
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Run models on your machine for complete privacy:
              </p>
              <ul className="space-y-2 text-sm">
                <li>• <strong>GPT-OSS</strong> - Open-source GPT variant</li>
                <li>• <strong>DeepSeek-R1</strong> - Advanced reasoning model</li>
                <li>• <strong>Gemma 3</strong> - Google's lightweight model</li>
                <li>• Complete offline capability</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 dark:border-orange-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-700 dark:text-orange-300">
                🔧 Custom APIs
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Connect any compatible endpoint:
              </p>
              <ul className="space-y-2 text-sm">
                <li>• OpenAI-compatible endpoints</li>
                <li>• Private model deployments</li>
                <li>• Self-hosted instances</li>
                <li>• Custom integrations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>Configuring Mainstream Providers</h2>

      <h3>Setting Up Anthropic (Claude)</h3>

      <ol>
        <li>Locate "Anthropic" in the Add Provider section</li>
        <li>Click "Get API key" - this opens the Anthropic website</li>
        <li>Sign up or log into your Anthropic account</li>
        <li>Generate an API key in your account dashboard</li>
        <li>Return to Shakespeare and paste the key in the "Enter your API key" field</li>
        <li>Click "Add" to activate the provider</li>
      </ol>

      <h3>Adding PayPerQ</h3>

      <ol>
        <li>Find "PayPerQ" in the provider list</li>
        <li>Visit PayPerQ's website to create an account and get your API key</li>
        <li>Enter the API key in Shakespeare's interface</li>
        <li>Click "Add" to complete the setup</li>
      </ol>

      <h3>Adding Routstr</h3>

      <ol>
        <li>Locate "Routstr" in the provider list</li>
        <li>You'll need a Cashu token instead of a traditional API key</li>
        <li>Enter your Cashu token in the designated field</li>
        <li>Click "Add" to activate Routstr</li>
      </ol>

      <h3>Adding Z.ai</h3>

      <ol>
        <li>Find "Z.ai" in the provider list</li>
        <li>Visit Z.ai's website to create an account and get your API key</li>
        <li>Enter the API key in Shakespeare's interface</li>
        <li>Click "Add" to complete the setup</li>
      </ol>

      <h3>Adding xAI (Grok)</h3>

      <ol>
        <li>Find "xAI" in the provider list</li>
        <li>Visit xAI's platform to obtain your API key</li>
        <li>Enter the API key in the "Enter your API key" field</li>
        <li>Click "Add" to activate xAI's Grok models</li>
      </ol>

      <h3>Configuring OpenAI</h3>

      <ol>
        <li>Select "OpenAI" from the available providers</li>
        <li>Go to OpenAI's platform and create an API key</li>
        <li>Copy the key and paste it into Shakespeare</li>
        <li>Click "Add" to activate</li>
      </ol>

      <h2>Setting Up Local AI with Ollama</h2>

      <p>For ultimate privacy and offline capabilities, you can run AI models locally using Ollama. For detailed installation instructions and more information, visit our <a href="/blog/shakespeare-local-ai-model" className="text-blue-600 hover:underline">full article on using local AI models with Shakespeare</a>.</p>

      <div className="not-prose my-8">
        <Card className="border-dashed border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4 text-green-800 dark:text-green-200">
              📦 Install Ollama
            </h3>
            <ol className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="font-bold mr-2 text-green-600">1.</span>
                Download Ollama from their official website
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-green-600">2.</span>
                Install it on your local machine
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-green-600">3.</span>
                Download models: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">ollama pull gpt-oss</code>
              </li>
            </ol>
          </CardContent>
        </Card>

        <Card className="border-dashed border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 mt-4">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4 text-blue-800 dark:text-blue-200">
              ⚙️ Configure in Shakespeare
            </h3>
            <ol className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="font-bold mr-2 text-blue-600">1.</span>
                Scroll to "Add Custom Provider"
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-blue-600">2.</span>
                Enter endpoint: <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">http://localhost:11434</code>
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-blue-600">3.</span>
                Specify your downloaded model name
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2 text-blue-600">4.</span>
                Test connection and save
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>

      <h2>Managing Your Providers</h2>

      <h3>Switching Between Providers</h3>

      <p>Once configured, switching providers is instant. You can change models directly from your chat interface using the model dropdown:</p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/shakespeare-configure-providers/drop-down-menu.png"
          alt="Choose AI Model Dropdown in Shakespeare"
          className="rounded-lg shadow-lg border border-gray-200 dark:border-gray-800"
        />
      </div>

      <p>The model selector shows your available options:</p>

      <ul>
        <li><strong>shakespeare/shakespeare</strong> - Soapbox's premium model for high-quality results</li>
        <li><strong>shakespeare/tybalt</strong> - Soapbox's free model for learning and testing purposes</li>
        <li><strong>Enter custom model...</strong> - Option to specify any custom model from your configured providers</li>
        <li><strong>Manage providers...</strong> - Quick access to add or configure AI providers</li>
      </ul>

      <p>Changes take effect immediately for new requests in your conversation.</p>

      <h3>Removing Providers</h3>

      <p>To remove a provider you no longer need:</p>

      <ol>
        <li>Find the provider in your "Configured Providers" list</li>
        <li>Click the delete/remove icon</li>
        <li>Confirm the removal</li>
      </ol>

      <h2>Security Best Practices</h2>

      <p>
        Shakespeare runs completely in your browser as a client-side application. This means all your data, including API keys, project files, and conversations, are stored locally on your device and never leave your browser unless you explicitly choose to share them.
      </p>

      <div className="not-prose my-6">
        <Card className="border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">🔒</div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-red-800 dark:text-red-200">
                  Local Storage Security
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  All API keys are stored locally in your browser, ensuring:
                </p>
                <ul className="space-y-1 text-sm">
                  <li>✓ Maximum security and privacy</li>
                  <li>✓ No server-side storage of credentials</li>
                  <li>✓ Full control over your AI resources</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Getting the Most from Multi-Provider Setup</h2>

      <h3>Start Simple</h3>

      <p>Begin with one or two providers to get familiar with the system:</p>

      <ul>
        <li>Choose a primary provider for most tasks</li>
        <li>Add a secondary provider for backup or cost optimization</li>
      </ul>

      <h2>Breaking Free from Vendor Lock-In</h2>

      <div className="not-prose my-8">
        <Card className="border-2 border-purple-200 dark:border-purple-800">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">
              🗽 True AI Freedom with Shakespeare
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="text-green-500">✓</div>
                  <span className="text-sm">Instant provider switching</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-green-500">✓</div>
                  <span className="text-sm">No code changes required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-green-500">✓</div>
                  <span className="text-sm">Compare model performance</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="text-green-500">✓</div>
                  <span className="text-sm">Optimize costs per task</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-green-500">✓</div>
                  <span className="text-sm">Multiple backup options</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-green-500">✓</div>
                  <span className="text-sm">Never locked to one vendor</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>What's Next?</h2>

      <p>
        Once you've configured your providers, you'll want to understand which AI model works best for different types of website building tasks - from simple websites to complex applications. The choice of provider can significantly impact both the quality of your results and your costs.
      </p>

      <p>
        Learn more about choosing the right AI model for your project in our comprehensive guide: <a href="/blog/shakespeare-ai-model-selection" className="text-blue-600 hover:underline">What AI model should I use with Shakespeare?</a>
      </p>

      <p>
        Ready to experience true AI flexibility? Start configuring your providers and discover the optimal development experience that Shakespeare offers with 40+ models at your fingertips.
      </p>

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