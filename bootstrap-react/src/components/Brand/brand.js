import cc from "../../assets/img/brand/cc.png";
import uniqlo from "../../assets/img/brand/uniqlo.png";
import pnb from "../../assets/img/brand/pnb.png";
import nike from "../../assets/img/brand/nike.png";

const Brand = () => {
  return (
    <section className="brand">
      <div className="container">
        <div className="row p-5 text-center">
          <div className="col-md">
            <img src={cc} alt="cc" className="img-fluid" />
          </div>
          <div className="col-md">
            <img src={nike} alt="nike" className="img-fluid" />
          </div>
          <div className="col-md">
            <img src={pnb} alt="pnb" className="img-fluid" />
          </div>
          <div className="col-md">
            <img src={uniqlo} alt="uniqlo" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
