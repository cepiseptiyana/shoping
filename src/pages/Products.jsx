// features
import ProductFilter from "@/features/productFilter/ProductFilter.jsx";

// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCombinedData } from "@/middleware/combineData/combineDataThunk.js";
import {
  setPage,
  setSortOption,
  setFilterCheckbox,
  resetData,
} from "@/middleware/combineData/combineDataSlice.js";

// react router
import { useNavigate } from "react-router";

// feather
import feather from "feather-icons";

// global utils
import { icons } from "@/utils/icons";

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selector = useSelector((state) => state.combinedData);

  return (
    <>
      <ProductFilter
        dispatch={dispatch}
        navigate={navigate}
        selector={selector}
        fetchCombinedData={fetchCombinedData}
        resetData={resetData}
        feather={feather}
        icons={icons}
        setSortOption={setSortOption}
        setFilterCheckbox={setFilterCheckbox}
        setPage={setPage}
      />
    </>
  );
};
export default Products;
