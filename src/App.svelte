<script>
  import { onMount } from 'svelte';
  import Grid from './Grid.svelte';
  import SectionHeader from './SectionHeader.svelte';
  import { MAX_WIDTH } from './constants';
  import projects from './projects';

  let email;
  onMount(() => (email = 'jason.kao@columbia.edu'));

  let contactFocused = false;

  const people = projects.people.map(person => {
    let name = person;
    let twitter;
    if (Array.isArray(person)) {
      name = person[0];
      twitter = person[1];
    }
    const nameEnd = name.indexOf(' (');
    const slug = nameEnd === -1 ? name : name.slice(0, nameEnd);
    return {
      name,
      link:
        'https://www.columbiaspectator.com/contributors/' +
        slug.replace(/\s/g, '-'),
      twitter,
    };
  });

  projects.topLevel = projects.topLevel.map(({ url, ...rest }) => ({
    ...rest,
    url,
    date: (url.match(/20\d{2}\/\d{2}\/\d{2}/) || [''])[0].replace(/\//g, '-'),
  }));
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
        {#each people as { link, name, twitter }}
          <li>
            <p>
              <a style="color: ##337ab7;" href={link}>{name}</a>
              {#if twitter}
                <a href={twitter}>
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611
                      1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127
                      1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92
                      2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066
                      6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87
                      3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0
                      2.385 1.693 4.374 3.946
                      4.827-.413.111-.849.171-1.296.171-.314
                      0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604
                      3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39
                      0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209
                      9.054 0 13.999-7.496 13.999-13.986 0-.209
                      0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                    />
                  </svg>
                </a>
              {/if}
            </p>
          </li>
        {/each}
      </ul>
    </div>

    <SectionHeader empty />
    <p class="updated-text">Updated May 2020.</p>
  </footer>

</main>
