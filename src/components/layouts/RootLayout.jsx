import Header from "#components/Header";
import { Outlet, ScrollRestoration } from "react-router";
import Footer from "#components/Footer";
import styles from "./RootLayout.module.css";

function RootLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default RootLayout;
