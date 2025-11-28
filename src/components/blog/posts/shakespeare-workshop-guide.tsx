import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Presentation, Zap } from 'lucide-react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: { name?: string; picture?: string; };
  ogImage: { url?: string; };
  featured?: boolean;
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
  "featured": true,
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
            <CardTitle className="text-2xl">Workshop Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <a href="#step-1-introduce" className="block no-underline">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-purple-100 rounded-lg p-3 text-purple-700 font-bold text-sm min-w-[5rem] text-center">
                        0-10 min
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Introduction & Setup</h4>
                        <p className="text-sm text-gray-600">
                          Present Shakespeare overview, demonstrate capabilities, share QR code for gift card redemption
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a href="#step-2-build" className="block no-underline">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
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
              </a>

              <a href="#step-3-celebrate" className="block no-underline">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
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
              </a>

              <a href="#step-3-celebrate" className="block no-underline">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
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
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 id="step-0-preparation">Preparation (Before the Workshop)</h2>

      <p>
        Proper preparation is key to running a smooth Shakespeare workshop. Complete these tasks before participants arrive to ensure everything runs seamlessly.
      </p>

      <h3>Purchase and Set Up Gift Cards</h3>

      <p>
        Shakespeare makes it easy to provide free AI credits to workshop participants through gift cards. This ensures everyone can participate without needing their own API keys or payment setup.
      </p>

      <div className="not-prose my-8">
        <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="p-6">
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

              {/* Float image left next to steps 4-5 */}
              <div className="flex gap-4">
                <div className="flex-1 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-2 text-green-700 font-bold text-sm min-w-[2rem] text-center">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Add QR Code to Your Presentation</h4>
                      <p className="text-sm text-gray-700">
                        The faucet generates a QR code. Add this QR code to your presentation slides so participants can easily scan and redeem their free AI credits during the workshop.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full p-2 text-green-700 font-bold text-sm min-w-[2rem] text-center">5</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Print QR Code on Business Cards or Flyers (Optional)</h4>
                      <p className="text-sm text-gray-700">
                        For added convenience, consider printing the QR code on business cards or flyers that participants can take with them. This makes it easier for attendees to redeem credits on their own devices. You can use our <a href="https://www.canva.com/design/DAG5dCHcfxw/1k7eWYgMuqiYAvrXsWvFyA/edit?utm_content=DAG5dCHcfxw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">printable card template</a> to create professional-looking gift cards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block w-48 flex-shrink-0">
                  <div className="mt-8">
                    <img
                      src="/assets/blog/shakespeare-workshop-guide/shakespeare-qr-code-card-closeup.png"
                      alt="Shakespeare QR code gift cards for workshop distribution"
                      className="rounded-lg shadow-sm opacity-80 hover:opacity-100 transition-opacity"
                    />
                    <p className="text-xs text-gray-500 text-center mt-2 italic">
                      Example gift cards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3>Customize Your Presentation</h3>

      <p>
        Use our pre-made presentation template to introduce Shakespeare to your workshop participants. The template covers all the key points you'll need to present.
      </p>

      <div className="not-prose my-8">
        <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Presentation className="w-6 h-6 text-purple-600" />
              Presentation Template
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Download and customize the template with your workshop details and the faucet QR code.
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

      <h3>Identify Potential Helpers</h3>

      <p>
        If you know some participants in advance who have experience with AI coding or Shakespeare, reach out to them before the workshop and ask if they'd be willing to help others during the building session. Having pre-identified helpers can make the workshop run even more smoothly, though you can also enlist helpers at the start of the workshop itself by asking who has experience.
      </p>

      <h3>Preparation Checklist</h3>

      <ul>
        <li>✅ Gift cards purchased and uploaded to faucet</li>
        <li>✅ QR code added to presentation slides</li>
        <li>✅ Presentation template customized (optional)</li>
        <li>✅ Potential helpers identified (optional)</li>
        <li>✅ Workshop space confirmed with projector/screen</li>
      </ul>

      {/* <img
        src="/assets/blog/shakespeare-workshop-guide/alex-workshop-room.jpeg"
        alt="Workshop room setup with participants"
        className="rounded-lg shadow-md"
      /> */}

      <img
        src="/assets/blog/shakespeare-workshop-guide/derek-shakespeare-workshop.jpeg"
        alt="Derek Ross presenting at a Shakespeare workshop at Bitfest"
        className="rounded-lg shadow-md"
      />



      <h2 id="step-1-introduce">Step 1: Introduce Shakespeare</h2>

      <p>
        Start your workshop with a brief introduction to Shakespeare and what it can do. Use the presentation template to cover the key points.
      </p>

      <h3>Present Shakespeare Overview</h3>

      <ol>
        <li>What is Shakespeare? And basics of how it works</li>
        <li>Why Shakespeare is more freedom-respecting than alternatives like Lovable or Replit</li>
        <li>Choosing AI providers and models (recommend Claude Sonnet 4.5 for the best code output)</li>
        <li>How to push and deploy your code</li>
        <li>How to edit existing sites on Shakespeare</li>
        <li>Ideas of things you can build</li>
      </ol>

      <h3>Explain What Shakespeare Can Build</h3>

      <p>
        Help participants understand the scope of what they can create during the workshop by explaining Shakespeare's capabilities and limitations.
      </p>

      <div className="not-prose mb-4">
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

      <img
        src="/assets/blog/shakespeare-workshop-guide/chad-shakespeare-workshop.jpeg"
        alt="Shakespeare workshop participants building projects"
        className="rounded-lg shadow-md"
      />

      <h2 id="step-2-build">Step 2: Build Together</h2>

      <h3>Share the Gift Card QR Code</h3>

      <p>
        Display the QR code from your faucet page on the projector and have participants scan it with their phones to redeem their free AI credits. Make sure everyone successfully redeems a gift card before moving on to the building session.
      </p>

      <p>
        The core of the workshop is collaborative building. One facilitator builds an example project on the main screen while participants work on their own projects simultaneously.
      </p>

      <h3>Lead the Group in Building Projects Together</h3>

      <div className="not-prose my-6">
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
                <span><strong>Have Helpers Roam:</strong> Experienced users should walk around offering assistance</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p>
        For workshop project ideas and inspiration, <a href="https://shakespeare.diy/showcase" target="_blank" rel="noopener noreferrer">browse the Shakespeare showcase</a> to see what other builders have created.
      </p>

      <img
        src="/assets/blog/shakespeare-workshop-guide/derek-shakespeare-presentation.jpg"
        alt="Derek Ross demonstrating Shakespeare features"
        className="rounded-lg shadow-md"
      />

      <h2 id="step-3-celebrate">Step 3: Share and Celebrate</h2>

      <p>
        The final phase of the workshop is where the magic happens. Participants deploy their creations and share them with the community.
      </p>

      <h3>Deployment Process</h3>

      <p>
        Shakespeare makes deployment simple:
      </p>

      <ol>
        <li><strong>Click Deploy:</strong> Participants use the built-in deployment feature to publish their sites</li>
        <li><strong>Get Public URL:</strong> Each project receives a unique public URL instantly. Share it in a group chat, or outloud</li>
      </ol>

      <h3>Showcase Time</h3>

      <p>
        Reserve the last 15-20 minutes for participants to present their creations:
      </p>

      <ul>
        <li><strong>Screen Sharing:</strong> Pull up participant websites on the main display</li>
        <li><strong>Quick Demos:</strong> Each person gets 1-2 minutes to show what they built and explain their process</li>
        <li><strong>Celebrate Creativity:</strong> Highlight unique approaches and creative solutions</li>
        <li><strong>Collaborative Problem Solving:</strong> Showcase time is also an opportunity to share things that went wrong, and get advice from the group!</li>

      </ul>

      <img
        src="/assets/blog/shakespeare-workshop-guide/alex-sam-workshop.jpeg"
        alt="Alex and Sam at a Shakespeare workshop"
        className="rounded-lg shadow-md"
      />

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
