import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ItemCard from "../components/ItemCard";
import products from "../data/products.json";

const Store = () => {
  return (
    <div className="storePage">
      <h1>Store</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-5">
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
