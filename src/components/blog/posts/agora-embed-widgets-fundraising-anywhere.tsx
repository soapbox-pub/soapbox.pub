import type { BlogPostMeta } from '@/lib/blog/types';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export const meta: BlogPostMeta = {
  slug: 'agora-embed-widgets-fundraising-anywhere',
  title: 'Fundraising that can\u2019t be deplatformed, now on any website',
  excerpt:
    'Agora campaigns can now live anywhere on the web. Pick a widget, preview it live, paste the code, and visitors donate Bitcoin without leaving your page. Here\u2019s how.',
  coverImage:
    '/assets/blog/agora-embed-widgets-fundraising-anywhere/cover.jpg',
  date: '2026-09-11',
  author: {
    name: 'Derek Ross',
    picture: '/assets/avatars/derek.jpg',
  },
  ogImage: {
    url: '/assets/blog/agora-embed-widgets-fundraising-anywhere/cover.jpg',
  },
  tags: [
    'Soapbox',
    'DevRel',
    'Agora',
    'Bitcoin',
    'Freedom Tech',
    'Building in the Open',
  ],
  keywords:
    'agora embed, agora widget, bitcoin fundraising widget, embed bitcoin donations, uncensorable crowdfunding, censorship resistant fundraising, agora.spot, silent payments, bip-21, bip-352, nostr fundraising, bitcoin donate button, embed fundraiser, deplatformed fundraiser',
  featured: false,
  hidden: false,
};

