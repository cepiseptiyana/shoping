import style from "../style/totalCheck.module.css";

const TotalCheckout = (props) => {
  const { totalCheckouts } = props;

  return (
    <div className={style.wraper}>
      <h1 className={style.head}>total: {totalCheckouts}</h1>
      <button>checkout</button>
    </div>
  );
};

export default TotalCheckout;
