import styles from "./CartItemCard.module.css";
import Icon from "#components/Icon";
import { randomClassNameRange } from "#utils/utils";
import { useMemo, memo } from "react";
import { useCartContext } from "#stores/Cart/cart-context.js";

function CartItemOptions({ product }) {
  const { addToCart, subtractFromCart, removeFromCart } = useCartContext();

  function handleAddToCart() {
    addToCart(product);
  }

  function handleSubtractFromCart() {
    subtractFromCart(product.id);
  }

  function handleRemoveFromcart() {
    removeFromCart(product.id);
  }

  return (
    <div className={styles.options}>
      <div className={styles.left}>
        <button
          className={styles.btn}
          onClick={handleSubtractFromCart}
        >
          <Icon
            className={styles.icon}
            name="minus"
          />
        </button>
        <p className={styles.quantity}>{product.quantity}</p>
        <button
          className={styles.btn}
          onClick={handleAddToCart}
        >
          <Icon
            className={styles.icon}
            name="plus"
          />
        </button>
      </div>
      <div className={styles.right}>
        <button
          className={styles.btn}
          onClick={handleRemoveFromcart}
        >
          <Icon
            className={styles["delete-icon"]}
            name="trash"
          />
        </button>
      </div>
    </div>
  );
}

const CartItem = memo(({ product }) => {
  const { title, price, category, image, quantity } = product;

  const total = useMemo(() => (price * quantity).toFixed(2), [price, quantity]);
  const imgBgClassName = useMemo(
    () => randomClassNameRange("img-wrapper", "-", 1, 4),
    [],
  );

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
          <CartItemOptions product={product} />
        </div>
        <p className={styles.total}>{"$" + total}</p>
      </div>
    </article>
  );
});

export default CartItem;
