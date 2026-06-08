import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Artık şifreli ve gizli
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: '2026-06-08', // Güncel kararlı API sürümü
    useCdn: true, // Profesyonel önbellekleme (Hız) için burayı true yapıyoruz
});