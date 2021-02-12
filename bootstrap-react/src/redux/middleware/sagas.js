import axios from "axios";
import types from "../actions/types";
import { all, put, select, takeLatest } from "redux-saga/effects";
// import { useParams } from "react-router-dom";

//get all product
function* getProductWatcher() {
  yield takeLatest(types.GET_PRODUCT_REQUEST, getProductWorker);
}

function* getProductWorker() {
  try {
    const urlGetProduct = `${process.env.REACT_APP_API_KEY}/products?limit=12`;
    const response = yield axios.get(urlGetProduct);
    const product = response.data;
    yield put({ type: types.GET_PRODUCT_SUCCESS, product: product });
  } catch (error) {
    yield put({ type: types.GET_PRODUCT_FAILURE });
  }
}

function* getDetailProductWatcher() {
  yield takeLatest(types.GET_DETAIL_PRODUCT_REQUEST, getDetailProductWorker);
}

function* getDetailProductWorker() {
  try {
    const urlGetDetailProduct = `${process.env.REACT_APP_API_KEY}/products/${idProduct}`;
    const response = yield axios.get(urlGetDetailProduct);
    const product = response.data;
    yield put({ type: types.GET_DETAIL_PRODUCT_SUCCESS, product: product });
  } catch (error) {
    yield put({ type: types.GET_PRODUCT_FAILURE });
  }
}

function* rootSaga() {
  yield all([getProductWatcher(), getDetailProductWatcher()]);
}

export default rootSaga;
