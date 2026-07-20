/**
 * /tools/shakespeare — Shakespeare product page on Soapbox.pub.
 *
 * Redesigned (issue #3) to match the design language of the newer
 * product pages (Agora, Armada, Ditto), then rebranded to the
 * Shakespeare theater-masks icon palette:
 *
 *  - Sky blue #429adf (primary UI accent), gold #fcc21b (secondary),
 *    curtain red-orange #f45125 (energetic highlight, used sparingly),
 *    deep navy #193d51 (dark "stage" sections), bronze #9b7515
 *    (eyebrow labels on light sections). See `shakespeare.*` in
 *    tailwind.config.ts.
 *  - Theatrical dark sections: deep navy gradient stages with gold/blue
 *    spotlight beams, a soft dot texture, and a scalloped curtain
 *    valance with gold fringe over the final "curtain call" CTA.
 *  - Clean white base with warm-neutral contrast sections (#faf8f4 /
 *    #f5f1eb) and a consistent `py-20 md:py-28` section rhythm,
 *    matching Agora/Armada structure.
 *  - Big gold primary CTAs on navy — high contrast and on-brand.
 *
 * All original content and functionality is preserved: the RotatingText
 * hero, app showcase, templates section, features, resources,
 * ShakespeareMailchimpForm, SupportCard, EditWithShakespeareButton,
 * and all SEO structured data.
 */

import { ArrowRight, Download, Upload, GitBranch, Code, FileText, Shield, Palette, Monitor, PlayCircle, ExternalLink, Star, CheckCircle, Globe, HardDrive, Cpu, Users, Settings, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SupportCard } from "@/components/SupportCard";
import { ShakespeareMailchimpForm } from "@/components/ShakespeareMailchimpForm";
import { RotatingText } from "@/components/RotatingText";
import { AppShowcaseCard } from "@/components/AppShowcaseCard";
import { EditWithShakespeareButton } from "@/components/EditWithShakespeareButton";
import { useSEO } from "@/hooks/useSEO";
import { useAppSubmissions } from "@/hooks/useAppSubmissions";
import { getAllPostsIncludingResources } from "@/lib/blog/utils";
import { shuffleArray } from "@/lib/utils";

/** Deep navy stage gradient used by the hero and final CTA sections. */
const STAGE_BG = 'linear-gradient(180deg, #081824 0%, #0c2230 55%, #122e3e 100%)';

/** Lifted navy surface for cards sitting on the dark stage sections. */
const STAGE_SURFACE = '#122e3e';

/**
 * Scalloped theater-curtain valance in the brand's curtain red-orange
 * with a gold fringe. Sits at the top of dark sections, hanging down.
 */
function CurtainValance({ className = "" }: { className?: string }) {
  // Eight swags across a 1440px viewBox (one every 180px).
  const swagsDown = "Q1350,86 1260,18 Q1170,86 1080,18 Q990,86 900,18 Q810,86 720,18 Q630,86 540,18 Q450,86 360,18 Q270,86 180,18 Q90,86 0,18";
  const swagsShallow = "Q1350,58 1260,8 Q1170,58 1080,8 Q990,58 900,8 Q810,58 720,8 Q630,58 540,8 Q450,58 360,8 Q270,58 180,8 Q90,58 0,8";
  const fringe = "M0,18 Q90,86 180,18 Q270,86 360,18 Q450,86 540,18 Q630,86 720,18 Q810,86 900,18 Q990,86 1080,18 Q1170,86 1260,18 Q1350,86 1440,18";
  return (
    <svg
      className={className}
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Rear fold layer (darker red, shallower swags) */}
      <path d={`M0,0 H1440 V8 ${swagsShallow} Z`} fill="#d63f16" />
      {/* Front valance (curtain red-orange) */}
      <path d={`M0,0 H1440 V18 ${swagsDown} Z`} fill="#f45125" />
      {/* Gold fringe along the scalloped edge */}
      <path d={fringe} fill="none" stroke="#fcc21b" strokeWidth="3" />
    </svg>
  );
}