export default function AgoraEmbedWidgetsFundraisingAnywhere() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        Crowdfunding platforms remove campaigns all the time. Sometimes
        it&rsquo;s fraud enforcement. Sometimes it&rsquo;s a government
        request, a payment processor&rsquo;s policy, a journalist&rsquo;s phone
        call, or a Terms of Service paragraph nobody read. If your cause is
        politically inconvenient, your fundraiser&rsquo;s lifespan is somebody
        else&rsquo;s decision.
      </p>

      <p>
        <a
          href="https://agora.spot"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agora
        </a>{' '}
        exists to solve exactly this: Bitcoin fundraising with no custodian, no
        platform fees, and no off-switch. Campaigns get paid on-chain with
        Taproot and Silent Payments, donor to recipient, and 100% of the sats
        arrive.
      </p>

      <p>
        Until now, an Agora campaign was something you sent people to.
        Campaigns are Nostr events, so they were never locked inside Agora.
        Any app that speaks the protocol, like{' '}
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
          Ditto
        </a>
        , shows them too. But a campaign rendered in somebody else&rsquo;s app
        is still somebody else&rsquo;s ground. Your own site couldn&rsquo;t
        take donations for it.
      </p>

      <p>
        Not anymore. The latest version of Agora ships an embed builder that
        lets anyone turn a campaign into a live, donate-able widget and paste
        it onto any site they control. Visitors donate without leaving the
        page.
      </p>

      <h2>How to embed a campaign</h2>

      <p>It takes about thirty seconds:</p>

      <ol>
        <li>
          Open any campaign page on{' '}
          <a
            href="https://agora.spot"
            target="_blank"
            rel="noopener noreferrer"
          >
            agora.spot
          </a>
          .
        </li>
        <li>
          Click the <strong>⋯ More</strong> button in the title row.
        </li>
        <li>
          Pick <strong>Embed widget</strong>.
        </li>
        <li>
          A builder opens:{' '}
          <em>
            &ldquo;Choose a widget, preview it, then paste the code into your
            site.&rdquo;
          </em>
        </li>
      </ol>

      <figure>
        <img
          alt="Agora's Embed widget builder dialog: choose a widget variant and theme, with a live preview of the real widget on the right"
          src="/assets/blog/agora-embed-widgets-fundraising-anywhere/embed-builder-dialog.png"
        />
      </figure>

      <h2>Three widgets, one iframe</h2>

      <p>
        The embed is a plain <code>&lt;iframe&gt;</code>. No script tag, no
        third-party tracker, no build step:
      </p>

      <pre>
        <code>{`<iframe src="https://agora.spot/embed/campaign/naddr1qqdxzem0wfsj6ctswqkkgetkv4kx7urdv4h8gttxw4hxgqg4waehxw309aex2mrp0yhxg6t5w3hjuur4vgpzq7q6z5ns2hm5c8msyv83qwzxpxe52j8c4d4q5m92wsp9sflelkh9qvzqqqyyguzezrjg?variant=card&theme=auto"
  width="420" height="560"
  style="border:0;width:100%;max-width:420px;"
  loading="lazy" allow="clipboard-write"
  referrerpolicy="no-referrer-when-downgrade"
  title="Agora App Development Fund"></iframe>`}</code>
      </pre>

      <p>
        Drop that into any page: a blog post, a WordPress sidebar, a
        hand-rolled HTML site, a docs page. The campaign is live there.
      </p>

      <p>Three variants, pick what fits:</p>

      <p>
        <strong>Card</strong> (420&times;560) is the compact one. Title, raised
        total, banner image. No payment on the page; clicking opens the full
        campaign on agora.spot. The right choice for sidebars and link
        roundups.
      </p>

      <p>
        <strong>Donate</strong> (380&times;660) is the payment-focused one.
        Everything a supporter needs to pay you, right in the frame.
      </p>

      <p>
        <strong>Full</strong> (420&times;900) is the whole story: banner,
        verification badge, title, campaign description, and the raised-so-far
        total, with the payment stack underneath. This is the one you build a
        page around.
      </p>

      <p>
        Each variant comes in <strong>System, Light, or Dark</strong>. System
        follows the visitor&rsquo;s device theme, so it looks native on
        whatever site it lands on.
      </p>

      <figure>
        <img
          alt="Agora's three embed variants side by side: the compact Card, the payment-focused Donate widget with QR code, and the Full campaign widget"
          src="/assets/blog/agora-embed-widgets-fundraising-anywhere/embed-variants.png"
        />
      </figure>

      <h2>Donating inside the widget</h2>

      <p>
        My favorite part: the donate variants take real payments, in the
        frame, with no Agora account, no wallet signup, no redirect.
      </p>

      <p>
        The widget shows a QR code of the campaign&rsquo;s{' '}
        <strong>BIP-21 payment URI</strong>, the combined form{' '}
        <code>bitcoin:bc1p…?sp=sp1q…</code> that carries both an on-chain
        address and a Silent Payments address. Modern wallets that speak
        BIP-352 follow the Silent Payments path; everything else falls back to
        the plain address. One QR, every wallet.
      </p>

      <p>
        Next to it: a copyable payment URI, and an{' '}
        <strong>Open external wallet</strong> button for visitors on mobile.
        Campaigns that have set up a fiat on-ramp get a{' '}
        <strong>Pay with card</strong> option too, with a &ldquo;don&rsquo;t
        have Bitcoin?&rdquo; path for newcomers.
      </p>

      <p>
        The raised-so-far total is live as well, a real on-chain balance
        lookup for the campaign. The number on your website is the number on
        the chain.
      </p>

      <figure>
        <img
          alt="Agora's Donate embed variant showing the BIP-21 QR code, copyable payment URI, Open external wallet button, and the live raised-so-far total"
          src="/assets/blog/agora-embed-widgets-fundraising-anywhere/embed-donate-qr.png"
        />
      </figure>

      <h2>What&rsquo;s deliberately <em>not</em> in the widget</h2>

      <p>
        The embed does not include Agora&rsquo;s in-app wallet, and it
        doesn&rsquo;t handle Lightning invoices. The reason is security. An
        iframe living on somebody else&rsquo;s website is third-party
        territory, and exposing key material or wallet flows inside someone
        else&rsquo;s page is how people get robbed. So the widget carries
        addresses and URIs (safe to show anywhere), and keys never leave home.
      </p>

      <p>Freedom tech earns its name by being boring about the right things.</p>

      <h2>Why &ldquo;anyone can embed&rdquo; matters</h2>

      <p>
        The builder doesn&rsquo;t check whether you own the campaign. Any
        viewer can embed any campaign. A journalist covering your cause, a
        community site, a volunteer who wants to help. Fundraising stops being
        a page you send people to and becomes something other people can{' '}
        <em>amplify on their own ground</em>, each copy as uncensorable as the
        original.
      </p>

      <p>
        In the wild: the Support section of my own site runs the full widget,
        taking on-chain donations directly from{' '}
        <a
          href="https://derekross.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          derekross.me
        </a>
        .
      </p>

      <figure>
        <img
          alt="The Support section of derekross.me with the full-variant Agora widget embedded live beside the fundraising copy, showing the QR code and raised total"
          src="/assets/blog/agora-embed-widgets-fundraising-anywhere/embed-live-on-derekross-me.png"
        />
      </figure>

      <p>Embed anywhere. Pay from any wallet. Nobody can switch it off.</p>

      <h2>Try it</h2>

      <ul>
        <li>
          Browse campaigns on{' '}
          <a
            href="https://agora.spot"
            target="_blank"
            rel="noopener noreferrer"
          >
            agora.spot
          </a>
          , hit <strong>⋯ &rarr; Embed widget</strong>, and see the builder for
          yourself
        </li>
        <li>
          Building a campaign? Set it up in minutes: on-chain Bitcoin, no
          custodian, no fees
        </li>
        <li>
          Read the code: Agora is AGPL-3.0{' '}
          <a
            href="https://gitworkshop.dev/soapbox.pub/agora"
            target="_blank"
            rel="noopener noreferrer"
          >
            on Nostr Git
          </a>
        </li>
      </ul>

      <p>
        Money that can&rsquo;t be frozen, now living wherever your people
        already are. That&rsquo;s fundraising without a landlord.
      </p>

      <div className="not-prose my-10">
        <a
          href="https://agora.spot"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <Card className="border border-orange-500/50 bg-gradient-to-br from-[#211505] to-[#150d04] transition-shadow hover:shadow-lg hover:shadow-orange-500/20">
            <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
              <Heart className="w-8 h-8 shrink-0 text-orange-400" />
              <div>
                <p className="m-0 font-semibold text-white">
                  Put your fundraiser on your own site
                </p>
                <p className="m-0 text-sm text-white/70">
                  Open any campaign on agora.spot, hit ⋯ &rarr; Embed widget,
                  and paste uncensorable Bitcoin fundraising anywhere on the
                  web.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center rounded-full bg-orange-600 px-6 py-3 font-bold text-white">
                Open Agora
              </span>
            </CardContent>
          </Card>
        </a>
      </div>
    </article>
  );
}
