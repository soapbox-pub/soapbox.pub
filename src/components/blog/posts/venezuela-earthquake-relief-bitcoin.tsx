import type { BlogPostMeta } from '@/lib/blog/types';
import { Card, CardContent } from '../../ui/card';

export const meta: BlogPostMeta = {
  slug: 'venezuela-earthquake-relief-bitcoin',
  title: 'Venezuelans Turn to Bitcoin to Fund Earthquake Relief',
  excerpt:
    'This is a chance for the world to see Bitcoin as borderless money.',
  coverImage:
    '/assets/blog/venezuela-earthquake-relief-bitcoin/cover.png',
  date: '2026-07-11',
  author: {
    name: 'M. K. Fain',
    picture: '/assets/avatars/mk.jpg',
  },
  ogImage: {
    url: '/assets/blog/venezuela-earthquake-relief-bitcoin/cover.png',
  },
  featured: true,
  tags: [
    'venezuela',
    'venezuela earthquake',
    'earthquake relief',
    'bitcoin',
    'bitcoin donations',
    'agora',
    'agora.spot',
    'crowdfunding',
    'world liberty congress',
    'freedom tech',
    'censorship resistance',
    'borderless money',
    'disaster relief',
    'grassroots fundraising',
  ],
  keywords:
    'venezuela earthquake relief, bitcoin earthquake relief venezuela, venezuela earthquake donations, donate bitcoin venezuela, agora bitcoin crowdfunding, agora.spot, borderless bitcoin donations, bitcoin disaster relief, censorship-resistant fundraising, world liberty congress venezuela, grassroots crowdfunding bitcoin, bitcoin as borderless money, fund venezuela relief without ngo, peer-to-peer bitcoin donations',
  faq: [
    {
      question: 'How can I donate to Venezuela earthquake relief with Bitcoin?',
      answer:
        'You can donate directly to Venezuelan earthquake relief campaigns on Agora at agora.spot. Donations settle peer-to-peer in Bitcoin with no bank, NGO, or border checkpoint in between.',
    },
    {
      question: 'What is Agora?',
      answer:
        'Agora is a Bitcoin-based crowdfunding platform that lets anyone launch a fundraiser with no intermediary and no central authority, settled peer-to-peer in sats. It is built by Soapbox in partnership with the World Liberty Congress.',
    },
    {
      question: 'Why are Venezuelan organizers using Bitcoin instead of traditional crowdfunding?',
      answer:
        'Traditional crowdfunding relies on KYC, paperwork, and foreign NGO intermediaries, which lock out small grassroots organizers and add fees and weeks of delay. Bitcoin lets local organizers raise funds directly and instantly across borders.',
    },
    {
      question: 'How are the relief campaigns verified?',
      answer:
        "Agora uses a decentralized web-of-trust verification system. Local organizers with the World Liberty Congress, who have years of experience inside Venezuela's activist and civil society networks, vouch for campaigns organically rather than through top-down paperwork.",
    },
  ],
};

