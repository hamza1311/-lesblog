<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

  const Content = data.content;
</script>

<main class="">
  <article>
    <h1>{data.title}</h1>

    <section>
      <Content />
    </section>
  </article>
</main>

<style lang="scss">
  main {
    width: 100%;

    display: flex;
    justify-content: center;

    padding: 1.75rem 0;

    article {
      display: flex;
      flex-direction: column;
      width: 66.666667%;
      gap: 2rem;

      h1 {
        font-size: 3rem;
      }

      section {
        display: flex;
        flex-direction: column;
        line-height: 1.75rem;
        gap: 0.75rem;
      }
    }
  }
</style>
