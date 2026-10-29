import Header from "#components/Header";
import { Outlet } from "react-router";
import Footer from "#components/Footer";
import styles from "./RootLayout.module.css";

function RootLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
