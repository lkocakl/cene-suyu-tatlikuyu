

import React from 'react';
import Link from 'next/link';
import { client } from '../../sanity/client';
import Navbar from '../../components/Navbar';

interface Product {
    _id: string;
    title: string;
    category: string;
    packaging: string;
    description: string;
    price: string;
    imageUrl: string;
}

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
        const data = await client.fetch(query, {}, { next: { revalidate: 3600 } });
        return data || [];
    } catch (error) {
        console.error("Katalog çekim hatası:", error);
        return [];
    }
}

interface PageProps {
    searchParams: Promise<{ kategori?: string; ara?: string }>;
}

export default async function ProductsPage({ searchParams }: PageProps) {
    const products: Product[] = await getProducts();
    const resolvedParams = await searchParams;

    const selectedCategory = resolvedParams.kategori || 'Hepsi';
    const searchQuery = resolvedParams.ara || '';
    const whatsappNumber = "905349122051";

    const filteredProducts = products.filter((product) => {
        if (!product) return false;
        const matchesCategory = selectedCategory === 'Hepsi' || product.category === selectedCategory;
        const matchesSearch = product.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description?.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-sans selection:bg-cyan-100 selection:text-cyan-900">
            <Navbar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <h1 className="text-3xl font-black text-cyan-950 tracking-tight">Ürün Raflarımız</h1>
                    <p className="text-stone-500 text-sm mt-1">Mağazamızda elden teslim alabileceğiniz güncel ürün çeşitleri</p>
                </div>

                {/* FİLTRELEME PANELİ */}
                <div className="bg-white p-5 rounded-[24px_6px_24px_6px] border border-stone-100 shadow-sm mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between">
                    <div className="w-full lg:w-1/3">
                        <form method="GET" action="/urunler" className="w-full">
                            <input
                                type="text"
                                name="ara"
                                placeholder="Aramak için yazıp enter'a basın..."
                                defaultValue={searchQuery}
                                className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-[14px_4px_14px_4px] focus:outline-none focus:border-cyan-600 text-sm"
                            />
                            <input type="hidden" name="kategori" value={selectedCategory} />
                        </form>
                    </div>

                    <div className="flex gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0">
                        {['Hepsi', 'Çene Suyu', 'Meşrubat', 'Doğal Köy Ürünleri'].map((cat) => (
                            <Link
                                key={cat}
                                href={`/urunler?kategori=${encodeURIComponent(cat)}&ara=${encodeURIComponent(searchQuery)}`}
                                className={`px-5 py-2.5 rounded-[12px_4px_12px_4px] text-xs md:text-sm font-black transition-all border-b-2 block ${selectedCategory === cat
                                    ? 'bg-cyan-600 text-white border-cyan-800'
                                    : 'bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200'
                                    }`}
                            >
                                {cat}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* LİSTELEME ALANI */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-[2rem_8px_2rem_8px] border border-dashed border-stone-200 text-stone-400 text-sm">
                        Aradığınız kriterlere uygun ürün şu an bulunamadı.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => (
                            <div key={product._id} className="bg-white rounded-[2rem_8px_2rem_8px] p-4 border border-stone-100 hover:border-cyan-100 shadow-xs flex flex-col justify-between group transition-all duration-300">
                                <div>
                                    <div className="relative h-48 w-full rounded-[1.5rem_4px_1.5rem_4px] overflow-hidden bg-stone-50">
                                        {product.imageUrl ? (
                                            <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-stone-200 flex items-center justify-center text-xs text-stone-400">Görsel Yok</div>
                                        )}
                                        <span className="absolute top-3 left-3 bg-stone-900/80 text-white font-bold text-[10px] px-2.5 py-1 rounded-[6px_2px_6px_2px]">{product.category}</span>
                                    </div>
                                    <div className="p-3">
                                        <span className="text-[11px] text-lime-600 font-black block tracking-wider uppercase">{product.packaging}</span>
                                        <h3 className="font-extrabold text-stone-900 text-base mt-0.5">{product.title}</h3>
                                        <p className="text-stone-500 text-xs mt-2 line-clamp-2">{product.description}</p>
                                    </div>
                                </div>
                                <div className="p-3 pt-0">
                                    <div className="pt-4 border-t border-stone-50 flex flex-col gap-3">
                                        <div className="flex items-center justify-between text-xs font-semibold">
                                            <span className="text-stone-400">Fiyat Bilgisi</span>
                                            <span className="font-black text-stone-800 bg-stone-50 border border-stone-100 px-2 py-0.5 rounded-[4px_2px_4px_2px]">{product.price}</span>
                                        </div>
                                        <a
                                            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Merhaba, web sitenizdeki "${product.title}" ürününüzün güncel stok durumunu sormak istiyorum.`)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-2.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white text-xs font-black rounded-[12px_4px_12px_4px] text-center block transition-all duration-300"
                                        >
                                            Fiyat & Stok Sor 💬
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}