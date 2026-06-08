'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        // Hatayı log analiz sistemine göndermek için hazır bırakıyoruz
        console.error('Sistem Hatası Yakalandı:', error);
    }, [error]);

    return (
        <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-sans flex flex-col justify-between selection:bg-cyan-100 selection:text-cyan-900">

            <main className="max-w-3xl mx-auto px-4 py-20 flex flex-col items-center text-center space-y-8 flex-grow justify-center">

                {/* Hata İkon Alanı */}
                <div className="relative">
                    <div className="text-9xl font-black text-amber-500/10 tracking-widest select-none">
                        500
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-6xl">
                        ⚙️
                    </div>
                </div>

                {/* Mesaj Alanı */}
                <div className="space-y-3">
                    <span className="text-amber-600 font-black tracking-[0.2em] text-xs uppercase block">BAĞLANTI DURUMU</span>
                    <h1 className="text-3xl md:text-4xl font-black text-cyan-950 tracking-tight">
                        Küçük Bir Bağlantı Kesintisi Oluştu
                    </h1>
                    <p className="text-stone-500 text-sm max-w-md mx-auto leading-relaxed">
                        Şu anda taze ürün listemize ulaşırken bir sorun yaşıyoruz. Sayfayı yenileyebilir veya doğrudan dükkanımızla iletişime geçerek siparişinizi önden hazırlatabilirsiniz.
                    </p>
                </div>

                {/* Aksiyon Butonları (Tatlıkuyu asimetrik stili) */}
                <div className="flex flex-wrap gap-4 justify-center pt-4">
                    <button
                        onClick={() => reset()}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white font-black px-6 py-3.5 rounded-asym-lg transition-all duration-300 border-b-4 border-cyan-800 active:border-b-0 active:translate-y-1 text-xs md:text-sm shadow-sm cursor-pointer"
                    >
                        Tekrar Dene 🔄
                    </button>
                    <a
                        href="tel:+905349122051"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-asym-md transition-all duration-300 border-b-4 border-emerald-800 active:border-b-0 active:translate-y-1 text-xs md:text-sm shadow-xs flex items-center gap-2"
                    >
                        📞 Dükkanı Ara
                    </a>
                </div>

            </main>

            {/* Mini footer */}
            <footer className="bg-stone-900 text-stone-500 py-6 text-center text-xs border-t border-stone-800">
                GEBZE TATLIKUYU ÇENE SUYU BAYİİ • KESİNTİSİZ ALTYAPI SİSTEMİ
            </footer>
        </div>
    );
}