import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import yaml from 'js-yaml';

const parse = (svx: string) => {
  const contents = svx.split('<!-- summary-end -->')[0].trim();
  const [, frontMatter, summary] = contents.split('---');
  try {
    const matter = yaml.load(frontMatter) as Record<string, unknown>;
    return {
      frontMatter: matter,
      summary: summary.trim()
    };
  } catch (e) {
    throw error(500, 'failed to parse frontmatter: ' + e);
  }
};

export const load = (async () => {
  const svx = import.meta.glob('/src/blog/*.svx', { as: 'raw' });
  const promises = Object.entries(svx).map(async ([path, resolver]) => {
    const { frontMatter, summary } = parse(await resolver());
    return {
      ...frontMatter,
      summary,
      path: path.substring(4, path.length - 4)
    };
  });

  const output = await Promise.all(promises);
  return {
    blogs: output as {
      summary: string;
      path: string;
      title: string;
      categories?: string[];
      image?: string;
      [k: string]: unknown;
    }[]
  };
}) satisfies PageLoad;
