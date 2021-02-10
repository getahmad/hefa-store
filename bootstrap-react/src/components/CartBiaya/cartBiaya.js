const CartBiaya = () => {
  return (
    <>
      <div className="card rounded-0 checkout-item">
        <div className="card-body">
          <h5 className="card-title">Informasi Biaya</h5>
          <div className="row mb-3">
            <div className="col">
              <h6 className="m-0">Jeans Papp</h6>
              <small className="text-muted">2 Items</small>
            </div>
            <div className="col d-flex justify-content-end">
              <h6 className="m-0 align-self-center text-success">
                IDR 600.000.000
              </h6>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <h6 className="m-0">Jeans Papp</h6>
              <small className="text-muted">2 Items</small>
            </div>
            <div className="col d-flex justify-content-end">
              <h6 className="m-0 align-self-center text-success">
                IDR 600.000.000
              </h6>
            </div>
          </div>
          <hr />

          <div className="row mb-3">
            <div className="col">
              <h6 className="m-0">Courier</h6>
              <small className="text-muted">JNT Express</small>
            </div>
            <div className="col d-flex justify-content-end">
              <h6 className="m-0 align-self-center text-success">
                IDR 201.000
              </h6>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <h6 className="m-0">Tax</h6>
              <small className="text-muted">Negara 20%</small>
            </div>
            <div className="col d-flex justify-content-end">
              <h6 className="m-0 align-self-center text-success">
                IDR 1.799.000
              </h6>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <h6 className="m-0">Eid Promo</h6>
              <small className="text-muted">10%</small>
            </div>
            <div className="col d-flex justify-content-end">
              <h6 className="m-0 align-self-center text-danger">
                - IDR 50.000.000
              </h6>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <h6 className="m-0">Total Harga</h6>
            </div>
            <div className="col d-flex justify-content-end">
              <h6 className="m-0 align-self-center text-primary">
                IDR 1.520.940.300
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <button type="button" className="btn btn-light btn-block">
            Cancel
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-warning btn-block text-white"
            data-toggle="modal"
            data-target="#checkout-success"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartBiaya;
