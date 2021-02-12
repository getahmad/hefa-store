import Brand from "../components/Brand/brand";
import Carousel from "../components/Carousel/carousel";
import Category from "../components/Category/category";
import Designer from "../components/Designer/designer";
import Feature from "../components/Features/feature";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import types from "../redux/actions/types";
import { connect } from "react-redux";
import { useEffect } from "react";

const LandingPage = ({ getProduct }) => {
  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <>
      <Header />
      <Carousel />
      <Brand />
      <Category />
      <Feature title="Special Eid" subTitle="Promo!! grab it fast" />
      <Designer />
      <Footer />
    </>
  );
};

const reduxDispatch = (dispatch) => {
  return {
    getProduct: () => dispatch({ type: types.GET_PRODUCT_REQUEST }),
  };
};

export default connect(null, reduxDispatch)(LandingPage);
