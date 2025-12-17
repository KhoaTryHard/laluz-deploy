export default function FooterMenuAbout() {
  return (
    <div className="ft-it">
      <div className="tt-mn-ft">VỀ CHÚNG TÔI</div>
      <ul className="menu-list menu-ft-list">
        <li className="menu-item">
          <a className="menu-link txt-mn-ft" href="/">
            Trang Chủ
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link txt-mn-ft" href="/collections">
            Sản phẩm
          </a>
        </li>
        <li className="menu-item">
          <a className="menu-link txt-mn-ft" href="/blog">
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
}
