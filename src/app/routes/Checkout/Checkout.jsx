import styles from "./Checkout.module.css";

function Checkout() {
  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>
        <p className={styles.quote}>YOUR BAG</p>
        <h1 className={styles.heading}>
          Ready whenever <span className={styles.emphasis}>you are</span>.
        </h1>
      </section>
    </main>
  );
}

export default Checkout;
