import similar1 from "../../assets/img/single/similar/1.png";
import similar2 from "../../assets/img/single/similar/2.png";
import similar3 from "../../assets/img/single/similar/3.png";
import style from "./similarProduct.module.scss";

const SimilarProduct = () => {
  return (
    <section className={style.similarProduct}>
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <h3>Similar Product</h3>
            <p>Pakaian pelengkap product di atas</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <figure className="figure">
              <img src={similar1} className="figure-img img-fluid" alt="..." />
              <figcaption className="figure-caption">
                <div className="row">
                  <div className="col">
                    <h4>Hatty Bomb</h4>
                    <p>Match 20%</p>
                  </div>
                  <div className="col d-flex align-items-center justify-content-end">
                    <p style={{ fontSize: "18px" }}>IDR 299.000</p>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="col-sm-4">
            <figure className="figure">
              <img src={similar2} className="figure-img img-fluid" alt="..." />
              <figcaption className="figure-caption">
                <div className="row">
                  <div className="col">
                    <h4>White pure</h4>
                    <p>Match 20%</p>
                  </div>
                  <div className="col d-flex align-items-center justify-content-end">
                    <p style={{ fontSize: "18px" }}>IDR 299.000</p>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="col-sm-4">
            <figure className="figure">
              <img src={similar3} className="figure-img img-fluid" alt="..." />
              <figcaption className="figure-caption">
                <div className="row">
                  <div className="col">
                    <h4>Hatty Bomb</h4>
                    <p>Match 20%</p>
                  </div>
                  <div className="col d-flex align-items-center justify-content-end">
                    <p style={{ fontSize: "18px" }}>IDR 299.000</p>
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarProduct;
