import style from "../style/order.module.css";

const Order = () => {
  return (
    <div className={style.container}>
      <div className={style.wraper}>
        <div className={style.price}>
          <p>subtotal</p>
          <p>$84.30</p>
        </div>

        <div className={style.delivery}>
          <p>Shipping</p>
          <p>standard</p>
        </div>

        <div className={style.total}>
          <p>Total</p>
          <p>$84.30</p>
        </div>

        <div className={style.input}>
          <button>checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
