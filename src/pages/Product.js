import React, { useState, useEffect, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../App";
import products from "../data/products";
import formatCurrency from "../functions/formatCurrency";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

const Product = () => {
  const { cart, setCart } = useContext(CartContext);

  const { "*": productId } = useParams(); // Retrieve the productId from the URL using a wildcard parameter

  const [item, setItem] = useState(null);
  const [show, setShow] = useState(false);
  const [itemQty, setItemQty] = useState("1");

  const target = useRef(null);

  const addToCart = () => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + itemQty }
            : cartItem
        )
      );
    } else {
      const newItem = { id: item.id, quantity: itemQty };
      setCart((prevCart) => [...prevCart, newItem]);
    }
  };

  const handleQtyChange = (e) => {
    setItemQty(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart(parseInt(itemQty));
  };

  const tooltipTimeout = () => {
    setShow(!show);
    setTimeout(() => {
      setShow((current) => !current);
    }, 2000);
  };

  useEffect(() => {
    const product = products.find(
      (product) => product.id === parseInt(productId)
    );
    setItem(product);
  }, [productId]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mb-5">
      <Row>
        <Col lg={3} sm={12}>
          <img
            src={item.imgUrl}
            alt={item.title}
            style={{ height: "auto", width: "100%" }}
          />
        </Col>
        <Col lg={9} sm={12}>
          <h1>{item.title}</h1>
          <p>{formatCurrency(item.price)}</p>
          <p>{item.description}</p>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "grid",
              gap: "10px",
              gridTemplateColumns: "25% 1fr",
            }}
          >
            <input
              type="number"
              name="itemQty"
              min="1"
              onChange={handleQtyChange}
              value={itemQty}
            ></input>
            <Button
              style={{ background: "#912F40", border: "1px solid #912F40" }}
              type={"submit"}
              ref={target}
              onClick={tooltipTimeout}
            >
              Add To Cart
            </Button>
            <Overlay target={target.current} show={show} placement="bottom">
              {(props) => <Tooltip {...props}>Added to cart!</Tooltip>}
            </Overlay>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
