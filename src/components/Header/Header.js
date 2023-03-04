import React from "react";
import { useSelector } from "react-redux";
import Logo from "../../assets/images/logo.png";

const Header = ({ handlerContainer }) => {
  const carts = useSelector((state) => state.products.carts);
  const totalCartsItem = carts.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={Logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <p
            className="navHome cursor-pointer"
            id="lws-home"
            onClick={() => handlerContainer("products")}
          >
            Home
          </p>
          <p
            className="navCart cursor-pointer"
            id="lws-cart"
            onClick={() => handlerContainer("carts")}
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{totalCartsItem}</span>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Header;
