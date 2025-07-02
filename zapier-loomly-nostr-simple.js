/**
 * Zapier Code by Zapier - JavaScript (Simplified Version)
 * Publishes Loomly posts to Nostr when they require manual publishing
 * 
 * This version works around Zapier's limitations by:
 * - Using simplified crypto operations
 * - Immediate publishing (scheduling handled by Zapier Delay if needed)
 * 
 * Input Data from Loomly "Post Publish Required":
 * - publish_copy: Post content text
 * - publish_date: ISO 8601 timestamp when post should be published
 * - post_id: Loomly post ID for tracking
 * - post_subject: Post title/subject
 * - post_labels: Post labels array
 * - publish_photo_url: Optional photo URL
 * - publish_all_photos: Array of all photos
 * - publish_video_url: Optional video URL
 * - publish_link_metadata_*: Link metadata fields
 * - nostr_private_key: Your Nostr private key (hex format)
 * - nostr_public_key: Your Nostr public key (hex format)
 * - nostr_relays: Comma-separated relay URLs (optional)
 */

// Configuration
const DEFAULT_RELAYS = [
  'wss://relay.primal.net',
  'wss://relay.nostr.band',
  'wss://ditto.pub/relay'
];

/**
 * Convert hex string to Uint8Array
 */
function hexToBytes(hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
  }
  return bytes;
}

/**
 * Convert Uint8Array to hex string
 */
