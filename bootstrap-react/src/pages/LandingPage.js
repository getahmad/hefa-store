import Brand from "../components/Brand/brand";
import Carousel from "../components/Carousel/carousel";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Brand />
      <h1 className="mt-5 pt-4">landing page</h1>
      <Footer />
    </>
  );
};

export default LandingPage;
