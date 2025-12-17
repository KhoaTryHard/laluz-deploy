import AccountProfileForm from "./AccountProfileForm";

export default function AccountWooWrapper() {
  return (
    <div className="info-acount-col-right col col-md-9">
      <div className="woocommerce">
        <nav className="woocommerce-MyAccount-navigation">
          <ul>
            <li className="is-active">
              <a href="/account">Thông tin sản phẩm</a>
            </li>
            <li>
              <a href="/account/orders">Lịch sử đơn hàng</a>
            </li>
            <li>
              <a href="/account/change-password">Thay đổi mật khẩu</a>
            </li>
          </ul>
        </nav>

        <div className="woocommerce-MyAccount-content">
          <div className="inner">
            <AccountProfileForm />
          </div>
        </div>
      </div>
    </div>
  );
}
