import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  hidden?: boolean;
}

export const meta: BlogPostMeta = {
  "slug": "build-without-coding",
  "title": "Build Anything Without Coding: AI's Revolution is For Everyone",
  "excerpt": "We're entering an era where having a great idea matters more than knowing how to code. Learn how AI is democratizing creation and making implementation accessible to everyone.",
  "coverImage": "/assets/blog/build-without-coding/cover.png",
  "date": "2025-10-18",
  "author": {
    "name": "Heather Larson",
    "picture": "/assets/avatars/heather.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/build-without-coding/cover.png"
  },
  "tags": ["ai", "shakespeare", "no-code", "creativity", "democratization"]
};

export default function BuildWithoutCoding() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        <strong>Creating a mockup of an idea takes mere minutes now with AI, freeing up individuals and teams to do their best work while spending time more efficiently.</strong>
      </p>

      <p>
        Thanks to AI-powered tools, like our AI builder <Link to="/tools/shakespeare" className="text-azure hover:text-azure-600 underline">Shakespeare</Link>, the barriers between imagination and implementation are dissolving, creating unprecedented opportunities for non-technical creators. As our CEO, Alex Gleason, says, "Implementation is becoming commoditized so that if you have a good idea, then you can just build it almost immediately. The implementation is becoming a given."
      </p>

      <h2>A Faster Creator Economy is Primed to Emerge</h2>

      <p>
        <strong>The online creator economy is rapidly shifting from an implementation-focused market to an ideas market.</strong> Previously, having a brilliant app idea meant nothing without the technical skills to build it or the resources to hire developers. Now, AI is democratizing the creation of websites, apps, communities, dashboards, or whatever a creator might need. AI makes it possible for anyone with a vision to bring it to life in mere minutes.
      </p>

      <p>
        This leads to empowerment. You no longer have to be "technical" to bring ideas to life. <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 underline">Shakespeare</a> helps you create through conversation, just like you are used to doing with AI assistants like ChatGPT, Gemini, or Claude. Instead of getting an answer to your question, you're asking it to create a website or app for you.
      </p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/build-without-coding/file-upload-ezample.png"
          alt="Building a file upload app in one prompt with Shakespeare"
          className="rounded-lg w-full"
        />
        <p className="text-sm text-gray-600 mt-2 text-center italic">
          Building a complete file upload app with a single prompt in Shakespeare
        </p>
      </div>

      <h2>The Right Mindset For Harnessing the Power of AI</h2>

      <p>
        The biggest obstacle to successfully work with AI isn't technical knowledge—it's mindset. Things you previously thought impossible are now within reach. For example, to build a website, you'd seek out some type of service that would allow you to put in hours of work, plus signing up for a subscription, in order to build a website.
      </p>

      <p>
        After decades of creating like this, that time-consuming process just falls away now. Gleason says there is no longer a need to spend time choosing and working with a content management system or website builder.
      </p>

      <blockquote>
        <p>
          You're stuck in some framework, right? Like Squarespace or something, you have these blocks that you're putting around and then it's a framework. What AI allows to be possible is for this framework idea to just dissolve. You can just type prompts and then it modifies the code so that the code can do anything that you want.
        </p>
      </blockquote>

      <h2>Getting Started with AI: It's About the Tools</h2>

      <p>
        For newcomers to AI-powered creation, the most important thing to know isn't about coding—it's which tools to use. <Link to="/blog/announcing-shakespeare" className="text-azure hover:text-azure-600 underline">Shakespeare</Link> is designed to be accessible even on mobile devices. It's for the musician who wants to build a fan club website or the mom who wants to build her book club online. You can type out your idea while away from your computer and come back later to see what AI has built. It allows anyone to turn a shower thought into a working prototype without touching a terminal or writing code.
      </p>

      <h2>The Real-World Impact of AI Builders</h2>

      <p>
        We're already seeing impressive results from non-technical creators using these tools. Here are some real examples of apps and websites built with Shakespeare:
      </p>

      <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
        {/* Treasures.to */}
        <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-azure-300 hover:shadow-lg transition-all">
          <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100">
            <img
              src="https://media.ditto.pub/4b536f5a5085b93d9ec0e656154a4e11a1d166ca83689747be4c52f34d8268f5.png"
              alt="Treasures screenshot"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-display font-bold text-gray-900">Treasures</h3>
                <p className="text-sm text-gray-600">
                  A decentralized geocaching platform built on the Nostr protocol. Discover hidden geocaches, share locations, and connect with explorers worldwide.
                </p>
              </div>
              <img
                src="https://treasures.to/icon.svg"
                alt="Treasures icon"
                className="w-12 h-12 rounded-lg flex-shrink-0"
              />
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://shakespeare.diy/clone?url=https%3A%2F%2Fgitlab.com%2Fchad.curtis%2Ftreasures.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <img
                  src="https://user-content.gitlab-static.net/dc700236142edffa7bc9a36aae2802eb0d10433f/68747470733a2f2f616374322e7368616b657370656172652e746f2f62616467652e737667"
                  alt="Edit with Shakespeare"
                  className="h-6 hover:opacity-80 transition-opacity"
                />
              </a>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://treasures.to"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit app"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Villager */}
        <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-azure-300 hover:shadow-lg transition-all">
          <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100">
            <img
              src="https://gitlab.com/soapbox-pub/villager/-/raw/main/public/screenshot.png"
              alt="Villager screenshot"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-display font-bold text-gray-900">Villager</h3>
                <p className="text-sm text-gray-600">
                  Connect with your community to share resources, offer help, and build a stronger neighborhood together.
                </p>
              </div>
              <img
                src="https://villager.shakespeare.wtf/favicon.png"
                alt="Villager icon"
                className="w-12 h-12 rounded-lg flex-shrink-0"
              />
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://shakespeare.diy/clone?url=https%3A%2F%2Fgitlab.com%2Fsoapbox-pub%2Fvillager.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <img
                  src="https://user-content.gitlab-static.net/dc700236142edffa7bc9a36aae2802eb0d10433f/68747470733a2f2f616374322e7368616b657370656172652e746f2f62616467652e737667"
                  alt="Edit with Shakespeare"
                  className="h-6 hover:opacity-80 transition-opacity"
                />
              </a>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://villager.shakespeare.wtf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit app"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Divine Video */}
        <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-azure-300 hover:shadow-lg transition-all">
          <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100">
            <img
              src="/assets/communities/divine-screenshot.png"
              alt="Divine screenshot"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-display font-bold text-gray-900">diVine</h3>
                <p className="text-sm text-gray-600">
                  A new short-form video app inspired by Vine's creative 6-second format, preserving authentic human creativity.
                </p>
              </div>
              <img
                src="/assets/communities/divine-icon.png"
                alt="Divine icon"
                className="w-12 h-12 rounded-lg flex-shrink-0"
              />
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://shakespeare.diy/clone?url=https%3A%2F%2Fgithub.com%2Fdivinevideo%2Fdivine-web.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <img
                  src="https://user-content.gitlab-static.net/dc700236142edffa7bc9a36aae2802eb0d10433f/68747470733a2f2f616374322e7368616b657370656172652e746f2f62616467652e737667"
                  alt="Edit with Shakespeare"
                  className="h-6 hover:opacity-80 transition-opacity"
                />
              </a>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://divine.video"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit app"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bookstr */}
        <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-azure-300 hover:shadow-lg transition-all">
          <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100">
            <img
              src="/assets/communities/bookstr-screenshot.png"
              alt="Bookstr screenshot"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-display font-bold text-gray-900">Bookstr</h3>
                <p className="text-sm text-gray-600">
                  Track your reading journey, discover amazing books, and connect with fellow readers on the decentralized web.
                </p>
              </div>
              <img
                src="/assets/communities/bookstr-icon.png"
                alt="Bookstr icon"
                className="w-12 h-12 rounded-lg flex-shrink-0"
              />
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://shakespeare.diy/clone?url=https%3A%2F%2Fgitlab.com%2Fmarykatefain%2Fbookstr2.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <img
                  src="https://user-content.gitlab-static.net/dc700236142edffa7bc9a36aae2802eb0d10433f/68747470733a2f2f616374322e7368616b657370656172652e746f2f62616467652e737667"
                  alt="Edit with Shakespeare"
                  className="h-6 hover:opacity-80 transition-opacity"
                />
              </a>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://bookstr.shakespeare.wtf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit app"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="not-prose my-8 text-center">
        <Link
          to="/showcase"
          className="inline-flex items-center px-6 py-3 bg-azure hover:bg-azure-600 text-white font-semibold rounded-lg transition-colors"
        >
          View More Examples in Our Showcase
        </Link>
      </div>

      <p>
        The learning curve that once required months or years of practice to become a software developer has virtually disappeared. You no longer need to go to school, take classes, or find a mentor to create your next big idea and put it online.
      </p>

      <h2>Ideas Can Flow Freely As Technical Barriers Fall</h2>

      <p>
        <strong>This democratization of being able to create online isn't just about building apps. It's about creating equality of opportunity.</strong> Whether you're a mom with little spare time to create, a creator with a vision, or an activist needing to build community tools, AI-powered creation tools are making it possible to turn ideas into reality without traditional technical barriers.
      </p>

      <h2>Why Open Source and Decentralization Matter</h2>

      <p>
        But accessibility alone isn't enough. For AI-powered creation tools to truly democratize the internet, they must be built on <Link to="/blog/free-software-free-societies" className="text-azure hover:text-azure-600 underline">open source</Link> and decentralized foundations. Here's why:
      </p>

      <p>
        <strong>When the tools that shape society are closed, society loses the ability to understand, challenge, or change them.</strong> Closed AI systems and proprietary platforms create dependency without recourse. If you build your website or app on a closed platform, you're subject to their terms, their pricing changes, their censorship decisions, and their surveillance practices. Your creation isn't truly yours.
      </p>

      <p>
        Shakespeare is different. It's built on <Link to="/blog/nostr101" className="text-azure hover:text-azure-600 underline">Nostr</Link>, a decentralized protocol that ensures:
      </p>

      <ul>
        <li><strong>You own your creations.</strong> No platform can delete your work or lock you out of your account.</li>
        <li><strong>No subscription lock-in.</strong> Deploy your websites and apps without ongoing platform fees.</li>
        <li><strong>Censorship resistance.</strong> Your content can't be taken down by a single company or government.</li>
        <li><strong>Transparency.</strong> Open source code means you can inspect, modify, and improve the tools you use.</li>
      </ul>

      <p>
        As we discuss in our article on <Link to="/blog/free-software-free-societies" className="text-azure hover:text-azure-600 underline">Free Software: Free Societies</Link>, technology now mediates nearly every basic human need: housing, food access, personal liberty, communication, and community. When that infrastructure is controlled by a handful of corporations, the result is predictable: oversight without accountability, power without transparency, and dependence without recourse.
      </p>

      <p>
        Free software is the only scalable counterweight. It grants users four essential freedoms: to run the program as you wish, to study and modify it, to redistribute copies, and to share your improvements with others. AI can extend these freedoms by lowering the barrier to creation—but only if the AI tools themselves are open and decentralized.
      </p>

      <p>
        This matters most for the people with the least protection: journalists, dissidents, activists, nonprofits, and communities navigating censorship or surveillance. An accessible AI builder means nothing if it can be shut down, monitored, or controlled by those in power. Open source and decentralization ensure that the tools remain available to everyone, especially those who need them most.
      </p>

      <h2>The Future is Open and Accessible</h2>

      <p>
        The future belongs to those with ideas, not just those with coding skills. And that future is already here. The implementation, as Gleason says, is inferred. Let your ideas flow freely.
      </p>

      <p>
        But more importantly, the future must belong to <em>everyone</em>—not controlled by a handful of corporations deciding who gets to create, what gets censored, and how much it costs to participate. By combining AI-powered accessibility with open source freedom and decentralized infrastructure, we're building tools that genuinely democratize the internet.
      </p>

      <div className="not-prose my-8">
        <a
          href="https://shakespeare.diy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors"
        >
          Start Building with Shakespeare
        </a>
      </div>
    </article>
  );
}
