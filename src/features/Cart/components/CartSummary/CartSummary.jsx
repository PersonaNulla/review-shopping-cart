import { Check } from "lucide-react";
import styles from "./CartSummary.module.css";
import { useCartContext } from "#stores/Cart/cart-context.js";

function CartSummary() {
  const { getCartValue, checkout } = useCartContext();

  const total = getCartValue();

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Order Summary</h2>
      <div className={styles.subtotal}>
        <p className={styles.label}>Subtotal</p>
        <p className={styles.value}>${total}</p>
      </div>
      <div className={styles.shipping}>
        <p className={styles.label}>Shipping</p>
        <p className={styles.value}>Free</p>
      </div>
      <div className={styles.total}>
        <p className={styles.label}>Total</p>
        <p className={styles.value}>${total}</p>
      </div>
      <button
        className={styles.btn}
        onClick={checkout}
      >
        <Check className={styles.icon} />
        Checkout
      </button>

      <p className={styles.small}>
        Secure checkout · Free returns within 30 days
      </p>
    </section>
  );
}

export default CartSummary;
