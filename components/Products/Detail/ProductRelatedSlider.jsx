"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function ProductRelatedSlider({ products = [] }) {
  return (
    <section className="prod-slide">
      <div className="container">
        <h3 className="tt">Sản phẩm liên quan</h3>

        <div className="prod-slide-wr">
          <Swiper
            modules={[Navigation]}
            slidesPerView="auto"
            spaceBetween={12}
            navigation={{
              prevEl: ".prod-slide .btn-navi.prev",
              nextEl: ".prod-slide .btn-navi.next",
            }}
            className="swiper swiper-prod"
          >
            <div className="swiper-wrapper">
              {products.map((p, i) => (
                <SwiperSlide
                  key={i}
                  className="swiper-slide"
                  style={{ width: 190 }}
                >
                  <div className="prod-it">
                    <div className="inner">
                      <div className="bg"></div>

                      <a className="img-prod" href={p.link}>
                        <img src={p.image} alt={p.name} />
                      </a>

                      <div className="wr-info">
                        <div className="txt-prod tt">
                          <a href={p.brandLink}>{p.brand}</a>
                        </div>

                        <a className="txt-prod stt" href={p.link}>
                          {p.name}
                        </a>

                        <span className="txt-prod prc">
                          <div className="monawoo-price">
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                {p.price.toLocaleString()}&nbsp;
                                <span className="woocommerce-Price-currencySymbol">
                                  ₫
                                </span>
                              </bdi>
                            </span>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>

            <div className="box-navi">
              <div className="btn-navi prev">
                <i className="fa-solid fa-angle-left"></i>
              </div>
              <div className="btn-navi next">
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
