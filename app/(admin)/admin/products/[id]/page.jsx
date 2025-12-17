export default function EditProductPage({ params }) {
  const { id } = params;

  return (
    <div className="container-laluz">
      <h2 className="tt-sec">Sửa Sản Phẩm #{id}</h2>

      <div className="box-white">
        <form className="form-admin">
          <div className="form-group">
            <label>Tên sản phẩm</label>
            <input type="text" defaultValue="Mancera Red Tobacco" />
          </div>

          <div className="form-group">
            <label>Giá bán</label>
            <input type="text" defaultValue="3.450.000đ" />
          </div>

          <div className="form-group">
            <label>Số lượng tồn</label>
            <input type="number" defaultValue={120} />
          </div>

          <div className="form-group">
            <label>Trạng thái</label>
            <select defaultValue="active">
              <option value="active">Đang bán</option>
              <option value="out">Hết hàng</option>
            </select>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <button className="btn btn-pri">Cập nhật</button>
            <a
              href="/admin/products"
              className="btn btn-four"
              style={{ marginLeft: "1rem" }}
            >
              Quay lại
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
