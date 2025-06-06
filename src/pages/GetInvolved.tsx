import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GitBranch, Users, Briefcase, MessageSquare, Zap } from "lucide-react";

const openPositions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering", 
    type: "Full-time",
    location: "Remote",
    description: "Take ownership of features from concept to deployment. Work across our entire stack to deliver exceptional user experiences on decentralized platforms.",
    requirements: [
      "5+ years of full stack development experience",
      "Proficiency in both frontend and backend technologies",
      "Experience with modern web frameworks and databases",
      "Strong problem-solving and architectural skills"
    ],
    tags: ["Full Stack", "React", "Node.js", "Database Design"],
    applicationInstructions: "To apply, please email alex@alexgleason.me with a link to your github or gitlab profile."
  },
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    description: "Join our team to build cutting-edge user interfaces for decentralized social platforms. Work with React, TypeScript, and the latest web technologies.",
    requirements: [
      "5+ years of frontend development experience",
      "Expert knowledge of React, TypeScript, and modern web standards",
      "Experience with decentralized protocols (preferred)",
      "Passion for open source and user privacy"
    ],
    tags: ["React", "TypeScript", "Nostr", "Web3"],
    applicationInstructions: "To apply, please email alex@alexgleason.me with a link to your github or gitlab profile."
  },
  {
    title: "Senior Backend Developer", 
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    description: "Build robust, scalable backend systems for our decentralized social platforms. Work with modern backend technologies and decentralized protocols.",
    requirements: [
      "5+ years of backend development experience",
      "Strong knowledge of distributed systems and APIs",
      "Experience with Rust, Go, or similar systems languages",
      "Understanding of cryptography and decentralized protocols"
    ],
    tags: ["Rust", "Go", "Distributed Systems", "Cryptography"],
    applicationInstructions: "To apply, please email alex@alexgleason.me with a link to your github or gitlab profile."
  },
  {
    title: "Marketing and Communications Assistant",
    department: "Marketing",
    type: "Part-time/Contract",
    location: "Remote",
    description: "Help us spread the word about our mission to build free, decentralized social platforms. Create content, manage community outreach, and support our marketing initiatives.",
    requirements: [
      "2+ years of marketing or communications experience",
      "Excellent written and verbal communication skills",
      "Experience with social media management and content creation",
      "Interest in decentralization and open source technology"
    ],
    tags: ["Content Marketing", "Social Media", "Community", "Writing"],
    applicationInstructions: "To apply, please email mk@marykatefain.com with a link to your website or portfolio and a letter of interest."
  }
];

const contributionAreas = [
  {
    icon: <GitBranch className="h-8 w-8 text-blue-500" />,
    title: "Code Contributions",
    description: "Contribute to our open source projects on GitLab. From bug fixes to new features, every contribution helps build the future of decentralized social media.",
    action: "Browse Issues",
    link: "https://gitlab.com/soapbox-pub"
  },
  {
    icon: <Users className="h-8 w-8 text-green-500" />,
    title: "Community Support",
    description: "Help newcomers get started, answer questions, and foster a welcoming community around our projects and the broader Nostr ecosystem.",
    action: "Join Community",
    link: "https://ditto.pub"
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-purple-500" />,
    title: "Documentation",
    description: "Improve our documentation, write tutorials, or help translate our projects to make them accessible to developers and users worldwide.",
    action: "View Docs",
    link: "https://gitlab.com/soapbox-pub"
  },
  {
    icon: <Zap className="h-8 w-8 text-orange-500" />,
    title: "Testing & Feedback",
    description: "Test our applications, report bugs, suggest improvements, and help us ensure our software meets the needs of real users.",
    action: "Report Issues",
    link: "https://gitlab.com/soapbox-pub"
  }
];

export default function GetInvolved() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display text-gray-900 mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us in building the future of decentralized social media. Whether you're a developer, designer, writer, or just passionate about free software, there's a place for you in our community.
            </p>
          </div>
        </section>

        {/* Open Source Contributions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                Open Source Contributions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                All our projects are open source and available on GitLab. We welcome contributions from developers of all skill levels.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {contributionAreas.map((area, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {area.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {area.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {area.description}
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <a href={area.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                            {area.action} <ExternalLink className="ml-2 h-3 w-3" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're growing our team! Join us in building the next generation of social media platforms.
              </p>
            </div>

            <div className="grid gap-8">
              {openPositions.map((position, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0 mb-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 mb-1">
                        {position.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="inline-flex items-center">
                          <Briefcase className="h-3 w-3 mr-1" />
                          {position.department}
                        </span>
                        <Badge variant="secondary">{position.type}</Badge>
                        <span>{position.location}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-gray-600 mb-4">
                      {position.description}
                    </CardDescription>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">How to Apply:</h4>
                      <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-md border-l-4 border-blue-500">
                        {position.applicationInstructions}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {position.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you're contributing code, joining our team, or spreading the word, every action helps build a more open and free internet for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://gitlab.com/soapbox-pub" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                  Start Contributing <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                <a href="mailto:careers@soapbox.pub" className="inline-flex items-center">
                  Apply for a Position <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}