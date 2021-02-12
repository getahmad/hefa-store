import { useEffect } from "react";
import style from "./category.module.scss";
import icCategory from "../../assets/icon/category.svg";
import types from "../../redux/actions/types";
import { connect } from "react-redux";
import Skeleton from "react-loading-skeleton";
import UpperCaseFirstLetter from "../../utils/UpperCaseFirstLetter";

const Category = ({ category, isLoading, getCategory }) => {
  useEffect(() => {
    getCategory();
  }, [getCategory]);

  return (
    <>
      <div className={`container ${style.category} `}>
        <h3>Categories</h3>
        <p>sok dipilih</p>
        <div className="row justify-content-center">
          {category &&
            category.map((category, index) => (
              <div key={index}>
                {isLoading && (
                  <Skeleton height={50} width={100} className="ml-5" />
                )}
                {!isLoading && (
                  <a
                    href={`/category/${category}`}
                    className={` btn ml-3 mt-3 mb-5 ${style.btnCategory}`}
                  >
                    <img src={icCategory} alt="" />
                    <br />
                    {UpperCaseFirstLetter(category)}
                  </a>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

const reduxState = (globalState) => {
  return {
    category: globalState.category,
    isLoading: globalState.isLoading,
  };
};

const reduxDispatch = (dispatch) => {
  return {
    getCategory: () => dispatch({ type: types.GET_ALL_CATEGORY_REQUEST }),
  };
};

export default connect(reduxState, reduxDispatch)(Category);
