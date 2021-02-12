import types from "../actions/types";

const globalState = {
  //   idProduct: null,
  product: null,
  isLoading: false,
  isError: false,
};

const rootReducer = (state = globalState, action) => {
  if (action.type === types.GET_PRODUCT_REQUEST) {
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  }

  if (action.type === types.GET_PRODUCT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      product: action.product,
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
      isLoading: false,
      isError: false,
      product: action.product,
    };
  }

  return state;
};

export default rootReducer;
