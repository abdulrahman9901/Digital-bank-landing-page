import { getSanityClient, articlesQuery } from '$lib/sanity.js'
import { env } from '$env/dynamic/public'

export async function load() {
  const projectId = env.PUBLIC_SANITY_PROJECT_ID
  const dataset = env.PUBLIC_SANITY_DATASET ?? 'production'

  if (!projectId) {
    return { articles: [], cmsReady: false }
  }

  const client = getSanityClient(projectId, dataset)
  const articles = await client.fetch(articlesQuery)

  return {
    articles: articles ?? [],
    cmsReady: true
  }
}
