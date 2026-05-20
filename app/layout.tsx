import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Gebze Tatlıkuyu Çene Suyu Bayii Google Görünüm Ayarları (SEO)
export const metadata: Metadata = {
  title: "Gebze Tatlıkuyu Çene Suyu Bayii | Doğal Köy Ürünleri Mağazası",
  description: "İzmit'in tescilli şifalı Çene Suyu çeşitleri, bardak su seçenekleri, günlük taze köy sütü ve çiftlik yumurtası Tatlıkuyu mağazamızda. Kaliteli meşrubat ve toptan su tedariği.",
  keywords: [
    "gebze çene suyu",
    "tatlıkuyu su bayii",
    "gebze bardak su",
    "tatlıkuyu taze köy sütü",
    "gebze doğal yumurta",
    "çene suyu pet şişe",
    "gebze toptan meşrubat"
  ],
  authors: [{ name: "Gebze Tatlıkuyu Çene Suyu" }],
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
      </body>
    </html>
  );
}