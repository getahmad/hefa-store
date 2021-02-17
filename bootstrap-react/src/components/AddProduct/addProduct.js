import { useEffect, useState } from "react";
import { getAllCategory } from "../../redux/actions/productAction";
import { connect } from "react-redux";
import UpperCaseFirstLetter from "../../utils/UpperCaseFirstLetter";
import axios from "axios";

const AddProduct = ({ category, getAllCategory }) => {
  const [category1, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlAddProduct = `https://fakestoreapi.com/products`;
    const bodyData = {
      title: title,
      price: price,
      description: description,
      image: image,
      category: category1,
    };
    axios.post(urlAddProduct, bodyData).then((res) => {
      console.log(res.data);
    });
  };
  useEffect(() => {
    getAllCategory();
  }, [getAllCategory]);

  return (
    <>
      <h1 className="text-center">Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-4">
          <label htmlFor="inputTitle">Title</label>
          <input
            type="text"
            className="form-control rounded-pill"
            id="inputTitle"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPrice">Price</label>
          <input
            type="number"
            className="form-control rounded-pill"
            id="inputPrice"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputDescription">Description</label>
          <input
            type="text"
            className="form-control rounded-pill"
            id="inputDescription"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputImage">Image</label>
          <input
            type="file"
            className="form-control rounded-pill"
            id="inputImage"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputCategory">Category</label>
          <select
            className="form-control rounded-pill mb-4"
            id="inputCategory "
            onChange={(e) => setCategory(e.target.value)}
          >
            {category &&
              category.map((category, index) => (
                <option key={index} value={category}>
                  {UpperCaseFirstLetter(category)}
                </option>
              ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </>
  );
};

const reduxState = (globalState) => {
  return {
    category: globalState.category,
    isLoading: globalState.isLoading,
  };
};

const reduxDispatch = (dispatch) => {
  return {
    getAllCategory: () => dispatch(getAllCategory()),
  };
};

export default connect(reduxState, reduxDispatch)(AddProduct);
