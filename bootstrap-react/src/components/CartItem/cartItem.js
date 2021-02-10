import imgItem from "../../assets/img/cart/item1.png";

const CartItem = () => {
  return (
    <>
      <div className="row mb-4">
        <div className="col-2">
          <img src={imgItem} alt="" />
        </div>
        <div className="col-4">
          <h5 className="m-0">Jeans Papp</h5>
          <p className="m-0 text-muted">IDR 280.000.100</p>
        </div>
        <div className="col-4">
          <button
            type="button"
            className="btn btn-sm"
            style={{ backgroundColor: "#eaeaef", color: "#a4a4a4" }}
          >
            <i className="fa fa-minus-circle"></i>
          </button>
          <span className="mx-2">20</span>
          <button
            type="button"
            className="btn btn-sm btn-success"
            style={{ color: "#ffffff" }}
          >
            <i className="fa fa-plus-circle"></i>
          </button>
        </div>
        <div className="col-2 text-right">
          <button
            type="button"
            className="btn btn-sm btn-danger"
            style={{ color: "#ffffff" }}
          >
            <i className="fa fa-times-circle"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
