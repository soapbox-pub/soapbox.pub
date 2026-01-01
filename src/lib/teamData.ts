import { nip19 } from 'nostr-tools';

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  follow: string;
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
    name: "Heather Larson",
    role: "Marketing Director",
    bio: "Tech Marketing | Bitcoin & Nostr Community Growth | Broadcast Media Veteran | *I've probably ghostwritten something you read online*",
    avatar: "/assets/avatars/heather.jpg",
    follow: "https://ditto.pub/@heather@nostrplebs.com",
    npub: "npub1nl8r463jkdtr0qu0k3dht03jt9t59cttk0j8gtxg9wea2russlnq2zf9d0"
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
    name: "Patrick dos Reis",
    role: "Developer",
    bio: "Patrick is interested in being a masterful interpreter of the Light.",
    avatar: "/assets/avatars/patrick.png",
    follow: "https://ditto.pub/@patrick@patrickdosreis.com",
    npub: "npub1gujeqakgt7fyp6zjggxhyy7ft623qtcaay5lkc8n8gkry4cvnrzqd3f67z"
  },
  {
    name: "shantaram",
    role: "Software Engineer",
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
    name: "Chad Curtis",
    role: "Developer",
    bio: "Chad is hobbyist who enjoys creating open source solutions for everyone. He also enjoys creating art, tinkering with GNU/Linux, and playing Magic: The Gathering",
    avatar: "/assets/avatars/chad.jpeg",
    follow: "https://ditto.pub/@chad@chadwick.site",
    npub: "npub1scvyzz02ayma34hesz62pdrd5nhsmxp74hjq8msmfs9khh3r3drsnw68d8"
  },
  {
    name: "Ana Domingos",
    role: "Marketing Coordinator",
    bio: "Educator & Creative Marketer | Published Author | Digital Content & Social Media Specialist",
    avatar: "/assets/avatars/farfallica.jpg",
    follow: "https://ditto.pub/@farfallica@nostrplebs.com",
    npub: "npub1erhg86xl307d46pla66aycr6sjpy9esnrffysr98l5pjvt2fdgeq8wru26"
  },
  {
    name: "Sep",
    role: "Developer",
    bio: "Humble Other Stuff Builder",
    avatar: "/assets/avatars/sep.jpeg",
    follow: "https://ditto.pub/@pinja.in",
    npub: "npub18c556t7n8xa3df2q82rwxejfglw5przds7sqvefylzjh8tjne28qld0we7"
  },
  {
    name: "Lemon",
    role: "Developer",
    bio: "Supporting the transition from an experimental protocol to a widely adopted, sustainable ecosystem through a focus on 5 key pillars.",
    avatar: "/assets/avatars/lemon.png",
    follow: "https://ditto.pub/@lemon@gifbuddy.lol",
    npub: "npub1hee433872q2gen90cqh2ypwcq9z7y5ugn23etrd2l2rrwpruss8qwmrsv6"
  }
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