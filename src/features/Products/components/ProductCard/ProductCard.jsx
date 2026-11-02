import { Plus } from "lucide-react";
import styles from "./ProductCard.module.css";
import { randomClassNameRange } from "#features/Products/utils/utils.js";
import { useState } from "react";

function ProductCard({ id, title, price, category, image, onClick }) {
  const [bgClassName] = useState(
    randomClassNameRange("img-wrapper", "-", 1, 4),
  );

  function handleClick() {
    onClick({ id, title, price, category, image });
  }

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
      <button
        className={styles.btn}
        onClick={handleClick}
      >
        Add to bag
        <Plus
          className={styles.icon}
          aria-hidden="true"
        />
      </button>
    </article>
  );
}

export default ProductCard;
