import ImgCarousel from "../components/ImgCarousel";
import products from '../data/products'

const Home = () => {
  return (
    <div className="homePage" style={{ minHeight: "100vh" }}>
      <h1>Home</h1>
      <p>Welcome to the only shop that matters</p>
      <ImgCarousel array={products}/>
    </div>
  );
};

export default Home;
