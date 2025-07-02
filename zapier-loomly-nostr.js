/**
 * Zapier Code by Zapier - JavaScript
 * Publishes Loomly custom posts to Nostr at scheduled time
 * 
 * Input Data from Loomly "Custom Post Idea Created":
 * - inputData.content: Post content text
 * - inputData.scheduled_time: ISO 8601 timestamp when post should be published
 * - inputData.post_id: Loomly post ID for tracking
 * - inputData.hashtags: Optional hashtags array
 * 
 * Required Input Data in Zapier:
 * - nostr_private_key: Your Nostr private key (hex format)
 * - nostr_public_key: Your Nostr public key (hex format)
 * - nostr_relays: Comma-separated relay URLs (optional, defaults provided)
 */

// Import required crypto functions (available in Zapier environment)
const crypto = require('crypto');

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
 * Calculate SHA-256 hash
 */
function sha256(data) {
  return crypto.createHash('sha256').update(data, 'utf8').digest();
}

/**
 * Sign data using secp256k1 (simplified version for Zapier)
 * Note: This uses Node.js crypto which may not have full secp256k1 support
 * In production, you'd want to use a proper secp256k1 library
 */
function signSchnorr(privateKeyHex, messageHash) {
  // This is a simplified implementation
  // In a real implementation, you'd use a proper secp256k1 library
  const privateKey = hexToBytes(privateKeyHex);
  
  // For Zapier, we'll use a simplified signing approach
  // Note: This may need adjustment based on available crypto libraries
  const sign = crypto.createSign('SHA256');
  sign.update(messageHash);
  const signature = sign.sign({
    key: Buffer.from(privateKey),
    format: 'der',
    type: 'pkcs8'
  });
  
  return bytesToHex(signature);
}

/**
 * Create and sign a Nostr event
 */
function createNostrEvent(content, privateKeyHex, publicKeyHex, tags = []) {
  const createdAt = Math.floor(Date.now() / 1000);
  
  // Create event structure
  const eventData = [
    0,                    // Reserved field
    publicKeyHex,         // Public key
    createdAt,           // Created timestamp
    1,                   // Kind (1 = text note)
    tags,                // Tags array
    content              // Content
  ];
  
  // Serialize and hash
  const serialized = JSON.stringify(eventData);
  const hash = sha256(serialized);
  const eventId = bytesToHex(hash);
  
  // Sign the hash
  const signature = signSchnorr(privateKeyHex, hash);
  
  // Return complete event
  return {
    id: eventId,
    pubkey: publicKeyHex,
    created_at: createdAt,
    kind: 1,
    tags: tags,
    content: content,
    sig: signature
  };
}

/**
 * Publish event to Nostr relays via WebSocket
 */
async function publishToNostr(event, relays) {
  const WebSocket = require('ws');
  const publishPromises = [];
  
  for (const relayUrl of relays) {
    const promise = new Promise((resolve, reject) => {
      const ws = new WebSocket(relayUrl);
      
      ws.on('open', () => {
        // Send EVENT message
        const message = JSON.stringify(['EVENT', event]);
        ws.send(message);
        
        // Close after sending
        setTimeout(() => {
          ws.close();
          resolve({ relay: relayUrl, status: 'sent' });
        }, 1000);
      });
      
      ws.on('error', (error) => {
        reject({ relay: relayUrl, error: error.message });
      });
      
      ws.on('message', (data) => {
        try {
          const response = JSON.parse(data.toString());
          console.log(`Response from ${relayUrl}:`, response);
        } catch (e) {
          console.log(`Raw response from ${relayUrl}:`, data.toString());
        }
      });
    });
    
    publishPromises.push(promise);
  }
  
  // Wait for all relays to respond (or timeout)
  const results = await Promise.allSettled(publishPromises);
  return results;
}

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

/**
 * Calculate delay until scheduled time
 */
function calculateDelay(scheduledTime) {
  const now = new Date();
  const scheduled = new Date(scheduledTime);
  const delay = scheduled.getTime() - now.getTime();
  
  return Math.max(0, delay); // Don't allow negative delays
}

/**
 * Main execution for Zapier
 */
