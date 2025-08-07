// react
import { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "@/middleware/combineData/combineDataSlice.js";
import { fetchCombinedData } from "@/middleware/combineData/combineDataThunk.js";

// components
import List from "./component/List";

// react router
import { useNavigate } from "react-router";

// global utils
import { icons } from "@/utils/icons";

// style
import style from "./style/HighlightsMenu.module.css";

const HighlightsMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, currentPage, limit } = useSelector(
    (state) => state.combinedData
  );

  useEffect(() => {
    const skip = (currentPage - 1) * limit;
    dispatch(fetchCombinedData({ limit: 100, skip: 0 }));
  }, [dispatch, currentPage, limit]);

  function handleNavigasi(name) {
    const data2 = data.filter((data) => {
      return data.category === name;
    });

    dispatch(setFilter(data2));
    navigate("/products");
  }

  return (
    <>
      <section className={style.container}>
        <List icons={icons} style={style} handleNavigasi={handleNavigasi} />
      </section>
    </>
  );
};

export default HighlightsMenu;
