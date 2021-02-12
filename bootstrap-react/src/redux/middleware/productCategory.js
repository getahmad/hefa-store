import axios from "axios";
import types from "../actions/types";
import { put, takeLatest } from "redux-saga/effects";

function* getProductCategoryWatcher() {
  yield takeLatest(
    types.GET_PRODUCT_CATEGORY_REQUEST,
    getProductCategoryWorker
  );
}

function* getProductCategoryWorker() {
  try {
    const urlGetProduct = `${process.env.REACT_APP_API_KEY}/products/category/electronics`;
    const response = yield axios.get(urlGetProduct);
    const product = response.data;
    yield put({ type: types.GET_PRODUCT_CATEGORY_SUCCESS, product: product });
  } catch (error) {
    yield put({ type: types.GET_PRODUCT_FAILURE });
  }
}

export default getProductCategoryWatcher();
