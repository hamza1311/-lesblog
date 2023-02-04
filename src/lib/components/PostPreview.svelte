<script lang="ts">
  export let href: string;
  export let summary: string;
  export let title: string;
  export let image: string | null;
  export let categories: string[] | null;
</script>

<a {href}>
  <article class="post-preview">
    <section>
      {#if image}
        <img src={image} alt="" />
      {/if}
    </section>
    <section class="summary">
      <h3>{title}</h3>
      <div>
        {#if categories !== null}
          {#each categories as cat}
            <span class="category">{cat}</span>
          {/each}
        {/if}
      </div>
      <p>
        {summary}
      </p>
    </section>
  </article>
</a>

<style lang="scss">
  .post-preview {
    display: flex;
    gap: 2rem;

    background-color: var(--card-bg);
    color: var(--card-fg);

    margin: 2rem;
    padding: 1rem;

    border-radius: 2rem;

    box-shadow: var(--std-box-shadow);

    &:hover {
      background-color: var(--card-bg2);
    }

    .summary {
      display: grid;

      .category {
        background-color: var(--card-ct);
        padding: 0.5rem 1rem;
        border-radius: 2rem;
      }
    }

    img {
      height: 10rem;
      border-radius: 1rem;
    }
  }
</style>
