// components/UI/Footer/FooterLeft.jsx
export default function FooterLeft() {
  return (
    <div className="ft-left">
      <div className="tt-mn-ft">ĐĂNG KÍ ĐỂ NHẬN ƯU ĐÃI</div>

      {/* FORM – GIỮ NGUYÊN CLASS */}
      <div className="wpcf7 js">
        <form className="wpcf7-form init">
          <div className="box-mail">
            <input
              className="wpcf7-form-control wpcf7-email wpcf7-text"
              placeholder="Địa chỉ email của bạn"
              type="email"
            />
            <button className="btn btn-mail" type="submit">
              Gửi
            </button>
          </div>
        </form>
      </div>

      <p className="txt-mn-ft">
        CẬP NHẬT NHỮNG ƯU ĐÃI MỚI NHẤT CỦA LALUZ PARFUMS
      </p>

      <div className="nav-social">
        <ul className="social-list">
          <li className="social-item">
            <a className="social-link" href="#">
              <img src="/images/ic/imgi_361_ic-social-1.svg" />
            </a>
          </li>
          <li className="social-item">
            <a className="social-link" href="#">
              <img src="/images/ic/imgi_362_ic-social-3.svg" />
            </a>
          </li>
          <li className="social-item">
            <a className="social-link" href="#">
              <img src="/images/ic/imgi_363_ic-social-4.svg" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
