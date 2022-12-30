import ImgCarousel from "../components/ImgCarousel";
import products from "../data/products";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <div className="homePage" style={{ minHeight: "100vh" }}>
      <Container className="mb-5">
        <h1>Home</h1>
        <p>Welcome to the only shop that matters</p>
      </Container>
      <ImgCarousel array={products} />
    </div>
  );
};

export default Home;
