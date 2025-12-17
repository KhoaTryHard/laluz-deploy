// components/Cart/CartTable/CartItemRow.jsx
export default function CartItemRow() {
  return (
    <tr className="wc-block-cart-items__row" tabIndex={-1}>
      <td className="wc-block-cart-item__image" aria-hidden="true">
        <a href="#">
          <img src="/img/product.jpg" alt="" />
        </a>
      </td>

      <td className="wc-block-cart-item__product">
        <div className="wc-block-cart-item__wrap">
          <a className="wc-block-components-product-name" href="#">
            Set Gucci Flora Gorgeous Orchid EDP
          </a>

          <div className="wc-block-cart-item__prices">
            <span className="price">
              <span className="wc-block-components-product-price__value">
                3.450.000 ₫
              </span>
            </span>
          </div>

          <div className="wc-block-cart-item__quantity">
            <div className="wc-block-components-quantity-selector">
              <input type="number" defaultValue={2} />
              <button className="wc-block-components-quantity-selector__button--minus">
                －
              </button>
              <button className="wc-block-components-quantity-selector__button--plus">
                ＋
              </button>
            </div>

            <button className="wc-block-cart-item__remove-link">
              Xóa sản phẩm
            </button>
          </div>
        </div>
      </td>

      <td className="wc-block-cart-item__total">
        <span className="wc-block-components-product-price__value">
          6.900.000 ₫
        </span>
      </td>
    </tr>
  );
}
