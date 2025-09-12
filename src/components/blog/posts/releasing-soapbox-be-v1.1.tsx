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
  "slug": "releasing-soapbox-be-v1.1",
  "title": "Releasing Soapbox BE v1.1",
  "excerpt": "The Erlang 24 cataclysm event. I hate to start off with something negative, but it needs to be addressed. For a long time we pointed to Pleroma's source install guide, and even used it as the starting point for our own install docs. In that guide, we recommended installing a repo from \"erlang-solutions.com\" on your server. This was a mistake, as that repo pushes out bleeding edge versions of Erlang literally on the day of a new release.",
  "coverImage": "/assets/blog/releasing-soapbox-be-v1.1/be-1-1-thumb.png",
  "date": "2021-05-18",
  "author": {
    "name": "Alex Gleason",
    "picture": "/assets/avatars/alex.png"
  },
  "ogImage": {
    "url": "/assets/blog/releasing-soapbox-be-v1.1/be-1-1-thumb.png"
  },
  "tags": ["soapbox", "release", "backend"]
};

export default function ReleasingSoapboxBeV11() {
  return (
    <article className="prose prose-lg max-w-none">
      <h2>The Erlang 24 cataclysm event</h2>
      <p>I hate to start off with something negative, but it needs to be addressed.</p>
      <p>For a long time we pointed to Pleroma's <a href="https://docs.pleroma.social/backend/installation/debian_based_en/" target="_blank" rel="noopener noreferrer">source install guide</a>, and even used it as the starting point for our own install docs.</p>
      <p>In that guide, we recommended installing a repo from "erlang-solutions.com" on your server. This was a mistake, as that repo pushes out bleeding edge versions of Erlang literally on the day of a new release. As a result, Pleroma installations (and Soapbox BE) installed this way stopped functioning when Erlang 24 was released, and after running <code>apt upgrade</code> on the machine.</p>
      <p>It is normal for software to lag a bit behind major language releases. We are working on updating Soapbox BE to be Erlang 24 compatible. What's not normal is deploying a repo with breaking changes in a production setting.</p>
      <p>Our install guide has been updated to recommend using <a href="https://asdf-vm.com/" target="_blank" rel="noopener noreferrer">asdf version manager</a> instead. This will allow us to specify the Erlang/Elixir version for a release, while the server admin need only run <code>asdf install</code> to get the right versions.</p>
      <h2>Upgrading to Soapbox BE 1.1 (with asdf)</h2>
      <p>If you already have Soapbox BE 1.0 or a vanilla Pleroma 2.3 server, you can follow these steps to update your system to Soapbox BE 1.1. This guide assumes you're using Ubuntu 20.04 LTS.</p>
      <p>First, install new OS requirements:</p>
      <pre><code>apt install imagemagick ffmpeg libimage-exiftool-perl unzip libssl-dev automake autoconf libncurses5-dev
      </code></pre>
      <p>Next, become the pleroma user and switch to the latest Soapbox:</p>
      <pre><code>cd /opt/pleroma
sudo -Hu pleroma bash
git remote set-url origin https://gitlab.com/soapbox-pub/soapbox.git
git fetch origin --tags
git checkout soapbox-v1.1.1
      </code></pre>
      <p>Next, install asdf, Elixir 1.11, and Erlang 23:</p>
      <pre><code>git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.8.0
echo ". $HOME/.asdf/asdf.sh" &gt;&gt; ~/.bashrc
echo ". $HOME/.asdf/completions/asdf.bash" &gt;&gt; ~/.bashrc
exec bash
asdf plugin-add erlang
asdf plugin-add elixir
asdf install
      </code></pre>
      <p>(Erlang gets built from source, so this will take about 15 minutes ☕)</p>
      <p>Recompile Pleroma:</p>
      <pre><code>mix local.hex --force
mix local.rebar --force
mix deps.get
MIX_ENV=prod mix compile
      </code></pre>
      <p>(This will take about 10 minutes ☕)</p>
      <p>If you started with a Pleroma version prior to 2.3, you need to also update the database:</p>
      <pre><code>MIX_ENV=prod mix ecto.migrate
      </code></pre>
      <p>Next, become root:</p>
      <pre><code>exit
      </code></pre>
      <p>Finally, as root, copy the updated systemd file, and restart:</p>
      <pre><code>cp /opt/pleroma/installation/pleroma.service /etc/systemd/system/pleroma.service
systemctl daemon-reload
systemctl restart pleroma
      </code></pre>
      <p>At this point Soapbox BE will be using Erlang/Elixir installed from asdf, so you can now safely <code>apt upgrade</code> without breaking your system.</p>
      <p>If you have a Pleroma server and do not want to switch to Soapbox BE, you can follow <a href="https://gitlab.com/-/snippets/2121092" target="_blank" rel="noopener noreferrer">these instructions</a> on switching to asdf instead.</p>
      <p>In the future, upgrading Soapbox BE will be a lot easier. Thanks for your patience!</p>
      <h2>Unletterboxed media</h2>
      <p>!<a href="/assets/blog/releasing-soapbox-be-v1.1/attachment-dimensions.png" target="_blank" rel="noopener noreferrer">Unletterboxed media screenshot</a></p>
      <p>Uploaded attachments are now inspected for their length/width in pixels, which lets us render them beautifully, unletterboxed.</p>
      <p>We still don't process remote media, though (yet). We send our own attachment data out through ActivityPub, and receive incoming attachment data. As a result, Soapbox to Soapbox federation renders images unletterboxed.</p>
      <p>If you previously configured upload filters, you'll need to ensure that <code>SetMeta</code> is enabled in AdminFE under "Uploads &gt; Filters":</p>
      <p>!<a href="/assets/blog/releasing-soapbox-be-v1.1/upload-filters.png" target="_blank" rel="noopener noreferrer">Upload filters screenshot</a></p>
      <p>(We recommend <code>Exiftool</code> be enabled for security reasons as well, as it strips GPS data from uploads. Click the trash icon to return to the defaults.)</p>
      <h2>Blurhash support</h2>
      <video src="/assets/blog/releasing-soapbox-be-v1.1/blurhash.mp4" autoPlay loop muted></video>
      <p>Uploaded images now have blurhash support, which makes them look nicer while loading, and improves the look of images with content warnings.</p>
      <p>The same rules as unletterboxed media apply: the <code>SetMeta</code> upload filter must be enabled, and blurhash only federates between supported servers (including Mastodon).</p>
      <h2>Bug fixes</h2>
      <ul>
      <li>Rich media not working for certain links. (<a href="https://gitlab.com/soapbox-pub/soapbox/-/merge_requests/19" target="_blank" rel="noopener noreferrer">!19</a>, <a href="https://gitlab.com/soapbox-pub/soapbox/-/merge_requests/20" target="_blank" rel="noopener noreferrer">!20</a>)</li>
      </ul><h2>Installing Soapbox</h2>
      <p>To install a fresh server, see our <a href="/install/" target="_blank" rel="noopener noreferrer">install guide</a>.</p>
      <h2>Update: 1.1.1 (May 21, 2021)</h2>
A new minor release fixes the following bugs:
      <ul>
      <li>Broken frontend due to not all files being included.</li>
      </ul><h2>Fund the Soapbox Project</h2>
      <p>Soapbox is funded entirely by donations. If you would like to support me, you can send me a donation. Your support is greatly appreciated, and every bit counts.</p>
      <ul>
      <li>Credit Card — <a href="https://paypal.me/gleasonator" target="_blank" rel="noopener noreferrer">PayPal</a> (alex@alexgleason.me) <li>Bitcoin — <code>bc1q9cx35adpm73aq2fw40ye6ts8hfxqzjr5unwg0n</code></li>
<li>Etherium — <code>0xAc9aB5Fc04Dc1cB1789Af75b523Bd23C70B2D717</code></li>
<li>Dogecoin — <code>D5zVZs6jrRakaPVGiErkQiHt9sayzm6V5D</code> </li>- Ubiq (10grans) — <code>0x541a45cb212b57f41393427fb15335fc89c35851</code> - Monero — <code>45JDCLrjJ4bgVUSbbs2yjy9m5Mf4VLPW8fG7jw9sq5u69rXZZopQogZNeyYkMBnXpkaip4p4QwaaJNhdTotPa9g44DBCzdK</code></li>
      </ul><h2>Thank you!</h2>
      <p>A huge thank you for everyone's patience as we resolve these difficult challenges. Social media is hard, and computers are harder. I'm glad this project is more resilient now.</p></article>
  );
}