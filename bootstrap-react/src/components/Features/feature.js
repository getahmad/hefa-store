import plus from "../../assets/img/detail.png";
import style from "./feature.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductSkeleton from "../Skeleton/productSkeleton";

const Feature = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const urlProduct = `https://fakestoreapi.com/products?limit=18`;
    axios.get(urlProduct).then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, []);

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
          {product.map((product, index) => (
            <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
              {loading && <ProductSkeleton />}
              {!loading && (
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

export default Feature;
