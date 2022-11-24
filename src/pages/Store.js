import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCard from "../components/ItemCard";
import products from "../data/products.json";

const Store = () => {
  return (
    <div className="storePage">
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-5">
        {products.map((item) => (
          <Col key={item.id}>
            <ItemCard {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Store;
