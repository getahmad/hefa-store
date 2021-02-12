import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import Feature from "../components/Features/feature";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import types from "../redux/actions/types";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import UpperCaseFirstLetter from "../utils/UpperCaseFirstLetter";

const CategoryProduct = ({ getProductCategory }) => {
  useEffect(() => {
    getProductCategory();
  }, [getProductCategory]);

  let { category } = useParams();

  return (
    <>
      <Header />
      <div className="container pt-5">
        <Breadcrumb breadcrumbCurrent="Category" />
      </div>
      <Feature title={UpperCaseFirstLetter(category)} subTitle="" />
      <Footer />
    </>
  );
};

const reduxDispatch = (dispatch) => {
  return {
    getProductCategory: () =>
      dispatch({ type: types.GET_PRODUCT_CATEGORY_REQUEST }),
  };
};

export default connect(null, reduxDispatch)(CategoryProduct);
