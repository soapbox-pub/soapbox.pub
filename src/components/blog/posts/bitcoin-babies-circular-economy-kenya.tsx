import type { BlogPostMeta } from '@/lib/blog/types';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { ExternalLink } from 'lucide-react';

export const meta: BlogPostMeta = {
  slug: 'bitcoin-babies-circular-economy-kenya',
  title: "Bitcoin Babies: A Circular Economy for Women's Sovereignty in Kenya",
  excerpt:
    "We visited Bitcoin Babies in Matangi, Kenya, where mothers earn and spend Bitcoin in a circular economy built for women's financial independence.",
  coverImage: '/assets/blog/bitcoin-babies-kenya/cover.jpg',
  date: '2026-07-18',
  author: {
    name: 'M. K. Fain',
    picture: '/assets/avatars/mk.jpg',
  },
  ogImage: {
    url: '/assets/blog/bitcoin-babies-kenya/cover.jpg',
  },
  featured: true,
  tags: [
    'bitcoin babies',
    'bitcoin kenya',
    'circular economy',
    'bitcoin circular economy',
    'agora',
    'agora.spot',
    'womens sovereignty',
    'financial independence',
    'bitcoin adoption africa',
    'lightning network',
    'kenya',
    'matangi',
    'bitcoin donations',
    'freedom tech',
  ],
  keywords:
    'bitcoin babies, bitcoin babies kenya, bitcoin circular economy kenya, bitcoin adoption kenya, bitcoin for women, women financial independence bitcoin, bitcoin circular economy africa, matangi kenya bitcoin, support bitcoin babies, agora bitcoin crowdfunding, donate bitcoin kenya, lightning network kenya, bitcoin vs mpesa, mothers bitcoin stipend',
  faq: [
    {
      question: 'What is Bitcoin Babies?',
      answer:
        'Bitcoin Babies is a community-driven program in Kenya that provides motherhood education, community support, and financial independence to mothers. Each mother in the program receives a weekly stipend in Bitcoin, which she can spend at local merchants throughout her community.',
    },
    {
      question: 'Why does Bitcoin Babies use Bitcoin instead of a bank or M-Pesa?',
      answer:
        'Many of the mothers in the program are locked out of the traditional economic system, and men often expect to control household bank accounts. Bitcoin gives women direct, personal control over their own money. No one else can freeze it, take it, or spend it for them.',
    },
    {
      question: 'Where does Bitcoin Babies operate?',
      answer:
        'Bitcoin Babies operates in Matangi, a community near Ruiru in Kiambu County, Kenya, just outside Nairobi. Local merchants throughout the community accept Bitcoin over the Lightning Network.',
    },
    {
      question: 'How can I support Bitcoin Babies?',
      answer:
        'You can donate directly to the Bitcoin Babies campaign on Agora at agora.spot/bitcoinbabies/bitcoin-babies-the-sovereign-mother. Every sat goes directly to helping women and children in the program.',
    },
  ],
};

