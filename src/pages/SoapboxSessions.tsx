import { useState } from "react";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mic, Send, ExternalLink, Youtube, Rss, Music, LogIn, UserPlus } from "lucide-react";
import { useNostr } from "@nostrify/react";
import { useNostrLogin } from "@nostrify/react/login";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useToast } from "@/hooks/useToast";
import { nip19, nip17 } from "nostr-tools";
import LoginDialog from "@/components/auth/LoginDialog";
import SignupDialog from "@/components/auth/SignupDialog";

export default function SoapboxSessions() {
  // Set custom SEO for Soapbox Sessions page
  useSEO({
    title: 'Soapbox Sessions - Weekly Podcast on Nostr, AI & Decentralized Web',
    description: 'Join Derek Ross and Heather Larson for weekly insights on Nostr, AI, and the tools building the decentralized future. Listen on Podstr, Spotify, Apple Podcasts, or watch on YouTube.',
    image: '/assets/blog/announcing-soapbox-sessions-podcast/podcast-cover.png',
    type: 'website',
    keywords: 'soapbox sessions, nostr podcast, decentralized web, AI development, derek ross, heather larson, podstr, podcasting 2.0',
  });

  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showSignupDialog, setShowSignupDialog] = useState(false);
  const { nostr } = useNostr();
  const { logins } = useNostrLogin();
  const { user } = useCurrentUser();
  const { toast } = useToast();

  const soapboxSessionsNpub = "npub1xxzpxp4xvueh8836reda2jyx674tuwvtla927837nuarqh375kqsw4dm62";

  // Decode the npub to get the hex pubkey
  const getSoapboxSessionsPubkey = () => {
    try {
      console.log("🔍 Decoding npub:", soapboxSessionsNpub);
      const decoded = nip19.decode(soapboxSessionsNpub);
      console.log("🔍 Decoded result:", decoded);

      if (decoded.type === 'npub') {
        const hexPubkey = decoded.data as string;
        console.log("✅ Hex pubkey:", hexPubkey);
        return hexPubkey;
      } else {
        console.error("❌ Decoded type is not npub:", decoded.type);
      }
    } catch (error) {
      console.error("❌ Failed to decode npub:", error);
    }
    return "";
  };

  const handleSubmitTip = async () => {
    if (!user) {
      setShowLoginDialog(true);
      return;
    }

    if (!message.trim()) {
      toast({
        title: "Message Required",
        description: "Please enter a tip or question.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log("🚀 Starting message submission...");

    try {
      const recipientPubkey = getSoapboxSessionsPubkey();
      console.log("📧 Recipient pubkey:", recipientPubkey);

      if (!recipientPubkey) {
        throw new Error("Invalid recipient pubkey");
      }

      // Get the current login to access private key
      const currentLogin = logins[0];
      console.log("🔑 Current login:", currentLogin?.type, currentLogin?.pubkey);

      if (!currentLogin) {
        throw new Error("No login found");
      }

      // Create the message content
      const fullMessage = subject
        ? `Subject: ${subject}\n\n${message}`
        : message;

      console.log("📝 Message content length:", fullMessage.length);

      let eventToPublish;

      // Handle different login types
      if (currentLogin.type === 'nsec') {
        console.log("🔐 Using nsec login - attempting NIP-17 encryption");
        try {
          const nsecKey = (currentLogin.data as { nsec: string }).nsec;
          console.log("🔑 Nsec key starts with:", nsecKey.substring(0, 10));

          const decoded = nip19.decode(nsecKey);
          console.log("🔓 Decoded type:", decoded.type);

          const privateKeyBytes = decoded.data as Uint8Array;
          console.log("🔑 Private key bytes length:", privateKeyBytes.length);

          // Create NIP-17 DM using gift wrap
          eventToPublish = nip17.wrapEvent(
            privateKeyBytes,
            {
              publicKey: recipientPubkey,
            },
            fullMessage
          );

          console.log("📦 Gift wrap event created:", eventToPublish.kind, eventToPublish.id);
        } catch (nip17Error) {
          console.error("❌ NIP-17 encryption failed, falling back to kind 4:", nip17Error);
          // Fall back to kind 4 if NIP-17 fails
          eventToPublish = await user.signer.signEvent({
            kind: 4,
            content: fullMessage,
            tags: [["p", recipientPubkey]],
            created_at: Math.floor(Date.now() / 1000),
          });
        }
      } else {
        console.log("🔐 Using extension/bunker login - using kind 4 DM");
        // For extension and bunker logins, use kind 4 DM
        eventToPublish = await user.signer.signEvent({
          kind: 4,
          content: fullMessage,
          tags: [["p", recipientPubkey]],
          created_at: Math.floor(Date.now() / 1000),
        });
      }

      console.log("📤 Publishing event:", eventToPublish);
      console.log("📡 Event details:", {
        kind: eventToPublish.kind,
        id: eventToPublish.id,
        pubkey: eventToPublish.pubkey,
        tags: eventToPublish.tags,
        contentLength: eventToPublish.content.length
      });

      // Publish the event
      const publishResult = await nostr.event(eventToPublish, { signal: AbortSignal.timeout(10000) });
      console.log("✅ Publish result:", publishResult);

      toast({
        title: "Message Sent!",
        description: "Your message has been sent to the Soapbox Sessions team!",
      });

      setMessage("");
      setSubject("");
    } catch (error) {
      console.error("❌ Failed to send message:", error);
      console.error("❌ Error details:", {
        message: error.message,
        stack: error.stack,
        name: error.name
      });

      toast({
        title: "Failed to Send",
        description: `Error: ${error.message}. Check console for details.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      console.log("🏁 Message submission finished");
    }
  };

  const handleLogin = () => {
    setShowLoginDialog(false);
    toast({
      title: "Logged In",
      description: "You can now send tips and questions!",
    });
  };

  const handleSignup = () => {
    setShowLoginDialog(false);
    setShowSignupDialog(true);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Mic className="h-16 w-16 text-blue-600 mr-4" />
              <h1 className="font-display text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Soapbox Sessions
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your weekly home for the ever-changing decentralized web. Join Derek and Heather as they explore
              Nostr, AI, and the tools building the future of the internet.
            </p>
          </div>

          {/* Teaser Video */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-center">Watch the Teaser</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/56NebbzJVjw?si=GEeJlrdcA4AJ9jJK"
                    title="Soapbox Sessions Teaser"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* About the Hosts */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Meet Your Hosts</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src="/assets/avatars/derek.jpg"
                      alt="Derek Ross"
                      className="w-16 h-16 rounded-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://api.dicebear.com/7.x/initials/svg?seed=Derek Ross`;
                      }}
                    />
                    <div>
                      <CardTitle>Derek Ross</CardTitle>
                      <CardDescription>Developer Relations</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Derek is Soapbox's Developer Relations lead and a long-time Nostr advocate. He's been in the
                    Nostr space since before it was cool, attending conferences, "purple pilling" members of
                    parliament, and building community platforms. Derek brings the technical perspective to
                    Soapbox Sessions, helping navigate the worlds of Nostr and AI development.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img
                      src="/assets/avatars/heather.jpg"
                      alt="Heather Larson"
                      className="w-16 h-16 rounded-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://api.dicebear.com/7.x/initials/svg?seed=Heather Larson`;
                      }}
                    />
                    <div>
                      <CardTitle>Heather Larson</CardTitle>
                      <CardDescription>Marketing Director</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Heather is Soapbox's Marketing Director and champions the no-code future. She brings a
                    non-developer perspective to the show, demonstrating how tools like Shakespeare make
                    building websites and apps accessible to everyone. Heather helps organize events, from
                    Austin conferences to independent music shows at iconic venues.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Submit Tip/Question */}
          <div className="mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="h-5 w-5 mr-2" />
                  Send a Tip or Question
                </CardTitle>
                <CardDescription>
                  Have a tip for the show or a question for Derek and Heather? Send them a direct message via Nostr.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {user ? (
                  <>
                    <div>
                      <Label htmlFor="subject">Subject (Optional)</Label>
                      <Input
                        id="subject"
                        placeholder="Topic or question subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Your Tip or Question</Label>
                      <Textarea
                        id="message"
                        placeholder="Share your tip, ask a question, or suggest a topic..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                      />
                    </div>
                    <Button
                      onClick={handleSubmitTip}
                      disabled={isSubmitting || !message.trim()}
                      className="w-full"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      {isSubmitting ? "Sending..." : "Send Private Message"}
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Your message will be sent privately{logins[0]?.type === 'nsec' ? ' using NIP-17 encryption' : ' with standard encryption'}
                    </p>
                  </>
                ) : (
                  <div className="text-center space-y-4">
                    <p className="text-gray-600 dark:text-gray-300">
                      To send a tip or question, you need a Nostr account
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={() => setShowLoginDialog(true)}
                        variant="outline"
                        className="flex-1"
                      >
                        <LogIn className="h-4 w-4 mr-2" />
                        Log In
                      </Button>
                      <Button
                        onClick={() => setShowSignupDialog(true)}
                        className="flex-1"
                      >
                        <UserPlus className="h-4 w-4 mr-2" />
                        Create Account
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500">
                      Nostr accounts are decentralized and give you full control of your data
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Podstr Section */}
          <div className="mb-16">
            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
              <CardHeader>
                <CardTitle className="text-2xl">Built with Soapbox Tools: Podstr</CardTitle>
                <CardDescription>
                  We practice what we preach! Soapbox Sessions is hosted on Podstr, a decentralized podcast
                  platform built with MKStack.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">What is Podstr?</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Podstr is a decentralized podcast platform built using MKStack, demonstrating how
                      powerful Nostr applications can be created with AI-first development. It features
                      Podcasting 2.0 technology including wallet splits and value time splits.
                    </p>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full" asChild>
                        <a href="https://podstr.org/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Visit Podstr.org
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="https://sessions.soapbox.pub/" target="_blank" rel="noopener noreferrer">
                          <Mic className="h-4 w-4 mr-2" />
                          Soapbox Sessions on Podstr
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Podcasting 2.0 Features</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li>• Self-hosted and decentralized</li>
                      <li>• Wallet splits for value distribution</li>
                      <li>• Value time splits for contributors</li>
                      <li>• Direct listener support</li>
                      <li>• No platform lock-in</li>
                      <li>• Built by non-developers using MKStack</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Listen Links */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold text-center mb-8">Where to Listen</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Rss className="h-5 w-5 mr-2 text-orange-500" />
                    RSS Feed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Subscribe directly with your favorite podcast app
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://sessions.soapbox.pub/rss.xml" target="_blank" rel="noopener noreferrer">
                      <Rss className="h-4 w-4 mr-2" />
                      RSS Feed
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Music className="h-5 w-5 mr-2 text-green-500" />
                    Spotify
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Listen on Spotify with your existing account
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://open.spotify.com/show/1uBFCX46GH0npKB46stxAO?si=3af5295a4f9a472a" target="_blank" rel="noopener noreferrer">
                      <Music className="h-4 w-4 mr-2" />
                      Open in Spotify
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Music className="h-5 w-5 mr-2 text-gray-500" />
                    Apple Podcasts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Listen on Apple Podcasts for iOS and Mac
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://podcasts.apple.com/us/podcast/soapbox-sessions/id1837576097" target="_blank" rel="noopener noreferrer">
                      <Music className="h-4 w-4 mr-2" />
                      Open in Apple Podcasts
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* YouTube Section */}
          <div className="text-center">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-center">
                  <Youtube className="h-6 w-6 mr-2 text-red-500" />
                  Watch on YouTube
                </CardTitle>
                <CardDescription>
                  Prefer video? Catch the full episodes on our YouTube channel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" asChild>
                  <a href="https://www.youtube.com/@SoapboxTechnology" target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-5 w-5 mr-2" />
                    Subscribe on YouTube
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Login Dialog */}
      <LoginDialog
        isOpen={showLoginDialog}
        onClose={() => setShowLoginDialog(false)}
        onLogin={handleLogin}
        onSignup={handleSignup}
      />

      {/* Signup Dialog */}
      <SignupDialog
        isOpen={showSignupDialog}
        onClose={() => setShowSignupDialog(false)}
      />
    </Layout>
  );
}