export default function AdminProductsPage() {
  const products = [
    {
      id: 1,
      name: "Mancera Red Tobacco",
      price: "3.450.000đ",
      stock: 120,
      status: "active",
    },
    {
      id: 2,
      name: "Dior Sauvage EDP",
      price: "3.200.000đ",
      stock: 0,
      status: "out",
    },
    {
      id: 3,
      name: "Jean Paul Gaultier Scandal",
      price: "2.900.000đ",
      stock: 45,
      status: "active",
    },
    {
      id: 3,
      name: "Jean Paul Gaultier Scandal",
      price: "2.900.000đ",
      stock: 45,
      status: "active",
    },
    {
      id: 3,
      name: "Jean Paul Gaultier Scandal",
      price: "2.900.000đ",
      stock: 45,
      status: "active",
    },
    {
      id: 3,
      name: "Jean Paul Gaultier Scandal",
      price: "2.900.000đ",
      stock: 45,
      status: "active",
    },
    {
      id: 3,
      name: "Jean Paul Gaultier Scandal",
      price: "2.900.000đ",
      stock: 45,
      status: "active",
    },
    {
      id: 3,
      name: "Jean Paul Gaultier Scandal",
      price: "2.900.000đ",
      stock: 45,
      status: "active",
    },
    {
      id: 3,
      name: "Jean Paul Gaultier Scandal",
      price: "2.900.000đ",
      stock: 45,
      status: "active",
    },

    {
      id: 3,
      name: "Jean Paul Gaultier Scandal",
      price: "2.900.000đ",
      stock: 45,
      status: "active",
    },
    {
      id: 3,
      name: "Jean Paul Gaultier Scandal",
      price: "2.900.000đ",
      stock: 45,
      status: "active",
    },
    {
      id: 3,
      name: "Jean Paul Gaultier Scandal",
      price: "2.900.000đ",
      stock: 45,
      status: "active",
    },
    {
      id: 3,
      name: "Jean Paul Gaultier Scandal",
      price: "2.900.000đ",
      stock: 45,
      status: "active",
    },
  ];

  return (
    <div className="container-laluz">
      {/* BREADCRUMB */}
      <div className="nav-bread">
        <ul className="breadcrumbs-list">
          <li className="breadcrumbs-item">
            <a href="/admin" className="breadcrumbs-link">
              Admin
            </a>
          </li>
          <li className="breadcrumbs-item">
            <span className="breadcrumbs-link">Sản phẩm</span>
          </li>
        </ul>
      </div>

      {/* HEADER */}
      <div className="row">
        <div className="col-xg-6">
          <h2 className="tt-sec">Quản Lý Sản Phẩm</h2>
        </div>
        <div className="col-xg-6" style={{ textAlign: "right" }}>
          <a href="/admin/products/create" className="btn btn-pri">
            <i className="fas fa-plus-circle"></i> Thêm sản phẩm
          </a>
        </div>
      </div>

      {/* TABLE */}
      <div className="box-white">
        <table className="admin-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Tồn kho</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p, index) => (
              <tr key={p.id}>
                <td>{index + 1}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.stock}</td>
                <td>
                  {p.status === "active" ? (
                    <span className="status success">Đang bán</span>
                  ) : (
                    <span className="status danger">Hết hàng</span>
                  )}
                </td>
                <td className="admin-actions">
                  <a
                    href={`/admin/products/${p.id}`}
                    className="btn btn-second btn-sm"
                  >
                    Sửa
                  </a>
                  <button className="btn btn-four btn-sm">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
