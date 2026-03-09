<script>
  let { data } = $props()
</script>

{#if data.article}
  <svelte:head>
    <title>{data.article.title} — Digitalbank</title>
  </svelte:head>

  <main class="main">
    <article class="article-detail container">
      <header class="article-detail__header">
        {#if data.article.imageUrl}
          <div class="article-detail__media">
            <img
              src={data.article.imageUrl}
              alt=""
              class="article-detail__img"
              width="800"
              height="500"
            />
          </div>
        {/if}
        <p class="article-detail__author">By {data.article.author}</p>
        <h1 class="article-detail__title">{data.article.title}</h1>
      </header>
      <div class="article-detail__content">
        <p class="article-detail__excerpt">{data.article.excerpt}</p>
      </div>
      <p class="article-detail__back">
        <a href="/articles" class="article-detail__back-link">← All articles</a>
      </p>
    </article>
  </main>
{:else}
  <svelte:head>
    <title>Article not found — Digitalbank</title>
  </svelte:head>

  <main class="main">
    <div class="container empty-state">
      <h1>Article not found</h1>
      <p>The article you're looking for doesn't exist or has been removed.</p>
      <a href="/articles" class="button">View all articles</a>
    </div>
  </main>
{/if}
