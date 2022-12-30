import React, { useState } from "react";
import ItemCard from "../components/ItemCard";
import CategoryNav from "../components/CategoryNav";
import products from "../data/products";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Store = () => {
  const [showProducts, setShowProducts] = useState(products);

  const showAll = () => {
    setShowProducts(products);
  };

  const showFurniture = () => {
    setShowProducts(products.filter((item) => item.category === "furniture"));
  };

  const showClothes = () => {
    setShowProducts(products.filter((item) => item.category === "clothes"));
  };

  const showElectronics = () => {
    setShowProducts(products.filter((item) => item.category === "electronics"));
  };

  const showAppliances = () => {
    setShowProducts(products.filter((item) => item.category === "appliances"));
  };

  return (
    <Container className="mb-5">
      <div className="storePage">
        <h1>Store</h1>
        <CategoryNav
          showAll={showAll}
          showFurniture={showFurniture}
          showClothes={showClothes}
          showElectronics={showElectronics}
          showAppliances={showAppliances}
        />
        <Row xs={1} sm={2} md={3} lg={4} className="g-5">
          {showProducts.map((item) => (
            <Col key={item.id}>
              <ItemCard {...item} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default Store;
