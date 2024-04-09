import React, { useState, useEffect } from "react";
import products from "../data/products";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import formatCurrency from "../functions/formatCurrency";
import ItemCard from "./ItemCard";


const CategoryStrip = ({category}) => {
  // const [products, setProducts] = useState([...products]);

  // useEffect(() => {
  //   setProducts(products.filter((item) => item.category === category));
  // }, [])


  return (
    <div className="m5-3 mb-5">
      <h3 className="mb-3">{category}</h3>
      <Row md={5}>
        {products.filter((item) => item.category === category).slice(0,5).map((item, index) => (
          <Col key={index}>
            <ItemCard {...item}/>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CategoryStrip;
