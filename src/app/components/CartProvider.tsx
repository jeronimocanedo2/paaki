"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";

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
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  const [notification, setNotification] = useState("");
  const notificationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("paaki-cart");
    if (saved) {
      try {
        const savedItems: CartItem[] = JSON.parse(saved);
        setItems(savedItems.map((item) => item.id.startsWith("smart-start-") ? { ...item, image: "/smart-start-cart-clean.png" } : item));
      } catch { window.localStorage.removeItem("paaki-cart"); }
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) window.localStorage.setItem("paaki-cart", JSON.stringify(items));
  }, [items, ready]);

  useEffect(() => () => {
    if (notificationTimer.current) clearTimeout(notificationTimer.current);
  }, []);

  const value = useMemo(() => ({
    items,
    count: items.reduce((total, item) => total + item.quantity, 0),
    subtotal: items.reduce((total, item) => total + item.price * item.quantity, 0),
    addItem: (newItem: Omit<CartItem, "quantity">) => {
      setItems((current) => {
        const match = current.find((item) => item.id === newItem.id);
        return match
          ? current.map((item) => item.id === newItem.id ? { ...item, ...newItem, quantity: item.quantity + 1 } : item)
          : [...current, { ...newItem, quantity: 1 }];
      });
      setNotification(`${newItem.name}${newItem.variant ? ` · ${newItem.variant}` : ""}`);
      if (notificationTimer.current) clearTimeout(notificationTimer.current);
      notificationTimer.current = setTimeout(() => setNotification(""), 3200);
    },
    changeQuantity: (id: string, quantity: number) => setItems((current) => quantity < 1 ? current.filter((item) => item.id !== id) : current.map((item) => item.id === id ? { ...item, quantity } : item)),
    removeItem: (id: string) => setItems((current) => current.filter((item) => item.id !== id)),
    clearCart: () => setItems([]),
  }), [items]);

  return (
    <CartContext.Provider value={value}>
      {children}
      <div className={notification ? "cart-toast show" : "cart-toast"} role="status" aria-live="polite">
        <span className="toast-check">✓</span>
        <div><strong>Producto agregado al carrito</strong><small>{notification}</small></div>
        <a href="/carrito">Ver carrito</a>
      </div>
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context;
}
