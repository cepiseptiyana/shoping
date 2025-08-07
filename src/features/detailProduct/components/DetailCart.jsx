// component
import AddCart from "./AddCart";
import Delivery from "./Delivery";
import Return from "./Return";
import Stock from "./Stock";

// style
import style from "../style/detailCart.module.css";

const DetailCart = (props) => {
  const {
    data,
    handleChangeSize,
    size,
    quantity,
    handleChangeQuantity,
    handleAddToCart,
    handleAddQuantity,
    handleReduceQuantity,
  } = props;
  console.log(data);

  return (
    <div className={style.detailCart}>
      <div className={style.price}>
        <h1>${data.price}</h1>
        <h1>rating {data.rating}</h1>
      </div>

      <div className={style.reviews}>
        <p>{data.reviews.length} reviews</p>
      </div>

      <AddCart
        handleChangeSize={handleChangeSize}
        size={size}
        data={data}
        quantity={quantity}
        handleChangeQuantity={handleChangeQuantity}
        handleAddToCart={handleAddToCart}
        handleAddQuantity={handleAddQuantity}
        handleReduceQuantity={handleReduceQuantity}
      />

      <Delivery data={data} />

      <Return data={data} />

      <Stock data={data} />
    </div>
  );
};

export default DetailCart;
