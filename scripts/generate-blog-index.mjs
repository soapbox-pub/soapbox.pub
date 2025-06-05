import { readdir } from 'fs/promises';
import { join } from 'path';

// Directory for blog posts
const postsDir = '/home/mk/Projects/soapbox2/src/components/blog/posts';

async function generateBlogIndex() {
  const files = (await readdir(postsDir))
    .filter(file => file.endsWith('.tsx'))
    .map(file => file.replace('.tsx', ''));

  const imports = files.map(slug => {
    const varName = slug.replace(/-/g, '').replace(/\./g, '');
    return `import * as ${varName} from '../../components/blog/posts/${slug}';`
  }).join('\n');

  const postsArray = files.map(slug => {
    const varName = slug.replace(/-/g, '').replace(/\./g, '');
    return `${varName}.meta`;
  }).join(',\n  ');

  const content = `// Auto-generated blog posts index
${imports}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: any;
  ogImage: any;
}

export const blogPosts: BlogPost[] = [
  ${postsArray}
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getPostBySlug = async (slug: string) => {
  const normalizedSlug = slug.replace(/-/g, '').replace(/\./g, '');
  
  switch (normalizedSlug) {
${files.map(slug => {
    const varName = slug.replace(/-/g, '').replace(/\./g, '');
    return `    case '${varName}':
      return (await import('../../components/blog/posts/${slug}')).default;`;
  }).join('\n')}
    default:
      return null;
  }
};
`;

  return content;
}

// Generate and write the index
generateBlogIndex().then(content => {
  console.log(content);
}).catch(console.error);