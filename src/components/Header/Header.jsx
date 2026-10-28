import { ShoppingBasket } from "lucide-react";
import { NavLink, Link } from "react-router";
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
        <nav
          className={styles.nav}
          aria-label="Main"
        >
          <ul className={styles["tabs-list"]}>
            <li>
              <TabItem to="/">Home</TabItem>
            </li>
            <li>
              <TabItem to="/store">Store</TabItem>
            </li>
            <li>
              <TabItem to="/checkout">Checkout (1)</TabItem>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function TabItem({ to, children }) {
  return (
    <NavLink
      {...{ to }}
      className={({ isActive }) =>
        isActive ? styles["active-tab"] : styles.tab
      }
    >
      {children}
    </NavLink>
  );
}

export default Header;
