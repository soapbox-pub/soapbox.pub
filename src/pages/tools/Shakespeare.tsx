import { ArrowRight, Download, Upload, GitBranch, Code, FileText, Zap, Shield, Palette, Monitor, Smartphone, PlayCircle, ExternalLink, Star, CheckCircle, Globe, HardDrive, Cpu, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ShakespeareMailchimpForm } from "@/components/ShakespeareMailchimpForm";
import { RotatingText } from "@/components/RotatingText";
import { useSEO } from "@/hooks/useSEO";

export default function Shakespeare() {
  // Set custom SEO for Shakespeare page
  useSEO({
    title: 'Shakespeare - Open Source AI Website Builder | Any Model, Any Provider, Total User Freedom',
    description: 'The open-source AI website builder that gives you total freedom with local file storage, any AI provider support, built-in Git integration, and full user control. Import from GitHub, edit code directly, upload files, and export everything.',
    type: 'website',
    image: '/shakespeare-resources/Screenshot from 2025-09-25 12-58-44.png',
    keywords: 'shakespeare, ai website builder, local storage, git integration, openrouter, claude, gpt, local ai models, file uploads, code editor',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Shakespeare",
      "description": "Next-generation AI website builder with local file storage and any AI provider support",
      "applicationCategory": "Development Tools",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Organization",
        "name": "Soapbox"
      },
      "featureList": [
        "Local file storage",
        "Any AI provider support",
        "Built-in Git integration",
        "Web-based code editor",
        "File uploads",
        "Project importing",
        "Data export"
      ]
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Banner */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 text-lg px-4 py-2 mb-8">
            🎭 Shakespeare 2.0
          </Badge>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 leading-tight mb-6">
            <span className="text-gray-900">Shakespeare, build me a </span>
            <RotatingText
              words={[
                { text: "website", color: "text-purple-600" },
                { text: "portfolio", color: "text-blue-600" },
                { text: "community", color: "text-purple-600" },
                { text: "game", color: "text-blue-600" },
                { text: "landing page", color: "text-purple-600" },
                { text: "signup form", color: "text-blue-600" },
                { text: "chatroom", color: "text-purple-600" },
                { text: "marketplace", color: "text-blue-600" }
              ]}
              interval={2000}
              className="font-display font-bold text-5xl md:text-6xl"
            />
          </h1>
          <p className="text-2xl font-medium text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
            Open Source • Any Model • Any Provider • Total freedom and control
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Revolutionary AI Website Builder</h2>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm">
                    <HardDrive className="w-4 h-4 mr-2 text-purple-600" />
                    Local Storage
                  </div>
                  <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm">
                    <Cpu className="w-4 h-4 mr-2 text-blue-600" />
                    Any AI Model
                  </div>
                  <div className="flex items-center bg-white px-3 py-2 rounded-full shadow-sm">
                    <GitBranch className="w-4 h-4 mr-2 text-yellow-600" />
                    Git Integration
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Just tell Shakespeare what website you want to build, and watch it create professional sites.
                  No coding required, but full code access when you want it. Your files never leave your computer.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg" asChild>
                  <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                    Start Building Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-2 border-purple-200 hover:bg-purple-50" asChild>
                  <a href="https://soapbox.pub/shakespeare-resources/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Resource Center
                  </a>
                </Button>
              </div>
            </div>

            {/* Featured Video Tutorial */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-purple-100">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">🎬 See Shakespeare in Action</h3>
                  <p className="text-gray-600">Watch Derek Ross build a complete website with Shakespeare</p>
                </div>

                <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/pK9gHjQr7nc?si=aoT84KgpSJ3iruZw"
                    title="Shakespeare Tutorial with Derek Ross"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <PlayCircle className="w-4 h-4 mr-1 text-purple-600" />
                    Live Demo
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    Real Project
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-600" />
                    Complete Project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What can I build with Shakespeare */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              What can I build with Shakespeare?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple landing pages to complex web applications - see real examples built by our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bookstr - Goodreads Alternative */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/assets/images/shakespeare-screenshots/bookstr-example.png"
                  alt="Bookstr - Goodreads alternative built with Shakespeare"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-purple-600 text-white">📚 Reading Platform</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bookstr</h3>
                <p className="text-gray-600 mb-4">Goodreads alternative for book lovers with reviews, ratings, and reading lists</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://bookstr.shakespeare.wtf/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Site
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* BrewCraft - Coffee Shop */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/assets/images/shakespeare-screenshots/coffeeshop-exmaple.png"
                  alt="BrewCraft - Coffee shop website built with Shakespeare"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-blue-600 text-white">☕ Business Site</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">BrewCraft</h3>
                <p className="text-gray-600 mb-4">Beautiful coffee shop website with menu, locations, and online ordering</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://brewcraft-phoenix.shakespeare.wtf/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Site
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Digital Stage - Band Website */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/assets/images/shakespeare-screenshots/band-website.png"
                  alt="Digital Stage - Band website built with Shakespeare"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-purple-600 text-white">🎵 Music & Entertainment</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Stage</h3>
                <p className="text-gray-600 mb-4">Professional band website with music player, tour dates, and fan engagement</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://digital-stage-w5v0.shakespeare.to/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Site
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* MoonFile - Game Platform */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/assets/images/shakespeare-screenshots/moonfile-game-example.png"
                  alt="MoonFile - Game platform built with Shakespeare"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-blue-600 text-white">🎮 Gaming</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">MoonFile</h3>
                <p className="text-gray-600 mb-4">Gaming platform with file sharing, community features, and game discovery</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://moonfile.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Site
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Nrello - Trello Clone */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/assets/images/shakespeare-screenshots/kanban-example.png"
                  alt="Nrello - Trello clone built with Shakespeare"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-purple-600 text-white">📋 Project Management</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nrello</h3>
                <p className="text-gray-600 mb-4">Kanban board project management tool inspired by Trello with drag-and-drop</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://nrello-3.shakespeare.wtf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Site
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* BlockParty - Bitcoin Dashboard */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/assets/images/shakespeare-screenshots/blockparty-example.png"
                  alt="BlockParty - Bitcoin mining dashboard built with Shakespeare"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-blue-600 text-white">₿ Crypto Dashboard</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">BlockParty</h3>
                <p className="text-gray-600 mb-4">Bitcoin block mining dashboard with real-time stats and analytics</p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://blockparty-dashboard.shakespeare.wtf/blockparty" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Site
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              These are just a few examples. Shakespeare can build virtually any web application you can imagine.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white" asChild>
              <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                Start Building Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Revolutionary Features - Visual First */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Freedom-Respecting Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature designed for maximum freedom, control, and flexibility
            </p>
          </div>

          {/* Feature 1: Local File Storage */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <HardDrive className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Your Files, Your Computer</h3>
                  <p className="text-purple-600 font-medium">True Decentralization</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Files are stored locally on your computer, not on our servers. This means complete control,
                  instant access, and true data sovereignty.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <Shield className="w-6 h-6 text-purple-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">Full Privacy</h4>
                    <p className="text-sm text-gray-600">Your data never leaves your device</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <Shield className="w-6 h-6 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">Secure Storage</h4>
                    <p className="text-sm text-gray-600">Files stored locally on your device</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl">
                    <Globe className="w-6 h-6 text-yellow-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">Your Control</h4>
                    <p className="text-sm text-gray-600">Complete ownership of your projects</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">Own Everything</h4>
                    <p className="text-sm text-gray-600">Complete project ownership</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 shadow-xl">
                <img
                  src="/shakespeare-resources/signin-to-nostr-settings.png"
                  alt="Local file storage interface showing files stored on user's computer"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="mt-6 text-center">
                  <Badge variant="outline" className="bg-white text-purple-700 border-purple-200">
                    Files stored locally - never on servers
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Any AI Provider */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-xl">
                <img
                  src="/shakespeare-resources/choose-your-model-example.png"
                  alt="AI provider selection interface showing OpenRouter, Claude, GPT, and local models"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="mt-6 space-y-3">
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge className="bg-blue-600 text-white">OpenRouter</Badge>
                    <Badge className="bg-purple-600 text-white">Claude</Badge>
                    <Badge className="bg-green-600 text-white">PayperQ</Badge>
                    <Badge className="bg-orange-600 text-white">Z.ai</Badge>
                    <Badge className="bg-red-600 text-white">OpenAI</Badge>
                    <Badge className="bg-indigo-600 text-white">Anthropic</Badge>
                  </div>
                  <p className="text-center text-sm text-gray-600">Choose from 50+ AI providers and models</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Use Any AI Provider</h3>
                  <p className="text-blue-600 font-medium">Maximum Flexibility</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Break free from vendor lock-in. Choose from dozens of AI providers including OpenRouter,
                  PayperQ, Z.ai, OpenAI, Anthropic, xAI, and even local models.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                    <Globe className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Cloud Providers</h4>
                      <p className="text-sm text-gray-600">OpenRouter, Claude, GPT-4, Gemini, and 40+ more models</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
                    <Monitor className="w-6 h-6 text-purple-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Local Models</h4>
                      <p className="text-sm text-gray-600">Run Llama, CodeLlama, and other models on your machine</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-xl">
                    <Settings className="w-6 h-6 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Custom APIs</h4>
                      <p className="text-sm text-gray-600">Connect to any compatible API endpoint</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Git Integration */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center">
                  <GitBranch className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Built-in Git Integration</h3>
                  <p className="text-yellow-600 font-medium">Professional Workflow</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Track changes, roll back to previous states, and collaborate seamlessly with GitHub,
                  GitLab, or any Git provider. Professional version control built right in.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">Automatic commit tracking</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">One-click rollback to any version</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">Push and pull from remote repositories</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-700">Collaborate with team members</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-xl">
                <img
                  src="/shakespeare-resources/connect-your-git-account.png"
                  alt="Git integration interface showing GitHub and GitLab connections"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="mt-6 text-center space-y-3">
                  <div className="flex justify-center space-x-3">
                    <Badge variant="outline" className="bg-white text-gray-700">GitHub</Badge>
                    <Badge variant="outline" className="bg-white text-gray-700">GitLab</Badge>
                    <Badge variant="outline" className="bg-white text-gray-700">Any Git Provider</Badge>
                  </div>
                  <p className="text-sm text-gray-600">Professional version control for every project</p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Project Importing */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-8 shadow-xl">
                <img
                  src="/shakespeare-resources/import-repository-example-1.png"
                  alt="Project import interface showing GitHub repository import with edit badge"
                  className="w-full rounded-2xl shadow-lg mb-4"
                />
                <img
                  src="/shakespeare-resources/import-repository-example-2.png"
                  alt="Edit with Shakespeare badge for easy project contribution"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="mt-6 text-center">
                  <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                    "Edit with Shakespeare" Badge Available
                  </Badge>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                  <Download className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Import from Anywhere</h3>
                  <p className="text-green-600 font-medium">Build on Existing Work</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Import projects directly from Git repositories and encourage others to contribute
                  with an "Edit with Shakespeare" badge. Perfect for open source collaboration.
                </p>

                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">🔗 Direct Repository Import</h4>
                    <p className="text-sm text-gray-600">Paste any GitHub or GitLab URL to start building immediately</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">🏷️ Contribution Badge</h4>
                    <p className="text-sm text-gray-600">Add a badge to your README to invite Shakespeare contributions</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-2">🤝 Open Source Friendly</h4>
                    <p className="text-sm text-gray-600">Perfect for hackathons, contributions, and collaborative development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 5: Code Editor & File Uploads */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Full Code Control</h3>
                  <p className="text-purple-600 font-medium">Edit Everything</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Built-in file explorer and code editor let you view and edit every file by hand.
                  Upload your own images, logos, and assets directly into your project.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded-xl">
                    <FileText className="w-6 h-6 text-purple-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">File Explorer</h4>
                    <p className="text-sm text-gray-600">Browse and organize all project files</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <Code className="w-6 h-6 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">Code Editor</h4>
                    <p className="text-sm text-gray-600">Syntax highlighting and smart editing</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl">
                    <Upload className="w-6 h-6 text-yellow-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">File Uploads</h4>
                    <p className="text-sm text-gray-600">Drag and drop images and assets</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl">
                    <Palette className="w-6 h-6 text-green-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">Asset Management</h4>
                    <p className="text-sm text-gray-600">Organize logos, images, and media</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 shadow-xl">
                <img
                  src="/shakespeare-resources/edit-the-code-in-browser.png"
                  alt="Built-in code editor showing file explorer and syntax highlighting"
                  className="w-full rounded-2xl shadow-lg mb-4"
                />
                <img
                  src="/shakespeare-resources/file-upload-ezample.png"
                  alt="File upload interface for adding images and assets"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="mt-6 text-center">
                  <Badge variant="outline" className="bg-white text-purple-700 border-purple-200">
                    Professional development environment in your browser
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Streaming & Interface */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Refined Experience
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail polished for the ultimate development experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-blue-200 hover:border-blue-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">AI Streaming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Watch your website come to life in real-time as the AI streams changes directly to your preview window.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Real-time code generation
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Live preview updates
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                    Instant feedback loop
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 hover:border-purple-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Refined Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Beautiful, intuitive interface designed for both beginners and professionals. Every interaction is smooth and purposeful.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Clean, modern design
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Responsive layout
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                    Keyboard shortcuts
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 hover:border-yellow-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Export Everything</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Export your complete project as a ZIP file, deploy to any hosting service, or push directly to GitHub.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-3"></div>
                    Complete source code
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-3"></div>
                    All assets included
                  </div>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-3"></div>
                    Deploy anywhere
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Screenshot Gallery */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-center text-gray-900">See It In Action</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <img
                  src="/shakespeare-resources/build-portfolio-example.png"
                  alt="Building a portfolio website with AI"
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-center text-sm text-gray-600">Building a professional portfolio website</p>
              </div>
              <div className="space-y-4">
                <img
                  src="/shakespeare-resources/make-website-example-ai-model-hub.png"
                  alt="Creating an AI model hub website"
                  className="w-full rounded-xl shadow-lg"
                />
                <p className="text-center text-sm text-gray-600">Creating complex applications with ease</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Center */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                New Resource Center
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to master Shakespeare and build amazing projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">📚 Complete Learning Hub</h3>
                <p className="text-gray-600 text-lg">
                  Access comprehensive tutorials, guides, and examples at our new Resource Center.
                  From beginner basics to advanced techniques, everything is covered.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-xl">
                  <PlayCircle className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Video Tutorials</h4>
                    <p className="text-sm text-gray-600">Step-by-step guides for every feature</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl">
                  <FileText className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Written Guides</h4>
                    <p className="text-sm text-gray-600">Detailed documentation and best practices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl">
                  <Code className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Code Examples</h4>
                    <p className="text-sm text-gray-600">Real projects you can import and learn from</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl">
                  <Users className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Support</h4>
                    <p className="text-sm text-gray-600">Get help from other Shakespeare builders</p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                asChild
              >
                <a href="https://soapbox.pub/shakespeare-resources/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Visit Resource Center
                </a>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-xl">
                <img
                  src="/shakespeare-resources/project-settings-export-and-delete.png"
                  alt="Shakespeare Resource Center interface"
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="mt-6 text-center">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg px-4 py-2">
                    🌟 soapbox.pub/shakespeare-resources
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Start Building Today
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of web development with complete freedom and control
            </p>
          </div>

          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-4 text-lg"
              >
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  🚀 Launch Shakespeare
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-purple-200 hover:bg-purple-50 px-8 py-4 text-lg"
              >
                <a href="https://soapbox.pub/shakespeare-resources/" target="_blank" rel="noopener noreferrer">
                  📚 Learn More
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">Free to Start</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">AI Models</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-600">∞</div>
                <div className="text-sm text-gray-600">Possibilities</div>
              </div>
            </div>

            <ShakespeareMailchimpForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}