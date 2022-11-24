import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";

export const CartContext = React.createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App bg-light">
      <CartContext.Provider value={{ cart, setCart }}>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </CartContext.Provider>
    </div>
  );
}

export default App;
