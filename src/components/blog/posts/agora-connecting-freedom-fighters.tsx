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
  "slug": "agora-connecting-freedom-fighters",
  "title": "Agora: Connecting Freedom Fighters to Uncensorable International Support",
  "excerpt": "Agora gives activists in Venezuela — and soon Nicaragua, Zimbabwe, Cambodia, and Uganda — a censorship-resistant platform to organize, document, and receive direct Bitcoin support from a global community.",
  "coverImage": "/assets/images/agora/agora-one-pager.png",
  "date": "2026-02-21",
  "author": {
    "name": "Derek Ross",
    "picture": "/assets/avatars/derek.jpg"
  },
  "ogImage": {
    "url": "/assets/images/agora/agora-one-pager.png"
  },
  "featured": true,
  "tags": ["nostr", "bitcoin", "activism", "agora", "venezuela", "freedom"]
};

export default function AgoraConnectingFreedomFighters() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        When a government bans Twitter, freezes bank accounts, and shuts down the internet during protests, what does an activist do? That's not a hypothetical. It's the daily reality for people fighting authoritarian rule in Venezuela, Zimbabwe, Cambodia, Uganda, and Nicaragua. Agora was built to answer that question.
      </p>

      <figure className="my-8">
        <img
          src="/assets/images/agora/agora-one-pager.png"
          alt="Agora - Power to the people. Connects freedom fighters to uncensorable international support. Powered by Nostr and Bitcoin."
          className="w-full rounded-lg"
        />
      </figure>

      <h2>Power to the People</h2>

      <p>
        <strong>Agora</strong> is a decentralized activist platform built on <a href="https://nostr.com" target="_blank" rel="noopener noreferrer">Nostr</a> and Bitcoin. It gives activists a censorship-resistant space to organize their communities, document what's happening on the ground, and receive direct international financial support — without any government or corporation being able to stop it.
      </p>

      <p>
        The premise is simple but radical: what if the tools of civil resistance were as resilient as the people using them?
      </p>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-900">
            <CardContent className="p-5 flex gap-4 items-start">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-300">Participate</p>
                <p className="text-sm text-muted-foreground">in country-specific actions led by global freedom fighters</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-900">
            <CardContent className="p-5 flex gap-4 items-start">
              <span className="text-2xl">🌐</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-300">Discover</p>
                <p className="text-sm text-muted-foreground">global actions, led by trusted pro-freedom voices</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-900">
            <CardContent className="p-5 flex gap-4 items-start">
              <span className="text-2xl">₿</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-300">Support</p>
                <p className="text-sm text-muted-foreground">on-the-ground activists directly with Bitcoin</p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-900">
            <CardContent className="p-5 flex gap-4 items-start">
              <span className="text-2xl">📣</span>
              <div>
                <p className="font-semibold text-orange-800 dark:text-orange-300">Amplify</p>
                <p className="text-sm text-muted-foreground">the voices of the global resistance beyond censored platforms</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>Born at the AI Hack for Freedom</h2>

      <p>
        Agora was built in January 2026 at the <a href="https://hrf.org/latest/announcing-the-ai-hack-for-freedom-hackathon-winners/" target="_blank" rel="noopener noreferrer">Human Rights Foundation's AI Hack for Freedom</a>, a hackathon hosted at <a href="https://www.bitcoinpark.com/" target="_blank" rel="noopener noreferrer">Bitcoin Park</a> in Austin, Texas, where world-renowned dissidents were paired with open-source developers to build tools addressing the most urgent needs of activists under authoritarian regimes.
      </p>

      <p>
        Our team was captained by <a href="https://en.wikipedia.org/wiki/Leopoldo_L%C3%B3pez" target="_blank" rel="noopener noreferrer">Leopoldo López</a> — Venezuelan democratic opposition leader, former political prisoner, and co-founder of the <a href="https://worldlibertycongress.org" target="_blank" rel="noopener noreferrer">World Liberty Congress</a>. López didn't arrive with a feature wishlist. He arrived with problems. Real ones faced daily by people fighting for their lives and freedoms under the Maduro regime.
      </p>

      <p>
        In 28 hours, the team — including developers from Soapbox, <a href="https://njump.me/npub1ye5ptcxfyyxl5vjvdjar2ua3f0hynkjzpx552mu5snj3qmx5pzjscpknpr" target="_blank" rel="noopener noreferrer">Hzrd149</a> (creator of Nostrudel and Blossom), and <a href="https://njump.me/npub1zafcms4xya5ap9zr7xxr0jlrtrattwlesytn2s42030lzu0dwlzqpd26k5" target="_blank" rel="noopener noreferrer">Elsat</a> from the Damus team — shipped a working app. It was <a href="https://hrf.org/latest/announcing-the-ai-hack-for-freedom-hackathon-winners/" target="_blank" rel="noopener noreferrer">named one of the winners</a>, taking home 0.25 BTC. You can read the full story of how it was built in our <a href="/blog/building-pathos">Building Agora</a> blog post.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/20">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-foreground mb-3">
              "This is something that we've been thinking about for a while. And now we have a tested platform. We have a community that is already engaged. We have a huge potential for growth in different countries. And we have a group of developers that are very excited to continue to work on this."
            </blockquote>
            <p className="font-semibold text-orange-700 dark:text-orange-400">— Leopoldo López</p>
          </CardContent>
        </Card>
      </div>

      <h2>Venezuela: The Pilot</h2>

      <p>
        Agora is launching its first pilot in Venezuela, in partnership with Leopoldo López and the <a href="https://worldlibertycongress.org" target="_blank" rel="noopener noreferrer">World Liberty Congress</a>, as part of their ongoing campaign to free political prisoners and restore democracy.
      </p>

      <p>
        Venezuela is ground zero for the kind of digital repression Agora is designed to defeat. X (formerly Twitter) was banned. Payment processors are cut off. Internet connectivity is throttled during protests. Political prisoners languish in detention — people like <a href="https://fsi.stanford.edu/news/statement-abduction-summer-fellows-alum-jesus-armas-2022-venezuela" target="_blank" rel="noopener noreferrer">Jesús Armas</a>, abducted by Maduro regime agents, are just one example among hundreds.
      </p>

      <p>
        Within hours of the hackathon launch, Venezuelan activists were already using the app to coordinate — sharing images from the ground, earning bitcoin for their contributions, and organizing through country-specific feeds that no government can shut down.
      </p>

      {/* Placeholder for Venezuela action screenshots */}
      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="aspect-[9/16] bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
            <p className="text-muted-foreground text-sm text-center px-4">Screenshot: Venezuela actions feed</p>
          </div>
          <div className="aspect-[9/16] bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
            <p className="text-muted-foreground text-sm text-center px-4">Screenshot: Venezuela activist posts</p>
          </div>
        </div>
      </div>

      <p>
        López has spoken extensively about why Venezuela's struggle matters beyond its borders. At Stanford's Freeman Spogli Institute, he laid out the stakes clearly:
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-foreground mb-3">
              "If Venezuela succeeds, it will send a powerful message to the world that democracy can overcome even the most entrenched autocracies."
            </blockquote>
            <p className="font-semibold text-blue-700 dark:text-blue-400">— Leopoldo López, <a href="https://fsi.stanford.edu/news/venezuela-can-be-spark-fourth-wave-democratization-says-leopoldo-lopez" target="_blank" rel="noopener noreferrer" className="underline">Stanford FSI, December 2024</a></p>
          </CardContent>
        </Card>
      </div>

      <p>
        He elaborated on the global dimension of what's at stake: "We are witnessing a coordinated assault on democratic principles. Authoritarian regimes are learning from each other, sharing strategies to suppress dissent and undermine institutions." His response — and Agora's purpose — is to build equally coordinated networks of support going the other direction.
      </p>

      <h2>How Agora Works</h2>

      <p>
        Every feature in Agora exists to solve a specific problem that activists face under authoritarian rule.
      </p>

      <h3>Country-Specific Feeds and Actions</h3>
      <p>
        Activists join their country's community to see what's happening locally, coordinated by verified country organizers — trusted leaders who can pin urgent posts, moderate content, and guide on-the-ground efforts. A global activism feed connects movements across borders.
      </p>

      <h3>Activist Actions with Bitcoin Bounties</h3>
      <p>
        Organizers post "actions" — specific tasks like documenting a protest, photographing a political prisoner's family, or gathering evidence of human rights violations. Activists complete the action and earn sats. Direct, permissionless, instant. No bank account required. This is the core engine: turning international solidarity into real, tangible support for people on the front lines.
      </p>

      <h3>Self-Custodial Lightning Wallet</h3>
      <p>
        The app includes a built-in self-custodial Lightning wallet powered by the <a href="https://breez.technology/sdk/" target="_blank" rel="noopener noreferrer">Breez SDK</a>. When bank accounts are frozen and payment processors are cut off, Bitcoin still works. A $10 zap from Germany reaches an activist in Caracas instantly. No intermediaries. No permission required.
      </p>

      <h3>Bluetooth Mesh Networking</h3>
      <p>
        When internet shutdowns happen — and they do, at exactly the moments activists need communication most — Agora's Bitchat integration enables offline messaging via Bluetooth mesh. Messages sync automatically when connectivity returns. The internet blackout is no longer a killswitch.
      </p>

      <h3>AI Assistant</h3>
      <p>
        A privacy-focused AI assistant, powered by <a href="https://trymaple.ai/" target="_blank" rel="noopener noreferrer">Maple AI</a>, provides real-time summaries of country feeds, strategy suggestions, and contextual information. Ask what's happening in Venezuela right now, and it pulls from the live feed to give you a summary.
      </p>

      <h3>Multilingual</h3>
      <p>
        Full support for 7 languages including Spanish, Farsi, and Chinese — because the people who need this most shouldn't have to communicate in English.
      </p>

      <h2>Why Nostr and Bitcoin?</h2>

      <p>
        López's framework at Stanford identified technology as central to the fight for democracy: "From providing uncensored internet access to using cryptocurrencies like Bitcoin to bypass financial restrictions, innovation can empower pro-democracy movements in autocratic states."
      </p>

      <p>
        That's precisely why Agora is built on Nostr and Bitcoin rather than conventional infrastructure. Traditional platforms have a single point of failure: the company that runs them. One legal notice and your entire network disappears. Nostr has no company to pressure. Your identity is a cryptographic key — no government can revoke it, no platform can ban it, no server seizure can erase it.
      </p>

      <p>
        Bitcoin solves the money problem. López described the reality at Stanford: "$10 is huge when your bank account is frozen." Lightning payments bypass every restriction that authoritarian regimes use to starve opposition movements of resources.
      </p>

      <p>
        Together, they make Agora structurally uncensorable. Not as a marketing claim — as an architectural fact.
      </p>

      <h2>Expanding Globally: 2026 Pilots</h2>

      <p>
        Venezuela is the start. This year, Agora will be launching pilots in partnership with the World Liberty Congress in four additional countries:
      </p>

      <div className="not-prose my-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { flag: "🇳🇮", country: "Nicaragua", context: "Under the Ortega-Murillo regime, opposition leaders face arbitrary imprisonment and exile." },
            { flag: "🇿🇼", country: "Zimbabwe", context: "Decades of political repression and economic warfare against civil society." },
            { flag: "🇰🇭", country: "Cambodia", context: "Hun Sen's government has systematically dismantled opposition and independent media." },
            { flag: "🇺🇬", country: "Uganda", context: "Activists and journalists face targeted harassment, arrest, and internet shutdowns." },
          ].map(({ flag, country, context }) => (
            <Card key={country} className="text-center">
              <CardContent className="p-5">
                <div className="text-4xl mb-2">{flag}</div>
                <p className="font-bold text-foreground mb-1">{country}</p>
                <p className="text-xs text-muted-foreground">{context}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <p>
        López articulated the vision at Stanford: "Building coalitions is essential. We must leverage global networks and share lessons learned to effectively counter authoritarianism." Agora is the infrastructure for those coalitions — not just in Venezuela, but everywhere the same patterns of repression repeat.
      </p>

      <h2>The Bigger Picture</h2>

      <p>
        López concluded his Stanford address with a call to action that applies directly to what Agora is trying to build: "The responsibility of safeguarding democracy lies with every generation."
      </p>

      <p>
        He framed the fight for democracy like the environmental movement — what's needed is a tipping point, a moment when freedom becomes a universally shared goal backed by individuals, organizations, and governments worldwide. The tools to reach that tipping point need to exist before the moment arrives.
      </p>

      <p>
        Agora is that infrastructure. A place where activists can find each other, coordinate action, document what's happening, and receive support — regardless of what the regime does to stop them.
      </p>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-orange-300 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-2xl font-bold mb-3">Power to the people.</div>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Download Agora, follow development on GitLab, or support freedom tech by building with Shakespeare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold"
              >
                <a href="https://agora.spot" target="_blank" rel="noopener noreferrer">
                  Get Agora
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://gitlab.com/soapbox-pub/agora" target="_blank" rel="noopener noreferrer">
                  View on GitLab
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  Build with Shakespeare
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}
