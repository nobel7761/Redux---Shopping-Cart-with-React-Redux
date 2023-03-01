import React from "react";
import logo from "../../assets/images/logo.png";

const Navbar = ({ handleHomeClick, handleCartClick }) => {
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <div>
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </div>

        <div className="flex gap-4">
          <p
            className="navHome cursor-pointer"
            id="lws-home"
            onClick={handleHomeClick}
          >
            Home
          </p>
          <div
            className="navCart cursor-pointer"
            id="lws-cart"
            onClick={handleCartClick}
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
