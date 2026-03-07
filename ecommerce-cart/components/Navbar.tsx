"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getCart } from "@/utils/cart";

export default function Navbar() {
  const [count, setCount] = useState(0);

  const loadCart = () => {
    const cart = getCart();
    const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    setCount(total);
  };

  useEffect(() => {
    loadCart();

    window.addEventListener("storage", loadCart);
    window.addEventListener("cartUpdated", loadCart);

    return () => {
      window.removeEventListener("storage", loadCart);
      window.removeEventListener("cartUpdated", loadCart);
    };
  }, []);

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="E-Shop Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </Link>

        {/* Navigation */}
        <div className="flex gap-6 items-center text-sm md:text-base">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>

          <Link
            href="/cart"
            className="relative hover:text-gray-300 transition"
          >
            Cart
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-xs px-2 py-0.5 rounded-full">
                {count}
              </span>
            )}
          </Link>

          <Link href="/checkout" className="hover:text-gray-300 transition">
            Checkout
          </Link>
        </div>
      </nav>
    </header>
  );
}
