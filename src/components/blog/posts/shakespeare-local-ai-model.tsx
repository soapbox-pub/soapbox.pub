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
  "slug": "shakespeare-local-ai-model",
  "title": "How to Use Local AI Models with Shakespeare",
  "excerpt": "Want complete control over your AI-powered website building? Local AI models offer enhanced privacy, faster responses, and dramatically reduced costs in your development workflow.",
  "coverImage": "/assets/blog/shakespeare-using-local-model/shakespeare-using-local-model.png",
  "date": "2025-09-25",
  "author": {
    "name": "Derek Ross",
    "picture": "/assets/avatars/derek.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/shakespeare-using-local-model/shakespeare-using-local-model.png"
  },
  "featured": false,
  "tags": ["shakespeare-resource", "local-ai", "setup", "privacy"]
};

export default function ShakespeareLocalAIModel() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            🔒 Complete Privacy
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            ⚡ Zero Ongoing Costs
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            🎛️ Full Customization
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
            📴 Works Offline
          </Badge>
        </div>
      </div>

      <p className="text-xl leading-relaxed text-muted-foreground mb-8">
        Want complete control over your AI-powered website building? Local AI models offer enhanced privacy, faster responses, and dramatically reduced costs in your development workflow. With Shakespeare's support for local models including GPT-OSS, DeepSeek-R1, Gemma 3 and other models running on your machine, you can build websites entirely offline while keeping your projects and data completely private.
      </p>

      <h2>Why Choose Local AI Models?</h2>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-green-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-green-700">
                🔒 Complete Privacy
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• No data ever leaves your machine</li>
                <li>• Perfect for sensitive business projects</li>
                <li>• Full control over your intellectual property</li>
                <li>• No concerns about terms of service changes</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-700">
                💰 Zero Ongoing Costs
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Pay once for hardware, use forever</li>
                <li>• No per-request charges</li>
                <li>• No monthly subscriptions</li>
                <li>• Unlimited usage without budget worries</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-700">
                🎛️ Full Customization
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Fine-tune models for your specific needs</li>
                <li>• Complete control over model behavior</li>
                <li>• No rate limits or usage restrictions</li>
                <li>• Experiment freely without costs</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>Getting Started: Installing Ollama</h2>

      <h3>System Requirements</h3>

      <div className="not-prose my-6">
        <div className="space-y-4">
          <Card className="border-l-4 border-red-500">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 rounded-full p-2 text-red-600 font-bold text-sm min-w-[4rem] text-center">MIN</div>
                <div>
                  <h4 className="font-semibold mb-1">Minimum</h4>
                  <p className="text-sm text-muted-foreground">8GB RAM, modern CPU</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 rounded-full p-2 text-yellow-600 font-bold text-sm min-w-[4rem] text-center">REC</div>
                <div>
                  <h4 className="font-semibold mb-1">Recommended</h4>
                  <p className="text-sm text-muted-foreground">16GB+ RAM, GPU with 8GB+ VRAM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-4">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 text-green-600 font-bold text-sm min-w-[4rem] text-center">OPT</div>
                <div>
                  <h4 className="font-semibold mb-1">Optimal</h4>
                  <p className="text-sm text-muted-foreground">32GB+ RAM, high-end GPU</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <h3>Installation Steps</h3>

      <div className="not-prose my-8">
        <div className="space-y-6">
          <Card className="border-2 border-gray-200">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-4">🍎 macOS Installation</h4>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`# Install via Homebrew
brew install ollama

# Or download from ollama.ai
curl -fsSL https://ollama.ai/install.sh | sh`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-4">🐧 Linux Installation</h4>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                <code>{`# Install via curl
curl -fsSL https://ollama.ai/install.sh | sh

