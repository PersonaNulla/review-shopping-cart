import styles from "./Cart.module.css";
import CartContents from "#features/Cart/components/CartContents/CartContents.jsx";
import CartSummary from "#features/Cart/components/CartSummary/CartSummary.jsx";
import EmptyCart from "#features/Cart/components/EmptyCart/EmptyCart.jsx";
import { useCartContext } from "#stores/Cart/cart-context.js";

function Cart() {
  const { getCartSize } = useCartContext();

  const size = getCartSize();

  if (size === 0) {
    return <EmptyCart />;
  }
  return (
    <div className={styles.container}>
      <CartContents />
      <CartSummary />
    </div>
  );
}

export default Cart;
