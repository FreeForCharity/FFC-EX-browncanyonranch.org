import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://browncanyonranch.org'
  const now = new Date()
  const routes = [
    '/',
    '/join',
    '/visitor-info',
    '/news',
    '/programs',
    '/gallery',
    '/contact',
    '/donate',
    '/privacy-policy',
    '/terms-of-service',
  ]
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
