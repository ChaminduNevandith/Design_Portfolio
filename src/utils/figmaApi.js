// Figma API utility functions

/**
 * Extract file ID from Figma URL
 * @param {string} figmaUrl - The Figma design URL
 * @returns {string|null} - The file ID or null if not found
 */
export const extractFigmaFileId = (figmaUrl) => {
  if (!figmaUrl) return null;
  const match = figmaUrl.match(/\/design\/([a-zA-Z0-9]+)\//);
  return match ? match[1] : null;
};

/**
 * Extract node ID from Figma URL
 * @param {string} figmaUrl - The Figma design URL
 * @returns {string|null} - The node ID or null if not found
 */
export const extractFigmaNodeId = (figmaUrl) => {
  if (!figmaUrl) return null;
  const match = figmaUrl.match(/node-id=([^&]+)/);
  return match ? match[1] : null;
};

/**
 * Fetch preview image URL from Figma using public API
 * Note: Figma's public API allows fetching file metadata and images for public files
 * @param {string} figmaUrl - The Figma design URL
 * @param {string} accessToken - Figma API access token (optional, for private files)
 * @returns {Promise<string|null>} - Preview image URL or null if failed
 */
export const fetchFigmaPreviewImage = async (figmaUrl, accessToken = null) => {
  try {
    const fileId = extractFigmaFileId(figmaUrl);
    const nodeId = extractFigmaNodeId(figmaUrl);

    if (!fileId) {
      console.warn('Could not extract file ID from Figma URL:', figmaUrl);
      return null;
    }

    // Prepare API endpoint
    const apiUrl = `https://api.figma.com/v1/files/${fileId}`;

    // Prepare headers
    const headers = {
      'Content-Type': 'application/json',
    };

    if (accessToken) {
      headers['X-FIGMA-TOKEN'] = accessToken;
    }

    // Fetch file metadata
    const response = await fetch(apiUrl, { headers });

    if (!response.ok) {
      console.warn(`Figma API request failed with status ${response.status}`);
      return null;
    }

    const data = await response.json();

    // Get the thumbnail URL if available
    if (data.file && data.file.thumbnailUrl) {
      return data.file.thumbnailUrl;
    }

    // Alternative: Use image export endpoint for specific node
    if (nodeId && accessToken) {
      const imageExportUrl = `https://api.figma.com/v1/images/${fileId}`;
      const imageParams = new URLSearchParams({
        ids: nodeId,
        format: 'png',
        scale: 2,
      });

      const imageResponse = await fetch(`${imageExportUrl}?${imageParams}`, {
        headers,
      });

      if (imageResponse.ok) {
        const imageData = await imageResponse.json();
        if (imageData.images && imageData.images[nodeId]) {
          return imageData.images[nodeId];
        }
      }
    }

    return null;
  } catch (error) {
    console.error('Error fetching Figma preview image:', error);
    return null;
  }
};

/**
 * Generate a static preview URL using Figma's public preview feature
 * This works without authentication for public files
 * @param {string} figmaUrl - The Figma design URL
 * @returns {string} - URL for preview image
 */
export const generateFigmaPreviewUrl = (figmaUrl) => {
  try {
    const fileId = extractFigmaFileId(figmaUrl);
    if (!fileId) return null;

    // Use Figma's public preview endpoint
    return `https://www.figma.com/api/design_files/${fileId}/preview`;
  } catch (error) {
    console.error('Error generating Figma preview URL:', error);
    return null;
  }
};

/**
 * Get screenshot of Figma design by creating an embed URL
 * This approach uses Figma's iframe embed with custom screenshot logic
 * @param {string} figmaUrl - The Figma design URL
 * @returns {string} - Embed-friendly URL
 */
export const getFigmaEmbedUrl = (figmaUrl) => {
  if (!figmaUrl) return null;
  return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}`;
};

/**
 * Cache for preview images to avoid repeated API calls
 */
const previewCache = new Map();

/**
 * Get or fetch Figma preview with caching
 * @param {string} figmaUrl - The Figma design URL
 * @param {string} fallbackImage - Fallback image URL if API fails
 * @param {string} accessToken - Optional Figma API token
 * @returns {Promise<string>} - Preview URL or fallback image
 */
export const getCachedFigmaPreview = async (
  figmaUrl,
  fallbackImage = null,
  accessToken = null
) => {
  // Check cache first
  if (previewCache.has(figmaUrl)) {
    return previewCache.get(figmaUrl);
  }

  // Try to fetch preview
  let previewUrl = await fetchFigmaPreviewImage(figmaUrl, accessToken);

  // Fallback options
  if (!previewUrl) {
    previewUrl = generateFigmaPreviewUrl(figmaUrl);
  }

  if (!previewUrl && fallbackImage) {
    previewUrl = fallbackImage;
  }

  // Cache the result
  if (previewUrl) {
    previewCache.set(figmaUrl, previewUrl);
  }

  return previewUrl;
};
