import products from "../data/products";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Product = () => {
  const id = window.location.pathname.split(":")[1];
  const item = products.find((item) => item.id === parseInt(id));
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
          <p>{item.price}</p>
          <p>{item.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
