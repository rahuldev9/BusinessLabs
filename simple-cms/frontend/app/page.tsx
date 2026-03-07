"use client";

import { useEffect, useState } from "react";
import { getContent } from "../services/api";
import { Content } from "../types/content";
import Link from "next/link";

export default function Home() {
  const [content, setContent] = useState<Content[]>([]);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    const data = await getContent();
    setContent(data);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Simple CMS</h1>

          <Link
            href="/admin"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Admin Panel
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to the CMS Landing Page
          </h2>

          <p className="text-lg opacity-90 mb-6">
            Manage your website content easily using our simple CMS admin
            dashboard.
          </p>

          <Link
            href="/admin"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Manage Content
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6 flex-grow">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Latest Content
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {content.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
    </main>
  );
}
