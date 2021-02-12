import axios from "axios";
import types from "../actions/types";
import { put, takeLatest } from "redux-saga/effects";

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

export default getProductWatcher();
