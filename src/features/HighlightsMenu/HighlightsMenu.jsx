// components
import List from "./component/List";

// global utils
import { icons } from "@/utils/icons";

// style
import style from "./style/HighlightsMenu.module.css";

const HighlightsMenu = () => {
  return (
    <>
      <section className={style.container}>
        <List icons={icons} style={style} />
      </section>
    </>
  );
};

export default HighlightsMenu;
