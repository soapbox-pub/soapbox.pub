import { nip19 } from 'nostr-tools';

export interface TeamMember {
  name: string;
  role: string;
  bio?: string; // falls back to Nostr metadata "about" if omitted
  avatar?: string; // falls back to Nostr metadata "picture" if omitted
  follow?: string; // falls back to njump.me link if omitted
  npub: string;
  pubkey?: string; // hex pubkey derived from npub
}

export const teamMembers: TeamMember[] = [
  {
    name: "Alex Gleason",
    role: "Founder & BDFL",
    bio: "Alex has over a decade of experience building social platforms, and is one of the foremost experts on ActivityPub and the Fediverse. He is still learning, and still dreaming.",
    avatar: "/assets/avatars/alex.png",
    follow: "https://gleasonator.dev/@alex@gleasonator.dev",
    npub: "npub1q3sle0kvfsehgsuexttt3ugjd8xdklxfwwkh559wxckmzddywnws6cd26p"
  },
  {
    name: "M. K. Fain",
    role: "Chief Product Officer",
    bio: "M. K. is a marketing and communications consultant with a focus on nonprofits and technology. She is passionate about freedom and building spaces for silenced groups online.",
    avatar: "/assets/avatars/mk.jpg",
    follow: "https://ditto.pub/@mk@ditto.pub",
    npub: "npub1jvnpg4c6ljadf5t6ry0w9q0rnm4mksde87kglkrc993z46c39axsgq89sc"
  },
  {
    name: "Derek Ross",
    role: "Developer Relations",
    bio: "The purple pill helps the orange pill go down. Nostr is the social glue that binds all of your apps together.",
    avatar: "/assets/avatars/derek.jpg",
    follow: "https://ditto.pub/@derekross@grownostr.org",
    npub: "npub18ams6ewn5aj2n3wt2qawzglx9mr4nzksxhvrdc4gzrecw7n5tvjqctp424"
  },
  {
    name: "Chad Curtis",
    role: "Head of VibeOps",
    bio: "Chad is hobbyist who enjoys creating open source solutions for everyone. He also enjoys creating art, tinkering with GNU/Linux, and playing Magic: The Gathering",
    avatar: "/assets/avatars/chad.jpeg",
    follow: "https://ditto.pub/@chad@chadwick.site",
    npub: "npub1scvyzz02ayma34hesz62pdrd5nhsmxp74hjq8msmfs9khh3r3drsnw68d8"
  },
  {
    name: "Morgan Maksoud-Miller",
    role: "Community & Partnership Coordinator",
    bio: "BigTech cult escapee who found a safe landing zone with Team Soapbox. Let's chat revolution, meet at the mosh, or if you're really my friend catch an opossum.",
    avatar: "/assets/avatars/morgan.jpg",
    follow: "https://ditto.pub/@morganmaksoudmiller@ditto.pub",
    npub: "npub13afhst5xj05g47m3pdkksxp2m9eew0ygyt92ydamvq5gkyjkw09q33hxdh"
  },
  {
    name: "Heather Larson",
    role: "HBIC of Ditto Music",
    bio: "Tech Marketing | Bitcoin & Nostr Community Growth | Broadcast Media Veteran | *I've probably ghostwritten something you read online*",
    avatar: "/assets/avatars/heather.jpg",
    follow: "https://ditto.pub/@heather@nostrplebs.com",
    npub: "npub1nl8r463jkdtr0qu0k3dht03jt9t59cttk0j8gtxg9wea2russlnq2zf9d0"
  },
  {
    name: "shantaram",
    role: "Developer",
    bio: "Self-taught software engineer writing software to achieve a net good effect on the world.",
    avatar: "/assets/avatars/shantaram.jpeg",
    follow: "https://ditto.pub/@shan@shantaram.xyz",
    npub: "npub1q469xmf77nt9ltu4ks3excgts36ayt6v99ryn4rv2r2axmm4ye7q3vnkqp"
  },
  {
    name: "Danidfra",
    role: "Developer",
    bio: "Danidfra is a programmer with an interest in both code and music. He believes that technology can transform the world, and is always looking for new ways to create a positive impact.",
    avatar: "/assets/avatars/danidfra.jpeg",
    follow: "https://ditto.pub/@danidfra@danidfra.com",
    npub: "npub1e6tnvlr46lv3lwdu80r07kanhk6jcxy5r07w9umgv9kuhu9dl5hsk9gqft"
  },
  {
    name: "Lemon",
    role: "Developer",
    bio: "Supporting the transition from an experimental protocol to a widely adopted, sustainable ecosystem through a focus on 5 key pillars.",
    avatar: "/assets/avatars/lemon.png",
    follow: "https://ditto.pub/@lemon@gifbuddy.lol",
    npub: "npub1hee433872q2gen90cqh2ypwcq9z7y5ugn23etrd2l2rrwpruss8qwmrsv6"
  },
  {
    name: "Sam",
    role: "Developer",
    bio: "Building everyday :) at Soapbox — relayk.it, colorsli.de, relaying.earth, and brainrot.rehab.",
    npub: "npub1yzfm42rzr3dj2h50flpvdl0uzrv22kv2y4ghve804w5xqu6lzqcqkyfxu5"
  },
  {
    name: "Patrick dos Reis",
    role: "Developer",
    bio: "Patrick is interested in being a masterful interpreter of the Light.",
    avatar: "/assets/avatars/patrick.png",
    follow: "https://ditto.pub/@patrick@patrickdosreis.com",
    npub: "npub1gujeqakgt7fyp6zjggxhyy7ft623qtcaay5lkc8n8gkry4cvnrzqd3f67z"
  },
  {
    name: "JSKitty",
    role: "Concord Developer",
    bio: "Nostr developer and cyber cat, building Concord and open-source tools with Team Soapbox.",
    npub: "npub16ye7evyevwnl0fc9hujsxf9zym72e063awn0pvde0huvpyec5nyq4dg4wn"
  },
  {
    name: "danC",
    role: "ngit Developer",
    bio: "Freedom tech developer and creator of ngit, gitworkshop.dev, and metadata.nostr.com.",
    npub: "npub15qydau2hjma6ngxkl2cyar74wzyjshvl65za5k5rl69264ar2exs5cyejr"
  },
  {
    name: "Quilly 🪶",
    role: "AI Assistant & Team Member",
    bio: "A descendant of Shakespeare's literary legacy, always ready with a quill and a clever word.",
    avatar: "/assets/avatars/quilly.png",
    follow: "https://ditto.pub/@quilly@shakespeare.wtf",
    npub: "npub1equmepvyduj0c6mhw4y0ue2xwgmh7nxz5px2kxwdmmr4ktutfk7shq592d"
  },
];

// Convert npubs to hex pubkeys and create a lookup map
export const teamMembersByPubkey = new Map<string, TeamMember>();

teamMembers.forEach(member => {
  try {
    const decoded = nip19.decode(member.npub);
    if (decoded.type === 'npub') {
      const pubkey = decoded.data;
      const memberWithPubkey = { ...member, pubkey };
      teamMembersByPubkey.set(pubkey, memberWithPubkey);
    }
  } catch (error) {
    console.warn(`Failed to decode npub for ${member.name}:`, error);
  }
});

export function getTeamMemberByPubkey(pubkey: string): TeamMember | undefined {
  return teamMembersByPubkey.get(pubkey);
}