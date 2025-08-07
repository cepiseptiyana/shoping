// assets
import loading from "@/assets/loading.gif";

// style
import style from "../style/loading.module.css";

const Loading = () => {
  return (
    <div className={style.container}>
      <img src={loading} alt="" />
    </div>
  );
};
export default Loading;
