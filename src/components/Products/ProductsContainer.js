import React from "react";
import ProductsForm from "./ProductsForm";
import ProductsList from "./ProductsList";

const ProductsContainer = () => {
  return (
    <main className="py-16">
      <div className="productWrapper">
        <ProductsList />
        <ProductsForm />
      </div>
    </main>
  );
};

export default ProductsContainer;
