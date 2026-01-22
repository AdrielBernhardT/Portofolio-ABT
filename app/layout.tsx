import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import Navbar from "./components/Navbar";

// 2. Load font Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adriel Bernhard | Backend Developer & Cyber Security",
  description: "Portfolio of Adriel Bernhard Tanuhariono, a Computer Science student at BINUS Online & PPTI BCA Awardee specializing in Backend Development and Cyber Security.",
  keywords: ["Adriel Bernhard", "PPTI BCA", "Portfolio Adriel", "PPTI 21", "Adriel Bernhard Tanuhariono"],
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 pt-24"> 
            {children}
        </main>
      </body>
    </html>
  );
}