<script lang="ts">
  import PostPreview from '$lib/components/PostPreview.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<main>
  <section />
  <section>
    {#each data.blogs as blog (blog.path)}
      <PostPreview
        href={blog.path}
        title={blog.title}
        categories={blog.categories ?? null}
        image={blog.image ?? null}
        summary={blog.summary}
      />
    {/each}
  </section>
</main>
