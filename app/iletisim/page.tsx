import React from 'react';
import Link from 'next/link';

export default function Iletisim() {
    const whatsappNumber = "905349122051";
    const address = "Tatlıkuyu, Ahmet Pembegüllü Blv. No:26, 41400 Gebze/Kocaeli";

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
            <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <Link href="/" className="flex flex-col">
                        <span className="text-xl font-black text-blue-700 tracking-wide">TATLIKUYU ÇENE SUYU</span>
                        <span className="text-xs uppercase tracking-widest text-slate-500 font-bold -mt-1">Doğal & Taze Ürünler Mağazası</span>
                    </Link>
                    <div className="flex space-x-6 text-sm font-bold">
                        <Link href="/" className="hover:text-blue-600 transition">Anasayfa</Link>
                        <Link href="/urunler" className="hover:text-blue-600 transition">Ürünler</Link>
                        <Link href="/iletisim" className="text-blue-600">İletişim</Link>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    <div className="space-y-8">
                        <div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Bize Ulaşın</h1>
                            <p className="text-slate-500 mt-2">Ürün stok durumu, toptan fiyatlar veya yol tarifi için bizimle iletişime geçebilirsiniz.</p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-100 p-3 rounded-xl text-blue-600 text-xl">📍</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider">Mağaza Adresi</h4>
                                    <p className="text-slate-600 mt-1">{address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 border-t pt-6">
                                <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600 text-xl">📱</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider">WhatsApp & Telefon</h4>
                                    <p className="text-slate-600 mt-1 font-bold">0 534 912 20 51</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 border-t pt-6">
                                <div className="bg-blue-100 p-3 rounded-xl text-blue-600 text-xl">⏰</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider">Çalışma Saatleri</h4>
                                    <p className="text-slate-600 mt-1">Hafta İçi & Hafta Sonu: 08:30 – 20:30</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition text-center shadow-lg"
                        >
                            WhatsApp'tan Hemen Sor
                        </a>
                    </div>

                    <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm h-[500px] lg:h-auto overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.056094625299!2d29.41870627654746!3d40.783020633318285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc09893d5a0d%3A0x6e7eb553f1465e99!2sTatl%C4%B1kuyu%2C%20Ahmet%20Pembeg%C3%BCll%C3%BC%20Blv.%20No%3A26%2C%2041400%20Gebze%2FKocaeli!5e0!3m2!1str!2str!4v1710000000000!5m2!1str!2str"
                            className="w-full h-full rounded-2xl border-0"
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </main>
        </div>
    );
}