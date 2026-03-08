import { createClient } from '@sanity/client'

export function getSanityClient(projectId, dataset = 'production') {
  return createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    useCdn: true,
  })
}

export const heroQuery = `*[_type == "hero"][0]{
  headline,
  subtext,
  ctaText
}`

export const featuresIntroQuery = `*[_type == "featuresIntro"][0]{
  title,
  description
}`

export const featuresQuery = `*[_type == "feature"] | order(order asc){
  title,
  description,
  icon
}`

export const articlesQuery = `*[_type == "article"] | order(order asc){
  title,
  author,
  excerpt,
  image,
  "slug": slug.current
}`
