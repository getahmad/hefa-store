import feature1 from "../../assets/img/feature/1.png";
import feature2 from "../../assets/img/feature/2.png";
import feature3 from "../../assets/img/feature/3.png";
import plus from "../../assets/img/detail.png";
import style from "./feature.module.scss";

const Feature = () => {
  return (
    <section className={`bg-light p-5 ${style.features}`}>
      <div className="container">
        <div className="row">
          <div className="col mb-3">
            <h3>Special Eid</h3>
            <p>promo pakaian cocok untuk lebaran</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <figure className={style.figure}>
              <div className={style.figureImg}>
                <img
                  src={feature1}
                  className={`${style.figureImg} img-fluid`}
                  alt="featire hefa"
                />
                <a
                  href="detail.html"
                  className="d-flex justify-content-center href"
                >
                  <img src={plus} alt="plus" className="align-self-center" />
                </a>
              </div>

              <figcaption className="figure-caption text-center">
                <h5>Jeans Pubb</h5>
                <p>IDR 190.000</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <figure className={style.figure}>
              <div className={style.figureImg}>
                <img
                  src={feature2}
                  className={`${style.figureImg} img-fluid`}
                  alt="featire hefa"
                />
                <a href="detail.html" className="d-flex justify-content-center">
                  <img src={plus} alt="plus" className="align-self-center" />
                </a>
              </div>
              <figcaption className="figure-caption text-center">
                <h5>Jeans Pubb</h5>
                <p>IDR 190.000</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <figure className={style.figure}>
              <div className={style.figureImg}>
                <img
                  src={feature3}
                  className={`${style.figureImg} img-fluid`}
                  alt="featire hefa"
                />
                <a href="detail.html" className="d-flex justify-content-center">
                  <img src={plus} alt="plus" className="align-self-center" />
                </a>
              </div>
              <figcaption className="figure-caption text-center">
                <h5>Jeans Pubb</h5>
                <p>IDR 190.000</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <figure className={style.figure}>
              <div className={style.figureImg}>
                <img
                  src={feature1}
                  className={`${style.figureImg} img-fluid`}
                  alt="featire hefa"
                />
                <a href="detail.html" className="d-flex justify-content-center">
                  <img src={plus} alt="plus" className="align-self-center" />
                </a>
              </div>
              <figcaption className="figure-caption text-center">
                <h5>Jeans Pubb</h5>
                <p>IDR 190.000</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <figure className={style.figure}>
              <div className={style.figureImg}>
                <img
                  src={feature3}
                  className={`${style.figureImg} img-fluid`}
                  alt="featire hefa"
                />
                <a href="detail.html" className="d-flex justify-content-center">
                  <img src={plus} alt="plus" className="align-self-center" />
                </a>
              </div>
              <figcaption className="figure-caption text-center">
                <h5>Jeans Pubb</h5>
                <p>IDR 190.000</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <figure className={style.figure}>
              <div className={style.figureImg}>
                <img
                  src={feature2}
                  className={`${style.figureImg} img-fluid`}
                  alt="featire hefa"
                />
                <a href="detail.html" className="d-flex justify-content-center">
                  <img src={plus} alt="plus" className="align-self-center" />
                </a>
              </div>
              <figcaption className="figure-caption text-center">
                <h5>Jeans Pubb</h5>
                <p>IDR 190.000</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
