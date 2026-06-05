# Agora Launched at Olso Freedom Forum 

On June 2nd, we launched our new version of Agora on the OFF Freedom Tech stage. Agora was borne out of a 6-month partnership with Venezuelan opposition leader Leopoldo Lopez and his team from the World Liberty Congress, including Aaron Rodriguez, who leads Tech and Freedom initiatices at WLC. 

## Background: Collaboration with the HRF and WLC

We built our first version of Agora with Leo and Aaron at a January HRF AI Hack For Freedom. This version featured voices from around the world rising up against censorship, especially important since sites like Twitter are often banned in countries like Venezuela and other dictatorships. Leo and Aaron onboarded over 1,000 members of their Voluntad Popular community onto Agora.

But we soon found that this platform format offered little real benefit to the users beyond other Nostr apps like Primal. We analyized months and data and traffic to the site and found one consistent pattern: people showed up when there was money available. Week after week, people showed up to receive donations Leo was offering through the Freedom Zap Fund, and then disappeared the next day. USDT, a "stablecoin" tied to the US Dollar, has become common currency and a method for storing value where the Venezuelan fiat currency has inflated to worthlessness. Yet, users were not even recieving enough zaps to be able to excange into the currency they needed.

Aaron and Leo have both been detained as political prisoners, and told us that sometimes as little as $800 USD is needed to help someone being hunted by the regime escape to safety. By the time they know they need the money, the question of privacy is already out the window. The only thing that matters then is recieving and spending the money as easily as possible. Any barrier to access at this point is the #1 liability. Being "unstoppable" money, including by dictators, corporations, or technical barriers to accessibility was the truly unique value.

At the same time, Team Soapbox member Morgan Maksoud-Miller was building partnerships with families in Gaza displaced and injurred by the war. With the Palestinian finacial system in collapse, and the only access to money typically available through Hamas, families turned to cryptocurrencies for buying basics like food and for assistance with evacuation. Like in Venezeula, they were also storing value in USDT. Sending crypto was one of the only accessible way to get money to a real person in Gaza without an intermediary. GoFundMe and similar platforms rely on a having a point of contact in the US or another accepted country to facilite the transfer of funds. Often, those who are the most vulnerable are the least likely to have access to this.

Across the world the pattern emerged: crypto was the solution when financial systems collapsed or couldn't be used by people at risk. Sending Bitcoin, which was easily exchanged for stablecoins when needed, provided an actual lifeline. Yet the funds most users were recieving with content-based zaps amounted to pennies, amounts so low it was practically insulting. The only thing missing was a platform to connect people in need with people willing to donate real amounts that could make an actual difference.


# How we built Agora 

After six months of partnership and research, we realized we needed to take the entire project back to the drawing board. We scrapped the old code base, and built the new Agora as a fork of Ditto. Forking Ditto gave us the benefit of a huge context reference for anything we wanted to include and allowed us to work extremely quickly. We ripped out anything we didnt need, rebranded, and dramatically changed and added many core features. 

The largest change and the focus of this work was the wallet. Our work and research proved that accessiblity and ease of exchange was paramount, but there were also serious privacy concerns with the on-chain zap system Ditto recently implemented. Thanks to the conversation sparked by Ditto's implementation, we were able to harvest ideas and feedback from the Nostr and Bitcoin community to come up with a system to offer Agora users the best of both worlds with minimal tradeoffs to our core accessibilty and exchange concerns. We would like to thank everyone who worked productively with us on this issue to push towards real solutions, including members of the AOS community and our partners and funders at HRF who provided leadership and guidance on the final implementation.


## Unstoppable funding

To be truly unstoppable funding, Agora could not depend on any server or middle-man service (including us) that could be shut down by a goverment, corporation, or hurricane. There are multiple benefits to opperating this way for our users: 

1. No third-party can take down/censor their fundraiser (unlike with GoFundMe)
2. No one can rug their funds after they've been donated (unlike with custodial Bitcoin layers)
3. No one can supoena Agora to receive information about the users (or if they do, we won't have anything to give them) 
4. Opperating Agora requires practically zero infrastucture set up, which means that if our version of Agora went down anyone in the world could easily spin the code of the website up on a new domain with zero infrastructre or hosting knowledge. (unlike with self-hosted solutions like BTCPay servers))
5. With no infracture costs, the cost of maintaining Agora in perpetutity is extremely cheap, which means we do not need to charge any platform fees so all funds go directly to the intended recipient (unlike other Bitcoin fundraising platforms)

