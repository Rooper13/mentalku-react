import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-child" />
      <img
        className="image-9-icon1"
        loading="lazy"
        alt=""
        src="/image-9@2x.png"
      />
      <div className="header-inner">
        <div className="frame-parent">
          <div className="beranda-wrapper">
            <div className="beranda">Beranda</div>
          </div>
          <Form.Select className="navigation-links-formselect" />
          <div className="directories">
            <div className="konsultasi-online">Konsultasi Online</div>
            <Form.Select className="frame-formselect" />
          </div>
        </div>
      </div>
      <div className="navigation-container">
        <button className="login-button">
          <div className="login-button-child" />
          <b className="masuk">Masuk</b>
        </button>
      </div>
    </header>
  );
};

export default Header;
