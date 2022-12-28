import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import products from "../data/products.json";

const ImgCarousel = ({array}) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {array.map((item, index) => (
        <Carousel.Item interval={5000} style={{ height: '500px', width: '100%'}} key={index}>
          <img
            className="d-block w-100"
            src={item.imgUrl}
            alt={item.title}
            style={{ height: '100%', width: 'auto', objectFit: 'contain'}}
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
