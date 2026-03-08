import { getSanityClient, heroQuery, featuresIntroQuery, featuresQuery, articlesQuery } from '$lib/sanity.js'
import { env } from '$env/dynamic/public'

export async function load() {
  const projectId = env.PUBLIC_SANITY_PROJECT_ID 
  const dataset = env.PUBLIC_SANITY_DATASET 

  const client = getSanityClient(projectId, dataset)

  const [hero, featuresIntro, features, articles] = await Promise.all([
    client.fetch(heroQuery),
    client.fetch(featuresIntroQuery),
    client.fetch(featuresQuery),
    client.fetch(articlesQuery),
  ])

  return {
    hero,
    featuresIntro,
    features,
    articles,
    cmsReady: true,
  }
}
