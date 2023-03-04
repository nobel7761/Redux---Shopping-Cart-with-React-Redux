import React from "react";
import CartForm from "./CartForm";
import CartList from "./CartList";

const CartsContainer = () => {
  return (
    <div className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <CartList />

        <CartForm />
      </div>
    </div>
  );
};

export default CartsContainer;
