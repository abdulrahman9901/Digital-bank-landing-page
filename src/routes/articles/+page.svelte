<script>
  let { data } = $props()
</script>

<svelte:head>
  <title>Articles — Digitalbank</title>
</svelte:head>

<main class="main">
  <div class="container page-header">
    <h1 class="page-header__title">Latest Articles</h1>
    <p class="page-header__lead">Insights and updates from the Digitalbank team.</p>
  </div>

  {#if data.articles?.length}
    <section class="articles-section" aria-labelledby="articles-heading">
      <div class="container">
        <h2 id="articles-heading" class="visually-hidden">Article list</h2>
        <div class="articles-section__grid">
          {#each data.articles as article}
            <article class="article-card">
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
            </article>
          {/each}
        </div>
      </div>
    </section>
  {:else}
    <div class="container empty-state">
      <p>No articles yet. Add content in Sanity Studio.</p>
    </div>
  {/if}
</main>
