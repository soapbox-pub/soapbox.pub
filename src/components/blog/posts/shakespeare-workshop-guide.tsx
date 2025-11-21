import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Presentation, Zap, Trophy, Gift, QrCode } from 'lucide-react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: { name?: string; picture?: string; };
  ogImage: { url?: string; };
  tags?: string[];
}

export const meta: BlogPostMeta = {
  "slug": "shakespeare-workshop-guide",
  "title": "How to Run a Shakespeare Workshop",
  "excerpt": "A step-by-step guide to hosting an engaging Shakespeare workshop where participants learn to build Nostr websites with AI assistance",
  "coverImage": "/assets/blog/shakespeare-workshop-guide/how-to-host-shakespeare-workshop.png",
  "date": "2025-11-20",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/shakespeare-workshop-guide/how-to-host-shakespeare-workshop.png"
  },
  "tags": ["shakespeare", "tutorial", "workshop", "community"]
};

export default function ShakespeareWorkshopGuide() {
  return (
    <article className="prose prose-lg max-w-none">

      <h2>Workshop Overview</h2>

      <p>
        Shakespeare workshops are interactive sessions where participants build Nostr-compatible websites with open source AI tools. These workshops work well for meetups, conferences, hackathons, or educational events. The format is simple: set up helpers, introduce the tool, provide free access through gift cards, build together, and celebrate what everyone creates.
      </p>

      <div className="not-prose my-12">
        <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50">
          <CardHeader>
            <CardTitle className="text-2xl">Table of Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <nav className="space-y-2">
              <a href="#step-1-helpers" className="block text-purple-700 hover:text-purple-900 hover:underline font-medium">
                Step 1: Set Up Your Helpers
              </a>
              <a href="#step-2-introduce" className="block text-purple-700 hover:text-purple-900 hover:underline font-medium">
                Step 2: Introduce Shakespeare
              </a>
              <a href="#step-3-gift-cards" className="block text-purple-700 hover:text-purple-900 hover:underline font-medium">
                Step 3: Provide Free Access with Gift Cards
              </a>
              <a href="#step-4-build" className="block text-purple-700 hover:text-purple-900 hover:underline font-medium">
                Step 4: Build Together
              </a>
              <a href="#step-5-celebrate" className="block text-purple-700 hover:text-purple-900 hover:underline font-medium">
                Step 5: Share and Celebrate
              </a>
              <a href="#timeline" className="block text-purple-700 hover:text-purple-900 hover:underline font-medium">
                Workshop Timeline
              </a>
              <a href="#tips" className="block text-purple-700 hover:text-purple-900 hover:underline font-medium">
                Tips for Success
              </a>
              <a href="#promoting" className="block text-purple-700 hover:text-purple-900 hover:underline font-medium">
                Promoting Your Workshop
              </a>
              <a href="#resources" className="block text-purple-700 hover:text-purple-900 hover:underline font-medium">
                Additional Resources
              </a>
            </nav>
          </CardContent>
        </Card>
      </div>

      <h2 id="step-1-helpers">Step 1: Set Up Your Helpers</h2>

      <p>
        Before diving into Shakespeare, identify experienced participants who can assist others throughout the workshop. This peer support system is crucial for a smooth experience.
      </p>

      <h3>Enlisting Assistants</h3>

      <p>
        At the very beginning of your workshop, ask these two questions to the group:
      </p>

      <ol>
        <li><strong>"Raise your hand if you've ever vibe coded before"</strong> - This identifies participants with AI coding experience</li>
        <li><strong>"Raise your hand if you're really good at vibe coding"</strong> - This identifies your potential helpers</li>
      </ol>

      <p>
        Ask the second group (those who raised their hands for being "really good") to serve as assistants to others in the room. These helpers can:
      </p>

      <ul>
        <li>Walk around during the building session</li>
        <li>Answer questions about prompting and AI interaction</li>
        <li>Help troubleshoot issues participants encounter</li>
        <li>Provide encouragement and creative suggestions</li>
        <li>Share tips and tricks they've learned</li>
      </ul>

      <div className="not-prose my-8">
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50">
          <CardContent className="py-6 px-8">
            <p className="text-sm text-gray-700 mb-0">
              <strong>Pro Tip:</strong> Having 1 helper for every 5-10 participants creates a supportive environment where everyone can get help quickly without overwhelming the main facilitator.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2 id="step-2-introduce">Step 2: Introduce Shakespeare</h2>

      <p>
        Start your workshop with a brief introduction to Shakespeare and what it can do. Use the presentation template linked above to cover the key points:
      </p>

      <h3>Main points to cover:</h3>

      <ol>
        <li>What is Shakespeare? And basics of how it works</li>
        <li>Why Shakespeare is more freedom-respecting than alternatives like Lovable or Replit</li>
        <li>Choosing AI providers and models (recommend Claude Sonnet 4.5 for the best code output)</li>
        <li>How to push and deploy your code</li>
        <li>How to edit existing sites on Shakespeare</li>
        <li>Ideas of things you can build</li>
      </ol>

      <h3>What Shakespeare Can and Cannot Build</h3>

      <div className="not-prose my-8">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="text-left p-4 bg-green-50 font-semibold text-green-900">✅ What Shakespeare CAN Build</th>
                <th className="text-left p-4 bg-red-50 font-semibold text-red-900">❌ What Shakespeare CANNOT Build</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 align-top">Nostr Applications (social feeds, profile pages, content platforms)</td>
                <td className="p-4 align-top">Backend Services (server-side code, databases, API endpoints)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 align-top">Static Websites (landing pages, portfolios, blogs, documentation)</td>
                <td className="p-4 align-top">Native Mobile Apps (web apps only, though PWAs are possible)</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 align-top">Interactive Web Apps (forms, calculators, dashboards, client-side tools)</td>
                <td className="p-4 align-top"></td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 align-top">Media-Rich Sites (image galleries, video embeds, audio players)</td>
                <td className="p-4 align-top"></td>
              </tr>
              <tr>
                <td className="p-4 align-top">Responsive Designs (mobile-friendly layouts for all devices)</td>
                <td className="p-4 align-top"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Emphasize that Shakespeare excels at building <strong>Nostr-native applications</strong> and <strong>client-side web experiences</strong>. For projects requiring backend infrastructure, participants should consider other tools or plan to integrate Shakespeare-built frontends with separate backend services.
      </p>


      <div className="not-prose my-12">
        <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Presentation className="w-6 h-6 text-purple-600" />
              Presentation Template
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Use our pre-made template to introduce Shakespeare to your workshop participants:
            </p>
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a
                href="https://www.canva.com/design/DAG5St3AQVk/6rb3k_09jG9hK7aMvZkU9A/edit?utm_content=DAG5St3AQVk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Presentation Template
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <h2 id="step-3-gift-cards">Step 3: Provide Free Access with Gift Cards</h2>

      <p>
        Shakespeare makes it easy to provide free AI credits to workshop participants through gift cards. This ensures everyone can participate without needing their own API keys or payment setup.
      </p>

      <div className="not-prose my-12">
        <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Gift className="w-6 h-6 text-green-600" />
              Setting Up Gift Cards
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-2 text-green-700 font-bold text-sm min-w-[2rem] text-center">1</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Purchase Gift Cards in Shakespeare</h4>
                  <p className="text-sm text-gray-700">
                    Log into <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">shakespeare.diy</a> with your Nostr account, navigate to Settings → AI, and purchase gift cards in bulk using Stripe or Bitcoin Lightning.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-2 text-green-700 font-bold text-sm min-w-[2rem] text-center">2</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Export as CSV</h4>
                  <p className="text-sm text-gray-700">
                    After purchase, export your gift cards as a CSV file containing the redeemable codes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-2 text-green-700 font-bold text-sm min-w-[2rem] text-center">3</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Upload to Faucet</h4>
                  <p className="text-sm text-gray-700">
                    Visit <a href="https://faucet.shakespeare.diy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">faucet.shakespeare.diy</a> and upload your CSV file to create a shareable faucet page.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-green-100 rounded-full p-2 text-green-700 font-bold text-sm min-w-[2rem] text-center">4</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Share QR Code with Participants</h4>
                  <p className="text-sm text-gray-700">
                    Display the QR code on a projector or slides so participants can scan and redeem their free AI credits instantly.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3>Why Gift Cards Work Great for Workshops</h3>

      <ul>
        <li><strong>No Setup Friction:</strong> Participants don't need to create accounts or enter payment information</li>
        <li><strong>Instant Access:</strong> Scan QR code, redeem gift card, start building immediately</li>
        <li><strong>Controlled Budget:</strong> You decide exactly how much AI credit to provide per participant</li>
        <li><strong>Professional Experience:</strong> Everyone gets the same quality AI models and capabilities</li>
      </ul>

      <h2 id="step-4-build">Step 4: Build Together</h2>

      <p>
        The core of the workshop is collaborative building. One facilitator builds an example project on the main screen while participants work on their own projects simultaneously.
      </p>

      <h3>Facilitator's Role</h3>

      <p>
        As the workshop leader, you'll build a project live to demonstrate Shakespeare's capabilities:
      </p>

      <ul>
        <li><strong>Choose a Simple Project:</strong> Pick something achievable in 30-45 minutes (personal portfolio, event landing page, simple blog)</li>
        <li><strong>Think Out Loud:</strong> Narrate your prompts and explain why you're asking the AI for specific features</li>
        <li><strong>Show Iteration:</strong> Demonstrate refining and improving the AI's output through follow-up questions</li>
        <li><strong>Handle Errors Gracefully:</strong> When things don't work perfectly, show how to troubleshoot and adjust prompts</li>
      </ul>

      <h3>Participant Experience</h3>

      <p>
        While you build, participants follow along on their own devices:
      </p>

      <ul>
        <li>They can build the same project as you (following along)</li>
        <li>They can build their own unique projects</li>
        <li>Supporters and helpers can walk around offering assistance and advice</li>
      </ul>

      <div className="not-prose my-12">
        <Card className="border-2 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              Workshop Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Pause for Questions:</strong> Stop periodically to answer participant questions and check progress</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Show the Preview:</strong> Switch to preview mode frequently to show visual results of prompts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Encourage Creativity:</strong> Remind participants they don't have to follow your exact project</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Designate Helpers:</strong> Have experienced users roam the room offering assistance</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p>
        For workshop project ideas and inspiration, <a href="https://shakespeare.diy/showcase" target="_blank" rel="noopener noreferrer">browse the Shakespeare showcase</a> to see what other builders have created.
      </p>

      <h2 id="step-5-celebrate">Step 5: Share and Celebrate</h2>

      <p>
        The final phase of the workshop is where the magic happens. Participants deploy their creations and share them with the community.
      </p>

      <h3>Deployment Process</h3>

      <p>
        Shakespeare makes deployment simple:
      </p>

      <ol>
        <li><strong>Click Deploy:</strong> Participants use the built-in deployment feature to publish their sites</li>
        <li><strong>Get Public URL:</strong> Each project receives a unique public URL instantly</li>
        <li><strong>Share in Chat:</strong> Participants post their links in the meetup chat or Discord</li>
      </ol>

      <h3>Showcase Time</h3>

      <p>
        Reserve the last 15-20 minutes for participants to present their creations:
      </p>

      <ul>
        <li><strong>Screen Sharing:</strong> Pull up participant websites on the main display</li>
        <li><strong>Quick Demos:</strong> Each person gets 1-2 minutes to show what they built and explain their process</li>
        <li><strong>Community Feedback:</strong> Encourage positive feedback and suggestions</li>
        <li><strong>Celebrate Creativity:</strong> Highlight unique approaches and creative solutions</li>
      </ul>



      <h2 id="timeline">Workshop Timeline</h2>

      <p>
        A typical Shakespeare workshop runs 60 minutes:
      </p>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 rounded-lg p-3 text-purple-700 font-bold text-sm min-w-[5rem] text-center">
                  0-10 min
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Introduction & Setup</h4>
                  <p className="text-sm text-gray-600">
                    Enlist helpers by asking about vibe coding experience, present Shakespeare overview, demonstrate capabilities, share QR code for gift card redemption
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-lg p-3 text-blue-700 font-bold text-sm min-w-[5rem] text-center">
                  10-40 min
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Building Session</h4>
                  <p className="text-sm text-gray-600">
                    Live demonstration on main screen, participants build their own projects, helpers provide support
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-lg p-3 text-green-700 font-bold text-sm min-w-[5rem] text-center">
                  40-45 min
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Deployment & Sharing</h4>
                  <p className="text-sm text-gray-600">
                    Participants deploy their projects, share links in chat, prepare for presentations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 rounded-lg p-3 text-orange-700 font-bold text-sm min-w-[5rem] text-center">
                  45-60 min
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Showcase & Wrap-Up</h4>
                  <p className="text-sm text-gray-600">
                    Each participant presents their project, community feedback, closing remarks
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2 id="tips">Tips for Success</h2>

      <h3>Before the Workshop</h3>

      <ul>
        <li><strong>Test the Faucet:</strong> Make sure your QR code works and credits redeem properly</li>
        <li><strong>Practice Your Demo:</strong> Build your example project at least once beforehand</li>
        <li><strong>Prepare Backup Ideas:</strong> Have 2-3 project ideas ready in case participants need inspiration</li>
        <li><strong>Set Up Support:</strong> Brief helpers on common issues and how to troubleshoot</li>
      </ul>

      <h3>During the Workshop</h3>

      <ul>
        <li><strong>Manage Time:</strong> Keep an eye on the clock to ensure time for showcasing</li>
        <li><strong>Be Encouraging:</strong> Celebrate all attempts, even incomplete projects</li>
        <li><strong>Share Shortcuts:</strong> Show useful prompts and patterns as you discover them</li>
        <li><strong>Document Progress:</strong> Take photos or screenshots for future promotion</li>
      </ul>

      <h3>After the Workshop</h3>

      <ul>
        <li><strong>Share Projects:</strong> Compile all deployed URLs and share with participants</li>
        <li><strong>Gather Feedback:</strong> Ask what worked well and what could be improved</li>
        <li><strong>Share Feedback with Soapbox Team:</strong> Share feedback from participants with the Soapbox team</li>
        <li><strong>Follow Up:</strong> Send resources for continued learning (documentation, tutorials, community links)</li>
        <li><strong>Build Community:</strong> Invite participants to ongoing Nostr development discussions</li>
      </ul>

      <h2 id="promoting">Promoting Your Workshop</h2>

      <p>
        Attract participants by emphasizing:
      </p>

      <ul>
        <li><strong>No Coding Required:</strong> Anyone can participate regardless of technical background</li>
        <li><strong>Free AI Access:</strong> All participants get free AI credits through gift cards</li>
        <li><strong>Build Real Projects:</strong> Everyone leaves with a deployed, shareable website</li>
        <li><strong>Learn Nostr:</strong> Introduction to decentralized web technologies</li>
        <li><strong>Community Support:</strong> Helpers available throughout the session</li>
      </ul>

      <div className="not-prose my-16">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Host Your Workshop?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Get started with the presentation template and explore Shakespeare's capabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a
                href="https://www.canva.com/design/DAG5St3AQVk/6rb3k_09jG9hK7aMvZkU9A/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Presentation className="w-5 h-5 mr-2" />
                Get Presentation Template
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                <Zap className="w-5 h-5 mr-2" />
                Try Shakespeare
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="mt-8 pt-8 border-t border-purple-400">
            <p className="text-lg text-purple-100 mb-4">
              Need help planning your workshop?
            </p>
            <p className="text-sm text-purple-200">
              Reach out to the Soapbox team on Nostr for guidance and support
            </p>
          </div>
        </div>
      </div>

      <h2 id="resources">Additional Resources</h2>

      <ul>
        <li><a href="/blog/announcing-shakespeare-act-2">Shakespeare Act 2: Build Freely</a> - Feature overview</li>
        <li><a href="/blog/prompt-better-projects">How to Prompt Better Projects with Shakespeare</a> - Prompting guide</li>
        <li><a href="/blog/shakespeare-editing-code">Editing Code in Shakespeare</a> - Manual editing tips</li>
        <li><a href="/blog/shakespeare-deploying-sharing-projects">Deploying and Sharing Shakespeare Projects</a> - Deployment guide</li>
        <li><a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">Shakespeare Website</a></li>
        <li><a href="https://faucet.shakespeare.diy" target="_blank" rel="noopener noreferrer">Shakespeare Faucet</a> - Gift card redemption</li>
      </ul>

      <p className="text-xl font-semibold text-purple-600 text-center mt-12">
        Happy building, and enjoy your workshop! 🎭
      </p>
    </article>
  );
}
