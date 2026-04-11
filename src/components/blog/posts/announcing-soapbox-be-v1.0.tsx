import React from 'react';

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
  "slug": "announcing-soapbox-be-v1.0",
  "title": "Announcing Soapbox BE v1.0",
  "excerpt": "Soapbox BE is a production ready Pleroma branch. It's being maintained alongside Pleroma, with additional bugfixes and features. Our goal is to move faster, while taking deliberate care to ensure clean code merges between projects. Soapbox BE contains code that has not yet been merged (or may never be merged) by Pleroma.",
  "coverImage": "/assets/blog/announcing-soapbox-be-v1.0/be-1-0-thumb.png",
  "date": "2021-05-11",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/announcing-soapbox-be-v1.0/be-1-0-thumb.png"
  },
  "tags": ["soapbox", "announcement", "backend"]
};

export default function AnnouncingSoapboxBeV10() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>Based on Pleroma</h2>
      <p>Soapbox BE is a production ready Pleroma branch based on Pleroma 2.3 stable. It's being maintained alongside Pleroma, with additional bugfixes and features. Our goal is to move faster, while taking deliberate care to ensure clean code merges between projects.</p>
      <p>Soapbox BE contains code that has not yet been merged (or may never be merged) by Pleroma.</p>
      <h2>A new foundation</h2>
      <p>A big part of this release was just laying the groundwork to support another Fediverse backend: an updated website, an <a href="https://gitlab.com/soapbox-pub/soapbox/-/issues" target="_blank" rel="noopener noreferrer">issue tracker</a>, and <a href="/install/" target="_blank" rel="noopener noreferrer">proper documentation</a>.</p>
      <p>We are now free to do things that weren't possible before.</p>
      <p>A full list of differences between Soapbox and Pleroma is <a href="https://gitlab.com/soapbox-pub/soapbox/-/blob/main/CHANGELOG_soapbox.md" target="_blank" rel="noopener noreferrer">documented here</a>.</p>
      <h2>Soapbox FE by default</h2>
      <p>!<a href="/assets/blog/soapbox-fe-v1.1-release/soapbox-fe-1.1-screenshot.png" target="_blank" rel="noopener noreferrer">Soapbox FE</a></p>
      <p>Soapbox FE is the default frontend of Soapbox BE. We think this is a good choice for growing the Fediverse, and it gives us more control over how the FE and BE interact.</p>
      <p>It will still be possible to switch to another frontend as usual. See the FAQ below for details.</p>
      <h2>Rich media embeds</h2>
      <p>!<a href="/assets/blog/announcing-soapbox-be-v1.0/youtube-embed.png" target="_blank" rel="noopener noreferrer">YouTube embed</a></p>
      <p>Share a link to a popular video site, and users can watch right from their timeline! The following sites are tested to work:</p>
      <ul>
      <li>YouTube <li>Vimeo</li>
<li>PeerTube instances</li>
<li>Giphy </li><li>Soundcloud (audio player)</li>
<li>Kickstarter</li>
<li>Flickr </li>- anything on <a href="https://oembed.com/providers.json" target="_blank" rel="noopener noreferrer">this list</a>, and more</li>
      </ul><p>Most OEmbed compatible links will work. First we try known URL patterns, then fall back to scraping the page (discovery). Otherwise, it generates a link preview as usual.</p>
      <p>Rich media embeds are sanitized and can only contain an iframe or image. Unsafe embeds fall back to link previews.</p>
      <h2>Configurable block behavior</h2>
      <p>On Twitter, blocking someone prevents them from seeing your posts. On the Fediverse, it's a mixed bag. Different servers handle blocks differently.</p>
      <p>We think it makes sense for the default behavior to be Twitter-like, as it's what users expect. You can now configure it in Admin FE, under "ActivityPub &gt; Blockers visible"</p>
      <strong>Note:</strong> This setting cannot force a remote server to change their behavior, it only changes the behavior of your server.
      <h2>Bug fixes</h2>
      <ul>
      <li>Domain blocks: reposts from a blocked domain are now correctly blocked. (<a href="https://gitlab.com/soapbox-pub/soapbox/-/merge_requests/11" target="_blank" rel="noopener noreferrer">!11</a>) - Fixed some (not all) Markdown issues, such as broken trailing slash in links. (<a href="https://gitlab.com/soapbox-pub/soapbox/-/merge_requests/10" target="_blank" rel="noopener noreferrer">!10</a>) - Don't crash so hard when email settings are invalid. (<a href="https://gitlab.com/soapbox-pub/soapbox/-/merge_requests/12" target="_blank" rel="noopener noreferrer">!12</a>) - Return OpenGraph metadata on Soapbox FE routes. (<a href="https://gitlab.com/soapbox-pub/soapbox/-/merge_requests/14" target="_blank" rel="noopener noreferrer">!14</a>)</li>
      </ul><h2>Installing Soapbox</h2>
      <p>To install a fresh server, see our <a href="/install" target="_blank" rel="noopener noreferrer">install guide</a>.</p>
      <h2>Switching from Pleroma</h2>
      <p>Switching over is easy. As long as you're on Pleroma 2.3, you can simply checkout the repo:</p>
      <pre><code>sudo -Hu pleroma bash
cd /opt/pleroma
      <p>git remote add soapbox https://gitlab.com/soapbox-pub/soapbox.git git fetch soapbox --tags git checkout -b soapbox soapbox-v1.0.0</p>
      <p>MIX_ENV=prod mix deps.get MIX_ENV=prod mix compile</p>
      <h1>As root</h1>
systemctl restart pleroma
      </code></pre>
      <strong>Note:</strong> Only the source version of Pleroma is supported.
If you're using the OTP release, you may need to switch to the source version first.
      <h2>FAQ</h2>
      <ul>
      <li><strong>Will Soapbox FE continue to support vanilla Pleroma?</strong> — Yes. Soapbox FE already uses version detection for compatibility across versions. It will continue to support Pleroma.</li>
      <li><strong>Will Soapbox BE stay updated with Pleroma?</strong> — Yes. New stable releases of Pleroma will be merged into Soapbox BE. Soapbox BE releases will happen after Pleroma releases. Think of the relationship between Ubuntu and Debian.</li>
      <li><strong>Can I switch back to Pleroma?</strong> — Yep, you can safely switch between Soapbox BE 1.0 and Pleroma 2.3. This release does not modify the database at all. Future releases will modify the database in reversible, non-destructive ways.</li>
      <li><strong>Can I use Pleroma FE with Soapbox BE?</strong> — Technically, yes. You can remove Soapbox FE as the "primary" frontend within AdminFE, and it will fall back to Pleroma FE. This use case is unsupported by Pleroma FE devs, but it seems to work fine.</li>
      <li><strong>Can I use a customized frontend/custom build?</strong> — Yep. Anything you put in <code>/opt/pleroma/instance</code> will override the default frontend. If you put a custom build here, remember to upgrade the FE and BE separately.</li>
      </ul><h2>Support the Soapbox Project</h2>
      <p>Soapbox is funded entirely by grants and donations, not ads or data sales. Visit our <a href="/transparency">funding transparency page</a> to learn how we use funds and how to contribute.</p>
      <h2>Thank you!</h2>
      <p>A huge thank you to everyone who has been so supportive of my efforts, from the donations to the moral support to development help. Thank you to the Pleroma dev team for building a great foundation. I really appreciate you all being a part of this and look forward to advancing the Fediverse together.</p>
    </article>
  );
}