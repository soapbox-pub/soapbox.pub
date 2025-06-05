# Blog Migration from Soapbox.pub

This project now includes a complete blog with all content migrated from the original soapbox.pub website.

## What was migrated

✅ **36 blog posts** - All blog content from `../soapbox.pub/_blog/` directory
✅ **All images** - Blog images and assets from `../soapbox.pub/public/assets/`
✅ **Preserved URLs** - All original blog post URLs are maintained (`/blog/slug`)
✅ **Metadata** - Titles, excerpts, dates, authors, and cover images
✅ **Content conversion** - MDX content converted to Markdown format

## Blog Features

### 📝 Blog Pages
- **Blog Index** (`/blog`) - Lists all blog posts with search functionality
- **Individual Posts** (`/blog/[slug]`) - Full blog post pages with proper formatting
- **Navigation** - Blog link added to main site navigation

### 🎨 Components
- **BlogCard** - Post preview cards with images and metadata
- **BlogList** - Grid layout for multiple posts
- **BlogPost** - Full post display with proper typography
- **MarkdownContent** - Converts markdown to properly styled HTML
- **BlogSEO** - Automatic SEO meta tags for each post

### 🔍 SEO & Discovery
- **Sitemap** - Auto-generated sitemap.xml with all blog posts
- **Robots.txt** - Search engine optimization
- **Meta tags** - Open Graph and Twitter Card support
- **Structured URLs** - SEO-friendly URL structure

### 📱 User Experience
- **Search** - Search through blog posts by title and content
- **Responsive** - Mobile-friendly design
- **Reading time** - Estimated reading time for each post
- **Recent posts** - Featured on homepage
- **Proper typography** - Beautiful reading experience

## File Structure

```
src/
├── components/blog/
│   ├── BlogCard.tsx          # Post preview component
│   ├── BlogList.tsx          # Posts grid layout
│   ├── BlogPost.tsx          # Full post display
│   ├── BlogSEO.tsx           # SEO meta tags
│   └── MarkdownContent.tsx   # Markdown renderer
├── pages/blog/
│   ├── BlogIndex.tsx         # Blog listing page
│   └── BlogPostPage.tsx      # Individual post page
├── lib/blog/
│   ├── types.ts              # TypeScript types
│   ├── utils.ts              # Utility functions
│   └── posts.ts              # All blog post data
└── Navigation.tsx            # Updated with blog link

public/
├── assets/blog/              # All migrated images
├── sitemap.xml               # Generated sitemap
└── robots.txt                # SEO configuration

scripts/
├── process-blog.js           # Blog migration script
└── generate-sitemap.js       # Sitemap generator
```

## Content Processing

The migration script (`scripts/process-blog.js`) handled:

1. **Frontmatter parsing** - Extracted metadata from MDX files
2. **Content conversion** - Converted JSX components to markdown
3. **Image handling** - Preserved all image references
4. **URL preservation** - Maintained original slug-based URLs
5. **Data generation** - Created TypeScript data file

## Original Content Sources

- **Blog posts**: `../soapbox.pub/_blog/*.mdx` (36 files)
- **Images**: `../soapbox.pub/public/assets/` (all subdirectories)
- **Metadata**: Extracted from MDX frontmatter

## Recent Posts on Homepage

The homepage now features the 3 most recent blog posts in a dedicated section, encouraging visitors to explore the blog content.

## Search Functionality

Users can search through all blog posts by title and excerpt content using the search bar on the blog index page.

## Next Steps

The blog is fully functional and ready for use. All original content has been preserved and is accessible through the new interface. The blog supports:

- Adding new posts (by updating `src/lib/blog/posts.ts`)
- SEO optimization
- Social media sharing
- Mobile responsiveness
- Fast loading and good performance