import React from 'react';
import Link from 'next/link';
import { client } from '../sanity/client';
import Navbar from '../components/Navbar';

interface Product {
  _id: string;
  title: string;
  category: string;
  packaging: string;
  description: string;
  price: string;
  imageUrl: any;
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
  const products = await client.fetch(query, {}, { next: { revalidate: 0 } });
  return products || [];
}

export default async function Home() {
  const products: Product[] = await getProducts();
  const whatsappNumber = "905349122051";

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-sans selection:bg-cyan-100 selection:text-cyan-900">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-cyan-50/60 via-stone-50 to-white pt-12 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-lime-100/70 border border-lime-200 text-lime-800 font-bold px-3 py-1.5 rounded-[8px_2px_8px_2px] text-xs">
              <span>🍃</span> %100 Katkısız & Günlük Tedarik
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-cyan-950 tracking-tight leading-[1.1]">
              Gebze’de Doğal Yaşamın <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-lime-600">Taze Kaynağı</span>
            </h1>

            <p className="text-stone-600 text-base md:text-lg max-w-2xl leading-relaxed">
              İzmit’in tescilli, yumuşak içimli efsanevi **Çene Suyu** çeşitlerini; koruyucusuz, çiftlikten günlük gelen **köy sütü** ve **taze yumurta** ile buluşturduk. Sağlık ve doğallık Tatlıkuyu’daki mağazamızda.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/urunler"
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-black px-8 py-4 rounded-[20px_4px_20px_4px] transition-all duration-300 shadow-md hover:shadow-xl border-b-4 border-cyan-800 active:border-b-0 active:translate-y-1 text-center text-sm md:text-base"
              >
                Raflarımızı İnceleyin
              </Link>
              <Link
                href="/iletisim"
                className="bg-white hover:bg-stone-50 text-stone-700 font-bold px-8 py-4 rounded-[4px_20px_4px_20px] transition-all duration-300 border border-stone-200 text-center text-sm md:text-base shadow-sm"
              >
                Yol Tarifi Al 📍
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-72 h-96 md:w-80 md:h-[450px] rounded-[3rem_1rem_3rem_1rem] overflow-hidden rotate-3 shadow-2xl border-4 border-white z-10">
              <img src="https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=600" alt="Doğal Yaşam" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* ÜRÜN VİTRİNİ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-cyan-950 tracking-tight">Günlük Eksilmeyen Tazelik</h2>
          <p className="text-stone-500 text-sm mt-2">Mağazamızda her sabah yerini alan, doğrudan kaynağından getirilen ana ürün gruplarımız.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product: Product) => (
            <div key={product._id} className="bg-white rounded-[2rem_8px_2rem_8px] p-5 border border-stone-100 hover:border-cyan-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative h-48 w-full rounded-[1.5rem_4px_1.5rem_4px] overflow-hidden bg-stone-100 mb-4">
                  {product.imageUrl && (
                    <img src={product.imageUrl} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  )}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-cyan-950 font-extrabold text-[10px] px-3 py-1 rounded-[6px_2px_6px_2px] border border-stone-100 shadow-sm">
                    {product.category}
                  </div>
                </div>
                <span className="text-[11px] text-lime-600 font-black tracking-widest uppercase block mb-1">{product.packaging}</span>
                <h3 className="font-extrabold text-base text-stone-900 group-hover:text-cyan-700 transition line-clamp-1">{product.title}</h3>
                <p className="text-stone-500 text-xs mt-2 leading-relaxed line-clamp-2">{product.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-50 flex items-center justify-between">
                <span className="text-xs font-bold text-stone-500 bg-stone-50 border border-stone-100 px-2.5 py-1 rounded-[6px_2px_6px_2px]">{product.price}</span>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Merhaba, "${product.title}" ürününüz hakkında bilgi alabilir miyim?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-[8px_2px_8px_2px] bg-cyan-50 text-cyan-600 hover:bg-cyan-600 hover:text-white transition-all duration-300 flex items-center justify-center font-bold text-sm shadow-sm"
                >
                  →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BİLGİLENDİRME PANELİ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-br from-cyan-900 to-cyan-950 text-white rounded-[2rem_8px_2rem_8px] p-8 md:p-12 shadow-xl relative overflow-hidden border-b-8 border-cyan-950">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-lime-400 text-xs font-black tracking-widest uppercase block">Bilgilendirme</span>
            <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">Sipariş ve Teslimat Süreçlerimize Dair</h3>
            <p className="text-cyan-200/80 text-sm md:text-base leading-relaxed">
              İşletmemiz kalitesini ve tazeliğini korumak adına eve sipariş hizmeti vermemektedir. Tüm taze ürünlerimizi Tatlıkuyu’daki mağazamızdan görerek teslim alabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-white font-black tracking-tight block text-lg">GEBZE TATLIKUYU ÇENE SUYU BAYİİ</span>
          <div className="text-xs text-stone-500 font-medium">© 2026 Tüm Hakları Saklıdır.</div>
        </div>
      </footer>
    </div>
  );
}