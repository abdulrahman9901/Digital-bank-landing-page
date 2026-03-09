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

  const articles = data.cmsReady && data.articles?.length
    ? data.articles
    : [
        { title: 'Receive money in any currency with no fees', author: 'Claire Robinson', excerpt: 'The world is getting smaller and we\'re becoming more mobile. So why should you be forced to only receive money in a single …', imageUrl: '/images/image-currency.jpg', slug: null },
        { title: 'Treat yourself without worrying about money', author: 'Wilson Hutton', excerpt: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …', imageUrl: '/images/image-restaurant.jpg', slug: null },
        { title: 'Take your Digitalbank card wherever you go', author: 'Wilson Hutton', excerpt: 'We want you to enjoy your travels. This is why we don\'t charge any fees on purchases while you\'re abroad. We\'ll even show you …', imageUrl: '/images/image-plane.jpg', slug: null },
        { title: 'Our invite-only Beta accounts are now live!', author: 'Claire Robinson', excerpt: 'After a lot of hard work by the whole team, we\'re excited to launch our closed beta. It\'s easy to request an invite through the site …', imageUrl: '/images/image-confetti.jpg', slug: null }
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

  <section class="articles-section" aria-labelledby="articles-heading">
    <div class="container">
      <h2 id="articles-heading" class="articles-section__title">Latest Articles</h2>
      <div class="articles-section__grid">
        {#each articles as article}
          <article class="article-card">
            {#if article.slug}
              <a href="/articles/{article.slug}" class="article-card__link-wrap">
                <div class="article-card__media">
                  {#if article.imageUrl}
                    <img
                      src={article.imageUrl}
                      alt=""
                      class="article-card__img"
                      width="400"
                      height="250"
                      loading="lazy"
                    />
                  {/if}
                </div>
                <div class="article-card__body">
                  <p class="article-card__author">By {article.author}</p>
                  <h3 class="article-card__title">{article.title}</h3>
                  <p class="article-card__excerpt">{article.excerpt}</p>
                </div>
              </a>
            {:else}
              <div class="article-card__media">
                {#if article.imageUrl}
                  <img
                    src={article.imageUrl}
                    alt=""
                    class="article-card__img"
                    width="400"
                    height="250"
                    loading="lazy"
                  />
                {/if}
              </div>
              <div class="article-card__body">
                <p class="article-card__author">By {article.author}</p>
                <h3 class="article-card__title">{article.title}</h3>
                <p class="article-card__excerpt">{article.excerpt}</p>
              </div>
            {/if}
          </article>
        {/each}
      </div>
    </div>
  </section>

  {#if !data.cmsReady}
    <p class="cms-hint">Connect Sanity CMS: Add PUBLIC_SANITY_PROJECT_ID to .env and create content in the studio.</p>
  {/if}
</main>
