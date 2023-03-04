import React from "react";
import { useSelector } from "react-redux";
import CartForm from "./CartForm";
import CartList from "./CartList";

const CartsContainer = () => {
  const cartItems = useSelector((state) => state.products.carts);
  const items = cartItems.filter((item) => item.quantity > 0);
  const totalPrice = items
    .map((item) => item.quantity * item.price)
    .reduce((p, c) => p + c, 0);
  return (
    <>
      {items.length === 0 ? (
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <div className="space-y-6">
              {/* <!-- Cart Item --> */}
              <h1>No Items Found</h1>

              {/* <!-- Cart Items Ends --> */}
            </div>

            {/* <!-- Bill Details --> */}
            <CartForm />
          </div>
        </div>
      ) : (
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <div className="space-y-6">
              {/* <!-- Cart Item --> */}
              {items?.map((item) => (
                <CartList key={item.id} item={item} />
              ))}

              {/* <!-- Cart Items Ends --> */}
            </div>

            {/* <!-- Bill Details --> */}
            <CartForm totalAmount={totalPrice} />
          </div>
        </div>
      )}
    </>
  );
};

export default CartsContainer;
