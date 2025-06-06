import React from 'react';
import { EmailSignupForm } from '../../EmailSignupForm';

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
  "slug": "chorus-vibe-coding",
  "title": "Chorus: An Experiment in Vibe Coding",
  "excerpt": "How to build a Nostr app at the speed of lightning with AI.",
  "coverImage": "/assets/blog/chorus/chorus.png",
  "date": "2025-06-04",
  "author": {
    "name": "M.K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/chorus/chorus.png"
  }
};

export default function ChorusVibeCoding() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>How to build a Nostr app at the speed of lightning with AI</h2>
      <strong>On May 26, Chorus was launched at the Oslo Freedom Forum.</strong> Designed for activists, dissidents, and community organizers, the app features Facebook-style groups with a built-in eCash wallet for fundraising.
      <a href="https://chorus.community/" target="_blank" rel="noopener noreferrer">Chorus</a> is built on Nostr, a decentralized and permissionless protocol designed to be censorship-resistant. Anyone in the world can make a Nostr account and post to Nostr relays, or even build their own Nostr app — and no one can stop them. This is what makes Nostr the perfect place for freedom fighters, who often face censorship from authoritarian governments or the corporations that control mainstream social platforms.
      <p>Users can create a account (or login with an existing Nostr account) in seconds and immediately start receiving eCash, creating groups, and sharing content. The app includes robust community moderation features, so groups can choose what types of content they permit on their own terms. Users can send eCash instantly to groups they wish to support, providing a cross-border fundraising tool that no government can shut down. </p>
      <p>Just one year ago, it would have probably taken the team behind Chorus weeks to build the version that launched last week. But thanks to today’s AI tools, <strong>we did it in five days.</strong></p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/B8fc1XJSB68?si=ex-GIuHx1Ov_R4TO"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
   />
      </div>
      <h2>How to do it: Build an app in days with AI agents</h2>
      <h3>Step 1: Assemble the team</h3>
      <p>Chorus was built by <a href="https://andotherstuff.org/" target="_blank" rel="noopener noreferrer">And Other Stuff</a>, a new collective team dedicated to advancing Nostr in five key pillars: UX and onboarding, communities, private communications, commerce, and AI. The team for this project included: </p>
      <ul>
      <li><a href="https://njump.me/nprofile1qydhwumn8ghj76r9de5x7atnv5h8xmmrd9skctmjv4kxz7gqypgdjn7zmpvqc6ptqud9gtutrcc6yq9s2z96h9dr80hss4wl9qwkxn3hcy3" target="_blank" rel="noopener noreferrer">Calle</a>, creator of Cashu (eCash) <li><a href="https://njump.me/nprofile1qydhwumn8ghj76r9de5x7atnv5h8xmmrd9skctmjv4kxz7gqyqtnnkfhmjxqcums4gn4skfccyv7yhzp7mzyrfwnf3kns5p7xymw7meghst" target="_blank" rel="noopener noreferrer">JeffG</a>, creator of White Noise (private communications)</li>
