import axios from "axios";
import { useEffect, useState } from "react";
import carousel from "../../assets/img/slideshow/1.png";
import style from "./carousel.module.scss";

const Carousel = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const urlProduct = `${process.env.REACT_APP_API_KEY}/products?limit=3`;
    axios.get(urlProduct).then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
    <div
      id="carouselExampleControls"
      className={`carousel slide mt-5 ${style.carousel}`}
      data-ride="carousel"
    >
      <div className="container">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row p-5 justify-content-center">
              <div className="col-9 col-sm-4 col-md-6 col-lg-5">
                <h1 className="mb-4">Speacial Eid Lebaran</h1>
                <p className="mb-4">
                  jakikan hari pertama lebaranmu meriah dan memorable
                </p>
                <a href="/" className="btn btn-warning text-white">
                  Get It Now
                </a>
              </div>
              <div className="col-3 col-sm-6 col-md-4 col-lg-4 offset-1 d-none d-sm-block">
                <img src={carousel} alt="slideshow hefa" />
              </div>
            </div>
          </div>
          {product.map((product, index) => (
            <div className="carousel-item" key={index}>
              <div className="row p-5 justify-content-center">
                <div className="col-9 col-sm-4 col-md-6 col-lg-5">
                  <h1 className="mb-4">{product.title}</h1>
                  <p className="mb-4">
                    jakikan hari pertama lebaranmu meriah dan memorable
                  </p>
                  <a href="/" className="btn btn-warning text-white">
                    Get It Now
                  </a>
                </div>
                <div className="col-3 col-sm-6 col-md-4 col-lg-4 offset-1 d-none d-sm-block">
                  <img
                    src={product.image}
                    alt="slideshow hefa"
                    className={style.imgCarousel}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
