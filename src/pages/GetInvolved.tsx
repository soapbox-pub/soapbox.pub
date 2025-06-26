import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Briefcase } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const openPositions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering", 
    type: "Full-time",
    location: "Remote",
    description: "Take ownership of features from concept to deployment. Work across our entire stack to deliver exceptional user experiences on decentralized platforms.",
    compensation: "Depends on experience and other circumstances, maximum budget $120k. Options available for W2 work + benefits (if in US) or contract outside of US.",
    requirements: [
      "5+ years of full stack development experience",
      "Proficiency in both frontend and backend technologies",
      "Experience with modern web frameworks and databases",
      "Strong problem-solving and architectural skills"
    ],
    tags: ["Typescript", "React", "Node.js", "Database Design"],
    applicationInstructions: "To apply, please email alex@alexgleason.me with a link to your github or gitlab profile."
  },
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    description: "Join our team to build cutting-edge user interfaces for decentralized social platforms. Work with React, TypeScript, and the latest web technologies.",
    compensation: "Depends on experience and other circumstances, maximum budget $120k. Options available for W2 work + benefits (if in US) or contract outside of US.",
    requirements: [
      "5+ years of frontend development experience",
      "Expert knowledge of React, TypeScript, and modern web standards",
      "Experience with decentralized protocols (preferred)",
      "Passion for open source and user privacy"
    ],
    tags: ["React", "TypeScript", "Nostr", "APIs"],
    applicationInstructions: "To apply, please email alex@alexgleason.me with a link to your github or gitlab profile."
  },
  {
    title: "Senior Backend Developer", 
    department: "Engineering",
    type: "Full-time",
    location: "Remote",
    description: "Build robust, scalable backend systems for our decentralized social platforms. Work with modern backend technologies and decentralized protocols.",
    compensation: "Depends on experience and other circumstances, maximum budget $120k. Options available for W2 work + benefits (if in US) or contract outside of US.",
    requirements: [
      "5+ years of backend development experience",
      "Strong knowledge of distributed systems and APIs",
      "Understanding of cryptography and decentralized protocols"
    ],
    tags: ["Typescript", "Databases", "SQL", "Distributed Systems", "Cryptography"],
    applicationInstructions: "To apply, please email alex@alexgleason.me with a link to your github or gitlab profile."
  }
];

export default function GetInvolved() {
  // Set custom SEO for Get Involved page
  useSEO({
    title: 'Get Involved with Soapbox - Careers & Open Source Contributions | Join Our Mission',
    description: 'Join Soapbox team and help build the future of decentralized social media. Open positions for developers, marketing, and open source contributors welcome.',
    type: 'website',
    image: '/assets/images/mentee.jpg',
    keywords: 'soapbox careers, decentralized social media jobs, open source contributions, remote developer jobs, nostr development, gitlab contributions',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "JobPosting",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "Soapbox",
        "url": "https://soapbox.pub"
      },
      "description": "Join our team building decentralized social media platforms and open source tools",
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Remote"
        }
      },
      "employmentType": ["FULL_TIME", "PART_TIME", "CONTRACTOR"]
    }
  });

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 overflow-hidden">
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/15 rounded-full blur-lg animate-pulse delay-500"></div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Open Source Project
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">
                    Get Involved
                  </span>
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
                  Join us in building the future of decentralized social media. Whether you're a developer, designer, writer, or just passionate about free software, there's a place for you in our community.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8" asChild>
                    <a href="https://gitlab.com/soapbox-pub" target="_blank" rel="noopener noreferrer">
                      Start Contributing
                    </a>
                  </Button>

                </div>
              </div>
              
              {/* Image/Illustration Side */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                  {/* Code Editor Mock */}
                  <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-2 px-4 py-3 bg-gray-800">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="ml-4 text-gray-400 text-sm font-mono">soapbox-project</span>
                    </div>
                    <div className="p-4 text-sm font-mono space-y-2">
                      <div className="text-purple-400">import <span className="text-blue-300">{'{ NostrProvider }'}</span> from <span className="text-green-300">'@nostrify/react'</span></div>
                      <div className="text-gray-500">// Building decentralized social media</div>
                      <div className="text-orange-400">function <span className="text-yellow-300">SoapboxApp</span>() {'{'}</div>
                      <div className="text-pink-400 ml-4">return <span className="text-blue-300">{'<'}</span><span className="text-red-400">NostrProvider</span><span className="text-blue-300">{'>'}</span></div>
                      <div className="text-gray-400 ml-8">{'<'}YourContribution /{'>'}
                      <div className="animate-pulse ml-8 w-2 h-4 bg-white inline-block"></div>
                      </div>
                      <div className="text-pink-400 ml-4">{'</'}<span className="text-red-400">NostrProvider</span>{'>'}</div>
                      <div className="text-orange-400">{'}'}</div>
                    </div>
                  </div>
                  
                  {/* Floating Stats */}
                  <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                      Free Software
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Decentralizion
                    </div>
                  </div>
                </div>
                
                {/* Additional Decorative Elements */}
                <div className="absolute top-1/4 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute bottom-1/4 -left-8 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-15 blur-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
                      <h4 className="font-semibold text-gray-900 mb-2">Compensation:</h4>
                      <p className="text-sm text-gray-600 bg-green-50 p-3 rounded-md border-l-4 border-green-500">
                        {position.compensation}
                      </p>
                    </div>
                    
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

        {/* Equal Opportunity Statement */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-50 border-t border-blue-100">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-blue-200">
              <h3 className="text-2xl font-bold font-display text-gray-900 mb-4 text-center">
                Equal Opportunity Employer
              </h3>
              <div className="prose prose-gray max-w-none text-center">
                <p className="text-gray-700 leading-relaxed mb-4">
                  We welcome applications from all qualified candidates regardless of race, color, religion, sex, sexual orientation, national origin, age, disability, veteran status, or any other characteristic protected by law.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Source Contributions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-4">
              Open Source Contributions
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              All our projects are open source and available on GitLab. We welcome contributions from developers of all skill levels.
            </p>
            <Button size="lg" asChild>
              <a href="https://gitlab.com/soapbox-pub" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                Visit our GitLab <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
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
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}