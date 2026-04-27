import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TanstackProvider from "@/providers/TanstackProvider";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ReduxProvider from "@/providers/ReduxProvider";
import { PWAInstallPrompt } from "@/components/pwa-install/PWAInstallPrompt";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://losode.vercel.app";
const imageUrl = `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`;

const APP_NAME = "LosodeMart";
const APP_DEFAULT_TITLE = "LosodeMart - Modern Fashion & Lifestyle Marketplace";
const APP_TITLE_TEMPLATE = "%s | LosodeMart";
const APP_DESCRIPTION =
  "Discover curated fashion, shoes, accessories, and lifestyle products on LosodeMart. Shop quality items from a modern ecommerce marketplace built for a seamless shopping experience.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(APP_URL),
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_NAME,
  },
  formatDetection: {
    telephone: false,
  },
  keywords: [
    "LosodeMart",
    "Losode Marketplace",
    "Ecommerce",
    "Fashion Marketplace",
    "Online Shopping",
    "Clothing",
    "Shoes",
    "Accessories",
    "Lifestyle Products",
    "Modern Ecommerce",
    "Next.js Ecommerce",
    "Paystack Payment",
    "Shopping Cart",
    "Product Listing",
    "Fashion Store",
  ],
  openGraph: {
    siteName: APP_NAME,
    locale: "en_US",
    type: "website",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    url: APP_URL,
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "LosodeMart Fashion Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    images: [imageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <TanstackProvider>
          <ReduxProvider>
            <Navbar />
            {children}
            <Footer />
          </ReduxProvider>
        </TanstackProvider>

        <Toaster position="bottom-right" richColors />
        <PWAInstallPrompt />
      </body>
    </html>
  );
}
