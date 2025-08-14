// react
import { useEffect } from "react";

// components
import List from "./component/List";

// style
import style from "./style/HighlightsMenu.module.css";

const HighlightsMenu = (props) => {
  const {
    navigate,
    dispatch,
    fetchDataHighlight,
    setFilter,
    resetData,
    icons,
  } = props;

  useEffect(() => {
    dispatch(fetchDataHighlight());

    // return () => {
    //   dispatch(resetData()); // ✅ Cleanup: reset saat unmount
    // };
  }, []);

  function handleNavigasi(name) {
    navigate("/products");
    dispatch(setFilter(name));
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
