// feature
import HeroSection from "../features/heroSection/components/HeroSection.jsx";
import Product from "../features/ProductCard/ProductCard.jsx";
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
