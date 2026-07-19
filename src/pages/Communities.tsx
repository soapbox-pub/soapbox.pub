import { ExternalLink, Users, Globe, Heart, Code, BookOpen, Mic, Map, Zap, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

interface Community {
  name: string;
  description: string;
  url: string;
  screenshot: string;
  tools: string[];
  category: string;
  stats?: {
    users?: string;
    posts?: string;
    activity?: string;
  };
  features?: string[];
}

const communities: Community[] = [
  // Ditto Communities
  {
    name: "Ditto.pub",
    description: "The flagship Ditto community platform showcasing the full power of decentralized social networking. A thriving global community that proves you don't need big tech platforms to build meaningful connections. Users own their data, control their experience, and participate in a truly open social network free from algorithmic manipulation and corporate surveillance.",
    url: "https://ditto.pub",
    screenshot: "/assets/images/ditto/ditto-logo-transparent.png",
    tools: ["Ditto"],
    category: "Community Platform",
    stats: {
      users: "5,000+",
      posts: "50,000+",
      activity: "Daily"
    },
    features: ["NIP-05 Usernames", "Lightning Zaps", "Custom Themes", "Built-in Relay"]
  },
  {
    name: "Henhouse.social",
    description: "The first Nostr community specifically designed for women, creating a safe and supportive space for thoughtful discussion. Breaking free from male-dominated tech platforms, Henhouse demonstrates how decentralized communities can serve specific demographics without corporate gatekeepers deciding who gets to participate or what conversations are allowed.",
    url: "https://henhouse.social",
    screenshot: "/assets/images/henhouse-logo-white.png",
    tools: ["Ditto"],
    category: "Women's Community",
    stats: {
      users: "1,200+",
      activity: "Curated"
    },
    features: ["Application-based Membership", "Women-focused Moderation", "Safe Space Policies"]
  },
  {
    name: "Cobrafuma.com",
    description: "Uma comunidade brasileira florescente que oferece uma alternativa descentralizada às redes sociais corporativas. Liberdade de expressão sem censura algorítmica, onde os usuários brasileiros podem se conectar e compartilhar sem medo de ter suas contas suspensas por decisões arbitrárias de empresas estrangeiras.",
    url: "https://cobrafuma.com",
    screenshot: "/assets/images/ditto/cobrafuma-padded.png",
    tools: ["Ditto"],
    category: "Regional Community",
    stats: {
      activity: "Português"
    },
    features: ["Brazilian Portuguese", "Local Culture Focus", "Regional Content"]
  },
  {
    name: "Seewaan.com",
    description: "مشروع تواصل اجتماعي تطوعي بدون إزعاج الإعلانات والشركات. شبكة عربية حرة تمكن المستخدمين من التواصل دون رقابة الشركات الكبرى أو التلاعب بالخوارزميات. بديل حقيقي للمنصات المركزية التي تسيطر على المحتوى العربي.",
    url: "https://seewaan.com",
    screenshot: "/assets/images/ditto/seewaan-logo.png",
    tools: ["Ditto"],
    category: "Arabic Community",
    stats: {
      activity: "العربية"
    },
    features: ["Arabic Language", "Cultural Content", "Regional Focus"]
  },
  {
    name: "Cvrkut.com",
    description: "Microblogging društvena mreža koja tvojim mislima daje glas. Srpska zajednica koja se oslobađa od dominacije velikih tehnoloških kompanija, omogućavajući korisnicima da se povežu na srpskom jeziku bez straha od cenzure ili manipulacije algoritma.",
    url: "https://cvrkut.com",
    screenshot: "/assets/images/ditto/cvrkut-logo.png",
    tools: ["Ditto"],
    category: "Regional Community",
    stats: {
      activity: "Srpski"
    },
    features: ["Serbian Language", "Local Community", "Cultural Focus"]
  },
  {
    name: "Gleasonator.dev",
    description: "A cutting-edge testing ground for the latest Ditto features, serving developers and early adopters who want to experience the future of decentralized social networking. Free from the constraints of corporate development cycles, this community showcases rapid innovation and community-driven feature development.",
    url: "https://gleasonator.dev",
    screenshot: "/assets/images/ditto/gleasonator-logo.png",
    tools: ["Ditto"],
    category: "Developer Community",
    stats: {
      activity: "Beta Testing"
    },
    features: ["Latest Features", "Developer Focus", "Experimental"]
  },
  
  // MKStack Communities
  {
    name: "Bookstr",
    description: "A decentralized platform for book lovers that challenges Amazon's Goodreads monopoly. Readers can discover, review, and discuss books without corporate algorithms deciding what they see or targeted advertising based on their reading habits. A community-owned alternative that puts book lovers first, not profit margins.",
    url: "https://bookstr.app",
    screenshot: "/assets/mkstack-apps/mkstack-bookstr-demo.png",
    tools: ["MKStack"],
    category: "Creative Platform",
    stats: {
      activity: "Book Community"
    },
    features: ["Book Reviews", "Reading Lists", "Community Discussions", "No Corporate Tracking"]
  },
  {
    name: "Blobbi",
    description: "A creative platform for artists and designers that breaks free from Instagram's algorithmic control and Facebook's data harvesting. Artists can showcase their work, connect with other creators, and build genuine audiences without shadow banning or pay-to-play promotion schemes that plague corporate platforms.",
    url: "https://blobbi.app",
    screenshot: "/assets/mkstack-apps/blobbi-screenshot.png",
    tools: ["MKStack"],
    category: "Creative Platform",
    stats: {
      activity: "Art Community"
    },
    features: ["Artist Portfolios", "Creative Networking", "Algorithmic Freedom"]
  },
  {
    name: "Treasures",
    description: "A modern geocaching platform that liberates the hobby from the corporate monopoly of Geocaching.com. No premium subscriptions, no artificial limitations, no corporate control over outdoor exploration. Treasures proves that community-driven platforms can serve niche hobbies better than profit-focused corporations.",
    url: "https://treasures.app",
    screenshot: "/assets/blog/announcing-treasures/treasures-homepage.png",
    tools: ["MKStack"],
    category: "Outdoor Community",
    stats: {
      activity: "Geocaching"
    },
    features: ["Free Geocaching", "Community Maps", "No Premium Barriers", "Open Source"]
  },
  {
    name: "Plektos",
    description: "A decentralized social platform that prioritizes genuine human connections over engagement metrics and advertising revenue. Users can build meaningful relationships without algorithmic interference, data mining, or the attention economy manipulation that defines corporate social media.",
    url: "https://plektos.app",
    screenshot: "/assets/mkstack-apps/plektos-screenshot.png",
    tools: ["MKStack"],
    category: "Social Platform",
    stats: {
      activity: "Social Network"
    },
    features: ["Authentic Connections", "No Algorithms", "Privacy First"]
  },
  
  // Additional Communities
  {
    name: "Bitmap",
    description: "A decentralized platform for digital artists and NFT creators that challenges the centralized control of platforms like OpenSea and Foundation. Artists maintain true ownership of their work and communities without corporate middlemen taking cuts or controlling access to markets.",
    url: "https://bitmap.community",
    screenshot: "/assets/images/ditto/ditto-logo-transparent.png", // Placeholder - update when available
    tools: ["MKStack"],
    category: "Creative Platform",
    stats: {
      activity: "Digital Art"
    },
    features: ["NFT Creation", "Artist Communities", "Decentralized Marketplace"]
  },
  {
    name: "CodeOrange",
    description: "A developer community platform that offers an alternative to corporate-controlled coding platforms like GitHub's social features and LinkedIn's professional networking. Developers can share projects, collaborate, and build professional networks without surveillance capitalism and data harvesting.",
    url: "https://codeorange.dev",
    screenshot: "/assets/images/ditto/ditto-logo-transparent.png", // Placeholder - update when available
    tools: ["Ditto"],
    category: "Developer Community",
    stats: {
      activity: "Developer Network"
    },
    features: ["Code Sharing", "Developer Networking", "Project Collaboration"]
  },
  {
    name: "Podstr",
    description: "A decentralized podcasting platform that breaks free from Spotify's and Apple's control over podcast distribution and discovery. Podcasters can reach audiences directly without algorithmic suppression, demonetization threats, or corporate gatekeepers deciding which voices get heard.",
    url: "https://podstr.app",
    screenshot: "/assets/images/ditto/ditto-logo-transparent.png", // Placeholder - update when available
    tools: ["MKStack"],
    category: "Media Platform",
    stats: {
      activity: "Podcast Community"
    },
    features: ["Podcast Hosting", "Direct Distribution", "Creator Control", "No Corporate Censorship"]
  }
];

const toolColors: Record<string, { bg: string; text: string; icon: React.ReactNode }> = {
  "Ditto": { 
    bg: "bg-violet-100", 
    text: "text-violet-700",
    icon: <Users className="h-3 w-3" />
  },
  "MKStack": { 
    bg: "bg-blue-100", 
    text: "text-blue-700",
    icon: <Code className="h-3 w-3" />
  },
  "Shakespeare": { 
    bg: "bg-purple-100", 
    text: "text-purple-700",
    icon: <Zap className="h-3 w-3" />
  },
  "Nostrify": { 
    bg: "bg-emerald-100", 
    text: "text-emerald-700",
    icon: <Globe className="h-3 w-3" />
  },
  "Stacks": { 
    bg: "bg-orange-100", 
    text: "text-orange-700",
    icon: <Palette className="h-3 w-3" />
  }
};

const categoryIcons: Record<string, React.ReactNode> = {
  "Community Platform": <Users className="h-5 w-5" />,
  "Women's Community": <Heart className="h-5 w-5" />,
  "Regional Community": <Globe className="h-5 w-5" />,
  "Arabic Community": <Globe className="h-5 w-5" />,
  "Developer Community": <Code className="h-5 w-5" />,
  "Creative Platform": <Palette className="h-5 w-5" />,
  "Social Platform": <Users className="h-5 w-5" />,
  "Outdoor Community": <Map className="h-5 w-5" />,
  "Media Platform": <Mic className="h-5 w-5" />
};

export default function Communities() {
  // Set custom SEO for Communities page
  useSEO({
    title: 'Communities - Decentralized Platforms Built with Soapbox Tools | Fighting Big Tech',
    description: 'Discover thriving decentralized communities built with Soapbox tools. From Ditto social platforms to MKStack creative communities, see how open source alternatives are challenging big tech monopolies.',
    type: 'website',
    image: '/og-image-v2.png',
    keywords: 'decentralized communities, soapbox communities, ditto platforms, mkstack apps, open source alternatives, fight big tech, community platforms, nostr communities',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Soapbox Communities",
      "description": "Decentralized communities and platforms built with Soapbox tools",
      "author": {
        "@type": "Organization",
        "name": "Soapbox"
      }
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-azure-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="bg-azure-100 text-azure-700 border-azure-200 mb-6">
              🌍 Fighting Centralization
            </Badge>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Community{" "}
              <span className="bg-gradient-to-r from-azure to-blue-600 bg-clip-text text-transparent">
                Platforms
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Real communities fighting centralization and creating <a href="/blog/free-software-free-societies" className="text-azure hover:underline">open source</a> alternatives 
              to big tech platforms. Built by the community, owned by the community.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-azure">15+</div>
                <div className="text-gray-600">Active Platforms</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">25,000+</div>
                <div className="text-gray-600">Total Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-violet-600">500,000+</div>
                <div className="text-gray-600">Posts Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:border-azure-200 bg-white">
                {/* Screenshot/Logo */}
                <div className="aspect-video overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-50 to-gray-100">
                  <img 
                    src={community.screenshot} 
                    alt={`${community.name} screenshot`}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-azure transition-colors">
                        {community.name}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        {categoryIcons[community.category]}
                        <span>{community.category}</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="shrink-0 hover:bg-azure hover:text-white hover:border-azure"
                    >
                      <a href={community.url} target="_blank" rel="noopener noreferrer">
                        Visit
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                  
                  {/* Tools Used */}
                  <div className="flex flex-wrap gap-2">
                    {community.tools.map((tool) => (
                      <Badge 
                        key={tool} 
                        variant="secondary" 
                        className={`${toolColors[tool]?.bg} ${toolColors[tool]?.text} border-0 flex items-center gap-1`}
                      >
                        {toolColors[tool]?.icon}
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  {/* Stats */}
                  {community.stats && (
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      {community.stats.users && (
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {community.stats.users}
                        </div>
                      )}
                      {community.stats.posts && (
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          {community.stats.posts}
                        </div>
                      )}
                      {community.stats.activity && (
                        <div className="flex items-center gap-1">
                          <Zap className="h-3 w-3" />
                          {community.stats.activity}
                        </div>
                      )}
                    </div>
                  )}
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {community.description}
                  </p>

                  {/* Features */}
                  {community.features && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-900">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {community.features.map((feature, idx) => (
                          feature === "Lightning Zaps" ? (
                            <a key={idx} href="/blog/zapping-101">
                              <Badge variant="outline" className="text-xs hover:bg-yellow-50 hover:border-yellow-400 cursor-pointer">
                                {feature}
                              </Badge>
                            </a>
                          ) : (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-azure to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Ready to Build Your Community?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join the movement of independent communities powered by Soapbox tools. 
            Break free from big tech, own your data, and build something meaningful.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-azure hover:bg-gray-100" asChild>
              <a href="/tools">
                Explore Tools
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-azure" asChild>
              <a href="/showcase">
                View Showcase
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Open Source
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Community Owned
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Decentralized
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}