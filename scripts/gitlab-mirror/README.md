# ngit -> GitLab mirror bot

Keeps GitLab's `main` in step with the canonical ngit repo so the GitLab deploy
pipeline runs on every merge, regardless of who merged or how (web UI, a
teammate, another machine). Without this, GitLab only updates when a maintainer
runs `git push origin main` from a clone configured to dual-push.

## How it works

1. Subscribes to the repo's Nostr state events (kind `30618`, `d = soapbox-pub`).
2. On any state change (and on a periodic safety-net poll), it fetches `main`
   from a working ngit git server (`relay.ngit.dev`) and fast-forwards GitLab's
   `main` to match.
3. It only ever fast-forwards. If GitLab has commits that are not on ngit, it
   logs a divergence and does nothing, so it never force-pushes over other work.

The bot reads git data from the public ngit HTTP endpoint, so it needs no Nostr
key. It only needs a GitLab token to push.

## Install (on an always-on host, e.g. the deploy server)

Requirements: Node 18+ and `git`.

1. Create a GitLab Project Access Token
   - gitlab.com/soapbox-pub/soapbox.pub -> Settings -> Access tokens
   - Role: Maintainer, Scope: `write_repository`
   - (Maintainers may push to the protected `main` branch.)

2. Copy this directory to the host and install deps:
   ```sh
   sudo mkdir -p /opt/ngit-gitlab-mirror
   sudo cp -r mirror.mjs package.json /opt/ngit-gitlab-mirror/
   cd /opt/ngit-gitlab-mirror
   sudo npm install --omit=dev
   ```

3. Configure the environment:
   ```sh
   sudo cp /path/to/.env.example /opt/ngit-gitlab-mirror/.env
   sudoedit /opt/ngit-gitlab-mirror/.env      # paste the token into GITLAB_PUSH_URL
   sudo chmod 600 /opt/ngit-gitlab-mirror/.env
   ```

4. Create the state/work dirs and a service user:
   ```sh
   sudo useradd --system --home /opt/ngit-gitlab-mirror --shell /usr/sbin/nologin mirror || true
   sudo mkdir -p /var/lib/ngit-gitlab-mirror
   sudo chown -R mirror:mirror /opt/ngit-gitlab-mirror /var/lib/ngit-gitlab-mirror
   ```

5. Install and start the service:
   ```sh
   sudo cp ngit-gitlab-mirror.service /etc/systemd/system/
   sudo systemctl daemon-reload
   sudo systemctl enable --now ngit-gitlab-mirror
   sudo journalctl -u ngit-gitlab-mirror -f
   ```

You should see `subscribed to repo state events` and, on the first run,
either `in sync at <sha>` or a `fast-forwarding GitLab main` line.

## Test it

From a maintainer clone, push a commit to ngit only (no gitlab):
```sh
git push nostr://npub10qdp2fc9ta6vraczxrcs8prqnv69fru2k6s2dj48gqjcylulmtjsg9arpj/git.shakespeare.diy/soapbox-pub main
```
Within a few seconds the bot should log a fast-forward and GitLab's pipeline
should start.

## Notes

- If the host itself has broken IPv6, ngit's HTTP hosts may need IPv4 pinning in
  `/etc/hosts` (same fix as the dev machines): `relay.ngit.dev` and
  `git.shakespeare.diy`. The bot uses system `git`, which normally falls back to
  IPv4 on its own, so this is rarely needed on servers.
- With the bot running, maintainers no longer need the gitlab push URL on their
  local `origin`; pushing to ngit alone is enough. Keeping the dual-push is
  harmless (both produce the same fast-forward).
- Rotate the GitLab token if it is ever exposed; update `.env` and restart.
