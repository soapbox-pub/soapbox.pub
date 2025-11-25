import React from 'react';
import { Link } from 'react-router-dom';

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
  "slug": "our-stance-on-ai",
  "title": "(Really) Open AI",
  "excerpt": "AI is the future whether we like it or not. The question is whether it will be a tool of repression or liberation. We argue for liberation.",
  "coverImage": "/assets/blog/our-stance-on-ai/cover.png",
  "date": "2025-11-24",
  "author": {
    "name": "MK Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/our-stance-on-ai/cover.png"
  },
  "tags": ["ai", "open-source", "freedom", "shakespeare", "philosophy"],
  "featured": false
};

export default function OurStanceOnAI() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        <strong>AI is the future whether we like it or not. The question isn't whether AI exists—it's who controls it.</strong>
      </p>

      <p>
        We don't see AI as fundamentally different from other technological advancements—like the internet, or even the printing press. Technology is a tool, and AI, like these other advancements, can be used for both good and evil. AI is, at the end of the day, a set of data plus a computer program. This is not fundamentally different than how computers have always worked.
      </p>

      <p>
        At Soapbox, we're not against AI. We're against corporations and governments controlling the tools that will shape our future. That's why we need actually open AI.
      </p>

      <h2>When AI is Bad</h2>

      <ul>
        <li><strong>Corporations driven by profits and greed control the AI.</strong> When the primary motive is maximizing shareholder value, user freedom and societal benefit take a back seat.</li>
        <li><strong>Governments have control or ability to interfere with or censor the AI.</strong> State control over AI creates tools of surveillance and oppression rather than empowerment.</li>
        <li><strong>AI is used to harm and deceive people.</strong> It's not that the tool is inherently bad—just that it's being used in a bad way. The same technology that can educate can also manipulate.</li>
        <li><strong>It's closed source, closed weight.</strong> When AI models are proprietary black boxes, users have no way to inspect, understand, or modify them. You're dependent on whatever the company decides to do.</li>
      </ul>

      <p>
        These aren't hypothetical concerns. We've seen OpenAI shift from nonprofit promises to corporate control. We've watched governments pressure tech companies to implement censorship. We've witnessed AI systems used to amplify misinformation and manipulate public opinion for profit.
      </p>

      <h2>When AI is Good</h2>

      <ul>
        <li><strong>It improves human thriving.</strong> This means solving problems, removing barriers, taking away the boring and tedious parts of jobs, speeding up processes, and enhancing human creations. AI should serve people, not replace them.</li>
        <li><strong>It is not controlled by corporations with profits as their motive.</strong> When AI development is driven by community needs rather than quarterly earnings, it serves human interests instead of corporate ones.</li>
        <li><strong>It is <a href="https://opensource.org/ai" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 underline">open source</a>, with open parameters, and available to anyone.</strong> We understand that hosting AI may cost money—but the models themselves should be transparent, inspectable, and freely distributable.</li>
      </ul>

      <p>
        This is the AI we're building toward. Tools that empower rather than extract. Systems that respect freedom rather than exploit dependency.
      </p>

      <h2>AI and the Open Source Movement</h2>

      <p>
        We're already seeing how AI coding agents can empower everyone to build and improve <a href="https://opensource.org" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 underline">open source</a> software. This includes groups that have been historically marginalized and pushed out of technical positions.
      </p>

      <p>
        One of the most exciting aspects of AI development tools is how they lower barriers for people who have been excluded from technical work. You don't need a computer science degree. You don't need to memorize syntax. You don't need expensive bootcamps or mentorship connections.
      </p>

      <p>
        AI is <Link to="/blog/build-without-coding" className="text-azure hover:text-azure-600 underline">democratizing creation</Link>. The barriers between imagination and implementation are dissolving. You no longer need years of programming education to bring your ideas to life. You just need the idea.
      </p>

      <p>
        But this democratization only works if the AI tools themselves are open and accessible. If these tools are controlled by corporations that can change terms, raise prices, or shut down access, then we haven't actually democratized anything—we've just created a new dependency.
      </p>



      <h2>What Does Open AI Actually Mean?</h2>

      <p>
        The <a href="https://opensource.org" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 underline">Open Source Initiative</a> (OSI) has done excellent work defining what makes AI truly open. According to their <a href="https://opensource.org/ai/open-source-ai-definition" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 underline">Open Source AI Definition</a>, open source AI must provide the freedoms to use, study, modify, and share the system for any purpose.
      </p>

      <div className="not-prose my-8 flex justify-center">
        <a href="https://opensource.org" target="_blank" rel="noopener noreferrer">
          <img
            src="https://i0.wp.com/opensource.org/wp-content/uploads/2023/03/cropped-OSI-horizontal-large.png?fit=640%2C229&quality=80&ssl=1"
            alt="Open Source Initiative"
            className="h-16 hover:opacity-80 transition-opacity"
          />
        </a>
      </div>

      <p>
        When we say AI should be open, we mean:
      </p>

      <ul>
        <li><strong>Open source code:</strong> The code that builds and runs the AI should be transparent and modifiable, as defined by the <a href="https://www.gnu.org/philosophy/free-sw.en.html" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 underline">Free Software Definition</a>.</li>
        <li><strong>Open data:</strong> Sufficiently detailed information about the training data must be available to understand and recreate the system.</li>
        <li><strong>Open parameters:</strong> The model parameters (weights and other configuration) should be freely available, allowing anyone to run and modify the model.</li>
        <li><strong>Open access:</strong> While hosting costs money, the tools should be available to anyone without gatekeeping or arbitrary restrictions.</li>
      </ul>

      <p>
        This isn't idealism—it's pragmatism. History shows us that closed systems eventually serve the interests of those who control them, not those who depend on them. Open systems create resilience, enable innovation, and distribute power.
      </p>

      <p>
        We're grateful for the Open Source Initiative's leadership in establishing clear criteria for what makes AI truly open. Their work ensures we have a shared understanding and can hold AI providers accountable to meaningful standards.
      </p>



      <h2>Our Commitment</h2>

      <p>
        At Soapbox, we commit to:
      </p>

      <ul>
        <li><strong>Building open source tools.</strong> All <a href="https://gitlab.com/groups/soapbox-pub" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 underline">our projects</a> are <Link to="/blog/free-software-free-societies" className="text-azure hover:text-azure-600 underline">free software</Link> that respects the Four Essential Freedoms.</li>
        <li><strong>Supporting open AI models.</strong> We integrate with and promote truly open AI models and providers that meet the <a href="https://opensource.org/ai" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 underline">Open Source AI</a> criteria.</li>
        <li><strong>Decentralizing infrastructure.</strong> We build on Nostr and other decentralized protocols to prevent single points of control.</li>
        <li><strong>Prioritizing user freedom over profit.</strong> When faced with a choice between maximizing revenue or maximizing user freedom, we choose freedom.</li>
      </ul>

      <p>
        We're not perfect. We're a small team working with limited resources. But we're committed to these principles because we believe they matter.
      </p>



      <h2>The Future We Choose</h2>

      <p>
        AI has tremendous potential to improve human thriving, solve complex problems, and remove barriers that have held people back. But AI also has tremendous potential for evil—to concentrate power, enable surveillance, manipulate populations, and strip away human agency.
      </p>

      <p>
        We can choose what kind of AI future we build. We can choose open over closed. We can choose community over corporate. We can choose freedom over control.
      </p>

      <p>
        That's the choice we're making at Soapbox. We hope you'll join us.
      </p>

      <h2>Related Reading</h2>

      <ul>
        <li><Link to="/ethics-pledge" className="text-azure hover:text-azure-600 underline">Our Software Ethics Pledge</Link></li>
        <li><Link to="/blog/free-software-free-societies">Free Software: Free Societies</Link></li>
        <li><Link to="/blog/build-without-coding">Build Anything Without Coding: AI's Revolution is For Everyone</Link></li>
        <li><Link to="/blog/announcing-shakespeare-act-2">Shakespeare Act 2: Build Freely</Link></li>
        <li><Link to="/blog/shakespeare-origin-story">The Origin Story of Shakespeare</Link></li>
        <li><Link to="/tools/shakespeare">Learn More About Shakespeare</Link></li>
      </ul>
    </article>
  );
}
