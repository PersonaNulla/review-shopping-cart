import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./ProductsGrid.module.css";
import useProducts from "#features/Products/hooks/useProducts.js";
import { useCartContext } from "#stores/Cart/cart-context.js";

function ProductsGrid() {
  const [products, isLoading, error] = useProducts();

  const { addToCart } = useCartContext();

  if (isLoading) {
    return <p>Loadng...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className={styles.container}>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            {...product}
            onClick={addToCart}
          />
        );
      })}
    </div>
  );
}

export default ProductsGrid;
