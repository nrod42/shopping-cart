import React, { useContext } from "react";
import { CartContext } from "../App";
import products from "../data/products.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ItemCard = ({ id, title, price, imgUrl }) => {
  const { cart, setCart } = useContext(CartContext);

  const formatCurrency = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
  });

  // when add to cart is clicked,
  // if already there, add 1 to quant
  //if none found in cart, add new object with id and qunt which is equal to 1
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
    console.log(cart);
  };

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
            {formatCurrency.format(price)}
          </span>
        </Card.Title>
        <Button onClick={addToCart}>Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
