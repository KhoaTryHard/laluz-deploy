export default function LoginForm() {
  return (
    <div className="login-form">
      <div className="login-hd">
        <p className="tt-sec">Đăng nhập</p>
      </div>

      <div className="box-form">
        <div className="group-form">
          <label className="txt">Email</label>
          <input name="user_name" type="text" placeholder="Email" required />
        </div>

        <div className="group-form">
          <label className="txt">Mật khẩu</label>
          <input
            className="re-input"
            name="user_pass"
            type="password"
            placeholder="Mật khẩu"
            required
          />
        </div>

        <div className="group-sup">
          <a className="txt forgot-password" href="/quen-mat-khau">
            Quên mật khẩu
          </a>
          <a className="txt sign-up" href="/register">
            Bạn là thành viên mới? Đăng ký tại đây
          </a>
        </div>

        <button className="btn btn-pri" type="submit">
          <span className="txt">Đăng nhập</span>
        </button>
      </div>
    </div>
  );
}
