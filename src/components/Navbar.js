import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../App";
import CartItem from "./CartItem";
import products from "../data/products";
import formatCurrency from "../functions/formatCurrency";
import NavbarBs from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import cartIcon from "../imgs/shopping-cart.svg";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  //Opens and closes Bootstrap offcanvas
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <NavbarBs
      sticky="top"
      className="bg-white shadow-sm mb-3 ps-3 pe-3"
      style={{ color: "white" }}
    >
      <Nav className="me-auto">
        <Nav.Link to="/shopping-cart" as={NavLink}>
          SHOPMART
        </Nav.Link>
        <Nav.Link to="/shopping-cart" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/shopping-cart/store" as={NavLink}>
          Store
        </Nav.Link>
      </Nav>
      <Button
        style={{
          height: "3rem",
          width: "3rem",
          position: "relative",
          textAlign: "center",
          borderColor: "#912F40",
        }}
        variant="outline-primary"
        className="rounded-circle d-flex align-items-center justify-content-center"
        onClick={handleShow}
        id="cartBtn"
      >
        <img
          src={cartIcon}
          alt="shopping cart button"
          style={{ height: "1.8rem" }}
        />
        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            color: "white",
            backgroundColor: "#912F40",
            fontSize: "0.75rem",
            width: "1.5rem",
            height: "1.5rem",
            position: "absolute",
            bottom: "0",
            left: "0",
            transform: "translate(-25%, 25%)",
          }}
        >
          {cart.reduce((total, current) => {
            return (total += current.quantity);
          }, 0)}
        </div>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{ fontWeight: "bold" }}>
            Shopping Cart
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          {cart.length === 0
            ? "Browse the stores and add items to your cart!"
            : cart.map((item) => <CartItem item={item} />)}
        </Offcanvas.Body>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
            padding: "1.1rem",
          }}
        >
          {`Total:
          ${formatCurrency(
            cart.reduce(
              (total, current) =>
                total +
                products.find((item) => item.id === current.id).price *
                  current.quantity,
              0
            )
          )}`}
        </div>
        <div style={{ padding: "1.1rem", textAlign: "center" }}>
          <Nav.Link
            to={"/shopping-cart/checkout"}
            as={NavLink}
            onClick={handleClose}
          >
            <Button variant="success">Checkout</Button>
          </Nav.Link>
        </div>
      </Offcanvas>
    </NavbarBs>
  );
};

export default Navbar;
