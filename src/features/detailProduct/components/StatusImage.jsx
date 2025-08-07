// style
import style from "../style/image.module.css";

const StatusImage = (props) => {
  const { data } = props;

  return (
    <div className={style.wraperImage}>
      <header className={style.header}>
        <p>general info</p>
        <p>
          price <sup className={style.sup}>{data.price}</sup>
        </p>
      </header>

      <img src={data.thumbnail} alt="" />
    </div>
  );
};
export default StatusImage;
