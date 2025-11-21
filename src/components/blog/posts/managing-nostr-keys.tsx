import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield, Key, Lock, Smartphone, Chrome, ExternalLink, Copy } from 'lucide-react';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: { name?: string; picture?: string; };
  ogImage: { url?: string; };
  tags?: string[];
}

export const meta: BlogPostMeta = {
  "slug": "managing-nostr-keys",
  "title": "How to Store and Manage Your Nostr Private Key (nsec)",
  "excerpt": "A comprehensive guide to protecting your Nostr identity, understanding key management solutions, and what to do if your private key is lost or compromised",
  "coverImage": "/assets/blog/nostr-101.png",
  "date": "2025-11-20",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/nostr-101.png"
  },
  "tags": ["nostr", "security", "tutorial", "keys"]
};

export default function ManagingNostrKeys() {
  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-12">
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-red-900 mb-2">Your Private Key is Everything</h3>
              <p className="text-red-800 text-lg">
                Your Nostr private key (nsec) is your identity, your account, and your security all in one. 
                If someone gets your private key, they can impersonate you. If you lose it, you lose access to your account forever. 
                There is no password reset, no customer support, no account recovery.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Understanding Your Nostr Keys</h2>

      <p>
        When you create a Nostr account, you receive two keys:
      </p>

      <ul>
        <li><strong>Public Key (npub...):</strong> Your username and identity. Share this freely—it's how people find and follow you.</li>
        <li><strong>Private Key (nsec...):</strong> Your password and proof of ownership. Never share this with anyone, ever.</li>
      </ul>

      <p>
        Unlike traditional social media where companies store your password on their servers, Nostr is decentralized. There's no central authority to reset your password or recover your account. Your private key is the only thing that proves you are you.
      </p>

      <h2>Key Management Solutions</h2>

      <p>
        The Nostr ecosystem has developed several solutions for managing private keys securely, each with different trade-offs between convenience and security.
      </p>

      <h3>1. Browser Extensions (Recommended for Desktop)</h3>

      <p>
        Browser extensions implement <strong>NIP-07</strong>, a standard that allows websites to request signatures from your key without ever seeing the private key itself. The extension holds your key securely and only signs events when you approve.
      </p>

      <div className="not-prose my-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100/50">
            <CardHeader>
              <CardTitle className="text-orange-800 text-lg flex items-center gap-2">
                <Chrome className="w-5 h-5" />
                Alby
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm space-y-2">
              <p><strong>Best For:</strong> Users who also want Bitcoin Lightning wallet features</p>
              <p><strong>Platforms:</strong> Chrome, Firefox, Safari</p>
              <p><strong>Features:</strong> Nostr signing + Lightning payments, password protection, backup options</p>
              <Button size="sm" variant="outline" className="mt-2" asChild>
                <a href="https://getalby.com" target="_blank" rel="noopener noreferrer">
                  Get Alby
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50">
            <CardHeader>
              <CardTitle className="text-purple-800 text-lg flex items-center gap-2">
                <Chrome className="w-5 h-5" />
                nos2x
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm space-y-2">
              <p><strong>Best For:</strong> Users who want a lightweight, Nostr-only solution</p>
              <p><strong>Platforms:</strong> Chrome, Firefox</p>
              <p><strong>Features:</strong> Simple Nostr signing, minimal permissions, open source</p>
              <Button size="sm" variant="outline" className="mt-2" asChild>
                <a href="https://github.com/fiatjaf/nos2x" target="_blank" rel="noopener noreferrer">
                  Get nos2x
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50">
            <CardHeader>
              <CardTitle className="text-blue-800 text-lg flex items-center gap-2">
                <Chrome className="w-5 h-5" />
                Flamingo
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm space-y-2">
              <p><strong>Best For:</strong> Users who want advanced security features</p>
              <p><strong>Platforms:</strong> Chrome, Brave</p>
              <p><strong>Features:</strong> Hardware wallet support, advanced permissions, multi-account</p>
              <Button size="sm" variant="outline" className="mt-2" asChild>
                <a href="https://www.getflamingo.org" target="_blank" rel="noopener noreferrer">
                  Get Flamingo
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100/50">
            <CardHeader>
              <CardTitle className="text-green-800 text-lg flex items-center gap-2">
                <Chrome className="w-5 h-5" />
                Nostore
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm space-y-2">
              <p><strong>Best For:</strong> Privacy-focused users wanting fine-grained control</p>
              <p><strong>Platforms:</strong> Chrome, Firefox</p>
              <p><strong>Features:</strong> Per-site permissions, detailed event review, privacy tools</p>
              <Button size="sm" variant="outline" className="mt-2" asChild>
                <a href="https://apps.apple.com/us/app/nostore/id1666553677" target="_blank" rel="noopener noreferrer">
                  Get Nostore
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <h3>2. Mobile Signers (Recommended for Mobile)</h3>

      <p>
        Android devices can use dedicated signer apps that implement <strong>NIP-55</strong>, allowing Nostr apps to request signatures through Android's intent system without accessing your private key.
      </p>

      <div className="not-prose my-8">
        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100/50">
          <CardHeader>
            <CardTitle className="text-green-800 text-lg flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Amber Signer (Android)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 text-sm space-y-3">
            <p><strong>Best For:</strong> Android users who want app-level key isolation</p>
            <p><strong>Features:</strong></p>
            <ul className="space-y-1 text-xs ml-4">
              <li>• One signer app manages keys for all Nostr apps</li>
              <li>• Each app gets individual permissions</li>
              <li>• Biometric authentication support</li>
              <li>• Offline signing capability</li>
            </ul>
            <Button size="sm" variant="outline" className="mt-2" asChild>
              <a href="https://github.com/greenart7c3/Amber" target="_blank" rel="noopener noreferrer">
                Get Amber
                <ExternalLink className="w-3 h-3 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <h3>3. Remote Signers (Advanced)</h3>

      <p>
        <strong>NIP-46 (Nostr Connect)</strong> enables remote signing where your private key lives on a separate device or service, and apps request signatures over Nostr relays. This provides the highest security for advanced users.
      </p>

      <div className="not-prose my-8">
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50">
          <CardHeader>
            <CardTitle className="text-purple-800 text-lg flex items-center gap-2">
              <Shield className="w-5 h-5" />
              nsec.app
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 text-sm space-y-3">
            <p><strong>Best For:</strong> Users who want to use Nostr on devices without their private key</p>
            <p><strong>How It Works:</strong></p>
            <ul className="space-y-1 text-xs ml-4">
              <li>• Your private key stays on a trusted device (phone, hardware wallet)</li>
              <li>• Other devices request signatures via encrypted Nostr messages</li>
              <li>• You approve or deny each signing request</li>
              <li>• Can be used across desktop and mobile</li>
            </ul>
            <Button size="sm" variant="outline" className="mt-2" asChild>
              <a href="https://nsec.app" target="_blank" rel="noopener noreferrer">
                Try nsec.app
                <ExternalLink className="w-3 h-3 ml-2" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <h3>4. Password-Protected Keys (Not Recommended)</h3>

      <p>
        <strong>NIP-49</strong> defines a method to encrypt your private key with a password, creating an <code>ncryptsec</code> string. While this provides basic protection, it's not recommended as a primary storage method because:
      </p>

      <ul>
        <li>Password strength varies widely between users</li>
        <li>Encrypted keys can be brute-forced if the password is weak</li>
        <li>You still need to decrypt the key somewhere, which exposes it</li>
        <li>No protection against keyloggers or clipboard monitoring</li>
      </ul>

      <p>
        <strong>Use cases for NIP-49:</strong> Exporting keys for backup or transferring between devices, not daily use.
      </p>

      <h2>Best Practices for Key Storage</h2>

      <div className="not-prose my-12">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                ✅ Do This
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm space-y-2">
              <p>• Use browser extensions (Alby, nos2x, Flamingo) for desktop</p>
              <p>• Use mobile signers (Amber) for Android</p>
              <p>• Use remote signers (nsec.app) for multi-device access</p>
              <p>• Write down your private key on paper and store it securely offline</p>
              <p>• Create multiple backups stored in different physical locations</p>
              <p>• Use password managers to store encrypted backups (NIP-49)</p>
              <p>• Test your backup by restoring it on a different device</p>
              <p>• Use mnemonic seed phrases (NIP-06) if your signer supports them</p>
            </CardContent>
          </Card>

          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                ❌ Never Do This
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 text-sm space-y-2">
              <p>• Store your nsec in unencrypted text files or notes apps</p>
              <p>• Copy-paste your nsec into untrusted websites or apps</p>
              <p>• Send your nsec through email, messaging apps, or social media</p>
              <p>• Store your nsec in cloud storage (Google Drive, Dropbox, etc.)</p>
              <p>• Take screenshots of your nsec</p>
              <p>• Share your nsec with anyone, even "support" claiming to help</p>
              <p>• Store your nsec on devices you don't fully control</p>
              <p>• Use the same nsec across many different apps without a signer</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>Recommended Storage Methods by Use Case</h2>

      <h3>For Casual Users (Desktop)</h3>
      
      <p>
        <strong>Use a browser extension like Alby or nos2x.</strong> These extensions store your key encrypted on your computer and handle all signing operations. Websites never see your private key—they only receive signed events.
      </p>

      <p>
        <strong>Backup strategy:</strong> Write your private key on paper and store it in a safe place (fireproof safe, safety deposit box). Also export an encrypted backup (NIP-49) to a password manager like 1Password or Bitwarden.
      </p>

      <h3>For Mobile Users (Android)</h3>

      <p>
        <strong>Use Amber signer.</strong> Install Amber once and use it with all your Nostr apps. Amber keeps your key isolated and protected by Android's security features, and you can enable biometric authentication.
      </p>

      <p>
        <strong>Backup strategy:</strong> Write down your private key on paper and store it securely. Consider using multiple backup copies in different locations.
      </p>

      <h3>For Mobile Users (iOS)</h3>

      <p>
        <strong>Use nsec.app with remote signing.</strong> Keep your primary key on a desktop device with a browser extension, then use nsec.app on iOS to sign remotely. This keeps your key off your phone entirely.
      </p>

      <p>
        <strong>Alternative:</strong> Some iOS Nostr apps have built-in secure storage using iOS Keychain, but this means trusting the app developer.
      </p>

      <h3>For High-Security Users</h3>

      <p>
        <strong>Use dedicated hardware or air-gapped devices.</strong> Advanced users can:
      </p>

      <ul>
        <li>Keep their private key on a hardware security device that never connects to the internet</li>
        <li>Use an old phone or computer solely as a signer device</li>
        <li>Implement NIP-46 remote signing with keys stored on isolated hardware</li>
        <li>Use multiple keys for different purposes (daily use vs. long-term identity)</li>
      </ul>

      <h3>For Multi-Device Users</h3>

      <p>
        <strong>Use NIP-46 remote signing (nsec.app).</strong> This allows you to:
      </p>

      <ul>
        <li>Keep your private key on one secure device (your phone with Amber, or desktop with Alby)</li>
        <li>Use Nostr on multiple other devices (work computer, tablet, etc.) without exposing your key</li>
        <li>Approve or deny signing requests from your primary device</li>
        <li>Revoke access to remote devices instantly</li>
      </ul>

      <h2>Understanding Mnemonic Seed Phrases (NIP-06)</h2>

      <p>
        <strong>NIP-06</strong> allows deriving Nostr keys from a 12 or 24-word mnemonic seed phrase—the same system used by Bitcoin wallets. This provides several benefits:
      </p>

      <ul>
        <li><strong>Easier to Back Up:</strong> Writing down 12 words is less error-prone than copying a long nsec string</li>
        <li><strong>Multiple Keys:</strong> Generate infinite keys from one seed phrase</li>
        <li><strong>Standard Format:</strong> Compatible with Bitcoin wallet backup systems</li>
        <li><strong>Metal Backups:</strong> Can use steel plate backup solutions designed for Bitcoin</li>
      </ul>

      <p>
        Not all Nostr clients and signers support NIP-06 yet, but it's becoming more common. Check if your preferred signer offers this option.
      </p>

      <div className="not-prose my-8">
        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="w-5 h-5 text-blue-600" />
              Example Mnemonic Seed Phrase
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <div className="bg-gray-50 rounded-lg p-4 font-mono text-xs">
              leader monkey parrot ring guide accident before fence cannon height naive bean
            </div>
            <p className="text-gray-600 text-xs mt-3">
              This phrase can generate your Nostr private key using the BIP39/BIP32 derivation path: m/44'/1237'/0'/0/0
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>What to Do If Your Key Is Compromised</h2>

      <p>
        If someone gains access to your private key, you need to act quickly. Here's what to do:
      </p>

      <h3>Immediate Actions</h3>

      <ol>
        <li>
          <strong>Create a New Account:</strong> Generate a completely new key pair immediately. Your old key is permanently compromised and cannot be "fixed."
        </li>
        <li>
          <strong>Announce the Compromise:</strong> Post from your new account explaining that your old account was compromised and link to your new public key. Also post from the old account (if you still have access) directing followers to your new account.
        </li>
        <li>
          <strong>Update Your Profiles:</strong> Change your NIP-05 identifier, Lightning address, and any other services linked to your old account to point to your new key.
        </li>
        <li>
          <strong>Notify Trusted Contacts:</strong> Tell people you regularly interact with about your new account so they don't fall for impersonation.
        </li>
      </ol>

      <h3>What You'll Lose</h3>

      <p>
        Unfortunately, when you create a new account, you lose some things:
      </p>

      <ul>
        <li><strong>Your Follow List:</strong> You'll need to rebuild who you follow (though you can export and import this before switching)</li>
        <li><strong>Your Followers:</strong> People following your old account won't automatically follow your new one</li>
        <li><strong>Your Post History:</strong> Old posts are tied to your old key and can't be migrated</li>
        <li><strong>Your Reputation:</strong> Any trust, badges, or reputation associated with your old key</li>
      </ul>

      <div className="not-prose my-8">
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-orange-900 mb-2">Important: No Central Authority</h4>
                <p className="text-sm text-orange-800">
                  Unlike traditional social media, there's no company that can "restore" your account or "ban" the impersonator. 
                  Once someone has your private key, they have complete control over that identity. 
                  The only solution is to migrate to a new key and rebuild your presence.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>What to Do If You Lose Your Key</h2>

      <p>
        If you lose access to your private key without it being compromised, the situation is different but still serious:
      </p>

      <h3>Prevention Is Critical</h3>

      <p>
        <strong>This is why backups are essential.</strong> Before you lose your key:
      </p>

      <ul>
        <li>Write your nsec on paper and store it in multiple secure locations</li>
        <li>Create an encrypted backup (NIP-49) in your password manager</li>
        <li>If using NIP-06, securely store your mnemonic seed phrase</li>
        <li>Test your backup by restoring it on a different device</li>
      </ul>

      <h3>If You've Lost Your Key</h3>

      <p>
        Without a backup, your account is permanently lost. You'll need to:
      </p>

      <ol>
        <li><strong>Create a New Account:</strong> Generate a new key pair and start fresh</li>
        <li><strong>Inform Your Network:</strong> Post from your new account explaining what happened</li>
        <li><strong>Rebuild Slowly:</strong> Reconnect with your network and rebuild your follow list</li>
        <li><strong>Learn from the Experience:</strong> Implement proper backup procedures this time</li>
      </ol>

      <p>
        <strong>The old account cannot be accessed or deleted.</strong> It will remain on Nostr relays permanently, and no one (including you) can post from it, change it, or remove it.
      </p>

      <h2>Key Rotation and Migration</h2>

      <p>
        Even without a compromise, you might want to rotate to a new key for security reasons:
      </p>

      <ul>
        <li><strong>Suspected Exposure:</strong> You think your key might have been exposed but aren't sure</li>
        <li><strong>Upgraded Security:</strong> Moving from a less secure to more secure storage method</li>
        <li><strong>Separation of Concerns:</strong> Creating separate keys for different purposes</li>
      </ul>

      <h3>Migration Checklist</h3>

      <div className="not-prose my-8">
        <Card>
          <CardContent className="p-6">
            <ol className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold">1</span>
                <span>Generate new key pair with your chosen signer/method</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold">2</span>
                <span>Set up profile metadata (name, picture, bio) on new account</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold">3</span>
                <span>Export your follow list from old account and import to new account</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold">4</span>
                <span>Update NIP-05 identifier, Lightning address, and other services</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold">5</span>
                <span>Post from old account announcing migration with new npub</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold">6</span>
                <span>Post from new account confirming the migration</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold">7</span>
                <span>Inform close contacts and communities directly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-semibold">8</span>
                <span>Securely delete or destroy your old private key</span>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>

      <h2>Why Nostr Key Management Is Different</h2>

      <p>
        Traditional social media relies on centralized account systems where companies control your identity. They can reset passwords, recover accounts, and ban impersonators. This convenience comes at the cost of censorship and deplatforming.
      </p>

      <p>
        <strong>Nostr flips this model:</strong>
      </p>

      <ul>
        <li><strong>You Control Your Identity:</strong> Your cryptographic key is your identity—no company intermediary</li>
        <li><strong>No Password Resets:</strong> There's no central authority to recover your account</li>
        <li><strong>Permanent Responsibility:</strong> You are solely responsible for your key's security</li>
        <li><strong>True Ownership:</strong> No one can take your identity away—but you can lose it yourself</li>
      </ul>

      <p>
        This trade-off is fundamental to Nostr's design. The same properties that make Nostr censorship-resistant also mean you must take security seriously.
      </p>

      <h2>Multi-Key Strategies</h2>

      <p>
        Advanced users often use multiple keys for different purposes:
      </p>

      <div className="not-prose my-8">
        <div className="space-y-4">
          <Card className="border-purple-200 bg-purple-50">
            <CardContent className="p-6">
              <h4 className="font-semibold text-purple-900 mb-2">Primary Identity Key</h4>
              <p className="text-sm text-purple-800">
                Your main account with established reputation, followers, and history. Store this key with maximum security—paper backup in safe, hardware signer, or cold storage. Use sparingly.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <h4 className="font-semibold text-blue-900 mb-2">Daily Use Key</h4>
              <p className="text-sm text-blue-800">
                A secondary account for regular posting and interaction. If compromised, you can migrate to a new daily key while your primary identity remains secure. Store in browser extension or mobile signer.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-6">
              <h4 className="font-semibold text-green-900 mb-2">Experimental/Testing Key</h4>
              <p className="text-sm text-green-800">
                Disposable keys for testing new apps, trying experimental features, or participating in communities you're not sure about. No significant value, easy to replace.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <h2>Creating Secure Backups</h2>

      <h3>Paper Backup (Most Important)</h3>

      <p>
        The most reliable backup method is writing your private key on paper:
      </p>

      <ol>
        <li>Use archival-quality paper and permanent ink</li>
        <li>Write clearly in large, readable letters</li>
        <li>Include your public key (npub) for reference</li>
        <li>Store in a waterproof, fireproof container</li>
        <li>Create multiple copies in different secure locations</li>
        <li>Consider laminating or using archival sleeves</li>
      </ol>

      <p>
        For maximum durability, some users engrave their keys on metal plates designed for Bitcoin seed phrase backup (Billfodl, Cryptosteel, etc.). This protects against fire and water damage.
      </p>

      <h3>Encrypted Digital Backup (Secondary)</h3>

      <p>
        For convenience, you can create an encrypted backup using NIP-49:
      </p>

      <ol>
        <li>Use a strong, unique password (20+ characters)</li>
        <li>Encrypt your nsec to create an ncryptsec string</li>
        <li>Store the ncryptsec in a password manager (1Password, Bitwarden, etc.)</li>
        <li><strong>Also store the password</strong>—encrypted backups are useless if you forget the password</li>
      </ol>

      <p>
        <strong>Warning:</strong> Digital backups are vulnerable to hacking, cloud breaches, and keyloggers. Use strong passwords and store them only in reputable password managers. Paper backup should always be your primary method.
      </p>

      <h2>Testing Your Backup</h2>

      <p>
        A backup that hasn't been tested is not a backup. Before you rely on your backup:
      </p>

      <ol>
        <li>Use a different device or browser profile</li>
        <li>Attempt to restore your account using only your backup</li>
        <li>Verify you can access your account and post successfully</li>
        <li>If using mnemonic phrases, test the derivation process</li>
      </ol>

      <p>
        Many people discover their backups are incorrect or incomplete only when they actually need them. Test early and test often.
      </p>

      <h2>Common Mistakes to Avoid</h2>

      <div className="not-prose my-8">
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Real-World Security Failures
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-red-800 space-y-3">
            <div>
              <p className="font-semibold mb-1">❌ "I'll just remember it"</p>
              <p className="text-xs">A 64-character hex string or 63-character bech32 string is impossible to remember reliably. Always write it down.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">❌ "I stored it in a text file on my desktop"</p>
              <p className="text-xs">Unencrypted files on your computer are vulnerable to malware, theft, and accidental deletion.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">❌ "I sent it to myself on Telegram/Discord"</p>
              <p className="text-xs">Messaging apps store messages on servers. If those servers are compromised, your key is exposed.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">❌ "I saved a screenshot to my phone"</p>
              <p className="text-xs">Screenshots often sync to cloud services (Google Photos, iCloud) exposing your key to potential breaches.</p>
            </div>
            <div>
              <p className="font-semibold mb-1">❌ "I only made one backup"</p>
              <p className="text-xs">Single points of failure are dangerous. What if your house burns down? What if you lose that one piece of paper?</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Future of Nostr Key Management</h2>

      <p>
        The Nostr ecosystem continues to develop better key management solutions:
      </p>

      <ul>
        <li><strong>Hardware Wallets:</strong> Ledger and other hardware wallet manufacturers are adding Nostr signing support</li>
        <li><strong>Social Recovery:</strong> Experimental systems where trusted contacts can help recover access (though this requires pre-setup)</li>
        <li><strong>Improved Remote Signing:</strong> Better UX for NIP-46 remote signing across devices</li>
        <li><strong>Biometric Integration:</strong> Secure enclave support on mobile devices for key storage</li>
      </ul>

      <p>
        As the ecosystem matures, key management will become easier while maintaining security. But the fundamental responsibility remains: <strong>you must protect your private key</strong>.
      </p>

      <h2>Quick Reference Guide</h2>

      <div className="not-prose my-12">
        <Card>
          <CardHeader>
            <CardTitle>Storage Solutions Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-3">Solution</th>
                    <th className="text-left py-2 px-3">Platform</th>
                    <th className="text-left py-2 px-3">Security</th>
                    <th className="text-left py-2 px-3">Ease of Use</th>
                  </tr>
                </thead>
                <tbody className="text-xs">
                  <tr className="border-b">
                    <td className="py-2 px-3 font-semibold">Alby Extension</td>
                    <td className="py-2 px-3">Desktop Browsers</td>
                    <td className="py-2 px-3">⭐⭐⭐⭐</td>
                    <td className="py-2 px-3">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-3 font-semibold">nos2x Extension</td>
                    <td className="py-2 px-3">Desktop Browsers</td>
                    <td className="py-2 px-3">⭐⭐⭐⭐</td>
                    <td className="py-2 px-3">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-3 font-semibold">Amber Signer</td>
                    <td className="py-2 px-3">Android</td>
                    <td className="py-2 px-3">⭐⭐⭐⭐⭐</td>
                    <td className="py-2 px-3">⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-3 font-semibold">nsec.app Remote</td>
                    <td className="py-2 px-3">Multi-Device</td>
                    <td className="py-2 px-3">⭐⭐⭐⭐⭐</td>
                    <td className="py-2 px-3">⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-3 font-semibold">Paper Backup</td>
                    <td className="py-2 px-3">Offline</td>
                    <td className="py-2 px-3">⭐⭐⭐⭐⭐</td>
                    <td className="py-2 px-3">⭐⭐</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-3 font-semibold">Encrypted (NIP-49)</td>
                    <td className="py-2 px-3">Password Manager</td>
                    <td className="py-2 px-3">⭐⭐⭐</td>
                    <td className="py-2 px-3">⭐⭐⭐⭐</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Recommendations by User Type</h2>

      <h3>New Users: Start Simple, Secure</h3>
      <p>
        Install Alby or nos2x browser extension, write your nsec on paper, store the paper somewhere safe. This gives you good security with minimal complexity.
      </p>

      <h3>Active Users: Add Redundancy</h3>
      <p>
        Browser extension + paper backup in two locations + encrypted backup (NIP-49) in password manager. Consider mobile signer if you use Android.
      </p>

      <h3>Power Users: Maximum Security</h3>
      <p>
        Remote signing (NIP-46) with keys on dedicated hardware + multiple paper backups in different locations + mnemonic seed phrase backup (NIP-06) + potential multi-key strategy.
      </p>

      <h2>The Bottom Line</h2>

      <p>
        Nostr gives you freedom and control over your digital identity, but with that freedom comes responsibility. Your private key is irreplaceable and unrecoverable if lost. Your account is permanently compromised if your key leaks.
      </p>

      <p>
        <strong>Take key management seriously from day one.</strong> Use proper storage solutions, create multiple backups, and test your recovery process. The few minutes you spend setting up proper key management could save you from losing years of connections, content, and reputation.
      </p>

      <div className="not-prose my-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-white opacity-90" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Protect Your Nostr Identity
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Choose a secure storage solution, create backups, and take control of your digital identity.
          </p>

          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-white mb-2">Desktop</h4>
                <p className="text-sm text-blue-100">
                  Alby, nos2x, or Flamingo browser extension
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-white mb-2">Android</h4>
                <p className="text-sm text-blue-100">
                  Amber signer for app-level isolation
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-white mb-2">Backup</h4>
                <p className="text-sm text-blue-100">
                  Paper + fireproof safe + offsite copy
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <h2>Additional Resources</h2>

      <ul>
        <li><a href="/blog/nostr101">Nostr 101: A Beginner's Guide</a> - Understanding Nostr basics</li>
        <li><a href="https://github.com/aljazceru/awesome-nostr#nip-07-browser-extensions" target="_blank" rel="noopener noreferrer">Awesome Nostr: Browser Extensions</a> - Complete list of NIP-07 signers</li>
        <li><a href="https://nsec.app" target="_blank" rel="noopener noreferrer">nsec.app</a> - Remote signing solution (NIP-46)</li>
        <li><a href="https://github.com/greenart7c3/Amber" target="_blank" rel="noopener noreferrer">Amber Signer</a> - Android signing app (NIP-55)</li>
        <li><a href="https://getalby.com" target="_blank" rel="noopener noreferrer">Alby</a> - Browser extension with Lightning wallet</li>
      </ul>

      <p className="text-xl font-semibold text-center text-blue-600 mt-12">
        Your keys, your identity, your responsibility. 🔑
      </p>
    </article>
  );
}
