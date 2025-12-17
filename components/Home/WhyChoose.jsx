"use client";

export default function WhyChoose() {
  return (
    <section className="signa-us">
      <div className="container">
        {/* WP có tt-sec rỗng ở level này */}
        <div className="tt-sec"></div>

        <div className="why-choose">
          <div className="tt-sec">Tại sao chọn laluz parfums?</div>

          <div className="wr-reasons">
            <ul className="reason-list row">
              <li className="reason-it col col-md-3">
                <img
                  src="https://laluz.vn/wp-content/uploads/2023/12/ic-benefit-1.svg"
                  width="35"
                  height="22"
                  className="attachment-full size-full"
                  alt=""
                />
                <div className="tt-reason"></div>
                <p className="desc">
                  Đền 200% giá trị sản phẩm nếu <br />
                  phát hiện hàng giả
                </p>
              </li>

              <li className="reason-it col col-md-3">
                <img
                  src="https://laluz.vn/wp-content/uploads/2023/12/ic-benefit-2-1.svg"
                  width="33"
                  height="32"
                  className="attachment-full size-full"
                  alt=""
                />
                <div className="tt-reason"></div>
                <p className="desc">
                  Chính sách đổi hàng và tích điểm thành viên
                </p>
              </li>

              <li className="reason-it col col-md-3">
                <img
                  src="https://laluz.vn/wp-content/uploads/2023/12/ic-benefit-3-1.svg"
                  width="27"
                  height="32"
                  className="attachment-full size-full"
                  alt=""
                />
                <div className="tt-reason"></div>
                <p className="desc">
                  Tư vấn &amp; hỗ trợ gói quà miễn phí cho khách hàng
                </p>
              </li>

              <li className="reason-it col col-md-3">
                <img
                  src="https://laluz.vn/wp-content/uploads/2023/12/ic-benefit-4-1.svg"
                  width="39"
                  height="33"
                  className="attachment-full size-full"
                  alt=""
                />
                <div className="tt-reason"></div>
                <p className="desc">
                  Miễn phí giao hàng cho hóa đơn <br />
                  từ 1 triệu
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
