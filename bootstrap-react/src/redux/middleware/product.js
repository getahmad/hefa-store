import axios from "axios";
import types from "../actions/types";
import { put, takeLatest } from "redux-saga/effects";

function* getProductWorker() {
  try {
    const urlGetProduct = `${process.env.REACT_APP_API_KEY}/products?limit=12`;
    const response = yield axios.get(urlGetProduct);
    const product = response.data;
    yield put({ type: types.GET_PRODUCT_SUCCESS, payload: product });
  } catch (error) {
    yield put({ type: types.GET_PRODUCT_FAILURE });
  }
}

function* getDetailProductWorker({ idProduct }) {
  try {
    const urlGetDetailProduct = `${process.env.REACT_APP_API_KEY}/products/${idProduct}`;
    const response = yield axios.get(urlGetDetailProduct);
    const product = response.data;
    yield put({ type: types.GET_DETAIL_PRODUCT_SUCCESS, payload: product });
  } catch (error) {
    yield put({ type: types.GET_PRODUCT_FAILURE });
  }
}

function* getCategoryWorker() {
  try {
    const urlGetCategory = `${process.env.REACT_APP_API_KEY}/products/categories`;
    const response = yield axios.get(urlGetCategory);
    const category = response.data;
    yield put({ type: types.GET_ALL_CATEGORY_SUCCESS, payload: category });
  } catch (error) {
    yield put({ type: types.GET_PRODUCT_FAILURE });
  }
}

function* getProductCategoryWorker({ category }) {
  try {
    const urlGetProduct = `${process.env.REACT_APP_API_KEY}/products/category/${category}`;
    const response = yield axios.get(urlGetProduct);
    const product = response.data;
    yield put({ type: types.GET_PRODUCT_CATEGORY_SUCCESS, payload: product });
  } catch (error) {
    yield put({ type: types.GET_PRODUCT_FAILURE });
  }
}

function* productSaga() {
  yield takeLatest(types.GET_PRODUCT_REQUEST, getProductWorker);
  yield takeLatest(types.GET_DETAIL_PRODUCT_REQUEST, getDetailProductWorker);
  yield takeLatest(types.GET_ALL_CATEGORY_REQUEST, getCategoryWorker);
  yield takeLatest(
    types.GET_PRODUCT_CATEGORY_REQUEST,
    getProductCategoryWorker
  );
}

export default productSaga;
