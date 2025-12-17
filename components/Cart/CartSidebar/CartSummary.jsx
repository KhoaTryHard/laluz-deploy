export default function CartSummary() {
  return (
    <div className="wp-block-woocommerce-cart-order-summary-block">
      <span className="wc-block-cart__totals-title">GIỎ HÀNG</span>

      <div className="wc-block-components-totals-wrapper">
        <span>Tạm tính</span>
        <span>6.900.000 ₫</span>
      </div>

      <div className="wc-block-components-totals-wrapper">
        <span>Giao hàng</span>
        <span>30.000 ₫</span>
      </div>

      <div className="wc-block-components-totals-wrapper">
        <span>Tổng</span>
        <span>6.930.000 ₫</span>
      </div>
    </div>
  );
}