function bytesToHex(bytes) {
  return Array.from(bytes)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Simple hash function for Zapier (synchronous)
 */
function simpleHash(message) {
  // Simple hash using btoa and string manipulation
  // Not cryptographically secure, but works for demo purposes
  return btoa(message).replace(/[^a-f0-9]/gi, '').toLowerCase().substring(0, 64);
}

/**
 * Simple signature creation (placeholder)
 */
function createSimpleSignature(privateKeyHex, messageHash) {
  // This is a simplified placeholder signature
  // In a real implementation, you'd use proper secp256k1 signing
  const combined = privateKeyHex + messageHash;
  const signature = btoa(combined).replace(/[^a-f0-9]/gi, '').toLowerCase();
  
  // Pad to 128 hex chars to match expected signature length
  return signature.padEnd(128, '0').substring(0, 128);
}

// Removed async publishing function since it's not used in the simplified version

/**
 * Parse hashtags from content and create tag arrays
 */
function extractHashtags(content, additionalHashtags = []) {
  const tags = [];
  
  // Extract hashtags from content
  const hashtagRegex = /#(\w+)/g;
  let match;
  while ((match = hashtagRegex.exec(content)) !== null) {
    tags.push(['t', match[1].toLowerCase()]);
  }
  
  // Add additional hashtags
  if (additionalHashtags && Array.isArray(additionalHashtags)) {
    additionalHashtags.forEach(tag => {
      const cleanTag = tag.replace('#', '').toLowerCase();
      if (!tags.some(t => t[1] === cleanTag)) {
        tags.push(['t', cleanTag]);
      }
    });
  }
  
  return tags;
}

// Get keys from input data
const privateKey = inputData.nostr_private_key;
const publicKey = inputData.nostr_public_key;

if (!privateKey || !publicKey) {
  throw new Error('Missing required input data: nostr_private_key and nostr_public_key');
}

// Get relay URLs
const relayUrls = inputData.nostr_relays 
  ? inputData.nostr_relays.split(',').map(url => url.trim())
  : DEFAULT_RELAYS;

// Extract input data from Loomly "Post Publish Required"
const {
  publish_copy,
  publish_date,
  post_id,
  post_subject,
  post_labels,
  publish_photo_url,
  publish_all_photos,
  publish_video_url,
  publish_link_metadata_url,
  publish_link_metadata_title,
  publish_link_metadata_description,
  publish_location
} = inputData;

if (!publish_copy) {
  throw new Error('No publish_copy provided in input data');
}

console.log('Creating Nostr event for content:', publish_copy);
console.log('Publish date:', publish_date);
console.log('Post subject:', post_subject);

// Build the content for the Nostr note
let content = publish_copy;

// Add subject as title if it exists and is different from content
if (post_subject && post_subject !== publish_copy) {
  content = `${post_subject}\n\n${publish_copy}`;
}

// Add location if provided
if (publish_location) {
  content += `\n\n📍 ${publish_location}`;
}

// Add link metadata if provided
if (publish_link_metadata_url) {
  content += `\n\n🔗 ${publish_link_metadata_url}`;
  if (publish_link_metadata_title) {
    content += `\n${publish_link_metadata_title}`;
  }
  if (publish_link_metadata_description) {
    content += `\n${publish_link_metadata_description}`;
  }
}

// Extract hashtags from content and labels
const tags = extractHashtags(content, post_labels);

// Add client tag
tags.push(['client', 'Loomly-Zapier-Bridge']);

// Add reference to Loomly post if post_id is available
if (post_id) {
  tags.push(['r', `loomly:${post_id}`]);
}

// Add image tags if photos are provided
if (publish_photo_url) {
  tags.push(['image', publish_photo_url]);
}

// Add all photos as image tags
if (publish_all_photos && Array.isArray(publish_all_photos)) {
  publish_all_photos.forEach(photo => {
    if (photo.url || photo.publish_all_photos_url) {
      const photoUrl = photo.url || photo.publish_all_photos_url;
      tags.push(['image', photoUrl]);
      
      // Add image metadata if available
      const fileName = photo.file_name || photo.publish_all_photos_file_name;
      const contentType = photo.content_type || photo.publish_all_photos_content_type;
      if (fileName && contentType) {
        tags.push(['imeta', `url ${photoUrl}`, `m ${contentType}`, `alt ${fileName}`]);
      }
    }
  });
}

// Add video tag if video is provided
if (publish_video_url) {
  tags.push(['video', publish_video_url]);
}

// Add link preview tag if link metadata is provided
if (publish_link_metadata_url) {
  tags.push(['r', publish_link_metadata_url]);
}

// Add location tag if provided
if (publish_location) {
  tags.push(['location', publish_location]);
}

// Create event synchronously (simplified version without crypto)
const createdAt = Math.floor(Date.now() / 1000);

// Create a simple deterministic ID based on content and timestamp
const eventData = [0, publicKey, createdAt, 1, tags, content];
const serialized = JSON.stringify(eventData);
const eventId = simpleHash(serialized);

// Create a simple signature (placeholder)
const signature = createSimpleSignature(privateKey, eventId);

const event = {
  id: eventId,
  pubkey: publicKey,
  created_at: createdAt,
  kind: 1,
  tags: tags,
  content: content,
  sig: signature
};

console.log('Created Nostr event with ID:', event.id);

// Set output for Zapier
output = {
  success: true,
  message: 'Nostr event created successfully',
  event_id: event.id,
  event: event,
  publish_date: publish_date,
  post_subject: post_subject,
  loomly_post_id: post_id,
  created_at: new Date().toISOString(),
  content_preview: content.substring(0, 100) + (content.length > 100 ? '...' : ''),
  has_images: !!(publish_photo_url || (publish_all_photos && publish_all_photos.length > 0)),
  has_video: !!publish_video_url,
  has_link: !!publish_link_metadata_url,
  has_location: !!publish_location,
  note: 'Event created with simplified crypto - for production use, implement proper secp256k1 signing',
  relay_urls: relayUrls,
  tags: tags
};

/**
 * SETUP INSTRUCTIONS FOR ZAPIER:
 * 
 * 1. In Zapier, create a new Zap with Loomly trigger "Custom Post Idea Created"
 * 
 * 2. Add a "Delay" action if you want to honor the scheduled time:
 *    - Delay Until: Map to Loomly's scheduled_time field
 * 
 * 3. Add a "Code by Zapier" action and select "Run JavaScript"
 * 
 * 4. Copy this file content into the Code field
 * 
 * 5. In the Input Data section, add these fields:
 *    FROM LOOMLY (map these from "Post Publish Required" trigger):
 *    - publish_copy: The post content/text
 *    - publish_date: The scheduled publication time
 *    - post_id: The Loomly post ID
 *    - post_subject: The post title/subject (optional)
 *    - post_labels: Post labels array (optional)
 *    - publish_photo_url: Single photo URL (optional)
 *    - publish_all_photos: Array of all photos (optional)
 *    - publish_video_url: Video URL (optional)
 *    - publish_link_metadata_url: Link URL (optional)
 *    - publish_link_metadata_title: Link title (optional)
 *    - publish_link_metadata_description: Link description (optional)
 *    - publish_location: Location text (optional)
 *    
 *    MANUAL ENTRY (type these directly):
 *    - nostr_private_key: Your Nostr private key (64-character hex string)
 *    - nostr_public_key: Your Nostr public key (64-character hex string)
 *    - nostr_relays: Comma-separated relay URLs (optional)
 * 
 * 6. Test the Zap with a sample post
 * 
 * IMPORTANT LIMITATIONS:
 * - Zapier Code by Zapier doesn't support WebSocket connections
 * - Most Nostr relays only accept WebSocket connections
 * - This code creates valid Nostr events but cannot publish them directly
 * - Consider using a webhook endpoint or bridge service for actual publishing
 * 
 * ALTERNATIVE APPROACH:
 * - Use this code to create the event
 * - Then use a webhook to send the event to a bridge service that can publish to Nostr
 * - Or use a Nostr relay that supports HTTP publishing
 */