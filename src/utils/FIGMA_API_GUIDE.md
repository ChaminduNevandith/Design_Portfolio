# Figma API Integration Guide

This guide explains how the Figma API integration works in your portfolio and how to set it up for optimal performance.

## Overview

The portfolio now fetches Figma design preview images programmatically using the Figma API. This provides:

- **Dynamic preview images** that update when your Figma designs change
- **Better performance** with caching to avoid repeated API calls
- **Fallback support** to original images if API calls fail
- **No authentication required** for public Figma files (basic functionality)
- **Full access available** with authentication token for private files or higher rate limits

## How It Works

### Current Setup (No Authentication)

The system uses Figma's public file metadata endpoint:

```javascript
// Extracts file ID from your Figma URL
// Example: https://www.figma.com/design/ABC123/Project?node-id=0-1
// Extracts: ABC123

// Fetches the file metadata which includes thumbnail
const response = await fetch(`https://api.figma.com/v1/files/${fileId}`);
const data = await response.json();
const thumbnailUrl = data.file.thumbnailUrl;
```

**Limitations:**
- Rate limited (reasonable for portfolio use)
- Only returns file thumbnail, not specific node previews
- Works only for public Figma files

### With Authentication (Enhanced)

To unlock full features, add a Figma API token:

1. **Get your API token:**
   - Visit [Figma Settings → Tokens](https://www.figma.com/settings)
   - Create a new Personal Access Token
   - Copy the token

2. **Add token to your project:**

   **Option A: Environment Variables (Recommended for production)**
   ```bash
   # .env.local
   VITE_FIGMA_API_TOKEN=your_token_here
   ```

   **Option B: Backend Service**
   Create `src/services/figmaService.js`:
   ```javascript
   const FIGMA_TOKEN = process.env.FIGMA_API_TOKEN;

   export const fetchFigmaImageWithAuth = async (figmaUrl, nodeId) => {
     // Implementation with full authentication
   };
   ```

3. **Update the component to use authentication:**
   ```javascript
   const token = import.meta.env.VITE_FIGMA_API_TOKEN;
   const preview = await getCachedFigmaPreview(design.figma, design.image, token);
   ```

## API Functions

### `extractFigmaFileId(figmaUrl)`
Extracts the file ID from a Figma URL.

```javascript
extractFigmaFileId('https://www.figma.com/design/ABC123/Project')
// Returns: "ABC123"
```

### `extractFigmaNodeId(figmaUrl)`
Extracts the node ID from a Figma URL (if present).

```javascript
extractFigmaNodeId('https://www.figma.com/design/ABC123/Project?node-id=0-1')
// Returns: "0-1"
```

### `fetchFigmaPreviewImage(figmaUrl, accessToken?)`
Fetches preview image URL from Figma API.

```javascript
const preview = await fetchFigmaPreviewImage(figmaUrl);
// With token:
const preview = await fetchFigmaPreviewImage(figmaUrl, 'your_token');
```

### `getCachedFigmaPreview(figmaUrl, fallbackImage?, accessToken?)`
Gets or fetches preview with caching. **Recommended to use this function.**

```javascript
const preview = await getCachedFigmaPreview(
  design.figma,
  design.image, // fallback
  accessToken   // optional
);
```

## Performance Optimization

### Caching Strategy

The API uses an in-memory cache to avoid repeated calls:

```javascript
// First call - fetches from API
const preview1 = await getCachedFigmaPreview(url);

// Second call - returns from cache instantly
const preview2 = await getCachedFigmaPreview(url);
```

### Loading Indicator

The component shows a loading spinner while fetching:

```jsx
{isLoading && (
  <div className="animate-spin">...</div>
)}
<img src={previewUrl} onLoad={() => setIsLoading(false)} />
```

### Fallback Image

If API fails, automatically uses your provided fallback image:

```javascript
const preview = await getCachedFigmaPreview(
  design.figma,
  design.image  // ← Falls back to this if API fails
);
```

## Rate Limits

**Without Authentication:**
- 10 requests per minute per IP
- Sufficient for most portfolio use

**With Authentication:**
- 300 requests per minute
- Better for frequently updated portfolios

## Troubleshooting

### "Could not extract file ID from Figma URL"
- Ensure your Figma URL is in the correct format
- Should be: `https://www.figma.com/design/FILE_ID/...`

### Getting null from API but fallback image is used
- Check if your Figma file is public
- Try the URL directly in the browser to confirm it's accessible

### CORS errors
- Add your domain to Figma API access (if using authentication)
- Or use a backend proxy to handle API calls

### Images not updating
- Clear the browser cache (the utility caches results)
- Or restart the dev server to reset the in-memory cache

## Integration in Components

The UIUXCard component is already set up to use this:

```javascript
useEffect(() => {
  const loadFigmaPreview = async () => {
    setIsLoading(true);
    try {
      const preview = await getCachedFigmaPreview(
        design.figma,
        design.image
      );
      setPreviewUrl(preview);
    } finally {
      setIsLoading(false);
    }
  };
  
  loadFigmaPreview();
}, [design.figma, design.image]);
```

## Deployment Considerations

### GitHub Pages / Static Hosting
- API calls work directly from the frontend
- Rate limits apply per user/IP
- No additional setup needed

### With Backend Server
For enhanced features:

1. Create a backend endpoint:
```javascript
// backend/routes/figma.js
app.get('/api/figma/preview/:fileId', async (req, res) => {
  const { fileId } = req.params;
  const preview = await fetchFigmaPreview(fileId);
  res.json({ previewUrl: preview });
});
```

2. Update the utility to use your endpoint:
```javascript
const response = await fetch(`/api/figma/preview/${fileId}`);
```

## Best Practices

1. **Always provide fallback images** in your data
2. **Test with public Figma files** before using private ones
3. **Monitor API usage** if you get many visitors
4. **Use environment variables** for sensitive tokens
5. **Consider caching preview URLs** in your database for production

## Additional Resources

- [Figma API Documentation](https://www.figma.com/developers/api)
- [Figma Embed Guide](https://help.figma.com/hc/en-us/articles/360045445193-Embed-files-and-prototypes)
- [API Rate Limits](https://www.figma.com/developers/docs)
