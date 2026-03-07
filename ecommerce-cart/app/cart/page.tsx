"use client";

import { useEffect, useState } from "react";
import { getCart } from "@/utils/cart";
import { Product } from "@/types/product";
import CartItem from "@/components/CartItem";
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const loadCart = () => {
    const data = getCart();
    setCart(data);
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      loadCart();
    }, 800);
  }, []);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {loading ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCart key={i} />
            ))}
          </div>
        ) : cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} refresh={loadCart} />
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-xl shadow h-fit">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>

              <div className="flex justify-between mb-4">
                <span>Tax (10%)</span>
                <span>${(subtotal * 0.1).toFixed(2)}</span>
              </div>

              <div className="flex justify-between font-bold text-lg border-t pt-3">
                <span>Total</span>
                <span>${(subtotal * 1.1).toFixed(2)}</span>
              </div>

              <Link
                href="/checkout"
                className="mt-6 block bg-black text-white text-center py-3 rounded-lg hover:bg-gray-800"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* Skeleton Loader */

function SkeletonCart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow animate-pulse flex justify-between items-center">
      <div className="space-y-2">
        <div className="h-4 w-40 bg-gray-300 rounded"></div>
        <div className="h-3 w-20 bg-gray-300 rounded"></div>
      </div>

      <div className="h-8 w-16 bg-gray-300 rounded"></div>

      <div className="h-4 w-20 bg-gray-300 rounded"></div>
    </div>
  );
}

/* Empty Cart UI */

function EmptyCart() {
  return (
    <div className="text-center py-20">
      <h2 className="text-2xl font-semibold mb-3">Your cart is empty</h2>

      <p className="text-gray-500 mb-6">
        Looks like you haven't added anything yet.
      </p>

      <Link href="/" className="bg-black text-white px-6 py-3 rounded-lg">
        Continue Shopping
      </Link>
    </div>
  );
}
