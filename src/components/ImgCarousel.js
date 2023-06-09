import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

const ImgCarousel = ({ array }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ background: "black", padding: "40px", paddingBottom: "100px" }}
    >
      {array.map((item, index) => (
        <Carousel.Item
          interval={5000}
          style={{ height: "500px", width: "100%" }}
          key={index}
        >
          <h3
            style={{
              color: "white",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            {item.title}
          </h3>
          <Link to={`/shopping-cart/products/id:${item.id}`}>
            <img
              className="d-block w-100"
              src={item.imgUrl}
              alt={item.title}
              style={{ height: "100%", width: "auto", objectFit: "contain" }}
            />
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImgCarousel;
