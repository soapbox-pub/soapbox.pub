import React from 'react';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import { ExternalLink, Shield, Users, Key, Lock, Settings, Download, AlertTriangle } from 'lucide-react';

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
  "slug": "announcing-soapbox-signer",
  "title": "Announcing Soapbox Signer: A NIP-07 Browser Extension for Nostr",
  "excerpt": "Introducing Soapbox Signer, our new browser extension for securely managing your Nostr identity with multi-profile support, granular permissions, and NIP-04/NIP-44 encryption.",
  "coverImage": "/assets/blog/announcing-soapbox-signer/soapbox-nostr-signer-extension-chrome-firefox.png",
  "date": "2025-12-07",
  "author": {
    "name": "Derek Ross",
    "picture": "/assets/avatars/derek.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-soapbox-signer/soapbox-nostr-signer-extension-chrome-firefox.png"
  },
  "tags": ["nostr", "announcement", "security", "signer", "extension"]
};

export default function AnnouncingSoapboxSigner() {
  return (
    <article className="prose prose-lg max-w-none">
      <p>
        <strong>Your Nostr private key is your identity.</strong> It's what proves you are who you say you are across the entire Nostr network. But pasting your private key into every website you visit? That's a recipe for disaster. One compromised site, one phishing attempt, one moment of carelessness—and your identity is gone forever.
      </p>

      <p>
        Today, we're excited to announce <strong>Soapbox Signer</strong>—a browser extension that keeps your Nostr keys secure while letting you use any Nostr application seamlessly. Available now for Chrome and Firefox.
      </p>

      <div className="not-prose my-8 flex flex-wrap gap-4 justify-center">
        <Button asChild size="lg">
          <a href="https://chromewebstore.google.com/detail/soapboxpub-signer/nnodjkgakfpkckcnbacpcjbpmlmbihdd" target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-5 w-5" />
            Install for Chrome
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="https://addons.mozilla.org/en-US/firefox/addon/soapbox-pub-signer/" target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-5 w-5" />
            Install for Firefox
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      <h2>Why Use a Browser Extension for Nostr?</h2>

      <p>
        When you use Nostr, every action you take—posting, following, reacting, sending encrypted messages—requires cryptographic signatures from your private key. Without a signer extension, you'd need to paste your private key directly into each website. This creates several serious problems:
      </p>

      <ul>
        <li><strong>Security Risk:</strong> Any website with your private key can impersonate you, access your encrypted messages, and take over your entire Nostr identity</li>
        <li><strong>No Revocation:</strong> Unlike passwords, you can't change your Nostr private key. If it's compromised, your identity is permanently compromised</li>
        <li><strong>Trust Issues:</strong> You have to trust every single website not to steal or leak your key</li>
      </ul>

      <p>
        <strong>NIP-07</strong> solves this by defining a standard way for websites to request signatures from a browser extension. The website never sees your private key—it only receives the signed events it needs. You stay in control.
      </p>

      <div className="not-prose my-8">
        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/10">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">How NIP-07 Keeps You Safe</h4>
                <p className="text-green-800 dark:text-green-200 text-sm">
                  With NIP-07, websites request signatures through your browser extension. Your private key never leaves the extension—websites only receive the cryptographic proof they need. It's like having a secure vault that signs documents for you without ever revealing your signature stamp.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Key Features of Soapbox Signer</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
        <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Users className="h-5 w-5 text-blue-500" />
              <h4 className="font-semibold">Multi-Identity Support</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Manage multiple Nostr identities from one extension. Switch between personal, professional, or project accounts with a single click.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-5 w-5 text-purple-500" />
              <h4 className="font-semibold">Granular Permissions</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Control exactly what each website can do. Approve specific event kinds, set per-domain permissions, and revoke access anytime.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="h-5 w-5 text-green-500" />
              <h4 className="font-semibold">NIP-04 & NIP-44 Encryption</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Full support for encrypted direct messages using both legacy NIP-04 and modern NIP-44 encryption protocols.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Key className="h-5 w-5 text-orange-500" />
              <h4 className="font-semibold">Import & Export</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Easily backup your identities or migrate between devices. Export as JSON or CSV, with clear warnings about key security.
            </p>
          </CardContent>
        </Card>
      </div>

      <h2>Getting Started with Soapbox Signer</h2>

      <p>
        Setting up Soapbox Signer takes just a few minutes. Here's how to get started:
      </p>

      <h3>Step 1: Install the Extension</h3>

      <p>
        Install Soapbox Signer from the <a href="https://chromewebstore.google.com/detail/soapboxpub-signer/nnodjkgakfpkckcnbacpcjbpmlmbihdd" target="_blank" rel="noopener noreferrer">Chrome Web Store</a> or <a href="https://addons.mozilla.org/en-US/firefox/addon/soapbox-pub-signer/" target="_blank" rel="noopener noreferrer">Firefox Add-ons</a>. After installation, click the extension icon to open the settings.
      </p>

      <h3>Step 2: Add Your Identity</h3>

      <p>
        You can either create a brand new Nostr identity or import an existing one using your private key (nsec).
      </p>

      <div className="not-prose my-8 grid md:grid-cols-2 gap-6">
        <div>
          <img
            src="/assets/blog/announcing-soapbox-signer/add-identity-basic.png"
            alt="Add New Identity dialog with Create New and Import Existing options"
            className="w-full rounded-lg shadow-lg border"
          />
          <p className="text-sm text-muted-foreground text-center mt-2">Create a new identity or import an existing one</p>
        </div>
        <div>
          <img
            src="/assets/blog/announcing-soapbox-signer/add-identity-advanced.png"
            alt="Advanced identity settings showing NIP-05, profile image, about, and website fields"
            className="w-full rounded-lg shadow-lg border"
          />
          <p className="text-sm text-muted-foreground text-center mt-2">Advanced settings let you configure your full profile</p>
        </div>
      </div>

      <p>
        The advanced settings allow you to configure your complete Nostr profile including:
      </p>

      <ul>
        <li><strong>Display Name:</strong> Your human-readable name shown across Nostr apps</li>
        <li><strong>Username:</strong> A short identifier for your account</li>
        <li><strong>NIP-05 Address:</strong> Your verified identity (like user@domain.com)</li>
        <li><strong>Profile Image URL:</strong> Link to your avatar image</li>
        <li><strong>About:</strong> A short bio describing yourself</li>
        <li><strong>Website:</strong> Your personal website or link</li>
      </ul>

      <h3>Step 3: Manage Multiple Identities</h3>

      <p>
        One of Soapbox Signer's most powerful features is multi-identity support. You can add as many Nostr identities as you need and switch between them instantly.
      </p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/announcing-soapbox-signer/multi-identity-settings.png"
          alt="Settings page showing multiple Nostr identities with profile cards"
          className="w-full rounded-lg shadow-lg border"
        />
        <p className="text-sm text-muted-foreground text-center mt-2">Manage multiple identities from one extension</p>
      </div>

      <p>
        Each identity card shows your profile picture and name. The currently active identity is marked with a green "Active" badge. Simply click "Set as active" on any identity to switch, and all connected websites will use that identity for signing.
      </p>

      <h2>Understanding Permission Requests</h2>

      <p>
        When a website needs to perform an action on Nostr, Soapbox Signer shows you exactly what it's requesting. You maintain full control over what gets signed.
      </p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/announcing-soapbox-signer/permission-request.png"
          alt="Permission request dialog showing event signing options with Deny, Approve Once, Trust This Action, and Trust This Site buttons"
          className="w-full max-w-md mx-auto rounded-lg shadow-lg border"
        />
        <p className="text-sm text-muted-foreground text-center mt-2">Clear permission requests show exactly what each site wants to do</p>
      </div>

      <p>
        Each permission request shows:
      </p>

      <ul>
        <li><strong>The requesting website</strong> (e.g., shakespeare.diy)</li>
        <li><strong>The action type</strong> (e.g., "Sign an event")</li>
        <li><strong>The event kind</strong> (e.g., KIND 27235 for HTTP Auth)</li>
        <li><strong>A description</strong> of what the permission allows</li>
        <li><strong>An "Info for nerds" section</strong> with technical details</li>
      </ul>

      <p>
        You have four response options:
      </p>

      <div className="not-prose my-8">
        <div className="grid sm:grid-cols-2 gap-4">
          <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
            <CardContent className="p-4">
              <h4 className="font-semibold text-red-800 dark:text-red-200 mb-1">Deny</h4>
              <p className="text-sm text-red-700 dark:text-red-300">Reject this request. The website won't be able to perform this action.</p>
            </CardContent>
          </Card>
          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
            <CardContent className="p-4">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-1">Approve Once</h4>
              <p className="text-sm text-orange-700 dark:text-orange-300">Allow this specific request only. You'll be asked again next time.</p>
            </CardContent>
          </Card>
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
            <CardContent className="p-4">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">Trust This Action</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">Always allow this specific event kind from this website.</p>
            </CardContent>
          </Card>
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/20">
            <CardContent className="p-4">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-1">Trust This Site</h4>
              <p className="text-sm text-green-700 dark:text-green-300">Grant full access to this website for all event types.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="not-prose my-8">
        <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Security Notice</h4>
                <p className="text-sm text-orange-800 dark:text-orange-200">
                  Only approve requests from websites you trust. If you're unsure, use "Approve Once" to test the functionality before granting permanent access. You can always revoke permissions later from the settings.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Managing Connected Sites</h2>

      <p>
        The Connected Sites & Permissions screen gives you a complete overview of which websites have access to your Nostr identities and what permissions they have.
      </p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/announcing-soapbox-signer/connected-sites-permissions.png"
          alt="Connected Sites and Permissions page showing website access management"
          className="w-full rounded-lg shadow-lg border"
        />
        <p className="text-sm text-muted-foreground text-center mt-2">View and manage all website permissions in one place</p>
      </div>

      <p>
        For each connected site, you can see:
      </p>

      <ul>
        <li><strong>The domain name</strong> (e.g., app.flotilla.social, ditto.pub)</li>
        <li><strong>Access level</strong> (Full Access or specific permissions)</li>
        <li><strong>Which identity</strong> the site is using</li>
        <li><strong>When access was granted</strong> and last used</li>
      </ul>

      <p>
        You can revoke access for individual sites or use the "Revoke All" button to clear all permissions at once. Revoking access means the site will need to request permission again the next time it needs to sign an event.
      </p>

      <h2>Backup and Migration</h2>

      <p>
        Your Nostr identities are valuable—make sure to back them up! Soapbox Signer provides easy export and import functionality.
      </p>

      <div className="not-prose my-8">
        <img
          src="/assets/blog/announcing-soapbox-signer/export-import-identities.png"
          alt="Export and Import Identities section with JSON and CSV export options"
          className="w-full rounded-lg shadow-lg border"
        />
        <p className="text-sm text-muted-foreground text-center mt-2">Export your identities for backup or migration</p>
      </div>

      <h3>Export Options</h3>

      <ul>
        <li><strong>Export as JSON:</strong> A structured format that preserves all identity data, perfect for importing into another instance of Soapbox Signer</li>
        <li><strong>Export as CSV:</strong> A spreadsheet-compatible format for easy viewing and management</li>
      </ul>

      <div className="not-prose my-8">
        <Card className="border-red-200 bg-red-50 dark:bg-red-950/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">Important Security Warning</h4>
                <p className="text-sm text-red-800 dark:text-red-200">
                  Exported files contain your private keys (nsec). Keep them secure and never share them! Store backups in an encrypted location like a password manager or encrypted drive.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3>Import Options</h3>

      <p>
        To restore your identities on a new device or browser, simply choose the JSON or CSV file you exported previously and click "Choose File to Import."
      </p>

      <h3>Behavior Settings</h3>

      <p>
        The "Reload tabs on identity change" option automatically refreshes all tabs using your Nostr identity when you switch to a different one. This ensures websites always use the correct key without manual page refreshes.
      </p>

      <h2>Why Soapbox Signer?</h2>

      <p>
        There are several NIP-07 signers available, so why did we build Soapbox Signer? We wanted to create a signer that embodies our principles:
      </p>

      <div className="not-prose my-8">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <Shield className="h-12 w-12 mx-auto mb-4 text-blue-500" />
            <h4 className="font-semibold mb-2">Security First</h4>
            <p className="text-sm text-muted-foreground">
              Clear permission prompts, granular controls, and transparent access management keep you in control.
            </p>
          </Card>
          <Card className="text-center p-6">
            <Users className="h-12 w-12 mx-auto mb-4 text-purple-500" />
            <h4 className="font-semibold mb-2">Multi-Identity Native</h4>
            <p className="text-sm text-muted-foreground">
              Built from the ground up to support multiple identities—not an afterthought.
            </p>
          </Card>
          <Card className="text-center p-6">
            <Settings className="h-12 w-12 mx-auto mb-4 text-green-500" />
            <h4 className="font-semibold mb-2">Open Source</h4>
            <p className="text-sm text-muted-foreground">
              MIT licensed and open source. Audit the code, contribute improvements, or fork it for your needs.
            </p>
          </Card>
        </div>
      </div>

      <h2>Get Started Today</h2>

      <p>
        Soapbox Signer is free, open source, and available now. Install it, add your identity, and start using Nostr applications the secure way.
      </p>

      <div className="not-prose my-8 flex flex-wrap gap-4 justify-center">
        <Button asChild size="lg">
          <a href="https://chromewebstore.google.com/detail/soapboxpub-signer/nnodjkgakfpkckcnbacpcjbpmlmbihdd" target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-5 w-5" />
            Install for Chrome
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="https://addons.mozilla.org/en-US/firefox/addon/soapbox-pub-signer/" target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-5 w-5" />
            Install for Firefox
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="https://gitlab.com/soapbox-pub/soapbox-signer" target="_blank" rel="noopener noreferrer">
            View Source Code
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      <h2>Learn More</h2>

      <ul>
        <li><a href="/blog/managing-nostr-keys">How to Store and Manage Your Nostr Private Key</a> - Comprehensive guide to key security</li>
        <li><a href="/blog/nostr101">Nostr 101: A Beginner's Guide</a> - Understanding the Nostr protocol</li>
        <li><a href="https://nostrhub.io/07" target="_blank" rel="noopener noreferrer">NIP-07 Specification</a> - Technical details of the signer protocol</li>
        <li><a href="https://gitlab.com/soapbox-pub/soapbox-signer" target="_blank" rel="noopener noreferrer">Soapbox Signer Repository</a> - Source code and issue tracker</li>
      </ul>

      <p className="text-xl font-semibold text-center text-primary mt-12">
        Your keys, your identity, secured by Soapbox Signer.
      </p>
    </article>
  );
}
