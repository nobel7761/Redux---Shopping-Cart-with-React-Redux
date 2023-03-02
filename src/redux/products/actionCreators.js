import { ADDPRODUCT /*  ADDPRODUCTTOCART */ } from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};

/* export const addProductToCart = (productID) => {
  return {
    type: ADDPRODUCTTOCART,
    payload: productID,
  };
}; */
