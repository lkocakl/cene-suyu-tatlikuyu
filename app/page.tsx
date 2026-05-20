import React from 'react';
import Link from 'next/link';
import { featuredProducts, Product } from '../data/products';

export default function Home() {
  const whatsappNumber = "905349122051";
  const defaultMessage = encodeURIComponent("Merhaba, Tatlıkuyu şubenizdeki güncel taze ürünler ve su stokları hakkında bilgi alabilir miyim?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-sans selection:bg-cyan-100 selection:text-cyan-900">

      {/* 1. TOP BAR (Dokunulmadı, Beğendiğin Gibi Aynen Duruyor) */}
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

          <div className="hidden md:flex space-x-8 text-sm font-bold text-stone-600">
            <Link href="/" className="text-cyan-600 border-b-2 border-cyan-600 pb-1">Anasayfa</Link>
            <Link href="/kurumsal" className="hover:text-cyan-600 transition pb-1">Mağazamız</Link>
            <Link href="/urunler" className="hover:text-cyan-600 transition pb-1">Ürün Kataloğu</Link>
            <Link href="/iletisim" className="hover:text-cyan-600 transition pb-1">Konum & İletişim</Link>
          </div>

          {/* YENİLİKÇİ BUTON 1: Asimetrik Yaprak Kıvrımlı Sağ Üst Buton */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-[14px_4px_14px_4px] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 text-xs md:text-sm flex items-center gap-2 border-b-2 border-emerald-800"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            Hızlı İletişim
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
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
              İzmit’in tescilli, yumuşak içimli efsanevi <strong>Çene Suyu</strong> çeşitlerini; koruyucusuz, çiftlikten günlük gelen <strong>köy sütü</strong> ve <strong>taze yumurta</strong> ile buluşturduk. Sağlık ve doğallık Tatlıkuyu’daki mağazamızda.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              {/* YENİLİKÇİ BUTON 2: Kalın Konturlu, Kabaran Asimetrik Ana Buton */}
              <Link
                href="/urunler"
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-black px-8 py-4 rounded-[20px_4px_20px_4px] transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-cyan-600/10 border-b-4 border-cyan-800 active:border-b-0 active:translate-y-1 text-center text-sm md:text-base"
              >
                Raflarımızı İnceleyin
              </Link>

              {/* YENİLİKÇİ BUTON 3: Şeffaf, Yumuşak Köşeli İkincil Buton */}
              <Link
                href="/iletisim"
                className="bg-white hover:bg-stone-50 text-stone-700 font-bold px-8 py-4 rounded-[4px_20px_4px_20px] transition-all duration-300 border border-stone-200 hover:border-stone-300 text-center text-sm md:text-base shadow-sm active:translate-y-0.5"
              >
                Yol Tarifi Al 📍
              </Link>
            </div>
          </div>

          {/* Sağ Görsel Alanı */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-72 h-96 md:w-80 md:h-[450px] rounded-[3rem_1rem_3rem_1rem] overflow-hidden rotate-3 shadow-2xl border-4 border-white z-10">
              <img
                src="https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=600"
                alt="Doğal Yaşam"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute w-48 h-64 bg-lime-100 rounded-[1rem_2rem_1rem_2rem] -bottom-6 -left-6 -rotate-6 -z-10 shadow-xl overflow-hidden border-4 border-white hidden sm:block">
              <img
                src="https://images.unsplash.com/photo-1550583724-b2692b85b150?q=400"
                alt="Doğal Süt"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. ÜRÜN VİTRİNİ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-black text-cyan-950 tracking-tight">Günlük Eksilmeyen Tazelik</h2>
          <p className="text-stone-500 text-sm mt-2">Mağazamızda her sabah yerini alan, koruyucusuz ve doğrudan kaynağından getirilen ana ürün gruplarımız.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product: Product) => (
            <div key={product.id} className="bg-white rounded-[2rem_8px_2rem_8px] p-5 border border-stone-100 hover:border-cyan-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">

              <div>
                <div className="relative h-48 w-full rounded-[1.5rem_4px_1.5rem_4px] overflow-hidden bg-stone-100 mb-4">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-cyan-950 font-extrabold text-[10px] px-3 py-1 rounded-[6px_2px_6px_2px] shadow-sm border border-stone-100">
                    {product.category}
                  </div>
                </div>

                <span className="text-[11px] text-lime-600 font-black tracking-widest uppercase block mb-1">
                  {product.packaging}
                </span>
                <h3 className="font-extrabold text-base text-stone-900 group-hover:text-cyan-700 transition line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-stone-500 text-xs mt-2 leading-relaxed line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-50 flex items-center justify-between">
                <span className="text-xs font-bold text-stone-500 bg-stone-50 border border-stone-100 px-2.5 py-1 rounded-[6px_2px_6px_2px]">
                  {product.price}
                </span>

                {/* YARATICI ETİKET/BUTON: Küçük, şık ve basılabilir bir ok butonu */}
                <Link
                  href={`/urun/${product.id}`}
                  className="w-8 h-8 rounded-[8px_2px_8px_2px] bg-cyan-50 text-cyan-600 hover:bg-cyan-600 hover:text-white transition-all duration-300 flex items-center justify-center font-bold text-sm shadow-sm active:scale-95"
                >
                  →
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. MAĞAZADAN TESLİM BİLGİLENDİRME ALANI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-br from-cyan-900 to-cyan-950 text-white rounded-[2rem_8px_2rem_8px] p-8 md:p-12 shadow-xl relative overflow-hidden border-b-8 border-cyan-950">
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-lime-400 text-xs font-black tracking-widest uppercase block">Bilgilendirme</span>
            <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight">Sipariş ve Teslimat Süreçlerimiz Hakkında</h3>
            <p className="text-cyan-200/80 text-sm md:text-base leading-relaxed">
              İşletmemiz kalitesini ve tazeliğini korumak adına <strong>eve sipariş (paket servis) hizmeti vermemektedir</strong> ve ürünlerimiz arasında damacana bulunmaz. Tüm taze köy ürünlerimizi, tescilli pet/bardak Çene Sularımızı ve soğuk meşrubatlarımızı Tatlıkuyu’daki mağazamızdan görerek, taptaze şekilde elden teslim alabilirsiniz.
            </p>
            <div className="pt-2 flex flex-wrap gap-6 text-xs md:text-sm text-cyan-100 font-semibold">
              <div className="flex items-center gap-2">🔹 Koli ve Toptan Alım İmkanı</div>
              <div className="flex items-center gap-2">🔹 Cemiyetlere Bardak Su Tedariği</div>
              <div className="flex items-center gap-2">🔹 Her Gün Taze Ürün Rafı</div>
            </div>
          </div>
          <div className="absolute right-8 bottom-0 text-[12rem] text-cyan-800/10 translate-y-12 hidden lg:block pointer-events-none">
            🏪
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-white font-black tracking-tight block text-lg">GEBZE TATLIKUYU ÇENE SUYU BAYİİ</span>
            <p className="text-xs text-stone-500">Ahmet Pembegüllü Bulvarı No:26, Tatlıkuyu / Gebze</p>
          </div>
          <div className="text-xs text-stone-500 font-medium">
            © 2026 Doğallığın Adresi. Tüm Hakları Saklıdır.
          </div>
        </div>
      </footer>

    </div>
  );
}