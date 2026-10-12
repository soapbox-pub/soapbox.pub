import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { ExternalLink } from 'lucide-react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name?: string;
    picture?: string;
  };
  ogImage: {
    url?: string;
  };
  featured?: boolean;
  tags?: string[];
}

export const meta: BlogPostMeta = {
  "slug": "building-pathos",
  "title": "Building Agora: From Hackathon to Real-World Activism",
  "excerpt": "We built a censorship-resistant platform for activists in 48 hours. Within hours, Venezuelan activists were using it to organize against authoritarianism.",
  "coverImage": "/assets/blog/pathos/team-selfie.jpg",
  "date": "2026-01-23",
  "author": {
    "name": "Derek Ross",
    "picture": "/assets/avatars/derek.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/pathos/team-selfie.jpg"
  },
  "featured": false,
  "tags": ["nostr", "bitcoin", "activism", "hackathon", "agora"]
};

export default function BuildingPathos() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        Last weekend, four of us from Soapbox - <a href="https://njump.me/npub1q3sle0kvfsehgsuexttt3ugjd8xdklxfwwkh559wxckmzddywnws6cd26p" target="_blank" rel="noopener noreferrer">Alex</a>, <a href="https://njump.me/npub1jvnpg4c6ljadf5t6ry0w9q0rnm4mksde87kglkrc993z46c39axsgq89sc" target="_blank" rel="noopener noreferrer">MK</a>, <a href="https://njump.me/npub1scvyzz02ayma34hesz62pdrd5nhsmxp74hjq8msmfs9khh3r3drsnw68d8" target="_blank" rel="noopener noreferrer">Chad</a>, and <a href="https://njump.me/npub18ams6ewn5aj2n3wt2qawzglx9mr4nzksxhvrdc4gzrecw7n5tvjqctp424" target="_blank" rel="noopener noreferrer">myself</a> - flew to Austin for the AI Hack for Freedom hackathon at Bitcoin Park. We were joined by two external collaborators: <a href="https://njump.me/npub1ye5ptcxfyyxl5vjvdjar2ua3f0hynkjzpx552mu5snj3qmx5pzjscpknpr" target="_blank" rel="noopener noreferrer">Hzrd149</a>, creator of popular Nostr projects like <a href="https://nostrudel.ninja" target="_blank" rel="noopener noreferrer">Nostrudel</a>, <a href="https://github.com/hzrd149/applesauce" target="_blank" rel="noopener noreferrer">Applesauce</a>, and <a href="https://github.com/hzrd149/blossom" target="_blank" rel="noopener noreferrer">Blossom</a>, and <a href="https://njump.me/npub1zafcms4xya5ap9zr7xxr0jlrtrattwlesytn2s42030lzu0dwlzqpd26k5" target="_blank" rel="noopener noreferrer">Elsat</a> from the <a href="https://damus.io" target="_blank" rel="noopener noreferrer">Damus</a> team. The premise was simple but powerful: pair developers with real activists facing real problems. No hypothetical users. No imagined use cases. Just people whose lives depend on secure communication.
      </p>

      <figure className="my-8">
        <img
          src="/assets/blog/pathos/team-selfie.jpg"
          alt="The Agora team at Bitcoin Park - Alex, MK, Chad, Derek, and Hzrd149 giving thumbs up around a conference table"
          className="w-full rounded-lg"
        />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          The team at Bitcoin Park, ready to build something that matters.
        </figcaption>
      </figure>

      <h2>When the Problem Walks Into the Room</h2>

      <p>
        Our team was paired with <a href="https://en.wikipedia.org/wiki/Leopoldo_L%C3%B3pez" target="_blank" rel="noopener noreferrer">Leopoldo Lopez</a>, a Venezuelan opposition leader and former political prisoner who spent years in arbitrary detention under the Maduro regime. He's now co-founder of the World Liberty Congress, working to build a global alliance against autocracy.
      </p>

      <p>
        Leopoldo didn't come with a wishlist of features. He came with problems. Real ones:
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-red-500">
          <CardContent className="p-6 space-y-4">
            <div>
              <p className="font-semibold text-red-700">"Where are my people?"</p>
              <p className="text-sm text-muted-foreground">Activists can't find their communities when they're forced to migrate between platforms.</p>
            </div>
            <div>
              <p className="font-semibold text-red-700">"X was banned in Venezuela."</p>
              <p className="text-sm text-muted-foreground">Centralized platforms become targets. One government order and your entire network disappears.</p>
            </div>
            <div>
              <p className="font-semibold text-red-700">"$10 is huge when your bank account is frozen."</p>
              <p className="text-sm text-muted-foreground">Traditional payment rails fail when regimes freeze accounts.</p>
            </div>
            <div>
              <p className="font-semibold text-red-700">"The internet goes dark during critical moments."</p>
              <p className="text-sm text-muted-foreground">Connectivity gets throttled or shut down exactly when activists need it most.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        These aren't abstract concerns. They're daily realities for people fighting for basic freedoms.
      </p>

      <figure className="my-8">
        <img
          src="/assets/blog/pathos/team-discussion.jpg"
          alt="The team in deep discussion around a conference table at Bitcoin Park, planning the Agora architecture"
          className="w-full rounded-lg"
        />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          Planning session: mapping out how to solve real problems for activists.
        </figcaption>
      </figure>

      <h2>48 Hours to Build Something Real</h2>

      <p>
        We had a weekend. Our team - <a href="https://njump.me/npub1q3sle0kvfsehgsuexttt3ugjd8xdklxfwwkh559wxckmzddywnws6cd26p" target="_blank" rel="noopener noreferrer">Alex</a>, <a href="https://njump.me/npub1jvnpg4c6ljadf5t6ry0w9q0rnm4mksde87kglkrc993z46c39axsgq89sc" target="_blank" rel="noopener noreferrer">MK</a>, <a href="https://njump.me/npub1scvyzz02ayma34hesz62pdrd5nhsmxp74hjq8msmfs9khh3r3drsnw68d8" target="_blank" rel="noopener noreferrer">Chad</a>, and <a href="https://njump.me/npub18ams6ewn5aj2n3wt2qawzglx9mr4nzksxhvrdc4gzrecw7n5tvjqctp424" target="_blank" rel="noopener noreferrer">myself</a> from Soapbox, plus <a href="https://njump.me/npub1ye5ptcxfyyxl5vjvdjar2ua3f0hynkjzpx552mu5snj3qmx5pzjscpknpr" target="_blank" rel="noopener noreferrer">Hzrd149</a> and <a href="https://njump.me/npub1zafcms4xya5ap9zr7xxr0jlrtrattwlesytn2s42030lzu0dwlzqpd26k5" target="_blank" rel="noopener noreferrer">Elsat</a> - got to work. Elsat acted as project manager, organizing ideas and running user experience testing. Hzrd149 cracked Bluetooth mesh BLE, getting Bitchat to work for offline communication. By early Sunday morning, we had a working app.
      </p>

      <figure className="my-8">
        <img
          src="/assets/blog/pathos/terminal-dev.jpg"
          alt="Laptop showing terminal with Agora development environment running"
          className="w-full rounded-lg"
        />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          Building Agora - late night development at Bitcoin Park.
        </figcaption>
      </figure>

      <p>
        <strong><a href="https://agora.spot" target="_blank" rel="noopener noreferrer">Agora</a></strong> is a decentralized activist platform built on Nostr and Bitcoin. It's designed for people who can't afford to trust centralized infrastructure.
      </p>

      <figure className="my-8">
        <img
          src="/assets/blog/pathos/team-working.jpg"
          alt="The full Agora team working around a conference table with laptops, whiteboards covered in ideas behind them"
          className="w-full rounded-lg"
        />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          The full team heads down, building freedom tech.
        </figcaption>
      </figure>

      <p>Here's what we shipped:</p>

      <ul>
        <li><strong>Location-based feeds and a world map</strong> - Connect with activists in your country. See post activity globally.</li>
        <li><strong>Activist challenges with Bitcoin bounties</strong> - Create and complete challenges. Earn sats for documenting activism, creating art, gathering information.</li>
        <li><strong>Self-custodial Lightning wallet</strong> - Powered by the <a href="https://breez.technology/sdk/" target="_blank" rel="noopener noreferrer">Breez SDK</a>. No bank accounts required. Support activists directly with zaps.</li>
        <li><strong>Country organizers</strong> - Local leaders can moderate, pin important posts, and guide efforts.</li>
        <li><strong>Bluetooth mesh networking</strong> - Communicate during internet blackouts. Messages sync when connectivity returns.</li>
        <li><strong>AI chatbot powered by <a href="https://trymaple.ai/" target="_blank" rel="noopener noreferrer">Maple AI</a></strong> - A privacy-focused, contextually aware assistant. Ask it what's happening in Venezuela and it summarizes the country feed in real-time.</li>
        <li><strong>Multilingual support</strong> - Full translations in 7 languages including Spanish, Farsi, and Chinese.</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <figure>
          <img
            src="/assets/blog/pathos/pathos-feed.jpg"
            alt="Agora app showing the Feed tab with posts from Venezuelan activists"
            className="w-full rounded-lg"
          />
          <figcaption className="text-center text-sm text-muted-foreground mt-2">
            Real posts from Venezuelan activists on the Agora feed.
          </figcaption>
        </figure>
        <figure>
          <img
            src="/assets/blog/pathos/pathos-bitchat.png"
            alt="Agora Bitchat feature showing Bluetooth mesh messaging between users"
            className="w-full rounded-lg"
          />
          <figcaption className="text-center text-sm text-muted-foreground mt-2">
            Bitchat enables offline communication via Bluetooth mesh.
          </figcaption>
        </figure>
      </div>

      <p>
        By the end of the hackathon, we had real users. Not test accounts. Not our friends trying it out. Venezuelan activists using it to coordinate.
      </p>

      <h2>This Wasn't a Demo</h2>

      <p>
        The difference between a hackathon project and a real product is whether anyone actually needs it. We knew within hours.
      </p>

      <p>
        Less than 24 hours after launch, over 100 users had onboarded. The feedback wasn't about polish - it was about survival. Which features would help them stay safe? What happens when the internet goes down? Can organizers reach their people?
      </p>

      <figure className="my-8">
        <img
          src="/assets/blog/pathos/pathos-world-map.png"
          alt="Agora world map showing user activity across the globe with concentrations in the Americas, Europe, and Asia"
          className="w-full rounded-lg"
        />
        <figcaption className="text-center text-sm text-muted-foreground mt-2">
          Global reach: Agora users spanning multiple continents within days of launch.
        </figcaption>
      </figure>

      <p>
        That's when you know you've built something that matters.
      </p>

      <p>
        Our team won 25 million sats for this project. A huge thank you to <a href="https://www.bitcoinpark.com/" target="_blank" rel="noopener noreferrer">Bitcoin Park</a> and the <a href="https://hrf.org/" target="_blank" rel="noopener noreferrer">Human Rights Foundation</a> for organizing this event and supporting freedom tech that makes a real difference.
      </p>

      <h2>Why Nostr and Bitcoin?</h2>

      <p>
        Traditional platforms fail activists in predictable ways. They get banned. They get pressured by governments. They freeze accounts. They require identity verification. They store data that can be subpoenaed or hacked.
      </p>

      <p>
        Nostr eliminates single points of failure. There's no company to pressure, no server to seize, no database to compromise. Your identity is a cryptographic key that no government can revoke.
      </p>

      <p>
        Bitcoin solves the money problem. When bank accounts get frozen and payment processors cut you off, Lightning payments still work. A $10 <a href="/blog/zapping-101">zap</a> from someone in Germany can reach an activist in Caracas instantly, without asking anyone's permission.
      </p>

      <p>
        This isn't theoretical. The Maduro regime has frozen bank accounts and banned platforms. Iranian activists have seen the same. So have people in Belarus, Myanmar, Hong Kong. The tools we take for granted - payment apps, social media, messaging - become weapons when controlled by authoritarian states.
      </p>

      <h2>What's Next</h2>

      <p>
        We're transitioning from hackathon MVP to production. The app works, but it needs to work better. Faster photo uploads. More reliable notifications. Direct messaging. Video support.
      </p>

      <p>
        The Android APK is available now at <a href="https://agora.spot" target="_blank" rel="noopener noreferrer">agora.spot</a>. We're also working on additional distribution channels: <a href="https://zapstore.dev" target="_blank" rel="noopener noreferrer">Zapstore</a> support is coming soon, along with official Google Play and Apple App Store releases. Websites can be blocked, but apps distributed through Zapstore can't be censored. That's a critical difference for activists in countries where government censorship is routine.
      </p>

      <p>
        The roadmap extends to more countries: Zimbabwe, Iran, Nicaragua, Hong Kong. Each region has its own challenges, its own organizers, its own needs. But the underlying infrastructure - decentralized identity, censorship-resistant communication, permissionless payments - serves them all.
      </p>

      <h2>The Point</h2>

      <p>
        There's something powerful about building tools for people who actually need them. Not engagement metrics or growth hacking. Just: does this help someone stay safe? Does this help them organize? Does this help them get paid when their bank account is frozen?
      </p>

      <p>
        That's what Agora is for. A place where activists can find each other, coordinate action, and support one another - without asking permission from platforms or governments.
      </p>

      <p>
        This is why Soapbox exists. Every tool we build - <a href="https://soapbox.pub/ditto" target="_blank" rel="noopener noreferrer">Ditto</a>, <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">Shakespeare</a>, and now Agora - shares the same DNA: decentralized infrastructure that no single entity can control. We're not building products for the sake of products. We're building the foundation for a world where communication, identity, and money can't be taken away by the powerful.
      </p>

      <p>
        Freedom tech isn't a niche. It's the future of the internet. And when that future arrives, the tools need to already exist.
      </p>

      <p>
        We built Agora in a weekend. It's already being used in the field. And we're just getting started.
      </p>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">Freedom needs infrastructure.</div>
            <p className="text-muted-foreground mb-6">
              Try Agora, follow development on GitLab, or build your own freedom tech with Shakespeare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
              >
                <a href="https://agora.spot" target="_blank" rel="noopener noreferrer">
                  Try Agora
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <a href="https://gitlab.com/soapbox-pub/pathos" target="_blank" rel="noopener noreferrer">
                  View on GitLab
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  Build with Shakespeare
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose mt-8">
        <Card className="border border-muted bg-muted/30">
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">
              <strong>Note:</strong> This app was originally named <em>Pathos</em> at the time of the hackathon and has since been renamed to <strong>Agora</strong>.
            </p>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}
