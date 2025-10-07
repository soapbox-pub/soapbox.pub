import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
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
  "slug": "shakespeare-ai-model-selection",
  "title": "Which AI Model Should I Use with Shakespeare?",
  "excerpt": "Choosing the right AI model can transform your development experience in Shakespeare. With access to 40+ models across multiple providers, you have the flexibility to match the perfect AI to your project type.",
  "coverImage": "/assets/blog/shakespeare-choosing-models/shakespeare-choosing-models.png",
  "date": "2025-09-25",
  "author": {
    "name": "Derek Ross",
    "picture": "/assets/avatars/derek.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/shakespeare-choosing-models/shakespeare-choosing-models.png"
  },
  "featured": false,
  "tags": ["shakespeare-resource", "ai-models", "comparison"]
};

export default function ShakespeareAIModelSelection() {
  return (
    <article className="prose prose-lg max-w-none">

      {/* Video Tutorial */}
      <div className="not-prose mb-12">
        <YouTubeEmbed
          src="https://www.youtube.com/embed/greYbXMORDE?si=Z8haMQ0ACvIdgzlR"
          title="How to Choose AI Models with Shakespeare"
        />
      </div>

      <div className="not-prose mb-8">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            🤖 40+ Models
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            🎭 Shakespeare Models
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            💡 Smart Strategies
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            🎯 Project Matching
          </Badge>
        </div>
      </div>

      <p className="text-xl leading-relaxed text-muted-foreground mb-8">
        Choosing the right AI model can transform your development experience in Shakespeare. With access to 40+ models across multiple providers, you have the flexibility to match the perfect AI to your project type. This guide compares different AI models available in Shakespeare and shows you which ones work best for everything from simple landing pages to complex applications.
      </p>

      <h2>Our Top Recommendations</h2>

      <div className="not-prose my-8">
        <div className="space-y-6">
          <Card className="border-2 border-yellow-200 dark:border-yellow-800 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950 dark:to-amber-950">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🏆</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-800 dark:text-yellow-200">
                    Anthropic Claude Sonnet 4 - The Professional's Choice
                  </h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-4">
                    <strong>When to use:</strong> Complex websites, professional projects, advanced functionality
                  </p>
                  <p className="text-sm mb-4">
                    At the time of writing, <strong>Claude Sonnet 4</strong> represents the gold standard for AI-powered website building. Here's why it excels:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-yellow-800 dark:text-yellow-200">Strengths:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Exceptional understanding of modern web development</li>
                        <li>• Superior code quality with clean, semantic HTML/CSS</li>
                        <li>• Advanced reasoning for complex layout challenges</li>
                        <li>• Excellent at responsive design implementation</li>
                        <li>• Outstanding documentation and code comments</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-yellow-800 dark:text-yellow-200">Best for:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Business websites requiring pixel-perfect design</li>
                        <li>• Complex e-commerce platforms</li>
                        <li>• Sites with advanced interactive features</li>
                        <li>• Professional portfolios and corporate websites</li>
                        <li>• Projects where code quality is paramount</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      <strong>Cost consideration:</strong> Premium pricing, but worth it for high-stakes projects
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🎭</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">
                    Shakespeare AI Models - The Built-for-Purpose Solution
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">
                    <strong>When to use:</strong> Website building with Shakespeare's optimized experience
                  </p>
                  <p className="text-sm mb-4">
                    Shakespeare AI offers two specialized models designed specifically for website building within the Shakespeare platform:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">Shakespeare Model:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Advanced premium model based on GLM 4.5</li>
                        <li>• Optimized for complex website features</li>
                        <li>• Requires credit purchase from Soapbox</li>
                        <li>• Excellent for professional projects</li>
                        <li>• Higher quality output for complex tasks</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-blue-800 dark:text-blue-200">Tybalt Model:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Free model based on GLM 4.5 Air</li>
                        <li>• Perfect for learning and testing</li>
                        <li>• No cost barrier for experimentation</li>
                        <li>• Good for simple websites and prototypes</li>
                        <li>• Great starting point for new users</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Integrated advantage:</strong> Both models are optimized specifically for Shakespeare's website building workflow
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">💎</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-200">
                    Z.ai GLM 4.5 - The Smart Budget Choice
                  </h3>
                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-4">
                    <strong>When to use:</strong> Most website building tasks, cost-conscious projects
                  </p>
                  <p className="text-sm mb-4">
                    Here's the game-changer: <strong>Z.ai GLM 4.5</strong> delivers near Claude level performance at a fraction of the cost. Our extensive testing shows it nearly matches Claude's capabilities in most website building scenarios.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-800 dark:text-purple-200">Strengths:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Similar output quality to Claude for standard websites</li>
                        <li>• Excellent at modern CSS frameworks and responsive design</li>
                        <li>• Strong understanding of accessibility best practices</li>
                        <li>• Reliable performance across different project types</li>
                        <li>• Significantly lower costs than premium alternatives</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-purple-800 dark:text-purple-200">Best for:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Personal websites and portfolios</li>
                        <li>• Small business websites</li>
                        <li>• Landing pages and marketing sites</li>
                        <li>• Prototyping and experimentation</li>
                        <li>• High-volume projects where cost matters</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      <strong>Cost advantage:</strong> Often 60-80% less expensive than Claude with comparable results
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>When to Choose Other Models</h2>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                🌐 OpenRouter - The All-in-One Solution
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Best for:</strong> Users who want access to multiple models without multiple subscriptions
              </p>
              <p className="text-sm mb-4">OpenRouter is a game-changer for flexibility:</p>
              <ul className="space-y-1 text-sm">
                <li>• Access Claude, GPT-5, Gemini, and 40+ other models with a single API key</li>
                <li>• No need for multiple AI provider subscriptions</li>
                <li>• Easy switching between models to find what works best</li>
                <li>• Pay only for what you use across all providers</li>
                <li>• Perfect for comparing models side-by-side</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-300">
                🤖 OpenAI GPT Models - The Versatile Option
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Best for:</strong> Content-heavy sites, creative projects, rapid prototyping
              </p>
              <p className="text-sm mb-4">GPT models excel when your website needs:</p>
              <ul className="space-y-1 text-sm">
                <li>• Rich, engaging content generation</li>
                <li>• Creative design ideas and variations</li>
                <li>• Quick iteration and experimentation</li>
                <li>• Integration with existing OpenAI workflows</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200 dark:border-orange-800 md:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-700 dark:text-orange-300">
                💻 Local Models (via Ollama) - The Privacy Champion
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Best for:</strong> Sensitive projects, offline development, learning
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm mb-3">Choose local models when you need:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Complete privacy and data control</li>
                    <li>• Offline development capabilities</li>
                    <li>• No usage costs after initial setup</li>
                    <li>• Full customization of model behavior</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm mb-3">Popular local models:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>GPT-OSS</strong> - OpenAI's open-weight models for reasoning and agentic tasks</li>
                    <li>• <strong>DeepSeek-R1</strong> - Performance approaching O3 and Gemini 2.5 Pro</li>
                    <li>• <strong>Gemma 3</strong> - Google's most capable single-GPU model</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>Choosing Based on Project Type</h2>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2 text-green-700 dark:text-green-300">Simple Landing Pages</h4>
              <p className="text-sm font-medium mb-2">Recommended: Shakespeare AI or Z.ai GLM 4.5</p>
              <ul className="space-y-1 text-xs">
                <li>• Cost-effective for straightforward layouts</li>
                <li>• Excellent CSS and responsive design</li>
                <li>• Fast iteration and deployment</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2 text-blue-700 dark:text-blue-300">Professional Websites</h4>
              <p className="text-sm font-medium mb-2">Recommended: Claude Sonnet 4</p>
              <ul className="space-y-1 text-xs">
                <li>• Professional code quality</li>
                <li>• Advanced SEO optimization</li>
                <li>• Complex functionality handling</li>
                <li>• Brand consistency maintenance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2 text-purple-700 dark:text-purple-300">E-commerce Sites</h4>
              <p className="text-sm font-medium mb-2">Recommended: Claude Sonnet 4</p>
              <ul className="space-y-1 text-xs">
                <li>• Complex state management</li>
                <li>• Payment integration expertise</li>
                <li>• Security best practices</li>
                <li>• Performance optimization</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2 text-orange-700 dark:text-orange-300">Personal Projects & Learning</h4>
              <p className="text-sm font-medium mb-2">Recommended: Tybalt, Local models or Z.ai GLM 4.5</p>
              <ul className="space-y-1 text-xs">
                <li>• Free options (Tybalt, local) or low costs (Z.ai)</li>
                <li>• Great for experimentation</li>
                <li>• Learn without budget pressure</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-red-500 md:col-span-2 lg:col-span-2">
            <CardContent className="p-4">
              <h4 className="font-semibold mb-2 text-red-700 dark:text-red-300">Prototypes & MVPs</h4>
              <p className="text-sm font-medium mb-2">Recommended: Shakespeare AI or Z.ai GLM 4.5</p>
              <ul className="space-y-1 text-xs">
                <li>• Rapid development</li>
                <li>• Cost-effective iteration</li>
                <li>• Easy to scale up to premium models later</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>Cost-Performance Analysis</h2>

      <p>
        Choosing the right AI model comes down to matching your budget with your project needs. If you're building something important for your <strong>business or clients</strong> and money isn't tight, <strong>Claude Sonnet 4</strong> is worth the extra cost because it consistently produces high-quality, professional websites that work reliably. For <strong>small business owners</strong> who need professional results but want to watch their spending, <strong>Z.ai GLM 4.5</strong> is a game-changer—it creates websites that look and work almost as well as Claude's for much less money. When you're working on <strong>personal websites</strong> or side projects where budget matters most, you have two great options: <strong>local models</strong> cost nothing to run once set up (perfect if you're comfortable with some technical setup), or <strong>Z.ai GLM 4.5</strong> if you prefer the simplicity of cloud-based tools. For <strong>trying out ideas</strong> or <strong>learning web development</strong>, both <strong>Z.ai GLM 4.5</strong> and <strong>local models</strong> let you experiment freely without worrying about racking up costs, so you can focus on creating rather than calculating expenses.
      </p>

      <h2>Making the Switch</h2>

      <div className="not-prose my-8">
        <div className="space-y-6">
          <Card className="border-dashed border-2 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 text-blue-800 dark:text-blue-200">
                🎭 Start with Shakespeare Models
              </h3>
              <p className="text-sm mb-3">For the best integrated experience, begin with our optimized models:</p>
              <ul className="space-y-1 text-sm">
                <li>• <strong>Tybalt</strong> - Free, perfect for learning and testing</li>
                <li>• <strong>Shakespeare model</strong> - Premium quality for professional projects</li>
                <li>• Built specifically for Shakespeare's website building workflow</li>
                <li>• Seamless integration with all platform features</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-dashed border-2 border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 text-yellow-800 dark:text-yellow-200">
                ⬆️ Upgrade to Claude When Needed
              </h3>
              <p className="text-sm mb-3">Consider Claude Sonnet 4 for:</p>
              <ul className="space-y-1 text-sm">
                <li>• Mission-critical applications</li>
                <li>• Complex interactive features</li>
                <li>• Advanced debugging and troubleshooting</li>
                <li>• When budget allows for premium quality</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-dashed border-2 border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-950">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 text-purple-800 dark:text-purple-200">
                💎 Alternative: Z.ai GLM 4.5
              </h3>
              <p className="text-sm mb-3">If you prefer external providers, Z.ai GLM 4.5 offers:</p>
              <ul className="space-y-1 text-sm">
                <li>• Excellent quality-to-cost ratio</li>
                <li>• Handles 80% of website building tasks excellently</li>
                <li>• Easy to upgrade to Claude for specific complex features</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-dashed border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 text-green-800 dark:text-green-200">
                🧪 Experiment with Local Models
              </h3>
              <p className="text-sm mb-3">Try local models for:</p>
              <ul className="space-y-1 text-sm">
                <li>• Learning web development</li>
                <li>• Privacy-sensitive projects</li>
                <li>• Cost saving initiatives</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>


      <h2>Our Recommendation Strategy</h2>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 text-blue-800 dark:text-blue-200">
                🎯 The Optimal Setup
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Primary:</strong> Shakespeare model for professional projects</li>
                <li>• <strong>Learning:</strong> Tybalt for testing and experimentation</li>
                <li>• <strong>Premium backup:</strong> Claude Sonnet 4 for complex edge cases</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 dark:border-green-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 text-green-800 dark:text-green-200">
                💰 Budget-Conscious Approach
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Start with free Tybalt for everything</li>
                <li>• Upgrade to Shakespeare model for important projects</li>
                <li>• Use local models for maximum cost savings</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 text-purple-800 dark:text-purple-200">
                ⭐ Premium Quality Approach
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Shakespeare model as your primary choice</li>
                <li>• Claude Sonnet 4 for mission-critical applications</li>
                <li>• Tybalt for quick prototypes and testing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="not-prose my-8">
        <Card className="border-dashed border-2 border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-950">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4 text-orange-800 dark:text-orange-200">
              🔄 Smart Switching Strategies - Example
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">Build-First Approach:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Start with <strong>Claude Sonnet 4</strong> to build core functions and features</li>
                  <li>• Switch to <strong>Z.ai GLM 4.5</strong> for small changes, tweaks, and iterations</li>
                  <li>• Best for getting solid foundation quickly</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-orange-700 dark:text-orange-300">Cost-First Approach:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Use <strong>Z.ai GLM 4.5</strong> for design and feature implementations</li>
                  <li>• Switch to <strong>Claude Sonnet 4</strong> for advanced bug fixing and complex features</li>
                  <li>• Perfect when GLM 4.5 can't solve something</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>The Bottom Line</h2>

      <div className="not-prose my-8">
        <Card className="border-2 border-purple-200 dark:border-purple-800">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">
              🎯 Smart Model Selection Strategy
            </h3>
            <div className="space-y-4">
              <p className="text-center">
                For the best Shakespeare experience, start with our <strong>Shakespeare model</strong> for professional projects or the free <strong>Tybalt</strong> for learning and testing. Both models are specifically optimized for website building within Shakespeare and provide seamless integration.
              </p>

              <p className="text-center">
                Alternatively, <strong>Z.ai GLM 4.5</strong> offers excellent value for most website building tasks, delivering professional results at a fraction of Claude's cost, while <strong>Claude Sonnet 4</strong> remains the premium choice when absolute quality is essential.
              </p>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Remember, Shakespeare is built on user choice and flexibility. If you already have API keys with existing providers that work well for your projects, feel free to continue using them. These recommendations are guidelines, not requirements—the best model is ultimately the one that fits your workflow, budget, and project needs.
              </p>

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