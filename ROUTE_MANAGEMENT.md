# Route Management Documentation

This document outlines the process for adding new pages and routes to the Soapbox marketing website.

## Overview

The website uses Vite for building and includes a prerendering plugin that generates static HTML files for better SEO and performance. When adding new pages, you need to update multiple files to ensure proper routing and prerendering.

## Manual Process (Current)

When adding new pages, you need to update the following files:

### 1. Create the Page Component

First, create your page component in the appropriate directory:
- Main pages: `src/pages/YourPage.tsx`
- Tool pages: `src/pages/tools/YourTool.tsx`
- Blog posts: `src/components/blog/posts/your-post.tsx`

### 2. Update AppRouter.tsx

Add the route to `src/AppRouter.tsx`:

```tsx
import YourPage from "./pages/YourPage";

// In the Routes component:
<Route path="/your-page" element={<YourPage />} />
```

**Important:** Add all custom routes ABOVE the catch-all `*` route to ensure they are matched correctly.

### 3. Update Vite Config (REQUIRED for Prerendering)

Add the route to `vite.config.ts` in the prerender routes array:

```ts
prerender({
  routes: [
    // Main pages
    "/your-page",

    // Tool pages
    "/tools/your-tool",

    // Blog posts
    "/blog/your-blog-post",

    // ... existing routes
  ],
})
```

**Important**: Prerendering only occurs when the `PRERENDER=1` environment variable is set. This is configured in:
- GitLab CI: `.gitlab-ci.yml` (already set)
- GitHub Actions: `.github/workflows/deploy.yml` (updated October 1, 2025)

**Categories in vite.config.ts:**
- **Main pages**: Top-level pages like `/about`, `/tools`, etc.
- **Tool pages**: Individual tool pages under `/tools/`
- **Blog posts**: Individual blog posts under `/blog/`

## Recently Added Routes

The following routes were added on October 1, 2025:

1. **Halloween Hackathon Page**: `/halloween-hackathon`
   - Added to main pages section
   - Component: `src/pages/HalloweenHackathon.tsx`
   - Status: ✅ Added to vite.config.ts

2. **Shakespeare Act 2 Blog Post**: `/blog/announcing-shakespeare-act-2`
   - Added to blog posts section
   - Component: `src/components/blog/posts/announcing-shakespeare-act-2.tsx`
   - Status: ✅ Added to vite.config.ts

3. **Shakespeare Resources Page**: `/shakespeare-resources`
   - Already existed, confirmed in prerender routes
   - Component: `src/pages/ShakespeareResources.tsx`
   - Status: ✅ Already in vite.config.ts

### Additional Updates Made:

4. **GitHub Actions Deployment**: Updated to enable prerendering
   - File: `.github/workflows/deploy.yml`
   - Change: Added `PRERENDER=1` environment variable

5. **Build Scripts**: Added prerender-enabled build script
   - Added: `npm run build:prerender`
   - Purpose: Test prerendering locally

6. **Automation Script**: Created route discovery and update automation
   - File: `scripts/update-routes.mjs`
   - Command: `npm run update-routes`
   - Purpose: Automatically discover and update routes

## Automated Process (Future Enhancement)

To automate this process in the future, consider implementing:

### 1. Route Discovery Script

Create a script that automatically discovers routes from:
- `src/pages/` directory structure
- `src/pages/tools/` directory structure
- `src/components/blog/posts/` directory structure
- `src/AppRouter.tsx` route definitions

### 2. Auto-Update Vite Config

```javascript
// scripts/update-routes.mjs
import fs from 'fs';
import path from 'path';

function discoverRoutes() {
  const routes = [];

  // Discover main pages
  const pagesDir = 'src/pages';
  const pages = fs.readdirSync(pagesDir)
    .filter(file => file.endsWith('.tsx') && !file.includes('test'))
    .map(file => `/${file.replace('.tsx', '').toLowerCase()}`);
  routes.push(...pages);

  // Discover tool pages
  const toolsDir = 'src/pages/tools';
  if (fs.existsSync(toolsDir)) {
    const tools = fs.readdirSync(toolsDir)
      .filter(file => file.endsWith('.tsx'))
      .map(file => `/tools/${file.replace('.tsx', '').toLowerCase()}`);
    routes.push(...tools);
  }

  // Discover blog posts
  const blogDir = 'src/components/blog/posts';
  if (fs.existsSync(blogDir)) {
    const posts = fs.readdirSync(blogDir)
      .filter(file => file.endsWith('.tsx'))
      .map(file => `/blog/${file.replace('.tsx', '')}`);
    routes.push(...posts);
  }

  return routes;
}

function updateViteConfig(routes) {
  // Read current vite.config.ts
  // Replace routes array
  // Write back to file
}
```

### 3. Build Hook

Add to `package.json`:

```json
{
  "scripts": {
    "prebuild": "node scripts/update-routes.mjs",
    "build": "npm i && vite build && cp dist/index.html dist/404.html"
  }
}
```

### 4. Git Hook

Create a pre-commit hook that automatically updates routes when new pages are added:

```bash
#!/bin/sh
# .git/hooks/pre-commit
node scripts/update-routes.mjs
git add vite.config.ts
```

## Best Practices

1. **Consistent Naming**: Use kebab-case for URLs (e.g., `/shakespeare-resources`)
2. **Route Order**: Always add custom routes before the catch-all `*` route
3. **Testing**: Test both development and production builds after adding routes
4. **SEO**: Ensure new pages have proper SEO metadata using the `useSEO` hook
5. **Navigation**: Update navigation components if the new page should be accessible from menus

## Troubleshooting

### Route Not Found in Production
- Check that the route is added to `vite.config.ts` prerender routes
- Verify the route exists in `AppRouter.tsx`
- Ensure the component file exists and is properly exported

### Prerendering Fails
- Check that all imported components exist
- Verify there are no runtime errors in the component
- Ensure all dependencies are properly imported

### Route Works in Development but Not Production
- This usually indicates the route is missing from the prerender configuration
- Add the route to `vite.config.ts` and rebuild

## Current Route Structure

```
/                           # Homepage
/about                      # About page
/get-involved              # Get involved page
/tools                     # Tools overview
/tools/ditto               # Ditto tool page
/tools/nostrify            # Nostrify tool page
/tools/stacks              # Stacks tool page
/tools/nostrbook           # Nostrbook tool page
/tools/nostrhub            # NostrHub tool page
/tools/shakespeare         # Shakespeare tool page
/mkstack                   # MKStack primary route
/showcase                  # Showcase page
/blog                      # Blog index
/blog/*                    # Individual blog posts
/shakespeare-resources     # Shakespeare resources
/soapbox-sessions         # Soapbox sessions
/halloween-hackathon      # Halloween hackathon
/nip/*                    # Custom NIP pages
```

## Files That Need Updates

When adding a new route, update these files:

1. ✅ **Component File**: Create the page component
2. ✅ **AppRouter.tsx**: Add the route definition
3. ✅ **vite.config.ts**: Add to prerender routes (CRITICAL)
4. ❓ **Navigation.tsx**: Add to navigation if needed
5. ❓ **sitemap.xml**: Consider updating sitemap
6. ❓ **robots.txt**: Update if needed

---

**Last Updated**: October 1, 2025
**Updated By**: Assistant
**Changes**: Added halloween-hackathon and announcing-shakespeare-act-2 routes