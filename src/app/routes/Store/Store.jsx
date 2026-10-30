import styles from "./Store.module.css";
import ProductsGrid from "#features/Products/components/ProductsGrid/ProductsGrid.jsx";
function Store() {
  return (
    <main className={styles.container}>
      <section className={styles.wrapper}>
        <p className={styles.quote}>THE DEVELOPER COLLECTION</p>
        <h1 className={styles.heading}>
          Merch with <span className={styles.emphasis}>character</span>.
        </h1>
        <ProductsGrid />
      </section>
    </main>
  );
}

export default Store;
