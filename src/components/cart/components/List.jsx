import style from "../style/list.module.css";

// components
import Empty from "./Empty";

const List = ({
  data,
  empty,
  handleChangeQuantity,
  handleAddQuantity,
  handleReduceQuantity,
  handleTotalCheckout,
  handleTranslateDelete,
  translatecss,
}) => {
  const list = data.map((data, index) => {
    return (
      <li key={index} className={style.item}>
        <div className={style.change}>
          <div className={style.checkbox}>
            <input
              type="checkbox"
              value={data.totalDelivery}
              onChange={(e) =>
                handleTotalCheckout(e, data.id, data.size, data.delivery)
              }
            />
            <p>{data.title}</p>
          </div>
          <p onMouseOver={handleTranslateDelete}>ubah</p>
        </div>

        <div className={style.data}>
          <div className={style.image}>
            <img src={data.image} alt="" />
          </div>

          <div className={style.text}>
            <p>size: {data.size}</p>
            <p>delivery: ${data.delivery}</p>
            <p>price: ${data.price}</p>
            <p className={style.total}>total: ${data.totalDelivery}</p>

            <div className={style.quantity}>
              <input
                type="number"
                // id="quantity" // gaboleh sama id jika input ini looping
                name="quantity"
                min="1"
                max={data.stock}
                value={data.quantity}
                onChange={(e) => handleChangeQuantity(data, e.target.value)}
              ></input>

              <div className={style.count}>
                <p onClick={() => handleAddQuantity(data)}>+</p>
                <p onClick={() => handleReduceQuantity(data)}>-</p>
              </div>
            </div>
          </div>

          <div
            className={`${style.delete} ${translatecss ? style.translate : ""}`}
          >
            <p>delete</p>
          </div>
        </div>
      </li>
    );
  });

  return <ul className={style.wraper}>{empty ? <Empty /> : list}</ul>;
};

export default List;
