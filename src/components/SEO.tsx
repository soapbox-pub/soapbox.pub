import { useSEO, type SEOData } from '@/hooks/useSEO';

/**
 * SEO Component - Alternative JSX syntax for setting page meta data
 * 
 * Usage:
 * <SEO 
 *   title="Page Title"
 *   description="Page description"
 *   image="/custom-image.jpg"
 *   type="article"
 * />
 * 
 * This component uses the useSEO hook internally, so you can use either:
 * 1. This component: <SEO title="..." />
 * 2. The hook directly: useSEO({ title: "..." })
 */
export function SEO(props: SEOData) {
  useSEO(props);
  return null;
}

export default SEO;