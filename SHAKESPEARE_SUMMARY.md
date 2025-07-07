# 🎭 Shakespeare: AI-Powered Website Builder on Nostr

https://shakespeare.diy/

## What is Shakespeare?

Shakespeare is a revolutionary AI-powered website builder that runs entirely on the Nostr protocol. Think of it as having a conversation with an AI assistant that can actually build websites for you in real-time. Instead of wrestling with complex website builders or learning to code, you simply describe what you want in plain English, and Shakespeare's AI assistants bring your vision to life.

The app is built on Nostr, which means it's decentralized, censorship-resistant, and puts you in control of your data. There are no central servers collecting your information, and all communication between you and the AI is encrypted using Nostr's NIP-44 encryption standard.

## Key Features

### 🤖 Conversational AI Building
- **Natural Language Interface**: Describe your website in plain English - "Build me a portfolio site with dark mode" or "Create an e-commerce store for handmade jewelry"
- **Context-Aware AI**: The AI remembers your project history and understands your preferences as you iterate
- **Multiple AI Assistants**: Choose from different Nostr Service Providers (NSPs), each offering unique AI capabilities and specializations

### 🔄 Real-Time Collaboration
- **Live Updates**: Watch your website being built in real-time as the AI works
- **Instant Feedback**: See changes immediately without refreshing or waiting for builds
- **Continuous Iteration**: Make changes and improvements through ongoing conversation with the AI

### 👀 Live Preview System
- **Side-by-Side View**: Desktop users can see their website preview alongside the chat interface
- **Mobile Responsive**: All generated sites automatically work on mobile devices
- **Instant Refresh**: Changes appear immediately in the preview window

### ⚡ Instant Deployment
- **Automatic Hosting**: Your websites are automatically deployed and accessible via public URLs
- **No Setup Required**: No need to configure hosting, domains, or deployment pipelines
- **Download Source**: Get the complete source code of your project as a ZIP file

### 🔐 Nostr-Native Security
- **Decentralized**: No central servers or data collection
- **Encrypted Communication**: All messages between you and AI assistants are encrypted with NIP-44
- **Self-Sovereign Identity**: You control your identity and data through your Nostr keys
- **Open Source**: Fully auditable codebase under AGPL 3.0 license

### 💰 Transparent Pay-Per-Use Model
- **No Subscriptions**: Only pay for actual AI generation time
- **Real-Time Cost Tracking**: See exactly how much each change costs as you build
- **Multiple Payment Options**: Pay with USD (via Stripe) or Bitcoin Lightning
- **Typical Costs**: Simple sites cost $2-5, complex apps $10-25, small changes $0.50-2

## How Shakespeare Works

### 1. **Authentication & Setup**
- Connect using any Nostr browser extension (Alby, nos2x, Flamingo, etc.)
- Your Nostr identity serves as your login - no passwords or email required
- The app checks if you're on the beta waitlist (currently invite-only)

### 2. **Choose Your AI Assistant (NSP)**
- Browse available Nostr Service Providers, each offering different AI capabilities
- Each NSP has its own specializations, pricing, and features
- Connect to your chosen NSP through encrypted Nostr communication

### 3. **Project Creation**
- Start a new project by describing what you want to build
- The AI begins working immediately, showing progress in real-time
- Watch as your website takes shape through the live preview

### 4. **Interactive Development**
- Chat with the AI to make changes: "Add a contact form" or "Make the header blue"
- The AI understands context and can make complex modifications
- See changes instantly in the preview window

### 5. **Project Management**
- **Project States**: Projects move through states like "initializing," "assistant_working," "ready," or "paused"
- **Pause/Resume**: Pause the AI when you want to review, resume when ready to continue
- **Multiple Projects**: Manage multiple websites simultaneously
- **Project History**: Full chat history and version tracking for each project

### 6. **Deployment & Sharing**
- Your website is automatically deployed with a public URL
- Download the complete source code as a ZIP file
- Share your live website immediately

## What You Can Build

Shakespeare's AI can create a wide variety of websites and web applications:

### 📄 **Business & Marketing Sites**
- Professional landing pages with contact forms
- Portfolio websites for creatives and professionals
- Company websites with multiple pages and sections
- Marketing sites with call-to-action buttons and lead capture

### 🛒 **E-commerce Solutions**
- Online stores with product catalogs
- Shopping cart functionality
- Product galleries and detailed pages
- Basic inventory management interfaces

### 📱 **Web Applications**
- Social media platforms (Twitter-like feeds, user profiles)
- Dashboard interfaces with data visualization
- Content management systems and blogs
- User authentication and account management

### 🎮 **Interactive Experiences**
- Browser-based games and puzzles
- Interactive galleries and portfolios
- Educational tools and quizzes
- Creative multimedia experiences

