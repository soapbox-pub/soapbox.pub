import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Key, Shield, ExternalLink, Zap, Download } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blog/types';
import { FAQSection } from '@/components/blog/FAQSection';

export const meta: BlogPostMeta = {
  "slug": "how-to-login-divine-without-invite-code",
  "title": "How to Log In to Divine Without an Invite Code (Using Nostr)",
  "excerpt": "Divine launches today. No invite code? Skip it: create a free Nostr account on Ditto, then log in to Divine with your nsec — no waitlist.",
  "coverImage": "/assets/blog/how-to-login-divine-without-invite-code/how-to-log-into-divine-no-invite-code-with-nostr-cover.png",
  "date": "2026-04-29",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/how-to-login-divine-without-invite-code/how-to-log-into-divine-no-invite-code-with-nostr-cover.png"
  },
  "featured": false,
  "tags": [
    "divine",
    "divine app",
    "divine login",
    "divine invite code",
    "divine without invite code",
    "divine video app",
    "vine successor",
    "nostr",
    "nostr login",
    "nsec",
    "ditto",
    "tutorial",
    "how to",
    "launch",
    "mobile"
  ],
  "keywords": "divine without invite code, how to log in to divine, divine nostr login, divine invite code, divine app, how to skip divine invite code, skip divine waitlist, divine video app, vine successor, divine app login, nsec, import nostr key, divine app review, divine iphone, divine android, what is divine, is divine free, divine waitlist, log in to divine with nostr, divine no invite",
  "faq": [
    { "question": "Do I need an invite code to use Divine?", "answer": "No. Divine's sign-up flow requires an invite code, but signing in with an existing Nostr account does not. Create a Nostr account anywhere (we recommend Ditto), then log in to Divine with your nsec." },
    { "question": "How do I skip the Divine waitlist or invite code?", "answer": "You don't need to wait for an invite. Create a free Nostr account on Ditto (ditto.pub), save your nsec, then tap 'Sign in with a different account' in the Divine app and import your Nostr key. You're in, no invite code required." },
    { "question": "What is Divine?", "answer": "Divine is a short-form video app built on the decentralized Nostr protocol. It's often described as a spiritual successor to Vine, letting anyone post, watch, and discover looping videos — with an account that works across the whole Nostr ecosystem." },
    { "question": "Is Divine like Vine?", "answer": "Yes. Divine is a short-form looping-video app often called the spiritual successor to Vine, but built on Nostr so your account and content aren't locked to a single company." },
    { "question": "How do I get a Divine invite code?", "answer": "Two options: get a code from an existing Divine user, or use your Nostr account to sign in — which bypasses the invite-code requirement entirely. Logging in with Nostr is faster than waiting for an invite, and it gives you a portable account you can take to other apps." },
    { "question": "Is Divine free?", "answer": "Yes. Divine is a free app available in the Apple App Store and Google Play." },
    { "question": "Can I use Divine on iPhone and Android?", "answer": "Yes. Divine is available on both the Apple App Store (iOS) and Google Play (Android). You can also find download links at divine.video." },
    { "question": "What is an nsec?", "answer": "An nsec is your Nostr private key — the credential that proves you own your Nostr account. It looks like a long string starting with nsec1. Treat it like a master password: anyone who has it can post as you." },
    { "question": "Is it safe to paste my nsec into Divine?", "answer": "Divine is built by our partners at And Other Stuff and is designed around open Nostr standards. As a general rule, you should only paste your nsec into apps you trust. For extra safety, you can use a remote signer app like nsec.app or Amber instead of pasting your key directly." },
    { "question": "Can I use my Divine account on other apps?", "answer": "Yes — that's exactly the point of Nostr. The same account works on Ditto, Damus, Primal, Amethyst, and many more. Your followers and profile follow you everywhere." },
    { "question": "What is Nostr and how does it relate to Divine?", "answer": "Divine is built on Nostr, a decentralized social protocol. The account you make on Ditto works on Divine — and on Damus, Primal, Amethyst, and dozens more. No phone number, no email, no invite codes. You own your identity." },
    { "question": "What is Ditto?", "answer": "Ditto is a free, open-source Nostr client built by Soapbox at ditto.pub. It runs in any browser and is also available as a native app for iOS and Android. Because Ditto is built on Nostr, the account you create on Ditto works on Divine, Damus, Primal, Amethyst, and every other Nostr app — one identity, every app. Learn more at soapbox.pub/ditto." },
    { "question": "What happens to my Ditto profile when I log in to Divine?", "answer": "Nothing bad. Your profile, username, posts, and follower list come with you automatically — they aren't stored on Ditto. They live on the Nostr network, and Divine is just a different way to view the same data." },
    { "question": "Where can I watch divines without downloading Divine?", "answer": "At ditto.pub/vines, right in your browser. Every public divine posted on Nostr shows up in that feed, and you can comment using the Ditto account you created above." }
  ],
  "howTo": {
    "name": "How to log in to Divine without an invite code",
    "description": "Log in to the Divine video app by creating a free Nostr account on Ditto and importing your nsec, bypassing the invite-code requirement entirely.",
    "totalTime": "PT5M",
    "steps": [
      { "name": "Create a free Nostr account on Ditto", "text": "Go to ditto.pub in any browser (or download the Ditto app). Tap Sign up, then Generate my key. On the Your secret key screen, tap Save Key to download your nsec as a file.", "url": "https://ditto.pub" },
      { "name": "Download the Divine app", "text": "Install Divine from the Apple App Store (iOS) or Google Play (Android). You can find both download links at divine.video.", "url": "https://divine.video" },
      { "name": "Log in with your Nostr nsec", "text": "Open Divine. On the welcome screen, tap Sign in with a different account. On the Sign in screen, scroll down and tap Import Nostr key. Paste your nsec into the Private key or bunker URL field and tap Import Nostr key. You're in — no invite code required." }
    ]
  }
};

