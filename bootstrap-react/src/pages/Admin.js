import AddProduct from "../components/AddProduct/addProduct";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";

const Admin = () => {
  return (
    <>
      <Header />
      <div className="mt-5 pt-5 d-flex justify-content-center container">
        <h1>Admin</h1>
      </div>
      <div className="container mt-5 mb-5 ">
        <div className="row">
          <div className="col-12 col-lg-6 bg-light rounded p-5">
            <AddProduct />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
