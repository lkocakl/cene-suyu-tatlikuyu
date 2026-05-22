import React from 'react';
import Link from 'next/link';

export default function Kurumsal() {
    return (
        <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-sans selection:bg-cyan-100 selection:text-cyan-900">

            {/* NAVBAR (Anasayfa ile uyumlu asimetrik butonlu) */}
            <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-[12px_4px_12px_4px] bg-gradient-to-tr from-cyan-600 to-lime-500 flex items-center justify-center text-white font-black text-xl shadow-md">Ç</div>
                        <div className="flex flex-col">
                            <span className="text-base font-black tracking-tight text-cyan-900 leading-tight">TATLIKUYU DOĞAL</span>
                            <span className="text-[10px] uppercase tracking-widest text-lime-600 font-extrabold">Çene Suyu & Şarküteri</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex space-x-8 text-sm font-bold text-stone-600">
                        <Link href="/" className="hover:text-cyan-600 transition">Anasayfa</Link>
                        <Link href="/kurumsal" className="text-cyan-600 border-b-2 border-cyan-600">Mağazamız</Link>
                        <Link href="/urunler" className="hover:text-cyan-600 transition">Ürün Kataloğu</Link>
                        <Link href="/iletisim" className="hover:text-cyan-600 transition">İletişim</Link>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Sol Taraf: Yaratıcı Başlık ve Resim Kolajı */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="relative">
                            <span className="text-lime-600 font-black tracking-[0.2em] text-xs uppercase mb-4 block">BİZ KİMİZ?</span>
                            <h1 className="text-4xl md:text-5xl font-black text-cyan-950 leading-tight">
                                Tatlıkuyu’da Bir <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-lime-600">Doğa Elçisi</span>
                            </h1>
                        </div>

                        {/* Asimetrik Resim Çerçevesi */}
                        <div className="relative pt-10">
                            <div className="w-full h-80 rounded-[40px_10px_40px_10px] overflow-hidden shadow-2xl rotate-2 border-8 border-white">
                                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800" alt="Mağaza" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-lime-500 text-white p-6 rounded-[20px_4px_20px_4px] shadow-xl font-black text-center leading-tight rotate-[-3deg]">
                                <span className="block text-2xl">100%</span>
                                <span className="text-[10px] uppercase">Doğal Garanti</span>
                            </div>
                        </div>
                    </div>

                    {/* Sağ Taraf: Modern Dergi Düzeni Metin Alanı */}
                    <div className="lg:col-span-7 space-y-12">
                        <section className="bg-white p-8 md:p-12 rounded-[10px_60px_10px_60px] shadow-sm border border-stone-100 relative">
                            <div className="absolute top-0 left-10 -translate-y-1/2 bg-cyan-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                                Hikayemiz
                            </div>
                            <p className="text-stone-600 leading-relaxed text-lg italic">
                                "Her şey, İzmit’in tescilli şifası Çene Suyu'nu Gebze Tatlıkuyu’nun kalbine en saf haliyle getirme arzusuyla başladı."
                            </p>
                            <p className="text-stone-600 leading-relaxed mt-6">
                                Zamanla bu yolculuğa, köylerimizden gelen günlük taze sütü, doğasından koparılmamış çiftlik yumurtalarını ve en kaliteli meşrubatları da ekleyerek, mahallemizin güvenilir bir **Doğal Ürün Noktası** haline geldik.
                            </p>
                        </section>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-cyan-50/50 p-8 rounded-[30px_4px_30px_4px] border border-cyan-100/50">
                                <h3 className="font-black text-cyan-900 mb-4 flex items-center gap-2">
                                    <span className="w-6 h-6 bg-cyan-600 text-white rounded-full flex items-center justify-center text-[10px]">1</span>
                                    Tazelik İlkesi
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    Ürünlerimiz raflarda beklemez. Köy sütü ve yumurtalarımız her gün gün ağarırken kapımıza taze gelir.
                                </p>
                            </div>
                            <div className="bg-lime-50/50 p-8 rounded-[4px_30px_4px_30px] border border-lime-100/50">
                                <h3 className="font-black text-lime-900 mb-4 flex items-center gap-2">
                                    <span className="w-6 h-6 bg-lime-600 text-white rounded-full flex items-center justify-center text-[10px]">2</span>
                                    Sağlık Odaklılık
                                </h3>
                                <p className="text-stone-600 text-sm leading-relaxed">
                                    Çene Suyu'nun eşsiz mineral dengesini bozmadan, el değmeden pet ve bardak formunda size ulaştırıyoruz.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}