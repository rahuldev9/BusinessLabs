"use client";

import { Product } from "@/types/product";
import { updateQuantity, removeItem } from "@/utils/cart";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Props {
  item: Product;
  refresh: () => void;
}

export default function CartItem({ item, refresh }: Props) {
  const changeQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    const qty = parseInt(e.target.value);
    updateQuantity(item.id, qty);
    refresh();
  };

  const remove = () => {
    removeItem(item.id);
    toast.success("Item removed!");
    refresh();
  };

  return (
    <div className="flex justify-between items-center border-b py-4">
      <div>
        <h3 className="font-semibold">{item.name}</h3>
        <p>${item.price}</p>
      </div>

      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={changeQty}
        className="border w-16 p-1 text-center no-spinner"
      />

      <p className="font-semibold">${item.price * (item.quantity || 1)}</p>

      <button onClick={remove} className="text-red-500 cursor-pointer">
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
