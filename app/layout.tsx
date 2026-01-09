import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 1. Import Font Google
import "./globals.css";
import Navbar from "./components/Navbar";

// 2. Load font Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portofolio Adriel",
  description: "Dibuat dengan Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Masukkan font ke dalam body dengan className={inter.className} */}
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navbar />
        {/* Tambahkan padding top agar konten tidak ketutup Navbar */}
        <main className="max-w-7xl mx-auto px-6 pt-24"> 
            {children}
        </main>
      </body>
    </html>
  );
}