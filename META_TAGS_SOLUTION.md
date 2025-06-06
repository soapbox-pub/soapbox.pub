# Dynamic Meta Tags Solution

## Problem

The original issue was that custom Open Graph (OG) meta data for each page wasn't being rendered in "view source" locally. This is a common problem with Single Page Applications (SPAs) because:

1. **View Source limitation**: When you press Ctrl+U (view source), you see the static HTML served from the server, not the dynamically updated version
2. **Social media crawlers**: Facebook, Twitter, LinkedIn crawlers see only the initial HTML, not JavaScript-updated meta tags
3. **SEO impact**: Search engines may not properly index page-specific meta data

## Solution Implemented

We implemented a **static page pre-generation** solution that creates individual HTML files for each route with the correct meta tags baked in at build time.

### Key Components

1. **`scripts/generateStaticPages.js`**: Main script that generates static HTML files
2. **Updated build process**: Modified `package.json` to run the script after build
3. **Route definitions**: Comprehensive list of all pages with their SEO data

### How It Works

1. **Build Process**: After Vite builds the SPA, the script runs automatically
2. **Base HTML**: Takes the built `index.html` as a template
3. **Route Processing**: For each defined route, creates a directory structure and generates an `index.html` file
4. **Meta Tag Replacement**: Replaces the default meta tags with route-specific data
5. **Static Files**: Creates files like `/about/index.html`, `/tools/ditto/index.html`, etc.

### Routes Covered

- **Main Pages**: `/`, `/about`, `/tools`, `/showcase`, `/get-involved`
- **Tool Pages**: `/tools/ditto`, `/tools/mkstack`, `/tools/nostrhub`, etc.
- **Blog**: `/blog` and individual blog posts like `/blog/announcing-ditto`

### Benefits

✅ **View Source Works**: Meta tags are visible in Ctrl+U view source
✅ **Social Media**: Facebook, Twitter, LinkedIn crawlers see correct OG data
✅ **SEO Friendly**: Search engines index page-specific meta data
✅ **No Breaking Changes**: Existing React app continues to work normally
✅ **Hot Module Reload**: Development server still works with dynamic meta tags

### Files Generated

```
dist/
├── index.html (home page)
├── about/index.html
├── tools/index.html
├── tools/ditto/index.html
├── showcase/index.html
├── blog/index.html
├── blog/announcing-ditto/index.html
└── ...
```

### Example Generated Meta Tags

For `/tools/ditto/`:

```html
<title>Ditto - Decentralized Community Platform | Soapbox</title>
<meta name="description" content="Build your own censorship-resistant community platform with Ditto. Features Nostr integration, Lightning payments, and complete customization.">
<meta property="og:title" content="Ditto - Decentralized Community Platform | Soapbox">
<meta property="og:description" content="Build your own censorship-resistant community platform with Ditto. Features Nostr integration, Lightning payments, and complete customization.">
<meta property="og:image" content="/assets/images/ditto/ditto-phones.png">
<meta name="keywords" content="ditto, community platform, nostr, decentralized communities, lightning payments">
```

## Usage

### Building with Static Pages

```bash
npm run build  # Automatically runs the static page generation
```

### Manual Generation

```bash
npm run generate-static  # Just run the static page generator
```

### Adding New Pages

To add a new page with custom SEO data:

1. Add the route to the `routes` array in `scripts/generateStaticPages.js`:

```javascript
{
  path: '/new-page',
  title: 'New Page - Soapbox',
  description: 'Description of the new page',
  image: '/og-image.png',
  keywords: 'relevant, keywords, here'
}
```

2. Run the build or generate-static command

### Development vs Production

- **Development**: Uses the dynamic `useSEO` hook for instant updates
- **Production**: Uses pre-generated static files for crawler compatibility

## Technical Details

### SPA Fallback

The `_redirects` file ensures that:
- Static routes serve their pre-generated HTML files
- Dynamic routes (like `/users/123`) fall back to the React app
- Client-side routing continues to work normally

### Meta Tag Replacement

The script uses regex replacement to update:
- `<title>` tag
- All OpenGraph `og:*` properties
- Twitter meta tags
- General meta tags (description, keywords, etc.)

### Future Enhancements

Potential improvements:
1. **Automated blog post discovery**: Read actual blog post metadata instead of hardcoded data
2. **Dynamic route support**: Generate pages for dynamic content
3. **Sitemap integration**: Auto-update sitemap.xml with generated routes
4. **Build optimization**: Only regenerate changed routes

## Testing

To verify the solution works:

1. **Build the project**: `npm run build`
2. **Check generated files**: Look in `dist/` for route directories
3. **View source**: Open any route and press Ctrl+U to see static meta tags
4. **Social media testing**: Use Facebook's Open Graph debugger or Twitter's Card validator

The meta tags are now visible in view source and will be properly crawled by social media platforms and search engines.