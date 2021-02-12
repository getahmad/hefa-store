import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./middleware/sagas";

const sagaMiddleware = createSagaMiddleware();

const globalStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

sagaMiddleware.run(rootSaga);

export default globalStore;
