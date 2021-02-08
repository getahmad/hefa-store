import imgDesigner1 from "../../assets/img/designer/1.png";
import style from "./designer.module.scss";

const Designer = () => {
  return (
    <section className={`${style.designer} p-5`}>
      <div className="container">
        <div className="row">
          <div className="col mb-3">
            <h3>Our Designers</h3>
            <p>Pakaian terbaik dari designer profesional</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-sm-3 text-center">
            <figure className="figure">
              <img
                src={imgDesigner1}
                className="figure-img img-fluid"
                alt="featire hefa"
              />
              <figcaption className="figure-caption text-center">
                <h5>Anne Mortgery</h5>
                <p>Artistic Cloth</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <figure className="figure">
              <img
                src={imgDesigner1}
                className="figure-img img-fluid"
                alt="featire hefa"
              />
              <figcaption className="figure-caption text-center">
                <h5>Anne Mortgery</h5>
                <p>Artistic Cloth</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <figure className="figure">
              <img
                src={imgDesigner1}
                className="figure-img img-fluid"
                alt="featire hefa"
              />
              <figcaption className="figure-caption text-center">
                <h5>Anne Mortgery</h5>
                <p>Artistic Cloth</p>
              </figcaption>
            </figure>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <figure className="figure">
              <img
                src={imgDesigner1}
                className="figure-img img-fluid"
                alt="featire hefa"
              />
              <figcaption className="figure-caption text-center">
                <h5>Anne Mortgery</h5>
                <p>Artistic Cloth</p>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <a href="/">See All Our Designer</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Designer;
