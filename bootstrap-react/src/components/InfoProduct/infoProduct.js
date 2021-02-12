import designBy from "../../assets/img/single/2.png";
import tumbnail1 from "../../assets/img/single/thumbnail/1.png";
import tumbnail2 from "../../assets/img/single/thumbnail/2.png";
import tumbnail3 from "../../assets/img/single/thumbnail/3.png";
import tumbnail4 from "../../assets/img/single/thumbnail/4.png";
import imgReview1 from "../../assets/img/single/review/1.png";
import imgReview2 from "../../assets/img/single/review/2.png";
import style from "./infoProduct.module.scss";
import "font-awesome/css/font-awesome.min.css";
import { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import types from "../../redux/actions/types";
import { useParams } from "react-router-dom";
import axios from "axios";

// const InfoProduct = ({ getProduct, isLoading, product }) => {
const InfoProduct = () => {
  const [product, setProduct] = useState({});

  let { idProduct } = useParams();
  useEffect(() => {
    const urlProductDetail = `${process.env.REACT_APP_API_KEY}/products/${idProduct}`;
    axios.get(urlProductDetail).then((response) => {
      setProduct(response.data);
    });
  }, [idProduct]);

  // useEffect(() => {
  //   getProduct();
  // }, [getProduct]);

  return (
    <>
      {product && (
        <>
          <section className="detail-product">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <figure className="figure">
                    <img
                      src={product.image}
                      className={`figure-img img-fluid ${style.imgProductDetailActive}`}
                      alt=""
                    />
                    <figcaption
                      className={`figure-caption ${style.productThumbnailContainer} d-flex justify-content-between`}
                    >
                      <a href="/">
                        <img src={tumbnail1} alt="/" />
                      </a>
                      <a href="/">
                        <img src={tumbnail2} alt="/" />
                      </a>
                      <a href="/">
                        <img src={tumbnail3} alt="/" />
                      </a>
                      <a href="/">
                        <img src={tumbnail4} alt="/" />
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div className="col-lg-5">
                  <h3 style={{ minHeight: "100px" }}>{product.title}</h3>
                  <p className="text-muted">$ {product.price}</p>
                  <button
                    type="button"
                    className="btn btn-sm"
                    style={{ backgroundColor: "#eaeaef", color: "#a4a4a4" }}
                  >
                    <i className="fa fa-minus-circle"></i>
                  </button>
                  <span className="mx-2">20</span>
                  <button
                    type="button"
                    className="btn btn-sm btn-success"
                    style={{ color: "#ffffff" }}
                  >
                    <i className="fa fa-plus-circle"></i>
                  </button>

                  <div className={style.btnProduct}>
                    <a
                      href="/checkout"
                      className={`btn btn-warning text-white ${style.btnCart}`}
                    >
                      Add to cart
                    </a>
                    <a
                      href="/"
                      className={`btn ${style.btnWishList}`}
                      style={{ backgroundColor: "#eaeaef", color: "#a4a4a4" }}
                    >
                      Add to wishlist
                    </a>
                  </div>

                  <div className={style.designedBy}>
                    <h5>Design by</h5>
                    <div className="row">
                      <div className="col-2">
                        <img src={designBy} alt="/" />
                      </div>
                      <div className="col">
                        <h4>Anne Mortgery</h4>
                        <p>
                          14.2K <span>Followers</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={`${style.productDescription} p-5`}>
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="description-tab"
                        data-toggle="tab"
                        href="#description"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        Product Description
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="review-tab"
                        data-toggle="tab"
                        href="#review"
                        role="tab"
                        aria-controls="review"
                        aria-selected="false"
                      >
                        Review (20)
                      </a>
                    </li>
                  </ul>
                  <div
                    className={`tab-content ${style.tabContent}`}
                    id="myTabContent"
                  >
                    <div
                      className={`tab-pane fade show active p-3 ${style.tabProductDesc}`}
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <p>{product.description}</p>
                    </div>
                    <div
                      className={`tab-pane fade p-3 ${style.productReview}`}
                      id="review"
                      role="tabpanel"
                      aria-labelledby="review-tab"
                    >
                      <div className="row">
                        <div className="col-1 d-none d-md-block">
                          <img src={imgReview1} alt="" />
                        </div>
                        <div className="col">
                          <h5>Joo Mortgery</h5>
                          <p>productny bagus coock untuk kulit</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1 d-none d-md-block">
                          <img src={imgReview2} alt="" />
                        </div>
                        <div className="col">
                          <h5>Brian</h5>
                          <p>productny bagus coock untuk kulit</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1 d-none d-md-block">
                          <img src={imgReview1} alt="" />
                        </div>
                        <div className="col">
                          <h5>Joo Mortgery</h5>
                          <p>productny bagus coock untuk kulit</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1 d-none d-md-block">
                          <img src={imgReview2} alt="" />
                        </div>
                        <div className="col">
                          <h5>Brian</h5>
                          <p>productny bagus coock untuk kulit</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1 d-none d-md-block">
                          <img src={imgReview2} alt="" />
                        </div>
                        <div className="col">
                          <h5>Brian</h5>
                          <p>productny bagus coock untuk kulit</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-1 d-none d-md-block">
                          <img src={imgReview2} alt="" />
                        </div>
                        <div className="col">
                          <h5>Brian</h5>
                          <p>productny bagus coock untuk kulit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

// const reduxState = (globalState) => {
//   return {
//     product: globalState.product,
//     isLoading: globalState.isLoading,
//   };
// };

// const reduxDispatch = (dispatch) => {
//   return {
//     getProduct: (idProduct) =>
//       dispatch({ type: types.GET_DETAIL_PRODUCT_REQUEST }),
//   };
// };

// export default connect(reduxState, reduxDispatch)(InfoProduct);
export default InfoProduct;
