'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const whatsappNumber = "905349122051";
    const defaultMessage = encodeURIComponent("Merhaba, Tatlıkuyu şubenizdeki güncel taze ürünler ve su stokları hakkında bilgi alabilir miyim?");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

    const navItems = [
        { label: 'Anasayfa', path: '/' },
        { label: 'Mağazamız', path: '/kurumsal' },
        { label: 'Ürün Kataloğu', path: '/urunler' },
        { label: 'Hızlı Sipariş ⚡', path: '/hizli-siparis' }, // Yeni sekmemiz eklendi
        { label: 'Konum & İletişim', path: '/iletisim' },
    ];

    return (
        <div className="w-full sticky top-0 z-50">
            {/* Her sayfada sabit duracak beğendiğin duyuru barı */}
            <div className="bg-cyan-950 text-cyan-100 text-center py-2 text-xs font-semibold tracking-wider px-4">
                **🥛 GÜNLÜK TAZE KÖY SÜTÜ VE DOĞAL ÇİFTLİK YUMURTASI MAĞAZAMIZDA!**
            </div>

            <nav className="bg-white/80 backdrop-blur-md border-b border-stone-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">

                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-[12px_4px_12px_4px] bg-gradient-to-tr from-cyan-600 to-lime-500 flex items-center justify-center text-white font-black text-xl shadow-md">
                            Ç
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-base md:text-lg font-black tracking-tight text-cyan-900 leading-tight">TATLIKUYU DOĞAL</span>
                            <span className="text-[10px] uppercase tracking-widest text-lime-600 font-extrabold">Çene Suyu & Şarküteri</span>
                        </div>
                    </Link>

                    {/* Asimetrik Kapsül Menü Butonları */}
                    <div className="hidden md:flex space-x-2 text-xs font-black tracking-wide text-stone-600">
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`px-4 py-2 rounded-[10px_3px_10px_3px] transition-all duration-200 border ${isActive
                                        ? 'bg-cyan-50 text-cyan-700 border-cyan-100 shadow-sm'
                                        : 'border-transparent hover:bg-stone-50 text-stone-600'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-[14px_4px_14px_4px] transition-all duration-300 transform hover:-translate-y-0.5 border-b-2 border-emerald-800 text-xs md:text-sm flex items-center gap-2"
                    >
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        Hızlı İletişim
                    </a>
                </div>
            </nav>
        </div>
    );
}