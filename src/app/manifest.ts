import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'GitHub',
        short_name: 'GitHub',
        description: 'Build and ship software',
        start_url: '/',
        display: 'standalone',
        background_color: '#0d1117',
        theme_color: '#0d1117',
        icons: [
            {
                src: '/icon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
        ],
    }
}
