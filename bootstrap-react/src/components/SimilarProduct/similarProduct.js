import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./similarProduct.module.scss";

const SimilarProduct = () => {
  const [productDetail, setProductDetail] = useState({});

  let { id } = useParams();
  useEffect(() => {
    const urlProductDetail = `https://fakestoreapi.com/products/${id}`;
    axios.get(urlProductDetail).then((response) => {
      setProductDetail(response.data);
    });
  }, [id]);

  const [similarProduct, setSimilarProduct] = useState([]);
  useEffect(() => {
    const urlSimilarProduct = `https://fakestoreapi.com/products/category/${productDetail.category}?limit=4`;
    axios.get(urlSimilarProduct).then((response) => {
      setSimilarProduct(response.data);
    });
  }, [productDetail.category]);

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
          {similarProduct.map((product, index) => (
            <div className="col-sm-3" key={index}>
              <figure className="figure">
                <img
                  src={product.image}
                  className={`figure-img img-fluid ${style.imgSimilarProduct}`}
                  alt="..."
                />
                <figcaption className="figure-caption">
                  <div className="row">
                    <div className="col">
                      <h6>Hatty Bomb</h6>
                      <p>{product.category}</p>
                    </div>
                    <div className="col d-flex align-items-center justify-content-end">
                      <p style={{ fontSize: "18px" }}>$ {product.price}</p>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarProduct;
