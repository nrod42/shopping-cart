import { Button } from "react-bootstrap";
import products from "../data/products.json";
import formatCurrency from "../functions/formatCurrency";

const CardItem = (props) => {
  const { id, quantity } = props.item;

  const { title, price, imgUrl } = products.find(
    (product) => product.id === id
  );

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 3fr 1fr",
    gap: "1rem",
    alignItems: "start",
    justifyContent: "start",
  };

  const imgStyle = {
    height: "100%",
    width: "100%",
    borderRadius: "5px",
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
      <div style={{ height: "100px", width: "100px", borderRadius: "5px" }}>
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

      <Button variant="danger" style={delBtnStyle}>
        <img
          src="./imgs/trash.svg"
          alt="delete button"
          style={{ height: "1.5rem" }}
        ></img>
      </Button>
    </div>
  );
};

export default CardItem;
