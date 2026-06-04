import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/studio/', // Sanity yönetim panelini Google aramalarından gizliyoruz (Güvenlik için)
        },
        sitemap: 'https://cene-suyu-tatlikuyu.vercel.app/sitemap.xml',
    };
}