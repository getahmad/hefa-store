import types from "./types";

export const getAllProduct = () => {
  return { type: types.GET_PRODUCT_REQUEST };
};

export const getDetailProduct = (idProduct) => {
  return { type: types.GET_DETAIL_PRODUCT_REQUEST, idProduct };
};

//category
export const getAllCategory = () => {
  return { type: types.GET_ALL_CATEGORY_REQUEST };
};

export const getProductCategory = (category) => {
  return { type: types.GET_PRODUCT_CATEGORY_REQUEST, category };
};

//add Product
export const postAddProduct = (product) => {
  return { type: types.POST_PRODUCT_REQUEST, product };
};
