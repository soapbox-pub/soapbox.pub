import React from 'react';
import { Card, CardContent } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';

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
  "slug": "debugging-in-shakespeare",
  "title": "Debugging in Shakespeare",
  "excerpt": "When things don't work as expected, advanced troubleshooting techniques help you identify issues, gather evidence, and communicate problems effectively to get your Shakespeare projects back on track.",
  "coverImage": "/assets/blog/shakespeare-debugging/debugging-cover.png",
  "date": "2025-09-14",
  "author": {
    "name": "Derek Ross",
    "picture": "/assets/avatars/derek.jpg"
  },
  "ogImage": {
    "url": "/assets/blog/shakespeare-debugging/debugging-cover.png"
  },
  "featured": true,
  "tags": ["shakespeare", "debugging", "resources", "development"]
};

export default function DebuggingInShakespeare() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Navigation height (64px) + extra padding (16px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <article className="prose prose-lg max-w-none">
      <div className="not-prose mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
            🎭 Shakespeare
          </Badge>
          <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
            🔧 Debugging
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
            🛠️ Troubleshooting
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            📋 Advanced
          </Badge>
        </div>
      </div>

      <p className="text-xl leading-relaxed text-muted-foreground mb-8">
        When building complex applications with Shakespeare, things don't always work as expected. This guide teaches you systematic debugging approaches that go beyond basic prompting, helping you identify issues, gather evidence, and communicate problems effectively to get your projects back on track.
      </p>

      <div className="not-prose my-8">
        <Card className="border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">🔧 Table of Contents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('section-1')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  1. The Debug Hierarchy
                </button>
                <button
                  onClick={() => scrollToSection('section-2')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  2. Opening Developer Tools
                </button>
                <button
                  onClick={() => scrollToSection('section-3')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  3. Gathering Essential Evidence
                </button>
                <button
                  onClick={() => scrollToSection('section-4')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  4. Console Error Debugging
                </button>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('section-5')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  5. Network Request Debugging
                </button>
                <button
                  onClick={() => scrollToSection('section-6')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  6. Performance Analysis
                </button>
                <button
                  onClick={() => scrollToSection('section-7')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  7. Memory Leak Detection
                </button>
                <button
                  onClick={() => scrollToSection('section-8')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  8. Pro Debugging Tips
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>
        <strong>Debugging is detective work.</strong> When your Shakespeare application doesn't behave as expected, you need to systematically gather clues, isolate the problem, and provide clear evidence to get effective solutions. This guide transforms you from someone who says "it's broken" to someone who can pinpoint exactly what's wrong and how to fix it.
      </p>

      <hr className="my-12" />

      <h2 id="section-1">1. The Debug Hierarchy</h2>

      <p>
        <strong>Effective debugging follows a systematic approach.</strong> Instead of randomly trying different solutions, follow this hierarchy to identify and resolve issues efficiently.
      </p>

      <p><strong>The Four-Step Debug Process:</strong></p>

      <ol>
        <li><strong>Gather Evidence</strong> - Collect error messages, console logs, and network requests</li>
        <li><strong>Isolate the Problem</strong> - Identify the specific component, function, or interaction causing issues</li>
        <li><strong>Provide Context</strong> - Document the environment, data state, and user actions that trigger the problem</li>
        <li><strong>Test Systematically</strong> - Make incremental changes with rollback capability</li>
      </ol>

      <p>
        This structured approach ensures you don't waste time on symptoms while missing the root cause. <strong>Start with evidence, not assumptions.</strong>
      </p>

      <div className="not-prose my-8">
        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">Debug Workflow Example:</h4>
            <div className="space-y-2 text-sm">
              <div><strong>Evidence:</strong> "Submit button not responding, no console errors visible"</div>
              <div><strong>Isolation:</strong> "Issue occurs only on contact form, not login form"</div>
              <div><strong>Context:</strong> "Happens after filling all fields, using Chrome on desktop"</div>
              <div><strong>Testing:</strong> "Try with empty form, different browser, mobile device"</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2 id="section-2">2. Opening Developer Tools</h2>

      <p>
        <strong>Developer tools are your debugging microscope.</strong> Every modern browser includes powerful debugging capabilities that reveal what's happening behind the scenes in your Shakespeare application.
      </p>

      <p><strong>Quick Access Methods (Desktop Only):</strong></p>

      <ul>
        <li><strong>Chrome/Edge:</strong> Press F12 or Ctrl+Shift+I (Windows/Linux) / Cmd+Option+I (Mac)</li>
        <li><strong>Firefox:</strong> Press F12 or Ctrl+Shift+I (Windows/Linux) / Cmd+Option+I (Mac)</li>
        <li><strong>Safari:</strong> Press Cmd+Option+I (Mac) - Enable Developer menu first in Preferences</li>
        <li><strong>Alternative:</strong> Right-click on page → "Inspect" or "Inspect Element"</li>
      </ul>

      <p><strong>Essential DevTools Tabs:</strong></p>

      <ul>
        <li><strong>Console:</strong> Error messages, warnings, and custom log output</li>
        <li><strong>Network:</strong> API requests, response codes, and loading times</li>
        <li><strong>Elements:</strong> HTML structure and CSS styling inspection</li>
        <li><strong>Sources:</strong> JavaScript debugging with breakpoints</li>
        <li><strong>Performance:</strong> Load times, memory usage, and rendering analysis</li>
      </ul>

      <div className="not-prose my-8">
        <Card className="border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">📸 Screenshot Placeholder</h4>
            <div className="bg-gray-300 dark:bg-gray-700 h-48 rounded flex items-center justify-center text-gray-600 dark:text-gray-400">
              [Screenshot: Chrome DevTools open showing Console, Network, and Elements tabs]
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Chrome DevTools interface showing the main debugging tabs you'll use most frequently.
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2 id="section-3">3. Gathering Essential Evidence</h2>

      <p>
        <strong>Good debugging starts with thorough evidence collection.</strong> The more specific information you provide to Shakespeare, the more targeted and effective the solutions will be.
      </p>

      <p><strong>Critical Information to Collect:</strong></p>

      <ul>
        <li><strong>Console Output:</strong> Copy exact error messages, warnings, and stack traces</li>
        <li><strong>Browser DevTools:</strong> Network tab failures, React DevTools component state</li>
        <li><strong>User Journey:</strong> Step-by-step actions that trigger the issue</li>
        <li><strong>Environment Details:</strong> Browser version, screen size, data conditions</li>
        <li><strong>Expected vs. Actual:</strong> What should happen vs. what actually happens</li>
      </ul>

      <p>
        <strong>Document the reproduction steps clearly.</strong> If you can't reliably reproduce the issue, Shakespeare can't reliably fix it.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-green-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Good Evidence Example:</h4>
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
              "User registration form fails on submit. Steps: 1) Fill email field with 'test@example.com' 2) Fill password with 'password123' 3) Click 'Sign Up' button. Expected: Success message and redirect to dashboard. Actual: Form resets, no error message shown. Console shows no errors. Network tab shows no requests sent. Tested in Chrome 118 on Windows 11, 1920x1080 screen."
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">📸 Screenshot Placeholder</h4>
            <div className="bg-gray-300 dark:bg-gray-700 h-48 rounded flex items-center justify-center text-gray-600 dark:text-gray-400">
              [Screenshot: Console tab showing error message with stack trace highlighted]
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Example of copying error messages from the Console tab, including the full stack trace.
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2 id="section-4">4. Console Error Debugging</h2>

      <p>
        <strong>Console errors are your first clue.</strong> Most JavaScript issues surface in the browser console with specific error messages that point directly to the problem.
      </p>

      <p><strong>Common Error Types:</strong></p>

      <ul>
        <li><strong>TypeError:</strong> Trying to use undefined variables or incorrect data types</li>
        <li><strong>ReferenceError:</strong> Using variables that don't exist or are out of scope</li>
        <li><strong>SyntaxError:</strong> Invalid JavaScript syntax or structure</li>
        <li><strong>Network Errors:</strong> Failed API calls or resource loading issues</li>
      </ul>

      <p>
        When reporting console errors to Shakespeare, <strong>include the complete error message and stack trace.</strong> The line numbers and file names help identify exactly where the problem occurs.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-red-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Console Error Debugging Example:</h4>
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
              "The submit button isn't working. Console shows: 'TypeError: Cannot read properties of undefined (reading 'email')' at line 47 in ContactForm.jsx. This happens when I click submit after filling out the form. Expected: form should submit and show success message. Actual: nothing happens and error appears. The error occurs in the handleSubmit function when trying to access formData.email."
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center">
              💡 Pro Tip
            </h4>
            <p className="text-green-700 dark:text-green-300 text-sm">
              Use console.log statements strategically to track data flow before the error occurs. Add logs like console.log('formData:', formData) to see what data is available at each step.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">📸 Screenshot Placeholder</h4>
            <div className="bg-gray-300 dark:bg-gray-700 h-48 rounded flex items-center justify-center text-gray-600 dark:text-gray-400">
              [Screenshot: Console error with TypeError highlighted, showing stack trace and line numbers]
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Console error showing TypeError with complete stack trace and clickable line numbers.
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2 id="section-5">5. Network Request Debugging</h2>

      <p>
        <strong>Network issues often cause silent failures.</strong> When forms don't submit or data doesn't load, the Network tab reveals what's happening with API calls and server communication.
      </p>

      <p><strong>Key Network Debugging Points:</strong></p>

      <ul>
        <li><strong>Request Status:</strong> 200 (success), 404 (not found), 500 (server error), 422 (validation failed)</li>
        <li><strong>Request Payload:</strong> What data is being sent to the server</li>
        <li><strong>Response Data:</strong> What the server is returning (or error messages)</li>
        <li><strong>Request Headers:</strong> Authentication tokens, content types, CORS settings</li>
        <li><strong>Timing:</strong> How long requests take and where delays occur</li>
      </ul>

      <p>
        <strong>Look for failed requests (red status codes) or missing requests</strong> when expected actions don't trigger API calls.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-orange-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Network Request Debugging Example:</h4>
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
              "API calls are failing intermittently. Network tab shows POST /api/users returning 422 with response: {`{error: 'validation failed', field: 'email'}`}. This happens about 30% of the time with valid email addresses like 'user@domain.com'. Request payload shows correct email format. Need error handling to retry failed requests and better user feedback for validation errors."
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">📸 Screenshot Placeholder</h4>
            <div className="bg-gray-300 dark:bg-gray-700 h-48 rounded flex items-center justify-center text-gray-600 dark:text-gray-400">
              [Screenshot: Network tab showing failed POST request with 422 status and response details]
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Network tab showing a failed API request with status code, response data, and timing information.
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2 id="section-6">6. Performance Analysis</h2>

      <p>
        <strong>Performance issues require different debugging approaches.</strong> When your Shakespeare application feels slow or unresponsive, you need to measure and identify bottlenecks rather than guess at solutions.
      </p>

      <p><strong>Performance Debugging Tools:</strong></p>

      <ul>
        <li><strong>Performance Tab:</strong> Record and analyze page load times and rendering</li>
        <li><strong>React DevTools Profiler:</strong> Identify component re-rendering issues</li>
        <li><strong>Lighthouse:</strong> Automated performance auditing and recommendations</li>
        <li><strong>Memory Tab:</strong> Track memory usage and identify leaks</li>
      </ul>

      <p>
        <strong>Provide specific metrics</strong> when reporting performance issues. "It's slow" doesn't help; "3.2 second load time with 1.8s blocked main thread" gives Shakespeare actionable data.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Performance Analysis Example:</h4>
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
              "Dashboard loads slowly on initial visit. Chrome DevTools Performance tab shows 3.2s total load time. Main thread blocked for 1.8s during component mounting. React DevTools Profiler shows UserList component re-rendering 47 times on initial load. Large dataset (500+ users) being processed on every render. Need optimization with React.memo and useMemo for expensive calculations."
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">📸 Screenshot Placeholder</h4>
            <div className="bg-gray-300 dark:bg-gray-700 h-48 rounded flex items-center justify-center text-gray-600 dark:text-gray-400">
              [Screenshot: Performance tab showing timeline with main thread blocking and component render times]
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Performance timeline showing main thread activity, component rendering, and timing bottlenecks.
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2 id="section-7">7. Memory Leak Detection</h2>

      <p>
        <strong>Memory leaks cause applications to slow down over time.</strong> If your Shakespeare application becomes sluggish after extended use or navigation, you may have memory management issues.
      </p>

      <p><strong>Signs of Memory Leaks:</strong></p>

      <ul>
        <li><strong>Increasing Memory Usage:</strong> Memory consumption grows during normal use</li>
        <li><strong>Degraded Performance:</strong> Application becomes slower over time</li>
        <li><strong>Browser Warnings:</strong> "Page unresponsive" or crash messages</li>
        <li><strong>Event Listener Buildup:</strong> Multiple listeners attached to the same elements</li>
      </ul>

      <p>
        <strong>Use the Memory tab to track heap growth</strong> and identify components that aren't properly cleaning up resources.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-green-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Memory Leak Detection Example:</h4>
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
              "Application memory usage increases over time during navigation. Chrome DevTools Memory tab shows heap growing from 25MB to 180MB after 10 page changes. Suspect event listeners not being cleaned up in useEffect hooks. Components: ChatWidget, NotificationPanel, and UserSearch all attach window event listeners. Need proper cleanup functions and dependency arrays to prevent memory leaks."
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">📸 Screenshot Placeholder</h4>
            <div className="bg-gray-300 dark:bg-gray-700 h-48 rounded flex items-center justify-center text-gray-600 dark:text-gray-400">
              [Screenshot: Memory tab showing heap size growth over time with snapshots]
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Memory usage timeline showing increasing heap size and memory snapshots for comparison.
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2 id="section-8">8. Pro Debugging Tips</h2>

      <p>
        <strong>Advanced debugging requires strategic thinking.</strong> These professional techniques help you solve complex issues faster and communicate more effectively with Shakespeare.
      </p>

      <p><strong>Essential Debugging Strategies:</strong></p>

      <ul>
        <li><strong>Minimal Reproduction:</strong> Create the simplest possible example that demonstrates the issue</li>
        <li><strong>Binary Search:</strong> Disable half the features to isolate which section causes problems</li>
        <li><strong>Version Comparison:</strong> Test the same code in different environments or browsers</li>
        <li><strong>Incremental Testing:</strong> Make one change at a time and test the result</li>
        <li><strong>Documentation:</strong> Keep detailed logs of what you tried and what happened</li>
      </ul>

      <p>
        <strong>When communicating with Shakespeare, always include before/after code snippets.</strong> This helps the AI understand your current implementation and provide targeted solutions.
      </p>

      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center">
              💡 Pro Debugging Tip
            </h4>
            <p className="text-green-700 dark:text-green-300 text-sm">
              Create a "debugging checklist" for your most common issues. Include browser compatibility, network connectivity, authentication state, and data validation. This systematic approach catches 80% of issues before they become major problems.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-purple-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Complete Debugging Report Example:</h4>
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
              "User authentication failing on mobile devices only. BEFORE: Login form submits successfully on desktop Chrome/Firefox. AFTER: Same form returns 'Invalid credentials' on mobile Safari/Chrome with identical input. Console shows no errors. Network tab shows successful POST to /api/login with 200 response and valid JWT token. Issue: Token not being stored in localStorage on mobile. SOLUTION NEEDED: Implement alternative storage method for mobile browsers with localStorage limitations."
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <p>
        <strong>Debugging is a skill that improves with practice.</strong> The more systematically you approach problems, the faster you'll identify solutions. Remember: Shakespeare can only help you as effectively as you can describe the problem. Master these debugging techniques, and you'll transform from someone who gets stuck on issues to someone who solves them quickly and confidently.
      </p>

      <div className="not-prose my-12 space-y-8">
        <Card className="border-dashed border-2 border-orange-200 dark:border-orange-800 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Ready to Debug Like a Pro?
            </h3>
            <p className="text-muted-foreground mb-6">
              Apply these debugging techniques to identify and solve issues in your Shakespeare projects.
            </p>
            <div className="space-y-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold px-8 py-3"
              >
                <a href="https://shakespeare.diy" target="_blank" rel="noopener noreferrer">
                  🚀 Start Debugging in Shakespeare
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                Put these debugging skills to work on your projects
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-3">🎭</div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Want to Learn Better Prompting?
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Master the fundamentals of effective prompting to build better projects with Shakespeare.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-100 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-900"
            >
              <a href="/blog/how-to-prompt-better-projects">
                Learn Prompting Techniques →
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <p className="text-sm text-muted-foreground text-center">
        <em>
          Shakespeare is developed by the team behind Soapbox, Ditto, and Nostrify.
          Follow our journey on Nostr and stay updated with the latest developments in decentralized web technology.
        </em>
      </p>
    </article>
  );
}