Regular on-chain Bitcoin is the obvious solution to this but comes with privacy tradeoffs, especially people in high-risk situations. However, concerns about the privacy of Bitcoin came entirely from the Bitcoin community itself, not the activists and people we were speaking to in war-torn regions. Time and time again when we asked real people in desperate need of money if privacy was important if it came at the tradeoff of ease of access, the answer was a resounding no and a frustration with the paternalism of the Bitcoin community.

"I was kidnapped by the state, you dont need to explain privacy to me," said one acitivist now living in exile. "If you ask someone who is about to get caught what they prefer, to receive this money from Agora or to be scared someone will know you will receive the money, they want to receive the money. By the time you get to this point, the decission about privacy is already made by the person." 

"A lot of people ask me for help to create a gofundme," said one organizer who works with people in authortarian regimes around the world. "You need to decide - go public and recieve the money or go private and find another way. A lot of them all around the world they don't have the chance to decide, not even just for their life what to eat to today or what to study. Its the possibility to decide. A lot of people will be waiting to create their campaign and willing to raise the risks."

User choice became the obvious solution. People understand their own situations better than we do. Each user should be free to choose the level of privacy they require. Nostr already naturally provides this, as anyone can create an npub completely anonymously. Silent Payments became the solution for use financial autonomy.


## Agora Wallet: BIP-32 HD Wallet + Silent Payments 

The Bitcoin wallet is derived deterministically from the Nostr secret key. The benefit of this to the user is that they don't have mutliple keys to manage and store, their wallet exists automatically at signup, and can be ported with them to any normal Bitcoin wallet.

(src/lib/hdwallet/seed.ts):

nsec (32 bytes)
  -> HKDF-SHA256(salt="", info="agora/v1", len=32)  -> entropy (32 B)
  -> BIP-39 encode                                  -> 24-word mnemonic
  -> PBKDF2-HMAC-SHA512(passphrase="", 2048 iters)  -> 64-byte seed
  -> HDKey.fromMasterSeed                           -> BIP-32 root
HKDF is one-way, so writing down the 24-word mnemonic doesn't leak the Nostr identity. The "agora/v1" info string is a domain separator that lets us rotate the derivation later without touching the Nostr key. And because the output is a standard BIP-39 seed, the wallet roundtrips into Sparrow, Electrum, Trezor, Ledger, or anything else BIP-39 compatible. No Agora-shaped lock-in.

From the BIP-32 root, Agora maintains two independent hardened branches (src/lib/hdwallet/derivation.ts):

BIP-86 (Taproot, single-key)

m / 86' / 0' / 0' / change / index

Standard Taproot addresses (bc1p…). Backs Bitcoin Public Payments: one fresh leaf per public campaign.

BIP-352 (Silent Payments)

spend: m / 352' / 0' / 0' / 0' / 0
scan:  m / 352' / 0' / 0' / 1' / 0

One static silent-payment address (sp1q…) per user. Backs Bitcoin Silent Payments.

2.2 How Silent Payments Work
Silent payments (BIP-352) are the primitive that makes private, serverless donations work. The recipient publishes one static address (the sp1q…), and every donor's wallet uses that address plus the donor's own input keys to derive a brand new, one-shot Taproot output that only the recipient can find. On-chain, donations to the same activist look like unrelated transactions to unrelated addresses. (For those following earliest Nostr conversations about Silent payments, please note that this is an original implementation not tied to previous public discussions).

The sp1q… is two compressed secp256k1 public keys, a scan key B_scan and a spend key B_spend. The donor's wallet computes (src/lib/hdwallet/sp/sender.ts):

a            = Sum of a_i              # donor's input private keys
input_hash   = tagged_hash("BIP0352/Inputs", outpoint_L || A)
ecdh         = input_hash * a * B_scan        # ECDH shared secret
t_k          = tagged_hash("BIP0352/SharedSecret", ecdh || k)
P_k          = B_spend + t_k * G              # the Taproot output key
Different donors produce different P_k values because the ECDH shared secret depends on their own input keys. Even the same donor paying twice produces different outputs.

