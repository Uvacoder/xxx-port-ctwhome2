export const prerender = 'auto';
// This function is used to get all posts in place for pre-rendering
// https://kit.svelte.dev/docs/page-options#prerender-troubleshooting
import { content } from '$content/content';
export function entries(): { slug: string | undefined }[] {
  const slugs = [];

  for (const path in content) {
    slugs.push({
      slug: path.split('/').at(-2), // Get folder name as slug
    });
  }

  // [
  // { slug: 'name-post-as-slug' },
  // { slug: 'name-post-as-slug-2' }
  // ];

  return slugs
}

// Make the posts pre-rendered