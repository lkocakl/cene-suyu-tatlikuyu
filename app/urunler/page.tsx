'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { featuredProducts, Product } from '../../data/products';

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('Hepsi');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const categories = ['Hepsi', 'Çene Suyu', 'Meşrubat', 'Doğal Köy Ürünleri'];
    const whatsappNumber = "905349122051";

    // Özgün Filtreleme Algoritması
    const filteredProducts = featuredProducts.filter((product: Product) => {
        const matchesCategory = selectedCategory === 'Hepsi' || product.category === selectedCategory;
        const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-sans selection:bg-cyan-100 selection:text-cyan-900">

            {/* TOP BAR */}
            <div className="bg-cyan-950 text-cyan-100 text-center py-2 text-xs font-semibold tracking-wider px-4">
                🥛 GÜNLÜK TAZE KÖY SÜTÜ VE DOĞAL ÇİFTLİK YUMURTASI MAĞAZAMIZDA!
            </div>

            {/* NAVBAR */}
            <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-[12px_4px_12px_4px] bg-gradient-to-tr from-cyan-600 to-lime-500 flex items-center justify-center text-white font-black text-xl shadow-md">
                            Ç
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base md:text-lg font-black tracking-tight text-cyan-900 leading-tight">TATLIKUYU DOĞAL</span>
                            <span className="text-[10px] uppercase tracking-widest text-lime-600 font-extrabold">Çene Suyu & Şarküteri</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex space-x-6 font-bold text-stone-600 text-sm">
                        <Link href="/" className="hover:text-cyan-600 transition">Anasayfa</Link>
                        <Link href="/kurumsal" className="hover:text-cyan-600 transition">Mağazamız</Link>
                        <Link href="/urunler" className="text-cyan-600 border-b-2 border-cyan-600 pb-1">Ürün Kataloğu</Link>
                        <Link href="/iletisim" className="hover:text-cyan-600 transition">Konum & İletişim</Link>
                    </div>
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Merhaba, güncel taze ürün listesi ve stok durumu hakkında bilgi alabilir miyim?")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-[14px_4px_14px_4px] transition-all duration-300 transform hover:-translate-y-0.5 border-b-2 border-emerald-800 text-xs md:text-sm"
                    >
                        WhatsApp
                    </a>
                </div>
            </nav>

            {/* MAIN CONTENT */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-8">
                    <h1 className="text-3xl font-black text-cyan-950 tracking-tight">Ürün Raflarımız</h1>
                    <p className="text-stone-500 text-sm mt-1">Mağazamızda elden teslim alabileceğiniz güncel taze gıda, su ve meşrubat çeşitleri</p>
                </div>

                {/* ÖZGÜN FİLTRELEME VE ASİMETRİK ARAMA PANELİ */}
                <div className="bg-white p-5 rounded-[24px_6px_24px_6px] border border-stone-100 shadow-sm mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between">
                    <div className="w-full lg:w-1/3">
                        <input
                            type="text"
                            placeholder="Aradığınız doğal ürünü yazın..."
                            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-[14px_4px_14px_4px] focus:outline-none focus:border-cyan-600 text-sm transition-colors"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2.5 rounded-[12px_4px_12px_4px] text-xs md:text-sm font-black transition-all duration-200 whitespace-nowrap border-b-2 ${selectedCategory === category
                                        ? 'bg-cyan-600 text-white border-cyan-800 shadow-md translate-y-[1px]'
                                        : 'bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* GURME ÜRÜN LİSTESİ KATALOGU */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-[2rem_8px_2rem_8px] border border-dashed border-stone-200 text-stone-400 text-sm">
                        Aradığınız kriterlere veya rafa uygun ürün şu an bulunamadı.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {filteredProducts.map((product: Product) => {
                            const itemWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Merhaba, "${product.title} (${product.packaging})" ürününüzün Tatlıkuyu mağazanızdaki anlık fiyatını ve güncel stok durumunu öğrenebilir miyim?`)}`;

                            return (
                                <div key={product.id} className="bg-white rounded-[2rem_8px_2rem_8px] p-4 border border-stone-100 hover:border-cyan-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                                    <div>
                                        <div className="relative h-48 w-full rounded-[1.5rem_4px_1.5rem_4px] overflow-hidden bg-stone-50">
                                            <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover group-hover:scale-103 transition duration-300" />
                                            <span className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white font-bold text-[10px] px-2.5 py-1 rounded-[6px_2px_6px_2px] shadow-sm">{product.category}</span>
                                        </div>
                                        <div className="p-3">
                                            <span className="text-[11px] text-lime-600 font-black block tracking-wider uppercase">{product.packaging}</span>
                                            <h3 className="font-extrabold text-stone-900 text-base mt-0.5 group-hover:text-cyan-700 transition line-clamp-1">{product.title}</h3>
                                            <p className="text-stone-500 text-xs mt-2 line-clamp-2 leading-relaxed">{product.description}</p>
                                        </div>
                                    </div>

                                    <div className="p-3 pt-0">
                                        <div className="pt-4 border-t border-stone-50 flex flex-col gap-3">
                                            <div className="flex items-center justify-between text-xs font-semibold">
                                                <span className="text-stone-400">Fiyat Bilgisi</span>
                                                <span className="font-black text-stone-800 bg-stone-50 border border-stone-100 px-2 py-0.5 rounded-[4px_2px_4px_2px]">{product.price}</span>
                                            </div>

                                            {/* ASİMETRİK FİYAT & STOK SORMA BUTONU */}
                                            <a
                                                href={itemWhatsappUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full py-2.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white text-xs font-black rounded-[12px_4px_12px_4px] transition-all duration-300 text-center block border border-emerald-200/60 shadow-xs hover:shadow-md"
                                            >
                                                Fiyat & Stok Sor 💬
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>
        </div>
    );
}