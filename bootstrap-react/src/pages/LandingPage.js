import Brand from "../components/Brand/brand";
import Carousel from "../components/Carousel/carousel";
import Designer from "../components/Designer/designer";
import Feature from "../components/Features/feature";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Brand />
      <Feature />
      <Designer />
      <Footer />
    </>
  );
};

export default LandingPage;
