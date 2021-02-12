import axios from "axios";
import types from "../actions/types";
import { put, takeLatest } from "redux-saga/effects";

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

export default getDetailProductWatcher();
