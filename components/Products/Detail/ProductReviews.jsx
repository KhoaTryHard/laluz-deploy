"use client";

import { useState } from "react";

export default function ProductReviews({ productId, productName }) {
  const [filter, setFilter] = useState("");

  const ratingFilters = [
    { slug: "", label: "Tất cả", value: "" },
    { slug: "5", label: "5 Điểm (0)", value: "5" },
    { slug: "4", label: "4 Điểm (0)", value: "4" },
    { slug: "3", label: "3 Điểm (0)", value: "3" },
    { slug: "2", label: "2 Điểm (0)", value: "2" },
    { slug: "1", label: "1 Điểm (0)", value: "1" },
  ];

  return (
    <section className="reviews-dt">
      <div className="container">
        <h3 className="tt">Đánh giá sản phẩm {productName}</h3>

        <form id="formProductList" className="is-loading-group">
          <input type="hidden" name="product_id" value={productId} />

          {/* FILTER POINT */}
          <div className="box-point">
            <div className="inner">
              <div className="row">
                <div className="rvw-stars col col-lg-3">
                  <span className="total-rvw">
                    Hiện tại chưa có đánh giá nào cho sản phẩm này!
                  </span>
                </div>

                <div className="all-point col col-lg-8">
                  <ul className="point-list">
                    {ratingFilters.map((it, i) => (
                      <li
                        key={i}
                        className="point-item mona-rating-filter"
                        data-slug={it.slug}
                        data-product_id={productId}
                      >
                        <input
                          className="box-point"
                          type="radio"
                          id={`filter_${i}`}
                          name="filter"
                          value={it.value}
                          checked={filter === it.value}
                          onChange={() => setFilter(it.value)}
                        />
                        <label className="txt b-rds" htmlFor={`filter_${i}`}>
                          {it.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* COMMENT LIST */}
          <div className="rvw-cmt">
            <div className="inner">
              <ul className="rvw-cmt-list">
                <div className="mona-mess-empty commtent-empty">
                  Hiện chưa có bài đánh giá nào
                </div>
              </ul>

              <div className="pagi-num mona-pagination-comments"></div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
