import types from "../actions/types";

const globalState = {
  product: null,
  category: null,
  isLoading: false,
  isError: false,
};

const rootReducer = (state = globalState, action) => {
  if (action.type === types.GET_PRODUCT_REQUEST) {
    return {
      ...state,
      isLoading: true,
      product: action.payload,
      isError: false,
    };
  }

  if (action.type === types.GET_PRODUCT_SUCCESS) {
    return {
      ...state,
      isError: false,
      product: action.payload,
      isLoading: false,
    };
  }

  //gagal load
  if (action.type === types.GET_PRODUCT_FAILURE) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      product: null,
    };
  }

  // detail product
  if (action.type === types.GET_DETAIL_PRODUCT_REQUEST) {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }

  if (action.type === types.GET_DETAIL_PRODUCT_SUCCESS) {
    return {
      ...state,

      isError: false,
      product: action.payload,
      isLoading: false,
    };
  }

  //ALL CATEGORY
  if (action.type === types.GET_ALL_CATEGORY_REQUEST) {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }

  if (action.type === types.GET_ALL_CATEGORY_SUCCESS) {
    return {
      ...state,

      isError: false,
      category: action.payload,
      isLoading: false,
    };
  }

  //PRODUCT PER CATEGORY
  if (action.type === types.GET_PRODUCT_CATEGORY_REQUEST) {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }

  if (action.type === types.GET_PRODUCT_CATEGORY_SUCCESS) {
    return {
      ...state,

      isError: false,
      product: action.payload,
      isLoading: false,
    };
  }

  return state;
};

export default rootReducer;

// import { combineReducers } from "redux";

// import product from "./product";
// export default combineReducers({
//   product: product,
// });
