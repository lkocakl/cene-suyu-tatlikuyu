import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Gelişmiş SEO ve Open Graph (Sosyal Medya) Meta Verileri
export const metadata: Metadata = {
  title: {
    default: "Gebze Tatlıkuyu Çene Suyu Bayii | Doğal Şarküteri Ürünleri",
    template: "%s | Tatlıkuyu Çene Suyu"
  },
  description: "Kocaeli Gebze Tatlıkuyu'da İzmit'in şifalı Çene Suyu çeşitleri, bardak su seçenekleri, günlük taze köy sütü ve çiftlik yumurtası kapınızda hazır! Toptan ve perakende doğal gıda noktası.",
  keywords: [
    "gebze çene suyu",
    "tatlıkuyu su bayii",
    "gebze bardak su",
    "tatlıkuyu taze köy sütü",
    "gebze doğal yumurta",
    "tatlıkuyu doğal ürünler",
    "gebze şarküteri taze süt"
  ],
  authors: [{ name: "Tatlıkuyu Çene Suyu Bayii" }],
  metadataBase: new URL('https://cene-suyu-tatlikuyu.vercel.app'),

  // WhatsApp ve Sosyal Medyada Paylaşınca Çıkacak Şık Kart Ayarları
  openGraph: {
    title: "Gebze Tatlıkuyu Çene Suyu Bayii | Doğal Köy Ürünleri",
    description: "Günlük taze köy sütü, çiftlik yumurtası ve tescilli şifalı Çene Suyu çeşitleri. Sıra beklemeden Gel-Al formumuzla siparişinizi önden hazırlayın!",
    url: 'https://cene-suyu-tatlikuyu.vercel.app',
    siteName: 'Tatlıkuyu Çene Suyu & Doğal Ürünler',
    locale: 'tr_TR',
    type: 'website',
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#164e63', // Şarküteri rengimizle uyumlu koyu cyan
              color: '#fff',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: 'bold'
            },
          }}
        />
      </body>
    </html>
  );
}