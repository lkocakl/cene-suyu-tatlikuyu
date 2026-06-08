// Tatlıkuyu Projesi Ortak Katı Tip Tanımlamaları
export interface Product {
    _id: string;
    title: string;
    category: 'Çene Suyu' | 'Meşrubat' | 'Doğal Köy Ürünleri'; // Sadece bu kategorilere izin vererek esnetilebilirliği kilitledik
    packaging: string;
    description: string;
    price: string;
    imageUrl: string;
}

export interface NavItem {
    label: string;
    path: string;
    icon?: string;
}