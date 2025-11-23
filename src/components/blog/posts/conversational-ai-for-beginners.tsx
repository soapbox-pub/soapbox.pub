import React from 'react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: { name?: string; picture?: string; };
  ogImage: { url?: string; };
  tags?: string[];
  featured?: boolean;
}

export const meta: BlogPostMeta = {
  "slug": "conversational-ai-for-beginners",
  "title": "How to Use Conversational AI Even if You're an Absolute Beginner",
  "excerpt": "Welcome to a future that belongs to everyone, not just those who can code. Learn how to build websites and apps using conversational AI with Shakespeare.",
  "coverImage": "/assets/blog/conversational-ai-beginners/cover.png",
  "date": "2025-10-07",
  "author": {
    "name": "Heather Larson",
    "picture": "/assets/avatars/heather.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/conversational-ai-beginners/cover.png"
  },
  "tags": ["ai", "shakespeare", "tutorial", "beginner", "no-code"]
};

export default function ConversationalAIForBeginners() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        Welcome to a future that belongs to everyone, not just those who can code.
      </p>

      <p>
        You don't need a GitHub to build a website; you don't even need to know what Git is! With our conversational AI builder, Shakespeare, you simply sign in with Nostr.
      </p>

      <ul>
        <li>No terms to accept.</li>
        <li>No hidden costs.</li>
        <li>No upsells.</li>
        <li>No subscriptions.</li>
        <li>Work for free or pay for AI credits through MKStack.</li>
        <li>Pay in USD or BTC.</li>
      </ul>

      <p>
        Making apps and websites isn't just for developers anymore. It's for everyone!
      </p>

      <h2>As an AI-Powered Website Builder Shakespeare Gives You:</h2>

      <ul>
        <li>Instant site deployment without asking for your information.</li>
        <li>Security for your site via the Nostr protocol.</li>
        <li>The ability to begin without having a GitHub, GitLab, or other developer account (or need to understand what Git even is). Other AI builders ask for this, we don't.</li>
        <li>No reason to worry about subscriptions or hidden costs. Our MKStack credits are straightforward.</li>
      </ul>

      <h2>What Shakespeare Doesn't Do:</h2>

      <ul>
        <li>Collect your data.</li>
        <li>Make you give your email to start an account.</li>
        <li>Wall you into one garden over all the rest when it comes to purchasing a URL once your site is ready.</li>
        <li>Upsell you on other tools you've never heard of that you don't need.</li>
        <li>Treat you like you only matter if you're a developer; using AI is for everyone, regardless of skill level.</li>
      </ul>

      <h2>What Do You Need to Know to Start Building Your Website Without Coding?</h2>

      <p>
        In two words: very little. However, a few hints may help!
      </p>

      <p>
        Many call this "vibe coding," but we just call it building with AI for the rest of us. Using Shakespeare is nothing more than entering a conversation prompt to ask it to build whatever you want. For example, you could ask it to, "Build me a website for my upcoming baby shower, so I can share my gift registry and have guests RSVP through it."
      </p>

      <p>
        While a simple prompt like this will work, you will likely soon find this may require more prompting effort on your part to get you the results you want. You'll continue to prompt it, which costs you AI credits unless you use the free Gemini Flash Playground in Shakespeare, which may not work as well. Think of Gemini Flash Playground as perfect for rough drafts and MKStack as good for a polished, final draft.
      </p>

      <h2>What Can I Ask Shakespeare to Do?</h2>

      <p>
        Shakespeare is great at helping you build a website, social feed, dashboard, game, or community. Our users have used it already to build a live streaming website, travel review website, games, content curators, e-commerce stores, or sites to help them with their work, like a decentralized Google Forms rival.
      </p>

      <h2>How To Prompt While Getting the Most From AI Credits</h2>

      <p>
        The goal is to get from idea to website in as few AI credits as possible. To do that, you can ask for help in another AI assistant, like ChatGPT, Claude, or Google Gemini. Try making the prompt better by asking your preferred chatbot, "Help me improve this prompt: 'Build me a website for my upcoming baby shower, so I can share my gift registry and have guests RSVP through it.'"
      </p>

      <p>
        You'll get a much more comprehensive prompt to make you think through your app before you start running up AI credits.
      </p>

      <p>
        <strong>Here's a more comprehensive prompt that covers key aspects for building a baby shower website:</strong>
      </p>

      <blockquote>
        <p>
          "Create a simple, mobile-friendly website for my upcoming baby shower that includes:
        </p>
        <ul>
          <li>A welcoming homepage with event date as October 1, time as 1:00 pm, location as Mary's house at 555 Easy Street, and a short personal message that says, "Please help us welcome our bundle of joy to the world!"</li>
          <li>A gift registry section with clickable links to my registry items on Target.com.</li>
          <li>An RSVP form for guests to confirm attendance and add plus-ones.</li>
          <li>A consistent, playful theme with soft pastel colors and baby-themed icons.</li>
          <li>Easy sharing via a single link."</li>
        </ul>
      </blockquote>

      <h2>What If I Encounter a Problem While Vibe Coding?</h2>

      <p>
        You may not know what to expect after giving Shakespeare your first prompt. First, it will get to work on coding your idea. It will even show you its work, most of which is code and none of which you need to understand. You can walk away and just let it cook.
      </p>

      <p>
        <strong>But what if it does something you don't like with your website? Or what if it creates the site but something about it just doesn't work?</strong>
      </p>

      <p>
        In both cases, just keep talking to Shakespeare as you did when you gave it the prompt. You still need no technical know-how in order to keep working on your site. Here are some examples of ways you can work with Shakespeare when you don't like a result or the app it produces doesn't work.
      </p>

      <ul>
        <li>"Can you make this in dark mode with yellow instead of blue?"</li>
        <li>"Take away the countdown clock, I don't need that after all."</li>
        <li>"Can you make it so that the buttons work? They're not working."</li>
        <li>"Can you add Nostr log-in to my site?"</li>
        <li>"Can you add a logo to the top left corner?"</li>
        <li>"It shouldn't say…take that part out."</li>
        <li>"The (feature) isn't working. Please fix."</li>
      </ul>

      <p>
        AI is still a malleable tool, so sometimes it can add something to your app that you didn't ask for and don't want. It could do this even if you prompt it carefully, thinking through every eventuality it may come up with. You can create the perfect prompt, only to forget something important and have to add it in a later prompt.
      </p>

      <h2>In The AI Race, We're a Little Different</h2>

      <p>
        We're not even racing.
      </p>

      <p>
        At Soapbox, we're not backed by VC funding or counting the days until we sell Shakespeare for tens of millions of dollars. Crazy, right? So without millions to motivate us, what gives?
      </p>

      <p>
        We began when our Founder & CEO, Alex Gleason, wanted to be able to cure the problem of speech being censored on the Internet. Why help someone who was de-platformed from X to create their own social media app when you can work to cure the problem of de-platforming in the first place? Because if it can happen to someone you don't like, it can happen to someone you do like. It can also happen to you.
      </p>

      <p>
        The Soapbox team began building on the Fediverse, but soon found even it had sources of failure, like moderators or folks who can just turn a server off at any time. We pivoted to an uncensorable, but lesser known protocol called Nostr and we've been building ever since.
      </p>

      <p>
        Nostr is limitless and so is Soapbox. We're funded by the non-profit <strong>And Other Stuff</strong>, so there will never be shareholders breathing down our necks. We're not trying to join the Silicon Valley rat race—we're trying to beat it.
      </p>

      <div className="not-prose my-8">
        <a
          href="https://shakespeare.diy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors"
        >
          Get Started with Shakespeare
        </a>
      </div>
    </article>
  );
}
