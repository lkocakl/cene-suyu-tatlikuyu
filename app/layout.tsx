import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast"; // Pop-up bileşenini ekledik
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gebze Tatlıkuyu Çene Suyu Bayii | Doğal Köy Ürünleri Mağazası",
  description: "İzmit'in tescilli şifalı Çene Suyu çeşitleri, bardak su seçenekleri, günlük taze köy sütü ve çiftlik yumurtası Tatlıkuyu mağazamızda. Kaliteli meşrubat ve toptan su tedariği.",
  keywords: [
    "gebze çene suyu",
    "tatlıkuyu su bayii",
    "gebze bardak su",
    "tatlıkuyu taze köy sütü",
    "gebze doğal yumurta"
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
        {/* Sitenin herhangi bir yerinden çağrılacak bildirimlerin ayarı */}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#333',
              color: '#fff',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 'bold'
            },
          }}
        />
      </body>
    </html>
  );
}