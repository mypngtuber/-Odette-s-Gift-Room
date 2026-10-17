/**
 * Video links parser and YouTube URL normalizer.
 * Reads [ODETTE_BIRTHDAY_VIDEO] and [BIRTHDAY_SONG_VIDEO] sections
 * from public/video-links.txt and outputs safe youtube-nocookie.com embed URLs.
 */

export function extractYouTubeId(url) {
  if (!url || typeof url !== 'string') return null;

  const trimmed = url.trim();
  if (!trimmed) return null;

  // Check for common placeholder patterns
  if (
    trimmed.includes('VIDEO_ID') ||
    trimmed.includes('YOUR_ID') ||
    trimmed.includes('PLACEHOLDER') ||
    trimmed.toLowerCase().includes('example')
  ) {
    return null;
  }

  // Handle various YouTube URL formats:
  // 1. https://www.youtube.com/watch?v=VIDEO_ID (and with additional query params)
  // 2. https://youtu.be/VIDEO_ID
  // 3. https://www.youtube.com/shorts/VIDEO_ID
  // 4. https://www.youtube.com/embed/VIDEO_ID
  // 5. https://m.youtube.com/watch?v=VIDEO_ID

  const patterns = [
    /(?:youtube\.com\/watch\?.*v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{10,12})/i,
    /youtube-nocookie\.com\/embed\/([a-zA-Z0-9_-]{10,12})/i
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

export function toEmbedUrl(videoId) {
  if (!videoId) return null;
  // Safe embed URL using youtube-nocookie.com, disable autoplay by default
  return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?rel=0&modestbranding=1`;
}

export function parseVideoLinksText(rawText) {
  const result = {
    odetteVideo: {
      raw: '',
      id: null,
      embedUrl: null,
      isValid: false
    },
    birthdaySongVideo: {
      raw: '',
      id: null,
      embedUrl: null,
      isValid: false
    }
  };

  if (!rawText || typeof rawText !== 'string') {
    return result;
  }

  const lines = rawText.split(/\r?\n/);
  let currentSection = null;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      const sectionName = trimmed.slice(1, -1).trim().toUpperCase();
      if (sectionName === 'ODETTE_BIRTHDAY_VIDEO') {
        currentSection = 'ODETTE_BIRTHDAY_VIDEO';
      } else if (sectionName === 'BIRTHDAY_SONG_VIDEO') {
        currentSection = 'BIRTHDAY_SONG_VIDEO';
      } else {
        currentSection = null;
      }
      continue;
    }

    if (currentSection === 'ODETTE_BIRTHDAY_VIDEO' && !result.odetteVideo.raw) {
      result.odetteVideo.raw = trimmed;
      const id = extractYouTubeId(trimmed);
      if (id) {
        result.odetteVideo.id = id;
        result.odetteVideo.embedUrl = toEmbedUrl(id);
        result.odetteVideo.isValid = true;
      }
    } else if (currentSection === 'BIRTHDAY_SONG_VIDEO' && !result.birthdaySongVideo.raw) {
      result.birthdaySongVideo.raw = trimmed;
      const id = extractYouTubeId(trimmed);
      if (id) {
        result.birthdaySongVideo.id = id;
        result.birthdaySongVideo.embedUrl = toEmbedUrl(id);
        result.birthdaySongVideo.isValid = true;
      }
    }
  }

  return result;
}

/**
 * Fetch video-links.txt from public root, falling back to assets folder or default text
 */
export async function loadVideoLinks() {
  const tryPaths = ['/video-links.txt', '/assets/video-links.txt'];

  for (const path of tryPaths) {
    try {
      const response = await fetch(path);
      if (response.ok) {
        const text = await response.text();
        return parseVideoLinksText(text);
      }
    } catch {
      // Continue to next path
    }
  }

  // Fallback default text if network fetch is not available (e.g. offline file:// protocol)
  const defaultText = `[ODETTE_BIRTHDAY_VIDEO]
https://youtube.com/shorts/0mBLYpKQxkA?feature=share

[BIRTHDAY_SONG_VIDEO]
https://youtube.com/shorts/6w3Uy9w0n_Y`;

  return parseVideoLinksText(defaultText);
}
