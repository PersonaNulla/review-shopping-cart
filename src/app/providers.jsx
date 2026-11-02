import CartProvider from "#stores/Cart/CartProvider.jsx";

function AppProvider({ children }) {
  return <CartProvider>{children}</CartProvider>;
}

export default AppProvider;
