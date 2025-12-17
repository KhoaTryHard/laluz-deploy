export default function RegisterForm() {
  return (
    <div className="login-form">
      <div className="login-hd">
        <p className="tt-sec">Đăng kí tài khoản</p>
      </div>

      <div className="box-form">
        <div className="group-form">
          <label className="txt">Email</label>
          <input
            type="email"
            name="register_email"
            placeholder="Email"
            required
          />
        </div>

        <div className="group-form">
          <label className="txt">Mật khẩu</label>
          <input
            type="password"
            name="register_pass"
            placeholder="Mật khẩu"
            required
          />
        </div>

        <div className="group-form">
          <label className="txt">Nhập lại mật khẩu</label>
          <input
            type="password"
            name="register_repass"
            placeholder="Nhập lại mật khẩu"
            required
          />
        </div>

        <div className="group-sup">
          <a className="txt sign-up" href="/login">
            Bạn đã có tài khoản? Đăng nhập tại đây
          </a>
        </div>

        <button className="btn btn-pri" type="submit">
          <span className="txt">Đăng kí</span>
        </button>
      </div>
    </div>
  );
}
