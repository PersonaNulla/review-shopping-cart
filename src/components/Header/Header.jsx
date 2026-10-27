import { ShoppingBasket } from "lucide-react";
import { NavLink } from "react-router";

function Header() {
  return (
    <header>
      <p>TOPS</p>
      <NavLink to="/checkout">
        <ShoppingBasket />
        <span>(1)</span>
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/store">Store</NavLink>
          </li>
          <li>
            <NavLink to="/checkout">Checkout</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
