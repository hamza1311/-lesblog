<script lang="ts">
  import Header from '$lib/components/Header.svelte';
</script>

<Header />

<slot />

<style lang="scss">
  :root {
    --body-fg: rgb(250, 250, 250);
    --body-bg: rgb(32, 32, 32);
    --body-ct: rgb(46, 46, 46);

    --header-fg: rgb(245, 245, 245);
    --header-bg: rgb(40, 40, 40);
    --header-ct: rgb(125, 125, 125);

    --card-fg: rgb(250, 250, 250);
    --card-bg: rgb(40, 40, 40);
    --card-bg2: rgb(50, 50, 50);
    --card-ct: rgb(35, 35, 35);

    --border-color: rgb(85, 85, 85);

    --accent-mild: hsl(41, 48%, 64%);
    --accent-negative: hsl(7, 51%, 64%);
    --accent-neutral: hsl(149, 49%, 65%);
    --accent-positive: hsl(136, 57%, 59%);
    --accent-gray: hsl(240, 6%, 84%);

    --logo-filter: none;

    --std-box-shadow: 0 0 6px 1.5px rgba(15, 15, 15, 0.4);
  }

  :global(*) {
    box-sizing: border-box;
    margin: 0;
  }

  :global(body) {
    font-family: system-ui, sans-serif;
    background-color: var(--body-bg);
    color: var(--body-fg);
  }
  :global(code) {
    font-family: 'JetBrains Mono', Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
      Bitstream Vera Sans Mono, Courier New, monospace;
  }
</style>
