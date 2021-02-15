import Brand from "../components/Brand/brand";
import Carousel from "../components/Carousel/carousel";
import Category from "../components/Category/category";
import Designer from "../components/Designer/designer";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import { getAllProduct } from "../redux/actions/productAction";
import { connect } from "react-redux";
import { useEffect } from "react";
import CardProduct from "../components/CardProduct/CardProduct";

const LandingPage = ({ getAllProduct }) => {
  useEffect(() => {
    getAllProduct();
  }, [getAllProduct]);

  return (
    <>
      <Header />
      <Carousel />
      <Brand />
      <Category />
      <CardProduct title="Special Eid" subTitle="Promo!! grab it fast" />
      <Designer />
      <Footer />
    </>
  );
};

const reduxDispatch = (dispatch) => {
  return {
    getAllProduct: () => dispatch(getAllProduct()),
  };
};

export default connect(null, reduxDispatch)(LandingPage);
