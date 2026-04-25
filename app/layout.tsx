import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ReduxProvider from "@/providers/ReduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Losode Marketplace",
  description:
    "Discover a curated marketplace of fashion, accessories, and lifestyle products. Shop high-quality items, explore categories, and enjoy a seamless e-commerce experience on Losode.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TanstackProvider>
          <ReduxProvider>
            <Navbar />
            {children}
            <Footer />
          </ReduxProvider>
        </TanstackProvider>
        <Toaster position="top-center" richColors={true} />
      </body>
    </html>
  );
}
