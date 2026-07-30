# Research: Discord alternatives compared to Armada (2026)

Context document for the blog post `best-discord-alternatives-2026`. Compiled July 2026.
Purpose: back every claim in the post with a source, separate confirmed facts from
rumor, and record the comparison data behind the chart.

Reliability legend used below:
- STRONG: mainstream or primary source (Discord, Bloomberg, Reuters, Ars Technica, NBC, BBC, Variety).
- MEDIUM: Wikipedia-cited to tech press; verify the original before leaning hard on it.
- WEAK: SEO blogs, single Reddit threads, attacker claims. Do not state as fact.

---

## Part 1: What is wrong with Discord (the case for leaving)

### 1.1 IPO and monetization pressure
- Discord confidentially filed for a US IPO. Reported by Bloomberg, 2026-01-06
  (https://www.bloomberg.com/news/articles/2026-01-06/chat-platform-discord-is-said-to-file-confidentially-for-ipo).
  Corroborated by Reuters, 2026-01-07. STRONG.
- Lead underwriters reported as Goldman Sachs and JPMorgan; a possible spring/March 2026
  debut has been floated. STRONG on underwriters, MEDIUM on timing.
- Co-founder Jason Citron stepped down as CEO in April 2025, replaced by ex-Activision
  Blizzard exec Humam Sakhnini, explicitly "in anticipation of making Discord a publicly
  traded company." STRONG (Wikipedia cites Citron's announcement).
- Valuation and revenue figures floating around 2026 ($8.5B secondary, ~$600M revenue)
  appear only on low-quality finance blogs. WEAK. DO NOT cite specific numbers.
- Framing note: no mainstream outlet says "IPO = selling your data." The defensible link
  is that going public raises pressure to monetize users, and Discord has been building
  an ad business ahead of the offering (see 1.2). Write it as pressure, not as proof of
  data sales.

### 1.2 Ads and data collection
- Ad product is "Quests" (rewarded ads). Video Quests began 2024-11-14 (first was
  Max's Dune: Prophecy). STRONG (discord.com/ads/quests).
- First mobile ad format (Quests on phones) launched ~June 2025. STRONG/MEDIUM.
- 2025-10-02: "Arena Quests" launched; Discord partnered with AppsFlyer and Gamesight
  for ad measurement. Variety exclusive, 2025-10-02
  (https://variety.com/2025/gaming/news/discord-arena-quests-ad-sponsored-games-1236536780/);
  Discord press release. STRONG.
- Discord's own policy: sponsored content is targeted using "your use of Discord and your
  activities... as well as data from advertisers and third-party data providers." Discord
  Support, "Data Used for Sponsored Content." STRONG.
- Discord says Quests reporting is "aggregated and anonymized" and it does not sell
  personal info. Include this for fairness. STRONG.
- Quests can be de-personalized (Settings > Privacy & Safety) but not fully removed. MEDIUM.
- Sept 2024 FTC 6(b) staff report on social-media/streaming data practices covered nine
  companies including Discord. STRONG.
- Bottom line: "Discord sells your data" is NOT proven. Say Discord runs an ad business
  and targets ads using account activity. That is documented.

### 1.3 October 2025 data breach
- Discord disclosed a breach of a third-party customer-service vendor; ~70,000 users may
  have had government-ID photos exposed. The IDs came from users who submitted them in
  age-verification appeals. Ars Technica, 2025-10-09
  (https://arstechnica.com/security/2025/10/discord-says-hackers-stole-government-ids-of-70000-users/);
  Discord press release; NBC, BBC same day. STRONG.
- Incident date reported as 2025-09-20; Discord first posted 2025-10-03, updated 2025-10-08.
  MEDIUM.
- Vendor reported to be Zendesk by secondary sources; Discord did not name it. MEDIUM,
  so do not name the vendor in the post.
- Attackers claimed ~2.1 million ID photos / 1.5 TB; Discord disputes and says ~70,000.
  The 2.1M number is an UNVERIFIED attacker claim. WEAK. Use 70,000 (Discord's figure).
- Also reportedly exposed: usernames, emails, IPs, some payment metadata. MEDIUM.

### 1.4 Age / ID verification
- ~April 2025: Discord began testing age verification (face scan or government-ID scan)
  ahead of the UK Online Safety Act and Australian rules. MEDIUM.
- By July 2025: age verification mandated for all UK users under the Online Safety Act.
  MEDIUM.
- December 2025: Discord required age verification for all Australian users. MEDIUM.
- March 2026: Discord announced global age verification. All existing accounts default to
  a "teen" experience until verified via face scan or government ID; an AI "age inference"
  model analyzes profile/usage/gaming history to auto-verify adults. MEDIUM.
- Backlash cited the Sept/Oct 2025 breach as a reason not to hand over IDs. MEDIUM.
- Persona/Thiel angle: some UK face/ID scans were processed by Persona, a vendor that has
  received Thiel funding, retaining data up to 7 days; after backlash Discord said it
  terminated its Persona testing. MEDIUM. Verify original The Verge/TechCrunch before
  naming Persona/Thiel in the post; safer to keep it general.
- Delay: about a week after the global announcement, Discord said it would delay the global
  rollout to the second half of 2026 (continuing where legally required). MEDIUM. This is
  the window the post is written in (July 2026).
- Texas sued Discord (May 2026) under the SCOPE Act; July 2026 a judge ordered UK-style
  minor protections for Texas users within 90 days. MEDIUM.

### 1.5 AI / automated banning
- Status: user-reported and anecdotal, NOT established journalism. Treat as "users widely
  report," never a number.
- Users report automated systems and the Clyde bot issue bans, then answer appeals with
  automated messages; hard to reach a human. Multiple Discord support threads,
  r/BannedFromDiscord, r/discordsucks, 2024-2026. WEAK individually, but the pattern is
  widespread.
- Specific "Marvel Rivals Sue Storm skin -> child-safety AI ban" claim: single-community
  anecdote. WEAK. Do not repeat as fact.
- Discord docs confirm an automated Warning System and grace-period appeal window. STRONG
  (for the existence of automation, not for wrongful bans).
- New appeal flow requires being logged in, impossible when the account is disabled. MEDIUM
  (user reports).
- No mainstream investigation quantifies wrongful AI bans. Post must say "users report,"
  not assert a rate.

### 1.6 Encryption status (DAVE)
- DAVE = Discord's E2EE protocol for voice/video, introduced September 2024. STRONG.
- Voice and video became E2EE by default for all users in 2026 (Discord blog "Every Voice
  and Video Call on Discord Is Now End-to-End Encrypted," ~2026-05-18; PCMag 2026-05-20;
  Help Net Security 2026-05-19). STRONG.
- Text messages, DMs, and channel history are NOT E2EE, and Discord says it has no plans
  to encrypt them. Quote attributed to Discord VP of Core Technology Mark Smith: "We have
  no current plans to extend E2EE to text messages." STRONG.
- DATE DISCREPANCY: the existing Soapbox post says the voice/video default was "March 2026."
  Primary sources put the default-for-everyone rollout at May 2026, with DAVE itself dating
  to Sept 2024. To avoid contradicting the primary sources AND the existing post, the new
  post phrases it as "introduced DAVE in 2024 and made it the default for every call in
  2026" without pinning a month.

### 1.7 Other context (optional)
- Charlie Kirk case (Sept 2025): suspect reportedly confessed on Discord; CEO Sakhnini
  called to testify before US House Oversight. MEDIUM.
- Russia blocked Discord 2024-10-08; Turkey blocked it Oct 2024; blocked by China's Great
  Firewall. STRONG (Wikipedia-cited).
- CNIL fined Discord EUR 800,000 (Nov 2022) for data-protection failings. STRONG. Older.

---

## Part 2: Why Armada answers these problems

Source of truth: the repo. `src/pages/Armada.tsx` (landing), and blog posts
`armada-open-source-encrypted-discord-alternative.tsx`,
`building-an-armada-voyage-to-encrypted-communities.tsx`, `armada-buzz-communities.tsx`.

- E2EE by default for every community, via the open Concord protocol
  (https://github.com/concord-protocol/concord). Relays see only sealed ciphertext; sender,
  community membership, even the community name are hidden. Concord v2 finalized and in
  production; authored by the Vector team (JSKitty, YuurinBee), with Soapbox's Alex Gleason
  on v2. Base primitive: a stream of NIP-59 gift wraps sharing one key.
- Identity is a Nostr key pair. No email, phone, face scan, or ID at signup. Same key works
  across every Nostr app.
- No platform-wide ban is possible: there is no company account to disable. Communities
  publish to multiple independent relays at once; lose one and clients reroute. Owners
  moderate their own spaces only.
- Self-hostable: `./start.sh` brings up relay (ws://localhost:5577), voice
  (ws://localhost:7880), and client (http://localhost:8080). Standard NIP-29 underneath.
- Open source, AGPL-3.0, no ads, no paid tier.
- Security track record: Team Soapbox shut down its company Signal and moved internal chat
  to Armada/Concord. Public bug bounty; first payout June 2026, $1,000 to hzrd149 for a
  role-revocation flaw, fixed same day (commit 5a655112).
- Features: text channels (threads, replies, reactions, markdown, code), voice channels
  (video, screen share), roles/moderation, encrypted DMs (anyone on Nostr), events + RSVPs,
  bots + slash commands, GIF keyboard, custom emoji, 12+ theme presets.
- Beyond Discord: Bluetooth mesh chat on Android (compatible with bitchat), notifications
  without Google push, Buzz workspace support (Block's open-source team chat: forums, git
  Projects via NIP-34/ngit, AI agents), a two-way Discord bridge at bridge.armada.buzz, a
  portable Nostr identity that outlives the app.
- Status: open beta, v0.x (~v0.37), releases almost daily. Web, Android, Linux, Windows.
  No iOS app yet (web works on iPhone). Apps at armada.buzz and Zap Store
  (buzz.armada.app). Source at gitlab.com/soapbox-pub/armada.
- Consistency caveat from the repo: voice/video works in Concord communities but not yet in
  Buzz rooms. Scope any "voice works" claim to Concord communities.
- Bridge caveat: a bridged Discord channel is readable by the bridge, so it is for public
  community chat, not the rooms kept end-to-end encrypted.

Brand: deep aubergine-black #100b15, hot pink #ec4899, cyan #22d3ee, monospace/terminal
motif. App icon is a pink sail over cyan water.

---

## Part 3: The competitors

Key correction: Revolt renamed to Stoat on 2025-10-01 after a trademark cease-and-desist.
They are the SAME product, so the chart lists one row: "Stoat (formerly Revolt)."
Second correction: Guilded (Roblox) shut down 2025-12-19. Include only as a cautionary
"acquired then killed" note, not as a live alternative.

Priority matrix (the five columns that matter, plus ads):

| App | Chat text E2EE | Decentralized (no kill switch) | Open source | Self-host | Signup needs personal info | Ads |
|---|---|---|---|---|---|---|
| Armada | Yes (Concord) | Yes (Nostr relays) | Yes (AGPL-3.0) | Yes | No (Nostr key) | No |
| Discord | No (voice/video only) | No (one company) | No | No | Yes (email/phone; ID in some regions) | Yes |
| Matrix / Element | Yes (on for new private rooms) | Yes (federated) | Yes (AGPL/Apache) | Yes | Server-dependent; matrix.org needs email | No |
| Stoat (ex-Revolt) | No | No (central instance; self-host siloed) | Yes (AGPLv3) | Yes | Email | No |
| Fluxer | No (not offered) | No (central instance; self-host siloed) | Yes (AGPLv3) | Yes | No (email optional) | No |
| Mattermost | No | No (per-instance) | Yes (MIT/AGPL) | Yes | Email (admin-controlled) | No |
| Rocket.Chat | Optional (audited, historically weak) | No (per-instance) | Yes (MIT) | Yes | Email typically | No |
| Signal | Yes (always) | No (centralized) | Yes (AGPL/GPL) | Not practically | Yes (phone number) | No |
| Telegram | No by default (1:1 secret chats only) | No (centralized) | Client only | No | Yes (phone number) | Yes |
| Flotilla (Nostr) | Spaces no, DMs yes (NIP-17) | Yes (Nostr relays) | Yes (AGPL) | Yes | No (Nostr key) | No |

Per-app notes:

- Matrix / Element. Federated protocol; Element is the flagship client (moved off Apache to
  AGPL/commercial in Nov 2023). E2EE via Olm/Megolm, default for new private rooms since
  May 2020; large public rooms usually unencrypted. Weaknesses: metadata leakage (servers
  see room membership, timing, profiles), key-management and setup complexity, federated
  moderation is hard. Sources: Wikipedia "Matrix (protocol)", "Element (software)" (2026).

- Stoat (formerly Revolt). Rust Discord-style chat by Revolt Platforms Ltd. Launched Jan
  2021 as Revolt, renamed Stoat 2025-10-01. AGPLv3. NOT E2EE. Central official instance;
  self-hosts do not federate (islands). Email signup. Scaling problems under surges (grew
  after 2024 Discord blocks and Feb 2026 age-verification news). AGPL-violation incident:
  Andrew Tate's "The Real World" ran a modified Revolt backend, breached Nov 2024, ~800k
  users exposed. Sources: Wikipedia "Stoat (software)" (rev. 2026-07-28); stoat.chat.

- Fluxer. Open-source Discord clone by Fluxer Platform AB (Sweden). TypeScript, public beta,
  GitHub fluxerapp/fluxer. AGPLv3, self-hostable, central instance (web.fluxer.app) with 16
  voice regions; instances do not federate. No email required ("try without an email in 30
  seconds"). E2EE NOT offered/advertised; Discord-style relayed voice + server-side history
  rules out true E2EE for community chat, so listed as "No." No ads; donations + paid
  "Plutonium" tier. Sources: fluxer.app (retrieved 2026-07-30); github.com/fluxerapp/fluxer.

- Mattermost. Go/React team chat (Slack-style), MIT (Team Edition binary) / AGPLv3 (source).
  No E2EE (TLS in transit, encryption at rest). Self-hosted per instance, no federation.
  Enterprise open-core. Source: Wikipedia "Mattermost" (2026).

- Rocket.Chat. TypeScript team chat, MIT core, freemium. E2EE is OPTIONAL and off by
  default; two 2024-2025 academic analyses (ETH Zurich thesis; ACSAC 2025 "Gravity of the
  Situation") found confidentiality/integrity flaws, some later fixed. Optional Matrix
  federation since v4.7. Treat E2EE as "present but historically weak." Sources: Wikipedia
  "Rocket.Chat" (2026); eprint.iacr.org/2025/2300.

- Signal. E2EE messenger by the Signal Foundation. Always E2EE, text + calls + groups,
  gold standard. But centralized, phone number required, not a server/community platform,
  not practically self-hostable. Source: Signal Foundation; Wikipedia.

- Telegram. Cloud messenger, MTProto. Clients open source, server proprietary. NOT E2EE by
  default; only 1:1 Secret Chats are E2EE. Groups/channels/cloud chats are client-to-server
  only (Telegram can read them). Phone number required. Has ads + Premium. Source: Wikipedia
  "Telegram (software)".

- Flotilla (Nostr, honorable mention). The closest Nostr-native Discord alternative besides
  Armada, by Coracle Social (Jon Staab), AGPL, coracle-social/flotilla. Communities
  ("spaces") of chat rooms, voice/video, events, roles. Decentralized via Nostr relays,
  self-hostable, Nostr-key login. IMPORTANT nuance: community spaces are NOT E2EE (privacy
  is relay access policy; they call them "non-public," not "private"); DMs are E2EE via
  NIP-17; no forward secrecy. Source: flotilla.social "Is Flotilla Private?" (2026-07-14).
  This is why Armada's default-E2EE communities are the differentiator even among Nostr apps.

- Other privacy options (not in main chart): SimpleX Chat (no identifier at all, E2EE,
  AGPL, small groups, not a community platform), Session (no phone/email, E2EE, decentralized
  node network, but lost forward secrecy and had a 2026 funding near-shutdown), WhiteNoise /
  Marmot (emerging Nostr E2EE standard with forward secrecy, very new).

---

## Part 4: Claims to avoid or hedge in the post

- Do NOT say "Discord sells your data." Say Discord runs an ad business that targets ads
  using account activity, ahead of an IPO.
- Do NOT cite the 2.1M breach figure. Use ~70,000 (Discord's number).
- Do NOT name the breach vendor (Zendesk unconfirmed by Discord).
- Do NOT state a wrongful-AI-ban rate. Say users widely report automated bans with weak
  human appeals.
- Do NOT pin the DAVE default month; say "in 2026."
- Do NOT cite specific Discord valuation/revenue numbers.
- Scope Armada voice to Concord communities.
- Be fair to competitors: several are genuinely good (Matrix E2EE, Signal E2EE). Armada's
  specific edge is default-E2EE communities + Nostr-key identity + no kill switch + no
  personal-info signup, in one Discord-shaped app.
