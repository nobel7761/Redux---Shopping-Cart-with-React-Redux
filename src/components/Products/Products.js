import React from "react";

const Products = () => {
  return (
    <div className="productWrapper">
      {/* <!-- products container --> */}
      <div className="productContainer" id="lws-productContainer">
        {/* <!-- product item --> */}
        <div className="lws-productCard">
          <img
            className="lws-productImage"
            src="https://i.dummyjson.com/data/products/59/thumbnail.jpg"
            alt="product"
          />
          <div className="p-4 space-y-2">
            <h4 className="lws-productName">Spring and summershoes</h4>
            <p className="lws-productCategory">Mens shoes</p>
            <div className="flex items-center justify-between pb-2">
              <p className="productPrice">
                BDT <span className="lws-price">400</span>
              </p>
              <p className="productQuantity">
                QTY <span className="lws-quantity">10</span>
              </p>
            </div>
            <button className="lws-btnAddToCart">Add To Cart</button>
          </div>
        </div>
        {/* <!-- product item ends --> */}
      </div>
      {/* <!-- products container ends --> */}
      <div>
        {/* <!-- Product Input Form --> */}
        <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
            {/* <!-- product name --> */}
            <div className="space-y-2">
              <label for="name">Product Name</label>
              <input
                className="addProductInput"
                id="lws-inputName"
                type="text"
                required
              />
            </div>
            {/* <!-- product category --> */}
            <div className="space-y-2">
              <label for="category">Category</label>
              <input
                className="addProductInput"
                id="lws-inputCategory"
                type="text"
                required
              />
            </div>
            {/* <!-- product image url --> */}
            <div className="space-y-2">
              <label for="image">Image Url</label>
              <input
                className="addProductInput"
                id="lws-inputImage"
                type="text"
                required
              />
            </div>
            {/* <!-- price & quantity container --> */}
            <div className="grid grid-cols-2 gap-8 pb-4">
              {/* <!-- price --> */}
              <div className="space-y-2">
                <label for="price">Price</label>
                <input
                  className="addProductInput"
                  type="number"
                  id="lws-inputPrice"
                  required
                />
              </div>
              {/* <!-- quantity --> */}
              <div className="space-y-2">
                <label for="quantity">Quantity</label>
                <input
                  className="addProductInput"
                  type="number"
                  id="lws-inputQuantity"
                  required
                />
              </div>
            </div>
            {/* <!-- submit button --> */}
            <button type="submit" id="lws-inputSubmit" className="submit">
              Add Product
            </button>
          </form>
        </div>
        {/* <!-- Product Input Form Ends --> */}
      </div>
    </div>
  );
};

export default Products;