# Or use package manager
sudo apt install ollama  # Ubuntu/Debian
sudo pacman -S ollama     # Arch Linux`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-4">🪟 Windows Installation</h4>
              <ol className="space-y-2 text-sm">
                <li>1. Download the installer from ollama.ai</li>
                <li>2. Run the installer as administrator</li>
                <li>3. Restart your system after installation</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>Choosing the Right Model</h2>

      <h3>For Website Building: Top Local Model Recommendations</h3>

      <div className="not-prose my-8">
        <div className="space-y-6">
          <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-3 text-blue-800">
                GPT-OSS - OpenAI's Open-Weight Powerhouse
              </h4>
              <pre className="bg-gray-100 p-3 rounded text-sm mb-4">
                <code>ollama pull gpt-oss</code>
              </pre>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-sm mb-2">Best for:</p>
                  <p className="text-sm text-gray-700">Powerful reasoning, agentic tasks, versatile developer use cases</p>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-2">Trade-offs:</p>
                  <p className="text-sm text-green-600">✓ Excellent at complex web development</p>
                  <p className="text-sm text-orange-600">⚠ Requires decent hardware</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-3 text-purple-800">
                DeepSeek-R1 - Enterprise-Grade Reasoning
              </h4>
              <pre className="bg-gray-100 p-3 rounded text-sm mb-4">
                <code>ollama pull deepseek-r1</code>
              </pre>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-sm mb-2">Best for:</p>
                  <p className="text-sm text-gray-700">Open reasoning with performance approaching O3 and Gemini 2.5 Pro</p>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-2">Trade-offs:</p>
                  <p className="text-sm text-green-600">✓ Leading-edge reasoning capabilities</p>
                  <p className="text-sm text-orange-600">⚠ Slower inference due to reasoning depth</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold mb-3 text-green-800">
                Gemma 3 - Google's Single-GPU Solution
              </h4>
              <pre className="bg-gray-100 p-3 rounded text-sm mb-4">
                <code>ollama pull gemma3</code>
              </pre>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-sm mb-2">Best for:</p>
                  <p className="text-sm text-gray-700">Google's most capable model that runs on a single GPU</p>
                </div>
                <div>
                  <p className="font-semibold text-sm mb-2">Trade-offs:</p>
                  <p className="text-sm text-green-600">✓ Excellent performance on consumer hardware</p>
                  <p className="text-sm text-orange-600">⚠ May need more guidance for complex tasks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <h3>Quick Model Comparison</h3>

      <div className="not-prose my-6">
        <Card className="border border-gray-200">
          <CardContent className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Model</th>
                    <th className="text-left p-2">Size</th>
                    <th className="text-left p-2">RAM Required</th>
                    <th className="text-left p-2">Speed</th>
                    <th className="text-left p-2">Code Quality</th>
                    <th className="text-left p-2">Content Quality</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">GPT-OSS</td>
                    <td className="p-2">8GB</td>
                    <td className="p-2">16GB</td>
                    <td className="p-2">Fast</td>
                    <td className="p-2">Excellent</td>
                    <td className="p-2">Excellent</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-semibold">DeepSeek-R1</td>
                    <td className="p-2">7GB</td>
                    <td className="p-2">16GB</td>
                    <td className="p-2">Medium</td>
                    <td className="p-2">Excellent</td>
                    <td className="p-2">Very Good</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-semibold">Gemma 3</td>
                    <td className="p-2">4GB</td>
                    <td className="p-2">8GB</td>
                    <td className="p-2">Very Fast</td>
                    <td className="p-2">Very Good</td>
                    <td className="p-2">Good</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Configuring CORS for Browser Access</h2>

      <div className="not-prose my-6">
        <Card className="border-2 border-yellow-200 bg-yellow-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <div className="text-2xl">⚠️</div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-yellow-800">
                  Important: CORS Configuration Required
                </h3>
                <p className="text-sm text-gray-700">
                  Since Shakespeare runs in your browser, you need to configure Ollama to accept cross-origin requests (CORS). This is a crucial step that allows Shakespeare to communicate with your local Ollama instance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3>Checking CORS Status</h3>

      <p>First, verify if CORS is already enabled:</p>

      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        <code className="text-gray-900">curl -X OPTIONS http://localhost:11434 -H "Origin: http://example.com" -H "Access-Control-Request-Method: GET" -I</code>
      </pre>

      <p>If you see <code>HTTP/1.1 403 Forbidden</code>, CORS is not enabled and needs configuration.</p>

      <h3>Enabling CORS by Platform</h3>

      <div className="not-prose my-8">
        <div className="space-y-6">
          <Card className="border-gray-200">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-4">🍎 Enabling CORS on macOS</h4>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
                <code className="text-gray-900">{`# Allow all origins (easiest for local development)
launchctl setenv OLLAMA_ORIGINS "*"

# Or specify specific origins for better security
launchctl setenv OLLAMA_ORIGINS "localhost:3000,localhost:5173,shakespeare.app"

# Optional: Make Ollama accessible on your network
launchctl setenv OLLAMA_HOST "0.0.0.0"

# Restart Ollama for changes to take effect`}</code>
              </pre>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-4">🐧 Enabling CORS on Linux</h4>
              <p className="text-sm mb-3">Edit the Ollama service configuration:</p>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
                <code className="text-gray-900">sudo systemctl edit ollama.service</code>
              </pre>
              <p className="text-sm mb-3">Add these environment variables:</p>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto mb-4">
                <code className="text-gray-900">{`[Service]
Environment="OLLAMA_HOST=0.0.0.0"
Environment="OLLAMA_ORIGINS=*"`}</code>
              </pre>
              <p className="text-sm mb-3">Then restart the service:</p>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                <code className="text-gray-900">sudo service ollama restart</code>
              </pre>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold mb-4">🪟 Enabling CORS on Windows</h4>
              <ol className="space-y-2 text-sm">
                <li>1. Open System Properties → Environment Variables</li>
                <li>2. Add new system variables:</li>
                <li className="ml-4">• <code>OLLAMA_ORIGINS</code> with value <code>*</code> (or specific origins)</li>
                <li className="ml-4">• <code>OLLAMA_HOST</code> with value <code>0.0.0.0</code> (optional, for network access)</li>
                <li>3. Restart Ollama from the system tray</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>

      <h3>Verifying CORS Configuration</h3>

      <p>After configuration, test again:</p>

      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        <code className="text-gray-900">curl -X OPTIONS http://localhost:11434 -H "Origin: http://example.com" -H "Access-Control-Request-Method: GET" -I</code>
      </pre>

      <p>Success looks like:</p>

      <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
        <code className="text-gray-900">{`HTTP/1.1 204 No Content
Access-Control-Allow-Origin: *`}</code>
      </pre>

      <h2>Configuring Local Models in Shakespeare</h2>

      <div className="not-prose my-6">
        <div className="space-y-4">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 text-blue-600 font-bold text-sm min-w-[2rem] text-center">1</div>
                <div>
                  <h4 className="font-semibold mb-2">Start Ollama Service</h4>
                  <pre className="bg-gray-100 p-3 rounded text-sm">
                    <code className="text-gray-900">{`# Start Ollama server (with CORS already configured)
ollama serve

# The service will run on http://localhost:11434`}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 rounded-full p-2 text-purple-600 font-bold text-sm min-w-[2rem] text-center">2</div>
                <div>
                  <h4 className="font-semibold mb-2">Test Your Model</h4>
                  <pre className="bg-gray-100 p-3 rounded text-sm">
                    <code className="text-gray-900">ollama run gpt-oss "Write a simple HTML page with a header"</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full p-2 text-green-600 font-bold text-sm min-w-[2rem] text-center">3</div>
                <div>
                  <h4 className="font-semibold mb-2">Configure in Shakespeare</h4>
                  <ol className="space-y-2 text-sm">
                    <li>1. Open Shakespeare and go to <strong>Settings &gt; AI Settings</strong></li>
                    <li>2. Scroll to <strong>"Add Custom Provider"</strong></li>
                    <li>3. Click to expand the custom provider section</li>
                    <li>4. Enter the following configuration:</li>
                    <li className="ml-4">• <strong>Provider Name:</strong> "ollama"</li>
                    <li className="ml-4">• <strong>API Endpoint:</strong> <code>http://localhost:11434/v1</code></li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>The Bottom Line</h2>

      <div className="not-prose my-8">
        <Card className="border-2 border-purple-200">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent text-center">
              🚀 Local Models with Shakespeare Provide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="text-green-500">✓</div>
                  <span className="text-sm"><strong>Enhanced privacy</strong> - Your code never leaves your machine</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-green-500">✓</div>
                  <span className="text-sm"><strong>Faster responses</strong> - No network latency</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="text-green-500">✓</div>
                  <span className="text-sm"><strong>Reduced costs</strong> - Zero API fees after initial setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-green-500">✓</div>
                  <span className="text-sm"><strong>Complete control</strong> - Run any compatible model</span>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6 italic">
              Ready to supercharge your development workflow? Start with GPT-OSS and experience the benefits of local AI models in Shakespeare.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
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