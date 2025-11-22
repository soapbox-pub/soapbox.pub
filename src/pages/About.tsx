import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TeamPostsFeed } from "@/components/TeamPostsFeed";
import { TeamFollowPack } from "@/components/TeamFollowPack";
import { ExternalLink, Heart, Users, Zap, FileText } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";



const missionValues = [
  {
    icon: <Heart className="h-8 w-8 text-red-500" />,
    title: "Promoting Freedom",
    description: "We believe in open source software that empowers users to control their own data and digital experiences."
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Empowering Communities",
    description: "Building tools that help communities form, grow, and thrive in the decentralized web."
  },
  {
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    title: "Inspiring Creativity",
    description: "Creating platforms and tools that unlock new possibilities for creators and innovators worldwide."
  }
];

export default function About() {
  // Set custom SEO for About page
  useSEO({
    title: 'About Soapbox - Our Mission & Team',
    description: 'Learn about Soapbox\'s mission to empower communities with free and open source decentralized social media tools. Meet our team building the future of digital freedom.',
    type: 'website',
    image: '/assets/images/riga-team.png',
    keywords: 'soapbox team, about soapbox, decentralized social media, open source, nostr, mission'
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-display text-gray-900 mb-6">
                About Soapbox
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Building free software that empowers communities online.
              </p>
            </div>
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/images/riga-team.png"
                alt="Soapbox team in Riga"
                className="w-full h-96 md:h-[500px] object-cover"
              />
            </div>
            <div className="text-center mt-6">
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every project we build is guided by three core principles that shape how we approach technology and community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {missionValues.map((value, index) => (
                <Card key={index} className="text-center p-6 border-2 hover:border-azure/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Supported By Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                Supported by
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're grateful for the support of these organizations who believe in our mission.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <a
                href="https://opensats.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 rounded-lg transition-all hover:shadow-lg hover:scale-105"
              >
                <img
                  src="/assets/logos/opensats-logo-soapbox.png"
                  alt="OpenSats"
                  className="max-h-32 md:max-h-40 w-full object-contain"
                />
              </a>
              <a
                href="https://andotherstuff.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 rounded-lg transition-all hover:shadow-lg hover:scale-105"
              >
                <img
                  src="/assets/logos/aos-andotherstuff-logo-soapbox.png"
                  alt="And Other Stuff"
                  className="max-h-32 md:max-h-40 w-full object-contain"
                />
              </a>
              <a
                href="https://hrf.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 rounded-lg transition-all hover:shadow-lg hover:scale-105"
              >
                <img
                  src="/assets/logos/hrf-humanrightsfoudnation-logo.png"
                  alt="Human Rights Foundation"
                  className="max-h-32 md:max-h-40 w-full object-contain"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Media Kit Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="border-azure-200 bg-gradient-to-r from-azure-50 to-blue-50">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-azure mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Media Kit</h3>
                </div>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Looking for team photos, press materials, or want to book our leadership for interviews?
                  Our media kit has everything you need.
                </p>
                <Button size="lg" className="bg-azure hover:bg-azure-600 text-white" asChild>
                  <Link to="/media-kit" className="inline-flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    View Media Kit
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <TeamFollowPack naddr="naddr1qvzqqqyckypzpyexz3t34l966ngh5xg7u2q788hthdqmj0av3lv8s2tz9t43zt6dqqxxkdrsx4mnqm3jxfeh2ess5pyrw" />
          </div>
        </section>

        {/* Team Posts Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                Latest from the Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay up to date with what our team members are sharing on Nostr.
              </p>
            </div>

            <TeamPostsFeed />
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Want to Get Involved?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Soapbox is seeking active contributors to join our volunteer and freelance community.
              We also offer paid mentorships for young or new developers who are passionate about free software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/get-involved" className="inline-flex items-center">
                  Get Involved
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                <a href="https://gitlab.com/soapbox-pub/soapbox/-/issues" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  Browse Open Issues <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}