export default function AdminDashboard() {
  return (
    <div className="container-laluz">
      <div className="nav-bread">
        <ul className="breadcrumbs-list">
          <li className="breadcrumbs-item">
            <a href="/" className="breadcrumbs-link">
              Home
            </a>
          </li>
          <li className="breadcrumbs-item">
            <a href="/admin" className="breadcrumbs-link">
              Admin
            </a>
          </li>
          <li className="breadcrumbs-item">
            <span className="breadcrumbs-link">Dashboard</span>
          </li>
        </ul>
      </div>

      <div className="row" style={{ paddingTop: "var(--spc-sect)" }}>
        <div className="col-xg-12 col-lg-12 col-md-12">
          <h2 className="tt-sec" style={{ marginBottom: "3rem" }}>
            Thống Kê Tổng Quan
          </h2>

          <div className="row">
            {[
              ["Tổng Đơn Hàng", "1,250", "Đơn hàng trong tháng"],
              ["Doanh Thu", "5.3 Tỷ", "Doanh thu ròng tháng này"],
              ["Khách Hàng Mới", "850", "Tài khoản đăng ký mới"],
              ["Sản Phẩm Tồn Kho", "2,140", "Tổng số sản phẩm"],
            ].map(([title, value, desc], i) => (
              <div key={i} className="col-xg-3 col-lg-6 col-md-6 col-sm-12">
                <div className="box-info" style={{ textAlign: "center" }}>
                  <div className="tt">{title}</div>
                  <p className="price-new" style={{ fontSize: "3.5rem" }}>
                    {value}
                  </p>
                  <p className="txt-nm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="col-xg-12 col-lg-12 col-md-12"
          style={{ marginTop: "3rem" }}
        >
          <h3
            className="tt-sec"
            style={{ fontSize: "2.2rem", marginBottom: "2rem" }}
          >
            Thao Tác Nhanh
          </h3>

          <div className="row" style={{ "--row-gap": "2rem" }}>
            <div className="col-xg-4 col-lg-4 col-md-6 col-sm-12">
              <button
                className="btn btn-second"
                style={{ width: "100%", minHeight: "5rem" }}
              >
                <span className="txt">
                  <i className="fas fa-plus-circle"></i> Thêm Sản Phẩm Mới
                </span>
              </button>
            </div>

            <div className="col-xg-4 col-lg-4 col-md-6 col-sm-12">
              <button
                className="btn btn-four"
                style={{ width: "100%", minHeight: "5rem" }}
              >
                <span className="txt">
                  <i className="fas fa-clipboard-list"></i> Xem Đơn Hàng Chờ
                </span>
              </button>
            </div>

            <div className="col-xg-4 col-lg-4 col-md-6 col-sm-12">
              <button
                className="btn btn-pri"
                style={{ width: "100%", minHeight: "5rem" }}
              >
                <span className="txt">
                  <i className="fas fa-file-alt"></i> Viết Bài Blog Mới
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
