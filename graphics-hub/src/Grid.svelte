<script context="module">
  let totalItems = 0;
</script>

<script>
  import { MAX_WIDTH } from './constants';
  export let projects;
  export let columns = 3;

  let colorOffset = totalItems;
  totalItems += projects.length;

  const colors = [
    '#A32251',
    '#0041FF',
    '#1A1A57',
    '#D91F25',
    '#004F50',
    '#EBAB3D',
  ];

  const minFr = 500 - 100 * columns;
  const columnGap = 18;

  let clientWidth, mediaHeight, gridColumns;

  $: {
    let fr = (clientWidth - columnGap * (columns - 1)) / columns;
    if (fr < minFr) {
      fr = clientWidth;
      gridColumns = '1fr';
    } else if (fr < minFr + 100) {
      fr = (clientWidth - columnGap * (2 - 1)) / 2;
      gridColumns = '1fr 1fr';
    } else {
      gridColumns = '1fr '.repeat(columns).trim();
    }
    mediaHeight = fr * (2 / 3);
  }

  const color = (index) => colors[(colorOffset + index) % colors.length];
</script>

<style lang="scss">
.grid {
  display: grid;
  row-gap: 50px;
}

:global(.grid + .grid) {
  margin-top: 50px;
}

.media {
  width: 100%;
  margin-bottom: 14px;

  img,
  video {
    object-fit: cover;
    object-position: 50% top;
    width: 100%;
    height: 100%;
    border: 1px solid #000;
  }
}

:global(code) {
  font-family: Inconsolata;
}

.description {
  color: #888;
}

.meta {
  font-family: Inconsolata;
  white-space: nowrap;
  font-size: 20px;
  font-weight: 600;
  opacity: 0.45;
}

.git {
  opacity: 1;
}

.git a {
  color: #898989;
  font-weight: 400;
}

p {
  display: inline;
}
</style>

<div
  class="grid"
  bind:clientWidth
  style="
    grid-template-columns: {gridColumns};
    column-gap: {columns > 1 ? columnGap : 0}px;
    {columns === 1 ? 'text-align: center;' : ''}
  "
>
  {#each projects as { name, image, description, url, date, repo, data }, index}
    <div>
      <a href={url} style="color: {color(index)}">
        <div class="media" style="height: {Math.round(mediaHeight)}px">
          {#if image.includes('.mp4') || image.includes('.mov')}
            <video autoplay playsinline muted loop>
              <source src={image} />
            </video>
          {:else}
            <picture>
              {#if image.includes('.webp')}
                <source srcset="{image}" type="image/webp" />
              {/if}
              <img src={image.replace('.webp', '.png')} alt={name} />
            </picture>
          {/if}
        </div>
        <p>
          {@html name}
          {#if date}
            <span class="meta">{date}</span>
          {/if}
        </p>
      </a>

      {#if repo}
        <span class="meta git">
          <a href="https://github.com/graphicsdesk/{repo}">[repo]</a>
        </span>
      {/if}
      {#if data}
        <span class="meta git">
          <a href="https://github.com/graphicsdesk/{data}">[data]</a>
        </span>
      {/if}

      {#if description}
        <p class="description">{description}</p>
      {/if}
    </div>
  {/each}
</div>
