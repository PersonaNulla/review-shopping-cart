import styles from "./CartItemCard.module.css";
import { Plus, Minus, Trash } from "lucide-react";
import { randomClassNameRange } from "#utils/utils";
import Hoodie from "#assets/images/hoodie Background Removed.png";

function CartItem({ product, addToCart, subtractFromCart, removeFromCart }) {
  const { id, title, price, description, category, image, quantity } = product;

  function handleAddToCart() {
    addToCart(product);
  }

  function handleSubtractFromCart() {
    subtractFromCart(id);
  }

  function handleRemoveFromcart() {
    removeFromCart(id);
  }

  const total = (price * quantity).toFixed(2);
  const imgBgClassName = randomClassNameRange("img-wrapper", "-", 1, 4);

  return (
    <article className={styles.container}>
      <div className={styles[imgBgClassName]}>
        <img
          className={styles.image}
          src={image}
          alt=""
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.details}>
          <h2 className={styles.name}>{title}</h2>
          <p className={styles.category}>{category}</p>
          <div className={styles.options}>
            <div className={styles.left}>
              <button
                className={styles.btn}
                onClick={handleSubtractFromCart}
              >
                <Minus className={styles.icon} />
              </button>
              <p className={styles.quantity}>{quantity}</p>
              <button
                className={styles.btn}
                onClick={handleAddToCart}
              >
                <Plus className={styles.icon} />
              </button>
            </div>
            <div className={styles.right}>
              <button
                className={styles.btn}
                onClick={handleRemoveFromcart}
              >
                <Trash className={styles["delete-icon"]} />
              </button>
            </div>
          </div>
        </div>
        <p className={styles.total}>{"$" + total}</p>
      </div>
    </article>
  );
}

export default CartItem;
