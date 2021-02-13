import { all } from "redux-saga/effects";
import productSaga from "./product";

function* rootSaga() {
  yield all([productSaga()]);
}

export default rootSaga;
