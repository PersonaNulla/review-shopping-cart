import CartItemCard from "../CartItemCard/CartItemCard";
import styles from "./CartContents.module.css";
import { useCartContext } from "#stores/Cart/cart-context.js";

function CartContents() {
  const { cartItems } = useCartContext();

  return (
    <div className={styles.container}>
      {cartItems.map((item) => (
        <CartItemCard
          key={item.id}
          product={item}
        />
      ))}
    </div>
  );
}

export default CartContents;
