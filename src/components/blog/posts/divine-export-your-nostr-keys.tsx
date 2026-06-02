import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield, Smartphone, Key, ExternalLink } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blog/types';
import { FAQSection } from '@/components/blog/FAQSection';

export const meta: BlogPostMeta = {
  "slug": "divine-export-your-nostr-keys",
  "title": "How to Export Your Nostr Keys from Divine (Backup Guide)",
  "excerpt": "Step-by-step guide for Divine creators: export your Nostr private key (nsec), back it up safely, and use the same account on Ditto, Damus, and more.",
  "coverImage": "/assets/blog/managing-nostr-keys/understanding-nostr-keys.png",
  "date": "2026-04-29",
  "author": {
    "name": "Derek Ross",
    "picture": "/assets/avatars/derek.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/managing-nostr-keys/understanding-nostr-keys.png"
  },
  "featured": false,
  "tags": [
    "nostr",
    "divine",
    "divine app",
    "security",
    "tutorial",
    "keys",
    "nsec",
    "nostr keys",
    "backup nostr key",
    "export nsec",
    "private key",
    "password manager",
    "amber",
    "nsec.app",
    "how to"
  ],
  "keywords": "how to export nostr keys from divine, export nsec from divine, backup divine nostr key, divine nsec, how to back up nsec, nostr private key, how to save nsec, divine key management, export nostr private key, divine account backup, how to find my nsec, nostr key security, move divine account, switch nostr apps, nostr keys explained",
  "faq": [
    { "question": "Where do I find my private key in Divine?", "answer": "Open the Divine app, go to Settings, then tap Key Management under the Profile section. In the Nostr Keys screen, you'll see a Backup Your Key section with a Copy My Private Key (nsec) button." },
    { "question": "What is an nsec?", "answer": "An nsec is your Nostr private key — the credential that proves you own your Nostr account. It looks like a long string starting with nsec1. Treat it like a master password: anyone who has it can post as you." },
    { "question": "Can I use my Divine key on other Nostr apps?", "answer": "Yes. Your Divine nsec works on Ditto, Damus, Primal, Amethyst, noStrudel, and dozens of other Nostr apps. Your profile, followers, and posts travel with you." },
    { "question": "What happens if I lose my nsec?", "answer": "If you lose your private key and haven't backed it up, your account is permanently lost. There is no password reset, no customer support, no account recovery. Back up your nsec immediately after exporting it." },
    { "question": "How should I store my nsec securely?", "answer": "Save your nsec in an encrypted password manager like 1Password, Bitwarden, or Dashlane. Keep a second backup written on paper in a fireproof safe. Never store it in plain-text notes, cloud documents, screenshots, or messaging apps." },
    { "question": "Can I share my nsec with Divine support?", "answer": "No. No legitimate support team will ever ask for your nsec. Anyone with your nsec controls your account completely. Divine support never needs your private key to help you." },
    { "question": "What if my nsec is compromised?", "answer": "If someone else has your nsec, your account is compromised permanently — Nostr has no way to revoke or rotate keys. Create a new Nostr account with a new key, announce from the new account that your old account was compromised, and rebuild your following list." }
  ],
  "howTo": {
    "name": "How to export your Nostr keys from Divine and back them up",
    "description": "Step-by-step guide to exporting your Divine Nostr private key (nsec), storing it securely, and using it across other Nostr apps.",
    "totalTime": "PT5M",
    "steps": [
      { "name": "Open Divine Settings and navigate to Key Management", "text": "Launch the Divine app, open Settings, and under the Profile section tap Key Management." },
      { "name": "Copy your private key (nsec)", "text": "On the Nostr Keys screen, find the Backup Your Key section and tap Copy My Private Key (nsec). Your nsec is now on your clipboard." },
      { "name": "Paste into a password manager", "text": "Immediately paste your nsec into an encrypted password manager like 1Password, Bitwarden, or Dashlane. Do not store it in plain-text notes." },
      { "name": "Create a physical backup", "text": "Write your nsec on paper and store it somewhere secure — a fireproof safe or a safety deposit box. Keep a second copy in a separate physical location." },
      { "name": "Optional: move to a signer app", "text": "For multi-device access without re-pasting your key, move your nsec into a remote signer like nsec.app or a native signer like Amber on Android. Then log in to new Nostr apps via the signer instead of pasting your nsec." }
    ]
  }
};

