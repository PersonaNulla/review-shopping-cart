import Icon from "#components/Icon";
import styles from "./ProductCard.module.css";
import { randomClassNameRange } from "#features/Products/utils/utils.js";
import { useMemo } from "react";
import { useCartContext } from "#stores/Cart/cart-context.js";

function ProductCardOptions({ product }) {
  const { addToCart } = useCartContext();
  function handleClick() {
    addToCart(product);
  }

  return (
    <button
      className={styles.btn}
      onClick={handleClick}
    >
      Add to bag
      <Icon
        className={styles.icon}
        name="plus"
      />
    </button>
  );
}

function ProductCard({ id, title, price, category, image }) {
  const bgClassName = useMemo(
    () => randomClassNameRange("img-wrapper", "-", 1, 4),
    [],
  );

  return (
    <article className={styles.container}>
      <div className={styles[bgClassName]}>
        <img
          className={styles.image}
          src={image}
          alt=""
        />
      </div>
      <div className={styles.grid}>
        <h2 className={styles.title}>{title}</h2>
        <p
          className={styles.price}
          aria-label="Price"
        >
          {"$" + price.toFixed(2)}
        </p>
        <p
          className={styles.category}
          aria-label="Category"
        >
          {category}
        </p>
      </div>
      {/* <button
        className={styles.btn}
        onClick={handleClick}
      >
        Add to bag
        <Plus
          className={styles.icon}
          aria-hidden="true"
        />
      </button> */}
      <ProductCardOptions product={{ id, title, price, category, image }} />
    </article>
  );
}

export default ProductCard;
