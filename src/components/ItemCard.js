import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";
import formatCurrency from "../functions/formatCurrency";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ItemCard = ({ id, title, price, imgUrl }) => {
  const { cart, setCart } = useContext(CartContext);

  const [itemQty, setItemQty] = useState("1");

  // when rerender, qty amount dissappears...do we care?
  // useEffect(() => {
  //   setItemQty(cart.find((item) => item.id === id)?.quantity);
  // }, [cart, id]);

  const addToCart = (quantity) => {
    setCart((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: quantity }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: quantity };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleQtyChange = (e) => {
    setItemQty(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToCart(parseInt(itemQty));
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
        <Card.Title className="d-flex flex-wrap justify-content-between align-items-center mb-4">
          <span className="fs-4">{title}</span>
          <span className="ms-2" style={{ color: "gray" }}>
            {formatCurrency(price)}
          </span>
        </Card.Title>
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
          >
            Add To Cart
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
