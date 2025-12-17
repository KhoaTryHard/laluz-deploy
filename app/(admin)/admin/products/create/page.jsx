"use client";

import { useState } from "react";

export default function CreateProductPage() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    status: "available",
  });

  const [errors, setErrors] = useState({});

  // handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // validate
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Vui lòng nhập tên sản phẩm";
    }

    if (!form.price.trim()) {
      newErrors.price = "Vui lòng nhập giá bán";
    } else if (isNaN(form.price) || Number(form.price) <= 0) {
      newErrors.price = "Giá bán phải là số lớn hơn 0";
    }

    if (form.stock === "") {
      newErrors.stock = "Vui lòng nhập số lượng tồn";
    } else if (
      !Number.isInteger(Number(form.stock)) ||
      Number(form.stock) < 0
    ) {
      newErrors.stock = "Số lượng phải là số nguyên ≥ 0";
    }

    if (!form.status) {
      newErrors.status = "Vui lòng chọn trạng thái";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("DATA SUBMIT:", form);

    alert("Lưu sản phẩm thành công!"); // demo cho đồ án
  };

  return (
    <div className="container-laluz">
      <h2 className="tt-sec">THÊM SẢN PHẨM MỚI</h2>

      <form className="admin-form" onSubmit={handleSubmit}>
        {/* Tên sản phẩm */}
        <div className="form-group">
          <label>Tên sản phẩm *</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nhập tên sản phẩm"
          />
          {errors.name && <p className="form-error">{errors.name}</p>}
        </div>

        {/* Giá bán */}
        <div className="form-group">
          <label>Giá bán *</label>
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="VD: 3450000"
          />
          {errors.price && <p className="form-error">{errors.price}</p>}
        </div>

        {/* Số lượng */}
        <div className="form-group">
          <label>Số lượng tồn *</label>
          <input name="stock" value={form.stock} onChange={handleChange} />
          {errors.stock && <p className="form-error">{errors.stock}</p>}
        </div>

        {/* Trạng thái */}
        <div className="form-group">
          <label>Trạng thái *</label>
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="available">Đang bán</option>
            <option value="out">Hết hàng</option>
          </select>
          {errors.status && <p className="form-error">{errors.status}</p>}
        </div>

        {/* Actions */}
        <div className="form-actions">
          <button type="submit" className="btn btn-pri">
            Lưu sản phẩm
          </button>
          <a href="/admin/products" className="btn btn-four">
            Hủy
          </a>
        </div>
      </form>
    </div>
  );
}
