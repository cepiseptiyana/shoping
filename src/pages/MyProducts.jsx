// features
import HeroSection from "../features/heroSection/components/HeroSection";
import HighlightsMenu from "../features/HighlightsMenu/HighlightsMenu";
import Products from "../features/myProducts/Products";

// redux
import { useDispatch } from "react-redux";
import { fetchDataHighlight } from "@/middleware/combineData/combineDataThunk.js";
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

      <Products />
    </>
  );
};

export default MyProducts;
