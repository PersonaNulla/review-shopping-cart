import { ShoppingBasket } from "lucide-react";
import { Link } from "react-router";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";
import { useCartContext } from "#stores/Cart/cart-context.js";

function Header() {
  const { getCartSize } = useCartContext();

  return (
    <header className={styles.container}>
      <div className={styles.grid}>
        <Link
          className={styles.home}
          to="/"
        >
          TOPS
        </Link>
        <Link
          className={styles.checkout}
          to="/checkout"
        >
          <ShoppingBasket
            className={styles.icon}
            aria-hidden="true"
          />
          <span className={styles["cart-quantity"]}>({getCartSize()})</span>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
