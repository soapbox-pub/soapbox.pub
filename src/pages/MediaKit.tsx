import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ExternalLink, Users, Mail, Copy, Check, Download, Calendar, Globe, FileText, X, ChevronDown, Link2 } from "lucide-react";
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

interface MediaAsset {
  url: string;
  caption: string;
  credit?: string;
}

interface LogoAsset {
  name: string;
  preview: string;
  darkBg?: boolean;
  downloads: { label: string; url: string }[];
}

const logoAssets: LogoAsset[] = [
  {
    name: "Soapbox Logo",
    preview: "/logo.svg",
    downloads: [{ label: "SVG", url: "/logo.svg" }],
  },
  {
    name: "Soapbox Full Logo",
    preview: "/assets/soapbox-full-logo.png",
    downloads: [{ label: "PNG", url: "/assets/soapbox-full-logo.png" }],
  },
  {
    name: "Soapbox Full Logo (White)",
    preview: "/assets/soapbox-full-logo-white.png",
    darkBg: true,
    downloads: [{ label: "PNG", url: "/assets/soapbox-full-logo-white.png" }],
  },
  {
    name: "Ditto Logo",
    preview: "/ditto-logo-transparent.png",
    downloads: [{ label: "PNG", url: "/ditto-logo-transparent.png" }],
  },
  {
    name: "Agora Logo",
    preview: "/assets/media-kit/logos/agora-logo.svg",
    downloads: [
      { label: "SVG", url: "/assets/media-kit/logos/agora-logo.svg" },
      { label: "PNG", url: "/assets/media-kit/logos/agora-logo.png" },
    ],
  },
  {
    name: "Shakespeare Logo",
    preview: "/assets/logos/shakespeare-logo.png",
    downloads: [{ label: "PNG", url: "/assets/logos/shakespeare-logo.png" }],
  },
  {
    name: "Armada Logo",
    preview: "/assets/media-kit/logos/armada-logo.svg",
    downloads: [
      { label: "SVG", url: "/assets/media-kit/logos/armada-logo.svg" },
      { label: "PNG", url: "/assets/media-kit/logos/armada-logo.png" },
    ],
  },
  {
    name: "Armada Logo Mark",
    preview: "/assets/media-kit/logos/armada-logo-mark.svg",
    downloads: [{ label: "SVG", url: "/assets/media-kit/logos/armada-logo-mark.svg" }],
  },
];

interface ProductScreenshotGroup {
  id: string;
  name: string;
  desktop: MediaAsset[];
  mobile: MediaAsset[];
}

