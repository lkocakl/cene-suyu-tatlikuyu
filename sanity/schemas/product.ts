export default {
    name: 'product',
    title: 'Ürünler',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Ürün Adı',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Uzantı (Slug)',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Kategori',
            type: 'string',
            options: {
                list: [
                    { title: 'Çene Suyu', value: 'Çene Suyu' },
                    { title: 'Meşrubat', value: 'Meşrubat' },
                    { title: 'Doğal Köy Ürünleri', value: 'Doğal Köy Ürünleri' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'packaging',
            title: 'Ambalaj Tipi (Örn: 0.5L Pet, 30\'lu Viyol)',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Ürün Açıklaması',
            type: 'text',
        },
        {
            name: 'price',
            title: 'Fiyat Durumu (Örn: Mağazadan Sorun veya 150 TL)',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'imageUrl',
            title: 'Ürün Görseli',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}