import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../../ui/card';
import { Button } from '../../ui/button';
import { 
  ExternalLink, 
  GitBranch, 
  Cloud,
  CheckCircle,
  HelpCircle,
  Zap,
  FolderGit2,
  RefreshCw,
  Clock,
  Shield
} from 'lucide-react';

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
  slug: 'github-backup-guide',
  title: 'A Non-Technical Guide to Setting Up GitHub To Back Up Your Projects in Shakespeare',
  excerpt: 'New to GitHub? This beginner-friendly guide walks you through setting up your first repository and connecting it to Shakespeare for automatic project backups.',
  coverImage: '/assets/blog/github-backup-guide/cover.webp',
  date: '2026-02-09',
  author: {
    name: 'Heather Larson',
    picture: '/assets/avatars/heather.jpg'
  },
  ogImage: {
    url: '/assets/blog/github-backup-guide/cover.webp'
  },
  featured: false,
  tags: ['Shakespeare', 'GitHub', 'Tutorial', 'Beginners', 'Version Control', 'Backup']
};

export default function GitHubBackupGuide() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="lead">
        If you're new to GitHub and feeling overwhelmed by all the options and terminology, don't worry, as the one non-tech person on the Soapbox team, I've got you. This quick guide to GitHub for non-technical users of Shakespeare will walk you through the exact steps to get your first repository (a "repo") set up and connected to your projects.
      </p>

      <p>
        This allows for easy and automatic backups in Shakespeare. If you don't choose a backup option or forget to do this once you start a project, Shakespeare will remind you to do it. Using GitHub is just one option for backing up projects and using Git, or version control, with Shakespeare. It also backs up using GitLab or a custom option. But if you know how to create a custom option for Git in Shakespeare, you're already levels above this tutorial. Let's begin.
      </p>

      <h2 className="flex items-center gap-2">
        <CheckCircle className="h-6 w-6 text-green-500" />
        Step 1: Create Your GitHub Account
      </h2>

      <p>
        First things first, you'll need a GitHub account. Head over to <a href="https://github.com" target="_blank" rel="noopener noreferrer">github.com</a> and sign up for a free account. The process is straightforward and only takes a few minutes.
      </p>

      <h2 className="flex items-center gap-2">
        <FolderGit2 className="h-6 w-6 text-purple-500" />
        Step 2: Create Your First Repository
      </h2>

      <p>
        Once you're logged in, you'll see your dashboard. Look for the green "New" button in the top right corner - that's where we'll start.
      </p>

      <div className="not-prose my-6">
        <img 
          src="/assets/blog/github-backup-guide/step2-new-button.png" 
          alt="GitHub dashboard showing the green New button in the top right corner"
          className="rounded-lg border shadow-md w-full"
        />
      </div>

      <p>
        Clicking "New" will take you to the repository creation page. Here's what you need to fill out:
      </p>

      <div className="not-prose my-8">
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
          <CardContent className="p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Repository Creation Fields</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Repository name:</strong> This will become part of your URL (e.g., <code className="bg-gray-100 px-1 rounded">github.com/yourusername/project-name</code>)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-gray-900">Description:</strong> A brief explanation of what your project is for
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-6">
        <img 
          src="/assets/blog/github-backup-guide/step2-repo-form.png" 
          alt="GitHub repository creation form showing the name and description fields"
          className="rounded-lg border shadow-md w-full"
        />
      </div>

      <p>
        After filling in the details, scroll down and click the green "Create repository" button.
      </p>

      <div className="not-prose my-6">
        <img 
          src="/assets/blog/github-backup-guide/step2-create-button.png" 
          alt="GitHub Create repository button"
          className="rounded-lg border shadow-md w-full"
        />
      </div>

      <h2 className="flex items-center gap-2">
        <GitBranch className="h-6 w-6 text-blue-500" />
        Step 3: Get Your Repository URL
      </h2>

      <p>
        GitHub will redirect you to your new repository page. The most important thing here is the blue box that shows your repository URL. Copy this URL. You'll need it for the next step.
      </p>

      <div className="not-prose my-6">
        <img 
          src="/assets/blog/github-backup-guide/step3-repo-url.png" 
          alt="GitHub repository page showing the repository URL to copy"
          className="rounded-lg border shadow-md w-full"
        />
      </div>

      <h2 className="flex items-center gap-2">
        <Cloud className="h-6 w-6 text-green-500" />
        Step 4: Connect Your Project
      </h2>

      <p>
        Now head back to your project in Shakespeare. Look for the cloud icon and select GitHub from the options.
      </p>

      <div className="not-prose my-6">
        <img 
          src="/assets/blog/github-backup-guide/step4-shakespeare-connect.png" 
          alt="Shakespeare interface showing the GitHub connection option"
          className="rounded-lg border shadow-md w-full"
        />
      </div>

      <p>
        Paste the URL you copied from GitHub into the connection field and click "Push." Your project will now sync to GitHub!
      </p>

      <div className="not-prose my-8">
        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-green-600" />
              <h3 className="text-xl font-bold text-gray-900 m-0">
                Non-Technical GitHub User Pro Tips
              </h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Once you get used to this process, it takes about <strong>30 seconds</strong> to set up a new repository.</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Having a project backed up in GitHub will help in case you clear your cache and lose your work. Shakespeare runs locally in your browser, so this is exactly what will happen if you don't download a .zip file of your project or back it up by using Git.</span>
              </li>
              <li className="flex items-start gap-3">
                <Cloud className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>We do this to ensure your work stays private to you while you create in Shakespeare. We can't see your work and therefore can't recover it for you if you lose it.</span>
              </li>
              <li className="flex items-start gap-3">
                <RefreshCw className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Git is basically version control, so you can also rollback to previous versions of your project if you take a step you don't like and want to go back in time.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <h2 className="flex items-center gap-2">
        <HelpCircle className="h-6 w-6 text-blue-500" />
        Frequently Asked Questions
      </h2>

      <div className="not-prose my-8 space-y-4">
        <Card className="border-gray-200">
          <CardContent className="p-6">
            <h4 className="font-semibold text-gray-900 mb-2">
              Q: Do I make a new repository for each project or is this the big main one?
            </h4>
            <p className="text-gray-600 m-0">
              <strong>A:</strong> Create a separate repository for each new project. This keeps everything organized and makes it easier to manage.
            </p>
          </CardContent>
        </Card>

        <Card className="border-gray-200">
          <CardContent className="p-6">
            <h4 className="font-semibold text-gray-900 mb-2">
              Q: What about gitignore, readme, and license options?
            </h4>
            <p className="text-gray-600 m-0">
              <strong>A:</strong> For simple backup purposes, you can ignore these options when first setting up your repository.
            </p>
          </CardContent>
        </Card>

        <Card className="border-gray-200">
          <CardContent className="p-6">
            <h4 className="font-semibold text-gray-900 mb-2">
              Q: Is there any way that GitHub could mess up my backups and lose them? Should I back up elsewhere?
            </h4>
            <p className="text-gray-600 m-0">
              <strong>A:</strong> GitHub is very reliable and secure. It will keep your code safe, and Shakespeare should automatically push updates. However, it's always good practice to watch for the sync indicators to ensure everything is backing up properly.
            </p>
          </CardContent>
        </Card>
      </div>

      <p>
        Getting started with GitHub doesn't have to be complicated. With these simple steps, you'll have your projects backed up and version-controlled in no time!
      </p>

      <div className="not-prose my-12">
        <Card className="border-dashed border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <Zap className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to start building?
            </h3>
            <p className="text-muted-foreground mb-6">
              Now that you know how to back up your projects, you're ready to build with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
              >
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  Try Shakespeare
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <Link to="/shakespeare">
                  Learn More
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2>Related Reading</h2>

      <ul>
        <li><Link to="/blog/shakespeare-version-control" className="text-azure hover:text-azure-600 underline">Using Version Control in Shakespeare</Link></li>
        <li><Link to="/blog/shakespeare-importing-existing-projects" className="text-azure hover:text-azure-600 underline">Importing Existing Projects to Shakespeare</Link></li>
        <li><Link to="/blog/debugging-in-shakespeare" className="text-azure hover:text-azure-600 underline">Debugging in Shakespeare</Link></li>
        <li><Link to="/blog/build-without-coding" className="text-azure hover:text-azure-600 underline">Build Anything Without Coding</Link></li>
        <li><Link to="/blog/conversational-ai-for-beginners" className="text-azure hover:text-azure-600 underline">How to Code with AI: For Beginners</Link></li>
      </ul>
    </article>
  );
}
