import type { BlogPostMeta } from '@/lib/blog/types';
import { Card, CardContent } from '../../ui/card';

export const meta: BlogPostMeta = {
  slug: 'how-to-self-host-armada',
  title: 'How to Self-host Armada: Open Source Discord Alternative',
  excerpt:
    'Armada communities already run without a host. Here is how to own the rest: the app you load, the relay your messages travel over, and the server your calls go through.',
  coverImage: '/assets/blog/how-to-self-host-armada/cover.jpg',
  date: '2026-07-30',
  author: {
    name: 'Derek Ross',
    picture: '/assets/avatars/derek.jpg',
  },
  ogImage: {
    url: '/assets/blog/how-to-self-host-armada/cover.jpg',
  },
  featured: false,
  tags: ['soapbox', 'devrel', 'armada', 'nostr', 'self-hosting'],
  keywords:
    'self-host armada, armada self hosting, run your own nostr relay, ditto-relay, armada-av, livekit nostr, nostr voice chat, encrypted community chat, ngit, soapbox armada',
};

export default function HowToSelfHostArmada() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        I have been running a homelab since the early 2000s. Twenty years of
        hosting my own infrastructure at home: media servers, document servers,
        backups, whatever else I did not want living on someone else's box. Not
        because any of it was the convenient option. Because when someone else
        runs the server, someone else decides what it does and how long it stays
        up.
      </p>

      <p>
        Chat has the same shape and higher stakes, because chat is where a
        community actually lives. If the app, the relay, and the voice server all
        belong to one company, then that company is your community's landlord,
        whatever the license says. You can be a very well treated tenant right up
        until you are not.
      </p>

      <p>
        <a href="/blog/armada-open-source-encrypted-discord-alternative">
          Armada
        </a>{' '}
        is built so you can evict the landlord. Here is how to do it,
        piece by piece, and how to decide which pieces are worth your time.
      </p>

      <h2>What you actually depend on today</h2>

      <p>
        Start with an honest inventory, because "self-host everything" is a
        slogan and the useful version is knowing which piece does what.
      </p>

      <p>
        An Armada community is{' '}
        <a href="/blog/building-an-armada-voyage-to-encrypted-communities">
          already serverless
        </a>
        . There is no server that owns your membership list, your channels, or
        your history. Every message is encrypted before it leaves your device
        and published as an ordinary{' '}
        <a href="/blog/nostr101">Nostr event</a>. The machines that carry it are
        storing sealed envelopes. They
        cannot read them, and neither can we.
      </p>

      <p>
        So self-hosting Armada is not about hiding your messages. That is already
        done. It is about availability and independence. Three pieces still sit
        on infrastructure Soapbox operates:
      </p>

      <ol>
        <li>
          <strong>The web app</strong> at armada.buzz. A static site. If we go
          down, for whatever reason, the people loading the web app from us are
          stuck.
        </li>
        <li>
          <strong>The relays.</strong> These are the machines that store and pass
          along messages. The app ships with ours as the defaults. Your
          community's own traffic goes to whatever relays you add, but out of the
          box, the defaults are ours.
        </li>
        <li>
          <strong>The voice server.</strong> Starting a call goes through a
          server that hands out the ticket to join a room. It learns nothing
          about your community by design, but it is our uptime, not yours.
        </li>
      </ol>

      <p>
        You can take back all three, today. The third takes the most work to run,
        and I will come back to it.
      </p>

      <p>
        None of the three addresses are baked into the app. It reads them from
        configuration at runtime, which is what makes everything below possible,
        and why the official mobile app keeps working against a stack we have
        never seen.
      </p>

      <h3>Pick your pieces. You do not need all of them.</h3>

      <p>
        Before the how-to, the part nobody selling you infrastructure would lead
        with: you probably should not run all of this, and Armada is built on
        Nostr specifically so you do not have to.
      </p>

      <p>
        An <a href="/blog/armada-buzz-communities">Armada community</a> travels
        as ordinary Nostr events, the kind called
        gift wraps (kind 1059 if you ever need to ask an operator). Not a
        proprietary protocol, not a special server, not something only our relay
        understands. Any Nostr relay will carry your community, and there are
        hundreds of them run by people who have no connection to Soapbox and no
        idea your community exists.{' '}
        <a href="https://nostr.watch" target="_blank" rel="noopener noreferrer">
          nostr.watch
        </a>{' '}
        is the directory. Pick a few, add them in Settings, done. Worth checking
        that the ones you pick accept those events and hang on to them rather
        than expiring them quickly, since that varies by operator.
      </p>

      <p>So the realistic version of this post is a menu:</p>

      <ul>
        <li>
          <strong>Host the frontend, use existing relays.</strong> Your domain,
          your build, your defaults, someone else's storage. No OpenSearch, no
          unit files, no backups. This is the one most communities should pick,
          and it takes an afternoon.
        </li>
        <li>
          <strong>Host the frontend and a relay.</strong> The whole road is
          yours. That is section 3, and it is a real database with real
          operational weight.
        </li>
        <li>
          <strong>Add voice.</strong> One more box, and the one piece that
          genuinely has to be a server. It is the shortest install here and the
          only one you cannot skip if you want calls on your own infrastructure.
        </li>
        <li>
          <strong>Host nothing.</strong> Use armada.buzz and add whichever relays
          you like. Your community still has no owner, and your messages are
          still unreadable to everyone carrying them.
        </li>
      </ul>

      <p>
        Spreading a community across several independent relays is also just
        better availability than one server you maintain alone. One relay going
        down does not take your community with it. The reason to run your own is
        that you want it, or you have a requirement nobody else's relay meets,
        not that the default is weak.
      </p>

      <h2>One thing to install first</h2>

      <p>
        Armada's own code does not live on GitHub. It lives on Nostr, the same
        network the messages travel over, so its addresses start with{' '}
        <code>nostr://</code> instead of <code>https://</code>. Git does not
        understand those on its own. Install{' '}
        <a href="https://ngit.dev" target="_blank" rel="noopener noreferrer">
          ngit
        </a>{' '}
        once and it does, and from then on <code>git clone</code> behaves exactly
        the way you expect. If{' '}
        <a href="/blog/what-is-ngit">git over Nostr</a> is new to you, we wrote
        up the longer version.
      </p>

      <p>
        That covers two of the three things below: the client, and the voice
        broker. The relay is a separate project, hosted on GitLab, and clones the
        ordinary way.
      </p>

      <h2>Hosting the frontend</h2>

      <p>
        The web client is a static site. The repo ships a <code>Dockerfile</code>{' '}
        that builds it and serves it with nginx on port 80. Put your own TLS in
        front of it, the same way you would in front of anything else at home.
      </p>

      <div className="not-prose my-8">
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
          <CardContent className="p-6">
            <h4 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-200">
              Get the code
            </h4>
            <pre className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`git clone nostr://soapbox.pub/relay.ngit.dev/armada
cd armada`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>

      <p>
        Settings are baked in at build time, as Docker build args. Four of them
        matter:
      </p>

      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">
                Build arg
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">
                What it does
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                <code>VITE_APP_NAME</code>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                What the app calls itself.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                <code>VITE_APP_RELAYS</code>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                The relays a fresh user starts with. They can change these in
                Settings.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                <code>VITE_SEARCH_RELAYS</code>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                Where search queries go.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                <code>VITE_PLATFORM_RELAYS</code>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                Relays pinned to this build. Empty by default. This is where you
                put your own relay.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The rest, media upload servers and similar, have sane defaults and are
        listed in the repo's README if you want them.
      </p>

      <p>A build looks like this:</p>

      <div className="not-prose my-8">
        <Card className="border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
          <CardContent className="p-6">
            <h4 className="text-xl font-bold mb-3 text-blue-800 dark:text-blue-200">
              Build the app
            </h4>
            <pre className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`docker build \\
  --build-arg VITE_APP_NAME="Example Chat" \\
  --build-arg VITE_APP_RELAYS="wss://relay.example.com" \\
  --build-arg VITE_SEARCH_RELAYS="wss://relay.example.com" \\
  --build-arg VITE_PLATFORM_RELAYS="wss://relay.example.com" \\
  -t example-chat .`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>

      <p>
        <code>VITE_PLATFORM_RELAYS</code> deserves a note. It is empty in the
        shipped APK and desktop builds on purpose: a fresh client arrives with no
        baked-in servers and the user adds their own. For a self-hosted
        deployment serving one community, pinning your own relay here is exactly
        what it is for. Do not ever pin <code>ws://localhost</code>. It means
        nothing on a phone.
      </p>

      <p>
        Use the nginx config that ships in the repo rather than writing your own.
        It gets two things right that are unpleasant to discover later: files
        under <code>/assets/</code> return a plain 404 when they are missing
        instead of quietly serving the app's HTML in their place, which is what
        keeps a browser tab left open across a deploy from ending up on a broken
        screen, and its security headers are tuned for a client that holds{' '}
        <a href="/blog/managing-nostr-keys">your private key</a> in the browser.
        If you do rewrite it, carry both over.
      </p>

      <p>
        One more: microphones only work on HTTPS. <code>localhost</code> is fine
        while you are testing. Anything else needs a real certificate.
      </p>

      <h2>Running your own relay with ditto-relay</h2>

      <p>
        There is no group server to install. A relay for Armada is just a Nostr
        relay, and the one we run is ditto-relay: AGPL-3.0 like the client,
        written for Bun, storing events in OpenSearch. It knows nothing about how
        your community is organised, because none of that reaches it in a form it
        could read.
      </p>

      <p>
        Set expectations before you start. ditto-relay ships no Dockerfile and no
        compose file, so you are writing the service definition yourself, and you
        are installing and running OpenSearch 2.x alongside it. If that is a
        dealbreaker, this is the section to skip: go back to{' '}
        <a href="https://nostr.watch" target="_blank" rel="noopener noreferrer">
          nostr.watch
        </a>{' '}
        and use relays that already exist. Your community does not care which
        ones.
      </p>

      <p>
        Install Bun and an OpenSearch node, then clone the relay, run{' '}
        <code>bun install</code>, and copy <code>.env.example</code> to{' '}
        <code>.env</code>:
      </p>

      <div className="not-prose my-8">
        <Card className="border-2 border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardContent className="p-6">
            <h4 className="text-xl font-bold mb-3 text-green-800 dark:text-green-200">
              Get the relay
            </h4>
            <pre className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`git clone https://gitlab.com/soapbox-pub/ditto-relay
cd ditto-relay`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>

      <p>The settings that matter:</p>

      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">
                Key
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                <code>RELAY_URL</code>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                Required. The public <code>wss://</code> address of your relay.
                It will not start without one.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                <code>NOSTR_NSEC</code>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                Required. A key for the relay itself. Must be the{' '}
                <code>nsec...</code> form, not hex.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                <code>OPENSEARCH_NODE</code>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                Where OpenSearch is. Defaults to{' '}
                <code>http://localhost:9200</code>.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                <code>PORT</code>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                Defaults to <code>13131</code>.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Two of those catch people out. A hex private key in{' '}
        <code>NOSTR_NSEC</code> looks like it should work and does not. And the
        port is <code>13131</code>, not the <code>8000</code> you will see in one
        example in the README; trust <code>.env.example</code>.
      </p>

      <p>
        Leave <code>AUTH_KINDS</code> alone. Its default means a client has to
        identify itself before it can even ask for community messages, which
        keeps a passerby from hoovering up sealed envelopes they cannot open
        anyway.
      </p>

      <p>
        Then <code>bun start</code>. Wrap it in a systemd unit, put nginx or
        Caddy in front for TLS, and set <code>IP_HEADER</code> to whatever header
        your proxy adds, so rate limiting counts real visitors rather than
        counting your proxy over and over.
      </p>

      <h2>Running your own voice</h2>

      <p>
        Voice is the one part that needs a real server running somewhere, because
        audio cannot travel the way messages do. It is two programs. The first is
        LiveKit, the ordinary open-source media server, run stock with no fork
        and no patches.
      </p>

      <p>
        The second is a small token broker sitting in front of it, and it exists
        because LiveKit has no idea what an Armada community is. Before you can
        join a call, something has to check that you actually hold the key to
        that channel and then hand LiveKit a ticket saying so. Your client proves
        it holds the key, the broker checks that signature, and it issues a
        short-lived ticket good for one room. It never learns which community the
        room belongs to or who you are, and the audio is encrypted between the
        people on the call, so LiveKit forwards sound it cannot listen to.
      </p>

      <p>
        That blindness has a cost worth knowing before you run one. Because the
        broker cannot tell your rooms from anyone else's, anyone who finds yours
        can use it. It is an open service by design, and bounding that is
        deliberately crude, because every precise tool would require knowing who
        is calling. Three things do the work: a rate limit per caller address, a
        cap on how many people can be in one room, and how long a ticket stays
        valid. The room cap ships unset, which is the right default while you are
        serving people you know and worth changing the day you are not.
      </p>

      <p>
        The setup is one box and about ten minutes. <code>armada-av</code> is the
        broker we run, and it ships a deployment that brings up all three pieces:
        the broker, one LiveKit node, and Caddy, which fetches your TLS
        certificate for you.
      </p>

      <div className="not-prose my-8">
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
          <CardContent className="p-6">
            <h4 className="text-xl font-bold mb-3 text-purple-800 dark:text-purple-200">
              Bring up voice
            </h4>
            <pre className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`git clone nostr://chad@chadwick.site/relay.ngit.dev/armada-av
cd armada-av/deploy/single
cp .env.example .env
docker compose up -d`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>

      <p>
        Three settings in that <code>.env</code> file. Everything else has a
        working default:
      </p>

      <div className="not-prose my-8 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">
                Setting
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">
                What it is
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                <code>AV_DOMAIN</code>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                The domain this box answers on, like <code>av.example.com</code>.
                No <code>https://</code>.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                <code>LIVEKIT_API_KEY</code>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                Generated, see below.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                <code>LIVEKIT_API_SECRET</code>
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                Same.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Generate that pair with:</p>

      <div className="not-prose my-8">
        <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
          <CardContent className="p-6">
            <h4 className="text-xl font-bold mb-3 text-purple-800 dark:text-purple-200">
              Generate the LiveKit keys
            </h4>
            <pre className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`docker run --rm livekit/livekit-server generate-keys`}</code>
            </pre>
          </CardContent>
        </Card>
      </div>

      <p>
        Before you start it, point the domain at the box and open four ports: 80
        and 443 for the web side, then UDP 7882 and TCP 7881 for the audio
        itself. Nothing else needs to be reachable. Then open Armada, go to
        Settings and then Voice, and give it <code>https://av.example.com</code>.
        That is the whole install.
      </p>

      <p>Three things that bite:</p>

      <ul>
        <li>
          <code>AV_DOMAIN</code> has to be the name people actually reach,
          exactly. Calls are authorised against it, so a wrong value rejects
          every attempt to join, and it will not look like a domain problem when
          it happens. A value with a path on the end is refused at startup rather
          than quietly trimmed.
        </li>
        <li>
          Open TCP 7881, not just the UDP port. It is the fallback for people on
          networks that block UDP, and leaving it shut is the usual reason one
          person keeps dropping out while everyone else is fine.
        </li>
        <li>
          If you skip the shipped setup and wire your own proxy, the LiveKit
          address you hand clients is a bare <code>wss://av.example.com</code>,
          never with <code>/rtc</code> on the end. The client appends that
          itself.
        </li>
      </ul>

      <h2>The payoff</h2>

      <p>
        Here is what you have when you are done: a web app on your domain,
        carrying your defaults, backed by a relay you administer, carrying sealed
        traffic that neither we nor you can read from the outside, and your calls
        going through your own box. Nobody at Soapbox is in that path, and nobody
        at Soapbox can take it away from you. The answer to the question in the
        title is yes, all the way down, with no asterisk on the calls.
      </p>

      <p>
        Or you stop after the frontend, point it at relays from{' '}
        <a href="https://nostr.watch" target="_blank" rel="noopener noreferrer">
          nostr.watch
        </a>
        , and get most of that for an afternoon of work and no database to
        babysit. That is the honest recommendation for most communities. The menu
        is the feature.
      </p>

      <p>
        And the official Armada app on Android still works with all of it. Not a
        fork, not a special build, the app you install from the normal place.
        Nothing about a backend is baked into it. Your users add your relay in
        Settings and they are on your stack.
      </p>

      <p>Two caveats on that, and neither is small.</p>

      <div className="not-prose my-8 rounded-lg border border-amber-200 dark:border-amber-800 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 p-4">
        <p className="text-base font-semibold text-amber-900 dark:text-amber-200 mb-1">
          Deep links do not follow you to your domain.
        </p>
        <p className="text-base text-amber-800 dark:text-amber-300">
          An invite link on <code>chat.example.com</code> opens in a browser
          rather than jumping straight into the app, because the installed app
          only claims links on <code>armada.buzz</code>. That is not a setting
          you can flip. Making it work means editing the app's manifest to your
          own domain, rebuilding it, signing it with your own key, and
          publishing a file at your domain that vouches for that key. At which
          point you are shipping and distributing your own build of Armada, with
          everything that implies: your users install it outside the normal
          channel, and updating it is now your job. The stock app still talks to
          your relay perfectly well. It just
          costs your members one extra tap on an invite. This is Android; on iOS
          the app does not claim links at all yet.
        </p>
      </div>

      <div className="not-prose my-8 rounded-lg border border-amber-200 dark:border-amber-800 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 p-4">
        <p className="text-base font-semibold text-amber-900 dark:text-amber-200 mb-1">
          And running infrastructure is running infrastructure, if you choose to.
        </p>
        <p className="text-base text-amber-800 dark:text-amber-300">
          This one is opt-in, and it is the caveat that goes away entirely if
          you use relays that already exist. OpenSearch does not arrive with
          ditto-relay: you install, secure, tune and back up a real search
          cluster, on top of writing the relay's service definition by hand.
          Voice adds a box you keep patched and a certificate that has to keep
          renewing. Armada
          is serverless by default precisely so that most communities never need
          any of it. Self-host because you want the independence, not because
          the default is lacking.
        </p>
      </div>

      <p>
        Armada is AGPL-3.0, and the client is the same <code>nostr://</code>{' '}
        address you cloned at the top. Read it, run it, break it, tell us what
        broke.
      </p>
    </article>
  );
}
