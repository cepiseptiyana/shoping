import style from "../style/delivery.module.css";

const Delivery = (props) => {
  const { data, handleChangeDelivery } = props;

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
            <th>choice</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>standard delivery</td>
            <td>1 - 7 days</td>
            <td>${data.price}</td>
            <td>
              <input
                type="radio"
                id="standard"
                name="fav_language"
                value={data.price}
                onChange={(e) =>
                  handleChangeDelivery({
                    price: e.target.value,
                    type: "standard delivery",
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td>express delivery</td>
            <td>1 - 4 days</td>
            <td>${parseFloat(data.price + 3).toFixed(2)}</td>
            <td>
              <input
                type="radio"
                id="express"
                name="fav_language"
                value={parseFloat(data.price + 3).toFixed(2)}
                onChange={(e) =>
                  handleChangeDelivery({
                    price: e.target.value,
                    type: "express delivery",
                  })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Delivery;
