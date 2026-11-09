import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "SM88 Trans — Travel Situbondo, Carter, Tour & Wedding Car",
  description:
    "Solusi Perjalanan Anda di Setiap Kebutuhan. Travel reguler Situbondo-Surabaya/Malang/Jember, carter, tour, dan wedding car armada premium.",
  keywords: ["travel situbondo", "sewa hiace situbondo", "wedding car situbondo", "carter situbondo", "trans situbondo"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-full flex-col bg-black font-sans text-gray-100">
        {children}
      </body>
    </html>
  );
}
