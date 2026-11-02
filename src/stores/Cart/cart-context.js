import { createContext, useContext } from "react";

const CartContext = createContext(null);

function useCartContext() {
  const ctx = useContext(CartContext);

  if (!ctx) throw new Error("useCart must be used inside CartProvider");

  return ctx;
}

export { useCartContext, CartContext };
