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
  "slug": "building-freedom-first-communities",
  "title": "Building Freedom-First Communities with Soapbox",
  "excerpt": "Social media platforms are increasingly censoring and deplatforming voices. Soapbox offers a way to build spaces where you control your content. Learn how we're building the future of censorship-resistant communities.",
  "coverImage": "/assets/blog/freedom-communities/cover.png",
  "date": "2025-11-09",
  "author": {
    "name": "Heather Larson",
    "picture": "/assets/avatars/heather.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/freedom-communities/cover.png"
  },
  "tags": ["communities", "freedom", "censorship-resistance", "nostr", "decentralization"]
};

export default function BuildingFreedomFirstCommunities() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        Social media platforms are increasingly censoring, shadow banning, and deplatforming voices they disagree with regardless of advertiser, shareholder, or political pressure. Soapbox offers a way to build spaces that allow you to control your content.
      </p>

      <p>
        Here's how we're building the future of censorship-resistant communities. We're <em>decentralizing</em> the internet by helping you regain control of your community so a large company, government, or other entity can't silence you.
      </p>

      <p>
        If you're wondering how much need there is to build communities that can't be taken down, this is a very real online threat to the most vulnerable. 2024 marked the "14th consecutive year of decline in global internet freedom. Of the 72 countries covered by <em>Freedom on the Net 2024</em>, conditions for human rights online deteriorated in 27, and 18 countries registered overall gains. The year's largest decline occurred in Kyrgyzstan, followed by Azerbaijan, Belarus, Iraq, and Zimbabwe." This is also a problem for those in Western countries who face pressure to upload identification in order to access a social media platform.
      </p>

      <p>
        According to the Human Rights Foundation, AI tools, like <Link to="/tools/shakespeare" className="text-azure hover:text-azure-600 underline">Shakespeare</Link> from Soapbox, can be used to liberate. "AI tools can be paired with Freedom Tech protocols like Bitcoin and <Link to="/blog/nostr101" className="text-azure hover:text-azure-600 underline">Nostr</Link> to ensure that anyone can safely and securely access the world's best intelligence."
      </p>

      <p>
        Soapbox uses <Link to="/blog/nostr101" className="text-azure hover:text-azure-600 underline">Nostr's</Link> censorship-resistant technology to provide tools for building a free and open Internet. As it's a protocol rather than a company, Nostr remains censorship-resistant, so there is no central control. Nostr lives not on centralized server racks, but on independent relays distributed globally. It's what our conversational AI builder, <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 underline">Shakespeare</a>, builds on for your websites and apps. You build them and they exist on Nostr so there's no need to sign up for a subscription to deploy your creations.
      </p>

      <h2>Starting with a Clear Tech Decentralization Mission</h2>

      <p>
        In 2019, we witnessed platforms actively censoring women discussing their rights. Existing decentralized platforms like <Link to="/blog/comparing-protocols" className="text-azure hover:text-azure-600 underline">ActivityPub and Mastodon</Link> offered partial solutions but didn't solve the core problem: giving communities true independence from centralized control.
      </p>

      <p>
        We launched our first project, <a href="https://spinster.xyz" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 underline">Spinster</a>, to prove what's possible when communities control their own spaces.
      </p>

      <p>
        "Spinster used Soapbox, the front end software for Spinster," says M.K. Fain, our Chief Product Officer, "Then we generalized Soapbox. We made a version with our purple branding and feminist theming. What if that theming and customization were available to anyone?"
      </p>

      <p>
        We forged a path forward by creating Soapbox software that lets anyone build their own censorship-resistant community. You can have your Soapbox while owning and controlling it.
      </p>

      <h2>Moving to True Online Decentralization</h2>

      <p>
        Our early work revealed a flaw in existing decentralized protocols like <Link to="/blog/comparing-protocols" className="text-azure hover:text-azure-600 underline">Mastodon</Link>, which created "mini Twitters" where administrators held ultimate power over user content and identity. The <Link to="/blog/nostr101" className="text-azure hover:text-azure-600 underline">Nostr</Link> protocol offered a breakthrough solution.
      </p>

      <p>
        Fain says, "We were having the same problem on <Link to="/blog/comparing-protocols" className="text-azure hover:text-azure-600 underline">ActivityPub</Link> servers as on Twitter. ActivityPub doesn't work like Nostr where everyone has their own identity. It's a bunch of mini Twitters. One admin controls everything, and each person is dependent on that admin."
      </p>

      <p>
        With Nostr, you own your identity through a key pair instead of signing up for an "account" with your email or other personal identification. Your Nostr messages flow freely across its distributed relay network, and while communities can curate their spaces, they can't censor or de-platform you. Content filtering happens on the app side. This preserves community standards and individual autonomy.
      </p>

      <p>
        The worst case scenario is you get booted from a relay. However, with Nostr's decentralized nature, other relays pick up your content, keeping it alive in case of any form of censorship.
      </p>

      <h2>Explore Communities Powered by Soapbox</h2>

      <p>
        See real-world examples of communities built with Soapbox tools. These platforms demonstrate the power of decentralized, censorship-resistant technology in action.
      </p>

      <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
        {/* Treasures.to */}
        <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-azure-300 hover:shadow-lg transition-all">
          <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100">
            <img
              src="/assets/communities/treasures-screenshot.png"
              alt="Treasures screenshot"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-display font-bold text-gray-900">Treasures</h3>
                <p className="text-sm text-gray-600">
                  Treasures.to is a decentralized geocaching platform built on the Nostr protocol. Discover hidden geocaches, share locations, and connect with explorers worldwide through a censorship-resistant, open network.
                </p>
              </div>
              <img
                src="/assets/communities/treasures-icon.png"
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
              src="/assets/communities/villager-screenshot.png"
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
                src="/assets/communities/villager-icon.png"
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
                  Divine is a new short-form video app inspired by Vine's creative 6-second format, preserving authentic human creativity.
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

      <h2>Building with And Other Stuff (AOS)</h2>

      <p>
        Soapbox is now part of <a href="https://andotherstuff.org/" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 underline">And Other Stuff (AOS)</a>, a collective of innovative Nostr projects. Working with teams from White Noise, Cashu, and Nos, we're focused on:
      </p>

      <ul>
        <li>Making decentralized technology available to everyone.</li>
        <li>Providing simple tools for building Nostr communities.</li>
        <li>Integrating fast, efficient, and private payments.</li>
        <li>Ensuring private, encrypted communications.</li>
        <li>Supporting those needing platforms that resist censorship.</li>
      </ul>

      <p>
        Communities will benefit from other tools in the <a href="https://andotherstuff.org/" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 underline">AOS</a> collective, like the privacy-enhancing tools in Cashu and White Noise. The group's goal is to make Nostr the best social protocol for <Link to="/blog/free-software-free-societies" className="text-azure hover:text-azure-600 underline">open-source</Link> AI-first development and integration. Together, we want to build Nostr's future so that it's widely adopted and sustainable. Decentralized AI tools, like <Link to="/blog/announcing-shakespeare-act-2" className="text-azure hover:text-azure-600 underline">Shakespeare</Link>, will empower non-profits and the oppressed.
      </p>

      <h2>Join Us in Building a Free and Open Internet</h2>

      <p>
        We're creating more than social platforms. We're building infrastructure for free expression. If you're:
      </p>

      <ul>
        <li>Facing platform censorship or shadow banning.</li>
        <li>Looking to build an independent community.</li>
        <li>Passionate about digital sovereignty.</li>
      </ul>

      <p>
        Soapbox provides tools to help you create permissionless spaces you have control over. We envision a future where canceling, shadowbans, and "content moderation" disguised as censorship are things of the past.
      </p>

      <p>
        If you don't know how to code, that's OK! You can start building your censorship-resistant community using <Link to="/blog/announcing-shakespeare" className="text-azure hover:text-azure-600 underline">Shakespeare</Link>. You can also check out <Link to="/blog/chorus-vibe-coding" className="text-azure hover:text-azure-600 underline">Chorus</Link> by AOS, an app we debuted at the Oslo Freedom Forum in May. If you're already a dev, check out our tools like MKStack. Teach yourself Nostr NIPs with <Link to="/tools/nostrhub" className="text-azure hover:text-azure-600 underline">NostrHub</Link>, which lets you explore a complete NIP database and publish custom NIPs.
      </p>

      <p>
        Our tools are <Link to="/blog/free-software-free-societies" className="text-azure hover:text-azure-600 underline">open source</Link>, decentralized, and production-ready.
      </p>

      <div className="not-prose bg-gradient-to-r from-azure-50 to-blue-50 rounded-xl p-8 my-8 border-2 border-azure-200">
        <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
          Shakespeare helps you build without:
        </h3>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <span className="text-azure mr-3">•</span>
            <span className="text-gray-700">Censorship</span>
          </li>
          <li className="flex items-start">
            <span className="text-azure mr-3">•</span>
            <span className="text-gray-700">Platform lock-in</span>
          </li>
          <li className="flex items-start">
            <span className="text-azure mr-3">•</span>
            <span className="text-gray-700">Monthly subscriptions to build your websites & apps</span>
          </li>
        </ul>

        <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
          Shakespeare gives you the ability to:
        </h3>
        <ul className="space-y-3 mb-8">
          <li className="flex items-start">
            <span className="text-azure mr-3">•</span>
            <span className="text-gray-700">Pay for AI credits with Bitcoin or use a free LLM to get started</span>
          </li>
          <li className="flex items-start">
            <span className="text-azure mr-3">•</span>
            <span className="text-gray-700">Deploy without purchasing a domain (though you can if you want to)</span>
          </li>
          <li className="flex items-start">
            <span className="text-azure mr-3">•</span>
            <span className="text-gray-700">Get started building websites & apps without knowing how to write code</span>
          </li>
        </ul>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://shakespeare.diy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors"
          >
            Get Started with Shakespeare
          </a>
          <Link
            to="/showcase"
            className="inline-flex items-center px-6 py-3 bg-azure hover:bg-azure-600 text-white font-semibold rounded-lg transition-colors"
          >
            View Community Showcase
          </Link>
        </div>
      </div>

      <div className="not-prose my-8">
        <Link
          to="/tools"
          className="inline-flex items-center px-6 py-3 bg-azure hover:bg-azure-600 text-white font-semibold rounded-lg transition-colors"
        >
          Explore Our Tools
        </Link>
      </div>
    </article>
  );
}
