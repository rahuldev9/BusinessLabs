"use client";

import { Product } from "@/types/product";
import { addToCart } from "@/utils/cart";
import { toast } from "sonner";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const handleAdd = () => {
    addToCart(product);
    toast.success("Added to Cart");
  };

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-lg">
      <img src={product.image} className="h-40 w-full object-cover rounded" />

      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>

      <p className="text-gray-600">${product.price}</p>

      <button
        onClick={handleAdd}
        className="bg-black text-white px-4 py-2 rounded mt-3 w-full hover:bg-gray-800"
      >
        Add to Cart
      </button>
    </div>
  );
}
