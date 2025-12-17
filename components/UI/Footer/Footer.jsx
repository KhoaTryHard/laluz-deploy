// components/UI/Footer/Footer.jsx
import FooterLeft from "./FooterLeft";
import FooterMenuAbout from "./FooterMenuAbout";
import FooterMenuPolicy from "./FooterMenuPolicy";
import FooterStoreInfo from "./FooterStoreInfo";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="ft-inner">
          <FooterLeft />

          <div className="ft-right">
            <div className="ft-list">
              <FooterMenuAbout />
              <FooterMenuPolicy />
              <FooterStoreInfo />
            </div>
          </div>
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
