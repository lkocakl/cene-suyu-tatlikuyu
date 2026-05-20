import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from './config';

// Veritabanı isteklerini atan ana istemci
export const client = createClient(sanityConfig);

// Görselleri işleyen Sanity motoru
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source).url();
}