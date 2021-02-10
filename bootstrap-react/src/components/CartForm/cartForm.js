const CartForm = () => {
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Alamat Lengkap"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address2">Address II</label>
          <input
            type="text"
            className="form-control"
            id="address2"
            placeholder="Alamat Tambahan"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <select className="custom-select" defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              Select City
            </option>
            <option value="1">Bandung</option>
            <option value="2">Palembang</option>
            <option value="3">Jakarta</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select className="custom-select" defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              Select Country
            </option>
            <option value="1">Indonesia</option>
            <option value="2">Singapura</option>
            <option value="3">Malaysia</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default CartForm;