<li><a href="https://njump.me/nprofile1qydhwumn8ghj76r9de5x7atnv5h8xmmrd9skctmjv4kxz7gqypmvwx4w8fy378v7a3ruhgt7y2wd5sgn5zamde4wzamdwep79890509hum8" target="_blank" rel="noopener noreferrer">Rabble</a> and <a href="https://njump.me/nprofile1qy2hwumn8ghj7erfw36x7tnsw43z7un9d3shjqpqpmwz736ys3mfhjdld4r36xqwfc5qkz7dwxdkmfu3qqd7kucvludshtgvjp" target="_blank" rel="noopener noreferrer">Liz Swiegart</a> of Nos (UX and onboarding)</li>
<li><a href="https://njump.me/nprofile1qydhwumn8ghj76r9de5x7atnv5h8xmmrd9skctmjv4kxz7gqyqzxrl97e3xrxazrnyeddw83zf5uekmue9e667js4cmzmvf4536d6qvllke" target="_blank" rel="noopener noreferrer">Alex Gleason</a> and <a href="https://njump.me/nprofile1qy2hwumn8ghj7erfw36x7tnsw43z7un9d3shjqpqjvnpg4c6ljadf5t6ry0w9q0rnm4mksde87kglkrc993z46c39axsus667r" target="_blank" rel="noopener noreferrer">MK Fain</a>, creators of Soapbox (communities)  </li>- and <a href="https://njump.me/nprofile1qy2hwumn8ghj7erfw36x7tnsw43z7un9d3shjqpqsg6plzptd64u62a878hep2kev88swjh3tw00gjsfl8f237lmu63qmv59lq" target="_blank" rel="noopener noreferrer">Jack Dorsey</a> (advisor)</li>
      </ul><h3>Step 2: Start with a strong template</h3>
      <strong>When vibe coding, context is king.</strong> If you start with an empty directory and tell an AI agent to “build me a Nostr groups app” you’re still going to have a lot of work to do to get something even remotely functional to start playing with. Most likely, the Nostr implementation will be mocked, not connecting to real relays, or will be incorrectly implemented. The event kinds will be all wrong, the UI may or may not even load, and good luck trying to figure out the next step to fixing the mess.
      <figure>
        <img alt="a browser displaying only errors" src="/assets/blog/chorus/vibes-nostack.png"   />
        <figcaption>First prompt results without stacks</figcaption>
      </figure>
      <p>This is because the AI is missing some key context to start with: </p>
      <ul>
      <li>AI-friendly documentation about the Nostr protocol - High-quality examples of Nostr implementation  - Basics about the preferred tech stack - Context about how to build, run, and debug the project</li>
      </ul><p>The solution to this is to provide more context, and many vibe code veterans will be familiar with the struggle of attempting to get the agent to read links to various documentation and follow 500 words of meticulously-drafted context in their opening prompt. However, this usually confuses agents which typically work best with simple prompts. The solution to this problem is <a href="https://getstacks.dev/" target="_blank" rel="noopener noreferrer">Stacks</a>. </p>
      <strong>Stacks: Jumpstart your vibe coding</strong>
      <p>Stacks solves the lack of initial context by creating boilerplate templates designed specifically for AI agents to use. A “stack” can be used to build any type of project in any programming language with any end goal in mind. For Chorus, we used <a href="https://getstacks.dev/stack/naddr1qvzqqqrhl5pzqprpljlvcnpnw3pejvkkhrc3y6wvmd7vjuad0fg2ud3dky66gaxaqqrk66mnw3skx6c4g6ltw" target="_blank" rel="noopener noreferrer">MKStack</a>, a template specifically designed for building Nostr apps. </p>
      <strong>MKStack features multiple solutions to common AI problems:</strong>
      <ul>
      <li><a href="https://soapbox.pub/blog/nostrbook-mcp/" target="_blank" rel="noopener noreferrer">Nostrbook MCP</a> for querying the <a href="https://github.com/nostr-protocol/nips/tree/master" target="_blank" rel="noopener noreferrer">Nostr documentation</a> <li>Starter components for common Nostr features such as login</li>
