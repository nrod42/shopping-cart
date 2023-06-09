import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Checkout from "./pages/Checkout";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Product from "./pages/Product";
// import Container from "react-bootstrap/Container";

export const CartContext = React.createContext();

const App = () => {
  const [cart, setCart] = useState([]);
  const [productId, setProductId] = useState(""); // id of product the use has clicked on. Passed to the Product component to generate the product page for that item.

  return (
    <div className="App d-flex flex-column justify-content-space-between">
      <CartContext.Provider value={{ cart, setCart, productId, setProductId }}>
        <Navbar />
        <Routes>
          <Route path="/shopping-cart" element={<Home />} />
          <Route path="/shopping-cart/store" element={<Store />} />
          <Route
            path={`/shopping-cart/products/id:${productId}`}
            element={<Product />}
          />
          <Route path="/shopping-cart/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </CartContext.Provider>
    </div>
  );
};

export default App;
