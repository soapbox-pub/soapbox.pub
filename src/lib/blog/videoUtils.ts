/**
 * Utility functions for handling video embeds in blog posts
 */

/**
 * Wraps video iframes with responsive containers for proper aspect ratio
 */
export function wrapVideoEmbeds(html: string): string {
  let processedHtml = html;

  // Create regex pattern for video iframes
  const videoIframeRegex = /<iframe[^>]*src=['\"](https?:\/\/[^'\"]*(?:youtube\.com|youtu\.be|vimeo\.com|dailymotion\.com|twitch\.tv|wistia\.com|brightcove\.com)[^'\"]*)['\"][^>]*><\/iframe>/gi;

  // Replace video iframes with wrapped versions
  processedHtml = processedHtml.replace(videoIframeRegex, (match) => {
    // Remove width and height attributes from the iframe
    const cleanedIframe = match
      .replace(/\s+width=['\"][^'\"]*['\"]/gi, '')
      .replace(/\s+height=['\"][^'\"]*['\"]/gi, '');

    // Wrap in responsive container
    return `<div class="video-wrapper">${cleanedIframe}</div>`;
  });

  return processedHtml;
}

/**
 * Extracts video ID from YouTube URLs
 */
export function getYouTubeVideoId(url: string): string | null {
  const regex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

/**
 * Extracts video ID from Vimeo URLs
 */
export function getVimeoVideoId(url: string): string | null {
  const regex = /vimeo\.com\/(?:.*\/)?(\d+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

/**
 * Creates a responsive video embed for YouTube
 */
export function createYouTubeEmbed(videoId: string, title?: string): string {
  return `
    <div class="video-wrapper">
      <iframe 
        src="https://www.youtube.com/embed/${videoId}" 
        title="${title || 'YouTube video'}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  `;
}

/**
 * Creates a responsive video embed for Vimeo
 */
export function createVimeoEmbed(videoId: string, title?: string): string {
  return `
    <div class="video-wrapper">
      <iframe 
        src="https://player.vimeo.com/video/${videoId}" 
        title="${title || 'Vimeo video'}"
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  `;
}