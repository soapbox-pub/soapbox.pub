import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Code, Skull, Ghost, Candy } from 'lucide-react';
import { HalloweenSubmissionForm } from '@/components/HalloweenSubmissionForm';
import { AppShowcaseCard } from '@/components/AppShowcaseCard';
import { useHalloweenSubmissions, useHalloweenSubmissionsWithContacts, type HalloweenSubmission } from '@/hooks/useHalloweenSubmissions';
import type { AppSubmission } from '@/hooks/useAppSubmissions';
import { Layout } from '@/components/Layout';
import { SEO } from '@/components/SEO';

export default function HalloweenHackathon() {
  const { data: submissions, isLoading: isLoadingSubmissions } = useHalloweenSubmissions();
  const { data: submissionsWithContacts, isModerator } = useHalloweenSubmissionsWithContacts();

  // Function to scroll to submissions section after successful submission
  const scrollToSubmissions = () => {
    const submissionsSection = document.getElementById('submissions-section');
    if (submissionsSection) {
      submissionsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Convert Halloween submissions to AppSubmission format
  const convertToAppSubmission = (submission: HalloweenSubmission): AppSubmission => ({
    ...submission,
    isFeatured: submission.isWinner, // Winners are considered "featured"
    isHomepage: false, // Halloween apps don't appear on homepage
  });

  // Filter submissions for display - show ALL submissions by default, only filter out hidden ones
  const visibleSubmissions = submissions?.filter(s => !s.isHidden) || [];
  const winnerSubmissions = visibleSubmissions.filter(s => s.isWinner).map(convertToAppSubmission);
  const regularSubmissions = visibleSubmissions.filter(s => !s.isWinner).map(convertToAppSubmission);

  // Moderator view: only show hidden Halloween apps (for management purposes)
  const hiddenSubmissions = isModerator ? submissionsWithContacts?.filter(s => s.isHidden).map(convertToAppSubmission) || [] : [];

  return (
    <Layout>
      <SEO
        title="Halloween Hackathon 2025 - Soapbox"
        description="Build spooky apps with Shakespeare and win 87k sats per category in our Halloween theme challenge!"
        keywords="Halloween, hackathon, Shakespeare, Soapbox, coding contest, Bitcoin, Lightning"
        image="/assets/halloween/Halloween-cover.png"
      />

      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://gardenerspath.com/wp-content/uploads/2025/09/Spooky-Plants-for-Halloween-Feature.jpg')`
        }}
      >
        {/* Animated Halloween Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-4xl animate-bounce opacity-30">🎃</div>
          <div className="absolute top-32 right-20 text-3xl animate-pulse opacity-30">👻</div>
          <div className="absolute bottom-40 left-20 text-4xl animate-bounce delay-1000 opacity-30">🦇</div>
          <div className="absolute bottom-20 right-10 text-3xl animate-pulse delay-500 opacity-30">💀</div>
          <div className="absolute top-1/2 left-1/4 text-3xl animate-bounce delay-700 opacity-30">🕷️</div>
          <div className="absolute top-1/3 right-1/3 text-2xl animate-pulse delay-300 opacity-30">🕸️</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8 mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Skull className="w-12 h-12 text-orange-400" />
              <span className="bg-orange-600 text-white text-lg px-4 py-2 rounded-full font-semibold">
                Monthly Challenge
              </span>
              <Ghost className="w-12 h-12 text-purple-400" />
            </div>

            <h1 className="font-gothic text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              Halloween Hackathon
            </h1>

            <p className="text-2xl md:text-3xl font-medium text-orange-200">
              Build Spooky Apps with Shakespeare
            </p>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Create Halloween-themed applications and compete for <span className="text-orange-400 font-bold">87,000 sats each</span> across three prize categories.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-5xl mx-auto">
              <div className="text-center bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-orange-500">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-gothic text-xl text-white mb-2">Design Excellence</h3>
                <div className="text-3xl font-bold text-orange-400">87,000 sats</div>
                <p className="text-gray-300 text-sm mt-2">Most visually stunning Halloween design</p>
              </div>
              <div className="text-center bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-gothic text-xl text-white mb-2">Functional Innovation</h3>
                <div className="text-3xl font-bold text-purple-400">87,000 sats</div>
                <p className="text-gray-300 text-sm mt-2">Best technical implementation</p>
              </div>
              <div className="text-center bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-red-500">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Skull className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-gothic text-xl text-white mb-2">Judge's Choice</h3>
                <div className="text-3xl font-bold text-red-400">87,000 sats</div>
                <p className="text-gray-300 text-sm mt-2">Overall favorite</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        {/* Halloween Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Halloween elements */}
          <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-20">🎃</div>
          <div className="absolute top-20 right-20 text-5xl animate-pulse opacity-20">👻</div>
          <div className="absolute bottom-20 left-20 text-5xl animate-bounce delay-1000 opacity-20">🦇</div>
          <div className="absolute bottom-10 right-10 text-6xl animate-pulse delay-500 opacity-20">💀</div>
          <div className="absolute top-1/2 left-1/4 text-4xl animate-bounce delay-700 opacity-20">🕷️</div>
          <div className="absolute top-1/3 right-1/3 text-4xl animate-pulse delay-300 opacity-20">🕸️</div>
          <div className="absolute top-2/3 left-1/2 text-5xl animate-bounce delay-200 opacity-20">🍭</div>
          <div className="absolute top-1/4 left-3/4 text-4xl animate-pulse delay-800 opacity-20">⚰️</div>

          {/* Gradient overlays for depth */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-transparent to-transparent"></div>

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/5 via-purple-900/5 to-red-900/5"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Skull className="w-10 h-10 text-orange-400 animate-pulse hidden sm:block" />
              <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-lg px-6 py-3 rounded-full font-bold shadow-lg hidden sm:inline-block">
                🎃 Submit Your Creation 🎃
              </span>
              <Ghost className="w-10 h-10 text-purple-400 animate-pulse hidden sm:block" />
            </div>

            <h2 className="font-gothic text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              Enter the Hackathon
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to compete for <span className="text-orange-400 font-bold">87,000 sats</span> in prizes?
              Submit your spooky Shakespeare creation and it will appear in the submissions below! 👻
            </p>

            <div className="flex justify-center space-x-6 mt-8">
              <div className="flex items-center space-x-2 text-orange-300">
                <Candy className="w-5 h-5" />
                <span className="text-sm font-medium">Design Excellence</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-300">
                <Code className="w-5 h-5" />
                <span className="text-sm font-medium">Innovation</span>
              </div>
              <div className="flex items-center space-x-2 text-red-300">
                <Trophy className="w-5 h-5" />
                <span className="text-sm font-medium">Judge's Choice</span>
              </div>
            </div>
          </div>

          {/* Submission Form */}
          <div className="max-w-4xl mx-auto">
            <HalloweenSubmissionForm onSuccess={scrollToSubmissions} />
          </div>
        </div>
      </section>

      {/* Spooky Submissions Section */}
      <section id="submissions-section" className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-gothic text-4xl font-bold mb-4">
              Community Submissions 🕸️
            </h2>
          </div>

          {isLoadingSubmissions ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
              <p className="text-orange-100 mt-4">Loading spooky submissions...</p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Winners Section */}
              {winnerSubmissions.length > 0 && (
                <div className="mb-12">
                  <h3 className="font-gothic text-2xl font-bold text-center mb-8 text-yellow-300">
                    🏆 Winners! 🏆
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {winnerSubmissions.map((submission) => (
                      <AppShowcaseCard
                        key={submission.id}
                        app={submission}
                        showModerationControls={isModerator}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* All Submissions */}
              {regularSubmissions.length > 0 && (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularSubmissions.map((submission) => (
                      <AppShowcaseCard
                        key={submission.id}
                        app={submission}
                        showModerationControls={isModerator}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Empty State */}
              {visibleSubmissions.length === 0 && (
                <div className="text-center py-12 space-y-4">
                  <div className="text-6xl">🎃</div>
                  <h3 className="font-gothic text-2xl font-bold text-white">
                    No Submissions Yet!
                  </h3>
                  <p className="text-orange-100 max-w-md mx-auto">
                    Be the first to submit your spooky Shakespeare creation!
                  </p>
                </div>
              )}

              {/* Moderator View - Only show if there are hidden Halloween apps */}
              {isModerator && hiddenSubmissions.length > 0 && (
                <div className="mt-12 border-t border-orange-400 pt-12">
                  <div className="bg-red-900/30 border border-red-400 rounded-lg p-4 mb-8">
                    <h3 className="font-bold text-red-300 mb-2">🛡️ Hidden Halloween Apps ({hiddenSubmissions.length})</h3>
                    <p className="text-red-200 text-sm">
                      Halloween apps that have been hidden from public view. These can be unhidden if needed.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {hiddenSubmissions.map((submission) => (
                      <AppShowcaseCard
                        key={submission.id}
                        app={submission}
                        showModerationControls={true}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>





      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-gothic text-4xl font-bold mb-6">
            Ready to Build Something Spooky? 👻
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Join our first monthly theme challenge and show what you can create with Shakespeare!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-4"
              onClick={() => document.getElementById('submission-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Candy className="w-5 h-5 mr-2" />
              Submit Your App
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black text-lg px-8 py-4"
            >
              <Link to="/tools/shakespeare">
                Start Building with Shakespeare
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}