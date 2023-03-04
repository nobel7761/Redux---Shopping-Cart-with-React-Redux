import React from "react";
import { useSelector } from "react-redux";

const CartForm = () => {
  const carts = useSelector((state) => state.products.carts);
  const items = carts.filter((item) => item.quantity > 0);
  const totalAmount = items
    .map((item) => item.price * item.quantity)
    .reduce((totalAmount, itemTotalPrice) => totalAmount + itemTotalPrice, 0);

  console.log("totalAmount", totalAmount);
  return (
    <div>
      {/* <!-- Bill Details --> */}
      <div>
        <div className="billDetailsCard">
          <h4 className="mt-2 mb-8 text-xl font-bold text-center">
            Bill Details
          </h4>
          <div className="space-y-4">
            {/* <!-- sub total --> */}
            <div className="flex items-center justify-between">
              <p>Sub Total</p>
              <p>
                BDT <span className="lws-subtotal">{totalAmount}</span>
              </p>
            </div>
            {/* <!-- Discount --> */}
            <div className="flex items-center justify-between">
              <p>Discount</p>
              <p>
                BDT <span className="lws-discount">0</span>
              </p>
            </div>
            {/* <!-- VAT --> */}
            <div className="flex items-center justify-between">
              <p>VAT</p>
              <p>
                BDT <span className="vat">0</span>
              </p>
            </div>
            {/* <!-- Total --> */}
            <div className="flex items-center justify-between pb-4">
              <p className="font-bold">TOTAL</p>
              <p className="font-bold">
                BDT <span className="lws-total">{totalAmount}</span>
              </p>
            </div>
            <button className="placeOrderbtn">place order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartForm;
