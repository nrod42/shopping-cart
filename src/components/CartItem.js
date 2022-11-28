// import { CartContext } from "../App";
import products from "../data/products.json";

const CardItem = (props) => {
  const { id, quantity } = props.item;

  const { title, price, imgUrl } = products.find(
    (product) => product.id === id
  );

  const formatCurrency = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
  });

  const mainStyle = {
    display: "flex",
    alignItem: "center",
    justifyContent: "flex-start",
    gap: "1rem",
  };
  const imgStyle = { height: "100px", width: "100px" };

  return (
    <div style={mainStyle}>
      <div>
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
          <div>{formatCurrency.format(price * quantity)}</div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;