### 📊 **Data & Analytics**
- Cryptocurrency price tracking dashboards
- Analytics interfaces with charts and graphs
- Data visualization tools
- Reporting and monitoring systems

## Technical Architecture

### Frontend Technology
- **React 18**: Modern React with hooks, concurrent rendering, and improved performance
- **TypeScript**: Full type safety throughout the application
- **TailwindCSS**: Utility-first CSS framework for rapid styling
- **shadcn/ui**: 48+ accessible UI components built on Radix UI primitives
- **Vite**: Lightning-fast development server and build tool

### Nostr Integration
- **Nostrify**: Comprehensive Nostr framework for web applications
- **NIP-44 Encryption**: All AI communication is end-to-end encrypted
- **Real-time Updates**: Uses Nostr events for live collaboration
- **Multi-relay Support**: Connects to multiple Nostr relays for reliability

### State Management
- **Zustand**: Lightweight state management for NSP connections and real-time updates
- **TanStack Query**: Powerful data fetching, caching, and synchronization
- **Local Storage**: Persistent user preferences and session data

### NSP Protocol
Shakespeare implements a custom Nostr Service Provider protocol:
- **Kind 31999**: Service discovery and NSP advertisement
- **Kind 25742**: Encrypted RPC requests and responses
- **Kind 25743**: Server-initiated notifications for real-time updates
- **Multi-event Transport**: Large payloads automatically split across multiple Nostr events

## User Experience Features

### 🎨 **Modern Interface**
- Clean, intuitive chat-based interface
- Light and dark theme support
- Responsive design that works on all devices
- Professional UI components with smooth animations

### 📱 **Mobile Optimization**
- Full mobile support with touch-friendly interface
- Mobile-specific project selector
- Responsive preview system
- Optimized for both phone and tablet use

### 🔄 **Real-Time Collaboration**
- Live project state updates
- Real-time message delivery
- Instant preview refreshes
- Automatic reconnection handling

### 💳 **Integrated Payments**
- Stripe integration for USD payments
- Bitcoin Lightning support
- Real-time credit balance tracking
- Transparent fee structure

### 🛡️ **Security & Privacy**
- No data collection or tracking
- All communication encrypted
- Self-sovereign identity through Nostr
- Open source and auditable

## Getting Started

1. **Visit Shakespeare**: Go to [shakespeare.diy](https://shakespeare.diy)
2. **Install Nostr Extension**: Get a Nostr browser extension like Alby or nos2x
3. **Create Nostr Account**: Set up your Nostr identity if you don't have one
4. **Join Beta**: Sign up for the beta waitlist (currently invite-only)
5. **Start Building**: Once approved, choose an NSP and start describing your website

## Example Prompts to Try

```
"Build a modern portfolio website for a web developer with project showcases, 
an about section, and a contact form. Use a dark theme with blue accents."

"Create a Twitter-like social media app for Nostr with user profiles, 
real-time feeds, and the ability to post notes and images."

"Build an e-commerce store for handmade jewelry with product galleries, 
shopping cart, and a clean, elegant design."

"Make a cryptocurrency dashboard that tracks Bitcoin and Ethereum prices 
with charts and price alerts."

"Create a blog site with markdown support, categories, search functionality, 
and a clean reading experience."
```

## The Future of Web Development

Shakespeare represents a fundamental shift in how websites are built. Instead of learning complex tools or hiring developers, anyone can create professional websites through natural conversation. The combination of AI assistance and Nostr's decentralized infrastructure creates a new paradigm where:

- **Creativity is Democratized**: Anyone can build professional websites regardless of technical skill
- **Development is Conversational**: Building websites becomes as easy as describing what you want
- **Ownership is Preserved**: You control your data, identity, and creations
- **Innovation is Accelerated**: Rapid prototyping and iteration through AI collaboration

Shakespeare is not just a website builder—it's a glimpse into the future where AI assistants help us create digital experiences through natural human communication, all while maintaining the principles of decentralization and user sovereignty that make the web truly free.


## Mailchimp signup form code: 

<div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
  <style type="text/css">
        #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
    <form action="https://pub.us7.list-manage.com/subscribe/post?u=f1f718a93795f42a604d558d8&amp;id=f7271442a0&amp;f_id=00ffa3e4f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <div id="mc_embed_signup_scroll"><h2>Subscribe</h2>
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group"><label for="mce-NPUB">npub </label><input type="text" name="NPUB" class=" text" id="mce-NPUB" value=""></div><div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div>
<div hidden=""><input type="hidden" name="tags" value="8981997,8981998"></div>
        <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display: none;"></div>
            <div class="response" id="mce-success-response" style="display: none;"></div>
        </div><div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text" name="b_f1f718a93795f42a604d558d8_f7271442a0" tabindex="-1" value=""></div><div class="clear"><input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe"></div>
    </div>
</form>
</div>
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[6]='NPUB';ftypes[6]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
