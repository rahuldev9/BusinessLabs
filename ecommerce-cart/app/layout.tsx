import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourstore.com"),
  title: {
    default: "E-Shop | Modern Online Store",
    template: "%s | E-Shop",
  },
  description:
    "E-Shop is a modern e-commerce store where you can buy laptops, phones, accessories and more at great prices.",
  keywords: [
    "ecommerce",
    "online store",
    "buy laptop",
    "buy phone",
    "tech accessories",
  ],
  openGraph: {
    title: "E-Shop Online Store",
    description:
      "Discover the best tech products with fast checkout and modern shopping experience.",
    url: "https://yourstore.com",
    siteName: "E-Shop",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <Toaster position="top-center" richColors />
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