const productScreenshots: ProductScreenshotGroup[] = [
  {
    id: "ditto-screenshots",
    name: "Ditto",
    desktop: [
      { url: "/assets/media-kit/screenshots/ditto/desktop-1.webp", caption: "Ditto feed with custom galaxy theme (desktop)" },
      { url: "/assets/media-kit/screenshots/ditto/desktop-2.webp", caption: "Ditto profile page with custom theme (desktop)" },
    ],
    mobile: [
      { url: "/assets/media-kit/screenshots/ditto/1.webp", caption: "Ditto mobile app" },
      { url: "/assets/media-kit/screenshots/ditto/2.webp", caption: "Ditto mobile app" },
      { url: "/assets/media-kit/screenshots/ditto/3.webp", caption: "Ditto mobile app" },
      { url: "/assets/media-kit/screenshots/ditto/4.webp", caption: "Ditto mobile app" },
      { url: "/assets/media-kit/screenshots/ditto/5.webp", caption: "Ditto mobile app" },
      { url: "/assets/media-kit/screenshots/ditto/6.webp", caption: "Ditto mobile app" },
      { url: "/assets/media-kit/screenshots/ditto/7.webp", caption: "Ditto mobile app" },
      { url: "/assets/media-kit/screenshots/ditto/8.webp", caption: "Ditto mobile app" },
    ],
  },
  {
    id: "agora-screenshots",
    name: "Agora",
    desktop: [
      { url: "/assets/blog/agora-is-live/wallet-ui.png", caption: "Agora — built-in Bitcoin wallet" },
    ],
    mobile: [
      { url: "/assets/media-kit/screenshots/agora/1.webp", caption: "Agora mobile app" },
      { url: "/assets/media-kit/screenshots/agora/2.webp", caption: "Agora mobile app" },
      { url: "/assets/media-kit/screenshots/agora/3.webp", caption: "Agora mobile app" },
      { url: "/assets/media-kit/screenshots/agora/4.webp", caption: "Agora mobile app" },
      { url: "/assets/media-kit/screenshots/agora/5.webp", caption: "Agora mobile app" },
      { url: "/assets/media-kit/screenshots/agora/6.webp", caption: "Agora mobile app" },
      { url: "/assets/media-kit/screenshots/agora/7.webp", caption: "Agora mobile app" },
      { url: "/assets/media-kit/screenshots/agora/8.webp", caption: "Agora mobile app" },
      { url: "/assets/media-kit/screenshots/agora/9.webp", caption: "Agora mobile app" },
      { url: "/assets/media-kit/screenshots/agora/10.webp", caption: "Agora mobile app" },
    ],
  },
  {
    id: "armada-screenshots",
    name: "Armada",
    desktop: [
      { url: "/assets/blog/building-an-armada-voyage-to-encrypted-communities/armada-soapbox-community.png", caption: "Armada — encrypted communities" },
    ],
    mobile: [
      { url: "/assets/media-kit/screenshots/armada/1.webp", caption: "Armada mobile app" },
      { url: "/assets/media-kit/screenshots/armada/2.webp", caption: "Armada mobile app" },
      { url: "/assets/media-kit/screenshots/armada/3.webp", caption: "Armada mobile app" },
      { url: "/assets/media-kit/screenshots/armada/4.webp", caption: "Armada mobile app" },
      { url: "/assets/media-kit/screenshots/armada/5.webp", caption: "Armada mobile app" },
      { url: "/assets/media-kit/screenshots/armada/6.webp", caption: "Armada mobile app" },
      { url: "/assets/media-kit/screenshots/armada/7.webp", caption: "Armada mobile app" },
      { url: "/assets/media-kit/screenshots/armada/8.webp", caption: "Armada mobile app" },
      { url: "/assets/media-kit/screenshots/armada/9.webp", caption: "Armada mobile app" },
      { url: "/assets/media-kit/screenshots/armada/10.webp", caption: "Armada mobile app" },
    ],
  },
  {
    id: "shakespeare-screenshots",
    name: "Shakespeare",
    desktop: [
      { url: "/assets/toolbox/shakespeare-screenshot.png", caption: "Shakespeare — AI app builder (desktop)" },
      { url: "/assets/images/shakespeare-screenshots/edit-the-code-in-browser.png", caption: "Shakespeare — editing code in the browser" },
    ],
    mobile: [
      { url: "/assets/images/shakespeare-mobile.png", caption: "Shakespeare mobile" },
    ],
  },
];

interface TeamProfile {
  name: string;
  title: string;
  picture: string;
  picturePng: string;
  pictureJpg: string;
  nostrUrl: string;
  website?: string;
  linkedin?: string;
  twitter?: string;
  gitlab?: string;
  github?: string;
  bio: string;
  presentations?: Presentation[];
  quote?: string;
  role?: string;
}

/** Copies a deep link to a page section, for use next to section headings */
function SectionLinkButton({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}#${id}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy section link:', err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy link to this section"
      title="Copy link to this section"
      className="ml-2 text-gray-400 hover:text-azure transition-colors flex-shrink-0"
    >
      {copied ? <Check className="w-4 h-4 text-green-600" /> : <Link2 className="w-4 h-4" />}
    </button>
  );
}

