import { Check, Minus, Plus, Trash, ShoppingBasket } from "lucide-react";
import { memo } from "react";

const icons = {
  check: Check,
  minus: Minus,
  plus: Plus,
  trash: Trash,
  shoppingBasket: ShoppingBasket,
};

function Icon({ name, ...props }) {
  const Component = icons[name];
  return (
    <Component
      {...props}
      aria-hidden="true"
    />
  );
}

export default memo(Icon);
