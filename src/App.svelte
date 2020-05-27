<script>
  import { onMount } from 'svelte';
  import Grid from './Grid.svelte';
  import SectionHeader from './SectionHeader.svelte';
  import { MAX_WIDTH } from './constants';
  import projects from './projects';

  let email;
  onMount(() => (email = 'jason.kao@columbia.edu'));

  let contactFocused = false;

  const people = projects.people.map(name => {
    const nameEnd = name.indexOf(' (');
    const slug = nameEnd === -1 ? name : name.slice(0, nameEnd);
    return {
      name,
      link:
        'https://www.columbiaspectator.com/contributors/' +
        slug.replace(/\s/g, '-'),
    };
  });

  projects.topLevel = projects.topLevel.map(({ url, ...rest }) => ({
    ...rest,
    url,
    date: (url.match(/20\d{2}\/\d{2}\/\d{2}/) || [''])[0].replace(/\//g, '-'),
  }));
  console.log('proj :>> ', projects.topLevel.map(x => x.date));
</script>

<style lang="scss">
  main {
    margin: 0 auto;
    padding: 0 40px;
  }

  header {
    display: flex;
    justify-content: space-between;
    margin: 18px 0 22px;

    div:last-child {
      text-align: right;
    }
  }

  .gray,
  .gray a {
    color: #888;
  }

  .nutgraf {
    width: 40%;
    margin: 0 auto 21px;
  }

  .contact {
    margin-bottom: 60px;
    font-family: Inconsolata;
    font-size: 17px;
    font-weight: 500;
    line-height: 24px;

    p {
      display: inline-block;
      padding: 3px 0;
      transition-duration: 0.1s;
    }

    b {
      font-weight: 800;
    }

    a {
      color: #121212;
      text-decoration: none;
      border-bottom: 1px solid #cdcdcd;
      &:hover {
        border-bottom-color: #121212;
      }
    }
    a:not(:nth-child(2)) {
      margin-right: 5px;
    }

    &.contactFocused {
      p {
        background-color: #fbe1c4;
      }
      a {
        border-bottom-color: rgba(255, 255, 255, 0.8);
        border-bottom-width: 1.5px;
      }
    }
  }

  .buzzwords {
    p {
      max-width: 600px;
    }
    p:not(:last-child) {
      margin-bottom: 15px;
    }
  }

  footer {
    width: 56%;
    margin: 0 auto 40px;
  }

  .updated-text {
    text-transform: uppercase;
    font-family: Inconsolata;
    font-size: 16px;
    font-weight: 500;
    color: #aaa;
  }

  @media (max-width: 600px) {
    header {
      margin-bottom: 48px;
    }

    .nutgraf,
    footer {
      width: 100%;
    }
  }
</style>

<main style="max-width: {MAX_WIDTH}px">

  <header>
    <!-- <div>
      <p>
        <b>Spectator Graphics</b>
      </p>
    </div>
    <div>
      <p>Homepage.</p>
      <p class="gray">
        <a href="https://github.com/graphicsdesk/">GitHub.</a>
      </p>
    </div> -->
  </header>

  <p class="nutgraf">Homepage for the Spectator Graphics team.</p>

  <div class="nutgraf contact" class:contactFocused>
    <p>
      <b>We&rsquo;re also on GitHub:</b>
      <a href="https://github.com/graphicsdesk">github.com/graphicsdesk</a>
    </p>
  </div>

  <Grid projects={projects.topLevel} />

  <SectionHeader id="extended-portfolio" centered>
    More work on
    <a href="https://www.github.com/graphicsdesk">GitHub</a>
  </SectionHeader>
  <!-- <Grid
    projects={projects.secondLevel.slice(0, projects.secondLevel.length - 4)}
  />
  <Grid
    projects={projects.secondLevel.slice(projects.secondLevel.length - 4, projects.secondLevel.length - 1)}
    columns={3}
  /> -->
  <Grid
    projects={projects.secondLevel.slice(projects.secondLevel.length - 1)}
    columns={1}
  />

  <footer>
    <SectionHeader>Our team</SectionHeader>
    <div class="buzzwords">
      <ul>
        {#each people as { link, name }}
          <li>
            <p>
              <a style="color: ##337ab7;" href={link}>{name}</a>
            </p>
          </li>
        {/each}
      </ul>
    </div>

    <SectionHeader empty />
    <p class="updated-text">Updated May 2020.</p>
  </footer>

</main>