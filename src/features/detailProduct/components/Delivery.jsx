import style from "../style/delivery.module.css";

const Delivery = (props) => {
  const { data } = props;

  return (
    <div className={style.delivery}>
      <h1>delivery</h1>
      <p>
        free standard shipping on orders over $35 before tax, plus free return
      </p>

      <table className={style.table}>
        <thead>
          <tr className={style.row}>
            <th>type</th>
            <th>how long</th>
            <th>how much</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>standard delivery</td>
            <td>1 - 4 days</td>
            <td>${data.price}</td>
          </tr>
          <tr>
            <td>express delivery</td>
            <td>1 - 4 days</td>
            <td>${data.price * 2}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Delivery;
