// components/Cart/CartSidebar/CartSidebar.jsx
import CartSummary from "./CartSummary";

export default function CartSidebar() {
  return (
    <div className="wc-block-components-sidebar wc-block-cart__sidebar wp-block-woocommerce-cart-totals-block">
      <CartSummary />
    </div>
  );
}
