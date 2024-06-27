import ImgCarousel from "../components/ImgCarousel";
import products from "../data/products";
import Container from "react-bootstrap/Container";
import CategoryStrip from "../components/CategoryStrip";

const Home = () => {
  return (
    <div className="homePage">
      <Container className="mb-5">
        <h1>ShopMart</h1>
        <p>Welcome to the only shop that matters</p>
        <ImgCarousel array={products} />
      {/* </Container> */}
      

      {/* <Container className="mt-5"> */}
        <div class="mt-5">
          <CategoryStrip category={"furniture"}/>
          <CategoryStrip category={"clothes"}/>
          <CategoryStrip category={"electronics"}/>
          <CategoryStrip category={"appliances"}/>
        </div>
      </Container>
    </div>
  );
};

export default Home;