export default function DivineExportYourNostrKeys() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-12">
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-red-900 mb-2">Your Private Key is Everything</h3>
              <p className="text-red-800 text-lg">
                Your Nostr private key (nsec) is your identity on Divine and across the entire Nostr network.
                If someone gets your private key, they can impersonate you. If you lose it, you lose access to your account forever.
                There is no password reset, no customer support, no account recovery.
              </p>
            </div>
          </div>
        </div>
      </div>

      <p>
        <strong><a href="https://divine.video" target="_blank" rel="noopener noreferrer">Divine</a>, the short-form video app often called the spiritual successor to Vine, launches today on iOS and Android.</strong> If you signed up for Divine, you now have a portable Nostr identity — one that works across <a href="/blog/what-is-nostr-divine">the entire Nostr ecosystem</a>. But only if you export and back up your key. This guide shows you how.
      </p>

      <p>
        If you came in the opposite way — using an existing Nostr key to bypass the invite-code requirement — see <a href="/blog/how-to-login-divine-without-invite-code">how to log in to Divine without an invite code</a>.
      </p>

      <h2>Why Export Your Keys?</h2>

      <p>
        When you created your Divine account, you were given a unique Nostr identity. This identity isn't locked to Divine—it's yours to use across the entire Nostr ecosystem. By exporting your keys, you can:
      </p>

      <ul>
        <li><strong>Back up your identity:</strong> Protect yourself from losing access if you switch phones or uninstall the app</li>
        <li><strong>Use other Nostr apps:</strong> Your Divine identity works with Ditto, Damus, Primal, Amethyst, and hundreds of other Nostr apps</li>
        <li><strong>Store your key securely:</strong> Move your key to a password manager, remote signer, or write it down for safekeeping</li>
        <li><strong>Use browser extensions:</strong> Sign in to web-based Nostr apps using signers like Alby or Soapbox Signer</li>
      </ul>

      <h2>Exporting from the Divine Mobile App</h2>

      <p>
        <strong><a href="https://divine.video" target="_blank" rel="noopener noreferrer">Divine</a></strong> for Android and iOS includes built-in key management. You can export and backup your private key directly from the app settings.
      </p>

      <div className="not-prose my-8">
        <Card className="border-teal-200 bg-gradient-to-br from-teal-50 to-teal-100/50">
          <CardHeader>
            <CardTitle className="text-teal-800 text-lg flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Divine Mobile App Key Export
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 text-sm space-y-3">
            <p><strong>How to Export Your Key:</strong></p>
            <ol className="space-y-2 text-xs ml-4 list-decimal">
              <li>Open Divine and go to <strong>Settings</strong></li>
              <li>Under the Profile section, tap <strong>Key Management</strong></li>
              <li>In the Nostr Keys screen, find the <strong>Backup Your Key</strong> section</li>
              <li>Tap <strong>Copy My Private Key (nsec)</strong> to copy your key to the clipboard</li>
              <li>Immediately paste it into a secure password manager or write it down</li>
            </ol>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <img
                src="/assets/blog/managing-nostr-keys/nostr-keys-divine-mobile-1.png"
                alt="Divine app Settings screen showing Key Management option to export your Nostr private key"
                className="rounded-lg border border-teal-200 shadow-sm"
              />
              <img
                src="/assets/blog/managing-nostr-keys/nostr-keys-divine-mobile-2.png"
                alt="Divine Nostr Keys screen with Backup Your Key section and Copy My Private Key (nsec) button"
                className="rounded-lg border border-teal-200 shadow-sm"
              />
            </div>
            <p className="text-xs text-teal-700 mt-2">
              <strong>Note:</strong> You can also import an existing key if you already have a Nostr account. This will replace your current key in Divine.
            </p>
            <Button size="sm" variant="outline" className="mt-2" asChild>
              <a href="https://divine.video" target="_blank" rel="noopener noreferrer">
                Get Divine
                <ExternalLink className="w-3 h-3 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <h2>Exporting from Divine Login</h2>

      <p>
        If you signed up using <strong><a href="https://login.divine.video" target="_blank" rel="noopener noreferrer">Divine Login</a></strong> with email and password, you can export your keys from the settings.
      </p>

      <div className="not-prose my-8">
        <Card className="border-teal-200 bg-gradient-to-br from-teal-50 to-teal-100/50">
          <CardHeader>
            <CardTitle className="text-teal-800 text-lg flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Divine Login Key Export
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 text-sm space-y-3">
            <p><strong>Key Features:</strong></p>
            <ul className="space-y-1 text-xs ml-4">
              <li>• <strong>No Extensions Needed:</strong> Sign in without browser extensions—Divine manages your key so you can focus on the apps</li>
              <li>• <strong>Use Any Nostr App:</strong> Connect to apps across the Nostr ecosystem through Divine. Your key stays safe with Divine Login</li>
              <li>• <strong>Manage Connected Apps:</strong> View, add, and remove Nostr apps from your dashboard</li>
              <li>• <strong>Get Bunker URLs:</strong> Generate NIP-46 bunker URLs to connect with compatible apps</li>
            </ul>

            <p className="mt-4"><strong>Exporting Your Private Key:</strong></p>
            <ol className="space-y-2 text-xs ml-4 list-decimal">
              <li>Log in to <a href="https://login.divine.video" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline">login.divine.video</a></li>
              <li>Navigate to <strong>Security Settings</strong></li>
              <li>Click <strong>Unlock Security Settings</strong> and enter your password</li>
              <li>Once verified, you can view and export your private key (nsec)</li>
              <li>Use <strong>Copy to Clipboard</strong> to copy your key securely</li>
            </ol>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <img
                src="/assets/blog/managing-nostr-keys/nostr-keys-divine-login-1.png"
                alt="Divine Login landing page at login.divine.video — email and password Nostr key management"
                className="rounded-lg border border-teal-200 shadow-sm"
              />
              <img
                src="/assets/blog/managing-nostr-keys/nostr-keys-divine-login-2.png"
                alt="Divine Login Security Settings page with Copy to Clipboard option to export your Nostr nsec"
                className="rounded-lg border border-teal-200 shadow-sm"
              />
            </div>

            <div className="mt-4 p-3 bg-orange-100 border border-orange-200 rounded-lg">
              <p className="text-xs text-orange-800">
                <strong>Security Note:</strong> Never share your private key. Anyone with this key controls your Nostr identity. Only export your key when you need to back it up or use it in another trusted app.
              </p>
            </div>

            <Button size="sm" variant="outline" className="mt-2" asChild>
              <a href="https://login.divine.video" target="_blank" rel="noopener noreferrer">
                Try Divine Login
                <ExternalLink className="w-3 h-3 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <h2>Where to Store Your Exported Key</h2>

      <p>
        Once you've exported your key, you need to store it securely. Here are the best options:
      </p>

      <div className="not-prose my-12">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Recommended Storage
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm space-y-2">
              <p>• <strong>Password Manager:</strong> Use 1Password, Bitwarden, or Dashlane for encrypted storage</p>
              <p>• <strong>Paper Backup:</strong> Write it down and store in a fireproof safe or safety deposit box</p>
              <p>• <strong>Multiple Locations:</strong> Keep copies in different physical locations</p>
              <p>• <strong>Browser Signer:</strong> Import into <a href="https://getalby.com" target="_blank" rel="noopener noreferrer">Alby</a> or <a href="https://chromewebstore.google.com/detail/soapboxpub-signer/nnodjkgakfpkckcnbacpcjbpmlmbihdd" target="_blank" rel="noopener noreferrer">Soapbox Signer</a> for web apps</p>
              <p>• <strong>Remote Signer:</strong> Use <a href="https://nsec.app" target="_blank" rel="noopener noreferrer">nsec.app</a>, <a href="https://github.com/greenart7c3/Amber" target="_blank" rel="noopener noreferrer">Amber</a>, hardware devices, or other bunker applications for multi-device access</p>
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
              <p>• Store in unencrypted text files or notes apps</p>
              <p>• Send through email, messaging apps, or social media</p>
              <p>• Store in cloud storage (Google Drive, Dropbox, etc.)</p>
              <p>• Take screenshots of your key</p>
              <p>• Share with anyone, even "support" claiming to help</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>Using Your Key with Other Nostr Apps</h2>

      <p>
        Once you have your private key (nsec), you can use it to sign in to any Nostr app. Your Divine followers, following list, and content will be accessible across the entire Nostr network.
      </p>

      <h3>Popular Apps to Try</h3>

      <ul>
        <li><strong><a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">Ditto</a></strong> - Community platform builder for decentralized communities</li>
        <li><strong><a href="https://primal.net" target="_blank" rel="noopener noreferrer">Primal</a></strong> - Social networking with discovery features and Bitcoin wallet</li>
        <li><strong><a href="https://damus.io" target="_blank" rel="noopener noreferrer">Damus</a></strong> - Clean iOS client for text and media</li>
        <li><strong><a href="https://amethyst.social" target="_blank" rel="noopener noreferrer">Amethyst</a></strong> - Feature-rich Android client</li>
        <li><strong><a href="https://nostrudel.ninja" target="_blank" rel="noopener noreferrer">noStrudel</a></strong> - Advanced web client for power users</li>
      </ul>

      <div className="not-prose my-8">
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Key className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-orange-900 mb-2">Pro Tip: Use a Signer App</h4>
                <p className="text-sm text-orange-800">
                  Instead of pasting your private key into every app, consider using a signer app like <a href="https://github.com/greenart7c3/Amber" target="_blank" rel="noopener noreferrer" className="underline">Amber</a> (Android), a browser extension like <a href="https://getalby.com" target="_blank" rel="noopener noreferrer" className="underline">Alby</a> or <a href="https://chromewebstore.google.com/detail/soapboxpub-signer/nnodjkgakfpkckcnbacpcjbpmlmbihdd" target="_blank" rel="noopener noreferrer" className="underline">Soapbox Signer</a>, or a remote signer like <a href="https://nsec.app" target="_blank" rel="noopener noreferrer" className="underline">nsec.app</a>. These apps hold your key securely and sign events for other apps without exposing your key directly.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>What If You Lose Your Key?</h2>

      <p>
        <strong>If you lose your private key and haven't backed it up, your account is permanently lost.</strong> There is no recovery option. This is why backing up your key immediately after exporting is critical.
      </p>

      <p>
        If your key is compromised (someone else has it), you'll need to:
      </p>

      <ol>
        <li>Create a new Nostr account with new keys</li>
        <li>Announce from your new account that your old account was compromised</li>
        <li>Rebuild your following list and notify your followers</li>
      </ol>

      <p>
        For more details on key security, compromised key recovery, and advanced key management strategies, see our comprehensive guide: <a href="/blog/managing-nostr-keys">How to Store and Manage Your Nostr Private Key</a>.
      </p>

      <div className="not-prose my-16">
        <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-3xl p-12 text-white text-center">
          <Key className="w-16 h-16 mx-auto mb-6 text-white opacity-90" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Take Control of Your Identity
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Your Divine key is your passport to the entire Nostr ecosystem. Export it, back it up, and explore what decentralized social media has to offer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <a href="https://divine.video" target="_blank" rel="noopener noreferrer">
                Download Divine
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
              <a href="/blog/managing-nostr-keys">
                Full Key Management Guide
              </a>
            </Button>
          </div>
        </div>
      </div>

      <hr className="my-12 border-gray-200" />

      <FAQSection
        items={[
          {
            question: "Where do I find my private key in Divine?",
            defaultOpen: true,
            answer: (
              <p>
                Open the Divine app, go to <strong>Settings</strong>, then tap <strong>Key Management</strong> under the Profile section. In the Nostr Keys screen, you'll see a <strong>Backup Your Key</strong> section with a <strong>Copy My Private Key (nsec)</strong> button.
              </p>
            ),
          },
          {
            question: "What is an nsec?",
            defaultOpen: true,
            answer: (
              <p>
                An nsec is your Nostr private key — the credential that proves you own your Nostr account. It looks like a long string starting with <code>nsec1…</code>. Treat it like a master password: anyone who has it can post as you.
              </p>
            ),
          },
          {
            question: "Can I use my Divine key on other Nostr apps?",
            answer: (
              <p>
                Yes. Your Divine nsec works on <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">Ditto</a>, <a href="https://damus.io" target="_blank" rel="noopener noreferrer">Damus</a>, <a href="https://primal.net" target="_blank" rel="noopener noreferrer">Primal</a>, <a href="https://amethyst.social" target="_blank" rel="noopener noreferrer">Amethyst</a>, <a href="https://nostrudel.ninja" target="_blank" rel="noopener noreferrer">noStrudel</a>, and dozens of other Nostr apps. Your profile, followers, and posts travel with you.
              </p>
            ),
          },
          {
            question: "What happens if I lose my nsec?",
            answer: (
              <p>
                If you lose your private key and haven't backed it up, your account is permanently lost. There is no password reset, no customer support, no account recovery. <strong>Back up your nsec immediately after exporting it.</strong>
              </p>
            ),
          },
          {
            question: "How should I store my nsec securely?",
            answer: (
              <p>
                Save your nsec in an encrypted password manager like 1Password, Bitwarden, or Dashlane. Keep a second backup written on paper in a fireproof safe. Never store it in plain-text notes, cloud documents, screenshots, or messaging apps.
              </p>
            ),
          },
          {
            question: "Can I share my nsec with Divine support?",
            answer: (
              <p>
                <strong>No.</strong> No legitimate support team will ever ask for your nsec. Anyone with your nsec controls your account completely. Divine support never needs your private key to help you.
              </p>
            ),
          },
          {
            question: "What if my nsec is compromised?",
            answer: (
              <p>
                If someone else has your nsec, your account is compromised permanently — Nostr has no way to revoke or rotate keys. Create a new Nostr account with a new key, announce from the new account that your old account was compromised, and rebuild your following list.
              </p>
            ),
          },
        ]}
      />

      <h2>Additional Resources</h2>

      <ul>
        <li><a href="/blog/how-to-login-divine-without-invite-code">How to Log In to Divine Without an Invite Code</a></li>
        <li><a href="/blog/what-is-nostr-divine">What is Nostr? The Protocol Powering Divine</a></li>
        <li><a href="/blog/managing-nostr-keys">How to Store and Manage Your Nostr Private Key</a></li>
        <li><a href="/blog/nostr101">Nostr 101: A Beginner's Guide</a></li>
        <li><a href="https://divine.video" target="_blank" rel="noopener noreferrer">Divine</a> - Mobile app for Android & iOS</li>
        <li><a href="https://login.divine.video" target="_blank" rel="noopener noreferrer">Divine Login</a> - Email and password key management</li>
      </ul>

      <p className="text-xl font-semibold text-center text-teal-600 mt-12">
        Your keys, your identity, your creative freedom.
      </p>
    </article>
  );
}
