export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="ft-inner">

          {/* Cột 1 */}
          <div className="ft-left">
            <ul className="menu-list menu-ft-list">
              <li className="menu-item">
                <div className="menu-link txt-mn-ft">
                  Công ty TNHH Laluz
                </div>
              </li>
              <li className="menu-item">
                <div className="menu-link txt-mn-ft">
                  Địa chỉ: Hà Nội
                </div>
              </li>
              <li className="menu-item">
                <div className="menu-link txt-mn-ft">
                  Hotline: 0123 456 789
                </div>
              </li>
            </ul>
          </div>

          {/* Cột 2 */}
          <div className="ft-it">
            <div className="ft-it-class">
              <div className="tt-mn-ft">Chính sách</div>

              <ul className="menu-list menu-ft-list">
                <li className="footer-item menu-item">
                  <a className="menu-link txt-mn-ft" href="#">
                    Chính sách vận chuyển và giao nhận
                  </a>
                </li>
                <li className="footer-item menu-item">
                  <a className="menu-link txt-mn-ft" href="#">
                    Chính sách thanh toán
                  </a>
                </li>
                <li className="footer-item menu-item">
                  <a className="menu-link txt-mn-ft" href="#">
                    Chính sách bảo mật thông tin
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bạn có thể bổ sung thêm 1–2 cột footer giống bản WordPress gốc */}
        </div>
      </div>
    </footer>
  );
}
