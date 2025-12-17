export default function HeaderMid() {
  return (
    <div className="hd-mid">
      <div className="container">
        <div className="hd-mid-inner">

          {/* Hamburger mobile */}
          <div className="btn-ham-wr">
            <div className="btn-ham">
              <span className="line-ham" />
              <span className="line-ham" />
              <span className="line-ham" />
            </div>
          </div>

          {/* Logo */}
          <div className="logo">
            <div className="logo-link">
              <a href="/" className="custom-logo-link" rel="home">
                <img
                  width={300}
                  height={96}
                  src="/images/cropped-logo-laluz-new.png"
                  className="custom-logo"
                  alt="LALUZ Parfums"
                  decoding="async"
                />
              </a>
            </div>
          </div>

          {/* Search + icons bên phải */}
          <div className="hd-mid-right">
            
            {/* search desktop */}
            <form id="searchform" className="searchform" autoComplete="off">
              <div className="box-search boxSearch">
                
                <button className="btn-search" type="submit">
                  <img src="/images/ic-search.svg" alt="Tìm kiếm" />
                </button>

                <input
                  className="search-field"
                  type="search"
                  placeholder="Tìm sản phẩm của bạn"
                  name="s"
                  id="s"
                />

                {/* Box kết quả */}
                <div className="box-result boxResult">
                  <div className="inner">
                    <div id="search-product" className="is-loading-group">
                      <div className="mona-empty-message-large">
                        <p>Vui lòng nhập từ khóa tìm kiếm.</p>
                      </div>
                    </div>

                    <a className="btn live-search-btn" href="/collections">
                      Xem tất cả
                    </a>
                  </div>
                </div>

              </div>
            </form>

            {/* Icon nhóm bên phải */}
            <div className="hd-mid-right-it">
              
              {/* Wishlist */}
              <div className="ic-heart">
                <a className="ic-heart-inner" href="/login">
                  <img src="/images/ic-heart-2.svg" alt="Yêu thích" />
                </a>
              </div>

              {/* Cart */}
              <div className="hd-cart">
                <a className="hd-cart-inner" href="/cart">
                  <img src="/images/ic-cart.svg" alt="Giỏ hàng" />
                  <div className="quantity" id="mona-cart-qty">
                    1
                  </div>
                </a>
              </div>

              {/* Login icon */}
              <div className="hd-login">
                <a className="hd-login-inner" href="/login">
                  <div className="ic-login">
                    <img src="/images/ic-user.svg" alt="User" />
                  </div>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
