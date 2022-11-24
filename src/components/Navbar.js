import React, { useState, useContext } from "react";
import { CartContext } from "../App";
import {
  Container,
  Offcanvas,
  Button,
  Nav,
  Navbar as NavbarBs,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart, setCart } = useContext(CartContext);

  //Bootstrap offcanvas states
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <NavbarBs
      sticky="top"
      className="bg-white shadow-sm mb-3"
      style={{ color: "white" }}
    >
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{
            height: "3rem",
            width: "3rem",
            position: "relative",
            textAlign: "center",
          }}
          variant="outline-primary"
          className="rounded-circle d-flex align-items-center justify-content-center"
          onClick={handleShow}
        >
          <img
            src="/imgs/shoppingCart.svg"
            alt={"shopping cart button"}
            style={{ height: "1.8rem" }}
          ></img>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
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
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          // scroll="false"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;