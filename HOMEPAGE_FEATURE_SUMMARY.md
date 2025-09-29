# Homepage Feature Implementation Summary

## Overview
Added a new "Homepage" moderation option for showcase apps that allows moderators to curate a separate list of apps specifically for display on the homepage, distinct from the "Featured" apps list.

## Changes Made

### 1. Updated AppSubmission Interface
- Added `isHomepage: boolean` property to track which apps are selected for homepage display
- File: `src/hooks/useAppSubmissions.ts`

### 2. Enhanced useAppSubmissions Hook
- Added query for homepage apps list (`soapbox-homepage-apps`)
- Added logic to process homepage app coordinates
- Updated AppSubmission objects to include `isHomepage` property
- File: `src/hooks/useAppSubmissions.ts`

### 3. Updated AppShowcaseCard Component
- Added "Homepage" moderation action alongside existing "Feature", "Approve", "Hide" actions
- Added new moderation action handler for `homepage` and `unhomepage` actions
- Added blue "Homepage" badge to show when an app is selected for homepage
- Added dropdown menu item for "Add to Homepage" / "Remove from Homepage"
- File: `src/components/AppShowcaseCard.tsx`

### 4. Updated Homepage Display Logic
- Modified `FeaturedShowcaseApps` component to use homepage apps instead of featured apps
- Updated empty state message to reflect homepage context
- File: `src/pages/Index.tsx`

## How It Works

### For Moderators
1. Navigate to the Showcase page
2. Find an app you want to add to the homepage
3. Click the three-dot menu on the app card
4. Select "Add to Homepage" from the dropdown
5. The app will now appear on the homepage and show a blue "Homepage" badge

### Technical Implementation
1. When "Add to Homepage" is clicked, creates/updates a NIP-51 list event (kind 30267) with:
   - `d` tag: `soapbox-homepage-apps`
   - `a` tags containing app coordinates for each homepage app
2. Automatically approves the app if not already approved
3. Homepage displays up to 6 randomly shuffled apps from this list
4. Apps can be both "Featured" (for showcase prominence) and "Homepage" (for homepage display)

### Data Structure
- **List Type**: NIP-51 Curation List (kind 30267)
- **Identifier**: `soapbox-homepage-apps`
- **Content**: "Soapbox homepage apps curated by moderators"
- **Tags**: 
  - `['d', 'soapbox-homepage-apps']`
  - `['title', 'Soapbox Homepage Apps']`
  - `['description', 'Apps displayed on the Soapbox homepage']`
  - `['a', '{app-coordinate}']` for each homepage app

## Benefits
1. **Separation of Concerns**: Homepage and Featured apps can be curated independently
2. **Better Homepage Control**: Moderators can specifically choose which apps represent the platform best
3. **Flexibility**: Apps can be featured in showcase without being on homepage, and vice versa
4. **Consistent UX**: Uses same moderation pattern as existing features
5. **Backwards Compatible**: Doesn't break existing featured apps functionality

## Testing
- Build successfully completes
- All existing functionality preserved
- New moderation options available to moderators
- Homepage now pulls from dedicated homepage apps list