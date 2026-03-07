"use client";

import { useEffect, useState } from "react";
import { getCart, clearCart } from "@/utils/cart";
import { Product } from "@/types/product";
import Link from "next/link";
import { toast } from "sonner";

export default function Checkout() {
  const [cart, setCart] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCart(getCart());
      setLoading(false);
    }, 800);
  }, []);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    toast.success("Order Placed!");
    setSuccess(true);
  };

  /* Order Success */

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-10 rounded-xl shadow text-center">
          <h1 className="text-2xl font-bold mb-4">Order Placed 🎉</h1>
          <p className="text-gray-600 mb-6">
            Your order has been placed successfully.
          </p>

          <Link href="/" className="bg-black text-white px-6 py-3 rounded-lg">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  /* Loading */

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <CheckoutSkeleton />
        </div>
      </div>
    );
  }

  /* Empty Cart */

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center bg-white p-10 rounded-xl shadow">
          <h2 className="text-2xl font-bold mb-3">No items in cart</h2>

          <p className="text-gray-500 mb-6">
            You cannot checkout because your cart is empty.
          </p>

          <Link href="/" className="bg-black text-white px-6 py-3 rounded-lg">
            Go Shopping
          </Link>
        </div>
      </div>
    );
  }

  /* Checkout Page */

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Checkout Form */}
          <form
            onSubmit={placeOrder}
            className="bg-white p-6 rounded-xl shadow flex flex-col gap-4"
          >
            <h2 className="text-xl font-semibold mb-2">Shipping Details</h2>

            <input
              required
              placeholder="Full Name"
              className="border p-3 rounded-lg"
            />

            <input
              required
              placeholder="Email"
              type="email"
              className="border p-3 rounded-lg"
            />

            <input
              required
              placeholder="Address"
              className="border p-3 rounded-lg"
            />

            <input
              required
              placeholder="City"
              className="border p-3 rounded-lg"
            />

            <button className="bg-black text-white py-3 rounded-lg mt-4 hover:bg-gray-800">
              Place Order
            </button>
          </form>

          {/* Order Summary */}
          <div className="bg-white p-6 rounded-xl shadow h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="space-y-2 mb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Skeleton Loader */

function CheckoutSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-10 animate-pulse">
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <div className="h-6 w-40 bg-gray-300 rounded"></div>

        <div className="h-10 bg-gray-300 rounded"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
        <div className="h-10 bg-gray-300 rounded"></div>

        <div className="h-12 bg-gray-300 rounded"></div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow space-y-3">
        <div className="h-6 w-32 bg-gray-300 rounded"></div>

        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>

        <div className="h-6 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}
