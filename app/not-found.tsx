import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-sans flex flex-col justify-between selection:bg-cyan-100 selection:text-cyan-900">
            {/* Her sayfada sabit duran asimetrik ortak navbarımız */}
            <Navbar />

            <main className="max-w-3xl mx-auto px-4 py-20 flex flex-col items-center text-center space-y-8 flex-grow justify-center">

                {/* Görsel / Grafik Alanı */}
                <div className="relative">
                    <div className="text-9xl font-black text-cyan-950/10 tracking-widest select-none animate-pulse">
                        404
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-6xl">
                        🥛🫗
                    </div>
                </div>

                {/* Mesaj Alanı */}
                <div className="space-y-3">
                    <span className="text-lime-600 font-black tracking-[0.2em] text-xs uppercase block">RAF KONTROLÜ</span>
                    <h1 className="text-3xl md:text-4xl font-black text-cyan-950 tracking-tight">
                        Aradığınız Ürün Bu Rafta Yok!
                    </h1>
                    <p className="text-stone-500 text-sm max-w-md mx-auto leading-relaxed">
                        Gitmek istediğiniz sayfa taşınmış, silinmiş veya adresi yanlış yazılmış olabilir. Taze ürünlerimize göz atmak için aşağıdaki butonları kullanabilirsiniz.
                    </p>
                </div>

                {/* Yönlendirme Butonları (Tatlıkuyu asimetrik stili) */}
                <div className="flex flex-wrap gap-4 justify-center pt-4">
                    <Link
                        href="/"
                        className="bg-cyan-600 hover:bg-cyan-700 text-white font-black px-6 py-3.5 rounded-[16px_4px_16px_4px] transition-all duration-300 border-b-4 border-cyan-800 active:border-b-0 active:translate-y-1 text-xs md:text-sm shadow-sm"
                    >
                        Anasayfa'ya Dön
                    </Link>
                    <Link
                        href="/hizli-siparis"
                        className="bg-white hover:bg-stone-50 text-stone-700 font-bold px-6 py-3.5 rounded-[4px_16px_4px_16px] transition-all duration-300 border border-stone-200 text-xs md:text-sm shadow-xs"
                    >
                        Hızlı Sipariş Ver ⚡
                    </Link>
                </div>

            </main>

            {/* Sadeleştirilmiş mini footer */}
            <footer className="bg-stone-900 text-stone-500 py-6 text-center text-xs border-t border-stone-800">
                GEBZE TATLIKUYU ÇENE SUYU BAYİİ • © 2026
            </footer>
        </div>
    );
}