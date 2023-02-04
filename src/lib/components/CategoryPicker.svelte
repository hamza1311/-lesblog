<ul class="category-list">
  <li data-selected>All</li>
  <li>Cat 1</li>
  <li>Cat 2</li>
  <li>Cat 3</li>
</ul>

<style lang="scss">
  .category-list {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    padding: 0;

    li {
      padding: 1rem 3rem;
      cursor: pointer;

      border-bottom-right-radius: 1rem;
      border-bottom-left-radius: 1rem;

      &[data-selected],
      &:hover {
        background-color: var(--body-ct);
      }
    }
  }
</style>
