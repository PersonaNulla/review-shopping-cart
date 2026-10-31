import CartContents from "#features/Cart/components/CartContents/CartContents.jsx";
import CartSummary from "#features/Cart/components/CartSummary/CartSummary.jsx";
import styles from "./Checkout.module.css";

function Checkout() {
  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>
        <p className={styles.quote}>YOUR BAG</p>
        <h1 className={styles.heading}>
          Ready when <span className={styles.emphasis}>you are</span>.
        </h1>
        <div className={styles.flex}>
          <CartContents />
          <CartSummary />
        </div>
      </section>
    </main>
  );
}

export default Checkout;