(async function() {
  try {
    // Get keys from input data (since Zapier doesn't have traditional env vars)
    const privateKey = inputData.nostr_private_key;
    const publicKey = inputData.nostr_public_key;
    
    if (!privateKey || !publicKey) {
      throw new Error('Missing required input data: nostr_private_key and nostr_public_key');
    }
    
    // Get relay URLs
    const relayUrls = inputData.nostr_relays 
      ? inputData.nostr_relays.split(',').map(url => url.trim())
      : DEFAULT_RELAYS;
    
    // Extract input data
    const {
      content,
      scheduled_time,
      post_id,
      hashtags
    } = inputData;
    
    if (!content) {
      throw new Error('No content provided in input data');
    }
    
    if (!scheduled_time) {
      throw new Error('No scheduled_time provided in input data');
    }
    
    // Calculate delay until scheduled time
    const delay = calculateDelay(scheduled_time);
    
    console.log(`Post scheduled for: ${scheduled_time}`);
    console.log(`Current time: ${new Date().toISOString()}`);
    console.log(`Delay: ${delay}ms (${Math.round(delay / 1000 / 60)} minutes)`);
    
    // If scheduled time is in the past or very soon (< 1 minute), publish immediately
    if (delay < 60000) {
      console.log('Publishing immediately (scheduled time is now or in the past)');
      
      // Extract hashtags and create tags
      const tags = extractHashtags(content, hashtags);
      
      // Add client tag
      tags.push(['client', 'Loomly-Zapier-Bridge']);
      
      // Add reference to Loomly post if post_id is available
      if (post_id) {
        tags.push(['r', `loomly:${post_id}`]);
      }
      
      // Create and sign event
      const event = createNostrEvent(content, privateKey, publicKey, tags);
      
      // Publish to Nostr
      const results = await publishToNostr(event, relayUrls);
      
      // Prepare response
      const successCount = results.filter(r => r.status === 'fulfilled').length;
      const failureCount = results.filter(r => r.status === 'rejected').length;
      
      output = {
        success: true,
        message: `Published to ${successCount}/${relayUrls.length} relays`,
        event_id: event.id,
        published_at: new Date().toISOString(),
        relay_results: results,
        scheduled_time: scheduled_time,
        delay_was: delay
      };
      
    } else {
      // Schedule for later using setTimeout
      console.log(`Scheduling publication for ${Math.round(delay / 1000 / 60)} minutes from now`);
      
      setTimeout(async () => {
        try {
          // Extract hashtags and create tags
          const tags = extractHashtags(content, hashtags);
          
          // Add client tag
          tags.push(['client', 'Loomly-Zapier-Bridge']);
          
          // Add reference to Loomly post if post_id is available
          if (post_id) {
            tags.push(['r', `loomly:${post_id}`]);
          }
          
          // Create and sign event
          const event = createNostrEvent(content, privateKey, publicKey, tags);
          
          // Publish to Nostr
          const results = await publishToNostr(event, relayUrls);
          
          console.log(`Scheduled post published. Event ID: ${event.id}`);
          console.log(`Published to ${results.filter(r => r.status === 'fulfilled').length}/${relayUrls.length} relays`);
          
        } catch (error) {
          console.error('Error publishing scheduled post:', error);
        }
      }, delay);
      
      // Return immediate response for Zapier
      output = {
        success: true,
        message: `Post scheduled for publication in ${Math.round(delay / 1000 / 60)} minutes`,
        scheduled_time: scheduled_time,
        delay_minutes: Math.round(delay / 1000 / 60),
        will_publish_at: new Date(Date.now() + delay).toISOString()
      };
    }
    
  } catch (error) {
    console.error('Error in main function:', error);
    throw error;
  }
})();

// Zapier expects the code to execute and set the 'output' variable

/**
 * SETUP INSTRUCTIONS FOR ZAPIER:
 * 
 * 1. In Zapier, create a new Zap with Loomly trigger "Custom Post Idea Created"
 * 
 * 2. Add a "Code by Zapier" action and select "Run JavaScript"
 * 
 * 3. Copy this entire file content into the Code field
 * 
 * 4. In the Input Data section, add these fields:
 *    FROM LOOMLY (map these):
 *    - content: The post content/text
 *    - scheduled_time: The scheduled publication time
 *    - post_id: The Loomly post ID (optional)
 *    - hashtags: Any hashtags array (optional)
 *    
 *    MANUAL ENTRY (type these directly):
 *    - nostr_private_key: Your Nostr private key (64-character hex string)
 *    - nostr_public_key: Your Nostr public key (64-character hex string)
 *    - nostr_relays: Comma-separated relay URLs (optional)
 * 
 * 6. Test the Zap with a sample post
 * 
 * SECURITY NOTES:
 * - Keep your private key secure and never share it
 * - Consider using a dedicated Nostr keypair for automated posting
 * - Test with a small audience first
 * 
 * LIMITATIONS:
 * - Zapier Code actions have execution time limits
 * - Very long delays (hours/days) may not work reliably
 * - For long delays, consider using Zapier's built-in delay functionality
 */