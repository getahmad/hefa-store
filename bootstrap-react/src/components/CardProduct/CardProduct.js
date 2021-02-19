import plus from "../../assets/img/detail.png";
import style from "./cardProduct.module.scss";
import ProductSkeleton from "../Skeleton/productSkeleton";
import { connect } from "react-redux";

const CardProduct = ({ isLoading, product, title, subTitle }) => {
  const skeletonsCard = [1, 2, 3, 4, 5, 6].map((n) => (
    <ProductSkeleton key={n} />
  ));

  return (
    <section className={`bg-light p-5 ${style.features}`}>
      <div className="container">
        <div className="row">
          <div className="col mb-3">
            <h3>{title}</h3>
            <p>{subTitle}</p>
          </div>
        </div>
        <div className="row">
          {isLoading
            ? skeletonsCard
            : product &&
              product.map((product, index) => (
                <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                  <figure className={style.figure}>
                    <div className={style.figureImg}>
                      <img
                        src={product.image}
                        className={`${style.figureImg} img-fluid`}
                        alt="featire hefa"
                      />
                      <a
                        href={`/detail/${product.id}`}
                        className="d-flex justify-content-center href"
                      >
                        <img
                          src={plus}
                          alt="plus"
                          className="align-self-center"
                        />
                      </a>
                    </div>

                    <figcaption className="figure-caption text-center">
                      <h5>{product.title.slice(0, 20)}</h5>
                      <p>$ {product.price}</p>
                    </figcaption>
                  </figure>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

const reduxState = (globalState) => {
  return {
    isLoading: globalState.productReducer.isLoading,
    product: globalState.productReducer.product,
  };
};

export default connect(reduxState, null)(CardProduct);
