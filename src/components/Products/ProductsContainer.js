import React from "react";
import Products from "./Products";
import ProductForm from "./ProductForm";

const ProductsContainer = () => {
  return (
    <div className="productWrapper">
      <Products />
      <ProductForm />
    </div>
  );
};

export default ProductsContainer;
