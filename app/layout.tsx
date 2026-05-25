import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CompareProvider } from "@/contexts/CompareContext";
import { CompareBar } from "@/components/compare/CompareBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "College Discovery Platform",
  description: "Find and compare the best colleges for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased flex flex-col min-h-screen`}>
        <CompareProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <CompareBar />
        </CompareProvider>
      </body>
    </html>
  );
}
