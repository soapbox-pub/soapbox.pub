import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';
import { useAuthor } from '@/hooks/useAuthor';
import {
  useShakespeareFeed,
  useCommunityEvents,
  extractCalendarEventData,
  formatEventDate,
  getTimeAgo,
  genUserName,
} from '@/hooks/useCommunity';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Sparkles,
  MessageCircle,
  Calendar,
  Award,
  MapPin,
  ArrowRight,
  ExternalLink,
  Hash,
  Megaphone,
  MessageSquare,
  GitBranch,
  Lightbulb,
  Image,
  LifeBuoy,
  Users,
  Video,
  BookOpen,
} from 'lucide-react';
import type { NostrEvent } from '@nostrify/nostrify';
import { nip19 } from 'nostr-tools';

// Stock images for cards
const STOCK_IMAGES = {
  chat: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
  events: '/assets/blog/shakespeare-workshop-guide/derek-shakespeare-workshop.jpeg',
  ambassador: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80',
  workshop: '/assets/press/satsconf-brazil-2025/alex-workshop.jpeg',
};

export default function ShakespeareCommunity() {
  useSEO({
    title: 'Shakespeare Community | Soapbox',
    description: 'Join the Shakespeare community. Connect with builders, attend events, get help with your projects, and become an ambassador.',
    type: 'website',
    keywords: 'shakespeare community, shakespearediy, ai website builder community, nostr, workshops, events',
    image: '/assets/blog/shakespeare-workshop-guide/derek-shakespeare-workshop.jpeg',
  });

  // Fetch community data
  const { data: feedPosts, isLoading: feedLoading } = useShakespeareFeed(6);
  const { data: events, isLoading: eventsLoading } = useCommunityEvents(4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-purple-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-800">
              Community
            </Badge>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white">
              <span className="text-purple-600 dark:text-purple-400">Shakespeare</span> Community
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect with builders, get help with your projects, and be part of the future of AI-powered web development.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <a href="https://app.flotilla.social/join?r=chat.shakespeare.diy&c=725J9PH4" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join Shakespeare Chat
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#events">
                  <Calendar className="h-4 w-4 mr-2" />
                  Browse Events
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section id="community" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
              <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white">
                How to Get Involved
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Join the Shakespeare community and connect with builders worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Join Community Online */}
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow flex flex-col dark:bg-gray-800 dark:border-gray-700">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={STOCK_IMAGES.chat}
                  alt="Community chat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="flex-1">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-2">
                  <MessageCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="dark:text-white">Join Community Online</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Chat with other Shakespeare builders, get help with your projects, and share what you're creating.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="outline" className="w-full dark:border-gray-600">
                  <a href="https://app.flotilla.social/join?r=chat.shakespeare.diy&c=725J9PH4" target="_blank" rel="noopener noreferrer">
                    Join Shakespeare Chat
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Connect IRL */}
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow flex flex-col dark:bg-gray-800 dark:border-gray-700">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={STOCK_IMAGES.events}
                  alt="Community events"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="flex-1">
                <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center mb-2">
                  <MapPin className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="dark:text-white">Connect IRL</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Attend conferences, workshops, and meetups. Learn from experts and network with fellow builders.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="outline" className="w-full dark:border-gray-600">
                  <a href="#events">
                    View Events
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Become an Ambassador */}
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow flex flex-col dark:bg-gray-800 dark:border-gray-700">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={STOCK_IMAGES.ambassador}
                  alt="Ambassador program"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: '50% 60%' }}
                />
              </div>
              <CardHeader className="flex-1">
                <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mb-2">
                  <Award className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <CardTitle className="dark:text-white">Become an Ambassador</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Host workshops in your city, teach others to build with Shakespeare, and earn recognition.
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="outline" className="w-full dark:border-gray-600">
                  <a href="#ambassador">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* #ShakespeareDIY Feed Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Sparkles className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                #ShakespeareDIY Feed
              </h2>
              <p className="text-gray-600 dark:text-gray-400">See what the community is building</p>
            </div>
            <Badge variant="outline" className="w-fit border-purple-200 text-purple-700 dark:border-purple-700 dark:text-purple-300">
              Live from Nostr
            </Badge>
          </div>

          {feedLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
                      <div className="flex-1 min-w-0 space-y-2">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-16 w-full" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : feedPosts && feedPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {feedPosts.map((post) => (
                <FeedPost key={post.id} event={post} />
              ))}
            </div>
          ) : (
            <Card className="border-dashed dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="py-12 text-center">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-gray-400 dark:text-gray-600" />
                <p className="text-gray-600 dark:text-gray-400">
                  No posts yet. Be the first to share with #ShakespeareDIY on Nostr!
                </p>
              </CardContent>
            </Card>
          )}

          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Post on Nostr with <code className="bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded text-purple-700 dark:text-purple-300">#ShakespeareDIY</code> to appear in the feed
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white">
                Upcoming Events
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Conferences, workshops, and meetups
            </p>
          </div>

          {eventsLoading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {Array.from({ length: 2 }).map((_, i) => (
                <Card key={i} className="dark:bg-gray-800 dark:border-gray-700">
                  <CardContent className="pt-4">
                    <Skeleton className="h-32 w-full rounded-lg mb-4" />
                    <Skeleton className="h-6 w-48 mb-2" />
                    <Skeleton className="h-4 w-32" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : events && events.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <Card className="border-dashed dark:bg-gray-800 dark:border-gray-700">
              <CardContent className="py-12 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-400 dark:text-gray-600" />
                <p className="text-gray-600 dark:text-gray-400">
                  No upcoming events at the moment. Check back soon!
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Ambassador Program Section */}
      <section id="ambassador" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 border-purple-200 dark:border-purple-700">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl dark:text-white">Shakespeare Ambassador Program</CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Become a community leader by hosting workshops in your city. Teach others how to build with Shakespeare
                  and help grow the community.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                    Host local workshops and meetups
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                    Get exclusive access to new features
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                    Earn free credits for teaching
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                    Be recognized in the community
                  </li>
                </ul>
                <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <a href="https://app.flotilla.social/join?r=chat.shakespeare.diy&c=725J9PH4" target="_blank" rel="noopener noreferrer">
                    Apply to Become an Ambassador
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden dark:bg-gray-800 dark:border-gray-700">
              <div className="aspect-video overflow-hidden">
                <img
                  src={STOCK_IMAGES.workshop}
                  alt="Workshop"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 10%' }}
                />
              </div>
              <CardHeader>
                <CardTitle className="dark:text-white">Host a Workshop</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Already know Shakespeare well? Host a workshop in your area and teach others how to build amazing
                  websites with AI.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full dark:border-gray-600">
                  <a href="/blog/shakespeare-workshop-guide">
                    View Workshop Guide
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chat Channels Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Hash className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
              <h2 className="text-4xl font-display font-bold text-gray-900 dark:text-white">
                Chat Channels
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore the different channels in Shakespeare Chat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <Card className="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Megaphone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-base dark:text-white">#announcements</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Official updates about Shakespeare features, releases, and important news from the team.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-base dark:text-white">#feedback</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Share your ideas, suggestions, and feedback to help improve Shakespeare.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <GitBranch className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-base dark:text-white">#git</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Follow along with the latest commits and development activity on Shakespeare.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                    <Lightbulb className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <CardTitle className="text-base dark:text-white">#prompts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Share and discover effective prompts for building better projects with AI.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-900 flex items-center justify-center">
                    <Image className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                  </div>
                  <CardTitle className="text-base dark:text-white">#showcase</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Show off your Shakespeare creations and get inspired by what others have built.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900 flex items-center justify-center">
                    <LifeBuoy className="h-4 w-4 text-red-600 dark:text-red-400" />
                  </div>
                  <CardTitle className="text-base dark:text-white">#support</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Get help from the community when you're stuck or have questions about using Shakespeare.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <a href="https://app.flotilla.social/join?r=chat.shakespeare.diy&c=725J9PH4" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                Join Shakespeare Chat
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Resources CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-950">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white">
              Looking for Guides & Tutorials?
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Visit the Shakespeare Resource Center for FAQs, video tutorials, and step-by-step guides.
          </p>
          <Button asChild size="lg" variant="outline" className="dark:border-gray-600">
            <a href="/shakespeare-resources">
              <BookOpen className="h-4 w-4 mr-2" />
              Visit Resource Center
              <ArrowRight className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Feed Post Component
function FeedPost({ event }: { event: NostrEvent }) {
  const { data: author } = useAuthor(event.pubkey);
  const displayName = author?.metadata?.name || genUserName(event.pubkey);
  const picture = author?.metadata?.picture;
  const timeAgo = getTimeAgo(event.created_at);
  const nevent = nip19.neventEncode({ id: event.id, author: event.pubkey });
  const njumpUrl = `https://njump.me/${nevent}`;

  // Simple content rendering - strip URLs and hashtags for preview
  const content = event.content
    .replace(/https?:\/\/\S+/g, '')
    .replace(/#\w+/g, '')
    .trim()
    .slice(0, 200);

  return (
    <a href={njumpUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card className="hover:shadow-md transition-shadow cursor-pointer h-full dark:bg-gray-800 dark:border-gray-700">
        <CardContent className="pt-4 h-full">
          <div className="flex items-start gap-3 h-full">
            <Avatar className="h-10 w-10 flex-shrink-0">
              <AvatarImage src={picture} alt={displayName} />
              <AvatarFallback className="dark:bg-gray-700 dark:text-gray-300">
                {displayName.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-sm truncate dark:text-white">{displayName}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{timeAgo}</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-4">
                {content || 'View post...'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

// Helper to check if a string is a URL
function isUrl(str: string): boolean {
  try {
    const url = new URL(str);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

// Event Card Component
function EventCard({ event }: { event: NostrEvent }) {
  const eventData = extractCalendarEventData(event);
  const formattedDate = formatEventDate(eventData.start, eventData.kind, eventData.startTzid);
  const isVirtual = eventData.location && isUrl(eventData.location);

  // Generate naddr for addressable events
  const dTag = event.tags.find(([name]) => name === 'd')?.[1] || '';
  const naddr = nip19.naddrEncode({
    kind: event.kind,
    pubkey: event.pubkey,
    identifier: dTag,
  });
  const plektosUrl = `https://plektos.app/event/${naddr}`;

  return (
    <a href={plektosUrl} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="hover:shadow-md transition-shadow overflow-hidden dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
        {eventData.image && (
          <div className="aspect-video overflow-hidden">
            <img
              src={eventData.image}
              alt={eventData.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <CardTitle className="text-lg dark:text-white">{eventData.title}</CardTitle>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
                <Calendar className="h-4 w-4 flex-shrink-0" />
                <span>{formattedDate}</span>
              </div>
              {eventData.location && (
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-600 dark:text-gray-400">
                  {isVirtual ? (
                    <Video className="h-4 w-4 flex-shrink-0" />
                  ) : (
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                  )}
                  <span className="truncate">
                    {isVirtual ? 'Virtual Event' : eventData.location}
                  </span>
                </div>
              )}
            </div>
          </div>
          {eventData.summary && (
            <CardDescription className="mt-2 line-clamp-2 dark:text-gray-400">
              {eventData.summary}
            </CardDescription>
          )}
        </CardHeader>
      </Card>
    </a>
  );
}
