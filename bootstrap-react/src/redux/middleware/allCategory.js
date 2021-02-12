import axios from "axios";
import types from "../actions/types";
import { put, takeLatest } from "redux-saga/effects";

function* getCategoryWatcher() {
  yield takeLatest(types.GET_ALL_CATEGORY_REQUEST, getCategoryWorker);
}

function* getCategoryWorker() {
  try {
    const urlGetCategory = `${process.env.REACT_APP_API_KEY}/products/categories`;
    const response = yield axios.get(urlGetCategory);
    const category = response.data;
    yield put({ type: types.GET_ALL_CATEGORY_SUCCESS, category: category });
  } catch (error) {
    yield put({ type: types.GET_PRODUCT_FAILURE });
  }
}

export default getCategoryWatcher();
