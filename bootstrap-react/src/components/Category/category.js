import axios from "axios";
import { useEffect, useState } from "react";
import style from "./category.module.scss";
import icCategory from "../../assets/icon/category.svg";

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const urlCategory = `${process.env.REACT_APP_API_KEY}/products/categories`;
    axios.get(urlCategory).then((res) => {
      setCategory(res.data);
    });
  }, []);

  function UpperCaseFirstLetter(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  return (
    <>
      <div className={`container ${style.category} `}>
        <h3>Categories</h3>
        <p>sok dipilih</p>
        <div className="row justify-content-center">
          {category.map((category, index) => (
            <a
              href={`/category/${category}`}
              className={` btn ml-3 mt-3 mb-5 ${style.btnCategory}`}
              key={index}
            >
              <img src={icCategory} alt="" />
              <br />
              {UpperCaseFirstLetter(category)}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
