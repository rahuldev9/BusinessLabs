import { Product } from "@/types/product";

export const getCart = (): Product[] => {
  if (typeof window === "undefined") return [];
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const saveCart = (cart: Product[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));

  window.dispatchEvent(new Event("cartUpdated"));
};
export const addToCart = (product: Product) => {
  const cart = getCart();

  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
};

export const updateQuantity = (id: number, quantity: number) => {
  const cart = getCart().map((item) =>
    item.id === id ? { ...item, quantity } : item,
  );

  saveCart(cart);
};

export const removeItem = (id: number) => {
  const cart = getCart().filter((item) => item.id !== id);
  saveCart(cart);
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};
