import ImgCarousel from "../components/ImgCarousel";
import products from "../data/products";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div className="homePage">
      <Container className="mb-5">
        <h1>Home</h1>
        <p>Welcome to the only shop that matters</p>
      </Container>
      <ImgCarousel array={products} />

      <Container className="mt-5">
        <Row md={3}>
          <Col className="text-center">
            <img src={products[0].imgUrl} style={{ height: "200px" }} />
          </Col>
          <Col className="text-center">
            <img src={products[0].imgUrl} style={{ height: "200px" }} />
          </Col>
          <Col className="text-center">
            <img src={products[0].imgUrl} style={{ height: "200px" }} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
