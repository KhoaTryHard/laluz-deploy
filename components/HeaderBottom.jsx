import Link from "next/link";

export default function HeaderBottom() {
  return (
    <div className="hd-down">
      <div className="container">
        <div className="hd-down-inner">
          <div className="nav-menu">
            <ul id="menu-primary-menu" className="menu-list">
              {/* Trang chủ */}
              <li className="menu-item parent fz16 fw6 dropdown menu-item menu-item-type-post_type menu-item-object-page menu-item-home">
                <a className="menu-link txt-mn" href="/">
                  Trang Chủ
                </a>
              </li>

              {/* About */}
              <li className="menu-item parent fz16 fw6 dropdown menu-item menu-item-type-post_type menu-item-object-page menu-item-home">
                <Link href="/about-laluz" className="menu-link txt-mn">
                  About LALUZ
                </Link>
              </li>

              {/* Thương hiệu A–Z */}
              <li className="menu-item parent fz16 fw6 dropdown menu-item menu-item-type-post_type menu-item-object-page menu-item-home">
                <Link href="/collections" className="menu-link txt-mn">
                  Thương hiệu
                  <span className="ic-angle">
                    <i className="fa-solid fa-caret-down"></i>
                  </span>
                </Link>
                {/* <a className="menu-link txt-mn" href="/thuong-hieu">
                  Thương hiệu
                  
                </a> */}

                <div className="menu-mega">
                  {/* Cột trái – thương hiệu bán chạy */}
                  <div className="menu-mega-left">
                    <div className="menu-mega-item">
                      <div className="tt-mg">Thương hiệu bán chạy</div>
                      <ul className="menu-list">
                        <li className="menu-item">
                          <a className="menu-link" href="/roja-parfums">
                            Roja Parfums
                          </a>
                        </li>
                        <li className="menu-item">
                          <a className="menu-link" href="/atelier-materi">
                            ATELIER MATERI
                          </a>
                        </li>
                        <li className="menu-item">
                          <a className="menu-link" href="/liquides-imaginaires">
                            Liquides Imaginaires
                          </a>
                        </li>
                        <li className="menu-item">
                          <a className="menu-link" href="/argos-fragrances">
                            Argos Fragrances
                          </a>
                        </li>
                        <li className="menu-item">
                          <a className="menu-link" href="/clive-christian">
                            Clive Christian
                          </a>
                        </li>
                        <li className="menu-item">
                          <a className="menu-link" href="/matiere-premiere">
                            Matiere Premiere
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Cột phải – A–Z filter + danh sách thương hiệu */}
                  <div className="menu-mega-right">
                    <div className="tt-mg">Thương hiệu nước hoa</div>

                    {/* A–Z filter */}
                    <div className="word-nav">
                      <ul className="word-list">
                        {[
                          "All",
                          "A",
                          "B",
                          "C",
                          "D",
                          "E",
                          "F",
                          "G",
                          "H",
                          "I",
                          "J",
                          "K",
                          "L",
                          "M",
                          "N",
                          "O",
                          "P",
                          "Q",
                          "R",
                          "S",
                          "T",
                          "U",
                          "V",
                          "W",
                          "X",
                          "Y",
                          "Z",
                        ].map((letter) => (
                          <li className="word-it" key={letter}>
                            <label htmlFor={`w-${letter}`}>
                              <input
                                type="radio"
                                id={`w-${letter}`}
                                value={letter === "All" ? "" : letter}
                                defaultChecked={letter === "All"}
                              />
                              <div className="box is-loading-group">
                                <span className="txt">{letter}</span>
                              </div>
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Danh sách thương hiệu */}
                    <ul className="brand-list row" id="tab-all">
                      <li className="brand-it col-4">
                        <a className="brand-link" href="/afnan">
                          Afnan
                        </a>
                      </li>
                      <li className="brand-it col-4">
                        <a className="brand-link" href="/amouage">
                          Amouage
                        </a>
                      </li>
                      <li className="brand-it col-4">
                        <a className="brand-link" href="/argos-fragrances">
                          Argos Fragrances
                        </a>
                      </li>
                      <li className="brand-it col-4">
                        <a className="brand-link" href="/burberry">
                          Burberry
                        </a>
                      </li>
                      <li className="brand-it col-4">
                        <a className="brand-link" href="/bvlgari">
                          Bvlgari
                        </a>
                      </li>
                      <li className="brand-it col-4">
                        <a className="brand-link" href="/chanel">
                          Chanel
                        </a>
                      </li>
                      <li className="brand-it col-4">
                        <a className="brand-link" href="/dior">
                          Dior
                        </a>
                      </li>
                      <li className="brand-it col-4">
                        <a className="brand-link" href="/gucci">
                          Gucci
                        </a>
                      </li>
                      <li className="brand-it col-4">
                        <a className="brand-link" href="/versace">
                          Versace
                        </a>
                      </li>
                      <li className="brand-it col-4">
                        <a className="brand-link" href="/yves-saint-laurent">
                          Yves Saint Laurent
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Nước hoa */}
              <li className="menu-item parent fz16 fw6 dropdown menu-item menu-item-type-taxonomy menu-item-object-product_cat current-product-ancestor current-menu-parent current-product-parent">
                <a className="menu-link txt-mn" href="/collections/all">
                  Nước hoa
                  <span className="ic-angle">
                    <i className="fa-solid fa-caret-down"></i>
                  </span>
                </a>

                <div className="menu-mega">
                  {/* Nhóm nước hoa */}
                  <div className="menu-mega-item">
                    <a href="/nuoc-hoa" className="tt-mg">
                      Nước hoa
                    </a>
                    <ul className="menu-list">
                      <li className="menu-item">
                        <a className="menu-link" href="/nuoc-hoa-unisex">
                          Nước hoa Unisex
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/nuoc-hoa-nu">
                          Nước hoa Nữ
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/nuoc-hoa-nam">
                          Nước hoa Nam
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Nhóm hương */}
                  <div className="menu-mega-item">
                    <div className="tt-mg">Nhóm hương</div>
                    <ul className="menu-list">
                      <li className="menu-item">
                        <a className="menu-link" href="/floral">
                          Floral
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/floral-fruity">
                          Floral Fruity
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/woody">
                          Woody
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Nồng độ */}
                  <div className="menu-mega-item">
                    <div className="tt-mg">Nồng độ</div>
                    <ul className="menu-list">
                      <li className="menu-item">
                        <a className="menu-link" href="/eau-de-cologne">
                          Eau de Cologne
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/eau-de-parfum">
                          Eau de Parfum
                        </a>
                      </li>
                      <li className="menu-item">
                        <a className="menu-link" href="/eau-de-toilette">
                          Eau de Toilette
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              {/* Tin tức */}
              <li className="menu-item parent fz16 fw6 dropdown menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown">
                <a className="menu-link txt-mn" href="/tin-tuc">
                  Tin tức
                  <span className="ic-angle">
                    <i className="fa-solid fa-caret-down"></i>
                  </span>
                </a>

                <ul className="menu-list">
                  <li className="menu-item parent fz16 fw6 dropdown menu-item menu-item-type-taxonomy menu-item-object-category">
                    <a className="menu-link" href="/chuyen-muc/review-nuoc-hoa">
                      Review nước hoa
                    </a>
                  </li>
                  <li className="menu-item parent fz16 fw6 dropdown menu-item menu-item-type-taxonomy menu-item-object-category">
                    <a
                      className="menu-link"
                      href="/chuyen-muc/kinh-nghiem-chon-nuoc-hoa"
                    >
                      Kinh nghiệm chọn nước hoa
                    </a>
                  </li>
                </ul>
              </li>

              {/* Liên hệ */}
              <li className="menu-item parent fz16 fw6 dropdown menu-item menu-item-type-post_type menu-item-object-page">
                <a className="menu-link txt-mn" href="/lien-he">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
