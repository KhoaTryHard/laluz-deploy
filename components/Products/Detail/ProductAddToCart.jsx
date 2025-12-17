"use client";
import { useState } from "react";

export default function ProductAddToCart() {
  const [qty, setQty] = useState(1);

  return (
    <div className="btn-list-variable">
      <div className="quantity-prod">
        <span className="txt">Số lượng:</span>

        <div className="box-quantity">
          <button
            type="button"
            className="minus"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            -
          </button>

          {/* input thật (theme dùng cho form) */}
          <input type="text" className="ip-value" value={qty} readOnly />

          {/* số hiển thị */}
          <p className="count-number number-change">{qty}</p>

          <button
            type="button"
            className="plus"
            onClick={() => setQty((q) => q + 1)}
          >
            +
          </button>
        </div>
      </div>

      <div className="btn-list">
        <div className="btn-item">
          <button className="btn btn-pri mona-add-to-cart-detail">
            <span className="txt">THÊM VÀO GIỎ HÀNG</span>
          </button>
        </div>

        <div className="btn-item m-buy-now">
          <button className="btn btn-second">
            <span className="txt">MUA NGAY</span>
          </button>
        </div>
      </div>
    </div>
  );
}
