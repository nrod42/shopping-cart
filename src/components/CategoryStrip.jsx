import React, { useState, useEffect } from "react";
import products from "../data/products";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import formatCurrency from "../functions/formatCurrency";
import ItemCard from "./ItemCard";


const CategoryStrip = ({category}) => {

  return (
    <div className="m5-3 mb-5">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="mb-3" style={{textTransform: "capitalize"}}>{category}</h3>
        <p>Show More</p>
      </div>
      <Row md={5}>
        {products.filter((item) => item.category === category).slice(0,5).map((item, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2}>
            <ItemCard {...item}/>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryStrip;
