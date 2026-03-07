import { Crypto } from "@/types/crypto";

interface Props {
  coin: Crypto;
}

export default function CryptoCard({ coin }: Props) {
  const positive = coin.price_change_percentage_24h > 0;

  return (
    <div className="border-none rounded-xl p-4 shadow-md hover:shadow-xl transition duration-300 bg-white hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-3">
        <img src={coin.image} alt={coin.name} width={40} height={40} />
        <div>
          <h2 className="font-bold text-lg">{coin.name}</h2>
          <p className="text-sm text-gray-500">{coin.symbol.toUpperCase()}</p>
        </div>
      </div>

      <p className="text-gray-700">
        Price: <span className="font-semibold">${coin.current_price}</span>
      </p>

      <p
        className={`mt-2 font-semibold ${positive ? "text-green-600" : "text-red-600"}`}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </p>

      <p className="text-sm text-gray-400 mt-1">Rank #{coin.market_cap_rank}</p>
    </div>
  );
}
