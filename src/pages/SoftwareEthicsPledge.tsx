import { Shield, Code, Globe, Lock, Scale, Building, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useSEO } from "@/hooks/useSEO";

export default function SoftwareEthicsPledge() {
  useSEO({
    title: 'Our Software Ethics Pledge - Soapbox',
    description: 'Soapbox commits to open source software, decentralized protocols, user privacy, and resistance to censorship and corporate control.',
    type: 'website',
    keywords: 'open source, software ethics, decentralization, privacy, censorship resistance, corporate independence'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-azure-50 via-white to-blue-50">
      <Navigation />

      <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-azure tracking-wide uppercase mb-6">
              <Shield className="w-4 h-4" />
              Our Commitment
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6 leading-[1.1]">
              Our Software{" "}
              <span className="bg-gradient-to-r from-azure to-blue-600 bg-clip-text text-transparent">
                Ethics Pledge
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The principles that guide every line of code we write and every product we build
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-16">
            <blockquote className="border-l-4 border-azure pl-6 md:pl-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                At Soapbox, we believe that software should serve people, not corporations. Our commitment to ethical software development is not just a marketing message&mdash;it's woven into every decision we make, every tool we build, and every line of code we write. This pledge holds us accountable to our community and to the principles of freedom, transparency, and user sovereignty.
              </p>
            </blockquote>
          </div>

          {/* Pledge Sections */}
          <div className="space-y-6 mb-16">
            {/* Open Source Commitment */}
            <Card className="border border-blue-200 bg-gradient-to-br from-blue-50/80 to-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-5">
                  <div className="bg-blue-600 rounded-xl p-3 flex-shrink-0 shadow-sm">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      We Commit to Open Source Software
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      All of our work intended for public consumption is released as open source, freely licensed software. This means anyone can view, modify, audit, and distribute our code. No black boxes, no proprietary lock-in, no hidden surveillance.
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-4 pt-4 border-t border-blue-100 text-sm">
                      <a href="https://gitlab.com/soapbox-pub" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-medium transition-colors">View our code <ExternalLink className="w-3 h-3" /></a>
                      <Link to="/blog/our-stance-on-ai" className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-medium transition-colors">Our Stance on AI <ArrowRight className="w-3 h-3" /></Link>
                      <Link to="/blog/free-software-free-societies" className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-medium transition-colors">Free Software, Free Societies <ArrowRight className="w-3 h-3" /></Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decentralization Commitment */}
            <Card className="border border-purple-200 bg-gradient-to-br from-purple-50/80 to-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-5">
                  <div className="bg-purple-600 rounded-xl p-3 flex-shrink-0 shadow-sm">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      We Commit to Decentralized Protocols
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      We build exclusively on decentralized protocols like Nostr and ActivityPub. We reject centralized platforms that concentrate power in corporate hands. Decentralization isn't just a technical choice&mdash;it's a moral imperative for user sovereignty.
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-4 pt-4 border-t border-purple-100 text-sm">
                      <Link to="/blog/nostr101" className="inline-flex items-center gap-1.5 text-purple-600 hover:text-purple-800 font-medium transition-colors">Nostr 101 <ArrowRight className="w-3 h-3" /></Link>
                      <Link to="/blog/comparing-protocols" className="inline-flex items-center gap-1.5 text-purple-600 hover:text-purple-800 font-medium transition-colors">Comparing Protocols <ArrowRight className="w-3 h-3" /></Link>
                      <Link to="/blog/future-is-decentralized" className="inline-flex items-center gap-1.5 text-purple-600 hover:text-purple-800 font-medium transition-colors">The Future is Decentralized <ArrowRight className="w-3 h-3" /></Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Commitment */}
            <Card className="border border-green-200 bg-gradient-to-br from-green-50/80 to-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-5">
                  <div className="bg-green-600 rounded-xl p-3 flex-shrink-0 shadow-sm">
                    <Lock className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      We Commit to Never Selling User Data
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Your data is yours, not ours to monetize. We will never sell, trade, or exploit user data for profit. Our business model is built on providing valuable tools and services, not on surveillance capitalism.
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-4 pt-4 border-t border-green-100 text-sm">
                      <Link to="/blog/future-is-decentralized" className="inline-flex items-center gap-1.5 text-green-600 hover:text-green-800 font-medium transition-colors">The Future is Decentralized <ArrowRight className="w-3 h-3" /></Link>
                      <Link to="/blog/free-software-free-societies" className="inline-flex items-center gap-1.5 text-green-600 hover:text-green-800 font-medium transition-colors">Free Software, Free Societies <ArrowRight className="w-3 h-3" /></Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Censorship Resistance */}
            <Card className="border border-orange-200 bg-gradient-to-br from-orange-50/80 to-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-5">
                  <div className="bg-orange-600 rounded-xl p-3 flex-shrink-0 shadow-sm">
                    <Scale className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      We Commit to Fighting Government Censorship
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      We build tools that resist censorship from any authority. Free speech is not negotiable. We will not implement backdoors, comply with unjust takedown requests, or compromise our users' ability to communicate freely.
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-4 pt-4 border-t border-orange-100 text-sm">
                      <Link to="/blog/agora-connecting-freedom-fighters" className="inline-flex items-center gap-1.5 text-orange-600 hover:text-orange-800 font-medium transition-colors">Agora: Connecting Freedom Fighters <ArrowRight className="w-3 h-3" /></Link>
                      <Link to="/blog/building-freedom-first-communities" className="inline-flex items-center gap-1.5 text-orange-600 hover:text-orange-800 font-medium transition-colors">Building Freedom-First Communities <ArrowRight className="w-3 h-3" /></Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Corporate Control Resistance */}
            <Card className="border border-red-200 bg-gradient-to-br from-red-50/80 to-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-5">
                  <div className="bg-red-600 rounded-xl p-3 flex-shrink-0 shadow-sm">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      We Commit to Resisting Corporate Control
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Digital resources should not be controlled by corporations seeking to maximize profit at users' expense. We reject extractive business models, walled gardens, and artificial scarcity. Technology should serve humanity, not shareholders.
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-4 pt-4 border-t border-red-100 text-sm">
                      <Link to="/blog/comparing-protocols" className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-800 font-medium transition-colors">Comparing Protocols <ArrowRight className="w-3 h-3" /></Link>
                      <Link to="/blog/nostr101" className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-800 font-medium transition-colors">Nostr 101 <ArrowRight className="w-3 h-3" /></Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Independence Commitment */}
            <Card className="border border-indigo-200 bg-gradient-to-br from-indigo-50/80 to-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-5">
                  <div className="bg-indigo-600 rounded-xl p-3 flex-shrink-0 shadow-sm">
                    <Building className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                      We Commit to Maintaining Independence
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      We will never sell our products or company to any entity that does not share and uphold these commitments. Our mission is not for sale. We would rather shut down than compromise our principles for profit.
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1.5 mt-4 pt-4 border-t border-indigo-100 text-sm">
                      <Link to="/about" className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 font-medium transition-colors">About Soapbox <ArrowRight className="w-3 h-3" /></Link>
                      <Link to="/get-involved" className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-800 font-medium transition-colors">Get Involved <ArrowRight className="w-3 h-3" /></Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Join Us */}
          <div className="mt-16 bg-gradient-to-r from-azure to-blue-600 rounded-3xl p-10 md:p-12 text-white text-center shadow-xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Join the Movement
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              We believe these principles should be the foundation of all software development. Whether you're a developer, user, or organization, we invite you to join us in building a more ethical, decentralized future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://gitlab.com/soapbox-pub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold rounded-xl bg-white text-azure hover:bg-gray-100 transition-colors"
              >
                <Code className="w-5 h-5" />
                View Our Code
              </a>
              <Link
                to="/showcase"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-colors"
              >
                <Globe className="w-5 h-5" />
                See What We've Built
              </Link>
            </div>
          </div>

          {/* See Also */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[
              { title: "Our Stance on AI", description: "How we approach AI with open source principles", to: "/blog/our-stance-on-ai" },
              { title: "Free Software, Free Societies", description: "Why free software matters for a free world", to: "/blog/free-software-free-societies" },
              { title: "The Future is Decentralized", description: "Why decentralized protocols will win", to: "/blog/future-is-decentralized" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-start gap-3 p-5 rounded-xl border border-gray-200 bg-white hover:border-azure/30 hover:shadow-md transition-all duration-200"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 group-hover:text-azure transition-colors">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.description}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-azure mt-0.5 shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
