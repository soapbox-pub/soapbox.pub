# NostrHub Integration Pattern

This implementation follows the same patterns used in NostrHub for creating a dynamic, Nostr-powered application.

## Key Patterns Adopted

### 1. **Event-Driven Content**
- Uses Nostr events as the primary data source
- Implements real-time querying and updates
- Follows addressable event patterns for editability

### 2. **Authentication Integration**
- Leverages existing `@nostrify/react` authentication
- Supports multiple login methods (extension, nsec, bunker)
- Maintains user session state

### 3. **Publishing Events**
- Uses `useNostrPublish` hook for event creation
- Implements proper error handling and user feedback
- Follows Nostr event structure conventions

### 4. **Query Patterns**
- Uses `@tanstack/react-query` for data fetching
- Implements proper caching and refetch strategies
- Handles loading and error states

### 5. **User Experience**
- Form validation with `zod` and `react-hook-form`
- Toast notifications for user feedback
- Responsive design with Tailwind CSS

## Differences from NostrHub

While following NostrHub patterns, this implementation has some key differences:

### **Event Kind**
- **NostrHub**: Uses kind 30023 for NIPs (documentation)
- **Showcase**: Uses kind 30023 for app submissions
- **Rationale**: Both are long-form content that benefits from editability

### **Tag Structure**
- **NostrHub**: NIP-specific tags (`k` for kinds, etc.)
- **Showcase**: App-specific tags (`website`, `repository`, `icon`, etc.)
- **Common**: Both use `d` tag for unique identifiers, `t` for categorization

### **Moderation Approach**
- **NostrHub**: Community-driven with multiple moderators
- **Showcase**: Single designated moderator for curation
- **Implementation**: Uses separate kind 1 events for moderation actions

### **Content Focus**
- **NostrHub**: Technical documentation and protocol specs
- **Showcase**: User applications and creative projects
- **Audience**: Different user bases with different needs

## Code Structure Similarities

```
useCustomNips (NostrHub) → useAppSubmissions (Showcase)
CreateNipPage → AppSubmissionForm
CustomNipCard → AppShowcaseCard
useNostrPublish → useNostrPublish (same)
```

## Benefits of This Approach

1. **Proven Pattern**: NostrHub has demonstrated this works at scale
2. **Decentralized**: No central database or server dependencies
3. **Real-time**: Updates appear immediately across all clients
4. **Censorship Resistant**: Content lives on the Nostr network
5. **User Ownership**: Users control their own submissions
6. **Transparent**: All actions are publicly verifiable

This implementation successfully adapts NostrHub's proven patterns for a different use case while maintaining the core benefits of decentralized, event-driven content management.