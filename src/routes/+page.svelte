<script>
  let { data } = $props()

  const hero = data.cmsReady && data.hero
    ? data.hero
    : {
        headline: 'Next generation digital banking',
        subtext: 'Take your financial life online. Your Digitalbank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.',
        ctaText: 'Request Invite'
      }

  const featuresIntro = data.cmsReady && data.featuresIntro
    ? data.featuresIntro
    : {
        title: 'Why choose Digitalbank?',
        description: 'We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.'
      }

  const features = data.cmsReady && data.features?.length
    ? data.features
    : [
        { title: 'Online Banking', description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.', icon: 'online' },
        { title: 'Simple Budgeting', description: 'See exactly where your money goes each month. Receive notifications when you\'re close to hitting your limits.', icon: 'budgeting' },
        { title: 'Fast Onboarding', description: 'We don\'t do branches. Open your account in minutes online and start taking control of your finances right away.', icon: 'onboarding' },
        { title: 'Open API', description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.', icon: 'api' }
      ]
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

  <section class="features-section" aria-labelledby="features-heading">
    <div class="container">
      <div class="features-section__intro">
        <h2 id="features-heading" class="features-section__title">{featuresIntro.title}</h2>
        <p class="features-section__lead">{featuresIntro.description}</p>
      </div>
      <div class="features-section__grid">
        {#each features as feature}
          <article class="feature-card">
            <div class="feature-card__icon-wrap" aria-hidden="true">
              <img
                src="/images/icon-{feature.icon}.svg"
                alt=""
                class="feature-card__icon"
                width="72"
                height="72"
              />
            </div>
            <h3 class="feature-card__title">{feature.title}</h3>
            <p class="feature-card__text">{feature.description}</p>
          </article>
        {/each}
      </div>
    </div>
  </section>

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
