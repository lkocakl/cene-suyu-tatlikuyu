# 🏪 Tatlıkuyu Doğal - Çene Suyu & Şarküteri Web Uygulaması

Bu proje, Kocaeli Gebze Tatlıkuyu'da faaliyet gösteren **Tatlıkuyu Doğal Çene Suyu & Şarküteri** mağazası için geliştirilmiş, ultra performanslı, kurumsal mimariye sahip bir **Next.js (App Router)** web uygulamasıdır.

## 🚀 Öne Çıkan Mühendislik Özellikleri

* **Mimarisi & Hız:** Next.js v15 ve Tailwind CSS v4 kullanılarak sıfır gereksiz paket felsefesiyle yazılmıştır.
* **İçerik Yönetimi (CMS):** Ürün listesi, ambalaj türleri ve fiyatlar dinamik olarak **Sanity CMS** üzerinden yönetilir.
* **Akıllı Önbellekleme (ISR):** Veritabanı isteklerini minimize etmek ve sayfa açılış hızlarını saliseler seviyesine indirmek için **Incremental Static Regeneration (ISR)** mimarisi kurulmuştur (3600s).
* **Hızlı Gel-Al Sipariş Motoru:** Müşterilerin dükkana gelmeden önce sepet oluşturup, yerel saat dilimine kilitli (Bugün & Yarın sınırlandırmalı) takvim üzerinden zaman seçerek dükkan sahibine asimetrik şablonla **WhatsApp siparişi** göndermesini sağlar.
* **Kurşun Geçirmez Güvenlik:** Tüm veritabanı ve API anahtarları `.env.local` katmanında zırhlandırılmış, üretim ortamında Vercel korumasına alınmıştır.
* **Hata ve Esneklik Yönetimi:** Global Error Boundaries (500 Sayfası) ve Image Fallback (Kırık resim koruması) sistemleri sayesinde sunucu kesintilerinde bile kullanıcı deneyimi korunur.

---

## 🛠️ Klasör Yapısı ve Düzeni

```text
├── app/
│   ├── hizli-siparis/      # Sepet ve WhatsApp form katmanı
│   ├── urunler/            # Filtrelenebilir dinamik ürün kataloğu
│   ├── error.tsx           # 500 Küresel hata kurtarma sayfası
│   ├── not-found.tsx       # 404 Ortası süt bardağı tasarımlı özel hata sayfası
│   ├── sitemap.ts          # Otomatik Google SEO site haritası motoru
│   ├── robots.ts           # Arama motoru bot yönlendirme protokolü
│   ├── layout.tsx          # Ana iskelet, Toast ayarları ve Vercel Analytics
│   └── globals.css         # Tailwind v4 Tasarım Tokenlarının merkezi
├── components/
│   └── Navbar.tsx          # Asimetrik hatlara sahip sabit ve mobil alt bar menüsü
├── sanity/
│   └── client.ts           # Güvenli çevre değişkenli Sanity bağlantı motoru
└── types/
    └── index.ts            # Projenin katı TypeScript (Strict) anayasası