Receiving works by scanning, not by watching an address. A public indexer (Agora uses BlindBit Oracle) publishes a per-transaction tweak equal to input_hash * A. The activist's wallet completes the ECDH locally with b_scan, which never leaves the device, and checks candidate P_k values against the block's Taproot outputs. A match means the output belongs to the activist.

Scanner: src/lib/hdwallet/sp/scanner.ts. Primitives: src/lib/hdwallet/sp/crypto.ts. Spend path: src/lib/hdwallet/sp/spend.ts, which reconstructs d_k = b_spend + t_k and signs the BIP-341 sighash directly with BIP-340 Schnorr, deliberately bypassing the automatic TapTweak in @scure/btc-signer because P_k is already the output key.


## Campaign addresses

Silent payments let us skip the coordinating server entirely. The freshness step happens inside the donor's wallet, using only public information. The activist publishes one static sp1q… in their campaign event (a Nostr addressable event, kind 33863), and that's it.

The cost: the same sp1q… is shared across all of a single activist's silent-payment campaigns. Agora can't tell, from the silent-payment side alone, which campaign a given donation was intended for. The comparison:

Approach	Donor privacy	Server?	Per-campaign totals?
Single shared on-chain address per campaign	Weak (donors cluster)	No	Yes
Server-coordinated fresh address per donor	Strong on-chain	Yes (central failure point)	Yes
Static sp1q… per user (Agora SP mode)	Maximal (every output unlinkable)	No	No (by design)
Fresh BIP-86 leaf per public campaign (Agora public mode)	Donors cluster, per-campaign	No	Yes

This is also why silent-payment donation counts aren't public: the property that makes the donations unlinkable also makes a public progress bar impossible. Activists pick one. Most accept both, and the donation page produces a single BIP-21 URI (bitcoin:bc1p…?sp=sp1q…) so BIP-352-aware wallets take the private endpoint and everything else falls back to on-chain.


# What's next 

## Verification System for Campaigns
Anyone can create a campaign on Agora. That's intentional: no central authority decides who gets to ask for help. But donors, especially institutional ones, reasonably want to know a campaign is who it claims to be.

We're building a verification model where signals come from trusted civil-society institutions (HRF, the World Liberty Congress, regional coalitions) rather than from corporate identity providers, and can be revoked when circumstances change. Verification is a confidence signal, not a permission gate. If verification breaks, campaigns keep running.


## Local Pilot Coalitions

We are developing on three coaltions to battle-test Agora's central promises and tradeoffs in high-impact communities. 

1. World Liberty Congress members
We are already working closely with Leo and other members of the WLC to pilot Agora in their key countries such as Venezuela, Cambodia, Uganda, Zimbabwe, and Nicaragua. We are planning to host onboarding training and research gathering sessions with leads of these movements.


2. Palestine aid coalition 
Our next major pilot is with a coalition of Palestinian activists, one of the hardest fundraising environments in the world. We're working building a team of on-the-ground experts from organizations such as Realign for Palestine and Opperation Olive Branch to develop a full model covering onboarding, operational safety, off-ramping, and verification. This pilot, especially, will help inform if our current privacy options are sufficient with additional protection layers such as multi-sig being considered and tested.

3. African women's sovereigty coalition 
Thanks to the contacts we have developed through Hack4Freedom and the Human Rights Foundation, we plan to collaborate with multiple organizations in Africa dedicated to women's financial empowerment and sovierghty. We will be traveling to Nairobi next week with multiple meetings schedule to advance these conversations. 


## Marketing and Funding Partnerships with Bitcoin Businesses

Agora's natural funding base is the Bitcoin community. We're talking to companies and foundations that have been waiting for credible applications that actually exercise Bitcoin's censorship-resistance properties and who wish to add a charitable element to thier business model. If you are one such business, please get in touch with us!

In the long run, we hope that Agora can also be a mainstream use case for Bitcoin adoption to help everyday people understand the freedom that Bitcoin can bring to the world. 


