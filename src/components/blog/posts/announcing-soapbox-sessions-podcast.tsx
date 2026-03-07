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
  "slug": "announcing-soapbox-sessions-podcast",
  "title": "🎙️ Announcing: The Soapbox Sessions Podcast",
  "excerpt": "Heather Larson and Derek Ross bring you the latest news and tips about Nostr, AI, and building the decentralized future. Every Thursday, tune in for a fresh episode!",
  "coverImage": "/assets/blog/announcing-soapbox-sessions-podcast/podcast-cover.png",
  "date": "2025-09-04",
  "author": {
    "name": "Heather Larson",
    "picture": "/assets/avatars/heather.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-soapbox-sessions-podcast/soapbox-sessions-cover.png"
  },
  "tags": ["podcast", "announcement", "soapbox"]
};

export default function AnnouncingSoapboxSessionsPodcast() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            🎙️ Podcast
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            🗽 Nostr
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            🤖 AI
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            ⚡ Weekly
          </Badge>
        </div>
      </div>

      <p className="text-xl leading-relaxed text-muted-foreground mb-8">
        Welcome to the first episode of Soapbox sessions! Soapbox Marketing Director, Heather Larson, and DevRel, Derek Ross, are teaming up to bring you weekly episodes about all things Soapbox, Nostr, AI, and so much more. We're here to help you get started building the free & open Internet your way. We have a lot of material to throw at you, but we hope to do it in a laid back, fun way.
      </p>

      <div className="not-prose my-8">
        <Card className="border-dashed border-2 border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-950 dark:to-blue-950">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-300">
              Hosted by Heather Larson & Derek Ross
            </h3>
            <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex items-center justify-center">
              <img
              src="/assets/blog/announcing-soapbox-sessions-podcast/heather-and-derek.png"
              alt="Heather and Derek from Vegas conference"
              className="object-cover w-full h-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Welcome to the Most Rapidly Shifting Space on the Internet</h2>

      <p>
        At Soapbox, we're creating tools to help rebuild the Internet on Nostr so we can all enjoy a more free, decentralized experience for everything from social media to music. The Nostr space moves fast, with new apps being built all the time!
      </p>

      <p>
        Generative AI reached a <a href="https://www.visualcapitalist.com/sp/taa02-charted-ai-adoption/" className="text-azure-600 hover:underline" target="_blank" rel="noopener noreferrer">39%</a> adoption rate in only two years—a milestone that took the Internet nearly five years and personal computing almost 12.
      </p>

      <p>
        Unlike Nostr, the world of AI is full of hype and far more people are interested in and aware of it. It's moving faster than Nostr, or really, anything in world right now. This makes it worth our focus, especially since Soapbox offers a conversational AI builder that works seamlessly with Nostr. <a href="/shakespeare" className="text-azure-600 hover:underline">Shakespeare</a> helps you build websites and apps with conversational AI while helping you stay away from platform lock-in. You never need to give an email to use it, just Nostr.
      </p>

      <p>
        In Soapbox sessions, we work at the intersection of both rapidly shifting spaces—AI and Nostr. We think something really special is happening here. What we're creating will usher in a time of more freedom and empowerment on the Internet for everyone. Imagine a world you can be a part of building, rather than waiting for platforms to filter it down to you. We want to give everyone a voice and the tools to share it—freely, independently, and without fear of being censored or deplatformed. That's why we're called Soapbox!
      </p>

      <p>
        We want to help you learn what's out there and available to you. It's probably easier for you to build than you think. Our conversational AI-builder, <a href="/showcase" className="text-azure-600 hover:underline">Shakespeare</a>, is brand new. But it's already helping people build websites and apps to solve problems or support their interests.
      </p>

      <h2>Listen on Nostr</h2>

      <p>
        Now that we're entering an age of being able to build with AI and absolutely no writing of code, we decided to see if we could launch a podcast with a podcasting app we built ourselves. The result is <a href="https://podstr.org" className="text-azure-600 hover:underline" target="_blank" rel="noopener noreferrer">Podstr</a>, an app Derek Ross built using <a href="/mkstack" className="text-azure-600 hover:underline">MKStack</a>.
      </p>

      <p>
        To listen to Soapbox Sessions, you can give Podstr a spin or visit our dedicated podcast site at <a href="https://sessions.soapbox.pub/" className="text-azure-600 hover:underline" target="_blank" rel="noopener noreferrer">sessions.soapbox.pub</a>. For the best experience, sign up for Nostr and log in. Then you can comment and become part of our community. Empowering communities to form, grow, and thrive in the decentralized web is one of the key goals of our mission.
      </p>

      <p>
        Soapbox Sessions is also available via <a href="https://sessions.soapbox.pub/rss.xml" className="text-azure-600 hover:underline" target="_blank" rel="noopener noreferrer">RSS</a> and <a href="https://youtu.be/c_LxrSyMpSI" className="text-azure-600 hover:underline" target="_blank" rel="noopener noreferrer">YouTube</a>.
      </p>

      <div className="not-prose my-8">
        <Card className="border-red-200 dark:border-red-800">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-300">
              📺 Watch on YouTube
            </h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our YouTube channel for video episodes and more content.
            </p>
            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
              >
                <a href="https://youtu.be/c_LxrSyMpSI" target="_blank" rel="noopener noreferrer">
                  🎬 Watch Episode 1 →
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full border-red-200 text-red-700 hover:bg-red-50 dark:border-red-800 dark:text-red-300"
              >
                <a href="https://www.youtube.com/@SoapboxTechnology" target="_blank" rel="noopener noreferrer">
                  Subscribe to Channel →
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        Soapbox Sessions is self-hosted and we use Podcasting 2.0 technology like wallet splits, or value time splits. This means that if people send value to our podcast in the form of a payment, it can be split between our hosts, Soapbox, <a href="https://ainsleycostello.com/" className="text-azure-600 hover:underline" target="_blank" rel="noopener noreferrer">Ainsley Costello</a> who recorded our intro, and our charity of choice, The Human Rights Foundation (HRF). This will help us cover server costs, pay Ainsley, and help HRF!
      </p>

      <p className="italic">
        Learn about this idea in <a href="https://value4value.info/pieces/" className="text-azure-600 hover:underline" target="_blank" rel="noopener noreferrer">Podcasting 2.0</a> and about <a href="https://podcastindex-org.github.io/docs-api/#get-/recent/soundbites" className="text-azure-600 hover:underline" target="_blank" rel="noopener noreferrer">Value Time Splits for developers</a>.
      </p>

      <h2>Weekly Nostr News Plus Building The Decentralized Future</h2>

      <p>
        Listen to Soapbox Sessions for a weekly dose of news and inspiration about what people are building on Nostr. We'll also be sharing our tips about building the no-code future along with how to use the coolest new apps out there. Heather likes to share from her non-developer point-of-view and Derek takes a more technical track to navigate the worlds of Nostr and AI. This ensures there's something for everyone who listens in or watches on YouTube.
      </p>

      <p>
        You'll hear about Derek's adventures, from "purple pilling" a member of the <a href="https://bitcoinmagazine.com/conference/a-bitcoiner-must-be-on-nostr" className="text-azure-600 hover:underline" target="_blank" rel="noopener noreferrer">Swiss Parliament</a> to some of the crazy things he and Heather have done together—like putting on a conference in Austin plus an independent music show at the infamous Antone's venue there.
      </p>

      <p>
        Nothing we do on Nostr is possible on legacy social media platforms. Tipping creators you like, building an AI website without platform-lock in and subscriptions, and even beating algorithms—it's all possible on Nostr. Nostr doesn't force you into an algorith, or shove advertisements into your feed. If this sounds good to you, welcome to the new Soapbox for social media, communities, and more. Welcome to Soapbox sessions, your weekly home for the ever-changing decentralized web.
      </p>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-purple-200 dark:border-purple-800">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">
                🎧 Listen to Soapbox Sessions
              </h3>
              <p className="text-muted-foreground mb-4">
                Visit our podcast site or try our custom-built Podstr app powered by MKStack.
              </p>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <a href="https://sessions.soapbox.pub/" target="_blank" rel="noopener noreferrer">
                  🎙️ Listen Now →
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-200 dark:border-green-800">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-300">
                🛠️ Build with Our Tools
              </h3>
              <p className="text-muted-foreground mb-4">
                Explore Shakespeare, MKStack, and our other building tools.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-green-200 text-green-700 hover:bg-green-50 dark:border-green-800 dark:text-green-300"
              >
                <a href="/tools">
                  View All Tools →
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-blue-200 dark:border-blue-800">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🎙️</div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Join the Decentralized Future?
            </h3>
            <p className="text-muted-foreground mb-6">
              Tune in to Soapbox Sessions every Thursday for the latest in Nostr, AI, and decentralized web building.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3"
                >
                  <a href="https://sessions.soapbox.pub/" target="_blank" rel="noopener noreferrer">
                    🎙️ Listen Now
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-300 font-semibold px-8 py-3"
                >
                  <a href="https://www.youtube.com/@SoapboxTechnology" target="_blank" rel="noopener noreferrer">
                    🎬 Subscribe on YouTube
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Available wherever you get your podcasts
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <p className="text-sm text-muted-foreground text-center">
        <em>
          Soapbox Sessions is hosted by Heather Larson and Derek Ross.
          Follow our journey on Nostr and stay updated with the latest developments in decentralized web technology.
        </em>
      </p>
    </article>
  );
}