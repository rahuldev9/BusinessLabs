"use client";

import { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";
import SkeletonCard from "./SkeletonCard";
import { Crypto } from "@/types/crypto";
import { fetchCrypto } from "@/utils/fetchCrypto";

export default function CryptoGrid() {
  const [coins, setCoins] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadCrypto() {
    try {
      setLoading(true);

      const data = await fetchCrypto();

      if (Array.isArray(data)) {
        setCoins(data);
      } else {
        console.error("API did not return array:", data);
        setCoins([]);
      }
    } catch (error) {
      console.error(error);
      setCoins([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCrypto();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header + Refresh */}

      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <h1 className="text-3xl font-bold">Crypto Dashboard</h1>

        <button
          onClick={loadCrypto}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          Refresh Data
        </button>
      </div>

      {/* Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
          : coins.map((coin) => <CryptoCard key={coin.id} coin={coin} />)}
      </div>
    </div>
  );
}
