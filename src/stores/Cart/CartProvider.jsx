import { useState } from "react";
import { CartContext } from "./cart-context";

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    let isFound = false;

    const next = cartItems.map((item) => {
      if (item.id !== product.id) {
        return item;
      }
      isFound = true;
      return { ...item, quantity: item.quantity + 1 };
    });

    if (!isFound) {
      const newItem = { ...product, quantity: 1 };
      next.push(newItem);
    }

    setCartItems(next);
  }

  function subtractFromCart(id) {
    const next = [];

    cartItems.forEach((item) => {
      if (item.id !== id) {
        next.push(item);
      } else {
        if (item.quantity - 1 >= 1) {
          next.push({ ...item, quantity: item.quantity - 1 });
        }
      }
    });

    setCartItems(next);
  }

  function removeFromCart(id) {
    const next = cartItems.filter((item) => item.id !== id);
    setCartItems(next);
  }

  const value = {
    cartItems,
    addToCart,
    subtractFromCart,
    removeFromCart,
  };

  return <CartContext value={value}>{children}</CartContext>;
}

export default CartProvider;
