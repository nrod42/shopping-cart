import React, { useContext } from "react";
import { CartContext } from "../App";
import formatCurrency from "../functions/formatCurrency";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ItemCard = ({ id, title, price, imgUrl }) => {
  const { setCart } = useContext(CartContext);

  const addToCart = () => {
    setCart((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  // const removeFromCart = () {
  //   setCart((currentItems) => {
  //     if (currentItems.find((item) => item.id === id))
  //   })
  // }

  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-center mb-4">
          <span className="fs-2">{title}</span>
          <span className="ms-2" style={{ color: "gray" }}>
            {formatCurrency(price)}
          </span>
        </Card.Title>
        <Button
          style={{ background: "#912F40", border: "1px solid #912F40" }}
          onClick={addToCart}
        >
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
