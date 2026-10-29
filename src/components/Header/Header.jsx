import { ShoppingBasket } from "lucide-react";
import { Link } from "react-router";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";

function Header() {
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
          <span className={styles["cart-quantity"]}>(1)</span>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
