import { useCallback, useMemo, useState } from "react";
import { CartContext } from "./cart-context";

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback(
    (product) => {
      let isFound = false;

      const next = cartItems.map((item) => {
        if (item.id !== product.id) {
          return item;
        }
        isFound = true;
        const newQuantity =
          item.quantity + 1 < 100 ? item.quantity + 1 : item.quantity;
        return { ...item, quantity: newQuantity };
      });

      if (!isFound) {
        const newItem = { ...product, quantity: 1 };
        next.push(newItem);
      }

      setCartItems(next);
    },
    [cartItems],
  );

  const subtractFromCart = useCallback(
    (id) => {
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
    },
    [cartItems],
  );

  const removeFromCart = useCallback(
    (id) => {
      const next = cartItems.filter((item) => item.id !== id);
      setCartItems(next);
    },
    [cartItems],
  );

  const checkout = useCallback(() => {
    setCartItems([]);
  }, []);

  const getCartValue = useCallback(() => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    return total.toFixed(2);
  }, [cartItems]);

  const getCartSize = useCallback(() => {
    return cartItems.reduce((size, item) => size + item.quantity, 0);
  }, [cartItems]);

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      subtractFromCart,
      removeFromCart,
      checkout,
      getCartValue,
      getCartSize,
    }),
    [
      cartItems,
      addToCart,
      subtractFromCart,
      removeFromCart,
      checkout,
      getCartValue,
      getCartSize,
    ],
  );

  return <CartContext value={value}>{children}</CartContext>;
}

export default CartProvider;
