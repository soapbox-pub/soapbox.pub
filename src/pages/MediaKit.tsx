import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Users, Podcast, MessageCircle, Mail, Copy, Check } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

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
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {/* Shakespeare Differentiators */}
          <Card className="mb-12 border-azure-200 bg-gradient-to-r from-azure-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-azure flex items-center">
                <MessageCircle className="w-6 h-6 mr-2" />
                What Makes Shakespeare Different
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {shakespeareFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Team Members */}
          <div className="space-y-12">
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
                    <p className="text-lg font-semibold text-azure mb-2">{alexProfile.title}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={alexProfile.nostrUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        View on Nostr <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">{alexProfile.bio}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Subjects to discuss with Alex:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {alexProfile.subjects.map((subject, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">{subject}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Known for:</h4>
                  <p className="text-gray-700">{alexProfile.knownFor}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Past Podcast Appearances:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
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
                    <p className="text-lg font-semibold text-azure mb-2">{mkProfile.title}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={mkProfile.nostrUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        View on Nostr <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">{mkProfile.bio}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">M.K. can talk about:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {mkProfile.subjects.map((subject, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">{subject}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Known for:</h4>
                  <p className="text-gray-700">{mkProfile.knownFor}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Special Story:</h4>
                  <p className="text-gray-700">{mkProfile.story}</p>
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
                    <p className="text-lg font-semibold text-azure mb-2">{derekProfile.title}</p>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={derekProfile.nostrUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        View on Nostr <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-azure-50 p-4 rounded-lg mb-6 border-l-4 border-azure">
                  <p className="text-azure-800 font-medium italic text-lg">{derekProfile.quote}</p>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{derekProfile.bio}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Role at Soapbox:</h4>
                  <p className="text-gray-700 mb-4">{derekProfile.role}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Subjects Derek can talk about:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {derekProfile.subjects.map((subject, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">{subject}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Apps created with vibe coding:</h4>
                  <div className="grid md:grid-cols-3 gap-2">
                    {derekProfile.apps.map((app, index) => (
                      <div key={index} className="bg-gray-50 p-2 rounded text-sm text-gray-700 text-center">
                        {app}
                      </div>
                    ))}
                  </div>
                </div>

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
              </CardContent>
            </Card>
          </div>

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