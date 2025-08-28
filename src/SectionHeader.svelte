<script>
  export let id;
  export let empty = false;
  export let hideHr = false;
  export let centered = false;
</script>

<style lang="scss">
hr {
  background-color: #ccc;
  height: 1px;
  border: 0;
  margin: 60px auto 23px;
  max-width: 680px;
}

p {
  margin-bottom: 40px;
  text-transform: uppercase;
  font-family: Inconsolata;
  font-size: 18px;
  font-weight: 600;

  :global(a) {
    color: #fff;
    background: #121212;
    text-decoration: underline;
    padding: 2px 4px;

    &:hover {
      color: #121212;
      background: #e4e4e4;
    }
  }
}

.centered {
  text-align: center;
}
</style>

{#if !hideHr}
  <hr {id} />
{/if}

{#if !empty}
  <p class:centered={centered}>
    <slot />:
  </p>
{/if}
