import { getSanityClient, articleBySlugQuery } from '$lib/sanity.js'
import { env } from '$env/dynamic/public'

export async function load({ params }) {
  const projectId = env.PUBLIC_SANITY_PROJECT_ID
  const dataset = env.PUBLIC_SANITY_DATASET ?? 'production'
  const slug = params.slug

  if (!projectId || !slug) {
    return { article: null, cmsReady: !!projectId }
  }

  const client = getSanityClient(projectId, dataset)
  const article = await client.fetch(articleBySlugQuery, { slug })

  return {
    article: article ?? null,
    cmsReady: true
  }
}
