import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../redux/products/actionCreators";

const ProductsList = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addCart(product));
  };
  return (
    <div>
      {/* <!-- products container --> */}
      <div className="productContainer" id="lws-productContainer">
        {/* <!-- product item --> */}
        {products.length <= 0 ? (
          <p className="font-bold uppercase text-2xl text-red-500">
            No Products Found
          </p>
        ) : (
          products.map((product) => (
            <div className="lws-productCard" key={product.id}>
              <img
                className="lws-productImage"
                src={product.image}
                alt="product"
              />
              <div className="p-4 space-y-2">
                <h4 className="lws-productName">{product.name}</h4>
                <p className="lws-productCategory">{product.category}</p>
                <div className="flex items-center justify-between pb-2">
                  <p className="productPrice">
                    BDT <span className="lws-price">{product.price}</span>
                  </p>
                  <p className="productQuantity">
                    QTY <span className="lws-quantity">{product.quantity}</span>
                  </p>
                </div>
                <button
                  className={`lws-btnAddToCart`}
                  disabled={product.quantity === 0}
                  onClick={() => handleAddToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))
        )}
        {/* <!-- product item ends --> */}
      </div>
      {/* <!-- products container ends --> */}
    </div>
  );
};

export default ProductsList;