export default function VenezuelaEarthquakeReliefBitcoin() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        When an earthquake hit Venezuela this month, foreign aid started flowing
        in fast. Almost all of it goes through the same narrow pipe: a US- or
        European-backed NGO acting as the intermediary, holding the funds and
        managing the campaign on behalf of whoever's actually doing the work on
        the ground.
      </p>

      <p>
        That works fine for large, established organizations. It doesn't work
        for the people who are actually in the shelters every day: the doctor
        running a medical clinic, the volunteer coordinating meals for displaced
        families, the small group of neighbors who organized a support network
        for traumatized kids. These are the people closest to the need, and
        they're almost entirely locked out of fundraising for themselves.
      </p>

      <p>
        Without a foreign intermediary willing to vouch for them and manage the
        money, they have no functioning way to raise funds directly. Borders
        have become the financial barrier right when speed matters the most.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/20">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-foreground mb-3">
              "I need to set up a crowdfunder, but going through relatives abroad
              means high fees and delays at every step. Sometimes the money takes
              weeks to actually reach us."
            </blockquote>
            <p className="font-semibold text-orange-700 dark:text-orange-400">
              - Venezuelan organizer
            </p>
          </CardContent>
        </Card>
      </div>

      <p>This is exactly the problem Bitcoin solves.</p>

      <h2>Bitcoin cuts out the gatekeeper</h2>

      <p>
        Community organizations on the ground are turning to{' '}
        <a href="https://agora.spot" target="_blank" rel="noopener noreferrer">
          Agora
        </a>
        , a Bitcoin-based crowdfunding platform, to raise money directly from
        donors worldwide with no bank, no NGO, and no border checkpoint in
        between.
      </p>

      <p>
        Agora lets anyone launch a fundraiser with no intermediary and no
        central authority, settled peer-to-peer in sats. For grassroots
        organizers in Venezuela, it's the only way to raise funds autonomously.
      </p>

      <p>
        In traditional crowdfunding, verification happens through KYC,
        paperwork, and bureaucracy, creating a barrier to small grassroots
        initiatives that lack the overhead and admin required.
      </p>

      <p>
        Agora's decentralized verification system, on the other hand, allows
        donors to give with confidence through a web of trust system rather than
        through centralized gatekeepers. Local organizers with the{' '}
        <a
          href="https://worldlibertycongress.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          World Liberty Congress
        </a>
        , like Aaron Rodriguez, have years of experience and connections inside
        the country's activist and civil society networks. This allows
        verification to happen organically rather than in a top-down way.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/20">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-foreground mb-3">
              "Foreign aid and big NGOs matter, but they were never going to
              reach everyone. Agora exists for the people the traditional system
              leaves behind. These campaigns are verified not by paperwork, but
              by the people already working alongside them on the ground. That's
              the power of freedom tech."
            </blockquote>
            <p className="font-semibold text-blue-700 dark:text-blue-400">
              - Venezuelan organizer with the local civil society network
              coordinating relief efforts
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Five earthquake relief campaigns on Agora</h2>

      <p>
        WLC and local organizers are now running five earthquake relief
        campaigns on Agora, each tied to a specific need on the ground:
      </p>

      <ul>
        <li>
          <a
            href="https://agora.spot/naddr1qvzqqqyygupzpxxw7qe4p3sk4a0rk0v3jrzex9vf4gdvp7pe2uyk5wra786qdnx2qq2k6etyd93kzmpdvfexjempv3jhxttxw4hxgyhch2j"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Community Medical Days</strong>
          </a>{' '}
          funds doctors, nurses, and volunteers running recurring clinics in
          shelters, offering consultations, vaccinations, and medication to
          people who otherwise can't reach a health center.
        </li>
        <li>
          <a
            href="https://agora.spot/naddr1qvzqqqyygupzq0ex4zd28uqxvth0y0c9jrwqn565uy6ak22rtaj7peeh74ck3c5gqqg8qun009jkxar094ek7mnjd9ekzf4h06q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Children's Day for the Camps</strong>
          </a>
          , happening July 19 at seven sites nationwide, funds toys, art
          supplies, and psychological support for kids dealing with fear and
          insomnia after the quake.
        </li>
        <li>
          <a
            href="https://agora.spot/naddr1qvzqqqyygupzq73s843ddjwj7r9tut98zw3e9ulvfv06hq275c9hnls44j38f3cuqpqxxmmwdejkxarfdenj66r0wpjj6um5v9exc6twdvkkzmn5v4hxuctn946x7ttnv9mx2ttvd9mx2uedd9hz6argv5khvetwv4a82etvvyrvh5r9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>Starlink connectivity</strong>
          </a>{' '}
          funds and sets up Starlinks to bring connectivity back to shelters and
          displaced communities who have been cut off from communicating with
          their families, each other, and the outside world.
        </li>
        <li>
          <strong>The Emotional Support Network</strong> trains volunteers in
          psychological first aid for a crisis that's mostly invisible: surveys
          suggest the vast majority of Venezuelans report being emotionally
          affected by the earthquake, far more than the number with physical
          injuries.
        </li>
        <li>
          <strong>Community Kitchens</strong> sets up temporary kitchens in
          shelters so families who lost their own stoves and cookware can still
          get a hot meal every day.
        </li>
      </ul>

      <h2>A real-world test for Bitcoin as money</h2>

      <p>
        This is a live, high-stakes test of Bitcoin's original promise: money
        that moves without permission, without borders, and without a gatekeeper
        deciding who's worthy of help.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/20">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-foreground mb-3">
              "This is a chance for the world to see Bitcoin as borderless money.
              If we want Bitcoin to be taken seriously as a currency, not just as
              speculation, it's time to put our sats to work."
            </blockquote>
            <p className="font-semibold text-orange-700 dark:text-orange-400">
              - Agora development team
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        The Bitcoin and freedom tech community is being asked to show up:
        donate, share, and help prove that sats can move faster and freer than
        any wire transfer or NGO channel ever could.
      </p>

      <div className="not-prose my-10">
        <a
          href="https://agora.spot/naddr1qvzqqqyygupzqta5yvt6nq67p74mgpdwh04xccdkktfcf0nla05pykzqkdgkdp0uqqnxzem0wfsj6an9dejh5at9d3sj6etpwf6xsut4v94k2ttjv4kxjetx94n82mny44zetu"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <Card className="border-2 border-orange-500 bg-gradient-to-br from-orange-500 to-orange-600 transition-transform hover:scale-[1.02]">
            <CardContent className="flex flex-col items-center gap-3 p-8 text-center">
              <span className="text-2xl font-bold text-white sm:text-3xl">
                Donate to Venezuela earthquake relief now
              </span>
              <span className="text-lg font-medium text-orange-50">
                agora.spot
              </span>
            </CardContent>
          </Card>
        </a>
      </div>
    </article>
  );
}