/** Gold + blue spotlight beams falling from the top of a dark stage. */
function SpotlightBeams() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'conic-gradient(from 175deg at 22% -10%, rgba(252, 194, 27, 0.13) 0deg, transparent 26deg), conic-gradient(from 185deg at 78% -10%, rgba(66, 154, 223, 0.15) 0deg, transparent 26deg)',
      }}
    />
  );
}

/** Faint dot texture giving the navy stage some depth. */
function StageTexture() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        backgroundSize: '26px 26px',
      }}
    />
  );
}

export default function Shakespeare() {
  const { data: submissions = [], isLoading: isLoadingSubmissions } = useAppSubmissions();

  // Get featured apps and top 6 for showcase
  const featuredApps = submissions.filter(app => app.isFeatured && !app.isHidden);
  const approvedApps = submissions.filter(app => app.isApproved && !app.isFeatured && !app.isHidden);
  const showcaseApps = [...featuredApps, ...approvedApps].slice(0, 6);

  // Get template apps for the template section
  const templateApps = submissions.filter(app =>
    app.appTags.includes('Template') &&
    !app.isHidden &&
    app.isApproved
  );
  const randomTemplateApps = shuffleArray(templateApps).slice(0, 3);

  // Set custom SEO for Shakespeare page
  useSEO({
    title: 'Shakespeare - Open Source AI Website Builder | Any Model, Any Provider, Total User Freedom',
    description: 'The open-source AI website builder that gives you total freedom with local file storage, any AI provider support, built-in Git integration, and full user control. Import from GitHub, edit code directly, upload files, and export everything.',
    type: 'website',
    image: '/shakespeare-resources/Screenshot from 2025-09-25 12-58-44.png',
    keywords: 'shakespeare, ai website builder, local storage, git integration, openrouter, claude, gpt, local ai models, file uploads, code editor',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Shakespeare",
      "description": "Next-generation AI website builder with local file storage and any AI provider support",
      "applicationCategory": "Development Tools",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Organization",
        "name": "Soapbox"
      },
      "featureList": [
        "Local file storage",
        "Any AI provider support",
        "Built-in Git integration",
        "Web-based code editor",
        "File uploads",
        "Project importing",
        "Data export"
      ]
    }
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <HeroSection />
      <OpenSourceSection />
      <ShowcaseSection apps={showcaseApps} isLoading={isLoadingSubmissions} />
      <TemplatesSection apps={randomTemplateApps} isLoading={isLoadingSubmissions} />
      <FeaturesSection />
      <ResourcesSection />
      <FinalCtaSection />
      <SupportSection />

      <Footer />
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Hero — deep navy stage with gold/blue spotlight beams, dot
// texture, a faint logo watermark, RotatingText headline in alternating
// blue/gold, feature pills in the brand trio, and a big gold primary CTA.
// ───────────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: STAGE_BG }}
    >
      <SpotlightBeams />
      <StageTexture />

      {/* Gold glow behind the headline, blue glow behind the video card */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 26% 32%, rgba(252, 194, 27, 0.10), transparent 70%), radial-gradient(ellipse 45% 40% at 80% 65%, rgba(66, 154, 223, 0.14), transparent 70%)',
        }}
      />

      {/* Stage floor vignette */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.30), transparent)' }}
      />

      {/* Giant theater-masks watermark */}
      <img
        src="/assets/logos/shakespeare-logo.png"
        alt=""
        aria-hidden="true"
        className="absolute -right-28 top-1/2 -translate-y-1/2 w-[540px] opacity-[0.06] rotate-6 pointer-events-none select-none hidden lg:block"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <Badge variant="secondary" className="bg-shakespeare-gold-400/10 text-shakespeare-gold-300 border-shakespeare-gold-400/30 text-sm px-3 py-1 mb-8 hover:bg-shakespeare-gold-400/20 hover:text-shakespeare-gold-200 hover:border-shakespeare-gold-400/50">
              🎭 Shakespeare 2.0
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6">
              <span className="text-white">Shakespeare, build me a </span>
              <RotatingText
                words={[
                  { text: "website", color: "text-shakespeare-blue-300" },
                  { text: "portfolio", color: "text-shakespeare-gold-300" },
                  { text: "community", color: "text-shakespeare-blue-300" },
                  { text: "game", color: "text-shakespeare-gold-300" },
                  { text: "landing page", color: "text-shakespeare-blue-300" },
                  { text: "signup form", color: "text-shakespeare-gold-300" },
                  { text: "chatroom", color: "text-shakespeare-blue-300" },
                  { text: "marketplace", color: "text-shakespeare-gold-300" }
                ]}
                interval={2000}
                className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl"
              />
            </h1>

            <p className="text-lg lg:text-xl font-medium text-shakespeare-gold-300 mb-6">
              Open Source • Any Model • Any Provider • Total freedom and control
            </p>

            <h2 className="text-2xl font-bold text-white mb-5">Revolutionary AI Website Builder</h2>

            <div className="flex flex-wrap gap-3 text-sm text-gray-300 mb-6">
              <div className="flex items-center bg-white/5 border border-white/10 px-3 py-2 rounded-full">
                <HardDrive className="w-4 h-4 mr-2 text-shakespeare-blue-300" />
                Decentralized
              </div>
              <div className="flex items-center bg-white/5 border border-white/10 px-3 py-2 rounded-full">
                <Cpu className="w-4 h-4 mr-2 text-shakespeare-gold-300" />
                Any AI Model
              </div>
              <div className="flex items-center bg-white/5 border border-white/10 px-3 py-2 rounded-full">
                <GitBranch className="w-4 h-4 mr-2 text-shakespeare-red-400" />
                Git Integration
              </div>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
              Just tell Shakespeare what website you want to build, and watch it create professional sites.
              No coding required, but full code access when you want it. Your files never leave your computer.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-shakespeare-gold-400 hover:bg-shakespeare-gold-300 text-shakespeare-navy-900 font-bold h-14 px-10 text-lg shadow-xl shadow-shakespeare-gold-400/25 transition-transform hover:scale-[1.03]" asChild>
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  Start Building
                  <ArrowRight className="ml-2 size-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white font-medium h-12 px-6 text-base" asChild>
                <a href="/shakespeare-resources">
                  <FileText className="mr-2 size-4" />
                  Resources
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white font-medium h-12 px-6 text-base" asChild>
                <a href="/shakespeare-community">
                  <Users className="mr-2 size-4" />
                  Community
                </a>
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-shakespeare-gold-400" />
                <span>Fully open source</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-shakespeare-gold-400" />
                <span>Local-first storage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-shakespeare-gold-400" />
                <span>No vendor lock-in</span>
              </div>
            </div>
          </div>

          {/* Right: featured video tutorial */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto">
              {/* Blue + gold glow behind the card */}
              <div
                className="absolute inset-0 -m-8 rounded-3xl opacity-50 blur-3xl pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 40% 30%, rgba(66, 154, 223, 0.35), transparent 65%), radial-gradient(circle at 70% 80%, rgba(252, 194, 27, 0.20), transparent 60%)',
                }}
              />

              <Card className="relative border-shakespeare-gold-400/20 overflow-hidden shadow-2xl rotate-[1.5deg] hover:rotate-0 transition-transform duration-500" style={{ backgroundColor: STAGE_SURFACE }}>
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">🎬 See Shakespeare in Action</h3>
                    <p className="text-gray-400 text-sm">Watch Derek Ross build a complete website with Shakespeare</p>
                  </div>

                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-white/10" style={{ backgroundColor: '#081824' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/TtYxFeayDKQ"
                      title="Shakespeare Tutorial with Derek Ross"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <PlayCircle className="w-4 h-4 mr-1 text-shakespeare-blue-300" />
                      Live Demo
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-shakespeare-gold-300" />
                      Real Project
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1 text-shakespeare-red-400" />
                      Complete Project
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Open Source & Decentralized — value props plus the
// Shakespeare-vs-others comparison card. Icon chips use the brand trio
// (blue, gold, red) in sequence.
// ───────────────────────────────────────────────────────────────────────────

function OpenSourceSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-shakespeare-bronze-600 mb-3">
            🌍 Fully Open Source
          </p>
          <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            The Only Fully Open Source &amp;{" "}
            <span className="text-shakespeare-blue-600">Decentralized</span>{" "}
            AI Web Builder
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Unlike other AI website builders that keep their code secret and lock you into their platforms,
            Shakespeare is 100% open source and stores everything locally on your computer. True freedom, true control.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-shakespeare-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Code className="w-6 h-6 text-shakespeare-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Open Source</h3>
                <p className="text-gray-600 mb-4">
                  Every line of code is available for inspection, modification, and contribution.
                  No black boxes, no hidden algorithms.
                </p>
                <Button variant="outline" className="border-shakespeare-blue-200 text-shakespeare-blue-700 hover:bg-shakespeare-blue-50" asChild>
                  <a href="https://gitlab.com/soapbox-pub/shakespeare" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-shakespeare-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <HardDrive className="w-6 h-6 text-shakespeare-gold-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">True Decentralization</h3>
                <p className="text-gray-600 mb-4">
                  Your files live on your computer, not our servers. Your data, your control, your freedom.
                  No vendor lock-in, no data mining.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Shield className="w-4 h-4 text-shakespeare-gold-600" />
                  <span>Complete data sovereignty</span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-shakespeare-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-shakespeare-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Community Driven</h3>
                <p className="text-gray-600 mb-4">
                  Built by developers, for developers. Contribute features, fix bugs, or fork the entire project.
                  The community shapes Shakespeare's future.
                </p>
                <EditWithShakespeareButton
                  gitUrl="https://gitlab.com/soapbox-pub/shakespeare.git"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">🆚 Shakespeare vs Others</h3>
                  <p className="text-gray-600 text-sm">See how Shakespeare compares to other AI website builders</p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm font-semibold text-gray-700 border-b pb-3">
                    <div>Feature</div>
                    <div className="text-center text-shakespeare-blue-600">Shakespeare</div>
                    <div className="text-center text-gray-400">Others</div>
                  </div>


                  <div className="grid grid-cols-3 gap-4 text-sm py-3 border-b border-gray-100">
                    <div className="text-gray-700">Local File Storage</div>
                    <div className="text-center">
                      <CheckCircle className="w-5 h-5 text-shakespeare-blue-600 mx-auto" />
                    </div>
                    <div className="text-center">
                      <span className="text-shakespeare-red-500 text-xl">✕</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm py-3 border-b border-gray-100">
                    <div className="text-gray-700">Any AI Provider</div>
                    <div className="text-center">
                      <CheckCircle className="w-5 h-5 text-shakespeare-blue-600 mx-auto" />
                    </div>
                    <div className="text-center">
                      <span className="text-shakespeare-red-500 text-xl">✕</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm py-3 border-b border-gray-100">
                    <div className="text-gray-700">Full Code Access</div>
                    <div className="text-center">
                      <CheckCircle className="w-5 h-5 text-shakespeare-blue-600 mx-auto" />
                    </div>
                    <div className="text-center">
                      <span className="text-shakespeare-gold-500 text-xl">~</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm py-3 border-b border-gray-100">
                    <div className="text-gray-700">No Vendor Lock-in</div>
                    <div className="text-center">
                      <CheckCircle className="w-5 h-5 text-shakespeare-blue-600 mx-auto" />
                    </div>
                    <div className="text-center">
                      <span className="text-shakespeare-red-500 text-xl">✕</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm py-3">
                    <div className="text-gray-700">Data Privacy</div>
                    <div className="text-center">
                      <CheckCircle className="w-5 h-5 text-shakespeare-blue-600 mx-auto" />
                    </div>
                    <div className="text-center">
                      <span className="text-shakespeare-red-500 text-xl">✕</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-[#faf8f4] rounded-xl">
                  <p className="text-sm text-gray-700 text-center">
                    <strong>✓</strong> Full Support &nbsp;&nbsp;
                    <strong className="text-shakespeare-gold-600">~</strong> Limited &nbsp;&nbsp;
                    <strong className="text-shakespeare-red-600">✕</strong> Not Available
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: What can I build with Shakespeare — live community showcase.
// ───────────────────────────────────────────────────────────────────────────

type Submission = NonNullable<ReturnType<typeof useAppSubmissions>["data"]>[number];

function ShowcaseSection({ apps, isLoading }: { apps: Submission[]; isLoading: boolean }) {
  return (
    <section className="bg-[#f5f1eb] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-shakespeare-bronze-600 mb-3">
            Community showcase
          </p>
          <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            What can I build with Shakespeare?
          </h2>
          <p className="text-lg text-gray-600">
            From simple landing pages to complex web applications - see real examples built by our community
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-shakespeare-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading showcase apps...</p>
          </div>
        ) : apps.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apps.map((app) => (
                <AppShowcaseCard
                  key={app.id}
                  app={app}
                  showModerationControls={false}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                These are just a few examples. Shakespeare can build virtually any web application you can imagine.
              </p>
              <Button size="lg" className="bg-shakespeare-blue-600 hover:bg-shakespeare-blue-700 text-white font-semibold" asChild>
                <a href="/showcase">
                  View All Apps in Showcase
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-shakespeare-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-8 h-8 text-shakespeare-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No showcase apps yet</h3>
            <p className="text-gray-600 mb-6">
              Be the first to build something amazing with Shakespeare and submit it to our showcase!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-shakespeare-blue-600 hover:bg-shakespeare-blue-700 text-white font-semibold" asChild>
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/showcase">
                  Submit Your App
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Start with a Template.
// ───────────────────────────────────────────────────────────────────────────

function TemplatesSection({ apps, isLoading }: { apps: Submission[]; isLoading: boolean }) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-shakespeare-bronze-600 mb-3">
            Jump-start your project
          </p>
          <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Start with a{" "}
            <span className="text-shakespeare-blue-600">Template</span>
          </h2>
          <p className="text-lg text-gray-600">
            Jump-start your project with ready-to-use templates. Clone, customize, and deploy in minutes.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-shakespeare-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading templates...</p>
          </div>
        ) : apps.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {apps.map((app) => (
                <AppShowcaseCard
                  key={app.id}
                  app={app}
                  showModerationControls={false}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">
                Browse more templates and find the perfect starting point for your project.
              </p>
              <Button size="lg" className="bg-shakespeare-blue-600 hover:bg-shakespeare-blue-700 text-white font-semibold" asChild>
                <a href="/showcase?tag=Template">
                  View All Templates
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-shakespeare-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-shakespeare-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No templates available yet</h3>
            <p className="text-gray-600 mb-6">
              Templates are coming soon! In the meantime, you can start building from scratch or browse our showcase for inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-shakespeare-blue-600 hover:bg-shakespeare-blue-700 text-white font-semibold" asChild>
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/showcase">
                  Browse Showcase
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Freedom-Respecting Features — five alternating feature rows.
// Feature icon tiles cycle through the brand palette (blue, navy, red,
// gold, blue) for theatrical richness.
// ───────────────────────────────────────────────────────────────────────────

function FeaturesSection() {
  return (
    <section className="bg-[#faf8f4] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-shakespeare-bronze-600 mb-3">
            Features
          </p>
          <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            <span className="text-shakespeare-blue-600">Freedom-Respecting</span> Features
          </h2>
          <p className="text-lg text-gray-600">
            Every feature designed for maximum freedom, control, and flexibility
          </p>
        </div>

        {/* Feature 1: Local File Storage */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 md:mb-24">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-shakespeare-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-shakespeare-blue-500/25">
                <HardDrive className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Your Files, Your Computer</h3>
                <p className="text-shakespeare-blue-600 font-medium">True Decentralization</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Files are stored locally on your computer, not on our servers. This means complete control,
                instant access, and true data sovereignty.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 p-4 rounded-xl">
                  <Shield className="w-6 h-6 text-shakespeare-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Full Privacy</h4>
                  <p className="text-sm text-gray-600">Your data never leaves your device</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-xl">
                  <Shield className="w-6 h-6 text-shakespeare-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Secure Storage</h4>
                  <p className="text-sm text-gray-600">Files stored locally on your device</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-xl">
                  <Globe className="w-6 h-6 text-shakespeare-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Your Control</h4>
                  <p className="text-sm text-gray-600">Complete ownership of your projects</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-xl">
                  <CheckCircle className="w-6 h-6 text-shakespeare-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Own Everything</h4>
                  <p className="text-sm text-gray-600">Complete project ownership</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div>
              <img
                src="/shakespeare-resources/signin-to-nostr-settings.png"
                alt="Local file storage interface showing files stored on user's computer"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Feature 2: Any AI Provider */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 md:mb-24">
          <div className="relative order-2 lg:order-1">
            <div>
              <img
                src="/shakespeare-resources/choose-your-model-example.png"
                alt="AI provider selection interface showing OpenRouter, Claude, GPT, and local models"
                className="w-full rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-shakespeare-navy-700 rounded-2xl flex items-center justify-center shadow-lg shadow-shakespeare-navy-700/25">
                <Cpu className="h-7 w-7 text-shakespeare-gold-400" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Use Any AI Provider</h3>
                <p className="text-shakespeare-navy-600 font-medium">Maximum Flexibility</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Break free from vendor lock-in. Choose from dozens of AI providers including OpenRouter,
                PayperQ, Z.ai, OpenAI, Anthropic, xAI, and even local models.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white border border-gray-200 rounded-xl">
                  <Globe className="w-6 h-6 text-shakespeare-navy-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cloud Providers</h4>
                    <p className="text-sm text-gray-600">OpenRouter, Claude, GPT-4, Gemini, and 40+ more models</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white border border-gray-200 rounded-xl">
                  <Monitor className="w-6 h-6 text-shakespeare-navy-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Models</h4>
                    <p className="text-sm text-gray-600">Run Llama, CodeLlama, and other models on your machine</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white border border-gray-200 rounded-xl">
                  <Settings className="w-6 h-6 text-shakespeare-navy-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom APIs</h4>
                    <p className="text-sm text-gray-600">Connect to any compatible API endpoint</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Git Integration */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 md:mb-24">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-shakespeare-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-shakespeare-red-500/25">
                <GitBranch className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Built-in Git Integration</h3>
                <p className="text-shakespeare-red-600 font-medium">Professional Workflow</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Track changes, roll back to previous states, and collaborate seamlessly with GitHub,
                GitLab, or any Git provider. Professional version control built right in.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-shakespeare-red-500" />
                  <span className="text-gray-700">Automatic commit tracking</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-shakespeare-red-500" />
                  <span className="text-gray-700">One-click rollback to any version</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-shakespeare-red-500" />
                  <span className="text-gray-700">Push and pull from remote repositories</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-shakespeare-red-500" />
                  <span className="text-gray-700">Collaborate with team members</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div>
              <img
                src="/shakespeare-resources/connect-your-git-account.png"
                alt="Git integration interface showing GitHub and GitLab connections"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Feature 4: Project Importing */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 md:mb-24">
          <div className="relative order-2 lg:order-1">
            <div>
              <img
                src="/shakespeare-resources/import-repository-example-1.png"
                alt="Project import interface showing GitHub repository import with edit badge"
                className="w-full rounded-2xl mb-4"
              />
              <img
                src="/shakespeare-resources/import-repository-example-2.png"
                alt="Edit with Shakespeare badge for easy project contribution"
                className="w-full rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-shakespeare-gold-400 rounded-2xl flex items-center justify-center shadow-lg shadow-shakespeare-gold-400/30">
                <Download className="h-7 w-7 text-shakespeare-navy-900" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Import from Anywhere</h3>
                <p className="text-shakespeare-gold-600 font-medium">Build on Existing Work</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Import projects directly from Git repositories and encourage others to contribute
                with an "Edit with Shakespeare" badge. Perfect for open source collaboration.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-white border border-gray-200 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">🔗 Direct Repository Import</h4>
                  <p className="text-sm text-gray-600">Paste any GitHub or GitLab URL to start building immediately</p>
                </div>
                <div className="p-4 bg-white border border-gray-200 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">🏷️ Contribution Badge</h4>
                  <p className="text-sm text-gray-600">Add a badge to your README to invite Shakespeare contributions</p>
                </div>
                <div className="p-4 bg-white border border-gray-200 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-2">🤝 Open Source Friendly</h4>
                  <p className="text-sm text-gray-600">Perfect for hackathons, contributions, and collaborative development</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 5: Code Editor & File Uploads */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-shakespeare-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-shakespeare-blue-500/25">
                <Code className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Full Code Control</h3>
                <p className="text-shakespeare-blue-600 font-medium">Edit Everything</p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                Built-in file explorer and code editor let you view and edit every file by hand.
                Upload your own images, logos, and assets directly into your project.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 p-4 rounded-xl">
                  <FileText className="w-6 h-6 text-shakespeare-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">File Explorer</h4>
                  <p className="text-sm text-gray-600">Browse and organize all project files</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-xl">
                  <Code className="w-6 h-6 text-shakespeare-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Code Editor</h4>
                  <p className="text-sm text-gray-600">Syntax highlighting and smart editing</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-xl">
                  <Upload className="w-6 h-6 text-shakespeare-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">File Uploads</h4>
                  <p className="text-sm text-gray-600">Drag and drop images and assets</p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-xl">
                  <Palette className="w-6 h-6 text-shakespeare-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900">Asset Management</h4>
                  <p className="text-sm text-gray-600">Organize logos, images, and media</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div>
              <img
                src="/shakespeare-resources/edit-the-code-in-browser.png"
                alt="Built-in code editor showing file explorer and syntax highlighting"
                className="w-full rounded-2xl mb-4"
              />
              <img
                src="/shakespeare-resources/file-upload-ezample.png"
                alt="File upload interface for adding images and assets"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Resource Center — latest Shakespeare blog resources.
// ───────────────────────────────────────────────────────────────────────────

function ResourcesSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-shakespeare-bronze-600 mb-3">
            Resources
          </p>
          <h2 className="font-display font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Latest <span className="text-shakespeare-blue-600">Resources</span>
          </h2>
          <p className="text-lg text-gray-600">
            Stay up to date with the latest Shakespeare tutorials, guides, and feature updates
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {getAllPostsIncludingResources()
            .filter(post => post.tags?.includes('shakespeare-resource'))
            .slice(0, 3)
            .map((post) => (
              <Card key={post.slug} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-shakespeare-blue-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-shakespeare-blue-600 text-white">📚 Resource</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <time>{new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}</time>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-shakespeare-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`/blog/${post.slug}`}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-shakespeare-blue-600 hover:bg-shakespeare-blue-700 text-white font-semibold px-8 py-4"
            asChild
          >
            <a href="/shakespeare-resources">
              <FileText className="mr-2 h-5 w-5" />
              View All Resources
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Final CTA — the curtain call. A scalloped red curtain valance
// with gold fringe hangs over a navy stage lit by gold/blue spotlights,
// with a big gold primary CTA, stats, and the Mailchimp form.
// ───────────────────────────────────────────────────────────────────────────

function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden text-white pt-28 md:pt-36 pb-20 md:pb-28" style={{ background: STAGE_BG }}>
      {/* Curtain valance hanging from the top */}
      <CurtainValance className="absolute top-0 inset-x-0 w-full h-14 md:h-20 drop-shadow-lg" />

      <SpotlightBeams />
      <StageTexture />

      {/* Center-stage gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 45% at 50% 28%, rgba(252, 194, 27, 0.14), transparent 70%), radial-gradient(ellipse 40% 35% at 85% 90%, rgba(66, 154, 223, 0.10), transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-shakespeare-gold-300 mb-3">
            Get started
          </p>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
            Start Building <span className="text-shakespeare-gold-300">Today</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Experience the future of web development with complete freedom and control
          </p>
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-shakespeare-gold-400 hover:bg-shakespeare-gold-300 text-shakespeare-navy-900 font-bold h-14 px-10 text-lg shadow-xl shadow-shakespeare-gold-400/30 transition-transform hover:scale-[1.03]"
            >
              <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                Launch Shakespeare
                <ArrowRight className="ml-2 size-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white font-medium h-12 px-6 text-base"
            >
              <a href="/shakespeare-resources">
                <FileText className="mr-2 size-4" />
                Resources
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white font-medium h-12 px-6 text-base"
            >
              <a href="/shakespeare-community">
                <Users className="mr-2 size-4" />
                Community
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-shakespeare-gold-300">100%</div>
              <div className="text-sm text-gray-400">Free to Start</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-shakespeare-blue-300">50+</div>
              <div className="text-sm text-gray-400">AI Models</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-shakespeare-red-400">∞</div>
              <div className="text-sm text-gray-400">Possibilities</div>
            </div>
          </div>

          <ShakespeareMailchimpForm />
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Section: Support Soapbox.
// ───────────────────────────────────────────────────────────────────────────

function SupportSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SupportCard />
      </div>
    </section>
  );
}
