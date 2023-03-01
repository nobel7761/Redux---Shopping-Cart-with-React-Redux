import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  const [currentPage, setCurrentPage] = useState("products");

  const handleHomeClick = () => {
    setCurrentPage("products");
  };

  const handleCartClick = () => {
    setCurrentPage("cart");
  };

  return (
    <div className="App">
      <Navbar
        handleHomeClick={handleHomeClick}
        handleCartClick={handleCartClick}
      />

      <main className="py-16">
        {/* products */}
        {currentPage === "products" && <Products />}

        {/* cart */}
        {currentPage === "cart" && <Cart />}
      </main>
    </div>
  );
}

export default App;
