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
  "featured": false,
  "tags": ["shakespeare", "debugging", "shakespeare-resource", "actii"]
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
                  1. Debugging in Shakespeare
                </button>
                <button
                  onClick={() => scrollToSection('section-2')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  2. The Debug Hierarchy
                </button>
                <button
                  onClick={() => scrollToSection('section-3')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  3. Opening Developer Tools
                </button>
                <button
                  onClick={() => scrollToSection('section-4')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  4. Gathering Essential Evidence
                </button>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('section-5')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  5. Console Error Debugging
                </button>
                <button
                  onClick={() => scrollToSection('section-6')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  6. Network Request Debugging
                </button>
                <button
                  onClick={() => scrollToSection('section-7')}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 py-1 block text-left cursor-pointer hover:underline"
                >
                  7. Debugging Nostr Events
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

      <h2 id="section-1">1. Debugging in Shakespeare</h2>

      <p>
        <strong>Effective debugging with Shakespeare starts with understanding its capabilities and limitations.</strong> Shakespeare is a powerful AI assistant for development, but knowing what it can and cannot see is crucial for getting the help you need.
      </p>

      <h3>What Shakespeare Can and Cannot See</h3>

      <div className="not-prose my-8">
        <Card className="border-gray-200 dark:border-gray-800">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4 text-green-800 dark:text-green-200 flex items-center">
                  ✅ Shakespeare CAN See
                </h4>
                <div className="space-y-2 text-sm">
                  <div>• Your project files and code</div>
                  <div>• Your project's version history</div>
                  <div>• Chat history</div>
                  <div>• Nostr documentation</div>
                  <div>• Development tools</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-red-800 dark:text-red-200 flex items-center">
                  ❌ Shakespeare CANNOT See
                </h4>
                <div className="space-y-2 text-sm">
                  <div>• Your screen or browser</div>
                  <div>• Console errors</div>
                  <div>• Screenshots</div>
                  <div>• Live applications</div>
                  <div>• Network requests directly</div>
                  <div>• Real-time variable values</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3>How to Talk to Shakespeare About Debugging</h3>

      <p><strong>Use the "Expectation vs. Reality" format:</strong></p>

      <ul>
        <li><strong>What you expect to happen:</strong> "When I click the submit button, the form should create a nostr event and submit it to the relays, then show a success message"</li>
        <li><strong>What actually happens:</strong> "The button click does nothing, I dont see any nostr event coming through, nor a success message"</li>
      </ul>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-green-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Good Debugging Request Example:</h4>
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
              "My login form isn't working. EXPECTED: After entering email/password and clicking 'Login', user should be authenticated and redirected to dashboard. ACTUAL: Form submits but page just refreshes, no redirect happens. Console shows no errors. Please work with precision to fix this bug, without impacting existing features or functionality."
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">💡 Pro Tip: Use This Phrase</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm">
              End your debugging requests with: <strong>"Work with precision to fix this bug, without impacting existing features or functionality."</strong> This prompts Shakespeare to make targeted fixes rather than broad changes.
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2 id="section-2">2. The Debug Hierarchy</h2>

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

      <h2 id="section-3">3. Opening Developer Tools</h2>

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

      {/* <div className="not-prose my-8">
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
      </div> */}

      <hr className="my-12" />

      <h2 id="section-4">4. Gathering Essential Evidence</h2>

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

      {/* <div className="not-prose my-8">
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
      </div> */}

      <hr className="my-12" />

      <h2 id="section-5">5. Console Error Debugging</h2>

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
              The AI will often add console.log messages to help you debug. If you see these, include them in your report to Shakespeare as they provide additional context about variable states leading up to the error. Don't forget to ask them to be removed after!
            </p>
          </CardContent>
        </Card>
      </div>

      {/* <div className="not-prose my-8">
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
      </div> */}

      <hr className="my-12" />

      <h2 id="section-6">6. Network Request Debugging</h2>

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

      {/* <div className="not-prose my-8">
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
      </div> */}

      <hr className="my-12" />

      <h2 id="section-7">7. Debugging Nostr Events</h2>

      <p>
        <strong>Nostr applications require specialized debugging techniques.</strong> When building decentralized applications with Shakespeare, you need to understand what events are being created, signed, and broadcast to the network.
      </p>

      <p><strong>Essential Nostr Debugging Tools:</strong></p>

      <ul>
        <li><strong>Alby Extension (Paranoid Mode):</strong> Review every event before signing and broadcasting</li>
        <li><strong>Nostr DevTools:</strong> Browser extensions that show real-time event streams</li>
        <li><strong>Relay Logs:</strong> Monitor which relays accept or reject your events</li>
        <li><strong>Event Validation:</strong> Verify event structure, signatures, and required fields</li>
        <li><strong>Network Inspection:</strong> Track WebSocket connections to Nostr relays</li>
      </ul>

      <p>
        <strong>Use Alby's paranoid mode during development</strong> to see exactly what events your application creates before they're sent to relays. This prevents broadcasting malformed or test events to the live network.
      </p>

      <div className="not-prose my-8">
        <Card className="border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100">🔧 Enabling Alby Paranoid Mode:</h4>
            <div className="space-y-2 text-sm">
              <div><strong>1.</strong> Open Alby extension → Settings → Advanced</div>
              <div><strong>2.</strong> Enable "Paranoid Mode" or "Review Events"</div>
              <div><strong>3.</strong> Test your Shakespeare application</div>
              <div><strong>4.</strong> Copy the event JSON from Alby's review dialog</div>
              <div><strong>5.</strong> Paste the event data to Shakespeare for analysis</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p><strong>Common Nostr Event Issues:</strong></p>

      <ul>
        <li><strong>Invalid Event Structure:</strong> Missing required fields (id, pubkey, created_at, kind, tags, content, sig)</li>
        <li><strong>Incorrect Event Kind:</strong> Using wrong kind number for the intended functionality</li>
        <li><strong>Malformed Tags:</strong> Invalid tag arrays or missing required tag elements</li>
        <li><strong>Signature Problems:</strong> Events not properly signed or signature verification failures</li>
        <li><strong>Relay Rejection:</strong> Events rejected by relays due to policy or validation issues</li>
      </ul>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-purple-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Nostr Event Debugging Example:</h4>
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
              "User profile updates aren't saving. Alby paranoid mode shows this event being created: {`{\"id\":\"abc123\",\"pubkey\":\"user_pubkey\",\"created_at\":1694123456,\"kind\":0,\"tags\":[],\"content\":\"{\\\"name\\\":\\\"John\\\",\\\"about\\\":\\\"Developer\\\"}\",\"sig\":\"signature\"}`}. Event structure looks correct for kind 0 (user metadata). Network tab shows WebSocket connection to relay successful. Need to check if relay is accepting the event or if there's a validation issue with the content format."
            </p>
          </CardContent>
        </Card>
      </div>

      <p><strong>Advanced Nostr Debugging Techniques:</strong></p>

      <ul>
        <li><strong>Event Validation:</strong> Use nostr-tools library to validate event structure before signing</li>
        <li><strong>Relay Testing:</strong> Test events against multiple relays to identify relay-specific issues</li>
        <li><strong>Event History:</strong> Track event creation, signing, and broadcast timeline</li>
        <li><strong>Tag Analysis:</strong> Verify tag arrays contain correct references (e tags, p tags, etc.)</li>
        <li><strong>Content Inspection:</strong> Ensure event content is properly formatted JSON when required</li>
      </ul>

      <div className="not-prose my-8">
        <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-green-800 dark:text-green-200 flex items-center">
              💡 Pro Nostr Debugging Tip
            </h4>
            <p className="text-green-700 dark:text-green-300 text-sm">
              When reporting Nostr issues to Shakespeare, always include the complete event JSON from Alby's paranoid mode. This shows the exact data structure being created, making it much easier to identify formatting, validation, or relay compatibility issues.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-orange-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Complete Nostr Debugging Report Example:</h4>
            <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded italic">
              "Direct messages not sending between users. Alby shows event: {`{\"kind\":4,\"tags\":[[\"p\",\"recipient_pubkey\"]],\"content\":\"encrypted_content_here\",\"created_at\":1694123456}`}. Event structure appears correct for kind 4 (encrypted DM). WebSocket shows successful connection to 3 relays. Issue: recipient not receiving messages. Suspect: encryption/decryption mismatch or relay propagation delay. Need to verify NIP-04 encryption implementation and test with different relay sets."
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