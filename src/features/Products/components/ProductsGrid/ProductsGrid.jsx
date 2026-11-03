import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./ProductsGrid.module.css";
import useProducts from "#features/Products/hooks/useProducts.js";
import Spinner from "#features/Products/components/Spinner/Spinner.jsx";

function ProductsGrid() {
  const [products, isLoading, error] = useProducts();

  if (isLoading) {
    return (
      <div className={styles.spinner}>
        <Spinner />
      </div>
    );
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
          />
        );
      })}
    </div>
  );
}

export default ProductsGrid;
