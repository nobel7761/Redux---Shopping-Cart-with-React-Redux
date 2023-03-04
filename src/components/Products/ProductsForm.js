import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/products/actionCreators";

const ProductsForm = () => {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name: name,
      category: category,
      image: image,
      price: +price,
      quantity: +quantity,
    };

    console.log("newProduct", newProduct);

    dispatch(addProduct(newProduct));
    formRef.current.reset();
  };

  return (
    <div>
      <div>
        {/* <!-- Product Input Form --> */}
        <div className="formContainer">
          <h4 className="formTitle">Add New Product</h4>
          <form
            className="space-y-4 text-[#534F4F]"
            id="lws-addProductForm"
            onSubmit={(e) => handleSubmit(e)}
            ref={formRef}
          >
            {/* <!-- product name --> */}
            <div className="space-y-2">
              <label htmlFor="name">Product Name</label>
              <input
                className="addProductInput"
                id="lws-inputName"
                type="text"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            {/* <!-- product category --> */}
            <div className="space-y-2">
              <label htmlFor="category">Category</label>
              <input
                className="addProductInput"
                id="lws-inputCategory"
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            {/* <!-- product image url --> */}
            <div className="space-y-2">
              <label htmlFor="image">Image Url</label>
              <input
                className="addProductInput"
                id="lws-inputImage"
                type="text"
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>
            {/* <!-- price & quantity container --> */}
            <div className="grid grid-cols-2 gap-8 pb-4">
              {/* <!-- price --> */}
              <div className="space-y-2">
                <label htmlFor="price">Price</label>
                <input
                  className="addProductInput"
                  type="number"
                  id="lws-inputPrice"
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              {/* <!-- quantity --> */}
              <div className="space-y-2">
                <label htmlFor="quantity">Quantity</label>
                <input
                  className="addProductInput"
                  type="number"
                  id="lws-inputQuantity"
                  onChange={(e) => setQuantity(e.target.value)}
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

export default ProductsForm;
