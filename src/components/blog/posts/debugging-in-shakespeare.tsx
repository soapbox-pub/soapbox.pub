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
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            🎭 Shakespeare
          </Badge>
          <Badge variant="secondary" className="bg-red-100 text-red-800">
            🔧 Debugging
          </Badge>
          <Badge variant="secondary" className="bg-orange-100 text-orange-800">
            🛠️ Troubleshooting
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            📋 Advanced
          </Badge>
        </div>
      </div>

      <p className="text-xl leading-relaxed text-muted-foreground mb-8">
        When building complex applications with Shakespeare, things don't always work as expected. This guide teaches you systematic debugging approaches that go beyond basic prompting, helping you identify issues, gather evidence, and communicate problems effectively to get your projects back on track.
      </p>

      <div className="not-prose my-8">
        <Card className="border-gray-200 bg-gray-50">
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4 text-gray-900">🔧 Table of Contents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('section-1')}
                  className="text-blue-600 hover:text-blue-800 py-1 block text-left cursor-pointer hover:underline"
                >
                  1. Debugging in Shakespeare
                </button>
                <button
                  onClick={() => scrollToSection('section-2')}
                  className="text-blue-600 hover:text-blue-800 py-1 block text-left cursor-pointer hover:underline"
                >
                  2. The Debug Hierarchy
                </button>
                <button
                  onClick={() => scrollToSection('section-3')}
                  className="text-blue-600 hover:text-blue-800 py-1 block text-left cursor-pointer hover:underline"
                >
                  3. Checking for errors in Shakespeare
                </button>
                <button
                  onClick={() => scrollToSection('section-4')}
                  className="text-blue-600 hover:text-blue-800 py-1 block text-left cursor-pointer hover:underline"
                >
                  4. Opening Developer Tools
                </button>
              </div>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => scrollToSection('section-5')}
                  className="text-blue-600 hover:text-blue-800 py-1 block text-left cursor-pointer hover:underline"
                >
                  5. Gathering Essential Evidence
                </button>
                <button
                  onClick={() => scrollToSection('section-6')}
                  className="text-blue-600 hover:text-blue-800 py-1 block text-left cursor-pointer hover:underline"
                >
                  6. Console Error Debugging
                </button>
                <button
                  onClick={() => scrollToSection('section-7')}
                  className="text-blue-600 hover:text-blue-800 py-1 block text-left cursor-pointer hover:underline"
                >
                  7. Debugging Nostr Events
                </button>
                <button
                  onClick={() => scrollToSection('section-8')}
                  className="text-blue-600 hover:text-blue-800 py-1 block text-left cursor-pointer hover:underline"
                >
                  8. Advanced: Meta-Debugging
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2 id="section-1">1. Debugging in Shakespeare</h2>

      <p>
        <strong>Effective debugging with Shakespeare starts with understanding its capabilities and limitations.</strong> Shakespeare is a powerful AI assistant for development, but knowing what it can and cannot see is crucial for getting the help you need.
      </p>

      <h3>What Shakespeare Can and Cannot See</h3>

      <div className="not-prose my-8">
        <Card className="border-gray-200">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4 text-green-800 flex items-center">
                  ✅ Shakespeare CAN See
                </h4>
                <div className="space-y-2 text-sm">
                  <div>• Your project files and code</div>
                  <div>• Your project's version history</div>
                  <div>• Chat history</div>
                  <div>• Console errors (when you share them)</div>
                  <div>• Nostr documentation</div>
                  <div>• Uploaded images (via supported models)</div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-red-800 flex items-center">
                  ❌ Shakespeare CANNOT See
                </h4>
                <div className="space-y-2 text-sm">
                  <div>• Your screen or browser directly</div>
                  <div>• Image links (URLs)</div>
                  <div>• Live applications in real-time</div>
                  <div>• Network requests directly</div>
                  <div>• Real-time variable values</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p>When Shakespeare cannot see something on it's own, it's up to you to provide that information to the AI so it can use it to help you solve the bug.</p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
        <p className="text-sm text-blue-900">
          <strong>📸 New: Image Upload Support</strong> - Shakespeare can now view and process images that you upload directly into the chat (not image links). This is especially helpful for sharing screenshots of errors, design references, or UI issues. Note that vision capabilities require supported AI models (like Claude Sonnet 4 or GPT-4 Vision).
        </p>
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
            <p className="text-sm bg-gray-100 p-4 rounded italic">
              "My login form isn't working. EXPECTED: After entering email/password and clicking 'Login', user should be authenticated and redirected to dashboard. ACTUAL: Form submits but page just refreshes, no redirect happens. Console shows no errors. Please work with precision to fix this bug, without impacting existing features or functionality."
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-blue-900">💡 Pro Tip: Use This Phrase</h4>
            <p className="text-blue-800 text-sm">
              End your debugging requests with: <strong>"Work with precision to fix this bug, without impacting existing features or functionality."</strong> This prompts Shakespeare to make targeted fixes rather than broad changes.
            </p>
          </CardContent>
        </Card>
      </div>

      <h3>Choosing the Right AI Model for Debugging</h3>

      <p>
        Shakespeare gives you the freedom to choose your model, but what you pay for is what you get! If you choose a cheap model, you can expect cheap results. Model selection significantly impacts debugging effectiveness, especially for complex applications. <strong>We highly recommend using advanced models for debugging and complex applications.</strong>
      </p>

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
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-blue-900">Debug Workflow Example:</h4>
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

      <h2 id="section-3">3. Checking for errors in Shakespeare</h2>

      <p>
        <strong>Shakespeare now has the ability to see console errors directly!</strong> When you're experiencing issues with your project, the first step is to check for errors using Shakespeare's built-in debugging tools. This saves you time and provides immediate insight into what's going wrong.
      </p>

      <p><strong>How to check for errors in Shakespeare:</strong></p>

      <ol>
        <li><strong>Look for the bug icon:</strong> In the top right of the preview pane, you'll see a bug icon. Click it to view console errors.</li>
        <li><strong>Review the errors:</strong> Any JavaScript errors, warnings, or console messages will be displayed</li>
        <li><strong>Copy and paste:</strong> You can copy these errors and paste them directly into the chat with Shakespeare</li>
      </ol>

      <div className="not-prose my-8">
        <img
          src="/assets/images/shakespeare-screenshots/console-error.png"
          alt="Shakespeare console error panel showing the bug icon and error messages"
          className="w-full rounded-lg"
        />
        <p className="text-sm text-muted-foreground mt-2 text-center">
          The bug icon in the top right of the preview pane gives you instant access to console errors.
        </p>
      </div>

      <p>
        <strong>Meet Quilly, the Shakespeare mascot!</strong> From time to time, you may see Quilly pop up with useful information about various errors. We're still working to improve this feature, but it's a great way to get quick tips and context when Shakespeare detects common issues.
      </p>

      <div className="not-prose my-8 flex justify-center">
        <div className="max-w-md">
          <img
            src="/assets/images/shakespeare-screenshots/quilly.png"
            alt="Quilly, the Shakespeare mascot, providing helpful debugging information"
            className="rounded-lg border border-gray-200"
          />
          <p className="text-sm text-muted-foreground mt-2 text-center">
            Quilly provides helpful tips and error messages.
          </p>
        </div>
      </div>

      <div className="not-prose my-8">
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-green-800 flex items-center">
              💡 Pro Tip
            </h4>
            <p className="text-green-700 text-sm">
              Always check the console errors first! Many issues can be quickly identified and resolved by copying the error messages directly into your chat with Shakespeare. This is much faster than describing symptoms.
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2 id="section-4">4. Opening Developer Tools</h2>

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
        <Card className="border-gray-200 bg-gray-100">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">📸 Screenshot Placeholder</h4>
            <div className="bg-gray-300 h-48 rounded flex items-center justify-center text-gray-600">
              [Screenshot: Chrome DevTools open showing Console, Network, and Elements tabs]
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Chrome DevTools interface showing the main debugging tabs you'll use most frequently.
            </p>
          </CardContent>
        </Card>
      </div> */}

      <hr className="my-12" />

      <h2 id="section-5">5. Gathering Essential Evidence</h2>

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
            <p className="text-sm bg-gray-100 p-4 rounded italic">
              "User registration form fails on submit. Steps: 1) Fill email field with 'test@example.com' 2) Fill password with 'password123' 3) Click 'Sign Up' button. Expected: Success message and redirect to dashboard. Actual: Form resets, no error message shown. Console shows no errors. Network tab shows no requests sent. Tested in Chrome 118 on Windows 11, 1920x1080 screen."
            </p>
          </CardContent>
        </Card>
      </div>

      {/* <div className="not-prose my-8">
        <Card className="border-gray-200 bg-gray-100">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">📸 Screenshot Placeholder</h4>
            <div className="bg-gray-300 h-48 rounded flex items-center justify-center text-gray-600">
              [Screenshot: Console tab showing error message with stack trace highlighted]
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Example of copying error messages from the Console tab, including the full stack trace.
            </p>
          </CardContent>
        </Card>
      </div> */}

      <hr className="my-12" />

      <h2 id="section-6">6. Console Error Debugging</h2>

      <p>
        <strong>Console errors are your first clue.</strong> Most JavaScript issues surface in the browser console with specific error messages that point directly to the problem. When reporting console errors to Shakespeare, <strong>copy/paste the entire console output</strong> to Shakespeare.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-red-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Console Error Debugging Example:</h4>
            <p className="text-sm bg-gray-100 p-4 rounded italic">
              "The submit button isn't working. Console shows: 'TypeError: Cannot read properties of undefined (reading 'email')' at line 47 in ContactForm.jsx. This happens when I click submit after filling out the form. Expected: form should submit and show success message. Actual: nothing happens and error appears. The error occurs in the handleSubmit function when trying to access formData.email."
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-green-800 flex items-center">
              💡 Pro Tip
            </h4>
            <p className="text-green-700 text-sm">
              The AI will often add console.log messages to help you debug. If you see these, include them in your report to Shakespeare as they provide additional context about variable states leading up to the error. Don't forget to ask them to be removed after!
            </p>
          </CardContent>
        </Card>
      </div>

      {/* <div className="not-prose my-8">
        <Card className="border-gray-200 bg-gray-100">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">📸 Screenshot Placeholder</h4>
            <div className="bg-gray-300 h-48 rounded flex items-center justify-center text-gray-600">
              [Screenshot: Console error with TypeError highlighted, showing stack trace and line numbers]
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Console error showing TypeError with complete stack trace and clickable line numbers.
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
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-blue-900">🔧 Enabling Alby Paranoid Mode:</h4>
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
            <p className="text-sm bg-gray-100 p-4 rounded italic">
              "User profile updates aren't saving. Alby paranoid mode shows this event being created: {JSON.stringify({"id":"abc123","pubkey":"user_pubkey","created_at":1694123456,"kind":0,"tags":[],"content":JSON.stringify({"name":"John","about":"Developer"}),"sig":"signature"})}. Event structure looks correct for kind 0 (user metadata). Network tab shows WebSocket connection to relay successful. Need to check if relay is accepting the event or if there's a validation issue with the content format."
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
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-green-800 flex items-center">
              💡 Pro Nostr Debugging Tip
            </h4>
            <p className="text-green-700 text-sm">
              When reporting Nostr issues to Shakespeare, always include the complete event JSON from Alby's paranoid mode. This shows the exact data structure being created, making it much easier to identify formatting, validation, or relay compatibility issues.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-orange-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Complete Nostr Debugging Report Example:</h4>
            <p className="text-sm bg-gray-100 p-4 rounded italic">
              "Direct messages not sending between users. Alby shows event: {JSON.stringify({"kind":4,"tags":[["p","recipient_pubkey"]],"content":"encrypted_content_here","created_at":1694123456})}. Event structure appears correct for kind 4 (encrypted DM). WebSocket shows successful connection to 3 relays. Issue: recipient not receiving messages. Suspect: encryption/decryption mismatch or relay propagation delay. Need to verify NIP-04 encryption implementation and test with different relay sets."
            </p>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <h2 id="section-8">8. Advanced: Meta-Debugging</h2>

      <p>
        <strong>Meta-debugging is debugging your debugging process.</strong> When regular debugging techniques aren't working, or when you've spent too many credits without progress, it's time to step back and analyze your approach itself.
      </p>

      <p>
        Meta-debugging involves asking Shakespeare to examine your debugging strategy, identify patterns in failed attempts, and suggest more efficient approaches. This is particularly powerful because Shakespeare can review your entire chat history and spot inefficiencies you might miss.
      </p>

      <h3>Forward Meta-Debugging: When You're Stuck</h3>

      <p>
        <strong>Use this when a bug persists despite multiple fix attempts.</strong> Instead of trying yet another random solution, ask Shakespeare to analyze what you've already tried and create a systematic plan.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-purple-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Forward Meta-Debugging Example:</h4>
            <p className="text-sm bg-gray-100 p-4 rounded italic">
              "This authentication bug has persisted despite multiple attempts to fix it. We've tried: 1) Updating the JWT token handling, 2) Fixing the login form validation, 3) Modifying the API endpoint response. The user still can't stay logged in after page refresh. Perform an analysis of what we've already tried and create a new systematic plan to resolve this bug. What are we missing?"
            </p>
          </CardContent>
        </Card>
      </div>

      <p><strong>Key phrases for forward meta-debugging:</strong></p>

      <ul>
        <li>"Analyze what we've already tried and create a new plan"</li>
        <li>"What patterns do you see in our failed attempts?"</li>
        <li>"What fundamental assumption might we be missing?"</li>
        <li>"Create a systematic debugging plan based on our chat history"</li>
      </ul>

      <h3>Reverse Meta-Debugging: Learning from Inefficiency</h3>

      <p>
        <strong>Use this after solving a particularly bug to improve your future debugging skills.</strong> Ask Shakespeare to review your debugging session and identify how you could have been more efficient.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-orange-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Reverse Meta-Debugging Example:</h4>
            <p className="text-sm bg-gray-100 p-4 rounded italic">
              "I spent way too many credits trying to solve this form validation bug. We eventually fixed it, but it took 20 messages when it probably should have taken 5. Analyze our chat history and tell me: 1) What information should I have provided earlier? 2) Which debugging steps were unnecessary? 3) How can I be more efficient debugging similar issues next time?"
            </p>
          </CardContent>
        </Card>
      </div>

      <p><strong>Key phrases for reverse meta-debugging:</strong></p>

      <ul>
        <li>"Analyze our chat and tell me how I can be more efficient next time"</li>
        <li>"What should I have provided earlier to solve this faster?"</li>
        <li>"Which steps in our debugging process were unnecessary?"</li>
        <li>"What debugging pattern should I follow for similar issues?"</li>
      </ul>

      <h3>Starting Fresh: When to Clear the Chat</h3>

      <p>
        <strong>Sometimes the best debugging move is to start over.</strong> When the AI seems to be spinning its wheels or the cost per prompt is getting too high, it may be time to clear the chat or start a new conversation.
      </p>

      <p><strong>Signs you should start a new chat:</strong></p>

      <ul>
        <li><strong>Circular reasoning:</strong> The AI keeps suggesting the same solutions despite them not working</li>
        <li><strong>Context overload:</strong> The conversation has become so long that each prompt is expensive</li>
        <li><strong>Lost focus:</strong> The debugging session has strayed far from the original issue</li>
        <li><strong>Multiple failed approaches:</strong> You've tried many different solutions without progress</li>
      </ul>

      <p><strong>How to start a new chat in Shakespeare:</strong></p>

      <ol>
        <li>Click on the 3 dots action overflow menu</li>
        <li>Choose "New Chat"</li>
      </ol>

      <p>
        <strong>How to effectively start fresh:</strong> Before clearing the chat, document what you've learned, what you've tried, and what the current state is. When starting a new chat, provide a concise summary of the issue and what approaches have already failed. This prevents the AI from repeating unsuccessful attempts.
      </p>

      <div className="not-prose my-8">
        <Card className="border-l-4 border-blue-500">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">Starting Fresh Example:</h4>
            <p className="text-sm bg-gray-100 p-4 rounded italic">
              "Starting a new chat because the previous conversation got too long and costly. Summary: Working on a bug where published Nostr events (kind 1 notes) aren't appearing in the feed. Already tried: 1) Verifying event structure and signature validation, 2) Testing different relay configurations, 3) Checking WebSocket connection status, 4) Adjusting event filters and subscription queries. All failed. Current state: Events publish successfully (verified in Alby paranoid mode), relays accept them (200 OK responses), but they don't appear in the user's feed. Please help debug this with fresh eyes, avoiding the approaches we've already tested."
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="not-prose my-8">
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3 text-blue-900">When to Use Meta-Debugging</h4>
            <div className="space-y-2 text-sm text-blue-800">
              <div><strong>Forward:</strong> After 3+ failed fix attempts on the same bug</div>
              <div><strong>Forward:</strong> When you feel like you're going in circles</div>
              <div><strong>Forward:</strong> When the bug seems impossible to reproduce consistently</div>
              <div><strong>Reverse:</strong> After spending more credits than expected on a bug</div>
              <div><strong>Reverse:</strong> When you want to improve your debugging skills</div>
              <div><strong>Reverse:</strong> After solving a particularly tricky bug</div>
              <div><strong>Start Fresh:</strong> When costs per prompt are too high due to long conversation</div>
              <div><strong>Start Fresh:</strong> When the AI seems to be spinning its wheels</div>
              <div><strong>Start Fresh:</strong> When you've lost track of the original problem</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <hr className="my-12" />

      <p>
        <strong>Debugging is a skill that improves with practice.</strong> The more systematically you approach problems, the faster you'll identify solutions. Remember: Shakespeare can only help you as effectively as you can describe the problem. Master these debugging techniques, and you'll transform from someone who gets stuck on issues to someone who solves them quickly and confidently.
      </p>

      <div className="not-prose my-12 space-y-8">
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-3">🎭</div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Want to Learn Better Prompting?
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Master the fundamentals of effective prompting to build better projects with Shakespeare.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-100"
              >
                <a href="/blog/how-to-prompt-better-projects">
                  Learn Prompting Techniques →
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-100"
              >
                <a href="/shakespeare-resources">
                  Shakespeare Resource Center →
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>


    </article>
  );
}