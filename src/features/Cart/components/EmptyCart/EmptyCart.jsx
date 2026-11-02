import styles from "./EmptyCart.module.css";
import { ShoppingBasket } from "lucide-react";
import { Link } from "react-router";

function EmptyCart() {
  return (
    <section className={styles.container}>
      <ShoppingBasket className={styles.icon} />
      <h2 className={styles.heading}>Your bag is waiting.</h2>
      <Link
        className={styles.btn}
        to="/store"
      >
        Browse the collection
      </Link>
    </section>
  );
}

export default EmptyCart;
