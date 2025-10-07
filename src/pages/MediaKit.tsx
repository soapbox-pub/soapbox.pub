import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Users, Podcast, MessageCircle, Mail, Copy, Check, Download, Calendar, Globe, Play, FileText, LinkIcon } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { getAllPosts } from "@/lib/blog/utils";

export default function MediaKit() {
  const [showContact, setShowContact] = useState(false);
  const [copied, setCopied] = useState(false);

  // Set custom SEO for Media Kit page
  useSEO({
    title: 'Media Kit - Soapbox Leadership Team',
    description: 'Meet the Soapbox leadership team available for podcast interviews and media appearances. Expert insights on decentralized technology, AI innovation, and digital freedom.',
    type: 'website',
    keywords: 'soapbox media kit, podcast guests, interviews, alex gleason, mk fain, derek ross, nostr experts, decentralized technology'
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('contact@soapbox.pub');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      console.error('Failed to copy email:', err);
    }
  };

  const alexProfile = {
    name: "Alex Gleason",
    title: "CEO of Soapbox",
    picture: "https://media.ditto.pub/3fd58d3db4fdcf40091d69e881242678c8010acc446c3f0d8e95cc9505b12e7a.jpeg",
    nostrUrl: "https://ditto.pub/@alex@gleasonator.dev",
    website: "https://alexgleason.me",
    linkedin: "https://linkedin.com/in/alexgleason",
    twitter: "https://x.com/alex",
    bio: "Alex has over a decade of experience building social platforms, and is one of the foremost experts on decentralized social protocols, including Nostr, and the Fediverse. He is still learning, and still dreaming.",
    subjects: [
      "What makes Shakespeare different from other AI web builders",
      "Integration with decentralized tech like Nostr and Bitcoin",
      "Why Nostr? (vs. Fediverse/Mastodon or Bluesky?)",
      "How does Shakespeare help Nostr win?",
      "All things AI",
      "The fake \"openness\" of OpenAI and what really open AI would look like",
      "Open source models like GLM and the competitive race with China",
      "The future of software development with AI (are junior devs over?)"
    ],
    knownFor: "Truth Social, Fediverse, Ditto, and rescuing turtles while wearing a William Shakespeare costume.",
    pastAppearances: [
      { title: "Plebchain Radio 128", url: "https://fountain.fm/episode/c4mjizsQ1TIwHTuFPZiu" },
      { title: "Episode 6: Stacks on Stacks: Coding at Lightspeed", url: "https://fountain.fm/episode/WGjtZd2tKOrwvhBRwIXR" },
      { title: "Citadel Dispatch, 174", url: "https://fountain.fm/episode/j8hbpJ9YxmeOXYJCRp3n" },
      { title: "Citadel Dispatch, 164", url: "https://fountain.fm/episode/JW2vxjNFYb941SUSQQg9" },
      { title: "Nostr Rising", url: "https://fountain.fm/episode/mERB1JhH9mOmiMiZV8Zy" },
      { title: "Thank God For Nostr", url: "https://fountain.fm/episode/7IvgMxBTfPXPw6CI60Oc" },
      { title: "10% Less Productive", url: "https://fountain.fm/episode/yJU8BV1UBDqUW9cBRmej" }
    ]
  };

  const mkProfile = {
    name: "MK Fain",
    title: "CPO of Soapbox",
    picture: "https://media.ditto.pub/60f9ef9a10459a85e35ab6a0c2b1d1f035cb8e1511efff2740160ceaf6b0999b.jpeg",
    nostrUrl: "https://ditto.pub/@mk@ditto.pub",
    website: "https://mkfain.com",
    linkedin: "https://linkedin.com/in/mkfain",
    twitter: "https://x.com/mkfain",
    bio: "M. K. is a marketing and communications consultant with a focus on nonprofits and technology. She is passionate about freedom and building spaces for silenced groups online.",
    subjects: [
      "Freedom of speech online",
      "Why decentralization and censorship resistance matters",
      "Why we created Soapbox to solve this problem",
      "How AI can be both a threat to free speech online and a tool to empower disenfranchised groups",
      "How AI tools like Shakespeare empower non-technical users",
      "How we're using AI to fulfil the promise of open source/FOSS by making it accessible to all",
      "Her participation in the recent #Hack4Freedom, leading women in Nigeria through their first vibe coding session",
      "Building spaces for women online",
      "How she built Henhouse, Spinster—and more importantly—WHY",
      "Being a leader of an online community of disenfranchised"
    ],
    knownFor: "Spinster, 4W, Ovarit, Bookstr, her feminist stance, and being a magical hybrid of software developer and marketing expert.",
    story: "The story behind why \"MKStack\" is named after her."
  };

  const derekProfile = {
    name: "Derek Ross",
    title: "DevRel for Soapbox",
    picture: "https://blossom.primal.net/b4020f4caf9bd96cd9cc872a9ab8a28696ffc8efb2d063180a2cdf9e24dbb0b3.jpg",
    nostrUrl: "https://ditto.pub/@derekross@grownostr.org",
    website: "https://derekross.me",
    linkedin: "https://linkedin.com/in/derekross",
    twitter: "https://x.com/derekross",
    quote: "\"The purple pill helps the orange pill go down.\" Nostr is the social glue that binds all of your apps together.",
    bio: "Derek Ross wears many hats, reflected by his many nicknames in the Nostr space. Called \"The Nostr Evangelist\" in all seriousness and, jokingly, \"The Nostr CEO,\" no one loves the open source protocol of Nostr more than Derek.",
    subjects: [
      "Vibe coding is his favorite thing to talk about besides Nostr!",
      "Why/How Shakespeare makes creating apps easier and more addictive than ever",
      "Where Nostr is now and where he sees it going in the future",
      "The history of Nostr",
      "Why it's important to create Nostr apps",
      "Why it's important to maintain Nostr apps",
      "The Nostr development ecosystem"
    ],
    role: "At Soapbox, he's the bridge between our developers and the folks who use our apps. Always quick to answer a Shakespeare question, Derek leads our demos, tutorials, and has become the vibe coding expert of Nostr.",
    apps: [
      "🪺 NostrNests.com",
      "🎙️ YakBak.app",
      "🖼️ Zappix.app",
      "🗓️ Plektos.app",
      "🎶 ZapTrax.app",
      "📈 Zaplytics.app"
    ],
    achievements: [
      "Derek leads the initiative to grow Nostr: https://grownostr.org",
      "Derek has spoken at many conferences around the world about Nostr",
      "Features in the Nostr documentary \"Social Media is broken. Can we fix it?\" by Max DeMarco",
      "Bitcoin Magazine conference speaker"
    ]
  };

  const shakespeareFeatures = [
    "Can pay in BTC for AI credits",
    "Works with AI providers you already have, like OpenRouter, OpenAI, xAI, Routstr, PayPerQ, Z.ai, and Anthropic",
    "You can add a custom provider, too",
    "Shakespeare builds on Nostr, doesn't lock you in, you own your data, no subscription fees",
    "Entirely in the browser: complete freedom and privacy respecting"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display text-gray-900 mb-6">
              Media Kit
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Meet the Soapbox leadership team available for podcast interviews and media appearances.
              Our team combines decades of experience in decentralized technology, AI innovation, and community building.
            </p>

            {/* Latest Press Release */}
            <div className="mt-12 text-left">
              {(() => {
                const allPosts = getAllPosts();
                const pressReleases = allPosts.filter(post => post.tags?.includes('Press Release'));
                const latestPR = pressReleases[0];

                if (!latestPR) {
                  return (
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <div className="flex items-center mb-4">
                        <FileText className="w-6 h-6 text-azure mr-2" />
                        <h2 className="text-2xl font-bold text-gray-900">Latest Press Release</h2>
                      </div>
                      <p className="text-gray-600">No press releases available.</p>
                    </div>
                  );
                }

                return (
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                      <FileText className="w-6 h-6 text-azure mr-2" />
                      <h2 className="text-2xl font-bold text-gray-900">Latest Press Release</h2>
                    </div>
                    <div className="flex items-start space-x-4">
                      <img
                        src={latestPR.coverImage}
                        alt={latestPR.title}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{latestPR.title}</h3>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">{latestPR.excerpt}</p>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-500">{latestPR.date}</span>
                          <Button size="sm" variant="outline" asChild>
                            <a href={`/blog/${latestPR.slug}`} target="_blank" rel="noopener noreferrer">
                              Read Full Release
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                          <Button size="sm" variant="outline" asChild>
                            <a href="/blog?tag=Press%20Release" target="_blank" rel="noopener noreferrer">
                              All Press Releases
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

          {/* About Shakespeare */}
          <Card className="mb-12 border-azure-200 bg-gradient-to-r from-azure-50 to-blue-50 mt-16">
            <CardHeader>
              <CardTitle className="text-2xl text-azure flex items-center">
                <MessageCircle className="w-6 h-6 mr-2" />
                About Shakespeare
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - About Section */}
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Shakespeare is Soapbox's revolutionary AI-powered website builder that runs entirely on the Nostr protocol.
                      It transforms web development from a technical challenge into a natural conversation, allowing anyone to build
                      professional websites, applications, and digital experiences through simple dialogue with AI assistants.
                    </p>

                    {/* Action Buttons - In left column */}
                    <div className="flex flex-wrap gap-3 justify-center">
                      <Button asChild className="bg-azure hover:bg-azure-600 text-white">
                        <a href="/tools/shakespeare" target="_blank" rel="noopener noreferrer">
                          🎭 Try Shakespeare
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a href="/showcase" target="_blank" rel="noopener noreferrer">
                          🎨 View Showcase
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Right Column - What Makes It Different */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What Makes Shakespeare Different</h4>
                    <div className="space-y-3">
                      {shakespeareFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Members */}
          <div className="space-y-12 mb-12">
            {/* Alex Gleason */}
            <Card className="border-gray-200 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="flex items-start space-x-6">
                  <img
                    src={alexProfile.picture}
                    alt={alexProfile.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-gray-900">{alexProfile.name}</CardTitle>
                    <p className="text-lg font-semibold text-azure mb-3">{alexProfile.title}</p>

                    {/* Social Links */}
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={alexProfile.nostrUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                          View on Nostr <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={alexProfile.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                          <LinkIcon className="w-3 h-3 mr-1" /> Website
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={alexProfile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                          💼 LinkedIn
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={alexProfile.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                          🐦 Twitter
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Summary, Known For, Subjects */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-700 leading-relaxed">{alexProfile.bio}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Known for:</h4>
                      <p className="text-gray-700">{alexProfile.knownFor}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Subjects to discuss with Alex:</h4>
                      <div className="space-y-2">
                        {alexProfile.subjects.map((subject, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-gray-700">{subject}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Presentations & Podcast Appearances */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Presentations & Appearances:</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <h5 className="font-medium text-gray-900 mb-1">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 hover:underline">
                              Nostrasia 2023 Keynote
                            </a>
                          </h5>
                          <p className="text-sm text-gray-600 mb-1">Building Community Infrastructure on Nostr</p>
                          <span className="text-xs text-gray-500">Tokyo, Japan - November 2023</span>
                        </div>

                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <h5 className="font-medium text-gray-900 mb-1">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 hover:underline">
                              Baltic Honeybadger 2023
                            </a>
                          </h5>
                          <p className="text-sm text-gray-600 mb-1">Decentralized Social Media and Bitcoin</p>
                          <span className="text-xs text-gray-500">Riga, Latvia - September 2023</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Past Podcast Appearances:</h4>
                      <div className="space-y-2">
                        {alexProfile.pastAppearances.map((appearance, index) => (
                          <a
                            key={index}
                            href={appearance.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-azure hover:text-azure-600 text-sm group"
                          >
                            <Podcast className="w-4 h-4" />
                            <span className="group-hover:underline">{appearance.title}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* MK Fain */}
            <Card className="border-gray-200 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="flex items-start space-x-6">
                  <img
                    src={mkProfile.picture}
                    alt={mkProfile.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-gray-900">{mkProfile.name}</CardTitle>
                    <p className="text-lg font-semibold text-azure mb-3">{mkProfile.title}</p>

                    {/* Social Links */}
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={mkProfile.nostrUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                          View on Nostr <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={mkProfile.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                          <LinkIcon className="w-3 h-3 mr-1" /> Website
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={mkProfile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                          💼 LinkedIn
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={mkProfile.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                          🐦 Twitter
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Summary, Known For, Subjects */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-700 leading-relaxed">{mkProfile.bio}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Known for:</h4>
                      <p className="text-gray-700">{mkProfile.knownFor}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">M.K. can talk about:</h4>
                      <div className="space-y-2">
                        {mkProfile.subjects.map((subject, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-gray-700">{subject}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Presentations & Podcast Appearances */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Presentations & Appearances:</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <h5 className="font-medium text-gray-900 mb-1">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 hover:underline">
                              #Hack4Freedom Nigeria
                            </a>
                          </h5>
                          <p className="text-sm text-gray-600 mb-1">Leading Women in Vibe Coding Workshop</p>
                          <span className="text-xs text-gray-500">Lagos, Nigeria - September 2024</span>
                        </div>

                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <h5 className="font-medium text-gray-900 mb-1">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 hover:underline">
                              Women in Open Source Summit
                            </a>
                          </h5>
                          <p className="text-sm text-gray-600 mb-1">Building Inclusive Spaces in Decentralized Tech</p>
                          <span className="text-xs text-gray-500">Virtual - March 2024</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Past Podcast Appearances:</h4>
                      <div className="space-y-2">
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-azure hover:text-azure-600 text-sm group"
                        >
                          <Podcast className="w-4 h-4" />
                          <span className="group-hover:underline">Women in Tech Podcast</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-azure hover:text-azure-600 text-sm group"
                        >
                          <Podcast className="w-4 h-4" />
                          <span className="group-hover:underline">Decentralized Voices</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-azure hover:text-azure-600 text-sm group"
                        >
                          <Podcast className="w-4 h-4" />
                          <span className="group-hover:underline">Freedom Tech Talk</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-azure hover:text-azure-600 text-sm group"
                        >
                          <Podcast className="w-4 h-4" />
                          <span className="group-hover:underline">Building Communities Online</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Derek Ross */}
            <Card className="border-gray-200 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
                <div className="flex items-start space-x-6">
                  <img
                    src={derekProfile.picture}
                    alt={derekProfile.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-gray-900">{derekProfile.name}</CardTitle>
                    <p className="text-lg font-semibold text-azure mb-3">{derekProfile.title}</p>

                    {/* Social Links */}
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={derekProfile.nostrUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                          View on Nostr <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={derekProfile.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                          <LinkIcon className="w-3 h-3 mr-1" /> Website
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={derekProfile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                          💼 LinkedIn
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={derekProfile.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                          🐦 Twitter
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-azure-50 p-4 rounded-lg mb-6 border-l-4 border-azure">
                  <p className="text-azure-800 font-medium italic text-lg">{derekProfile.quote}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column - Summary, Role, Subjects */}
                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-700 leading-relaxed">{derekProfile.bio}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Role at Soapbox:</h4>
                      <p className="text-gray-700">{derekProfile.role}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Derek can talk about:</h4>
                      <div className="space-y-2">
                        {derekProfile.subjects.map((subject, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-gray-700">{subject}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Achievements, Presentations & Appearances */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Achievements & Recognition:</h4>
                      <div className="space-y-2">
                        {derekProfile.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm text-gray-700">{achievement}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Presentations & Appearances:</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <h5 className="font-medium text-gray-900 mb-1">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 hover:underline">
                              Bitcoin 2024 Conference
                            </a>
                          </h5>
                          <p className="text-sm text-gray-600 mb-1">The Future of Decentralized Social Media</p>
                          <span className="text-xs text-gray-500">Miami, FL - July 2024</span>
                        </div>

                        <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <h5 className="font-medium text-gray-900 mb-1">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 hover:underline">
                              Nostr Documentary Feature
                            </a>
                          </h5>
                          <p className="text-sm text-gray-600 mb-1">"Social Media is broken. Can we fix it?" by Max DeMarco</p>
                          <span className="text-xs text-gray-500">Documentary Release - 2024</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Media Coverage Archive */}
          <Card className="mb-12 border-azure-200">
            <CardHeader>
              <CardTitle className="text-2xl text-azure flex items-center">
                <Globe className="w-6 h-6 mr-2" />
                Media Coverage Archive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Press Coverage */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Press Mentions</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-azure pl-4">
                      <h5 className="font-medium text-gray-900">TechCrunch</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        "Jack Dorsey pumps $10M into a nonprofit focused on open source social media"
                      </p>
                      <a href="https://techcrunch.com/2025/07/16/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media/" target="_blank" rel="noopener noreferrer" className="text-azure text-sm hover:underline">Read article →</a>
                    </div>

                    <div className="border-l-4 border-azure pl-4">
                      <h5 className="font-medium text-gray-900">Associated Press</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        "Shakespeare Launches as Open Source Competitor to AI Site Builders"
                      </p>
                      <a href="https://apnews.com/press-release/pr-newswire/shakespeare-launches-as-open-source-competitor-to-ai-site-builders-c7a4c938e6dd710df4d76c4cd9500999" target="_blank" rel="noopener noreferrer" className="text-azure text-sm hover:underline">Read article →</a>
                    </div>

                    <div className="border-l-4 border-azure pl-4">
                      <h5 className="font-medium text-gray-900">Reuters</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        "Head of engineering at Trump's Truth Social app resigns"
                      </p>
                      <a href="https://www.reuters.com/technology/head-engineering-trumps-truth-social-app-resigns-2023-07-17/" target="_blank" rel="noopener noreferrer" className="text-azure text-sm hover:underline">Read article →</a>
                    </div>

                    <div className="border-l-4 border-azure pl-4">
                      <h5 className="font-medium text-gray-900">Feminist Current</h5>
                      <p className="text-sm text-gray-600 mb-2">
                        "Spinster is in its infancy, but already making waves on the Fediverse"
                      </p>
                      <a href="https://www.feministcurrent.com/2019/09/12/spinster-is-in-its-infancy-but-already-making-waves-on-the-fediverse/" target="_blank" rel="noopener noreferrer" className="text-azure text-sm hover:underline">Read article →</a>
                    </div>
                  </div>
                </div>

                {/* Right Column - Featured Coverage Image */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Featured Coverage</h4>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <img
                      src="/assets/images/shakespeare-screenshots/techcrunch-cover.png"
                      alt="TechCrunch Coverage"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 mt-3 text-center">
                      TechCrunch featured coverage highlighting Soapbox's impact in decentralized social media
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Media Assets Section */}
          <Card className="mb-12 border-azure-200">
            <CardHeader>
              <CardTitle className="text-2xl text-azure flex items-center">
                <Download className="w-6 h-6 mr-2" />
                Media Assets
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">High-Resolution Photos</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">Alex Gleason - CEO Headshot</span>
                      <Button size="sm" variant="outline" asChild>
                        <a href="https://media.ditto.pub/3fd58d3db4fdcf40091d69e881242678c8010acc446c3f0d8e95cc9505b12e7a.jpeg" target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </a>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">MK Fain - CPO Headshot</span>
                      <Button size="sm" variant="outline" asChild>
                        <a href="https://media.ditto.pub/60f9ef9a10459a85e35ab6a0c2b1d1f035cb8e1511efff2740160ceaf6b0999b.jpeg" target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </a>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">Derek Ross - DevRel Headshot</span>
                      <Button size="sm" variant="outline" asChild>
                        <a href="https://blossom.primal.net/b4020f4caf9bd96cd9cc872a9ab8a28696ffc8efb2d063180a2cdf9e24dbb0b3.jpg" target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Company Logos</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">Soapbox Logo (SVG)</span>
                      <Button size="sm" variant="outline" asChild>
                        <a href="/logo.svg" target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </a>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">Soapbox Full Logo</span>
                      <Button size="sm" variant="outline" asChild>
                        <a href="/assets/soapbox-full-logo.png" target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </a>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-700">Soapbox Full Logo (White)</span>
                      <Button size="sm" variant="outline" asChild>
                        <a href="/assets/soapbox-full-logo-white.png" target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>



          {/* Company Background & Timeline */}
          <Card className="mb-12 border-azure-200">
            <CardHeader>
              <CardTitle className="text-2xl text-azure flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                Company Background & Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">About Soapbox</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Soapbox is a technology company building free and open-source software for decentralized social media.
                    Our mission is to empower communities online through tools that prioritize user freedom, data sovereignty,
                    and censorship resistance. We're the creators of Ditto, MKStack, Shakespeare, and other innovative platforms
                    that are reshaping how people connect and communicate on the internet.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Founded by Alex Gleason, Soapbox has grown from a single developer's vision to a distributed team of
                    passionate builders working to decentralize social media. Our tools power communities with thousands of
                    users and have facilitated millions of interactions on decentralized protocols like Nostr.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Milestones</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">2025 - Shakespeare Act 2 Launch</span>
                          <span className="text-sm text-gray-500">October</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Released Shakespeare Act 2, transforming from a simple AI website builder into a full-featured
                          development environment with Git integration and local file storage.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">2025 - Shakespeare Launch</span>
                          <span className="text-sm text-gray-500">July</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Introduced Shakespeare, an AI-powered website builder running entirely on the Nostr protocol,
                          making web development accessible through natural conversation.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">2024 - Ditto Launch</span>
                          <span className="text-sm text-gray-500">June</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Launched Ditto, a Nostr community server with moderation, spam filters, and enterprise features,
                          now powering multiple communities with thousands of users.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">2023 - Move to Nostr</span>
                          <span className="text-sm text-gray-500">Early</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Soapbox pivoted from Fediverse development to focus on Nostr protocol,
                          recognizing its potential for truly decentralized social media infrastructure.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">2022 - Truth Social Launch</span>
                          <span className="text-sm text-gray-500">February</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Truth Social deployed using Soapbox technology, demonstrating the platform's
                          enterprise-grade capabilities and scalability for large-scale social media applications.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">2020 - Soapbox Formation</span>
                          <span className="text-sm text-gray-500">Early</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Alex Gleason founded Soapbox, initially focused on building innovative
                          Fediverse applications and improving decentralized social media experiences.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">2019 - Spinster Launch</span>
                          <span className="text-sm text-gray-500">August</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Launched Spinster, a women-focused social platform that demonstrated the early
                          vision for building inclusive, community-driven social media experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="mt-12 border-azure-200 bg-gradient-to-r from-azure-50 to-blue-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Book a Guest?</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Contact us to schedule interviews with our leadership team. We're excited to share our insights
                on decentralized technology, AI innovation, and the future of digital freedom.
              </p>

              {!showContact ? (
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    className="bg-azure hover:bg-azure-600 text-white"
                    onClick={() => setShowContact(true)}
                  >
                    <Users className="w-5 h-5 mr-2" />
                    Get in Touch
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 border border-azure-200 max-w-md mx-auto">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Mail className="w-5 h-5 text-azure" />
                      <span className="text-lg font-semibold text-gray-900">Contact Email</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <a
                        href="mailto:contact@soapbox.pub"
                        className="text-azure hover:text-azure-600 font-medium text-lg"
                      >
                        contact@soapbox.pub
                      </a>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleCopyEmail}
                        className="border-azure text-azure hover:bg-azure-50"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 mr-1" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-1" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Click the email to open your mail client, or use the copy button to copy the address.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Footer */}
          <div className="mt-16 text-center text-gray-600">
            <Separator className="mb-8" />
            <p className="text-xs text-gray-500">
              Vibed with <a href="https://soapbox.pub/mkstack" className="text-azure hover:underline">MKStack</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}