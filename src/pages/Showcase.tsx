import React, { useState } from "react";
import { Plus, Search, Filter, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useAppSubmissions } from "@/hooks/useAppSubmissions";
import { AppSubmissionForm } from "@/components/AppSubmissionForm";
import { AppShowcaseCard } from "@/components/AppShowcaseCard";
import LoginDialog from "@/components/auth/LoginDialog";
import SignupDialog from "@/components/auth/SignupDialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { nip19 } from 'nostr-tools';
import type { AppSubmission } from "@/hooks/useAppSubmissions";

// App submission event kind
const APP_SUBMISSION_KIND = 31733;

export default function Showcase() {
  const { user } = useCurrentUser();
  const { data: submissions = [], isLoading } = useAppSubmissions();
  const [showSubmissionForm, setShowSubmissionForm] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showSignupDialog, setShowSignupDialog] = useState(false);
  const [editingApp, setEditingApp] = useState<AppSubmission | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showAllApps, setShowAllApps] = useState(false);
  const [showHiddenApps, setShowHiddenApps] = useState(false);

  const MODERATOR_NPUB = 'npub1jvnpg4c6ljadf5t6ry0w9q0rnm4mksde87kglkrc993z46c39axsgq89sc';
  const MODERATOR_HEX = (() => {
    try {
      const decoded = nip19.decode(MODERATOR_NPUB);
      return decoded.type === 'npub' ? decoded.data : '';
    } catch {
      return '';
    }
  })();
  const isModerator = user?.pubkey === MODERATOR_HEX;

  // Filter submissions
  const visibleSubmissions = submissions.filter(app => !app.isHidden);
  const hiddenSubmissions = submissions.filter(app => app.isHidden);
  const featuredApps = visibleSubmissions.filter(app => app.isFeatured);
  const regularApps = visibleSubmissions.filter(app => !app.isFeatured);

  // Apply search and tag filters
  const filterApps = (apps: AppSubmission[]) => {
    return apps.filter(app => {
      const matchesSearch = !searchTerm ||
        app.appName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.appTags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTag = !selectedTag || app.appTags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  };

  const filteredFeaturedApps = filterApps(featuredApps);
  const filteredRegularApps = filterApps(regularApps);
  const filteredHiddenApps = filterApps(hiddenSubmissions);

  // Get all unique tags from visible apps only (exclude tags that only appear on hidden apps)
  const allTags = Array.from(new Set(visibleSubmissions.flatMap(app => app.appTags))).sort();

  const handleSubmitClick = () => {
    if (!user) {
      setShowLoginDialog(true);
    } else {
      setShowSubmissionForm(true);
    }
  };

  const handleEditApp = (app: AppSubmission) => {
    setEditingApp(app);
    setShowSubmissionForm(true);
  };

  const handleFormClose = () => {
    setShowSubmissionForm(false);
    setEditingApp(null);
  };

  // Set custom SEO for Showcase page
  useSEO({
    title: 'App Showcase - Community-Submitted Apps Built with Soapbox Tools | Soapbox',
    description: 'Discover and submit applications built with Soapbox tools. Browse community-submitted projects, games, social platforms, and business applications. Submit your own app to the showcase.',
    type: 'website',
    image: '/assets/images/riga-team.png',
    keywords: 'soapbox apps, nostr applications, app showcase, submit app, community apps, decentralized apps, nostr showcase, soapbox tools, app directory',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Soapbox App Showcase",
      "description": "Community-submitted applications built with Soapbox tools",
      "author": {
        "@type": "Organization",
        "name": "Soapbox"
      }
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-azure-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="bg-azure-100 text-azure-700 border-azure-200 mb-6">
              🚀 Community Showcase
            </Badge>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              App{" "}
              <span className="bg-gradient-to-r from-azure to-blue-600 bg-clip-text text-transparent">
                Showcase
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover amazing applications built by our community using Soapbox tools.
              Submit your own app to join the showcase and get discovered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleSubmitClick} className="bg-azure hover:bg-azure-dark">
                <Plus className="w-5 h-5 mr-2" />
                Submit Your App
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/tools" target="_blank" rel="noopener noreferrer">
                  Explore Tools
                </a>
              </Button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search apps..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedTag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(null)}
                >
                  All Tags
                </Button>
                {allTags.slice(0, 5).map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-azure mx-auto mb-4"></div>
              <p className="text-gray-600">Loading apps...</p>
            </div>
          ) : (
            <>
              {/* Featured Apps */}
              {filteredFeaturedApps.length > 0 && (
                <div className="mb-16">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <span className="text-xl">⭐</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-gray-900">Featured Apps</h2>
                      <p className="text-gray-600">Handpicked applications showcasing the best of our community</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredFeaturedApps.map((app) => (
                      <AppShowcaseCard
                        key={app.id}
                        app={app}
                        onEdit={handleEditApp}
                        showModerationControls={isModerator}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* All Apps */}
              {filteredRegularApps.length > 0 && (
                <div className="mb-16">
                  <Collapsible open={showAllApps} onOpenChange={setShowAllApps}>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="p-0 h-auto mb-8 hover:bg-transparent">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <span className="text-xl">📱</span>
                          </div>
                          <div className="text-left">
                            <h2 className="text-3xl font-display font-bold text-gray-900">
                              All Apps ({filteredRegularApps.length})
                            </h2>
                            <p className="text-gray-600">
                              {showAllApps ? 'Click to collapse' : 'Click to view all community apps'}
                            </p>
                          </div>
                        </div>
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredRegularApps.map((app) => (
                          <AppShowcaseCard
                            key={app.id}
                            app={app}
                            onEdit={handleEditApp}
                            showModerationControls={isModerator}
                          />
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              )}

              {/* Hidden Apps (Moderator Only) */}
              {isModerator && filteredHiddenApps.length > 0 && (
                <div className="mb-16">
                  <Collapsible open={showHiddenApps} onOpenChange={setShowHiddenApps}>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="p-0 h-auto mb-8 hover:bg-transparent">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                            <EyeOff className="w-6 h-6 text-red-600" />
                          </div>
                          <div className="text-left">
                            <h2 className="text-3xl font-display font-bold text-gray-900">
                              Hidden Apps ({filteredHiddenApps.length})
                            </h2>
                            <p className="text-gray-600">
                              Moderator view - hidden from public
                            </p>
                          </div>
                        </div>
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredHiddenApps.map((app) => (
                          <AppShowcaseCard
                            key={app.id}
                            app={app}
                            onEdit={handleEditApp}
                            showModerationControls={true}
                          />
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              )}

              {/* Empty State */}
              {filteredFeaturedApps.length === 0 && filteredRegularApps.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No apps found</h3>
                  <p className="text-gray-600 mb-6">
                    {searchTerm || selectedTag
                      ? "Try adjusting your search or filters"
                      : "Be the first to submit an app to the showcase!"
                    }
                  </p>
                  <Button onClick={handleSubmitClick}>
                    <Plus className="w-4 h-4 mr-2" />
                    Submit Your App
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Dialogs */}
      <Dialog open={showSubmissionForm} onOpenChange={setShowSubmissionForm}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingApp ? 'Edit App Submission' : 'Submit Your App'}
            </DialogTitle>
          </DialogHeader>
          <AppSubmissionForm
            editingApp={editingApp || undefined}
            onSuccess={handleFormClose}
            onCancel={handleFormClose}
          />
        </DialogContent>
      </Dialog>

      <LoginDialog
        isOpen={showLoginDialog}
        onClose={() => setShowLoginDialog(false)}
        onLogin={() => {
          setShowLoginDialog(false);
          setShowSubmissionForm(true);
        }}
        onSignup={() => {
          setShowLoginDialog(false);
          setShowSignupDialog(true);
        }}
      />

      <SignupDialog
        isOpen={showSignupDialog}
        onClose={() => {
          setShowSignupDialog(false);
          setShowSubmissionForm(true);
        }}
      />

      <Footer />
    </div>
  );
}