import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';

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
  "slug": "how-to-prompt-better-projects",
  "title": "How to Prompt Better Projects",
  "excerpt": "Learn the prompting techniques to master AI-first development and transform your ideas into production-ready applications with Shakespeare.",
  "coverImage": "/assets/blog/prompt-better-projects/prompt-better-projects.png",
  "date": "2025-09-14",
  "author": {
    "name": "Derek Ross",
    "picture": "/assets/avatars/derek.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/prompt-better-projects/prompt-better-projects.png"
  },
  "featured": false,
  "tags": ["shakespeare", "shakespeare-resource", "actii", "prompting"]
};

export default function HowToPromptBetterProjectsWithShakespeare() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Navigation height (64px) + extra padding (16px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            🎭 Shakespeare
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            🤖 AI Prompting
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            📚 Tutorial
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            💡 Best Practices
          </Badge>
        </div>
      </div>

      <p className="text-xl leading-relaxed text-muted-foreground mb-8">
        We're entering uncharted territory. For the first time in history, anyone can build sophisticated applications without years of technical training. But this AI-first world demands something unexpected: you now need to have a basic understanding of the full development lifecycle that was once divided among several specialists.
      </p>

      <div className="not-prose my-8">
        <Card className="border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">📋 Table of Contents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('section-1')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  1. Write the Script Before You Speak
                </button>
                <button
                  onClick={() => scrollToSection('section-3')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  2. Define the Design Direction and Tone
                </button>
                <button
                  onClick={() => scrollToSection('section-5')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  3. Use Real Copy, Not Placeholder
                </button>
                <button
                  onClick={() => scrollToSection('section-7')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  4. Bring Visuals Onto the Stage
                </button>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('section-8')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  5. Leverage Shakespeare's Nostr Knowledge
                </button>
                <button
                  onClick={() => scrollToSection('section-9')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  6. Edit with Precision, Not Complete Rewrites
                </button>
                <button
                  onClick={() => scrollToSection('section-10')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  7. Design as if It's Already Live
                </button>
                <button
                  onClick={() => scrollToSection('section-11')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  8. Advanced: Meta Prompting
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3>Before your Prompt: Chose the Right AI Model</h3>

      <p>
        Shakespeare gives you the freedom to choose your AI model (LLM) that you will use to build your application, but what you pay for is what you get! If you choose a cheap model, you can expect cheap results, no matter how good your prompt. <strong>We highly recommend using advanced models the best results.</strong> 
      </p>

      <hr className="my-12" />

      <h2 id="section-1">1. Prompt with a Purpose</h2>

      <p>
        Before you type into Shakespeare, take a pause. <strong>Great builds start with clarity and direction.</strong> Skipping this step is like walking onto stage without knowing your lines; confusion follows.
        Think of this as your <strong>project pitch in one paragraph.</strong> You don't need a technical spec sheet; just a quick outline that tells Shakespeare what you want and why it matters.
      </p>

      <p>Ask yourself:</p>

      <ul>
        <li><strong>What is this project or feature?</strong> (A landing page, a newsletter site, a portfolio?)</li>
        <li><strong>Who is it for?</strong> (Students, customers, fans, community members?)</li>
        <li><strong>Why will they use it?</strong> (What problem does it solve or what goal does it help them achieve?)</li>
        <li><strong>What's the single action the user should take?</strong> (Sign up, join, donate, download?)</li>
      </ul>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Prompt Example:</h4>
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
              "Build a site for a hiking club at Penn State University. The main thing users do sign up to join the club. The site should also provide resources about local hikes, club information, and upcoming events."
            </p>
            <div className="mt-4">
              <p className="font-semibold mb-2">This works because it:</p>
              <ul className="text-sm space-y-1">
                <li>• Identifies the audience (Penn State Hiking club members and prospects)</li>
                <li>• Highlights the main action (Join the Club)</li>
                <li>• Includes other information that should be on the site (events, resources, about)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
          <CardContent className="p-6">
        <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center">
          💡 Pro Tip
        </h4>
        <p className="text-green-700 dark:text-green-300 text-sm">
          Want help refining your prompt? You can ask Shakespeare to talk to you about your idea before you start building! (also called <a href="#section-11" className="underline">meta prompting</a>)
        </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2 id="section-3">2. Define the Design Direction and Tone</h2>

      <p>
        Shakespeare includes a default design library. If you do not customize your design, it will look generic like all other AI sites. The earlier you define your style language and emotional tone, the more consistent your site will feel. Design isn't just what's on the page—it's how it feels.
      </p>

      <p>Here are some apects of design to consider:</p>

      <ul>
        <li><strong>Specific requirements</strong> (Ex. brand colors and fonts)</li>
        <li><strong>Mood words</strong> (Ex. light, dark, sleek, modern, futeristic, retro, nostalgic, academic, colorful, fun, professional, etc.)</li>
        <li><strong>Devices</strong> (Ex. mobile-first, optimized for desktop, etc.)</li>
      </ul>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Prompt Example:</h4>
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
              "Use a bold, futuristic style that feels cinematic and premium. Dark background, neon purple accents, large typography, and strong grid layouts. Font should be 'Inter.' The overall vibe should feel innovative and exciting. It should be optimized for mobile use."
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2 id="section-5">3. Use Real Copy, Not Placeholder</h2>

      <p>
        "Lorem ipsum" is design trash. It fills space but starves your build of meaning and interpretation.  Shakespeare isn't just styling boxes. Shakespeare is shaping communication. The words you feed it change the layout, tone, and even the energy of the design.
      </p>

      <p>That means:</p>

      <ul>
        <li><strong>Draft beats placeholder.</strong> Even if it's rough, use your actual message.</li>
        <li><strong>Words define structure.</strong> Real copy affects font size, spacing, and flow.</li>
        <li><strong>Context matters.</strong> Shakespeare can make smarter design choices if it knows what you're saying.</li>
      </ul>

      <p>
        If you skip this step, you'll end up fixing spacing and tone later. Use real copy upfront, and your sections will click together with less rework.
      </p>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Real Copy Example:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Banner section with headline: 'Own Your Identity.' Subtitle: 'Build your online presence on Nostr with Shakespeare.' Button: 'Start Building Free.' Use centered layout with large typography and strong vertical spacing."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <p>
        <strong>Beyond copy: Avoid placeholder data entirely.</strong> AI tools often default to fake data, sample users, or mock implementations when you don't specify the data source. Shakespeare will use Nostr events by default, but some other types of data may require additional sources or APIs.
      </p>

      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center">
              💡 Pro Tip
            </h4>
            <p className="text-green-700 dark:text-green-300 text-sm">
              Specify: <strong>"This should be a fully production-ready site with NO placeholder data. Pull live data from Nostr events (or another API)."</strong>
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2 id="section-7">4. Bring Media Onto the Stage</h2>

      <p>
        Visual content transforms good designs into memorable experiences. Shakespeare handles text and layout brilliantly, but images, videos, and interactive media bring your vision to life. Think of visuals as your supporting actors. They should enhance the story.
      </p>

      <p><strong>Strategic Visual Placement:</strong></p>

      <ul>
        <li><strong>Hero sections:</strong> Use compelling imagery that reinforces your value proposition</li>
        <li><strong>Feature demonstrations:</strong> Show, don't just tell—embed product screenshots or demo videos</li>
        <li><strong>Social proof:</strong> Include customer logos, team photos, or user-generated content</li>
        <li><strong>Background elements:</strong> Subtle textures, gradients, or patterns that support the mood</li>
      </ul>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Product Demo Integration:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Embed this product demo video (link:...) in a full-width container below the hero section. Video should autoplay muted with custom controls, rounded corners, and a subtle drop shadow. Add a centered 'Watch Full Demo' text link below the video."
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Image Gallery:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Create a photo gallery grid showing 6 customer success images. Use 3 columns on desktop, 2 on tablet, 1 on mobile. Each image should have a hover overlay with customer name and company. Include lightbox functionality for full-size viewing."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center">
              💡 Pro Tip
            </h4>
            <p className="text-green-700 dark:text-green-300 text-sm">
             While Shakespeare can suggest image styles and placements, it can't (yet!) create custom images. Use tools like Midjourney, DALL·E, or stock photo sites to source high-quality visuals that match your design vision.
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2 id="section-8">5. Leverage Shakespeare's Nostr Knowledge</h2>

      <p>
        Shakespeare isn't just a web development tool—it's built specifically for the Nostr ecosystem. It comes pre-loaded with deep knowledge of the Nostr protocol, NIPs (Nostr Implementation Possibilities), and decentralized social features. This means you can build sophisticated Nostr applications without having to explain the basics.
      </p>

      <p><strong>What Shakespeare knows out of the box:</strong></p>

      <ul>
        <li>Core Nostr concepts (events, keys, relays, signatures)</li>
        <li>Standard event kinds (notes, profiles, reactions, reposts)</li>
        <li>Popular NIPs and their implementations</li>
        <li>Common Nostr client patterns and UI conventions</li>
        <li>Integration with Nostr libraries and tools</li>
      </ul>

      <p><strong>When to be specific with Nostr features:</strong></p>

      <ul>
        <li><strong>Alternative implementations:</strong> When multiple approaches exist (like NIP-04 vs NIP-17 for DMs)</li>
        <li><strong>Relay interactions:</strong> Be clear about read/write patterns and relay selection</li>
      </ul>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Zaps Integration:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Add Lightning zaps with nutzaps support. Include zap goals, split payments, and integration with WebLN for seamless payments."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center">
              💡 Pro Tip
            </h4>
            <p className="text-green-700 dark:text-green-300 text-sm">
              When in doubt, check the latest NIPs at <a href="https://nostrhub.io/" className="underline font-medium">https://nostrhub.io/</a> or reference specific implementation examples from popular Nostr clients. Shakespeare can work with both established and experimental NIPs. You can also ask Shakespeare if any existing kinds/NIPs happen to cover your proposed use case. (e.x., "I want to create a site that hosts Magic: The Gathering decks, does it already exist in nostr?")
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2 id="section-9">6. Edit with Precision</h2>

      <p>
        When you know exactly what you want to change, be precise in your request. However, micromanaging Shakespeare often results in confused outputs. Instead of asking for a complete redesign, focus on small, targeted edits that refine the existing design.
      </p>

      <ul>
        <li><strong>Name the element you want to change:</strong> Don't say "Fix the form"—say "Fix the signup form submit button"</li>
        <li><strong>Name what is right, and what is wrong:</strong> Ex. "The background color of the signup form submit buttom is correct, however the text hover color should be blue instead of white."</li>
        <li><strong>Preserve what works:</strong> Ex. "Change only the headline font to 'Roboto' while keeping all other typography unchanged"</li>
      </ul>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Micro-adjustment:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Change the button text from 'Free Trial' to 'Get Started' and increase horizontal padding. Keep all other button styling the same."
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Color refinement:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Update the accent color throughout the design from purple (#8B5CF6) to a warmer purple (#A855F7). Apply this to all buttons, links, and highlight elements."
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Layout tweak:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Move the testimonials section above the pricing section. Maintain all existing styling and content. Just reorder the sections."
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Responsive fix:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "On mobile devices only, stack the feature cards vertically instead of in a grid. Keep desktop layout unchanged."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <hr className="my-12" />

      <h2 id="section-10">7. Advanced: Turn a Demo Into a Polished Product</h2>

      <p>
        The gap between prototype and production kills most projects. Don't build a pretty demo. Build a functional foundation that's ready for real users, real data, and real business logic.
      </p>

      <p>
        <strong>Think Beyond the Happy Path:</strong> Your initial designs probably show perfect scenarios: testimonials with glowing reviews, feature lists with compelling copy, signup forms that never error. But production applications need to handle edge cases, empty states, error conditions, and dynamic content.
      </p>

      <p><strong>Authentication States:</strong></p>

      <ul>
        <li>What does the navigation look like for logged-in vs. anonymous users?</li>
        <li>Where do users go after signing up or logging in?</li>
      </ul>

      <p><strong>Dynamic Content:</strong></p>

      <ul>
        <li>How will the design adapt when product descriptions are longer or shorter than expected?</li>
        <li>What happens when a user has no data to display (empty states)?</li>
        <li>How will user-generated content fit within your design system?</li>
      </ul>

      <p><strong>Error and Loading States:</strong></p>

      <ul>
        <li>What does a form look like when submission fails?</li>
        <li>How do you indicate when data is loading?</li>
        <li>What happens when an image fails to load or a video won't play?</li>
      </ul>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Dynamic Content Planning:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Design a blog post card that handles variable content lengths. Title should truncate after 2 lines, excerpt after 3 lines, and include a 'Read More' link. Show how it looks with both short and long titles."
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Empty State Design:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Create an empty state for the user's project dashboard. Include an illustration, headline 'No Projects Yet,' description 'Create your first project to get started,' and a prominent 'New Project' button."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <hr className="my-12" />

      <h2 id="section-11">8. Advanced: Meta Prompting</h2>

      <p>
        Meta prompting is the art of using Shakespeare to help you craft better prompts. Instead of diving straight into building, you can ask Shakespeare to help you think through your project, refine your requirements, or even generate prompts for future work. This is especially powerful when you're stuck, need to clarify your vision, or want to improve your prompting skills.
      </p>

      <p><strong>Meta Prompting:</strong> Getting help to plan and design before you build.</p>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Project Planning Assistant:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "I want to build a community platform for local book clubs. Can you help me think through what features would be most important and write it out as a detailed prompt I can use to start building?"
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Feature Prioritization:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "I've built a basic newsletter signup site. Based on what's working well, write a list of the next three features we should implement in order of priority."
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Design Direction Helper:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Create a detailed design brief for a meditation app landing page that would appeal to busy professionals. Include color palette, typography choices, layout structure, and tone—write it as a prompt I can use."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <p><strong>Reverse Meta Prompting:</strong> Learning from what went wrong to improve future builds.</p>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Post-Mortem Analysis:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Summarize the issues we had creating this feature and what he solutions were and create a detailed prompt I can use next time to avoid these problems."
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Site theme descriptions:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "I love the final look of this site. Create a prompt for me that descripts the desgin, color palette, typography, and overall tone so I can use it as a starting point for future projects."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <p>
        Meta prompting transforms Shakespeare from a tool that executes your ideas into a collaborative partner that helps you think through problems and improve your approach. The more you use it to plan, reflect, and refine, the better your actual builds become.
      </p>

      <hr className="my-12" />

      <p>
        <strong>You've now got the playbook for building with Shakespeare.</strong> From sketching your idea to shaping the flow and dialing in the design, you know how to get clear, sharp results. Don't overthink it. Pick one project and start. Keep prompts simple, keep direction clear, and let Shakespeare do the heavy lifting. This isn't about perfection, it's about progress. The more you build, the more comfortable you'll become, and the better you'll get. Now go and build something truly remarkable. Happy prompting!
      </p>

      <Card className="border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Need Help Debugging?
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              When things don't work as expected, learn advanced troubleshooting techniques for Shakespeare.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-orange-300 text-orange-700 hover:bg-orange-100 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-900"
            >
              <a href="/blog/debugging-in-shakespeare">
                Learn Debugging Techniques →
              </a>
            </Button>
          </CardContent>
        </Card>

      <div className="not-prose my-12 space-y-8">
        <Card className="border-dashed border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Master Shakespeare?
            </h3>
            <p className="text-muted-foreground mb-6">
              Apply these prompting techniques and start building better projects with AI-powered assistance.
            </p>
            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3"
              >
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  🚀 Start Building with Shakespeare
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Transform your ideas into production-ready applications
              </p>
            </div>
          </CardContent>
        </Card>


      </div>

      <hr className="my-12" />

      <p className="text-sm text-muted-foreground text-center">
        <em>
          Shakespeare is developed by the team behind Soapbox, Ditto, and Nostrify.
          Follow our journey on Nostr and stay updated with the latest developments in decentralized web technology.
        </em>
      </p>
    </article>
  );
}