import type { BlogPostMeta } from '@/lib/blog/types';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

export const meta: BlogPostMeta = {
  slug: 'ditto-import-export-take-your-history-with-you',
  title: 'Leave anytime. Take everything: how Ditto\u2019s Import & Export works',
  excerpt:
    "Your entire post history in one file you own, and one click to push it back to any relay. A walkthrough of Ditto's Import & Export, why it exists, and how to use it.",
  coverImage: '/assets/blog/ditto-import-export-take-your-history-with-you/cover.jpg',
  date: '2026-09-08',
  author: {
    name: 'Derek Ross',
    picture: '/assets/avatars/derek.jpg',
  },
  ogImage: {
    url: '/assets/blog/ditto-import-export-take-your-history-with-you/cover.jpg',
  },
  tags: [
    'Soapbox',
    'DevRel',
    'Ditto',
    'Nostr',
    'Data Ownership',
    'Building in the Open',
  ],
  keywords:
    'ditto import export, nostr export data, nostr backup, nostr data ownership, jsonl nostr export, export nostr post history, nostr archive file, ditto 2.36, nostr data portability, move nostr relays, nostr import events, big tech data export, leave big tech',
  featured: false,
  hidden: false,
};

export default function DittoImportExportTakeYourHistoryWithYou() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        On Big Tech platforms, exporting your data is designed to be unpleasant.
        You click the button, wait days for an email, and receive a zip file of
        JSON you can&rsquo;t do much with. The friction is intentional. A
        platform that&rsquo;s easy to leave has to keep earning you. Lock-in is
        a feature, for them.
      </p>

      <p>
        <a href="https://ditto.pub" target="_blank" rel="noopener noreferrer">
          Ditto
        </a>{' '}
        is a Nostr client, and Nostr inverts this model. There is no server
        holding your history. Your account is a keypair, and your posts live on
        relays, a distributed set of servers you choose. Any of them can be
        replaced.
      </p>

      <p>
        That raises a question nobody on a Big Tech platform has to ask:{' '}
        <em>where does my history actually live, and how do I take it with me?</em>
      </p>

      <p>
        Ditto answers this with an Import &amp; Export system in Settings. It
        gathers everything you&rsquo;ve ever posted into a local database you
        can save as a file, and pushes a saved archive back out to the network
        whenever you want. It&rsquo;s one of my favorite things we&rsquo;ve
        shipped: it turns data ownership into a file on your disk.
      </p>

      <h2>Exporting: grab your entire history</h2>

      <figure>
        <img
          alt="Ditto's Settings page showing the Import & Export screen, with buttons to fetch events from relays and download a .jsonl archive"
          src="/assets/blog/ditto-import-export-take-your-history-with-you/settings-import-export.png"
        />
      </figure>

      <p>
        Open <strong>Settings &rarr; Import &amp; Export</strong>. The page
        explains what it does:{' '}
        <em>
          &ldquo;Nostr has no single server holding your history. It is spread
          across the relays you publish to. These tools gather it into one
          local database you can save, and push a saved archive back out to the
          network.&rdquo;
        </em>
      </p>

      <ol>
        <li>
          Click <strong>Fetch from relays</strong>. Ditto reads every event
          you&rsquo;ve published from each of your relays into the
          device&rsquo;s local database.
        </li>
        <li>
          Watch the per-relay progress. Each relay gets its own row with name,
          icon, a live <code>processed / total</code> counter, and the number
          of events received.
        </li>
        <li>
          When it finishes you&rsquo;ll see{' '}
          <em>&ldquo;N events received from relays.&rdquo;</em> Click{' '}
          <strong>Download .jsonl</strong>.
        </li>
      </ol>

      <figure>
        <img
          alt="Export progress in Ditto with one row per relay, each showing its icon, a processed/total counter, and the number of events received so far"
          src="/assets/blog/ditto-import-export-take-your-history-with-you/relay-progress.png"
        />
      </figure>

      <p>
        The file downloads straight from the browser. On mobile builds it lands
        in the app&rsquo;s Documents folder, visible in iOS Files.
      </p>

      <h3>What&rsquo;s in the file</h3>

      <p>
        A <code>.jsonl</code> file, one event per line, in canonical Nostr
        format: <code>id</code>, <code>pubkey</code>, <code>created_at</code>,{' '}
        <code>kind</code>, <code>tags</code>, <code>content</code>,{' '}
        <code>sig</code>. The filename tells you what it is:{' '}
        <code>nostr-export-npub1xxxxxxxxxx-2026-08-23.jsonl</code>.
      </p>

      <p>
        It&rsquo;s everything you&rsquo;ve signed: notes, reactions, follows,
        relay lists, long-form posts, deletions. All event kinds, no exclusions.
        If a relay still has it and you signed it, it comes down.
      </p>

      <p>
        Two caveats. Media files aren&rsquo;t bundled, so you get the events
        and their links, not the blobs. And export completeness is &ldquo;what
        your relays still hold.&rdquo; If every relay pruned a post, that post
        is gone from the network. That&rsquo;s the main reason to keep this
        file. It&rsquo;s also a good reason to run your own relay, so your
        history lives on infrastructure you control.
      </p>

      <h3>The Full network scan toggle</h3>

      <p>
        By default, each relay is only asked for events newer than your last
        sync. Flip on <strong>Full network scan</strong> when you&rsquo;ve
        added a relay that might hold older posts, and Ditto re-reads your
        whole history from every relay. Use it when you want a complete
        re-scan instead of a quick backup.
      </p>

      <h2>Importing: put your history back, or move it somewhere new</h2>

      <p>The import side is what makes this useful beyond backups.</p>

      <h3>From a file</h3>

      <p>
        Pick any <code>.jsonl</code> archive: the one you exported, a backup
        from another machine, even a hand-edited file. Ditto checks every line.
        Events with valid signatures publish as-is. Unsigned lines become
        templates you sign on the way through. The file card shows the counts
        before anything happens:{' '}
        <strong>N ready / N to sign / N warnings</strong>.
      </p>

      <figure>
        <img
          alt="Ditto's import file card showing the selected .jsonl archive with counts of events ready to import, events needing a signature, and warnings"
          src="/assets/blog/ditto-import-export-take-your-history-with-you/import-from-file.png"
        />
      </figure>

      <p>
        Signing happens one event at a time, NIP-07/NIP-46-friendly, so your
        browser extension or remote signer approves each event. No blanket key
        handover. <strong>Import &amp; publish</strong> does the rest, with the
        same per-relay progress you get on export.
      </p>

      <h3>From this device: fill in a new relay</h3>

      <p>
        Say you add a fresh relay, or one of yours dies and comes back empty:
      </p>

      <ol>
        <li>
          Add the relay in your relay settings, marked as{' '}
          <strong>write</strong>.
        </li>
        <li>
          Come back to Import &amp; Export and hit{' '}
          <strong>Publish N events</strong> under <em>From this device</em>.
        </li>
      </ol>

      <p>
        Ditto offers your entire local archive to that relay. No file
        involved. Your history now lives on a server you added ten minutes
        ago.
      </p>

      <h2>Resume: surviving bad connections</h2>

      <p>
        Exports and imports over flaky networks don&rsquo;t start over. Ditto
        remembers, per relay, what it already pulled (a timestamp watermark)
        and what each relay already accepted (up to 5,000 event IDs per relay),
        so a retry only sends what&rsquo;s missing. Relay rows show{' '}
        <em>&ldquo;# already sent, skipped.&rdquo;</em>
      </p>

      <p>
        If you want to re-send everything, say you&rsquo;re pushing to a relay
        that lost data, flip on <strong>Full network push</strong> and Ditto
        sends the whole archive again.
      </p>

      <h2>What won&rsquo;t be re-signed</h2>

      <p>
        Lines signed by another account are never re-signed and never
        published. You can&rsquo;t sign someone else&rsquo;s events without
        becoming their author. They&rsquo;re counted as warnings, and Ditto
        explains why. Authorship is cryptographic.
      </p>

      <h2>Why this matters</h2>

      <p>
        On Nostr, data portability is the architecture. You own your identity
        (keys), you choose your infrastructure (relays), and now you can hold
        your entire history in one file and re-publish it to the network
        whenever you want.
      </p>

      <p>
        Leave anytime. Take everything. On Nostr that&rsquo;s how it works.
      </p>

      <div className="not-prose my-10">
        <a
          href="https://ditto.pub"
          target="_blank"
          rel="noopener noreferrer"
          className="block no-underline"
        >
          <Card className="border border-violet-500/50 bg-gradient-to-br from-[#181021] to-[#100b15] transition-shadow hover:shadow-lg hover:shadow-violet-500/20">
            <CardContent className="p-6 flex flex-col items-center gap-4 text-center">
              <Download className="w-8 h-8 shrink-0 text-violet-400" />
              <div>
                <p className="m-0 font-semibold text-white">
                  Export your history today
                </p>
                <p className="m-0 text-sm text-white/70">
                  Open Ditto, go to Settings &rarr; Import &amp; Export, and
                  download your entire post history as one file you own.
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center rounded-full bg-violet-600 px-6 py-3 font-bold text-white">
                Open Ditto
              </span>
            </CardContent>
          </Card>
        </a>
      </div>
    </article>
  );
}
