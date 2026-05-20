import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import product from './sanity/schemas/product';

export default defineConfig({
    name: 'default',
    title: 'Tatlikuyu Cene Suyu Admin',

    // Görselde duran Project ID değerini buraya bağlıyoruz
    projectId: '2mstz28h',
    dataset: 'production',

    // Stüdyonun web sitemizde hangi uzantıda açılacağını seçiyoruz
    basePath: '/studio',

    plugins: [deskTool()],

    schema: {
        types: [product],
    },
});