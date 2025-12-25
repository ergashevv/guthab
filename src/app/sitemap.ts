import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://guthab.com',
            lastModified: new Date(),
            changeFrequency: 'always',
            priority: 1,
            images: ['https://guthab.com/icon.svg'],
        },
        {
            url: 'https://guthab.com/buy',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
            images: ['https://guthab.com/icon.svg'],
        },
    ]
}
