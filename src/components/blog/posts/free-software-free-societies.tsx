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
}

export const meta: BlogPostMeta = {
  "slug": "free-software-free-societies",
  "title": "Free Software: Free Societies",
  "excerpt": "We cannot defend freedom without community control over technology. By Heather Larson & M.K. Fain",
  "coverImage": "/assets/blog/free-software/cover.png",
  "date": "2025-11-22",
  "author": {
    "name": "Heather Larson & MK Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/free-software/cover.png"
  },
  "tags": ["open-source", "freedom", "philosophy", "society", "ai"]
};

export default function FreeSoftwareFreeSocieties() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>The State of the Internet</h2>

      <p>
        The Internet has been reshaped for decades, and not in ways that benefit the people who rely on it. Public frustration with Big Tech™ continues to grow, especially around AI, where incentives, intentions, and governance remain opaque. Closed AI systems now influence what people see, how they communicate, how they work, and how they organize. A small number of corporations effectively control the direction of technological progress.
      </p>

      <p>
        OpenAI is the clearest example. It began with promises of openness, nonprofit governance, and a mission to serve humanity. Over time, those commitments were withdrawn. Today, OpenAI operates behind closed doors, controlled by corporate interests, making decisions that will shape the future of human civilization without meaningful public oversight. This shift is not unique to OpenAI—it reflects a broader consolidation of power within Big Tech.
      </p>

      <p>
        At Soapbox, we build toward a different future. One grounded in transparency, decentralization, and user agency.
      </p>

      <h2>Why We Build Open Source</h2>

      <p>
        Technology now mediates nearly every basic human need: housing, food access, personal liberty, communication, and community. When the infrastructure behind those needs is controlled by a handful of corporations—often aligned with governments—the result is predictable: oversight without accountability, power without transparency, and dependence without recourse.
      </p>

      <p>The evidence is extensive:</p>

      <ul>
        <li>
          <strong>Mass surveillance:</strong> The Snowden disclosures revealed deep collaboration between Big Tech companies and intelligence agencies. Programs like PRISM showed how Google, Apple, Facebook, and others provided user data to the NSA without public knowledge or consent. (<a href="https://www.theguardian.com/world/2013/jun/06/us-tech-giants-nsa-data" target="_blank" rel="noopener noreferrer">The Guardian</a>)
        </li>
        <li>
          <strong>Manipulative algorithms:</strong> Facebook's internal research demonstrated that its engagement‑optimized systems amplified harmful content and degraded mental health—especially for teens—yet the company continued deploying those systems because they increased ad revenue. (<a href="https://www.wsj.com/articles/the-facebook-files-11631713039" target="_blank" rel="noopener noreferrer">The Facebook Files</a>)
        </li>
        <li>
          <strong>Polarization for profit:</strong> YouTube and TikTok recommendation engines have repeatedly funneled users toward extremist or sensational content. Outrage is profitable; accuracy is not. (<a href="https://foundation.mozilla.org/en/youtube/regrets/" target="_blank" rel="noopener noreferrer">Mozilla Foundation</a>)
        </li>
        <li>
          <strong>Opaque, biased decision‑making:</strong> Closed-source systems determine access to housing, credit, employment, and social services. When these systems reproduce racial or economic bias, there is no way to inspect, challenge, or correct them. (<a href="https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing" target="_blank" rel="noopener noreferrer">ProPublica on algorithmic bias</a>)
        </li>
      </ul>

      <p>
        These are not isolated incidents. They reveal a structural pattern: when the tools that shape society are closed, society loses the ability to understand, challenge, or change them.
      </p>

      <p>A future governed by closed AI and closed platforms would be one where:</p>

      <ul>
        <li>Governments gain direct or indirect access to all digital communications.</li>
        <li>Corporations determine what speech, art, or political expression is permissible.</li>
        <li>Economic mobility depends on opaque algorithmic scoring.</li>
        <li>Communities cannot coordinate without risk of surveillance or censorship.</li>
        <li>Public infrastructure is shaped by private incentives rather than democratic values.</li>
      </ul>

      <p>
        This future is not hypothetical. It is simply the continuation of current trends.
      </p>

      <p>Free software is the only scalable counterweight. When software is open:</p>

      <ul>
        <li>People can verify what code does.</li>
        <li>Communities can adapt tools to local needs.</li>
        <li>Journalists and researchers can hold institutions accountable.</li>
        <li>Activists and dissidents can build secure channels of communication.</li>
        <li>Citizens retain control over the infrastructure that powers their lives.</li>
      </ul>

      <p>
        Open source enables autonomy at every level of society.
      </p>

      <h2>Technology for the People Who Need It Most</h2>

      <p>
        Open tools matter most for the people with the least protection: journalists, dissidents, activists, nonprofits, and communities navigating censorship or surveillance.
      </p>

      <p>
        We want small organizations to build functional sites in under an hour, for a few dollars, without entering a pipeline of permanent subscription fees. Open source makes this possible.
      </p>

      <p>
        Our work builds on the Four Freedoms articulated by Richard Stallman—the right to run, study, modify, and share software. AI can extend these freedoms by lowering the barrier to creation. Tools like Shakespeare let people without formal training produce meaningful work quickly, then share the results back with others.
      </p>

      <p>
        As Alex Gleason said in a recent talk:
      </p>

      <blockquote>
        <p>
          <strong>"The question is whether AI will be a tool of repression or liberation. We argue for liberation."</strong>
        </p>
      </blockquote>

      <p>
        Given the choice between maximizing revenue or maximizing user freedom, we choose freedom.
      </p>

      <h2>A Different Vision for the Web</h2>

      <p>
        A free and open web is powerful because people can build together. When tools, protocols, and ideas are shared openly, communities can remix each other's work, strengthen it, adapt it, and pass it forward. Progress is not dictated by a single platform, but generated collectively by the people who rely on it.
      </p>

      <p>
        AI raises the stakes even higher. When the most capable models are closed, centralized, and controlled by a handful of corporations, the entire direction of technological development becomes a private negotiation. Open, decentralized AI is essential if society wants to avoid dependence on systems it cannot inspect or influence.
      </p>

      <p>
        Imagine a community project that needs a website. You browse shared templates, remix one in Shakespeare, deploy it, and contribute improvements back to the commons. Someone else localizes your version, then publishes theirs. Knowledge compounds. Barriers fall. People help each other move faster.
      </p>

      <p>
        This is the promise of open ecosystems: collaboration instead of dependency, ownership instead of lock‑in, and innovation that is distributed rather than controlled.
      </p>

      <p>
        For people living under censorship, these capabilities are not optional. Open tools create resiliency; Nostr provides uncensorable communication. Even during Internet shutdowns—as seen in Tanzania—content can continue moving across decentralized networks.
      </p>

      <h2>Freedom Shouldn't Require Privilege</h2>

      <p>
        Autonomy should not require technical expertise or reliance on corporate gatekeepers. As AI becomes embedded in daily life, closed‑source systems place enormous power in the hands of a few companies. OpenAI's shift away from transparency shows how quickly a public‑serving mission can be abandoned when profit incentives take over.
      </p>

      <p>
        If people rely on proprietary AI to create, communicate, or organize, then private companies effectively control the boundaries of public discourse. A society dependent on closed AI cannot remain free.
      </p>

      <p>
        Tools like Shakespeare counter this by enabling rapid creation, broad collaboration, and complete ownership. They support the rapid spread of ideas, the strengthening of communities, and the protection of democratic processes.
      </p>

      <p>
        When information flows freely and without centralized control, societies remain open. When it is constrained—through censorship, surveillance, corporate capture, or closed AI—freedom erodes.
      </p>

      <h2>Join Us</h2>

      <p>
        We invite you to help build a future where technology strengthens autonomy rather than undermining it. Use our tools. Modify them. Share them. Fork them.
      </p>

      <p>
        Soapbox exists to return the microphone—the soapbox—to everyone. Your voice matters. Your tools should belong to you.
      </p>

      <div className="not-prose my-16">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-800 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Build the Future You Want to See
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Explore our open source tools and join the movement for digital freedom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://shakespeare.diy"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-lg transition-colors inline-flex items-center"
            >
              Try Shakespeare
            </a>
            <a
              href="/tools"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 text-lg font-semibold rounded-lg transition-colors inline-flex items-center"
            >
              Explore Our Tools
            </a>
          </div>
        </div>
      </div>

      <h2>Additional Resources</h2>

      <ul>
        <li><a href="/blog/announcing-shakespeare-act-2">Shakespeare Act 2: Build Freely</a></li>
        <li><a href="/blog/mkstack-tutorial">MKStack Tutorial: Vibe Coding for Everyone</a></li>
        <li><a href="/blog/nostr101">Nostr 101: A Beginner's Guide</a></li>
        <li><a href="https://www.gnu.org/philosophy/free-sw.html" target="_blank" rel="noopener noreferrer">The Free Software Definition</a></li>
        <li><a href="https://soapbox.pub" target="_blank" rel="noopener noreferrer">Soapbox Tools</a></li>
      </ul>
    </article>
  );
}
