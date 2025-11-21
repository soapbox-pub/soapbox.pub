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

          {/* Why This Matters */}
          <div className="mt-16 prose prose-lg max-w-none">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Why This Matters
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The tech industry is dominated by companies that profit from user surveillance, planned obsolescence, and monopolistic control. Users are treated as products to be monetized rather than people to be served. Platforms deplatform users arbitrarily, governments demand censorship, and corporations lock users into walled gardens.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>We refuse to participate in this system.</strong>
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              By committing to open source, decentralization, privacy, censorship resistance, and independence, we're building an alternative. Our tools enable people to create communities, share ideas, and build businesses without permission from gatekeepers. We're proving that ethical software development is not only possible—it's more sustainable and more aligned with human flourishing than the extractive models of Big Tech.
            </p>
          </div>

          {/* Accountability */}
          <div className="mt-16">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Holding Ourselves Accountable
                </h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg leading-relaxed">
                    This pledge is more than aspirational language—it's a binding commitment we make to our community. We invite scrutiny and accountability:
                  </p>
                  <ul className="space-y-3 ml-6">
                    <li className="text-lg">
                      <strong>Public Development:</strong> All our code is public. If we violate these commitments, you'll see it in our repositories.
                    </li>
                    <li className="text-lg">
                      <strong>Community Voice:</strong> Our users and contributors have a voice in our direction. We listen to feedback and criticism.
                    </li>
                    <li className="text-lg">
                      <strong>Transparent Communication:</strong> When we make decisions that affect users, we explain our reasoning publicly.
                    </li>
                    <li className="text-lg">
                      <strong>Forkable by Design:</strong> If we ever betray these principles, our open source licenses ensure the community can fork our work and continue without us.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Living Document */}
          <div className="mt-16">
            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50">
              <CardContent className="p-8">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  A Living Commitment
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  This pledge is not static. As technology evolves and new challenges emerge, we may refine our commitments to better serve our principles. Any changes to this pledge will be:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li className="text-lg">• Announced publicly with full explanation</li>
                  <li className="text-lg">• Subject to community discussion</li>
                  <li className="text-lg">• Tracked through version control in our public repository</li>
                  <li className="text-lg">• Made only to strengthen—never weaken—our ethical commitments</li>
                </ul>
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

          {/* Signature */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 text-lg mb-2">
              Signed by the Soapbox Team
            </p>
            <p className="text-gray-500">
              November 2025
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
