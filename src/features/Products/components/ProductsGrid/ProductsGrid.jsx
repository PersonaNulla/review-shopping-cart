import ProductCard from "../ProductCard/ProductCard.jsx";
import styles from "./ProductsGrid.module.css";

const products = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    price: 59.99,
    description:
      "Over-ear headphones with noise isolation, 30-hour battery life, and built-in microphone.",
    category: "electronics",
    image: "https://picsum.photos/seed/headphones/400/400",
  },
  {
    id: 2,
    title: "Stainless Steel Water Bottle",
    price: 24.5,
    description:
      "Insulated 750ml bottle that keeps drinks cold for 24 hours or hot for 12.",
    category: "home & kitchen",
    image: "https://picsum.photos/seed/bottle/400/400",
  },
  {
    id: 3,
    title: "Men's Classic Cotton T-Shirt",
    price: 14.99,
    description: "Soft, breathable crew-neck tee available in multiple colors.",
    category: "men's clothing",
    image: "https://picsum.photos/seed/tshirt/400/400",
  },
  {
    id: 4,
    title: "Women's Running Shoes",
    price: 79.0,
    description:
      "Lightweight running shoes with cushioned soles and breathable mesh upper.",
    category: "women's clothing",
    image: "https://picsum.photos/seed/shoes/400/400",
  },
  {
    id: 5,
    title: "Mechanical Gaming Keyboard",
    price: 89.95,
    description:
      "RGB backlit keyboard with tactile switches and a detachable USB-C cable.",
    category: "electronics",
    image: "https://picsum.photos/seed/keyboard/400/400",
  },
  {
    id: 6,
    title: "Silver Pendant Necklace",
    price: 129.99,
    description: "Sterling silver necklace with a minimalist teardrop pendant.",
    category: "jewelery",
    image: "https://picsum.photos/seed/necklace/400/400",
  },
  {
    id: 7,
    title: "Ceramic Coffee Mug Set",
    price: 32.0,
    description:
      "Set of four 350ml glazed mugs, microwave and dishwasher safe.",
    category: "home & kitchen",
    image: "https://picsum.photos/seed/mugs/400/400",
  },
  {
    id: 8,
    title: "Portable Phone Charger 10000mAh",
    price: 19.99,
    description:
      "Compact power bank with dual USB output and fast-charging support.",
    category: "electronics",
    image: "https://picsum.photos/seed/powerbank/400/400",
  },
  {
    id: 9,
    title: "Waterproof Hiking Jacket",
    price: 109.5,
    description:
      "Lightweight shell jacket with taped seams, adjustable hood, and zippered pockets.",
    category: "men's clothing",
    image: "https://picsum.photos/seed/jacket/400/400",
  },
  {
    id: 10,
    title: "Leather Crossbody Bag",
    price: 68.75,
    description:
      "Genuine leather bag with an adjustable strap and multiple interior compartments.",
    category: "women's clothing",
    image: "https://picsum.photos/seed/bag/400/400",
  },
];

function ProductsGrid() {
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
