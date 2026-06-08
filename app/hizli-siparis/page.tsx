export const dynamic = 'force-dynamic';
export const revalidate = 0;

import React from 'react';
import { client } from '../../sanity/client';
import Navbar from '../../components/Navbar';
import OrderFormClient from './OrderFormClient';
import { Product } from '../../types';



// Sanity'den güncel su ve şarküteri ürünlerini çeken fonksiyon
async function getProducts() {
    const query = `*[_type == "product"] {
    _id,
    title,
    category,
    packaging,
    description,
    price,
    "imageUrl": imageUrl.asset->url
  }`;
    try {
        const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
        return data || [];
    } catch (error) {
        console.error("Sanity hızlı sipariş ürün çekim hatası: ", error);
        return [];
    }
}

export default async function HizliSiparisPage() {
    const products: Product[] = await getProducts();

    return (
        <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-sans selection:bg-cyan-100 selection:text-cyan-900">
            {/* Her sayfada sabit, asimetrik kapsüllü ortak navbarımız */}
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-12">
                    <span className="text-lime-600 font-black tracking-[0.2em] text-xs uppercase mb-2 block">SIRA BEKLEMEDEN GEL-AL</span>
                    <h1 className="text-3xl md:text-4xl font-black text-cyan-950 tracking-tight">Hızlı Sipariş Hazırlama Formu</h1>
                    <p className="text-stone-500 text-sm mt-1">
                        Dükkana gelmeden önce ihtiyacınız olan ürünleri ve adetleri seçin, biz siz gelene kadar her şeyi kapıda hazır edelim.
                    </p>
                </div>

                {/* İnteraktif sipariş yönetim katmanını (Client Component) çağırıyoruz */}
                <OrderFormClient products={products} />
            </main>
        </div>
    );
}