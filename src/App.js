import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Container from "react-bootstrap/Container";

export const CartContext = React.createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App d-flex flex-column justify-content-space-between">
      <CartContext.Provider value={{ cart, setCart }}>
        <Navbar />
        <Container className="mb-5">
          <Routes>
            <Route path="/shopping-cart" element={<Home />} />
            <Route path="/shopping-cart/store" element={<Store />} />
            <Route path="/shopping-cart/about" element={<About />} />
          </Routes>
        </Container>
        <footer className="mb-0 mt-auto">
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            © 2022 - Nigel Rodriguez
          </span>
        </footer>
      </CartContext.Provider>
    </div>
  );
}

export default App;
