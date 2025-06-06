import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Heart, Users, Zap } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Gleason",
    role: "Founder & CEO",
    bio: "Alex has over a decade of experience building social platforms, and is one of the foremost experts on ActivityPub and the Fediverse. He is still learning, and still dreaming.",
    avatar: "/assets/avatars/alex.png",
    follow: "https://gleasonator.dev/@alex@gleasonator.dev"
  },
  {
    name: "M. K. Fain",
    role: "Director of Product",
    bio: "M. K. is a marketing and communications consultant with a focus on nonprofits and technology. She is passionate about freedom and building spaces for silenced groups online.",
    avatar: "/assets/avatars/mk.jpg",
    follow: "https://ditto.pub/@mk@ditto.pub"
  },
  {
    name: "Patrick dos Reis",
    role: "Developer",
    bio: "Patrick is interested in working in disruptive technologies like Ditto that can be used to empower individual freedom. He also loves nature.",
    avatar: "/assets/avatars/patrick.png",
    follow: "https://ditto.pub/@patrick@patrickdosreis.com"
  },
  {
    name: "shantaram",
    role: "Software Engineer",
    bio: "Self-taught software engineer writing software to achieve a net good effect on the world.",
    avatar: "/assets/avatars/shantaram.jpeg",
    follow: "https://ditto.pub/@shan@shantaram.xyz"
  },
  {
    name: "Danidfra",
    role: "Developer",
    bio: "Danidfra is a programmer with an interest in both code and music. He believes that technology can transform the world, and is always looking for new ways to create a positive impact.",
    avatar: "/assets/avatars/danidfra.jpeg",
    follow: "https://ditto.pub/@danidfra@danidfra.com"
  },
  {
    name: "And Other Stuff",
    role: "Partner Organization",
    bio: "Soapbox is a member of the And Other Stuff collective, with a focus communities.",
    avatar: "/assets/avatars/aos.png",
    follow: "https://ditto.pub/@AOS@andotherstuff.org"
  }
];

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

        {/* Team Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                Meet the Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The passionate individuals building the future of decentralized social media.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <img 
                      src={member.avatar} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
                    />
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-azure font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href={member.follow} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                        Follow <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                <a href="https://gitlab.com/soapbox-pub/soapbox/-/issues" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  Browse Open Issues <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                <a href="/mentorship" className="inline-flex items-center">
                  Learn About Mentorship
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}