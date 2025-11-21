import { Shield, Code, Globe, Lock, Scale, Building } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useSEO } from "@/hooks/useSEO";

export default function SoftwareEthicsPledge() {
  useSEO({
    title: 'Our Software Ethics Pledge - Soapbox',
    description: 'Soapbox commits to open source software, decentralized protocols, user privacy, and resistance to censorship and corporate control.',
    type: 'website',
    keywords: 'open source, software ethics, decentralization, privacy, censorship resistance, corporate independence'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />

      <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <Badge className="text-lg px-4 py-2 bg-blue-600 text-white">
                <Shield className="w-5 h-5 mr-2" />
                Our Commitment
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Our Software Ethics Pledge
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every line of code we write and every product we build
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              At Soapbox, we believe that software should serve people, not corporations. Our commitment to ethical software development is not just a marketing message—it's woven into every decision we make, every tool we build, and every line of code we write. This pledge holds us accountable to our community and to the principles of freedom, transparency, and user sovereignty.
            </p>
          </div>

          {/* Pledge Sections */}
          <div className="space-y-8 mb-16">
            {/* Open Source Commitment */}
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 rounded-xl p-3 flex-shrink-0">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
                      We Commit to Open Source Software
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      All of our work intended for public consumption is released as open source, freely licensed software. This means anyone can view, modify, audit, and distribute our code. No black boxes, no proprietary lock-in, no hidden surveillance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decentralization Commitment */}
            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 rounded-xl p-3 flex-shrink-0">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
                      We Commit to Decentralized Protocols
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      We build exclusively on decentralized protocols like Nostr and ActivityPub. We reject centralized platforms that concentrate power in corporate hands. Decentralization isn't just a technical choice—it's a moral imperative for user sovereignty.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy Commitment */}
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 rounded-xl p-3 flex-shrink-0">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
                      We Commit to Never Selling User Data
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Your data is yours, not ours to monetize. We will never sell, trade, or exploit user data for profit. Our business model is built on providing valuable tools and services, not on surveillance capitalism.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Censorship Resistance */}
            <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-600 rounded-xl p-3 flex-shrink-0">
                    <Scale className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
                      We Commit to Fighting Government Censorship
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      We build tools that resist censorship from any authority. Free speech is not negotiable. We will not implement backdoors, comply with unjust takedown requests, or compromise our users' ability to communicate freely.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Corporate Control Resistance */}
            <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-red-100/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 rounded-xl p-3 flex-shrink-0">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
                      We Commit to Resisting Corporate Control
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      Digital resources should not be controlled by corporations seeking to maximize profit at users' expense. We reject extractive business models, walled gardens, and artificial scarcity. Technology should serve humanity, not shareholders.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Independence Commitment */}
            <Card className="border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-indigo-100/50">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600 rounded-xl p-3 flex-shrink-0">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">
                      We Commit to Maintaining Independence
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      We will never sell our products or company to any entity that does not share and uphold these commitments. Our mission is not for sale. We would rather shut down than compromise our principles for profit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Join Us */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-4xl font-display font-bold text-white mb-6">
              Join the Movement
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We believe these principles should be the foundation of all software development. Whether you're a developer, user, or organization, we invite you to join us in building a more ethical, decentralized future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/soapbox-pub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-lg bg-white text-purple-700 hover:bg-gray-100 transition-colors"
              >
                <Code className="w-5 h-5 mr-2" />
                View Our Code
              </a>
              <a
                href="https://soapbox.pub/showcase"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-purple-700 transition-colors"
              >
                <Globe className="w-5 h-5 mr-2" />
                See What We've Built
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
