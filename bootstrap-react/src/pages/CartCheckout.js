import Breadcrumb from "../components/Breadcrumb/breadcrumb";
import CartForm from "../components/CartForm/cartForm";
import CartItem from "../components/CartItem/cartItem";
import CartBiaya from "../components/CartBiaya/cartBiaya";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

const CartCheckout = () => {
  return (
    <>
      <Header />
      <div className="container cart-header mt-5 pt-5 ">
        <div className="row mt-5 text-center pl-0">
          <div className="col">
            <h3>Your Cart</h3>
            <p>Pastikan barang anda terbayar lunas</p>
          </div>
        </div>
        <Breadcrumb breadcrumbCurrent="Cart Checkout" />
        <div
          className="row justify-content-between"
          style={{ marginBottom: "100px" }}
        >
          <div className="col-lg-6">
            <h4 className="mb-4">Your Item</h4>
            <CartItem />
            <CartItem />
            <CartItem />
            <h4 className="mb-5" style={{ marginTop: "100px" }}>
              Your Address
            </h4>
            <CartForm />
          </div>
          <div className="col-lg-5">
            <CartBiaya />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartCheckout;
