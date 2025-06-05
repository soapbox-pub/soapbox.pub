# Custom NIPs on Nostr

This document defines the custom Nostr Implementation Possibility (NIP) specification used by this project for community-authored protocol extensions.

## Custom NIP Event (Kind 30817)

Custom NIP events are addressable events of kind `30817` that allow users to create, share, and maintain custom protocol specifications that extend or complement the official Nostr protocol.

### Event Structure

```json
{
  "kind": 30817,
  "content": "<markdown content of the NIP>",
  "tags": [
    ["d", "<unique-identifier>"],
    ["title", "<human-readable title>"],
    ["k", "<kind-number>"],
    ["k", "<another-kind-number>"],
    ["summary", "<brief description>"],
    ["t", "<topic-tag>"],
    ["published_at", "<unix-timestamp>"]
  ]
}
```

### Required Tags

- `d` (required) - Unique identifier for the NIP. SHOULD be URL-safe and descriptive (e.g., "gaming-events", "marketplace-extension")
- `title` (required) - Human-readable title for the NIP

### Optional Tags

- `k` (optional) - Zero or more `k` tags MAY be included to specify event kinds that this NIP defines. Each `k` tag contains a single event kind number as a string
- `summary` (optional) - Brief description of what the NIP accomplishes
- `t` (optional) - Topic tags for categorization and discovery
- `published_at` (optional) - Unix timestamp indicating when the NIP was first published (may differ from `created_at` for updates)

### Content

The `content` field MUST contain the full specification of the custom NIP in Markdown format. This should include:

- Clear description of the purpose and use case
- Event structure definitions for any new event kinds
- Tag specifications and requirements
- Implementation guidelines for clients and relays
- Examples demonstrating usage

## Implementation Guidelines

### For Clients

Clients implementing custom NIP support SHOULD:

- Display custom NIPs distinctly from official NIPs
- Show authorship information prominently
- Provide search and filtering capabilities by title, identifier, tags, and defined event kinds
- Support Markdown rendering for content
- Allow users to publish their own custom NIPs
- Enable commenting and discussion on custom NIPs

### For Relays

Relays MAY:

- Index `k` tags of custom NIPs for discovery of NIPs that define specific event kinds
- Index `t` tags for topic-based discovery
- Provide search capabilities across NIP content
- Implement rate limiting for custom NIP publication

## Event Kind Selection

When defining new event kinds in custom NIPs, authors SHOULD:

1. Check existing official NIPs to avoid conflicts
2. Choose appropriate kind ranges based on intended behavior:
   - **Regular Events** (1 ≤ kind < 10000): For events expected to be stored permanently
   - **Replaceable Events** (10000 ≤ kind < 20000): For events where only the latest per pubkey+kind is stored
   - **Addressable Events** (30000 ≤ kind < 40000): For events identified by pubkey+kind+d-tag

## Discovery and Indexing

Custom NIPs can be discovered through:

- Querying for kind `30817` events
- Filtering by `k` tags to find NIPs that define specific event kinds
- Filtering by `t` tags for topic-based discovery
- Text search across titles and content (if supported by relay)

## Examples

### Basic Custom NIP

```json
{
  "kind": 30817,
  "content": "# Custom Event Kind for Gaming\n\nThis NIP defines event kind 30100 for gaming-related events...",
  "tags": [
    ["d", "gaming-events"],
    ["title", "Gaming Events Protocol"],
    ["k", "30100"],
    ["summary", "Event kind 30100 for gaming-related events on Nostr"],
    ["t", "gaming"],
    ["t", "protocol"]
  ]
}
```

### Multi-Kind Custom NIP

```json
{
  "kind": 30817,
  "content": "# Marketplace Protocol Extension\n\nThis NIP extends the marketplace protocol with additional event kinds...",
  "tags": [
    ["d", "marketplace-extension"],
    ["title", "Extended Marketplace Protocol"],
    ["k", "30200"],
    ["k", "30201"],
    ["k", "30202"],
    ["summary", "Additional event kinds for enhanced marketplace functionality"],
    ["t", "marketplace"],
    ["t", "commerce"],
    ["t", "protocol"]
  ]
}
```

## Versioning and Updates

Since custom NIPs are addressable events, updates to a NIP will replace the previous version. Authors SHOULD:

- Use the `published_at` tag to indicate the original publication date
- Include version information in the content if maintaining multiple versions
- Consider the impact on existing implementations when making breaking changes

## Relationship to Official NIPs

Custom NIPs are community-driven extensions and do not require approval from the official Nostr protocol maintainers. However, successful custom NIPs MAY eventually be proposed as official NIPs through the standard process.

Custom NIPs SHOULD NOT conflict with existing official NIPs and SHOULD clearly document any dependencies on official protocol features.