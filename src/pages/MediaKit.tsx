import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Users, Podcast, Mail, Copy, Check, Download, Calendar, Globe, FileText, X } from "lucide-react";
import { FaGithub, FaGitlab, FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";
import { useSEO } from "@/hooks/useSEO";
import { getAllPosts } from "@/lib/blog/utils";

interface Presentation {
  title: string;
  description: string;
  location: string;
  date: string;
  url: string;
  videoUrl?: string;
  imageUrl?: string;
}

interface TeamProfile {
  name: string;
  title: string;
  picture: string;
  nostrUrl: string;
  website?: string;
  linkedin?: string;
  twitter?: string;
  gitlab?: string;
  github?: string;
  bio: string;
  subjects: string[];
  knownFor: string;
  presentations?: Presentation[];
  pastAppearances: { title: string; url: string }[];
  quote?: string;
  role?: string;
  apps?: string[];
}

export default function MediaKit() {
  const [showContact, setShowContact] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string } | null>(null);

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

  const teamProfiles: TeamProfile[] = [
    {
      name: "Alex Gleason",
      title: "CEO of Soapbox",
      picture: "https://media.ditto.pub/2a20c96caf7652e67829d2ede27114c41ce408f32609f5c6b4e72ebd8bc31d6e.png",
      nostrUrl: "https://ditto.pub/@alex@gleasonator.dev",
      website: "https://alexgleason.me",
      linkedin: "https://www.linkedin.com/in/alex-gleason-9743832b3/",
      gitlab: "https://gitlab.com/alexgleason",
      github: "https://github.com/alexgleason",
      bio: "Alex has more than decade of experience building social platforms, and is one of the foremost experts on decentralized social protocols, including Nostr, and the Fediverse. He was the head of engineering at Truth Social from 2022-23, and has built some of the largest communities on the decentralized web.",
      subjects: [
        "What makes Shakespeare different from other AI web builders",
        "Integration with decentralized tech like Nostr and Bitcoin",
        "How does Nostr compare to the Fediverse/Mastodon or Bluesky?",
        "How does Shakespeare help Nostr win?",
        "The fake \"openness\" of OpenAI and what really open AI would look like",
        "Open source models like GLM and the competitive race with China",
        "The future of software development with AI (are junior devs over?)",
        "How Truth Social ended up built on open source software",
        "Devin Nunes' cow"
      ],
      knownFor: "Building bridges, Truth Social, the Fediverse, Nostr, Free Software extremism, being Vegan.",
      presentations: [
        {
          title: "The Mostr Bridge",
          description: "Nostr World: Asia",
          location: "Tokyo, Japan",
          date: "November 2023",
          url: "https://www.youtube.com/watch?v=075wrIJ1vHg",
          videoUrl: "https://www.youtube.com/embed/075wrIJ1vHg"
        },
        {
          title: "Building Communities on Nostr",
          description: "Nostr World: Riga",
          location: "Riga, Latvia",
          date: "August 2024",
          url: "https://www.youtube.com/watch?v=iZyqVGHjDGo&t=4s",
          videoUrl: "https://www.youtube.com/embed/iZyqVGHjDGo"
        },
        {
          title: "The State of Decentralized Social Media",
          description: "Oslo Freedom Forum",
          location: "Olso, Norway",
          date: "May 2025",
          url: "https://www.youtube.com/watch?v=QyBtU0cmIb0&list=PLl3t7CttfcxqdUsVTFI5Z6kVYwaHLbUlu&index=3"
        }
      ],
      pastAppearances: [
        { title: "Plebchain Radio 128", url: "https://fountain.fm/episode/c4mjizsQ1TIwHTuFPZiu" },
        { title: "Episode 6: Stacks on Stacks: Coding at Lightspeed", url: "https://fountain.fm/episode/WGjtZd2tKOrwvhBRwIXR" },
        { title: "Citadel Dispatch, 174", url: "https://fountain.fm/episode/j8hbpJ9YxmeOXYJCRp3n" },
        { title: "Citadel Dispatch, 164", url: "https://fountain.fm/episode/JW2vxjNFYb941SUSQQg9" },
        { title: "Nostr Rising", url: "https://fountain.fm/episode/mERB1JhH9mOmiMiZV8Zy" },
        { title: "Thank God For Nostr", url: "https://fountain.fm/episode/7IvgMxBTfPXPw6CI60Oc" },
        { title: "10% Less Productive", url: "https://fountain.fm/episode/yJU8BV1UBDqUW9cBRmej" }
      ]
    },
    {
      name: "MK Fain",
      title: "Chief Product Officer",
      picture: "https://lh3.googleusercontent.com/a/ACg8ocJQRPCTNTPSN1dhFCExCEFyxqLbjinQkbvkk-ObS_CWHcVtjuTx=s317-c-no",
      nostrUrl: "https://ditto.pub/@mk@ditto.pub",
      website: "https://marykatefain.com/",
      linkedin: "https://www.linkedin.com/in/marykatefain/",
      twitter: "https://x.com/mkay_fain",
      gitlab: "https://gitlab.com/marykatefain",
      github: "https://github.com/marykatefain",
      bio: "M. K. is a passionate advocate for digital freedom with a track record for building spaces for silenced groups online. In 2019 she founded Spinster, the largest women's community on the decentralized web. She is the former Communications Director for the Women's Liberation Front, and her work has been profiled in outlets such as the Atlantic and Vice.",
      subjects: [
        "Why free speech online is not a 'right wing' issue",
        "Why we created Soapbox to solve censorship and deplatforming",
        "How AI can be both a threat to freedom and a tool to empower disenfranchised groups",
        "Building spaces for women online: Spinster, 4w, Ovarit, and Henhouse",
        "Being the leader of an online community of disenfranchised groups"
      ],
      knownFor: "Spinster, 4W, Ovarit, Bookstr, Animal Rights Activism, WoLF, standing up for cancelled women.",
      presentations: [
        {
          title: "A Dictator's Worst Nightmare: Digital Tools of Empowerment",
          description: "Nostr vs. the Fediverse",
          location:"",
          date: "September 2024",
          url: "https://www.youtube.com/watch?v=jD-CD8RC5UU",
          videoUrl: "https://www.youtube.com/embed/jD-CD8RC5UU?si=UK_-YxHe5sW-stXs"

        },
        {
          title: "Sparking change: What free software can learn from successful social movements",
          description: "LibrePlanet 2019",
          location: "Boston, USA",
          date: "May 2019",
          url: "https://www.youtube.com/watch?v=C1rAHJ1Ox94&list=PLl3t7CttfcxrzuoeU9ukXnuf_RRmTJBfF&index=8",
          videoUrl: "https://www.youtube.com/embed/C1rAHJ1Ox94"
        }
      ],
      pastAppearances: [
        { title: "Identity Crisis", url: "https://www.youtube.com/watch?v=3XHRirlcI9M&list=PL_Ahot14Nv3YJDmdfTv6DQepQlsBprSCY&index=10" },
        { title: "Women's Declaration International'", url: "https://youtu.be/YXHQQZlSM1I?si=i1LfoAidiw5Iv9Ma" },
        { title: "The Mess We're In", url: "https://www.youtube.com/live/KGvn5gMhn7w?si=VAHSSJ-MesIOriKn" },
        { title: "Plebity", url: "https://www.youtube.com/watch?v=yunu6Owrvuo&list=PLl3t7CttfcxrzuoeU9ukXnuf_RRmTJBfF&index=6" }
      ]
    },
    {
      name: "Derek Ross",
      title: "Developer Relations",
      picture: "https://blossom.primal.net/b4020f4caf9bd96cd9cc872a9ab8a28696ffc8efb2d063180a2cdf9e24dbb0b3.jpg",
      nostrUrl: "https://ditto.pub/@derekross@grownostr.org",
      website: "https://derekross.me",
      twitter: "https://x.com/GrowNostrOrg",
      gitlab: "https://gitlab.com/derekross",
      github: "https://github.com/derekross",
      bio: "Derek Ross wears many hats, reflected by his many nicknames in the Nostr space. Called \"The Nostr Evangelist\" in all seriousness and, jokingly, \"The Nostr CEO,\" no one loves the open source protocol of Nostr more than Derek. He is passionate about building the Nostr ecosystem through education, evangelism, and creating useful applications.",
      subjects: [
        "Why decentralization matters",
        "Nostr 101, and how to get started",
        "Where Nostr is now and where he sees it going in the future",
        "How Nostr relates to Bitcoin Lightning network and permissionless money",
        "How Shakespeare makes creating Nostr apps easier than ever",
        "The challenges of building on an open protocol",
        "All things vibe coding",
      ],
      knownFor: "Being Unofficial Nostr CEO, vibe coding, NostrNests, YakBak, Zappix, Plektos, ZapTrax, Zaplytics.",
      presentations: [
        {
          title: "Nostr for Beginners",
          description: "Nostr World: Riga",
          location: "Riga, Latvia",
          date: "2024",
          url: "https://www.youtube.com/watch?v=NVm_jGdwTjQ",
          videoUrl: "https://www.youtube.com/embed/NVm_jGdwTjQ"
        },
        {
          title: "Open Communities in the Age of Control",
          description: "Imagine IF Conference",
          location: "Bitcoin Park",
          date: "2025",
          url: "https://www.youtube.com/watch?v=kbMfJtEHHLQ",
          videoUrl: "https://www.youtube.com/embed/kbMfJtEHHLQ?si=PBPPm6MUn1mj9MZ7"
        },
        {
          title: "Decentralizing Social Media",
          description: "The Bitcoin Conference",
          location: "Las Vegas, USA",
          date: "2025",
          url: "https://www.youtube.com/watch?v=WYIbTxlVS0Q",
          videoUrl: "https://www.youtube.com/embed/WYIbTxlVS0Q?si=ARkZrz_OMa3ggWec"
        },
        {
          title: "Nostr for Censorship Resistance",
          description: "BTCPrague",
          location: "Prague, Czech Republic",
          date: "2024",
          url: "https://www.youtube.com/watch?v=J_k3fQThy3s",
          videoUrl: "https://www.youtube.com/embed/J_k3fQThy3s?si=_LOsQRbA-T4xeTB"
        },
        {
          title: "Nostr: All Your Silos Are Broken",
          description: "BTCPrague",
          location: "Prague, Czech Republic",
          date: "2024",
          url: "https://www.youtube.com/watch?v=SSFVR5ZXOuA",
          videoUrl: "https://www.youtube.com/embed/SSFVR5ZXOuA?si=m2IgRbBF4itIQcEE"
        },
        {
          title: "Nostr for Builders",
          description: "The Bitcoin Conference",
          location: "Miami, USA",
          date: "2023",
          url: "https://www.youtube.com/watch?v=heEZSr8QLew",
          videoUrl: "https://www.youtube.com/embed/heEZSr8QLew?si=gZE-uf8uZMaCCyPZ"
        // },
        // {
        //   title: "\"Social Media is broken. Can we fix it?\"",
        //   description: "Nostr Documentary Feature by Max DeMarco",
        //   location: "Documentary Release",
        //   date: "2024",
        //   url: "https://www.youtube.com/watch?v=aA-jiiepOrE",
        //   videoUrl: "https://www.youtube.com/embed/aA-jiiepOrE"
        }
      ],
      pastAppearances: [
        { title: "Fractal Bitcoin", url: "https://www.youtube.com/watch?v=2cZtEVikH98&pp=ygULZGVyZWsgcm9zcyw%3D" },
        { title: "Bitcoin Made Simple", url: "https://www.youtube.com/watch?v=Qw00zFa-Boo&pp=ygULZGVyZWsgcm9zcyw%3D" },
        { title: "Bitcoin Infinity Show", url: "https://www.youtube.com/watch?v=aFvog4Vg1zk" },
        { title: "Plebchain Radio", url: "https://fountain.fm/episode/aDAFZeuYgAnqbPJRaUQh" },
        { title: "Soapbox Sessions", url: "https://sessions.soapbox.pub/" },
        { title: "Nostr Report", url: "https://www.youtube.com/watch?v=_Dk3NUSlmh8" },
        { title: "Your Bitcoin Story", url: "https://www.youtube.com/watch?v=qN65bgJOah8" },
        { title: "Brandon Gentile", url: "https://www.youtube.com/watch?v=VLK2zsfC510" },
        { title: "Ben Wehrman", url: "https://www.youtube.com/watch?v=_jrkUXDReqI&t=2s&pp=ygULZGVyZWsgcm9zcyw%3D" },
        { title: "Jack Starling", url: "https://www.youtube.com/watch?v=p4yi0qvhxL4&pp=ygURZGVyZWsgcm9zcywgbm9zdHI%3D" }
      ]
    }
  ];


  // Media assets for the photo grid
  const mediaAssets = [
    { url: "/assets/press/satsconf-brazil-2025/shakespeare-workshop.jpeg", caption: "Shakespeare workshop at SatsConf Brazil, November 2025" },
    { url: "/assets/press/satsconf-brazil-2025/shakespare-workshop.jpeg", caption: "Attendees learning Shakespeare at SatsConf Brazil, November 2025" },
    { url: "/assets/press/satsconf-brazil-2025/alex-workshop-room.jpeg", caption: "Alex Gleason presenting at SatsConf Brazil, November 2025" },
    { url: "/assets/press/satsconf-brazil-2025/alex-sam-workshop.jpeg", caption: "Alex Gleason with workshop attendee at SatsConf Brazil, November 2025" },
    { url: "/assets/press/satsconf-brazil-2025/alex-workshop.jpeg", caption: "Alex Gleason teaching Shakespeare at SatsConf Brazil, November 2025" },
    { url: "https://image.nostr.build/d4c7963cf4c4b754cae889d9f66d39ca37619a23768748875d180425cf9b6167.jpg", caption: "Alex Gleason presents at Nostr World: Riga, 2024" },
    { url: "https://soapbox.pub/assets/images/riga-team.png", caption: "Alex Gleason with Soapbox mentee Patrick DosReis, and Jack Dorsey (Nostr World: Riga, 2024)" },
    { url: "https://image.nostr.build/161516025ffe27e1eae1736e26f85742ad0517cf352f84b2e1a2cf4aa0c2979d.jpg", caption: "Alex Gleason presents on Nostrify at Nostr World: Riga, 2024" },
    { url: "https://media.ditto.pub/aea6a718ad43063e8a309745417b300920aa95c98c0db467ba36db05e0098e2d.jpeg", caption: "Alex Gleason with Jack Dorsey at Nostr World: Asia 2023" },
    { url: "https://image.nostr.build/ca0a9db642f6b1345a8a8893ffc364c28ccb17f91874eeb40583afe683719987.jpg", caption: "Alex Gleason with other Nostr developers" },
    { url: "https://media.ditto.pub/0c36e5dbd52ca9a0a6622099738d9cf59cecffb5a562e844933da4901224b14d.jpeg", caption: "Alex Gleason presents at Oslo Freedom Forum 2025" },
    { url: "https://media.ditto.pub/bc87c79273f4abf66d875459db787c4178fe3d4453c56fbefcc96da77d14167a.jpeg", caption: "Alex Gleason presents at Oslo Freedom Forum 2025" },
    { url: "https://media.ditto.pub/39eba1a6f79e42d8ce222210af8633a9e595e92f4f5264992bfa250a80a63f4f.jpeg", caption: "Alex Gleason presents at Oslo Freedom Forum 2025" },
    { url: "https://media.ditto.pub/568f1de8bc95db362155c5a650e6901dd8b641f1afbd5fbfa3e58277944209ee.jpeg", caption: "Alex Gleason presents at Oslo Freedom Forum 2025" },
    { url: "https://media.ditto.pub/fb91ddcdfd6624f11297877d4bda9a61b43636059cb07460589d83264e85077d.jpeg", caption: "Alex Gleason presents at Oslo Freedom Forum 2025" },
    { url: "https://media.ditto.pub/d27b4e613fc43827bfea62d53243c3f5afcb4d25ccf605e8965ed3b441a90c35.jpeg", caption: "Alex Gleason and Soapbox mentee Patrick DosReis" },
    { url: "https://media.ditto.pub/220e7248b2620393730a068e03fa63d6e99ab41a50cade3e75025a063f04e751.jpeg", caption: "Alex Gleason presents at Nostr World: Riga 2024" },
    { url: "https://media.ditto.pub/7ce60667a5c989608a49862e00f3f27e53bf5fe71cd407e957cd6b81f52bbae4.jpeg", caption: "Alex Gleason presents at Nostr World: Riga 2024" },
    { url: "https://media.ditto.pub/11c2e1e8c5280b51570f3bdc5011c7314f9bf2944164f23337f6992876f8fafb.jpeg", caption: "Alex Gleason presents at Nostr World: Riga 2024" },
    { url: "https://media.ditto.pub/da3f62a7cff0e126f818e1d07efb8680cf90f6cf3d66afe2490b7419480fc1ea.jpeg", caption: "Alex Gleason presents at Nostr World: Asia 2023" },
    { url: "https://media.ditto.pub/6887f699303cf71a66756c45971c1b7b109f3f2e13f3b9fe4ed17eba9dc96022.jpeg", caption: "Alex Gleason presents at Nostr World: Asia 2023" },
    { url: "https://media.ditto.pub/339ed7622fa6bf3ad78421a16a66c074ab0d55716c82001464191c90604d1bbb.jpeg", caption: "Alex Gleason presents at Nostr World: Asia 2023" },
  ];

  // Helper function to render social links with icons
  const renderSocialLinks = (profile: TeamProfile) => {
    const socialLinks: JSX.Element[] = [];

    if (profile.nostrUrl) {
      socialLinks.push(
        <Button key="nostr" variant="outline" size="sm" asChild>
          <a href={profile.nostrUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
            <span className="hidden sm:inline">View on Nostr</span>
            <ExternalLink className="h-3 w-3 sm:ml-1" />
          </a>
        </Button>
      );
    }

    if (profile.website) {
      socialLinks.push(
        <Button key="website" variant="outline" size="sm" asChild>
          <a href={profile.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
            <FaGlobe className="w-3 h-3 sm:mr-1" />
            <span className="hidden sm:inline ml-1">Website</span>
          </a>
        </Button>
      );
    }

    if (profile.linkedin) {
      socialLinks.push(
        <Button key="linkedin" variant="outline" size="sm" asChild>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
            <FaLinkedin className="w-3 h-3 sm:mr-1" />
            <span className="hidden sm:inline ml-1">LinkedIn</span>
          </a>
        </Button>
      );
    }

    if (profile.twitter) {
      socialLinks.push(
        <Button key="twitter" variant="outline" size="sm" asChild>
          <a href={profile.twitter} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
            <FaTwitter className="w-3 h-3 sm:mr-1" />
            <span className="hidden sm:inline ml-1">Twitter</span>
          </a>
        </Button>
      );
    }

    if (profile.github) {
      socialLinks.push(
        <Button key="github" variant="outline" size="sm" asChild>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
            <FaGithub className="w-3 h-3 sm:mr-1" />
            <span className="hidden sm:inline ml-1">GitHub</span>
          </a>
        </Button>
      );
    }

    if (profile.gitlab) {
      socialLinks.push(
        <Button key="gitlab" variant="outline" size="sm" asChild>
          <a href={profile.gitlab} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
            <FaGitlab className="w-3 h-3 sm:mr-1" />
            <span className="hidden sm:inline ml-1">GitLab</span>
          </a>
        </Button>
      );
    }

    return socialLinks;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-4 sm:mb-6">
              Media Kit
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Meet the Soapbox leadership team available for interviews, presentations, and media appearances.
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
                  <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-azure mr-2" />
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Latest Press Release</h2>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                      <img
                        src={latestPR.coverImage}
                        alt={latestPR.title}
                        className="hidden sm:block sm:w-48 sm:h-28 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{latestPR.title}</h3>
                        <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">{latestPR.excerpt}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                          <span className="text-sm text-gray-500">{latestPR.date}</span>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <a href={`/blog/${latestPR.slug}`} target="_blank" rel="noopener noreferrer">
                                <span className="hidden sm:inline">Read Full Release</span>
                                <span className="sm:hidden">Read Release</span>
                                <ExternalLink className="ml-1 h-3 w-3" />
                              </a>
                            </Button>
                            <Button size="sm" variant="outline" asChild>
                              <a href="/blog?tag=Press%20Release" target="_blank" rel="noopener noreferrer">
                                <span className="hidden sm:inline">All Press Releases</span>
                                <span className="sm:hidden">All Releases</span>
                                <ExternalLink className="ml-1 h-3 w-3" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">

          {/* About Shakespeare
          <Card className="mb-8 sm:mb-12 border-azure-200 bg-gradient-to-r from-azure-50 to-blue-50 mt-8 sm:mt-12 lg:mt-16">
            <CardHeader>
              <CardTitle className="text-2xl text-azure flex items-center">
                <MessageCircle className="w-6 h-6 mr-2" />
                About Shakespeare
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">

                  <div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Shakespeare is Soapbox's revolutionary AI-powered website builder that runs entirely on the Nostr protocol.
                      It transforms web development from a technical challenge into a natural conversation, allowing anyone to build
                      professional websites, applications, and digital experiences through simple dialogue with AI assistants.
                    </p>


                    <div className="flex flex-col sm:flex-row gap-3 sm:justify-center">
                      <Button asChild className="bg-azure hover:bg-azure-600 text-white w-full sm:w-auto">
                        <a href="/tools/shakespeare" target="_blank" rel="noopener noreferrer">
                          🎭 Try Shakespeare
                        </a>
                      </Button>
                      <Button variant="outline" asChild className="w-full sm:w-auto">
                        <a href="/showcase" target="_blank" rel="noopener noreferrer">
                          🎨 View Showcase
                        </a>
                      </Button>
                    </div>
                  </div>


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
          </Card> */}

          {/* Team Members */}
          <div className="space-y-8 sm:space-y-12 mb-8 sm:mb-12 pt-8 sm:pt-12">
            {teamProfiles.map((profile, index) => (
              <Card key={index} className="border-gray-200 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
                  <div className="flex flex-col sm:flex-row items-start sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-start space-x-4 sm:space-x-0 w-full sm:w-auto">
                      <img
                        src={profile.picture}
                        alt={profile.name}
                        className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0"
                      />
                      <div className="flex-1 sm:hidden">
                        <CardTitle className="text-xl sm:text-2xl text-gray-900">{profile.name}</CardTitle>
                        <p className="text-base sm:text-lg font-semibold text-azure">{profile.title}</p>
                      </div>
                      {/* Mobile Download Button */}
                      <Button size="sm" variant="outline" asChild className="border-azure text-azure hover:bg-azure-50 flex-shrink-0 sm:hidden">
                        <a href={profile.picture} target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex-1 w-full sm:w-auto">
                      {/* Desktop name/title and download button */}
                      <div className="hidden sm:flex items-start justify-between mb-3">
                        <div>
                          <CardTitle className="text-2xl text-gray-900">{profile.name}</CardTitle>
                          <p className="text-lg font-semibold text-azure">{profile.title}</p>
                        </div>
                        <Button size="sm" variant="outline" asChild className="border-azure text-azure hover:bg-azure-50 flex-shrink-0">
                          <a href={profile.picture} target="_blank" rel="noopener noreferrer">
                            <Download className="w-4 h-4 mr-1" />
                            Download Headshot
                          </a>
                        </Button>
                      </div>

                      {/* Social Links */}
                      <div className="flex flex-wrap gap-2">
                        {renderSocialLinks(profile)}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Special quote  */}
                  {profile.quote && (
                    <div className="bg-azure-50 p-4 rounded-lg mb-6 border-l-4 border-azure">
                      <p className="text-azure-800 font-medium italic text-lg">{profile.quote}</p>
                    </div>
                  )}

                  <div className="grid lg:grid-cols-[3fr_2fr] gap-6 lg:gap-8">
                    {/* Left Column - Summary, Known For, Subjects, Past Podcast Appearances */}
                    <div className="space-y-6">
                      <div>
                        <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
                      </div>

                      {/* Role  */}
                      {profile.role && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">Role at Soapbox:</h4>
                          <p className="text-gray-700">{profile.role}</p>
                        </div>
                      )}

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Known for:</h4>
                        <p className="text-gray-700">{profile.knownFor}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {profile.name.split(' ')[0]} can talk about:
                        </h4>
                        <div className="space-y-2">
                          {profile.subjects.map((subject, subjectIndex) => (
                            <div key={subjectIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-sm text-gray-700">{subject}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Past Podcast Appearances:</h4>
                        <div className="space-y-2">
                          {profile.pastAppearances.map((appearance, appearanceIndex) => (
                            <a
                              key={appearanceIndex}
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

                    {/* Right Column - Presentations & Appearances */}
                    <div className="space-y-6">
                      {profile.presentations && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Presentations & Appearances:</h4>
                          <div className="space-y-4">
                            {profile.presentations.map((presentation, presIndex) => (
                              <div key={presIndex} className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                                {/* Video/Image Section - Only show for first presentation */}
                                {presIndex === 0 && (presentation.videoUrl || presentation.imageUrl) && (
                                  <div className="relative">
                                    {presentation.videoUrl ? (
                                      <div
                                        className="relative cursor-pointer group"
                                        onClick={() => window.open(presentation.url, '_blank')}
                                      >
                                        <div className="aspect-video bg-gray-200">
                                          <iframe
                                            src={presentation.videoUrl}
                                            title={presentation.title}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                          />
                                        </div>
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                                          <div className="bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                                          </div>
                                        </div>
                                      </div>
                                    ) : presentation.imageUrl && (
                                      <div
                                        className="relative cursor-pointer group"
                                        onClick={() => window.open(presentation.url, '_blank')}
                                      >
                                        <div className="aspect-video bg-gray-200">
                                          <img
                                            src={presentation.imageUrl}
                                            alt={presentation.title}
                                            className="w-full h-full object-cover"
                                          />
                                        </div>
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                                          <div className="bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}

                                {/* Content Section */}
                                <div className="p-2 sm:p-3">
                                  <h5 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                                    <a href={presentation.url} target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 hover:underline">
                                      {presentation.title}
                                    </a>
                                  </h5>
                                  <p className="text-xs sm:text-sm text-gray-600 mb-1">{presentation.description}</p>
                                  <span className="text-xs text-gray-500">{presentation.location} - {presentation.date}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Media Coverage Archive */}
          <Card className="mb-8 sm:mb-12 border-azure-200">
            <CardHeader>
              <CardTitle className="text-2xl text-azure flex items-center">
                <Globe className="w-6 h-6 mr-2" />
                Media Coverage Archive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Left Column - Press Coverage */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Press Mentions</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-azure pl-3 sm:pl-4">
                      <h5 className="font-medium text-gray-900 text-sm sm:text-base">TechCrunch</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">
                        "Jack Dorsey pumps $10M into a nonprofit focused on open source social media"
                      </p>
                      <a href="https://techcrunch.com/2025/07/16/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media/" target="_blank" rel="noopener noreferrer" className="text-azure text-xs sm:text-sm hover:underline">Read article →</a>
                    </div>

                    <div className="border-l-4 border-azure pl-3 sm:pl-4">
                      <h5 className="font-medium text-gray-900 text-sm sm:text-base">Associated Press</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">
                        "Shakespeare Launches as Open Source Competitor to AI Site Builders"
                      </p>
                      <a href="https://apnews.com/press-release/pr-newswire/shakespeare-launches-as-open-source-competitor-to-ai-site-builders-c7a4c938e6dd710df4d76c4cd9500999" target="_blank" rel="noopener noreferrer" className="text-azure text-xs sm:text-sm hover:underline">Read article →</a>
                    </div>

                    <div className="border-l-4 border-azure pl-3 sm:pl-4">
                      <h5 className="font-medium text-gray-900 text-sm sm:text-base">Bitcoin Magazine</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">
                        "Are You Even a Bitcoiner If You’re Not on Nostr?"
                      </p>
                      <a href="https://bitcoinmagazine.com/conference/a-bitcoiner-must-be-on-nostr" target="_blank" rel="noopener noreferrer" className="text-azure text-xs sm:text-sm hover:underline">Read article →</a>
                    </div>

                    <div className="border-l-4 border-azure pl-3 sm:pl-4">
                      <h5 className="font-medium text-gray-900 text-sm sm:text-base">Reuters</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">
                        "Head of engineering at Trump's Truth Social app resigns"
                      </p>
                      <a href="https://www.reuters.com/technology/head-engineering-trumps-truth-social-app-resigns-2023-07-17/" target="_blank" rel="noopener noreferrer" className="text-azure text-xs sm:text-sm hover:underline">Read article →</a>
                    </div>

                    <div className="border-l-4 border-azure pl-3 sm:pl-4">
                      <h5 className="font-medium text-gray-900 text-sm sm:text-base">Feminist Current</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">
                        "Spinster is in its infancy, but already making waves on the Fediverse"
                      </p>
                      <a href="https://www.feministcurrent.com/2019/09/12/spinster-is-in-its-infancy-but-already-making-waves-on-the-fediverse/" target="_blank" rel="noopener noreferrer" className="text-azure text-xs sm:text-sm hover:underline">Read article →</a>
                    </div>
                  </div>
                </div>

                {/* Right Column - Featured Coverage Image */}
                <div className="order-first lg:order-last">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Featured Coverage</h4>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200">
                    <img
                      src="/assets/images/shakespeare-screenshots/techcrunch-cover.png"
                      alt="TechCrunch Coverage"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-xs sm:text-sm text-gray-600 mt-3 text-center leading-relaxed">
                      TechCrunch featured coverage highlighting Soapbox's impact in decentralized social media
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Media Assets Section */}
          <Card className="mb-8 sm:mb-12 border-azure-200">
            <CardHeader>
              <CardTitle className="text-2xl text-azure flex items-center">
                <Download className="w-6 h-6 mr-2" />
                Media Assets
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Soapbox photos available for download. Click any image to view larger version.
              </p>
            </CardHeader>
            <CardContent>
              {/* Photo Grid - 5x5 on desktop */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {mediaAssets.map((asset, index) => (
                  <div
                    key={index}
                    className="group relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-gray-100 cursor-pointer hover:shadow-lg transition-all duration-200"
                    onClick={() => setSelectedImage(asset)}
                  >
                    <img
                      src={asset.url}
                      alt={asset.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                    />
                    {/* Overlay with download icon */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                      <div className="bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <Download className="w-4 h-4 text-gray-700" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Company Logos Section */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Company Logos</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 space-y-2 sm:space-y-0">
                    <span className="text-sm text-gray-700">Soapbox Logo (SVG)</span>
                    <Button size="sm" variant="outline" asChild className="w-full sm:w-auto">
                      <a href="/logo.svg" target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 sm:mr-1" />
                        <span className="hidden sm:inline ml-1">Download</span>
                      </a>
                    </Button>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 space-y-2 sm:space-y-0">
                    <span className="text-sm text-gray-700">Soapbox Full Logo</span>
                    <Button size="sm" variant="outline" asChild className="w-full sm:w-auto">
                      <a href="/assets/soapbox-full-logo.png" target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 sm:mr-1" />
                        <span className="hidden sm:inline ml-1">Download</span>
                      </a>
                    </Button>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 space-y-2 sm:space-y-0 sm:col-span-2 lg:col-span-1">
                    <span className="text-sm text-gray-700">Soapbox Full Logo (White)</span>
                    <Button size="sm" variant="outline" asChild className="w-full sm:w-auto">
                      <a href="/assets/soapbox-full-logo-white.png" target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 sm:mr-1" />
                        <span className="hidden sm:inline ml-1">Download</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Image Lightbox Dialog */}
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl w-full h-auto max-h-[90vh] p-0 overflow-hidden">
              {selectedImage && (
                <>
                  <DialogHeader className="p-6 pb-0">
                    <DialogTitle className="text-left">{selectedImage.caption}</DialogTitle>
                  </DialogHeader>
                  <div className="relative">
                    <img
                      src={selectedImage.url}
                      alt={selectedImage.caption}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white" asChild>
                        <a
                          href={selectedImage.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          download
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/90 hover:bg-white"
                        onClick={() => setSelectedImage(null)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>



          {/* Company Background & Timeline */}
          <Card className="mb-8 sm:mb-12 border-azure-200">
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
                          Released <a href="https://soapbox.pub/blog/announcing-shakespeare-act-2" target="_blank" rel="noopener noreferrer" className="text-azure hover:underline">Shakespeare Act 2</a>, transforming from a simple AI website builder into a full-featured
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
                          Introduced <a href="https://soapbox.pub/blog/announcing-shakespeare/" target="_blank" rel="noopener noreferrer" className="text-azure hover:underline">Shakespeare</a>, an AI-powered website builder running entirely on the Nostr protocol,
                          making web development accessible through natural conversation.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">2025 - Soapbox Joins AOS</span>
                          <span className="text-sm text-gray-500">May</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Soapbox joined <a href="https://andotherstuff.org/" target="_blank" rel="noopener noreferrer" className="text-azure hover:underline">And Other Stuff (AOS)</a>, a collective of open source developers committed to building the Nostr ecosystem
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
                          Launched <a href="https://soapbox.pub/blog/announcing-ditto/" target="_blank" rel="noopener noreferrer" className="text-azure hover:underline">Ditto</a>, a Nostr community server with moderation, spam filters, and enterprise features,
                          now powering multiple communities with thousands of users.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">2023 - Build Mostr Bridge</span>
                          <span className="text-sm text-gray-500">July</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Built the <a href="https://soapbox.pub/blog/mostr-fediverse-nostr-bridge/" target="_blank" rel="noopener noreferrer" className="text-azure hover:underline">Mostr Bridge</a>, connecting Fediverse and Nostr protocols for seamless cross-platform communication.
                          This marked Soapbox's strategic pivot to focus on Nostr protocol, recognizing its potential for truly decentralized social media infrastructure.
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
                          <span className="text-sm text-gray-500">June</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Alex Gleason founded <a href="https://soapbox.pub/blog/announcing-soapbox-fe-v1.0/" target="_blank" rel="noopener noreferrer" className="text-azure hover:underline">Soapbox</a>, focused on building user-friendly and customizable
                          Fediverse frontend with a community-centered experience.
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
                          Launched <a href="https://spinster.xyz/" target="_blank" rel="noopener noreferrer" className="text-azure hover:underline">Spinster</a>, a women-focused social platform that demonstrated the early
                          vision for building censorship-resistant, community-driven, and decentralized social media.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cross Promotion Section */}
          <Card className="mt-8 sm:mt-12 border-violet-200 bg-gradient-to-r from-violet-50 to-purple-50">
            <CardContent className="p-6 sm:p-8">
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Amplify Your Message</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When you feature our team, you're not just getting expert insights—you're tapping into
                    a network that genuinely values great content. We're happy to share compelling interviews
                    and discussions with our engaged community across platforms.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">200k+ followers</span> across our team's social platforms
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Active Nostr community</span> of developers and builders
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-violet-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Ask about Shakespeare AI credits to try it for free!</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center lg:text-right">
                  <div className="bg-white rounded-lg p-4 sm:p-6 border border-violet-200 shadow-sm">
                    <img
                      src="/assets/avatars/derek-followers.png"
                      alt="Derek Ross follower count on Nostr"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="mt-8 sm:mt-12 border-azure-200 bg-gradient-to-r from-azure-50 to-blue-50">
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

        </div>
      </div>
    </Layout>
  );
}