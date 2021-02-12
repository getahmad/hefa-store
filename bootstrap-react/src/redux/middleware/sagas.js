import { all } from "redux-saga/effects";
import getProductWatcher from "./allProduct";
import getDetailProductWatcher from "./detailProduct";
import getCategoryWatcher from "./allCategory";
import getProductCategoryWatcher from "./productCategory";

function* rootSaga() {
  yield all([
    getProductWatcher,
    getDetailProductWatcher,
    getCategoryWatcher,
    getProductCategoryWatcher,
  ]);
}

export default rootSaga;
