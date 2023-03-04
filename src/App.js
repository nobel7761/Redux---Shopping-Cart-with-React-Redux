import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import CartsContainer from "./components/Carts/CartsContainer";
import Header from "./components/Header/Header";
import ProductsContainer from "./components/Products/ProductsContainer";
import store from "./redux/store";

function App() {
  const [selectedContainer, setSelectedContainer] = useState("products");

  const handlerContainer = (container) => {
    setSelectedContainer(container);
  };

  return (
    <Provider store={store}>
      <Header handlerContainer={handlerContainer} />

      {selectedContainer === "products" ? (
        <ProductsContainer />
      ) : (
        <CartsContainer />
      )}
    </Provider>
  );
}

export default App;
