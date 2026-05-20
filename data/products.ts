export interface Product {
    id: string;
    title: string;
    category: string; // Çene Suyu, Meşrubat, Doğal Köy Ürünleri
    price: string;
    packaging: string; // 0.5L, 5L, Koli, Adet vb.
    imageUrl: string;
    description: string;
}

export const featuredProducts: Product[] = [
    {
        id: '1',
        title: 'Orijinal Çene Suyu (Pet)',
        category: 'Çene Suyu',
        price: 'Mağazamızdan Sorunuz',
        packaging: '0.33L / 0.5L / 1.5L / 5L',
        imageUrl: 'https://images.unsplash.com/photo-1608885898957-a599fb1698d6?q=80&w=600',
        description: 'Derince harikası, İzmit’in tescilli, şifalı ve benzersiz yumuşaklıktaki doğal kaynak suyu.'
    },
    {
        id: '2',
        title: 'Bardak Çene Suyu',
        category: 'Çene Suyu',
        price: 'Mağazamızdan Sorunuz',
        packaging: 'Koli Bazlı Satış',
        imageUrl: 'https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=600',
        description: 'Mevlit, düğün, cenaze ve toplu organizasyonlar için pratik ambalajlı bardak su.'
    },
    {
        id: '3',
        title: 'Doğal Köy Sütü',
        category: 'Doğal Köy Ürünleri',
        price: 'Güncel Fiyat İsteyiniz',
        packaging: 'Litre Seçenekleriyle',
        imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=600',
        description: 'Günlük, taze ve tamamen doğal çiftlikten gelen yağlı köy sütü.'
    },
    {
        id: '4',
        title: 'Taze Çiftlik Yumurtası',
        category: 'Doğal Köy Ürünleri',
        price: 'Mağazamızdan Sorunuz',
        packaging: '30’lu Viyol / Adet',
        imageUrl: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=600',
        description: 'Her gün taze gelen, sarısı doğal, büyük boy köy ve çiftlik yumurtası.'
    }
];