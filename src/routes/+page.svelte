<script>
  let { data } = $props()
</script>

<main>
  {#if data.cmsReady}
    {#if data.hero}
      <section>
        <h1>{data.hero.headline}</h1>
        <p>{data.hero.subtext}</p>
        <button>{data.hero.ctaText}</button>
      </section>
    {:else}
      <section>
        <h1>Next generation digital banking</h1>
        <p>Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
        <button>Request Invite</button>
      </section>
    {/if}

    {#if data.featuresIntro}
      <section>
        <h2>{data.featuresIntro.title}</h2>
        <p>{data.featuresIntro.description}</p>
      </section>
    {/if}

    {#if data.features?.length}
      <section>
        {#each data.features as feature}
          <article>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        {/each}
      </section>
    {/if}

    {#if data.articles?.length}
      <section>
        <h2>Latest Articles</h2>
        {#each data.articles as article}
          <article>
            <h3>{article.title}</h3>
            <p>By {article.author}</p>
            <p>{article.excerpt}</p>
          </article>
        {/each}
      </section>
    {/if}
  {:else}
    <section>
      <h1>Next generation digital banking</h1>
      <p>Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
      <button>Request Invite</button>
    </section>
    <p><em>Connect Sanity CMS: Add PUBLIC_SANITY_PROJECT_ID to .env and create content in the studio.</em></p>
  {/if}
</main>
