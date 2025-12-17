// components/Cart/CartLayout.jsx
import CartTable from "./CartTable/CartTable";
import CartSidebar from "./CartSidebar/CartSidebar";
import CartCheckoutButton from "./CartCheckoutButton";

export default function CartLayout() {
  return (
    <div
      data-block-name="woocommerce/cart"
      className="wp-block-woocommerce-cart alignwide"
    >
      <div className="with-scroll-to-top__scroll-point" aria-hidden="true" />
      <div className="wc-block-components-notices" />
      <div
        className="wc-block-components-notices__snackbar wc-block-components-notice-snackbar-list"
        tabIndex={-1}
      >
        <div />
      </div>

      <div>
        <div aria-hidden="false">
          <div className="wc-block-components-sidebar-layout wc-block-cart wp-block-woocommerce-filled-cart-block is-small">
            {/* MAIN */}
            <CartTable />

            {/* SIDEBAR */}
            <CartSidebar />

            {/* CHECKOUT */}
            <CartCheckoutButton />
          </div>
        </div>
      </div>

      <div style={{ display: "none" }} />
    </div>
  );
}
