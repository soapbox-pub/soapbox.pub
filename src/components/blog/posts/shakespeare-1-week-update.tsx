import React from 'react';
import { Card, CardContent } from '../../ui/card';
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
  "slug": "shakespeare-1-week-update",
  "title": "🎭 Shakespeare 1 Week Update - Amazing Community Projects",
  "excerpt": "More than 200 users tried Shakespeare and created incredible projects. See featured community builds, TechCrunch coverage, and what's coming next for AI-powered website building on Nostr.",
  "coverImage": "/assets/blog/shakespeare-1-week-update/shakespeare-cover.png",
  "date": "2025-07-18",
  "author": {
    "name": "M.K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/shakespeare-1-week-update/shakespeare-cover.png"
  },
  "featured": false,
  "tags": ["shakespeare", "update", "community"]
};

export default function Shakespeare1WeekUpdate() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 rounded-2xl p-8 text-center border border-purple-200 dark:border-purple-800">
          <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-300 dark:border-blue-700">
            🎉 1 Week Update
          </div>
          <h2 className="text-4xl font-bold mb-4">
            🎭 <span className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Shakespeare</span>
          </h2>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            Thank you to everyone who tried Shakespeare!
          </h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              <strong>More than 200 of you tried Shakespeare</strong> in the first week of our Beta launch.
              We are so grateful to all of you who shared your ideas, helped us find bugs, and inspired our next steps.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Thanks to your feedback, we've already improved Shakespeare significantly in just one week, with more to come!
              Here's a look at some of the projects you've already built, and what's to come.
            </p>
          </div>
        </div>
      </div>

      <h2>🌟 Featured Community Projects</h2>
      <p className="text-lg text-muted-foreground">Here are some of our favorite projects from the community so far</p>

      {/* Reviewstr */}
      <div className="not-prose my-8">
        <Card className="border-2 border-purple-200 dark:border-purple-800 overflow-hidden">
          <CardContent className="p-0">
            <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
              <h3 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-200">
                Reviewstr
              </h3>

              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-purple-200 dark:border-purple-700 mb-4">
                <p className="text-sm">
                  <strong>By:</strong> <a href="https://njump.me/npub105em547c5m5gdxslr4fp2f29jav54sxml6cpk6gda7xyvxuzmv6s84a642" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@TravelTelly</a>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Share your experiences and discover amazing places on Nostr
                </p>
              </div>
            </div>

            <div className="p-6">
              <div className="text-center">
                <a href="https://nostr-react-boilerplate-mbpz.shakespeare.to/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://media.ditto.pub/c2ee51a5966017fdde501c6767fe0f1df16e7d1673960a8ba4e680c887e33f9b.png"
                    alt="Reviewstr Screenshot"
                    className="hover:shadow-lg transition-shadow duration-300 w-full"
                  />
                </a>
                <Button asChild className="mt-4" variant="outline">
                  <a href="https://nostr-react-boilerplate-mbpz.shakespeare.to/" target="_blank" rel="noopener noreferrer">
                    Visit Project →
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hashman Game */}
      <div className="not-prose my-8">
        <Card className="border-2 border-blue-200 dark:border-blue-800 overflow-hidden">
          <CardContent className="p-0">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
              <h3 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-200">
                Hashman
              </h3>

              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-blue-200 dark:border-blue-700 mb-4">
                <p className="text-sm">
                  <strong>By:</strong> <a href="https://njump.me/nprofile1qqs9kqvr4dkruv3t7n2pc6e6a7v9v2s5fprmwjv4gde8c4fe5y29v0sd595dt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@QW</a>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Pacman-style game built with Shakespeare
                </p>
              </div>
            </div>

            <div className="p-6">
              <div className="text-center">
                <a href="https://npub173vexauak3y5zctuapqh2p90pjnscyqr6zfh4vqa8r0pfsmkp5lqtjfk7c.shakespeare.to/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://media.ditto.pub/17cf92e31df69fa6ef083f626f2b3d4cf9aadb25844759866a5896026c11cb5a.png"
                    alt="Hashman Screenshot"
                    className="hover:shadow-lg transition-shadow duration-300 w-full"
                  />
                </a>
                <Button asChild className="mt-4" variant="outline">
                  <a href="https://npub173vexauak3y5zctuapqh2p90pjnscyqr6zfh4vqa8r0pfsmkp5lqtjfk7c.shakespeare.to/" target="_blank" rel="noopener noreferrer">
                    Play Game →
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Betstr */}
      <div className="not-prose my-8">
        <Card className="border-2 border-green-200 dark:border-green-800 overflow-hidden">
          <CardContent className="p-0">
            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
              <h3 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-200">
                Betstr
              </h3>

              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-green-200 dark:border-green-700 mb-4">
                <p className="text-sm">
                  <strong>By:</strong> <a href="https://njump.me/npub1ygzsm5m9ndtgch9n22cwsx2clwvxhk2pqvdfp36t5lmdyjqvz84qkca2m5" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@Keith Meola</a>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Peer-to-peer betting with Lightning on Nostr
                </p>
              </div>
            </div>

            <div className="p-6">
              <div className="text-center">
                <a href="https://project-betstr-description-i-want-to-w8ll.shakespeare.to/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://media.ditto.pub/fb45fc546730d246b469c0f5a3ae1b119b2ebd924d53702dc2a5a830dc7137fa.png"
                    alt="Betstr Screenshot"
                    className="hover:shadow-lg transition-shadow duration-300 w-full"
                  />
                </a>
                <Button asChild className="mt-4" variant="outline">
                  <a href="https://project-betstr-description-i-want-to-w8ll.shakespeare.to/" target="_blank" rel="noopener noreferrer">
                    Visit Project →
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Community Call to Action */}
      <div className="not-prose my-8">
        <Card className="border-3 border-purple-300 dark:border-purple-700 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-200">
              Share Your Project!
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Did you make something cool with Shakespeare? We'd love to see it! Share it with us and the community.
            </p>
            <div className="bg-purple-100 dark:bg-purple-800 p-6 rounded-xl border border-purple-200 dark:border-purple-600">
              <p className="text-lg font-bold text-purple-800 dark:text-purple-200">
                Use #ShakespeareDIY and tag us on Nostr!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>📰 Shakespeare Featured in TechCrunch!</h2>

      <div className="not-prose my-8">
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <a href="https://techcrunch.com/2025/07/16/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media/" target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src="https://media.ditto.pub/b77d551fa74134acc35bfc3b3a4af68ecf4dde643be02d08518f12151728d0ab.png"
                  alt="TechCrunch Article Screenshot"
                  className="hover:shadow-lg transition-shadow duration-300 w-full"
                />
              </a>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
              Shakespeare was featured in a recent TechCrunch article about Jack Dorsey's investment in Nostr.
              The article highlights how Shakespeare represents the future of AI-powered development on decentralized protocols.
            </p>

            <div className="text-center">
              <Button asChild className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                <a href="https://techcrunch.com/2025/07/16/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media/" target="_blank" rel="noopener noreferrer">
                  Read Article →
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>🚀 Coming Soon</h2>

      <div className="not-prose my-8">
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl">
                🚀
              </div>
              <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-6">
                Exciting Features Coming Soon
              </h3>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Full Git Integration</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Complete version control and rollback capabilities for your projects</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Custom Domains</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Publish your Shakespeare-built sites on your own custom domains</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Kimi K2 Support</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Integration with the powerful open source AI agent for enhanced capabilities</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Enhanced MKStack Support</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Improved Zaps integration and Lightning Network features</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-800 dark:to-cyan-800 p-6 rounded-xl border border-blue-200 dark:border-blue-600 mb-6">
              <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-3 flex items-center">
                🔧 Built-in Nostr Issue Tracker
              </h4>
              <p className="text-blue-800 dark:text-blue-200 text-sm mb-4">
                We've built a revolutionary issue tracker directly into Shakespeare that runs entirely on Nostr!
                Track bugs, request features, and collaborate on improvements using decentralized protocols.
              </p>
              <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                <a href="https://shakespeare.diy/issues" target="_blank" rel="noopener noreferrer">
                  View Open Issues →
                </a>
              </Button>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800 p-6 rounded-xl border border-purple-200 dark:border-purple-600">
              <p className="text-center font-bold text-purple-900 dark:text-purple-100">
                🎯 Our goal: Make on the decentralized web open and acessible to everyone.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Ready to Build Something Amazing?</h2>

      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Join hundreds of creators who are already building the future with Shakespeare.
        Turn your ideas into reality through natural conversation with AI.
      </p>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Build the Future?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of creators who are already building amazing projects with Shakespeare.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3"
                >
                  <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                    🎭 Try Shakespeare
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple-200 text-purple-700 hover:bg-purple-50 font-semibold px-8 py-3"
                >
                  <a href="/shakespeare-resources">
                    📚 More Resources
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Turn your ideas into reality through natural conversation with AI
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}