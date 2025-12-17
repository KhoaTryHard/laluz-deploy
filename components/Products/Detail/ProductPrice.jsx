export default function ProductPrice({ product }) {
  return (
    <div
      class="price-prod monawoo-price"
      id="monaPriceProduct"
      bis_skin_checked="1"
    >
      <div class="prddt-prd-price-box detail " bis_skin_checked="1">
        <span class="price-new">
          <span class="woocommerce-Price-amount amount">
            <bdi>
              {product.price.toLocaleString()}&nbsp;
              <span class="woocommerce-Price-currencySymbol">₫</span>
            </bdi>
          </span>
        </span>
      </div>
    </div>
  );
}
