// Backend example service for Figma API with authentication
// Use this if you have a backend server (Node.js, Express, etc.)
// This provides full access to Figma's premium features

import fetch from 'node-fetch'; // For Node.js environments

const FIGMA_API_BASE = 'https://api.figma.com/v1';

/**
 * Backend Figma Service
 * Handles authenticated requests to Figma API
 */
class FigmaService {
  constructor(accessToken) {
    this.accessToken = accessToken || process.env.FIGMA_API_TOKEN;
    if (!this.accessToken) {
      console.warn('Warning: No Figma API token provided');
    }
  }

  /**
   * Get common headers for API requests
   */
  getHeaders() {
    return {
      'Content-Type': 'application/json',
      'X-FIGMA-TOKEN': this.accessToken,
    };
  }

  /**
   * Fetch file metadata including thumbnail
   * @param {string} fileId - The Figma file ID
   * @returns {Promise<Object>} - File metadata
   */
  async getFileMetadata(fileId) {
    try {
      const response = await fetch(
        `${FIGMA_API_BASE}/files/${fileId}`,
        { headers: this.getHeaders() }
      );

      if (!response.ok) {
        throw new Error(`Figma API error: ${response.status}`);
      }

      const data = await response.json();
      return {
        id: data.file.key,
        name: data.file.name,
        thumbnailUrl: data.file.thumbnailUrl,
        lastModified: data.file.lastModified,
        editorType: data.file.editorType,
      };
    } catch (error) {
      console.error('Error fetching file metadata:', error);
      throw error;
    }
  }

  /**
   * Export images for specific nodes
   * Allows getting preview images for specific design elements
   * @param {string} fileId - The Figma file ID
   * @param {string|string[]} nodeIds - Node ID(s) to export
   * @param {Object} options - Export options
   * @returns {Promise<Object>} - Image URLs for nodes
   */
  async exportImages(fileId, nodeIds, options = {}) {
    try {
      const nodeIdArray = Array.isArray(nodeIds) ? nodeIds : [nodeIds];
      
      const params = new URLSearchParams({
        ids: nodeIdArray.join(','),
        format: options.format || 'png',
        scale: options.scale || 2,
      });

      const response = await fetch(
        `${FIGMA_API_BASE}/images/${fileId}?${params}`,
        { headers: this.getHeaders() }
      );

      if (!response.ok) {
        throw new Error(`Export failed: ${response.status}`);
      }

      const data = await response.json();
      return data.images;
    } catch (error) {
      console.error('Error exporting images:', error);
      throw error;
    }
  }

  /**
   * Get design file with full hierarchy
   * Returns complete document structure
   * @param {string} fileId - The Figma file ID
   * @returns {Promise<Object>} - File structure
   */
  async getFileStructure(fileId) {
    try {
      const response = await fetch(
        `${FIGMA_API_BASE}/files/${fileId}`,
        { headers: this.getHeaders() }
      );

      if (!response.ok) {
        throw new Error(`Failed to get structure: ${response.status}`);
      }

      const data = await response.json();
      return {
        document: data.file.document,
        components: data.components,
        styles: data.styles,
      };
    } catch (error) {
      console.error('Error getting file structure:', error);
      throw error;
    }
  }

  /**
   * Get component details
   * Useful for design system documentation
   * @param {string} fileId - The Figma file ID
   * @param {string} componentId - The component ID
   * @returns {Promise<Object>} - Component details
   */
  async getComponentDetails(fileId, componentId) {
    try {
      const response = await fetch(
        `${FIGMA_API_BASE}/components/${componentId}`,
        { headers: this.getHeaders() }
      );

      if (!response.ok) {
        throw new Error(`Failed to get component: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting component details:', error);
      throw error;
    }
  }

  /**
   * Search for files
   * Requires team context - available in Figma Teams
   * @param {string} query - Search query
   * @returns {Promise<Array>} - Matching files
   */
  async searchFiles(query) {
    try {
      const params = new URLSearchParams({
        query: query,
      });

      const response = await fetch(
        `${FIGMA_API_BASE}/files/search?${params}`,
        { headers: this.getHeaders() }
      );

      if (!response.ok) {
        throw new Error(`Search failed: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error searching files:', error);
      throw error;
    }
  }

  /**
   * Get team files
   * List all files in a Figma team
   * @param {string} teamId - The team ID
   * @returns {Promise<Array>} - Team files
   */
  async getTeamFiles(teamId) {
    try {
      const response = await fetch(
        `${FIGMA_API_BASE}/teams/${teamId}/files`,
        { headers: this.getHeaders() }
      );

      if (!response.ok) {
        throw new Error(`Failed to get team files: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting team files:', error);
      throw error;
    }
  }

  /**
   * Get file versions
   * Access previous versions of your file
   * @param {string} fileId - The Figma file ID
   * @returns {Promise<Array>} - File versions
   */
  async getFileVersions(fileId) {
    try {
      const response = await fetch(
        `${FIGMA_API_BASE}/files/${fileId}/versions`,
        { headers: this.getHeaders() }
      );

      if (!response.ok) {
        throw new Error(`Failed to get versions: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting file versions:', error);
      throw error;
    }
  }

  /**
   * Post a comment on a file
   * Requires write access
   * @param {string} fileId - The Figma file ID
   * @param {string} message - Comment message
   * @param {Object} position - Comment position {x, y}
   * @returns {Promise<Object>} - Comment details
   */
  async postComment(fileId, message, position = null) {
    try {
      const body = {
        message: message,
      };

      if (position) {
        body.client_meta = position;
      }

      const response = await fetch(
        `${FIGMA_API_BASE}/files/${fileId}/comments`,
        {
          method: 'POST',
          headers: this.getHeaders(),
          body: JSON.stringify(body),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to post comment: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error posting comment:', error);
      throw error;
    }
  }
}

/**
 * Express.js middleware example
 */
export const createFigmaRoutes = (app, figmaToken) => {
  const figmaService = new FigmaService(figmaToken);

  // Get file metadata and preview
  app.get('/api/figma/preview/:fileId', async (req, res) => {
    try {
      const metadata = await figmaService.getFileMetadata(req.params.fileId);
      res.json(metadata);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Export specific node images
  app.post('/api/figma/export/:fileId', async (req, res) => {
    try {
      const { nodeIds, format, scale } = req.body;
      const images = await figmaService.exportImages(
        req.params.fileId,
        nodeIds,
        { format, scale }
      );
      res.json(images);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get file structure
  app.get('/api/figma/structure/:fileId', async (req, res) => {
    try {
      const structure = await figmaService.getFileStructure(req.params.fileId);
      res.json(structure);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  // Get file versions
  app.get('/api/figma/versions/:fileId', async (req, res) => {
    try {
      const versions = await figmaService.getFileVersions(req.params.fileId);
      res.json(versions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};

export default FigmaService;

/**
 * Usage Example:
 *
 * In your Express server:
 * ```
 * import { createFigmaRoutes } from './services/figmaBackendService.js';
 *
 * const app = express();
 * const figmaToken = process.env.FIGMA_API_TOKEN;
 *
 * createFigmaRoutes(app, figmaToken);
 *
 * app.listen(3000);
 * ```
 *
 * Then update your frontend to call these endpoints:
 * ```
 * const preview = await fetch(`/api/figma/preview/${fileId}`);
 * ```
 */
