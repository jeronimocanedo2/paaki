"use client";

import { useCart } from "./CartProvider";

export default function CartButton() {
  const { count } = useCart();
  return <a className="cart" href="/carrito" aria-label={`Carrito con ${count} productos`}>Carrito <b>{count}</b></a>;
}
