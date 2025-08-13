import style from "../style/stock.module.css";

const Stock = (props) => {
  const { data } = props;

  return (
    <div className={style.stock}>
      <p>stock: {data.stock}</p>
    </div>
  );
};

export default Stock;
