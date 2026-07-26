// ngit -> GitLab mirror bot.
//
// Watches the repo's Nostr state events (kind 30618) and, whenever the state
// changes, fetches the branch from a working ngit git server and fast-forwards
// GitLab's branch to match. This makes GitLab (and its deploy pipeline) update
// no matter who merged or how (web UI, a teammate, another machine), instead of
// relying on a maintainer's local dual-push.
//
// It only ever fast-forwards GitLab. If GitLab has commits that are not on ngit
// (a genuine divergence), it logs and does nothing, leaving the conflict for a
// human. That keeps the canonical ngit repo authoritative without the bot ever
// force-pushing over unrelated work.

import { SimplePool, useWebSocketImplementation } from 'nostr-tools/pool';
import WebSocket from 'ws';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdirSync, existsSync } from 'node:fs';

useWebSocketImplementation(WebSocket);
const run = promisify(execFile);

const {
  NGIT_HTTP,
  GITLAB_PUSH_URL,
  BRANCH = 'main',
  REPO_IDENTIFIER = 'soapbox-pub',
  RELAYS = 'wss://relay.ngit.dev,wss://git.shakespeare.diy,wss://relay.ditto.pub,wss://relay.primal.net,wss://relay.nostr.band',
  WORKDIR = '/var/lib/ngit-gitlab-mirror/repo',
  POLL_SECONDS = '300',
  DEBOUNCE_MS = '3000',
} = process.env;

if (!NGIT_HTTP || !GITLAB_PUSH_URL) {
  console.error('FATAL: NGIT_HTTP and GITLAB_PUSH_URL environment variables are required');
  process.exit(1);
}

const relays = RELAYS.split(',').map((s) => s.trim()).filter(Boolean);
// Never print the push URL: it contains the access token.
const safeGitlab = GITLAB_PUSH_URL.replace(/\/\/[^@]*@/, '//<token>@');

const log = (...a) => console.log(new Date().toISOString(), ...a);
const err = (...a) => console.error(new Date().toISOString(), ...a);

// Stay alive through transient relay/socket errors. Relay connections can throw
// on connect timeouts or resets; a mirror daemon must not die on those. The git
// sync logic is independently guarded, so logging and continuing is safe here.
process.on('uncaughtException', (e) => err('uncaughtException (continuing):', (e && e.message) || e));
process.on('unhandledRejection', (e) => err('unhandledRejection (continuing):', (e && e.message) || e));

const git = (args) => run('git', ['--git-dir', WORKDIR, ...args]);

async function ensureRepo() {
  if (!existsSync(`${WORKDIR}/HEAD`)) {
    mkdirSync(WORKDIR, { recursive: true });
    await run('git', ['init', '--bare', WORKDIR]);
    log('initialized bare repo at', WORKDIR);
  }
  await setRemote('ngit', NGIT_HTTP);
  await setRemote('gitlab', GITLAB_PUSH_URL);
}

async function setRemote(name, url) {
  try {
    await git(['remote', 'set-url', name, url]);
  } catch {
    await git(['remote', 'add', name, url]);
  }
}

async function revOrNull(ref) {
  try {
    return (await git(['rev-parse', '--verify', '--quiet', ref])).stdout.trim() || null;
  } catch {
    return null;
  }
}

let syncing = false;
let pending = false;

async function syncOnce() {
  await git(['fetch', '--prune', 'ngit', `+refs/heads/${BRANCH}:refs/remotes/ngit/${BRANCH}`]);
  await git(['fetch', '--prune', 'gitlab', `+refs/heads/${BRANCH}:refs/remotes/gitlab/${BRANCH}`]).catch(() => {});

  const ngitRev = await revOrNull(`refs/remotes/ngit/${BRANCH}`);
  const gitlabRev = await revOrNull(`refs/remotes/gitlab/${BRANCH}`);

  if (!ngitRev) { err('ngit has no', BRANCH, 'branch yet; skipping'); return; }
  if (gitlabRev === ngitRev) { log('in sync at', ngitRev.slice(0, 12)); return; }

  if (gitlabRev) {
    // Only push when GitLab is strictly behind (its tip is an ancestor of ngit).
    try {
      await git(['merge-base', '--is-ancestor', gitlabRev, ngitRev]);
    } catch {
      err(`DIVERGED: GitLab ${BRANCH} (${gitlabRev.slice(0, 12)}) has commits not on ngit ` +
          `(${ngitRev.slice(0, 12)}). Refusing to force-push. Manual reconcile needed.`);
      return;
    }
  }

  log(`fast-forwarding GitLab ${BRANCH}: ${gitlabRev ? gitlabRev.slice(0, 12) : 'none'} -> ${ngitRev.slice(0, 12)} (${safeGitlab})`);
  await git(['push', 'gitlab', `refs/remotes/ngit/${BRANCH}:refs/heads/${BRANCH}`]);
  log('pushed to GitLab; deploy pipeline should trigger');
}

async function drainSync() {
  if (syncing) { pending = true; return; }
  syncing = true;
  try {
    do {
      pending = false;
      await syncOnce();
    } while (pending);
  } catch (e) {
    err('sync error:', e.message || e);
  } finally {
    syncing = false;
  }
}

let debounceTimer = null;
function scheduleSync(reason) {
  if (reason) log('trigger:', reason);
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(drainSync, Number(DEBOUNCE_MS));
}

async function main() {
  await ensureRepo();
  log('mirror bot started. ngit:', NGIT_HTTP, '-> gitlab:', safeGitlab);
  log('relays:', relays.join(', '));

  scheduleSync('startup');
  setInterval(() => scheduleSync('poll'), Number(POLL_SECONDS) * 1000);

  const pool = new SimplePool();
  pool.subscribeMany(
    relays,
    [{ kinds: [30618], '#d': [REPO_IDENTIFIER] }],
    {
      onevent: (ev) => scheduleSync(`state event ${ev.id.slice(0, 12)} by ${ev.pubkey.slice(0, 8)}`),
      oneose: () => log('subscribed to repo state events'),
    },
  );

  process.on('SIGINT', () => { log('shutting down'); pool.close(relays); process.exit(0); });
  process.on('SIGTERM', () => { log('shutting down'); pool.close(relays); process.exit(0); });
}

main().catch((e) => { err('fatal:', e); process.exit(1); });
