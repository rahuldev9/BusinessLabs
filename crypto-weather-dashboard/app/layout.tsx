import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "API Dashboard | Crypto & Weather Data",
    template: "%s | API Dashboard",
  },

  description:
    "A modern Next.js dashboard that displays real-time cryptocurrency prices and weather data using public APIs like CoinGecko and OpenWeatherMap.",

  keywords: [
    "Next.js dashboard",
    "Crypto API",
    "Weather API",
    "CoinGecko",
    "OpenWeatherMap",
    "Real-time data",
    "Next.js TypeScript project",
  ],

  authors: [{ name: "Your Name" }],

  creator: "Your Name",

  openGraph: {
    title: "API Dashboard",
    description:
      "Real-time crypto and weather dashboards built with Next.js and public APIs.",
    url: "https://yourdomain.com",
    siteName: "API Dashboard",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "API Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "API Dashboard",
    description:
      "Explore real-time cryptocurrency and weather data dashboards built with Next.js.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {/* Global Navbar */}
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
