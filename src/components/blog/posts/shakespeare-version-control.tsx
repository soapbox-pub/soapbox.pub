import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { GitBranch, RotateCcw, Github, GitlabIcon, Terminal } from 'lucide-react';
import { YouTubeEmbed } from '../../YouTubeEmbed';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: {
    name?: string;
    picture?: string;
  };
  ogImage: {
    url?: string;
  };
  featured?: boolean;
  tags?: string[];
}

export const meta: BlogPostMeta = {
  "slug": "shakespeare-version-control",
  "title": "Using Version Control in Shakespeare",
  "excerpt": "Learn how to effectively use version control features in Shakespeare to manage your project history, collaborate with others, and maintain your codebase.",
  "coverImage": "/assets/blog/shakespeare-git-guide/shakespeare-git-guide.png",
  "date": "2025-09-18",
  "author": {
    "name": "M. K. Fain",
    "picture": "/assets/avatars/mk.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/shakespeare-git-guide/shakespeare-git-guide.png"
  },
  "featured": false,
  "tags": ["shakespeare-resource", "version-control", "git"]
};

export default function ShakespeareVersionControl() {
  return (
    <article className="prose prose-lg max-w-none">

      {/* Video Tutorial */}
      <div className="not-prose mb-12">
        <YouTubeEmbed
          src="https://www.youtube.com/embed/7jB3ZR3QUIQ?si=zUfgI5JGGAVHYMl6"
          title="How to Use Git Version Control in Shakespeare"
        />
      </div>

      {/* What is Version Control */}
      <div className="not-prose mb-12">
        <Card className="border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <GitBranch className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                What is Version Control? What is Git?
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              Version control is like having a time machine for your code. It tracks every change you make to your project, allowing you to see what changed, when it changed, and who changed it. Git is the most popular version control system - think of it as a super-powered "undo" button that can save snapshots of your entire project at different points in time. If something breaks, you can easily go back to a working version. It also lets multiple people work on the same project without stepping on each other's toes.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Built-in Version Control */}
      <div className="not-prose mb-12">
        <Card className="border-green-200 dark:border-green-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <RotateCcw className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                1. Using Shakespeare's Built-in Version Control
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Roll back to existing versions by clicking the <strong>…</strong> menu in the project chat pane → <strong>Rollback</strong>
            </p>

            <div className="mb-6">
              <img
                src="/assets/images/shakespeare-screenshots/rollback-example.png"
                alt="Shakespeare rollback interface showing the three dots menu with rollback option"
                className="rounded-lg w-full max-w-4xl mx-auto"
              />
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Terminal className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                    💡 Pro tip: Advanced Git Users
                  </p>
                  <p className="text-blue-800 dark:text-blue-200 mb-4">
                    If you are an experienced git user, you can also speak to Shakespeare in the chat to give it git commands, or use git in the built-in terminal!
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>To access the terminal:</strong> click the code icon in the top right of the preview pane, then the terminal icon
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <img
                src="/assets/images/shakespeare-screenshots/git-commands-in-terminal.png"
                alt="Shakespeare terminal interface showing git commands being executed"
                className="rounded-lg w-full max-w-4xl mx-auto"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Connecting to GitHub and GitLab */}
      <div className="not-prose mb-12">
        <Card className="border-purple-200 dark:border-purple-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Github className="h-8 w-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                2. Connecting to GitHub and GitLab
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              A benefit of connecting to GitHub or GitLab is that others can easily improve your projects, and you can easily sync your projects across devices by pushing and pulling.
            </p>

            {/* GitHub Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Github className="h-6 w-6 text-gray-900 dark:text-gray-100" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">GitHub</h4>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300 mt-1">1</Badge>
                  <div className="flex-1">
                    <p className="text-gray-600 dark:text-gray-400">
                      First log in to GitHub on Shakespeare: (settings → Git settings → connect GitHub)
                    </p>
                    <p className="text-sm text-blue-600 hover:underline mt-1">
                      <a href="https://shakespeare.diy/settings/git" target="_blank" rel="noopener noreferrer">
                        https://shakespeare.diy/settings/git
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <img
                    src="/assets/images/shakespeare-screenshots/connect-github-account.png"
                    alt="Shakespeare settings page showing GitHub connection option"
                    className="rounded-lg w-full max-w-4xl mx-auto"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300 mt-1">2</Badge>
                  <div className="flex-1">
                    <p className="text-gray-600 dark:text-gray-400">
                      Then you have to create a new project in GitHub:
                      <a href="https://github.com/new" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                        https://github.com/new
                      </a>
                    </p>
                    <p className="text-sm text-orange-600 font-semibold mt-1">
                      (note: visibility MUST be public!)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300 mt-1">3</Badge>
                  <div className="flex-1">
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Then copy the HTTPS clone URL (make sure you get the HTTPS and NOT the SSH!)
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">
                      Example: https://github.com/marykatefain/fantastic-couscous.git
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <img
                    src="/assets/images/shakespeare-screenshots/github-copy-https-cone.png"
                    alt="GitHub repository page showing how to copy the HTTPS clone URL"
                    className="rounded-lg w-full max-w-4xl mx-auto"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300 mt-1">4</Badge>
                  <p className="text-gray-600 dark:text-gray-400">
                    Then in Shakespeare click the <strong>…</strong> menu in the chat pane → <strong>Repository</strong>
                  </p>
                </div>

                <div className="mb-6">
                  <img
                    src="/assets/images/shakespeare-screenshots/click-repository.png"
                    alt="Shakespeare chat pane showing the three dots menu with repository option"
                    className="rounded-lg w-full max-w-4xl mx-auto"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300 mt-1">5</Badge>
                  <p className="text-gray-600 dark:text-gray-400">
                    Then paste the git URL you copied and click <strong>"Save"</strong>
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-300 mt-1">6</Badge>
                  <p className="text-gray-600 dark:text-gray-400">
                    Then click <strong>"Push"</strong> to push your Shakespeare work to GitHub
                  </p>
                </div>

                <div className="mb-6">
                  <img
                    src="/assets/images/shakespeare-screenshots/push-repository.png"
                    alt="Shakespeare repository settings showing push button to sync changes"
                    className="rounded-lg w-full max-w-4xl mx-auto"
                  />
                </div>
              </div>
            </div>

            {/* GitLab Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <GitlabIcon className="h-6 w-6 text-orange-600" />
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">GitLab</h4>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Same as GitHub, except you need to login with <strong>"Create a new token"</strong> first:
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300 mt-1">1</Badge>
                  <div className="flex-1">
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Create a new token here:
                      <a href="https://gitlab.com/-/user_settings/personal_access_tokens" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                        https://gitlab.com/-/user_settings/personal_access_tokens
                      </a>
                    </p>
                    <ul className="text-sm text-gray-500 dark:text-gray-400 list-disc list-inside space-y-1">
                      <li>Set a long expiration for smoothest experience</li>
                      <li>Scope: read_repository, write_repository</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-6">
                  <img
                    src="/assets/images/shakespeare-screenshots/create-new-token-gitlab.png"
                    alt="GitLab personal access token creation page showing required scopes"
                    className="rounded-lg w-full max-w-4xl mx-auto"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300 mt-1">2</Badge>
                  <div className="flex-1">
                    <p className="text-gray-600 dark:text-gray-400">
                      Add the token to Shakespeare under settings → Git settings → GitLab:
                      <a href="https://shakespeare.diy/settings/git" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                        https://shakespeare.diy/settings/git
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <img
                    src="/assets/images/shakespeare-screenshots/add-token-to-shakepseare.png"
                    alt="Shakespeare settings page showing GitLab token input field"
                    className="rounded-lg w-full max-w-4xl mx-auto"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300 mt-1">3</Badge>
                  <div className="flex-1">
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Create new blank project in GitLab here:
                      <a href="https://gitlab.com/projects/new#blank_project" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                        https://gitlab.com/projects/new#blank_project
                      </a>
                    </p>
                    <p className="text-sm text-orange-600 font-semibold">
                      Make it public, and Uncheck "Initialize repository with a README"
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300 mt-1">4</Badge>
                  <div className="flex-1">
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      Copy the clone with HTTPS link (make sure it's not the SSH one!)
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">
                      Ex. https://gitlab.com/marykatefain/testing.git
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <img
                    src="/assets/images/shakespeare-screenshots/copy-gitlab-url.png"
                    alt="GitLab repository page showing how to copy the HTTPS clone URL"
                    className="rounded-lg w-full max-w-4xl mx-auto"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-300 mt-1">5</Badge>
                  <p className="text-gray-600 dark:text-gray-400">
                    Add as the repository URL and click <strong>Push</strong> to sync your changes (same as GitHub)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Nostr Git */}
      <div className="not-prose mb-12">
        <Card className="border-violet-200 dark:border-violet-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                N
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                3. Using Nostr Git
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Under the repository settings, you can also push to Nostr to back up your repository without needing a GitLab or GitHub account (note: must be logged in to Nostr)
            </p>

            <div className="mb-6">
              <img
                src="/assets/images/shakespeare-screenshots/push-to-nostr.png"
                alt="Shakespeare repository settings showing Nostr Git push option"
                className="rounded-lg w-full max-w-4xl mx-auto"
              />
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Then you will have a Nostr git URL you can use to share or import your project across devices:
            </p>

            <div className="bg-violet-50 dark:bg-violet-950 border border-violet-200 dark:border-violet-800 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-mono break-all">
                Example: nostr://npub1jvnpg4c6ljadf5t6ry0w9q0rnm4mksde87kglkrc993z46c39axsgq89sc/git.shakespeare.diy/design-craftsman
              </p>
            </div>

            <div className="mb-6">
              <img
                src="/assets/images/shakespeare-screenshots/nostr-git-url.png"
                alt="Shakespeare showing generated Nostr Git URL for sharing projects"
                className="rounded-lg w-full max-w-4xl mx-auto"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Build with Shakespeare?
            </h3>
            <p className="text-muted-foreground mb-6">
              Start building amazing projects with AI-powered development on Nostr.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3"
                >
                  <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                    🎭 Try Shakespeare
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-purple-200 text-purple-700 hover:bg-purple-50 font-semibold px-8 py-3"
                >
                  <a href="/shakespeare-resources">
                    📚 More Resources
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Turn your ideas into reality through natural conversation with AI
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}