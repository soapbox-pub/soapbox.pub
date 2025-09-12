import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Terminal,
  Zap,
  Code,
  Globe,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import { EmailSignupForm } from "../../EmailSignupForm";

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: { name?: string; picture?: string };
  ogImage: { url?: string };
  tags?: string[];
}

export const meta: BlogPostMeta = {
  "slug": "revive-legacy-website",
  "title": "Revive Your Legacy Website with MKStack",
  "excerpt":
    "Transform your old website from a static archive into a dynamic, Nostr-powered hub. Breathe new life into legacy content with AI-powered modernization and live decentralized feeds.",
  "coverImage": "/assets/blog/revive-legacy-website/website-revive-og.png",
  "date": "2025-06-30",
  "author": {
    "name": "Derek Ross",
    "picture": "/assets/avatars/derek.jpg",
  },
  "ogImage": {
    "url": "/assets/blog/revive-legacy-website/website-revive-og.png",
  },
  "tags": ["mkstack", "tutorial", "legacy"]
};

export default function ReviveLegacyWebsite() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-12 text-center">
        <div className="mb-6">
          <Badge
            variant="secondary"
            className="mb-4 bg-violet-50 text-violet-700 border-violet-200"
          >
            <RefreshCw className="w-3 h-3 mr-1" />
            Tutorial
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revive Your Legacy
            <span className="text-violet-600"> Website</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your old website from a static archive into a dynamic,
            Nostr-powered hub. Breathe new life into legacy content with
            AI-powered modernization and live decentralized feeds.
          </p>
        </div>
      </div>

      <p>
        <strong>Do you have an old personal site collecting digital dust? Maybe a
        community homepage that hasn't changed since the early 2000s? Or a
        business website that's still functional, but stuck in the past?</strong>
      </p>
      <p>You're not alone.</p>
      <p>
        Across the web, countless websites are frozen in time. They're still
        packed with valuable content, memories, or resources, but lacking the
        design, features, and connectivity that modern audiences expect.
      </p>
      <p>It doesn't have to stay that way.</p>

      <h2>AI-Powered Website Modernization</h2>
      <p>
        <b>
          With <strong>MKStack</strong>, you can breathe new life into your
          existing website—without starting from scratch.
        </b>{" "}
        Whether your site is made of old HTML files, Markdown posts, or a mix of
        legacy pages, <strong>MKStack</strong> makes it easy to bring it all
        into the modern era.
      </p>
      <p>
        You don't need to be a designer or developer. Just run two simple
        commands:
      </p>

      <div className="not-prose my-12">
        <div className="bg-gray-900 rounded-lg p-6 text-white">
          <div className="flex items-center mb-4">
            <Terminal className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-green-400 font-mono text-sm">Terminal</span>
          </div>
          <div className="space-y-3">
            <div className="font-mono text-sm">
              <span className="text-gray-400">$</span>{" "}
              <span className="text-yellow-400">
                npm install -g @getstacks/stacks
              </span>
            </div>
            <div className="font-mono text-sm">
              <span className="text-gray-400">$</span>{" "}
              <span className="text-yellow-400">stacks mkstack</span>
            </div>
          </div>
        </div>
      </div>

      <p>
        Enter a few guided prompts and the beauty and ease behind the{" "}
        <strong>MKStack</strong> template will be revealed.{" "}
        <strong>Dork</strong>, the name of the Stacks agent, will begin by
        cleaning up your layout, applying a fresh, modern design, and ensuring
        everything looks great on mobile devices. Dork will improve the overall
        user experience, preserve your original content and structure, and even
        suggest new pages or features to help your site evolve.
      </p>
      <p className="text-lg font-semibold text-violet-600">
        In just minutes, your old site is transformed before your very eyes.
        It's refreshed, relevant, and ready for the future, all while honoring
        its original character.
      </p>

      <h2>Who is this for?</h2>
      <p>
        <b>
          Whether you're a <strong>creator</strong> looking to revive an old
          blog or portfolio, a <strong>community organizer</strong> modernizing
          your group's homepage, or a <strong>business owner</strong> updating a
          static site to include social reach and a fresh design;{" "}
          <strong>MKStack</strong> is built for you.
        </b>{" "}
        It's designed to empower anyone who wants to preserve their existing
        content while making it relevant for today's web, complete with modern
        design and Nostr-powered connectivity.
      </p>

      {/* Target audience showcase */}
      <div className="not-prose my-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Perfect for Every Use Case
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50">
            <CardHeader>
              <CardTitle className="text-blue-800 text-lg flex items-center">
                <Sparkles className="w-5 h-5 mr-2" />
                Creators & Artists
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="space-y-1 text-sm">
                <li>• Revive old blogs and portfolios</li>
                <li>• Showcase work with modern design</li>
                <li>• Connect with Nostr community</li>
                <li>• Auto-updating content feeds</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100/50">
            <CardHeader>
              <CardTitle className="text-green-800 text-lg flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                Community Organizers
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="space-y-1 text-sm">
                <li>• Modernize group homepages</li>
                <li>• Live event calendars</li>
                <li>• Community announcements</li>
                <li>• Decentralized communication</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50">
            <CardHeader>
              <CardTitle className="text-purple-800 text-lg flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Business Owners
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <ul className="space-y-1 text-sm">
                <li>• Update static business sites</li>
                <li>• Fresh, responsive design</li>
                <li>• Social media integration</li>
                <li>• Enhanced customer reach</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>Why Nostr integration?</h2>
      <p>
        Because a website that never changes fails to be relevant. Connecting it
        to Nostr transforms it from a static archive into a dynamic extension of
        your digital life, built on a foundation of true sovereignty. The "why"
        goes deeper than just keeping content fresh; it's about aligning your
        website with the core principles of Nostr itself.
      </p>
      <p>
        On Nostr, you own your content and your data, free from the control of
        any corporation. By feeding this content to your site, you reinforce
        that ownership, creating a definitive showcase for your work that no
        platform can alter or take away. Nostr is decentralized and
        censorship-resistant, meaning your website's live feed is built on a
        foundation that guarantees your voice cannot be silenced. Because you
        are in charge of your social graph and your attention, you get to be the
        algorithm. You decide what content gets highlighted on your site,
        creating an authentic, unfiltered narrative for your audience. This
        integration makes a powerful statement: your website is not just a
        collection of pages, but a true, decentralized hub that reflects your
        values of freedom and self-ownership.
      </p>

      <h2>What kind of content can you integrate?</h2>
      <p>
        The beauty of this <strong>MKStack</strong> lies in the rich diversity
        of content you can pull from Nostr to dynamically enhance your website.
        It's about bringing your entire digital presence to life and showcasing
        it to the world.
      </p>
      <ul>
        <li>
          You can seamlessly embed your <strong>latest posts to create a "Micro-blog" feed</strong>.
        </li>
        <li>
          For writers, your <strong>long-form articles</strong> can automatically populate your
          blog page, creating a self-updating portfolio.
        </li>
        <li>
          Photographers and artists can build stunning <strong>photo galleries and video
          showcases</strong> by pulling media directly from their posts, even filtering
          by specific hashtags.
        </li>
        <li>
          You can even embed live streams to capture your audience the moment
          you go live.
        </li>
        <li>
          You can display a public list of <strong>calendar events</strong>, community meetups, and online gatherings.
        </li>
      </ul>
      <p>
        Essentially, almost any type of activity you share on the Nostr protocol
        can become a living component of your website, transforming it from a
        simple page into a comprehensive hub for you, your content, your
        community, or your business.
      </p>


      <h2>See Nostr in Action on Soapbox.pub</h2>
      <p>
        <strong>This very method was used to revive Soapbox.pub itself!</strong> The{" "}
        <a
          href="https://web.archive.org/web/20240920212157/http://soapbox.pub/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-600 hover:text-violet-800 underline"
        >
          old Soapbox website
        </a>{" "}
        was a static site that hadn't been updated in years. Using this process,
        we transformed it into the dynamic, Nostr-powered hub that pulls in live profiles,
        social media posts, app showcases, and protocol specifications.
        <strong> We encourage you to explore this site</strong> to discover the many
        creative ways dynamic Nostr content has been integrated. From the team
        posts on our About page to the live developer feeds throughout the site,
        you'll find inspiration for your own Nostr-powered website!
      </p>

      <div className="not-prose my-12">
        <img
          src="/assets/blog/revive-legacy-website/example-integrations.png"
          alt="Screenshot of the revived Soapbox.pub website"
          className="rounded-lg shadow-lg border border-gray-200 mx-auto"
        />
        <p className="text-sm text-gray-600 mt-2 text-center">
          The revived Soapbox.pub, showcasing dynamic Nostr content
        </p>
      </div>


      <h2>Upgrading your Legacy Website</h2>
      <h3>Step 1: Install Stacks and create your project</h3>
      <p>
        First, open your terminal. We'll install the Stacks command-line
        interface.
      </p>

      <div className="not-prose my-12">
        <div className="bg-gray-900 rounded-lg p-6 text-white">
          <div className="flex items-center mb-4">
            <Terminal className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-green-400 font-mono text-sm">Terminal</span>
          </div>
          <div className="space-y-3">
            <div className="font-mono text-sm">
              <span className="text-gray-400">$</span>{" "}
              <span className="text-yellow-400">
                npm install -g @getstacks/stacks
              </span>
            </div>
          </div>
        </div>
      </div>

      <p>
        Once the installation is complete, you can create your new website
        project using the <strong>MKStack</strong> template. This command will
        create a new folder for your project and kick off an interactive session
        with <strong>Dork</strong>, your AI agent.
      </p>

      <div className="not-prose my-12">
        <div className="bg-gray-900 rounded-lg p-6 text-white">
          <div className="flex items-center mb-4">
            <Terminal className="w-5 h-5 mr-2 text-green-400" />
            <span className="text-green-400 font-mono text-sm">Terminal</span>
          </div>
          <div className="space-y-3">
            <div className="font-mono text-sm">
              <span className="text-gray-400">$</span>{" "}
              <span className="text-yellow-400">stacks mkstack</span>
            </div>
          </div>
        </div>
      </div>

      <p>
        Follow the prompts to name your project. Dork will then set up the
        entire project structure for you. If you're running into problems or
        need additional insight, check out our{" "}
        <a
          href="/blog/mkstack-tutorial"
          target="_blank"
          rel="noopener noreferrer"
        >
          full tutorial
        </a>{" "}
        for more information.
      </p>

      <h3>Step 2: Bring your old website in</h3>
      <p>
        Now, you need to give <strong>MKStack</strong> access to your old
        website's files. Locate the directory on your computer where your old
        site is stored (e.g., ~/Documents/MyOldSite).
      </p>
      <p>
        Copy that entire folder and place it inside the new{" "}
        <strong>MKStack</strong> project directory you just created. For
        clarity, let's say you've copied it and named the folder old-site. Your
        project structure might now look something like this:
      </p>
      <div className="not-prose my-12">
        <img
          src="/assets/blog/revive-legacy-website/directory.png"
          alt="Directory, including structure of the old website"
          className="mx-auto rounded-lg shadow-lg"
        />
      </div>

      <h3>Step 3: Tell Dork what to do</h3>
      <p>
        This is where the magic happens. With your old content now inside the
        project, you can instruct Dork, your AI agent, on how to use it. Start a
        conversation with Dork in your terminal and tell it what to build using
        the files in the old-site directory. Be specific and clear.
      </p>
      <p>
        <strong>
          Here are several examples of prompts you could give Dork:
        </strong>
      </p>
      <p>To rebuild your homepage:</p>
      <div className="not-prose my-6">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <p className="text-blue-800 italic">
            "Use the file /old-site/index.html as the content for the main
            homepage. Apply the new modern design to it."
          </p>
        </div>
      </div>

      <p>To create a multi-page site:</p>
      <div className="not-prose my-6">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <p className="text-blue-800 italic">
            "Create an 'About' page using the content from /old-site/about.html
            and a 'Contact' page using the content from /old-site/contact.html."
          </p>
        </div>
      </div>

      <p>To migrate a blog from Markdown files:</p>
      <div className="not-prose my-6">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <p className="text-blue-800 italic">
            "Take all the markdown files located in the /old-site/posts/
            directory and create a new 'Blog' section. Each file should become a
            separate blog post, and please create a main page that lists all of
            them."
          </p>
        </div>
      </div>

      <p>To build a gallery from your old images:</p>
      <div className="not-prose my-6">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <p className="text-blue-800 italic">
            "Find all the JPG images inside the /old-site/gallery/ folder and
            create a new 'Gallery' page displaying them in a responsive grid."
          </p>
        </div>
      </div>

      <p>
        <strong>Let Dork have full creative control:</strong>
      </p>
      <div className="not-prose my-6">
        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <p className="text-blue-900 font-semibold italic">
            "Use all of the content from the /old-site/ directory and build a
            completely new modern website."
          </p>
        </div>
      </div>
      <p>
        Dork will parse your requests, read the specified files, and generate
        the new React components and pages for your site. Once your legacy
        content is in place and looking fresh, you're ready for the next
        powerful step: enriching it with live Nostr feeds.
      </p>

      <h2>Adding Live Nostr Feeds</h2>
      <p>
        Now that your site has a modern foundation with your legacy content
        beautifully integrated, it's time to connect it to the living, breathing
        world of Nostr. This is the key to transforming your static pages into a
        dynamic, constantly updated hub.
      </p>
      <p>
        The process for adding Nostr feeds is exactly the same as it was for
        migrating your old content: you simply continue the conversation with
        Dork. There's no complex code to write. Dork already understands Nostr
        concepts like kinds, pubkeys, and relays, so you can ask for what you
        want in plain English.
      </p>
      <p>
        In your terminal, within your project directory, start or continue your
        session with Dork and give it a clear prompt. After Dork makes the
        changes, you can see the results instantly by running{" "}
        <code>npm run dev</code> in a separate terminal window and opening the
        provided local URL in your browser.
      </p>
      <p>
        <strong>
          Here are some examples of prompts to help you get started:
        </strong>
      </p>
      <p>
        Remember to replace <code>npub1yourpubkeygoeshere...</code> with your
        actual Nostr public key.
      </p>
      <p>To add your Nostr profile:</p>
      <div className="not-prose my-6">
        <div className="bg-violet-50 border-l-4 border-violet-400 p-4 rounded-r-lg">
          <p className="text-violet-800 italic">
            "On the 'About' page, add my Nostr profile card. My pubkey is
            npub1yourpubkeygoeshere...."
          </p>
        </div>
      </div>
      <p>To display your latest short notes:</p>
      <div className="not-prose my-6">
        <div className="bg-violet-50 border-l-4 border-violet-400 p-4 rounded-r-lg">
          <p className="text-violet-800 italic">
            "On the homepage, right below the main welcome message, add a list
            of my 5 most recent Nostr notes."
          </p>
        </div>
      </div>

      <p>To create a self-updating blog:</p>
      <div className="not-prose my-6">
        <div className="bg-violet-50 border-l-4 border-violet-400 p-4 rounded-r-lg">
          <p className="text-violet-800 italic">
            "Create a new page called 'Blog' and display my 10 most recent
            long-form articles from Nostr. List them with the title, a brief
            summary, and a link to the full article."
          </p>
        </div>
      </div>

      <p>To build a live photo gallery:</p>
      <div className="not-prose my-6">
        <div className="bg-violet-50 border-l-4 border-violet-400 p-4 rounded-r-lg">
          <p className="text-violet-800 italic">
            "I need a new page at /gallery. Create a photo grid showing the
            latest 12 images from my Nostr image posts that are tagged with
            #photography."
          </p>
        </div>
      </div>

      <p>To list your upcoming events:</p>
      <div className="not-prose my-6">
        <div className="bg-violet-50 border-l-4 border-violet-400 p-4 rounded-r-lg">
          <p className="text-violet-800 italic">
            "On the sidebar of the homepage, add a list of my 3 upcoming
            calendar events from Nostr."
          </p>
        </div>
      </div>

      <p>
        <strong>Let Dork have full creative control:</strong>
      </p>
      <div className="not-prose my-6">
        <div className="bg-gradient-to-r from-violet-100 to-purple-100 border-l-4 border-violet-500 p-4 rounded-r-lg">
          <p className="text-violet-900 font-semibold italic">
            "Fully integrate Nostr into my website, adding the latest notes,
            latest articles, latest calendar events, and full social
            integration. My pubkey is npub1yourpubkeygoeshere"
          </p>
        </div>
      </div>
      <p>
        And just like that, you are weaving live, decentralized content streams
        directly into your revamped website. You can mix and match these
        components on any page, giving you complete control over how your Nostr
        presence is displayed to the world.
      </p>

      <h2>From Archive to Alive</h2>
      <h3>The "Before": A Classic Legacy Site</h3>
      <p>
        Here's a look at a familiar sight; a simple, personal homepage. It
        works. It holds valuable content. But it's clearly a product of another
        era.
      </p>

      <div className="not-prose my-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src="/assets/blog/revive-legacy-website/before-homepage.png"
              alt="Legacy website homepage - outdated design from early 2000s"
              className="rounded-lg shadow-lg border border-gray-200"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Classic homepage stuck in time
            </p>
          </div>
          <div>
            <img
              src="/assets/blog/revive-legacy-website/before-content.png"
              alt="Legacy website content page - static HTML with manual updates"
              className="rounded-lg shadow-lg border border-gray-200"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Static content requiring manual updates
            </p>
          </div>
        </div>
      </div>

      <p>It carries all the hallmarks of a site frozen in time:</p>
      <ul>
        <li>
          <strong>Outdated Design:</strong> Visually stuck in a decade-old
          aesthetic.
        </li>
        <li>
          <strong>Manual Maintenance:</strong> Every change means editing raw
          HTML. The "Latest News" section is anything but.
        </li>
        <li>
          <strong>Static and Stale:</strong> It feels more like an archive than
          an active reflection of the person behind it.
        </li>
      </ul>
      <p>
        The soul of the site is still there, but its presentation is holding it
        back. It's digital dust, waiting to be uncovered.
      </p>

      <h3>The "After": Modern, Dynamic, and Connected</h3>
      <p>
        Now, here's that same website after being transformed with{" "}
        <strong>MKStack</strong> and enhanced with Nostr integration.
      </p>

      <div className="not-prose my-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src="/assets/blog/revive-legacy-website/after-homepage.png"
              alt="Modern website homepage with sleek design and live Nostr feeds"
              className="rounded-lg shadow-lg border border-gray-200"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Modern homepage with live Nostr integration
            </p>
          </div>
          <div>
            <img
              src="/assets/blog/revive-legacy-website/after-content.png"
              alt="Dynamic website content with auto-updating feeds and responsive design"
              className="rounded-lg shadow-lg border border-gray-200"
            />
            <p className="text-sm text-gray-600 mt-2 text-center">
              Dynamic content with auto-updating feeds
            </p>
          </div>
        </div>
      </div>

      <p>
        By simply pointing Dork at the original files and answering a few
        prompts, the site is reborn:
      </p>
      <ul>
        <li>
          <strong>Sleek, Responsive Design:</strong> A modern UI that looks
          sharp on any device, built with accessibility and style in mind.
        </li>
        <li>
          <strong>Legacy Content Preserved:</strong> Original sections like
          "About Me" or past blog posts are retained and refreshed.
        </li>
        <li>
          <strong>Live Nostr Integration:</strong> The homepage now pulls in
          real-time content—notes, articles, photos, even calendar
          events—directly from the owner's Nostr identity. Everything updates
          automatically, no manual edits needed.
        </li>
      </ul>
      <p>
        What was once a static snapshot has become a living, breathing hub. It
        still honors the past, but now it actively reflects the present, with
        content that evolves as you do.
      </p>

      <h2>Reimagine and Rebuild</h2>
      <p>
        Transforming your website from a static relic into a dynamic, living hub
        is no longer a daunting, code-heavy, expensive task. With{" "}
        <strong>MKStack</strong>, it's as easy as having a conversation. It
        bridges your timeless content with the decentralized power of{" "}
        <strong>Nostr</strong>, turning your site into more than just a
        redesign; it becomes a living extension of your digital identity. Your
        words, your work, and your community take center stage, all built on a
        foundation of ownership, permanence, and freedom from censorship.
      </p>
      <p className="text-lg font-semibold text-violet-600">
        Manual updates? A thing of the past. Don't let your valuable content
        fade into obscurity.
      </p>

      {/* Call to action */}
      <div className="not-prose my-16">
        <div className="bg-gradient-to-r from-violet-600 to-purple-800 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Revive Your Website Today
          </h2>
          <p className="text-xl text-violet-100 mb-8 max-w-3xl mx-auto">
            Ready to transform your legacy website into a modern, dynamic hub?
            Install Stacks and <strong>MKStack</strong> to begin your journey
            into AI-powered website modernization with Nostr integration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="bg-white text-violet-700 hover:bg-violet-50 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a
                href="https://getstacks.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code className="w-5 h-5 mr-2" />
                Get Started with Stacks
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-violet-700 px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a
                href="/blog/mkstack-tutorial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="w-5 h-5 mr-2" />
                Read Full Tutorial
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              Get notified of new releases!
            </h3>
            <div className="max-w-md mx-auto">
              <EmailSignupForm tags={["MKStack"]} />
            </div>
          </div>
        </div>
      </div>

      <p className="text-2xl font-bold text-violet-600 text-center">
        Happy website reviving! 🌱
      </p>
    </article>
  );
}
