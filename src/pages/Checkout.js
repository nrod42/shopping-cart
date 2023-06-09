import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../App";
import CartItem from "../components/CartItem";
import formatCurrency from "../functions/formatCurrency";
import products from "../data/products";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  const subtotal = cart.reduce(
    (total, current) =>
      total +
      products.find((item) => item.id === current.id).price * current.quantity,
    0
  );

  const tax = subtotal * 0.08875;
  const shipping = subtotal * 0.1;
  const total = subtotal + tax + shipping;

  return (
    <Container className="mb-5">
      <h1>Shopping Cart</h1>
      <Row xs={1} md={2} className="mt-5 checkoutPage">
        <Col md={9}>
          {cart.length === 0
            ? "Empty"
            : cart.map((item) => <CartItem item={item} />)}
        </Col>
        <Col
          md={3}
          style={{
            position: "relative",
          }}
        >
          <div
            style={{
              position: "fixed",
              backgroundColor: "#e0e0e0",
              borderRadius: "10px",
              padding: "1rem",
            }}
          >
            <h2>Summary</h2>
            <h3>
              Items:{" "}
              {cart.reduce((total, current) => {
                return (total += current.quantity);
              }, 0)}
            </h3>
            <p>Sub-total: {formatCurrency(subtotal)}</p>
            <p>Tax: {formatCurrency(tax)}</p>
            <p>Shipping: {formatCurrency(shipping)}</p>
            <h3>Total: {formatCurrency(total)}</h3>
          </div>
        </Col>
      </Row>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Link to="/shopping-cart/store">
          <Button variant="secondary">Back to shop</Button>
        </Link>
        <div>
          <Button variant="success">Place Order</Button>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
