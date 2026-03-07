import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI ChatBot Assistant",
    template: "%s | AI ChatBot",
  },
  description:
    "An intelligent AI chatbot built with Next.js that helps users get instant answers about services, pricing, and support.",

  keywords: [
    "AI chatbot",
    "Next.js chatbot",
    "AI assistant",
    "customer support chatbot",
    "chatbot UI",
    "AI automation",
    "website chatbot",
  ],

  openGraph: {
    title: "AI ChatBot Assistant",
    description:
      "Smart AI chatbot built with Next.js for answering user questions and providing automated support.",
    url: "https://ai-chatbot-phi-azure-90.vercel.app",
    siteName: "AI ChatBot",
    images: [
      {
        url: "/chatbot-preview.png",
        width: 1200,
        height: 630,
        alt: "AI Chatbot Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI ChatBot Assistant",
    description:
      "Experience a smart AI chatbot built with Next.js for instant responses and automated support.",
    images: ["/chatbot-preview.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
