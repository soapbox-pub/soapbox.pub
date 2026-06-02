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
  keywords?: string;
}

export const meta: BlogPostMeta = {
  slug: "wlc-launches-agora-oslo-freedom-forum",
  title: "World Liberty Congress Launches Agora at Oslo Freedom Forum to Power Global Support for Human Rights Movements",
  excerpt: "At the 2026 Oslo Freedom Forum, the World Liberty Congress launched Agora — a global Bitcoin-powered platform helping activists, political prisoners, and human rights movements receive direct international support.",
  coverImage: "/assets/blog/wlc-launches-agora-oslo/cover.png",
  date: "2026-06-02",
  author: {
    name: "M. K. Fain",
    picture: "/assets/avatars/mk.jpg"
  },
  ogImage: {
    url: "/assets/blog/wlc-launches-agora-oslo/cover.png"
  },
  featured: true,
  tags: [
    "press release",
    "agora",
    "world liberty congress",
    "oslo freedom forum",
    "leopoldo lopez",
    "human rights",
    "bitcoin",
    "activism",
    "political prisoners",
    "soapbox",
    "human rights foundation",
    "censorship resistance"
  ],
  keywords: "agora launch, world liberty congress agora, oslo freedom forum 2026, leopoldo lopez agora, agora bitcoin platform, agora human rights, agora political prisoners, censorship-resistant fundraising, agora press release, soapbox agora, agora.spot, fund activists with bitcoin, support dissidents bitcoin, world liberty congress launch"
};

export default function WlcLaunchesAgoraOsloFreedomForum() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="text-sm uppercase tracking-widest text-orange-600 dark:text-orange-400 font-semibold mb-2 not-prose">
        For Immediate Release
      </p>

      <p className="lead">
        <strong>Oslo, Norway — June 2, 2026</strong> — At the 2026 Oslo Freedom Forum, the <a href="https://worldlibertycongress.org" target="_blank" rel="noopener noreferrer">World Liberty Congress</a> today announced the launch of <a href="https://agora.spot" target="_blank" rel="noopener noreferrer">Agora</a>, a new global platform designed to help freedom movements, political prisoners, dissidents, and human rights defenders receive direct international fundraising support without relying on traditional financial gatekeepers.
      </p>

      <div className="not-prose my-8">
        <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/A_svIvLGo2M"
            title="World Liberty Congress Launches Agora at Oslo Freedom Forum"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <h2>A New Platform for Global Solidarity</h2>

      <p>
        Developed by <a href="https://soapbox.pub" target="_blank" rel="noopener noreferrer">Soapbox</a> and spearheaded by Venezuelan democracy leader <a href="https://en.wikipedia.org/wiki/Leopoldo_L%C3%B3pez" target="_blank" rel="noopener noreferrer">Leopoldo López</a> in partnership with the World Liberty Congress, Agora was created to address one of the most urgent challenges facing civil society today: the growing difficulty for activists and independent movements to access global funding infrastructure.
      </p>

      <p>
        The project was borne through collaboration with the <a href="https://hrf.org" target="_blank" rel="noopener noreferrer">Human Rights Foundation</a>'s freedom technology program and comes at a moment when authoritarian governments increasingly use banking restrictions, censorship, and financial pressure to isolate dissidents and suppress democratic movements.
      </p>

      <h2>How Agora Works: Direct, Peer-to-Peer Support Across Borders</h2>

      <p>
        Agora enables activists and organizations around the world to launch campaigns and receive direct peer-to-peer support globally using Bitcoin infrastructure designed for resilience, accessibility, and privacy. Unlike traditional crowdfunding platforms, Agora does not require activists to navigate complex banking systems, corporate approval processes, or geographic restrictions that often exclude the very people most in need of support.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/20">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-foreground mb-3">
              "We are witnessing a coordinated assault on democratic principles. Agora is the infrastructure for an equally coordinated network of support going in the other direction."
            </blockquote>
            <p className="font-semibold text-orange-700 dark:text-orange-400">— Leopoldo López</p>
          </CardContent>
        </Card>
      </div>

      <h2>Launch Campaigns: Political Prisoners and Grassroots Movements</h2>

      <p>
        At launch, Agora features campaigns supporting political prisoners and grassroots human rights movements from multiple regions, including <strong>Uganda, Nicaragua, Zimbabwe, Cambodia, and Palestine</strong>, alongside campaigns organized by members of the World Liberty Congress network.
      </p>

      <h2>Unstoppable Infrastructure for Civil Society</h2>

      <p>
        The platform represents a broader vision for unstoppable infrastructure for civil society, where direct support for human rights can move across borders as freely as the ideas that inspire it.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-foreground mb-3">
              "Millions of people want to help defend freedom around the world. The problem has never been solidarity. The problem has been barriers. Agora exists to solve that."
            </blockquote>
            <p className="font-semibold text-blue-700 dark:text-blue-400">— M. K. Fain, Soapbox co-founder</p>
          </CardContent>
        </Card>
      </div>

      <h2>Availability</h2>

      <p>
        Agora is available now on the web at <a href="https://agora.spot" target="_blank" rel="noopener noreferrer">agora.spot</a> and on the <a href="https://zapstore.dev" target="_blank" rel="noopener noreferrer">ZapStore</a> for Android.
      </p>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-orange-300 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-2xl font-bold mb-3">Power to the people.</div>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Launch a campaign, support a freedom fighter, or learn more about how Agora is rebuilding the infrastructure of global solidarity.
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
                <a href="/blog/agora-connecting-freedom-fighters">
                  Read more about Agora
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <hr />

      <h3>About the World Liberty Congress</h3>
      <p>
        The <a href="https://worldlibertycongress.org" target="_blank" rel="noopener noreferrer">World Liberty Congress</a> brings together hundreds of democracy leaders and activists from 55 countries under autocratic regimes, all working together to defend freedom and human rights worldwide.
      </p>

      <h3>About Soapbox</h3>
      <p>
        <a href="https://soapbox.pub" target="_blank" rel="noopener noreferrer">Soapbox</a> builds open-source, decentralized infrastructure for the social web. Soapbox developed Agora using its own freedom tech stack, including <a href="https://mkstack.xyz" target="_blank" rel="noopener noreferrer">MKStack</a> and <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">Shakespeare</a>.
      </p>

      <h3>Media Contact</h3>
      <p>
        Mary Kate Fain<br />
        Co-founder, Soapbox<br />
        <a href="mailto:mk@soapbox.pub">mk@soapbox.pub</a>
      </p>
    </article>
  );
}
