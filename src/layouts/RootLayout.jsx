import Header from "#components/Header";
import { Outlet } from "react-router";
import Footer from "#components/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
