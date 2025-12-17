// components/Cart/CartTable/CartTable.jsx
import CartItemRow from "./CartItemRow";

export default function CartTable() {
  return (
    <div className="wc-block-components-main wc-block-cart__main wp-block-woocommerce-cart-items-block">
      <table
        className="wc-block-cart-items wp-block-woocommerce-cart-line-items-block"
        tabIndex={-1}
      >
        <thead>
          <tr className="wc-block-cart-items__header">
            <th className="wc-block-cart-items__header-image">
              <span>Sản phẩm</span>
            </th>
            <th className="wc-block-cart-items__header-product">
              <span>Details</span>
            </th>
            <th className="wc-block-cart-items__header-total">
              <span>Tổng</span>
            </th>
          </tr>
        </thead>

        <tbody>
          <CartItemRow />
        </tbody>
      </table>
    </div>
  );
}
