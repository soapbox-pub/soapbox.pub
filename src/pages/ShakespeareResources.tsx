import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BlogList } from '@/components/blog/BlogList';
import { useSEO } from '@/hooks/useSEO';
import { blogPosts } from '@/lib/blog/blogIndex';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, MessageSquare, Sparkles } from 'lucide-react';

export default function ShakespeareResources() {
  // Set custom SEO for Shakespeare Resources page
  useSEO({
    title: 'Shakespeare Resources - FAQ & Blog Posts | Soapbox',
    description: 'Complete resource hub for Shakespeare AI website builder. Find answers to frequently asked questions and explore blog posts about Shakespeare features, tutorials, and updates.',
    type: 'website',
    keywords: 'shakespeare resources, shakespeare faq, shakespeare blog, ai website builder help, shakespeare tutorials',
  });

  // Filter blog posts tagged with "shakespeare"
  const shakespearePosts = blogPosts.filter(post =>
    post.tags?.includes('shakespeare')
  );

  const faqData = [
    {
      question: "What is Shakespeare and how does it work?",
      answer: "Shakespeare is an AI-powered website builder that runs entirely on the Nostr protocol. You can build professional websites through natural conversation with AI assistants. Simply describe what you want, and Shakespeare creates it in real-time with a live preview system."
    },
    {
      question: "Do I need coding experience to use Shakespeare?",
      answer: "No coding experience is required! Shakespeare is designed for everyone - from complete beginners to experienced developers. You interact with the AI using natural language, just like having a conversation with a skilled web developer."
    },
    {
      question: "How much does Shakespeare cost?",
      answer: "Shakespeare uses transparent pay-per-use pricing with no subscriptions or hidden fees. Simple landing pages typically cost $2-5, complex web apps cost $10-25, and small changes cost $0.50-2. You only pay for actual AI generation time."
    },
    {
      question: "What types of websites can I build with Shakespeare?",
      answer: "You can build virtually any type of website: portfolios, business sites, e-commerce stores, blogs, dashboards, social media apps, and more. Shakespeare can create everything from simple landing pages to complex web applications."
    },
    {
      question: "Can I import existing projects into Shakespeare?",
      answer: "Yes! Shakespeare can import and work with existing codebases from GitHub and GitLab repositories. You can enhance existing projects with AI assistance and even submit pull requests back to the original repositories."
    },
    {
      question: "What are Nostr Service Providers (NSPs)?",
      answer: "NSPs are AI service providers that work through the Nostr protocol. Unlike traditional AI services that lock you into one provider, Shakespeare lets you choose from multiple NSPs, each offering different AI models, capabilities, and pricing options."
    },
    {
      question: "How do I get started with Shakespeare?",
      answer: "Simply visit shakespeare.diy and connect with any Nostr browser extension (like Alby, nos2x, or Flamingo). No email or corporate accounts required - your decentralized identity gives you complete control."
    },
    {
      question: "Is my data secure and private?",
      answer: "Yes! Shakespeare runs on the Nostr protocol, which means you maintain complete control over your data and identity. There's no vendor lock-in, and you have true data sovereignty with censorship resistance."
    },
    {
      question: "Can I download my website's source code?",
      answer: "Absolutely! You can download the complete source code as a ZIP file, giving you full ownership of your website. You can also deploy it anywhere you want or continue development locally."
    },
    {
      question: "What makes Shakespeare different from other website builders?",
      answer: "Shakespeare combines AI-powered building with the freedom of the Nostr protocol. Unlike traditional website builders, you're not locked into a platform, you maintain data sovereignty, and you can choose from multiple AI providers in a competitive marketplace."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
              📚 Resource Hub
            </Badge>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900">
              <span className="text-purple-600">🎭 Shakespeare</span> Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about Shakespeare - the AI-powered website builder running on Nostr.
              Find answers to common questions and explore our latest blog posts.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <MessageSquare className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-4xl font-display font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Get quick answers to the most common questions about Shakespeare
            </p>
          </div>

          <Card className="border-purple-200">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-4xl font-display font-bold text-gray-900">
                Shakespeare Blog Posts
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Latest updates, tutorials, and insights about Shakespeare
            </p>
          </div>

          {shakespearePosts.length > 0 ? (
            <BlogList posts={shakespearePosts} />
          ) : (
            <Card className="border-dashed border-2 border-gray-300">
              <CardContent className="py-12 px-8 text-center">
                <div className="max-w-sm mx-auto space-y-6">
                  <Sparkles className="h-12 w-12 text-gray-400 mx-auto" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      No Shakespeare posts found
                    </h3>
                    <p className="text-gray-600">
                      Blog posts tagged with "shakespeare" will appear here. Check back soon for updates!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}