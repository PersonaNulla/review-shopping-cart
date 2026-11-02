import Cart from "#features/Cart/components/Cart/Cart.jsx";
import styles from "./Checkout.module.css";

function Checkout() {
  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>
        <p className={styles.quote}>YOUR BAG</p>
        <h1 className={styles.heading}>
          Ready when <span className={styles.emphasis}>you are</span>.
        </h1>
        <Cart />
      </section>
    </main>
  );
}

export default Checkout;
