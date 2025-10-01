import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { BlogList } from '@/components/blog/BlogList';
import { ShakespeareMailchimpForm } from '@/components/ShakespeareMailchimpForm';
import { useSEO } from '@/hooks/useSEO';
import { getAllPostsIncludingResources } from '@/lib/blog/utils';
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
    title: 'Shakespeare Resources - FAQ & Guides | Soapbox',
    description: 'Complete resource hub for Shakespeare AI website builder. Find answers to frequently asked questions and explore tutorials on how to make the most of Shakespeare.',
    type: 'website',
    keywords: 'shakespeare resources, shakespeare faq, shakespeare blog, ai website builder help, shakespeare tutorials',
    image: '/public/shakespeare-resources/resrouce-center.png',
  });

  // Filter blog posts tagged with "shakespeare-resource"
  const shakespearePosts = getAllPostsIncludingResources().filter(post =>
    post.tags?.includes('shakespeare-resource')
  );

  const faqData = [
    {
      question: "What is Shakespeare and how does it work?",
      answer: "Shakespeare is an AI-powered website builder that runs directly in your web browser. Simply describe what type of website you want, and Shakespeare creates it in real-time with a live preview system. You can even view and edit the code, and share your site with a unique URL."
    },
    {
      question: "Do I need coding experience to use Shakespeare?",
      answer: "No coding experience is required! Shakespeare is designed for everyone - from complete beginners to experienced developers. You interact with the AI using natural language, just like having a conversation with a skilled web developer. However, if you wish to view and edit the code directly, it's availeable for those with coding knowledge."
    },
    {
      question: "How much does Shakespeare cost?",
      answer: "Shakespeare itself is free, we simply provide a tool to access AI models. The models themselves charge based on usage, ranging from practically free (ex. Google's Gemini Flash) to more premium options (ex. Claude Sonnet 4). We cannot change their pricing, but you can choose which model to use and configure your own providers. For users who do not wish to set up their own AI providers, we offer a default provider with multiple price points."
    },
    {
      question: "What types of websites can I build with Shakespeare?",
      answer: "You can build virtually any type of website: portfolios, business sites, e-commerce stores, blogs, dashboards, social media apps, and more. Shakespeare can create everything from simple landing pages to complex web applications. Shakespeare specializes in building Nostr sites, and is capable of creating Nostr clients, explorers, and other tools that interact with the Nostr protocol."
    },
    {
      question: "What types of things can I NOT build with Shakespeare?",
      answer: "Shakespeare is only for builing sites that run in the browser. You cannot build backend services, mobile apps, or desktop applications. Additionally, we do not reccomend using Shakespeare for building sites to transmit any sensitive or private user data."
    },
    {
      question: "What AI providers does Shakespeare support?",
      answer: "Shakespeare supports OpenRouter, OpenAI, Anthropic, xAI, PayPerQ, Z.ai, Moonshot, and the ability to add a custom provider. We also have a default provider for users who do not wish to set up their own."
    },
    {
      question: "Can I import existing projects into Shakespeare?",
      answer: "Yes! Shakespeare can import and work with existing codebases from GitHub, GitLab, and Nostr repositories as we ll as importing via .zip files. You can enhance existing projects with AI assistance and even submit pull requests back to the original repositories."
    },
    {
      question: "Can I download my website's source code?",
      answer: "Absolutely! You can download the complete source code as a ZIP file, giving you full ownership of your website. You can also deploy it anywhere you want or continue development locally. You can also sync it with your GitHub or GitLab account for version control and collaboration."
    },
    {
      question: "Where is my data stored",
      answer: "Shakespeare runs entirely in your web browser, so your data is stored locally on your device. We do not store any of your personal data or website content on our servers. If you choose to sign in with a Nostr key, your Nostr events will be submitted to relays."
    },
    {
      question: "What makes Shakespeare different from other website builders?",
      answer: "Shakespeare combines AI-powered building with complete user freedom. Unlike traditional website builders, you're not locked into a platform, you maintain data sovereignty, and you can choose from multiple AI providers in a competitive marketplace. Shakespeare is also completely open source and built to work with decentralized and censorship-resistant systems."
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
              Find answers to common questions and explore our latest guides.
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
                Shakespeare Guides and Tutorials
              </h2>
            </div>
            <p className="text-lg text-gray-600">
              Deep dive into becoming a Shakespeare power user
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
                      Blog posts tagged with "shakespeare-resource" will appear here. Check back soon for updates!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <ShakespeareMailchimpForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}