export default function HowToLoginDivineWithoutInviteCode() {
  return (
    <article className="prose prose-lg max-w-none">
      <p>
        <strong><a href="https://divine.video" target="_blank" rel="noopener noreferrer">Divine</a>, the short-form video app built on Nostr, is live in the Apple App Store and Google Play today.</strong> Widely described as a spiritual successor to Vine, Divine is gated by invite codes at sign-up — but here's the trick most people don't know: you don't actually need one. There's a second way in. <strong>Log in with an existing Nostr account</strong> and you walk right past the invite-code requirement.
      </p>

      <div className="not-prose my-8">
        <Card className="border-teal-200 bg-gradient-to-br from-teal-50 to-teal-100/50">
          <CardHeader>
            <CardTitle className="text-teal-800 text-lg flex items-center gap-2">
              <Zap className="w-5 h-5" />
              The 30-Second Shortcut
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 text-sm space-y-3">
            <ol className="space-y-2 ml-4 list-decimal">
              <li>Go to <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline">ditto.pub</a> and sign up to get your <strong>nsec</strong> (Nostr login password).</li>
              <li><strong>Download your nsec</strong> during signup (tap <strong>Save Key</strong>), or copy it later from <strong>Profile Settings → Advanced</strong>.</li>
              <li>Open <strong>Divine</strong> → tap <strong>Sign in with a different account</strong> → <strong>Import Nostr key</strong> → paste your nsec.</li>
              <li>You're in, and you can post to Divine with no invite code. This is a benefit of decentralized tech like Nostr — <strong>not a bug or a hack.</strong></li>
            </ol>
            <p className="text-xs text-teal-700 mt-2">
              Want the full walkthrough with screenshots? Keep reading.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>How to Log In to Divine With Nostr (Step by Step)</h2>

      <p>
        We'll use <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">Ditto</a> to create a free Nostr account, then use that account to log in to Divine. We're suggesting Ditto because it's built by our team at <a href="https://andotherstuff.org/" target="_blank" rel="noopener noreferrer">And Other Stuff</a>, but <strong>this same flow works with any Nostr app</strong> — you can discover more at <a href="https://nostrapps.com" target="_blank" rel="noopener noreferrer">nostrapps.com</a>.
      </p>

      <h3>Step 1: Create a Free Nostr Account on Ditto</h3>

      <p>
        Head to <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">ditto.pub</a> in any browser — desktop or mobile, both work. Or download the Ditto app from the <a href="https://play.google.com/store/apps/details?id=pub.ditto.app" target="_blank" rel="noopener noreferrer">Google Play</a> or <a href="https://apps.apple.com/us/app/ditto-fun-social-media/id6761851821" target="_blank" rel="noopener noreferrer">Apple App Store</a>.
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
            Google Play
          </a>
        </Button>
      </div>

      <p>
        Click <strong>Sign up</strong>, then on the next screen tap <strong>Generate my key</strong>. Ditto creates a fresh Nostr key pair for you — no email, no phone number, no personal info required. Once you have your key, tap <strong>Save Key</strong> on the "Your secret key" screen to download it as a file — this is your <strong>nsec</strong>, the credential you'll paste into Divine in Part 2.
      </p>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <img
            src="/assets/blog/how-to-login-divine-without-invite-code/ditto-signup-1.jpeg"
            alt="Ditto Nostr client homepage on ditto.pub — Sign up button to create a free Nostr account"
            className="rounded-lg border border-gray-200 shadow-sm w-full"
          />
          <img
            src="/assets/blog/how-to-login-divine-without-invite-code/ditto-signup-2.jpeg"
            alt="Ditto Create your Nostr account screen with Generate my key button for the Divine invite-code bypass"
            className="rounded-lg border border-gray-200 shadow-sm w-full"
          />
          <img
            src="/assets/blog/how-to-login-divine-without-invite-code/ditto-signup-3.jpeg"
            alt="Ditto Your Nostr secret key (nsec) screen with the Save Key button — download your nsec to log in to Divine"
            className="rounded-lg border border-gray-200 shadow-sm w-full"
          />
        </div>
      </div>

      <p>
        Once you're signed up, <strong>you can already use Ditto to view and comment on divines</strong> — check out the live feed at <a href="https://ditto.pub/vines" target="_blank" rel="noopener noreferrer">ditto.pub/vines</a>. You'll also see content from all around Nostr in your home feed.
      </p>

      <h3>How to Get Your Nostr Secret Key From Ditto Later</h3>

      <p>
        If you dismissed the signup screen or want to copy your nsec again later, you can always find it under <strong>Profile Settings → Advanced</strong>. Tap the copy icon next to "Your Key" to copy the nsec to your clipboard, or tap <strong>Back Up Key</strong> to download it as a file again. (On Android, your key file saves with a download notification like the one shown; on iPhone it saves to the Files app.)
      </p>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <img
            src="/assets/blog/how-to-login-divine-without-invite-code/ditto-signup-4.jpeg"
            alt="Android download notification showing a Ditto nsec .txt file saved successfully — back up your Nostr secret key before logging in to Divine"
            className="rounded-lg border border-gray-200 shadow-sm w-full"
          />
          <img
            src="/assets/blog/how-to-login-divine-without-invite-code/ditto-signup-5.jpeg"
            alt="Ditto Profile Settings page on ditto.pub — where to find your Nostr secret key later"
            className="rounded-lg border border-gray-200 shadow-sm w-full"
          />
          <img
            src="/assets/blog/how-to-login-divine-without-invite-code/ditto-signup-6.jpeg"
            alt="Ditto Advanced Profile Settings screen showing Your Key with copy icon and Back Up Key button to retrieve your nsec for Divine login"
            className="rounded-lg border border-gray-200 shadow-sm w-full"
          />
        </div>
      </div>

      <div className="not-prose my-8">
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-amber-700 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-amber-900 mb-2">Treat Your nsec Like a Master Password</h4>
                <p className="text-sm text-amber-900">
                  Anyone who has your nsec can post as you, read your DMs, and impersonate you. Store it in a <strong>password manager</strong> like 1Password, Bitwarden, or Dashlane — not a plain-text note, not an email to yourself, not a screenshot. Don't share it with anyone, ever.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3>Step 2: Download the Divine App</h3>

      <p>
        Grab the <a href="https://divine.video" target="_blank" rel="noopener noreferrer">Divine app</a> from your app store of choice:
      </p>

      <ul>
        <li><a href="https://divine.video" target="_blank" rel="noopener noreferrer"><strong>divine.video</strong></a> (links to both stores)</li>
        <li>Search "<strong>Divine</strong>" in the Apple App Store (iOS)</li>
        <li>Search "<strong>Divine</strong>" in the Google Play Store (Android)</li>
      </ul>

      <div className="not-prose my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <img
            src="/assets/blog/how-to-login-divine-without-invite-code/divine-login-step-1.jpeg"
            alt="Divine app welcome screen on iOS — Sign in with a different account button to skip the invite code"
            className="rounded-lg border border-gray-200 shadow-sm w-full"
          />
          <img
            src="/assets/blog/how-to-login-divine-without-invite-code/divine-login-step-2.jpeg"
            alt="Divine app Sign in screen with the Import Nostr key option for logging in without an invite code"
            className="rounded-lg border border-gray-200 shadow-sm w-full"
          />
          <img
            src="/assets/blog/how-to-login-divine-without-invite-code/divine-login-step-3.jpeg"
            alt="Divine app Import your Nostr identity screen — paste your nsec to log in to Divine without an invite code"
            className="rounded-lg border border-gray-200 shadow-sm w-full"
          />
        </div>
      </div>

      <h3>Step 3: Log In With Your Nostr nsec on Divine</h3>

      <p>
        Open Divine and tap through these three screens:
      </p>

      <ul>
        <li><strong>Welcome screen</strong> ("Authentic moments. Human creativity.") — tap <strong>Sign in with a different account</strong> at the bottom. (The other button, <em>Create a new Divine account</em>, is the one that requires an invite code.)</li>
        <li><strong>Sign in screen</strong> — ignore the email and password fields at the top, scroll to the bottom, and tap <strong>Import Nostr key</strong>.</li>
        <li><strong>Import your Nostr identity screen</strong> — paste your nsec (the long string starting with <code>nsec1…</code> that you saved from Ditto) into the <strong>Private key or bunker URL</strong> field, then tap the green <strong>Import Nostr key</strong> button.</li>
      </ul>

      <p>
        That's it. You're in. Your Ditto username, avatar, posts, and followers all come with you — because they live on Nostr, not on any one app.
      </p>

      <h2>Protect Your nsec Like It's Your Password (Because It Is)</h2>

      <p>
        Now that your Nostr key is doing real work for you, take two minutes to lock it down properly:
      </p>

      <div className="not-prose my-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Do This
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm space-y-2">
              <p>• Save your nsec in a password manager (1Password, Bitwarden, Dashlane)</p>
              <p>• Keep a second backup somewhere offline — written on paper in a safe works</p>
              <p>• Only paste your nsec into apps you trust</p>
              <p>• Consider using a signer app like <a href="https://nsec.app" target="_blank" rel="noopener noreferrer" className="underline">nsec.app</a> or <a href="https://github.com/greenart7c3/Amber" target="_blank" rel="noopener noreferrer" className="underline">Amber</a> so you don't have to paste your key into every app you try</p>
            </CardContent>
          </Card>

          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Never Do This
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm space-y-2">
              <p>• Send your nsec in DMs, email, or texts</p>
              <p>• Paste it into a random website that asks for it</p>
              <p>• Store it in a plain-text notes app or Google Doc</p>
              <p>• Share it with "support" — no legit support team will ever ask for your nsec</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <p>
        For the full deep-dive, see our guide on <a href="/blog/managing-nostr-keys">how to store and manage your Nostr private key</a>. And if you eventually decide to start fresh inside Divine instead, we have a separate guide on <a href="/blog/divine-export-your-nostr-keys">how to export your Nostr keys from Divine</a>.
      </p>

      <hr className="my-12 border-gray-200" />

      <FAQSection
        items={[
          {
            question: "What is Nostr and how does it relate to Divine?",
            defaultOpen: true,
            answer: (
              <>
                <p><strong>Divine is built on Nostr, a decentralized social protocol.</strong> That means:</p>
                <ul>
                  <li><strong>One account, every app.</strong> The account you make on Ditto works on Divine — and on <a href="https://damus.io" target="_blank" rel="noopener noreferrer">Damus</a>, <a href="https://primal.net" target="_blank" rel="noopener noreferrer">Primal</a>, <a href="https://amethyst.social" target="_blank" rel="noopener noreferrer">Amethyst</a>, and dozens more.</li>
                  <li><strong>No phone number or email required.</strong> You sign up with a username and get a cryptographic key pair.</li>
                  <li><strong>You own your identity.</strong> No company can lock you out or delete your account.</li>
                  <li><strong>No invite codes, ever.</strong> Nostr is permissionless — the invite code is a Divine-specific launch gate, and Nostr login bypasses it.</li>
                </ul>
              </>
            ),
          },
          {
            question: "What is Ditto?",
            answer: (
              <p>
                <strong><a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">Ditto</a> is a free, open-source Nostr client built by Soapbox.</strong> It runs in any browser at <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">ditto.pub</a>, and is also available as a native app for iOS and Android. Because Ditto is built on Nostr, the account you create on Ditto works on Divine, Damus, Primal, Amethyst, and every other Nostr app — one identity, every app. <a href="/ditto">Learn more about Ditto</a>.
              </p>
            ),
          },
          {
            question: "Do I need an invite code to use Divine?",
            defaultOpen: true,
            answer: (
              <p>
                No. Divine's <em>sign-up</em> flow requires an invite code, but signing in with an existing Nostr account does not. Create a Nostr account anywhere (we recommend Ditto), then log in to Divine with your nsec — that's it.
              </p>
            ),
          },
          {
            question: "How do I skip the Divine waitlist or invite code?",
            answer: (
              <p>
                You don't need to wait for an invite. Create a free Nostr account on <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">Ditto</a>, save your nsec, then tap <strong>Sign in with a different account</strong> in the Divine app and import your Nostr key. You're in — no invite code, no waitlist.
              </p>
            ),
          },
          {
            question: "What is Divine?",
            answer: (
              <p>
                <a href="https://divine.video" target="_blank" rel="noopener noreferrer">Divine</a> is a short-form video app built on the decentralized Nostr protocol. It's often described as a <strong>spiritual successor to Vine</strong>, letting anyone post, watch, and discover looping videos — with an account that works across the entire Nostr ecosystem.
              </p>
            ),
          },
          {
            question: "Is Divine like Vine?",
            answer: (
              <p>
                Yes. Divine is a short-form looping-video app widely called the spiritual successor to Vine, but built on Nostr so your account and content aren't locked to a single company. Your profile, followers, and videos travel with you across any Nostr app.
              </p>
            ),
          },
          {
            question: "How do I get a Divine invite code?",
            answer: (
              <p>
                Two options: either get a code from an existing Divine user, or use your Nostr account to sign in (as shown above). Logging in with Nostr is faster than waiting for an invite, and it gives you a portable account you can take to other apps. <strong>This isn't a workaround — it's a feature of the decentralized Nostr protocol Divine is built on.</strong>
              </p>
            ),
          },
          {
            question: "Can I use Divine on iPhone and Android?",
            answer: (
              <p>
                Yes. Divine is available on both the Apple App Store (iOS) and Google Play (Android). You can also find both download links at <a href="https://divine.video" target="_blank" rel="noopener noreferrer">divine.video</a>.
              </p>
            ),
          },
          {
            question: "Is Divine free?",
            answer: (
              <p>Yes. Divine is a free app available in the Apple App Store and Google Play.</p>
            ),
          },
          {
            question: "What is an nsec?",
            answer: (
              <p>
                An nsec is your Nostr private key — the credential that proves you own your Nostr account. It looks like a long string starting with <code>nsec1…</code>. Treat it like a master password.
              </p>
            ),
          },
          {
            question: "Is it safe to paste my nsec into Divine?",
            answer: (
              <p>
                Divine is built by our partners at <a href="https://andotherstuff.org/" target="_blank" rel="noopener noreferrer">And Other Stuff</a> and is designed around open Nostr standards. As a general rule, you should only paste your nsec into apps you trust. For extra safety, you can also use a remote signer app like <a href="https://nsec.app" target="_blank" rel="noopener noreferrer">nsec.app</a> or <a href="https://github.com/greenart7c3/Amber" target="_blank" rel="noopener noreferrer">Amber</a> instead of pasting your key directly.
              </p>
            ),
          },
          {
            question: "Can I use my Divine account on other apps?",
            answer: (
              <p>
                Yes — that's exactly the point of Nostr. The same account works on <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">Ditto</a>, <a href="https://damus.io" target="_blank" rel="noopener noreferrer">Damus</a>, <a href="https://primal.net" target="_blank" rel="noopener noreferrer">Primal</a>, <a href="https://amethyst.social" target="_blank" rel="noopener noreferrer">Amethyst</a>, and a bunch more. Your followers and profile follow you everywhere.
              </p>
            ),
          },
          {
            question: "What happens to my Ditto profile when I log in to Divine?",
            answer: (
              <p>
                Nothing bad. Your profile, username, posts, and follower list come with you automatically — because they're not stored on Ditto. They're stored on the Nostr network, and Divine is just a different way to view the same data.
              </p>
            ),
          },
          {
            question: "Where can I watch divines without downloading Divine?",
            answer: (
              <p>
                At <a href="https://ditto.pub/vines" target="_blank" rel="noopener noreferrer">ditto.pub/vines</a>, right in your browser. Every public divine posted on Nostr shows up in that feed, and you can comment on them with the Ditto account you created above.
              </p>
            ),
          },
        ]}
      />

      <div className="not-prose my-16">
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-12 text-white text-center">
          <Key className="w-16 h-16 mx-auto mb-6 text-white opacity-90" />
          <h2 className="text-4xl font-bold text-white mb-6">
            No Invite Code? No Problem.
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            One Nostr key, every app. That's the whole idea.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
                Create a Nostr Account on Ditto
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <a href="https://divine.video" target="_blank" rel="noopener noreferrer">
                Download Divine
                <Download className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <h2>Related Reading</h2>

      <ul>
        <li><a href="/blog/what-is-nostr-divine">What is Nostr? The Decentralized Protocol Powering Divine</a></li>
        <li><a href="/blog/divine-export-your-nostr-keys">How to Export Your Nostr Keys from Divine</a></li>
        <li><a href="/blog/divine-open-source-tech">Divine & Open Source Tech</a></li>
        <li><a href="/blog/managing-nostr-keys">How to Store and Manage Your Nostr Private Key</a></li>
        <li><a href="/blog/nostr101">Nostr 101: A Beginner's Guide</a></li>
        <li><a href="/blog/announcing-ditto-2">Announcing Ditto 2</a></li>
        <li><a href="/blog/ditto-updates-april-2026">Ditto Updates: April 2026</a></li>
      </ul>

      <p className="text-xl font-semibold text-center text-teal-600 mt-12">
        Welcome to Divine. Welcome to Nostr.
      </p>
    </article>
  );
}
