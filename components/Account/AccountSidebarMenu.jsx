export default function AccountSidebarMenu() {
  return (
    <div className="info-acount-col-left-bd">
      <a className="link active" href="/account">
        <span className="txt">Thông tin sản phẩm</span>
      </a>

      <a className="link" href="/account/orders">
        <span className="txt">Lịch sử đơn hàng</span>
      </a>

      <a className="link" href="/account/change-password">
        <span className="txt">Thay đổi mật khẩu</span>
      </a>
    </div>
  );
}
