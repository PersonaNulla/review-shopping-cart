import { useState, useEffect } from "react";

function useProducts() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Error encountered while fetch products, status code: " +
              response.status,
          );
        }
        return response.json();
      })
      .then((data) => {
        if (ignore) {
          return;
        }

        const filtered = data.filter((product) =>
          product.category.includes("clothing"),
        );
        setProducts(filtered);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return [products, isLoading, error];
}

export default useProducts;
