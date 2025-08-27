<script>
  import Grid from './Grid.svelte';
  import SectionHeader from './SectionHeader.svelte';
  import { MAX_WIDTH } from './constants';
  import projects from './projects';

  let contactFocused = false;

  const people = projects.people
    .map(person => {
      let name = person;
      let twitter, git;
      if (Array.isArray(person)) {
        name = person[0];
        twitter = person[1];
        git = person[2];
      }
      return {
        name,
        link:
          'https://www.columbiaspectator.com/contributors/' +
          name.replace(/“.*” /, '').replace(/\s/g, '-'),
        twitter,
        git,
      };
    })
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  const pastMembers = projects.pastMembers
    ? projects.pastMembers
        .map(person => {
          let name = person;
          let twitter, git;
          if (Array.isArray(person)) {
            name = person[0];
            twitter = person[1];
            git = person[2];
          }
          return {
            name,
            link:
              'https://www.columbiaspectator.com/contributors/' +
              name.replace(/“.*” /, '').replace(/\s/g, '-'),
            twitter,
            git,
          };
        })
        .sort((a, b) => (a.name > b.name ? 1 : -1))
    : [];

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

.twitter {
  font-family: Inconsolata;
  font-weight: 400;
  opacity: 0.7;
}
</style>

<main style="max-width: {MAX_WIDTH}px">
  <header>
    <div>
      <p><b>Spectator Graphics</b></p>
    </div>
    <div>
      <p>Homepage.</p>
      <p class="gray"><a href="#people">People.</a></p>
    </div>
  </header>

  <p class="nutgraf">
    A homepage for our open-source graphics, data, analysis and tools.
  </p>

  <div class="nutgraf contact" class:contactFocused={contactFocused}>
    <p>
      <b>We&rsquo;re also on GitHub:</b>
      <a href="https://github.com/graphicsdesk">github.com/graphicsdesk</a>
    </p>
  </div>

  <Grid projects={projects.topLevel} />
  <Grid projects={projects.secondLevel} columns={1} />

  <footer>
    <SectionHeader id="people">Our people</SectionHeader>
    <div class="buzzwords">
      <ul>
        {#each people as { link, name, twitter, git }}
          <li>
            <p>
              <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
              <span>
                {#if twitter}
                  <a class="twitter" href="https://twitter.com/{twitter}" target="_blank" rel="noopener noreferrer">[tw]</a>
                {/if}
                {#if git}
                  <a class="twitter" href="https://github.com/{git}" target="_blank" rel="noopener noreferrer">[gh]</a>
                {/if}
              </span>
            </p>
          </li>
        {/each}
      </ul>
    </div>

    <SectionHeader id="past-members">Past Members</SectionHeader>
  <div class="buzzwords">
    <ul>
      {#each pastMembers as { link, name, twitter, git }}
        <li>
          <p>
            <a href={link} target="_blank" rel="noopener noreferrer">{name}</a>
            <span>
              {#if twitter}
                <a class="twitter" href="https://twitter.com/{twitter}" target="_blank" rel="noopener noreferrer">[tw]</a>
              {/if}
              {#if git}
                <a class="twitter" href="https://github.com/{git}" target="_blank" rel="noopener noreferrer">[gh]</a>
              {/if}
            </span>
          </p>
        </li>
      {/each}
    </ul>
  </div>

    <SectionHeader empty />
    <p class="updated-text">
      Updated May 2020. <span style="text-transform: none;">
      You are welcome to use this code/design for your own website under the
      <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
      </span>
    </p>
  </footer>
</main>
