import type { BlogPostMeta } from '@/lib/blog/types';
import { Card, CardContent } from '../../ui/card';

export const meta: BlogPostMeta = {
  slug: 'how-to-self-host-armada',
  title: 'How to Self-host Armada: Open Source Discord Alternative',
  excerpt:
    'Run your own Armada with one command. Armada Stack bundles the client, relay, encrypted media, voice, push, HTTPS and Tor into a single binary.',
  coverImage: '/assets/blog/how-to-self-host-armada/cover.png',
  date: '2026-10-12',
  author: {
    name: 'Alex Gleason',
    picture: '/assets/avatars/alex.png',
  },
  ogImage: {
    url: '/assets/blog/how-to-self-host-armada/cover.png',
  },
  featured: false,
  tags: [
    'soapbox',
    'armada',
    'armada stack',
    'nostr',
    'self-hosting',
    'self-hosted discord',
    'nostr relay',
    'blossom',
    'livekit',
    'tor',
  ],
  keywords:
    'self-host armada, armada stack, armada self hosting, self-hosted discord alternative, run your own nostr relay, armada install, blossom server, livekit, tor onion chat, soapbox armada',
  howTo: {
    name: 'How to self-host Armada',
    description:
      'Install Armada Stack on a VPS to run your own Armada client, relay, media, voice and push server.',
    totalTime: 'PT10M',
    steps: [
      {
        name: 'Get a server',
        text: 'Spin up a fresh VPS running Debian, Ubuntu, or Fedora.',
      },
      {
        name: 'Point your domain at it',
        text: 'Create a DNS A record for your domain pointing to the server IP.',
      },
      {
        name: 'Run the install script',
        text: 'Run curl -fsSL https://armada.buzz/install.sh | sudo sh and enter your domain when asked.',
      },
      {
        name: 'Open your domain',
        text: 'Visit https://your-domain to use your own Armada.',
      },
    ],
  },
};

export default function HowToSelfHostArmada() {
  return (
    <article className="prose prose-lg max-w-none">
      <video
        src="https://blossom.ditto.pub/8aa428bfc230f9473d59ba4e77cf52d249b8d4a1601914f0aca7b83b5c57a241.mp4"
        autoPlay
        muted
        loop
        controls
        playsInline
        className="w-full rounded-lg"
      />

      <p className="lead">
        Armada Stack runs your own{' '}
        <a href="/blog/armada-open-source-encrypted-discord-alternative">
          Armada
        </a>{' '}
        from a single binary. One command installs it.
      </p>

      <h2>What Armada Stack includes</h2>

      <ul>
        <li>The Armada web client, served on your domain</li>
        <li>A Nostr relay that only accepts Armada traffic</li>
        <li>A Blossom server that only accepts encrypted uploads</li>
        <li>LiveKit for voice and video calls</li>
        <li>A Web Push notification gateway</li>
        <li>Automatic HTTPS certificates</li>
        <li>A Tor .onion address for the whole stack</li>
      </ul>

      <h2>How to install Armada Stack</h2>

      <ol>
        <li>Get a fresh VPS running Debian, Ubuntu, or Fedora.</li>
        <li>Point your domain's DNS at it.</li>
        <li>Run the install script and enter your domain:</li>
      </ol>

      <div className="not-prose my-8">
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
          <CardContent className="p-6">
            <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`curl -fsSL https://armada.buzz/install.sh | sudo sh`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>

      <p>
        Open <code>https://your-domain</code>. That's it.
      </p>

      <h2>Configure Armada Stack</h2>

      <p>
        Settings live in <code>/etc/armada/armada.toml</code>. Edit it to:
      </p>

      <ul>
        <li>
          Change relays and Blossom servers. Your own are used by default, plus
          public ones for redundancy. Use at least 3 of each.
        </li>
        <li>
          Turn off built-in HTTPS if you run your own proxy or host other
          domains on the same server.
        </li>
        <li>Turn off frontend auto-updates.</li>
      </ul>

      <p>
        The Tor key is stored in <code>/var/lib/armada</code>.
      </p>

      <h2>Update Armada Stack</h2>

      <p>
        The installer adds a package repository, so updates come with your
        system:
      </p>

      <div className="not-prose my-8">
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
          <CardContent className="p-6">
            <pre className="bg-gray-100 text-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`sudo apt upgrade   # Debian, Ubuntu
sudo dnf upgrade   # Fedora`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>

      <h2>Manual install</h2>

      <ul>
        <li>
          <a
            href="https://gitworkshop.dev/soapbox.pub/armada-stack/tree/main/INSTALL.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install guide
          </a>
        </li>
        <li>
          <a
            href="https://gitworkshop.dev/soapbox.pub/armada-stack/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            Binary releases
          </a>
        </li>
        <li>
          <a
            href="https://gitworkshop.dev/soapbox.pub/armada-stack"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source code
          </a>
        </li>
      </ul>

      <hr />

      <p className="text-sm text-gray-500">
        <em>
          Updated October 12, 2026 with new instructions for Armada Stack.
          Thanks to Derek Ross for the original guide.
        </em>
      </p>
    </article>
  );
}
