import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import { Provider } from "react-redux";
import store from "./redux/store";
import ProductsContainer from "./components/Products/ProductsContainer";

function App() {
  const [currentPage, setCurrentPage] = useState("products");

  const handleHomeClick = () => {
    setCurrentPage("products");
  };

  const handleCartClick = () => {
    setCurrentPage("cart");
  };

  return (
    <Provider store={store}>
      <Navbar
        handleHomeClick={handleHomeClick}
        handleCartClick={handleCartClick}
      />

      <main className="py-16">
        {currentPage === "products" && <ProductsContainer />}
        {currentPage === "cart" && <Cart />}
      </main>
    </Provider>
  );
}

export default App;
