import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

const CartCheckout = () => {
  return (
    <>
      <Header />
      <div className="container cart-header mt-5 pt-5">
        <div className="row mt-5 mb-3 text-center">
          <div className="col">
            <h3>Your Cart</h3>
            <p>Pastikan barang anda terbayar lunas</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartCheckout;
