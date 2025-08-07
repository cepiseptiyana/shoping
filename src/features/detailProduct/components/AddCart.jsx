// style
import style from "../style/addCart.module.css";

const AddCart = (props) => {
  const {
    handleChangeSize,
    size,
    data,
    quantity,
    handleChangeQuantity,
    handleAddToCart,
    handleAddQuantity,
    handleReduceQuantity,
  } = props;

  return (
    <div className={style.form}>
      <form action="" onSubmit={handleAddToCart}>
        <div className={style.size}>
          <label htmlFor="size">Size</label>
          <select name="" id="size" value={size} onChange={handleChangeSize}>
            <option value="L">L</option>
            <option value="X">X</option>
            <option value="M">M</option>
          </select>
        </div>

        <div className={style.addCart}>
          <div className={style.quantity}>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              max={data.stock}
              value={quantity}
              onChange={(e) => handleChangeQuantity(e.target.value)}
            ></input>

            <div className={style.count}>
              <p onClick={handleAddQuantity}>+</p>
              <p onClick={handleReduceQuantity}>-</p>
            </div>
          </div>

          <button className={style.add} type="submit">
            add to cart
          </button>

          <button className={style.fav}>favourite</button>
        </div>
      </form>
    </div>
  );
};

export default AddCart;
