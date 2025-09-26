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

### 2. App Approval Workflow
**Before:** All apps automatically appeared in "All Apps" section
**After:** Apps require moderator approval before being visible

- **Implementation:**
  - **Approved Apps List:** `kind: 30267` with `d` tag "soapbox-approved-apps"
  - **Featured Apps List:** `kind: 30267` with `d` tag "soapbox-featured-apps"
  - **Workflow:** Submit → Pending → Approved → (Optionally) Featured
  - **Auto-approval:** Featuring an app automatically adds it to approved list
- **Benefits:**
  - Quality control for public showcase
  - Clear moderation workflow
  - Prevents spam and inappropriate content

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

#### Approved Apps List (Kind 30267)
```json
{
  "kind": 30267,
  "content": "Soapbox approved apps curated by moderators",
  "tags": [
    ["d", "soapbox-approved-apps"],
    ["title", "Soapbox Approved Apps"],
    ["description", "Apps approved for the Soapbox showcase"],
    ["a", "31733:pubkey1:app1-id"],
    ["a", "31733:pubkey2:app2-id"],
    ["a", "31733:pubkey3:app3-id"]
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
    ["a", "31733:pubkey2:app2-id"]
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
   - Added logic to fetch and process NIP-51 approved apps lists
   - Added logic to fetch and process NIP-51 featured apps lists
   - Added logic to process NIP-56 reports for hidden apps
   - Implemented proper hide/unhide state resolution (latest action wins)
   - Added `isApproved` field to AppSubmission interface

3. **`src/components/AppShowcaseCard.tsx`**
   - Refactored moderation actions to use proper event types
   - Added approve/unapprove actions using NIP-51 approved list
   - Featured/unfeatured: Updates NIP-51 featured list + auto-approves
   - Hide/unhide: Creates NIP-56 report events
   - Added visual status badges (Featured, Pending)
   - Added proper error handling and user feedback

4. **`src/pages/Showcase.tsx`**
   - Added APP_SUBMISSION_KIND constant
   - Updated filtering logic for approval workflow
   - Added "Pending Approval" section for moderators
   - Updated "All Apps" to show only approved apps
   - Updated tag filtering to exclude pending apps

### Removed Files
- **`src/hooks/useAppModeration.ts`** - Functionality moved directly to component

## Benefits of This Refactoring

1. **Standards Compliance:** Uses established Nostr event types instead of custom implementations
2. **Interoperability:** Other Nostr clients can understand and work with these events
3. **Maintainability:** Follows established patterns that are well-documented
4. **Extensibility:** Easy to add more moderation features using standard reporting
5. **Data Integrity:** Proper event type semantics prevent confusion
6. **Auditability:** Clear trail of all moderation actions
7. **Quality Control:** Approval workflow ensures only vetted apps appear publicly
8. **Spam Prevention:** Prevents automatic publication of inappropriate content

## Future Considerations

1. **Deletion Handling:** Consider implementing NIP-09 event deletion for removing reports
2. **Multi-Moderator Support:** Current implementation assumes single moderator, could be extended
3. **Advanced Reporting:** Could add more report types (inappropriate content, spam, etc.)
4. **Curation Categories:** Could create multiple featured lists for different categories
5. **User Reporting:** Allow regular users to report apps using the same NIP-56 pattern

## App Submission Workflow

### For Users:
1. **Submit App:** Fill out form and publish kind 31733 event
2. **Pending Status:** App shows "Pending" badge, only visible to moderators
3. **Approval:** Moderator approves app, making it publicly visible
4. **Featured:** Moderator may optionally feature approved apps

### For Moderators:
1. **Review Pending:** View "Pending Approval" section
2. **Approve:** Add app to approved list (kind 30267)
3. **Feature:** Add app to featured list + auto-approve
4. **Hide:** Create report event (kind 1984) if inappropriate
5. **Manage:** Update lists as needed for curation

## Migration Notes

- Existing apps submitted with kind 30023 will need to be resubmitted or migrated
- Old moderation events will be ignored in favor of the new system
- No data loss occurs as old events remain on relays
- The system gracefully handles missing or malformed events
- **New apps require approval** before appearing in public showcase

This refactoring establishes a solid foundation for the app showcase that follows Nostr best practices, includes proper quality control, and can easily integrate with the broader Nostr ecosystem.