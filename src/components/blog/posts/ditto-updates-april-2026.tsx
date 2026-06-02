import type { BlogPostMeta } from '@/lib/blog/types';

import { Button } from '@/components/ui/button';
import { EmailSignupForm } from '../../EmailSignupForm';

export const meta: BlogPostMeta = {
  slug: 'ditto-updates-april-2026',
  title: 'Ditto Update: Blobbis, Letters, and a Whole Lot More',
  excerpt:
    'Less than a month after the new version of Ditto launched, the team has shipped 25 releases packed with virtual pets, an encrypted letter system, an article editor, badges, and much more.',
  coverImage: '/assets/blog/ditto-updates-april-2026/cover.png',
  date: '2026-04-10',
  author: {
    name: 'M. K. Fain',
    picture: '/assets/avatars/mk.jpg',
  },
  ogImage: {
    url: '/assets/blog/ditto-updates-april-2026/cover.png',
  },
  tags: ['Ditto', 'Nostr', 'Update'],
  featured: false,
};

export default function DittoUpdatesApril2026() {
  return (
    <article className="prose prose-lg max-w-none">

      <p>
        We <a href="/blog/announcing-ditto-2">launched the new version of Ditto</a> less than a month ago, and we have not slowed down.
        Since then the team has shipped <strong>25 releases</strong> (from v2.0.0 to v2.6.2), adding
        major new features, polishing every surface, and squashing a mountain of bugs. Here's everything
        that's new.
      </p>

      {/* ── Android App ── */}
      <h2>Ditto Is Now on Android</h2>

      <p>
        The one you've been waiting for: <strong>Ditto now has a dedicated Android app</strong>. The app
        includes full push notifications, secure keychain credential storage, native file
        downloads, and proper swipe-back navigation. It's not a wrapped web view. Everything feels
        native, from the bottom navigation to the fullscreen Divines experience.
      </p>

      <p>
        Ditto is also available on the{' '}
        <a href="https://apps.apple.com/us/app/ditto-fun-social-media/id6761851821" target="_blank" rel="noopener noreferrer">App Store</a> for
        iOS users.
      </p>

      <div className="not-prose flex flex-wrap justify-center gap-3 my-6">
        <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
          <a
            href="https://apps.apple.com/us/app/ditto-fun-social-media/id6761851821"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/icons/app-store.svg" alt="" className="mr-2 h-5 w-5" />
            App Store
          </a>
        </Button>
        <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
          <a
            href="https://play.google.com/store/apps/details?id=pub.ditto.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/icons/google-play.svg" alt="" className="mr-2 h-5 w-5" />
            Get on Google Play
          </a>
        </Button>
        <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
          <a
            href="https://zapstore.dev/apps/pub.ditto.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/icons/zapstore.png" alt="" className="mr-2 h-5 w-5 rounded" />
            Get on Zapstore
          </a>
        </Button>
      </div>

      {/* ── Blobbi Virtual Pets ── */}
      <h2>Blobbi Virtual Pets</h2>

      <p>
        The biggest addition to Ditto since the relaunch is <strong>Blobbi</strong>, a full virtual-pet system
        inspired by Tamagotchi and Neopets, living right inside your social feed.
      </p>

      <p>
        When you first open Ditto after the update, you'll receive a mysterious egg. Tap through an
        immersive hatching ceremony. The egg shakes, cracks spread across the shell, light bursts
        through, sparkles fly, and your Blobbi is revealed. You give it a name, and it's yours.
      </p>

      <p>
        From there you can <strong>feed, clean, heal, sing to, and play music for</strong> your Blobbi.
        It evolves through stages and can grow into one of <strong>16 different adult forms</strong>,
        each with its own personality. A companion version of your Blobbi follows you around the app,
        tracking your cursor on desktop, blinking, sleeping, getting dirty when neglected, and reacting
        to what you're doing on the platform.
      </p>

      <p>
        There's a <strong>shop and inventory system</strong> with items that affect your pet's stats, a
        <strong> daily mission board</strong> with quests you can reroll, care streaks with stage-based
        rewards, and Blobbi stickers you can place on posts. Your Blobbi's onboarding state even syncs
        across devices via your Nostr profile, so it follows you everywhere.
      </p>

      <p>
        Is it silly? Absolutely. Is it one of the most delightful things we've ever built? Also yes.
        Social media should be fun, and Blobbis are proof.
      </p>

      <div className="not-prose grid grid-cols-3 gap-3 my-8">
        <img
          src="/assets/blog/ditto-updates-april-2026/blobbi-egg.jpeg"
          alt="Pur, a pink egg-shaped Blobbi with care action icons"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
        <img
          src="/assets/blog/ditto-updates-april-2026/blobbi-owl.jpeg"
          alt="Vermelhinho, an angry pink owl Blobbi with green eyes"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
        <img
          src="/assets/blog/ditto-updates-april-2026/blobbi-flower.jpeg"
          alt="Puck, a sunflower Blobbi in a red pot"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
      </div>

      <div className="not-prose flex justify-center my-6">
        <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
          <a href="https://ditto.pub/blobbi" target="_blank" rel="noopener noreferrer">
            Try Blobbi on Ditto &rarr;
          </a>
        </Button>
      </div>

      {/* ── Letters ── */}
      <h2>Letters</h2>

      <p>
        <strong>Letters</strong> brings personal, decorated messaging to Ditto, and it goes
        further than you might expect.
      </p>

      <p>
        Open the Letters page from the sidebar (look for the mailbox icon) and compose a letter to any
        Nostr user. Pick from <strong>custom stationery</strong>: your own color moments, themes from
        people you follow, or built-in presets. Choose a font. Add emoji stickers. Draw freehand
        sticker doodles with the built-in canvas. Write your message.
      </p>

      <p>
        When you send it, the recipient sees a <strong>3D interactive envelope</strong> with decorative
        Nushu script. They can flip the envelope to see the sender and recipient on the mailing side,
        then open it to reveal the wax seal and the letter inside. You can even <strong>attach a theme
        or color moment as a gift</strong>. The recipient taps once to apply it instantly to their
        own profile.
      </p>

      <p>
        Letters are encrypted, browsable in a grid layout, and support replies and overflow menus. It's
        the most personal way to reach someone on any social platform we know of.
      </p>

      <div className="not-prose grid grid-cols-3 gap-3 my-8">
        <img
          src="/assets/blog/ditto-updates-april-2026/letters-alex.png"
          alt="A letter with a starry night sky theme reading 'Dear MK, You only live once'"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
        <img
          src="/assets/blog/ditto-updates-april-2026/letters-hearts.png"
          alt="A letter with a hearts border reading 'Thank you very much! We appreciate you'"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
        <img
          src="/assets/blog/ditto-updates-april-2026/letters-sunshine.png"
          alt="A letter with a cottage garden theme reading 'Hello sunshine'"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
      </div>

      <div className="not-prose flex justify-center my-6">
        <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
          <a href="https://ditto.pub/letters" target="_blank" rel="noopener noreferrer">
            Try Letters on Ditto &rarr;
          </a>
        </Button>
      </div>

      {/* ── Article Editor ── */}
      <h2>In-App Article Editor</h2>

      <p>
        Ditto now has a <strong>full rich-text article editor</strong> built right into the app. Write
        long-form content with a formatting toolbar, upload images inline, and watch your drafts
        auto-save to your device and sync to relays in the background. A cloud sync indicator lets you
        know the status at a glance.
      </p>

      <p>
        A <strong>"My Articles" tab</strong> gives you a single place to manage drafts and published
        articles. Need to drop into raw markup? Toggle between rich text and markdown source mode at
        any time. It's everything you need to publish long-form content without leaving Ditto.
      </p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/ditto-updates-april-2026/article-editor.png"
          alt="Ditto's in-app article editor with formatting toolbar, cover image, and rich text content"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
      </div>

      <div className="not-prose flex justify-center my-6">
        <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
          <a href="https://ditto.pub/articles" target="_blank" rel="noopener noreferrer">
            Try the Article Editor &rarr;
          </a>
        </Button>
      </div>

      {/* ── Badges & Custom Emoji ── */}
      <h2>Badges & Custom Emoji</h2>

      <p>
        Two systems that make Ditto communities feel alive: <strong>badges</strong> and{' '}
        <strong>custom emoji</strong>.
      </p>

      <p>
        <strong>Badges</strong> display on profiles and can be awarded to other users. Create your own
        badges, award them with a multi-select picker (it even shows who's already received each one),
        and reorder your badge showcase with drag-and-drop. Hover over a badge and watch it pop with a
        3D tilt effect. Badge awards trigger push notifications, and badge thumbnails appear right in
        the notification card.
      </p>

      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <img
          src="/assets/blog/ditto-updates-april-2026/badges-showcase.png"
          alt="A user's profile showing a collection of custom badges including Team Soapbox, Possum Pal, and Whimsy Warrior"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
        <img
          src="/assets/blog/ditto-updates-april-2026/badges-create.png"
          alt="The Create a Badge dialog with image upload, name, identifier, and description fields"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
      </div>

      <p>
        <strong>Custom emoji</strong> got a full upgrade too. There's a new emoji pack creator and
        editor with drag-and-drop image uploads, auto-generated identifiers, and description fields.
        Your most-used custom emojis float to the top of the quick-react bar, and custom packs appear
        first in the emoji picker right after recents. Shortcode autocomplete works everywhere,
        including the zap comment box, and collisions between packs are automatically resolved with
        pack-prefixed names. Profiles now show an emoji reaction button front and center, so you can
        react with any emoji (custom or standard) right on someone's profile.
      </p>

      <div className="not-prose grid grid-cols-3 gap-3 my-8">
        <img
          src="/assets/blog/ditto-updates-april-2026/emoji-feed.png"
          alt="Emoji Packs feed showing shared packs from different users"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
        <img
          src="/assets/blog/ditto-updates-april-2026/emoji-create.png"
          alt="Create Emoji Pack dialog with drag-and-drop image upload"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
        <img
          src="/assets/blog/ditto-updates-april-2026/emoji-newgrounds.png"
          alt="A massive Newgrounds custom emoji pack with hundreds of pixel art emojis"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
      </div>

      <div className="not-prose flex flex-wrap justify-center gap-3 my-6">
        <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
          <a href="https://ditto.pub/badges" target="_blank" rel="noopener noreferrer">
            Explore Badges &rarr;
          </a>
        </Button>
        <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
          <a href="https://ditto.pub/emojis" target="_blank" rel="noopener noreferrer">
            Browse Emoji Packs &rarr;
          </a>
        </Button>
      </div>

      {/* ── Nsites & Nostr Apps ── */}
      <h2>Nsites & Nostr Apps Inside Ditto</h2>

      <p>
        This one is exciting: you can now <strong>run nsites and web apps directly inside Ditto</strong>.
        Hit the "Run" button on any nsite or app card and it opens in an overlay without leaving your
        feed. On iOS and Android, nsites work natively without relying on browser sandboxing tricks.
      </p>

      <p>
        What makes this powerful is the pipeline it creates. Build a static site
        with <a href="/shakespeare">Shakespeare</a>, deploy it as an nsite to Nostr's decentralized
        blossom servers, and anyone on Ditto can discover and launch it right from their timeline. It's
        a full build-deploy-discover loop that lives entirely on the open protocol.
      </p>

      <p>
        Nostr apps in general get first-class treatment now. <strong>App cards</strong> render in feeds
        and detail pages with hero images, icons, and quick-launch buttons.{' '}
        <strong>Zapstore app release cards</strong> show download links, version info, platform badges,
        and file hashes. Webxdc games and apps always open fullscreen for a more immersive experience,
        running in a secure sandbox with strict content policies and private subdomains.
      </p>

      <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        <img
          src="/assets/blog/ditto-updates-april-2026/nsite-dev-feed.png"
          alt="The Development feed showing deployed nsites with Run and Visit buttons"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
        <img
          src="/assets/blog/ditto-updates-april-2026/nsite-polaroids.png"
          alt="The Polaroids nsite running inside Ditto, showing a scrapbook-style photo layout"
          className="rounded-xl shadow-lg w-full h-auto"
          loading="lazy"
        />
      </div>

      <div className="not-prose flex justify-center my-6">
        <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
          <a href="https://ditto.pub/development" target="_blank" rel="noopener noreferrer">
            Explore Nsites &rarr;
          </a>
        </Button>
      </div>

      {/* ── Follow Links, QR Codes & Follow Packs ── */}
      <h2>Follow Links, QR Codes & Follow Packs</h2>

      <p>
        Growing your audience on Nostr just got a lot easier with three new sharing features.
      </p>

      <p>
        <strong>Follow links and QR codes</strong> let you share a link or scannable code that opens a
        themed preview of your profile with recent posts and a one-tap follow button. Print it on a
        business card, drop it in a bio, put it on a sticker. Anyone who scans or clicks can follow
        you instantly.
      </p>

      <p>
        <strong>Follow packs and follow sets</strong> take it further. Curate a list of accounts, share
        it as a link, and recipients see an immersive preview with member avatars, a "Follow All"
        button, and a combined feed from everyone in the pack. It's a great way to onboard new users
        into a community or share a curated corner of Nostr.
      </p>

      <div className="not-prose flex justify-center my-6">
        <Button size="lg" variant="outline" className="px-8 py-3 text-lg" asChild>
          <a href="https://ditto.pub/packs" target="_blank" rel="noopener noreferrer">
            Browse Follow Packs &rarr;
          </a>
        </Button>
      </div>

      {/* ── Other Updates ── */}
      <h2>Other Updates</h2>

      <p>
        The changelog from v2.0.0 to v2.6.2 is long. Here's a rapid-fire roundup of other notable
        improvements:
      </p>

      <ul>
        <li>
          <strong>Curated home feed.</strong> Your timeline now mixes photos, short videos,
          livestreams, and music, with content types spaced out so the feed stays fresh and varied.
        </li>
        <li>
          <strong>Poll upgrades.</strong> Tap the vote count on any poll to see who voted on each
          option, with avatar stacks and per-option filter tabs. You can also attach images and media
          to polls now.
        </li>
        <li>
          <strong>Customizable navigation.</strong> Rearrange or hide items in the bottom bar, manage
          interest tabs (hashtags and locations) from settings, and edit custom profile tabs without
          recreating them.
        </li>
        <li>
          <strong>"What's new" notifications.</strong> After an app update, a toast appears with a
          changelog preview and link to the full changelog. The changelog page itself got a redesign
          with a hero section and collapsible entries.
        </li>
        <li>
          <strong>Full threaded replies.</strong> Post detail pages now show full reply trees with
          collapsible deep branches and "Show X more replies" for sibling threads.
        </li>
        <li>
          <strong>Pull-to-refresh</strong> everywhere, a dedicated photo upload flow, and new-post
          buffering that prevents scroll jumps while you're reading.
        </li>
        <li>
          <strong>React 19 upgrade</strong> and a roughly 50% reduction in initial bundle size through
          improved code splitting and lazy loading.
        </li>
        <li>
          <strong>Security improvements.</strong> Login credentials are now stored in the device's
          secure keychain on iOS and Android. An nsec paste guard warns you before accidentally pasting
          private keys outside the login field.
        </li>
        <li>
          <strong>Mobile polish.</strong> iOS swipe-back navigation works correctly throughout the
          app, file downloads save to the right place on both platforms, and the mobile search
          experience no longer scrolls the page behind it.
        </li>
        <li>
          <strong>Remote signer support.</strong> Improved flows for Amber, Primal, and other signing
          apps, plus a dedicated callback page for login.
        </li>
      </ul>

      <p>
        Plus dozens more bug fixes across the board, from notification dot persistence to emoji
        rendering to content warning blur on thumbnails. The full changelog is available on{' '}
        <a
          href="https://gitlab.com/soapbox-pub/ditto/-/blob/main/CHANGELOG.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitLab
        </a>.
      </p>

      {/* ── Closing ── */}
      <h2>Try It Out</h2>

      <p>
        All of these features are live right now on{' '}
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
          ditto.pub
        </a>. No account required to browse, no email or phone number needed to sign up. If you're
        already on Nostr, just log in with your existing key.
      </p>

      <p>
        Ditto is open source and always will be. Read the code, fork it, remix it, or{' '}
        <a
          href="https://shakespeare.diy/clone?url=https://gitlab.com/soapbox-pub/ditto.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          open it in Shakespeare
        </a>{' '}
        and start hacking. Self-host on a $5 VPS, Netlify, or a Raspberry Pi. The{' '}
        <a
          href="https://docs.soapbox.pub/ditto/"
          target="_blank"
          rel="noopener noreferrer"
        >
          docs
        </a>{' '}
        can help you get started.
      </p>

      <p>We're just getting started. Stay tuned.</p>

      <h3>Get notified of new releases!</h3>
      <EmailSignupForm tags={['Ditto']} />
    </article>
  );
}
