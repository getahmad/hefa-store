import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductSkeleton from "../Skeleton/productSkeleton";
import style from "./similarProduct.module.scss";

const SimilarProduct = () => {
  const [productDetail, setProductDetail] = useState({});
  const [similarProduct, setSimilarProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  let { idProduct } = useParams();
  useEffect(() => {
    const urlProductDetail = `${process.env.REACT_APP_API_KEY}/products/${idProduct}`;
    axios.get(urlProductDetail).then((response) => {
      setProductDetail(response.data);
    });
  }, [idProduct]);

  useEffect(() => {
    setLoading(true);
    const urlSimilarProduct = `${process.env.REACT_APP_API_KEY}/products/category/${productDetail.category}?limit=4`;
    axios.get(urlSimilarProduct).then((response) => {
      setSimilarProduct(response.data);
      setLoading(false);
    });
  }, [productDetail.category]);

  const productSkeleton = [1, 2, 3, 4, 5, 6].map((n) => (
    <ProductSkeleton key={n} />
  ));

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
          {loading
            ? productSkeleton
            : similarProduct.map((product, index) => (
                <div className="col-sm-3" key={index}>
                  <figure className="figure">
                    <img
                      src={product.image}
                      className={`figure-img img-fluid ${style.imgSimilarProduct}`}
                      alt={product.title}
                    />
                    <figcaption className="figure-caption">
                      <div className="row">
                        <div className={`col-7 ${style.titleSimilar}`}>
                          <h6>
                            <strong>{product.title.slice(0, 15)}</strong>
                          </h6>
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
