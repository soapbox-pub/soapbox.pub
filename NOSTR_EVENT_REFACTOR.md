# Nostr Event Type Refactoring for App Showcase

## Overview
This document outlines the refactoring of the Soapbox app showcase to use proper Nostr event types for app submissions and moderation actions, following Nostr best practices.

## Changes Made

### 1. App Submission Event Kind
**Before:** Used `kind: 30023` (Long-form Content)
**After:** Used `kind: 31733` (Custom App Submission)

- **Why:** Kind 30023 is for long-form articles/blog posts, not app submissions
- **Solution:** Generated a new unused addressable event kind (31733) specifically for app submissions
- **Benefits:** 
  - Proper semantic meaning
  - Addressable events allow updates/replacements
  - Clear separation from other content types

### 2. Featured Apps Management
**Before:** Used custom `kind: 1` events with moderation tags
**After:** Used `kind: 30267` (NIP-51 App Curation Sets)

- **Why:** NIP-51 defines standardized list management for curated content
- **Implementation:**
  - Moderators maintain a single replaceable list with `d` tag "soapbox-featured-apps"
  - Each featured app is referenced using an `a` tag with the app's coordinate
  - When featuring/unfeaturing, the entire list is updated and republished
- **Benefits:**
  - Standard Nostr pattern for curation
  - Atomic updates of the featured list
  - Easy to query and maintain

### 3. Hidden Apps Management  
**Before:** Used custom moderation events
**After:** Used `kind: 1984` (NIP-56 Reporting)

- **Why:** NIP-56 is the standard for reporting and moderation actions
- **Implementation:**
  - Hide action: Creates a report with `spam` type and `hidden` label
  - Unhide action: Creates a counter-report with `other` type and `unhidden` label
  - Uses custom labels: `L: soapbox.moderation`, `l: hidden/unhidden`
- **Benefits:**
  - Standard reporting mechanism
  - Interoperable with other Nostr moderation tools
  - Clear audit trail of moderation actions

## Technical Implementation

### Event Structures

#### App Submission (Kind 31733)
```json
{
  "kind": 31733,
  "content": "App description...",
  "tags": [
    ["d", "unique-app-identifier"],
    ["title", "App Name"],
    ["website", "https://app.example.com"],
    ["repository", "https://github.com/user/repo.git"],
    ["icon", "https://example.com/icon.png"],
    ["screenshot", "https://example.com/screenshot.png"],
    ["author", "npub1..."],
    ["t", "soapbox-app-submission"],
    ["app-tag", "social"],
    ["app-tag", "productivity"]
  ]
}
```

#### Featured Apps List (Kind 30267)
```json
{
  "kind": 30267,
  "content": "Soapbox featured apps curated by moderators",
  "tags": [
    ["d", "soapbox-featured-apps"],
    ["title", "Soapbox Featured Apps"],
    ["description", "Apps featured in the Soapbox showcase"],
    ["a", "31733:pubkey1:app1-id"],
    ["a", "31733:pubkey2:app2-id"],
    ["a", "31733:pubkey3:app3-id"]
  ]
}
```

#### Hide App Report (Kind 1984)
```json
{
  "kind": 1984,
  "content": "App hidden by moderator: \"App Name\"",
  "tags": [
    ["a", "31733:pubkey:app-id", "spam"],
    ["p", "app-author-pubkey"],
    ["L", "soapbox.moderation"],
    ["l", "hidden", "soapbox.moderation"]
  ]
}
```

#### Unhide App Report (Kind 1984)
```json
{
  "kind": 1984,
  "content": "App unhidden by moderator: \"App Name\"",
  "tags": [
    ["a", "31733:pubkey:app-id", "other"],
    ["p", "app-author-pubkey"],
    ["L", "soapbox.moderation"],
    ["l", "unhidden", "soapbox.moderation"]
  ]
}
```

## Code Changes

### Modified Files
1. **`src/components/AppSubmissionForm.tsx`**
   - Changed event kind from 30023 to 31733

2. **`src/hooks/useAppSubmissions.ts`**
   - Updated to query kind 31733 for app submissions
   - Added logic to fetch and process NIP-51 featured apps lists
   - Added logic to process NIP-56 reports for hidden apps
   - Implemented proper hide/unhide state resolution (latest action wins)

3. **`src/components/AppShowcaseCard.tsx`**
   - Refactored moderation actions to use proper event types
   - Featured/unfeatured: Updates NIP-51 curation list
   - Hide/unhide: Creates NIP-56 report events
   - Added proper error handling and user feedback

4. **`src/pages/Showcase.tsx`**
   - Added APP_SUBMISSION_KIND constant
   - No major logic changes needed

### Removed Files
- **`src/hooks/useAppModeration.ts`** - Functionality moved directly to component

## Benefits of This Refactoring

1. **Standards Compliance:** Uses established Nostr event types instead of custom implementations
2. **Interoperability:** Other Nostr clients can understand and work with these events
3. **Maintainability:** Follows established patterns that are well-documented
4. **Extensibility:** Easy to add more moderation features using standard reporting
5. **Data Integrity:** Proper event type semantics prevent confusion
6. **Auditability:** Clear trail of all moderation actions

## Future Considerations

1. **Deletion Handling:** Consider implementing NIP-09 event deletion for removing reports
2. **Multi-Moderator Support:** Current implementation assumes single moderator, could be extended
3. **Advanced Reporting:** Could add more report types (inappropriate content, spam, etc.)
4. **Curation Categories:** Could create multiple featured lists for different categories
5. **User Reporting:** Allow regular users to report apps using the same NIP-56 pattern

## Migration Notes

- Existing apps submitted with kind 30023 will need to be resubmitted or migrated
- Old moderation events will be ignored in favor of the new system
- No data loss occurs as old events remain on relays
- The system gracefully handles missing or malformed events

This refactoring establishes a solid foundation for the app showcase that follows Nostr best practices and can easily integrate with the broader Nostr ecosystem.