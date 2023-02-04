import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  try {
    const post = await import(`../../../blog/${params.slug}.svx`);
    return {
      ...post.metadata,
      content: post.default
    };
  } catch (e) {
    throw error(404, 'not found');
  }
}) satisfies PageLoad;
