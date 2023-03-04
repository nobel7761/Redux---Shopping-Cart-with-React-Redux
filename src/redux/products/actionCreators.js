import {
  ADDPRODUCT,
  ADDTOCART,
  DECREMENT,
  INCREMENT,
  REMOVED,
} from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};

export const addCart = (product) => {
  return {
    type: ADDTOCART,
    payload: product,
  };
};

export const incrementProduct = (id) => {
  return {
    type: INCREMENT,
    payload: id,
  };
};

export const decrementProduct = (id) => {
  return {
    type: DECREMENT,
    payload: id,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVED,
    payload: id,
  };
};
