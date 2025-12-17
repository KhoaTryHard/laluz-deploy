export default function HeaderTop() {
  return (
    <div className="hd-up">
      <div className="container">
        <div className="hd-up-inner">

          <div className="txt-sales">
            Đền 200% giá trị đơn nếu phát hiện hàng giả
          </div>

          <div className="hd-login">
            <a className="hd-login-inner" href="/login">
              <div className="ic-login">
                <img src="/images/ic-user.svg" alt="User" />
              </div>
              <span className="txt">Đăng nhập</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
