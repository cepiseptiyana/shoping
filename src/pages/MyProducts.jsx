// features
import HeroSection from "../features/heroSection/components/HeroSection";
import HighlightsMenu from "../features/HighlightsMenu/HighlightsMenu";
import ProductCard from "../features/productCard/ProductCard";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCombinedData,
  fetchDataHighlight,
} from "@/middleware/combineData/combineDataThunk.js";
import {
  setFilter,
  resetData,
} from "@/middleware/combineData/combineDataSlice.js";

// react router
import { useNavigate } from "react-router";

// global utils
import { icons } from "@/utils/icons";

const MyProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <HeroSection />
      <HighlightsMenu
        dispatch={dispatch}
        navigate={navigate}
        fetchDataHighlight={fetchDataHighlight}
        resetData={resetData}
        setFilter={setFilter}
        icons={icons}
      />
      <ProductCard
        fetchCombinedData={fetchCombinedData}
        navigate={navigate}
        dispatch={dispatch}
        useSelector={useSelector}
        resetData={resetData}
      />
    </>
  );
};

export default MyProducts;
