import plus from "../../assets/img/detail.png";
import style from "./feature.module.scss";
import { useEffect } from "react";
import ProductSkeleton from "../Skeleton/productSkeleton";
import { connect } from "react-redux";
import types from "../../redux/actions/types";
// import axios from "axios";
// import { useParams } from "react-router-dom";

const Feature = ({ getProduct, isLoading, product }) => {
  // const [product, setProduct] = useState([]);
  // const [loading, setLoading] = useState(false);
  // let { category } = useParams();

  // useEffect(() => {
  //   setLoading(true);
  //   const urlProduct = `${process.env.REACT_APP_API_KEY}/products?limit=12`;
  //   axios.get(urlProduct).then((res) => {
  //     setProduct(res.data);
  //     setLoading(false);
  //   });
  // }, []);

  // useEffect(() => {
  //   const urlCategoryProduct = `${process.env.REACT_APP_API_KEY}/products/category/${category}`;
  //   axios.get(urlCategoryProduct).then((res) => {
  //     setProduct(res.data);
  //     setLoading(false);
  //   });
  // }, [category]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <section className={`bg-light p-5 ${style.features}`}>
      <div className="container">
        <div className="row">
          <div className="col mb-3">
            <h3>Special Eid</h3>
            <p>Promo!! grab it fast</p>
          </div>
        </div>
        <div className="row">
          {product &&
            product.map((product, index) => (
              <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                {isLoading && <ProductSkeleton />}
                {!isLoading && (
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
                )}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

const reduxState = (globalState) => {
  return {
    product: globalState.product,
    isLoading: globalState.isLoading,
  };
};

const reduxDispatch = (dispatch) => {
  return {
    // setIdProduct:(idProduct)=> dispatch({type: types.SET_ID_PRODUCT, payload: idProduct}),
    getProduct: () => dispatch({ type: types.GET_PRODUCT_REQUEST }),
  };
};

export default connect(reduxState, reduxDispatch)(Feature);
