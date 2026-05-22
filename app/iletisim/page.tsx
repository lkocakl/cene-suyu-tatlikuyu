import React from 'react';
import Link from 'next/link';

export default function Iletisim() {
    const whatsappNumber = "905349122051";

    return (
        <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-sans">

            {/* NAVBAR */}
            <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-[12px_4px_12px_4px] bg-gradient-to-tr from-cyan-600 to-lime-500 flex items-center justify-center text-white font-black text-xl shadow-md">Ç</div>
                        <div className="flex flex-col text-left">
                            <span className="text-base font-black tracking-tight text-cyan-900 leading-tight">TATLIKUYU DOĞAL</span>
                            <span className="text-[10px] uppercase tracking-widest text-lime-600 font-extrabold">Çene Suyu & Şarküteri</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex space-x-8 text-sm font-bold text-stone-600">
                        <Link href="/" className="hover:text-cyan-600 transition">Anasayfa</Link>
                        <Link href="/kurumsal" className="hover:text-cyan-600 transition">Mağazamız</Link>
                        <Link href="/urunler" className="hover:text-cyan-600 transition">Ürün Kataloğu</Link>
                        <Link href="/iletisim" className="text-cyan-600 border-b-2 border-cyan-600">İletişim</Link>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-[3rem_1rem_3rem_1rem] shadow-2xl overflow-hidden border border-stone-100">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* İletişim Bilgileri - Mağaza Panosu Görünümü */}
                        <div className="p-10 md:p-16 bg-gradient-to-br from-cyan-900 to-cyan-950 text-white space-y-12 relative overflow-hidden">
                            <div className="relative z-10">
                                <h1 className="text-4xl font-black tracking-tight mb-4">Mağazamıza Bekliyoruz</h1>
                                <p className="text-cyan-200/70 text-sm max-w-sm">Tüm taze ürünlerimizi elden teslim alabilir, toptan alımlarınız için önceden rezervasyon yapabilirsiniz.</p>
                            </div>

                            <div className="space-y-8 relative z-10">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-[16px_4px_16px_4px] bg-white/10 flex items-center justify-center text-2xl group-hover:bg-lime-500 transition-colors duration-500">📍</div>
                                    <div>
                                        <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Mağaza Konumu</span>
                                        <p className="text-sm font-medium mt-1">Tatlıkuyu, Ahmet Pembegüllü Blv. No:26, Gebze/Kocaeli</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-[16px_4px_16px_4px] bg-white/10 flex items-center justify-center text-2xl group-hover:bg-emerald-500 transition-colors duration-500">📞</div>
                                    <div>
                                        <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Müşteri Hattı</span>
                                        <p className="text-lg font-black mt-1">0 534 912 20 51</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-[16px_4px_16px_4px] bg-white/10 flex items-center justify-center text-2xl group-hover:bg-blue-500 transition-colors duration-500">⏰</div>
                                    <div>
                                        <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Açık Olduğumuz Saatler</span>
                                        <p className="text-sm font-medium mt-1">Her Gün: 08:30 – 20:30</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                className="inline-flex items-center gap-3 bg-lime-500 hover:bg-lime-600 text-cyan-950 font-black px-8 py-4 rounded-[14px_4px_14px_4px] transition-all transform hover:scale-105 active:scale-95 shadow-xl relative z-10 border-b-4 border-lime-700"
                            >
                                WHATSAPP İLE SOR 💬
                            </a>

                            {/* Dekoratif Işıklar */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl"></div>
                        </div>

                        {/* Harita - Tam Boy Çerçevesiz */}
                        <div className="h-[450px] lg:h-auto bg-stone-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.056094625299!2d29.41870627654746!3d40.783020633318285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc09893d5a0d%3A0x6e7eb553f1465e99!2sTatl%C4%B1kuyu%2C%20Ahmet%20Pembeg%C3%BCll%C3%BC%20Blv.%20No%3A26%2C%2041400%20Gebze%2FKocaeli!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str"
                                className="w-full h-full border-0 grayscale-[0.2] contrast-[1.1]"
                                allowFullScreen={true}
                                loading="lazy"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}