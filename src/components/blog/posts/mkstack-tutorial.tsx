import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Terminal, Zap, Code, Globe, Unlock, Smartphone } from 'lucide-react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: { name?: string; picture?: string; };
  ogImage: { url?: string; };
}

export const meta: BlogPostMeta = {
  "slug": "mkstack-tutorial",
  "title": "MKStack: Vibe Coding for Everyone",
  "excerpt": "A comprehensive guide to building Nostr apps without coding experience using Stacks, MKStack, and AI-powered vibe coding with Dork.",
  "coverImage": "/assets/blog/mkstack_tutorial/mkstack-tutorial-cover.png",
  "date": "2025-06-21",
  "author": {
    "name": "Derek Ross",
    "picture": "/assets/avatars/derek.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/mkstack_tutorial/mkstack-tutorial-cover.png"
  }
};

export default function MKStackTutorial() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-12 text-center">
        <div className="mb-6">
          <Badge variant="secondary" className="mb-4 bg-violet-50 text-violet-700 border-violet-200">
            <Code className="w-3 h-3 mr-1" />
            Step-by-Step Guide
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nostr Vibe Coding 
            <span className="text-violet-600"> Tutorial</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Turn your ideas into reality using simple prompts, smart templates called Stacks, and AI tools that handle the hard parts for you. No setup, no stress, just imagination and creation.
          </p>
        </div>
      </div>

      <div className="not-prose mb-12">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/a2UGh6F0Mbg"
            title="MKStack Tutorial Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>

      <h2>What Is Stacks?</h2>
      <p><b><a href="https://soapbox.pub/tools/stacks">Stacks</a> is a powerful system designed to make app creation accessible to everyone, not just developers.</b> Instead of writing code or setting up complex tools, you simply choose a Stack: a ready-made project template that includes everything you need to launch. Think of it as starting your project with a smart blueprint and an AI co-pilot who guides you every step of the way.</p>
      <p>Whether you want to create a social platform, build an AI chatbot, or launch your own web app, Stacks lets you do it all with just a few prompts.</p>

      <h2>What is MKStack?</h2>
      <p><b>MKStack makes it easy for anyone to build apps on the Nostr protocol, no coding experience required.</b> Just describe your idea in plain language, and the system takes care of the rest, setting up your app, connecting it to the Nostr network, and generating the code for you.</p>
      <p>Behind the scenes, MKStack uses smart tools like <a href="/tools/nostrbook">Nostrbook MCP</a> and <a href="/tools/nostrify">Nostrify</a> to handle data and sync with the Nostr network. The MKStack template also includes a clean, modern design system using React and ShadCN, so your app looks great from the start. There is a lot more technical information under the hood, but honestly you don’t even need to understand how any of this works. That’s the beauty of it.</p>

      {/* MKStack features */}
      <div className="not-prose my-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">MKStack Technical Stack</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50">
            <CardHeader>
              <CardTitle className="text-orange-800 text-lg flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Nostr Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="space-y-1 text-sm">
                <li>• Nostrbook MCP for protocol handling</li>
                <li>• Nostrify for network synchronization</li>
                <li>• Built-in relay management</li>
                <li>• Event publishing and querying</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50">
            <CardHeader>
              <CardTitle className="text-purple-800 text-lg flex items-center">
                <Smartphone className="w-5 h-5 mr-2" />
                Modern Design System
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="space-y-1 text-sm">
                <li>• React 18 with TypeScript</li>
                <li>• ShadCN UI components</li>
                <li>• Responsive design</li>
                <li>• Clean, modern aesthetics</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>&lt;[0_o]&gt; Meet Dork!</h2>
      <p>
        The true power behind Stacks and MKStack is <strong>Dork</strong>, an AI agent that brings your ideas to life. Just tell Dork what features you want, such as a blog, a feed, or a live chat, and Dork takes care of the rest. Using the MKStack template and the full Nostr technology stack, Dork works with your favorite AI model to build your app right before your eyes, handling all the complex details for you.
      </p>

      <h2>Building Your First App</h2>
      <h3>Step 1: Install Node.js</h3>
      <p>
        To create your first vibe-coded Nostr app, you only need two things: Node.js and Stacks. First, install Node.js by downloading it from <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">nodejs.org</a>. They have easy installers for Windows, Mac, and Linux with step-by-step instructions.
      </p>

    <div className="not-prose my-12">
      <img 
        src="/assets/blog/mkstack_tutorial/install-node.png" 
        alt="Install Node.js" 
        className="mx-auto rounded-lg shadow-lg"
      />
    </div>

    <h3>Step 2: Install Stacks</h3>
      <p>
        Once Node.js is installed and working, you're ready to start vibe coding. Visit <a href="https://getstacks.dev" target="_blank" rel="noopener noreferrer">getstacks.dev</a> and follow the step-by-step instructions to install the Stacks application package along with the MKStack template. That's everything you need to get started building!
      </p>

      {/* Installation steps */}
      <div className="not-prose my-12">
        <div className="bg-gray-900 rounded-lg p-6 text-white">
          <div className="flex items-center mb-4">
            <Terminal className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-green-400 font-mono text-sm">Terminal</span>
          </div>
          <div className="space-y-3">
            <div className="font-mono text-sm">
              <span className="text-gray-400">$</span> <span className="text-yellow-400">npm install -g @getstacks/stacks</span>
            </div>
            <div className="font-mono text-sm">
              <span className="text-gray-400">$</span> <span className="text-yellow-400">stacks mkstack</span>
            </div>
          </div>
        </div>
      </div>

      <h3>Step 3: Enter your AI provider</h3>
      <p>
        Right away, your AI agent, Dork, will appear and start guiding you through a few questions. You'll be asked to choose your project name, select your AI provider, and enter your API key. Stacks supports multiple AI providers, including OpenRouter, Routstr, and PayPerQ. If you don't have an API key yet, you can sign up for a free account with your preferred provider. <a href="https://getstacks.dev/docs/providers" target="_blank" rel="noopener noreferrer">Learn more about Stacks AI Providers</a>.
      </p>

      <div className="not-prose mb-12">
        <img 
          src="/assets/blog/mkstack_tutorial/stack-mkstack.png" 
          alt="Stack MKStack Overview" 
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>

      <h3>Step 4: Start building your project with Dork</h3>

      <p>
        Now you're ready to start building your first Nostr app! Even if you're new to development, Stacks and MKStack have you covered. You'll see that <code>CONTEXT.md</code> has been found, which means all the technical parts - the tools, Nostr integrations, UI components, and everything else - are set up and ready to go behind the scenes. With the framework in place, your AI agent, Dork, is waiting for you to simply describe what you want in natural language. Just tell Dork your idea, and it will take care of the rest.
      </p>

      <div className="not-prose my-12">
        <img 
          src="/assets/blog/mkstack_tutorial/start-dork.png" 
          alt="Start Dork AI Agent" 
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>

      <p>
        Dork understands all the official Nostr NIPs, thanks to the built-in <a href="https://nostrbook.dev/mcp" target="_blank" rel="noopener noreferrer">Nostrbook MCP</a>. This means vibe coders don't always need to reference specific NIP numbers or event kinds, especially when building simple applications. However, for more complex or detailed features, including NIP numbers or event kinds can help Dork generate more precise results.
      </p>

      <p className="text-lg font-semibold text-violet-600">That's it! It's honestly that simple. You're off to building your next idea.</p>

      <h2>Go Deeper</h2>
      <p>
        To explore NIPs and better understand the Nostr protocol, <a href="https://nostrhub.io" target="_blank" rel="noopener noreferrer">NostrHub.io</a> is a valuable resource. It allows users to search and browse official and custom NIPs, look up event kinds or keywords, and participate in community discussions. It's especially helpful when trying to describe a feature more clearly or when additional technical insight is needed.
      </p>

      <p>
        For those who want to dive deeper and better understand the technical capabilities and limitations of the tools behind their application, exploring the <a href="https://nostrify.dev/" target="_blank" rel="noopener noreferrer">Nostrify</a> library website can be especially helpful. Browsing its features and reviewing included code can offer valuable insight into how Nostrify works under the hood. This deeper understanding can lead to more effective prompting, as it gives you a clearer view of the Nostr protocol and the building blocks you're working with.
      </p>

      <h2>Run a Local Development Server</h2>
      <p>
        Open a <strong>second terminal</strong> window and use the <code>cd</code> command to navigate into your project's directory. Once you're inside the folder, run the command <code>npm run dev</code>. This will start the development server, allowing you to test and view your application locally. After it starts, you'll see output in the terminal confirming that the server is running. You can then open your web browser and go to a local URL like <code>http://localhost:8080</code> to see your app in action.
      </p>

      <p>
        To stop the development server, simply press <code>Control + C</code> in your terminal. This will exit the development environment and stop the local server.
      </p>

      <div className="not-prose my-12">
        <img 
          src="/assets/blog/mkstack_tutorial/local-dev.png" 
          alt="Local Development Server" 
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>

      <h2>Use Git for Version Control</h2>
      <p>
        Open a <strong>third terminal</strong> window. This one will be dedicated to using Git. Git is a version control tool that helps you track changes in your project. It's especially useful when working with AI tools like Dork, where results can sometimes be unexpected or break existing functionality. By using Git, you can easily return to a previous, working version of your code if something goes wrong.
      </p>

      <p>
        For example, if you ask Dork to add user profiles and it introduces bugs or breaks another feature, you don't want to waste time trying to fix everything manually. Instead, you can quickly roll back to a previous version and try your prompt again with adjustments.
      </p>

      {/* Git workflow */}
      <div className="not-prose my-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Safe Git Workflow</h3>
        <div className="bg-gray-900 rounded-lg p-6 text-white">
          <div className="flex items-center mb-4">
            <Terminal className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-green-400 font-mono text-sm">Git Commands</span>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-gray-300 text-sm mb-2">Stage and commit your changes:</p>
              <div className="font-mono text-sm space-y-1">
                <div><span className="text-gray-400">$</span> <span className="text-yellow-400">git add .</span></div>
                <div><span className="text-gray-400">$</span> <span className="text-yellow-400">git commit -m "working user profiles"</span></div>
              </div>
            </div>
            <div>
              <p className="text-gray-300 text-sm mb-2">Reset to last commit if something breaks:</p>
              <div className="font-mono text-sm">
                <div><span className="text-gray-400">$</span> <span className="text-red-400">git reset --hard</span></div>
              </div>
              <p className="text-orange-400 text-xs mt-1">⚠️ This deletes all uncommitted work!</p>
            </div>
          </div>
        </div>
      </div>

      <p>
        To stay safe, make commits often. A typical workflow looks like this: <code>git add .</code> adds all the files you've changed, and <code>git commit -m "working user profiles"</code> saves the current state of your project with a message.
      </p>

      <p>
        If something goes wrong, you can reset your project by running: <code>git reset --hard</code> This will undo all changes since your last commit. Be careful! This command deletes all uncommitted work, which is why frequent commits are important. More advanced users can also revert specific commits or roll back to older versions selectively if needed.
      </p>

      <h2>Working with Dork</h2>
      <p>
        Sometimes Dork can get a little too eager and crash while processing your request. If that happens, don't worry, it's easy to get back on track. Simply open your terminal, make sure you're inside your project's directory, and run the command: <code>stacks agent</code> This will restart Dork and allow you to continue building right where you left off.
      </p>

      <p>
        If something isn't working after a couple of prompts, don't keep trying the same thing over and over. This gets expensive! Instead, press <code>Control + C</code> to exit your session with Dork. Then, use <code>git reset --hard</code> to revert your project back to the last known good commit. Once that's done, restart Dork with <code>stacks agent</code> and try your prompt again. This time try with clearer instructions based on what didn't work before.
      </p>

      <p>
        Treat each failed attempt as a learning moment. Use what you've learned to refine your prompt and guide Dork more effectively toward what you're trying to build.
      </p>

      <h2>Pushing to Production</h2>
      <p>
        Now that you've become a confident Nostr developer, thanks to vibe coding and Dork's help along the way, you might reach a point where you're ready to share your app with others in the Nostr community. Fortunately, Stacks and the MKStack template make this step just as easy. You don't need to worry about configuring a production web server or dealing with complex deployment processes.
      </p>

      <div className="not-prose my-12">
        <img 
          src="/assets/blog/mkstack_tutorial/publishing.png" 
          alt="Publishing Process Overview" 
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>

      <p>
        When you're ready, simply run the command <code>npm run deploy</code>. This will package your app for production, upload it to Blossom servers, publish it to Nostr relays, and make it publicly available on <strong>NostrDeploy.com</strong>. As part of the process, a new Nostr key pair (an <code>nsec</code> private key and corresponding public key) will be generated for your deployed app. The result is a fully live Nostr application, ready for users to explore and interact with.
      </p>

      {/* Production deployment showcase */}
      <div className="not-prose my-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Deploy to Production</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100/50">
            <CardHeader>
              <CardTitle className="text-green-800 text-lg flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                One Command Deploy
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              Run <code>npm run deploy</code> and your app goes live automatically
            </CardContent>
          </Card>
          
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50">
            <CardHeader>
              <CardTitle className="text-blue-800 text-lg flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Blossom Storage
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              Your app is uploaded to decentralized Blossom servers
            </CardContent>
          </Card>
          
          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50">
            <CardHeader>
              <CardTitle className="text-purple-800 text-lg flex items-center">
                <Unlock className="w-5 h-5 mr-2" />
                Nostr Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm">
              Published to Nostr relays with generated key pair
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>The Future of App Creation</h2>
      <p>
        With Stacks, MKStack, and the power of vibe coding, building and deploying decentralized Nostr applications has never been easier. These tools help realize the promise of an open and permissionless protocol. Before everyone could participate, now everyone can build too.
      </p>

      <p>
        Whether you're a developer or someone with zero coding experience, you now have the tools to turn your ideas into real, working apps. From your first prompt to your live deployment, everything is designed to keep you in flow and focused on what matters: building something great. The future of app creation is here, and it's open to everyone.
      </p>

      {/* Call to action */}
      <div className="not-prose my-16">
        <div className="bg-gradient-to-r from-violet-600 to-purple-800 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Start Vibe Coding Today</h2>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Ready to turn your ideas into reality? Install Stacks and MKStack to begin your journey into the world of AI-powered app development on Nostr.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="bg-white text-violet-700 hover:bg-violet-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="https://getstacks.dev/" target="_blank" rel="noopener noreferrer">
                <Code className="w-5 h-5 mr-2" />
                Get Started with Stacks
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-violet-700 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="https://soapbox.pub/mkstack" target="_blank" rel="noopener noreferrer">
                <Globe className="w-5 h-5 mr-2" />
                Explore MKStack
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <p className="text-2xl font-bold text-violet-600 text-center">Happy vibe coding!</p>
    </article>
  );
}