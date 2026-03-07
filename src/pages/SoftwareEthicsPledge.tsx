import { Shield, Code, Globe, Lock, Scale, Building, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

interface ResourceLink {
  label: string;
  to: string;
  external?: boolean;
}

interface PledgeSection {
  icon: React.ElementType;
  iconBg: string;
  title: string;
  description: string;
  pullQuote: string;
  resources: ResourceLink[];
}

const pledges: PledgeSection[] = [
  {
    icon: Code,
    iconBg: "bg-azure",
    title: "We Commit to Open Source Software",
    description:
      "All of our work intended for public consumption is released as open source, freely licensed software. This means anyone can view, modify, audit, and distribute our code. No black boxes, no proprietary lock-in, no hidden surveillance.",
    pullQuote: "No black boxes, no proprietary lock-in, no hidden surveillance.",
    resources: [
      { label: "View our code on GitLab", to: "https://gitlab.com/soapbox-pub", external: true },
      { label: "Our Stance on AI", to: "/blog/our-stance-on-ai" },
      { label: "Free Software, Free Societies", to: "/blog/free-software-free-societies" },
    ],
  },
  {
    icon: Globe,
    iconBg: "bg-purple-600",
    title: "We Commit to Decentralized Protocols",
    description:
      "We build exclusively on decentralized protocols like Nostr and ActivityPub. We reject centralized platforms that concentrate power in corporate hands. Decentralization isn't just a technical choice\u2014it's a moral imperative for user sovereignty.",
    pullQuote: "Decentralization isn't just a technical choice\u2014it's a moral imperative.",
    resources: [
      { label: "Nostr 101", to: "/blog/nostr101" },
      { label: "Comparing Protocols", to: "/blog/comparing-protocols" },
      { label: "The Future is Decentralized", to: "/blog/future-is-decentralized" },
    ],
  },
  {
    icon: Lock,
    iconBg: "bg-emerald-600",
    title: "We Commit to Never Selling User Data",
    description:
      "Your data is yours, not ours to monetize. We will never sell, trade, or exploit user data for profit. Our business model is built on providing valuable tools and services, not on surveillance capitalism.",
    pullQuote: "Your data is yours, not ours to monetize.",
    resources: [
      { label: "The Future is Decentralized", to: "/blog/future-is-decentralized" },
      { label: "Free Software, Free Societies", to: "/blog/free-software-free-societies" },
    ],
  },
  {
    icon: Scale,
    iconBg: "bg-orange-600",
    title: "We Commit to Fighting Government Censorship",
    description:
      "We build tools that resist censorship from any authority. Free speech is not negotiable. We will not implement backdoors, comply with unjust takedown requests, or compromise our users' ability to communicate freely.",
    pullQuote: "Free speech is not negotiable.",
    resources: [
      { label: "Agora: Connecting Freedom Fighters", to: "/blog/agora-connecting-freedom-fighters" },
      { label: "Building Freedom-First Communities", to: "/blog/building-freedom-first-communities" },
    ],
  },
  {
    icon: Shield,
    iconBg: "bg-red-600",
    title: "We Commit to Resisting Corporate Control",
    description:
      "Digital resources should not be controlled by corporations seeking to maximize profit at users' expense. We reject extractive business models, walled gardens, and artificial scarcity. Technology should serve humanity, not shareholders.",
    pullQuote: "Technology should serve humanity, not shareholders.",
    resources: [
      { label: "Take Down Big Tech with Great UX", to: "/blog/take-down-big-tech-with-great-ux" },
      { label: "Comparing Protocols", to: "/blog/comparing-protocols" },
    ],
  },
  {
    icon: Building,
    iconBg: "bg-indigo-600",
    title: "We Commit to Maintaining Independence",
    description:
      "We will never sell our products or company to any entity that does not share and uphold these commitments. Our mission is not for sale. We would rather shut down than compromise our principles for profit.",
    pullQuote: "We would rather shut down than compromise our principles.",
    resources: [
      { label: "About Soapbox", to: "/about" },
      { label: "Get Involved", to: "/get-involved" },
    ],
  },
];

function PledgeBlock({ pledge, index }: { pledge: PledgeSection; index: number }) {
  const Icon = pledge.icon;
  const isEven = index % 2 === 0;
  const isLast = index === pledges.length - 1;

  const bgClass = isLast
    ? "bg-gray-900 text-white"
    : isEven
      ? "bg-white"
      : "bg-gray-50";

  const titleColor = isLast ? "text-white" : "text-gray-900";
  const descColor = isLast ? "text-gray-300" : "text-gray-600";
  const quoteColor = isLast ? "text-gray-100" : "text-gray-800";
  const quoteBorder = isLast ? "border-azure-400" : "border-azure";
  const linkColor = isLast
    ? "text-azure-200 hover:text-white"
    : "text-azure hover:text-azure-600";

  return (
    <section className={`${bgClass} py-20 md:py-24 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-5xl mx-auto">
        <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-start ${!isEven ? "direction-rtl" : ""}`}>
          {/* Icon column */}
          <div className={`lg:col-span-3 flex ${isEven ? "lg:order-2 justify-center lg:justify-end" : "lg:order-1 justify-center lg:justify-start"}`}>
            <div className={`${pledge.iconBg} rounded-2xl p-5 shadow-lg`}>
              <Icon className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Content column */}
          <div className={`lg:col-span-9 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
            <div className="space-y-6">
              {/* Number + Title */}
              <div className="space-y-2">
                <span className={`text-sm font-semibold tracking-widest uppercase ${isLast ? "text-azure-300" : "text-azure"}`}>
                  Pledge {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className={`text-3xl md:text-4xl font-display font-bold ${titleColor} leading-tight`}>
                  {pledge.title}
                </h2>
              </div>

              {/* Description */}
              <p className={`text-lg md:text-xl leading-relaxed ${descColor}`}>
                {pledge.description}
              </p>

              {/* Pull Quote */}
              <blockquote className={`border-l-4 ${quoteBorder} pl-6 py-2`}>
                <p className={`text-xl md:text-2xl font-display italic ${quoteColor}`}>
                  "{pledge.pullQuote}"
                </p>
              </blockquote>

              {/* Resource Links */}
              <div className="pt-2">
                <p className={`text-xs font-semibold tracking-widest uppercase mb-3 ${isLast ? "text-gray-400" : "text-gray-500"}`}>
                  Explore further
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {pledge.resources.map((resource) =>
                    resource.external ? (
                      <a
                        key={resource.to}
                        href={resource.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 text-sm font-medium ${linkColor} transition-colors`}
                      >
                        {resource.label}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <Link
                        key={resource.to}
                        to={resource.to}
                        className={`inline-flex items-center gap-1.5 text-sm font-medium ${linkColor} transition-colors`}
                      >
                        {resource.label}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SoftwareEthicsPledge() {
  useSEO({
    title: "Our Software Ethics Pledge - Soapbox",
    description:
      "Soapbox commits to open source software, decentralized protocols, user privacy, and resistance to censorship and corporate control.",
    type: "website",
    keywords:
      "open source, software ethics, decentralization, privacy, censorship resistance, corporate independence",
  });

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ================================================================ */}
      {/* DARK HERO                                                        */}
      {/* ================================================================ */}
      <section className="relative bg-gray-900 overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-azure/15 via-transparent to-transparent" />

        <div className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-azure/10 border border-azure/20 mb-8">
              <Shield className="w-8 h-8 text-azure-200" />
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
              Our Software{" "}
              <span className="bg-gradient-to-r from-azure to-purple-400 bg-clip-text text-transparent">
                Ethics
              </span>{" "}
              Pledge
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
              The principles that guide every line of code we write and every product we build
            </p>

            {/* Decorative divider */}
            <div className="mt-12 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-azure/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-azure/60" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-azure/40" />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* MANIFESTO INTRODUCTION                                           */}
      {/* ================================================================ */}
      <section className="bg-white py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-4 border-azure pl-8">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
              At Soapbox, we believe that software should serve people, not corporations.
              Our commitment to ethical software development is not just a marketing
              message&mdash;it's woven into every decision we make, every tool we build,
              and every line of code we write. This pledge holds us accountable to our
              community and to the principles of freedom, transparency, and user sovereignty.
            </p>
          </blockquote>
        </div>
      </section>

      {/* ================================================================ */}
      {/* PLEDGE SECTIONS                                                  */}
      {/* ================================================================ */}
      {pledges.map((pledge, index) => (
        <PledgeBlock key={index} pledge={pledge} index={index} />
      ))}

      {/* ================================================================ */}
      {/* JOIN THE MOVEMENT CTA                                            */}
      {/* ================================================================ */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-azure-dark py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            We believe these principles should be the foundation of all software
            development. Whether you're a developer, user, or organization, we invite
            you to join us in building a more ethical, decentralized future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://gitlab.com/soapbox-pub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-lg font-semibold rounded-xl bg-white text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <Code className="w-5 h-5" />
              View Our Code
            </a>
            <Link
              to="/showcase"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-lg font-semibold rounded-xl border-2 border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              <Globe className="w-5 h-5" />
              See What We've Built
            </Link>
            <Link
              to="/get-involved"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-lg font-semibold rounded-xl border-2 border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/* RELATED READING                                                  */}
      {/* ================================================================ */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-6">
            Related Reading
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Our Stance on AI",
                description: "How we approach AI with open source principles",
                to: "/blog/our-stance-on-ai",
              },
              {
                title: "Free Software, Free Societies",
                description: "Why free software matters for a free world",
                to: "/blog/free-software-free-societies",
              },
              {
                title: "The Future is Decentralized",
                description: "Why decentralized protocols will win",
                to: "/blog/future-is-decentralized",
              },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-start gap-4 p-5 rounded-xl border border-gray-200 bg-white hover:border-azure/30 hover:shadow-md transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 group-hover:text-azure transition-colors">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-azure mt-1 shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
