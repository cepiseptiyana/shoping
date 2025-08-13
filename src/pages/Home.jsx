// feature
import HeroSection from "../features/heroSection/Hero.jsx";
import Product from "../features/productCard/ProductCard.jsx";
import HighlightsMenu from "../features/HighlightsMenu/HighlightsMenu.jsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HighlightsMenu />
      <Product />
    </>
  );
};

export default Home;
