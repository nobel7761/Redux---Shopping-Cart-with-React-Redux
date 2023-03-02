import { ADDPRODUCT, ADDTOCART } from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};

export const addToCart = (product) => {
  return {
    type: ADDTOCART,
    payload: product,
  };
};
