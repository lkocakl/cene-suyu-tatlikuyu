export const sanityConfig = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: "2026-05-21", // Bugünün tarihiyle güncel api versiyonu
    useCdn: false, // Her zaman en taze veriyi çekmek için false yapıyoruz
};