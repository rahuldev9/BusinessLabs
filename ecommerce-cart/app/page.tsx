"use client";

import { useEffect, useState } from "react";

import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

const products: Product[] = [
  {
    id: 1,
    name: "MacBook Pro Laptop",
    price: 1299,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
  },
  {
    id: 2,
    name: "iPhone Smartphone",
    price: 999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
  },
  {
    id: 3,
    name: "Smart Home Speaker",
    price: 129,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=600",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 120,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600",
  },
  {
    id: 5,
    name: "Smart Watch",
    price: 249,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600",
  },
  {
    id: 6,
    name: "Gaming Mouse",
    price: 79,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 149,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600",
  },
  {
    id: 8,
    name: "Gaming Laptop",
    price: 1499,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600",
  },
  {
    id: 9,
    name: "Tablet",
    price: 499,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600",
  },
  {
    id: 10,
    name: "Noise Cancelling Earbuds",
    price: 179,
    image: "https://images.unsplash.com/photo-1580894908361-967195033215?w=600",
  },
  {
    id: 11,
    name: "4K Monitor",
    price: 399,
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=600",
  },
  {
    id: 12,
    name: "Gaming Chair",
    price: 299,
    image: "https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=600",
  },
  {
    id: 13,
    name: "External SSD",
    price: 159,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600",
  },
  {
    id: 14,
    name: "Wireless Charger",
    price: 39,
    image: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=600",
  },
  {
    id: 15,
    name: "USB-C Hub",
    price: 59,
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600",
  },
  {
    id: 16,
    name: "Webcam HD",
    price: 89,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600",
  },
  {
    id: 17,
    name: "Gaming Headset",
    price: 129,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=600",
  },
  {
    id: 18,
    name: "VR Headset",
    price: 399,
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600",
  },
];
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-[320px] flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.openai.com/static-rsc-3/MyMeN9OTe0s_XD5CnHic_7lug5qocQrrdkoEs4i3HJujjMnLEbD5rHekC_H9vV4xT6QluQ21giPqYBYCy3tENZ2sLbF964Pc8vRLu-KZGzE?purpose=fullsize&v=1')",
          }}
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Welcome to E-Shop
          </h1>

          <p className="text-gray-200 text-lg">
            Discover the best tech products at amazing prices
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : products.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}

/* Skeleton Loader */

function SkeletonCard() {
  return (
    <div className="bg-white rounded-xl shadow p-4 animate-pulse">
      <div className="h-40 bg-gray-300 rounded mb-4"></div>

      <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>

      <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>

      <div className="h-10 bg-gray-300 rounded"></div>
    </div>
  );
}
