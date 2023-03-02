import { ADDPRODUCT } from "./actionTypes";
import initialState from "./initialState";

const productID = (products) => {
  const maxID = products.reduce(
    (maxID, product) => Math.max(product.id, maxID),
    -1
  );

  return maxID + 1;
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return [
        ...state,
        {
          id: productID(state),
          name: action.payload.name,
          category: action.payload.category,
          image: action.payload.image,
          price: action.payload.price,
          quantity: action.payload.quantity,
        },
      ];

    default:
      return state;
  }
};

export default productReducer;
