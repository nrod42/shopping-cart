import React, { useContext } from "react";
import { CartContext } from "../App";
import products from "../data/products";
import formatCurrency from "../functions/formatCurrency";
import Button from "react-bootstrap/Button";
import trashIcon from "../imgs/trash.svg";

const CartItem = (props) => {
  const { cart, setCart } = useContext(CartContext);

  const { id, quantity } = props.item;

  const { title, price, imgUrl } = products.find(
    (product) => product.id === id
  );

  const handleDelete = () => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedElements = [...cart];
      updatedElements.splice(index, 1);
      setCart(updatedElements);
    }
  };

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "start",
  };

  const imgStyle = {
    height: "100%",
    maxWidth: "100%",
    objectFit: "contain",
  };

  const delBtnStyle = {
    height: "2.5rem",
    width: "2.5rem",
    placeSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img style={imgStyle} src={imgUrl} alt={title} />
      </div>
      <div>
        <h5>{title}</h5>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          <div>Qty: {quantity}</div>
          <div>{formatCurrency(price * quantity)}</div>
        </div>
      </div>

      <Button variant="danger" style={delBtnStyle} onClick={handleDelete}>
        <img
          src={trashIcon}
          alt="delete button"
          style={{ height: "1.5rem" }}
        ></img>
      </Button>
    </div>
  );
};

export default CartItem;
