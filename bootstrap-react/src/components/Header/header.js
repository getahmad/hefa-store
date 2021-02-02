import brand from "../../assets/img/logo_small.png";
import "font-awesome/css/font-awesome.min.css";
import style from "./header.module.scss";

const Header = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${style.navbarBackground} `}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={brand} alt="logo hefa" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className={`navbar-nav text-uppercase mx-auto ${style.navItem}`}>
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Category
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Designer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>
          <a href="/" className="nav-link text-white">
            <i className="fa fa-shopping-cart"></i> My Cart (
            <span className={style.totalCart}>12</span> )
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
