import {
  ADDPRODUCT,
  ADDTOCART,
  DECREMENT,
  INCREMENT,
  REMOVED,
} from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case ADDTOCART:
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );

      const inCarts = state.carts.find((item) => item.id === action.payload.id)
        ? true
        : false;

      if (product.quantity === 0) {
        alert("Stock Out!!!");
        return state;
      } else {
        return {
          ...state,
          products: state.products.map((product) => {
            if (product.id === action.payload.id) {
              return {
                ...product,
                quantity: product.quantity - 1,
              };
            } else {
              return product;
            }
          }),

          carts: inCarts
            ? state.carts.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              )
            : [...state.carts, { ...product, quantity: 1 }],
        };
      }

    case INCREMENT:
      const item = state.products.find(
        (product) => product.id === action.payload
      );

      if (item.quantity === 0) {
        alert("Stock Out!!!");
        return state;
      } else {
        return {
          ...state,
          products: state.products.map((product) => {
            if (product.id === action.payload) {
              return {
                ...product,
                quantity: product.quantity - 1,
              };
            } else {
              return product;
            }
          }),
          carts: state.carts.map((product) => {
            if (product.id === action.payload) {
              return {
                ...product,
                quantity: product.quantity + 1,
              };
            } else {
              return product;
            }
          }),
        };
      }

    case DECREMENT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          } else {
            return product;
          }
        }),
        carts: state.carts.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          } else {
            return product;
          }
        }),
      };

    case REMOVED:
      const cartItem = state.carts.find((item) => item.id === action.payload);

      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity + cartItem.quantity,
            };
          } else {
            return product;
          }
        }),
        carts: state.carts.filter((product) => product.id !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
