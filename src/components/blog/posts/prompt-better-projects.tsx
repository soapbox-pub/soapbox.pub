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
  "excerpt": "We're entering uncharted territory. Learn the prompting techniques to master AI-first development and transform your ideas into production-ready applications with Shakespeare.",
  "coverImage": "/assets/blog/announcing-shakespeare/shakespeare-blog-cover.png",
  "date": "2025-09-14",
  "author": {
    "name": "Derek Ross",
    "picture": "/assets/avatars/derek.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-shakespeare/shakespeare-blog-cover.png"
  },
  "featured": true,
  "tags": ["shakespeare", "ai", "tutorial", "prompting"]
};

export default function HowToPromptBetterProjectsWithShakespeare() {
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
        <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              🎭 Ready to Master Shakespeare?
            </h3>
            <p className="text-muted-foreground mb-4">
              Start building better projects with AI-powered assistance today.
            </p>
            <Button
              asChild
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                Try Shakespeare Now →
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <p>
        Previously, technical specifications were written by engineers, business processes designed by analysts, and user experiences crafted by UI/UX professionals. Today, AI-first development molds all of these roles into one—however, it also requires you to think like all of these experts have in the past. To build truly exceptional applications, you need to understand how technical requirements, business logic, and user needs are all intertwined.
      </p>

      <p>
        This is a shift that most people aren't prepared for. You're no longer just sharing an idea and hoping someone else figures out the details. You're the architect of the entire experience.
      </p>

      <p>
        This guide teaches you the prompting techniques to master this new reality. Simply put, you'll need to think differently than you have before. You'll learn how to think systematically about each piece of the development puzzle, communicate more effectively with AI tools like Shakespeare, and transform your ideas into production-ready applications.
      </p>

      <p>
        While this may sound daunting, it's simpler than it appears. Once you get the knack for it, it's really just about asking the right questions and having the right kind of conversation at the right time.
      </p>

      <hr className="my-12" />

      <h2>1. Write the Script Before You Speak</h2>

      <p>
        Before you type into Shakespeare, take a pause. Great builds start with clarity and direction. Skipping this step is like walking onto stage without knowing your lines; confusion follows.
      </p>

      <p>
        Think of this as your project pitch in one paragraph. You don't need a technical spec sheet; just a quick outline that tells Shakespeare what you want and why it matters. Write it out on paper, in your notes app, or directly into Shakespeare's prompt box.
      </p>

      <p>Ask yourself:</p>

      <ul>
        <li>What is this project or feature? (A landing page, a newsletter site, a portfolio?)</li>
        <li>Who is it for? (Students, customers, fans, community members?)</li>
        <li>Why will they use it? (What problem does it solve or what goal does it help them achieve?)</li>
        <li>What's the single action the user should take? (Sign up, join, donate, download?)</li>
      </ul>

      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center">
              💡 Pro Tip
            </h4>
            <p className="text-green-700 dark:text-green-300 text-sm">
              Don't overthink. Clear ideas lead to sharper prompts. Vague inputs = vague results.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Prompt Example:</h4>
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
              "Build a one-page site for a hiking club at Penn State University. The main CTA should be 'Join the Club.' Use bold text, strong school colors, and a welcoming, energetic vibe."
            </p>
            <div className="mt-4">
              <p className="font-semibold mb-2">This works because it:</p>
              <ul className="text-sm space-y-1">
                <li>• Defines the type of site (a one-page site)</li>
                <li>• Identifies the audience (Penn State Hiking club members)</li>
                <li>• Highlights the main action (Join the Club)</li>
                <li>• Sets the tone and style (bold, energetic, school colors)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        Shakespeare doesn't need a novel, just direction. The clearer your script, the stronger the performance.
      </p>

      <hr className="my-12" />

      <h2>2. Plot the User's Experience</h2>

      <p>
        Shakespeare doesn't just spit out pages. It shapes user experiences. An application that works isn't random sections stacked together. It's a story with momentum.
      </p>

      <p>Before you prompt, sketch the flow of your visitor's experience:</p>

      <ul>
        <li>What do they see first? (The hero headline, image, or animation that sets the tone.)</li>
        <li>What builds trust? (Proof points, testimonials, stats, recognizable logos.)</li>
        <li>What helps them take action? (Clear CTAs, forms, buttons, or purchase flows.)</li>
        <li>What happens after they click? (Thank-you pages, sign-up confirmations, or redirects.)</li>
      </ul>

      <p>Even a simple outline like this makes a huge difference: <strong>Hero → Value → Proof → CTA</strong></p>

      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center">
              💡 Pro Tip
            </h4>
            <p className="text-green-700 dark:text-green-300 text-sm">
              Write the experience down in bullet points and paste it into your prompt. Shakespeare will follow the sequence you set.
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2>3. Define the Design Direction</h2>

      <p>
        Design decisions made late = messy results. With Shakespeare, the earlier you define your style language, the more consistent your site will feel.
      </p>

      <p>Start by answering:</p>

      <ul>
        <li><strong>Calm and minimal?</strong> (Whitespace, soft tones, small typography.)</li>
        <li><strong>Bold and expressive?</strong> (Strong colors, oversized text, animated elements.)</li>
        <li><strong>Sleek and premium?</strong> (Dark backgrounds, luxury tones, refined spacing.)</li>
      </ul>

      <p>
        Once you know the vibe, feed it directly into your first prompt. That way, every section flows in the same voice; your voice. Don't let AI have all of the creative fun.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Prompt Example:</h4>
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
              "Use a bold, futuristic style. Dark background, neon purple accents, large typography, and strong grid layouts. Font should be 'Inter.' The overall vibe should feel innovative and exciting."
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        Shakespeare thrives on direction. The clearer your vision, the less you'll need to "fix it later."
      </p>

      <hr className="my-12" />

      <h2>4. Prompt by Component, Not Full Page</h2>

      <p>
        A full-page prompt = noise. A section-based prompt = clarity.
      </p>

      <p>
        When you dump "Make me a landing page" into Shakespeare, it has to guess your priorities. You'll get something, but not something you can fine-tune.
      </p>

      <p>Instead, treat your site like building blocks:</p>

      <ul>
        <li>Hero</li>
        <li>Navigation</li>
        <li>Features</li>
        <li>Testimonials</li>
        <li>Pricing</li>
        <li>Footer</li>
      </ul>

      <p>Prompt, refine, and approve one block at a time. Then connect them.</p>

      <p>This modular approach:</p>

      <ul>
        <li>Gives you control over every piece</li>
        <li>Keeps your designs consistent</li>
        <li>Makes it easy to swap or reuse components across projects</li>
      </ul>


      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center">
              💡 Pro Tip
            </h4>
            <p className="text-green-700 dark:text-green-300 text-sm">
              Name and save your best sections. Your future self will thank you.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Prompt Example:</h4>
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
              "Create a navigation bar with glassmorphism style. Include logo on the left, links for Home, About, Events, and Contact in the center, and a purple 'Join Now' button on the right."
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2>5. Use Real Copy, Not Placeholder</h2>

      <p>
        "Lorem ipsum" is design trash. It fills space but starves your build of meaning and interpretation.
      </p>

      <p>
        Shakespeare isn't just styling boxes. Shakespeare is shaping communication. The words you feed it change the layout, tone, and even the energy of the design.
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

      <p>Think of it this way: your copy is part of the design system.</p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Prompt Example:</h4>
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
              "Hero section with headline: 'Own Your Identity.' Subtext: 'Build your online presence on Nostr with Shakespeare.' CTA: 'Start Building Free.' Use centered layout with large typography and strong vertical spacing."
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2>6. Speak Clearly and with Direction: Buttons, Cards, Modals</h2>

      <p>
        Shakespeare builds your application using small components. These individual pieces like buttons, cards, modals, and grids combine to create your complete project. The more specific you are about each component, the more cohesive your final application becomes.
      </p>

      <p>
        Use component vocabulary that Shakespeare understands: button, grid, card, modal, page, form, navigation, hero, footer, etc. These design terms are instructions that help Shakespeare structure your application intelligently.
      </p>

      <p>
        Think of it like directing a play. If you simply say "make a signup form," you'll get something generic and forgettable. But when you specify exactly how each piece should look, feel, and behave, Shakespeare can craft components that work together seamlessly and can be reused throughout your project.
      </p>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800">
            <CardContent className="p-4">
              <p className="text-sm"><strong>Bad prompt (too vague):</strong> "Add a signup form."</p>
            </CardContent>
          </Card>
          <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
            <CardContent className="p-4">
              <p className="text-sm"><strong>Good prompt (specific, directional):</strong> "Signup form with email input, placeholder text 'Enter your email,' and a bold purple rounded CTA button that says 'Join Now.' Centered on the page with plenty of white space."</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <p>That extra detail doesn't just improve the single output. It sets a pattern Shakespeare can follow across the whole project.</p>

      <p><strong>Why this works:</strong></p>

      <ul>
        <li><strong>Consistency.</strong> Your buttons, cards, and modals look like they belong together.</li>
        <li><strong>Reusability.</strong> Components can be remixed in other pages or projects.</li>
        <li><strong>Clarity.</strong> You reduce revisions and wasted credits because you got what you wanted the first time.</li>
      </ul>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Profile Card Example:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Card with circular profile image on the left, name and username stacked, small verified check badge, and a purple 'Follow' button on the right. Use subtle shadow and rounded corners."
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Modal Example:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Centered modal with dark overlay, title at the top in bold text, description below in smaller font, and two buttons: one purple primary 'Confirm' button and one gray 'Cancel' button."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <hr className="my-12" />

      <h2>7. Use Mood Words to Shape Tone</h2>

      <p>
        Design isn't just what's on the page, it's how it feels. Shakespeare responds strongly to mood words, which act like emotional shorthand for your design. Words like minimal, cinematic, playful, premium, futuristic, developer focused aren't fluff. They're direction.
      </p>

      <p>They help Shakespeare:</p>

      <ul>
        <li>Choose colors (calm vs. bold)</li>
        <li>Decide spacing (tight vs. airy)</li>
        <li>Adjust typography (playful vs. corporate)</li>
        <li>Influence animation (subtle vs. energetic)</li>
      </ul>

      <p>
        By setting the tone early, you keep your design consistent instead of mixing mismatched styles. You can also shift moods strategically between sections to control how your users feel as they scroll.
      </p>

      <div className="not-prose my-8">
        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">Example Flow:</h4>
            <div className="space-y-2 text-sm">
              <div><strong>Hero:</strong> Bold, cinematic → grabs attention</div>
              <div><strong>Features:</strong> Futuristic, innovative → builds intrigue</div>
              <div><strong>Pricing:</strong> Calm, minimal → reduces friction</div>
              <div><strong>CTA:</strong> Energetic, premium → drives action</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>Your mood words are like stage directions. They tell Shakespeare not just what to build, but how the audience should experience it.</p>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Hero (Bold, Cinematic):</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Design a landing hero that feels cinematic and premium. Use dramatic contrast, translucent layers, smooth motion blur, and large headline text."
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Pricing (Minimal, Calm):</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Create a pricing section that feels calm and minimal. White background, lots of breathing room, subtle dividers, and simple typography."
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Features (Playful, Developer Focused):</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Build a features grid that feels playful but developer focused. Use icons with soft gradients, short technical descriptions, and code-style typography."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <hr className="my-12" />

      <h2>8. Use Layout Patterns Like Stage Directions</h2>

      <p>
        When you're working with Shakespeare, think of yourself as a director giving stage cues. The clearer your stage directions, the smoother the performance. Layout patterns are those directions—they tell Shakespeare what goes where and how it should behave.
      </p>

      <p>Instead of vague instructions like "make a features section," break it into repeatable structures:</p>

      <ul>
        <li><strong>Hero:</strong> Headline → Subtext → Call-to-Action</li>
        <li><strong>Features:</strong> Section Title → 3 Cards → Icons + Descriptions</li>
        <li><strong>Testimonials:</strong> Header → Slider → Profile Image + Quote + Name</li>
        <li><strong>Pricing:</strong> Header → Plans (3 columns) → CTA buttons</li>
      </ul>

      <p>
        By giving your prompt a clear recipe (structure + order + behavior), you eliminate ambiguity and make Shakespeare's output more predictable. Over time, you can even create a personal prompt library—your own "repertoire" of reusable stage directions.
      </p>

      <div className="not-prose my-8">
        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">Why it matters:</h4>
            <div className="space-y-2 text-sm">
              <div><strong>Reuse</strong> = faster builds across multiple projects</div>
              <div><strong>Consistency</strong> = a unified brand look and feel</div>
              <div><strong>Precision</strong> = less time fixing sloppy output</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>Think in patterns, not pages. A feature grid today might be a testimonial layout tomorrow. Direct Shakespeare like an actor—stage by stage.</p>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Features Grid:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Create a features section with centered headline, followed by three cards in a row. Each card has an icon, a title, and a short description. Cards should have soft shadows and lift on hover."
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Testimonials Slider:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Build a testimonials section with a large centered headline, followed by a horizontal slider of 4 testimonial cards. Each card should include a circular profile image, a quote, and a bold name/title. Include navigation arrows."
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-purple-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Pricing Table:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Design a pricing section with headline 'Choose Your Plan.' Show 3 pricing cards side by side: Basic, Pro, and Premium. Each card should include price, feature list, and a purple CTA button. Highlight the Pro plan with a glowing border."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <hr className="my-12" />

      <h2>9. Bring Visuals Onto the Stage</h2>

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
                "Embed this product demo video in a full-width container below the hero section. Video should autoplay muted with custom controls, rounded corners, and a subtle drop shadow. Add a centered 'Watch Full Demo' text link below the video."
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
              💡 Advanced Tip
            </h4>
            <p className="text-green-700 dark:text-green-300 text-sm">
              When Shakespeare supports image uploads (coming soon), you'll be able to reference specific assets directly in your prompts. Start collecting your visual assets now—product screenshots, team photos, brand elements—so you're ready to integrate them seamlessly.
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2>10. Edit with Precision, Not Complete Rewrites</h2>

      <p>
        The biggest mistake people make with AI tools is starting over when they just need to adjust one element. Think of edits like a director calling for minor adjustments between takes.
      </p>

      <p><strong>The Edit Hierarchy:</strong></p>

      <ol>
        <li><strong>Content changes</strong> (text, copy, messaging)</li>
        <li><strong>Style adjustments</strong> (colors, fonts, spacing)</li>
        <li><strong>Layout modifications</strong> (positioning, sizing, alignment)</li>
        <li><strong>Behavioral changes</strong> (interactions, animations, states)</li>
      </ol>

      <p><strong>Best Practices for Effective Edits:</strong></p>

      <ul>
        <li><strong>Be specific about what to change:</strong> Don't say "make it better"—say "increase the button padding to 16px vertically"</li>
        <li><strong>Reference existing elements:</strong> "Keep the same purple color but apply it to the border instead of the background"</li>
        <li><strong>Preserve what works:</strong> "Change only the headline font to 'Roboto' while keeping all other typography unchanged"</li>
      </ul>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Micro-adjustment:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Change the CTA button text from 'Free Trial' to 'Get Started' and increase horizontal padding to 32px. Keep all other button styling identical."
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

      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center">
              💡 Pro Tip
            </h4>
            <p className="text-green-700 dark:text-green-300 text-sm">
              Keep a running list of small edits instead of making them one by one. Batch 3-4 minor changes into a single prompt to maintain design cohesion and use your credits more efficiently.
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2>11. Design as if It's Already Live</h2>

      <p>
        The gap between prototype and production kills most projects. Don't build a pretty demo. Build a functional foundation that's ready for real users, real data, and real business logic.
      </p>

      <p>
        <strong>Think Beyond the Happy Path:</strong> Your initial designs probably show perfect scenarios: testimonials with glowing reviews, feature lists with compelling copy, signup forms that never error. But production applications need to handle edge cases, empty states, error conditions, and dynamic content.
      </p>

      <p><strong>Key Areas to Consider:</strong></p>

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

      <h2>12. Advanced Troubleshooting</h2>

      <p>
        When building complex applications, things don't always work as expected. Advanced users need debugging strategies that go beyond basic prompting. This section covers additional troubleshooting approaches that help Shakespeare understand and fix issues.
      </p>

      <p><strong>The Debug Hierarchy:</strong></p>

      <ol>
        <li><strong>Gather Evidence</strong> (Console logs, error messages, network requests)</li>
        <li><strong>Isolate the Problem</strong> (Specific component, function, or interaction)</li>
        <li><strong>Provide Context</strong> (Environment, data state, user actions)</li>
        <li><strong>Test Systematically</strong> (Incremental changes, rollback capability)</li>
      </ol>

      <p><strong>Opening Developer Tools (Desktop Only):</strong></p>

      <ul>
        <li><strong>Chrome/Edge:</strong> Press F12 or Ctrl+Shift+I (Windows/Linux) / Cmd+Option+I (Mac)</li>
        <li><strong>Firefox:</strong> Press F12 or Ctrl+Shift+I (Windows/Linux) / Cmd+Option+I (Mac)</li>
        <li><strong>Safari:</strong> Press Cmd+Option+I (Mac) - Enable Developer menu first in Preferences</li>
        <li><strong>Alternative:</strong> Right-click on page → "Inspect" or "Inspect Element"</li>
      </ul>

      <p>Once open, use the Console tab for error messages, Network tab for API requests, and Elements tab to inspect HTML/CSS issues.</p>

      <p><strong>Essential Debugging Information to Include:</strong></p>

      <ul>
        <li><strong>Console Output:</strong> Copy exact error messages, warnings, and stack traces</li>
        <li><strong>Browser DevTools:</strong> Network tab failures, React DevTools component state</li>
        <li><strong>User Journey:</strong> Step-by-step actions that trigger the issue</li>
        <li><strong>Environment Details:</strong> Browser version, screen size, data conditions</li>
        <li><strong>Expected vs. Actual:</strong> What should happen vs. what actually happens</li>
      </ul>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="border-l-4 border-red-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Console Error Debugging:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "The submit button isn't working. Console shows: 'TypeError: Cannot read properties of undefined (reading 'email')' at line 47 in ContactForm.jsx. This happens when I click submit after filling out the form. Expected: form should submit and show success message. Actual: nothing happens and error appears."
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-orange-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Network Request Debugging:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "API calls are failing intermittently. Network tab shows POST /api/users returning 422 with response: [error: 'validation failed', field: 'email']. This happens about 30% of the time with valid email addresses. Add error handling to retry failed requests and better user feedback."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <p><strong>Performance Debugging Techniques:</strong></p>

      <p>For complex applications with performance issues, provide specific metrics and profiling data:</p>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Performance Analysis:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Dashboard is slow to load. Chrome DevTools Performance tab shows 3.2s total load time. Main thread blocked for 1.8s during component mounting. React DevTools Profiler shows UserList component re-rendering 47 times on initial load. Optimize with React.memo and useMemo for expensive calculations."
              </p>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-green-500">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3">Memory Leak Detection:</h4>
              <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
                "Memory usage increases over time during navigation. Chrome DevTools Memory tab shows heap growing from 25MB to 180MB after 10 page changes. Event listeners not being cleaned up in useEffect. Add proper cleanup functions and dependency arrays to prevent memory leaks."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>


      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center">
              💡 Pro Debugging Tip
            </h4>
            <p className="text-green-700 dark:text-green-300 text-sm">
              Always include before/after code snippets when requesting fixes. This helps the AI understand your current implementation and provide more targeted solutions. Use console.log statements strategically to track data flow, then include the output in your debugging prompt.
            </p>
          </CardContent>
        </Card>
      </div>


      <hr className="my-12" />

      <p>
        You now have the director's toolkit for bringing ideas to life with Shakespeare. From scripting your vision to shaping the flow, defining the style, and building block by block, you know how to guide every step with clarity. Start small—one project, one scene—and apply these principles as you go. Each prompt is a cue, each component a performance. Remember: Shakespeare isn't just a tool, it's your creative partner. The more direction you give, the stronger the results. So take the stage, trust the process, and build something remarkable.
      </p>

      <div className="not-prose my-12">
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