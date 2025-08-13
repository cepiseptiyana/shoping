// react
import { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "@/middleware/combineData/combineDataSlice.js";

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

  function handleNavigasi(name) {
    dispatch(setFilter(name));
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
