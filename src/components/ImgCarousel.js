import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import products from "../data/products.json";

const ImgCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {products.map((item) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../public/imgs/table.avif"
            alt={item.title}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImgCarousel;
