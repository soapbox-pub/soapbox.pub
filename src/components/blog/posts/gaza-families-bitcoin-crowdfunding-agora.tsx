import type { BlogPostMeta } from '@/lib/blog/types';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export const meta: BlogPostMeta = {
  slug: 'gaza-families-bitcoin-crowdfunding-agora',
  title: 'Gaza Families Turn to Bitcoin After Alleged $65,000 Theft',
  excerpt:
    "Sami Shannat says a UK middleman withheld over $65,000 raised on GoFundMe for his family in Gaza. Now he's starting over on Agora, the unstoppable Bitcoin crowdfunder.",
  coverImage: '/assets/blog/sami-gaza-agora/cover.jpg',
  date: '2026-07-19',
  author: {
    name: 'M. K. Fain',
    picture: '/assets/avatars/mk.jpg',
  },
  ogImage: {
    url: '/assets/blog/sami-gaza-agora/cover.jpg',
  },
  featured: true,
  tags: [
    'gaza',
    'palestine',
    'gofundme',
    'gofundme alternative',
    'bitcoin crowdfunding',
    'bitcoin donations',
    'agora',
    'agora.spot',
    'unstoppable crowdfunding',
    'censorship resistance',
    'sovereignty',
    'freedom tech',
    'humanitarian aid',
    'crowdfunding middlemen',
    'forbes',
  ],
  keywords:
    'gaza gofundme stolen donations, gofundme beneficiary stole money, bitcoin crowdfunding gaza, donate bitcoin gaza, agora bitcoin crowdfunding, unstoppable crowdfunding, gofundme alternative bitcoin, sami shannat, gofundme gaza campaign shut down, crowdfunding without middleman, bitcoin donations palestine, censorship resistant fundraising, agora.spot, help family in gaza',
  faq: [
    {
      question: "What happened to Sami Shannat's GoFundMe donations?",
      answer:
        "Sami raised over £55,000 on GoFundMe to evacuate his family from Gaza. Because GoFundMe does not support payouts in Gaza, the funds were sent to a beneficiary in the UK, his sister's ex-husband. Sami says the beneficiary took the money and refused to transfer it to him. Combined with his sister's withheld campaign funds, Sami says the family lost over $65,000 in donations.",
    },
    {
      question: 'Why does GoFundMe require a middleman for Gaza campaigns?',
      answer:
        'Due to the limitations of traditional payment processors and anti-money laundering laws, all major crowdfunding sites require recipients to be based in the US or Europe. Campaigns for people elsewhere must find a US or European beneficiary to receive the funds on their behalf, and that beneficiary can charge fees or keep the money entirely.',
    },
    {
      question: 'What is Agora?',
      answer:
        'Agora is a Bitcoin-based crowdfunding platform built by Soapbox in collaboration with the Human Rights Foundation and World Liberty Congress. Donations go directly to a wallet controlled by the recipient, with no platform fees, no paperwork, and no middleman. It is built on the decentralized Nostr protocol for censorship resistance at every level.',
    },
    {
      question: "How can I donate to Sami's family in Gaza?",
      answer:
        "You can donate Bitcoin directly to Sami's family through his campaign on Agora at agora.spot/sami/your-support-keeps-us-alive. The funds go straight to a wallet he controls, with no beneficiary or platform in between.",
    },
    {
      question: 'What makes Agora unstoppable?',
      answer:
        'Agora has no accounts to freeze, no funds in custody, and no central server to take down. Campaigns are published on the decentralized Nostr protocol and donations settle directly on the Bitcoin network from donor to recipient. No one, including Soapbox, can shut down a campaign or seize the money.',
    },
  ],
};