export default function BitcoinBabiesCircularEconomyKenya() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        When Bitcoin Babies became one of the first accounts to create a
        campaign on <a href="https://agora.spot" target="_blank" rel="noopener noreferrer">Agora</a>,
        we took notice. So when Alex Gleason and I found ourselves in Nairobi
        for the bitcoin++ open source edition, we knew we had to visit.
      </p>

      <p>
        <a href="https://bitcoinbabies.com/" target="_blank" rel="noopener noreferrer">
          Bitcoin Babies
        </a>{' '}
        generously offered us a tour of the community they serve in Matangi,
        just outside Nairobi. Dan, who leads the program on the ground, and
        Eve, their community manager and herself a graduate of the program,
        walked us shop to shop through a neighborhood where Bitcoin isn't a
        speculative asset. It's how mothers buy dinner.
      </p>

      <h2>What Bitcoin Babies Does</h2>

      <p>
        Bitcoin Babies provides motherhood education, community support, and
        financial independence to mothers who are traditionally locked out of
        the economic system. Mothers in the program meet weekly to learn about
        infant nutrition, entrepreneurship, and financial wellness. And each
        mother receives a weekly stipend, paid in Bitcoin, that she can spend
        throughout her community.
      </p>

      <p>
        The Bitcoin part is not a gimmick. It's the point. In many households,
        men expect to control the bank accounts. A woman's money is not really
        hers if someone else holds the keys. Bitcoin changes that math.
        A mother with a Lightning wallet on her phone has money that no one
        can freeze, confiscate, or spend on her behalf. That's autonomy.
      </p>

      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <figure className="m-0">
          <img
            src="/assets/blog/bitcoin-babies-kenya/miale-medical-centre.jpg"
            alt="M.K. Fain with Eve of Bitcoin Babies and a clinician at Miale Medical Centre, a Bitcoin-accepting clinic in Matangi, Kenya"
            className="rounded-xl shadow-lg w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
        <figure className="m-0">
          <img
            src="/assets/blog/bitcoin-babies-kenya/matangi-produce-market.jpg"
            alt="A produce market in Matangi, Kenya where merchants accept Bitcoin payments"
            className="rounded-xl shadow-lg w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
      </div>
      <p className="not-prose text-center text-sm text-gray-500 -mt-4 mb-8">
        Left: visiting Miale Medical Centre with Eve. Right: a produce market
        in Matangi where merchants accept Bitcoin.
      </p>

      <h2>A Real Circular Economy</h2>

      <p>
        The mothers don't have to convert their stipend to shillings to use
        it. Bitcoin Babies has built a genuine circular economy in Matangi,
        where mothers can buy everything from food to medical supplies to
        clothes with Bitcoin. Groceries, the pharmacy, the butcher, the
        medical clinic, the salon, even the chapati stand. All of them accept
        sats over Lightning.
      </p>

      <figure className="not-prose my-8">
        <img
          src="/assets/blog/bitcoin-babies-kenya/circular-economy-safari-map.jpg"
          alt="Illustrated Circular Economy Safari map of Matangi, Kenya showing twelve Bitcoin-accepting merchants including BitGlam Fashions, Miale Medical Centre, Wakari Grocery, and Friendly Pharmacy"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          The Circular Economy Safari: a dozen Bitcoin-accepting merchants
          within walking distance of each other.
        </figcaption>
      </figure>

      <p>
        Here's my favorite part: many of the merchants are graduates of the
        program themselves. A mother enters the program, learns to save and
        spend in Bitcoin, starts a business, and then becomes one of the
        merchants that the next cohort of mothers spends their stipends with.
        The money circulates instead of leaking out. The program literally
        grows its own economy.
      </p>

      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <figure className="m-0">
          <img
            src="/assets/blog/bitcoin-babies-kenya/mk-vegetable-merchant.jpg"
            alt="M.K. Fain with a Bitcoin-accepting vegetable merchant at her produce stand in Matangi, Kenya"
            className="rounded-xl shadow-lg w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
        <figure className="m-0">
          <img
            src="/assets/blog/bitcoin-babies-kenya/merchant-baby-supplies.jpg"
            alt="A smiling merchant sells diapers and baby supplies for Bitcoin at her shop in Matangi, Kenya"
            className="rounded-xl shadow-lg w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
      </div>

      <p>
        Merchants even offer discounts to keep the loop going. One shop hands
        out flyers offering 25% off essentials like bread, fruit, milk,
        medicine, and diapers when you pay in Bitcoin. If you don't have
        Bitcoin yet, they'll sell you some and get you started.
      </p>

      <figure className="not-prose my-8">
        <img
          src="/assets/blog/bitcoin-babies-kenya/save-25-percent-essentials-flyer.jpg"
          alt="Flyer at a Matangi shop offering 25% off essentials like bread, fruit, milk, medicine, and diapers when paying with Bitcoin"
          className="rounded-xl shadow-lg w-full h-auto sm:max-w-md mx-auto"
          loading="lazy"
        />
        <figcaption className="text-center text-sm text-gray-500 mt-2">
          Bitcoin discounts on essentials at a participating merchant.
        </figcaption>
      </figure>

      <h2>Bitcoin Is Just How You Pay Here</h2>

      <p>
        The impact of Bitcoin on this community is obvious the moment you walk
        down the street. Shops proudly display hand-painted murals promoting
        their adoption of Bitcoin. Lightning addresses are posted at the till
        right alongside M-Pesa numbers and other forms of digital payment.
        Some posters go further: "M-Pesa payments are accepted, but Bitcoin is
        our preferred option."
      </p>

      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <figure className="m-0">
          <img
            src="/assets/blog/bitcoin-babies-kenya/bitcoin-accepted-mural.jpg"
            alt="Hand-painted Bitcoin Accepted Here mural on a shop door in Matangi, Kenya"
            className="rounded-xl shadow-lg w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
        <figure className="m-0">
          <img
            src="/assets/blog/bitcoin-babies-kenya/salon-bitcoin-accepted.jpg"
            alt="A salon in Matangi, Kenya with Bitcoin Accepted painted on its blue storefront doors"
            className="rounded-xl shadow-lg w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
        <figure className="m-0">
          <img
            src="/assets/blog/bitcoin-babies-kenya/bitcoin-preferred-payment-poster.jpg"
            alt="Payment poster at a Matangi shop listing a Blink Lightning address and Machankura number alongside M-Pesa, stating Bitcoin is our preferred option"
            className="rounded-xl shadow-lg w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
        <figure className="m-0">
          <img
            src="/assets/blog/bitcoin-babies-kenya/wakari-grocery-poster.jpg"
            alt="Wakari Grocery payment poster in Matangi, Kenya showing a Lightning address QR code next to M-Pesa payment options"
            className="rounded-xl shadow-lg w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
      </div>

      <p>
        And yes, it actually works. I bought a Coke with Lightning. The
        payment settled before the bottle hit the counter.
      </p>

      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <figure className="m-0">
          <img
            src="/assets/blog/bitcoin-babies-kenya/mk-paying-bitcoin-lightning.jpg"
            alt="M.K. Fain smiling while paying for a Coca-Cola with a Bitcoin Lightning wallet at a shop in Matangi, Kenya"
            className="rounded-xl shadow-lg w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
        <figure className="m-0">
          <img
            src="/assets/blog/bitcoin-babies-kenya/mk-dan-alex-matangi.jpg"
            alt="M.K. Fain, Dan of Bitcoin Babies, and Alex Gleason giving thumbs up in Matangi, Kenya"
            className="rounded-xl shadow-lg w-full h-full object-cover"
            loading="lazy"
          />
        </figure>
      </div>
      <p className="not-prose text-center text-sm text-gray-500 -mt-4 mb-8">
        Left: paying for a Coke over Lightning. Right: with Dan from Bitcoin
        Babies in Matangi.
      </p>

      <h2>A Generation Raised on Sovereignty</h2>

      <p>
        The result of all this is bigger than any single transaction. An
        entire generation of children in Matangi is now growing up with
        educated and independent mothers, complete nutrition, access to
        medical treatment, and their needs met. When mothers thrive, the whole
        community benefits. The merchants earn more. The clinic sees healthier
        kids. The next cohort of mothers has role models who look like them
        and live down the street.
      </p>

      <p>
        Bitcoin Babies is proof of something we believe deeply at Soapbox:
        combining community needs with education and sovereign finance in one
        program is the key to liberation. Not education alone. Not aid alone.
        Not Bitcoin alone. All three, woven together by people who live in the
        community they serve.
      </p>

      <h2>Support Bitcoin Babies on Agora</h2>

      <p>
        This is exactly the kind of campaign Agora was built for. You can
        support Bitcoin Babies directly, from anywhere in the world, with no
        intermediary taking a cut. Every sat goes directly to helping women
        and children in the program.
      </p>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-orange-300 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-2">🍼</div>
            <div className="text-2xl font-bold mb-3">
              The Sovereign Mother
            </div>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Donate sats to Bitcoin Babies on Agora and help mothers in Kenya
              build financial independence for themselves and their children.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-semibold"
              >
                <a
                  href="https://agora.spot/bitcoinbabies/bitcoin-babies-the-sovereign-mother"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Support Bitcoin Babies on Agora
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a
                  href="https://bitcoinbabies.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn about Bitcoin Babies
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Related Reading</h2>

      <ul>
        <li>
          <a href="/blog/venezuela-earthquake-relief-bitcoin">
            Venezuelans Turn to Bitcoin to Fund Earthquake Relief
          </a>
        </li>
        <li>
          <a href="/blog/agora-is-live">Agora Is Live</a>
        </li>
        <li>
          <a href="/blog/agora-connecting-freedom-fighters">
            Agora: Connecting Freedom Fighters to Uncensorable International
            Support
          </a>
        </li>
        <li>
          <a href="/blog/zapping-101">Zapping 101: How Lightning Payments Work on Nostr</a>
        </li>
      </ul>
    </article>
  );
}
