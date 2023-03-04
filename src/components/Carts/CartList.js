import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementProduct,
  incrementProduct,
  removeProduct,
} from "../../redux/products/actionCreators";

const CartList = () => {
  const carts = useSelector((state) => state.products.carts);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementProduct(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrementProduct(id));
  };

  const handleDelete = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div>
      <div className="space-y-6">
        {/* <!-- Cart Item --> */}
        {carts.length <= 0 ? (
          <p className="font-bold uppercase text-2xl text-red-500">
            No Products Found In The Carts
          </p>
        ) : (
          carts.map((product) => (
            <div className="cartCard">
              <div className="flex items-center col-span-6 space-x-6">
                {/* <!-- cart image --> */}
                <img
                  className="lws-cartImage"
                  src={product.image}
                  alt="product"
                />
                {/* <!-- cart item info --> */}
                <div className="space-y-2">
                  <h4 className="lws-cartName">{product.name}</h4>
                  <p className="lws-cartCategory">{product.category}</p>
                  <p>
                    BDT <span className="lws-cartPrice">{product.price}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                {/* <!-- amount buttons --> */}
                <div className="flex items-center space-x-4">
                  <button
                    className="lws-incrementQuantity"
                    onClick={() => handleIncrement(product.id)}
                  >
                    <i className="text-lg fa-solid fa-plus"></i>
                  </button>
                  <span className="lws-cartQuantity">{product.quantity}</span>
                  <button
                    className="lws-decrementQuantity"
                    onClick={() => handleDecrement(product.id)}
                  >
                    <i className="text-lg fa-solid fa-minus"></i>
                  </button>
                </div>
                {/* <!-- price --> */}
                <p className="text-lg font-bold">
                  BDT{" "}
                  <span className="lws-calculatedPrice">
                    {product.price * product.quantity}
                  </span>
                </p>
              </div>
              {/* <!-- delete button --> */}
              <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                <button
                  className="lws-removeFromCart"
                  onClick={() => handleDelete(product.id)}
                >
                  <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))
        )}
        {/* <!-- Cart Items Ends --> */}
      </div>
    </div>
  );
};

export default CartList;
