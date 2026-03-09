<script>
  let { data } = $props()

  const hero = data.cmsReady && data.hero
    ? data.hero
    : {
        headline: 'Next generation digital banking',
        subtext: 'Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.',
        ctaText: 'Request Invite'
      }
</script>

<main class="main">
  <section class="hero" aria-labelledby="hero-heading">
    <div class="hero__inner">
      <div class="hero__content-wrap">
        <div class="hero__content">
          <h1 id="hero-heading" class="hero__title">{hero.headline}</h1>
          <p class="hero__text">{hero.subtext}</p>
          <a href="#request-invite" class="hero__cta button">{hero.ctaText}</a>
        </div>
      </div>
      <div class="hero__media" aria-hidden="true">
        <img
          src="/images/bg-intro-mobile.svg"
          alt=""
          class="hero__bg hero__bg--mobile"
          width="375"
          height="300"
        />
        <img
          src="/images/bg-intro-desktop.svg"
          alt=""
          class="hero__bg hero__bg--desktop"
          width="1200"
          height="900"
        />
        <img
          src="/images/image-mockups.png"
          alt=""
          class="hero__mockups"
          width="768"
          height="939"
        />
      </div>
    </div>
  </section>

  {#if data.cmsReady && (data.featuresIntro || data.features?.length)}
    <section class="features-section">
      <div class="container">
        {#if data.featuresIntro}
          <h2>{data.featuresIntro.title}</h2>
          <p>{data.featuresIntro.description}</p>
        {/if}
        {#if data.features?.length}
          {#each data.features as feature}
            <article>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          {/each}
        {/if}
      </div>
    </section>
  {/if}

  {#if data.cmsReady && data.articles?.length}
    <section class="articles-section">
      <div class="container">
        <h2>Latest Articles</h2>
        {#each data.articles as article}
          <article>
            <h3>{article.title}</h3>
            <p>By {article.author}</p>
            <p>{article.excerpt}</p>
          </article>
        {/each}
      </div>
    </section>
  {/if}

  {#if !data.cmsReady}
    <p class="cms-hint">Connect Sanity CMS: Add PUBLIC_SANITY_PROJECT_ID to .env and create content in the studio.</p>
  {/if}
</main>
