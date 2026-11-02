import styles from "./Cart.module.css";
import CartContents from "#features/Cart/components/CartContents/CartContents.jsx";
import CartSummary from "#features/Cart/components/CartSummary/CartSummary.jsx";

function Cart() {
  return (
    <div className={styles.container}>
      <CartContents />
      <CartSummary />
    </div>
  );
}

export default Cart;
