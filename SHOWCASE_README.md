# Dynamic Nostr-Powered App Showcase

## Overview

The showcase page has been completely refactored to be dynamically powered by Nostr events. Users can now submit their own applications to the showcase, and the content is rendered in real-time from the Nostr network.

## Features

### 🔐 Authentication Required
- Users must log in with Nostr (extension, nsec, or bunker) before submitting apps
- Supports all existing login methods from the current site

### 📝 App Submission Form
- **App Name**: Required field for the application name
- **Website URL**: Live URL where the app can be accessed
- **Repository URL**: GitHub/GitLab repository clone URL
- **Description**: Detailed description of the app and its features
- **App Icon URL**: URL to the app's icon/logo image
- **Screenshot URL**: URL to a screenshot of the app in action
- **Tags**: Categorization tags (social, gaming, productivity, etc.)
- **Author Npub**: The npub of the app's author (can be different from submitter)

### 🎯 Dynamic Content Rendering
- **Featured Apps**: Curated section of highlighted applications
- **All Apps**: Expandable section showing all community submissions
- **Search & Filter**: Real-time search and tag-based filtering
- **Real-time Updates**: Content updates automatically as new events are published

### 👑 Moderation System
- **Moderator**: `npub1jvnpg4c6ljadf5t6ry0w9q0rnm4mksde87kglkrc993z46c39axsgq89sc`
- **Feature/Un-feature**: Promote apps to the featured section
- **Hide/Unhide**: Remove inappropriate content from public view
- **Hidden Apps Section**: Moderator-only view of hidden apps for management

### ✏️ User Management
- **Edit Own Apps**: Users can edit applications they've submitted
- **Ownership Verification**: Only the original submitter can edit their apps
- **Update Support**: Uses Nostr's replaceable event system for updates

## Technical Implementation

### Nostr Event Structure

**App Submissions (Kind 30023 - Addressable Events)**
```json
{
  "kind": 30023,
  "content": "App description...",
  "tags": [
    ["d", "unique-app-identifier"],
    ["title", "App Name"],
    ["website", "https://app.com"],
    ["repository", "https://github.com/user/repo"],
    ["icon", "https://app.com/icon.png"],
    ["screenshot", "https://app.com/screenshot.png"],
    ["author", "npub1..."],
    ["t", "soapbox-app-submission"],
    ["app-tag", "social"],
    ["app-tag", "gaming"]
  ]
}
```

**Moderation Events (Kind 1)**
```json
{
  "kind": 1,
  "content": "Moderation action: feature on app \"App Name\"",
  "tags": [
    ["a", "30023:pubkey:app-identifier"],
    ["action", "feature"], // or "unfeature", "hide", "unhide"
    ["t", "soapbox-moderation"]
  ]
}
```

### Key Components

1. **`useAppSubmissions` Hook**: Fetches and processes app submissions with moderation
2. **`AppSubmissionForm` Component**: Handles app creation and editing
3. **`AppShowcaseCard` Component**: Displays individual apps with moderation controls
4. **Dynamic Showcase Page**: Main page with sections and filtering

### Data Flow

1. **Submission**: User fills form → Creates Nostr event (kind 30023)
2. **Moderation**: Moderator performs action → Creates moderation event (kind 1)
3. **Display**: Hook queries events → Applies moderation → Renders UI
4. **Updates**: User edits app → Updates existing event with same `d` tag

## User Experience

### For Regular Users
- Browse featured and community apps
- Search and filter by tags
- Submit their own applications
- Edit their submitted apps
- Real-time content updates

### For the Moderator
- All regular user features
- Feature/unfeature apps
- Hide/unhide inappropriate content
- View hidden apps section
- Full moderation control

## Security & Moderation

- **Decentralized**: No central database, all data on Nostr
- **Moderation Control**: Only designated moderator can feature/hide
- **User Ownership**: Only original submitters can edit their apps
- **Event Verification**: All actions are cryptographically signed
- **Transparent**: All moderation actions are public events

## Future Enhancements

- **Rating System**: Allow users to rate/review apps
- **Categories**: More sophisticated categorization
- **Analytics**: Track app views and engagement
- **Notifications**: Notify users of moderation actions
- **Bulk Moderation**: Tools for managing multiple apps

## Migration from Static Content

The previous static Shakespeare apps have been replaced with this dynamic system. The new system is more flexible, community-driven, and allows for real-time updates without code deployments.

## Getting Started

1. Visit the showcase page
2. Click "Submit Your App"
3. Log in with your Nostr account
4. Fill out the submission form
5. Your app will appear in the "All Apps" section
6. The moderator may feature it to promote visibility

The showcase is now a living, breathing community space powered by Nostr! 🚀