/** Collapsible, linkable screenshot section for a single product */
function ProductScreenshotSection({
  product,
  onSelectImage,
}: {
  product: ProductScreenshotGroup;
  onSelectImage: (asset: MediaAsset) => void;
}) {
  // Open by default when deep-linked directly to this product
  const [open, setOpen] = useState(() => typeof window !== 'undefined' && window.location.hash === `#${product.id}`);

  const renderGrid = (assets: MediaAsset[], orientation: 'desktop' | 'mobile') => (
    <div className={orientation === 'desktop'
      ? "grid grid-cols-1 sm:grid-cols-2 gap-4"
      : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"}>
      {assets.map((asset, index) => (
        <div
          key={index}
          className={`group relative overflow-hidden rounded-lg border border-gray-200 bg-gray-100 cursor-pointer hover:shadow-lg transition-all duration-200 ${orientation === 'desktop' ? 'aspect-video' : 'aspect-[9/16]'}`}
          onClick={() => onSelectImage(asset)}
        >
          <img
            src={asset.url}
            alt={asset.caption}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
            <div className="bg-white bg-opacity-90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <Download className="w-4 h-4 text-gray-700" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const count = product.desktop.length + product.mobile.length;

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div id={product.id} className="border border-gray-200 rounded-lg scroll-mt-24">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <h4 className="text-lg font-semibold text-gray-900">{product.name}</h4>
            <SectionLinkButton id={product.id} />
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="text-gray-600">
              {count} screenshot{count === 1 ? '' : 's'}
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${open ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="px-4 pb-4 space-y-4">
            {product.desktop.length > 0 && (
              <div>
                <h5 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Desktop</h5>
                {renderGrid(product.desktop, 'desktop')}
              </div>
            )}
            {product.mobile.length > 0 && (
              <div>
                <h5 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Mobile</h5>
                {renderGrid(product.mobile, 'mobile')}
              </div>
            )}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}

export default function MediaKit() {
  const [showContact, setShowContact] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedImage, setSelectedImage] = useState<MediaAsset | null>(null);

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
      title: "CEO & Co-Founder",
      picture: "/assets/avatars/alex-headshot-new.png",
      picturePng: "/assets/avatars/alex-headshot-new.png",
      pictureJpg: "/assets/avatars/alex-headshot-new.jpg",
      nostrUrl: "https://ditto.pub/@alex@gleasonator.dev",
      website: "https://alexgleason.me",
      linkedin: "https://www.linkedin.com/in/alex-gleason-9743832b3/",
      gitlab: "https://gitlab.com/alexgleason",
      github: "https://github.com/alexgleason",
      bio: "Alex has more than decade of experience building social platforms, and is one of the foremost experts on decentralized social protocols, including Nostr, and the Fediverse. He was the head of engineering at Truth Social from 2022-23, and has built some of the largest communities on the decentralized web.",
      presentations: [
        {
          title: "The Mostr Bridge",
          description: "Nostr World: Asia",
          location: "Tokyo, Japan",
          date: "November 2023",
          url: "https://www.youtube.com/watch?v=075wrIJ1vHg",
          videoUrl: "https://www.youtube.com/embed/075wrIJ1vHg"
        }
      ]
    },
    {
      name: "MK Fain",
      title: "Chief Strategy Officer & Co-Founder",
      picture: "/assets/avatars/mk-headshot.png",
      picturePng: "/assets/avatars/mk-headshot.png",
      pictureJpg: "/assets/avatars/mk-headshot.jpg",
      nostrUrl: "https://ditto.pub/@mk@ditto.pub",
      website: "https://marykatefain.com/",
      linkedin: "https://www.linkedin.com/in/marykatefain/",
      twitter: "https://x.com/mkay_fain",
      gitlab: "https://gitlab.com/marykatefain",
      github: "https://github.com/marykatefain",
      bio: "M. K. is a passionate advocate for digital freedom with a track record for building spaces for silenced groups online. In 2019 she founded Spinster, the largest women's community on the decentralized web. She is the former Communications Director for the Women's Liberation Front, and her work has been profiled in outlets such as the Atlantic and Vice.",
      presentations: [
        {
          title: "A Dictator's Worst Nightmare: Digital Tools of Empowerment",
          description: "Nostr vs. the Fediverse",
          location: "",
          date: "September 2024",
          url: "https://www.youtube.com/watch?v=jD-CD8RC5UU",
          videoUrl: "https://www.youtube.com/embed/jD-CD8RC5UU?si=UK_-YxHe5sW-stXs"
        }
      ]
    },
    {
      name: "Derek Ross",
      title: "Developer Relations",
      picture: "/assets/avatars/derek-headshot.jpg",
      picturePng: "/assets/avatars/derek-headshot.png",
      pictureJpg: "/assets/avatars/derek-headshot.jpg",
      nostrUrl: "https://ditto.pub/@derekross@grownostr.org",
      website: "https://derekross.me",
      twitter: "https://x.com/GrowNostrOrg",
      gitlab: "https://gitlab.com/derekross",
      github: "https://github.com/derekross",
      bio: "Derek Ross wears many hats, reflected by his many nicknames in the Nostr space. Called \"The Nostr Evangelist\" in all seriousness and, jokingly, \"The Nostr CEO,\" no one loves the open source protocol of Nostr more than Derek. He is passionate about building the Nostr ecosystem through education, evangelism, and creating useful applications.",
      presentations: [
        {
          title: "Nostr for Beginners",
          description: "Nostr World: Riga",
          location: "Riga, Latvia",
          date: "2024",
          url: "https://www.youtube.com/watch?v=NVm_jGdwTjQ",
          videoUrl: "https://www.youtube.com/embed/NVm_jGdwTjQ"
        }
      ]
    }
  ];


  // Media assets for the photo grid
  const mediaAssets: MediaAsset[] = [
    { url: "/assets/media-kit/alex-presents-nairobi-btc++-june-2026.jpg", caption: "Alex Gleason presents at BTC++ Nairobi, June 2026", credit: "BTC++" },
    { url: "/assets/media-kit/alex-presents-nairobi-btc++-june-2026-2.jpg", caption: "Alex Gleason presents at BTC++ Nairobi, June 2026", credit: "BTC++" },
    { url: "/assets/media-kit/alex-presents-nairobi-btc++-june-2026-3.jpg", caption: "Alex Gleason presents at BTC++ Nairobi, June 2026", credit: "BTC++" },
    { url: "/assets/media-kit/alex-presents-agora-nairobi-btc++-june-2026-2.jpg", caption: "Alex Gleason presents Agora at BTC++ Nairobi, June 2026", credit: "BTC++" },
    { url: "/assets/media-kit/mk-presents-nairobi-btc++-june-2026.jpg", caption: "MK Fain presents at BTC++ Nairobi, June 2026", credit: "BTC++" },
    { url: "/assets/media-kit/sam-presents-nairobi-btc++-june-2026.jpg", caption: "Sam presents at BTC++ Nairobi, June 2026", credit: "BTC++" },
    { url: "/assets/media-kit/shantaram-presents-nairobi-btc++-june-2026.jpg", caption: "Shantaram presents at BTC++ Nairobi, June 2026", credit: "BTC++" },
    { url: "/assets/media-kit/alex-judge-hackathon-nairobi-btc++-june-2026-2.jpg", caption: "Alex Gleason judging the hackathon at BTC++ Nairobi, June 2026", credit: "BTC++" },
    { url: "/assets/media-kit/alex-judge-hackathon-nairobi-btc++-june-2026-3.jpg", caption: "Alex Gleason judging the hackathon at BTC++ Nairobi, June 2026", credit: "BTC++" },
    { url: "/assets/media-kit/alex-judge-sam-and-shantaram-hackathon-nairobi-btc++-june-2026.jpg", caption: "Alex Gleason, Sam, and Shantaram judging the hackathon at BTC++ Nairobi, June 2026", credit: "BTC++" },
    { url: "/assets/media-kit/alex-awards-hackathon-prize-nairobi-btc++-june-2026.jpg", caption: "Alex Gleason awards a hackathon prize at BTC++ Nairobi, June 2026", credit: "BTC++" },
    { url: "/assets/media-kit/alex-and-mk-meet-bitcoin-babies-kenya-june-2026-agora.jpg", caption: "Alex Gleason and MK Fain meet with Bitcoin Babies in Kenya, June 2026" },
    { url: "/assets/media-kit/mk-with-bitcoin-babies-merchants-kenya-june-2026-agora.jpg", caption: "MK Fain with Bitcoin Babies merchants in Kenya, June 2026" },
    { url: "/assets/media-kit/team-soapbox-wins-for-breakout-at-aos-hackathon.jpg", caption: "Team Soapbox wins the Breakout award at the AOS Hackathon" },
    { url: "/assets/media-kit/agora-presented-at-oslo-freedom-forum-by-leopoldo-lopez-may-2026.jpg", caption: "Agora presented at Oslo Freedom Forum by Leopoldo López, May 2026" },
    { url: "/assets/media-kit/working-on-agora-at-oslo-freedom-forum-may-2026.jpg", caption: "Working on Agora at Oslo Freedom Forum, May 2026" },
    { url: "/assets/press/satsconf-brazil-2025/shakespeare-workshop.jpeg", caption: "Shakespeare workshop at SatsConf Brazil, November 2025" },
    { url: "/assets/press/satsconf-brazil-2025/shakespare-workshop.jpeg", caption: "Attendees learning Shakespeare at SatsConf Brazil, November 2025" },
    { url: "/assets/press/satsconf-brazil-2025/alex-workshop-room.jpeg", caption: "Alex Gleason presenting at SatsConf Brazil, November 2025" },
    { url: "/assets/press/satsconf-brazil-2025/alex-sam-workshop.jpeg", caption: "Alex Gleason with workshop attendee at SatsConf Brazil, November 2025" },
    { url: "/assets/press/satsconf-brazil-2025/alex-workshop.jpeg", caption: "Alex Gleason teaching Shakespeare at SatsConf Brazil, November 2025" },
    { url: "https://image.nostr.build/d4c7963cf4c4b754cae889d9f66d39ca37619a23768748875d180425cf9b6167.jpg", caption: "Alex Gleason presents at Nostr World: Riga, 2024" },
    { url: "/assets/images/riga-team.png", caption: "Alex Gleason with Soapbox mentee Patrick DosReis, and Jack Dorsey (Nostr World: Riga, 2024)" },
    { url: "https://image.nostr.build/161516025ffe27e1eae1736e26f85742ad0517cf352f84b2e1a2cf4aa0c2979d.jpg", caption: "Alex Gleason presents on Nostrify at Nostr World: Riga, 2024" },
    { url: "https://image.nostr.build/ca0a9db642f6b1345a8a8893ffc364c28ccb17f91874eeb40583afe683719987.jpg", caption: "Alex Gleason with other Nostr developers" },
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

            {/* Section Navigation */}
            <nav aria-label="Page sections" className="flex flex-wrap justify-center gap-2">
              {[
                { id: "press-release", label: "Press Release" },
                { id: "media-coverage", label: "Media Coverage" },
                { id: "media-assets", label: "Photos" },
                { id: "logos", label: "Logos" },
                { id: "screenshots", label: "Screenshots" },
                { id: "company-background", label: "Company Timeline" },
                { id: "contact", label: "Contact" },
              ].map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="px-3 py-1.5 text-sm rounded-full border border-gray-200 text-gray-700 hover:border-azure hover:text-azure transition-colors"
                >
                  {section.label}
                </a>
              ))}
            </nav>

            {/* Latest Press Release */}
            <div id="press-release" className="mt-12 text-left scroll-mt-24">
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
                        <SectionLinkButton id="press-release" />
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
                      <SectionLinkButton id="press-release" />
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
                        <a href="/shakespeare" target="_blank" rel="noopener noreferrer">
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
            {teamProfiles.map((profile, index) => {
              const profileId = profile.name.toLowerCase().replace(/\s+/g, '-');
              return (
              <Card key={index} id={profileId} className="border-gray-200 overflow-hidden scroll-mt-24">
                <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
                  <div className="flex flex-col sm:flex-row items-start sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="flex items-start space-x-4 sm:space-x-0 w-full sm:w-auto">
                      <img
                        src={profile.picture}
                        alt={profile.name}
                        className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0"
                      />
                      <div className="flex-1 sm:hidden">
                        <CardTitle className="text-xl sm:text-2xl text-gray-900 flex items-center">
                          {profile.name}
                          <SectionLinkButton id={profileId} />
                        </CardTitle>
                        <p className="text-base sm:text-lg font-semibold text-azure">{profile.title}</p>
                      </div>
                    </div>

                    <div className="flex-1 w-full sm:w-auto">
                      {/* Desktop name/title */}
                      <div className="hidden sm:flex items-start justify-between mb-3">
                        <div>
                          <CardTitle className="text-2xl text-gray-900 flex items-center">
                            {profile.name}
                            <SectionLinkButton id={profileId} />
                          </CardTitle>
                          <p className="text-lg font-semibold text-azure">{profile.title}</p>
                        </div>
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
                    {/* Left Column - Bio + Links */}
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

                      {/* Social Links */}
                      <div className="flex flex-wrap gap-2">
                        {renderSocialLinks(profile)}
                      </div>

                      {/* Download Headshot */}
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="sm" variant="outline" className="border-azure text-azure hover:bg-azure-50 w-fit">
                            <Download className="w-4 h-4 mr-1" />
                            Download Headshot
                            <ChevronDown className="w-4 h-4 ml-1" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                          <DropdownMenuItem asChild>
                            <a href={profile.picturePng} download={`${profile.name.toLowerCase().replace(/\s+/g, '-')}-headshot.png`}>
                              <Download className="w-4 h-4 mr-2" />
                              PNG
                            </a>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <a href={profile.pictureJpg} download={`${profile.name.toLowerCase().replace(/\s+/g, '-')}-headshot.jpg`}>
                              <Download className="w-4 h-4 mr-2" />
                              JPG
                            </a>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {/* Right Column - Featured Video */}
                    <div className="space-y-6">
                      {profile.presentations && profile.presentations[0] && (
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Featured Appearance:</h4>
                          <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                            {profile.presentations[0].videoUrl && (
                              <div className="aspect-video bg-gray-200">
                                <iframe
                                  src={profile.presentations[0].videoUrl}
                                  title={profile.presentations[0].title}
                                  className="w-full h-full"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                            )}
                            <div className="p-2 sm:p-3">
                              <h5 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">
                                <a href={profile.presentations[0].url} target="_blank" rel="noopener noreferrer" className="text-azure hover:text-azure-600 hover:underline">
                                  {profile.presentations[0].title}
                                </a>
                              </h5>
                              <p className="text-xs sm:text-sm text-gray-600 mb-1">{profile.presentations[0].description}</p>
                              {profile.presentations[0].location && (
                                <span className="text-xs text-gray-500">{profile.presentations[0].location} - {profile.presentations[0].date}</span>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
              );
            })}
          </div>

          {/* Media Coverage Archive */}
          <Card id="media-coverage" className="mb-8 sm:mb-12 border-azure-200 scroll-mt-24">
            <CardHeader>
              <CardTitle className="text-2xl text-azure flex items-center">
                <Globe className="w-6 h-6 mr-2" />
                Media Coverage Archive
                <SectionLinkButton id="media-coverage" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Left Column - Featured Coverage */}
                <div>
                  <div className="space-y-4">
                    <a
                      href="https://techcrunch.com/2025/07/16/jack-dorsey-pumps-10m-into-a-nonprofit-focused-on-open-source-social-media/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <img
                        src="/assets/images/shakespeare-screenshots/techcrunch-cover.png"
                        alt="TechCrunch Coverage"
                        className="w-full h-auto rounded-lg shadow-md transition-all duration-200 group-hover:shadow-xl group-hover:scale-[1.02]"
                      />
                      <p className="text-xs sm:text-sm text-gray-600 mt-3 text-center leading-relaxed transition-colors group-hover:text-azure">
                        TechCrunch features Soapbox's open source social media work
                      </p>
                    </a>

                    <a
                      href="https://www.forbes.com/sites/digital-assets/2026/07/16/when-the-financial-system-cant-reach-people-in-crisis-bitcoin-can/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <img
                        src="/assets/media-kit/forbes-bitcoin-crisis-coverage.png"
                        alt="Forbes Coverage"
                        className="w-full h-auto rounded-lg shadow-md transition-all duration-200 group-hover:shadow-xl group-hover:scale-[1.02]"
                      />
                      <p className="text-xs sm:text-sm text-gray-600 mt-3 text-center leading-relaxed transition-colors group-hover:text-azure">
                        Forbes covers Bitcoin crisis relief powered by Agora
                      </p>
                    </a>
                  </div>
                </div>

                {/* Right Column - Press Coverage */}
                <div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-azure pl-3 sm:pl-4">
                      <h5 className="font-medium text-gray-900 text-sm sm:text-base">Forbes</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">
                        "When The Financial System Can't Reach People In Crisis, Bitcoin Can"
                      </p>
                      <a href="https://www.forbes.com/sites/digital-assets/2026/07/16/when-the-financial-system-cant-reach-people-in-crisis-bitcoin-can/" target="_blank" rel="noopener noreferrer" className="text-azure text-xs sm:text-sm hover:underline">Read article →</a>
                    </div>

                    <div className="border-l-4 border-azure pl-3 sm:pl-4">
                      <h5 className="font-medium text-gray-900 text-sm sm:text-base">Forbes</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">
                        "How Freedom Tech Is Pushing Back Against Digital Authoritarianism"
                      </p>
                      <a href="https://www.forbes.com/sites/digital-assets/2026/06/04/how-freedom-tech-is-pushing-back-against-digital-authoritarianism/" target="_blank" rel="noopener noreferrer" className="text-azure text-xs sm:text-sm hover:underline">Read article →</a>
                    </div>

                    <div className="border-l-4 border-azure pl-3 sm:pl-4">
                      <h5 className="font-medium text-gray-900 text-sm sm:text-base">Associated Press</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">
                        "World Liberty Congress Launches Agora at Oslo Freedom Forum to Power Global Support for Human Rights Movements"
                      </p>
                      <a href="https://apnews.com/press-release/pr-newswire/world-liberty-congress-launches-agora-at-oslo-freedom-forum-to-power-global-support-for-human-rights-movements-8ac37ef4848992ef07a67acb9c1ff370" target="_blank" rel="noopener noreferrer" className="text-azure text-xs sm:text-sm hover:underline">Read article →</a>
                    </div>

                    <div className="border-l-4 border-azure pl-3 sm:pl-4">
                      <h5 className="font-medium text-gray-900 text-sm sm:text-base">Nerds.xyz</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">
                        "Ditto wants to bring back the weird customizable internet people actually loved"
                      </p>
                      <a href="https://nerds.xyz/2026/05/ditto-decentralized-social-platform/" target="_blank" rel="noopener noreferrer" className="text-azure text-xs sm:text-sm hover:underline">Read article →</a>
                    </div>

                    <div className="border-l-4 border-azure pl-3 sm:pl-4">
                      <h5 className="font-medium text-gray-900 text-sm sm:text-base">USA Today</h5>
                      <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">
                        "Shakespeare AI: Alex Gleason's Open-Source Alternative for AI Web Building"
                      </p>
                      <a href="https://www.usatoday.com/story/special/contributor-content/2026/02/01/shakespeare-ai-alex-gleasons-open-source-alternative-for-ai-web-building/88464569007/" target="_blank" rel="noopener noreferrer" className="text-azure text-xs sm:text-sm hover:underline">Read article →</a>
                    </div>

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
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Media Assets Section */}
          <Card id="media-assets" className="mb-8 sm:mb-12 border-azure-200 scroll-mt-24">
            <CardHeader>
              <CardTitle className="text-2xl text-azure flex items-center">
                <Download className="w-6 h-6 mr-2" />
                Media Assets
                <SectionLinkButton id="media-assets" />
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

            </CardContent>
          </Card>

          {/* Logos Section */}
          <Card id="logos" className="mb-8 sm:mb-12 border-azure-200 scroll-mt-24">
            <CardHeader>
              <CardTitle className="text-2xl text-azure flex items-center">
                <FileText className="w-6 h-6 mr-2" />
                Logos
                <SectionLinkButton id="logos" />
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Official logos for Soapbox and our products, available for press use.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {logoAssets.map((logo, index) => (
                  <div key={index} className="flex flex-col rounded-lg border border-gray-200 overflow-hidden">
                    <div className={`h-28 flex items-center justify-center p-4 ${logo.darkBg ? 'bg-gray-900' : 'bg-gray-50'}`}>
                      <img
                        src={logo.preview}
                        alt={logo.name}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3">
                      <span className="text-sm text-gray-700 text-center">{logo.name}</span>
                      <div className="flex gap-2">
                        {logo.downloads.map((download) => (
                          <Button key={download.label} size="sm" variant="outline" asChild>
                            <a href={download.url} download>
                              <Download className="w-3 h-3 mr-1" />
                              {download.label}
                            </a>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Product Screenshots Section */}
          <Card id="screenshots" className="mb-8 sm:mb-12 border-azure-200 scroll-mt-24">
            <CardHeader>
              <CardTitle className="text-2xl text-azure flex items-center">
                <Globe className="w-6 h-6 mr-2" />
                Product Screenshots
                <SectionLinkButton id="screenshots" />
              </CardTitle>
              <p className="text-gray-600 mt-2">
                Screenshots of Ditto, Agora, Shakespeare, and Armada. Click any image to view larger version.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {productScreenshots.map((product) => (
                  <ProductScreenshotSection
                    key={product.id}
                    product={product}
                    onSelectImage={setSelectedImage}
                  />
                ))}
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
                    {selectedImage.credit && (
                      <p className="text-sm text-gray-500 text-left">Photo credit: {selectedImage.credit}</p>
                    )}
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
          <Card id="company-background" className="mb-8 sm:mb-12 border-azure-200 scroll-mt-24">
            <CardHeader>
              <CardTitle className="text-2xl text-azure flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                Company Background & Timeline
                <SectionLinkButton id="company-background" />
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
                          <span className="font-medium text-gray-900">2026 - Agora Launch</span>
                          <span className="text-sm text-gray-500">May</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          <a href="https://soapbox.pub/blog/agora-is-live" target="_blank" rel="noopener noreferrer" className="text-azure hover:underline">Agora launched at Oslo Freedom Forum</a>, a Bitcoin-based crowdfunding platform built in partnership with the World Liberty Congress,
                          enabling censorship-resistant, peer-to-peer fundraising for human rights movements around the world.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-azure rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-gray-900">2026 - Ditto Relaunch</span>
                          <span className="text-sm text-gray-500">March</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          Launched a <a href="https://soapbox.pub/blog/announcing-ditto-2" target="_blank" rel="noopener noreferrer" className="text-azure hover:underline">massive update to Ditto</a>, the world's first fully customizable, open source, and decentralized social platform.
                          Introduced deep personalization with themes, backgrounds, and fonts, plus support for infinite content types including articles, music, photos, livestreams, and more.
                        </p>
                      </div>
                    </div>

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

          {/* Contact Section */}
          <Card id="contact" className="mt-8 sm:mt-12 border-azure-200 bg-gradient-to-r from-azure-50 to-blue-50 scroll-mt-24">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                Ready to Book a Guest?
                <SectionLinkButton id="contact" />
              </h3>
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