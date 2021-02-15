import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import Footer from "../components/Footer/footer";

import Header from "../components/Header/header";
import { getProductCategory } from "../redux/actions/productAction";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import UpperCaseFirstLetter from "../utils/UpperCaseFirstLetter";
import CardProduct from "../components/CardProduct/CardProduct";

const CategoryProduct = ({ getProductCategory }) => {
  let { category } = useParams();

  useEffect(() => {
    getProductCategory(category);
  }, [getProductCategory, category]);

  return (
    <>
      <Header />
      <div className="container pt-5">
        <Breadcrumb breadcrumbCurrent="Category" />
      </div>
      <CardProduct title={UpperCaseFirstLetter(category)} subTitle="" />
      <Footer />
    </>
  );
};

const reduxDispatch = (dispatch) => {
  return {
    getProductCategory: (category) => dispatch(getProductCategory(category)),
  };
};

export default connect(null, reduxDispatch)(CategoryProduct);
