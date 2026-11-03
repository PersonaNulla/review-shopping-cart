import { Link } from "react-router";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";
import { useCartContext } from "#stores/Cart/cart-context.js";
import Icon from "#components/Icon";

function CartSize() {
  const { getCartSize } = useCartContext();
  return <span className={styles["cart-quantity"]}>({getCartSize()})</span>;
}

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
          <Icon
            className={styles.icon}
            name="shoppingBasket"
          />
          <CartSize />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
