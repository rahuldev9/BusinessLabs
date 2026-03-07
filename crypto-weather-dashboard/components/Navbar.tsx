"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          API Dashboard
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="/crypto" className="hover:text-blue-600 transition">
            Crypto
          </Link>

          <Link href="/weather" className="hover:text-blue-600 transition">
            Weather
          </Link>

          <Link
            href="/crypto"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Dashboard
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link href="/crypto" onClick={() => setMenuOpen(false)}>
            Crypto
          </Link>

          <Link href="/weather" onClick={() => setMenuOpen(false)}>
            Weather
          </Link>
        </div>
      )}
    </nav>
  );
}
