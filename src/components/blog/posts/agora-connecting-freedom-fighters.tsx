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
  "excerpt": "Agora gives activists a censorship-resistant platform to organize, document, and receive direct Bitcoin support from a global community.",
  "coverImage": "/assets/blog/about-agora/agora-cover.png",
  "date": "2026-02-21",
  "author": {
    "name": "Derek Ross",
    "picture": "/assets/avatars/derek.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/about-agora/agora-cover.png"
  },
  "featured": true,
  "tags": ["nostr", "bitcoin", "activism", "agora", "venezuela", "freedom"]
};

export default function AgoraConnectingFreedomFighters() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        When a government bans social media, freezes bank accounts, and shuts down the internet during protests, what does an activist do? That's not a hypothetical. It's the daily reality for people fighting authoritarian rule in Venezuela, Zimbabwe, Cambodia, Uganda, and Nicaragua. Agora was built to answer that question.
      </p>

      <h2>Power to the People</h2>

      <p>
        <strong><a href="https://agora.spot" target="_blank" rel="noopener noreferrer">Agora</a></strong> is a decentralized activist platform built on <a href="https://nostr.com" target="_blank" rel="noopener noreferrer">Nostr</a> and Bitcoin. It gives activists a censorship-resistant space to organize their communities, document what's happening on the ground, and receive direct international financial support — without any government or corporation being able to stop it.
      </p>

      <p>
        It was built by Team Soapbox using our own tools — <a href="https://mkstack.xyz" target="_blank" rel="noopener noreferrer">MKStack</a> and <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">Shakespeare</a> — at the <a href="https://hrf.org/latest/announcing-the-ai-hack-for-freedom-hackathon-winners/" target="_blank" rel="noopener noreferrer">Human Rights Foundation's AI Hack for Freedom</a>, a hackathon at <a href="https://www.bitcoinpark.com/" target="_blank" rel="noopener noreferrer">Bitcoin Park</a> in Austin where world-renowned dissidents were paired with open-source developers to build tools for activists under authoritarian regimes. Agora was <a href="https://hrf.org/latest/announcing-the-ai-hack-for-freedom-hackathon-winners/" target="_blank" rel="noopener noreferrer">named one of the winners</a>.
      </p>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: "⚡", label: "Participate", desc: "in country-specific actions led by global freedom fighters" },
            { icon: "🌐", label: "Discover", desc: "global actions, led by trusted pro-freedom voices" },
            { icon: "₿", label: "Support", desc: "on-the-ground activists directly with Bitcoin" },
            { icon: "📣", label: "Amplify", desc: "the voices of the global resistance beyond censored platforms" },
          ].map(({ icon, label, desc }) => (
            <Card key={label} className="border-orange-200 bg-orange-50 dark:bg-orange-950/20 dark:border-orange-900">
              <CardContent className="p-5 flex gap-4 items-start">
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="font-semibold text-orange-800 dark:text-orange-300">{label}</p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <h2>Venezuela: The Pilot</h2>

      <p>
        Agora's first pilot is launching in Venezuela, in partnership with <a href="https://en.wikipedia.org/wiki/Leopoldo_L%C3%B3pez" target="_blank" rel="noopener noreferrer">Leopoldo López</a> and the <a href="https://worldlibertycongress.org" target="_blank" rel="noopener noreferrer">World Liberty Congress</a>, as part of their ongoing campaign to free political prisoners and restore democracy. López captained the team at the hackathon, arriving not with a feature wishlist but with problems — real ones faced daily by people fighting for basic freedoms under the Maduro regime.
      </p>

      <p>
        Venezuela is ground zero for the kind of digital repression Agora is designed to defeat. X was banned. Payment processors are cut off. Internet connectivity is throttled during protests. Political prisoners languish in detention. Within hours of the hackathon launch, Venezuelan activists were already using the app — sharing images from the ground, earning bitcoin for their contributions, and organizing through country-specific feeds that no government can shut down.
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

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <figure className="m-0">
            <img
              src="/assets/blog/about-agora/ve-map-bubbles.png"
              alt="Agora world map showing activist activity bubbles across Venezuela and beyond"
              className="w-full rounded-lg"
            />
          </figure>
          <figure className="m-0">
            <img
              src="/assets/blog/about-agora/ve-action.png"
              alt="Agora active actions feed showing a Venezuela challenge"
              className="w-full rounded-lg"
            />
          </figure>
        </div>
      </div>

      <p>
        López has spoken extensively about why Venezuela's struggle matters beyond its borders. As he put it at Stanford's Freeman Spogli Institute, <a href="https://fsi.stanford.edu/news/venezuela-can-be-spark-fourth-wave-democratization-says-leopoldo-lopez" target="_blank" rel="noopener noreferrer">speaking on the global fight for democracy</a>:
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-foreground mb-3">
              "If Venezuela succeeds, it will send a powerful message to the world that democracy can overcome even the most entrenched autocracies. Venezuela can be the spark for a fourth wave of democratization."
            </blockquote>
            <p className="font-semibold text-blue-700 dark:text-blue-400">— Leopoldo López</p>
          </CardContent>
        </Card>
      </div>

      <p>
        He also underscored the coordinated nature of the threat: "We are witnessing a coordinated assault on democratic principles. Authoritarian regimes are learning from each other, sharing strategies to suppress dissent and undermine institutions." His response — and Agora's purpose — is to build equally coordinated networks of support going in the other direction.
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
        The app includes a built-in self-custodial Lightning wallet powered by the <a href="https://breez.technology/sdk/" target="_blank" rel="noopener noreferrer">Breez SDK</a>. When bank accounts are frozen and payment processors are cut off, Bitcoin still works. A $10 zap from Germany reaches an activist in Caracas instantly, with no intermediaries and no permission required.
      </p>

      <h3>Bluetooth Mesh Networking</h3>
      <p>
        When internet shutdowns happen — at exactly the moments activists need communication most — Agora's Bitchat integration enables offline messaging via Bluetooth mesh. Messages sync automatically when connectivity returns.
      </p>

      <h3>AI Assistant</h3>
      <p>
        A privacy-focused AI assistant powered by <a href="https://trymaple.ai/" target="_blank" rel="noopener noreferrer">Maple AI</a> provides real-time summaries of country feeds, strategy suggestions, and contextual information.
      </p>

      <h3>26 Languages</h3>
      <p>
        Agora supports 26 languages: Spanish, Portuguese, French, German, Italian, Shona, Pashto, Farsi, Khmer, Chinese, Arabic, Russian, Burmese, Turkish, Vietnamese, Bengali, Urdu, Thai, Ukrainian, Swahili, Amharic, Filipino, Hindi, Indonesian, Japanese, and English.
      </p>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <figure className="m-0">
            <img
              src="/assets/blog/about-agora/ve-country-home-page.png"
              alt="Agora Venezuela country home page showing trending posts and community activity"
              className="w-full rounded-lg"
            />
          </figure>
          <figure className="m-0">
            <img
              src="/assets/blog/about-agora/ve-example-post.png"
              alt="Example post from a Venezuelan activist on Agora"
              className="w-full rounded-lg"
            />
          </figure>
        </div>
      </div>

      <h2>Why Nostr and Bitcoin?</h2>

      <p>
        <a href="https://fsi.stanford.edu/news/venezuela-can-be-spark-fourth-wave-democratization-says-leopoldo-lopez" target="_blank" rel="noopener noreferrer">López's framework</a> identifies technology as central to the fight for democracy: "From providing uncensored internet access to using cryptocurrencies like Bitcoin to bypass financial restrictions, innovation can empower pro-democracy movements in autocratic states."
      </p>

      <p>
        That's precisely why Agora is built on Nostr and Bitcoin rather than conventional infrastructure. Traditional platforms have a single point of failure: the company that runs them. One legal notice and your entire network disappears. Nostr has no company to pressure. Your identity is a cryptographic key — no government can revoke it, no platform can ban it, no server seizure can erase it.
      </p>

      <p>
        Bitcoin solves the money problem. When bank accounts get frozen and payment processors cut you off, Lightning payments still work. The Maduro regime has frozen accounts and banned platforms. Iranian activists have seen the same. So have people in Belarus, Myanmar, Hong Kong. The tools people take for granted — payment apps, social media, messaging — become weapons when controlled by authoritarian states.
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
        As <a href="https://fsi.stanford.edu/news/venezuela-can-be-spark-fourth-wave-democratization-says-leopoldo-lopez" target="_blank" rel="noopener noreferrer">López has argued</a>, "Building coalitions is essential. We must leverage global networks and share lessons learned to effectively counter authoritarianism." Agora is the infrastructure for those coalitions.
      </p>

      <h2>The Point</h2>

      <p>
        There's something powerful about building tools for people who actually need them. Not engagement metrics or growth hacking. Just: does this help someone stay safe? Does this help them organize? Does this help them get paid when their bank account is frozen?
      </p>

      <p>
        That's what Agora is for. And <a href="https://fsi.stanford.edu/news/venezuela-can-be-spark-fourth-wave-democratization-says-leopoldo-lopez" target="_blank" rel="noopener noreferrer">as López put it</a>, "The responsibility of safeguarding democracy lies with every generation." The tools to meet that responsibility need to exist before the moment demands them.
      </p>

      <p>
        This is why Soapbox exists. Every tool we build — <a href="https://soapbox.pub/tools/ditto" target="_blank" rel="noopener noreferrer">Ditto</a>, <a href="https://mkstack.xyz" target="_blank" rel="noopener noreferrer">MKStack</a>, <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">Shakespeare</a>, and now Agora — shares the same DNA: decentralized infrastructure that no single entity can control. The full story of how Agora was built is in our <a href="/blog/building-pathos">Building Agora</a> post.
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
