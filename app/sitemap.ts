import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cene-suyu-tatlikuyu.vercel.app';

    // Sitemizdeki tüm aktif sayfaların listesi
    const routes = ['', '/kurumsal', '/urunler', '/hizli-siparis', '/iletisim'];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8, // Anasayfa önceliği en yüksek
    }));
}