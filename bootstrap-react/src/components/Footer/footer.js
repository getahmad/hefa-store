import brand from "../../assets/img/logo_small.png";
import fb from "../../assets/img/social/fb.png";
import ig from "../../assets/img/social/ig.png";
import twitter from "../../assets/img/social/twitter.png";

const Footer = () => {
  return (
    <>
      <footer className="border-top p-5">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-1">
              <a href="/">
                <img src={brand} alt="brand" />
              </a>
            </div>
            <div className="col-4 text-right">
              <a href="/">
                <img src={fb} alt="/" />
              </a>
              <a href="/" className="ml-2 mr-2">
                <img src={ig} alt="/" />
              </a>
              <a href="/">
                <img src={twitter} alt="/" />
              </a>
            </div>
          </div>
          <div className="row mt-3 justify-content-between">
            <div className="col-12 col-md-6">
              <p>All Rights Reserved by hefa store copyright 2021</p>
            </div>
            <div className="col-12 col-md-6">
              <nav className="nav justify-content-end text-uppercase">
                <a className="nav-link active" href="/">
                  Jobs
                </a>
                <a className="nav-link" href="/">
                  Developer
                </a>
                <a className="nav-link" href="/">
                  Term
                </a>
                <a className="nav-link pr-0" href="/">
                  Privacy Policy
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
