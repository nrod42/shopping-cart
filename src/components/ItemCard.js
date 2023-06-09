import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import formatCurrency from "../functions/formatCurrency";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";

const ItemCard = ({ id, title, price, imgUrl }) => {
  const { setCart, setProductId } = useContext(CartContext);

  const [itemQty, setItemQty] = useState("1");

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const addToCart = (quantity) => {
    setCart((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: quantity }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + quantity };
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

  const tooltipTimeout = () => {
    setShow(!show);
    setTimeout(() => {
      setShow((current) => !current);
    }, 2000);
  };

  const handleProductPage = () => {
    setProductId(id);
  };

  return (
    <Card style={{ border: "none" }}>
      <Card.Link as={Link} to={`/shopping-cart/products/id:${id}`}>
        <Card.Img
          variant="top"
          src={imgUrl}
          height="200px"
          style={{ objectFit: "contain" }}
          onClick={handleProductPage}
        />
      </Card.Link>
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
            ref={target}
            onClick={tooltipTimeout}
          >
            Add To Cart
          </Button>
          <Overlay target={target.current} show={show} placement="bottom">
            {(props) => <Tooltip {...props}>Added to cart!</Tooltip>}
          </Overlay>
        </form>
      </Card.Body>
    </Card>
  );
};

export default ItemCard;
