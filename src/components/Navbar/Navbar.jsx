import { NavLink } from "react-router";
import styles from "./Navbar.module.css";
const tabs = [
  { to: "/", text: "Home" },
  { to: "/store", text: "Store" },
  { to: "/checkout", text: "Checkout" },
];

function Navbar() {
  return (
    <nav
      className={styles.container}
      aria-label="Main"
    >
      <ul className={styles.list}>
        {tabs.map((tab) => (
          <NavLink
            key={tab.text}
            to={tab.to}
            className={({ isActive }) =>
              isActive ? styles["active-tab"] : styles.tab
            }
          >
            {tab.text}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
