import styles from "./CartItemCard.module.css";
import { Plus, Minus, Trash } from "lucide-react";
import { randomClassNameRange } from "#utils/utils";
import Hoodie from "#assets/images/hoodie Background Removed.png";

function CartItem({
  id,
  title,
  price,
  description,
  category,
  image,
  quantity,
}) {
  const total = (price * quantity).toFixed(2);
  const imgBgClassName = randomClassNameRange("img-wrapper", "-", 1, 4);
  return (
    <article className={styles.container}>
      <div className={styles[imgBgClassName]}>
        <img
          className={styles.image}
          src={Hoodie}
          alt=""
        />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.details}>
          <h2 className={styles.name}>{title}</h2>
          <p className={styles.category}>{category}</p>
          <div className={styles.options}>
            <div className={styles.left}>
              <button className={styles.btn}>
                <Minus className={styles.icon} />
              </button>
              <p className={styles.quantity}>{quantity}</p>
              <button className={styles.btn}>
                <Plus className={styles.icon} />
              </button>
            </div>
            <div className={styles.right}>
              <button className={styles.btn}>
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
