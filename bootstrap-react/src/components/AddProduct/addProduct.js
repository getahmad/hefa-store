import { useEffect, useState } from "react";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState([]);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const urlCategory = ``;
  }, []);

  return (
    <>
      <h1 className="text-center">Add Product</h1>
      <form>
        <div className="form-group mt-4">
          <label htmlFor="inputTitle">Title</label>
          <input
            type="text"
            className="form-control rounded-pill"
            id="inputTitle"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPrice">Price</label>
          <input
            type="number"
            className="form-control rounded-pill"
            id="inputPrice"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputDescription">Description</label>
          <input
            type="text"
            className="form-control rounded-pill"
            id="inputDescription"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputImage">Image</label>
          <input
            type="file"
            className="form-control rounded-pill"
            id="inputImage"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputCategory">Category</label>
          <select
            className="form-control rounded-pill mb-4"
            id="inputCategory "
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddProduct;
