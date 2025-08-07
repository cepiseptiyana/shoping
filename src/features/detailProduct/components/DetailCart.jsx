const DetailCart = (props) => {
  const { data, style } = props;

  return (
    <div className={style.detailCart}>
      <div className={style.wraperPrice}>
        <h1>${data.price}</h1>
        <h1>rating {data.rating.rate}</h1>
      </div>

      <div className={style.delivery}>
        <h1>delivery</h1>
        <p>
          free standard shipping on orders over $35 before tax, plus free return
        </p>

        <table className={style.table}>
          <thead>
            <th>type</th>
            <th>how long</th>
            <th>how much</th>
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

      <div className={style.return}>
        <h1>return</h1>
        <p>
          you have 60 days to return the items using any of the following
          methods:{" "}
        </p>

        <ul>
          <li>free store return</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailCart;