<li>Blossom support for media uploads</li>
<li>Context files to guide the agent through common roadblocks and debugging workflows  </li>- Deploy your site immediately with Surge</li>
      </ul><p>The result is a beautiful site that works out of the box with Nostr in a single prompt:</p>
      <figure>
        <img alt="a browser displaying a beautiful communities client" src="/assets/blog/chorus/vibes-stacks.png"   />
        <figcaption>First prompt results with stacks</figcaption>
      </figure>
      <p>The stacks protocol itself is built on Nostr, and anyone can add or publish a new stack. <strong><a href="https://soapbox.pub/blog/stacks" target="_blank" rel="noopener noreferrer">Learn more</a></strong>. </p>
      <p>Chorus started with one prompt to MK Stack: “Build a Facebook-style groups app on Nostr using NIP 72.” This was the result of that one prompt: <a href="http://groups72.surge.sh" target="_blank" rel="noopener noreferrer">http://groups72.surge.sh</a></p>
      <h3>Step 3: Add features with AI Agents</h3>
      <p>Stacks jumpstarted the development of Chorus immensely, allowing us to skip all the boring bootstrapping and basic implementation that is usually involved in setting up a new project. This part was completed within minutes of deciding the general goal of the project. <strong>The next four days were spent on adding features, refining the UI, and debugging — this was primarily done through AI agents.</strong></p>
      <p>An AI agent is a system that perceives its environment, makes decisions, and takes actions to achieve specific goals autonomously. Agents use LLMs, and their outcomes are largely dependent on the model they are using. For building Chorus, we primarily used Goose, an open source agent built by Block, and Dork, the built-in agent that comes with Stacks and is optimized for working in the Stacks ecosystem. For the majority of the project we used Claude Sonnet 3.7 as the model behind the agent. However, Claude Sonnet 4 and Claude 4 Opus were announced on the last day of our work, and the team immediately switched and noticed a major improvement, especially between 3.7 and 4. </p>
      <p>Adding features with AI Agents in a project that started with MKStack is extremely easy. It’s best to break the prompt down into one feature or change at a time. For example, prompts to the agent may look like: </p>
      <code>“Make it so that when you click your profile picture in the navigation it takes you to your profile page. Show all your posts and the groups you are a part of”</code>
      <code>“Add the ability to emoji react to posts in groups”</code>
      <code>“Create a moderation UI for group admins to manage join requests and view content reports”</code>
      <p>Prompts like this usually create good starting features that then need small adjustments. (One major exception to this is when new Nostr event kinds needed to be created, more on this in the next section).</p>
      <strong>When vibe coding, the human’s role is not to write the code or to even care about the code. The role of the human is to be the visionary that imagines the end goal of the product, and prompts it into existence.</strong> The best vibe coders have a clear product plan in mind from the start, and know how to ask the agent to implement it step by step until it is complete.
      <h3>Step 4: Debugging</h3>
      <p>Whether vibe coding or writing your code the old-fashioned way (“discord coding,” as some call it), debugging is the hardest part of software development. Since you didn’t write the code, you have no idea what the code is doing, what file the function is in, or even what functionality may or may not be included. We were regularly surprised by choices the agents made that we had not instructed, including building entire new features at times. This makes debugging vibe code a different challenge from debugging code you have written and (in theory) understand. </p>
      <figure>
      <img alt="vibe coding vs vibe debugging meme" src="/assets/blog/chorus/vibememe.png"  />
      </figure>
      <p>These are the tactics I recommend for debugging vibe code: </p>
      <strong>1. Give the current agent two shots at fixing it</strong>
      <p>Vibe coding veterans will be familiar with the debugging loop of hell, when an agent insists it has solved the problem (for the seventh time) only for you to refresh and want to bang your head against the desk and scream “NO YOU DID NOT.” The solution to this is simply to refuse to get stuck in the loop. If your current agent does not fix the problem on the second attempt, kill it. Be brutal. No third chances. It’s not worth it. You may try once killing the current session of this agent and starting a new one, but don’t bother doing that a third time either. </p>
      <p><strong>2. Try switching agents or models</strong></p>
      <p>If your current agent has failed twice, it’s time to try a new agent or model. For example, if you were using Goose before, try using the Stacks Agent, Dork. Or, if you were on Claude Sonnet 4, try switching to Claude Opus 4 to solve a complicated problem (you can easily browse different models with <a href="https://openrouter.ai/models" target="_blank" rel="noopener noreferrer">Open Router</a>). Often, I was able to debug by simply copying the entire problematic file into ChatGPT and telling Chat to fix it. If these methods fail twice, move to step 3.  </p>
      <p><strong>3. Discord coding</strong></p>
      <p>Discord coding is the opposite of vibe coding — coding by hand, the old fashioned way, as a human. Sometimes a human just does the job faster, especially if that human is an experienced software engineer. </p>
      <p><strong>4. Delete and re-prompt</strong></p>
      <p>If steps 1 and 2 have failed and you are sick of #3 or are not a skilled enough discord coder to debug the issue on your own (no shade, because same), sometimes it’s better to just give up and start over. Vibe coding makes code disposable, and you should never feel shy about wiping it out and trying again (but be sure to commit first, just in case!). You can either manually delete the problematic files or functions, or even ask the agent to delete them for you. Sometimes, a blank slate is all we need to do better.</p>
      <p><strong>5. Combine tactics</strong></p>
      <p>In reality, debugging anything more than the simplest issues often involves a combination of these tactics. For example, you may try to have the agent solve the issue twice, then decide to look at the code yourself, realize what the problem is but not necessarily exactly how to solve it, and then tell the agent to delete the previous implementation and vibe code a solution to avoid that problem. </p>
      <h2>Limitations of vibe coding</h2>
      <strong>1. Technical knowledge is still recommended in order to make good prompts</strong>
      <p>While vibe coding is a super power, it’s not currently all powerful. In many cases, you still need to know a bit of technical background about what you build in order to get your desired results. For example, on Nostr it’s often helpful to guide the agent to use specific event kinds or NIPs to implement certain features. <a href="https://nostrbook.dev/kinds/" target="_blank" rel="noopener noreferrer">Nostrbook MCP</a> helps with this significantly, but understanding the underlying protocol is still important for making good decisions and providing oversight into what the agent is doing. The agent is also not good at creating new things. For example, the agent does not always make good decisions about creating new Nostr event kinds for new features. However, this problem can be easily solved in the future by expanding the available tools — something we’re working on with <a href="https://nostrhub.io/" target="_blank" rel="noopener noreferrer">NostrHub</a>, a tool which will help agents propose new event kinds and even NIPs that are protocol-compliant. </p>
      <p><strong>2. LLMs are bound by the problems humans have already solved</strong></p>
      <p> Likewise, the agent is unlikely to solve a problem that humans have been trying very hard to solve for a long time with limited success: like making private and encrypted groups on Nostr that are also truly decentralized. While adding private group functionality to Chorus was initially one of our goals, the progress on solving this difficult problem in the Nostr ecosystem is simply not far enough along for the AI to utilize. (But don’t worry, JeffG and the White Noise team are working very hard to solve this!) </p>
      <p><strong>3. Vibe code responsibly</strong></p>
      <p> For some features, vibe coding also simply does not feel responsible. For example, when dealing with money. While the UI of the eCash wallet was largely vibe coded in Chorus, Calle coded most of the actual Cashu implementation by hand to be sure that he knew and could trust that the user's money would be safe with us. However, Jack did also vibe code a working Cashu implementation with Goose — proving that it’s not impossible, just dangerous. </p>
      <p><strong>4. Eventually debugging may become too difficult without real dev experience</strong></p>
      <p>Finally, the larger the codebase grows the more likely it is that you will eventually need the help of an experienced software engineer to help you debug some problem (if you are not one yourself). This is likely to improve in time as context windows grow with new models and as agents and tools develop new debugging techniques. </p>
      <h2>Benefits of AI for Nostr</h2>
      <p>The benefits of the AI revolution for Nostr are hard to overstate. Nostr is the best-positioned protocol to build quickly with the rise of vibe coding, and soon we will have an infinite app ecosystem where Nostr apps can pop into existence as fast as we can imagine them. We’re nearly there already. </p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/QyBtU0cmIb0?si=B-vLcwgN86odOGtr"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
   />
      </div>
      <h3>Get notified of new releases!</h3>
      <EmailSignupForm tags={['Stacks']} />
      <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '40px' }}>
      <a href="https://soapbox.pub/tools/" className="inline-flex items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80">Explore Nostr Development Tools</a>
      </div>
      <hr /></article>
  );
}