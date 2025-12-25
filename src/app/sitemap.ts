import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://github.com',
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
        },
        {
            url: 'https://github.com/pricing',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]
}
