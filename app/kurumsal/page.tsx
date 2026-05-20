import React from 'react';
import Link from 'next/link';

export default function Kurumsal() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
            <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <Link href="/" className="flex flex-col">
                        <span className="text-xl font-black text-blue-700 tracking-wide">TATLIKUYU ÇENE SUYU</span>
                        <span className="text-xs uppercase tracking-widest text-slate-500 font-bold -mt-1">Doğal & Taze Ürünler Mağazası</span>
                    </Link>
                    <div className="flex space-x-6">
                        <Link href="/" className="hover:text-blue-600 font-medium transition">Anasayfa</Link>
                        <Link href="/kurumsal" className="text-blue-600 font-bold">Kurumsal</Link>
                        <Link href="/urunler" className="hover:text-blue-600 font-medium transition">Ürünlerimiz</Link>
                    </div>
                </div>
            </nav>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <article className="prose prose-slate lg:prose-lg mx-auto bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 border-b pb-4">Hakkımızda</h1>

                    <p className="text-slate-600 leading-relaxed mb-6">
                        Gebze Tatlıkuyu’da hizmet veren bayimiz, İzmit’in dünyaca ünlü ve tescilli şifalı kaynağı olan <strong>Çene Suyu</strong>’nu en taze haliyle bölge halkına ulaştırmak amacıyla kurulmuştur.
                    </p>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">Şifalı Su Kaynağı: Çene Suyu</h2>
                    <p className="text-slate-600 mb-6">
                        Derince’nin derinliklerinden gelen, mineral dengesi ve yumuşak içimiyle bilinen Çene Suyu, pet şişe ve bardak su formatlarında hijyenik koşullarda mağazamızda yer almaktadır. Sadece bir su değil, bölgenin bir mirası olan bu eşsiz lezzeti, koli veya adet bazında temin edebilirsiniz.
                    </p>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">Doğallık Mağazamızda: Süt, Yumurta ve Meşrubat</h2>
                    <p className="text-slate-600 mb-6">
                        Su bayiliğimizin ötesinde, müşterilerimize taze ve güvenilir gıda sunmayı ilke edindik. Her gün taze gelen <strong>köy sütümüz</strong>, günlük <strong>çiftlik yumurtalarımız</strong> ve seçkin markaların <strong>meşrubat çeşitleriyle</strong> sofralarınıza doğallık katıyoruz.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-10 rounded-r-xl">
                        <p className="text-blue-900 font-semibold italic">
                            "Önceliğimiz her zaman tazelik ve müşteri memnuniyetidir. Mağazamızda yer almayan veya koruyucu içeren hiçbir ürünü raflarımıza taşımıyoruz."
                        </p>
                    </div>

                    <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">Hizmet Anlayışımız</h2>
                    <ul className="list-disc pl-6 space-y-3 text-slate-600">
                        <li><strong>Mağazadan Teslim:</strong> Hızlı ve pratik alışveriş için Tatlıkuyu şubemiz her gün hizmetinizdedir.</li>
                        <li><strong>Toptan Tedarik:</strong> Düğün, mevlit ve cemiyetleriniz için yüksek adetli bardak su ve meşrubat ihtiyacınızı karşılıyoruz.</li>
                        <li><strong>Günlük Tazelik:</strong> Süt ve yumurta gibi hassas ürünlerde günlük sevkiyat garantisi sunuyoruz.</li>
                    </ul>
                </article>
            </main>
        </div>
    );
}