export default function GazaFamiliesBitcoinCrowdfundingAgora() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        Sami Shannat is a husband and father of two small children in Gaza. He
        is a food science and technology engineer from an educated family, the
        son of a doctor. Then the war changed everything. Sami and his family
        watched their home collapse into rubble. Today, even daily survival in
        Gaza is a struggle.
      </p>

      <div className="not-prose my-8 mx-4 sm:mx-12">
        <Card className="border-l-4 border-orange-500 bg-orange-50/50">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-foreground mb-3">
              "I am a father trying to protect my small family, but amid the
              complete lack of work and the skyrocketing prices of even the
              most basic necessities, I find myself unable to provide for my
              children."
            </blockquote>
            <p className="text-right font-semibold text-orange-700">
              - Sami Shannat
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        Like many Palestinians, Sami and his family turned to GoFundMe. They
        are far from alone. According to a January article in Time, more than
        12,000 fundraisers for people in Gaza have launched on GoFundMe since
        the start of the war, raising over $77 million.
      </p>

      <p>
        The campaign worked. Sami raised more than £55,000 to evacuate his
        family to safety. And then, he says, the money never reached him.
      </p>

      <h2>The Beneficiary Trap</h2>

      <p>
        Due to the limitations
        of traditional payment processors and anti-money laundering laws, all
        major crowdfunding sites require recipients to be based in the US or
        Europe. If they're not, the campaign has to find a US or European
        beneficiary to receive the funds on their behalf. The beneficiary is
        supposed to pass the money along to the person it was actually raised
        for.
      </p>

      <p>
        Sometimes they do. Sometimes they don't. According to Melanie Robbins,
        Deputy Director of Realign for Palestine, some beneficiaries are taking
        advantage of the system to charge exorbitant fees, or, in the worst
        cases, abscond with the donations entirely. This is exactly what Sami
        says happened to him.
      </p>

      <div className="not-prose my-8 mx-4 sm:mx-12">
        <Card className="border-l-4 border-orange-500 bg-orange-50/50">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-foreground mb-3">
              "We previously tried to seek a path to safety. I launched a
              fundraising campaign to help us evacuate, but we were met with a
              painful betrayal. The beneficiary in the UK who was receiving the
              funds on our behalf took the money and refused to transfer it to
              us, leaving us stranded in these harsh conditions."
            </blockquote>
            <p className="text-right font-semibold text-orange-700">
              - Sami Shannat
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        Sami's beneficiary was his sister's ex-husband. He had British
        nationality, which made him the only member of the family able to
        manage the campaign funds. According to Sami, he kept them. Sami also
        says his sister had her evacuation campaign donations withheld by the
        same man, totalling about $26,000. Between them, Sami says, the family
        lost over $65,000 in donations. That money would have been enough to
        evacuate both families to safety in Egypt. Sami has{' '}
        <a
          href="https://www.instagram.com/p/DZ2gzPeoFRj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          shared his story publicly on Instagram
        </a>
        , hoping to hold the beneficiary accountable.
      </p>

      <p>
        This week,{' '}
        <a
          href="https://www.forbes.com/sites/digital-assets/2026/07/16/when-the-financial-system-cant-reach-people-in-crisis-bitcoin-can/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Forbes covered Sami's story
        </a>
        , and the growing movement of humanitarian crowdfunding on Bitcoin. The
        reporting confirmed the structure of the campaign: GoFundMe took 3.9%
        in fees off the top, over £2,100, and sent the rest to a beneficiary.
        Sami told Forbes the arrangement collapsed, that he has not received
        the full amount raised, and that the dispute remains unresolved.
        GoFundMe did not respond to Forbes' repeated requests for comment.
      </p>

      <figure className="not-prose my-8">
        <a
          href="https://www.forbes.com/sites/digital-assets/2026/07/16/when-the-financial-system-cant-reach-people-in-crisis-bitcoin-can/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/media-kit/forbes-bitcoin-crisis-coverage.png"
            alt="Forbes article: When The Financial System Can't Reach People In Crisis, Bitcoin Can"
            className="rounded-xl border border-border/60 shadow-lg w-full h-auto transition-all hover:shadow-xl"
            loading="lazy"
          />
        </a>
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          <a
            href="https://www.forbes.com/sites/digital-assets/2026/07/16/when-the-financial-system-cant-reach-people-in-crisis-bitcoin-can/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground"
          >
            Read the full story on Forbes
          </a>
        </figcaption>
      </figure>

      <p>
        Sami's experience is not uncommon. "I have spoken with dozens of
        Palestinians who have had similar experiences where either a middleman,
        or a platform, refused to actually turn over the proceeds to the
        intended recipient," Robbins said. "This leaves people without the
        medical care, food or housing that they desperately needed those funds
        for."
      </p>

      <p>
        And thieving beneficiaries are only one failure mode. Bureaucratic red
        tape demands documentation that people who have lost everything often
        cannot produce. GoFundMe has shut down or blocked withdrawals from
        multiple Gaza campaigns, according to reporting by Al Jazeera. Every
        layer between the donor and the recipient is a place where the money
        can be skimmed, frozen, or stolen.
      </p>

      <p>
        "Meanwhile supporters from abroad would be willing to help if they only
        had a way to reach people and know that their money is actually ending
        up in the beneficiary's pocket and not a middleman," Robbins said.
      </p>

      <h2>Why Agora Is the Only Unstoppable Crowdfunder</h2>

      <p>
        This is the exact problem we built{' '}
        <a href="https://agora.spot" target="_blank" rel="noopener noreferrer">
          Agora
        </a>{' '}
        to solve. Bitcoin needs no middleman. Unlike traditional crowdfunding
        platforms and money transmission services, donors can send funds
        overseas directly, practically instantaneously. It's completely
        unstoppable money.
      </p>

      <figure className="not-prose my-8">
        <img
          src="/assets/blog/sami-gaza-agora/gofundme-vs-agora.jpg"
          alt="Graphic showing GoFundMe's limitations: most crowdfunding platforms only work in a limited number of countries, require bank accounts and centralized intermediaries, and campaigns can be frozen, removed, delayed, or financially isolated"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
      </figure>

      <p>
        Sami's story, and the stories of so many others who have had campaigns
        taken down by GoFundMe or funds held hostage by intermediaries, prove a
        simple rule: any middleman in the fundraising process is a threat to
        sovereignty. It doesn't matter if the middleman is a platform, a
        payment processor, or your sister's ex-husband. If someone else holds
        the money, someone else decides whether you get it.
      </p>

      <p>
        That rule applies inside Bitcoin too. There is a movement within
        Bitcoin right now to move away from on-chain payments and onto layer 2
        services, or even layer 3, and onto middleman servers like BTCPay
        Server. These services trade sovereignty for privacy. In some cases,
        that may be a desired and worthwhile tradeoff. But in Sami's case, and for anyone who
        needs fundraising that cannot be stopped, that tradeoff is the
        difference between feeding their family and starving. Sami's story is
        exactly why unstoppability matters.
      </p>

      <p>
        Agora keeps the money where it belongs: in a wallet controlled by the
        recipient. There are no platform fees. There is no paperwork and no
        bureaucracy. The platform is built on the decentralized{' '}
        <a href="/blog/nostr101">Nostr protocol</a> for censorship resistance
        at every level, and we developed it in collaboration with the Human
        Rights Foundation and World Liberty Congress, organizations working on
        the front lines of the fight against digital autocracy. As I told
        Forbes: we can't take your account from you. We can't shut down your
        campaign. We can't take your money. For people dealing with trauma and
        a lack of control over their lives, that can be a huge moment of
        empowerment.
      </p>

      <p>
        Agora has been adopted widely by the people of Palestine, with hundreds
        of campaigns already launched in the region. The platform has also been
        used for{' '}
        <a href="/blog/venezuela-earthquake-relief-bitcoin">
          earthquake relief efforts in Venezuela
        </a>
        , to support{' '}
        <a href="/blog/bitcoin-babies-circular-economy-kenya">
          women's financial sovereignty in Kenya
        </a>
        , and by censored and targeted democracy advocates worldwide. These
        communities have already been forced to turn to Bitcoin for survival.
        Anywhere the financial system has collapsed, or where citizens are
        locked out of the system due to political repression, people
        immediately understand the need for Agora without further explanation.
      </p>

      <h2>Sami Is Starting Over</h2>

      <p>
        For Sami, Agora is a much-needed lifeline. "I am starting over through
        the Agora platform," he wrote on his new campaign, "which ensures that
        your generous support reaches my family directly and securely, without
        any middleman."
      </p>

      <div className="not-prose my-8 mx-4 sm:mx-12">
        <Card className="border-l-4 border-orange-500 bg-orange-50/50">
          <CardContent className="p-6">
            <blockquote className="text-lg italic text-foreground mb-3">
              "I appeal to your humanity today as a father who simply wants to
              secure daily food and essentials for his children amid this
              unbearable economic hardship, and to help us survive. Every
              single donation, no matter how small, means the world to us and
              gives my children hope for a safer tomorrow."
            </blockquote>
            <p className="text-right font-semibold text-orange-700">
              - Sami Shannat
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        He is hoping to recoup the money he says was stolen from him. This
        time,
        every donation goes straight to a wallet that only he controls. No
        beneficiary. No platform holding the funds. No one who can take it
        away.
      </p>

      <div className="not-prose my-12">
        <a
          href="https://agora.spot/sami/your-support-keeps-us-alive"
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-xl border border-border/70 bg-card no-underline shadow-sm transition-all hover:shadow-lg motion-safe:hover:-translate-y-0.5"
        >
          {/* Campaign cover, as it appears on Agora */}
          <div className="relative w-full bg-gradient-to-br from-orange-500/15 via-orange-500/5 to-secondary">
            <img
              src="/assets/blog/sami-gaza-agora/agora-campaign-banner.jpg"
              alt="Save Our Family campaign banner showing Sami Shannat and his wife and two children in Gaza"
              className="w-full h-auto"
              loading="lazy"
            />
            <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
              <span>🇵🇸</span>
              <span>Palestine</span>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-6 sm:flex-row">
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <h3 className="text-xl font-bold leading-tight tracking-tight text-foreground">
                Your Support Keeps Us Alive
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                "My name is Sami, and I am writing to you from the heart of
                Gaza, where daily survival has become an ongoing struggle. I am
                starting over through the Agora platform, which ensures that
                your generous support reaches my family directly and securely,
                without any middleman."
              </p>
              <div className="text-sm">
                <span className="font-semibold text-foreground">
                  $30,000 goal
                </span>{' '}
                <span className="text-muted-foreground">
                  · 100% goes directly to Sami's family
                </span>
              </div>
              <div className="mt-auto flex items-center gap-2 border-t border-border/60 pt-3">
                <img
                  src="/assets/blog/sami-gaza-agora/sami-avatar.jpg"
                  alt="Sami Shannat's Nostr profile picture"
                  className="h-6 w-6 rounded-full object-cover"
                  loading="lazy"
                />
                <span className="text-xs text-muted-foreground">
                  Sami alshannat
                </span>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-center justify-center gap-3 sm:w-44">
              <img
                src="/assets/blog/sami-gaza-agora/agora-campaign-qr.png"
                alt="QR code linking to Sami Shannat's Your Support Keeps Us Alive campaign on Agora"
                className="h-32 w-32 rounded-lg border border-border/60 bg-white p-1.5"
                loading="lazy"
              />
              <span className="text-center text-xs text-muted-foreground">
                Scan to donate
              </span>
              <span className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6A00] px-4 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-[#e55f00]">
                Donate on Agora
                <ExternalLink className="h-4 w-4" />
              </span>
            </div>
          </div>
        </a>
      </div>

      <p>
        As for Agora, this is just the beginning. No more campaign shutdowns,
        no more bank account seizures, and no more censorship. We have the
        technology now to make money unstoppable, and we're ready to bring it
        to the world.
      </p>

      <h2>Related Reading</h2>

      <ul>
        <li>
          <a
            href="https://www.forbes.com/sites/digital-assets/2026/07/16/when-the-financial-system-cant-reach-people-in-crisis-bitcoin-can/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forbes: When The Financial System Can't Reach People In Crisis,
            Bitcoin Can
          </a>
        </li>
        <li>
          <a href="/blog/venezuela-earthquake-relief-bitcoin">
            Venezuelans Turn to Bitcoin to Fund Earthquake Relief
          </a>
        </li>
        <li>
          <a href="/blog/bitcoin-babies-circular-economy-kenya">
            Bitcoin Babies: A Circular Economy for Women's Sovereignty in Kenya
          </a>
        </li>
        <li>
          <a href="/blog/agora-connecting-freedom-fighters">
            Agora: Connecting Freedom Fighters to Uncensorable International
            Support
          </a>
        </li>
        <li>
          <a href="/blog/agora-is-live">Agora Is Live</a>
        </li>
      </ul>
    </article>
  );
}
