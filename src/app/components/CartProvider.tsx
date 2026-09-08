"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  variant?: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  changeQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("paaki-cart");
    if (saved) {
      try { setItems(JSON.parse(saved)); } catch { window.localStorage.removeItem("paaki-cart"); }
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) window.localStorage.setItem("paaki-cart", JSON.stringify(items));
  }, [items, ready]);

  const value = useMemo(() => ({
    items,
    count: items.reduce((total, item) => total + item.quantity, 0),
    subtotal: items.reduce((total, item) => total + item.price * item.quantity, 0),
    addItem: (newItem: Omit<CartItem, "quantity">) => setItems((current) => {
      const match = current.find((item) => item.id === newItem.id);
      return match
        ? current.map((item) => item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...newItem, quantity: 1 }];
    }),
    changeQuantity: (id: string, quantity: number) => setItems((current) => quantity < 1 ? current.filter((item) => item.id !== id) : current.map((item) => item.id === id ? { ...item, quantity } : item)),
    removeItem: (id: string) => setItems((current) => current.filter((item) => item.id !== id)),
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context;
}
