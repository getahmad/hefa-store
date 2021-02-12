import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import Feature from "../components/Features/feature";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

const CategoryProduct = () => {
  return (
    <>
      <Header />
      <div className="container pt-5">
        <Breadcrumb breadcrumbCurrent="Category" />
      </div>
      <Feature/>
      <Footer />
    </>
  );
};

export default CategoryProduct;
