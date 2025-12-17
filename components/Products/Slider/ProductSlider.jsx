"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export default function ProductSlider({
  products = [],
  name = "",
  link = "#",
}) {
  if (!products.length) return null;

  return (
    <section className="prods-home">
      {/* WP: h2 KHÔNG nằm trong container */}
      <h2 className="tt-sec">
        <a href={link}>{name}</a>
      </h2>

      <div className="wr-prods-home">
        <Swiper
          modules={[Pagination, Autoplay]}
          loop
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            480: { slidesPerView: 1.4 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 4 },
          }}
          className="swiper swiper-prod-home"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="prod-it">
                <div className="inner">
                  <div className="bg"></div>

                  <a className="img-prod" href={product.link}>
                    <img
                      src={product.image}
                      width="900"
                      height="900"
                      className="attachment-full size-full wp-post-image"
                      alt={product.name}
                      loading="lazy"
                    />
                  </a>

                  <div className="wr-info">
                    <h3 className="txt-prod tt">
                      <a className="prod-name" href={product.link}></a>
                      <a href={product.brandLink}>{product.brand}</a>
                    </h3>

                    <a className="txt-prod stt" href={product.link}>
                      {product.name}
                    </a>

                    <span className="txt-prod prc monawoo-price">
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          {product.price}
                          <span className="woocommerce-Price-currencySymbol">
                            ₫
                          </span>
                        </bdi>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
