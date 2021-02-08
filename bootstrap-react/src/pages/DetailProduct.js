import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import InfoProduct from "../components/InfoProduct/infoProduct";
import SimilarProduct from "../components/SimilarProduct/similarProduct";

const DetailProduct = () => {
  return (
    <>
      <Header />
      <Breadcrumb breadcrumbCurrent="Detail" />
      <InfoProduct />
      <SimilarProduct />
      <Footer />
    </>
  );
};

export default DetailProduct;
